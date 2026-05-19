import type { StaticImageData } from "next/image";
import { pickByKey } from "./pick";
import onepassword from "../assets/sponsor-logos/1password-logo.png";
import accenture from "../assets/sponsor-logos/accenture_logo.png";
import adobe from "../assets/sponsor-logos/adobe-logo.png";
import aerotek from "../assets/sponsor-logos/aerotek.svg";
import amazon from "../assets/sponsor-logos/amazon_logo.png";
import appDirect from "../assets/sponsor-logos/AppDirect.svg";
import apress from "../assets/sponsor-logos/apress.svg";
import autodesk from "../assets/sponsor-logos/autodesk.webp";
import aws from "../assets/sponsor-logos/aws.png";
import azure from "../assets/sponsor-logos/azure.svg";
import balsamiq from "../assets/sponsor-logos/balsamiq.svg";
import benbria from "../assets/sponsor-logos/benbria.webp";
import blackberry from "../assets/sponsor-logos/blackberry.svg";
import bmo from "../assets/sponsor-logos/bmo.svg";
import cae from "../assets/sponsor-logos/cae.svg";
import capitalOne from "../assets/sponsor-logos/capitalone.png";
import ciena from "../assets/sponsor-logos/ciena.png";
import cisco from "../assets/sponsor-logos/cisco.svg";
import compulsionGames from "../assets/sponsor-logos/compulsion.svg";
import cse from "../assets/sponsor-logos/cse.png";
import cutc from "../assets/sponsor-logos/cutc.jpeg";
import d2l from "../assets/sponsor-logos/d2l.png";
import deloitte from "../assets/sponsor-logos/deloitte.png";
import diff from "../assets/sponsor-logos/diff.svg";
import digitalOcean from "../assets/sponsor-logos/digitalocean.svg";
import directEnergy from "../assets/sponsor-logos/directenergy.webp";
import dropbox from "../assets/sponsor-logos/dropbox-logo.png";
import ea from "../assets/sponsor-logos/ea.svg";
import egghead from "../assets/sponsor-logos/egghead.webp";
import emids from "../assets/sponsor-logos/emids.svg";
import evertz from "../assets/sponsor-logos/evertz.svg";
import evolvingWeb from "../assets/sponsor-logos/evolvingweb.svg";
import fellow from "../assets/sponsor-logos/fellow.svg";
import gadget from "../assets/sponsor-logos/gadget.svg";
import gameloft from "../assets/sponsor-logos/gameloft-logo.png";
import ge from "../assets/sponsor-logos/GE.png";
import genetec from "../assets/sponsor-logos/genetec.png";
import geotab from "../assets/sponsor-logos/geotab.svg";
import gm from "../assets/sponsor-logos/generalmotors.svg";
import google from "../assets/sponsor-logos/google.png";
import ibm from "../assets/sponsor-logos/ibm.png";
import iqmetrix from "../assets/sponsor-logos/iqmetrix.png";
import khanAcademy from "../assets/sponsor-logos/khan academy.png";
import kinaxis from "../assets/sponsor-logos/kinaxis.svg";
import knox from "../assets/sponsor-logos/knox.png";
import leaseweb from "../assets/sponsor-logos/leaseweb.svg";
import lightspeed from "../assets/sponsor-logos/lightspeed.png";
import megaBloks from "../assets/sponsor-logos/megablocks.png";
import microsoft from "../assets/sponsor-logos/microsoft.png";
import morganStanley from "../assets/sponsor-logos/morgan-stanley.png";
import namecheap from "../assets/sponsor-logos/namecheap.svg";
import nexj from "../assets/sponsor-logos/nexj.svg";
import nexsan from "../assets/sponsor-logos/nexsan.svg";
import nokia from "../assets/sponsor-logos/nokia.png";
import numerator from "../assets/sponsor-logos/numerator.svg";
import oreilly from "../assets/sponsor-logos/oreilly.png";
import oracle from "../assets/sponsor-logos/oracle-logo.png";
import palantir from "../assets/sponsor-logos/palantir.png";
import qlik from "../assets/sponsor-logos/qlik.svg";
import qnx from "../assets/sponsor-logos/qnx.svg";
import rbc from "../assets/sponsor-logos/rbc.svg";
import realDecoy from "../assets/sponsor-logos/realdecoy.svg";
import riotGames from "../assets/sponsor-logos/riot.png";
import sap from "../assets/sponsor-logos/SAP.png";
import serviceNow from "../assets/sponsor-logos/servicenow.svg";
import shopify from "../assets/sponsor-logos/shopify.png";
import spiria from "../assets/sponsor-logos/spiria.jpg";
import ssense from "../assets/sponsor-logos/ssense_logo.png";
import stickerBeaver from "../assets/sponsor-logos/stickerbeaver.png";
import stickerMule from "../assets/sponsor-logos/stickermule.png";
import stripe from "../assets/sponsor-logos/stripe.png";
import tailed from "../assets/sponsor-logos/tailed.svg";
import tandemLaunch from "../assets/sponsor-logos/tandemlaunch.svg";
import td from "../assets/sponsor-logos/TD.png";
import telus from "../assets/sponsor-logos/telus-logo.png";
import tripAdvisor from "../assets/sponsor-logos/tripadvisor.svg";
import ubisoft from "../assets/sponsor-logos/ubisoft.png";
import unity from "../assets/sponsor-logos/unity.png";
import velocity from "../assets/sponsor-logos/velocity.png";
import voiceflow from "../assets/sponsor-logos/voiceflow.svg";
import wealthsimple from "../assets/sponsor-logos/wealthsimple.png";
import wish from "../assets/sponsor-logos/wish.svg";
import wolfram from "../assets/sponsor-logos/wolfram.png";
import wonsulting from "../assets/sponsor-logos/wonsulting.png";
import yelp from "../assets/sponsor-logos/yelp.png";

