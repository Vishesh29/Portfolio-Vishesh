export const calculateExperience = (startDate: string) => {
    const currentDate = new Date();
    const startDateObj = new Date(startDate);

    let experienceYears = currentDate.getFullYear() - startDateObj.getFullYear();
    let experienceMonths = currentDate.getMonth() - startDateObj.getMonth();
    if (experienceMonths < 0 || (experienceMonths === 0 && currentDate.getDate() < startDateObj.getDate())) {
      experienceYears--;
      experienceMonths += 12;
    }
    return `${experienceYears}.${experienceMonths}`;
  };