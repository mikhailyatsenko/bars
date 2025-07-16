import clsx from 'clsx';

import { DEFAULT_VARIANT } from '../constants';
import { isHeading } from '../lib';
import { TextProps } from '../types';
import styles from './Text.module.css';

export const Text: React.FC<TextProps> = ({
  variant = DEFAULT_VARIANT,
  color,
  weight,
  className,
  children,
  ...props
}) => {
  const classes = clsx(
    styles[variant],
    color && styles[color],
    weight && styles[`weight${weight}`],
    className,
  );

  if (props.as === 'span') {
    const { as, ...rest } = props;
    return (
      <span className={classes} {...rest}>
        {children}
      </span>
    );
  }

  if (isHeading(props.as)) {
    const { as: Heading, ...rest } = props;
    return (
      <Heading className={classes} {...rest}>
        {children}
      </Heading>
    );
  }

  const { as, ...rest } = props;
  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  );
};
