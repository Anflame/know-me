import dateFormat from 'dateformat';

export const getShortTime = (date: Date | string) => dateFormat(date, 'hh:MM');
