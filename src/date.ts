export const getDateBetween = (start: Date, end: Date): Date => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

export const getRandomDateFuture = (futureYear?: number): Date | Error => {
  // optional parameter introduced to set default limit of 50 years into the future.
  // Upper limit for future date range is last day of year range. 
  const currentDate = new Date();
  const currentDateEpoch = currentDate.getTime();
  const currentYear = currentDate.getFullYear();
  const defaultYearLimit = 50;

  const yearLimitForFuture = futureYear ? futureYear : (currentYear + defaultYearLimit);

  if (yearLimitForFuture < currentYear) {
    // error handling to tackle user selected year is less than current year.
    return new Error("Future year cannot be less than current year")
  }

  if (yearLimitForFuture === currentYear) {
    // if user selected year is same as current year. 
    const yearEndDate = new Date(currentYear, 12, 0);
    const diffInEpoch = yearEndDate.getTime() - currentDateEpoch;
    return new Date(currentDateEpoch + Math.random() * diffInEpoch);
  } else {
    const futureDateLimitEpoch = new Date(yearLimitForFuture, 12, 0).getTime();

    const diffInEpoch = futureDateLimitEpoch - currentDateEpoch;
    return new Date(currentDateEpoch + Math.random() * diffInEpoch);
  }
};
