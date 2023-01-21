export const calculateBmi = (weight, height, handleChangeBmi) => {
    if (height != 0) {
      const heightInMeters = height / 100;
      const bmiMetric = weight / (heightInMeters * heightInMeters);
      const bmiMetricRounded = bmiMetric.toFixed(2);
      handleChangeBmi(bmiMetricRounded);
    }
  };
  
  
export const determineBmiZone = (bmi, handleChangeBmiZone) => {
    if (bmi < 18.5) {
      handleChangeBmiZone(1);
    }
    if (bmi < 25) {
      handleChangeBmiZone(2);
    }
    if (bmi < 30) {
      handleChangeBmiZone(3);
    }
    if (bmi >= 30) {
      handleChangeBmiZone(4);
    }
  };