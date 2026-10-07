import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiCode,
    FiLayers,
    FiDatabase,
    FiCpu,
    FiZap,
    FiGlobe,
    FiPhone,
    FiCloud,
    FiTrendingUp,
    FiServer,
} from 'react-icons/fi'
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaBrain } from 'react-icons/fa'
import {
    SiNextdotjs,
    SiTypescript,
    SiMongodb,
    SiPostgresql,
    SiRedis,
    SiFlask,
    SiFastapi,
    SiOpenai,
    SiTailwindcss,
    SiGit,
    SiScikitlearn,
    SiTensorflow,
    SiGooglecloud,
} from 'react-icons/si'

export const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Projects', href: 'projects' },
    { name: 'Services', href: 'services' },
    { name: 'Contact', href: 'contact' },
]

export const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/riteshkhatkar', icon: FiGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ritesh-khatkar-a6646a41a', icon: FiLinkedin },
    { name: 'Email', url: 'mailto:riteshkhatakar5@gmail.com', icon: FiMail },
    { name: 'Phone', url: 'tel:+919834461015', icon: FiPhone },
]

export const skills = [
    // Languages
    { name: 'Python', icon: FaPython, category: 'Language' },
    { name: 'TypeScript', icon: SiTypescript, category: 'Language' },
    // AI / ML
    { name: 'Artificial Intelligence', icon: FaBrain, category: 'AI / ML' },
    { name: 'Machine Learning', icon: SiScikitlearn, category: 'AI / ML' },
    { name: 'Deep Learning', icon: SiTensorflow, category: 'AI / ML' },
    { name: 'Data Science', icon: FiTrendingUp, category: 'AI / ML' },
    { name: 'OpenCV', icon: FiCpu, category: 'AI / ML' },
    { name: 'OpenAI / Gemini', icon: SiOpenai, category: 'AI / ML' },
    { name: 'Stable Diffusion', icon: FiZap, category: 'AI / ML' },
    // Frontend
    { name: 'React', icon: FaReact, category: 'Frontend' },
    { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend' },
    // Backend
    { name: 'Node.js', icon: FaNodeJs, category: 'Backend' },
    { name: 'FastAPI', icon: SiFastapi, category: 'Backend' },
    { name: 'Flask', icon: SiFlask, category: 'Backend' },
    // Database
    { name: 'MongoDB', icon: SiMongodb, category: 'Database' },
    { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database' },
    { name: 'Redis', icon: SiRedis, category: 'Database' },
    // Cloud & DevOps
    { name: 'AWS EC2', icon: FaAws, category: 'Cloud & DevOps' },
    { name: 'Google Cloud', icon: SiGooglecloud, category: 'Cloud & DevOps' },
    { name: 'Azure DevOps', icon: FiServer, category: 'Cloud & DevOps' },
    { name: 'Docker', icon: FaDocker, category: 'Cloud & DevOps' },
    { name: 'Git', icon: SiGit, category: 'Cloud & DevOps' },
]

export const experience = [
    {
        title: 'AI/ML Intern',
        company: 'Airports Authority of India, Kolhapur',
        period: 'July – Aug 2024',
        type: 'Internship',
        description: 'Built an AI-driven Unattended Baggage Detection System using OpenCV and ML, monitoring 15+ CCTV feeds in real time. Achieved 90.6% detection accuracy across 500+ hours of training footage, cutting false alarms by 40% and manual surveillance workload by 70%.',
        tech: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'],
    },
    {
        title: 'Software Developer',
        company: 'ORELSE Pvt Ltd',
        period: 'June 2026 – Present',
        type: 'Full-time',
        description: 'Working across multiple high-impact products: BuyerPortal (digital turmeric-trading marketplace), Multi-Tenant SaaS Control Plane, FreightPilot (AI freight-quoting), GoLo AI merchant chatbot, and the Lead Finder Agent.',
        tech: ['Next.js', 'FastAPI', 'React', 'Gemini AI', 'n8n', 'MongoDB', 'PostgreSQL'],
    },
    {
        title: 'AI Model Developer & App Developer',
        company: 'Nexa Prime Pvt. Ltd',
        period: '2025 – Present',
        type: 'Full-time',
        description: 'Building production-grade AI models and end-to-end applications. Responsibilities include designing and training ML/DL models, developing AI-powered mobile and web apps, integrating LLMs (Gemini, Claude, GPT) into real-world workflows, and delivering scalable AI solutions for enterprise clients.',
        tech: ['Python', 'AI/ML', 'Deep Learning', 'LLM Integration', 'React Native', 'FastAPI'],
    },
    {
        title: 'Freelance – Full Stack Developer',
        company: 'Mangesh Narvekar & Associates',
        period: '2025',
        type: 'Client Project',
        description: 'Built the firm website (React/Vite) and a CMS portal sharing an Express/MongoDB backend. Integrated contact & booking endpoints with MongoDB Atlas and Nodemailer. Audited performance and rebranded the site from individual practice to firm identity.',
        tech: ['React', 'Vite', 'Express', 'MongoDB', 'Nodemailer'],
    },
    {
        title: 'Data Science Intern',
        company: 'Softech Solutions',
        period: '2024',
        type: 'Internship',
        description: 'Applied data science and AI/ML techniques to a sugarcane ERP system and RFID-based traceability pipeline. Performed data analysis, feature engineering, and model building for supply-chain tracking workflows.',
        tech: ['Python', 'Data Science', 'AI/ML', 'RFID', 'ERP', 'scikit-learn'],
    },
]

export const projects = [
    {
        name: 'BuyerPortal',
        image: '/images/screenshot.png',
        description: 'Digital turmeric-trading marketplace connecting FPOs with commercial buyers under MahaFPC oversight. Features role-based login (Google OAuth + Twilio OTP), buyer reliability scoring, auction/negotiation modes, escrow payments, and an AI matching engine.',
        technologies: ['Next.js 15', 'FastAPI', 'Claude/Gemini AI', 'Escrow', 'PostgreSQL'],
        githubUrl: '#',
        liveUrl: '#',
    },
    {
        name: 'ProHomeCare',
        image: '/images/screenshot.png',
        description: 'On-demand home-services platform supporting 100+ concurrent users. Redis caching cut DB load by 45% and API response time by 60%. Razorpay integration delivers a 99.8% payment success rate.',
        technologies: ['MERN', 'Redis', 'Socket.io', 'Razorpay', 'JWT/RBAC', 'AWS EC2'],
        githubUrl: '#',
        liveUrl: '#',
    },
    {
        name: 'VR Campus Navigation',
        image: '/images/screenshot.png',
        description: 'Virtual campus tour for prospective students with 360° views, LoD4 models of 20+ campus structures, robot-guided tours, and gamified quests. Used by 150+ students with a 45% engagement boost in beta.',
        technologies: ['Unreal Engine', 'Blender', 'Blueprints', 'Git'],
        githubUrl: '#',
        liveUrl: '#',
    },
    {
        name: 'Multi-Tenant SaaS Control Plane',
        image: '/images/screenshot.png',
        description: 'Backend platform for managing multiple tenants with workflow orchestration through Temporal.io. Supports isolated tenant environments, role management, and automated provisioning.',
        technologies: ['FastAPI', 'Temporal.io', 'Docker', 'PostgreSQL', 'Redis'],
        githubUrl: '#',
        liveUrl: '#',
    },
    {
        name: 'FreightPilot',
        image: '/images/screenshot.png',
        description: 'AI freight-quoting platform that generates instant shipping quotes powered by Gemini 2.0, deployed to a production VM.',
        technologies: ['React 19', 'Express', 'Gemini 2.0'],
        githubUrl: '#',
        liveUrl: '#',
    },
    {
        name: 'YouTube Video Summarizer',
        image: '/images/screenshot.png',
        description: 'Generates summaries from YouTube video transcripts using transcript chunking and async processing — handles videos over 60 minutes without timeouts.',
        technologies: ['React.js', 'Node.js', 'OpenAI API', 'Gemini API'],
        githubUrl: '#',
        liveUrl: 'https://youtube-transcript-summarizer-m3kq.vercel.app',
    },
    {
        name: 'Text-to-Image Generator',
        image: '/images/screenshot.png',
        description: 'Creates images from text prompts using Stable Diffusion. Flask backend containerized with Docker; caching speeds up repeated requests.',
        technologies: ['React.js', 'Flask', 'Stable Diffusion', 'Docker'],
        githubUrl: '#',
        liveUrl: 'https://text-to-image-w2ji.vercel.app',
    },
    {
        name: 'ORELSE Lead Finder Agent',
        image: '/images/screenshot.png',
        description: 'Automated sales lead-generation workflow finding prospects via Apollo.io People Search and storing them in MongoDB Atlas.',
        technologies: ['n8n', 'Apollo.io', 'MongoDB Atlas'],
        githubUrl: '#',
        liveUrl: '#',
    },
    {
        name: 'AI BioScan',
        image: '/images/screenshot.png',
        description: 'Health-risk prediction platform using ML models on user health inputs. React front end displays predictions, Python handles ML inference, and PostgreSQL stores the data.',
        technologies: ['React.js', 'Python', 'PostgreSQL', 'ML'],
        githubUrl: '#',
        liveUrl: 'https://aibioscan.vercel.app',
    },
]

export const hackathons = [
    {
        title: 'E-Governance Management System',
        event: 'Quantbit Technologies Hackathon 2025',
        award: '🥈 2nd Place',
        description: 'A platform where citizens report civic issues to municipal officers. Features role-based access, real-time status dashboard, multi-city support, and automatic issue categorization, prioritization, and notifications.',
    },
    {
        title: 'Exhibit Monitor',
        event: 'Zensar Technologies Hackathon 2025',
        award: '🏆 Finalist',
        description: 'A backend app that monitors text files — handling 100+ daily files up to 10 GB. Checks folders every 30 seconds, validates name, arrival time and duplicates, and uses JSON config with error logging.',
    },
]

export const services = [
    {
        title: 'AI / ML Development',
        description: 'Building intelligent systems — computer vision, NLP, predictive models, and generative AI integrations using OpenAI, Gemini, and Anthropic APIs.',
        icon: FiCpu,
    },
    {
        title: 'Full Stack Web Development',
        description: 'End-to-end web applications using React, Next.js, Node.js, FastAPI, and Flask — from pixel-perfect UIs to robust backend APIs.',
        icon: FiCode,
    },
    {
        title: 'Backend & API Engineering',
        description: 'Scalable, secure REST APIs and microservices with PostgreSQL, MongoDB, Redis, JWT/RBAC auth, and real-time Socket.io communication.',
        icon: FiDatabase,
    },
    {
        title: 'Generative AI & Chatbots',
        description: 'Custom AI-powered chatbots, agents, and LLM integrations (Gemini, Claude, GPT) tailored to business logic and datasets.',
        icon: FiZap,
    },
    {
        title: 'Cloud & DevOps',
        description: 'Containerisation with Docker, CI/CD pipelines, AWS EC2 and Google Cloud deployments, and Azure DevOps infrastructure management.',
        icon: FiCloud,
    },
    {
        title: 'Workflow Automation',
        description: 'Automated pipelines and agents using n8n, Temporal.io, and third-party integrations to streamline business operations.',
        icon: FiGlobe,
    },
]