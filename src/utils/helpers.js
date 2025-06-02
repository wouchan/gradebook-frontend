export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};

export const getGradeColor = (grade) => {
  if (grade >= 90) return "text-green-600";
  if (grade >= 80) return "text-green-500";
  if (grade >= 70) return "text-yellow-500";
  if (grade >= 60) return "text-orange-500";
  return "text-red-500";
};
