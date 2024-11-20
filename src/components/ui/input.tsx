import { cn } from '@/lib/utils';
import * as React from 'react';

export type InputProps = {
  icon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className={cn(`flex box-border items-center rounded-[8px] border border-border-gray p-[11px] bg-white ${icon && 'space-x-2'}`, className)}>
        <input
          type={type}
          className="flex w-full border-0  file:bg-transparent disabled:cursor-not-allowed disabled:opacity-50"
          ref={ref}
          {...props}
        />
        {icon && <span className="">{icon}</span>}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
