import React, { useEffect, useRef } from 'react';
import './Styles/Signin.css';
const Signin = () => {
 
  const natureBackgroundRef = useRef(null);
  useEffect(() => {
    const createLeaf = () => {
      if (!natureBackgroundRef.current) return;
      
      const leaf = document.createElement('i');
      leaf.className = 'fas fa-leaf leaf';
      
      const leftPos = Math.random() * 100;
      leaf.style.left = `${leftPos}%`;
      
      const size = 0.5 + Math.random() * 1.5;
      leaf.style.fontSize = `${size}em`;
      
      const duration = 5 + Math.random() * 10;
      leaf.style.animationDuration = `${duration}s`;
      
      const delay = Math.random() * 5;
      leaf.style.animationDelay = `${delay}s`;
      
      natureBackgroundRef.current.appendChild(leaf);
      
      setTimeout(() => {
        if (leaf.parentNode === natureBackgroundRef.current) {
          natureBackgroundRef.current.removeChild(leaf);
        }
      }, duration * 1000);
    };

    const leafInterval = setInterval(createLeaf, 500);
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
                  placeholder="••••••••" 
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
    </div>
  );
};

export default Signin;
