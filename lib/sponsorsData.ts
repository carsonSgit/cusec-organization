import type { StaticImageData } from "next/image";
import { pickByKey } from "./pick";
import onepassword from "../assets/sponsor-logos/1password-logo.png";
import accenture from "../assets/sponsor-logos/accenture_logo.png";
import adobe from "../assets/sponsor-logos/adobe-logo.png";
import amazon from "../assets/sponsor-logos/amazon_logo.png";
import autodesk from "../assets/sponsor-logos/autodesk-logo.png";
import aws from "../assets/sponsor-logos/aws.png";
import balsamiq from "../assets/sponsor-logos/balsamiq-logo-noborder-screen.png";
import blackberry from "../assets/sponsor-logos/blackberry-logo.png";
import cae from "../assets/sponsor-logos/CAE.png";
import capitalOne from "../assets/sponsor-logos/capitalone.png";
import ciena from "../assets/sponsor-logos/ciena.png";
import compulsionGames from "../assets/sponsor-logos/compulsion_Games.png";
import cse from "../assets/sponsor-logos/cse.png";
import d2l from "../assets/sponsor-logos/D2L.png";
import deloitte from "../assets/sponsor-logos/deloitte.png";
import diff from "../assets/sponsor-logos/diff.png";
import dropbox from "../assets/sponsor-logos/dropbox-logo.png";
import ea from "../assets/sponsor-logos/ea-logo.png";
import egghead from "../assets/sponsor-logos/egghead-Logo.png";
import evolvingWeb from "../assets/sponsor-logos/evolvingweb.png";
import fellow from "../assets/sponsor-logos/fellow.png";
import gadget from "../assets/sponsor-logos/gadget.png";
import gameloft from "../assets/sponsor-logos/gameloft-logo.png";
import ge from "../assets/sponsor-logos/GE.png";
import genetec from "../assets/sponsor-logos/genetec.png";
import gm from "../assets/sponsor-logos/GM.png";
import google from "../assets/sponsor-logos/google.png";
import ibm from "../assets/sponsor-logos/ibm.png";
import iqmetrix from "../assets/sponsor-logos/iQmetrix.png";
import khanAcademy from "../assets/sponsor-logos/khan academy.png";
import kinaxis from "../assets/sponsor-logos/kinaxis.png";
import knox from "../assets/sponsor-logos/knox.png";
import lightspeed from "../assets/sponsor-logos/lightspeed.png";
import microsoft from "../assets/sponsor-logos/microsoft.png";
import morganStanley from "../assets/sponsor-logos/morgan-stanley.png";
import nokia from "../assets/sponsor-logos/nokia.png";
import oracle from "../assets/sponsor-logos/oracle-logo.png";
import palantir from "../assets/sponsor-logos/palantir.png";
import qlik from "../assets/sponsor-logos/qlik.png";
import qnx from "../assets/sponsor-logos/qnx-logo.png";
import rbc from "../assets/sponsor-logos/rbc.png";
import riotGames from "../assets/sponsor-logos/riot-games.png";
import sap from "../assets/sponsor-logos/SAP.png";
import shopify from "../assets/sponsor-logos/shopify.png";
import spiria from "../assets/sponsor-logos/SPIRIA.png";
import ssense from "../assets/sponsor-logos/ssense_logo.png";
import stickerBeaver from "../assets/sponsor-logos/stickerbeaver.png";
import stickerMule from "../assets/sponsor-logos/stickermule.png";
import stripe from "../assets/sponsor-logos/stripe.png";
import tailed from "../assets/sponsor-logos/tailed.png";
import tandemLaunch from "../assets/sponsor-logos/tandemlaunch.png";
import td from "../assets/sponsor-logos/TD.png";
import telus from "../assets/sponsor-logos/telus-logo.png";
import tripAdvisor from "../assets/sponsor-logos/trip-advisor.png";
import ubisoft from "../assets/sponsor-logos/ubisoft.png";
import unity from "../assets/sponsor-logos/unity.png";
import voiceflow from "../assets/sponsor-logos/voiceflow.png";
import wealthsimple from "../assets/sponsor-logos/wealthsimple.png";
import wish from "../assets/sponsor-logos/wish.png";
import wolfram from "../assets/sponsor-logos/wolfram.png";
import wonsulting from "../assets/sponsor-logos/wonsulting.png";
import yelp from "../assets/sponsor-logos/yelp.png";

export type Sponsor = {
  name: string;
  logo: StaticImageData;
  info?: string;
};

