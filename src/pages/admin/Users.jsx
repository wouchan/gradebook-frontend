import { getUsers } from "../../api/users";
import UsersList from "../../components/UsersList";
import { useState, useEffect } from "react";

const Users = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsersData(users);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Użytkownicy</h1>
      <UsersList users={usersData} />
    </div>
  );
};

export default Users;
