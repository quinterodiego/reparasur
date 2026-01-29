interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="flex gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-white shadow-lg shadow-emerald-500/30">
          {number}
        </div>
        <div className="flex-1 pb-8">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-slate-600">{description}</p>
        </div>
      </div>
      {number < 4 && (
        <div className="absolute left-6 top-12 h-full w-0.5 bg-gradient-to-b from-emerald-200 to-transparent" />
      )}
    </div>
  );
}
