import Image from "next/image";
import { Footer } from "@/components/Footer";
import { PageShell } from "@/components/PageShell";
import { sponsorsData } from "@/lib/sponsorsData";

export default function HistoricSponsorsPage() {
  return (
    <>
      <PageShell>
        <section className="cusec-section cusec-archive-section">
          <div className="cusec-section__inner">
            <div className="cusec-archive-header">
              <h2>
                Historic <em>Sponsors</em>
              </h2>
              <p>Meet the amazing partners who have supported CUSEC throughout the years.</p>
            </div>

            <div className="cusec-archive-list cusec-historic-sponsors-list">
              {sponsorsData.map((sponsor) => (
                <article key={sponsor.name} className="cusec-archive-item">
                  <div className="cusec-archive-item__header">
                    <div className="cusec-archive-item__brand cusec-historic-sponsor__brand">
                      <div className="cusec-school-item cusec-historic-sponsor__logo">
                        <Image
                          src={sponsor.logo}
                          alt={`${sponsor.name} Logo`}
                          quality={95}
                          sizes="160px"
                        />
                      </div>

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
