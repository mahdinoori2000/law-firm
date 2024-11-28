import afgMap from "../../assets/afg-map.png";

const LawyersNearYou = () => {
  return (
    <div className="py-24 bg-gray-100 lg:flex lg:gap-12 xl:gap-24 2xl:gap-32">
      <div className="flex items-center justify-center">
        <img src={afgMap} alt="Afghanistan Map" />
      </div>
      <div className="text-center lg:text-left">
        <h3 className="text-2xl font-semibold mt-16 mb-5 text-gray-900 md:text-3xl">
          Lawyers Near You
        </h3>
        <p className="text-gray-600 py-8 text-lg px-5 md:text-xl lg:px-0 lg:pr-8">
          <strong>Thousands</strong> of questions have been answered by
          attorneys in our nationwide network.
        </p>
        <p className="text-gray-600 text-lg py-8 md:text-xl">
          Popular legal topics include:
        </p>
        <ul className="text-center text-gray-600 text-lg py-1 md:text-xl lg:text-left">
          <li>• Starting a business</li>
          <li>• Taxes and law tax</li>
          <li>• Business Contracts</li>
          <li>• Employment law</li>
          <li>• Real Estate law</li>
          <li>• Landlord/tenant matters</li>
          <li>• Wills and trusts</li>
          <li>• Family law</li>
        </ul>
      </div>
    </div>
  );
};

export default LawyersNearYou;
