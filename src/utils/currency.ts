export function formatCurrency(
  amount: number,
  currency: "INR" | "USD" = "INR"
) {
  try {
    const locale = "en-IN";

    const options = {
      style: "currency",
      currency,
    };

    const formatter = new Intl.NumberFormat(locale, options);

    return formatter.format(amount);
  } catch (error: unknown) {
    return "0.00";
  }
}
