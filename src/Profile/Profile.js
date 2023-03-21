import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={children}
        alt="Profile"
        style={{ width: 200, borderRadius: "50%", marginTop: 20 }}
      />
      <h1 style={{ margin: 20 }}>{fullName}</h1>
      <h3 style={{ margin: 10 }}>{profession}</h3>
      <p style={{ margin: 10 }}>{bio}</p>
      <button
        onClick={() => handleName(fullName)}
        style={{ padding: 10, margin: 10, borderRadius: 5 }}
      >
        Click to alert name
      </button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  handleName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  fullName: "Kais Namsi",
  bio: "No bio available.",
  profession: "No profession available.",
  children: "",
  handleName: () => alert("No name provided!"),
};

export default Profile;
