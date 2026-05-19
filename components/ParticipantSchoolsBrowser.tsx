"use client";

import { useState } from "react";
import { LogoTile } from "@/components/LogoTile";
import type { Region, School } from "@/lib/schoolsData";

type ParticipantSchoolsBrowserProps = {
  regions: Region[];
};

function SchoolCard({ school }: { school: School }) {
  return (
    <article className="cusec-archive-item cusec-school-archive-item cusec-school-archive-item--mosaic">
      <div className="cusec-archive-item__header">
        <div className="cusec-archive-item__brand cusec-school-archive-item__brand">
          {school.logo ? (
            <LogoTile name={school.name} logo={school.logo} variant="compact-left" />
          ) : null}
          <h3>{school.name}</h3>
        </div>
      </div>

      <div className="cusec-archive-item__content">
        <p>{school.info}</p>
      </div>
    </article>
  );
}

export function ParticipantSchoolsBrowser({ regions }: ParticipantSchoolsBrowserProps) {
  const allSchools = regions.flatMap((region) => region.schools);

  const focuses = [
    {
      id: "all",
      label: "All Regions",
      description: "Universities and colleges from across North America and beyond.",
      schools: allSchools,
    },
    ...regions.map((region) => ({
      id: region.name.toLowerCase().replace(/\s+/g, "-"),
      label: region.name,
      description: `Participating universities and colleges from ${region.name}.`,
      schools: region.schools,
    })),
  ];

  const [activeFocusId, setActiveFocusId] = useState(focuses[0].id);
  const activeFocus = focuses.find((focus) => focus.id === activeFocusId) ?? focuses[0];

  const panelId = "school-focus-panel";

  return (
    <div className="cusec-schools-browser">
      <div className="cusec-school-filter">
        <div className="cusec-school-filter__summary" aria-live="polite">
          <strong>{activeFocus.label}</strong>
          <p>{activeFocus.description}</p>
          <p className="cusec-school-filter__note">
            This archive represents a wide selection of institutions that have participated in CUSEC.
          </p>
        </div>

        <div className="cusec-school-filter__tabs" role="tablist" aria-label="Region focus">
          {focuses.map((focus) => {
            const isActive = focus.id === activeFocus.id;

            return (
              <button
                key={focus.id}
                type="button"
                className={`cusec-school-filter__tab${
                  isActive ? " cusec-school-filter__tab--active" : ""
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
        className="cusec-archive-list cusec-schools-list"
        id={panelId}
        role="tabpanel"
        aria-label={`${activeFocus.label} schools`}
        style={{ marginTop: "3rem" }}
      >
        {activeFocus.schools.map((school, idx) => (
          <SchoolCard key={`${school.name}-${idx}`} school={school} />
        ))}
      </div>
    </div>
  );
}