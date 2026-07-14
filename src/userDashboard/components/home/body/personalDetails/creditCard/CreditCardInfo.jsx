import BankInfo from "../banks/BankInfo";

const CreditCardInfo = ({ cancel }) => {
  return (
    <>
      <BankInfo
        cancel={cancel}
        text="Connect Your Credit Card with Pz Instant Account Verification"
        card="Credit Card"
        para="or if you have your card details, you can verify your credit card  manually."
      />
    </>
  );
};

export default CreditCardInfo;
