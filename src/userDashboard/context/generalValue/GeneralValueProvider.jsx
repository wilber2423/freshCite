import { GeneralContext } from "./GeneralValueContext";

const GeneralValueProvider = ({ children }) => {
  const phoneNumber = "*** *** 9408";
  const checkingNav = "4297";
  const savingNav = "1515";
  const checkingRouNum = "021000089";
  const countrtState = "Indiana";
  const accountMoney = "Capital One Checking:2071";
  const tyoeOfPhone = "iPhone (iPhone 11)";

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
