import "./App.css";
import loading from "./assets/loading.gif";
import notFound from "./assets/404.png";
import Form from "./components/from/Form";
import JobCard from "./components/jobcard/JobCard";
import Header from "./components/header/Header";
import axios from "axios";
import { useState } from "react";

function App() {
  const [isLoading, setisLoading] = useState(false);
  const [jobs, setJobs] = useState();

  const newQuery = (description, location) => {
    axios({
      method: "get",
      url: `/positions.json?description=${description}&location=${location}`,
    })
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err))
      .finally(() => setisLoading(false));
  };

  return (
    <div className="App">
      <Header />
      <Form newQuery={newQuery} />
      {jobs?.length === 0 ? <img src={notFound} alt="404Logo" /> : null}
      {isLoading ? <img src={loading} alt="loading Logo" /> : null}
      {jobs?.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default App;
