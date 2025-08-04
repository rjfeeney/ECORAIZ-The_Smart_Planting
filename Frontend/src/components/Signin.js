import React, { useEffect, useRef } from 'react';

const SignIn = () => {
  const natureBackgroundRef = useRef(null);
  
  useEffect(() => {
    // Create falling leaves animation
    const createLeaf = () => {
      if (!natureBackgroundRef.current) return;
      
      const leaf = document.createElement('i');
      leaf.className = 'fas fa-leaf leaf';
      
      // Random position
      const leftPos = Math.random() * 100;
      leaf.style.left = `${leftPos}%`;
      
      // Random size
      const size = 0.5 + Math.random() * 1.5;
      leaf.style.fontSize = `${size}em`;
      
      // Random animation duration
      const duration = 5 + Math.random() * 10;
      leaf.style.animationDuration = `${duration}s`;
      
      // Random delay
      const delay = Math.random() * 5;
      leaf.style.animationDelay = `${delay}s`;
      
      natureBackgroundRef.current.appendChild(leaf);
      
      // Remove leaf after animation completes
      setTimeout(() => {
        if (leaf.parentNode === natureBackgroundRef.current) {
          natureBackgroundRef.current.removeChild(leaf);
        }
      }, duration * 1000);
    };

    // Create leaves periodically
    const leafInterval = setInterval(createLeaf, 500);
    
    // Cleanup on component unmount
    return () => clearInterval(leafInterval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    alert('Sign in successful! Redirecting to dashboard...');
    console.log('Sign in attempt:', { email, password });
  };

  const handleSignupToggle = (e) => {
    e.preventDefault();
    alert('Redirecting to sign up page...');
  };

  return (
    <div className="signin-page">
      <div className="nature-background" ref={natureBackgroundRef}>
        <div className="corner-plant plant-left">
          <i className="fas fa-seedling"></i>
        </div>
        <div className="corner-plant plant-right">
          <i className="fas fa-seedling"></i>
        </div>
      </div>

      {/* Centering wrapper added here */}
      <div className="centering-wrapper">
        <div className="auth-container">
          <div className="auth-card">
            <div className="leaf-pattern"></div>
            <h2>Sign In to Your Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="you@example.com" 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  required 
                  placeholder="Password" 
                />
              </div>
              
              <div className="form-group">
                <div className="remember-container">
                  <div className="remember-me">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember" style={{ marginBottom: 0 }}>
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="forgot-password">Forgot password?</a>
                </div>
              </div>
              
              <button type="submit" className="auth-btn">Sign In</button>
            </form>
            
            <div className="social-login">
              <div className="social-divider">
                <span>Or continue with</span>
              </div>
              
              <div className="social-buttons">
                <div className="social-btn google">
                  <i className="fab fa-google"></i>
                </div>
                <div className="social-btn facebook">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="social-btn twitter">
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
            </div>
            
            <div className="auth-toggle">
              Don't have an account? <a href="#" onClick={handleSignupToggle}>Sign up</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
          background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
          min-height: 100vh;
          overflow: hidden;
        }

        .signin-page {
          position: center;
          min-height: 100vh;
        }

        /* NEW CENTERING WRAPPER */
        .centering-wrapper {
          position:center;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .nature-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
        }

        .leaf {
          position: absolute;
          top: -50px;
          font-size: 24px;
          color: rgba(76, 175, 80, 0.7);
          animation: falling linear forwards;
          opacity: 0.8;
        }

        @keyframes falling {
          to {
            transform: translateY(105vh) rotate(360deg);
            opacity: 0;
          }
        }

        .corner-plant {
          position: fixed;
          z-index: -1;
          opacity: 0.15;
          font-size: 150px;
          animation: growPlant 10s ease-in-out infinite alternate;
        }

        .plant-left {
          bottom: -40px;
          left: -30px;
          transform: rotate(15deg);
        }

        .plant-right {
          bottom: -40px;
          right: -30px;
          transform: rotate(-15deg);
        }

        @keyframes growPlant {
          0% { transform: scale(0.9) rotate(15deg); }
          100% { transform: scale(1.05) rotate(15deg); }
        }

        .leaf-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.05;
          //background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50,15 C60,5 80,5 85,15 C95,25 95,40 85,50 C75,60 60,60 50,50 C40,60 25,60 15,50 C5,40 5,25 15,15 C20,5 40,5 50,15 Z" fill="%2300796b"/></svg>');
          background-size: 80px;
          pointer-events: none;
          border-radius: 16px;
        }

        .auth-btn:hover {
          animation: pulseGreen 1s infinite;
        }

        @keyframes pulseGreen {
          0% { box-shadow: 0 0 0 0 rgba(0, 150, 136, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(0, 150, 136, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 150, 136, 0); }
        }

        .form-group input:focus {
          animation: inputGlow 1.5s infinite alternate;
        }

        @keyframes inputGlow {
          from { box-shadow: 0 0 0 2px rgba(0, 121, 107, 0.2); }
          to { box-shadow: 0 0 0 4px rgba(0, 121, 107, 0.4); }
        }

        .social-btn:hover {
          animation: bounce 0.5s;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .auth-container {
          width: 100%;
          max-width: 400px;
          padding: 20px;
        }

        .auth-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(56, 142, 60, 0.15);
          border: 1px solid rgba(76, 175, 80, 0.1);
          animation: fadeIn 0.5s ease-out;
          position: relative;
          overflow: hidden;
        }

        .auth-card h2 {
          color: #00796b;
          text-align: center;
          margin-bottom: 24px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #388E3C;
          font-weight: 600;
        }

        .form-group input {
          width: 100%;
          padding: 12px;
          border: 1px solid #b2dfdb;
          border-radius: 8px;
          font-size: 16px;
          background: #f0fff0;
          transition: border-color 0.3s;
        }

        .form-group input:focus {
          border-color: #00796b;
          outline: none;
        }

        .auth-btn {
          width: 100%;
          padding: 12px;
          background: #009688;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .auth-btn:hover {
          background: #00796b;
        }

        .auth-toggle {
          text-align: center;
          margin-top: 20px;
          color: #555;
        }

        .auth-toggle a {
          color: #009688;
          text-decoration: none;
          font-weight: 600;
        }

        .auth-toggle a:hover {
          text-decoration: underline;
        }

        .social-login {
          margin-top: 25px;
          text-align: center;
        }

        .social-divider {
          display: flex;
          align-items: center;
          margin: 20px 0;
        }

        .social-divider::before,
        .social-divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid #b2dfdb;
        }

        .social-divider span {
          padding: 0 10px;
          color: #00796b;
          font-weight: 600;
        }

        .social-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .social-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
          cursor: pointer;
          transition: transform 0.3s;
        }

        .social-btn.google {
          background: #DB4437;
        }

        .social-btn.facebook {
          background: #4267B2;
        }

        .social-btn.twitter {
          background: #1DA1F2;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .remember-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .remember-me {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .remember-me input[type="checkbox"] {
          width: auto;
          margin: 0;
          position: relative;
          top: 2px;
        }

        .forgot-password {
          font-size: 14px;
          color: #009688;
        }

        @media (max-width: 480px) {
          .auth-card {
            padding: 20px;
          }
          
          .auth-card h2 {
            font-size: 1.5rem;
          }
          
          .remember-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          
          .forgot-password {
            align-self: flex-end;
          }
        }
      `}</style>
    </div>
  );
};

export default SignIn;