import type { FormDataType } from "@/types/CercadTypes"


export const PostCercad = async (data: FormDataType) => {
    const res = await fetch('https://oxx-three.vercel.app/cercad/demandas/', {
        method: 'POST',
        headers: {
            'api-key': 'xUp2jAz5hQZM#wCsKb',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).catch(err => console.log(err))

}