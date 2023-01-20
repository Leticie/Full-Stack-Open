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

export const ImperialBMICalculator = ({setWeight, setHeightCentimeters}) => {
    const [heightFeet, setHeightFeet] = useState("")
    const [heightInches, setHeightInches] = useState("")
    const [weightPounds, setWeightPounds] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault()
    
        setHeightCentimeters(heightImperialToMetric(heightFeet, heightInches))
        setWeight(weightImperialToMetric(weightPounds))
        setHeightFeet('')
        setHeightInches('')
        setWeightPounds('')
    }
    
    const handleWeightPoundsChange = (event) => (setWeightPounds(event.target.value))
    const handleHeightFeetChange = (event) => (setHeightFeet(event.target.value))
    const handleHeightInchesChange = (event) => (setHeightInches(event.target.value))
    


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Weight</h3>
                    <input type="number" value={weightPounds} onChange={handleWeightPoundsChange}></input>
                <h3>Height</h3>
                    <input type="number" value={heightFeet} onChange={handleHeightFeetChange}></input>
                    <p>feet</p>
                    <input type="number" value={heightInches} onChange={handleHeightInchesChange}></input>
                    <p>inches</p>
                <div>
                    <button type="submit">submit</button>
                </div>  
            </form>
        </div>
    )

}