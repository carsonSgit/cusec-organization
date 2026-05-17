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
};

export const sponsorsData: Sponsor[] = [
  { name: "Shopify", logo: shopify },
  { name: "Amazon", logo: amazon },
  { name: "RBC", logo: rbc },
  { name: "IBM", logo: ibm },
  { name: "Deloitte", logo: deloitte },
  { name: "Morgan Stanley", logo: morganStanley },
  { name: "Nokia", logo: nokia },
  { name: "Trip Advisor", logo: tripAdvisor },
  { name: "Wolfram", logo: wolfram },
  { name: "Compulsion Games", logo: compulsionGames },
  { name: "Unity", logo: unity },
  { name: "Accenture", logo: accenture },
  { name: "1Password", logo: onepassword },
  { name: "CSE", logo: cse },
  { name: "Kinaxis", logo: kinaxis },
  { name: "Wonsulting", logo: wonsulting },
  { name: "Wish", logo: wish },
  { name: "Tailed", logo: tailed },
  { name: "Knox", logo: knox },
  { name: "Genetec", logo: genetec },
  { name: "Sticker Mule", logo: stickermule },
  { name: "Sticker Beaver", logo: stickerbeaver },
  { name: "SSENSE", logo: ssense },
  { name: "Fellow", logo: fellow },
  { name: "Egghead", logo: egghead },
  { name: "Diff", logo: diff },
  { name: "Ciena", logo: ciena },
  { name: "Balsamiq", logo: balsamiq },
  { name: "Gadget", logo: gadget },
];
