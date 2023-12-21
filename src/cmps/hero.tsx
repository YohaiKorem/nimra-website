import heroImg from '../assets/imgs/yotam-drawing.jpg'

function Hero() {
  return (
    <div className="hero full flex auto-center shadow wide-ratio">
      <div className="txt-container flex auto-center column">
        <h1 className="text-center fw600 fs36">
          נימרה קסוי כורם <br /> מטפלת בפסיכותרפיה גוף, נפש, רוח מיינדפולנס,
          מטפלת זוגית ומשפחתית
        </h1>
      </div>
      <img
        loading="lazy"
        className="hero-img "
        src={heroImg}
        alt="ציור בגווני סגול ורוד"
      />
    </div>
  )
}

export default Hero
