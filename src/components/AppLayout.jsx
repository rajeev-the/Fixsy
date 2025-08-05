import React from 'react';
import GooeyNav from './GooeyNav.jsx';

const AppLayout = ({ children, showNavbar = false }) => {
  const items = [
    { label: "Home", href: "/home" },
    { label: "Rider", href: "/riding" },
    { label: "Profile", href: "/profile" },
  ];

  return (
    <div className="relative min-h-screen">
      {children}

      {showNavbar && (
        <div className="fixed bottom-0 left-0 w-full text-[#1E293B]  rounded-t-2xl px-10 bg-[#10B981]  py-3 z-50">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      )}
    </div>
  );
};

export default AppLayout;
