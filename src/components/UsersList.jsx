import { userTypeToString } from "../utils/helpers";
import { deleteUser } from "../api/users";
import { X } from "lucide-react";

const UserDeleteButton = ({ userId }) => {
  const handleDeleteClick = async () => {
    await deleteUser(userId);
    location.reload();
  };

  return (
    <button
      onClick={handleDeleteClick}
      className="w-6 h-6 cursor-pointer bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-200 transform group-hover:scale-100 scale-75 shadow-lg z-10"
      aria-label={`Delete user ${userId}`}
    >
      <X className="w-3 h-3" />
    </button>
  );
};

const UsersList = ({ users }) => {
  if (users.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        <p>Brak użytkowników.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Użytkownicy</h2>
        <p className="text-sm text-gray-600">
          Liczba użytkowników: {users.length}
        </p>
      </div>

      <div className="divide-y divide-gray-200">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-150 group"
          >
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                {user.firstName} {user.lastName}{" "}
                <span className="text-sm text-gray-600">
                  {userTypeToString(user.userType)}
                </span>
              </h3>
            </div>
            <UserDeleteButton userId={user.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
