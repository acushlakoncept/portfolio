import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();

function onChange(value) {
  console.log("Captcha value:", value)
}

const contact = () => {
  return <Layout>
    <SEO title="Contact" />
    <section className="contact-page">
      <article className="contact-form">
        <h3>get in touch</h3>
        <form action="https://formspree.io/xvowjjkq"  method="POST" onSubmit={() => { recaptchaRef.current.execute() }}>
          <div className="form-group">
            <input type="text" name="name" placeholder="name" className="form-control" />
            <input type="email" name="email" placeholder="email" className="form-control" />
            <textarea name="message" rows="5" placeholder="message" className="form-control" />
          </div>
          <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey="6Lfl0tAZAAAAACGkkVOvgt85I_kgTDtBsq0Ht1ch"
              onChange={onChange}
            />
          <button type="submit" className="submit-btn btn">submit here</button>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
