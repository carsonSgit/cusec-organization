import { pickByKey } from "./pick";

export type Speaker = {
  name: string;
  description: string;
  url: string;
};

export const speakersData: Speaker[] = [
  {
    name: "Kent Beck",
    description: "Software engineer and creator of Extreme Programming (XP), influential in Agile software development",
    url: "#"
  },
  {
    name: "Richard Stallman",
    description: "Founder of the GNU Project and Free Software Movement",
    url: "#"
  },
  {
    name: "Joel Spolsky",
    description: "Software developer, writer, and co-founder of Stack Overflow and Trello",
    url: "#"
  },
  {
    name: "Jeff Atwood",
    description: "Co-founder of Stack Overflow and programming blogger behind Coding Horror",
    url: "#"
  },
  {
    name: "Alexis Ohanian",
    description: "Entrepreneur and co-founder of Reddit",
    url: "#"
  },
  {
    name: "David Heinemeier Hansson",
    description: "Creator of Ruby on Rails and co-owner/CTO of Basecamp",
    url: "#"
  },
  {
    name: "Douglas Crockford",
    description: "Computer programmer best known for popularizing JSON",
    url: "#"
  },
  {
    name: "Bruce Schneier",
    description: "Cybersecurity expert, cryptographer, and security author",
    url: "#"
  },
  {
    name: "Bret Victor",
    description: "Interface designer and computer scientist known for interactive computing concepts",
    url: "#"
  },
  {
    name: "Greg Kroah-Hartman",
    description: "Linux kernel developer and maintainer",
    url: "#"
  },
  {
    name: "Grady Booch",
    description: "Software engineer and co-creator of UML (Unified Modeling Language)",
    url: "#"
  },
  {
    name: "Jeff Ullman",
    description: "Stanford computer science professor known for databases and compiler theory",
    url: "#"
  },
  {
    name: "Michael Seibel",
    description: "Entrepreneur, former CEO of Twitch, and partner at Y Combinator",
    url: "#"
  },
  {
    name: "Alex Karp",
    description: "CEO and co-founder of Palantir Technologies",
    url: "#"
  },
  {
    name: "Joelle Pineau",
    description: "AI researcher, professor at McGill University, and former Meta AI leader",
    url: "#"
  },
  {
    name: "Yehuda Katz",
    description: "Open source developer known for Ember.js, Ruby on Rails, and Rust contributions",
    url: "#"
  },
  {
    name: "Aaron Patterson",
    description: "Ruby core developer and major contributor to Ruby on Rails",
    url: "#"
  },
  {
    name: "Julia Evans",
    description: "Software engineer and educator known for approachable programming zines and systems content",
    url: "#"
  },
  {
    name: "Kathy Sierra",
    description: "Programming educator and co-creator of the Head First book series",
    url: "#"
  },
  {
    name: "Sandi Metz",
    description: "Software architect and author known for object-oriented design and Ruby expertise",
    url: "#"
  }
];

// The curated set shown on the landing page before "See All Speakers".
export const featuredSpeakers: Speaker[] = pickByKey(speakersData, "name", [
  "Kent Beck",
  "Richard Stallman",
  "Joel Spolsky",
  "Jeff Atwood",
  "Alexis Ohanian",
  "David Heinemeier Hansson",
  "Douglas Crockford",
  "Bruce Schneier",
  "Bret Victor",
]);
