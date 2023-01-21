import { OBESE_ZONE, OPTIMAL_WEIGHT_LIMIT, OPTIMAL_WEIGHT_ZONE, OVERWEIGHT_LIMIT, OVERWEIGHT_ZONE, UNDERWEIGHT_LIMIT, UNDERWEIGHT_ZONE } from "../constants/constants";

export const calculateBmi = (weight, height, handleChangeBmi) => {
    if (height !== 0) { //prevents division by 0
      const heightInMeters = height / 100; //convert cm to m
      const bmiMetric = weight / (heightInMeters * heightInMeters);
      const bmiMetricRounded = bmiMetric.toFixed(2);
      handleChangeBmi(bmiMetricRounded);
    }
  };
  
  
export const determineBmiZone = (bmi, handleChangeBmiZone) => {
    if (bmi < UNDERWEIGHT_LIMIT) {
      handleChangeBmiZone(UNDERWEIGHT_ZONE);
    }
    if (bmi < OPTIMAL_WEIGHT_LIMIT) {
      handleChangeBmiZone(OPTIMAL_WEIGHT_ZONE);
    }
    if (bmi < OVERWEIGHT_LIMIT) {
      handleChangeBmiZone(OVERWEIGHT_ZONE);
    }
    if (bmi >= OVERWEIGHT_LIMIT) {
      handleChangeBmiZone(OBESE_ZONE);
    }
  };