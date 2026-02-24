import React from 'react';
import Lottie from 'lottie-react';
import noEventsAnimation from '../../assets/animation/noEvents.json';
import SectionHeader from '../SectionHeader/SectionHeader';
import EventsCard from './EventsCard/EventsCard';
import DetailsCard from './DetailsCard/DetailsCard';
import './EventsSection.css';

const pastEvents = [
  {
    title: 'AWS Cloud Fundamentals Workshop',
    date: 'January 15, 2025',
    venue: 'SRM University, Kattankulathur',
    speaker: 'AWS Community Builder',
    description: 'An introductory workshop covering core AWS services including EC2, S3, IAM, and VPC. Participants got hands-on experience with the AWS console.',
    poster: null,
    link: '#',
  },
  {
    title: 'Cloud Practitioner Bootcamp',
    date: 'December 10, 2024',
    venue: 'Online (Zoom)',
    speaker: 'AWS Certified Expert',
    description: 'A 3-day intensive bootcamp to prepare students for the AWS Certified Cloud Practitioner exam. Covered all CLF-C02 exam domains.',
    poster: null,
    link: '#',
  },
  {
    title: 'Serverless Computing with Lambda',
    date: 'November 22, 2024',
    venue: 'SRM Tech Hub',
    speaker: 'Guest Speaker from Industry',
    description: 'Deep dive into serverless architecture using AWS Lambda, API Gateway, and DynamoDB. Students built a mini serverless application.',
    poster: null,
    link: '#',
  },
];

const EventsSection = () => {
  const upcomingEvents = [];

  return (
    <section className="events-section">
      <div className="events-container">
        {/* Upcoming Events */}
        <div className="events-block">
          <SectionHeader title="Upcoming Events" subtitle="Stay tuned for what's next" />
          {upcomingEvents.length === 0 ? (
            <div className="events-empty">
              <Lottie animationData={noEventsAnimation} loop={true} style={{ width: 200, height: 200 }} />
              <p className="events-empty-text">No upcoming events right now.</p>
              <p className="events-empty-sub">Follow us on social media to stay updated!</p>
            </div>
          ) : (
            <div className="events-grid">
              {upcomingEvents.map((event, i) => (
                <EventsCard key={i} {...event} />
              ))}
            </div>
          )}
        </div>

        {/* Past Events */}
        <div className="events-block" style={{ marginTop: '60px' }}>
          <SectionHeader title="Past Events" subtitle="A glimpse of what we've done" />
          <div className="past-events-grid">
            {pastEvents.map((event, i) => (
              <div key={i} className="past-event-row">
                <div className="past-event-poster">
                  <EventsCard title={event.title} poster={event.poster} link={event.link} />
                </div>
                <div className="past-event-details">
                  <DetailsCard {...event} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
