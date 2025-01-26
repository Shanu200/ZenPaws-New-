import React, { useState } from "react";
import "./SignForm.css";

const SignForm = () => {
  const [signIn, toggle] = useState(true);
  return (
    <div className={`auth-container ${signIn ? "" : "sign-up-mode"}`}>
      <div className="form-container">
        {/* Sign In Form */}
        <div className={`form sign-in-form`}>
          <h2>Sign In</h2>
          <form>
            <div className="input-field">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="input-field">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="options">
              <a href="#">Forgot Password?</a>
            </div>
            <button className="btn">Sign In</button>
          </form>
        </div>

        {/* Sign Up Form */}
        <div className={`form sign-up-form`}>
          <h2>Create Account</h2>
          <form>
            <div className="input-field">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div className="input-field">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="input-field">
              <label>Password</label>
              <input type="password" placeholder="Create a password" />
            </div>
            <button className="btn">Sign Up</button>
          </form>
        </div>
      </div>

      {/* Panel Section */}
      <div className="panel">
        <div className="panel-content">
          {signIn ? (
            <>
              <h3>Hello Friends!</h3>
              <p>Don't have an account? Create one here.</p>
              <button className="btn toggle-btn" onClick={() => toggle(false)}>
                Sign Up
              </button>
            </>
          ) : (
            <>
              <h3>Welcome to Zenpaws!</h3>
              <p>Already have an account? Sign in here.</p>
              <button className="btn toggle-btn" onClick={() => toggle(true)}>
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignForm;
