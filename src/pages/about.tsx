import bridge from '../assets/imgs/bridge.jpg'
import nimraImg from '../assets/imgs/nimra-img.jpg'
function About() {
  return (
    <section className="about flex gap1 space-between mobile-inline-padding full">
      <h2 className="full-width fw600 fs24 show-on-mobile">אודותי</h2>
      <article className="txt-container flex column">
        <h2 className="full-width fw600 fs24 hidden-on-mobile">אודותי</h2>
        <p>
          תואר ראשון בחינוך מיוחד לילדים לקויי שמיעה, אוניברסיטת תל אביב.
        </p>{' '}
        <p>מלמדת במערכת החינוך ילדים לקויי שמיעה.</p>
        <p>
          תואר שני בהפרעות בתקשורת, אוניברסיטת סאו פאולו, ברזיל. <br /> התיזה
          עוסקת בטיפול במשפחה בביתה. מטפלת בבית - המשפחה ובקליניקה.
        </p>
        <p> מאמנת אישית מוסמכת, לימודי תעודה במכללת לוינסקי.</p>
        <p>
          {' '}
          לימודי פסיכותרפיה אינטגרטיבית בחוג לעבודה סוציאלית, אוניברסיטת תל
          אביב.
        </p>
        <p>
          {' '}
          קורס הדרכה בפסיכותרפיה אינטגרטיבית טיפול והדרכה מכוונים לתשומת לב
          והיכרות עם עצמך.
        </p>
        <p>
          {' '}
          לימודים להסמכה למטפלים זוגיים ומשפחתיים, אוניברסיטת סאו פאולו, ברזיל.
        </p>
        <p>
          {' '}
          לימודים להסמכה כמדריכה למטפלים זוגיים ומשפחתיים, בחוג לעבודה סוציאלית,
          אוניברסיטת תל אביב.
        </p>
        <p> ראייה מערכתית שכל אחד מבני המשפחה משפיע ומושפע מהקרובים לו.</p>
        <p>
          {' '}
          מדריכה מתמחים בטיפול זוגי ומשפחתי בקליניקה במרכז לטיפול משפחתי במספר
          בתי ספר
        </p>
        <p>קורס ניהול בתי אבות- התמקדות בטיפול בקליניקה בקשישים.</p>
        <p></p>
      </article>
      <div className="img-container square-ratio">
        <img loading="lazy" src={nimraImg} alt="תמונה של נימרה" />
      </div>
      <img
        loading="lazy"
        src={bridge}
        alt="תמונה של גשר"
        className="background pos-fixed"
      />
    </section>
  )
}

export default About
