import { useState } from "react";
import { User } from "./util";

type UserTableProps = {
  users: User[];
};

const UserTable = ({ users }: UserTableProps) => {
  const [hasColor, setHasColor] = useState<boolean>(false);
  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <button
          onClick={() => {
            setHasColor(!hasColor);
          }}
        >
          {hasColor ? "Dar Color Tabla" : "Quitar Color Tabla"}
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <td>Foto</td>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Pais</td>
            <td>acciones</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr
                style={{
                  backgroundColor: hasColor
                    ? index % 2
                      ? "#97b6d6"
                      : "#7bba9b"
                    : "",
                }}
              >
                <td>
                  <img src={user.picture.medium} alt="" />
                </td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
                <td>acciones</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default UserTable;
