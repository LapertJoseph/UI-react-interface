import './missions.scss';
const Mission = ({ title, description, budget }) => {
  return (
    <div className="mission">
      <h3>{title}</h3>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Budget:</strong> {budget}
      </p>
    </div>
  );
};

export default Mission;
