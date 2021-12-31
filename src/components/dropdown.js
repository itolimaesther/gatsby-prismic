import React, {useState} from 'react'

function Dropdown({selected, setSelected}) {

const [isActive, setIsActive] = useState(false)
const options = ['one', 'two', 'three']
    return (
        <div className="dropdown">

        <div className="dropdown-btn" onClick= {(e) => setIsActive(!isActive)}>
            <span>{selected}</span>
            <span className="fas fa-caret-down"></span>
            { isActive && (
            <div className="dropdown-content">
                {options.map((option) => (

                        <div className="dropdown-items" onClick= {e => {
                            setSelected(option)
                        setIsActive(false)}}>
                                {option}
                        </div>

                    ))}
                    </div>
            )}
            
        </div>
        </div>
    )
}

export default Dropdown
