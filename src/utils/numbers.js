// CURRENCY FORMATTER FUNCTIONS
function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value);
}

export { formatCurrency };
