import { EditorialSection } from "@/components/EditorialSection";
import { Hero } from "@/components/Hero";
import { ImageBand } from "@/components/ImageBand";
import { PageShell } from "@/components/PageShell";
import { StatsStatement } from "@/components/StatsStatement";
import { TestimonialsGrid } from "@/components/TestimonialsGrid";
import { editorialSections, testimonials } from "@/lib/content";
import cusecBand from "../assets/cusec.png";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <ImageBand
        src={cusecBand}
        alt="CUSEC attendees gathered for a group photo in a conference hall."
      />
      <StatsStatement />
      <TestimonialsGrid testimonials={testimonials} />
      {editorialSections.map((section) => (
        <EditorialSection key={section.id} section={section} />
      ))}
    </PageShell>
  );
}
