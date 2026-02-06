export const availableCommands = [
  { cmd: "help", desc: "Show all available commands" },
  { cmd: "about", desc: "Learn about me" },
  { cmd: "skills", desc: "View my tech stack" },
  { cmd: "experience", desc: "See my work history" },
  { cmd: "projects", desc: "See my work" },
  { cmd: "resume", desc: "View my resume" },
  { cmd: "contact", desc: "Get in touch" },
  { cmd: "coffee", desc: "Brew some coffee" },
  { cmd: "whoami", desc: "Identity information" },
  { cmd: "sudo", desc: "Try sudo access" },
  { cmd: "clear", desc: "Clear terminal" },
  { cmd: "ls", desc: "List files" },
  { cmd: "ping", desc: "Check connection" },
  { cmd: "exit", desc: "Close terminal" },
];

export const commandResponses = {
  help: "Available commands: about | skills | experience | projects | resume | contact | coffee | whoami | sudo | clear | ls | ping | exit\n\nTip: Type / to see command menu with descriptions",
  about:
    "Software Engineer | Backend & Distributed Systems\nSpecializing in scalable data pipelines, real-time processing, and cloud infrastructure.",
  skills:
    "Expert: C++, SQL, Python, Java, Scala (Spark), Spring Boot, FastAPI\nAdvanced: Apache Spark, EMR, Iceberg, Airflow, AWS, Docker, React.js, Next.js\nIntermediate: Kafka, JMeter, TypeScript, Redux, PostgreSQL",
  experience:
    "Currently: Software Engineer at Mobilewalla (Aug 2024 – Present)\nPreviously: Software Engineering Intern at Brevids (2021)",
  projects:
    "Latest: Hired Fox Link (AI Interview Platform)\nStatus: Building next-gen distributed systems",
  resume:
    "Opening resume...\n> Resume: /Ayush_Prakash_2026_SDE.pdf\n> Status: Available for download",
  contact:
    "ayushprakash.work@gmail.com | +91 8768353891 | github.com/Ayush865 | linkedin.com/in/ayush-prakash-2bb65122b | leetcode.com/itachi04",
  coffee:
    "> Initializing coffee.service...\n> [OK] Caffeine levels: OPTIMAL\n> [OK] Code quality: +100%",
  whoami:
    "ayush@backend ~ Software Engineer\nLocation: /home/mobilewalla\nStatus: optimizing-pipelines",
  sudo: "Permission denied. Nice try though.",
  "sudo rm -rf /": "Access denied. Security protocols engaged.",
  clear: "CLEAR_TERMINAL",
  ls: "projects/ skills.json config/ docker-compose.yml spark-jobs/ README.md",
  ping: "PING 8.8.8.8: 12ms | Connection: STABLE",
  exit: "EXIT_TERMINAL",
};
