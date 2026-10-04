import React, { useState } from 'react';
import {
  Navigation,
  Hero,
  StudioIntro,
  Capabilities,
  AutomationMachine,
  SelectedWork,
  ProductLab,
  Architecture,
  Process,
  Principles,
  Insights,
  Commission,
  Footer,
} from '../components';
import { CustomCursor } from '../components/ui/CustomCursor';
import { LoadingSequence } from '../components/ui/LoadingSequence';

export const VantiqStudioLandingPage: React.FC = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="vantiq-studio-app">
      {/* Loading Sequence */}
      {!loadingComplete && (
        <LoadingSequence onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Subtle Precision Custom Cursor */}
      <CustomCursor />

      {/* Accessible skip link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Primary Navigation */}
      <Navigation />

      {/* Main Content Sections */}
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <StudioIntro />
        <Capabilities />
        <AutomationMachine />
        <SelectedWork />
        <ProductLab />
        <Architecture />
        <Process />
        <Principles />
        <Insights />
        <Commission />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
};
