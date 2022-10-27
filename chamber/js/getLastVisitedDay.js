const getLastVisitedDay = () =>
  localStorage.getItem("lastDayVisitedDiscoverPage");

const setLastVisitedDay = () => {
  const currentDate = new Date();

  localStorage.setItem("lastDayVisitedDiscoverPage", currentDate);
};

const getDifferenceInDays = (lastVisitDate) => {
  const lastVisitDate2 = new Date(lastVisitDate);
  const currentDate = new Date();

  // To calculate the time difference of two dates
  const differenceInTime = currentDate.getTime() - lastVisitDate2.getTime();

  // To calculate the no. of days between two dates
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return Math.floor(differenceInDays);
};

const printLastVisitedDay = () => {
  const bannerMessage = document.querySelector("span#bannerMessage");

  const lastDayVisitedDiscoverPage = getLastVisitedDay();

  if (!lastDayVisitedDiscoverPage) {
    bannerMessage.textContent = "0 days from your last visit";
    setLastVisitedDay();
    return;
  }

  const differenceInDays = getDifferenceInDays(lastDayVisitedDiscoverPage);

  setLastVisitedDay();

  bannerMessage.textContent = `${differenceInDays} days from your last visit`;
};

printLastVisitedDay();
