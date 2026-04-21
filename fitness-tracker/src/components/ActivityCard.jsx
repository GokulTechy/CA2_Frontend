const ActivityCard = ({
  activity
}) => {

  const name =
    activity.name ||
    "Unknown";

  const date =
    activity.date ||
    "No Date";

  return (

    <div
      data-testid="activity-item"
    >

      <h3>{name}</h3>

      <p>
        Steps:
        {activity.steps}
      </p>

      <p>
        Calories:
        {activity.caloriesBurned}
      </p>

      <p>
        Workout Minutes:
        {activity.workoutMinutes}
      </p>

      <p>Date: {date}</p>

      <p>
        Goal Achieved:
        {activity.goalAchieved
          ? "Yes"
          : "No"}
      </p>

    </div>
  );
};

export default ActivityCard;