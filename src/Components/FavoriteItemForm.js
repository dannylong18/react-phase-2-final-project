import React, { useState } from 'react';
import ItemCardStyle from './ItemCardStyle.css';

const FavoriteItemForm = ({ onAddItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

     .then(res => res.json())
     .then(data => onAddItem(data));
    
    setFormData({
      name: '',
      image: '',
      price: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className='item-form'>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Image Link:
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Price:
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <button type="submit">Add to Favorites</button>
    </form>
  );
};

export default FavoriteItemForm;
