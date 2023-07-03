import { ItemsContext } from "../context/AlgorithmProviderContext"

export const bubbleSort = (items:number[]) => {
    let temp = 0
    const dummyArr:any[] = [...items]
    const swaappedArr:number[][] = []
    for(let i = 0;i<dummyArr.length;i++){
        for(let j = 0;j<dummyArr.length-1;j++){
            if(dummyArr[j] > dummyArr[j+1]){
                temp = dummyArr[j+1]
                dummyArr[j+1] = dummyArr[j]
                dummyArr[j] = temp
                swaappedArr.push([j+1,j])
            }
        }
    }
    return [dummyArr,swaappedArr]   

}