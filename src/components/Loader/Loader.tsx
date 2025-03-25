import { Loader2 } from "lucide-react"
interface Props{
    loading:boolean
    containerClassName?:string;
    loaderClassName?:string
}
const Loader = ({loading, containerClassName, loaderClassName }:Props)=>{
    return(
        <>
            {loading && <div className={`absolute  ${containerClassName}`}>
                <Loader2 className={`animate-spin ${loaderClassName}`}/>
            </div>}
        </>
    )
}

export default Loader