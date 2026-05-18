"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredSpeakers, speakersData } from "@/lib/speakersData";

export function SpeakersSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedSpeakers = showAll ? speakersData : featuredSpeakers;

  return (
    <section className="cusec-section cusec-speakers-section" id="speakers">
      <div className="cusec-section__inner">
        <SectionHeading
          title={
            <>
              Legendary <em>Speakers</em>
            </>
          }
          lede="Learn from some of the most influential minds in software engineering, design, and technology."
          align="left"
        />

        <div className="cusec-speakers-list">
          {displayedSpeakers.map((speaker, idx) => (
            <article key={idx} className="cusec-speaker-item">
              <div className="cusec-speaker-item__content">
                <h3>{speaker.name}</h3>
                <p>{speaker.description}</p>
                <a href={speaker.url} className="cusec-archive-link">
                  Learn More{" "}
                  <span aria-hidden="true" className="cusec-button-link__arrow">
                    -&gt;
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {speakersData.length > 8 && (
          <div className="cusec-archive-actions">
            {!showAll ? (
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="cusec-archive-more-btn"
              >
                See All Speakers
              </button>
            ) : (
              <button
                type="button"
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
