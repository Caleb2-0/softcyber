export const getExperience = (startYear: number) => {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};
