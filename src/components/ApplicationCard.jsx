import { useState } from "react";

function ApplicationCard({ application, setApplications }) {
  const [isEditing, setIsEditing] = useState(false);

  const [company, setCompany] = useState(application.company);
  const [jobRole, setJobRole] = useState(application.jobRole);

  const handleDelete = () => {
    const updatedApplications = JSON.parse(
      localStorage.getItem("applications")
    ).filter((item) => item.id !== application.id);

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );

    setApplications(updatedApplications);
  };

  const handleSave = () => {
    const storedApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    const updatedApplications = storedApplications.map((item) => {
      if (item.id === application.id) {
        return {
          ...item,
          company: company,
          jobRole: jobRole,
        };
      }

      return item;
    });

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );

    setApplications(updatedApplications);
    setIsEditing(false);
  };

  return (
    <div className="application-card">

      {isEditing ? (
        <>
          <label>Company Name</label>

          <input
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />

          <label>Job Role</label>

          <input
            type="text"
            value={jobRole}
            onChange={(event) => setJobRole(event.target.value)}
          />

          <br />

          <button onClick={handleSave}>Save</button>

          <button onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <h3>Company: {application.company}</h3>

          <p>Role: {application.jobRole}</p>

          <p>Status: {application.status}</p>

          <p>Date Applied: {application.dateApplied}</p>

          <p>Notes: {application.notes}</p>

          {application.jobLink && (
            <a
              href={application.jobLink}
              target="_blank"
              rel="noreferrer"
            >
              View Job
            </a>
          )}

          <br />

          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button onClick={handleDelete}>
            Delete
          </button>
        </>
      )}

    </div>
  );
}

export default ApplicationCard;