import { OBESE_ZONE, OPTIMAL_WEIGHT_ZONE, OVERWEIGHT_ZONE, UNDERWEIGHT_ZONE } from "../constants/constants";


export const BmiZoneInfo = ({ bmiZone }) => {
    if (bmiZone === UNDERWEIGHT_ZONE) {
      return <p> The BMI score indicates that you might be underweight. </p>;
    }
    if (bmiZone === OPTIMAL_WEIGHT_ZONE) {
      return <p> The BMI score indicates that you weight is optimal. </p>;
    }
    if (bmiZone === OVERWEIGHT_ZONE) {
      return <p> The BMI score indicates that you might be overweight. </p>;
    }
    if (bmiZone === OBESE_ZONE) {
      return <p> The BMI score indicates that you might be obese. </p>;
    }
    return null;
  };