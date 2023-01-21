import { useState } from "react";
import { ImperialBMICalculator } from "./components/ImperialBMICalculator";
import { MetricBMICalculator } from "./components/MetricBMICalculator";
import { AppDecription } from "./components/AppDescription";



const MeasurementInfo = ({ measurement }) => {
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
      switch to kilos (kg) and centimeters (cm), click the button.
    </p>
  );
};

const BmiZoneInfo = ({ bmiZone }) => {
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

const SelectedBMICalculator = ({
  newMeasurement,
  handleChangeWeight,
  handleChangeHeightCentimeters,
  weight,
  heightCentimeters,
  handleChangeBmi,
  bmi,
  determineBmiZone,
  handleChangeBmiZone,
}) => {
  if (newMeasurement === "metric") {
    return (
      <MetricBMICalculator
        weight={weight}
        setWeight={handleChangeWeight}
        heightCentimeters={heightCentimeters}
        setHeightCentimeters={handleChangeHeightCentimeters}
        calculateBmi={calculateBmi}
        handleChangeBmi={handleChangeBmi}
        bmi={bmi}
        determineBmiZone={determineBmiZone}
        handleChangeBmiZone={handleChangeBmiZone}
      />
    );
  }
  return (
    <ImperialBMICalculator
      weight={weight}
      setWeight={handleChangeWeight}
      heightCentimeters={heightCentimeters}
      setHeightCentimeters={handleChangeHeightCentimeters}
      calculateBmi={calculateBmi}
      handleChangeBmi={handleChangeBmi}
      bmi={bmi}
      determineBmiZone={determineBmiZone}
      handleChangeBmiZone={handleChangeBmiZone}
    />
  );
};

const calculateBmi = (weight, height, handleChangeBmi) => {
  if (height != 0) {
    const heightInMeters = height / 100;
    const bmiMetric = weight / (heightInMeters * heightInMeters);
    const bmiMetricRounded = bmiMetric.toFixed(2);
    handleChangeBmi(bmiMetricRounded);
  }
};

const BmiDisplay = ({ bmi }) => (
  <div>
    <p>BMI: {bmi}</p>
  </div>
);

const determineBmiZone = (bmi, handleChangeBmiZone) => {
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

const BmiZoneDisplay = ({ bmiZone }) => (
  <div>
    <p>Zone: {bmiZone}</p>
  </div>
);

const ResultsDisplay = ({ bmi, bmiZone }) => (
  <div>
    <BmiDisplay bmi={bmi} />
    <BmiZoneDisplay bmiZone={bmiZone} />
    <BmiZoneInfo bmiZone={bmiZone} />
  </div>
);

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
      <h1>BMI CALCULATOR</h1>
      <AppDecription />
      <MeasurementInfo measurement={newMeasurement} />
      <button onClick={switchMeasurementSystem}>switch</button>
      <SelectedBMICalculator
        newMeasurement={newMeasurement}
        handleChangeWeight={handleChangeWeight}
        handleChangeHeightCentimeters={handleChangeHeightCentimeters}
        weight={weight}
        heightCentimeters={heightCentimeters}
        handleChangeBmi={handleChangeBmi}
        bmi={bmi}
        determineBmiZone={determineBmiZone}
        handleChangeBmiZone={handleChangeBmiZone}
      />
      <ResultsDisplay bmi={bmi} bmiZone={bmiZone} />
    </div>
  );
};

export default App;
