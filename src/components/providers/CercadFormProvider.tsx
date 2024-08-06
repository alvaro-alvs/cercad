import React, { createContext, useState, type ReactNode, useEffect } from 'react';


type FormData = {
    membro: string,
    demanda: string,
    cep: string,
    end: string,
    bairro: string,
    obs: string
}

type CercadFormContextType = {
    formData: FormData,
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

export const CercadFormContext = createContext({} as CercadFormContextType);

export const CercadFormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [formData, setFormData] = useState<FormData>({
        membro: '',
        demanda: '',
        cep: '',
        end: '',
        bairro: '',
        obs: ''
    });

    //todo debug
    // useEffect(() => {
    //     console.log(formData);

    // }, [formData])

    return (
        <CercadFormContext.Provider value={{ formData, setFormData }}>
            {children}
        </CercadFormContext.Provider>
    );
};
