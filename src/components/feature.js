import Image from "next/image";

const LandscapingSection = ({short, title, description, imageSrc, reverse }) => {
  return (
    <div className="container mx-auto py-10 px-5">
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-10">
        <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center`}>
          {/* Text Content */}
          <div className="md:w-1/2 p-5">
            <h4 className="text-green-800 mb-5">{short}</h4>
            <h3 className="text-3xl font-bold mb-4 text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={imageSrc}
              width={500}
              height={300}
              alt={title}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandscapingSection;
