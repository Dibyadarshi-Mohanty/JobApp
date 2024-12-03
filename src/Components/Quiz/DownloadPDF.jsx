import React, { useState } from "react";
import "./DownloadPDF.css";

const DownloadPDF = () => {
  const [formData, setFormData] = useState({
    subject: "",
    numberOfQuestions: "",
    difficulty: "easy",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleDownload = () => {
  //   if (!formData.subject || !formData.numberOfQuestions) {
  //     alert("Please fill in all fields!");
  //     return;
  //   }
  //   alert("PDF download triggered!");
  // };

  return (
    <div className="DownloadPDF-form-container">
      <h2>Download Question PDF </h2>
      <div className="form-field">
        <label htmlFor="subject">Subject</label>
        <select
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
        >
          <option value="">Select Subject</option>
          <option value="math">Mathematics</option>
          <option value="science">Science</option>
          <option value="history">History</option>
          <option value="geography">Geography</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="numberOfQuestions">Number of Questions</label>
        <select
          name="numberOfQuestions"
          id="numberOfQuestions"
          value={formData.numberOfQuestions}
          onChange={handleChange}
        >
          <option value="">Select Number</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="difficulty">Difficulty Level</label>
        <select
          name="difficulty"
          id="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      {/* <button className="download-btn" onClick={handleDownload}>
        Download PDF
      </button> */}
      <button className="download-btn" >
        Download PDF
      </button>
    </div>
  );
};

export default DownloadPDF;
