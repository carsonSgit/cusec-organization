import type { StaticImageData } from "next/image";
import shopify from "../assets/sponsor-logos/shopify.png";
import amazon from "../assets/sponsor-logos/amazon_logo.png";
import rbc from "../assets/sponsor-logos/rbc.png";
import ibm from "../assets/sponsor-logos/ibm.png";
import deloitte from "../assets/sponsor-logos/deloitte.png";
import morganStanley from "../assets/sponsor-logos/morgan-stanley.png";
import nokia from "../assets/sponsor-logos/nokia.png";
import tripAdvisor from "../assets/sponsor-logos/trip-advisor.png";
import wolfram from "../assets/sponsor-logos/wolfram.png";
import compulsionGames from "../assets/sponsor-logos/compulsion_Games.png";
import unity from "../assets/sponsor-logos/unity.png";
import onepassword from "../assets/sponsor-logos/1password-logo.png";
import cse from "../assets/sponsor-logos/cse.png";
import kinaxis from "../assets/sponsor-logos/kinaxis.png";
import wonsulting from "../assets/sponsor-logos/wonsulting.png";
import wish from "../assets/sponsor-logos/wish.png";
import tailed from "../assets/sponsor-logos/tailed.png";
import knox from "../assets/sponsor-logos/knox.png";
import genetec from "../assets/sponsor-logos/genetec.png";
import stickermule from "../assets/sponsor-logos/stickermule.png";
import stickerbeaver from "../assets/sponsor-logos/stickerbeaver.png";
import ssense from "../assets/sponsor-logos/ssense_logo.png";
import fellow from "../assets/sponsor-logos/fellow.png";
import egghead from "../assets/sponsor-logos/egghead-Logo.png";
import diff from "../assets/sponsor-logos/diff.png";
import ciena from "../assets/sponsor-logos/ciena.png";
import balsamiq from "../assets/sponsor-logos/balsamiq-logo-noborder-screen.png";
import gadget from "../assets/sponsor-logos/gadget.png";
import accenture from "../assets/sponsor-logos/accenture_logo.png";

export type Sponsor = {
  name: string;
  logo: StaticImageData;
  info?: string;
};

export const sponsorsData: Sponsor[] = [
  { name: "Shopify", logo: shopify, info: "Long-standing supporter of student tech conferences." },
  { name: "Amazon", logo: amazon, info: "Empowering developers to build the future." },
  { name: "RBC", logo: rbc, info: "Investing in the next generation of engineers." },
  { name: "IBM", logo: ibm, info: "Pioneering technology and innovation." },
  { name: "Deloitte", logo: deloitte, info: "Consulting and technology solutions provider." },
  { name: "Morgan Stanley", logo: morganStanley, info: "Global financial services and tech engineering." },
  { name: "Nokia", logo: nokia, info: "Creating the technology that helps the world act together." },
  { name: "Trip Advisor", logo: tripAdvisor, info: "Connecting people to experiences worldwide." },
  { name: "Wolfram", logo: wolfram, info: "Computation meets knowledge." },
  { name: "Compulsion Games", logo: compulsionGames, info: "Crafting unique gaming experiences." },
  { name: "Unity", logo: unity, info: "The world's leading platform for real-time content." },
  { name: "Accenture", logo: accenture, info: "Delivering on the promise of technology and human ingenuity." },
  { name: "1Password", logo: onepassword, info: "Security solutions for businesses and individuals." },
  { name: "CSE", logo: cse, info: "Canada's national cryptologic agency." },
  { name: "Kinaxis", logo: kinaxis, info: "Supply chain management and planning software." },
  { name: "Wonsulting", logo: wonsulting, info: "Helping underdogs turn into winners." },
  { name: "Wish", logo: wish, info: "Global e-commerce platform." },
  { name: "Tailed", logo: tailed, info: "Supporting the software engineering community." },
  { name: "Knox", logo: knox, info: "Innovative technology ecosystem partner." },
  { name: "Genetec", logo: genetec, info: "Security, intelligence, and operations." },
  { name: "Sticker Mule", logo: stickermule, info: "Custom stickers that kick ass." },
  { name: "Sticker Beaver", logo: stickerbeaver, info: "Premium quality custom stickers." },
  { name: "SSENSE", logo: ssense, info: "Elevating the intersection of fashion and technology." },
  { name: "Fellow", logo: fellow, info: "Meeting productivity and management software." },
  { name: "Egghead", logo: egghead, info: "Bite-sized web development video training." },
  { name: "Diff", logo: diff, info: "Creative commerce agency." },
  { name: "Ciena", logo: ciena, info: "Networking systems, services, and software." },
  { name: "Balsamiq", logo: balsamiq, info: "Rapid wireframing software." },
  { name: "Gadget", logo: gadget, info: "The full-stack platform for building apps." },
];
