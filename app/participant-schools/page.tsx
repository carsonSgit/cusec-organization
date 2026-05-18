import { Footer } from "@/components/Footer";
import { LogoTile } from "@/components/LogoTile";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { regionsData } from "@/lib/schoolsData";

export default function ParticipantSchoolsPage() {
  return (
    <>
      <PageShell>
        <section className="cusec-section cusec-archive-section">
          <div className="cusec-section__inner">
            <SectionHeading
              title={
                <>
                  Participating <em>Schools</em>
                </>
              }
              lede="Discover the vast network of universities and colleges that have joined CUSEC over the years."
              align="left"
            />

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
                          <div className="cusec-archive-item__brand cusec-historic-sponsor__brand">
                            {school.logo ? (
                              <LogoTile
                                name={school.name}
                                logo={school.logo}
                                variant="compact-left"
                              />
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
