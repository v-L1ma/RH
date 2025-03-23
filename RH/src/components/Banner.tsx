import { FunctionComponent } from "react";
import bannerVideo from "../assets/banneVideo.mp4";

const Banner: FunctionComponent = () => {
  return (
    <div className="relative h-screen">
      <video
        src={bannerVideo}
        loop
        autoPlay
        muted
        className="object-cover absolute h-3/6 w-screen "
      ></video>

      <div className="absolute top-0 p-10 h-3/6 w-full bg-teal-600 bg-opacity-70 flex items-center">
        <div className=" w-9/12 px-10 m-auto flex flex-col gap-5">
          <p className="text-3xl font-extrabold text-white">
            Software de <br /> Recrutamento e Seleção
          </p>

          <p className="w-2/5 text-xl font-extralight text-white"> Encontre os melhores talentos
            rápido, com Inteligência Comportamental, e faça contratações
            bem-sucedidas.</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Banner;
