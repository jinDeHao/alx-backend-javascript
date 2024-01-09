const updateStudentGradeByCity = (arrayOfObjects, city, newGrades) => {
  if (!Array.isArray(arrayOfObjects)) {
    return [];
  }
  return arrayOfObjects
    .filter((item) => item.location === city)
    .map((item) => {
      const help = newGrades.filter((e) => item.id === e.studentId);
      if (help.length) {
        return {
          ...item,
          grade: help[0].grade,
        };
      }
      return {
        ...item,
        grade: 'N/A',
      };
    });
};

export default updateStudentGradeByCity;
