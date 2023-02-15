import { ReactNode } from 'react';

import { Header } from 'components';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      {children}
    </div>
  );
};
