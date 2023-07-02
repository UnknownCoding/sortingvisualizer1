import React from 'react'

const NavBar = () => {
    return (
        <nav className='w-screen bg-[#45CFDD] flex items-center justify-center'>
            <div className='flex flex-col gap-y-[20px]'>
                <div className='flex justify-between items-center px-3 py-2 w-full'>
                    <div className='group'>
                        <img src='https://imgresizer.eurosport.com/unsafe/1200x1200/smart/filters:format(jpeg)/origin-imgresizer.eurosport.com/2017/07/31/2137158-44700570-2560-1440.jpg'
                            alt='browser doesnt support!' 
                            className=''/>
                        <div className='opacity-0 '>
                            <p>sadada</p>
                        </div>
                    </div>
                    <div>
                        <button>generate array</button>
                        <button>Bubble Sort</button>
                        <button>Insertion Sort</button>
                        <button>Merge Sort</button>
                        <button>Sort</button>
                    </div>
                    <div>
                        <button>categories</button>
                    </div>
                </div>

                <div>
                    <div>
                        <label htmlFor='array-len'>Array Length</label>
                        <input type='range' name="array-len" defaultValue={10} min={10} max={50}  />
                    </div>
                    <div>
                        <label htmlFor='delay'></label>
                        <input type='range' name='delay' />

                    </div>
                    <div>
                        <label htmlFor='sound-frequency'></label>
                        <input type='range' name='sound-frequency' />
                    </div>

                    
                </div>

            </div>  
        </nav>
    )
}

export default NavBar