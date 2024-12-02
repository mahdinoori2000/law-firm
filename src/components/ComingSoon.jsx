import backgroundImage from "../assets/lawyers.png"; // Import the image

const ComingSoon = ({ title }) => {
  return (
    <div className="z-55 relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-cover bg-center">
      {/* Overlay container to add opacity to the background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.7, // This controls the opacity of the background image
          zIndex: -1, // Keep it behind the content
        }}
      ></div>

      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">{title}</h2>
        <h3 className="text-2xl font-bold mb-7 text-red-500">
          This Page is under Construction
        </h3>
        <p className="text-lg text-gray-600 mt-4">
          We&apos;re working hard to improve our website and will be ready to
          launch soon!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
