export const profile = {
  name: "Hari Prasath S",
  title: "AI/ML & Backend Engineer",
  tagline:
    "I build scalable, production-ready backend systems and AI-driven applications.",
  phone: "6369940694",
  email: "hariprasathai07@gmail.com",
  linkedin: "https://www.linkedin.com/in/hariprasathai",
  github: "https://github.com/hariprasathai",
  summary:
    "Aspiring AI/ML and Backend Engineer skilled in Python, FastAPI, and Flask, with hands-on experience designing microservices architectures and containerizing applications using Docker. Experienced in building AI agent workflows, RAG pipelines, and LLM-integrated systems, alongside a solid grounding in SQL/NoSQL databases (MySQL, PostgreSQL, Redis). Passionate about building scalable, production-ready backend systems and continuously growing expertise in AI-driven engineering.",
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Python Backend Developer",
    company: "Magizh Technologies",
    period: "June 2026 – Present",
    points: [
      "Developed and maintained backend services using FastAPI and Flask, implementing new features and resolving production issues across live projects.",
      "Diagnosed and resolved 5+ recurring frontend-backend integration bugs in a full-stack quiz application, improving UI reliability and stability across the MCQ rendering module.",
      "Designed and containerized a microservices-based backend application using Flask and FastAPI with Docker, structuring independent services for scalability.",
      "Contributed to the architecture and implementation (~45% complete) of an internal training access-management system, enabling manager-controlled, tiered repository access for trainees.",
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  stack: string[];
  points: string[];
};

export const projects: Project[] = [
  {
    name: "Shopora — AI-Powered Personal Shopping Assistant",
    blurb:
      "A production-oriented AI shopping assistant that blends e-commerce with LLM-based conversational shopping and recommendations.",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "LLMs",
      "RAG",
      "LangGraph",
      "pytest",
    ],
    points: [
      "Built a production-oriented AI shopping assistant (10+ product catalog) combining e-commerce functionality with LLM-based conversational shopping and recommendations, on a scalable FastAPI + React architecture with PostgreSQL and Redis.",
      "Implemented hybrid keyword + semantic vector search (embeddings) for product discovery, and built RAG-based recommendations for context-aware responses.",
      "Integrated LLM tool calling and agent workflows using LangGraph, enabling the assistant to interact with product search and shopping operations.",
      "Designed secure authentication, authorization, and user-owned cart/order workflows; containerized services using Docker with PostgreSQL/pgvector and Redis for scalable retrieval.",
      "Added automated testing with pytest and structured the project toward CI/CD, observability, and production-ready system design.",
    ],
  },
  {
    name: "FastAPI Microservices — E-commerce Practice System",
    blurb:
      "A microservices-based e-commerce system with independent Inventory, Order, and Payment services.",
    stack: ["FastAPI", "Redis / Redis OM", "React", "Docker"],
    points: [
      "Built a microservices-based e-commerce system with independent Inventory, Order, and Payment services running on separate ports.",
      "Implemented product inventory management, order creation, inventory decrement, and payment/fee/total calculations across services.",
      "Used Redis for inter-service communication, with a React frontend and Docker-based containerization; configured CORS for cross-service communication.",
    ],
  },
];

// Latent-space clusters — the real skill groups framed as labeled regions of the
// engineer's capability embedding. Same stack, projected onto an MLOps map.
export type SkillCluster = { cluster: string; dims: string[] };

export const latentSpace: SkillCluster[] = [
  { cluster: "Languages", dims: ["Python", "SQL", "TypeScript"] },
  { cluster: "Backend Frameworks", dims: ["FastAPI", "Flask"] },
  { cluster: "Frontend", dims: ["React"] },
  {
    cluster: "Architecture",
    dims: ["Microservices", "REST APIs", "AI Agent Architectures"],
  },
  {
    cluster: "AI/ML",
    dims: ["RAG", "LLMs", "LangGraph", "Embeddings", "Vector Search", "Scikit-learn"],
  },
  {
    cluster: "Databases",
    dims: ["MySQL", "PostgreSQL", "pgvector", "Redis"],
  },
  { cluster: "DevOps / Infra", dims: ["Docker", "Kubernetes (hands-on)"] },
  { cluster: "Tools", dims: ["Git", "GitHub", "Linux", "pytest"] },
];

// Model Registry — core competencies published as versioned, deployable "models".
// `metric` is a self-assessed confidence (0-100); `status` reflects how battle-tested
// the skill is across real projects. Data-forward, no icons.
export type ModelStatus = "production" | "staging" | "experimental";
export type ModelEntry = {
  id: string;
  name: string;
  cluster: string;
  metric: number;
  status: ModelStatus;
};

export const modelRegistry: ModelEntry[] = [
  { id: "python-core", name: "Python", cluster: "Languages", metric: 95, status: "production" },
  { id: "fastapi-svc", name: "FastAPI", cluster: "Backend", metric: 92, status: "production" },
  { id: "microservices", name: "Microservices", cluster: "Architecture", metric: 88, status: "production" },
  { id: "docker-runtime", name: "Docker", cluster: "DevOps", metric: 88, status: "production" },
  { id: "rag-pipeline", name: "RAG Pipelines", cluster: "AI/ML", metric: 85, status: "production" },
  { id: "langgraph-agents", name: "LangGraph Agents", cluster: "AI/ML", metric: 82, status: "production" },
  { id: "redis-store", name: "Redis", cluster: "Databases", metric: 82, status: "production" },
  { id: "pgvector-search", name: "pgvector · Vector Search", cluster: "Databases", metric: 80, status: "production" },
  { id: "sklearn-ml", name: "Scikit-learn", cluster: "AI/ML", metric: 68, status: "staging" },
  { id: "k8s-orchestration", name: "Kubernetes", cluster: "DevOps", metric: 55, status: "experimental" },
];

export const responsibilities: string[] = [
  "Design and develop RESTful APIs and backend services using Python (FastAPI, Flask).",
  "Build and maintain containerized microservices architectures using Docker.",
  "Collaborate on debugging and resolving production issues in full-stack applications.",
  "Contribute to system architecture and design discussions for internal tools.",
  "Work with SQL databases for data storage, retrieval, and management.",
  "Follow Git-based collaborative workflows (branches, PRs, issue tracking).",
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  detail: string;
};

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "CMS College of Science and Commerce, Coimbatore",
    period: "2023 – 2026",
    detail: "Aggregate: 70%",
  },
  {
    degree: "Higher Secondary Education (HSC)",
    institution: "Model High School, Sathyamangalam",
    period: "2023",
    detail: "Final Percentage: 73%",
  },
];

// Add your certifications here as they come in.
export const certifications: string[] = [];
