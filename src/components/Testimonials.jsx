import lawyers from '../assets/lawyers.jpg'

function Testimonials() {
    return (
        <section className="h-[22rem] relative h-screen bg-cover text-white flex flex-col justify-center items-center mb-20" style={{ backgroundImage: `url(${lawyers})` }}>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>
            <h2 className="text-center text-2xl">Clients Feedback</h2>
            <div></div>
        </section>
    )
}
export default Testimonials;

