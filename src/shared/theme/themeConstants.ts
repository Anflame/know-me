import { spacing } from './spacing';

export interface ThemeConstants {
  itemMinWidth: string;
  itemMinHeight: string;
  paperMinWidth: string;
  shadowLevelOne: string;
  shadowLevelTwo: string;
}
export const themeConstants: ThemeConstants = {
  itemMinWidth: spacing(6),
  itemMinHeight: spacing(2),
  paperMinWidth: spacing(24),
  shadowLevelOne: '0px 0px 2px rgba(41, 41, 64, 0.07)',
  shadowLevelTwo: '0px 0px 10px -2px rgba(0,0,0,0.5)',
};
