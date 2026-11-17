export const projectCategories = [
  "ALL",
  "AI/ML",
  "WEB DEVELOPMENT",
  "JAVA",
  "PYTHON",
];

export const projects = [
  {
    id: "movie-recommendation-system",
    title: "Movie Recommendation Platform",
    category: "AI/ML",
    thumbnail: "/projects/movie-recommendation.png",
    overview:
      "An end-to-end movie discovery platform combining content-based filtering, collaborative recommendations, matrix factorization, and neural collaborative filtering. It also includes cold-start support, diversified rankings, explainable recommendations, and a catalog-grounded assistant.",
    problemStatement:
      "Help viewers find relevant films beyond popularity lists while addressing cold-start users, repetitive recommendations, and explainability.",
    contribution:
      "Built a full-stack recommendation system that combines multiple recommendation strategies with a React interface and FastAPI service.",
    features: [
      "Hybrid recommendations combine content and user-rating signals.",
      "Cold-start support helps personalize results for new users.",
      "Diversified ranking reduces repetitive recommendations.",
      "Explainable recommendations and a catalog-grounded chat assistant.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PyTorch",
      "React",
      "TypeScript",
      "Docker",
    ],
    githubUrl:
      "https://github.com/chaitanyamuthe1-stack/movie-recommendation-system",
    liveDemoUrl: "https://project-a77mp.vercel.app",
  },
  {
    id: "pr-agent",
    title: "PR Agent",
    category: "AI/ML",
    thumbnail: "/projects/pr-agent.png",
    overview:
      "An AI-assisted code review platform combining deterministic static analysis, standards-grounded findings, parallel bug and security review, and proposed corrections with reviewable diffs.",
    problemStatement:
      "Give developers a consistent review workflow that combines language-specific analysis with relevant coding and security guidance.",
    contribution:
      "Built a full-stack review platform with a multi-language tooling layer, provider routing, and a correction workflow with verification checks.",
    features: [
      "Runs language-specific linters and static-analysis tools.",
      "Grounds findings in OWASP and CWE guidance.",
      "Reviews code with parallel bug-detection and security analysis.",
      "Shows proposed corrections in side-by-side diffs.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "LangGraph",
      "Supabase",
    ],
    githubUrl: "https://github.com/chaitanyamuthe1-stack/PR-agent",
  },
  {
    id: "attendai",
    title: "AttendAI Smart Attendance System",
    category: "AI/ML",
    thumbnail: "/projects/attendai.png",
    overview:
      "A Streamlit attendance application using face recognition, with student management, timetable tools, live attendance sessions, and downloadable reports.",
    problemStatement:
      "Make attendance sessions and record keeping easier to manage for classes and scheduled activities.",
    contribution:
      "Built an AI-assisted attendance workflow and dashboard for managing students, schedules, and attendance reports.",
    features: [
      "Uses face recognition for camera-based attendance.",
      "Manages student records and timetable entries.",
      "Displays attendance status and session metrics.",
      "Exports attendance reports to Excel.",
    ],
    technologies: [
      "Python",
      "Streamlit",
      "InsightFace",
      "ONNX Runtime",
      "OpenCV",
      "NumPy",
    ],
    githubUrl:
      "https://github.com/chaitanyamuthe1-stack/AI-attendence-system",
  },
  {
    id: "ai-career-copilot",
    title: "AI Career Copilot",
    category: "AI/ML",
    thumbnail: "/projects/career-copilot.png",
    overview:
      "A career preparation dashboard for resume feedback, job matching, interview practice, application tracking, and career coaching, with local demo and optional AI-service modes.",
    problemStatement:
      "Bring common job-search preparation tasks and feedback into one place for candidates.",
    contribution:
      "Built an interactive career dashboard with resume analysis, role matching, interview coaching, and job-pipeline tools.",
    features: [
      "Audits resumes and highlights role-specific keyword gaps.",
      "Compares resumes with job listings and suggests improvements.",
      "Provides interactive mock interview practice.",
      "Tracks applications and offers career coaching.",
    ],
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Python",
      "Flask",
      "SQLite",
    ],
    githubUrl:
      "https://github.com/chaitanyamuthe1-stack/ai-career-copilot",
  },
  {
    id: "kids-learning-adventure",
    title: "Kids Learning Adventure",
    category: "WEB DEVELOPMENT",
    thumbnail: "/projects/kids-learning.png",
    overview:
      "A Django-powered learning portal for children with account support, chapter progress tracking, pronunciation practice, achievement badges, and learning preferences.",
    problemStatement:
      "Help young learners practice lessons and keep track of their progress and achievements.",
    contribution:
      "Built a learning web app with progress and achievement APIs, pronunciation tracking, and configurable voice and theme settings.",
    features: [
      "Supports account creation and sign-in.",
      "Tracks chapter scores, attempts, and completion.",
      "Records pronunciation practice.",
      "Awards badges and saves learning preferences.",
    ],
    technologies: ["Python", "Django", "SQLite", "PostgreSQL"],
    githubUrl: "https://github.com/chaitanyamuthe1-stack/kids-adv",
  },
  {
    id: "ai-chess-engine",
    title: "AI Chess Engine",
    category: "AI/ML",
    thumbnail: "/projects/chess-engine.png",
    overview:
      "An interactive chess app backed by a custom engine using minimax search, alpha-beta pruning, and piece-square tables for positional evaluation.",
    problemStatement:
      "Create a playable chess experience with legal move handling and an AI opponent at adjustable difficulty.",
    contribution:
      "Implemented chess move logic and an AI search engine, then connected it to an interactive Streamlit interface.",
    features: [
      "Handles legal moves, check, checkmate, stalemate, and promotion.",
      "Uses minimax with alpha-beta pruning and positional evaluation.",
      "Includes move history, captured pieces, hints, and undo.",
      "Supports adjustable AI difficulty and AI-versus-AI play.",
    ],
    technologies: [
      "Python",
      "Streamlit",
      "Minimax",
      "Alpha-Beta Pruning",
    ],
    githubUrl: "https://github.com/chaitanyamuthe1-stack/chess",
  },
  {
    id: "sales-dashboard",
    title: "Sales Dashboard",
    category: "PYTHON",
    thumbnail: "/projects/sales-dashboard.svg",
    overview:
      "An interactive Streamlit dashboard for exploring Superstore sales data with filters, summary metrics, and visual reports.",
    problemStatement:
      "Make sales, profit, and order patterns easier to explore across product, region, customer segment, and shipping dimensions.",
    contribution:
      "Built an interactive analytics dashboard with filters, key performance summaries, charts, and a raw-data preview.",
    features: [
      "Filters data by category, region, segment, year, and shipping mode.",
      "Summarizes sales, profit, discounts, and order counts.",
      "Visualizes category, regional, monthly, product, and shipping trends.",
      "Provides an expandable preview of the underlying data.",
    ],
    technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
    githubUrl: "https://github.com/chaitanyamuthe1-stack/project",
  },
];
