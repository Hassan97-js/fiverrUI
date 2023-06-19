function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value);
}

function getRatingAverage(totalStars, starNumber) {
  if (!totalStars) {
    totalStars = 1;
  }

  if (!starNumber) {
    starNumber = 1;
  }

  return Math.round(totalStars / starNumber);
}

export { getRatingAverage, formatCurrency };
