import Price from "@/components/pages/price"
import searchAndSortByCommodity from "@/actions/search"
export default function page(){

    const ser = async(data)=>{
        'use server'
        const {state,search,district,o} = data  // retrieve data from props
        const res = await searchAndSortByCommodity({state,commodity:search,district,o})  // dispatch action to update search state
        return [true, res]
    }
    return (
        <>
        <Price ser={ser}/>
        
        </>
    )
}