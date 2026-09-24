import { useState } from "react";

function Dashboard() {
  const [applications] = useState(() => {
    return JSON.parse(localStorage.getItem("applications")) || [];
  });

  const totalApplications = applications.length;

  const appliedCount = applications.filter(
    (application) => application.status === "Applied"
  ).length;

  const interviewCount = applications.filter(
    (application) => application.status === "Interview"
  ).length;

  const selectedCount = applications.filter(
    (application) => application.status === "Selected"
  ).length;

  const rejectedCount = applications.filter(
    (application) => application.status === "Rejected"
  ).length;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <p>Track your job applications and their status.</p>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h3>Total Applications</h3>
          <p>{totalApplications}</p>
        </div>

        <div className="dashboard-card">
          <h3>Applied</h3>
          <p>{appliedCount}</p>
        </div>

        <div className="dashboard-card">
          <h3>Interview</h3>
          <p>{interviewCount}</p>
        </div>

        <div className="dashboard-card">
          <h3>Selected</h3>
          <p>{selectedCount}</p>
        </div>

        <div className="dashboard-card">
          <h3>Rejected</h3>
          <p>{rejectedCount}</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;