import React ,{createContext,useState,useEffect} from 'react'
import { bubbleSort } from '../functions/bubbleSort';


// functions 



type Settings = {
    algorithm:string
    arrayLen:number
    delay:number
    frequency:number
}
const Setting:Settings = {
    algorithm:"bubble-sort",
    arrayLen:10,
    delay:1 ,
    frequency:10
}

type MainSettings = {
    settings:Settings
    setSettings?:React.Dispatch<React.SetStateAction<Settings>>
    sort?:(type:string,items:number[])=>void
}


export const AlgorithmContext = createContext<MainSettings>({settings:Setting})

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

    const animteDivs = (newArrr:number[],anim:number[][]) => {
        anim.forEach(([i,j],idx)=>{
            const div1 = document.getElementById(`${i}`)
            const div2 = document.getElementById(`${j}`)
            if(!div1 || !div2)  return 
            setTimeout(()=>{
                div1.style.backgroundColor = "red"
                div2.style.backgroundColor = "red"      
                const divHeiht = div1.style.height          
                div1.style.height = div2.style.height
                div2.style.height = divHeiht
                setTimeout(()=>{    
                    div1.style.backgroundColor = "#482"
                    div2.style.backgroundColor = "#482"                      
                    if(idx === anim.length -1){
                        setItmes(newArrr)
                    }
                },settings.delay * 2)   
            },settings.delay * idx * 5  )
        })              
    }       
        
    const sort = (type:string,items:number[]) => {
        switch (type) {
            case "merge-sort":
                console.log('merge-sort')
                break;
            case "insertion-Sort":
                console.log("insertion-Sort")
                break
            case "bubble-sort":
                const [dummyArr,swaappedArr ] = bubbleSort(items)
                animteDivs(dummyArr ,swaappedArr)
                break;
        }
    }


    return (
        <ItemsContext.Provider value={{items,setItmes}}>
            <AlgorithmContext.Provider value={{settings,setSettings,sort}}>
                {children}
            </AlgorithmContext.Provider>
        </ItemsContext.Provider>
    )
}

export default AlgorithmProviderContext