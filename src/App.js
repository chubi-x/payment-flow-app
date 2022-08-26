// REACT
import { useState } from "react";
import { CheckoutContext, FormContext } from "./Helpers/Context";

// PAGES
import Flow from "./pages/Flow";
import CompletedPayment from "./pages/CompletedPayment";

// CSS
import "./App.css";

function App() {
  const [checkedOut, setCheckedOut] = useState(false);

  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    localGovernment: "",
    state: "",
    cardName: "",
    cardType: "",
    cardNumber: "",
    cardExpDate: "",
    cardCvv: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(formInfo));
    console.log("submitted");
    setCheckedOut(true);
  }

  return (
    <CheckoutContext.Provider value={{ checkedOut, setCheckedOut }}>
      <FormContext.Provider value={{ formInfo, setFormInfo }}>
        <div className="App">
          {checkedOut ? <CompletedPayment /> : <Flow submit={handleSubmit} />}
        </div>
      </FormContext.Provider>
    </CheckoutContext.Provider>
  );
}

export default App;

