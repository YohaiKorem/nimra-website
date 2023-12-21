import treeTrunk from '../assets/imgs/treetrunk.jpg'

function Articles() {
  return (
    <section className="articles flex column pb1 mobile-inline-padding shadow">
      <h2 className="fw600">מידע מקצועי/מאמרים</h2>
      <h3 className="mb0-5">40 טיפים לזוגיות טובה</h3>
      <h4 className="mbe0-5">טיפים לזוגיות טובה ומאפשרת בגיל השלישי ובכלל.</h4>
      <p>הילדים כבר יצאו מהבית, נישאו, יש נכדים.</p>
      <p>
        אחרי שנים ארוכות של אחריות למשפחה ולגידול הילדים, הזוגיות הופכת מחדש
        למרכזית.
      </p>
      <p>
        בני הזוג כבר בפנסיה, או שאחד/אחת מבני הזוג בפנסיה והשני/ה עדיין במרוץ
        החיים,
        <br /> הבריאות כבר לא משהו,
        <br /> <br /> ואז... <br /> מה עושים? איך בונים את היחד מחדש? רוצה
        להדגיש שאין קסמים... אלו רק רעיונות כלליים מאוד.
      </p>
      <p>ממליצה מאוד להיעזר באנשי מקצוע.</p>
      <p>הרשימה איננה לפי סדר חשיבות. כל טיפ הוא חלק מהשלם והיא חלקית בלבד. </p>
      <ul>
        <li>לכבד אחד/אחת את השני/ה כל אחד /אחת במקום שהוא/היא נימצאים.</li>
        <li>
          לוותר על שיפוטיות לקבל אחד/אחת את השני/ה כמו שהם, עם הצרכים החולשות
          והקשיים .
        </li>
        <li>לנסות להימנע מביקורת.</li>
        <li>לא לנסות לשנות את בן/בת הזוג.</li>
        <li>להחמיא, לפרגן על כל דבר מקטן ועד גדול.</li>
        <li>להקשיב בתשומת לב לדברי האחר/ת.</li>
        <li>להקדיש זמן אחד לשני.</li>
        <li>לבדוק מה יעשה טוב לשני/ה ולעשות אותו.</li>
        <li>לשאול ולברר אם יש משהו שבן/בת הזוג צריכים ולעזור להגשים.</li>
        <li>לראות את האחר/ת, לשים לב לשינוי, בגד חדש, תספורת.. ולהתייחס.</li>
        <li>בחיוב...</li>
        <li>להכיר בדברים שנעשים לטובת האחר/ת ולהביע תודה והכרת תודה.</li>
        <li>לעשות דברים ביחד.</li>
        <li>
          סרט, חופשה, דברים שיש לשני בני הזוג חיבה משותפת. לפי ההרגלים בין בני
          הזוג, לקבל החלטות חשובות יחד .
        </li>
        <li>לעשות דברים שיעוררו תשוקה אצל בן/בת הזוג.</li>
        <li>להקדיש זמן לסקס.</li>
        <li>לעודד ולחזק אם קיים קושי בסקס. לראות את נקודות החוזק באחר/ת.</li>
        <li>לשבת לארוחות יחד.</li>
        <li>לבשל את מה שהאחר/ת אוהב/ת. לפנק.</li>
        <li>להפתיע לטובה.</li>
        <li>להיות ספונטני/ת.</li>
        <li>להיות יצירתי/ת.</li>
        <li>לחדש.</li>
        <li>לדעת לסלוח ולבקש סליחה.</li>
        <li>לוותר כשאפשר.</li>
        <li>אחרי ויכוח וכעס לא למשוך אותם.</li>
        <li>להתחבק ולהתלטף במשך היום.</li>
        <li>למצוא נושאים משותפים לשיחה.</li>
        <li>אם יש כעסים למצוא זמן רגוע לשוחח עליהם.</li>
        <li>כשחוזרים הביתה לעצור ולהקדיש רגע זמן לבן/בת הזוג.</li>
        <li>לא תמיד חשוב הצדק האובייקטיבי.</li>
        <li>חשוב לתמוך ולהיות אחד/אחת בשביל השני/ה.</li>
        <li>לחזק ולהתחזק ביחד של הזוג מול הסביבה.</li>
        <li>להאמין לדברים שהאחר/ת מביא/ה.</li>
        <li>יחד עם כל היחד, להיות אוטנטי. עצמך. אמיתי/ת.</li>
        <li>בתוך היחד, לבנות תחומי עניין של כל אחד /אחת בניפרד.</li>

        <li>לכבד, לקבל ולהכיר בתחומי העניין של האחר/ת.</li>
        <li>ללמוד להפיק הנאה מהדברים הפשוטים שמתחדשים כל יום.</li>
        <li>להנות מהכאן ועכשיו.</li>
        <li>מהרגע הזה.</li>
        <li>מחיוך של נכדות, ריח הפריחה, מזג האוויר ועוד.</li>
        <li>ולא לשכוח.... ל א ה ו ב.</li>
      </ul>
      <img
        loading="lazy"
        src={treeTrunk}
        alt="תמונה של גזע עץ"
        className="background pos-fixed"
      />
    </section>
  )
}
export default Articles
