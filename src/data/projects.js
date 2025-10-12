import agroEvents from "../assets/projects/agro-events.png";
import agroGraph from "../assets/projects/agro-graph.png";
import agroHome from "../assets/projects/agro-home.png";
import agroServices from "../assets/projects/agro-services.png";
import agroSignin from "../assets/projects/agro-signin.png";
import agroFunfacts from "../assets/projects/agro-funfacts.png";
import agroLocation from "../assets/projects/agro-location.png";
import agroUser from "../assets/projects/agro-user.png";

//soccerquiz images
import soccerHome from "../assets/projects/soccer-home.png";
import soccerReview from "../assets/projects/soccer-review.png";
import soccerQuestion from "../assets/projects/soccer-question.png";
import soccerResult from "../assets/projects/soccer-result.png";
import soccerExplanation from "../assets/projects/soccer-explanation.png";

//mensa internship project images
import home from "../assets/projects/MPC_project/home.png";
import cart from "../assets/projects/MPC_project/cart.png";
import products from "../assets/projects/MPC_project/products.png";
import selectVariants from "../assets/projects/MPC_project/selectVariants.png";

export const projects = [
  // eriko agro object
  {
    title: "Eriko Agro",
    category: "web-apps",
    id: "eriko-agro",
    host: "https://eriko-agro.vercel.app/home",
    screenShots: [
      { src: agroServices, caption: "Services Page" },
      { src: agroHome, caption: "Homepage" },
      { src: agroEvents, caption: "Events Page" },
      { src: agroGraph, caption: "Graph View" },
      { src: agroSignin, caption: "Signin Page" },
      { src: agroFunfacts, caption: "Fun Facts Section" },
      { src: agroLocation, caption: "Location Page" },
      { src: agroUser, caption: "User Info" },
    ],
    body: `This project is a full-stack web application designed to offer a seamless and interactive user experience. Built with React and powered by Firebase Firestore, the platform integrates user authentication and several interactive pages to provide a dynamic environment for users.

Users can sign up, log in, and recover forgotten passwords with Firebase Authentication. The blog system ensures that only authenticated users can create and edit blog posts, maintaining a secure and controlled content flow. Additionally, the event RSVP feature allows users to indicate attendance and modify their responses conveniently.

To enhance accessibility, the app includes a search functionality that highlights matching keywords before navigation. Meta tags and SEO are optimized with React Helmet, improving visibility on search engines.

The project is hosted on Vercel, ensuring smooth deployment, and follows strict Firestore security rules where users can only modify their own data, reinforcing data privacy.`,

    keyFeatures: {
      "User Authentication":
        "Login, Signup, and Forgot Password functionalities using Firebase Auth.",
      "Blog System":
        "Anyone can view blogs, but only logged-in users can create them. Editing is restricted to the original author.",
      "Event RSVP": "Users can RSVP or cancel their attendance for events.",
      "Search Functionality":
        "Highlights matching keywords before users navigate.",
      "Firestore Database": "Secure storage for users, blogs, and event data.",
      "Meta Tags & SEO":
        "Implemented with React Helmet for better search engine ranking.",
    },

    techStack: {
      frontend: "React (with Vite)",
      database: "Firebase Firestore",
      authentication: "Firebase Auth",
      hosting: "Vercel",
      styling: "Custom CSS",
    },
  },

  // soccer quiz
  {
    title: "Soccer Quiz Zone",
    category: "web-apps",
    id: "soccer-quiz-zone",
    host: "https://soccer-quiz-zone.vercel.app/home",
    screenShots: [
      { src: soccerHome, caption: "Home Page" },
      { src: soccerReview, caption: "Review Answers" },
      { src: soccerQuestion, caption: "Question Section" },
      { src: soccerExplanation, caption: "Explanation of Right Answers" },
      { src: soccerResult, caption: "Your Result" },
    ],
    body: `This project is a dynamic and interactive quiz application built with React and styled using Tailwind CSS. The app offers a seamless user experience with dynamic routing and state management via location.state, ensuring smooth navigation between different quiz sections.

Users can engage with some European leagues and receive virtual feedback on their selections. The app leverages React Router for handling navigation while efficiently passing state data between components, allowing for a fluid and engaging quiz experience.

This project showcases efficient React state management, routing techniques, and responsive UI design while delivering an engaging user experience.`,
    keyFeatures: {
      "Dynamic Routing":
        "Ensures smooth navigation between questions and results.",
      "State Management": "Passes data efficiently between routes.",
      "Interactive UI": " Clean and responsive design powered by Tailwind CSS.",
      "Optimized Performance":
        " Lightweight and fast-loading for a seamless experience.",
    },
    techStack: {
      frontend: "React (with CRA)",
      hosting: "Vercel",
      styling: "tailwind CSS",
    },
  },
  {
    title: "Product API (TypeScript + Prisma)",
    category: "web-apps",
    id: "product-api",
    host: "https://mpc-frontend.vercel.app/",
    screenShots: [
      { src: home, caption: "UI Display" },
      { src: cart, caption: "Your Cart" },
      { src: products, caption: "Products Available" },
      { src: selectVariants, caption: "Select a Product Variant" },
    ],
    body: `This project was part of a backend technical exercise for an internship. It uses TypeScript, Prisma ORM, and SQLite to manage product data through RESTful API endpoints.

The main focus was on backend structure and TypeScript integration. I implemented routes for creating, reading, updating, and deleting product entries, ensuring type safety throughout the codebase. Although I relied on reference materials for setup, this project greatly improved my understanding of Prisma’s workflow, TypeScript interfaces, and how backend logic connects to a database.
`,

    keyFeatures: {
      "Type Safety with TypeScript":
        "Ensures reliability and consistency across all API routes using strong type definitions.",
      "CRUD Operations":
        "Includes endpoints for creating, reading, updating, and deleting product entries.",
      "Prisma ORM Integration":
        "Simplifies database interactions and schema management with Prisma's type-safe client.",
      "SQLite Database":
        "Lightweight relational database used for local development and testing.",
      "Learning-Oriented Build":
        "Developed as a hands-on way to understand backend workflows and TypeScript’s role in full-stack development.",
    },

    techStack: {
      backend: "Node.js, Express, TypeScript, Prisma",
      database: "SQLite",
      hosting: "Vercel (Frontend) / Render (Backend)",
    },
  },
];
