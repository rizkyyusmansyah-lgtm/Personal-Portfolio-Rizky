import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { isPlaceholder } from '@/lib/utils';

interface SocialLinksProps {
  github: string;
  linkedin: string;
  email: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

const sizeMap = {
  sm: { icon: 16, container: 'h-8 w-8' },
  md: { icon: 18, container: 'h-10 w-10' },
  lg: { icon: 20, container: 'h-12 w-12' },
};

export function SocialLinks({
  github,
  linkedin,
  email,
  className,
  size = 'md',
  showLabels = false,
}: SocialLinksProps) {
  const { icon: iconSize, container } = sizeMap[size];

  const links = [
    {
      label: 'GitHub',
      href: isPlaceholder(github) ? undefined : github,
      icon: <Github size={iconSize} />,
      ariaLabel: 'GitHub profile',
    },
    {
      label: 'LinkedIn',
      href: isPlaceholder(linkedin) ? undefined : linkedin,
      icon: <Linkedin size={iconSize} />,
      ariaLabel: 'LinkedIn profile',
    },
    {
      label: 'Email',
      href: isPlaceholder(email) ? undefined : `mailto:${email}`,
      icon: <Mail size={iconSize} />,
      ariaLabel: 'Send email',
    },
  ];

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {links.map(({ label, href, icon, ariaLabel }) => {
        if (!href) return null;
        return (
          <a
            key={label}
            href={href}
            target={label !== 'Email' ? '_blank' : undefined}
            rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
            aria-label={ariaLabel}
            className={cn(
              'flex items-center justify-center rounded-lg',
              'text-slate-500 transition-all duration-200',
              'hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-500/10 dark:hover:text-primary-400',
              'border border-transparent hover:border-primary-200 dark:hover:border-primary-500/30',
              container,
              showLabels && 'w-auto gap-2 px-3'
            )}
          >
            {icon}
            {showLabels && (
              <span className="text-sm font-medium">
                {label}
                <ExternalLink size={12} className="ml-1 inline" />
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}
