export function format(amount: number, currency: "INR" | "USD" = "INR") {
  const locale = "en-IN";

  const options = {
    style: "currency",
    currency,
  };

  const formatter = new Intl.NumberFormat(locale, options);

  return formatter.format(amount);
}

export default {
  format,
};
