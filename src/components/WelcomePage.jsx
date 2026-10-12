import React from 'react';
import '../styles/welcome.css';

export default function WelcomePage() {
  return (
    <main className="welcome-page">
      <header className="welcome-header">
        <a className="welcome-brand" href="/" aria-label="Apex Dental welcome page">
          <span className="welcome-brand-mark" aria-hidden="true">✦</span>
          <span>
            <strong>Apex Dental</strong>
            <small>&amp; Implant Studio</small>
          </span>
        </a>
        <span className="welcome-open">
          <i aria-hidden="true" />
          Clinic open today · 9:00 AM–8:30 PM
        </span>
      </header>

      <section className="welcome-hero" aria-labelledby="welcome-title">
        <div className="welcome-copy">
          <span className="welcome-eyebrow">MODERN DENTISTRY, MADE COMFORTABLE</span>
          <h1 id="welcome-title">
            A healthier smile
            <span> starts here.</span>
          </h1>
          <p>
            Meet your dental team, explore treatments and transparent starting
            prices, or book a visit in just a few steps.
          </p>

          <div className="welcome-actions">
            <a className="welcome-cta" href="/clinic">
              Explore Clinic <span aria-hidden="true">→</span>
            </a>
            <a className="welcome-phone" href="tel:+917032859259">
              Call us: +91 70328 59259
            </a>
          </div>

          <div className="welcome-trust" aria-label="Clinic highlights">
            <span><b>★ 4.9/5</b> patient rating</span>
            <span><b>12</b> specialist dentists</span>
            <span><b>15,000+</b> smiles restored</span>
          </div>
        </div>

        <div className="welcome-visual" aria-label="Apex Dental clinic highlights">
          <div className="welcome-glow" />
          <div className="welcome-tooth" aria-hidden="true">🦷</div>
          <div className="welcome-visual-caption">
            <span className="welcome-caption-icon" aria-hidden="true">✚</span>
            <span>
              <strong>Care designed around you</strong>
              <small>Digital planning · Gentle treatment · Clear guidance</small>
            </span>
          </div>
          <div className="welcome-availability">
            <span aria-hidden="true">◷</span>
            <span><small>Next appointment</small><strong>Today · 4:30 PM</strong></span>
          </div>
        </div>
      </section>

    </main>
  );
}
