"use client";

import { useState } from "react";
import Image from "next/image";
import { sponsorsData } from "@/lib/sponsorsData";

export function SponsorsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedSponsors = showAll ? sponsorsData : sponsorsData.slice(0, 12);

  return (
    <section className="cusec-section cusec-sponsors-section" id="sponsors">
      <div className="cusec-section__inner">
        <div className="cusec-sponsors-header">
          <h2>
            Supported by the <em>Best</em>
          </h2>
          <p>CUSEC wouldn't be possible without our amazing sponsors who have supported us over the years.</p>
        </div>

        <div className="cusec-sponsors-grid">
          {displayedSponsors.map((sponsor) => (
            <div key={sponsor.name} className="cusec-sponsor-item" title={sponsor.name}>
              <Image src={sponsor.logo} alt={`${sponsor.name} Logo`} />
            </div>
          ))}
        </div>

        {sponsorsData.length > 12 && (
          <div className="cusec-sponsors-actions">
            {!showAll ? (
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="cusec-archive-more-btn"
              >
                See More
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
