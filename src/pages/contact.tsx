import { useRef } from 'react'
import { Formik, useFormik } from 'formik'
import emailjs from '@emailjs/browser'
function ContactPage() {
  const form = useRef()
  const formik = useFormik({
    initialValues: {
      fullname: '',
      phone: '',
      email: '',
      message: '',
    },
    onSubmit: (values) => {
      console.log('values', values)
      emailjs.sendForm(
        'service_z00zs4v',
        'template_cil04hq',
        form.current!,
        'NXYd75zchqCO6hlxl'
      )
    },
    validate: (values) => {
      const errors: {
        fullname?: string
        email?: string
        phone?: string
        message?: string
      } = {}
      if (!values.fullname) errors.fullname = 'שדה חובה*'
      if (!values.email) {
        errors.email = 'שדה חובה*'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'כתובת מייל לא חוקית'
      }
      if (!values.phone) {
        errors.phone = 'שדה חובה*'
      } else if (!/^[0-9]{10,10}$/i.test(values.phone)) {
        errors.phone = 'מספר טלפון לא חוקי'
      }
      return errors
    },
  })

  const debug = (ev: any) => {
    console.log(ev)
  }

  return (
    <section className="contact-page  full">
      <section className="wave-container flex column auto-center text-center">
        <p className="fw500 fs28">קבעו פגישה עוד היום,</p>
        <p className="fw500 fs28">המסע שלכם\שלכן לבריאות נפשית מתחיל כאן</p>
      </section>

      <section className="form-wrapper mie1 p1">
        <form
          ref={form as any}
          onSubmit={formik.handleSubmit}
          className="contact-page-form flex gap1 space-between column wrap">
          <label htmlFor="fullname">שם מלא:</label>
          <div className="field">
            <input
              className="full-width"
              name="fullname"
              type="text"
              value={formik.values.fullname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="error fw500 fs16">
              {formik.errors.fullname &&
                formik.touched.fullname &&
                formik.errors.fullname}
            </div>
          </div>
          <label htmlFor="phone">מספר טלפון:</label>
          <div className="field">
            <input
              className="full-width"
              name="phone"
              type="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="error fw500 fs16">
              {formik.errors.phone &&
                formik.touched.phone &&
                formik.errors.phone}
            </div>
          </div>
          <label htmlFor="email">כתובת מייל:</label>
          <div className="field">
            <input
              name="email"
              className="full-width"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="error fw500 fs16">
              {formik.errors.email &&
                formik.touched.email &&
                formik.errors.email}
            </div>
          </div>
          <label htmlFor="message">דבר נוסף שחשוב לך שאדע?</label>
          <div className="field">
            <textarea
              name="message"
              className="full-width"
              rows={3}
              cols={50}
              value={formik.values.message}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <div className="error">
              {formik.touched.message && formik.errors.message}
            </div>
          </div>
          <button
            // onClick={(ev) => debug(formik.values)}
            className="btn fs20 fw600"
            type="submit">
            שליחה
          </button>
        </form>
      </section>
    </section>
  )
}
export default ContactPage
