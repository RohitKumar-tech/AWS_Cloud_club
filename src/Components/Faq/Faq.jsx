import React, { useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import AccordionItem from './AccordionItem/AccordionItem';
import './Faq.css';

const faqs = [
  {
    question: 'Who can join AWS Cloud Club SRM?',
    answer: 'AWS Cloud Club SRM is open to all students enrolled at SRM Institute of Science and Technology, Kattankulathur — regardless of department, branch, or year. Anyone with curiosity about cloud computing is welcome!',
  },
  {
    question: 'Is there a membership fee?',
    answer: 'No! Membership is completely free. We believe in making cloud education accessible to every SRM student without any financial barrier.',
  },
  {
    question: 'Do I need prior cloud experience to join?',
    answer: 'Absolutely not. We welcome complete beginners! Our events and workshops are designed for all skill levels — from students who\'ve never heard of AWS to those already working toward certifications.',
  },
  {
    question: 'What is the AWS Cloud Practitioner certification?',
    answer: 'The AWS Certified Cloud Practitioner (CLF-C02) is an entry-level certification that validates foundational knowledge of cloud concepts, AWS services, security, pricing, and support. It\'s the ideal starting point for anyone new to cloud computing.',
  },
  {
    question: 'How often do you host events?',
    answer: 'We typically host 2–3 events per month, including workshops, speaker sessions, study groups, and hackathons. Follow our social media and join our WhatsApp group to never miss an update.',
  },
  {
    question: 'How can I contribute to the club?',
    answer: 'You can contribute by hosting an event, presenting a topic you\'re passionate about, helping organize events, or sharing cloud resources with the community. Reach out to us at awsccsrm@gmail.com to get involved.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about joining"
        />
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
