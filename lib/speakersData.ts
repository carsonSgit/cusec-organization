import type { StaticImageData } from "next/image";
import { pickByKey } from "./pick";
import aaronPatterson from "../assets/speaker-photos/aaron-patterson.png";
import alexKarp from "../assets/speaker-photos/alex-karp.png";
import alexisOhanian from "../assets/speaker-photos/alexis-ohanian.png";
import bretVictor from "../assets/speaker-photos/bret-victor.png";
import bruceSchneier from "../assets/speaker-photos/bruce-schneier.png";
import davidHeinemeierHansson from "../assets/speaker-photos/david-heinemeier-hansson.png";
import douglasCrockford from "../assets/speaker-photos/douglas-crackford.png";
import gradyBooch from "../assets/speaker-photos/grady-booch.png";
import gregKroahHartman from "../assets/speaker-photos/greg-kroah-hartman.png";
import jeffAtwood from "../assets/speaker-photos/jeff-atwood.png";
import joelSpolsky from "../assets/speaker-photos/joel-spolsky.png";
import joellePineau from "../assets/speaker-photos/joelle-pineau.png";
import juliaEvans from "../assets/speaker-photos/julia-evans.png";
import kathySierra from "../assets/speaker-photos/kathy-sierra.png";
import kentBeck from "../assets/speaker-photos/kent-beck.png";
import michaelSeibel from "../assets/speaker-photos/michael-seibel.png";
import richardStallman from "../assets/speaker-photos/richard-stallman.png";
import sandiMetz from "../assets/speaker-photos/sandi-metz.png";
import yehudaKatz from "../assets/speaker-photos/yehuda-katz.png";
import jeffUllman from "../assets/speaker-photos/jeff-ullman.png";

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
    kentBeck,
    2008,
  ),
  speaker(
    "Richard Stallman",
    "Founder of the GNU Project and Free Software Movement",
    "https://stallman.org/",
    richardStallman,
    2004,
  ),
  speaker(
    "Joel Spolsky",
    "Software developer, writer, and co-founder of Stack Overflow and Trello",
    "https://www.joelonsoftware.com/",
    joelSpolsky,
    2006,
  ),
  speaker(
    "Jeff Atwood",
    "Co-founder of Stack Overflow and programming blogger behind Coding Horror",
    "https://blog.codinghorror.com/",
    jeffAtwood,
    2007,
  ),
  speaker(
    "Alexis Ohanian",
    "Entrepreneur and co-founder of Reddit",
    "https://en.wikipedia.org/wiki/Alexis_Ohanian",
    alexisOhanian,
    2011,
  ),
  speaker(
    "David Heinemeier Hansson",
    "Creator of Ruby on Rails and co-owner/CTO of Basecamp",
    "https://dhh.dk/",
    davidHeinemeierHansson,
    2009,
  ),
  speaker(
    "Douglas Crockford",
    "Computer programmer best known for popularizing JSON",
    "https://www.crockford.com/",
    douglasCrockford,
    2010,
  ),
  speaker(
    "Bruce Schneier",
    "Cybersecurity expert, cryptographer, and security author",
    "https://www.schneier.com/",
    bruceSchneier,
    2012,
  ),
  speaker(
    "Bret Victor",
    "Interface designer and computer scientist known for interactive computing concepts",
    "http://worrydream.com/",
    bretVictor,
    2013,
  ),
  speaker(
    "Greg Kroah-Hartman",
    "Linux kernel developer and maintainer",
    "https://en.wikipedia.org/wiki/Greg_Kroah-Hartman",
    gregKroahHartman,
    2014,
  ),
  speaker(
    "Grady Booch",
    "Software engineer and co-creator of UML (Unified Modeling Language)",
    "https://en.wikipedia.org/wiki/Grady_Booch",
    gradyBooch,
    2005,
  ),
  speaker(
    "Jeff Ullman",
    "Stanford computer science professor known for databases and compiler theory",
    "https://profiles.stanford.edu/jeffrey-ullman",
    jeffUllman,
    2015,
  ),
  speaker(
    "Michael Seibel",
    "Entrepreneur, former CEO of Twitch, and partner at Y Combinator",
    "https://www.michaelseibel.com/",
    michaelSeibel,
    2018,
  ),
  speaker(
    "Alex Karp",
    "Author of 'Running Start: How to get a job in tech, keep that job, and thrive'. Engineering manager at Thumbtack, ",
    "https://www.alexkarp.net/",
    alexKarp,
    2019,
  ),
  speaker(
    "Joelle Pineau",
    "AI researcher, professor at McGill University, and former Meta AI leader",
    "https://www.cs.mcgill.ca/~jpineau/",
    joellePineau,
    2020,
  ),
  speaker(
    "Yehuda Katz",
    "Open source developer known for Ember.js, Ruby on Rails, and Rust contributions",
    "https://yehudakatz.com/",
    yehudaKatz,
    2016,
  ),
  speaker(
    "Aaron Patterson",
    "Ruby core developer and major contributor to Ruby on Rails",
    "https://tenderlovemaking.com/",
    aaronPatterson,
    2017,
  ),
  speaker(
    "Julia Evans",
    "Software engineer and educator known for approachable programming zines and systems content",
    "https://jvns.ca/",
    juliaEvans,
    2021,
  ),
  speaker(
    "Kathy Sierra",
    "Programming educator and co-creator of the Head First book series",
    "https://en.wikipedia.org/wiki/Kathy_Sierra",
    kathySierra,
    2008,
  ),
  speaker(
    "Sandi Metz",
    "Software architect and author known for object-oriented design and Ruby expertise",
    "https://sandimetz.com/",
    sandiMetz,
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
