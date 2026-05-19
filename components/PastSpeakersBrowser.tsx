"use client";

import { useState } from "react";
import type { Speaker } from "@/lib/speakersData";

type SpeakerFocus = {
  id: string;
  label: string;
  description: string;
  years: number[];
};

type PastSpeakersBrowserProps = {
  speakers: Speaker[];
};

const speakerFocuses: SpeakerFocus[] = [
  {
    id: "legends",
    label: "Legends",
    description: "Most recognizable names and most influential figures who spoke at CUSEC.",
    years: [], // Legends might just filter by specific names or we can use empty array for some logic
  },
  {
    id: "2020s",
    label: "2020s",
    description: "Speakers from 2020 to present.",
    years: [2020, 2021, 2022],
  },
  {
    id: "2010s",
    label: "2010s",
    description: "Speakers from 2010 to 2019.",
    years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  },
  {
    id: "2000s",
    label: "2000s",
    description: "Speakers from 2002 to 2009.",
    years: [2004, 2005, 2006, 2007, 2008, 2009],
  },
];

const legendNames = [
  "Kent Beck",
  "Richard Stallman",
  "Joel Spolsky",
  "Jeff Atwood",
  "Alexis Ohanian",
  "David Heinemeier Hansson",
  "Douglas Crockford",
  "Bruce Schneier",
  "Bret Victor",
];

function getSpeakersForFocus(speakers: Speaker[], focus: SpeakerFocus) {
  if (focus.id === "legends") {
    const names = new Set(legendNames);
    return speakers.filter((speaker) => names.has(speaker.name));
  }

  const years = new Set(focus.years);
  return speakers.filter((speaker) => speaker.year && years.has(speaker.year));
}

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <article className="cusec-archive-item cusec-historic-sponsor cusec-historic-sponsor--mosaic">
      <div className="cusec-archive-item__header">
        <div className="cusec-archive-item__brand cusec-historic-sponsor__brand">
          <img
            src={speaker.imagePath}
            alt={`${speaker.name} placeholder`}
            style={{
              width: "100%",
              aspectRatio: "1/1",
              objectFit: "cover",
              backgroundColor: "rgba(34, 34, 34, 0.1)",
              borderRadius: "4px"
            }}
          />
          <h3>
            <a
              href={speaker.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              {speaker.name}
            </a>
          </h3>
        </div>
      </div>
      <div className="cusec-archive-item__content">
        <p>{speaker.description}</p>
      </div>
    </article>
  );
}

export function PastSpeakersBrowser({ speakers }: PastSpeakersBrowserProps) {
  const [activeFocusId, setActiveFocusId] = useState(speakerFocuses[0].id);
  const activeFocus =
    speakerFocuses.find((focus) => focus.id === activeFocusId) ?? speakerFocuses[0];

  const displayedSpeakers = getSpeakersForFocus(speakers, activeFocus);
  const panelId = "speaker-focus-panel";

  return (
    <div className="cusec-historic-sponsors-browser">
      <div className="cusec-sponsor-filter">
        <div className="cusec-sponsor-filter__summary" aria-live="polite">
          <strong>{activeFocus.label}</strong>
          <p>{activeFocus.description}</p>
        </div>

        <div className="cusec-sponsor-filter__tabs" role="tablist" aria-label="Speaker categories">
          {speakerFocuses.map((focus) => {
            const isActive = focus.id === activeFocusId;
            return (
              <button
                key={focus.id}
                type="button"
                className={`cusec-sponsor-filter__tab${
                  isActive ? " cusec-sponsor-filter__tab--active" : ""
                }`}
                role="tab"
                aria-selected={isActive}
                aria-controls={panelId}
                onClick={() => setActiveFocusId(focus.id)}
              >
                <span>{focus.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="cusec-archive-list cusec-speakers-grid"
        id={panelId}
        role="tabpanel"
        aria-label={activeFocus.label}
      >
        {displayedSpeakers.length > 0 ? (
          displayedSpeakers.map((speaker, index) => (
            <SpeakerCard key={`${speaker.name}-${index}`} speaker={speaker} />
          ))
        ) : (
          <p>No speakers found for this category.</p>
        )}
      </div>
    </div>
  );
}
