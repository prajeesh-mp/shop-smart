export function formatDate(epoch: number, locale = "en-in") {
  try {
    const date = new Date(epoch);

    const formatter = Intl.DateTimeFormat(locale, {
      dateStyle: "long",
    });

    return formatter.format(date);
  } catch (error: unknown) {
    return "";
  }
}
