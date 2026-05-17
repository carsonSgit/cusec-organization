import type { StaticImageData } from "next/image";

import accenture from "../assets/sponsor-logos/accenture.png";
import amazon from "../assets/sponsor-logos/amazon.png";
import aws from "../assets/sponsor-logos/aws.png";
import cae from "../assets/sponsor-logos/CAE.png";
import capitalone from "../assets/sponsor-logos/capitalone.png";
import ciena from "../assets/sponsor-logos/ciena.png";
import compulsiongames from "../assets/sponsor-logos/compulsion games.png";
import cse from "../assets/sponsor-logos/CSE.png";
import d2l from "../assets/sponsor-logos/D2L.png";
import deloitte from "../assets/sponsor-logos/deloitte.png";
import evolvingweb from "../assets/sponsor-logos/evolvingweb.png";
import fellow from "../assets/sponsor-logos/fellow.png";
import gadget from "../assets/sponsor-logos/gadget.png";
import ge from "../assets/sponsor-logos/GE.png";
import genetec from "../assets/sponsor-logos/genetec.png";
import gm from "../assets/sponsor-logos/GM.png";
import google from "../assets/sponsor-logos/google.png";
import ibm from "../assets/sponsor-logos/ibm.png";
import iqmetrix from "../assets/sponsor-logos/iQmetrix.png";
import khanacademy from "../assets/sponsor-logos/khan academy.png";
import kinaxis from "../assets/sponsor-logos/kinaxis.png";
import lightspeed from "../assets/sponsor-logos/lightspeed.png";
import microsoft from "../assets/sponsor-logos/microsoft.png";
import morganstanley from "../assets/sponsor-logos/morganStanley.png";
import nokia from "../assets/sponsor-logos/nokia.png";
import palantir from "../assets/sponsor-logos/palantir.png";
import qlik from "../assets/sponsor-logos/qlik.png";
import rbc from "../assets/sponsor-logos/rbc.png";
import riotgames from "../assets/sponsor-logos/riot-games.png";
import sap from "../assets/sponsor-logos/SAP.png";
import shopify from "../assets/sponsor-logos/shopify.png";
import spiria from "../assets/sponsor-logos/SPIRIA.png";
import stripe from "../assets/sponsor-logos/stripe.png";
import tandemlaunch from "../assets/sponsor-logos/tandemlaunch.png";
import td from "../assets/sponsor-logos/TD.png";
import tripadvisor from "../assets/sponsor-logos/TripAdvisor.png";
import ubisoft from "../assets/sponsor-logos/ubisoft.png";
import unity from "../assets/sponsor-logos/unity.png";
import voiceflow from "../assets/sponsor-logos/voiceflow.png";
import wealthsimple from "../assets/sponsor-logos/wealthsimple.png";
import wish from "../assets/sponsor-logos/wish.png";
import yelp from "../assets/sponsor-logos/yelp.png";

export type Sponsor = {
  name: string;
  logo: StaticImageData;
  info?: string;
};

export const sponsorsData: Sponsor[] = [
  { name: "Google", logo: google, info: "Organizing the world's information." },
  { name: "Microsoft", logo: microsoft, info: "Empowering every person and organization." },
  { name: "Amazon", logo: amazon, info: "Empowering developers to build the future." },
  { name: "AWS", logo: aws, info: "Amazon Web Services, global cloud provider." },
  { name: "IBM", logo: ibm, info: "Pioneering technology and innovation." },
  { name: "SAP", logo: sap, info: "Enterprise application software." },
  { name: "Shopify", logo: shopify, info: "Long-standing supporter of student tech conferences." },
  { name: "Stripe", logo: stripe, info: "Financial infrastructure for the internet." },
  { name: "Palantir", logo: palantir, info: "Building software that integrates data, decisions, and operations." },
  { name: "Accenture", logo: accenture, info: "Delivering on the promise of technology and human ingenuity." },
  { name: "Deloitte", logo: deloitte, info: "Consulting and technology solutions provider." },
  { name: "Morgan Stanley", logo: morganstanley, info: "Global financial services and tech engineering." },
  { name: "RBC", logo: rbc, info: "Investing in the next generation of engineers." },
  { name: "TD", logo: td, info: "Leading North American financial institution." },
  { name: "Capital One", logo: capitalone, info: "Financial services and technology pioneer." },
  { name: "GE", logo: ge, info: "Digital industrial technology solutions." },
  { name: "GM", logo: gm, info: "Innovating the future of mobility." },
  { name: "Ubisoft", logo: ubisoft, info: "Creator of original and memorable interactive experiences." },
  { name: "Riot Games", logo: riotgames, info: "Developer and publisher of player-focused games." },
  { name: "Compulsion Games", logo: compulsiongames, info: "Crafting unique gaming experiences." },
  { name: "Unity", logo: unity, info: "The world's leading platform for real-time content." },
  { name: "Nokia", logo: nokia, info: "Creating the technology that helps the world act together." },
  { name: "Wealthsimple", logo: wealthsimple, info: "Financial tools to help you grow your money." },
  { name: "Lightspeed", logo: lightspeed, info: "Cloud-based point of sale and e-commerce." },
  { name: "Yelp", logo: yelp, info: "Connecting people with great local businesses." },
  { name: "Trip Advisor", logo: tripadvisor, info: "Connecting people to experiences worldwide." },
  { name: "Khan Academy", logo: khanacademy, info: "Free, world-class education for anyone." },
  { name: "Voiceflow", logo: voiceflow, info: "Designing, prototyping, and building voice apps." },
  { name: "CAE", logo: cae, info: "High-tech training and simulation solutions." },
  { name: "Ciena", logo: ciena, info: "Networking systems, services, and software." },
  { name: "Genetec", logo: genetec, info: "Security, intelligence, and operations." },
  { name: "Kinaxis", logo: kinaxis, info: "Supply chain management and planning software." },
  { name: "Qlik", logo: qlik, info: "Data integration and analytics solutions." },
  { name: "D2L", logo: d2l, info: "Transforming the way the world learns." },
  { name: "CSE", logo: cse, info: "Canada's national cryptologic agency." },
  { name: "Wish", logo: wish, info: "Global e-commerce platform." },
  { name: "SPIRIA", logo: spiria, info: "Custom software and digital transformation." },
  { name: "TandemLaunch", logo: tandemlaunch, info: "Creating deep tech startups from university research." },
  { name: "Evolving Web", logo: evolvingweb, info: "Digital agency specializing in Drupal and modern web." },
  { name: "Fellow", logo: fellow, info: "Meeting productivity and management software." },
  { name: "Gadget", logo: gadget, info: "The full-stack platform for building apps." },
  { name: "iQmetrix", logo: iqmetrix, info: "Retail management software solutions." },
];