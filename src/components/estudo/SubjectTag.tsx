
import { CheckCircle2, ChevronRight } from "lucide-react";

type SubjectTagProps = {
  title: string;
  completed?: boolean;
  onClick: () => void;
};

export function SubjectTag({
  title,
  completed = false,
  onClick,
}: SubjectTagProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex items-center gap-2 rounded-xl
        border border-slate-200 bg-white px-4 py-3 text-left
        text-sm font-medium text-slate-700 transition
        hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-blue-500"
    >
      {completed ? (
        <CheckCircle2
          size={16}
          className="text-emerald-600"
        />
      ) : (
        <span className="h-2 w-2 rounded-full bg-blue-400" />
      )}

      <span>{title}</span>

      <ChevronRight
        size={15}
        className="ml-1 text-slate-400 transition
          group-hover:translate-x-0.5 group-hover:text-blue-600"
      />
    </button>
  );
}
