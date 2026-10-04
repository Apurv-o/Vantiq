import React, { useState, useEffect, useCallback } from 'react';
import { Logo } from '../ui/Logo';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const DESKTOP_NAV_ITEMS: NavItem[] = [
  { label: 'WORK', href: '#selected-work', id: 'selected-work' },
  { label: 'CAPABILITIES', href: '#capabilities', id: 'capabilities' },
  { label: 'LAB', href: '#product-lab', id: 'product-lab' },
  { label: 'STUDIO', href: '#studio-intro', id: 'studio-intro' },
  { label: 'INSIGHTS', href: '#insights', id: 'insights' },
  { label: 'CONTACT', href: '#commission', id: 'commission' },
];

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for transparent state over hero vs solid glass state after scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sectionIds = DESKTOP_NAV_ITEMS.map((item) => item.id);
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Prevent background scrolling while mobile drawer is open & handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#' || href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('');
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          height: '80px',
          transition: 'background-color var(--transition-base), border-color var(--transition-base), backdrop-filter var(--transition-base), box-shadow var(--transition-base)',
          backgroundColor: scrolled
            ? 'var(--color-bg-glass)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid var(--color-border-subtle)'
            : '1px solid transparent',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none',
        }}
      >
        <div
          className="vantiq-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          {/* Brand Wordmark & Geometric V */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            aria-label="VANTIQ STUDIO Home"
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
            }}
          >
            {DESKTOP_NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  aria-current={isActive ? 'true' : undefined}
                  style={{
                    position: 'relative',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    color: isActive ? 'var(--color-fg-primary)' : 'var(--color-fg-muted)',
                    transition: 'color var(--transition-fast)',
                    padding: '8px 2px',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--color-fg-primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--color-fg-muted)';
                  }}
                >
                  {item.label}
                  {/* Active Section Indicator Line */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'var(--color-accent-primary)',
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'center',
                      transition: 'transform var(--transition-base)',
                      borderRadius: '2px',
                    }}
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Hamburger Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="#commission"
              onClick={(e) => handleLinkClick(e, '#commission')}
              className="btn-primary"
              style={{
                padding: '9px 20px',
                fontSize: '0.8125rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Inquire
            </a>

            {/* Mobile Navigation Toggle Button */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-nav-toggle"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-bg-card)',
                border: '1px solid var(--color-border-subtle)',
                color: 'var(--color-fg-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '5px',
                transition: 'border-color var(--transition-fast), background-color var(--transition-fast)',
              }}
            >
              <span
                style={{
                  width: '20px',
                  height: '2px',
                  backgroundColor: 'currentColor',
                  transition: 'transform var(--transition-base)',
                  transform: mobileMenuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  width: '20px',
                  height: '2px',
                  backgroundColor: 'currentColor',
                  transition: 'opacity var(--transition-fast)',
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  width: '20px',
                  height: '2px',
                  backgroundColor: 'currentColor',
                  transition: 'transform var(--transition-base)',
                  transform: mobileMenuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 998,
          }}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(360px, 86vw)',
          backgroundColor: 'var(--color-bg-surface)',
          borderLeft: '1px solid var(--color-border-medium)',
          zIndex: 999,
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform var(--transition-smooth)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '24px 28px',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '40px',
            }}
          >
            <Logo size="sm" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-fg-muted)',
                backgroundColor: 'rgba(244, 240, 232, 0.05)',
                fontSize: '1.25rem',
              }}
            >
              &times;
            </button>
          </div>

          <nav aria-label="Mobile Primary Navigation" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {DESKTOP_NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  aria-current={isActive ? 'true' : undefined}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-sm)',
                    color: isActive ? 'var(--color-accent-primary)' : 'var(--color-fg-primary)',
                    backgroundColor: isActive ? 'var(--color-accent-subtle)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-accent-primary)',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '24px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)', marginBottom: '12px' }}>
            DIRECT COMMISSIONS
          </div>
          <a
            href="mailto:contact@vantiqstudio.com"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              color: 'var(--color-fg-primary)',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            contact@vantiqstudio.com
          </a>
          <a
            href="#commission"
            onClick={(e) => handleLinkClick(e, '#commission')}
            className="btn-primary"
            style={{ width: '100%' }}
          >
            Initiate Project
          </a>
        </div>
      </div>
    </>
  );
};
