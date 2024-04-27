import { useContext } from "react";
import CRUD_Context from "../context/CRUD_Context";
import Contact_CRUD_Form from "./Contact_CRUD_Form";
import Loader from "./Loader";
import Message from "./Message";
import CrudApiTable from "./Contact_CRUD_Table";

const Contact_CRUD_API = () => {
  const { db, loading, error } = useContext(CRUD_Context);
  return (
    <>
      <div>CRUD API CON CONTEXT API</div>
      <article className="grid-1-2">
        <Contact_CRUD_Form />
        {loading && <Loader />}
        {error && (
          <Message
            message={`Error: ${error.status}: ${error.statusText}`}
            bgColor={"#dc3545"}
          />
        )}
        {db && <CrudApiTable />}
      </article>
    </>
  );
};
export default Contact_CRUD_API;
