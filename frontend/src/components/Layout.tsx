// File updated: April 5, 2025
// Optimized Spline 3D background loading performance

import { useEffect, Suspense, lazy, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';

// Preload Spline for faster initialization
import('@splinetool/react-spline');

// Dynamically import Spline to avoid SSR issues but with lower suspense delay
const Spline = lazy(() => import('@splinetool/react-spline'));

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isDarkMode } = useTheme();
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    // Control animations based on scroll position
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          element.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fadeIn, .slideUp, .slideRight, .scaleIn');
    animatedElements.forEach((element) => observer.observe(element));

    // Preload the Spline scene to make it load faster
    const preloadSpline = async () => {
      try {
        // Preload the thumbnail image to warm up the connection
        const preloadImage = new Image();
        preloadImage.src = "https://prod.spline.design/5Nh9zijIPIazVTZH/thumbnail.jpg";
        
        // Preload the Spline script to prevent delay when component mounts
        await import('@splinetool/react-spline');
        setSplineLoaded(true);
      } catch (error) {
        console.error("Error preloading Spline:", error);
      }
    };
    
    preloadSpline();

    return () => {
      animatedElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background antialiased overflow-x-hidden relative">
      {/* Spline 3D Background with higher priority loading */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40">
        <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
          <Spline
            scene="https://prod.spline.design/5Nh9zijIPIazVTZH/scene.splinecode"
            onLoad={() => console.log("Spline scene loaded")}
          />
        </Suspense>
      </div>
      
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
