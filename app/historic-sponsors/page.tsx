import { PageShell } from "@/components/PageShell";
import { sponsorsData } from "@/lib/sponsorsData";
import { Footer } from "@/components/Footer";
import Image from "next/image";

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

            <div className="cusec-archive-list" style={{ marginTop: "4rem" }}>
              {sponsorsData.map((sponsor, idx) => (
                <article key={idx} className="cusec-archive-item">
                  <div className="cusec-archive-item__header">
                    <div
                        className="cusec-archive-item__brand"
                        style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
                        >
                        {sponsor.logo ? (
                            <div
                                className="cusec-school-item"
                                style={{
                                    height: "clamp(3rem, 6vw, 4.5rem)",
                                    width: "auto",
                                    margin: 0,
                                    justifyContent: "flex-start",
                                    opacity: 1,
                                }}
                                >
                                <Image src={sponsor.logo} alt={`${sponsor.name} Logo`} />
                            </div>
                        ) : null}

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