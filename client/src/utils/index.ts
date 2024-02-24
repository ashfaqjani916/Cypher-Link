export const daysLeft = (deadlineInSeconds: number): number => {
  const currentTimeInSeconds = Math.floor(Date.now() / 1000);
  const difference = deadlineInSeconds - currentTimeInSeconds;
  const remainingDays = difference / (60 * 60 * 24); // Convert seconds to days

  return Math.floor(remainingDays);
};



export const calculateBarPercentage = (goal: number, raisedAmount: number): number => {
  const percentage = Math.round((raisedAmount * 100) / goal);

  return percentage;
};

export const checkIfImage = (url: string, callback: (isImage: boolean) => void): void => {
  const img = new Image();
  img.src = url;

  if (img.complete) callback(true);

  img.onload = () => callback(true);
  img.onerror = () => callback(false);
};
