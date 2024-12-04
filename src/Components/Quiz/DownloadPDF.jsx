import { useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import "./DownloadPDF.css";
import { BACKEND_URL } from "../../redux/store.js"
import toast from "react-hot-toast";

const DownloadPDF = () => {
  const [formData, setFormData] = useState({
    subject: "",
    numberOfQuestions: "",
    difficulty: "easy",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePDF = async () => {
    const { subject, numberOfQuestions, difficulty } = formData;

    if (!subject || !numberOfQuestions) {
      return toast.error("Please select all fields before downloading the PDF!");
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${BACKEND_URL}/candidate/generate-pdf`,
        {
          numOfQuestion: numberOfQuestions,
          language: subject,
          difficulty,
        }, {
        withCredentials: true
      }
      );

      if (response.data.success) {
        setLoading(false);
        const questions = response.data.data;

        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text("Generated Questions", 10, 10);

        let y = 20;
        questions.forEach((line) => {
          if (y > 280) {
            doc.addPage();
            y = 10;
          }
          doc.text(line, 10, y);
          y += 10;
        });

        doc.save(`questions_${subject}_${difficulty}.pdf`);
      } else {
        alert("Failed to generate the PDF. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while generating the PDF.");
      setLoading(false);
    }
  };

  return (
    <div className="DownloadPDF-form-container">
      <h2>Download Question PDF</h2>
      <div className="form-field">
        <label htmlFor="subject">language</label>
        <select
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
        >
          <option value="">Select Language</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="c">C</option>
          <option value="c++">C++</option>
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
      <button className="download-btn" onClick={generatePDF} disabled={loading}>
        {
          loading ? "Generating PDF..." : "Download PDF"
        }
      </button>
    </div>
  );
};

export default DownloadPDF;
