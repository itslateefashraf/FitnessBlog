import { Link } from "react-router-dom";
import NavStyles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <>
      {/* ----------------------header---------------------------- */}

      <div className={NavStyles["heading"]}>
        <ul className={NavStyles["links"]}>
          <li>Shop And Save Sales Event!</li>
          <li>
            Exclusive deals to Fit Every Budget! Save Big on Protein,Fat Burners
            & More!
          </li>

          <button className={NavStyles["btn"]}>Shop Now</button>
        </ul>
      </div>

      {/* -------------------------Navigation bar------------------------------------ */}

      <div className={NavStyles["Navigation"]}>
        <div className={NavStyles["logo"]}>
          <p className={NavStyles["exc"]}>Exercises</p>
        </div>
        <div className={NavStyles["searchbar"]}>
          <input type="text" placeholder="search products,brands,workouts..." />

          <ul className={NavStyles["charts"]}>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/exercise"> Exercise</Link>
            </li>
            <li>
              <Link to="DietChart"> Diet Chat</Link>
            </li>
            <li>
              <Link to="/"> Contacts</Link>
            </li>
            <li>
              <Link to="/"> Articles</Link>
            </li>
            <li>
              <Link to="/"> Tool</Link>
            </li>
          </ul>
        </div>

        <div className={NavStyles["address"]}>
          <p>7 Day Customer Support</p>
          <div className="location"></div>
        </div>
      </div>
      {/* -----------------Muscle----------- */}

      {/* ---------------equipment-------- */}
    </>
  );
};

export default Navigation;
