import React, { useState } from 'react'
import bodyMindSpirit from '../assets/imgs/bodyMindSpirit.jpg'

function Psychotherapy() {
  const [pos, setPos] = useState({ x: 50, y: 25 })

  const onSetPos = (ev: any) => {
    if (ev.deltaY < 0) {
      if (pos.y === 0) return
      const newPos = { x: pos.x, y: pos.y - 1 }
      setPos(newPos)
    } else if (ev.deltaY > 0) {
      if (pos.y === 100) return
      const newPos = { x: pos.x, y: pos.y + 1 }
      setPos(newPos)
    }
  }

  return (
    <section
      onWheel={(ev) => onSetPos(ev)}
      className="psychotherapy flex align-start gap1 column mbs1 mobile-inline-padding">
      <h2 className="fw600">פסיכותרפיה אינטגרטיבית</h2>
      <p>פסיכותרפיה אינטגרטיבית מזרח מערב נשענת על שלושה מרכיבי-יסוד:</p>
      <p>פסיכותרפיה באוריינטציה דאואיסטית,</p>
      <p>פסיכותרפיה באוריינטציה בודהיסטית</p>
      <p>ופסיכותרפיה ממוקדת-גוף.</p>

      <p>מעט מהמושגים המרכזיים בפסיכותרפיה אינטגרטיבית:</p>

      <p>נוכחות- לחוות את הרגע הזה.</p>

      <p>
        להיות קשוב ובתשומת לב למה שעולה ברגע <br />
        הזה שמביא עמו מהעולם הלא מודע חוויות ותחושות חדשות,
      </p>

      <p>לא מוכרות שמאפשרות שינוי.</p>

      <p>
        אי-ידיעה- <br /> הסכמה להיות במקום של אי ידיעה מאפשרת <br /> להיפתח
        לדברים חדשים ולתת משמעות שונה <br /> לדברים מוכרים שטבועים בהבנת האדם את
        עצמו.
      </p>

      <p>
        אי-עשיה- <br />
        כאשר המטפל מאפשר לתהליך הטיפולי להיות <br /> בתנועה ולהתרחש מתוך נוכחותו
        ותשומת ליבו <br /> למטופל יחד עם הקשר והאמון ההדדי שנוצר בין המטפל
        והמטופל.
      </p>
      <img
        src={bodyMindSpirit}
        alt="כיתוב על החול: גוף, רוח, נפש"
        className="background pos-fixed"
        style={{ objectPosition: `${pos.x}% ${pos.y}%` }}
      />
    </section>
  )
}

export default Psychotherapy
