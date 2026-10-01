import {TvMinimalPlay, Eye ,ExternalLink} from 'lucide-react';

type props = {
  assunto: string;
  videoId: string;
};

export function Videoestudo({ assunto, videoId }: props) {
  return (
    <div className="flex flex-col gap-3 border border-zinc-400 w-xl h-auto p-7 rounded-2xl">
      <div className='flex gap-3'>
        <TvMinimalPlay/>
        <h1 className="">Video recomendado</h1>
      </div>
      <div className="text-[13px] text-gray-500">
        <p>
          Selecione o video com mais visualização sobre este assunto para te
          ajudar nos estudos
        </p>
      </div>
      <div className="gap-2 flex">
        <div className="w-[50%] rounded justify-center items-center flex">
          <div className="w-full">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              title="YouTube video player"
              className="w-full h-full aspect-video border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="w-[50%] flex flex-col gap-2">
          <h1 className="font-bold">{assunto}</h1>
          <p className="text-[13px] text-gray-500">Prof Ferreto Matematica</p>
          <div className="text-[12px] text-gray-500 flex gap-3">
            <div className="flex gap-1">
              <Eye className='size-4'/>
              <p>1,2 mil visualizações</p>
            </div>
            <p>há 4 anos </p>
          </div>
          <button className="text-sm py-2 border border-gray-400 rounded hover:border-blue-500 hover:text-blue-500 flex gap-4 justify-center items-center">
            <a href={`https://www.youtube-nocookie.com/embed/${videoId}`}>Assistir no YouTube</a><ExternalLink className='size-4'/>
          </button>
        </div>
      </div>
    </div>
  );
}


