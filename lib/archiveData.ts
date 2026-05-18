import type { StaticImageData } from "next/image";
import { pickByKey } from "./pick";
import logo2003 from "../assets/cusec-logos/2003.png";
import logo2004 from "../assets/cusec-logos/2004.png";
import logo2005 from "../assets/cusec-logos/2005.png";
import logo2006 from "../assets/cusec-logos/2006.png";
import logo2007 from "../assets/cusec-logos/2007.png";
import logo2008 from "../assets/cusec-logos/2008.png";
import logo2009 from "../assets/cusec-logos/2009.png";
import logo2010 from "../assets/cusec-logos/2010.png";
import logo2011 from "../assets/cusec-logos/2011.png";
import logo2012 from "../assets/cusec-logos/2012.png";
import logo2013 from "../assets/cusec-logos/2013.png";
import logo2014 from "../assets/cusec-logos/2014.png";
import logo2015 from "../assets/cusec-logos/2015.png";
import logo2016 from "../assets/cusec-logos/2016.png";
import logo2017 from "../assets/cusec-logos/2017.png";
import logo2018 from "../assets/cusec-logos/2018.png";
import logo2019 from "../assets/cusec-logos/2019.png";
import logo2020 from "../assets/cusec-logos/2020.png";
import logo2021 from "../assets/cusec-logos/2021.png";
import logo2022 from "../assets/cusec-logos/2022.png";
import logo2023 from "../assets/cusec-logos/2023.png";
import logo2024 from "../assets/cusec-logos/2024.png";
import logo2025 from "../assets/cusec-logos/2025.png";
import logo2026 from "../assets/cusec-logos/2026.png";

export type ArchiveYear = {
  year: number;
  logo: StaticImageData;
  title: string;
  info: string;
  url?: string;
  detailedInfo?: string;
};

