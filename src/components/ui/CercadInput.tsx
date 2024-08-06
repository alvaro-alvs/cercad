import { useContext, type InputHTMLAttributes, useEffect } from "react"
import { CercadFormContext } from "../providers/CercadFormProvider"

//* Propriedades dos Inputs
type CercadInputProps = {
    field: string | 'membro' | 'cep' | 'demanda' | 'obs',
    label: string,
    placeholder: string,
    disabled?: boolean | false
    value: string
}


//* Template de Input Para formulario de Demanda - CERCAD
export const CercadInput: React.FC<CercadInputProps> = ({ field, label, placeholder, value, disabled }) => {
    const { formData, setFormData } = useContext(CercadFormContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        try {
            const target = e.target as HTMLInputElement | HTMLTextAreaElement;

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

    const cepSearch = async (cep: string) => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

            if (response.status === 200) {
                const data = await response.json();
                console.log('Parsed response: ', data);
                return data;
            } else {
                throw new Error(`Error fetching data: ${response.status}`);
            }
        } catch (error) {
            console.error('Error: ', error);
            return null;
        }
    };


    useEffect(() => {

        if (field === 'cep' && formData.cep.length == 8) {
            console.log('iniciando busca por cep: ', formData.cep);

            async function getCep() {
                const data = await cepSearch(formData.cep)

                setFormData({...formData, end: data.logradouro})

                // console.log('Dados do logradouro: ', data)
            }

            getCep()
        }
    }, [field])

    return (
        <fieldset className="grid">
            <label className="text-md" htmlFor={field}> {label} </label>

            {field === 'demanda' ? (
                <textarea
                    onChange={(e) => handleChange(e)}
                    className="h-20 rounded border border-slate-700 p-3 max-h-72 min-h-14 focus-visible:h-72 transition-all duration-300"
                    placeholder={placeholder}
                    name={field}
                    disabled={disabled}
                />
            ): (
                <input
                    onChange={field === 'end' ? () => console.log('Endereço Localizado'): (e) => handleChange(e)}
                    className="h-10 rounded border border-slate-700 px-3"
                    type='text'
                    value={value}
                    placeholder={placeholder}
                    name={field}
                />
            )}
        </fieldset >
    )
}