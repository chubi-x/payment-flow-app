// REACT
import { useState } from "react";
import { CheckoutContext } from "./Helpers/Context";

// PAGES
import Flow from "./pages/Flow";
import CompletedPayment from "./pages/CompletedPayment";

// CSS
import "./App.css";

function App() {
  const [checkedOut, setCheckedOut] = useState(false);
  return (
    <CheckoutContext.Provider value={{ checkedOut, setCheckedOut }}>
      <div className="App">{checkedOut ? <CompletedPayment /> : <Flow />}</div>
    </CheckoutContext.Provider>
  );
}

export default App;

