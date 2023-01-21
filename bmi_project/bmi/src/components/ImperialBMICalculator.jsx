import { useState } from "react"

const heightImperialToMetric = (feet, inches) => {
    const feetToCentimeters = feet * 30.48
    const inchesToCentimeters = inches * 2.54
    const heightTotal = feetToCentimeters + inchesToCentimeters
    return heightTotal
}

const weightImperialToMetric = (weight) => {
    const poundsToKilos = weight * 0.453
    return poundsToKilos
}    

export const ImperialBMICalculator = ({weight, setWeight, heightCentimeters, setHeightCentimeters, calculateBmi, handleChangeBmi, bmi, determineBmiZone, handleChangeBmiZone}) => {
    const [heightFeet, setHeightFeet] = useState("")
    const [heightInches, setHeightInches] = useState("")
    const [weightPounds, setWeightPounds] = useState("")

    
    const handleWeightPoundsChange = (event) => {
        setWeightPounds(event.target.value)
        setWeight(weightImperialToMetric(weightPounds))
    }
    const handleHeightFeetChange = (event) => {
        setHeightFeet(event.target.value)
        setHeightCentimeters(heightImperialToMetric(heightFeet, heightInches))
    }
    const handleHeightInchesChange = (event) => {
        setHeightInches(event.target.value)
        setHeightCentimeters(heightImperialToMetric(heightFeet, heightInches))
    }
    
    const handleClick = (event) => {
        event.preventDefault()

        calculateBmi(weight, heightCentimeters, handleChangeBmi)
        determineBmiZone(bmi, handleChangeBmiZone)
        setWeightPounds("")
        setHeightFeet("")
        setHeightInches("")
    }


    return (
        <div>
            <form>
                <h3>Weight</h3>
                    <input type="number" value={weightPounds} onChange={handleWeightPoundsChange}></input>
                    <p>lbs</p>
                <h3>Height</h3>
                    <input type="number" value={heightFeet} onChange={handleHeightFeetChange}></input>
                    <p>ft</p>
                    <input type="number" value={heightInches} onChange={handleHeightInchesChange}></input>
                    <p>in</p>
                <div>
                    <button onClick={handleClick}>submit</button>
                </div>  
            </form>        
        </div>
    )

}