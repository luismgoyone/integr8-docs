import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Documentation"
      description="Integr8 documentation — partner marketing platform with integrated data privacy, native fraud prevention, and AI-enabled automation.">
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
    </Layout>
  );
}
