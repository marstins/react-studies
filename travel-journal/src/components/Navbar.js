import globeIcon from "../images/globe-icon.png"

export default function Navbar() {
  return (
    <navbar className="navbar">
      <img src={globeIcon} alt="" className="navbar--icon"/>
      <h3 className="navbar--title">my travel journal.</h3>
    </navbar>
  )
}