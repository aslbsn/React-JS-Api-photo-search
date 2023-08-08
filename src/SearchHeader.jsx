import {useState} from "react";
function SearchHeader({search}) {

    const [valueInput, setValue]=useState('')

    const handleFormSubmit=(event)=>{
        event.preventDefault()
        search(valueInput)

    }

    const handleChange=(event)=>{
        setValue(event.target.value)
    }


    return (<div className="searchdiv">
        <form onSubmit={handleFormSubmit}>
            <label>
                What kind of photos are you looking for?
            </label>
            <input value={valueInput} onChange={handleChange} />
            <div>{valueInput}</div>
        </form>
    </div>);
}

export default SearchHeader;