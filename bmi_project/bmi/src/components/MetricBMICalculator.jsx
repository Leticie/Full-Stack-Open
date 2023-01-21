
export const MetricBMICalculator = ({weight, setWeight, heightCentimeters, setHeightCentimeters, calculateBmi, handleChangeBmi, bmi, determineBmiZone, handleChangeBmiZone}) => {

    const handleChangeWeight = (event) => setWeight(event.target.value);
    const handleChangeHeightCentimeters = (event) => setHeightCentimeters(event.target.value);
    
    const handleClick = (event) => {
        event.preventDefault()

        calculateBmi(weight, heightCentimeters, handleChangeBmi)
        determineBmiZone(bmi, handleChangeBmiZone)
        setWeight('')
        setHeightCentimeters('')
    }

    return (
        <div>
            <form>
                <h3>Weight</h3>
                    <input type="number" value={weight} onChange={handleChangeWeight}></input>
                    <p>kg</p>
                <h3>Height</h3>
                    <input type="number" value={heightCentimeters} onChange={handleChangeHeightCentimeters}></input>
                    <p>cm</p>
                <div>
                    <button onClick={handleClick}>submit</button>
                </div>  
            </form>    
        </div>
    )

}