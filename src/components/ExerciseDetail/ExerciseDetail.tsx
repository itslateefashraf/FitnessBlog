import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Exercisestyles from "./Exercises.module.css";

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exe, setExe] = useState<any>(null);

  const [Exercises, SetExercises] = useState([
    {
      id: 1,
      img: "https://cdn.muscleandstrength.com/sites/default/files/hip-abduction-machine.jpg",
      name: "Abductors",
      detail: "This si ssomegthionoifsjoivv djfisjoj",
    },
    {
      id: 2,
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/abs_0.jpg",
      name: "Abbs",
    },
    {
      id: 3,
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/biceps_0.jpg",
      name: "Biceps",
    },
  ]);

  useEffect(() => {
    const exe = Exercises.find((exercise) => exercise.id == Number(id));
    setExe(exe);
    // console.log(exercise)
  }, []);

  return (
    <>
      <div className="AbductorExercise">
        <h1>Abductor Exercise</h1>
        <p className={Exercisestyles["exeDetail"]}>
          Abductors exercises. Target your abductors with these movements.
        </p>
      </div>
      <hr />
      <div className={Exercisestyles["wrapper"]}>
        <div className={Exercisestyles["abductor"]}>
          {exe ? "" : "No data found"}
          <p className={Exercisestyles["bestAbductor"]}>
            BEST ABDUCTOR EXERCISE
          </p>
          <img
            className={Exercisestyles["abductorMachine"]}
            src={exe?.img}
            alt=""
          />
          <h3 className={Exercisestyles["bestAbductor"]}>
            Hip Abduction Machine
          </h3>
          <button className={Exercisestyles["exeBtn"]}>View Exercise</button>

          {/* <p>{exe?.id } {exe?.name}</p> */}
        </div>
        <div className={Exercisestyles["cableHip"]}>
          <h3 className={Exercisestyles["cabelAbduction"]}>
            Cable Hip Abduction
          </h3>
          <button className={Exercisestyles["exeBtn"]}>View Exercise</button>
        </div>
      </div>
    </>
  );
};

export default ExerciseDetail;
