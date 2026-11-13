export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  fullDescription: string[];
  technologies: string[];
  accentColor: 'rose' | 'amber' | 'cyan' | 'emerald' | 'violet' | 'blue';
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  architectureDetails?: string[];
  metricsOrHighlights?: string[];
  images?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  isStipendBased?: boolean;
  description: string;
  companyDescription: string;
  tags: string[];
  internationalPresence?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  scoreOrStatus: string;
  achievement?: string;
  details: string;
  statusType: 'pursuing' | 'completed';
  highlights?: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  platform: string;
  skillsCovered: string[];
  previewUrl?: string;
  pdfUrl?: string;
}

export interface Participation {
  id: string;
  title: string;
  venue: string;
  type: string;
  note: string;
  image?: string;
  previewUrl?: string;
  pdfUrl?: string;
}

export const PERSONAL_INFO = {
  name: 'HITESH VAIRALE',
  role: 'Computer Science & Engineering Student',
  institution: 'Shri Sant Gajanan Maharaj College of Engineering (SSGMCE)',
  collegeLocation: 'Shegaon, Buldhana district, Maharashtra',
  hometown: 'Amravati, Maharashtra, India',
  tagline: 'A developer exploring intelligent systems, practical software engineering and real-world technology problems.',
  avatar: '/images/profile/hitesh-profile.png',
  focusAreas: [
    'AI / ML',
    'Agentic AI',
    'Forward Deployed Engineering',
    'Hardware & IoT Integration',
  ],
  bioParagraphs: [
    "I'm pursuing a B.E. in Computer Science and Engineering at Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), Shegaon, Buldhana district, Maharashtra (Duration: 2026–2029). My hometown is Amravati, Maharashtra.",
    "My learning so far has taken me from Android development and web projects to an idea that brings hardware and software together through wireless EV charging. I enjoy understanding how things work, building a working version, and improving it along the way.",
    "Recently, I've been focusing more on AI/ML, Agentic AI, and Forward Deployed Engineering. I'm particularly interested in how intelligent systems can fit into real workflows and solve problems that matter outside a classroom or demo."
  ],
  contact: {
    email: 'hiteshvairale18@gmail.com',
    whatsappNumber: '+91 8956554635',
    whatsappLink: 'https://wa.me/918956554635?text=Hi%20Hitesh%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.',
    linkedin: 'https://www.linkedin.com/in/hitesh-vairale-7a6b50374/',
    github: 'https://github.com/HiteshVairale17',
    location: 'Amravati, Maharashtra, India (Hometown)',
  }
};

export const HIGHLIGHTS_DATA = [
  {
    number: '01',
    title: 'Diploma in Computer Engineering',
    score: '93.05%',
    institution: 'Government Polytechnic, Achalpur',
    accent: 'cyan',
    description: 'Completed with High Distinction (2023–2026) in foundational computer engineering and software principles.'
  },
  {
    number: '02',
    title: 'Secondary School Certificate (SSC)',
    score: '91.80%',
    institution: 'Maharashtra Vidyalaya, Rajna Purna',
    accent: 'emerald',
    description: 'Completed in 2023 with consistent academic excellence and quantitative aptitude.'
  },
  {
    number: '03',
    title: 'Bachelor of Engineering',
    score: '2nd Year',
    institution: 'SSGMCE, Shegaon (Buldhana dist.)',
    accent: 'rose',
    description: 'Currently pursuing Computer Science & Engineering degree (2026–2029) focused on systems and real-world engineering.'
  },
  {
    number: '04',
    title: 'Target Specialization',
    score: 'AI & FDE',
    institution: 'Applied Systems & Agentic AI',
    accent: 'violet',
    description: 'Bridging intelligent autonomous agents with practical field engineering and user workflows.'
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: 'B.E. in Computer Science and Engineering',
    institution: 'Shri Sant Gajanan Maharaj College of Engineering (SSGMCE)',
    location: 'Shegaon, Buldhana district, Maharashtra',
    duration: '2026 — 2029',
    scoreOrStatus: '2nd Year',
    achievement: 'Currently Pursuing',
    details: 'Pursuing Bachelor of Engineering with focused coursework in Advanced Data Structures, Algorithms, Database Architectures, Operating Systems, and Intelligent Systems.',
    statusType: 'pursuing',
    highlights: ['Currently Pursuing · 2nd Year', 'Shegaon, Buldhana district', 'Duration: 2026 — 2029', 'Department of Computer Science & Engg.']
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'Government Polytechnic, Achalpur',
    location: 'Achalpur, Maharashtra',
    duration: '2023 — 2026',
    scoreOrStatus: '93.05%',
    achievement: 'Distinction',
    details: 'Completed three-year comprehensive curriculum covering C, C++, Java, Database Management Systems (RDBMS), Operating Systems, and core software engineering with High Distinction.',
    statusType: 'completed',
    highlights: ['93.05% Aggregate', 'Achievement: Distinction', 'Government Polytechnic, Achalpur', 'Duration: 2023 — 2026', 'Status: Completed']
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Maharashtra Vidyalaya, Rajna Purna',
    location: 'Rajna Purna, Maharashtra',
    duration: '2023',
    scoreOrStatus: '91.80%',
    achievement: 'State Board Merit',
    details: 'Completed secondary school education with state-level merit honors, demonstrating strong foundations across mathematics, physical sciences, and logical analysis.',
    statusType: 'completed',
    highlights: ['91.80% Score', 'Maharashtra Vidyalaya, Rajna Purna', 'Year of Passing: 2023', 'Status: Completed']
  }
];

