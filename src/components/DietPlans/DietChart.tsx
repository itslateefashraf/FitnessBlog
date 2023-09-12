import DietStyles from "./DietChart.module.css";
const DietChart = () => {
  return (
    <>
      <div className={DietStyles["dietimg"]}>
        <div className={DietStyles["diettitle"]}>
          <p className={DietStyles["dietplan"]}>Diet Plans</p>
          <span className={DietStyles["diettext"]}>
            Learn about different approaches to fitness nutrition so you can
            choose the best diet plan to suit your goals.
          </span>
        </div>
      </div>
    </>
  );
};

export default DietChart;
