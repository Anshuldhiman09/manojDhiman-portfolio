import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <section className="section" id="contact">
      <div className="container-lg text-center">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Let's build something great together</p>
        <button
          onClick={() => navigate("/contact-form")} // redirect to contact form page
          className="btn mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go to Contact Form
        </button>
      </div>
    </section>
  );
}
