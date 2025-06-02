import { getUsers } from "../../api/users";
import UsersList from "../../components/UsersList";
import { useState, useEffect } from "react";
import CreateUserDialog from "../../components/CreateUserDialog";

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
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-6">Użytkownicy</h1>
      <UsersList users={usersData} />
      <CreateUserDialog />
    </div>
  );
};

export default Users;
