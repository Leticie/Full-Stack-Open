export const PersonForm = ({handleChangeName, handleChangeNumber, handleSubmit}) => (
    <div>
        <div>
            name: <input onChange={handleChangeName} />
        </div>
        <div>
            number: <input onChange={handleChangeNumber} />
        </div>
        <div>
            <button onClick={handleSubmit}>
            add
            </button>
        </div>
    </div>
)