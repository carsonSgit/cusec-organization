import { Footer } from "@/components/Footer";
import { LogoTile } from "@/components/LogoTile";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { sponsorsData } from "@/lib/sponsorsData";

export default function HistoricSponsorsPage() {
  return (
    <>
      <PageShell>
        <section className="cusec-section cusec-archive-section">
          <div className="cusec-section__inner">
            <SectionHeading
              title={
                <>
                  Historic <em>Sponsors</em>
                </>
              }
              lede="Meet the amazing partners who have supported CUSEC throughout the years."
              align="left"
            />

            <div className="cusec-archive-list cusec-historic-sponsors-list">
              {sponsorsData.map((sponsor) => (
                <article key={sponsor.name} className="cusec-archive-item">
                  <div className="cusec-archive-item__header">
                    <div className="cusec-archive-item__brand cusec-historic-sponsor__brand">
                      <LogoTile
                        name={sponsor.name}
                        logo={sponsor.logo}
                        variant="compact-left"
                      />

                      <h3>{sponsor.name}</h3>
                    </div>
                  </div>

                  <div className="cusec-archive-item__content">
                    <p>{sponsor.info}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
      <Footer />
    </>
  );
}
