import type { NavLink, ProjectCard, StatItem, SkillItem } from "@/types";

export const primaryNavLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
];

export const secondaryNavLinks: NavLink[] = [
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const panelPrimaryLinks: NavLink[] = [
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills & Stats", href: "#skills" },
  { label: "Get In Touch", href: "#contact" },
];

export const panelSecondaryLinks: NavLink[] = [
  { label: "GitHub", href: "https://github.com/arnavranjan50" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arnav-ranjan-972348207" },
  { label: "Resume", href: "/Resume.pdf" },
  { label: "Twitter / X", href: "https://x.com/arnavranjan50" },
  { label: "Instagram", href: "https://instagram.com/arnav_ranjan18" },
  { label: "Email", href: "mailto:arnavranjan50@gmail.com" },
];

export const projects: ProjectCard[] = [
  {
    id: 1,
    title: "VIBE Music Player",
    description:
      "A premium Spotify-inspired music streaming app with AI-powered recommendations, real-time lyrics, and immersive playback experience.",
    tag: "Music · Streaming",
    gradient: "from-emerald-400 to-cyan-500",
    technologies: ["React", "Node.js", "MongoDB", "Spotify API"],
    githubUrl: "https://github.com/arnavranjan50/VIBE-Player",
    image: "/VIBE player.png",
  },
  {
    id: 2,
    title: "IAF Tactical Portfolio",
    description:
      "Military-themed 3D portfolio with tactical UI, cinematic GSAP animations, and interactive mission-style navigation built on Three.js.",
    tag: "3D · Portfolio",
    gradient: "from-indigo-500 to-pink-500",
    technologies: ["React", "Three.js", "GSAP", "Vercel"],
    githubUrl: "https://github.com/arnavranjan50/portfolio",
    image: "/IAF image.png",
  },
  {
    id: 3,
    title: "AI Based Stress Detection Using Typing Exercises",
    description:
      "An AI-based system that detects stress levels using typing exercises, speech analysis, and psychological questions.",
    tag: "AI · Machine Learning",
    gradient: "from-amber-400 to-red-500",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "Discord.js"],
  },
  {
    id: 4,
    title: "Campus Hustlers",
    description:
      "Campus Hustlers is a next-gen campus-centric social media platform designed to connect college students for knowledge sharing, project collaboration, and hyperlocal community building.",
    tag: "Social Media · Community",
    gradient: "from-teal-400 to-blue-500",
    technologies: ["Next.js", "Supabase", "Stripe", "Tailwind"],
  },
  {
    id: 5,
    title: "Animal Detection using YOLOv8",
    description:
      "A deep learning model using YOLOv8 architecture to detect animals in images and videos.",
    tag: "Deep Learning",
    gradient: "from-teal-400 to-blue-500",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    githubUrl: "https://github.com/arnavranjan50/ADAS---1.5",
    video: "/ADAS.mp4",
  },
];

export const stats: StatItem[] = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "+", label: "Projects Made" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "K+", label: "Lines of Code" },
];

export const skills: SkillItem[] = [
  { name: "Frontend", percent: 92 },
  { name: "Backend", percent: 88 },
  { name: "UI/UX Design", percent: 85 },
  { name: "DevOps", percent: 78 },
];
