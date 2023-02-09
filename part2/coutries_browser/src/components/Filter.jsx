export const Filter = ({handleChangeFilter}) => {

    return (
        <div>
            <form>
                find countries <input onChange={handleChangeFilter} />
            </form>
        </div>
    ) 
}