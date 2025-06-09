export const getSkipRecommendation = (size) => {
 if (size <= 6) return "Perfect for home clearance";
 if (size <= 12) return "Great for renovation projects";
 if (size <= 20) return "Ideal for construction work";
 return "Commercial projects";
};
