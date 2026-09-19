


function ApplicationCard({application}){
    return (
        <div className="application-card"
         style={{
        border: "3px solid black",
        padding: "20px",
        margin: "20px",
      }}
    >
            <h3>Company: {application.company}</h3>
            <p>Role: {application.jobRole}</p>
            <p>Status: {application.status}</p>
            <p>Date Applied: {application.dateApplied}</p>
        </div>
    );
}


export default ApplicationCard;