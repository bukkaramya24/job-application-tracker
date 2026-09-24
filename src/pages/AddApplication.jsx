import {useState} from 'react'



function AddApplication(){
    const [company,setCompany]=useState("")
    const [jobRole,setJobRole]=useState("")
    const [dateApplied,setDateApplied]=useState("")
    const [status,setStatus]=useState("Applied")
    const [jobLink,setJobLink]=useState("")
    const [notes,setNotes]=useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!company.trim() || !jobRole.trim() || !dateApplied) {
  alert("Please fill company, job role and date.");
  return;
      
}
if (jobLink && !jobLink.startsWith("http://") && !jobLink.startsWith("https://")) {
  alert("Please enter a valid job link starting with http:// or https://");
  return;
}



        const existingApplications = JSON.parse(localStorage.getItem("applications")) || [];

       const application={
        id:Date.now(),
        company,
        jobRole,
        dateApplied,
        status,
        jobLink,
        notes,
       };

       existingApplications.push(application)
       localStorage.setItem("applications",JSON.stringify(existingApplications));


    setCompany("");
    setJobRole("");
    setDateApplied("");
    setStatus("Applied");
    setJobLink("");
    setNotes("");
    };
    




    return (
        <div className="add-application">
            <h1>Add Job Application</h1>
            <p>Here you can add your job application.</p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Company Name</label>
                    <input type="text" placeholder="Enter company name"
                    value={company} onChange={(event)=>setCompany(event.target.value)} />
                </div>
                <div className="form-group">
                    <label>Job Role</label>
                    <input type="text" placeholder="Enter job role"
                     value={jobRole} onChange={(event)=>setJobRole(event.target.value)} />
                </div>
                <div className="form-group">
                    <label>Date Applied</label>
                    <input type="date" 
                    value={dateApplied} onChange={(event)=>setDateApplied(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select value={status} onChange={(event)=>setStatus(event.target.value)}>
                        <option>Applied</option>
                        <option>Interview</option>
                        <option>Selected</option>
                        <option>Rejected</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Job Link</label>
                    <input type="url" placeholder="Enter job link"
                    value={jobLink} onChange={(event)=>setJobLink(event.target.value)} />
                </div>
                <div className="form-group">
                    <label>Notes</label>
                    <textarea placeholder="Add notes about this application"
                    value={notes} onChange={(event)=>setNotes(event.target.value)}></textarea>
                </div>
                <button type="submit">Add Application</button>
            </form>
        </div>
    );
}

export default AddApplication;  