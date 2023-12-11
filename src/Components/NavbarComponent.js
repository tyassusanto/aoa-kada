import React from 'react'
import topWave from '../assets/topWave.svg'
import homeIcon from '../assets/gome.svg'
import { useNavigate } from 'react-router-dom'


const NavbarComponent = () => {
    const navigate = useNavigate()
    return (
        <div>
            {/* fixed */}
            <nav style={{backgroundImage: `url(${topWave})`, backgroundRepeat:'no-repeat'}} className="w-full z-20 top-0 start-0 pb-4"> 
                <div className="max-w-screen-xl md:flex flex-row justify-center md:justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse ps-4">
                        <img src={homeIcon} className="h-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Home</span>
                    </a>
                    <div className="flex md:order-2 md:space-x-0 ">
                        <button type="button" className="text-white mt-3 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>navigate('/login')}>Uji Coba Gratis</button>
                    </div>
                    <div className="md:me-3 md:ms-auto w-12 items-center justify-between w-full md:flex md:w-auto md:order-1 " id="navbar-sticky">
                        <ul className="flex justify-between md:font-bold  p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="#pricing" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Penawaran</a>
                            </li>
                            <li>
                                <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Kontak</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarComponent
