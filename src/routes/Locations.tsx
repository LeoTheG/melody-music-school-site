import { PageWithLargeHeader } from "../components/PageWithLargeHeader";
import img from "../assets/locations/locations-background.jpg";

export const Locations = () => {
  return (
    <PageWithLargeHeader
      img={img}
      title="Locations"
      subtitle="Music Schools in Glendale and Granada Hills"
    >
      <div className="bg-base-100 relative z-10">
        <div className="px-8 md:px-32">
          <Location
            location="Glendale"
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.812996665469!2d-118.2602394239426!3d34.151126112501935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0540f253efd%3A0xf7be91ff350b10a!2s334%20N%20Central%20Ave%2C%20Glendale%2C%20CA%2091203!5e0!3m2!1sen!2sus!4v1697519369495!5m2!1sen!2sus"
            address="334 N Central Ave, Glendale, CA 91203"
            number="(818) 244-8244"
          />
          <Location
            location="Granada Hills"
            address="17727 Chatsworth St, Granada Hills, CA 91344"
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.3528027941156!2d-118.52338532393864!3d34.265054606462584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29ac2b0f5d3d5%3A0x97ab0b522583fd80!2sMelody%20International%20Music%20School!5e0!3m2!1sen!2sus!4v1697519817522!5m2!1sen!2sus"
            number="(818) 363-4343"
          />
        </div>
      </div>
    </PageWithLargeHeader>
  );
};

const Location = ({
  location,
  url,
  address,
  number,
}: {
  location: string;
  url: string;
  address: string;
  number: string;
}) => {
  return (
    <div className="flex flex-col gap-4 z-10 relative pt-4 w-full">
      <div className="text-2xl font-bold">{location}</div>
      <div className="text-xl">{address}</div>
      <div className="text-xl">{number}</div>

      <iframe
        src={url}
        className="w-full h-[400px] md:w-[600px] md:h-[450px]"
        style={{
          border: 0,
        }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
