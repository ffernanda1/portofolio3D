import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  postgre,
  atkp,
  pnup,
  imip,
  rubicamp,
  memories,
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
    name: "postgresql",
    icon: postgre,
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
      "Sebagai seorang alumni dari Politeknik Penerbangan Makassar, saya merasa bangga dengan pendidikan yang telah saya dapatkan. Selama masa studi di kampus, semangat saya untuk belajar dan berkembang di dunia penerbangan semakin berkembang.",
      "Kurikulum yang komprehensif di Politeknik Penerbangan Makassar telah memperluas pengetahuan saya tentang navigasi udara dan keterampilan teknis yang sangat penting dalam industri ini. Saya juga telah terlibat dalam berbagai proyek dan organisasi, yang telah mengasah kemampuan kepemimpinan dan kerjasama tim saya.",
      "Pengalaman lapangan yang saya dapatkan selama di kampus juga sangat berharga dalam membantu saya memahami dan menghadapi tantangan dunia nyata.",
      "Sebagai alumni, saya siap untuk memberikan kontribusi positif dan menerapkan semua yang telah saya pelajari untuk terus maju dalam karir profesional di industri penerbangan.",
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
    name: "Instagram Web-based",
    description:
      "Web-based platform aplikasi yang bekerja seperti instagram, memiliki login dengan Auth Google dan register/login dengan email(JWT). Setiap user bisa memposting postingan, like postingan user lain (tiap user hanya bisa like 1 kali ditiap postingan) dan edit, delete postingan (hanya dapat bekerja di postingan user tersebut).",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongodbAtlas",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "brown-text-gradient",
      },
    ],
    image: memories,
    source_code_link: "https://github.com/ffernanda1/Memories_React",
  },
  {
    name: "Point of Sale",
    description:
      "Web application yang bekerja seperti kasir penjualan dan pembelian barang, memiliki auto generate invoice, munggunakan database postgresql dan trigger function postgresql sebagai dasar pada perubahan data sehingga ketika data di input, data yang memiliki hubungan dengan data yang diinput juga mengalami perubahan sesuai perubahan yang seharusnya.",
    tags: [
      {
        name: "Jquery",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "brown-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ffernanda1/ChallengeWEB/tree/main/ChallengePos",
  },
  {
    name: "Laundry App Android",
    description:
      "Aplikasi Android yang dibuat dengan React Native dan figma. Pengguna bisa mengorder pakaian untuk di laundry dan mengantar kembali pakaian yang telah selesai dengan aplikasi.",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ffernanda1/LaundryNative",
  },
  {
    name: "Vue Simple Chat",
    description:
      "Simple chat menggunakan VueJs, Simple chat ini juga memiliki user seperti aplikasi Whatsapp.",
    tags: [
      {
        name: "VueJS",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Mongoose",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ffernanda1/vue-map-task",
  },
];

export { services, technologies, experiences, testimonials, projects };