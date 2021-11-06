import React, {useState} from "react"
import PropTypes from "prop-types"
import Dropdown from "./dropdown";
import { Link } from "gatsby";



const Header = ({ siteTitle }) => {

  const [selected, setSelected] = useState("");

  return(
    <header>
    <div>
    

      <h1>
        {/* <Link
          to="/">
          {siteTitle}
        </Link> */}
        Blog
      </h1>
      <div className="category">
      <input className="input-search" placeholder="search" type="text" />
      <Dropdown selected={selected} setSelected={setSelected}/>

      </div>
    </div>
    </header>

  )
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
