export const calculateTotalPrice = (skip) => {
 const total = skip.price_before_vat * (1 + skip.vat / 100);
 return Math.round(total);
};
