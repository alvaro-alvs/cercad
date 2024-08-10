import { ValidateFormData } from "@/services/validator"
import { useContext, useEffect, useState } from "react"
import { CercadFormContext } from "../providers/CercadFormProvider"
import { CercadInput } from "./CercadInput"
import { PostCercad } from "@/services/api"
import { FaCheck } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export const CercadData = () => {
    const [status, setStatus] = useState('idle')
    const { formData, setFormData, validation, setValidation } = useContext(CercadFormContext)

    const handleSubmit = async () => {
        try {
            const res = await PostCercad(formData);

            console.log(res);
            

            if (res && res.membro === formData.membro) {
                // console.log('Pedido Enviado');
                
                
                setFormData({
                    membro: '',
                    cep: '',
                    end: '',
                    bairro: '',
                    demanda: '',
                    obs: ''
                });
            }

        } catch (e) {
            console.error(e);
        }
        
        // Validação do formulário após a tentativa de envio
        ValidateFormData(formData, validation, setValidation);

        const allFalse = Object.values(validation).every(value => value === false)

        if (allFalse) {
            setStatus('enviado');
        }

        // console.log(formData);
        // console.log('Validação: ', validation);
    };

    useEffect(() => {

    }, [formData])

    console.log(status);
    
    return (
        <div
            className="max-w-screen-xl mx-auto p-10 rounded-xl border border-teal-400 bg-zinc-500/45 shadow-xl"
        >
            <header className="p-">
                <img className="w-52" src="/subpref_lead.png" alt="" />

                <h1 className="text-white border-b mt-8 py-3 border-b-black text-2xl">
                    Demanda via CERCAD
                </h1>

                <p> Pedidos - Reclamações - Denuncias </p>
            </header>


            <div className="grid w-[32rem] py-10 space-y-10">
                <fieldset className="border rounded border-black p-5 space-y-3">
                    <legend className="text-xl px-5">
                        Seus Dados
                    </legend>

                    <CercadInput placeholder="Seu Nome" label="Nome do Membro: " field="membro" value={formData.membro} />

                    <CercadInput placeholder="CEP da sua residencia" label="CEP" field="cep" value={formData.cep} />

                    <CercadInput placeholder="Endereço" label="Endereço (Rua, Avenida)" field="end" value={formData.end} disabled />

                    <CercadInput placeholder="Bairro" label="Bairro: " field="bairro" value={formData.bairro} />
                </fieldset>

                <fieldset className="border rounded border-black p-5 space-y-3">
                    <legend className="text-xl px-5">
                        Sua Petição
                    </legend>

                    <CercadInput placeholder="Sua demanda à Subprefeitura Cidade Ademar" label="Demanda: " field="demanda" value={formData.demanda} />

                    <CercadInput placeholder="Observações: " label="Obs: " field="obs" value={formData.obs} />
                </fieldset>


                {/* //todo Adicionar campos: OBS: e Grato */}

                {/* {formData?.membro && <p>{formData?.membro}</p>} */}

            </div>

            <button

                onClick={status === 'idle' ? () => handleSubmit() : () => { }}
                className={`text-xl border border-slate-700 w-full p-3 active:bg-slate-100 transition ${status === 'enviado' && 'bg-green-600 border-green-500 active:bg-red-300 active:ring active:ring-red-500 active:border-none'}`}
            >
                {status === 'enviado' ? (
                    <span className="flex items-center justify-center space-x-3 text-white">
                        <FaCheck className="fill-white" />
                        <p>
                            Enviado
                        </p>
                    </span>
                ) : 'Enviar'}
            </button>

            {status === 'enviado' && (
                <button
                    onClick={() => {setStatus('idle'), setFormData({bairro: '', cep: '', demanda: '', end: '', membro: '', obs: ''})}}
                    className={`flex items-center justify-center space-x-3 mt-10 text-xl border border-slate-700 w-full p-3 active:bg-slate-100 transition ${status === 'enviado' && 'bg-sky-500 text-white border-sky-300 active:bg-green-300 active:ring active:ring-green-500 active:border-none'}`}
                >
                    <FaPlus className="mr-3" />
                    <p> Novo Pedido </p>
                </button>
            )}

            <button onClick={() => setStatus('enviado')}>
                ativar envio
            </button>
        </div>
    )
}