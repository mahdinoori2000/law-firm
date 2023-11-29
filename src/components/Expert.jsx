import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import lawyer from '../assets/lawyer.png';
import lawyer2 from '../assets/lawyer2.jpg';
import lawyer3 from '../assets/lawyer3.jpg';

function ExpertTeam() {
  const teamMembers = [
    { name: 'Mohsen', position: 'Senior Lawyer', image: lawyer },
    { name: 'Jane', position: 'Legal Consultant', image: lawyer2 },
    { name: 'John', position: 'Attorney', image: lawyer3 },
   
  ];

  return (
    <section className="my-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 my-6 md:my-10">Our Expert Team</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 cursor-pointer">
            <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover object-center" />
              <div className="px-4 py-2">
                <h2 className="text-xl font-semibold">{member.name}</h2>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default ExpertTeam;
