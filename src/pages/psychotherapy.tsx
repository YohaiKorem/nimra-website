import bodyMindSpirit from '../assets/imgs/bodyMindSpirit.jpg'

function Psychotherapy() {
  return (
    <section className="psychotherapy flex align-start gap1 column mbs1 mobile-inline-padding">
      <h2 className="fw600">פסיכותרפיה אינטגרטיבית</h2>
      <p>
        פסיכותרפיה אינטגרטיבית מזרח מערב נשענת על שלושה מרכיבי-יסוד: פסיכותרפיה
        באוריינטציה דאואיסטית, פסיכותרפיה באוריינטציה בודהיסטית ופסיכותרפיה
        ממוקדת-גוף.
      </p>

      <p>מעט מהמושגים המרכזיים בפסיכותרפיה אינטגרטיבית:</p>

      <p>
        נוכחות- לחוות את הרגע הזה. להיות קשוב ובתשומת לב למה שעולה ברגע הזה
        שמביא עמו מהעולם הלא מודע חוויות ותחושות חדשות, לא מוכרות שמאפשרות
        שינוי.
      </p>

      <p>
        אי-ידיעה- הסכמה להיות במקום של אי ידיעה מאפשרת להיפתח לדברים חדשים ולתת
        משמעות שונה לדברים מוכרים שטבועים בהבנת האדם את עצמו.
      </p>

      <p>
        אי-עשיה- כאשר המטפל מאפשר לתהליך הטיפולי להיות בתנועה ולהתרחש מתוך
        נוכחותו ותשומת ליבו למטופל יחד עם הקשר והאמון ההדדי שנוצר בין המטפל
        והמטופל.
      </p>
      <img
        src={bodyMindSpirit}
        alt="כיתוב על החול: גוף, רוח, נפש"
        className="background"
      />
    </section>
  )
}

export default Psychotherapy
