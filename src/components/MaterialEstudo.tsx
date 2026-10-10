import { BookOpenText, ExternalLink } from "lucide-react";
import book from "../assets/book.png";

type Props = {
  assunto: string;
};

export function MaterialEstudo({ assunto }: Props) {
  return (
    <div className="border w-xl flex rounded-xl min-h-1/4  justify-center items]">
        <div className="flex flex-col gap-3 w-3/5 p-7">
          <div className="flex gap-3">
            <BookOpenText />
            <h1 className="">Material para estudar</h1>
          </div>
          <p className="text-[13px] text-gray-500">
            Acesse um conteúdo completo e atualizado sobre {assunto} com
            explicacões, exemplos e exercícios resolvidos
          </p>
          <button className="text-sm py-2 border rounded-sm max-w-[200px] bg-blue-800 text-white hover:border-blue-500 hover:text-blue-500 flex gap-4 justify-center items-center">
            <a href={`https://www.youtube-nocookie.com/embe`}>
              Assistir no YouTube
            </a>
            <ExternalLink className="size-4" />
          </button>
          <p className="text-[13px] text-gray-500">Fonte: {assunto}</p>
        </div>
        <div className="w-2/5">
          <img src={book} alt="" />
        </div>
    </div>
  );
}
