import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact section">
            <div className="container">

                <div className="contact-header">
                    <div className="section-eyebrow">
                        GET IN TOUCH
                    </div>

                    <h2 className="contact-title">
                        Let's build something
                        <br />
                        <span className="text-gradient">meaningful.</span>
                    </h2>

                    <p className="contact-description text-muted">
                        Have a project, business requirement, or technology
                        challenge? Tell us what you're working on and let's
                        explore how DFIVE Technologies can help.
                    </p>
                </div>

                <div className="contact-grid">

                    {/* Contact Information */}
                    <div className="contact-info">

                        <div className="contact-info-header">
                            <span className="contact-info-label">
                                CONTACT DFIVE
                            </span>

                            <h3>
                                Have an idea?
                                <br />
                                Let's talk.
                            </h3>
                        </div>

                        <p className="contact-info-description text-muted">
                            Whether you are looking for software development,
                            AI solutions, testing services, or technology
                            expertise, we'd be happy to hear from you.
                        </p>

                        <div className="contact-details">

                            <div className="contact-detail">
                                <div className="contact-detail-icon" aria-hidden="true">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            width="20"
                                            height="16"
                                            x="2"
                                            y="4"
                                            rx="2"
                                        />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </div>

                                <div>
                                    <span className="contact-detail-label">
                                        EMAIL
                                    </span>

                                    <a href="mailto:info@dfivetechnologies.com">
                                        info@dfivetechnologies.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact-detail">
                                <div className="contact-detail-icon" aria-hidden="true">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="2" y1="12" x2="22" y2="12" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>

                                <div>
                                    <span className="contact-detail-label">
                                        WEBSITE
                                    </span>

                                    <a
                                        href="https://dfivetechnologies.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        dfivetechnologies.com
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">

                        <div className="form-header">
                            <h3>Send us a message</h3>

                            <p className="text-muted">
                                Tell us a little about your requirement.
                            </p>
                        </div>

                        <form className="contact-form">

                            <div className="form-row">

                                <div className="form-group">
                                    <label htmlFor="contact-name">
                                        Name
                                    </label>

                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        autoComplete="name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contact-email">
                                        Email
                                    </label>

                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        required
                                    />
                                </div>

                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-subject">
                                    Subject
                                </label>

                                <input
                                    id="contact-subject"
                                    name="subject"
                                    type="text"
                                    placeholder="How can we help?"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-message">
                                    Message
                                </label>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={6}
                                    placeholder="Tell us about your project or requirement..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary contact-submit"
                            >
                                <span>Send Message</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;