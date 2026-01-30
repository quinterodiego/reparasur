interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex h-full gap-4 rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-2xl">
        {icon}
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 flex-1 text-sm text-slate-600">{description}</p>
      </div>
    </div>
  );
}
