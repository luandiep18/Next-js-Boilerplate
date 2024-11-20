import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import * as React from 'react';

const buttonVariants = cva(
  'inline-flex  w-full items-center justify-center whitespace-nowrap  rounded-md text-base font-medium  transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        outline:
          'border border-border-primary',
        // secondary:
        //   '',
        // link: '',
      },
      size: {
        default: 'px-4 py-3',
        // sm: 'h-9 rounded-md px-3',
        // lg: 'h-11 rounded-md px-8',
        // icon: 'size-10',
      },
      rounded: {
        full: 'rounded-full',
      },
      textcolor: {
        primary: 'text-text-primary',
        neutral: 'text-text-neutral',
        link: 'text-text-link',
        primarypale: 'text-text-primarypale',
        white: 'text-white',
      },
      background: {
        primary: 'bg-backGround-primary',
        primarypale: 'bg-backGround-primarypale',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type ButtonProps = {
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, textcolor, background, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, textcolor, background, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
