import { pickByKey } from "./pick";

export type Speaker = {
  name: string;
  description: string;
  url: string;
  imagePath: string;
  year?: number;
};

export const speakersData: Speaker[] = [
  {
    name: "Kent Beck",
    description: "Software engineer and creator of Extreme Programming (XP), influential in Agile software development",
    url: "https://kentbeck.com/",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2008
  },
  {
    name: "Richard Stallman",
    description: "Founder of the GNU Project and Free Software Movement",
    url: "https://stallman.org/",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2004
  },
  {
    name: "Joel Spolsky",
    description: "Software developer, writer, and co-founder of Stack Overflow and Trello",
    url: "https://www.joelonsoftware.com/",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2006
  },
  {
    name: "Jeff Atwood",
    description: "Co-founder of Stack Overflow and programming blogger behind Coding Horror",
    url: "https://blog.codinghorror.com/",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2007
  },
  {
    name: "Alexis Ohanian",
    description: "Entrepreneur and co-founder of Reddit",
    url: "https://en.wikipedia.org/wiki/Alexis_Ohanian",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2011
  },
  {
    name: "David Heinemeier Hansson",
    description: "Creator of Ruby on Rails and co-owner/CTO of Basecamp",
    url: "https://dhh.dk/",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2009
  },
  {
    name: "Douglas Crockford",
    description: "Computer programmer best known for popularizing JSON",
    url: "https://www.crockford.com/",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2010
  },
  {
    name: "Bruce Schneier",
    description: "Cybersecurity expert, cryptographer, and security author",
    url: "https://www.schneier.com/",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2012
  },
  {
    name: "Bret Victor",
    description: "Interface designer and computer scientist known for interactive computing concepts",
    url: "http://worrydream.com/",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2013
  },
  {
    name: "Greg Kroah-Hartman",
    description: "Linux kernel developer and maintainer",
    url: "https://en.wikipedia.org/wiki/Greg_Kroah-Hartman",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2014
  },
  {
    name: "Grady Booch",
    description: "Software engineer and co-creator of UML (Unified Modeling Language)",
    url: "https://en.wikipedia.org/wiki/Grady_Booch",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2005
  },
  {
    name: "Jeff Ullman",
    description: "Stanford computer science professor known for databases and compiler theory",
    url: "https://profiles.stanford.edu/jeffrey-ullman",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2015
  },
  {
    name: "Michael Seibel",
    description: "Entrepreneur, former CEO of Twitch, and partner at Y Combinator",
    url: "https://www.michaelseibel.com/",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2018
  },
  {
    name: "Alex Karp",
    description: "Author of 'Running Start: How to get a job in tech, keep that job, and thrive'. Engineering manager at Thumbtack, ",
    url: "https://www.alexkarp.net/",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2019
  },
  {
    name: "Joelle Pineau",
    description: "AI researcher, professor at McGill University, and former Meta AI leader",
    url: "https://www.cs.mcgill.ca/~jpineau/",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2020
  },
  {
    name: "Yehuda Katz",
    description: "Open source developer known for Ember.js, Ruby on Rails, and Rust contributions",
    url: "https://yehudakatz.com/",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2016
  },
  {
    name: "Aaron Patterson",
    description: "Ruby core developer and major contributor to Ruby on Rails",
    url: "https://tenderlovemaking.com/",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2017
  },
  {
    name: "Julia Evans",
    description: "Software engineer and educator known for approachable programming zines and systems content",
    url: "https://jvns.ca/",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2021
  },
  {
    name: "Kathy Sierra",
    description: "Programming educator and co-creator of the Head First book series",
    url: "https://en.wikipedia.org/wiki/Kathy_Sierra",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2008
  },
  {
    name: "Sandi Metz",
    description: "Software architect and author known for object-oriented design and Ruby expertise",
    url: "https://sandimetz.com/",
    imagePath: "/images/placeholder-speaker.svg",
    year: 2022
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
