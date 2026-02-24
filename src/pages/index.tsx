import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function HomepageHero() {
  return (
    <header className="hero--integr8">
      <div className="container">
        <Heading as="h1" className="hero__title">
          Integr8 Documentation
        </Heading>
        <p className="hero__subtitle">
          Everything you need to scale your partner marketing platform —
          from getting started to advanced fraud prevention and API integration.
        </p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link
            className="button button--lg"
            style={{background: '#ffffff', color: '#0693e3', fontWeight: 600}}
            to="/docs/getting-started">
            Get Started
          </Link>
          <Link
            className="button button--lg"
            style={{background: 'transparent', color: '#ffffff', border: '2px solid rgba(255,255,255,0.6)', fontWeight: 600}}
            to="/docs/developers/api-documentation">
            API Reference
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    icon: '🚀',
    title: 'Getting Started',
    description: 'Set up your organization, manage users, configure tracking, and onboard advertisers quickly.',
    link: '/docs/getting-started',
  },
  {
    icon: '📊',
    title: 'Reports & Analytics',
    description: 'Deep-dive into traffic insights, click reports, conversions, shared reports, and download centre.',
    link: '/docs/reports-and-analytics',
  },
  {
    icon: '🛡️',
    title: 'Fraud Prevention',
    description: 'Protect your network with duplicate detection, VPN filtering, click spam detection, and more.',
    link: '/docs/fraud-prevention',
  },
  {
    icon: '🔗',
    title: 'Offers & Tracking',
    description: 'Configure offers, tracking links, custom payouts, conversion events, and smart links.',
    link: '/docs/offers',
  },
  {
    icon: '📡',
    title: 'Postback Manager',
    description: 'Set up affiliate postbacks, connect CRM conversion data, and manage postback logs.',
    link: '/docs/postback-manager',
  },
  {
    icon: '⚙️',
    title: 'API & Developers',
    description: 'Full API documentation, parameter list, server IP whitelist, and migration tools.',
    link: '/docs/developers',
  },
];

function HomepageFeatures() {
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          {features.map(({icon, title, description, link}) => (
            <div key={title} className="col col--4" style={{marginBottom: '1.5rem'}}>
              <Link to={link} style={{textDecoration: 'none', color: 'inherit'}}>
                <div className="featureCard">
                  <div className="featureIcon">{icon}</div>
                  <Heading as="h3" style={{marginBottom: '0.5rem'}}>{title}</Heading>
                  <p style={{margin: 0, color: 'var(--ifm-color-emphasis-700)', fontSize: '0.95rem'}}>
                    {description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description="Integr8 documentation — partner marketing platform with integrated data privacy, native fraud prevention, and AI-enabled automation.">
      <HomepageHero />
      <HomepageFeatures />
    </Layout>
  );
}
