import { useState } from "react";
import { X } from "lucide-react";
import { createUser } from "../api/users";
import { userTypeToString } from "../utils/helpers";

const CreateUserDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    userType: "",
  });
  const [errors, setErrors] = useState({});

  const userTypeOptions = ["student", "teacher", "admin"];

  const openDialog = () => {
    setIsOpen(true);
    setFormData({
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      userType: "",
    });
    setErrors({});
  };

  const closeDialog = () => {
    setIsOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      userType: "",
    });
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Imię jest wymagane";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Nazwisko jest wymagane";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Hasło jest wymagane";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email jest wymagany";
    }

    if (!formData.userType.trim()) {
      newErrors.userType = "Typ użytkownika jest wymagany";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      const newUser = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        password: formData.password.trim(),
        email: formData.email.trim(),
        userType: formData.userType.trim(),
      };

      console.log("New user created: " + (await createUser(newUser)));

      closeDialog();
      location.reload();
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={openDialog}
        className="p-2  bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group z-50"
        aria-label="Nowy użytkownik"
      >
        <span className="group-hover:scale-110 transition-transform">
          Nowy użytkownik
        </span>
      </button>

      {/* Dialog Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* Dialog Content */}
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Nowy użytkownik
                </h2>
                <button
                  onClick={closeDialog}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Form */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* First Name Input */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Imię
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.firstName
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Imię"
                      maxLength={100}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  {/* Last Name Input */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nazwisko
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.lastName
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Nazwisko"
                      maxLength={100}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.lastName}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nazwisko
                    </label>
                    <input
                      type="text"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.email
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Email"
                      maxLength={100}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Password Input */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Hasło
                    </label>
                    <input
                      type="text"
                      id="password"
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.password
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Hasło"
                      maxLength={100}
                    />
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.empasswordail}
                      </p>
                    )}
                  </div>

                  {/* User Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Typ użytkownika
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {userTypeOptions.map((userType) => (
                        <button
                          key={userType}
                          type="button"
                          onClick={() =>
                            handleInputChange("userType", userType.toString())
                          }
                          className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                            formData.userType === userType.toString()
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {userType}
                        </button>
                      ))}
                    </div>
                    {errors.userType && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.userType}
                      </p>
                    )}
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={closeDialog}
                    className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Anuluj
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Zapisz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateUserDialog;
