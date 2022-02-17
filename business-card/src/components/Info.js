import photo from "../images/profile-picture.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Info() {
  return (
    <section className="info_section">
      <img src={photo} alt="matheus" className="info_section--img"/>
      <h1 className="info_section--title">Matheus Martins</h1>
      <h3 className="info_section--subtitle">Frontend Developer</h3>
      <p className="info_section--website">mywebsite.website</p>
      <button className="info_section--button">
        <FontAwesomeIcon icon={faEnvelope} className="button--icon"/>
        Email
      </button>
    </section>
  )
}