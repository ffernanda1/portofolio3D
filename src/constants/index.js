import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  atkp,
  pnup,
  imip,
  rubicamp,
  carrent,
  jobit,
  tripguide,
  threejs,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "D3 Teknik Navigasi Udara",
    company_name: "Politeknik Penerbangan Makassar",
    icon: atkp,
    iconBg: "#E6DEDD",
    date: "September 2017 - Agustus 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "D4 Teknik Mekatronika",
    company_name: "Politeknik Negeri Ujung Pandang",
    icon: pnup,
    iconBg: "#383E56",
    date: "Oktober 2020 - September 2021",
    points: [
      "Mencakup perpaduan antara mekanika dan elektronika. Melibatkan penggunaan sensor dan aktuator elektronik untuk mengendalikan dan memantau pergerakan dan kinerja sistem mekanis",
      "Pengembangan sistem kendali yang cerdas. Ini melibatkan desain algoritma kontrol, pengolahan sinyal, dan penggunaan mikrokontroler atau mikroprosesor untuk mengimplementasikan kendali sistem.",
    ],
  },
  {
    title: "ESP Crew",
    company_name: "PT. IMIP Morowali",
    icon: imip,
    iconBg: "#E6DEDD",
    date: "Desember 2021 - Maret 2022",
    points: [
      "Maintenance sistem kerja mesin ESP.",
      "Daily check dinamo mesin ESP.",
      "Welding pada mesin ESP.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Bootcamp: RubiCamp Bandung",
    icon: rubicamp,
    iconBg: "#383E56",
    date: "Mei 2022 - Oktober 2022",
    points: [
      "Developing website dengan bahasa pemrograman Javascript, CSS, Database SQL dari awal hingga akhir, termasuk sisi depan (front-end) dan sisi belakang (back-end) pengembangan.",
      "Developing Aplikasi Android dengan React Native untuk front-end dan juga back-end",
      "Keterampilan dalam mengidentifikasi dan memecahkan masalah yang sering terjadi pada developing aplikasi.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };