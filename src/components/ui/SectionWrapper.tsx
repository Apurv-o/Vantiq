import React from 'react';

export interface SectionWrapperProps {
  id: string;
  tag?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  tag,
  title,
  description,
  children,
  className = '',
  ariaLabel,
}) => {
  return (
    <section
      id={id}
      aria-label={ariaLabel || title}
      className={`section-wrapper ${className}`}
    >
      <div className="vantiq-container">
        <header className="section-header">
          {tag && <span className="section-tag">{tag}</span>}
          <h2 className="section-title">{title}</h2>
          {description && <p className="section-description">{description}</p>}
        </header>
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
};
