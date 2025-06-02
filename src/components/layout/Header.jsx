import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useRole } from "../../hooks/useRole";

const Header = () => {
  const { user, logout } = useAuth();
  const { isStudent, isTeacher, isAdmin } = useRole();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Gradebook
        </Link>

        <div className="container flex gap-8 items-center justify-end">
          <nav className="hidden md:flex space-x-4 align-self-end">
            {!user && (
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            )}

            {isStudent && (
              <>
                <Link to="/student/dashboard" className="hover:underline">
                  Strona Powitalna
                </Link>
                <Link to="/student/grades" className="hover:underline">
                  Moje Oceny
                </Link>
              </>
            )}

            {isTeacher && (
              <>
                <Link to="/teacher/dashboard" className="hover:underline">
                  Strona Powitalna
                </Link>
                <Link to="/teacher/classes" className="hover:underline">
                  Moje Kursy
                </Link>
              </>
            )}

            {isAdmin && (
              <>
                <Link to="/admin/dashboard" className="hover:underline">
                  Strona Powitalna
                </Link>
                <Link to="/admin/users" className="hover:underline">
                  Użytkownicy
                </Link>
                <Link to="/admin/classes" className="hover:underline">
                  Kursy
                </Link>
              </>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {user && (
              <>
                <span className="hidden md:inline">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md"
                >
                  Wyloguj
                </button>
              </>
            )}

            {/* Mobile menu button */}
            <button className="md:hidden">
              {/* Add mobile menu icon here */}
              Menu
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - would be toggleable in the actual implementation */}
      <div className="md:hidden hidden">
        {/* Mobile navigation links would go here */}
      </div>
    </header>
  );
};

export default Header;