export const archiveData: ArchiveYear[] = [
  {
    year: 2026,
    logo: logo2026,
    title: "CUSEC 2026",
    info: "The 25th anniversary of the Canadian University Software Engineering Conference.",
    url: "https://2026.cusec.net",
  },
  {
    year: 2025,
    logo: logo2025,
    title: "CUSEC 2025",
    info: "Building the future of tech, together in Montreal.",
    url: "https://2025.cusec.net",
  },
  {
    year: 2024,
    logo: logo2024,
    title: "CUSEC 2024",
    info: "Exploring artificial intelligence, accessibility, and modern software practices.",
    url: "https://2024.cusec.net",
  },
  {
    year: 2023,
    logo: logo2023,
    title: "CUSEC 2023",
    info: "A return to in-person networking, learning, and sharing ideas.",
    url: "https://2023.cusec.net",
  },
  {
    year: 2022,
    logo: logo2022,
    title: "CUSEC 2022",
    info: "Connecting students globally through virtual experiences.",
    url: "https://2022.cusec.net",
  },
  {
    year: 2021,
    logo: logo2021,
    title: "CUSEC 2021",
    info: "Pioneering the first fully virtual CUSEC experience.",
    url: "https://2021.cusec.net",
  },
  {
    year: 2020,
    logo: logo2020,
    title: "CUSEC 2020",
    info: "Pre-pandemic insights into system architecture and web platforms.",
    url: "https://2020.cusec.net",
  },
  {
    year: 2019,
    logo: logo2019,
    title: "CUSEC 2019",
    info: "Diverse voices in technology shaping the next generation.",
    url: "https://2019.cusec.net",
  },
  {
    year: 2018,
    logo: logo2018,
    title: "CUSEC 2018",
    info: "Discussions on open-source software and decentralized technologies.",
    url: "https://2018.cusec.net",
  },
  {
    year: 2017,
    logo: logo2017,
    title: "CUSEC 2017",
    info: "Highlighting innovative startups and software engineering workflows.",
    url: "https://2017.cusec.net",
  },
  {
    year: 2016,
    logo: logo2016,
    title: "CUSEC 2016",
    info: "Focusing on security, privacy, and the impact of technology.",
    url: "https://2016.cusec.net",
  },
  {
    year: 2015,
    logo: logo2015,
    title: "CUSEC 2015",
    info: "Bridging the gap between theory and industry application.",
    url: "https://2015.cusec.net",
  },
  {
    year: 2014,
    logo: logo2014,
    title: "CUSEC 2014",
    info: "Advancements in mobile development and scalable infrastructure.",
    url: "https://2014.cusec.net",
  },
  {
    year: 2013,
    logo: logo2013,
    title: "CUSEC 2013",
    info: "Empowering developers to build tools that matter.",
    url: "https://2013.cusec.net",
  },
  {
    year: 2012,
    logo: logo2012,
    title: "CUSEC 2012",
    info: "Showcasing the rise of cloud computing and big data.",
    url: "https://2012.cusec.net",
  },
  {
    year: 2011,
    logo: logo2011,
    title: "CUSEC 2011",
    info: "A decade of inspiring the future of Canadian tech.",
    url: "https://2011.cusec.net",
  },
  {
    year: 2010,
    logo: logo2010,
    title: "CUSEC 2010",
    info: "Exploring the intersections of hardware and software.",
    detailedInfo: "The 2010 edition of CUSEC focused on exploring the deep intersections between hardware and software, welcoming pioneering speakers from across North America to share insights into systems engineering, early smartphone app development, and the burgeoning indie tech scene. It remained a vital meeting ground for students.",
  },
  {
    year: 2009,
    logo: logo2009,
    title: "CUSEC 2009",
    info: "Conversations on agile development and team dynamics.",
    detailedInfo: "In 2009, the software industry was rapidly adopting Agile methodologies. CUSEC brought these cutting-edge development workflows directly to students, hosting workshops on pair programming, test-driven development, and navigating complex team dynamics in the ever-evolving tech landscape.",
  },
  {
    year: 2008,
    logo: logo2008,
    title: "CUSEC 2008",
    info: "Web 2.0 and the changing landscape of internet applications.",
    detailedInfo: "As Web 2.0 continued to revolutionize how we interact online, CUSEC 2008 featured thought-provoking talks on rich internet applications, user-generated content, and the shifting paradigms of web development. The conference solidified its reputation as the premier event for Canadian computer science students.",
  },
  {
    year: 2007,
    logo: logo2007,
    title: "CUSEC 2007",
    info: "Foundational talks on software architecture.",
    detailedInfo: "CUSEC 2007 was a deep dive into software architecture and design patterns. Long before modern frameworks became ubiquitous, speakers at this edition helped students understand the timeless principles of building robust, scalable, and maintainable software systems from the ground up.",
  },
  {
    year: 2006,
    logo: logo2006,
    title: "CUSEC 2006",
    info: "Five years of student-led tech inspiration.",
    detailedInfo: "Celebrating its fifth anniversary, CUSEC 2006 marked a major milestone for the conference. It featured retrospective talks on how the industry had evolved since the dot-com bubble and looked ahead to a future dominated by open-source collaboration and increasingly accessible development tools.",
  },
  {
    year: 2005,
    logo: logo2005,
    title: "CUSEC 2005",
    info: "Growth of the open-source movement in academia.",
    detailedInfo: "CUSEC 2005 captured the rising tide of the open-source movement. The conference highlighted the importance of contributing to public codebases, learning from peers globally, and how academic institutions could better integrate open-source philosophies into their computer science curricula.",
  },
  {
    year: 2004,
    logo: logo2004,
    title: "CUSEC 2004",
    info: "Expanding the reach across Canadian universities.",
    detailedInfo: "Building on the success of its earlier editions, CUSEC 2004 expanded its reach, bringing together students from a wider array of Canadian universities. The event fostered cross-provincial networking and established the conference as a truly national gathering for future software engineers.",
  },
  {
    year: 2003,
    logo: logo2003,
    title: "CUSEC 2003",
    info: "The second edition of the premier software engineering conference.",
    detailedInfo: "The second-ever CUSEC proved that the inaugural event was no fluke. It cemented the need for a dedicated, student-run software engineering conference in Canada, providing an essential platform for students to learn from industry veterans and connect with like-minded peers early in their careers.",
  }
];

// The curated years shown on the landing page before "See Full Archive".
export const featuredArchive: ArchiveYear[] = pickByKey(archiveData, "year", [
  2026, 2025, 2024, 2023, 2022, 2021,
]);
