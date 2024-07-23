import Mission from "./Missions";

const MissionsPage = () => {
  const missions = [
    {
      id: 1,
      title: "Mission 1",
      description: "Développement d'un site Prestashop",
      budget: "$1000",
    },
    {
      id: 2,
      title: "Mission 2",
      description: "Développement d'une API",
      budget: "$1500",
    },
    {
      id: 3,
      title: "Mission 3",
      description: "Recherche & Développement de logiciel de type ERP",
      budget: "$2000",
    },
  ];

  return (
    <div>
      <h1>Missions disponibles</h1>
      {missions.map((mission) => (
        <Mission
          key={mission.id}
          title={mission.title}
          description={mission.description}
          budget={mission.budget}
        />
      ))}
    </div>
  );
};

export default MissionsPage;
