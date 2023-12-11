import React from 'react'
import NavbarComponent from '../../Components/NavbarComponent'
import chart from '../../assets/chart-about.svg'
import wave from '../../assets/wave.svg'
import igLogo from '../../assets/instagram-svgrepo-com.svg'
import phoneLogo from '../../assets/phone-svgrepo-com.svg'
import waLogo from '../../assets/whatsapp-svgrepo-com.svg'

const LandingPage = () => {

    return (
        <div>
            <NavbarComponent />
            <section id='/' style={{ backgroundImage: `url(${wave})`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat' }} className='max-h-screen'>
                <div className="p-10 md:py-10 md:ps-72 md:pe-10">
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iste natus! Ex blanditiis repellendus quibusdam?</p>
                </div>
                <div className="px-10 pb-10">
                    <p className='text-center md:text-left'>Semua kebutuhan bisnis Anda di satu platform.</p>
                    <img className='p-8 max-w-sm md:max-w-md' src={chart} alt="chart-icon" />
                </div>
            </section>
            <section id='pricing' className='p-3'>
                <span className='text-center md:font-semibold md:text-xl '>Uji Coba Gratis dan Berlangganan Mulai Dari :</span>
                <div className="flex-row mx-3 justify-between md:flex md:mt-4">
                    <div className="cursor-pointer mx-auto">
                        <a className="block py-6 px-4 bg-blue-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h3 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Basic</h3>
                            <p className="font-normal text-gray-700 text-8xl left-1 pb-5">$2</p>
                            <p>Mencatan Barang Keluar</p>
                            <p>Mencatan Barang Masuk</p>
                            <p>Mencatan Hasil Keuntungan</p>
                        </a>
                    </div>
                    <div className="cursor-pointer md:my-0 mx-auto my-3 md:px-4">
                        <a className="block py-6 px-4 bg-blue-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h3 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Basic</h3>
                            <p className="font-normal text-gray-700 text-8xl left-1 pb-5">$7</p>
                            <p>Mencatan Barang Keluar</p>
                            <p>Mencatan Barang Masuk</p>
                            <p>Mencatan Hasil Keuntungan</p>
                            <p>Dapat menganalisa hasil penjualan dengan Chart</p>
                            <p>Support 7x24 Jam</p>
                        </a>
                    </div>
                    <div className="cursor-pointer mx-auto">
                        <a className="block py-6 px-4 bg-blue-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h3 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Basic</h3>
                            <p className="font-normal text-gray-700 text-8xl left-1 pb-5">$11</p>
                            <p>Mencatan Barang Keluar</p>
                            <p>Mencatan Barang Masuk</p>
                            <p>Mencatan Hasil Keuntungan</p>
                            <p>Dapat menganalisa hasil penjualan dengan Chart</p>
                            <p>Support 7x24 Jam</p>
                            <p>Export Data ke Excel</p>
                            <p>AI Prediksi Penghasilan</p>
                        </a>
                    </div>
                </div>
            </section>
            <section id='contact' className='bg-blue-400 rounded-t-lg text-white'>
                <div className=''>
                    <h1 className='text-center font-semibold text-xl py-5'>Jika ada pertanyaan, hubungi kami di :</h1>
                    <div className="">
                        <div className="flex pb-5 justify-center">
                            <img className='max-h-7 cursor-pointer' src={phoneLogo} alt="phone" />
                            <img className='max-h-7 mx-5 cursor-pointer' src={waLogo} alt="Whatsapp" />
                            <img className='max-h-7 cursor-pointer' src={igLogo} alt="Phone" />
                        </div>
                    </div>
                </div>
            </section>
            <a href='/'
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="!fixed bottom-5 right-5 rounded-full bg-blue-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className="h-4 w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path
                        fill="currentColor"
                        d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
                </svg>
            </a>
        </div>
    )
}

export default LandingPage
