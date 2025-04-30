import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import SocialIcon from '../SocialIcon';
import emailjs from '@emailjs/browser';

const ContactMe = () => {

  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });
        
        // EmailJS configuration
        // You'll need to sign up at emailjs.com and get these values

        
        // Prepare the template parameters
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          to_email:formData.email,
          message: formData.message,
          company_name: 'Your Company Name',
          company_logo_url: 'https://onegroupnetwork.com/wp-content/uploads/2020/09/dummy-logo-1b.png',
          current_year: new Date().getFullYear(),
          company_address: 'Your Company Address',
          website_url: 'https://yourwebsite.com',
          company_email: 'contact@yourcompany.com'
        };

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully.'
                });
                // Reset form after submission
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                setSubmitStatus({
                    type: 'error',
                    message: 'There was an error sending your message. Please try again later.'
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const handleChange = (e) => { 
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    return (
        <section id='contact-me' className="rounded bg-zinc-100 dark:bg-zinc-900 px-5 py-15 my-20 text-gray-400 max-w-screen-2xl mx-auto">
            <h1 className="md:text-5xl text-3xl capitalize text-gray-800 dark:text-amber-500 font-bold text-center py-5">
                contact me
            </h1>
            <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
                <div className="flex-1 space-y-2">
                    <p className="text-gray-800 dark:text-gray-500">Get In Touch</p>
                    <h1 className="text-4xl dark:text-white">
                        <span className="text-amber-500">Let's Talk</span> About More
                    </h1>
                    <p className="pb-10 text-gray-800 dark:text-gray-500">
                        Have questions or want to collaborate? Feel free to reach out! Whether you have a project idea, 
                        feedback, or just want to say hello, I'd love to hear from you. Let's connect and create 
                        something amazing together!
                    </p>
                    <h1 className="text-2xl text-gray-900 dark:text-white">Find Me Here:</h1>
                    <p className='text-gray-800 dark:text-gray-500'>Email: lokmansarkar608@gmail.com</p>
                    <div className="flex items-center gap-2">
                        <p className='text-gray-800 dark:text-gray-500'>whatsapp: </p>
                        <button className="btn bg-amber-500 hover:bg-amber-600 hover:text-white hover:transition hover:duration-300 text-black text-lg flex justify-center items-center font-bold px-4 py-2 rounded">
                            <FaWhatsapp />
                            <a href='https://wa.me/8801331457642' target='_blank' rel="noreferrer"> send message</a>
                        </button>
                    </div>
                    <p className="text-2xl pt-3 text-gray-900 dark:text-gray-500 ">Or Social:</p>
                    <SocialIcon />
                </div>
                <div className="flex-1">
                    <form onSubmit={handleSubmit} className='text-gray-900 dark:text-gray-500'>
                        {submitStatus.message && (
                            <div className={`p-4 mb-4 rounded ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {submitStatus.message}
                            </div>
                        )}
                        
                        <div className="flex flex-col gap-5">
                            <div id="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border border-gray-500 rounded focus:outline-none focus:ring focus:ring-amber-500"
                                    required
                                />
                            </div>

                            <div id="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-500 rounded focus:outline-none focus:ring focus:ring-amber-500"
                                    required
                                />
                            </div>

                            <div id="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    rows="5"
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    className="w-full px-4 py-2 border border-gray-500 rounded focus:outline-none focus:ring focus:ring-amber-500"
                                    required
                                />
                            </div>
                        </div>
                        <button 
                            type='submit' 
                            disabled={isSubmitting}
                            className='mt-4 px-4 py-2 bg-amber-400 text-black hover:bg-amber-500 hover:text-white hover:transition hover:duration-300 rounded font-semibold disabled:opacity-50'
                        >
                            {isSubmitting ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;