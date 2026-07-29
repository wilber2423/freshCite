import { GeneralContext } from "./GeneralValueContext";

const GeneralValueProvider = ({ children }) => {
  const phoneNumber = "*** *** 3547";
  const checkingNav = "4369";
  const savingNav = "2234";
  const checkingRouNum = "322271724";
  const countrtState = "California";
  const accountMoney = "Capital One Checking:2071";
  const tyoeOfPhone = "iPhone (iPhone 14 pro max)";

  return (
    <GeneralContext.Provider
      value={{
        phoneNumber,
        checkingNav,
        savingNav,
        checkingRouNum,
        countrtState,
        accountMoney,
        tyoeOfPhone,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralValueProvider;
