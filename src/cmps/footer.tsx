import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  // faLocationDot,
  faEnvelope,
  faPhone,
  faMapPin,
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <footer className="footer flex auto-center full p1">
      <div className="btns-container flex auto-center gap1">
        {/* <button className="btn flex auto-center gap1">
          <span className="icon">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <span className="txt">וולפברג 47</span>
        </button>
        | */}
        <a
          href="mailto:nimracasoy@gmail.com"
          className="btn flex auto-center gap1">
          <span className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="txt">nimracasoy@gmail.com</span>
        </a>
        <span className="separator hidden-on-mobile">|</span>
        <a
          href="tel:+972523481664"
          className="btn btn-call flex auto-center gap1">
          <span className="icon">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span className="txt">0523481664</span>
        </a>
        <span className="separator hidden-on-mobile">|</span>
        <a
          href="https://wa.me/972523481664"
          className="btn flex auto-center gap1">
          <FontAwesomeIcon icon={faWhatsapp} />
          <span className="icon"></span>
          <span className="txt">פנייה בווצאפ</span>
        </a>
        <span className="separator hidden-on-mobile">|</span>
        <a
          href="https://www.facebook.com/profile.php?id=100039214666766"
          target="_blank"
          className="btn flex auto-center gap1">
          <span className="icon">
            <FontAwesomeIcon icon={faFacebook} />
          </span>
          <span className="txt">לעמוד העסקי בפייסבוק</span>
        </a>
        <span className="separator hidden-on-mobile">|</span>
        <a
          href="https://waze.com/ul?ll=32.413670,34.950990&navigate=yes"
          className="btn flex auto-center gap1">
          <FontAwesomeIcon icon={faMapPin} />
          <span className="icon"></span>
          <span className="txt">לניווט בווייז לקליניקה</span>
        </a>
      </div>
    </footer>
  )
}
export default Footer
