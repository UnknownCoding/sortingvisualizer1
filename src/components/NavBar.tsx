import React from 'react'
import { BiSort,BiSolidCategoryAlt} from 'react-icons/bi';
import { AiFillGithub,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai';

const NavBar = () => {
    return (
        <nav className='w-screen bg-[#9681EB]'>
            <div className='flex flex-col w-full gap-[20px]'>
                <div className='flex justify-between items-center px-[50px] py-2 w-full'>
                    <div className='group  relative'>
                        <img src='https://imgresizer.eurosport.com/unsafe/1200x1200/smart/filters:format(jpeg)/origin-imgresizer.eurosport.com/2017/07/31/2137158-44700570-2560-1440.jpg'
                            alt='browser doesnt support!' 
                            className='h-[50px] cursor-pointer rounded-full w-[50px]'/>
                        <div className='flex w-max font-mono font-bold flex-col border-2 border-[#6527BE] rounded-md px-2 py-1 absolute -bottom-[95px] -right-[50px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-110 '>
                            <a href='https://github.com/UnknownCoding?tab=overview&from=2023-07-01&to=2023-07-03' className='iconsHREF'>Github <AiFillGithub className='iconsNav'/></a>
                            <a href='https://www.instagram.com/' className='iconsHREF'>Instagram <AiFillInstagram className='iconsNav'/> </a>
                            <a href='https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo' className='iconsHREF'>Linkedin <AiFillLinkedin className='iconsNav'/></a>
                        </div>
                    </div>
                    <div className='flex items-center space-x-10'>
                        <button className='outline-none focus:ring-0 bg-[#45CFDD] font-bold px-3 py-1 mx-5 rounded-md border-b-4 drop-shadow-lg border-[#16a2b1]'>generate array</button>
                        <button className='algoButtons'>Bubble Sort</button>
                        <button className='algoButtons'>Insertion Sort</button>
                        <button className='algoButtons'>Merge Sort</button>
                        <button className='outline-none focus:ring-0 bg-[#F86F03] font-bold px-4 mx-5 lowercase py-1 rounded-md border-b-4 drop-shadow-lg border-[#a9510e]'>Sort <BiSort className='iconsNav'/> </button>
                    </div>
                    <div>
                        <button className='uppercase text-gray-900 bg-gradient-to-r font-bold from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300  shadow-lg shadow-lime-500/50 rounded-lg text-sm px-5 py-2.5 text-center'> categories <BiSolidCategoryAlt className='iconsNav'/> </button>
                    </div>
                </div>

                <div className='flex flex-col space-y-5 items-center pb-3'>
                    <div className='labelDiv'>
                        <label htmlFor='array-len' className='labelInput'>Array Length</label>
                        <input type='range' name="array-len" defaultValue={10} min={10} max={50}  />
                    </div>
                    <div className='labelDiv'>
                        <label htmlFor='delay' className='labelInput'>Delay</label>
                        <input type='range' name="array-len" defaultValue={10} min={10} max={50}  />

                    </div>
                    <div className='labelDiv'>
                        <label htmlFor='sound-frequency' className='labelInput'>Sound Frequency</label>
                        <input type='range' name="array-len" defaultValue={10} min={10} max={50}  />
                    </div>
                </div>

            </div>  
        </nav>
    )
}

export default NavBar