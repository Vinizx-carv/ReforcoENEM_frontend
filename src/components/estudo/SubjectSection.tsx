
import { BookOpen } from "lucide-react";
import type { SubjectCategory } from "../../data/subjects";
import { SubjectTag } from "./SubjectTag";

type SubjectSectionProps = {
  category: SubjectCategory;
  onSelectSubject: (subjectId: string) => void;
  completedIds?: string[];
};

const categoryStyles: Record<string, string> = {
  matematica: "bg-blue-100 text-blue-700",
  linguagens: "bg-violet-100 text-violet-700",
  "ciencias-humanas": "bg-amber-100 text-amber-700",
  "ciencias-natureza": "bg-emerald-100 text-emerald-700",
};

export function SubjectSection({
  category,
  onSelectSubject,
  completedIds = [],
}: SubjectSectionProps) {
  return (
    <section className="rounded-2xl border border-slate-200
      bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5 flex items-start gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center
            justify-center rounded-xl ${
              categoryStyles[category.id] ??
              "bg-blue-100 text-blue-700"
            }`}
        >
          <BookOpen size={21} />
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900">
            {category.title}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {category.area}
          </p>
          <p className="mt-1 text-xs text-slate-400">
            {category.subjects.length} assuntos disponíveis
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.subjects.map((subject) => (
          <SubjectTag
            key={subject.id}
            title={subject.title}
            completed={completedIds.includes(subject.id)}
            onClick={() => onSelectSubject(subject.id)}
          />
        ))}
      </div>
    </section>
  );
}
