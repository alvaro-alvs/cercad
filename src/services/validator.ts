import type { FormDataType, ValidationDataType } from "@/types/CercadTypes";


export const ValidateFormData = (
    data: FormDataType, 
    validation: ValidationDataType, 
    setValidation: React.Dispatch<React.SetStateAction<ValidationDataType>>
) => {
    const newValidation = {
        membro: data.membro.length < 2,
        cep: data.cep.length !== 8,
        demanda: data.demanda.length <= 14
    };

    setValidation({ ...validation, ...newValidation });
};
