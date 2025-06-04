import { Form } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const contactData = async({request}) => {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    
}

export const Contact = () => {
    return (
        <>
        <section style={{margin: "2rem"}}>
        <h2 className="section-common--heading" style={{margin: "0 0 0.7rem 2rem"}}>contact us</h2>
        <p className="section-common--subheading" style={{margin: "0 0 0 2rem"}}>
          Get in touch with us. We are always here to help you.
        </p>

        <div className="section-contact" style={{margin: "2.5rem"}}>
          <div className=" grid grid-two--cols">
            <div className="contact-content">
              <Form method="POST" action="/contact">
                <div className="grid grid-two-cols mb-3">
                  <div>
                    <label htmlFor="username">full name</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
                      placeholder="enter full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email">email address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      placeholder="abc@thapa.com"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message">message</label>
                  <textarea
                    name="message"
                    id="message "
                    cols="30"
                    rows="10"
                    placeholder="we are always here to help you."
                  ></textarea>
                </div>

                <div className="mt-3">
                  <button type="submit" className="btn contact-btn">
                    send message
                  </button>
                </div>
              </Form>
            </div>
            <div className="contact-image">
              <figure>
                <img
                  src="/contact.png"
                  alt="contact pic"
                  className="contact_image"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
// "Error: You made a POST request to "/contact" but did not provide an `action` for route "0-4", so there is no way to handle the request."