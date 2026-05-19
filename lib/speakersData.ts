import type { StaticImageData } from "next/image";
import { pickByKey } from "./pick";
import placeholderSpeaker from "../assets/speaker-photos/placeholder-speaker.svg";

export type Speaker = {
  name: string;
  description: string;
  url: string;
  image: StaticImageData;
  year?: number;
};

function speaker(
  name: string,
  description: string,
  url: string,
  image: StaticImageData,
  year?: number,
): Speaker {
  return { name, description, url, image, year };
}

export const speakersData: Speaker[] = [
  speaker(
    "Kent Beck",
    "Software engineer and creator of Extreme Programming (XP), influential in Agile software development",
    "https://kentbeck.com/",
    placeholderSpeaker,
    2008,
  ),
  speaker(
    "Richard Stallman",
    "Founder of the GNU Project and Free Software Movement",
    "https://stallman.org/",
    placeholderSpeaker,
    2004,
  ),
  speaker(
    "Joel Spolsky",
    "Software developer, writer, and co-founder of Stack Overflow and Trello",
    "https://www.joelonsoftware.com/",
    placeholderSpeaker,
    2006,
  ),
  speaker(
    "Jeff Atwood",
    "Co-founder of Stack Overflow and programming blogger behind Coding Horror",
    "https://blog.codinghorror.com/",
    placeholderSpeaker,
    2007,
  ),
  speaker(
    "Alexis Ohanian",
    "Entrepreneur and co-founder of Reddit",
    "https://en.wikipedia.org/wiki/Alexis_Ohanian",
    placeholderSpeaker,
    2011,
  ),
  speaker(
    "David Heinemeier Hansson",
    "Creator of Ruby on Rails and co-owner/CTO of Basecamp",
    "https://dhh.dk/",
    placeholderSpeaker,
    2009,
  ),
  speaker(
    "Douglas Crockford",
    "Computer programmer best known for popularizing JSON",
    "https://www.crockford.com/",
    placeholderSpeaker,
    2010,
  ),
  speaker(
    "Bruce Schneier",
    "Cybersecurity expert, cryptographer, and security author",
    "https://www.schneier.com/",
    placeholderSpeaker,
    2012,
  ),
  speaker(
    "Bret Victor",
    "Interface designer and computer scientist known for interactive computing concepts",
    "http://worrydream.com/",
    placeholderSpeaker,
    2013,
  ),
  speaker(
    "Greg Kroah-Hartman",
    "Linux kernel developer and maintainer",
    "https://en.wikipedia.org/wiki/Greg_Kroah-Hartman",
    placeholderSpeaker,
    2014,
  ),
  speaker(
    "Grady Booch",
    "Software engineer and co-creator of UML (Unified Modeling Language)",
    "https://en.wikipedia.org/wiki/Grady_Booch",
    placeholderSpeaker,
    2005,
  ),
  speaker(
    "Jeff Ullman",
    "Stanford computer science professor known for databases and compiler theory",
    "https://profiles.stanford.edu/jeffrey-ullman",
    placeholderSpeaker,
    2015,
  ),
  speaker(
    "Michael Seibel",
    "Entrepreneur, former CEO of Twitch, and partner at Y Combinator",
    "https://www.michaelseibel.com/",
    placeholderSpeaker,
    2018,
  ),
  speaker(
    "Alex Karp",
    "Author of 'Running Start: How to get a job in tech, keep that job, and thrive'. Engineering manager at Thumbtack, ",
    "https://www.alexkarp.net/",
    placeholderSpeaker,
    2019,
  ),
  speaker(
    "Joelle Pineau",
    "AI researcher, professor at McGill University, and former Meta AI leader",
    "https://www.cs.mcgill.ca/~jpineau/",
    placeholderSpeaker,
    2020,
  ),
  speaker(
    "Yehuda Katz",
    "Open source developer known for Ember.js, Ruby on Rails, and Rust contributions",
    "https://yehudakatz.com/",
    placeholderSpeaker,
    2016,
  ),
  speaker(
    "Aaron Patterson",
    "Ruby core developer and major contributor to Ruby on Rails",
    "https://tenderlovemaking.com/",
    placeholderSpeaker,
    2017,
  ),
  speaker(
    "Julia Evans",
    "Software engineer and educator known for approachable programming zines and systems content",
    "https://jvns.ca/",
    placeholderSpeaker,
    2021,
  ),
  speaker(
    "Kathy Sierra",
    "Programming educator and co-creator of the Head First book series",
    "https://en.wikipedia.org/wiki/Kathy_Sierra",
    placeholderSpeaker,
    2008,
  ),
  speaker(
    "Sandi Metz",
    "Software architect and author known for object-oriented design and Ruby expertise",
    "https://sandimetz.com/",
    placeholderSpeaker,
    2022,
  ),
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
