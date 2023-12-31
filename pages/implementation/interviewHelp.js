import React, { useState } from 'react';
import axios from 'axios';





function InterviewHelp() {
  // State to track user selections
  const [generateQuestions, setGenerateQuestions] = useState(false);
  const [jobRole, setJobRole] = useState('');
  const [customQuestions, setCustomQuestions] = useState('');

  // Function to generate interview questions
  const generateInterviewQuestions = async () => {
    try {
      // Define the API endpoint for ChatGPT
      const apiEndpoint = 'https://api.openai.com/v1/chat/completions';

      // Define the prompt text (use the jobRole state or customQuestions state, depending on the user's choice)
      const promptText = generateQuestions
        ? `Generate interview questions for ${jobRole}`
        : customQuestions;

      // Define the data to be sent in the request
      const requestData = {
        prompt: promptText,
        max_tokens: 50, // Adjust the number of tokens as needed
      };

      // Define request headers, including your API key
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_KEY}`,
      };

      // Make the API request using Axios
      const response = await axios.post(apiEndpoint, requestData, { headers });

      // Extract the generated questions from the response
      const generatedQuestions = response.data.choices[0].text;

      // Display the generated questions or take further action
      alert(`Generated Questions:\n${generatedQuestions}`);
    } catch (error) {
      console.error('Error generating interview questions:', error);
    }
  };

  return (
    <div className="interview-help-container">
      <h1>Interview Help</h1>
      <div className="checkbox-label">
        <label>
          <input
            type="checkbox"
            checked={generateQuestions}
            onChange={() => setGenerateQuestions(!generateQuestions)}
          />
          Generate Interview Questions with Job Description
        </label>
      </div>
      {generateQuestions && (
        <div className="select-label">
          <label>
            Select Job Role:
            <select className="select-input" value={jobRole} onChange={(e) => setJobRole(e.target.value)}>
              <option value="Computer Science Intern">Computer Science intern</option>
              <option value="Information Systems Intern">Information Systems intern</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
      )}
      <div className="textarea-label">
        <label>
          Practice with Your Own Questions:
          <textarea
            className="textarea-input"
            value={customQuestions}
            onChange={(e) => setCustomQuestions(e.target.value)}
            rows="4"
            cols="50"
          />
        </label>
      </div>
      <div className="button-container">
        <button className="button" onClick={generateInterviewQuestions}>Generate Interview Questions</button>
      </div>
    </div>
  );
}

export default InterviewHelp;