

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  FileText,
  Lightbulb,
  NotebookPen,
} from "lucide-react";

import { subjectCategories } from "../data/subjects";
import { VideoPlayer } from "../components/estudo/VideoPlayer";
import { RelatedSubjects } from "../components/estudo/RelatedSubjects";

export function SubjectPage() {
  const { subjectId } = useParams();
  const navigate = useNavigate();

  const [completed, setCompleted] = useState(false);
  const [notes, setNotes] = useState("");

  const allSubjects = subjectCategories.flatMap((category) =>
    category.subjects.map((subject) => ({
      ...subject,
      categoryTitle: category.title,
    }))
  );

  const subject = allSubjects.find((item) => item.id === subjectId);

  if (!subject) {
    return (
      <div className="min-h-screen bg-slate-50">

        <main className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Assunto não encontrado
          </h1>
          <p className="mt-2 text-slate-500">
            Esse conteúdo não existe ou não está disponível.
          </p>
          <button
            onClick={() => navigate("/estudar")}
            className="mt-5 rounded-xl bg-blue-600 px-5 py-3
              font-semibold text-white hover:bg-blue-700"
          >
            Voltar aos assuntos
          </button>
        </main>
      </div>
    );
  }

  const relatedSubjects = subject.relatedSubjectIds
    .map((id) => allSubjects.find((item) => item.id === id))
    .filter((item) => item !== undefined);

  return (
    <div className="min-h-screen bg-slate-50">


      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate("/estudar")}
          className="mb-6 inline-flex items-center gap-2
            text-sm font-medium text-slate-500 transition
            hover:text-blue-700"
        >
          <ArrowLeft size={17} />
          Todas as matérias
        </button>

        <section className="rounded-2xl border border-blue-100
          bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
          <span className="inline-flex items-center rounded-full
            bg-blue-100 px-3 py-1 text-xs font-semibold
            text-blue-700">
            {subject.categoryTitle}
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight
            text-slate-900 sm:text-4xl">
            {subject.title}
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-6
            text-slate-600 sm:text-base">
            {subject.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={subject.studyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl
                bg-blue-600 px-5 py-3 text-sm font-semibold
                text-white shadow-sm transition hover:bg-blue-700"
            >
              <BookOpen size={17} />
              Estudar material
              <ExternalLink size={15} />
            </a>

            <button
              type="button"
              onClick={() => setCompleted((value) => !value)}
              className={`inline-flex items-center gap-2 rounded-xl
                border px-5 py-3 text-sm font-semibold transition ${
                  completed
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-slate-200 bg-white text-slate-700 hover:border-blue-300"
                }`}
            >
              <CheckCircle2 size={17} />
              {completed ? "Concluído" : "Marcar como concluído"}
            </button>
          </div>
        </section>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0 space-y-6">
            <VideoPlayer
              title={subject.title}
              videoId={subject.youtubeVideoId}
            />

            <RelatedSubjects
              subjects={relatedSubjects}
              onSelect={(id) => navigate(`/estudar/${id}`)}
            />
          </div>

          <aside className="space-y-5">
            <section className="rounded-2xl border border-slate-200
              bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <Lightbulb size={20} className="text-blue-600" />
                <h2 className="font-bold text-slate-900">
                  Estratégia de estudo
                </h2>
              </div>

              <ol className="mt-4 space-y-4 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0
                    items-center justify-center rounded-full
                    bg-blue-100 text-xs font-bold text-blue-700">
                    1
                  </span>
                  Leia o material e identifique os conceitos principais.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0
                    items-center justify-center rounded-full
                    bg-blue-100 text-xs font-bold text-blue-700">
                    2
                  </span>
                  Assista à aula e registre suas dúvidas.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0
                    items-center justify-center rounded-full
                    bg-blue-100 text-xs font-bold text-blue-700">
                    3
                  </span>
                  Resolva questões do ENEM sobre o assunto.
                </li>
              </ol>
            </section>

            <section className="rounded-2xl border border-slate-200
              bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <NotebookPen size={20} className="text-blue-600" />
                <h2 className="font-bold text-slate-900">
                  Minhas anotações
                </h2>
              </div>

              <textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="Registre fórmulas, conceitos e dúvidas..."
                rows={6}
                className="mt-4 w-full resize-y rounded-xl
                  border border-slate-200 p-3 text-sm
                  text-slate-700 outline-none placeholder:text-slate-400
                  focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

              <p className="mt-2 text-xs text-slate-400">
                As anotações ainda não são salvas permanentemente.
              </p>
            </section>

            <section className="rounded-2xl bg-blue-600 p-5 text-white">
              <FileText size={24} />
              <h2 className="mt-3 font-bold">
                Pratique o que aprendeu
              </h2>
              <p className="mt-2 text-sm leading-5 text-blue-100">
                O próximo passo ideal é resolver questões anteriores
                do ENEM relacionadas a este conteúdo.
              </p>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
