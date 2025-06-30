interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function TypographyH1({ children, className }: TypographyProps) {
  const base =
    "scroll-m-20 text-5xl font-extrabold tracking-tight text-balance";
  return (
    <h1 className={className ? `${className} ${base}` : base}>{children}</h1>
  );
}

export function TypographyH2({ children, className }: TypographyProps) {
  const base =
    "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0";
  return (
    <h2 className={className ? `${className} ${base}` : base}>{children}</h2>
  );
}

export function TypographyH3({ children, className }: TypographyProps) {
  const base = "scroll-m-20 text-2xl font-semibold tracking-tight";
  return (
    <h3 className={className ? `${className} ${base}` : base}>{children}</h3>
  );
}

export function TypographyH4({ children, className }: TypographyProps) {
  const base = "scroll-m-20 text-xl font-semibold tracking-tight";
  return (
    <h4 className={className ? `${className} ${base}` : base}>{children}</h4>
  );
}

export function TypographyP({ children, className }: TypographyProps) {
  const base = "leading-7 [&:not(:first-child)]:mt-6";
  return (
    <p className={className ? `${className} ${base}` : base}>{children}</p>
  );
}

export function TypographyBlockquote({ children, className }: TypographyProps) {
  const base = "mt-6 border-l-2 pl-6 italic";
  return (
    <blockquote className={className ? `${className} ${base}` : base}>
      {children}
    </blockquote>
  );
}

export function TypographyTable({ children, className }: TypographyProps) {
  const base = "my-6 w-full overflow-y-auto";
  return (
    <div className={className ? `${className} ${base}` : base}>
      <table className="w-full">{children}</table>
    </div>
  );
}

export function TypographyList({ children, className }: TypographyProps) {
  const base = "my-6 ml-6 list-disc [&>li]:mt-2";
  return (
    <ul className={className ? `${className} ${base}` : base}>{children}</ul>
  );
}

export function TypographyInlineCode({ children, className }: TypographyProps) {
  const base =
    "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold";
  return (
    <code className={className ? `${className} ${base}` : base}>
      {children}
    </code>
  );
}

export function TypographyLead({ children, className }: TypographyProps) {
  const base = "text-muted-foreground text-xl";
  return (
    <p className={className ? `${className} ${base}` : base}>{children}</p>
  );
}

export function TypographyLarge({ children, className }: TypographyProps) {
  const base = "text-lg font-semibold";
  return (
    <div className={className ? `${className} ${base}` : base}>{children}</div>
  );
}

export function TypographySmall({ children, className }: TypographyProps) {
  const base = "text-sm leading-none font-medium";
  return (
    <small className={className ? `${className} ${base}` : base}>
      {children}
    </small>
  );
}

export function TypographyMuted({ children, className }: TypographyProps) {
  const base = "text-muted-foreground text-sm";
  return (
    <p className={className ? `${className} ${base}` : base}>{children}</p>
  );
}
