
import './App.css'
import Navigation from './components/Navigation'
// import Banner from './components/Banner'
// import Card from './components/Card'
// import About from './components/About'
import Footer from './components/Footer'
import styles from "./components/card.module.css";
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import Exercise from './components/ExerciseComponents/Exercises';
import DietChart from './components/DietPlans/DietChart';

function App() {

  return (
    <>
      <div className={styles["container"]}>
        <Navigation />
        
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/exercise" element={<Exercise />}></Route>
            <Route path="/DietChart" element={<DietChart />}></Route>
          </Routes>
          
        <Footer />
      </div>
    </>
  );
}

export default App
