export const formatNumber = (value: number): string =>
  Number.isNaN(value)
    ? "0.00"
    : Number(value).toLocaleString("en-Us", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
