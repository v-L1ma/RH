import { FunctionComponent } from "react";
import { FaLinkedin, FaGithub, FaGlobe, FaCaretDown, FaRegCopyright  } from "react-icons/fa";

const Footer:FunctionComponent = () =>{
    return(
        <footer className="h-fit bg-teal-700 p-10 text-white text-xl">
          <div className="flex flex-col w-9/12 h-full m-auto items-center justify-center gap-20">
            
            <div className="flex">
              <h1>Facilita RH</h1>
            </div>

            <div>
              <ul className="flex gap-16 text-lg">
                <li>Termos de uso</li>
                <li>Politica de privacidade</li>
                <li>Segurança</li>
              </ul>
            </div>

            <div className="flex w-full justify-between text-base">
              <p className="flex items-center gap-2">Português <FaCaretDown/></p>

              <ul className="flex gap-10 text-4xl justify-center ml-48">
                <li><FaLinkedin/></li>
                <li><FaGithub/></li>
                <li><FaGlobe /></li>
              </ul>

              <p className="flex items-center gap-1"><FaRegCopyright />2025, todos os direitos reservados.</p>

            </div>
          </div>

      </footer>
    )
}

export default Footer;