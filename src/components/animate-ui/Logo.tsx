'use client';

import { cn } from '@/lib/utils';
import { motion, type SVGMotionProps } from 'motion/react';
import { MiniDocLogo3D } from '@/components/minidoc/icons/CustomIcons';

const pathVariants = {
  hidden: {
    pathLength: 0,
    fillOpacity: 0,
  },
  visible: {
    pathLength: 1,
    fillOpacity: 1,
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
} as const;

const sizes = {
  xs: 20,
  sm: 24,
  md: 32,
  lg: 40,
  xl: 48,
};

export const Logo = ({
  draw = false,
  size = 'sm',
  className,
  containerClassName,
  ...props
}: {
  containerClassName?: string;
  draw?: boolean;
  size?: keyof typeof sizes;
} & SVGMotionProps<SVGSVGElement>) => {
  // Use the 3D black MiniDoc logo
  return (
    <div className={cn('relative', containerClassName)}>
      <MiniDocLogo3D size={sizes[size]} className={cn('text-neutral-900 dark:text-neutral-100', className)} />
      <span className="sr-only">Mini Doc</span>
    </div>
  );
};
