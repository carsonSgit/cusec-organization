import { Footer } from "@/components/Footer";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ParticipantSchoolsBrowser } from "@/components/ParticipantSchoolsBrowser";
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

            <ParticipantSchoolsBrowser regions={regionsData} />
          </div>
        </section>
      </PageShell>
      <Footer />
    </>
  );
}
