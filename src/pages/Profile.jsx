import { useState } from "react";




function Profile() {
    const [profile, setProfile] = useState(() => {
  return JSON.parse(localStorage.getItem("profile")) || {};
});

  const [name, setName] = useState(profile.name || "");
const [email, setEmail] = useState(profile.email || "");
const [phone, setPhone] = useState(profile.phone || "");
const [skills, setSkills] = useState(profile.skills || "");
const [github, setGithub] = useState(profile.github || "");
const [linkedin, setLinkedin] = useState(profile.linkedin || "");

  const handleSubmit = (event) => {
    event.preventDefault();

    const profile = {
      name,
      email,
      phone,
      skills,
      github,
      linkedin,
    };

    localStorage.setItem("profile", JSON.stringify(profile));

    alert("Profile saved successfully!");
  };

  return (
    <div className="profile">
      <h1>My Profile</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Skills</label>
          <input
            type="text"
            value={skills}
            onChange={(event) => setSkills(event.target.value)}
            placeholder="React, JavaScript, HTML, CSS"
          />
        </div>

        <div className="form-group">
          <label>GitHub</label>
          <input
            type="url"
            value={github}
            onChange={(event) => setGithub(event.target.value)}
            placeholder="https://github.com/username"
          />
        </div>

        <div className="form-group">
          <label>LinkedIn</label>
          <input
            type="url"
            value={linkedin}
            onChange={(event) => setLinkedin(event.target.value)}
            placeholder="https://linkedin.com/in/username"
          />
        </div>

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default Profile;