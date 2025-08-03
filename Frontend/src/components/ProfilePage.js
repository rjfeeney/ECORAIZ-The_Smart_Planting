import React, { useState } from 'react';
import { FiEdit2, FiSave, FiUser, FiMail, FiMapPin } from 'react-icons/fi';
import './Styles/Profile.css'; 
const SimpleProfilePage = () => {
  const [user, setUser] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    location: 'San Francisco, CA',
    picture: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, you would save to backend here
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <h1>My Profile</h1>
          <button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className={`edit-btn ${isEditing ? 'save' : ''}`}
            aria-label={isEditing ? 'Save changes' : 'Edit profile'}
          >
            {isEditing ? <FiSave /> : <FiEdit2 />}
          </button>
        </div>

        <div className="profile-image-container">
          <img
            src={user.picture}
            alt="Profile"
            className="profile-image"
          />
          {isEditing && (
            <button className="change-photo-btn">
              Change Photo
            </button>
          )}
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <div className="detail-icon">
              <FiUser />
            </div>
            <div className="detail-content">
              <label>Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                  className="detail-input"
                />
              ) : (
                <p>{user.name}</p>
              )}
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <FiMail />
            </div>
            <div className="detail-content">
              <label>Email Address</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  className="detail-input"
                />
              ) : (
                <p>{user.email}</p>
              )}
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <FiMapPin />
            </div>
            <div className="detail-content">
              <label>Location</label>
              {isEditing ? (
                <input
                  type="text"
                  name="location"
                  value={user.location}
                  onChange={handleInputChange}
                  className="detail-input"
                />
              ) : (
                <p>{user.location}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleProfilePage;