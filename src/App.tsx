import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState();
  const apiUrl = "https://randomuser.me/api/?results=100";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
      });
  }, []);

  console.log(user);
  return (
    <>
      <h1>User table</h1>
      <table>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      </table>
    </>
  );
}

export default App;
