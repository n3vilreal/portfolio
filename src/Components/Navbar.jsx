import { IoMenu } from "react-icons/io5";
import Logo from '../assets/github.svg';
import { IoSearchSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <>
        <div id='navbar' className='flex pr-4 flex-col w-screen'>
            <div id='header' className='flex flex-col md:flex-row justify-between items-center'>
                <div id='left' className='flex items-center p-3 space-x-3 ml-2'>
                <div className='border-solid border-gray-400 border-1 rounded-md p-0.5'>
                    <IoMenu className='text-2xl text-gray-400'/>
                </div>
                <img src={Logo} className='invert h-10' />
                <span className='text-white'>n3vilreal</span>
            </div>

                <div id='right' className='flex flex-row items-center space-x-5'>
                    <div id='search-bar' className='flex items-center border-2 border-gray-400 rounded-md pl-2 text-gray-100'>
                        <IoSearchSharp />
                        <input type="search" placeholder='Search Projects' />
                    </div>
                    <img className='h-10 rounded-full' src="https://avatars.githubusercontent.com/u/168754188?v=4" alt="" />
                </div>
            </div>
        </div>
        
    </>
  )
}
