import { useAuth } from "../../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Strona Powitalna</h1>
      <p className="mb-4">Witaj, {user?.name}!</p>
    </div>
  );
};

export default Dashboard;
