import { ImperialBMICalculator } from "./components/ImperialBMICalculator";
import { MetricBMICalculator } from "./components/MetricBMICalculator";

export const SelectedBMICalculator = ({
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