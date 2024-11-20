import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = {
  excludedPaths: string[];
};

export default function useShowHeader({ excludedPaths }: Props) {
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const isExcluded = excludedPaths.some(item => pathname.includes(item));
    setShowHeader(!isExcluded);
  }, [pathname, excludedPaths]);

  return { showHeader };
}
