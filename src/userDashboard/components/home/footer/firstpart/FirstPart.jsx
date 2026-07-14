import { footer1, footer2 } from "../footerDetails";
import House from "../../../../../assets/allBanks/banks/capitalone/co3.svg";
import Apple from "../../../../../assets/footer/download (1)22.jpeg";
import Google from "../../../../../assets/footer/download.jpeg";
import {
  FaAngleDown,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { useState } from "react";

const FirstPart = () => {
  const [isOpen, setIsOpen] = useState(null);
  const handleId = (id) => {
    setIsOpen((prev) => (prev === id ? null : id));
  };
  return (
    <div className="pt-10 mb-6">
      <div className="justify-between hidden customTablet1:flex ">
        {footer1.map((foo, i) => {
          const { name, children } = foo;
          return (
            <div key={i}>
              <h3 className="mb-4 text-sm font-extrabold ">{name}</h3>
              <div className="font-extralight ">
                {children.map((chi, i) => (
                  <p key={i} className="pb-3 hover:underline transistion3">
                    {chi.name}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
        <div>
          <img src={House} alt="" />
        </div>
      </div>
      <div className="justify-between space-y-6 customTablet1:hidden ">
        {footer1.map((foo, i) => {
          const { name, children } = foo;
          return (
            <div key={i} className="border-b border-b-white border-opacity-30">
              <h3
                onClick={() => handleId(name)}
                className="flex justify-between mb-4 text-sm font-extrabold"
              >
                {name}
                <FaAngleDown />
              </h3>
              <div className="font-extralight ">
                {isOpen === name &&
                  children.map((chi, i) => (
                    <p key={i} className="pb-3 hover:underline transistion3">
                      {chi.name}
                    </p>
                  ))}
              </div>
            </div>
          );
        })}
        <div>
          <img src={House} alt="" />
        </div>
      </div>
      <div className="items-center justify-between mt-10 space-y-4 customTablet1:space-y-0 customTablet1:flex">
        <div className="flex gap-5">
          <img src={Google} alt="" className="w-[137px] h-10 object-contain" />
          <img src={Apple} alt="" className="w-[120px] h-10 object-contain" />
        </div>
        <div className="flex gap-5 text-lg">
          <FaFacebookF />
          <FaXTwitter />
          <FaYoutube />
        </div>
      </div>
      <div className="gap-2 py-8 mt-10 space-y-4 font-light border-t border-b border-white customTablet1:space-y-0 customTablet1:flex border-opacity-30">
        <h3 className="font-extrabold">© 2025 Pzgroup Inc Inc</h3>
        <div className="gap-2 space-y-4  customTablet1:space-y-0 customTablet1:flex">
          {footer2.map((foo, i) => (
            <p key={i}>{foo.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
