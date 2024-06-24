// src/app/components/Services.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faHeadset, faPenNib, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
// import Image from 'next/image';

export default function Services() {
  return (
    <section className="py-16 px-4 text-center bg-white">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Services</h2>
      <div className="flex flex-wrap justify-center space-x-4">
        {/* Add icons or images representing each service category */}
        <div className="flex flex-col items-center mb-4">
          {/* <Image src="/images/service-icon-1.png" alt="Administrative Support" width={80} height={80} /> */}
          <FontAwesomeIcon icon={faHandsHelping} className="text-6xl text-gray-800 mb-2" />
          <p className="text-lg font-semibold mt-2">Administrative Support</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          {/* <Image src="/images/service-icon-2.png" alt="Social Media Management" width={80} height={80} /> */}
          <FontAwesomeIcon icon={faHeadset} className="text-6xl text-gray-800 mb-2" />
          <p className="text-lg font-semibold mt-2">Social Media Management</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          {/* <Image src="/images/service-icon-3.png" alt="Customer Support" width={80} height={80} /> */}
          <FontAwesomeIcon icon={faHeadset} className="text-6xl text-gray-800 mb-2" />
          <p className="text-lg font-semibold mt-2">Customer Support</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          {/* <Image src="/images/service-icon-4.png" alt="Content Creation" width={80} height={80} /> */}
          <FontAwesomeIcon icon={faPenNib} className="text-6xl text-gray-800 mb-2" />
          <p className="text-lg font-semibold mt-2">Content Creation</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          {/* <Image src="/images/service-icon-5.png" alt="Specialized Services" width={80} height={80} /> */}
          <FontAwesomeIcon icon={faLaptopCode} className="text-6xl text-gray-800 mb-2" />
          <p className="text-lg font-semibold mt-2">Specialized Services</p>
        </div>
      </div>
    </section>
  );
}
