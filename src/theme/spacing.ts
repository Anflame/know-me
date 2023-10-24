// в MU большие объекты рисуют по сетке 8px (0.5rem), мелкие, типа иконок, по сетке 4px (0.25rem)
// в новых компонентах юзать только целые значения spacing, для привязки к сетке 8px
// и spacing(0.5), для мелких компонент, для сетки 4px
// spacing(0.5); 0.25rem (4px)
// spacing(1); 0.5rem (8px)
// spacing(2); 1rem (16px)
// spacing(3); 1.5rem (24px)
// spacing(4); 2rem (32px)
export const spacing = (factor: number) => `${0.5 * factor}rem`; // by default spacing(1) = 8px, which is 0.5rem now
export const remToPx = (value: string) => parseFloat(value) * 16;
export const pxToRem = (px: number) => `${px / 16}rem`;
