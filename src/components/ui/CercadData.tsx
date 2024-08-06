import { useContext } from "react"
import { CercadFormContext } from "../providers/CercadFormProvider"
import { CercadInput } from "./CercadInput"

export const CercadData = () => {
    const { formData } = useContext(CercadFormContext)

    const handleSubmit = () => {
        console.log(formData)
    }

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


            <div className="grid w-[30rem] py-10 space-y-10">
                <fieldset className="border rounded border-black p-5 space-y-3">
                    <legend className="text-xl px-5">
                        Seus Dados
                    </legend>

                    <CercadInput placeholder="Seu Nome" label="Nome do Membro: " field="membro" value={formData.membro} />

                    <CercadInput placeholder="CEP da sua residencia" label="CEP" field="cep" value={formData.cep} />

                    <CercadInput placeholder="Endereço" label="Endereço (Rua, Avenida)" field="end" value={formData.end} disabled />
                </fieldset>

                <fieldset className="border rounded border-black p-5 space-y-3">
                    <legend className="text-xl px-5">
                        Sua Petição
                    </legend>

                    <CercadInput placeholder="Sua demanda à Subprefeitura Cidade Ademar" label="Demanda: " field="demanda" value={formData.demanda} />

                    <CercadInput placeholder="Observações: " label="Obs: " field="obs" value={formData.obs} />
                </fieldset>


                {/* //todo Adicionar campos: OBS: e Grato */}

                {formData?.membro && <p>{formData?.membro}</p>}

            </div>

            <button onClick={() => handleSubmit()}
                className="text-xl border border-slate-700 w-full p-3 active:bg-slate-100"
            >
                Enviar
            </button>
        </div>
    )
}