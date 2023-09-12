import { useState } from "react";
import styles from "./MuscleGroup.module.css";

const MuscleGroup = () => {
  const [images, SetImages] = useState([
    {
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/abductors.jpg",
      detail: "Abductors",
    },
    {
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/abductors.jpg",
      detail: "Abbs",
    },
    {
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/abductors.jpg",
      detail: "Biceps",
    },
  ]);
  return (
    <>
      <div className={styles["title"]}>
        <h1>Exercise By Muscle Group</h1>
      </div>
      <div className="detail">
        <p className={styles["details"]}>
          Choose the muscle you want to target.Once in the musle group,use the
          sort and filter option to find the best exercise for the exuipment you
          have, your training experience and goals
        </p>
      </div>
      <div className={styles["MuscleGroup"]}>
        {images.map((image) => {
          return (
            <div className={styles["Exe-images"]}>
              <img className={styles["image"]} src={image.img} alt="" />
              <p className={styles["imageinfo"]}>{image.detail}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MuscleGroup;
