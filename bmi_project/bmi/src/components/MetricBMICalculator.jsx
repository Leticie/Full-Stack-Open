
export const MetricBMICalculator = ({weight, setWeight, heightCentimeters, setHeightCentimeters}) => {

    const handleSubmit = (event) => {
        event.preventDefault()

        setWeight('')
        setHeightCentimeters('')
    }

    const handleChangeWeight = (event) => setWeight(event.target.value);
    const handleChangeHeightCentimeters = (event) => setHeightCentimeters(event.target.value);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Weight</h3>
                    <input type="number" value={weight} onChange={handleChangeWeight}></input>
                <h3>Height</h3>
                    <input type="number" value={heightCentimeters} onChange={handleChangeHeightCentimeters}></input>
                <div>
                    <button type="submit">submit</button>
                </div>  
            </form>
        </div>
    )

}