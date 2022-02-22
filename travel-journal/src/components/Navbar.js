import globeIcon from "../images/globe-icon.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={globeIcon} alt="" className="navbar--icon"/>
      <h3 className="navbar--title">my travel journal.</h3>
    </nav>
  )
}