export type TextTypes =
  | 'display'
  | 'heading-lg'
  | 'heading-sm'
  | 'subtitle-lg'
  | 'subtitle-sm'
  | 'paragraph-lg'
  | 'paragraph-sm'
  | 'label';

export type TextWeights =
  | 'normal'
  | 'medium'
  | 'semi-bold'
  | 'bold'
  | 'extra-bold';

export type ColorLevels =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type Spacing =
  | '2x-sm'
  | 'x-sm'
  | 'sm'
  | 'm'
  | 'big'
  | 'x-big'
  | '2x-big'
  | '3x-big'
  | '4x-big'
  | 'lg'
  | 'x-lg'
  | '2x-lg'
  | '3x-lg'
  | 'huge'
  | 'x-huge';

export type ColorTypes =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'active'
  | 'success'
  | 'warning'
  | 'error'
  | 'shade';

export type Colors =
  | `${Exclude<ColorTypes, 'shade'>}-${ColorLevels}`
  | 'shade-0'
  | 'shade-100';
