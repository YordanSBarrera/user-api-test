import { User } from "./util";

type UserTableProps = {
  users: User[];
};

const UserTable = ({ users }: UserTableProps) => {
  return (
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
        {users.map((user) => {
          return (
            <tr>
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
  );
};
export default UserTable;