export const SKILL_CATEGORIES = [
  {
    name: 'Programming Languages',
    description: 'Core logic, object-oriented systems, and scripting — Java is primary',
    accent: 'rose',
    skills: ['Java (Primary)', 'C', 'C++', 'Python']
  },
  {
    name: 'Web Engineering',
    description: 'Modern full-stack web and interactive systems',
    accent: 'cyan',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js']
  },
  {
    name: 'Databases & Backend',
    description: 'Relational storage, transactional logic, and BaaS',
    accent: 'amber',
    skills: ['MySQL', 'SQL', 'PL/SQL', 'Firebase', 'Supabase']
  },
  {
    name: 'Development Tools & IDEs',
    description: 'Version control, mobile tooling, and computer graphics',
    accent: 'violet',
    skills: ['VS Code', 'Git', 'GitHub', 'Android Studio', 'OpenGL / GLUT']
  },
  {
    name: 'AI-Assisted Development',
    description: 'Agentic workflows, model generation, and AI tooling',
    accent: 'rose',
    skills: ['Codex', 'Claude', 'Google AI Studio', 'Antigravity']
  },
  {
    name: 'Core Computer Science',
    description: 'Fundamental theoretical and architectural pillars',
    accent: 'blue',
    skills: [
      'Data Structures',
      'DBMS',
      'OOP',
      'Computer Networks & InfoSec',
      'Discrete Mathematics',
      'Digital Logic'
    ]
  },
  {
    name: 'Other Tools & Environments',
    description: 'Network topology testing and scientific computing',
    accent: 'emerald',
    skills: ['Cisco Packet Tracer', 'MATLAB']
  }
];

export const EXPERIENCE_LIST: Experience[] = [
  {
    id: 'exp-1',
    company: 'iBase Electrosoft LLP',
    role: 'Android Development Intern',
    duration: '3 Months',
    location: 'Amravati, Maharashtra, India',
    isStipendBased: false,
    description: 'Completed a 3-month internship focused on native Android application development, gaining hands-on exposure to mobile application architecture, Java components, and software implementation.',
    companyDescription: 'An IT and software services firm based in Amravati, Maharashtra, specializing in Android mobile applications and software engineering.',
    tags: ['Android Development', 'Java', 'Mobile Architecture', 'Software Implementation']
  },
  {
    id: 'exp-2',
    company: 'Assimilate Technologies Pvt. Ltd.',
    role: 'AI/ML & Social Media Intern',
    duration: '3 Months',
    location: 'Pune, Maharashtra, India',
    isStipendBased: true,
    description: 'Completed a 3-month stipend-based internship in Pune, gaining practical exposure to applied Artificial Intelligence / Machine Learning concepts and social media / digital marketing workflows.',
    companyDescription: 'Technology services company headquartered in Pune, India, with a reported presence in the USA, UK, and Dubai, UAE.',
    tags: ['AI/ML', 'Social Media', 'Stipend-Based Internship', 'Pune, India', 'Data Workflows'],
    internationalPresence: ['Pune, India', 'USA', 'UK', 'Dubai, UAE']
  }
];

