import { CepSearch } from "@/services/CepSearch"
import type { FormDataType } from "@/types/CercadTypes"
import { useContext, type InputHTMLAttributes, useEffect } from "react"
import { CercadFormContext } from "../providers/CercadFormProvider"

//* Propriedades dos Inputs
type CercadInputProps = {
    field: keyof FormDataType,
    label: string,
    placeholder: string,
    disabled?: boolean | false
    value: string
}


//* Template de Input Para formulario de Demanda - CERCAD
export const CercadInput: React.FC<CercadInputProps> = ({ field, label, placeholder, value, disabled }) => {
    const { formData, setFormData, validation, setValidation } = useContext(CercadFormContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        try {
            const target = e.target as HTMLInputElement | HTMLTextAreaElement;

            setValidation({ ...validation, [field]: false })

            if (field === 'cep') {
                setFormData({ ...formData, cep: target.value.replace(/\D/g, '') })
            }

            if (field === 'demanda') {
                setFormData({ ...formData, demanda: target.value })
            } else {
                setFormData({ ...formData, [field]: target.value })
            }

        } catch (e) {
            console.error(e);

        }
    }

    useEffect(() => {
        if (field === 'cep' && formData.cep.length == 8) {
            // console.log('iniciando busca por cep: ', formData.cep);

            async function getCep() {
                const data = await CepSearch(formData.cep)

                const refData = { end: data.logradouro, bairro: data.bairro }

                setFormData({ ...formData, ...refData })

                // console.log('Dados do logradouro: ', data)
            }

            getCep()
        }
    }, [formData.cep])

    return (
        <fieldset className="grid">
            <label className="text-md" htmlFor={field}> {label} </label>

            {field === 'demanda' ? (
                <>
                    <textarea
                        onChange={(e) => handleChange(e)}
                        className={`h-20 rounded border ${validation.demanda ? 'border-red-500 ring-2 ring-red-400' : 'border-slate-700'} p-3 max-h-72 min-h-14 focus-visible:h-72 transition-all duration-300`}
                        placeholder={placeholder}
                        name={field}
                        disabled={disabled}
                        maxLength={1000}
                    />
                    <div className="w-full flex justify-between">
                        {validation.demanda && (
                            <span className="text-red-500 text-sm"> Petição Muito Curta </span>
                        )}
                        <span className="text-xs text-bold"> Caracteres Restantes {1000 - formData.demanda.length}/1000 </span>
                    </div>
                </>
            ) : (
                <>
                    <input
                        onChange={field === 'end' || field === 'bairro' ? () => console.log('Endereço Localizado') : (e) => handleChange(e)}
                        className={`h-10 rounded border px-3 ${validation[field] ? 'border-red-500 ring-2 ring-red-400' : 'border-slate-700'}`}
                        type='text'
                        value={value}
                        placeholder={placeholder}
                        name={field}
                    />
                    {validation[field] && (
                        <span className="text-red-500 text-sm">Campo Obrigatório</span>
                    )}
                </>
            )}
        </fieldset >
    )
}