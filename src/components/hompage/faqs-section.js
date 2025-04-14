import React, { useState } from "react";
import "../../styles/global.css";
import "../../styles/homepage/faqs.css";
import { SectionTitle, Ellipse, RippleButton} from "../../components/elements.js";

const faqData = [
    {
      question: "What features are included in the POS system?",
      answer: "Our POS system includes inventory management, sales tracking, payment processing, employee management, reporting, and optional add-ons like loyalty programs and e-orders.",
    },
    {
      question: "Does the POS system support multiple payment options?",
      answer: "Yes, our POS system supports credit/debit cards, digital wallets, cash and other popular payment methods.",
    },
    {
      question: "Can I use the POS system for multiple locations?",
      answer: "Yes, you can manage multiple store locations from a single POS system with centralized reporting and inventory management.",
    },
    {
      question: "How do i upgrade my subscription plan? ",
      answer: "Upgrade your subscription plan either by selecting addons and submitting request from marketplace module or by submitting inquiry from marketplace.",
    },
    {
      question: "How do I get started with the POS system?",
      answer: "Simply select a plan, complete the registration process, and our team will assist you in setting up your account and hardware.",
    },
];

const FaqsSection = () => {
    // const [openIndex, setOpenIndex] = useState(0);
    // const toggleAccordion = (index) => {
    //     setOpenIndex(openIndex === index ? null : index);
    // };

    const [openIndexes, setOpenIndexes] = useState([]); // Track multiple open indexes
    const toggleAccordion = (index) => {
        setOpenIndexes((prev) =>
        prev.includes(index)
            ? prev.filter((i) => i !== index) // Remove if already open
            : [...prev, index] // Add if not open
        );
    };



    return (
        <section className="faqs-section">
            <SectionTitle title="faqs" heading="Frequently Asked Questions" />
            <div className="container">
                <div className="accordion">
                    {faqData.map((item, index) => (
                        <div key={index} className="wrapper">
                            <div className="question" onClick={() => toggleAccordion(index)}>
                                {item.question}
                            </div>
                            <div
                            // className={`answer ${openIndex === index ? 'is-open' : ''}`}
                            className={`answer ${openIndexes.includes(index) ? 'is-open' : ''}`}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <RippleButton Magnetic={true} >Connect with Us</RippleButton>
            </div>
            <Ellipse/>
        </section>
    )
};


// export const Head = () => <Seo title="Home" />

export default FaqsSection
