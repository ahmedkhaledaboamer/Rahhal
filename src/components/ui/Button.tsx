import React, { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type Variant = 'gold' | 'primary' | 'outline' | 'glass' | 'whatsapp' | 'ghost' | 'light';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  iconEnd?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = CommonProps & {href: string;external?: boolean;} & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'className' | 'children' | 'href'>;

type NativeButtonProps = CommonProps & {href?: undefined;} & Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'className' | 'children'>;

export type ButtonProps = LinkProps | NativeButtonProps;

const base =
'relative inline-flex items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap select-none ' +
'transition-[background-color,color,box-shadow,border-color,transform] duration-200 ease-brand ' +
'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ' +
'active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60';

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-14 px-8 text-base'
};

const variants: Record<Variant, string> = {
  gold: 'btn-shimmer bg-gold text-ink shadow-gold hover:bg-gold-light',
  primary: 'bg-primary-dark text-white shadow-soft hover:bg-primary-deep',
  outline: 'border border-primary-dark/25 bg-white text-primary-dark hover:border-primary-dark hover:bg-primary-light',
  glass: 'border border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white/20',
  whatsapp: 'bg-dome text-white shadow-soft hover:bg-[#186640]',
  ghost: 'text-primary-dark hover:bg-primary-light',
  light: 'bg-white text-primary-dark shadow-soft hover:bg-cloud'
};

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', icon, iconEnd, fullWidth, className = '', children } = props;
  const reduce = useReducedMotion();
  const magnetic = variant === 'gold' && !reduce;
  const ref = useRef<HTMLSpanElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 18, mass: 0.4 });
  const y = useSpring(my, { stiffness: 260, damping: 18, mass: 0.4 });

  const onMove = (e: React.PointerEvent) => {
    if (!magnetic || e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.18);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const classes = twMerge(base, sizes[size], variants[variant], fullWidth && 'w-full', className);
  const content =
  <>
      {icon}
      <span>{children}</span>
      {iconEnd}
    </>;


  let element: React.ReactNode;
  if (props.href !== undefined) {
    const { variant: _v, size: _s, icon: _i, iconEnd: _ie, fullWidth: _f, className: _c, children: _ch, external, href, ...rest } =
    props as LinkProps;
    element =
    <a
      href={href}
      className={classes}
      {...external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
      {...rest}>
      
        {content}
      </a>;

  } else {
    const { variant: _v, size: _s, icon: _i, iconEnd: _ie, fullWidth: _f, className: _c, children: _ch, type, ...rest } =
    props as NativeButtonProps;
    element =
    <button type={type ?? 'button'} className={classes} {...rest}>
        {content}
      </button>;

  }

  return (
    <motion.span
      ref={ref}
      style={magnetic ? { x, y } : undefined}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={fullWidth ? 'flex w-full' : 'inline-flex'}>
      
      {element}
    </motion.span>);

}