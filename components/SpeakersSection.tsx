"use client";

import { useTranslations } from "next-intl";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredSpeakers, speakersData } from "@/lib/speakersData";

export function SpeakersSection() {
  const t = useTranslations("Speakers");
  const displayedSpeakers = featuredSpeakers;

  return (
    <section className="cusec-section cusec-speakers-section" id="speakers">
      <div className="cusec-section__inner">
        <SectionHeading
          title={t.rich("heading", { em: (chunks) => <em>{chunks}</em> })}
          lede={t("lede")}
          align="left"
        />

        <div className="cusec-speakers-list">
          {displayedSpeakers.map((speaker) => (
            <article key={speaker.name} className="cusec-speaker-item">
              <div className="cusec-speaker-item__content">
                <h3>{speaker.name}</h3>
                <p>{t(`bios.${speaker.name}`)}</p>
                <a
                  href={speaker.url}
                  className="cusec-archive-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("learnMore")}
                  <span className="cusec-sr-only"> {t("srAbout", { name: speaker.name })}</span>{" "}
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
            <ButtonLink href="/past-speakers">{t("seeAll")}</ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
