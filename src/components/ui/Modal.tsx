import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useBodyLock } from '../../hooks/useBodyLock';
import { EASE_OUT } from '../../utils/motion';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: React.ReactNode;
  size?: 'md' | 'lg' | 'xl';
};

const widths = { md: 'max-w-xl', lg: 'max-w-3xl', xl: 'max-w-5xl' };

export function Modal({ open, onClose, labelledBy, children, size = 'xl' }: ModalProps) {
  const { t, dir } = useLanguage();
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  useBodyLock(open);

  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement as HTMLElement;
    const id = window.setTimeout(() => panelRef.current?.focus(), 20);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && panelRef.current) trapFocus(e, panelRef.current);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(id);
      document.removeEventListener('keydown', onKey);
      lastFocus.current?.focus?.();
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open &&
      <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6" dir={dir}>
          <motion.div
          className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose} />
        
          <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
          tabIndex={-1}
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.25, ease: EASE_OUT }}
          className={`relative max-h-[92svh] w-full ${widths[size]} overflow-y-auto rounded-t-3xl bg-white shadow-lift focus:outline-none sm:rounded-3xl`}>
          
            <button
            type="button"
            onClick={onClose}
            aria-label={t.a11y.close}
            className="absolute end-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-soft backdrop-blur transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
            
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {children}
          </motion.div>
        </div>
      }
    </AnimatePresence>,
    document.body
  );
}

function trapFocus(e: KeyboardEvent, root: HTMLElement) {
  const nodes = root.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (!nodes.length) return;
  const first = nodes[0];
  const last = nodes[nodes.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}