import judgement from '../assets/judgement.jpg';

function ContactForm() {
    return (
      <section>
        <h2 className="mb-7 text-3xl font-bold text-center">Free Consultation</h2>
        <div className="px-4 flex flex-col gap-4 md:flex-row md:items-center mb-20">
          <form className="w-full md:w-[50%]">
            <div className="flex flex-col gap-3 mb-3 sm:flex-row sm:w-full">
              <div className="flex flex-col gap-3 sm:w-full">
                <input
                  className="border border-gray-300 p-2 rounded"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="border border-gray-300 p-2 rounded"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex flex-col gap-3 sm:w-full">
                <input
                  className="border border-gray-300 p-2 rounded"
                  type="text"
                  placeholder="Your Email"
                />
                <input
                  className="border border-gray-300 p-2 rounded"
                  type="text"
                  placeholder="Subject"
                />
              </div>
            </div>
            <textarea
              className="border border-gray-300 p-2 w-full h-32 mb-4 md:h-[150px]"
              placeholder="Write your message..."
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 bg-custom-primary-yellow hover:bg-yellow-700 mb-3"
            >
              Send Message
            </button>
          </form>
          <img
            src={judgement}
            alt="Judgement Picture"
            className="w-full md:w-[50%] h-auto"
          />
        </div>
      </section>
    );
  }
  
  export default ContactForm;
  