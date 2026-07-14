import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import BankInfo from "../../../personalDetails/banks/BankInfo";
import { IoIosCloseCircle } from "react-icons/io";
import { externalProfile } from "../externalDetails";
import { CgClose } from "react-icons/cg";

const ExternalPopUp = ({ cancel }) => {
  const [existPlan, setExistPlan] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={clsx(
          "fixed top-0 left-0 z-50 flex justify-center min-w-full min-h-full overflow-auto bg-opacity-85 bg-customGray-200 ",
          existPlan ? "hidden" : "block",
        )}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 50 }}
          className={clsx(
            "relative h-full mx-2  customMiniTablet:mx-10 bg-white rounded-lg text-customGray-400 mt-8 w-full  customTablet1:w-[764px]",
          )}
        >
          <span
            onClick={() => cancel(false)}
            className="float-right px-4 py-3 cursor-pointer text-customGray-100"
          >
            <IoIosCloseCircle size={25} />
          </span>
          <div className="pt-20 pb-5 px-7 customTablet1:px-20 customTablet1:pb-14 text-customGray-400">
            <div className="flex justify-center w-full">
              <h3 className="w-[220px] customTablet1:w-full mb-5 text-xl customTablet1:text-[47px] font-light text-center leading-[1.2] customTablet1:mb-14">
                We&apos;ve Made it Easier to Add an External Account
              </h3>
            </div>
            <div className="items-center justify-between px-4 mb-5 space-y-3 customTablet1:flex customTablet1:space-y-0">
              {externalProfile.map((ext) => {
                const { id, icon, name } = ext;
                return (
                  <div key={id} className="">
                    <div
                      className={clsx(
                        "w-full  flex justify-center mb-1 customTablet1:mb-3",
                      )}
                    >
                      <p className="rounded-full w-16 h-16 customTablet1:w-24 customTablet1:h-24 border-[2px] border-customBlue-1035 flex justify-center text-3xl items-center  customTablet1:text-5xl text-customBlue-1035">
                        {icon()}
                      </p>
                    </div>
                    <h3
                      className={clsx(
                        "w-full  text-center text-sm customTablet1:text-xl",
                      )}
                    >
                      {name}
                    </h3>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-center justify-center w-full space-y-6 ">
              <button
                className="w-full customTablet1:w-[240px] hover:bg-customBlue-700 transistion2 py-3 font-medium rounded-md text-white bg-customBlue-1035"
                onClick={() => setExistPlan(true)}
              >
                Get Started
              </button>
              <button
                className="font-medium underline text-customBlue-500"
                onClick={() => setExistPlan(true)}
              >
                Link Account Manually
              </button>
            </div>
          </div>
          <div className="pt-3 pb-5 space-y-2 text-xs border-t mx-7 border-t-customBlue-1035">
            <h2 className="font-medium text-center customTablet1:text-start">
              How we protect your information
            </h2>
            <p>
              We don’t store your username and password. By providing your
              credentials, we verify in real time that you own the account you
              want to link. When you enter your login username and password, we
              use this information to establish a secure connection with your
              financial institution. This connection allows us to immediately
              link to the account you want to use. We use current encryption and
              security technology to protect your personal information.
            </p>
          </div>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {existPlan && (
          <BankInfo
            cancel={setExistPlan}
            text="Connect your External Bank Account with Pz Instant Account Verification"
            para="or if you have your account and routine number, you can verify
                your accounts manually."
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ExternalPopUp;
