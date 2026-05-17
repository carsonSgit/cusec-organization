"use client";

import Image from "next/image";
import Link from "next/link";
import { regionsData } from "@/lib/schoolsData";
import { ButtonLink } from "@/components/ButtonLink";

export function SchoolsSection() {
  return (
    <section className="cusec-section cusec-schools-section" id="schools">
      <div className="cusec-section__inner">
        <div className="cusec-sponsors-header">
          <h2>
            From Across <em>the Country</em>
          </h2>
          <p>We've welcomed students from a wide range of universities and colleges.</p>
        </div>

        <div className="cusec-schools-regions">
          {regionsData.slice(0, 3).map((region) => (
            <div key={region.name} className="cusec-schools-region">
              <h3 className="cusec-schools-region-title">{region.name}</h3>
              <div className="cusec-sponsors-grid">
                {region.schools.slice(0, 5).map((school, i) => (
                  <div key={`${region.name}-${i}`} className="cusec-school-item" title={school.name}>
                    {school.logo ? (
                      <Image src={school.logo} alt={`${school.name} Logo`} />
                    ) : (
                      <span className="cusec-school-name-fallback">{school.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="cusec-sponsors-actions">
          <ButtonLink href="/participant-schools">See All Participant Schools</ButtonLink>
        </div>
      </div>
    </section>
  );
}