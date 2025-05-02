import { useAuth } from "../../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>
      <p className="mb-4">Welcome, {user?.name}!</p>

      {/* Dashboard content would go here */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Grades</h2>
          <p>Your recent grades would appear here.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Upcoming Assignments</h2>
          <p>Your upcoming assignments would appear here.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
