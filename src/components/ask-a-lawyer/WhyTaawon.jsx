import trustedIcon from "../../assets/icons/trusted-icon.svg";
import affordableIcon from "../../assets/icons/affordable-icon.svg";
import demandIcon from "../../assets/icons/demand-icon.svg";
import simpleIcon from "../../assets/icons/simple-icon.svg";

function WhyTaawon() {
  return (
    <section className="w-full text-zinc-800 pt-20 pb-20 flex flex-col items-center">
      <p className="border-zinc-800 mb-8 uppercase border-b-[1px]">
        Why Taawon Lawyers?
      </p>
      <h2 className="text-center px-2 text-[22px] pb-4 lg:text-[32px] font-semibold ">
        Get quick answers from real lawyers, easily.
      </h2>
      <p className=" text-center px-3 lg:text-[18px] text-zinc-600 pb-12 lg:pb-16">
        Ask any legal or tax question, or have a network attorney review your
        document.
      </p>
      <div className="grid  gap-x-12 gap-y-10 sm:grid-cols-2 w-[80%] sm:w-[500px] md:w-[80%]  lg:w-[900px] xl:w-[1000px]">
        <Card
          img={simpleIcon}
          title="Simple"
          text="The law is complex. We make it fast and easy to get an answer from a real lawyer online."
        />

        <Card
          img={demandIcon}
          title="On Demand"
          text="Have a legal or tax question about your business or family? Get guidance quickly and easily."
        />
        <Card
          img={trustedIcon}
          title="Trusted"
          text="Ask a question with confidence. We'll protect your privacy and keep your information safe."
        />
        <Card
          img={affordableIcon}
          title="Affordable"
          text="Members ask for free! Plus, get 1 free 30-minute phone consultation with a lawyer for every new issue."
        />
      </div>
    </section>
  );
}

function Card({ img, title, text }) {
  return (
    <span className="flex flex-col md:flex-row items-center md:items-start  gap-2 md:gap-4">
      <img className="h-[72px] " src={img} alt={title} />
      <span className="flex flex-col items-center md:items-start">
        <h3 className="font-bold text-zinc-500">{title}</h3>
        <p className="text-zinc-500 text-center md:text-start">{text}</p>
      </span>
    </span>
  );
}

export default WhyTaawon;
