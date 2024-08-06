
import { CercadFormProvider } from "./providers/CercadFormProvider"
import { CercadData } from "./ui/CercadData"

export const CercadForm = () => {

    return (
        <CercadFormProvider>
            <CercadData />
        </CercadFormProvider>
    )
}