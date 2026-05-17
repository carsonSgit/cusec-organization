import type { StaticImageData } from "next/image";

import algonquin from "../assets/school-logos/algonquin 1.png";
import athabasca from "../assets/school-logos/athabasca 1.png";
import bishops from "../assets/school-logos/bishops 1.png";
import brandon from "../assets/school-logos/brandon 1.png";
import calgary from "../assets/school-logos/calgary 1.png";
import carleton from "../assets/school-logos/carleton 1.png";
import centennial from "../assets/school-logos/centennial 1.png";
import concordia from "../assets/school-logos/concordia 1.png";
import dalhousie from "../assets/school-logos/dalhousie 1.png";
import dawson from "../assets/school-logos/dwason 1.png";
import ets from "../assets/school-logos/ets 1.png";
import fanshawe from "../assets/school-logos/fanshawe 1.png";
import geraldgodin from "../assets/school-logos/geraldgodin 1.png";
import jac from "../assets/school-logos/jac 1.png";
import laval from "../assets/school-logos/laval 1.png";
import marianopolis from "../assets/school-logos/mario 1.png";
import mcgill from "../assets/school-logos/mcgill 1.png";
import mcmaster from "../assets/school-logos/mcmaster 1.png";
import moncton from "../assets/school-logos/moncton 1.png";
import otu from "../assets/school-logos/otu 1.png";
import poly from "../assets/school-logos/poly 1.png";
import queens from "../assets/school-logos/queens 1.png";
import rmc from "../assets/school-logos/rmc 1.png";
import rrc from "../assets/school-logos/rrc 1.png";
import sait from "../assets/school-logos/sait 1.png";
import seneca from "../assets/school-logos/Seneca 1.png";
import sfu from "../assets/school-logos/sfu 1.png";
import sherbrooke from "../assets/school-logos/sherbrooke 1.png";
import sheridan from "../assets/school-logos/sheridan 1.png";
import standrews from "../assets/school-logos/standrews 1.png";
import teluq from "../assets/school-logos/teluq 1.png";
import thompson from "../assets/school-logos/thompson 1.png";
import tmu from "../assets/school-logos/tmu 1.png";
import ualberta from "../assets/school-logos/ualberta 1.png";
import ubc from "../assets/school-logos/ubc 1.png";
import ucw from "../assets/school-logos/ucw 1.png";
import udem from "../assets/school-logos/udem 1.png";
import unb from "../assets/school-logos/unb 1.png";
import union from "../assets/school-logos/union 1.png";
import uofg from "../assets/school-logos/uofg 1.png";
import uofi from "../assets/school-logos/uofi 1.png";
import uofm from "../assets/school-logos/uofm 1.png";
import uofr from "../assets/school-logos/uofr 1.png";
import uoft from "../assets/school-logos/uoft 1.png";
import uofw from "../assets/school-logos/uofw 1.png";
import uottawa from "../assets/school-logos/uottawa 1.png";
import uqam from "../assets/school-logos/uqam 1.png";
import uvic from "../assets/school-logos/uvic 1.png";
import vanier from "../assets/school-logos/vanier 1.png";
import waterloo from "../assets/school-logos/waterloo 1.png";
import western from "../assets/school-logos/western 1.png";
import wilfridlaurier from "../assets/school-logos/wilfridlaurier 1.png";
import windsor from "../assets/school-logos/windsor 1.png";
import york from "../assets/school-logos/york 1.png";

export type School = {
  name: string;
  logo?: StaticImageData;
  info?: string;
};

export type Region = {
  name: string;
  schools: School[];
};

