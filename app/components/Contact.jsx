"use client";
import { useState } from "react";
import Button from "./Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (
      formData.name &&
      formData.phone &&
      formData.businessName &&
      formData.email
    ) {
      alert("Form submitted successfully");
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded shadow-md"
    >
      <div>
        <label htmlFor="name" className="block text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label htmlFor="businessName" className="block text-gray-700">
          Business Name
        </label>
        <input
          type="text"
          name="businessName"
          id="businessName"
          value={formData.businessName}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700">
          Business Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <Button type="submit">Get Consultation</Button>
    </form>
  );
};

export default ContactForm;
