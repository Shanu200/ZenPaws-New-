import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Banner2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(3);
  const [message, setMessage] = useState("");

  const toggleFeedbackForm = () => {
    setIsOpen((prev) => !prev);
  };

  const closeFeedbackForm = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, message }),
      });

      if (response.ok) {
        alert("Feedback submitted successfully!");
        setMessage("");
        setRating(3);
        setIsOpen(false);
      } else {
        alert("Failed to submit feedback.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Server error. Check backend.");
    }
  };

  return (
    <div className="relative">
      {/* Button to open/close the feedback slider */}
      <button
        onClick={toggleFeedbackForm}
        className="fixed bottom-6 right-6 bg-orange-700 text-white p-4 rounded-full shadow-lg hover:bg-orange-900 transition duration-300"
      >
        <FaUserCircle className="text-3xl" />
        {isOpen ? " Close" : " Give Feedback"}
      </button>

      {/* Feedback slide panel */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white p-6 shadow-lg transition-transform duration-300 mt-16 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close button */}
        <button
          onClick={closeFeedbackForm}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
        >
          <IoClose className="text-2xl" />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Provide Your Feedback</h2>

        {/* Feedback Form */}
        <form onSubmit={handleSubmit}>
          <label className="block text-lg font-medium">Rate your experience:</label>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            className="w-full mt-2"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
          </div>

          <textarea
            placeholder="Tell us more..."
            className="w-full mt-4 p-2 border border-gray-300 rounded-lg"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="w-full mt-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner2;