export const sponsorsData: Sponsor[] = [
  { name: "Google", logo: google, info: "Organizing the world's information." },
  { name: "Microsoft", logo: microsoft, info: "Empowering every person and organization." },
  { name: "Shopify", logo: shopify, info: "Long-standing supporter of student tech conferences." },
  { name: "Amazon", logo: amazon, info: "Empowering developers to build the future." },
  { name: "AWS", logo: aws, info: "Amazon Web Services, global cloud provider." },
  { name: "Stripe", logo: stripe, info: "Financial infrastructure for the internet." },
  {
    name: "Palantir",
    logo: palantir,
    info: "Building software that integrates data, decisions, and operations.",
  },
  { name: "Dropbox", logo: dropbox, info: "Cloud collaboration and file sharing platform." },
  { name: "Adobe", logo: adobe, info: "Creative, marketing, and document software." },
  { name: "Oracle", logo: oracle, info: "Enterprise database, cloud, and software provider." },
  { name: "EA", logo: ea, info: "Global leader in digital interactive entertainment." },
  { name: "Riot Games", logo: riotGames, info: "Developer and publisher of player-focused games." },
  { name: "Unity", logo: unity, info: "The world's leading platform for real-time content." },
  { name: "General Motors", logo: gm, info: "Innovating the future of mobility." },
  { name: "RBC", logo: rbc, info: "Investing in the next generation of engineers." },
  { name: "IBM", logo: ibm, info: "Pioneering technology and innovation." },
  { name: "Deloitte", logo: deloitte, info: "Consulting and technology solutions provider." },
  {
    name: "Morgan Stanley",
    logo: morganStanley,
    info: "Global financial services and tech engineering.",
  },
  {
    name: "Nokia",
    logo: nokia,
    info: "Creating the technology that helps the world act together.",
  },
  { name: "SAP", logo: sap, info: "Enterprise application software." },
  { name: "TD", logo: td, info: "Leading North American financial institution." },
  { name: "Capital One", logo: capitalOne, info: "Financial services and technology pioneer." },
  { name: "GE", logo: ge, info: "Digital industrial technology solutions." },
  {
    name: "Wealthsimple",
    logo: wealthsimple,
    info: "Financial tools to help you grow your money.",
  },
  { name: "Lightspeed", logo: lightspeed, info: "Cloud-based point of sale and e-commerce." },
  { name: "TELUS", logo: telus, info: "Canadian telecommunications and technology company." },
  {
    name: "Research In Motion",
    logo: blackberry,
    info: "BlackBerry maker and mobile technology pioneer.",
  },
  { name: "Autodesk", logo: autodesk, info: "Design, engineering, and entertainment software." },
  { name: "QNX", logo: qnx, info: "Real-time operating systems and embedded software." },
  { name: "Gameloft", logo: gameloft, info: "Developer and publisher of mobile games." },
  { name: "Voiceflow", logo: voiceflow, info: "Designing, prototyping, and building voice apps." },
  { name: "iQmetrix", logo: iqmetrix, info: "Retail management software solutions." },
  { name: "SPIRIA", logo: spiria, info: "Custom software and digital transformation." },
  { name: "Trip Advisor", logo: tripAdvisor, info: "Connecting people to experiences worldwide." },
  { name: "Wolfram", logo: wolfram, info: "Computation meets knowledge." },
  { name: "Compulsion Games", logo: compulsionGames, info: "Crafting unique gaming experiences." },
  {
    name: "Accenture",
    logo: accenture,
    info: "Delivering on the promise of technology and human ingenuity.",
  },
  {
    name: "1Password",
    logo: onepassword,
    info: "Security solutions for businesses and individuals.",
  },
  { name: "CSE", logo: cse, info: "Canada's national cryptologic agency." },
  { name: "Kinaxis", logo: kinaxis, info: "Supply chain management and planning software." },
  { name: "Wonsulting", logo: wonsulting, info: "Helping underdogs turn into winners." },
  { name: "Wish", logo: wish, info: "Global e-commerce platform." },
  { name: "Yelp", logo: yelp, info: "Connecting people with great local businesses." },
  { name: "Khan Academy", logo: khanAcademy, info: "Free, world-class education for anyone." },
  { name: "CAE", logo: cae, info: "High-tech training and simulation solutions." },
  { name: "Qlik", logo: qlik, info: "Data integration and analytics solutions." },
  { name: "D2L", logo: d2l, info: "Transforming the way the world learns." },
  {
    name: "TandemLaunch",
    logo: tandemLaunch,
    info: "Creating deep tech startups from university research.",
  },
  {
    name: "Evolving Web",
    logo: evolvingWeb,
    info: "Digital agency specializing in Drupal and modern web.",
  },
  {
    name: "Ubisoft",
    logo: ubisoft,
    info: "Creator of original and memorable interactive experiences.",
  },
  { name: "Tailed", logo: tailed, info: "Supporting the software engineering community." },
  { name: "Knox", logo: knox, info: "Innovative technology ecosystem partner." },
  { name: "Genetec", logo: genetec, info: "Security, intelligence, and operations." },
  { name: "Sticker Mule", logo: stickerMule, info: "Custom stickers that kick ass." },
  { name: "Sticker Beaver", logo: stickerBeaver, info: "Premium quality custom stickers." },
  { name: "SSENSE", logo: ssense, info: "Elevating the intersection of fashion and technology." },
  { name: "Fellow", logo: fellow, info: "Meeting productivity and management software." },
  { name: "Egghead", logo: egghead, info: "Bite-sized web development video training." },
  { name: "Diff", logo: diff, info: "Creative commerce agency." },
  { name: "Ciena", logo: ciena, info: "Networking systems, services, and software." },
  { name: "Balsamiq", logo: balsamiq, info: "Rapid wireframing software." },
  { name: "Gadget", logo: gadget, info: "The full-stack platform for building apps." },
];

function sponsorsByName(names: string[]): Sponsor[] {
  return pickByKey(sponsorsData, "name", names);
}

export const sponsorMarqueeRows = {
  top: sponsorsByName([
    "Google",
    "Microsoft",
    "Amazon",
    "Shopify",
    "Stripe",
    "Palantir",
    "Dropbox",
    "Adobe",
    "Oracle",
    "IBM",
    "EA",
    "Riot Games",
    "Unity",
    "General Motors",
    "1Password",
  ]),
  bottom: sponsorsByName([
    "Lightspeed",
    "Wealthsimple",
    "SAP",
    "iQmetrix",
    "SPIRIA",
    "Fellow",
    "Gadget",
    "Voiceflow",
    "QNX",
    "TELUS",
    "Research In Motion",
    "Autodesk",
    "Gameloft",
    "Morgan Stanley",
    "RBC",
    "Deloitte",
    "Accenture",
  ]),
};
