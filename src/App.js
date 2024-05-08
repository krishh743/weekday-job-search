import React from "react";
import "./App.css";
import AppLayout from "./components/app-layout/AppLayout";
import JobListing from "./pages/job-listing/JobListing";

function App() {
  return (
    <div className="App">
      <AppLayout>
        <JobListing />
      </AppLayout>
    </div>
  );
}

export default App;
