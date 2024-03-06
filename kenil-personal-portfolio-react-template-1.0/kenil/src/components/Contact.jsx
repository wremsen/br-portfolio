import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {  toast } from "react-toastify";
import { ContactDetails } from "../config/dataConfig";


const Contact = () => {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingMail(true);
    emailjs
      .sendForm(
        "service_i8Fk3ms",
        "template_si6Fin9",
        form.current,
        "c9HsDgGF0tvWyVFAL"
      )
      .then(
        (result) => {
          document.getElementById("contact-form").reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(result.text);
          setSendingMail(false);
        },
        (error) => {
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(error.text);
          setSendingMail(false);
        }
      );
  };

  return (
    <section id="contact" className="section" data-bs-theme="auto">
      <div className="container">
        {/* Heading */}
        <div className="row mb-5 wow fadeInUp">
          <div className="col-lg-9 col-xl-8 mx-auto text-center">
            <h2 className="fw-600 mb-3">Contact Us</h2>
            <hr className="heading-separator-line border-primary border-2 opacity-10 mx-auto" />
            <p className="text-4 text-muted">
              Send me a note, and let’s get started on your project today!
            </p>
          </div>
        </div>
        {/* Heading End */}
        {/* Contact Form */}
        <div className="row wow fadeInUp">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <form id="contact-form"  ref={form} onSubmit={sendEmail}>
              <div className="row g-4">
                <div className="col-md-6">
                  <input
                    name="user_name"
                    type="text"
                    className="form-control border-2"
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    name="user_email"
                    type="email"
                    className="form-control border-2"
                    required
                    placeholder="Your Email"
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    name="message"
                    className="form-control border-2"
                    rows={5}
                    required
                    placeholder="Tell us more about your needs........"
                    defaultValue={""}
                  />
                </div>
                <div className="col-md-12 text-center">
                  <button
                    id="submit-btn"
                    className="btn btn-primary rounded-pill d-inline-flex"
                    type="submit"
                  >
                    {sendingMail ? (
                      <>
                        <span
                          role="status"
                          aria-hidden="true"
                          className="spinner-border spinner-border-sm align-self-center me-2"
                        ></span>
                        Sending......
                      </>
                    ) : (
                      <>
                        Send Message
                       
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Contact Form End */}
        <div className="brands-grid separator-border h-100 mt-5 wow fadeInUp">
          <div className="row">
          {
            ContactDetails.map(({icon, p1, p2, title}, index)=>(
              <div className="col-md-6 col-lg-4" key={index}>
              <div className="featured-box text-center my-3 my-md-0">
                <div className="featured-box-icon text-secondary text-opacity-50">
                  {" "}
                  <i className={icon} />
                </div>
                <h3 className="text-uppercase">{title}</h3>
                <p className="text-muted mb-0">
                  {p1}
                  <br />
                 {p2}{" "}
                </p>
              </div>
            </div>
            ))
          }
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
