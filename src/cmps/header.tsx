// import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navClasses = isMenuOpen
    ? 'main-nav flex align-center space-between full-width active'
    : 'main-nav flex align-center space-between full-width'

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) document.body.classList.add('no-scroll')
    else document.body.classList.remove('no-scroll')
  }

  return (
    <header className="main-header full flex align-center space-between wrap pi0-5 shadow">
      <div
        className="burger-menu show-on-mobile pos-absolute fs28"
        onClick={() => toggleMenu()}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="logo-container flex space-between align-center gap2 full-width">
        <h1 className="flex   column fs30 fw500 p0-5 gap0-5">
          <span>נימרה קסוי כורם</span>
          <span className="fs22 fw400">מטפלת משפחתית וזוגית</span>
        </h1>
        <div className="contact-info-container hidden-on-mobile flex align-center space-between gap1 fw500">
          <a
            href="tel:+972523481664"
            className=" phone flex column justify-center fs14">
            <span>צרו קשר:</span>
            <span>0523481664</span>
          </a>
          <a
            href="mailto:nimracasoy@gmail.com"
            className="email flex column justify-center fs14">
            <span>אימייל:</span>
            <span>nimracasoy@gmail.com</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100039214666766"
            target="_blank"
            className="facebook flex column justify-center fs14">
            <span>פייסבוק:</span>
            <span>נימרה קסוי כורם</span>
          </a>
        </div>
      </div>
      <nav onClick={() => toggleMenu()} className={navClasses}>
        <NavLink to="/">ראשי</NavLink>
        <NavLink to="about">אודות</NavLink>
        <NavLink to="psychotherapy">פסיכותרפיה אינטגרטיבית</NavLink>
        <NavLink to="counseling">טיפול משפחתי וזוגי</NavLink>
        <NavLink to="articles">מידע מקצועי\מאמרים</NavLink>
        <NavLink to="stories">תיאורי מקרה</NavLink>
        <NavLink to="contact">צרו קשר</NavLink>
      </nav>
    </header>
  )
}

export default Header
