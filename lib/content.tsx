import type { StaticImageData } from "next/image";
import { Highlight } from "@/components/Highlight";
import fieldTall from "../assets/carsonsgit_A_lush_field_with_beautiful_blue_sky._The_field_sh_da3849c3-f6ce-4335-b673-ce909abc29c6_2.png";
import fieldWide from "../assets/carsonsgit_A_lush_field_with_beautiful_blue_sky._The_field_shou_b156f163-ef7e-41aa-9f1a-029ea08834f0.png";

export type Testimonial = {
  quote: React.ReactNode;
  attribution: string;
};

export type EditorialSectionContent = {
  id: string;
  heading: React.ReactNode;
  body: React.ReactNode[];
  image: StaticImageData;
  alt: string;
  imageSide: "left" | "right";
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "You will learn more at CUSEC in 3 days than your entire 1st year of university.",
    attribution: "Michel Parisien, Student, Concordia University",
  },
  {
    quote: (
      <>
        CUSEC has grown into <strong>the premier</strong> conference by computer
        science students, for computer science students - across the whole of
        Canada. It's too bad there isn't an equivalent student-run conference
        for American computer science students.
      </>
    ),
    attribution: "Jeff Atwood, Co-Founder of StackOverflow",
  },
  {
    quote:
      "What a blast. If you're a student up here doing anything software-related, attend. If you're a veteran and they ask you to speak, accept. If you're an employer looking for talent, sponsor.",
    attribution: "Tim Bray, Founder of OpenText, Co-Creator of XML",
  },
  {
    quote:
      "Just letting you know I got interviews with both AutoDesk and Microsoft setup thanks to CUSEC.",
    attribution: "Loren, Student, Concordia University",
  },
];

export const editorialSections: EditorialSectionContent[] = [
  {
    id: "what-is-cusec",
    heading: (
      <>
        What <em>is</em> CUSEC?
      </>
    ),
    image: fieldWide,
    alt: "A bright green field under a vivid blue sky.",
    imageSide: "right",
    body: [
      <>
        The Canadian University Software Engineering Conference is referred to
        by many as the{" "}
        <Highlight>gathering of the future of Software Engineering</Highlight>.
        Students who are passionate about Software Engineering, from across
        Canada and diverse concentrations, gather under one roof for three full
        days to learn from the world's most famous and sought after software
        engineering speakers, researchers and professionals.
      </>,
      <>
        It's not just about the presentations though. The conference gives you
        the opportunity to meet others who share your passion - to see what your
        peers are making and how they're experimenting in tech.{" "}
        <Highlight>
          CUSEC gives you the opportunity to have open conversations with the
          figures shaping the industry as well as the people who build the
          things we use every day.
        </Highlight>{" "}
        Allowing you to learn directly from the people you look up to. And don't
        forget, we also have a growing career fair that might be of interest to
        you.
      </>,
    ],
  },
  {
    id: "is-cusec-for-me",
    heading: (
      <>
        Is CUSEC for <em>me</em>?
      </>
    ),
    image: fieldTall,
    alt: "A sunny field with trees and blue sky.",
    imageSide: "left",
    body: [
      <>
        It doesn't matter if you're an undergrad in engineering or if you're
        getting your MBA,{" "}
        <Highlight>
          if you're interested in the current state of the industry then CUSEC
          is for you.
        </Highlight>{" "}
        The conference is organized primarily with software engineering
        undergrads and graduate students in mind. That does not mean that other
        people cannot benefit, the program is always of the highest quality and
        anyone who is interested can gain a lot from the conference.
      </>,
    ],
  },
];
