

export const CERCADSignature = ({ name }: { name: string }) => {

    return (
        <div className="flex flex-col items-center justify-center">
            <p> {name} </p>
            <div className="text-2xl font-bold">CERCAD</div>
            <div className="text-2xl font-bold">Signature</div>
        </div>
    )
}