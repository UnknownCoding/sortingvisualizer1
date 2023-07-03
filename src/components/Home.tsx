import React,{useContext} from 'react'
import { ItemsContext } from '../context/AlgorithmProviderContext'

const Home = () => {
    const {items} = useContext(ItemsContext)
    return (
        <main className='w-full h-full py-3 px-3 bg-[#6527BE]'>
            <div className='w-full h-full flex gap-x-[10px] bg-[#aaa8ad] items-end px-2'>
                {items.map((it,i)=>(
                    <div id={`${i}`} key={i} className='w-[10px]' style={{backgroundColor:"#482",height: `${it/3}%`}}/>
                ))}
            </div>
        </main>
    )
}

export default Home