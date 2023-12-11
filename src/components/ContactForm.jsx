import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import judgement from '../assets/judgement.jpg';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vqv52hr', 'template_arw5fqn', form.current, 'YKPZN0HXcnyT7qVcw')
      .then((result) => {
        console.log(result.text);
         alert('Your message has been sent successfully!');
         form.current.reset();
      }, (error) => {
        console.log(error.text);
        alert('An error occurred. Please try again later.');
      });
  };

  return (
    <section>
      <h2 className="mb-7 text-3xl font-bold text-center">Free Consultation</h2>
      <div className="px-4 flex flex-col gap-4 md:flex-row md:items-center mb-20">
        <form ref={form} onSubmit={sendEmail} className="w-full md:w-[50%]">
          <div className="flex flex-col gap-3 mb-3 sm:flex-row sm:w-full">
            <div className="flex flex-col gap-3 sm:w-full">
              <input
                className="border border-gray-300 p-2 rounded"
                type="text"
                placeholder="Your Name"
                name="from_name"
              />
              <input
                className="border border-gray-300 p-2 rounded"
                type="number"
                placeholder="Phone Number"
                name="user_number"
              />
            </div>
            <div className="flex flex-col gap-3 sm:w-full">
              <input
                className="border border-gray-300 p-2 rounded"
                type="text"
                placeholder="Your Email"
                name="from_email"
              />
              <input
                className="border border-gray-300 p-2 rounded"
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
            </div>
          </div>
          <textarea
            className="border resize-none border-gray-300 p-2 w-full h-32 mb-4 md:h-[150px]"
            placeholder="Write your message..."
            name="message"
          ></textarea>
          <button
            type="submit"
            value="send"
            className="text-white px-4 py-2 bg-custom-primary-yellow hover:bg-custom-secondary-yellow mb-3"
          >
            Send Message
          </button>
        </form>
        <img
          src={judgement}
          alt="Judgement Picture"
          className="w-full md:w-[50%] h-auto self-start"
        />
      </div>
    </section>
  );
}

export default ContactForm;
