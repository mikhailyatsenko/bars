import { ComponentProps } from 'react';

export type TextVariant =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'title4'
  | 'text1'
  | 'text2'
  | 'caption1'
  | 'button1'
  | 'badge1'
  | 'badge2';

export type TextColor =
  | 'primary'
  | 'secondary'
  | 'content1'
  | 'content2'
  | 'content3'
  | 'white'
  | 'success'
  | 'error';

export type TextWeight = 400 | 500 | 600 | 700;

export type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface CommonTextProps {
  variant?: TextVariant;
  weight?: TextWeight;
  color?: TextColor;
}

interface TextAsParagraphProps extends CommonTextProps, Omit<ComponentProps<'p'>, 'color'> {
  as?: 'p';
}

interface TextAsHeadingProps extends CommonTextProps, Omit<ComponentProps<'h1'>, 'color'> {
  as: Heading;
}

interface TextAsSpanProps extends CommonTextProps, Omit<ComponentProps<'span'>, 'color'> {
  as: 'span';
}

export type TextProps = TextAsParagraphProps | TextAsHeadingProps | TextAsSpanProps;
