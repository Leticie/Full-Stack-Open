import { ImperialBMICalculator } from "./ImperialBMICalculator";
import { MetricBMICalculator } from "./MetricBMICalculator";
import { calculateBmi } from "../helpers/BmiHelpers";
import { METRIC } from "../constants/constants";

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
    if (newMeasurement === METRIC) {
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