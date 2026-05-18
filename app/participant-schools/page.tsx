import { PageShell } from "@/components/PageShell";
import { regionsData } from "@/lib/schoolsData";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function ParticipantSchoolsPage() {
  return (
    <>
      <PageShell>
        <section className="cusec-section cusec-archive-section">
          <div className="cusec-section__inner">
            <div className="cusec-archive-header">
              <h2>
                Participating <em>Schools</em>
              </h2>
              <p>
                Discover the vast network of universities and colleges that have joined CUSEC over
                the years.
              </p>
            </div>

            <div className="cusec-schools-regions">
              {regionsData.map((region) => (
                <div
                  key={region.name}
                  className="cusec-schools-region"
                  style={{ marginTop: "4rem" }}
                >
                  <h3 className="cusec-schools-region-title" style={{ textAlign: "left" }}>
                    {region.name}
                  </h3>
                  <div className="cusec-archive-list">
                    {region.schools.map((school, idx) => (
                      <article key={`${region.name}-${idx}`} className="cusec-archive-item">
                        <div className="cusec-archive-item__header">
                          <div
                            className="cusec-archive-item__brand"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              gap: "1rem",
                            }}
                          >
                            {school.logo ? (
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
                                <Image src={school.logo} alt={`${school.name} Logo`} />
                              </div>
                            ) : null}
                            <h3>{school.name}</h3>
                          </div>
                        </div>

                        <div className="cusec-archive-item__content">
                          <p>{school.info}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
      <Footer />
    </>
  );
}
