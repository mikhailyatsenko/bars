import { debounce } from '~/shared/lib';

export const updateHeight = debounce(
  (ref: React.RefObject<HTMLTextAreaElement | null>, maxRows?: number | null) => {
    const current = ref?.current;
    if (!current) return;

    current.style.height = 'auto';

    const style = getComputedStyle(current);
    const lineHeight = parseFloat(style.lineHeight);
    const paddingBlockStart = parseFloat(style.paddingBlockStart);
    const paddingBlockEnd = parseFloat(style.paddingBlockEnd);

    const scrollHeight = current.scrollHeight;
    const paddingBlockHeight = paddingBlockStart + paddingBlockEnd;
    const maxHeight = lineHeight * (maxRows ?? Infinity) + paddingBlockHeight;

    if (scrollHeight <= maxHeight) {
      current.style.height = `${scrollHeight}px`;
      current.style.overflowY = 'hidden';
    } else {
      current.style.height = `${maxHeight}px`;
      current.style.overflowY = 'auto';
    }
  },
);
