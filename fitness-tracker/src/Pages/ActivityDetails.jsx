import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const ActivityDetails = () => {
  const { state } = useContext(AppContext);
  const { id } = useParams();

  const activity = state.activities.find(act => act.activityId === id);

  if (!activity) {
    return <div>Activity not found</div>;
  }

  const name = activity.name || "Unknown";
  const date = activity.date || "No Date";
  const efficiency = activity.workoutMinutes > 0 ? (activity.caloriesBurned / activity.workoutMinutes).toFixed(2) : "N/A";

  return (
    <div>
      <h2>Activity Details</h2>
      <p><strong>ID:</strong> {activity.activityId}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Steps:</strong> {activity.steps}</p>
      <p><strong>Calories Burned:</strong> {activity.caloriesBurned}</p>
      <p><strong>Workout Minutes:</strong> {activity.workoutMinutes}</p>
      <p><strong>Goal Achieved:</strong> {activity.goalAchieved ? "Yes" : "No"}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Efficiency Score:</strong> {efficiency}</p>
    </div>
  );
};

export default ActivityDetails;