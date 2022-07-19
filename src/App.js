import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { UserForm } from "./components/UserForm/UserForm";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function openForm() {
    setIsFormOpen(true);
  }

  return (
    <div className="App">
      <button className="button btn-outline-danger" onClick={openForm}>
        Open form
      </button>
      {isFormOpen ? <UserForm /> : null}
    </div>
  );
}

export default App;
