import "./profile.scss";

export default function Profile({ username, email, bio }) {
  return (
    <div className="profile">
      <h2>Profil Utilisateur</h2>
      <div className="info">
        <p>
          <strong>Utilisateur:</strong> {username}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Bio:</strong> {bio}
        </p>
      </div>
    </div>
  );
};
