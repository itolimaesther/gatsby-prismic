import React, {useState} from 'react'

function Dropdown({selected, setSelected}) {

const [isActive, setIsActive] = useState(false)
    return (
        <div className="dropdown">

        <div className="dropdown-btn" onClick= {(e) => setIsActive(!isActive)}>
            <span>CATERGORIES</span>
            <span className="fas fa-caret-down"></span>
            { isActive && (
            <div className="dropdown-content">
                <div className="dropdown-items">one</div>
                <div className="dropdown-items">two</div>
                <div className="dropdown-items">three</div>

            </div>
            )
            }
            
        </div>
        </div>
    )
}

export default Dropdown
