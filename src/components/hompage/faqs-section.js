import React, { useState, useEffect, useRef } from "react";
import "../../styles/homepage/faqs.css";
import { SectionTitle, Ellipse, AnimateButton} from "../../components/elements.js";

import "aos/dist/aos.css";
import AOS from "aos";

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
    useEffect(() => {
        AOS.init();
    }, []);

    const refs = useRef([]);
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
                        <div key={index} className="wrapper" data-aos="fade-up" data-aos-duration="1500" data-aos-delay={index * 100}>
                            <div className="question" onClick={() => toggleAccordion(index)}>
                                {item.question}
                            </div>
                            <div
                                ref={(el) => (refs.current[index] = el)}
                                className="answer"
                                style={{
                                maxHeight: openIndexes.includes(index)
                                    ? `${refs.current[index]?.scrollHeight}px`
                                    : "0px",
                                marginTop: openIndexes.includes(index) ? "4px" : "0px",
                                opacity: openIndexes.includes(index) ? 1 : 0,
                                overflow: "hidden",
                                transition: "max-height 0.4s ease, margin-top 0.3s ease, opacity 0.3s ease",
                                }}
                            >
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <AnimateButton Magnetic={true} >Connect with Us</AnimateButton>
            </div>
            <Ellipse/>
        </section>
    )
};


// export const Head = () => <Seo title="Home" />

export default FaqsSection
