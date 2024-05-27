import React from "react";
import "./App.css";
import AppLayout from "./components/app-layout/AppLayout";
import JobListing from "./pages/job-listing/JobListing";
import PostList from "./pages/TestPage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <AppLayout>
        <PostList/>
        <JobListing />
      </AppLayout>
    </div>
  );
}

export default App;
