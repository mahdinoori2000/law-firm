import talkIcon from "../../assets/icons/talk-icon.svg";
import answerIcon from "../../assets/icons/answer-icon.svg";
import rocketIcon from "../../assets/icons/rocket-icon.svg";

function HowItWorks() {
  return (
    <section className="w-[100%]  bg-zinc-100 pt-20 pb-20">
      <h2 className=" text-[20px] md:text-[28px] xl:text-[32px] text-center ">
        How it works
      </h2>
      <div className="mt-12 flex flex-col gap-y-10 md:flex-row items-center justify-between md:w-[90%] lg:w-[900px] xl:w-[1000px]  mx-auto">
        <Card
          img={answerIcon}
          text="Ask your detailed legal or tax question to send to an attorney."
        />
        <Card
          img={talkIcon}
          text="  Get legal advice online or by phone from a lawyer that specializes
            in your issue."
        />
        <Card
          img={rocketIcon}
          text="Resolve your issue and move forward with confidence."
        />
      </div>
    </section>
  );
}

function Card({ img, text }) {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <img className="  " src={img} alt="" />
      <p className="w-[200px] leading-6 lg:w-[240px] xl:w-[300px] text-zinc-600 text-lg text-center ">
        {text}
      </p>
    </div>
  );
}

export default HowItWorks;
