import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Stats = () => {
  const { state } = useContext(AppContext);

  const validActivities = state.activities.filter(
    activity =>
      activity.steps > 0 &&
      activity.caloriesBurned > 0 &&
      activity.workoutMinutes > 0 &&
      typeof activity.goalAchieved === "boolean"
  );

  const totalActivities = validActivities.length;
  const goalAchievedCount = validActivities.filter(act => act.goalAchieved).length;
  const goalNotAchievedCount = validActivities.filter(act => !act.goalAchieved).length;

  useEffect(() => {
    window.appState = {
      totalActivities,
      goalAchievedCount,
      goalNotAchievedCount
    };
  }, [totalActivities, goalAchievedCount, goalNotAchievedCount]);

  return (
    <div>
      <h2>Stats</h2>
      <p data-testid="total-activities">Total Activities: {totalActivities}</p>
      <p data-testid="goal-achieved">Goal Achieved: {goalAchievedCount}</p>
      <p data-testid="goal-not-achieved">Goal Not Achieved: {goalNotAchievedCount}</p>
    </div>
  );
};

export default Stats;