import { User } from "./util";

type UserTableProps = {
  users: User[];
  hasColor: boolean;
  deleteUser: (email: string) => void;
};

const UserTable = ({ users, hasColor, deleteUser }: UserTableProps) => {
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
        {users.map((user, index) => {
          return (
            <tr
              key={user.email}
              style={{
                backgroundColor: hasColor
                  ? index % 2
                    ? "#97b6d6"
                    : "#7bba9b"
                  : "",
              }}
            >
              <td>
                <img src={user.picture.thumbnail} alt="" />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button onClick={() => deleteUser(user.email)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default UserTable;
