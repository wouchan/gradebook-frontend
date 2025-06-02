import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { createGrade } from "../api/grades";

const CreateGradeDialog = ({ enrollmentId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    assignmentName: "",
    grade: "",
  });
  const [errors, setErrors] = useState({});

  const gradeOptions = [2, 3, 4, 5];

  const openDialog = () => {
    setIsOpen(true);
    setFormData({ assignmentName: "", grade: "" });
    setErrors({});
  };

  const closeDialog = () => {
    setIsOpen(false);
    setFormData({ assignmentName: "", grade: "" });
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.assignmentName.trim()) {
      newErrors.assignmentName = "Nazwa jest wymagana";
    }

    if (!formData.grade) {
      newErrors.grade = "Ocena jest wymagana";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      const newGrade = {
        enrollmentId,
        assignmentName: formData.assignmentName.trim(),
        gradeValue: parseInt(formData.grade),
        weight: 1,
        comments: "",
      };

      console.log("New grade created: " + (await createGrade(newGrade)));

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
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group z-50"
        aria-label="Nowa ocena"
      >
        <Plus className="w-6 h-6 group-hover:scale-110 transition-transform" />
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
                  Nowa ocena
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
                  {/* Assignment Name Input */}
                  <div>
                    <label
                      htmlFor="assignmentName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nazwa Zadania
                    </label>
                    <input
                      type="text"
                      id="assignmentName"
                      value={formData.assignmentName}
                      onChange={(e) =>
                        handleInputChange("assignmentName", e.target.value)
                      }
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.assignmentName
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Wpisz nazwę zadania"
                      maxLength={100}
                    />
                    {errors.assignmentName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.assignmentName}
                      </p>
                    )}
                  </div>

                  {/* Grade Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ocena
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {gradeOptions.map((grade) => (
                        <button
                          key={grade}
                          type="button"
                          onClick={() =>
                            handleInputChange("grade", grade.toString())
                          }
                          className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                            formData.grade === grade.toString()
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {grade}
                        </button>
                      ))}
                    </div>
                    {errors.grade && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.grade}
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

export default CreateGradeDialog;
