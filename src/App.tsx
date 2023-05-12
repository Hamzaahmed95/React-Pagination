import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Header, Body, Footer } from "./layout"
import "./App.css"

const App: React.FC = () => (
  <ErrorBoundary fallback={<>Fallback route</>}>
    <Header />
    <Body />
    <Footer />
  </ErrorBoundary>
);
export default App;