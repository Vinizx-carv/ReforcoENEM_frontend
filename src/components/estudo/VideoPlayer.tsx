
import { ExternalLink, PlayCircle } from "lucide-react";

type VideoPlayerProps = {
  title: string;
  videoId?: string;
};

export function VideoPlayer({ title, videoId }: VideoPlayerProps) {
  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    `${title} ENEM aula`
  )}`;

  return (
    <section className="rounded-2xl border border-slate-200
      bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <PlayCircle className="text-blue-600" size={22} />
        <h2 className="text-lg font-bold text-slate-900">
          Aula em vídeo
        </h2>
      </div>

      {videoId ? (
        <div className="aspect-video overflow-hidden rounded-xl bg-slate-950">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(
              videoId
            )}`}
            title={`Aula sobre ${title}`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write;
              encrypted-media; gyroscope; picture-in-picture;
              web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ) : (
        <a
          href={searchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex aspect-video flex-col items-center
            justify-center rounded-xl bg-slate-950 p-6 text-center
            text-white transition hover:bg-slate-900"
        >
          <PlayCircle size={52} className="text-blue-400" />
          <span className="mt-3 font-semibold">
            Encontrar uma aula sobre {title}
          </span>
          <span className="mt-2 inline-flex items-center gap-2
            text-sm text-blue-300">
            Pesquisar no YouTube
            <ExternalLink size={15} />
          </span>
        </a>
      )}

      <p className="mt-3 text-xs leading-5 text-slate-500">
        Assista à aula e depois revise os principais conceitos.
      </p>
    </section>
  );
}
