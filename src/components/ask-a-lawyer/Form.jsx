import lawyers from "../../assets/lawyers.png";
function Form() {
  return (
    <section className="w-[100vw] mt-[100px] md:m-0 relative pt-10">
      <img
        src={lawyers}
        alt="lawyers"
        className="w-[100%] h-[822px] object-cover absolute -z-20 top-0 left-0"
      />
      <form
        id="messageForm"
        action=""
        method="get"
        className="z-20 mx-auto md:w-[620px] lg:w-[770px] xl:w-[1000px]  flex flex-col  items-center pb-32 backdrop-blur-md shadow-lg bg-[#dddddda3] p-4 lg:p-[32px]  "
      >
        <div className="w-[90%]  sm:w-[70%] md:w-full   md:flex justify-center gap-12">
          <span>
            <p className="mt-4 mb-2">Name :</p>
            <TextField id="name" placeholder="Your name" />
          </span>
          <span>
            <p className="mt-4 mb-2">Last name :</p>
            <TextField id="lastName" placeholder="Your Last name" />
          </span>
        </div>

        <div className=" w-[90%] sm:w-[70%] md:w-full md:flex justify-center gap-10">
          <span>
            <p className="mt-4 mb-2">Phone Number :</p>
            <TextField id="phone" placeholder="Phone..." />
          </span>
          <span>
            <p className="mt-4 mb-2">Email Address :</p>
            <TextField id="email" placeholder="Email..." />
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
          type="button"
          className="bg-[#001932] hover:bg-[#14293d] active:bg-[#001932] mt-6 text-zinc-100 px-12 py-4 lg:w-[360px] text-xl "
        >
          Ask Question
        </button>
      </form>
    </section>
  );
}

function TextField({ id, type = "text", placeholder, style }) {
  return (
    <div>
      <input
        id={id}
        size={22}
        type={type}
        placeholder={placeholder}
        className={`px-2 py-2 w-full lg:w-[300px] outline-none focus:border-2  lg:text-xl bg-[#ffffffad] text-[#1d1d1d] border-slate-700  ${style}`}
      />
    </div>
  );
}

export default Form;
