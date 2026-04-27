import { ButtonLink } from "./ButtonLink";
import { Section } from "./Section";

export function Hero() {
  return (
    <Section className="cusec-hero-section">
      <div className="cusec-hero">
        <div className="cusec-hero__masthead">
          <h1>CUSEC</h1>
          <p>Canadian University Software Engineering Conference</p>
        </div>
        <div className="cusec-hero__intro">
          <p>
            CUSEC is a non-profit organization hosting technology conferences
            organized by students, for students. Founded in 2002, we host a
            conference annually in early January, this year we are gearing up
            for CUSEC 2027.
          </p>
          <ButtonLink href="#">Visit CUSEC 2027's site</ButtonLink>
        </div>
      </div>
    </Section>
  );
}
