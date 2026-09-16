function Navbar(){
    return (
        <nav className="navbar">
            <h2> 💼 Job Application Tracker</h2>
            <div className="nav-links">
                <a href="/">Dashboard</a>
                <a href="/applications">Applications</a>
                <a href="/add">Add Applications</a>
                <a href="/profile">Profile</a>
            </div>

        </nav>
    );
}

export default Navbar