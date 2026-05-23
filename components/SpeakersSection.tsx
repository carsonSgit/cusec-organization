"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredSpeakers, speakersData } from "@/lib/speakersData";

export function SpeakersSection() {
  const displayedSpeakers = featuredSpeakers;

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
          {displayedSpeakers.map((speaker) => (
            <article key={speaker.name} className="cusec-speaker-item">
              <div className="cusec-speaker-item__content">
                <h3>{speaker.name}</h3>
                <p>{speaker.description}</p>
                <a
                  href={speaker.url}
                  className="cusec-archive-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More<span className="cusec-sr-only"> about {speaker.name}</span>{" "}
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
            <ButtonLink href="/past-speakers">See All Past Speakers</ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
