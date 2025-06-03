import { useState } from "react";
import "./styles.css";
import Footer from "../../Components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      const serviceId = "service_n8xr159"; // Your actual service ID
      const templateId = "template_7aft2ee"; // Your actual template ID
      const publicKey = "pztgAh3X9Vnd5N4qp"; // Your actual public key

      const emailjs = await import("@emailjs/browser");
      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            current_date: new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }),
            website_url: window.location.origin, // Optional: your website URL
            user_agent: navigator.userAgent.split(" ")[0], // Optional: browser info
          },
          publicKey
        )
        .then(() => {
          window.location.reload();
          alert("Send successfully!");
        })
        .catch((err) => alert(err));
    } else {
      alert("All fields required!");
    }
  };

  return (
    <>
      <div className="contact-container">
        <h1 className="contact-title">Get In Touch</h1>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-input-top-container">
              <div className="contact-input-container">
                <label className="contact-input-label">Name</label>
                <input
                  id="name"
                  className="contact-input"
                  name="name"
                  placeholder="Your name"
                  value={formData?.name}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-input-container">
                <label className="contact-input-label">Email</label>
                <input
                  id="email"
                  className="contact-input"
                  name="email"
                  placeholder="Your email"
                  value={formData?.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="contact-input-bottom-container">
              <label className="contact-input-label">Subject</label>
              <input
                id="subject"
                className="contact-input"
                name="subject"
                placeholder="Your subject"
                value={formData?.subject}
                onChange={handleChange}
              />
            </div>

            <div className="contact-input-bottom-container">
              <label className="contact-input-label">Message</label>
              <textarea
                id="message"
                className="contact-input"
                name="message"
                placeholder="Your subject"
                value={formData?.message}
                onChange={handleChange}
              />
            </div>
            <div className="contact-submit-container">
              <button className="contact-submit-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
