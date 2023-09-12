import Count from "./Count";
import MuscleGroup from "./MuscleGroup";
import Equipment from "./Equipment";
import Exercisestyles from "./Exercise.module.css"
const Exercise = () => {
  return (
    <>
      <div className={Exercisestyles["NavBar"]}>
        <div className={Exercisestyles["navtitle"]}>
          <span>Free Workout Plans</span>
          <p className={Exercisestyles["navtext"]}>
            The most comprehensive database of free Workout routines anywhere!
            download Workout plans any goal or experience level.
          </p>
        </div>
      </div>

      <Count />
      <MuscleGroup />
      <Equipment />
    </>
  );
};

export default Exercise;
