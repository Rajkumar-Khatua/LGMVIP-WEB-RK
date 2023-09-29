import React, { useEffect, useState } from "react";
import "./RegistrationFrom.css";
import axios from "axios";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [website, setWebsite] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Automatically clear messages after 3 seconds
    const successMessageTimeout = setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

    const errorMessageTimeout = setTimeout(() => {
      setErrorMessage("");
    }, 3000);

    // Clear timeouts when the component unmounts
    return () => {
      clearTimeout(successMessageTimeout);
      clearTimeout(errorMessageTimeout);
    };
  }, [successMessage, errorMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/users", {
        name,
        image,
        website,
        gender,
        skills,
      });

      console.log(response.data); // This will log the response from the server

      // Clear the form after successful submission
      setName("");
      setImage("");
      setWebsite("");
      setGender("");
      setSkills([]);
      setSuccessMessage("Registration successful!");
      setErrorMessage("");
    } catch (error) {
      console.error(error);
      // Show an error message if the request fails
      setSuccessMessage("");
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  const handleClear = () => {
    setName("");
    setImage("");
    setWebsite("");
    setGender("");
    setSkills([]);
    setSuccessMessage("");
    setErrorMessage("");
  };

  const allSkills = [
    "Coding",
    "Web Development",
    "Design",
    "Database Management",
    "Mobile App Development",
    "UI/UX Design",
    "Data Analysis",
    "Machine Learning",
  ];

  return (
    <div className="registration-form">
      <h2>Student Enrollment</h2>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: *</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image: *</label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website:</label>
          <input
            type="url"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender: *</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Skills: *</label>
          <div className="skills-checkbox">
            {allSkills.map((skill) => (
              <label key={skill}>
                <input
                  type="checkbox"
                  value={skill}
                  checked={skills.includes(skill)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSkills([...skills, e.target.value]);
                    } else {
                      setSkills(skills.filter((s) => s !== e.target.value));
                    }
                  }}
                />
                {skill}
              </label>
            ))}
          </div>
        </div>
        <div className="form-buttons">
          <button type="submit" className="submit">
            Submit
          </button>
          <button type="button" onClick={handleClear} className="clear">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
