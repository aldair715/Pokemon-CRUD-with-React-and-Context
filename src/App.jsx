import "./App.css";
import Contact_CRUD_API from "./components/Contact_CRUD_API";
import { CRUD_Provider } from "./context/CRUD_Context";

function App() {
  return (
    <>
      <CRUD_Provider>
        <Contact_CRUD_API />
      </CRUD_Provider>
    </>
  );
}

export default App;
