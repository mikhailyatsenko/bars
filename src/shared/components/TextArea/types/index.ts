import type { ComponentProps, ReactNode } from 'react';

export type TextAreaResize = 'none' | 'both' | 'horizontal' | 'vertical' | 'verticalAuto';

export interface CommonTextAreaProps extends ComponentProps<'textarea'> {
  label: string;
  invalid?: boolean;
  hideLabel?: boolean;
  startSlot?: ReactNode;
}

export interface WithVerticalAutoResize {
  resize: 'verticalAuto';
  maxRows?: number;
}

interface WithoutVerticalAutoResize {
  resize?: Exclude<TextAreaResize, 'verticalAuto'>;
  maxRows: never;
}

export type TextAreaProps = CommonTextAreaProps &
  (WithoutVerticalAutoResize | WithVerticalAutoResize);
