


function Dashboard(){
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <p>Welcome to your job application dashboard.</p>

            <div className="dashboard-cards">
                <div className="dashboard-card">
                    <h3>Total Applications</h3>
                    <p>0</p>
                </div>
                <div className="dashboard-card">
                    <h3>Applied</h3>
                    <p>0</p>
                </div>
                <div className="dashboard-card">
                    <h3>Interview</h3>
                    <p>0</p>
                </div>
                <div className="dashboard-card">
                    <h3>Selected</h3>
                    <p>0</p>
                </div>
                <div className="dashboard-card">
                    <h3>Rejected</h3>
                    <p>0</p>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;