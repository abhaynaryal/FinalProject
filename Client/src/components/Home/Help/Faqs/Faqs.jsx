import React from "react";
import { Link } from "react-router-dom";
import "./faqs.css";
import Sidebar from "../../../sidebar/Sidebar";
import Navbar from "../../../Navbar/Navbar";

const Faqs = () => {
  const faqData = [
    {
      question: "How do I start a new chat?",
      answer: "Click on the '+' icon in the sidebar. This will open a fresh conversation window for you to start interacting."
    },
    {
      question: "Can I see my previous chats?",
      answer: "Yes! Your recent chats are listed under the 'Recent' section in the sidebar. Click on menu bar then any chat to revisit it."
    },
    {
      question: "Is my data private and secure?",
      answer: "Absolutely! We take your privacy seriously. Your chats are securely stored and never shared with third parties."
    },
    {
      question: "How do I contact support if I face an issue?",
      answer: "You can go to the 'Help' page and click on 'Contact Support'."
    },
  ];

  return (
    <><Sidebar/>
<Navbar/>
    <div className="faqs-page">
      <h1 className="faqs-heading">Frequently Asked Questions</h1>
      
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <h2 className="faq-question">{faq.question}</h2>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="back-link">
        <Link to="/home/help" className="back-button">← Back to Help</Link>
      </div>
    </div>
    </>
  );
};

export default Faqs;
