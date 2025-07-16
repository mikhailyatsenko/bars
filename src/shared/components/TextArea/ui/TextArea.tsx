import clsx from 'clsx';
import { useCallback, useEffect, useRef } from 'react';

import { Text } from '~/shared/components/Text';
import { useCombinedRef } from '~/shared/hooks';

import type { TextAreaProps } from '../types';

import { DEFAULT_RESIZE, DEFAULT_ROWS } from '../constants';
import { updateHeight } from '../lib';
import styles from './TextArea.module.css';

export const TextArea: React.FC<TextAreaProps> = ({
  ref,
  value,
  onChange,
  label,
  resize = DEFAULT_RESIZE,
  rows = DEFAULT_ROWS,
  invalid,
  className,
  hideLabel,
  maxRows,
  startSlot,
  ...rest
}) => {
  const innerRef = useRef<HTMLTextAreaElement>(null);
  const combinedRef = useCombinedRef(ref, innerRef);

  const isAutoResize = resize === 'verticalAuto';

  const handleUpdateHeight = useCallback(() => {
    if (isAutoResize) updateHeight(innerRef, maxRows);
  }, [isAutoResize, maxRows]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleUpdateHeight();
    onChange?.(event);
  };

  useEffect(handleUpdateHeight, [handleUpdateHeight, value]);

  useEffect(() => {
    if (!innerRef.current) return;

    const observer = new ResizeObserver(handleUpdateHeight);
    observer.observe(innerRef.current);

    return () => observer.disconnect();
  }, [handleUpdateHeight]);

  return (
    <label className={styles.container}>
      <Text as='span' className={clsx({ hidden: hideLabel })}>
        {label}
      </Text>
      <div className={clsx(styles.areaWrapper, { [styles.invalid]: invalid })}>
        {startSlot && <span className={clsx(styles.slot, styles.startSlot)}>{startSlot}</span>}
        <textarea
          ref={combinedRef}
          aria-invalid={invalid}
          rows={rows}
          value={value}
          onChange={handleChange}
          className={clsx(
            styles.textArea,
            styles[resize],
            {
              [styles.padStart]: Boolean(startSlot),
            },
            className,
          )}
          {...rest}
        />
      </div>
    </label>
  );
};
