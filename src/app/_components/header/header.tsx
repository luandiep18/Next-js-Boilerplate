import { cn } from '@/lib/utils';
import * as React from 'react';

export type InputProps = {
  variant?: 'simple' | 'centered' | 'profile';
  icon?: React.ReactNode;
  title: React.ReactNode;
  iconAction?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLDivElement>;

const Header = React.forwardRef<HTMLDivElement, InputProps>(
  ({ className, variant = 'simple', icon, title, iconAction, ...props }, ref) => {
    const variantStyles = {
      simple: ' text-header-primary text-center',
      centered: ' text-center text-header-primary',
      profile: ' text-header-primary text-left',
    };

    return (
      <div
        ref={ref}
        className={cn(
          `pt-[46px] px-1 pb-2 flex ${variant === 'profile' && 'flex-row-reverse'} items-center ${variant === 'profile' ? 'justify-end' : 'justify-between'} bg-white gap-[6px] text-[21px] font-medium leading-7 ${variantStyles[variant]}`,
          className,
        )}
        {...props}
      >
        {icon && <div className="">{icon}</div>}
        <div className={`${variant !== 'profile' && 'flex-1'}`}>{title}</div>
        {variant === 'centered' && iconAction && <div className="">{iconAction}</div>}
      </div>
    );
  },
);
Header.displayName = 'Header';

export default Header;
