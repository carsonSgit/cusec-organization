"use client";

import Image from "next/image";
import { sponsorsData } from "@/lib/sponsorsData";
import { ButtonLink } from "@/components/ButtonLink";

export function SponsorsSection() {
  const midpoint = Math.ceil(sponsorsData.length / 2);
  const topSponsors = sponsorsData.slice(0, midpoint);
  const bottomSponsors = sponsorsData.slice(midpoint);

  return (
    <section className="cusec-section cusec-sponsors-section" id="sponsors">
      <div className="cusec-section__inner">
        <div className="cusec-sponsors-header">
          <h2>
            Supported by the <em>Best</em>
          </h2>
          <p>CUSEC wouldn't be possible without our amazing sponsors who have supported us over the years.</p>
        </div>

        <div className="cusec-marquee-container">
          <div className="cusec-marquee-track cusec-marquee-track--right">
            {[...topSponsors, ...topSponsors].map((sponsor, i) => (
              <div key={`top-${i}`} className="cusec-school-item" title={sponsor.name}>
                <Image src={sponsor.logo} alt={`${sponsor.name} Logo`} />
              </div>
            ))}
          </div>

          <div className="cusec-marquee-track cusec-marquee-track--left">
            {[...bottomSponsors, ...bottomSponsors].map((sponsor, i) => (
              <div key={`bottom-${i}`} className="cusec-school-item" title={sponsor.name}>
                <Image src={sponsor.logo} alt={`${sponsor.name} Logo`} />
              </div>
            ))}
          </div>
        </div>

        <div className="cusec-sponsors-actions">
          <ButtonLink href="/historic-sponsors">See All Historic Sponsors</ButtonLink>
        </div>
      </div>
    </section>
  );
}
