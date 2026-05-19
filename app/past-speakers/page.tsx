import { Footer } from "@/components/Footer";
import { PastSpeakersBrowser } from "@/components/PastSpeakersBrowser";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { speakersData } from "@/lib/speakersData";

export default function PastSpeakersPage() {
  return (
    <>
      <PageShell>
        <section className="cusec-section cusec-archive-section">
          <div className="cusec-section__inner">
            <SectionHeading
              title={
                <>
                  Past <em>Speakers</em>
                </>
              }
              lede="Meet the amazing individuals who have spoken at CUSEC throughout the years."
              align="left"
            />

            <PastSpeakersBrowser speakers={speakersData} />
          </div>
        </section>
      </PageShell>
      <Footer />
    </>
  );
}
