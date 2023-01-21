const BmiDisplay = ({ bmi }) => (
    <div>
      <p>BMI: {bmi}</p>
    </div>
  );

const BmiZoneDisplay = ({ bmiZone }) => (
    <div>
      <p>Zone: {bmiZone}</p>
    </div>
  );
  
export const ResultsDisplay = ({ bmi, bmiZone }) => (
    <div>
      <BmiDisplay bmi={bmi} />
      <BmiZoneDisplay bmiZone={bmiZone} />
      <BmiZoneInfo bmiZone={bmiZone} />
    </div>
  );