export const regionsData: Region[] = [
  {
    name: "Ontario",
    schools: [
      { name: "University of Waterloo", logo: waterloo, info: "Placeholder text for detailed school info." },
      { name: "University of Toronto", logo: uoft, info: "Placeholder text for detailed school info." },
      { name: "McMaster University", logo: mcmaster, info: "Placeholder text for detailed school info." },
      { name: "Queen's University", logo: queens, info: "Placeholder text for detailed school info." },
      { name: "Western University", logo: western, info: "Placeholder text for detailed school info." },
      { name: "University of Ottawa", logo: uottawa, info: "Placeholder text for detailed school info." },
      { name: "Carleton University", logo: carleton, info: "Placeholder text for detailed school info." },
      { name: "Toronto Metropolitan University", logo: tmu, info: "Placeholder text for detailed school info." },
      { name: "York University", logo: york, info: "Placeholder text for detailed school info." },
      { name: "University of Guelph", logo: uofg, info: "Placeholder text for detailed school info." },
      { name: "Wilfrid Laurier University", logo: wilfridlaurier, info: "Placeholder text for detailed school info." },
      { name: "University of Windsor", logo: windsor, info: "Placeholder text for detailed school info." },
      { name: "Ontario Tech University", logo: otu, info: "Placeholder text for detailed school info." },
      { name: "Algonquin College", logo: algonquin, info: "Placeholder text for detailed school info." },
      { name: "Centennial College", logo: centennial, info: "Placeholder text for detailed school info." },
      { name: "Fanshawe College", logo: fanshawe, info: "Placeholder text for detailed school info." },
      { name: "Royal Military College", logo: rmc, info: "Placeholder text for detailed school info." },
      { name: "Seneca Polytechnic", logo: seneca, info: "Placeholder text for detailed school info." },
      { name: "Sheridan College", logo: sheridan, info: "Placeholder text for detailed school info." },
      { name: "St. Andrew's College", logo: standrews, info: "Placeholder text for detailed school info." },
    ],
  },
  {
    name: "Quebec",
    schools: [
      { name: "McGill University", logo: mcgill, info: "Placeholder text for detailed school info." },
      { name: "Concordia University", logo: concordia, info: "Placeholder text for detailed school info." },
      { name: "Université de Montréal", logo: udem, info: "Placeholder text for detailed school info." },
      { name: "Polytechnique Montréal", logo: poly, info: "Placeholder text for detailed school info." },
      { name: "École de technologie supérieure (ÉTS)", logo: ets, info: "Placeholder text for detailed school info." },
      { name: "Université du Québec à Montréal", logo: uqam, info: "Placeholder text for detailed school info." },
      { name: "Université Laval", logo: laval, info: "Placeholder text for detailed school info." },
      { name: "Université de Sherbrooke", logo: sherbrooke, info: "Placeholder text for detailed school info." },
      { name: "TÉLUQ", logo: teluq, info: "Placeholder text for detailed school info." },
      { name: "Bishop's University", logo: bishops, info: "Placeholder text for detailed school info." },
      { name: "Dawson College", logo: dawson, info: "Placeholder text for detailed school info." },
      { name: "John Abbott College", logo: jac, info: "Placeholder text for detailed school info." },
      { name: "Vanier College", logo: vanier, info: "Placeholder text for detailed school info." },
      { name: "Marianopolis College", logo: marianopolis, info: "Placeholder text for detailed school info." },
      { name: "Collège Gérald-Godin", logo: geraldgodin, info: "Placeholder text for detailed school info." },
    ],
  },
  {
    name: "British Columbia",
    schools: [
      { name: "University of British Columbia", logo: ubc, info: "Placeholder text for detailed school info." },
      { name: "Simon Fraser University", logo: sfu, info: "Placeholder text for detailed school info." },
      { name: "University of Victoria", logo: uvic, info: "Placeholder text for detailed school info." },
      { name: "Thompson Rivers University", logo: thompson, info: "Placeholder text for detailed school info." },
    ],
  },
  {
    name: "Prairies",
    schools: [
      { name: "University of Alberta", logo: ualberta, info: "Placeholder text for detailed school info." },
      { name: "University of Calgary", logo: calgary, info: "Placeholder text for detailed school info." },
      { name: "University of Manitoba", logo: uofm, info: "Placeholder text for detailed school info." },
      { name: "University of Winnipeg", logo: uofw, info: "Placeholder text for detailed school info." },
      { name: "University of Regina", logo: uofr, info: "Placeholder text for detailed school info." },
      { name: "Athabasca University", logo: athabasca, info: "Placeholder text for detailed school info." },
      { name: "Brandon University", logo: brandon, info: "Placeholder text for detailed school info." },
      { name: "Southern Alberta Institute of Technology", logo: sait, info: "Placeholder text for detailed school info." },
      { name: "Red River College Polytechnic", logo: rrc, info: "Placeholder text for detailed school info." },
    ],
  },
  {
    name: "Atlantic",
    schools: [
      { name: "Dalhousie University", logo: dalhousie, info: "Placeholder text for detailed school info." },
      { name: "University of New Brunswick", logo: unb, info: "Placeholder text for detailed school info." },
      { name: "Université de Moncton", logo: moncton, info: "Placeholder text for detailed school info." },
    ],
  },
  {
    name: "Other",
    schools: [
      { name: "University of Illinois at Urbana-Champaign", logo: uofi, info: "Placeholder text for detailed school info." },
      { name: "Université Canada West", logo: ucw, info: "Placeholder text for detailed school info." },
      { name: "Union College", logo: union, info: "Placeholder text for detailed school info." },
    ],
  },
];