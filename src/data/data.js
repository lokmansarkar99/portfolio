import foodies from "../assets/images/foodies.png";
import BlogKori from "../assets/images/BlogKori.png";
import AuthMaster from "../assets/images/AuthMaster.png";

const projects = [
  {
    id: "677997e89c4aede5576bb183",
    image: foodies,
    title:
      "Foodies Mama - Restaurant Discovery & Food Ordering Platform - MultiVendor ",
    technologies: ["React", "Node Js", "Express Js", "mySQL", "Prisma"],
    frontend: ["React", "Tailwind CSS"],
    backend: ["Node Js", "Express Js", "mySQL", "Prisma"],
    intro:
      "Finding quality restaurants and ordering food online can be overwhelming with scattered information and inconsistent user experiences. My Foodies Mama solves this by providing a centralized platform where food lovers can discover restaurants, browse menus with detailed descriptions, and place orders seamlessly—all while reading authentic reviews from fellow food enthusiasts.",
    project_summary:
      " Foodies Mama is a comprehensive food ordering platform that connects users with local restaurants and eateries. The platform enables users to browse restaurant menus, view detailed food descriptions with images, place orders, and share their dining experiences through reviews and ratings. Restaurant owners can manage their menus, track orders in real-time, and engage with customer feedback to improve their services.",
    tech_details:
      "The project is built using React for the frontend with Redux for state management, providing a smooth and responsive user interface. The backend is powered by Node.js with Express.js, handling API requests and business logic. MongoDB serves as the database for storing restaurant information, menus, orders, and user data. Stripe API is integrated for secure payment processing, while Cloudinary manages image uploads and optimization for food photos.",
    challanges:
      "The main challenges included implementing a real-time order tracking system that updates both customers and restaurant owners simultaneously. Managing complex relationships between users, restaurants, menu items, and orders in the database required careful schema design. Integrating payment processing securely while maintaining a smooth checkout experience was particularly demanding. Additionally, optimizing image loading times for menu items without compromising visual quality required strategic implementation of lazy loading and image compression.",
    Limitation:
      "The current version does not support multiple payment methods beyond credit cards, and the platform is limited to web browsers without a dedicated mobile application. The system lacks an advanced filtering mechanism for dietary restrictions and allergen information. Additionally, there is no real-time chat support between customers and restaurants for order clarifications, and the platform does not yet support scheduled orders for future dates.",
    future_scope:
      "Future enhancements include developing native iOS and Android applications for better mobile accessibility and push notification support. Plans include implementing AI-powered food recommendations based on user preferences and order history. Adding support for multiple cuisines filtering, dietary preference tags, and allergen warnings will improve user experience. Integration of a live chat system, loyalty rewards program, and the ability to schedule orders in advance are also on the roadmap. Additionally, expanding payment options to include digital wallets and implementing a restaurant analytics dashboard for business insights are planned features.",

    live_link: "https://foodiesmama.online/",
    github_link: "https://github.com/lokmansarkar99/foodies",
  },

  {
    id: "677997e89c4aede5576bb184",
    image: BlogKori,
    title: "Blog Kori-  Modern Blogging Platform - Team Project",
    technologies: ["NextJS", "Node Js", "Express Js", "MongoDB"],
    frontend: ["NextJS", "Tailwind CSS"],
    backend: ["Node Js", "Express Js", "MongoDB"],
    intro:
      "Content creators and readers often struggle with cluttered blogging platforms that lack proper content moderation and user engagement features. BlogKori addresses this by offering a clean, intuitive blogging experience where writers can share their thoughts seamlessly, readers can engage meaningfully through comments and reactions, and administrators maintain quality through comprehensive moderation tools—all within a fast, responsive interface.",
    project_summary:
      " Blogkori is a full-featured blogging platform designed for content creators and technology enthusiasts. The platform enables users to create rich-text blog posts with embedded images, engage with content through likes, dislikes, and comments, and discover articles through an intelligent search system. Administrators have complete control over user management, content moderation, and platform security. The application emphasizes user experience with mobile-first design, fast load times, and accessibility features that ensure everyone can participate in the conversation.",
    tech_details:
      " The project is built using Next.js for the frontend, leveraging server-side rendering for improved SEO performance and faster initial page loads. The backend is powered by Node.js with Express.js, handling API requests, authentication logic, and content management operations. MongoDB serves as the database, storing user profiles, blog posts, comments, and engagement metrics with efficient indexing for search functionality. JWT (JSON Web Tokens) manages secure authentication and role-based access control. The platform is deployed on Vercel for optimal performance and automatic scaling, with Cloudinary handling image uploads and optimization.",
    challanges:
      "  The primary challenges included implementing a robust role-based access control system that differentiates between regular users and administrators while maintaining security across all endpoints. Designing an efficient search algorithm that queries post titles in real-time without compromising performance required careful database indexing and query optimization. Preventing common security vulnerabilities such as XSS, CSRF, and SQL injection attacks demanded thorough input validation and sanitization at every layer. Managing state across multiple components in React while keeping the application performant was addressed through strategic use of context and custom hooks. Additionally, implementing email verification for new user accounts while ensuring reliable delivery and handling edge cases proved more complex than anticipated.",
    Limitation:
      " The current version does not support rich media beyond images, meaning videos and audio files cannot be embedded directly into blog posts. The platform lacks a draft-saving feature, requiring users to complete posts in a single session. Social media login options are not yet implemented, limiting authentication to email-based registration only. The search functionality is basic, focusing only on post titles without full-text search across content. There is no notification system to alert users when their posts receive comments or reactions. The platform does not include analytics for authors to track post performance, view counts, or reader engagement metrics over time.",
    future_scope:
      " Future enhancements include implementing a comprehensive notification system that alerts users about comments, likes, and admin actions via email and in-app notifications. Plans include adding a draft autosave feature that automatically preserves work in progress and allows scheduled publishing. Integration of social login options through Google, GitHub, and other OAuth providers will streamline the registration process. Expanding the search capability to full-text search with filtering by categories, tags, and date ranges will improve content discovery. Adding author analytics dashboards with metrics on post views, engagement rates, and reader demographics is planned. Implementation of a bookmark/save feature for readers, support for video and audio embeds, and a following system where users can subscribe to their favorite authors are also on the roadmap. Additionally, introducing markdown support for technical writers and implementing a content recommendation engine based on reading history will enhance the overall user experience.",

    live_link: "https://ic-blog-app-ve3r.vercel.app/",
    github_link: "https://github.com/azizul-haque-dev/ic-blog-app",
  },

  {
    id: "677997e89c4aede5576bb185",
    image: AuthMaster,
    title: "Auth Master – JWT + Session-Based Authentication System",

    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Prisma ORM",
      "EJS",
      "JWT",
      "argon2",
      "Express-Session",
      "Zod Validation",
      "Cookie Authentication",
    ],

    frontend: [
      "EJS Templating Engine",
      "Server-Side Rendering (SSR)",
      "Client-Side Form Validation",
      "Flash Messages for Error/Success",
      "Fully Responsive Authentication UI",
    ],

    backend: [
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "MongoDB",
      "JWT Authentication (Access & Refresh Tokens)",
      "Session Management with Database",
      "argon2 Password Hashing",
      "Zod Request Validation",
      "Middleware-Based Authorization",
      "Secure Cookie Handling (HTTPOnly + Secure)",
    ],

    intro: `
Auth Master is a complete authentication system built using a hybrid model of JWT and Session-based authentication.
The project focuses on modern security standards, token lifecycle management, device-based session tracking, and real-world authentication flows.

Both registration and login flows use Zod validation, argon2 password hashing, Prisma ORM, and secure HTTP-only cookies.
The system ensures that access tokens automatically regenerate when expired, using refresh tokens tied to database sessions.
  `,

    project_summary: `
Auth Master is a production-ready authentication architecture designed for scalable and secure applications.
It implements user registration, login, logout, session creation, protected routes, and silent token regeneration.

When a user logs in, the system:
- Creates a session in the database using Prisma ORM
- Generates an access token (15 minutes expiry)
- Generates a refresh token (30 days expiry)
- Stores both tokens as secure HTTPOnly cookies

If the access token expires, the backend automatically validates and refreshes the token using the refresh token and sessionId.
During logout, the session is deleted from the database and all authentication cookies are cleared.

This project showcases a real-world, secure, and robust authentication mechanism using both session and token-based strategies.
  `,

    tech_details: ` 
The backend is built with Node.js and Express.js, using Prisma ORM to interact with a MongoDB database.
User passwords are hashed using argon2 for strong security.
Zod is used for request validation to ensure data integrity during registration and login. 
JWTs are used for stateless authentication, with access and refresh tokens managed via secure HTTPOnly cookies.
Express-Session is used to manage user sessions, storing session data in MongoDB for persistence.
Middleware functions handle token verification, session validation, and automatic token regeneration.
The frontend uses EJS templating for server-side rendering, providing a responsive UI for authentication flows.
Flash messages are implemented to give users feedback on errors or successful actions.
  `,
    challanges: `
1. Designing a hybrid JWT + Session mechanism and synchronizing both layers was technically complex.
2. Ensuring seamless access token regeneration through refresh tokens required structured middleware logic.
3. Managing user-session relations in MongoDB using Prisma ORM, which required careful schema planning.
4. Integrating Zod validation and properly handling its error responses with UI flash messages.
5. Managing secure (HTTPOnly + Secure) cookies created difficulties during local development.
  `,

    Limitation: `
1. The UI is currently EJS-based and does not include SPA or modern frontend frameworks like React or Next.js.
2. Sessions do not yet include automated expiration or inactivity-based session timeout.
3. Role-Based Access Control (RBAC) is not yet implemented.
4. Advanced authentication features like OTP or Two-Factor Authentication (2FA) are not included.
  `,

    future_scope: `
1. Implement full Role-Based Access Control (RBAC) for admin and user privilege separation.
2. Add device-based session limits (restrict login from multiple devices).
3. Integrate email verification and OTP-based secure login.
4. Build a full React or Next.js frontend on top of the existing backend API.
5. Add secure password reset via email using time-based tokens.
6. Implement suspicious login detection using IP/User-Agent monitoring.
7. Create a session history dashboard to allow users to monitor and revoke active sessions.
  `,

    live_link: "https://auth-9t8q.onrender.com/",
    github_link: "",
  },
  {
    id: "677997e89c4aede5576bb186",
    image: "https://i.ibb.co.com/BKzkqPD4/Screenshot-6.png",
    title: "Whoisly - Domain Whois Lookup Tool",
    technologies: ["React", "Tailwind CSS", "Axios", "React Router"],
    frontend: ["React", "Tailwind CSS"],
    backend: ["OMDB API"],
    intro:
      "Project intro goes here. In the intro it`s a good idea to answer a potential client`s need/problem so it`s more likely to land your next project or job.",
    project_summary:
      "  This project is a movie information platform where users can search for movies and view their details. The platform allows users to search for movies by title and view their information.",
    tech_details:
      " The project is built using React for the frontend and Tailwind CSS for styling. The OMDB API is used to fetch movie information. The project is hosted on Vercel.",
    challanges:
      "  The main challenges faced during the development of this project were implementing the search functionality, managing state in React, and ensuring the performance of the application. Additionally, optimizing the performance of the application was a key focus.",
    Limitation:
      "  The current version of the project does not support user authentication, and the user interface could be improved for better user experience. Additionally, the platform does not have a search functionality to find specific articles.",
    future_scope:
      "  In the future, I plan to add features such as user authentication, a search functionality, and a more user-friendly interface. Additionally, I would like to implement a recommendation system to suggest movies based on user interests.",

    live_link: "https://whoisly.vercel.app/",
    github_link: "https://github.com/lokmansarkar99/whoisly",
  },
];

export default projects;
