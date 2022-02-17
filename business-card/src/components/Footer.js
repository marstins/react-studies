import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer--social_list">
        <li className="social_link">
          <FontAwesomeIcon icon={faTwitterSquare} className="button--icon"/>
        </li>
        <li className="social_link">
          <FontAwesomeIcon icon={faFacebookSquare} className="button--icon"/>
        </li>
        <li className="social_link">
          <FontAwesomeIcon icon={faInstagramSquare} className="button--icon"/>
        </li>
        <li className="social_link">
          <FontAwesomeIcon icon={faGithubSquare} className="button--icon"/>
        </li>
        <li className="social_link">
          <FontAwesomeIcon icon={faLinkedin} className="button--icon"/>
        </li>
      </ul>
    </footer>
  )
}