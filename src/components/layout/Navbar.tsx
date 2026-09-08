import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { scrollToSection, isPlaceholder } from '@/lib/utils';
import { useScrolled, useScrollSpy } from '@/hooks/useScrollSpy';
import { useTheme } from '@/hooks/useTheme';
import { navItems, profile } from '@/data/profile';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isScrolled = useScrolled(20);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith('#') && isHomePage) {
        e.preventDefault();
        const sectionId = href.slice(1);
        scrollToSection(sectionId);
        closeMobileMenu();
      } else {
        closeMobileMenu();
      }
    },
    [isHomePage, closeMobileMenu]
  );

  const hasResume = profile.resumeUrl && !isPlaceholder(profile.resumeUrl);

  return (
    <header
      role="banner"
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-slate-200/50 bg-white/90 shadow-sm backdrop-blur-md dark:border-slate-800/50 dark:bg-navy-900/90'
          : 'bg-transparent'
      )}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="section-container flex h-16 items-center justify-between"
      >
        {/* Logo / Name */}
        <Link
          to="/"
          className="group flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100"
          aria-label="Home"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 text-sm font-bold text-white transition-transform duration-200 group-hover:scale-110">
            {profile.name === '[FULL_NAME]' ? 'P' : profile.name.charAt(0).toUpperCase()}
          </div>
          <span className="hidden text-sm font-semibold sm:block">
            {profile.name === '[FULL_NAME]' ? 'Portfolio' : profile.name.split(' ')[0]}
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-1 lg:flex" role="list">
          {navItems.map((item) => {
            const isActive = activeSection === item.id && isHomePage;
            return (
              <li key={item.id}>
                <a
                  href={isHomePage ? item.href : `/${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    'relative px-3 py-2 text-sm font-medium transition-colors duration-200',
                    'rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
                    isActive
                      ? 'text-primary-500 dark:text-primary-400'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-primary-500"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          {hasResume && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View resume (opens in new tab)"
              className="hidden sm:block"
            >
              <Button variant="outline" size="sm" leftIcon={<FileText size={14} />}>
                Resume
              </Button>
            </a>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isMobileMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-md dark:border-slate-800/50 dark:bg-navy-900/95 lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="section-container py-4">
              <ul className="space-y-1" role="list">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id && isHomePage;
                  return (
                    <li key={item.id}>
                      <a
                        href={isHomePage ? item.href : `/${item.href}`}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={cn(
                          'flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors',
                          isActive
                            ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400'
                            : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {hasResume && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block"
                >
                  <Button variant="primary" size="md" leftIcon={<FileText size={14} />} className="w-full">
                    View Resume
                  </Button>
                </a>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
