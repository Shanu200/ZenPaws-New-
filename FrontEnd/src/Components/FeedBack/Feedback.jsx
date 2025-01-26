import React, { useEffect, useState } from 'react';
import "./FeedBack.css";

const Feedback = ()=> {
  const feedback =[
    {
      id:1,
      uname:"Nisadi",
      feedback:"Greate Service!",
      rating:5,
    },
    {
      id:2,
      uname:"Imasha",
      feedback:"Greate work!",
      rating:4,
    },
    {
      id:3,
      uname:"Saduni",
      feedback:"Good Service!",
      rating:5,
    }
  ];
  const [feedbacks,setFeedbacks]=useState([]);
  useEffect(()=>{
    const fetchFeedbacks = async()=>{
      await new Promise((resolve)=> setTimeout(resolve,500));
      setFeedbacks(feedback);
    };
    fetchFeedbacks();
  }, []);
  return (
    <div className="feedback">
        <div className='feedback-board' style={{ backgroundColor: "#ff660023", height: "330px", width:"1519px" }}></div>
    <h2 >Customer Feedback</h2>
    <div className="feedback-list">
      {feedbacks.length > 0 ? (
        feedbacks.map((item) => (
          <div key={item.id} className="feedback-card">
            <h3>{item.uname}</h3>
            <p>"{item.feedback}"</p>
            <p>{item.rating}⭐</p>
          </div>
        ))
      ) : (
        <p>Loading feedback...</p>
      )}
    </div>
  </div>
  )
}

export default Feedback