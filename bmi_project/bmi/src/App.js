import { useState } from "react";
import { ImperialBMICalculator } from "./components/ImperialBMICalculator";
import { MetricBMICalculator } from "./components/MetricBMICalculator";

const AppDecription = () => (
  <p>
    Enter data to know your BMI. Your BMI score can belong to four categories:
    underweight, normal weight, overweight and obese. Note that although BMI is
    a useful tool for indicating health problems, it serves only as an
    orientation. For futher details consult your doctor rather that the
    internet. Remember, your body does not determine the love that you deserve.
  </p>
);

const MeasurementInfo = (measurement) => {
  if (measurement === "metric") {
    return (
      <p>
        You can now enter data in kilos (kg) and centimeters (cm). If you wish
        to switch to feets (ft) and pounds (lbs), click the button.
      </p>
    );
  }
  return (
    <p>
      You can now enter data in feet (ft) and pounds (lbs). If you wish to
      switch to kilos (kg) and meters (m), click the button.
    </p>
  );
};

const BmiZoneInfo = (bmiZone) => {
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
  return "";
};

const SelectedBMICalculator = ({
  newMeasurement,
  handleChangeWeight,
  handleChangeHeightCentimeters,
  weight,
  setWeight,
  heightCentimeters,
  setHeightCentimeters,
}) => {
  if (newMeasurement === "metric") {
    return (
      <MetricBMICalculator
        weight={weight}
        setWeight={handleChangeWeight}
        heightCentimeters={heightCentimeters}
        setHeightCentimeters={handleChangeHeightCentimeters}
      />
    );
  }
  return (
    <ImperialBMICalculator
      setWeight={handleChangeWeight}
      setHeightCentimeters={handleChangeHeightCentimeters}
    />
  );
};

const calculateBmi = (weight, height) => {
  if (height != 0) {
    const heightInMeters = height / 100;
    const bmiMetric = weight / (heightInMeters * heightInMeters);
    const bmiMetricRounded = bmiMetric.toFixed(2);
    return bmiMetricRounded;
  }
  return ""  
};

const BmiDisplay = ({bmi, weight, height, handleChangeBmi}) => { 
  const calculatedBmi = calculateBmi(weight, height);
  handleChangeBmi(calculatedBmi)
  return <p>{bmi}</p>;
};

const determineBmiZone = (bmi) => {
  if (bmi < 14) {
    return ""
  }
  if (bmi < 18.5) {
    return 1;
  }
  if (bmi < 25) {
    return 2;
  }
  if (bmi < 30) {
    return 3;
  }
  if (bmi >= 30) {
    return 4;
  }
  return ""  
};

const BmiZoneDisplay = ({bmi, bmiZone, handleChangeBmiZone}) => {
  const determinedBmiZone = determineBmiZone(bmi)
  handleChangeBmiZone(determinedBmiZone)
  return (
    <div>
      <p>{bmiZone}</p>
      <BmiZoneInfo bmiZone={bmiZone} />
    </div>
  );
}

const App = () => {
  const [newMeasurement, setNewMeasurement] = useState("metric");
  const [weight, setWeight] = useState("");
  const [heightCentimeters, setHeightCentimeters] = useState("");
  const [bmi, setBmi] = useState("");
  const [bmiZone, setBmiZone] = useState("");

  const switchMeasurementSystem = () => {
    if (newMeasurement === "metric") {
      setNewMeasurement("imperial");
    } else {
      setNewMeasurement("metric");
    }
  };

  const handleChangeWeight = (value) => setWeight(value);
  const handleChangeHeightCentimeters = (value) => setHeightCentimeters(value);
  const handleChangeBmi = (value) => setBmi(value);
  const handleChangeBmiZone = (value) => setBmiZone(value);



  return (
    <div>
      <h1>RAFF BMI CALCULATOR</h1>
      <AppDecription />
      <MeasurementInfo measurement={newMeasurement} />
      <button onClick={switchMeasurementSystem}>switch</button>
      <SelectedBMICalculator
        newMeasurement={newMeasurement}
        handleChangeWeight={handleChangeWeight}
        handleChangeHeightCentimeters={handleChangeHeightCentimeters}
        weight={weight}
        setWeight={setWeight}
        heightCentimeters={heightCentimeters}
        setHeightCentimeters={setHeightCentimeters}
      />
      <BmiDisplay
        bmi={bmi}
        weight={weight}
        height={heightCentimeters}
        handleChangeBmi={handleChangeBmi}
      />
      <BmiZoneDisplay bmi={bmi} bmiZone={bmiZone} handleChangeBmiZone={handleChangeBmiZone}/>
      <BmiZoneInfo bmiZone={bmiZone} />
    </div>
  );
};

export default App;
