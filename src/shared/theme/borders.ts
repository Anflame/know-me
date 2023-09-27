import { main, red } from './colors';
import { remToPx } from './spacing';

export const borderRadius: number = remToPx('0.25rem');

export interface ThemeBorder {
  default: string;
  error: string;
  solid: string[];
}

export const border: ThemeBorder = {
  default: `1px solid ${main.content}`,
  error: `1px solid ${red.alert}`,
  solid: [
    '0px solid',
    '1px solid',
    '2px solid',
    '3px solid',
    '4px solid',
    '5px solid',
    '6px solid',
  ],
};

export interface Shape {
  borderRadius: number | string;
}

export type ShapeOptions = Partial<Shape>;
