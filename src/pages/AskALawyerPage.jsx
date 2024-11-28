import { useRef } from "react";
import emailjs from "@emailjs/browser";
import lawyers from "../assets/lawyers.png";
import HowItWorks from "../components/ask-a-lawyer/HowItWorks";
import LawyersNearYou from "../components/ask-a-lawyer/LawyersNearYou";
import WhyTaawon from "../components/ask-a-lawyer/WhyTaawon";
import ExpertTeam from "../components/ExpertTeam";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vqv52hr",
        "template_arw5fqn",
        form.current,
        "YKPZN0HXcnyT7qVcw"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred. Please try again later.");
        }
      );
  };

  return (
    <>
      <section className="w-[100%] mt-[100px] h-full md:m-0 overflow-hidden pb-20 relative pt-10">
        <img
          src={lawyers}
          alt="lawyers"
          className="w-[100%] overflow-hidden  h-full object-cover absolute -z-20 top-0 left-0"
        />
        <div className="z-20 mx-auto w-[90%] md:w-[620px] md:rounded-[8px] md:ml-10 md:m-0 lg:w-[770px] xl:w-[800px]  flex flex-col      backdrop-blur-md shadow-lg bg-[#dddddda3] p-4 lg:p-[32px]">
          <h2 className="text-[24px] md:text-[44px]  text-white ">
            Legal & tax advice
          </h2>
          <p className="text-[16px] md:text-[28px]  text-white ">
            Ask a lawyer your legal or tax question
          </p>
          {/*  */}
          {/* CONTACT FORM  */}
          {/*  */}
          <form
            id="messageForm"
            ref={form}
            onSubmit={sendEmail}
            className="z-20 mx-auto w-full    flex flex-col  items-center md:items-start pb-10     p-4 lg:p-[32px]  "
          >
            <div className="w-[90%]  sm:w-[70%] md:w-full   md:flex jusify-cneter md:justify-start gap-10">
              <span>
                <p className="mt-4 mb-2">Name :</p>
                <TextField
                  id="name"
                  placeholder="Your name"
                  name="first_name"
                />
              </span>
              <span>
                <p className="mt-4 mb-2">Last name :</p>
                <TextField
                  id="lastName"
                  placeholder="Your Last name"
                  name="last_name"
                />
              </span>
            </div>

            <div className=" w-[90%] sm:w-[70%] md:w-full md:flex jusify-cneter md:justify-start gap-10">
              <span>
                <p className="mt-4 mb-2">Phone Number :</p>
                <TextField
                  id="phone"
                  placeholder="Phone..."
                  name="phone_number"
                />
              </span>
              <span>
                <p className="mt-4 mb-2">Email Address :</p>
                <TextField id="email" placeholder="Email..." name="email" />
              </span>
            </div>

            <div className="w-[90%]  sm:w-[70%] md:w-[480px] lg:w-[600px] ">
              <p className="mt-4 mb-2">Message : </p>
              <textarea
                name="message"
                id="message"
                placeholder="message.."
                className="w-full h-[200px] p-2  lg:w-[600px] resize-none outline-none  bg-[#ffffffad]"
              ></textarea>
            </div>
            <button
              type="submmit"
              className="bg-[#001932] hover:bg-[#14293d] active:bg-[#001932] mt-6 text-zinc-100 px-12 py-4 lg:w-[360px] text-xl "
            >
              Ask Question
            </button>
          </form>
        </div>
      </section>
      <HowItWorks />
      <WhyTaawon />
      <ExpertTeam />
      <LawyersNearYou />
      <Testimonials />
      <Footer />
    </>
  );
}

function TextField({ id, type = "text", placeholder, style, name }) {
  return (
    <div>
      <input
        id={id}
        size={22}
        type={type}
        placeholder={placeholder}
        name={name}
        className={`px-2 py-2 w-full lg:w-[300px] outline-none focus:border-2  lg:text-xl bg-[#ffffffad] text-[#1d1d1d] border-slate-700  ${style}`}
      />
    </div>
  );
}

export default Form;
