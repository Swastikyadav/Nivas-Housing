import React from 'react';
import { Route } from "react-router-dom";
import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import DetailsPage from "./pages/detailspage/detailspage.component";

function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      {/* <Route exact path="/details" component={DetailsPage} /> */}
      <Route exact path="/details/:house" component={DetailsPage} />
    </>
  );
}

export default App;
