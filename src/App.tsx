import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar';
import { BackToTop } from '@/components/ui/BackToTop';
import { GlowCursor } from '@/components/ui/GlowCursor';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { HomePage } from '@/pages/HomePage';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage';

function App() {
  return (
    <BrowserRouter>
      {/* Skip to main content (accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>

      {/* Global UI enhancements */}
      <AnimatedBackground />
      <ScrollProgressBar />
      <GlowCursor />
      <BackToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <main className="flex min-h-screen items-center justify-center">
              <div className="text-center">
                <h1 className="mb-4 text-6xl font-black text-slate-200 dark:text-slate-800">404</h1>
                <p className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                  Page Not Found
                </p>
                <p className="mb-6 text-slate-600 dark:text-slate-400">
                  The page you're looking for doesn't exist.
                </p>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-600"
                >
                  Go Home
                </a>
              </div>
            </main>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
