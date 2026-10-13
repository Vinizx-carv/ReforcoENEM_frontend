
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Search, Target } from "lucide-react";
import { subjectCategories } from "../data/subjects";
import { SubjectSection } from "../components/estudo/SubjectSection";

export function StudyPage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredCategories = useMemo(() => {
    const term = search.trim().toLocaleLowerCase("pt-BR");

    return subjectCategories
      .map((category) => ({
        ...category,
        subjects: category.subjects.filter((subject) =>
          subject.title.toLocaleLowerCase("pt-BR").includes(term)
        ),
      }))
      .filter((category) => category.subjects.length > 0);
  }, [search]);

  function handleSelectSubject(subjectId: string) {
    navigate(`/estudar/${subjectId}`);
  }

  return (
    <div className="min-h-screen bg-slate-50">


      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl
          bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700
          p-6 text-white shadow-lg sm:p-10">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full
              border border-white/20 bg-white/10 px-3 py-1 text-xs
              font-semibold text-blue-50">
              <BookOpen size={14} />
              SUA JORNADA ENEM
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight
              sm:text-4xl">
              O próximo passo começa com um assunto.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100
              sm:text-base">
              Escolha uma matéria, estude no seu ritmo e avance
              na preparação para o ENEM.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm
              text-blue-100">
              <Target size={18} />
              <span>Aprenda, pratique e acompanhe seu progresso.</span>
            </div>
          </div>

          <BookOpen
            size={190}
            strokeWidth={0.8}
            className="absolute -bottom-12 -right-8 hidden
              text-white/10 sm:block"
          />
        </section>

        <section className="mt-8">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-slate-900">
              Explore as matérias
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Selecione um assunto para acessar os materiais de estudo.
            </p>
          </div>

          <div className="relative mb-6">
            <Search
              size={19}
              className="absolute left-4 top-1/2
                -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar um assunto, como porcentagem..."
              aria-label="Buscar assunto"
              className="w-full rounded-xl border border-slate-200
                bg-white py-3.5 pl-11 pr-4 text-sm text-slate-800
                outline-none transition placeholder:text-slate-400
                focus:border-blue-500 focus:ring-4
                focus:ring-blue-100"
            />
          </div>

          <div className="grid gap-5">
            {filteredCategories.map((category) => (
              <SubjectSection
                key={category.id}
                category={category}
                onSelectSubject={handleSelectSubject}
              />
            ))}

            {filteredCategories.length === 0 && (
              <div className="rounded-2xl border border-dashed
                border-slate-300 bg-white p-10 text-center">
                <Search
                  size={30}
                  className="mx-auto text-slate-400"
                />
                <h3 className="mt-3 font-semibold text-slate-800">
                  Nenhum assunto encontrado
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Tente outro termo de pesquisa.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
