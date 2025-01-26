import React, { useState } from "react";
import "./Profile.css";


export const Profile = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    contact: "",
    address: "",
    about: "",
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Values:", values);
  };

  const handleUpdate = () => {
    setValues({
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      contact: "",
      address: "",
      about: "",
    });
  };
  return (
    <div className="profile-container">
      <h1> Profile </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstname"
          onChange={handleChanges}
          required
          value={values.firstname}
        />

        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastname"
          onChange={handleChanges}
          required
          value={values.lastname}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleChanges}
          required
          value={values.email}
        />

        <label htmlFor="contact">Phone Number</label>
        <input
          type="text"
          placeholder="Enter Phone #"
          name="contact"
          onChange={handleChanges}
          value={values.contact}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          placeholder="Enter Your address"
          name="address"
          onChange={handleChanges}
          value={values.address}
        />

        <label htmlFor="gender">Gender</label>
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={values.gender === "Male"}
            onChange={handleChanges}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={values.gender === "Female"}
            onChange={handleChanges}
          />{" "}
          Female
        </div>

        <label htmlFor="about">About</label>
        <textarea
          name="about"
          id="about"
          cols="30"
          rows="10"
          onChange={handleChanges}
          placeholder="Enter Description"
          value={values.about}
        ></textarea>

        <button type="button" onClick={handleUpdate}>
          Update
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
