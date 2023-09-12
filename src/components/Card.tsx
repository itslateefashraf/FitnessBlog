import { useState } from "react";
import styles from "./card.module.css";

const Card = () => {
  const [Cards, SetCards] = useState([
    {
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      detail: "This exercise makes back Strong",
    },
    {
      img: "https://media.istockphoto.com/id/1366052585/photo/shot-of-a-group-of-friends-hanging-out-before-working-out-together.jpg?s=612x612&w=0&k=20&c=rj7LgjUuXde0eLWikS1rvDnsKDdBotgsy9eM5HDzko0=",
      detail: "This exercise makes legs Strong",
    },
    {
      img: "https://counselingonlinesite.com/wp-content/uploads/2020/04/man-workout-gym-working.jpg",
      detail: "This exercise makes shoulders Strong",
    },
  ]);

  return (
    <>
    <div className={styles['musclebuilding']}>
      <h1>Muscle Building Workout</h1>
      </div>
      <div className={styles["card"]}>
        {Cards.map((card) => {
          return (
            <div className={styles["card1"]}>
              <img className={styles["image"]} src={card.img} alt="" />
              <p className={styles['details']}>{card.detail}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
