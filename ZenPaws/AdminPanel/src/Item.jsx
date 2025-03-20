import React, { useState } from 'react';
import { BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Item() {
  console.log('Item component rendered');

  // State hooks
  const [petDetails, setPetDetails] = useState({
    name: "",
    type: "",
    breed: "",
    price: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handlers
  const handleChange = (e) => {
    setPetDetails({ ...petDetails, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pet Details:", petDetails);
    console.log("Image File:", image);
    // Add API logic here
  };

  return (
    <main className="main-container">
      <div className="main-title">
        <h1>ITEMS</h1>
      </div>

      <div className="main-card">
        <div className="card">
          <Link to="/Home">
            <div className="card-inner">
              <h3>DASHBOARD</h3>
              <BsGrid1X2Fill className="card-icon" />
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="/Categories">
            <div className="card-inner">
              <h3>CATEGORIES</h3>
              <BsFillGrid3X3GapFill className="card-icon" />
            </div>
            <h2>5</h2>
          </Link>
        </div>

        <div className="card">
          <Link to="/Customer">
            <div className="card-inner">
              <h3>CUSTOMERS</h3>
              <BsPeopleFill className="card-icon" />
            </div>
            <h2>75</h2>
          </Link>
        </div>

        <div className="card">
          <Link to="/Alert">
            <div className="card-inner">
              <h3>ALERTS</h3>
              <BsFillBellFill className="card-icon" />
            </div>
            <h2>10</h2>
          </Link>
        </div>
      </div>

      {/* Pet Form Section */}
      <div className="form-container" >
        <h2 className="form-title">Add Pet Details</h2>
        <form onSubmit={handleSubmit} className="pet-form">
          <input
            type="text"
            name="name"
            placeholder="Pet Name"
            value={petDetails.name}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="text"
            name="type"
            placeholder="Pet Type (e.g. Dog, Cat)"
            value={petDetails.type}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="text"
            name="breed"
            placeholder="Discription"
            value={petDetails.breed}
            onChange={handleChange}
            className="input-field1"
          />
          <input
  type="text"
  name="price"
  placeholder="Price"
  value={petDetails.age}
  onChange={handleChange}
  className="input-field"
/>


          <div className="upload-section">
            <label>Upload Pet Image</label>
            <input type="file" onChange={handleImageChange} />
          </div>

          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Pet Preview" />
            </div>
          )}

          <button type="submit" className="submit-button">
            Add Pet
          </button>
        </form>
      </div>
    </main>
  );
}

export default Item;
