import { Footer } from "@/components/Footer";
import { HistoricSponsorsBrowser } from "@/components/HistoricSponsorsBrowser";
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

            <HistoricSponsorsBrowser sponsors={sponsorsData} />
          </div>
        </section>
      </PageShell>
      <Footer />
    </>
  );
}
