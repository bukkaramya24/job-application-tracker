import {Link} from 'react-router'


function Navbar(){
    return (
        <nav className="navbar">
            <h2> 💼 Job Application Tracker</h2>
            <div className="nav-links">
                <Link to="/">Dashboard</Link>
                <Link to="/applications">Applications</Link>
                <Link to="/add">Add Applications</Link>
                <Link to="/profile">Profile</Link>
            </div>

        </nav>
    );
}

export default Navbar