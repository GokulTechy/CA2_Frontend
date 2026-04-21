import {
  BrowserRouter as Router,
  Routes,
  Route
}
from "react-router-dom";

import Activities
from "../Pages/Activities";

import ActivityDetails
from "../Pages/ActivityDetails";

import Filter
from "../Pages/Filter";

import Stats
from "../Pages/Stats";


const AppRouter = () => {

  return (

    <Router>

      <Routes>

        {/* Activities Page */}
        <Route
          path="/activities"
          element={<Activities />}
        />

        {/* Activity Details Page */}
        <Route
          path="/activities/:id"
          element={<ActivityDetails />}
        />

        {/* Activity Filter Page */}
        <Route
          path="/activities/:id/filter"
          element={<Filter />}
        />

        {/* Stats Page */}
        <Route
          path="/stats"
          element={<Stats />}
        />

        {/* Optional fallback */}
        <Route
          path="/"
          element={<Activities />}
        />

      </Routes>

    </Router>

  );
};

export default AppRouter;