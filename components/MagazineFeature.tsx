import Image from "next/image";
import Mag1 from "/public/mag-1.jpg";
import Mag2 from "/public/mag-2.jpg";
import Mag3 from "/public/mag-3.jpg";
import Mag4 from "/public/mag-4.jpg";

export function MagazineFeature() {
  return (
    <div className="p-4 md:p-8 bg-gray-50 border-y -mx-2 sm:-mx-8 border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-8 max-w-screen-lg m-auto">
        <Image
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          className="shadow-2xl"
          src={Mag1}
          alt="First page introduces the plan to create a quiz that eventually predicts the user's optimism or pessimism"
        />
        <Image
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          className="shadow-2xl"
          src={Mag2}
          alt="Second page primarily focuses on what a neural network is and how they can be visualised in layers"
        />
        <Image
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          className="shadow-2xl"
          src={Mag3}
          alt="Third page provides further reading and continues the example app code"
        />
        <Image
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          className="shadow-2xl"
          src={Mag4}
          alt="Fourth and final page shows the finished app predicting an answer to 'How full is the proverbial glass?'"
        />
      </div>
    </div>
  );
}
