

type FormDataType = {
    membro: string,
    demanda: string,
    cep: string,
    end: string,
    bairro: string,
    obs: string
}

type ValidationDataType = {
    membro: boolean,
    demanda: boolean,
    cep: boolean,
    end: boolean,
    bairro: boolean,
    obs: boolean
}

type CercadFormContextType = {
    formData: FormDataType,
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>,
    validation: ValidationDataType,
    setValidation: React.Dispatch<React.SetStateAction<ValidationDataType>>
}

export type { CercadFormContextType, FormDataType, ValidationDataType }