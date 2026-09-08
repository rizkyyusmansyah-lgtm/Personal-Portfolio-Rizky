import { Heart } from 'lucide-react';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { scrollToSection } from '@/lib/utils';
import { getCurrentYear } from '@/lib/utils';
import { profile, navItems } from '@/data/profile';
import { cn } from '@/lib/utils';

export function Footer() {
  const year = getCurrentYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(href.slice(1));
    }
  };

  return (
    <footer
      role="contentinfo"
      className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-navy-900"
    >
      <div className="section-container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 text-sm font-bold text-white">
                {profile.name === '[FULL_NAME]' ? 'P' : profile.name.charAt(0).toUpperCase()}
              </div>
              <span className="font-bold text-slate-900 dark:text-slate-100">
                {profile.name === '[FULL_NAME]' ? 'Portfolio' : profile.name}
              </span>
            </div>
            <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
              {profile.title === '[PROFESSIONAL_TITLE]' ? 'Developer & Creator' : profile.title}
            </p>
            <SocialLinks github={profile.github} linkedin={profile.linkedin} email={profile.email} size="sm" />
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Navigation
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2" role="list">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-sm text-slate-500 transition-colors hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              More
            </h3>
            <nav aria-label="Footer secondary navigation">
              <ul className="space-y-2" role="list">
                {navItems.slice(5).map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-sm text-slate-500 transition-colors hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-slate-800 sm:flex-row">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            © {year}{' '}
            <span className="font-medium text-slate-700 dark:text-slate-300">
              {profile.name === '[FULL_NAME]' ? 'Portfolio' : profile.name}
            </span>
            . All rights reserved.
          </p>
          <p className={cn('flex items-center gap-1.5 text-sm text-slate-400 dark:text-slate-500')}>
            Built with{' '}
            <Heart
              size={12}
              className="fill-red-400 text-red-400"
              aria-hidden="true"
            />{' '}
            using React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
