import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

// Add Font Awesome icons to the library
library.add(faPhone, faEnvelope, faMapMarkerAlt, faPaperPlane);

const FaqFooter = () => {
  const faqData = [
    {
      question: "What is the cost of a mobile application?",
      answer:
        "The cost of a mobile application varies depending on the requirements, complexity, and features needed. Please contact us for a detailed quote.",
    },
    {
      question: "Do you provide a guarantee for the mobile application?",
      answer:
        "Yes, we provide a guarantee for our mobile applications. Details of the guarantee will be provided in the contract.",
    },
    {
      question: "How long will development take?",
      answer: `Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.
               \n\nAverage development time from start to finished application:
               \nMedium projects up to 3 months.
               \nLarge projects about 4-6 months.
               \nTo get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.`,
    },
    {
      question: "I will not tell my idea, do you guarantee confidentiality?",
      answer:
        "Yes, we guarantee confidentiality for all our clients. We can sign an NDA to ensure your idea is protected.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white" id="faq">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">FAQ</h2>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left py-4 text-lg font-medium text-gray-900"
              >
                {faq.question}
                <span>{openFaq === index ? "-" : "+"}</span>
              </button>
              {openFaq === index && (
                <div className="pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-8" id="contacts">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div>
            <img
              src="./assets/logo-bg-3 2 (1).png"
              alt="My Company"
              className="mb-2"
            />
          </div>
          <div className="text-sm flex flex-col sm:flex-row sm:gap-5 items-center mb-10">
            <p className="flex items-center mb-2 sm:mb-0">
              <FontAwesomeIcon icon="phone" className="mr-2 w-4 h-4" /> +91
              0000000000
            </p>
            <p className="flex items-center mb-2 sm:mb-0">
              <FontAwesomeIcon icon="envelope" className="mr-2 w-4 h-4" />{" "}
              demo@gmail.com
            </p>
            <p className="flex items-center mb-2 sm:mb-0">
              <FontAwesomeIcon icon="map-marker-alt" className="mr-2 w-4 h-4" />{" "}
              Mumbai, India
            </p>
            <p className="flex items-center">
              <FontAwesomeIcon icon="paper-plane" className="mr-2 w-4 h-4" />{" "}
              Leave a request
            </p>
          </div>
        </div>
        <p className="text-sm text-center">We work throughout the world</p>
      </footer>
    </div>
  );
};

export default FaqFooter;
