import type { FormDataType } from "@/types/CercadTypes"
import { useState } from "react";


export const CercadDemandaCard = ({ demanda }: { demanda: FormDataType }) => {

    const [hover, setHover] = useState(0)

    return (
        // ao hover esta div, expandir o campo de demanda para leitura
        <div className="text-black *:capitalize grid max-w-96 w-full min-h-60 p-5 border rounded border-gray-400 
            group hover:border-black transition-all duration-500 backdrop-blur bg-gradient-to-b from-[#a3e7f3] to-white/40 cursor-pointer hover:min-h-[20rem] hover:p-0"
        >
            <p className="text-xl decoration-1 group-hover:hidden transition-all duration-1000">
                {demanda.membro}
            </p>

            <p className="mt-5 text-xs group-hover:text-g transition-all group-hover:hidden duration-1000"> {demanda.bairro} </p>

            <div className="demanda-box group-hover:min-h-full group-hover:border-none z-50 max-h-32 h-full overflow-y-hidden w-full
                bg-slate-200/80 text row-span-5 border border-gray-400 rounded p-1 transition-all duration-1000 group-hover:border-black"
                >
                <h4 className="text-xs"> Demanda: </h4>

                {/* expandir essa div */}
                <figure
                    className={`p-3 z-50 ${hover === 1 && ''}`}
                >
                    {demanda.demanda}
                </figure>
            </div>
        </div>
    )
}