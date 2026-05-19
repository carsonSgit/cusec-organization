"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { LogoTile } from "@/components/LogoTile";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredRegions } from "@/lib/schoolsData";

export function SchoolsSection() {
  return (
    <section className="cusec-section cusec-schools-section" id="schools">
      <div className="cusec-section__inner">
        <SectionHeading
          title={
            <>
              From Across <em>the Country</em>
            </>
          }
          lede="We've welcomed students from a wide range of universities and colleges."
          align="center"
        />

        <div className="cusec-schools-regions">
          {featuredRegions.map((region) => (
            <div key={region.name} className="cusec-schools-region">
              <h3 className="cusec-schools-region-title">{region.name}</h3>
              <div className="cusec-sponsors-grid">
                {region.schools.map((school) => (
                  <LogoTile
                    key={`${region.name}-${school.name}`}
                    name={school.name}
                    url={school.url}
                    logo={school.logo}
                  />
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
