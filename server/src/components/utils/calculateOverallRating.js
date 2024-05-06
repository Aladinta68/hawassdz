export const calculateOverallRating = (ratings) => {
    if (ratings.length === 0) return null;
    const sumOfAverages = ratings.reduce((acc, rating) => {
      return acc + (rating.stars || 0);
    }, 0);
    const overallRating = sumOfAverages / ratings.length;
    return overallRating;
  };