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

export const projects = [
  {
    title: "Eriko Agro",
    link: "/projects/eriko-agro",
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

    keyFeatures: [
      "User Authentication – Login, Signup, and Forgot Password functionalities using Firebase Auth.",
      "Blog System – Anyone can view blogs, but only logged-in users can create them. Editing is restricted to the original author.",
      "Event RSVP – Users can RSVP or cancel their attendance for events.",
      "Search Functionality – Highlights matching keywords before users navigate.",
      "Firestore Database – Secure storage for users, blogs, and event data.",
      "Meta Tags & SEO – Implemented with React Helmet for better search engine ranking.",
    ],

    techStack: {
      frontend: "React (with Vite)",
      database: "Firebase Firestore",
      authentication: "Firebase Auth",
      hosting: "Vercel",
      styling: "Custom CSS",
    },
  },

  // {
  //   title: "Europe League Quiz",
  //   description: "Home page showing the various leagues.",
  //   image: soccerHome,
  //   link: "/projects/europe-league-quiz",
  //   body: "Hello world",
  // },
  // {
  //   title: "Europe League Quiz",
  //   description: "Answer Review section.",
  //   image: soccerReview,
  //   link: "/projects/europe-league-quiz",
  //   body: "Hello world",
  // },
];
