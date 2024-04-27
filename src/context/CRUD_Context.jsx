import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import conexion from "../conexion/conexion";
const CRUD_Context = createContext(),
  CRUD_Provider = ({ children }) => {
    const [db, setDb] = useState(null),
      [dataToEdit, setDataToEdit] = useState(null),
      [error, setError] = useState(null),
      [loading, setLoading] = useState(false);
    let api = conexion(),
      url = `http://localhost:5000/pokemons`;
    useEffect(() => {
      setLoading(true);
      api.get(url).then((res) => {
        if (!res.error) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
    }, [url]);
    const createRegister = (data) => {
        if (!data) return;
        data.id = `${Date.now()}`;
        let options = {
          body: data,
          headers: { "Content-type": "application/json" },
        };
        api.post(url, options).then((res) => {
          if (!res.error) {
            setDb([...db, res]);
          } else {
            setError(res);
          }
        });
      },
      updateRegister = (data) => {
        if (!data) return;
        let options = {
          body: data,
          headers: { "Content-type": "application/json" },
        };
        let endpoint = `${url}/${data.id}`;
        api.put(endpoint, options).then((res) => {
          if (!res.error) {
            let newDb = db.map((el) => (el.id === data.id ? data : el));
            setDb(newDb);
          } else {
            setError(res);
          }
        });
      },
      deleteRegister = (id) => {
        if (!id) return;
        let isConfirm = confirm(`Quiere eliminar el registro con el id ${id} `);
        if (isConfirm) {
          let options = {
            headers: { "Content-type": "application/json" },
          };
          let endpoint = `${url}/${id}`;
          api.del(endpoint, options).then((res) => {
            if (!res.error) {
              let newDb = db.filter((el) => el.id !== id);
              setDb(newDb);
            } else {
              setError(res);
            }
          });
        } else {
          return;
        }
      };
    const data = {
      db,
      dataToEdit,
      error,
      loading,
      createRegister,
      updateRegister,
      deleteRegister,
      setDataToEdit,
    };
    return (
      <CRUD_Context.Provider value={data}>{children}</CRUD_Context.Provider>
    );
  };
CRUD_Provider.propTypes = {
  children: PropTypes.any,
};
export { CRUD_Provider };
export default CRUD_Context;
