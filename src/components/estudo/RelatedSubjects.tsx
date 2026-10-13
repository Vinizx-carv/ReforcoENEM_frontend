
import { ArrowUpRight, BookOpen } from "lucide-react";
import type { Subject } from "../../data/subjects";

type RelatedSubjectsProps = {
  subjects: Subject[];
  onSelect: (id: string) => void;
};

export function RelatedSubjects({
  subjects,
  onSelect,
}: RelatedSubjectsProps) {
  if (subjects.length === 0) return null;

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-slate-900">
          Continue estudando
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Assuntos que complementam seu aprendizado.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            type="button"
            onClick={() => onSelect(subject.id)}
            className="group flex items-start gap-3 rounded-xl
              border border-slate-200 bg-white p-4 text-left
              transition hover:border-blue-400 hover:shadow-sm"
          >
            <div className="rounded-lg bg-blue-50 p-2
              text-blue-600">
              <BookOpen size={20} />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-slate-800
                group-hover:text-blue-700">
                {subject.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm
                leading-5 text-slate-500">
                {subject.description}
              </p>
            </div>

            <ArrowUpRight
              size={17}
              className="shrink-0 text-slate-400
                group-hover:text-blue-600"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
