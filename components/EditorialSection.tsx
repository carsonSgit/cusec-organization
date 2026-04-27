import Image from "next/image";
import type { EditorialSectionContent } from "@/lib/content";
import { Section } from "./Section";

type EditorialSectionProps = {
  section: EditorialSectionContent;
};

export function EditorialSection({ section }: EditorialSectionProps) {
  return (
    <Section className="cusec-editorial-section">
      <article
        className={`cusec-editorial cusec-editorial--image-${section.imageSide}`}
      >
        <div className="cusec-editorial__copy">
          <h2>{section.heading}</h2>
          {section.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="cusec-editorial__media">
          <Image
            src={section.image}
            alt={section.alt}
            sizes="(max-width: 720px) 100vw, 42vw"
          />
        </div>
      </article>
    </Section>
  );
}
