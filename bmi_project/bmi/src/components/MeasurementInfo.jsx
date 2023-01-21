import { METRIC } from "../constants/constants";

export const MeasurementInfo = ({ measurement }) => {
    if (measurement === METRIC) {
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