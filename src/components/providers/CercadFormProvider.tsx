import React, { createContext, useState, type ReactNode } from 'react';
import type { FormDataType, CercadFormContextType, ValidationDataType } from '@/types/CercadTypes';

export const CercadFormContext = createContext({} as CercadFormContextType);

export const CercadFormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [formData, setFormData] = useState<FormDataType>({
        membro: '',
        demanda: '',
        cep: '',
        end: '',
        bairro: '',
        obs: ''
    });

    const [validation, setValidation] = useState({
        membro: false,
        demanda: false,
        cep: false,
        end: false,
        bairro: false,
        obs: false
    })

    //todo debug
    // useEffect(() => {
    //     console.log(formData);

    // }, [formData])

    return (
        <CercadFormContext.Provider value={{ formData, setFormData, validation, setValidation }}>
            {children}
        </CercadFormContext.Provider>
    );
};
