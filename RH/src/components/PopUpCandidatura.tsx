import { FunctionComponent } from "react";
import DadosPessoaisForm from "./multiStepForm/DadosPessoaisForm";
import ExperienciaProfissionalForm from "./multiStepForm/ExperienciaProfissionalForm";
import FormacaoAcademicaForm from "./multiStepForm/FormacaoAcademicaForm";
import { IoClose } from "react-icons/io5";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
    .regex(/^\([1-9]{2}\)(?:[2-8]|9[0-9])[0-9]{3}[0-9]{4}$/, "Formato inválido. Use (XX)XXXXXXXXX"),
  dataNasc: z
    .string()
    .refine((val) => {
      const date = new Date(val);
      const today = new Date();
      return !isNaN(date.getTime()) && date <= today;
    }, { message: "A data de nascimento não pode ser no futuro." }),
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/, "CPF inválido. Use XXX.XXX.XXX-XX ou XXXXXXXXXXX"),
  cargo: z.string().min(3, "Por favor, insira um nome válido para o cargo."),
  empresa: z.string().min(3, "Por favor, insira um nome válido para a empresa."),
  dataInicioEmpresa: z.string().refine((val) => !isNaN(new Date(val).getTime()), {
    message: "Data de início inválida.",
  }),
  dataTerminoEmpresa: z.string().refine((val) => !isNaN(new Date(val).getTime()), {
    message: "Data de término inválida.",
  }),
  descricaoATVD: z.string().min(10, "Por favor, insira uma descrição detalhada das atividades."),
  situacao: z.string(),
  escolaridade: z.string().min(3, "Por favor, insira um nível de escolaridade válido."),
  curso: z.string().min(3, "Por favor, insira um nome de curso válido."),
  instituicao: z.string().min(3, "Por favor, insira o nome de uma instituição válida."),
  dataInicioEstudo: z.string(),
  dataTerminoEstudo: z.string().refine((val) => !isNaN(new Date(val).getTime()), {
    message: "Data de término inválida.",
  }),
});

type FormData = z.infer<typeof schema>;

const PopUpCandidatura: FunctionComponent<PopUpCandidaturaProps> = ({ onclick, idVaga }) => {
  const { register, handleSubmit, formState: { errors }, getValues} = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { vacancyID: idVaga, situacao: "ok", }, // Define o ID da vaga como valor padrão
  });

  const onSubmit = () => {
    console.log("Erros:", errors);
    console.log("Dados submetidos:", getValues());
  };

  const formComponents = [
    <DadosPessoaisForm register={register} errors={errors} />,
    <ExperienciaProfissionalForm register={register} errors={errors} />,
    <FormacaoAcademicaForm register={register} errors={errors} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useMultiStepForm(formComponents);

  return (
    <div className="bg-black/25 absolute z-10 w-full h-fit top-0 flex justify-center pb-10">
      <div className="flex flex-col bg-white rounded-lg shadow-lg md:w-4/6 lg:w-2/6 h-fit mt-10 p-10 box-content gap-10">
        <div className="flex justify-end">
          <button onClick={() => onclick()} className="text-3xl">
            <IoClose />
          </button>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className={`${currentStep >= 0 ? "border-teal-500" : "border-gray-500"} border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center`}>
            1
          </div>
          <div className={`${currentStep >= 0 ? "border-teal-500" : "border-gray-500"} border border-teal-500 w-full h-0`}></div>
          <div className={`${currentStep >= 1 ? "border-teal-500" : "border-gray-500"} border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center`}>
            2
          </div>
          <div className={`${currentStep >= 2 ? "border-teal-500" : "border-gray-500"} border w-full h-0`}></div>
          <div className={`${currentStep >= 2 ? "border-teal-500" : "border-gray-500"} border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center`}>
            3
          </div>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          {currentComponent}

          <div className="flex justify-end w-full gap-2">
            {!isFirstStep && (
              <button
                className="border-2 py-3 px-7 rounded-lg"
                onClick={() => changeStep({ steps: currentStep - 1 })}
                type="button"
              >
                Voltar
              </button>
            )}

            {isLastStep ? (
              <button type="submit" className="bg-teal-500 py-3 px-7 rounded-lg">
                Enviar
              </button>
            ) : (
              <button
                type="button"
                className="bg-teal-500 py-3 px-7 rounded-lg"
                onClick={(e) => changeStep({ steps: currentStep + 1, event: e })}
              >
                Avançar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopUpCandidatura;
