
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionContainer = ({
  title,
  subtitle,
  children,
  className,
  id
}: SectionContainerProps) => {
  return (
    <section id={id} className={cn('py-16', className)}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">{title}</h2>
        
        {subtitle && (
          <p className="text-lg text-stone mb-10 max-w-3xl">{subtitle}</p>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
