import React from 'react'
import { NavLink} from "react-router-dom";

export default function Header() {
  return <div className="header flex column">
    <div className="header-title flex justify-center"> לגבש אסטרטגיה</div>
    <nav className="flex justify-center">
      <div className="flex space-around">
      <a>רקע</a>
      <a>תשובות</a>
      <NavLink  activeClassName= "activeNav" to="/" exact>תובנות</NavLink>
      <a>החלטות</a>
      </div>
    </nav>
  </div>
}