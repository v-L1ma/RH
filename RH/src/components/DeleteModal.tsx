import { FunctionComponent } from "react";
import api from "../service/api";
import { useNavigate } from "react-router-dom";

type TModalProps = {
    close: ()=>void;
    nomeVaga: string | undefined;
    idVaga: number;
}

const DeleteModal: FunctionComponent<TModalProps> = ({close, nomeVaga, idVaga}) => {

    const navigate = useNavigate();


    async function deleteVacancy() {
        try {
            const response = await api.delete(`/vacancies/${idVaga}`)

            console.log(response);

            close();
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div className="flex flex-col bg-white shadow-lg p-5 rounded-xl gap-5 w-96">
                <div>
                    <h1 className="text-xl font-bold">Você tem certeza?</h1>
                </div>

                <div>
                    <p>Você realmente deseja excluir a vaga: <p className="font-extrabold">{nomeVaga}</p>
                        <br />Essa é uma ação irreversível!</p>
                </div>

                <div className="flex justify-end gap-5 text-white font-bold">
                    <button className="bg-red-500 p-2 rounded-xl" onClick={()=>close()}>Cancelar</button>
                    <button className="bg-green-500 p-2 rounded-xl" onClick={()=>deleteVacancy()}>Confirmar</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;