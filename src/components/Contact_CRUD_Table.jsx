import { useContext } from "react";
import CRUD_Context from "../context/CRUD_Context";
import CrudApiTableRows from "./Contact_CRUD_Table_Row";

const CrudApiTable = () => {
  const { db } = useContext(CRUD_Context);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nº</th>
            <th>Nombre</th>
            <th>Habilidades</th>
            <th>Type</th>
            <th>Avatar</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {db.length > 0 ? (
            db.map((el, index) => (
              <CrudApiTableRows key={el.id} dataRow={el} num={index + 1} />
            ))
          ) : (
            <tr>
              <td colSpan={6}>SIN DATOS</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default CrudApiTable;
