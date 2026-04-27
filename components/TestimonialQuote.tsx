import type { Testimonial } from "@/lib/content";

type TestimonialQuoteProps = {
  testimonial: Testimonial;
};

export function TestimonialQuote({ testimonial }: TestimonialQuoteProps) {
  return (
    <figure className="cusec-testimonial">
      <blockquote>
        <p>{testimonial.quote}</p>
      </blockquote>
      <figcaption>{testimonial.attribution}</figcaption>
    </figure>
  );
}
