import React from "react"
import { ErrorBoundary } from "react-error-boundary";
import Contact from "./Contact";


const About = () => {
  return (
    <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
      <Contact />
    </ErrorBoundary>
  );
};

export default About;