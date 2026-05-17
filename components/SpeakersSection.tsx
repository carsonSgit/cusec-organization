"use client";

import { useState } from "react";
import { speakersData } from "@/lib/speakersData";

export function SpeakersSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedSpeakers = showAll ? speakersData : speakersData.slice(0, 9);

  return (
    <section className="cusec-section cusec-speakers-section" id="speakers">
      <div className="cusec-section__inner">
        <div className="cusec-archive-header">
          <h2>
            Legendary <em>Speakers</em>
          </h2>
          <p>Learn from some of the most influential minds in software engineering, design, and technology.</p>
        </div>

        <div className="cusec-speakers-list">
          {displayedSpeakers.map((speaker, idx) => (
            <article key={idx} className="cusec-speaker-item">
              <div className="cusec-speaker-item__content">
                <h3>{speaker.name}</h3>
                <p>{speaker.description}</p>
                <a
                  href={speaker.url}
                  className="cusec-archive-link"
                >
                  Learn More <span aria-hidden="true" className="cusec-button-link__arrow">-&gt;</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {speakersData.length > 8 && (
          <div className="cusec-archive-actions">
            {!showAll ? (
              <button 
                onClick={() => setShowAll(true)} 
                className="cusec-archive-more-btn"
              >
                See All Speakers
              </button>
            ) : (
              <button 
                onClick={() => setShowAll(false)} 
                className="cusec-archive-more-btn"
              >
                See Less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
