import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./index.css";
const url = "https://course-api.com/react-tabs-project";
function AppJs() {
  const [loading, setLoading] = useState(true);
  const [jobs, setjobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newjobs = await response.json();
    setjobs(newjobs);
    setLoading(false);
  };

  useState(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="Loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="Jobs-center">
      <div className="btn-container">
        {jobs.map((item, index) => {
          return (
            <button
              onClick={() => {
                setValue(index);
              }}
              className={`job-btn ${index === value && "active"}`}
              key={index}
            >
              {item.company}
            </button>
          );
        })}
      </div>
      <div className="job-info">
        <h3 className="title">{title}</h3>
        <span className="span">{company}</span>
        <p className="job-date">{dates}</p>
        <div>
          {jobs.map((item, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight /> {item.duties[value]}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AppJs;
