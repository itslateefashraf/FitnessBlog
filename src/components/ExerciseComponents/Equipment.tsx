import { useState } from "react";
import EquipmentStyles from "./Equipment.module.css";

const Equipment = () => {
    const [images, SetImages] = useState([
        {
          img: "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/equip/machine.jpg",
          detail: "Machine Exercise",
        },
        {
          img: "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/equip/barbell.jpg",
          detail: "Barbel Exercise",
        },
        {
          img: "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/exercises/equip/bodyweight.jpg",
          detail: "Body Weight Exercise",
        },
      ]);
  return (
    <>
    <div className={EquipmentStyles["Equipmenttitle"]}>
    <h2>EXERCISES BY EQUIPMENT</h2>
    </div>
    <div>
      <p className={EquipmentStyles["Equipmenttext"]}>
        Don't have access to a gym? No problem. You can view exercises by
        equipment required. Check out our 5 day dumbbell workout for a
        dumbell-only plan
      </p>
    </div>
  
  <div className={EquipmentStyles["ExercisesImg"]}>
        {images.map((image) => {
          return (
            <div className={EquipmentStyles["Exe-images"]}>
              <img className={EquipmentStyles["image"]} src={image.img} alt="" />
              <p className={EquipmentStyles["imageinfo"]}>{image.detail}</p>
            </div>
          );
        })}
      </div>
  </>
  )
}

export default Equipment