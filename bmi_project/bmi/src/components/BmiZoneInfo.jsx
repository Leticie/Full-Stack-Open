export const BmiZoneInfo = ({ bmiZone }) => {
    if (bmiZone == 1) {
      return <p> The BMI score indicates that you might be underweight. </p>;
    }
    if (bmiZone == 2) {
      return <p> The BMI score indicates that you weight is optimal. </p>;
    }
    if (bmiZone == 3) {
      return <p> The BMI score indicates that you might be overweight. </p>;
    }
    if (bmiZone == 4) {
      return <p> The BMI score indicates that you might be obese. </p>;
    }
    return null;
  };