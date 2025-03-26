import { FunctionComponent } from "react";
import bannerVideo from "../assets/banneVideo.mp4";

const Banner: FunctionComponent = () => {
  return (
    <div className="relative h-[20em]">
      <video
        src={bannerVideo}
        loop
        autoPlay
        muted
        className="object-cover absolute h-full w-screen "
      ></video>

      <div className="absolute top-0 py-10 md:px-10 h-full w-full bg-teal-600 bg-opacity-70 flex items-center">
        <div className="w-12/12 md:w-9/12 px-5 md:px-10 m-auto flex flex-col gap-5">
          <p className="text-3xl font-extrabold text-white">
            Software de <br /> Recrutamento e Seleção
          </p>

          <p className="md:w-2/5 text-xl font-extralight text-white"> Encontre os melhores talentos
            rápido, com Inteligência Comportamental, e faça contratações
            bem-sucedidas.</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Banner;
