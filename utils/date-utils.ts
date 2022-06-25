import dayjs from "dayjs";

export const formatDate = (date: string): string =>
  dayjs(date).format("MMM DD, YYYY HH:mm:ss น.");

  export const formatDateWithoutTime = (date: string): string =>
  dayjs(date).format("MMM DD, YYYY");
