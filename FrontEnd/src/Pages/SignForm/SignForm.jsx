import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // <-- import this
import "./SignForm.css";

const SignForm = () => {
  const [signIn, toggle] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate(); // <-- create navigate function

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8081/api/users/login", loginData);
      if (res.status === 200) {
        alert("Login successful");
        navigate("/home"); // <-- redirect to home page
      }
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8081/api/users/signup", signupData);
      if (res.status === 200) {
        alert("Signup successful");
        toggle(true);
      }
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className={`auth-container ${signIn ? "" : "sign-up-mode"}`}>
      <div className="form-container">
        {/* Sign In Form */}
        <div className={`form sign-in-form`}>
          <h2>Sign In</h2>
          <form onSubmit={handleLogin}>
            <div className="input-field">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
            </div>
            <div className="input-field">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
            </div>
            <button className="btn" type="submit">Sign In</button>
          </form>
        </div>

        {/* Sign Up Form */}
        <div className={`form sign-up-form`}>
          <h2>Create Account</h2>
          <form onSubmit={handleSignup}>
            <div className="input-field">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={signupData.name}
                onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
              />
            </div>
            <div className="input-field">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={signupData.email}
                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
              />
            </div>
            <div className="input-field">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a password"
                value={signupData.password}
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
              />
            </div>
            <button className="btn" type="submit">Sign Up</button>
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
