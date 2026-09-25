
import { useState } from "react";
import { Link } from "react-router";
import ApplicationCard from "../components/ApplicationCard";


function Applications() {
  const [applications, setApplications] = useState(() => {
    return JSON.parse(localStorage.getItem("applications")) || [];
  });

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const filteredApplications = applications.filter((application) => {
  const matchesSearch =
    application.company.toLowerCase().includes(search.toLowerCase()) ||
    application.jobRole.toLowerCase().includes(search.toLowerCase());

  const matchesStatus =
    statusFilter === "All" ||
    application.status === statusFilter;

  return matchesSearch && matchesStatus;
});

 

  return (
    <div>
      <h1>Applications</h1>
      <p>Here you can view all your job applications.</p>

      
      
      <input
         className="application-search"
         type="text"
         placeholder="Search by company or job role..."
         value={search}
         onChange={(event) => setSearch(event.target.value)}
      />
      <select className="application-filter"
        value={statusFilter}
        onChange={(event) => setStatusFilter(event.target.value)}
      >
        <option value="All">All Status</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Selected">Selected</option>
        <option value="Rejected">Rejected</option>
     </select>

      {filteredApplications.length === 0 ? (
        <div className="empty-state">
    <h2>📋 No applications found</h2>
    <p>
      Start tracking your job search by adding your first application.
    </p>
     <Link to="/add" className="empty-state-button">
  + Add Application
</Link>
  </div>
      ) : (
        filteredApplications.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
            setApplications={setApplications}
          />
        ))
      )}
    </div>
  );
}

export default Applications;