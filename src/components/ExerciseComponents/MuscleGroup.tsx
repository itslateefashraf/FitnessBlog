import { useState } from "react";
import MuscleGroupstyles from "./MuscleGroup.module.css";
import { Link } from "react-router-dom";

const MuscleGroup = () => {
  const [images, SetImages] = useState([
    {
      id:1,
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/abductors.jpg",
      detail: "Abductors",
    },
    {
      id:2,
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/abs_0.jpg",
      detail: "Abbs",
    },
    {
      id:3,
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/biceps_0.jpg",
      detail: "Biceps",
    },
  ]);
  return (
    <>
      <div className={MuscleGroupstyles["title"]}>
        <h1>Exercise By Muscle Group</h1>
      </div>
      <div className="detail">
        <p className={MuscleGroupstyles["details"]}>
          Choose the muscle you want to target.Once in the musle group,use the
          sort and filter option to find the best exercise for the exuipment you
          have, your training experience and goals
        </p>
      </div>
      <div className={MuscleGroupstyles["MuscleGroup"]}>
        {images.map((image) => {
          return (
            <Link to={`/exercise/${image.id}`}>
              <div className={MuscleGroupstyles["MuscleGroupExercise"]} >
                
                <img
                  className={MuscleGroupstyles["image"]}
                  src={image.img}
                  alt=""
                />
                
                <p className={MuscleGroupstyles["imageinfo"]}>{image.detail}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default MuscleGroup;
