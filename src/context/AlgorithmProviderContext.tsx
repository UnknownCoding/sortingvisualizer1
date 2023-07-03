import React ,{createContext,useState,useEffect} from 'react'
import { bubbleSort } from '../functions/bubbleSort';


// functions 

const sort = (type:string,items:number[]) => {
    switch (type) {
        case "merge-sort":
            console.log('merge-sort')
            break;
        case "insertion-Sort":
            console.log("insertion-Sort")
            break
        case "bubble-sort":
            bubbleSort(items)
            break;
    }
}


type Settings = {
    algorithm:string
    arrayLen:number
    delay:number
    frequency:number
}
const Setting:Settings = {
    algorithm:"bubble-sort",
    arrayLen:10,
    delay:10,
    frequency:10
}

type MainSettings = {
    settings:Settings
    setSettings?:React.Dispatch<React.SetStateAction<Settings>>
    sort:(type:string,items:number[])=>void
}


export const AlgorithmContext = createContext<MainSettings>({settings:Setting,sort})

type Items = {
    items:number[]
    setItmes?:React.Dispatch<React.SetStateAction<number[]>>
}

export const ItemsContext = createContext<Items>({items:[]})


const AlgorithmProviderContext = ({children}:{children:React.ReactNode}) => {
    const [settings,setSettings] = useState<Settings>(Setting)
    const [items,setItmes] = useState<number[]>([])
    
    useEffect(()=>{
        let randArr:number[] = []
        for(let i =0;i<settings.arrayLen;i++){
            randArr.push(Math.random()*300)
        }
        setItmes(randArr)
        console.log(items)
    },[settings.arrayLen])

    return (
        <ItemsContext.Provider value={{items,setItmes}}>
            <AlgorithmContext.Provider value={{settings,setSettings,sort}}>
                {children}
            </AlgorithmContext.Provider>
        </ItemsContext.Provider>
    )
}

export default AlgorithmProviderContext