export const PROJECTS_LIST: Project[] = [
  {
    id: 'wireless-ev-charging',
    title: 'Wireless Car Charging System',
    category: 'Hardware / Engineering',
    tagline: 'Magnetic-field-based wireless power transfer for electric vehicles with companion monitoring',
    description: 'A wireless EV charging project based on magnetic-field technology. Alongside the hardware concept, we developed a companion application that displays charging progress and the estimated time required to complete charging.',
    fullDescription: [
      'Explored contactless power transfer principles leveraging high-frequency electromagnetic induction for electric vehicles.',
      'Constructed a hardware prototype demonstrating resonant inductive coupling between a transmitter coil pad and a vehicle receiver coil.',
      'Engineered an Android companion application that interfaces with the charging unit to monitor real-time telemetry.',
      'Displayed dynamic battery charging progress, active power transfer rates, and precise estimated time to complete charge.'
    ],
    technologies: ['Magnetic Induction', 'IoT Hardware', 'Android SDK', 'Java', 'Sensors Telemetry'],
    accentColor: 'rose',
    featured: true,
    images: [
      '/images/projects/wireless-car-charging/wireless-hardware-01.jpg',
      '/images/projects/wireless-car-charging/wireless-hardware-02.jpg',
      '/images/projects/wireless-car-charging/wireless-hardware-03.jpg'
    ],
    architectureDetails: [
      'Transmitter base station generating localized alternating magnetic field',
      'Receiver coil embedded on vehicle undercarriage converting field back to DC current',
      'Microcontroller tracking voltage, current, and charging status',
      'Mobile telemetry bridge broadcasting metrics to the Android companion app'
    ],
    metricsOrHighlights: [
      'Contactless power transfer concept',
      'Real-time charging progress tracking',
      'Estimated completion time calculation',
      'Unified hardware & companion app workflow'
    ]
  },
  {
    id: 'shesecure',
    title: 'SheSecure',
    category: 'Android Application',
    tagline: 'Rapid emergency response trigger system powered by hardware accelerometer detection',
    description: 'Android women-safety application that detects phone shaking using the device accelerometer, instantly retrieves user GPS coordinates, and dispatches emergency SMS alerts to predefined trusted contacts.',
    fullDescription: [
      'Designed to trigger discreet, high-priority safety mechanisms without requiring the user to unlock the device or look at the screen.',
      'Implemented real-time sensor listening via Android SensorManager for high-acceleration shake thresholds.',
      'Integrated Android Location Services to capture exact geographic coordinates.',
      'Dispatches background automated emergency SMS messages with live Google Maps coordinate links to trusted contacts.'
    ],
    technologies: ['Android (Java)', 'Accelerometer Sensors', 'SMS Gateway API', 'GPS Geolocation'],
    accentColor: 'emerald',
    featured: true,
    images: [
      '/images/projects/shesecure/shesecure-01.jpg',
      '/images/projects/shesecure/shesecure-02.jpg',
      '/images/projects/shesecure/shesecure-03.jpg'
    ],
    architectureDetails: [
      'Foreground service keeping accelerometer listener active under standby',
      'Dynamic low-pass filter to prevent accidental pocket jostle triggers',
      'Asynchronous location provider capturing high-precision coordinates',
      'Emergency broadcast dispatcher invoking native telephony SMS manager'
    ],
    metricsOrHighlights: [
      'Instant shake gesture detection',
      'Zero-tap emergency trigger',
      'Real-time GPS coordinate bundling',
      'Reliable offline cellular SMS delivery'
    ]
  },
  {
    id: 'college-complaint-system',
    title: 'College Complaint Management System',
    category: 'Android Application',
    tagline: 'Centralized institutional grievance redressal and tracking mobile application for students & administration',
    description: 'Android application engineered for structured college complaint and grievance handling, featuring category routing, real-time status tracking, and administrative resolution workflows.',
    fullDescription: [
      'Developed a student grievance filing Android mobile app with categorized issue submission (infrastructure, academics, campus amenities).',
      'Implemented administrative triage dashboard to assign, review, and update complaint status.',
      'Transparent status progression from submitted, in-review, to resolved.'
    ],
    technologies: ['Android (Java)', 'Android SDK', 'SQLite / Database', 'Mobile UI Architecture', 'Role-Based Auth'],
    accentColor: 'cyan',
    featured: false,
    images: [
      '/images/projects/complaint-management/complaint-management-01.jpg'
    ],
    architectureDetails: [
      'Student mobile interface for lodging tickets with description and category tagging',
      'Administrative view for assigning maintenance departments and tracking progress',
      'Database schema logging timestamped status transitions'
    ],
    metricsOrHighlights: [
      'Native Android mobile application',
      'Categorized grievance filing',
      'Real-time status progression tracking',
      'Structured institutional transparency'
    ]
  },
  {
    id: 'opencharge-community',
    title: 'Open Charge Community',
    category: 'Web Application',
    tagline: 'Community-driven hub and resource platform for electric vehicle enthusiasts and drivers',
    description: 'An EV-focused community platform designed to connect EV drivers, share charging station availability, discuss clean energy hardware, and foster a collaborative electric mobility ecosystem.',
    fullDescription: [
      'Architected a community website specifically built around the evolving EV charging ecosystem.',
      'Features charging infrastructure discussions, peer experiences with station reliability, and EV knowledge sharing.',
      'Live and accessible on the web.'
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Vercel Deployment'],
    accentColor: 'amber',
    featured: false,
    liveUrl: 'https://opencharge-community.vercel.app/',
    images: [
      '/images/projects/open-charge-community/open-charge-community-01.jpg',
      '/images/projects/open-charge-community/open-charge-community-02.jpg',
      '/images/projects/open-charge-community/open-charge-community-03.jpg',
      '/images/projects/open-charge-community/open-charge-community-04.jpg'
    ],
    architectureDetails: [
      'Fast responsive web frontend deployed to Vercel edge network',
      'Community discussion feeds and curated charging information hubs',
      'Clean accessibility and dark-mode aesthetic for EV enthusiasts'
    ],
    metricsOrHighlights: [
      'Real live deployed website',
      'Dedicated to EV charging & clean tech',
      'Responsive modern web design'
    ]
  },
  {
    id: 'library-management-system',
    title: 'Library Management System',
    category: 'Software Application',
    tagline: 'Digital institutional catalog and automated 7-day book return workflow',
    description: 'A library management software application prototype focused on student information and book issue/return workflows, featuring an automated seven-day return reminder concept.',
    fullDescription: [
      'Engineered an intuitive interface for librarians and students to manage library inventories.',
      'Implemented student profile records and book circulation logs with automated borrowing date stamps.',
      'Created a conceptual 7-day return reminder protocol to notify borrowers before due dates and minimize overdue penalties.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'SQL Database Backend'],
    accentColor: 'blue',
    featured: false,
    architectureDetails: [
      'Relational database tables linking students, books, and issue transaction records',
      'Date arithmetic engine computing return deadlines based on 7-day loan window',
      'Intuitive catalog search and student loan history viewer'
    ],
    metricsOrHighlights: [
      'Student record & book circulation management',
      '7-day return reminder workflow concept',
      'Clean transactional issue/return interface'
    ]
  },
  {
    id: 'digital-clock',
    title: 'Digital Clock',
    category: 'OpenGL / GLUT / C',
    tagline: 'Real-time graphic time display rendered via OpenGL and GLUT primitives',
    description: 'Computer graphics programming project developed using C and the OpenGL / GLUT library, rendering real-time system clock displays through mathematical coordinate rendering.',
    fullDescription: [
      'Built a low-level graphics application demonstrating 2D/3D matrix transformations and graphic primitives in OpenGL.',
      'Interfaces with system time API to continuously read hours, minutes, and seconds.',
      'Draws geometric segments and digital numerals using vertex buffers, color blending, and smooth frame refreshes in GLUT.'
    ],
    technologies: ['C Programming', 'OpenGL', 'GLUT', 'Computer Graphics Algorithms'],
    accentColor: 'violet',
    featured: false,
    architectureDetails: [
      'Double-buffered rendering loop with 60 FPS timer callback',
      'Algorithmic polygon tessellation for 7-segment and matrix digit styles',
      'Direct interaction with C system runtime clock'
    ],
    metricsOrHighlights: [
      'Pure C & OpenGL/GLUT graphic engine',
      'Precise real-time system time synchronization',
      'Vector-based digital segment rendering'
    ]
  }
];

export const CERTIFICATES_LIST: Certificate[] = [
  {
    id: 'cert-python',
    title: 'Basics of Python',
    issuer: 'Infosys Springboard',
    platform: 'Infosys Springboard Learning Platform',
    skillsCovered: ['Python Foundations', 'Data Structures', 'Functions & Modules', 'Control Flow'],
    previewUrl: '/certificates/previews/infosys-basics-of-python.png',
    pdfUrl: '/certificates/pdfs/infosys-basics-of-python.pdf'
  },
  {
    id: 'cert-java',
    title: 'Java for Beginners',
    issuer: 'Infosys Springboard',
    platform: 'Infosys Springboard Learning Platform',
    skillsCovered: ['Core Java', 'Object Oriented Programming', 'Classes & Objects', 'Exception Handling'],
    previewUrl: '/certificates/previews/infosys-java-for-beginners.png',
    pdfUrl: '/certificates/pdfs/infosys-java-for-beginners.pdf'
  },
  {
    id: 'cert-cpp',
    title: 'Programming Using C++',
    issuer: 'Infosys Springboard',
    platform: 'Infosys Springboard Learning Platform',
    skillsCovered: ['C++ Syntax', 'Memory Management', 'Pointers & References', 'OOP Concepts'],
    previewUrl: '/certificates/previews/infosys-programming-using-cpp.png',
    pdfUrl: '/certificates/pdfs/infosys-programming-using-cpp.pdf'
  },
  {
    id: 'cert-html5',
    title: 'HTML5',
    issuer: 'Infosys Springboard',
    platform: 'Infosys Springboard Learning Platform',
    skillsCovered: ['Semantic Markup', 'Web Structure', 'Forms & Inputs', 'Modern HTML5 APIs'],
    previewUrl: '/certificates/previews/infosys-html5.png',
    pdfUrl: '/certificates/pdfs/infosys-html5.pdf'
  },
  {
    id: 'cert-c',
    title: 'C Programming',
    issuer: 'Infosys Springboard',
    platform: 'Infosys Springboard Learning Platform',
    skillsCovered: ['Procedural Programming', 'Pointers', 'Structures & Unions', 'File I/O'],
    previewUrl: '/certificates/previews/infosys-c-programming.png',
    pdfUrl: '/certificates/pdfs/infosys-c-programming.pdf'
  }
];

export const PARTICIPATION_LIST: Participation[] = [
  {
    id: 'part-gpa',
    title: 'State-Level Tech Fest',
    venue: 'Government Polytechnic, Amravati',
    type: 'State-Level Technical Symposium',
    note: 'Participated in competitive technical paper presentation and software events during diploma studies.',
    previewUrl: '/certificates/previews/gp-amravati-state-techfest.png',
    pdfUrl: '/certificates/pdfs/gp-amravati-state-techfest.pdf'
  },
  {
    id: 'part-iitb',
    title: 'Major Technology Festival Participation',
    venue: 'Indian Institute of Technology (IIT) Bombay',
    type: 'National Premier Tech Festival',
    note: 'Participated in technical events and technology showcases at IIT Bombay, gaining valuable exposure to national-tier innovations and research cultures.',
    image: '/images/events/iit-bombay-techfest.jpg'
  }
];

// Grounded Chatbot Knowledge Base - 25 Verified FAQs
export interface ChatbotFAQ {
  topic: string;
  question: string;
  keywords: string[];
  answer: string;
}

export const CHATBOT_KNOWLEDGE_BASE: ChatbotFAQ[] = [
  // 1. Overview & Identity
  {
    topic: 'Who is Hitesh Vairale',
    question: 'Who is Hitesh Vairale and what does he do?',
    keywords: ['who is hitesh', 'about hitesh', 'tell me about hitesh', 'profile', 'bio', 'who are you', 'summary', 'introduce', 'introduction', 'overview', 'developer', 'engineer', 'hitesh vairale', 'who is he'],
    answer: "Hitesh Vairale is a Computer Science & Engineering student currently in his 2nd Year of B.E. at Shri Sant Gajanan Maharaj College of Engineering (SSGMCE) in Shegaon. He has completed two software internships, achieved a 93.05% Distinction in his Computer Engineering Diploma from Government Polytechnic Achalpur, and builds both hardware and software systems—from EV wireless charging prototypes to native Android apps."
  },

  // 2. Wireless Car Charging System (Primary Featured Project)
  {
    topic: 'Wireless Car Charging System',
    question: 'Tell me about the Wireless Car Charging System project.',
    keywords: ['wireless', 'ev', 'car charging', 'wireless charging', 'magnetic', 'induction', 'charger', 'ev project', 'resonant', 'companion app', 'hardware project', 'wireless car charging', 'ev charging'],
    answer: "The Wireless Car Charging System is Hitesh's flagship hardware-software project. It uses resonant magnetic induction to transfer power wirelessly to electric vehicles. In addition to the hardware coil prototype, Hitesh engineered a native Android companion application that connects to the charging unit to monitor real-time charging rates, battery levels, and estimated time to full charge."
  },

  // 3. SheSecure Project (Women Safety Android App)
  {
    topic: 'SheSecure Project',
    question: 'What is the SheSecure project and how does it work?',
    keywords: ['shesecure', 'she secure', 'women safety', 'safety app', 'shake', 'accelerometer', 'emergency', 'sos', 'sms', 'sms alert', 'gps emergency', 'android safety'],
    answer: "SheSecure is a native Android women's safety application built by Hitesh. It runs a background sensor service monitoring the device accelerometer. When a rapid shake gesture is detected, the app automatically captures exact GPS coordinates and dispatches background emergency SMS alerts with live location links to trusted contacts—without requiring the user to unlock the phone."
  },

  // 4. College Complaint Management System (Android App)
  {
    topic: 'College Complaint Management System',
    question: 'What is the College Complaint Management System?',
    keywords: ['complaint', 'college complaint', 'grievance', 'ticket', 'complaint system', 'complaint app', 'grievances', 'complaint management'],
    answer: "The College Complaint Management System is a native Android application built for institutional grievance handling. Students can file categorized complaints (infrastructure, campus amenities, academics) and track review status in real time, while college administration uses the system to manage triage and resolution workflows transparently."
  },

  // 5. Open Charge Community (Live EV Web App)
  {
    topic: 'Open Charge Community',
    question: 'What is Open Charge Community and where can I view it?',
    keywords: ['open charge', 'opencharge', 'community', 'ev community', 'ev website', 'vercel', 'live site', 'live link', 'web app', 'open charge community'],
    answer: "Open Charge Community is a live web platform created by Hitesh for electric vehicle drivers and clean mobility enthusiasts. It allows community members to share charging station experiences, discuss infrastructure, and connect. You can explore the live website directly at: https://opencharge-community.vercel.app/"
  },

  // 6. Library Management System (Software Prototype)
  {
    topic: 'Library Management System',
    question: 'How does the Library Management System work?',
    keywords: ['library', 'library management', 'library system', '7 days', 'reminder', 'return reminder', 'book issue', 'books', 'catalog'],
    answer: "The Library Management System is a software application designed for institutional library workflows. It manages student records and book circulation logs, featuring an automated 7-day return reminder concept to notify borrowers before due dates and minimize overdue penalties."
  },

  // 7. Digital Clock (OpenGL / GLUT in C)
  {
    topic: 'Digital Clock Project',
    question: 'What is the Digital Clock project?',
    keywords: ['digital clock', 'opengl', 'glut', 'clock', 'c project', 'graphics', 'c programming clock', 'render', 'polygon', 'computer graphics'],
    answer: "The Digital Clock is a computer graphics project written in pure C using the OpenGL and GLUT libraries. It hooks into the system clock runtime and mathematically renders an interactive, real-time digital clock display using 2D/3D matrix transformations, coordinate projections, and polygon tessellations."
  },

  // 8. iBase Electrosoft LLP Internship
  {
    topic: 'iBase Electrosoft Internship',
    question: "Tell me about Hitesh's internship at iBase Electrosoft.",
    keywords: ['ibase', 'electrosoft', 'ibase electrosoft', 'android intern', 'first internship', 'amravati intern', 'mobile intern'],
    answer: "Hitesh completed a 3-month internship as an Android Development Intern at iBase Electrosoft LLP in Amravati, Maharashtra. During his tenure, he gained practical, production-level experience in Android application architecture, Java development, and mobile UI/UX implementation."
  },

  // 9. Assimilate Technologies Internship (Stipend-Based)
  {
    topic: 'Assimilate Technologies Internship',
    question: 'Tell me about his internship at Assimilate Technologies.',
    keywords: ['assimilate', 'assimilate technologies', 'ai ml intern', 'stipend', 'stipend based', 'paid intern', 'pune intern', 'social media intern', 'stipend-based', 'internship 02'],
    answer: "Hitesh completed a 3-month STIPEND-BASED INTERNSHIP as an AI/ML & Social Media Intern at Assimilate Technologies Pvt. Ltd. at their Pune, Maharashtra office. During this paid internship, he gained practical exposure to applied machine learning concepts, data workflows, and digital social media analytics."
  },

  // 10. Assimilate Technologies Global Presence
  {
    topic: 'Assimilate Technologies Presence',
    question: 'Where is Assimilate Technologies located and does it have global offices?',
    keywords: ['assimilate presence', 'assimilate locations', 'assimilate global', 'assimilate offices', 'dubai', 'uk', 'usa', 'where is assimilate'],
    answer: "Assimilate Technologies Pvt. Ltd. is headquartered in Pune, Maharashtra, India. Based on verified company information, they also maintain an international operational presence across the USA, the UK, and Dubai (UAE)."
  },

  // 11. Bachelor of Engineering Degree
  {
    topic: 'Bachelor of Engineering Education',
    question: 'Where is Hitesh pursuing his engineering degree?',
    keywords: ['be', 'b.e.', 'bachelor', 'engineering', 'ssgmce', 'shegaon', 'current degree', 'college name', 'degree', '2nd year', 'undergraduate', 'btech', 'shri sant gajanan maharaj'],
    answer: "Hitesh is currently pursuing his B.E. in Computer Science and Engineering at Shri Sant Gajanan Maharaj College of Engineering (SSGMCE) in Shegaon, Buldhana district, Maharashtra (Duration: 2026–2029). He is currently in his 2nd Year."
  },

  // 12. Diploma in Computer Engineering
  {
    topic: 'Diploma in Computer Engineering',
    question: "What is Hitesh's diploma qualification and score?",
    keywords: ['diploma', 'achalpur', 'government polytechnic', 'gp achalpur', 'diploma score', 'polytechnic score', 'distinction', '93.05', 'polytechnic percentage', 'diploma marks'],
    answer: "Hitesh completed his Diploma in Computer Engineering from Government Polytechnic, Achalpur, Maharashtra (2023–2026). He achieved an exceptional 93.05% aggregate score with Distinction."
  },

  // 13. Diploma vs Graduation Degree Distinction
  {
    topic: 'Diploma Qualification Clarification',
    question: "Is Hitesh's diploma considered a bachelor's graduation degree?",
    keywords: ['is diploma graduation', 'is diploma a degree', 'degree vs diploma', 'graduated', 'qualification distinction', 'did he graduate'],
    answer: "No, Hitesh's diploma from Government Polytechnic, Achalpur is a 3-year technical polytechnic diploma (completed with 93.05% Distinction). It is not a bachelor's graduation degree. He is currently pursuing his undergraduate bachelor's degree (B.E. in CSE) at SSGMCE Shegaon."
  },

  // 14. Secondary School Certificate (SSC)
  {
    topic: 'Secondary School Education (SSC)',
    question: 'What did Hitesh score in his 10th / SSC exams?',
    keywords: ['ssc', '10th', 'school', 'rajna purna', 'maharashtra vidyalaya', '10th percentage', '91.80', 'ssc score', '10th marks', 'high school'],
    answer: "Hitesh completed his Secondary School Certificate (SSC) at Maharashtra Vidyalaya, Rajna Purna in 2023, securing a stellar 91.80% aggregate."
  },

  // 15. Hometown vs College Location Clarification
  {
    topic: 'Hometown and College Location',
    question: 'Is Hitesh from Buldhana or Amravati?',
    keywords: ['hometown', 'where are you from', 'where does he live', 'city', 'location', 'amravati', 'buldhana', 'native place', 'where is hitesh from'],
    answer: "Hitesh's hometown is Amravati, Maharashtra, India. His college, Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), is located in Shegaon, Buldhana district, Maharashtra. He is from Amravati, while his college is in Shegaon (Buldhana district)."
  },

  // 16. Primary Programming Language (Java)
  {
    topic: 'Primary Programming Language',
    question: 'What is your primary programming language and which language do you prefer?',
    keywords: [
      'primary programming language', 'primary language', 'preferred language', 'prefer',
      'which language do you prefer', 'main language', 'favorite language', 'primary coding language',
      'what is your primary programming language', 'which language is preferred'
    ],
    answer: "Java is Hitesh's primary and preferred programming language. He relies on Java as his core language for object-oriented software engineering and native Android mobile development, supported by verified Java certification from Infosys Springboard."
  },

  // 17. Java Developer & Java Technologies
  {
    topic: 'Java Development and Java Skills',
    question: 'Are you a Java developer, do you know Java, and which Java technologies do you use?',
    keywords: [
      'java developer', 'are you a java developer', 'do you know java', 'java skills',
      'tell me about your java skills', 'java technologies', 'which java technologies',
      'java experience', 'core java', 'java development', 'which java technologies do you use'
    ],
    answer: "Yes, Hitesh is an active Java developer! Java is his primary and preferred language, which he uses for native Android application architecture (including SheSecure and the EV Wireless Charging companion app), object-oriented design, and algorithmic problem-solving. He also completed certified coursework in Java through Infosys Springboard."
  },

  // 18. Other Programming Languages (C, C++, Python)
  {
    topic: 'Other Programming Languages',
    question: 'What other programming languages do you know besides Java?',
    keywords: [
      'other languages', 'other programming languages', 'additional languages', 'c++', 'c language',
      'python', 'cpp', 'what other languages', 'languages besides java', 'programming languages',
      'coding languages'
    ],
    answer: "Java is Hitesh's primary language. In addition to Java, he works with C, C++, and Python as other programming languages. He holds verified certifications from Infosys Springboard in C, C++, and Python alongside his Java certification."
  },

  // 19. Spring Boot & Java Backend Development
  {
    topic: 'Spring Boot and Java Backend Development',
    question: 'Do you work with Spring Boot, what is it, and are you interested in Java backend development?',
    keywords: [
      'spring boot', 'springboot', 'spring', 'java backend', 'backend development',
      'do you work with spring boot', 'what is spring boot', 'spring boot experience',
      'interested in java backend development', 'spring framework', 'are you interested in java backend'
    ],
    answer: "Spring Boot is an enterprise Java framework used for building backend application services and RESTful APIs. While Java is Hitesh's primary language and he is interested in Java backend development, specific hands-on Spring Boot experience or completed Spring Boot projects are not documented in his current portfolio knowledge base."
  },

  // 20. Technical Skills: Mobile & Web Development
  {
    topic: 'Mobile and Web Development',
    question: 'What mobile and web technologies does he work with?',
    keywords: ['mobile development', 'android sdk', 'android studio', 'web dev', 'html', 'css', 'javascript', 'frontend', 'react', 'tailwind'],
    answer: "For mobile, Hitesh develops native Android applications using Java (his primary language), Android Studio, the Android SDK, and hardware sensor listeners. For web development, he builds modern interfaces with HTML5, CSS3, JavaScript, React, and Tailwind CSS."
  },

  // 18. Technical Skills: Tools & Databases
  {
    topic: 'Development Tools and Databases',
    question: 'What development tools, databases, and environments does he use?',
    keywords: ['tools', 'databases', 'mysql', 'firebase', 'git', 'github', 'vs code', 'linux', 'sqlite', 'tech stack'],
    answer: "Hitesh works with Git, GitHub, VS Code, Android Studio, MySQL, Firebase, SQLite, Linux shell environments, Cisco Packet Tracer, and OpenGL/GLUT graphics libraries."
  },

  // 19. Forward Deployed Engineering & AI
  {
    topic: 'Forward Deployed Engineering & AI',
    question: 'Why is Hitesh interested in Forward Deployed Engineering and Agentic AI?',
    keywords: ['forward deployed', 'fde', 'agentic', 'agentic ai', 'ai interest', 'applied ai', 'philosophy', 'vision', 'future focus'],
    answer: "Hitesh believes the real power of AI lies outside benchmark demos and academic labs. He is focused on Forward Deployed Engineering (FDE) and Agentic AI—building intelligent systems that integrate seamlessly into real-world workflows, field devices, and live operations to solve genuine user problems."
  },

  // 20. Infosys Springboard Certifications
  {
    topic: 'Infosys Springboard Certifications',
    question: 'What certifications has Hitesh earned?',
    keywords: ['certifications', 'certificates', 'infosys', 'springboard', 'python certificate', 'java certificate', 'cpp certificate', 'html5 certificate', 'c programming certificate'],
    answer: "Hitesh holds 5 verified certifications from Infosys Springboard: Basics of Python, Java for Beginners, Programming Using C++, HTML5, and C Programming. Each certificate has verified previews and downloadable PDFs in his portfolio's Certificates section."
  },

  // 21. Technical Competitions & Awards
  {
    topic: 'Technical Competitions and Awards',
    question: 'Has Hitesh participated in technical competitions or won awards?',
    keywords: ['awards', 'competitions', 'tech fest', 'gp amravati tech fest', 'web design award', 'symposium', 'achievements', 'state level'],
    answer: "Yes! Hitesh participated in the State-Level Tech Fest at Government Polytechnic, Amravati, presenting technical work and winning recognition in web design competitions during his diploma studies. The verified certificate is documented on his site."
  },

  // 22. IIT Bombay Techfest Participation
  {
    topic: 'IIT Bombay Techfest Participation',
    question: 'Did Hitesh participate in IIT Bombay Techfest?',
    keywords: ['iit bombay', 'iit', 'techfest', 'iitb', 'bombay techfest', 'national festival', 'iit participation'],
    answer: "Yes. Hitesh attended and participated in technical showcases and technical events at IIT Bombay Techfest, one of Asia's largest college science and technology festivals, gaining exposure to premier national innovations and engineering cultures."
  },

  // 23. Official Resume Access
  {
    topic: 'Hitesh Resume and CV',
    question: "How can I view or download Hitesh's resume?",
    keywords: ['resume', 'cv', 'download resume', 'pdf resume', 'view resume', 'curriculum vitae', 'get cv'],
    answer: "You can download Hitesh's verified resume anytime using the link '/Hitesh-Resume.pdf' or via the dedicated resume button in the site navigation bar. The PDF reflects his updated academic pedigree, projects, and internships."
  },

  // 24. Contact Channels
  {
    topic: 'Contact Information',
    question: 'How can I contact or hire Hitesh?',
    keywords: ['contact', 'email', 'phone', 'whatsapp', 'reach', 'message', 'call', 'linkedin', 'github', 'hire', 'get in touch', 'talk'],
    answer: "You can reach Hitesh directly via:\n• Email: hiteshvairale18@gmail.com\n• WhatsApp / Phone: +91 8956554635\n• LinkedIn: linkedin.com/in/hitesh-vairale-7a6b50374\n• GitHub: github.com/HiteshVairale17\nHe is open to engineering internships, technical collaborations, and project discussions!"
  },

  // 25. Why Consider Hitesh for Opportunities
  {
    topic: 'Why Consider Hitesh',
    question: 'What makes Hitesh a strong candidate for engineering roles and internships?',
    keywords: ['why consider', 'why hire', 'strengths', 'opportunities', 'stand out', 'hire him', 'value', 'qualities', 'why hitesh'],
    answer: "Four key strengths make Hitesh stand out:\n1. Stellar Academic Rigor: 91.80% in SSC and 93.05% with Distinction in his Computer Engineering Diploma.\n2. Real Practical Experience: Completed 2 industry internships (iBase Electrosoft and a stipend-based AI/ML internship at Assimilate Technologies).\n3. End-to-End Builder: Proven ability to bridge hardware and software (like his wireless EV charging system with Android telemetry) and build live web applications.\n4. Applied Mindset: Strong focus on Forward Deployed Engineering, delivering software that works reliably in real user hands."
  }
];

