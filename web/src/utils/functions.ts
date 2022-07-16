export const formatCurrency = (current: number): string =>
  current.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

export const formatDate = (date: string): string => {
  const options = {
    timeZone: "UTC", // Padrão o fuso horário é o UTC
    hour24: true, // Alterna entre a mostragem dos horários em 24 horas, ou então AM/PM
  };
  const locale = "pt-br";
  return new Date(date).toLocaleDateString(locale, options);
};
