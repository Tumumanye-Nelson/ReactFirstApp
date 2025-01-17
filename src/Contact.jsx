const Contact = () => {
    return (
        <div className="cont">
            <h1 className="contact-header">Contact Us for More Information</h1>
            <div className="contact-description">
               < p className="good"> We have different sources to help you connect with us. Feel free to reach out!</p>
            </div>
            <div className="contact-details">
                <h2>📞 Get in Touch</h2>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Email: info@tourismcompany.com</p>

                <h2>📍 Visit Us</h2>
                <p>123 Adventure Lane, Wanderlust City, TravelLand 56789</p>
            </div>
            <div className="contact-form">
                <h2>📄 Send Us a Message</h2>
                <form>
                    <label>
                        Name: 
                        <input type="text" name="name" placeholder="Your Name" />
                    </label>
                    <br />
                    <label>
                        Email: 
                        <input type="email" name="email" placeholder="Your Email" />
                    </label>
                    <br />
                    <label>
                        Message:
                        <textarea name="message" placeholder="Your Message"></textarea>
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
