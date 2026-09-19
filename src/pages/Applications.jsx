import {useState} from 'react'
import ApplicationCard from '../components/ApplicationCard'



function Applications(){
    const [applications,setApplications]=useState(()=>{
        return JSON.parse(localStorage.getItem("applications"))||[];
    })
    return (
        <div>
            <h1>Applications</h1>
            <p>Here you can view all your job applications.</p>
           {applications.length===0?(<p>No applications add yet.</p>):
           (applications.map((application)=>(
           <ApplicationCard key={application.id} application={application} />
           )))}
        </div>
    );
}

export default Applications;