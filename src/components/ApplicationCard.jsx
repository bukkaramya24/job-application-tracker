import { useState } from "react";

function ApplicationCard({ application, setApplications }) {
  const [isEditing, setIsEditing] = useState(false);

  const [company, setCompany] = useState(application.company);
  const [jobRole, setJobRole] = useState(application.jobRole);
  const [status, setStatus] = useState(application.status);
  const [dateApplied, setDateApplied] = useState(application.dateApplied);
  const [jobLink, setJobLink] = useState(application.jobLink);
  const [notes, setNotes] = useState(application.notes);

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
          company,
          jobRole,
          status,
          dateApplied,
          jobLink,
          notes,
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
          <h3>Edit Application</h3>

          <label>Company</label>
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

          <label>Status</label>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Selected">Selected</option>
            <option value="Rejected">Rejected</option>
          </select>

          <label>Date Applied</label>
          <input
            type="date"
            value={dateApplied}
            onChange={(event) => setDateApplied(event.target.value)}
          />

          <label>Job Link</label>
          <input
            type="url"
            value={jobLink}
            onChange={(event) => setJobLink(event.target.value)}
          />

          <label>Notes</label>
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />

          <button onClick={handleSave}>Save</button>

          <button onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <h3>Company: {application.company}</h3>

          <p>Role: {application.jobRole}</p>

          <p>
  Status:{" "}
  <span className={`status-badge ${application.status.toLowerCase()}`}>
    {application.status}
  </span>
</p>

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