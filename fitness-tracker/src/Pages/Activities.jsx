import {
  useContext
} from "react";

import { AppContext }
from "../context/AppContext";

import ActivityCard
from "../components/ActivityCard";

const Activities = () => {

  const { state } =
    useContext(AppContext);

  const validActivities =
    state.activities.filter(
      activity =>

        activity.steps > 0 &&
        activity.caloriesBurned > 0 &&
        activity.workoutMinutes > 0 &&
        typeof activity.goalAchieved ===
        "boolean"
    );

  if (state.loading) {
    return <div>Loading activities...</div>;
  }

  if (validActivities.length === 0) {
    return <div>No valid activities found.</div>;
  }

  return (

    <div>

      <h2>
        Valid Activities
      </h2>

      {validActivities.map(
        activity => (

          <ActivityCard

            key={
              activity.activityId
            }

            activity={activity}

          />

        )
      )}

    </div>
  );
};

export default Activities;