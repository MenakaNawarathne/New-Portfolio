export const PROJECTS = [
  // {
  //   slug: "healthcare-platform",
  //   tag: "health-tech",
  //   title: "Healthcare Platform",
  //   role: "UI/UX + Frontend Development",
  //   locked: true,
  //   summary:
  //     "A modern healthcare platform focused on improving communication, appointment management, patient workflows, and digital healthcare experiences.",
  //   overview:
  //     "Healthcare tools are often where the most people encounter the most friction — booking a visit, finding a record, reaching a provider. This platform set out to make those everyday interactions feel as straightforward as any well-built consumer app, without losing the structure that clinical workflows depend on.",
  //   challenge:
  //     "Patients and staff were working across disconnected touchpoints — phone calls for scheduling, separate systems for records, no single place to see what was coming up or what had already happened. The interface needed to unify those workflows for two very different audiences — patients booking care and staff managing it — without either one feeling like an afterthought.",
  //   approach:
  //     "I started by mapping the two core journeys — the patient booking a visit and the staff member managing a caseload — separately, then found where they intersected. Wireframes and flows came first, so the information architecture was settled before any visual design or component work began. From there, the interface was built as a set of reusable, responsive components so the same system could serve both the booking flow and the internal dashboards.",
  //   features: [
  //     "Appointment scheduling & reminders",
  //     "Secure patient–provider messaging",
  //     "Patient records & history dashboard",
  //     "Role-based views for staff and patients",
  //     "Responsive experience across devices",
  //   ],
  //   process: [
  //     "Mapped patient and staff journeys separately, then reconciled overlaps",
  //     "Wireframed core flows before any visual design",
  //     "Built a shared, reusable component system for both surfaces",
  //     "Integrated real-time data so schedules and records stay in sync",
  //   ],
  //   techStack: ["React", "Next.js", "Firebase", "Firestore", "REST APIs", "Tailwind CSS"],
  // },
  // {
  //   slug: "dental-management-system",
  //   tag: "practice-mgmt",
  //   title: "Dental Management System",
  //   role: "UI/UX + Frontend Development",
  //   locked: true,
  //   summary:
  //     "A complete dental management platform designed around appointment scheduling, patient management, treatment workflows, payment processes, and operational dashboards.",
  //   overview:
  //     "A dental practice runs on dozens of small handoffs a day — booking, check-in, treatment notes, billing, follow-up. This system was built to hold all of it in one place, so front-desk staff, clinicians, and the practice's operations could work from the same source of truth instead of separate spreadsheets and paper charts.",
  //   challenge:
  //     "Treatment workflows, scheduling, and billing were handled as separate concerns, which made it easy for information to fall out of sync between the front desk and the treatment room. The system needed a single operational view without forcing every role to learn a workflow built for someone else's job.",
  //   approach:
  //     "I broke the practice's day-to-day into its real units of work — booking, treatment, payment, reporting — and designed a distinct, focused view for each, connected by shared patient and appointment records underneath. Dashboards were built last, once the underlying workflows were solid, so the reporting layer reflected how the practice actually operated rather than a generic template.",
  //   features: [
  //     "Appointment scheduling & calendar management",
  //     "Patient records & treatment history",
  //     "Treatment plan & workflow tracking",
  //     "Payment & billing processing",
  //     "Operational dashboards for practice staff",
  //   ],
  //   process: [
  //     "Broke the practice's daily operations into distinct, task-focused views",
  //     "Designed scheduling, treatment, and billing as connected but independent flows",
  //     "Built shared patient and appointment records underneath every view",
  //     "Layered operational dashboards on top of working, validated flows",
  //   ],
  //   techStack: ["React", "Next.js", "Firebase", "Firestore", "REST APIs", "Tailwind CSS"],
  // },
  
  {
    slug: "online-bookstore-management-system",
    tag: "web application",
    title: "Online Bookstore Management System",
    role: "Full-Stack Development",
    summary:
      "A responsive online bookstore built with ASP.NET Core and Blazor, with role-based access for customers, store staff, and administrators.",
    overview:
      "A full online bookstore covering browsing, checkout, order tracking, inventory monitoring, and administration, built with C#, ASP.NET Core 8, and Blazor.",
    challenge:
      "The system had to serve three different types of users, each with their own views and permissions, while keeping stock, orders, and user data consistent.",
    approach:
      "I designed the relational database first using Entity Framework Core code-first migrations with SQLite, including stock validation. I then built role-aware Blazor pages and REST API endpoints documented with Swagger, with BCrypt password hashing and server-side validation.",
    features: [
      "Customer registration & login with BCrypt hashing",
      "Book browsing with search, filter, and sort",
      "Shopping cart, checkout & order tracking",
      "Store Staff order processing & inventory monitoring",
      "Admin management of users, roles, books, authors, publishers & sales",
      "REST API documented with Swagger",
    ],
    process: [
      "Designed the database with EF Core code-first migrations",
      "Implemented authentication and role-based navigation",
      "Built customer, staff, and admin workflows in Blazor",
      "Exposed and documented REST API endpoints with Swagger",
    ],
    techStack: ["C#", "ASP.NET Core 8", "Blazor", "Entity Framework Core", "SQLite", "REST API", "Swagger"],
  },
  {
    slug: "shoe-management-system",
    tag: "desktop application",
    title: "Shoe Management System",
    role: "Java Development",
    summary:
      "A desktop application for managing shoes, brands, categories, prices, and stock, built with Java Swing and MySQL.",
    overview:
      "A desktop-based management application with a Java Swing interface and a MySQL database connected through JDBC.",
    challenge:
      "Product, brand, category, price, and stock data had to be managed in one place with fast searching and reliable record handling.",
    approach:
      "I applied Object-Oriented Programming principles throughout, built the interface with JFrame, JTable, and forms, and connected it to MySQL using JDBC for all data operations.",
    features: [
      "CRUD for shoes, brands, categories, prices & stock",
      "Search and record management",
      "Forms, tables & navigation built with Java Swing",
      "MySQL integration through JDBC",
    ],
    process: [
      "Structured the application using OOP principles",
      "Designed UI screens with JFrame, JTable, and forms",
      "Connected the app to MySQL via JDBC",
      "Implemented search and record-management features",
    ],
    techStack: ["Java", "Java Swing", "MySQL", "JDBC"],
  },
  {
    slug: "fitness-center-management-website",
    tag: "web application",
    title: "Fitness Center Management Website",
    role: "PHP Development",
    summary:
      "A database-driven fitness center website built with PHP, HTML, CSS, and MySQL.",
    overview:
      "A dynamic website for a fitness center, with server-side request handling and a MySQL database behind it.",
    challenge:
      "The website needed to process user requests on the server and store user and application information reliably.",
    approach:
      "I designed the database structure for user and application data, implemented server-side logic in PHP with SQL-based data operations, and tested everything in a local XAMPP environment.",
    features: [
      "Server-side request processing with PHP",
      "Database design for user and application data",
      "SQL-based data management",
      "Tested on a local XAMPP environment",
    ],
    process: [
      "Designed the database structure",
      "Implemented PHP server-side functionality",
      "Built SQL data-management operations",
      "Tested locally with XAMPP",
    ],
    techStack: ["PHP", "HTML", "CSS", "MySQL", "XAMPP"],
  },
  {
    slug: "carpool-management-system",
    tag: "team project",
    title: "Carpool Management System",
    role: "Frontend Development & Documentation",
    summary:
      "A collaborative web-based carpool management project built with React and Node.js.",
    overview:
      "A team project where I contributed to frontend development and project documentation using a Git-based workflow.",
    challenge:
      "Building a carpool platform as a team meant coordinating work across several contributors without breaking each other's changes.",
    approach:
      "I worked with Git branches and commits, contributed to the frontend, wrote project documentation, and collaborated with teammates to integrate features.",
    features: [
      "Collaborative development with Git & GitHub",
      "Frontend development with React",
      "Project documentation",
      "Feature integration with team members",
    ],
    process: [
      "Worked on feature branches and commits",
      "Built frontend components in React",
      "Wrote project documentation",
      "Integrated features with the team",
    ],
    techStack: ["React", "JavaScript", "Node.js", "Git", "GitHub"],
  },
];

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug) {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) return PROJECTS[0];
  return PROJECTS[(index + 1) % PROJECTS.length];
}
