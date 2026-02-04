import React, { useState } from "react";
import "./Form.css";

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        email: "",
        contact: "",
        address: "",
        fatherName: "",
        motherName: ""
    });

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess("");
        setError("");

        // Check empty fields
        for (let key in formData) {
            if (formData[key].trim() === "") {
                setError("Please fill all the blanks!");
                return;
            }
        }

        setSubmittedData(formData);
        setSuccess("Form submitted successfully!");

        // Clear form
        setFormData({
            name: "",
            age: "",
            gender: "",
            email: "",
            contact: "",
            address: "",
            fatherName: "",
            motherName: ""
        });
    };

    return (
        <div className="form-page">
            <h2>Personal Details Form</h2>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />

                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} />

                <label>Gender:</label>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />

                <label>Contact:</label>
                <input type="tel" name="contact" value={formData.contact} onChange={handleChange} />

                <label>Address:</label>
                <textarea name="address" value={formData.address} onChange={handleChange} />

                <label>Father's Name:</label>
                <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />

                <label>Mother's Name:</label>
                <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} />

                <button type="submit">Submit</button>
            </form>

            {success && <p className="success">{success}</p>}
            {error && <p className="error">{error}</p>}

            {/* Display submitted details */}
            {submittedData && (
                <div className="result">
                    <h3>Submitted Details</h3>
                    <p><b>Name:</b> {submittedData.name}</p>
                    <p><b>Age:</b> {submittedData.age}</p>
                    <p><b>Gender:</b> {submittedData.gender}</p>
                    <p><b>Email:</b> {submittedData.email}</p>
                    <p><b>Contact:</b> {submittedData.contact}</p>
                    <p><b>Address:</b> {submittedData.address}</p>
                    <p><b>Father Name:</b> {submittedData.fatherName}</p>
                    <p><b>Mother Name:</b> {submittedData.motherName}</p>
                </div>
            )}
        </div>
    );
}
