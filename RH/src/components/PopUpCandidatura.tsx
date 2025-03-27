import { FunctionComponent, useState } from "react";
import DadosPessoaisForm from "./multiStepForm/DadosPessoaisForm";
import ExperienciaProfissionalForm from "./multiStepForm/ExperienciaProfissionalForm";
import FormacaoAcademicaForm from "./multiStepForm/FormacaoAcademicaForm";
import { IoClose } from "react-icons/io5";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../service/api";
import SuccessAnimation from "./SuccessAnimation";
import Conhecimentos from "./multiStepForm/Conhecimentos";

interface PopUpCandidaturaProps {
  onclick: () => void;
  idVaga: number;
}

const schema = z.object({
  vacancyID: z.number(),
  nomeCompleto: z.string().min(10, "Por favor, insira seu nome completo."),
  email: z.string().email("Por favor, insira um email válido."),
  telefone: z
    .string()
    .regex(
      /^\([1-9]{2}\)(?:[2-8]|9[0-9])[0-9]{3}[0-9]{4}$/,
      "Formato inválido. Use (XX)XXXXXXXXX"
    ),
  dataNasc: z.string().refine(
    (val) => {
      const date = new Date(val);
      const today = new Date();
      return !isNaN(date.getTime()) && date <= today;
    },
    { message: "A data de nascimento não pode ser no futuro." }
  ),
  cpf: z
    .string()
    .regex(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/,
      "CPF inválido. Use XXX.XXX.XXX-XX ou XXXXXXXXXXX"
    ),
  resumoProfissional: z
    .string()
    .min(10, "Por favor, insira uma descrição detalhada das atividades."),
  cargo: z.string().min(3, "Por favor, insira um nome válido para o cargo."),
  empresa: z
    .string()
    .min(3, "Por favor, insira um nome válido para a empresa."),
  dataInicioEmpresa: z
    .string()
    .refine((val) => !isNaN(new Date(val).getTime()), {
      message: "Data de início inválida.",
    }),
  dataTerminoEmpresa: z
    .string()
    .refine((val) => !isNaN(new Date(val).getTime()), {
      message: "Data de término inválida.",
    }),
  descricaoATVD: z
    .string()
    .min(10, "Por favor, insira uma descrição detalhada das atividades."),
  situacao: z.string(),
  escolaridade: z
    .string()
    .min(3, "Por favor, insira um nível de escolaridade válido."),
  curso: z.string().min(3, "Por favor, insira um nome de curso válido."),
  instituicao: z
    .string()
    .min(3, "Por favor, insira o nome de uma instituição válida."),
  dataInicioEstudo: z.string(),
  dataTerminoEstudos: z
    .string()
    .refine((val) => !isNaN(new Date(val).getTime()), {
      message: "Data de término inválida.",
    }),
});

type FormData = z.infer<typeof schema>;

const PopUpCandidatura: FunctionComponent<PopUpCandidaturaProps> = ({
  onclick,
  idVaga,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { vacancyID: idVaga, situacao: "ok" },
  });

  const onSubmit = async () => {
    console.log("Erros:", errors);
    console.log("Dados submetidos:", getValues());

    try {
      const response = await api.post(`/applications/${idVaga}`, getValues());

      console.log(response);

      setEstado("sucesso");
    } catch (error) {
      console.log(error);
      setEstado("erro");
    }
  };

  const formComponents = [
    <DadosPessoaisForm register={register} errors={errors} />,
    <ExperienciaProfissionalForm register={register} errors={errors} />,
    <FormacaoAcademicaForm register={register} errors={errors} />,
    <Conhecimentos />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useMultiStepForm(formComponents);

  const [estado, setEstado] = useState<string>("formulario");

  return (
    <div className="bg-black/25 absolute z-10 w-full h-full top-0 flex justify-center pb-10">
      <div className="flex flex-col bg-white rounded-xl shadow-lg md:w-4/6 lg:w-2/6 h-fit mt-10 p-10 box-content gap-10">
        <div className="flex justify-end">
          <button onClick={() => onclick()} className="text-3xl">
            <IoClose />
          </button>
        </div>
        {estado === "formulario" ? (
          <>
            <div className="flex justify-between items-center gap-2">
              <div
                className={`${
                  currentStep >= 0 ? "border-teal-500" : "border-gray-500"
                } border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center transition-all`}
              >
                1
              </div>
              <div
                className={`${
                  currentStep >= 1 ? "border-teal-500" : "border-gray-500"
                } border w-full h-0 transition-all`}
              ></div>
              <div
                className={`${
                  currentStep >= 1 ? "border-teal-500" : "border-gray-500"
                } border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center transition-all`}
              >
                2
              </div>
              <div
                className={`transition-all ${
                  currentStep >= 2 ? "border-teal-500" : "border-gray-500"
                } border w-full h-0`}
              ></div>
              <div
                className={`${
                  currentStep >= 2 ? "border-teal-500" : "border-gray-500"
                } border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center transition-all`}
              >
                3
              </div>
              <div
                className={`transition-all ${
                  currentStep >= 3 ? "border-teal-500" : "border-gray-500"
                } border w-full h-0`}
              ></div>
              <div
                className={`${
                  currentStep >= 3 ? "border-teal-500" : "border-gray-500"
                } border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center transition-all`}
              >
                4
              </div>
            </div>

            <form
              className="flex flex-col gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              {currentComponent}

              <div>
                <div className="flex justify-end w-full gap-2">
                  {!isFirstStep && (
                    <button
                      className="border-2 py-3 px-7 rounded-xl"
                      onClick={() => changeStep({ steps: currentStep - 1 })}
                      type="button"
                    >
                      Voltar
                    </button>
                  )}
                  {isLastStep ? (
                    <button
                      type="submit"
                      className="bg-teal-500 py-3 px-7 rounded-xl"
                    >
                      Enviar
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="bg-teal-500 py-3 px-7 rounded-xl"
                      onClick={(e) =>
                        changeStep({ steps: currentStep + 1, event: e })
                      }
                    >
                      Avançar
                    </button>
                  )}
                </div>
                {isLastStep && Object.keys(errors).length > 0 && (
                  <p className="text-red-500 font-bold text-center mt-3">
                    ⚠️ Há erros no formulário. 
                    <br />Verifique os campos antes de
                    enviar.
                  </p>
                )}
              </div>
            </form>
          </>
        ) : estado === "sucesso" ? (
          <div className="px-10 py-36 text-center flex flex-col gap-20">
            <SuccessAnimation />
            <h1 className="text-3xl font-extrabold text-teal-500">
              Parabéns, sua candidatura foi realizada com sucesso!
            </h1>
          </div>
        ) : (
          estado === "erro" && (
            <div className="flex flex-col justify-center items-center">
              <div className="relative  w-[290px] h-[240px] flex justify-center items-center rounded-md">
                <div className="absolute w-[99px] h-[99px] rounded-full bg-red-500 scale-[1.1] animate-ping"></div>
                <div className="relative z-10 w-[140px] h-[140px] rounded-full bg-white flex justify-center items-center animate-scaleIn">
                  <div className="relative w-[90px] h-[10px] rounded-xl bg-red-500 rotate-45"></div>
                  <div className="absolute w-[90px] h-[10px] rounded-xl bg-red-500 -rotate-45"></div>
                </div>
              </div>

              <h1 className="text-center text-3xl font-bold text-red-500">
                Ops... <br /> Parece que houve um erro
              </h1>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PopUpCandidatura;
