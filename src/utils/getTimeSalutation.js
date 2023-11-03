export const getTimeSalutation = () => {
  const today = new Date();
  const hours = today.getHours();
  if (hours < 12) {
    return 'Good Morning';
  } else if (hours < 18) {
    return 'Good Afternoon';
  } else if (hours < 22) {
    return 'Good Evening';
  }
  return 'Good Night';
};