export type Sponsor = {
  name: string;
  logo: StaticImageData;
  info?: string;
};

function sponsor(name: string, logo: StaticImageData, info: string): Sponsor {
  return { name, logo, info };
}

export const sponsorsData: Sponsor[] = [
  sponsor("Google", google, "Organizing the world's information."),
  sponsor("Microsoft", microsoft, "Empowering every person and organization."),
  sponsor("Shopify", shopify, "Long-standing supporter of student tech conferences."),
  sponsor("Amazon", amazon, "Empowering developers to build the future."),
  sponsor("AWS", aws, "Amazon Web Services, global cloud provider."),
  sponsor("Stripe", stripe, "Financial infrastructure for the internet."),
  sponsor(
    "Palantir",
    palantir,
    "Building software that integrates data, decisions, and operations.",
  ),
  sponsor("Dropbox", dropbox, "Cloud collaboration and file sharing platform."),
  sponsor("Adobe", adobe, "Creative, marketing, and document software."),
  sponsor("Oracle", oracle, "Enterprise database, cloud, and software provider."),
  sponsor("EA", ea, "Global leader in digital interactive entertainment."),
  sponsor("Riot Games", riotGames, "Developer and publisher of player-focused games."),
  sponsor("Unity", unity, "The world's leading platform for real-time content."),
  sponsor("General Motors", gm, "Innovating the future of mobility."),
  sponsor("RBC", rbc, "Investing in the next generation of engineers."),
  sponsor("IBM", ibm, "Pioneering technology and innovation."),
  sponsor("Deloitte", deloitte, "Consulting and technology solutions provider."),
  sponsor("Morgan Stanley", morganStanley, "Global financial services and tech engineering."),
  sponsor("Nokia", nokia, "Creating the technology that helps the world act together."),
  sponsor("SAP", sap, "Enterprise application software."),
  sponsor("TD", td, "Leading North American financial institution."),
  sponsor("Capital One", capitalOne, "Financial services and technology pioneer."),
  sponsor("GE", ge, "Digital industrial technology solutions."),
  sponsor("Wealthsimple", wealthsimple, "Financial tools to help you grow your money."),
  sponsor("Lightspeed", lightspeed, "Cloud-based point of sale and e-commerce."),
  sponsor("TELUS", telus, "Canadian telecommunications and technology company."),
  sponsor("Research In Motion", blackberry, "BlackBerry maker and mobile technology pioneer."),
  sponsor("Autodesk", autodesk, "Design, engineering, and entertainment software."),
  sponsor("QNX", qnx, "Real-time operating systems and embedded software."),
  sponsor("Gameloft", gameloft, "Developer and publisher of mobile games."),
  sponsor("Voiceflow", voiceflow, "Designing, prototyping, and building voice apps."),
  sponsor("iQmetrix", iqmetrix, "Retail management software solutions."),
  sponsor("SPIRIA", spiria, "Custom software and digital transformation."),
  sponsor("Trip Advisor", tripAdvisor, "Connecting people to experiences worldwide."),
  sponsor("Wolfram", wolfram, "Computation meets knowledge."),
  sponsor("Compulsion Games", compulsionGames, "Crafting unique gaming experiences."),
  sponsor("Accenture", accenture, "Delivering on the promise of technology and human ingenuity."),
  sponsor("1Password", onepassword, "Security solutions for businesses and individuals."),
  sponsor("CSE", cse, "Canada's national cryptologic agency."),
  sponsor("Kinaxis", kinaxis, "Supply chain management and planning software."),
  sponsor("Wonsulting", wonsulting, "Helping underdogs turn into winners."),
  sponsor("Wish", wish, "Global e-commerce platform."),
  sponsor("Yelp", yelp, "Connecting people with great local businesses."),
  sponsor("Khan Academy", khanAcademy, "Free, world-class education for anyone."),
  sponsor("CAE", cae, "High-tech training and simulation solutions."),
  sponsor("Qlik", qlik, "Data integration and analytics solutions."),
  sponsor("D2L", d2l, "Transforming the way the world learns."),
  sponsor("TandemLaunch", tandemLaunch, "Creating deep tech startups from university research."),
  sponsor("Evolving Web", evolvingWeb, "Digital agency specializing in Drupal and modern web."),
  sponsor("Ubisoft", ubisoft, "Creator of original and memorable interactive experiences."),
  sponsor("Tailed", tailed, "Supporting the software engineering community."),
  sponsor("Knox", knox, "Innovative technology ecosystem partner."),
  sponsor("Genetec", genetec, "Security, intelligence, and operations."),
  sponsor("Sticker Mule", stickerMule, "Custom stickers that kick ass."),
  sponsor("Sticker Beaver", stickerBeaver, "Premium quality custom stickers."),
  sponsor("SSENSE", ssense, "Elevating the intersection of fashion and technology."),
  sponsor("Fellow", fellow, "Meeting productivity and management software."),
  sponsor("Egghead", egghead, "Bite-sized web development video training."),
  sponsor("Diff", diff, "Creative commerce agency."),
  sponsor("Ciena", ciena, "Networking systems, services, and software."),
  sponsor("Balsamiq", balsamiq, "Rapid wireframing software."),
  sponsor("Gadget", gadget, "The full-stack platform for building apps."),
  sponsor("Aerotek", aerotek, "Recruiting and staffing partner for technical talent."),
  sponsor("AppDirect", appDirect, "Subscription commerce platform for digital services."),
  sponsor("Apress", apress, "Technical publishing for developers and IT professionals."),
  sponsor("Benbria", benbria, "Customer experience and engagement software."),
  sponsor("BMO", bmo, "North American financial services provider."),
  sponsor("Cisco", cisco, "Networking, security, and collaboration technology."),
  sponsor("CUTC", cutc, "Canadian Undergraduate Technology Conference."),
  sponsor("DigitalOcean", digitalOcean, "Cloud infrastructure for developers and startups."),
  sponsor("Direct Energy", directEnergy, "Energy services for homes and businesses."),
  sponsor("Emids", emids, "Healthcare technology and digital transformation partner."),
  sponsor("Evertz", evertz, "Broadcast and media technology solutions."),
  sponsor("Geotab", geotab, "Connected vehicle and fleet management technology."),
  sponsor("Leaseweb", leaseweb, "Cloud hosting and infrastructure provider."),
  sponsor("Mega Bloks", megaBloks, "Creative construction toys and play experiences."),
  sponsor("Microsoft Azure", azure, "Cloud computing platform from Microsoft."),
  sponsor("Namecheap", namecheap, "Domain registration, hosting, and web services."),
  sponsor("NexJ Systems", nexj, "Enterprise CRM and client management software."),
  sponsor("Nexsan", nexsan, "Enterprise storage systems and data management."),
  sponsor("Numerator", numerator, "Consumer insights and market intelligence platform."),
  sponsor("O'Reilly", oreilly, "Learning resources for technology professionals."),
  sponsor("RealDecoy", realDecoy, "Digital commerce and software consulting partner."),
  sponsor("ServiceNow", serviceNow, "Digital workflow platform for enterprise teams."),
  sponsor("Velocity", velocity, "Startup and entrepreneurship community supporter."),
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
