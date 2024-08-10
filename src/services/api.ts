import type { FormDataType } from "@/types/CercadTypes"


export const PostCercad: (data: FormDataType) => Promise<FormDataType> = async (data: FormDataType) => {
    try {
        const res = await fetch('https://oxx-three.vercel.app/cercad/demandas/', {
            method: 'POST',
            headers: {
                'api-key': 'xUp2jAz5hQZM#wCsKb',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (res.status === 200) {
            return res.json();
        } else {
            return null;
        }
    } catch (err) {
        console.log(err);
        return null;
    }
};