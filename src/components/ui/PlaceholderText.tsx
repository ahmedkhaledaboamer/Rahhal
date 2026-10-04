import { Fragment } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { isPlaceholder, splitPlaceholders } from '../../utils/text';

type PlaceholderTextProps = {text: string;};

/** Renders text, highlighting any [bracketed] part as an editable placeholder. */
export function PlaceholderText({ text }: PlaceholderTextProps) {
  const { t } = useLanguage();
  return (
    <>
      {splitPlaceholders(text).map((part, i) =>
      isPlaceholder(part) ?
      <mark key={i} className="ph" title={t.a11y.placeholderNote}>
            {part}
          </mark> :

      <Fragment key={i}>{part}</Fragment>

      )}
    </>);

}