import { useContext } from "react";
import CRUD_Context from "../context/CRUD_Context";
import PropTypes from "prop-types";
const CrudApiTableRows = ({ dataRow, num }) => {
  const { setDataToEdit, deleteRegister } = useContext(CRUD_Context);
  const { id, name, ability, type, avatar } = dataRow;
  const handleEdit = () => {
    setDataToEdit(dataRow);
  };
  return (
    <tr>
      <td>{num}</td>
      <td>{name}</td>
      <td>{ability.length > 0 ? ability.join(",") : ""}</td>
      <td>{type}</td>
      <td>
        <img src={avatar} alt={name} />
      </td>
      <td>
        <button className="edit" onClick={handleEdit}>
          EDITAR
        </button>
        <button className="delete" onClick={() => deleteRegister(id)}>
          ELIMINAR
        </button>
      </td>
    </tr>
  );
};
CrudApiTableRows.propTypes = {
  dataRow: PropTypes.any,
  num: PropTypes.any,
};
export default CrudApiTableRows;
