import Image from "next/image";
import type { Speaker } from "@/lib/speakersData";

export function SpeakerCard({ speaker, bio }: { speaker: Speaker; bio: string }) {
  return (
    <article className="cusec-archive-item cusec-historic-sponsor cusec-historic-sponsor--mosaic">
      <div className="cusec-archive-item__header">
        <a
          className="cusec-archive-item__brand cusec-historic-sponsor__brand cusec-historic-sponsor__link"
          href={speaker.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cusec-speaker-photo">
            <Image
              src={speaker.image}
              alt={speaker.name}
              fill
              sizes="240px"
              quality={95}
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3>{speaker.name}</h3>
        </a>
      </div>

      <div className="cusec-archive-item__content">
        <p>{bio}</p>
      </div>
    </article>
  );
}
