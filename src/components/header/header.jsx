import Logo from './header-img/Logo.png'

export const Header = () => {
    return (
        <div className=' header-title w-[100%] h-[110px] shadow-lg shadow-gray-300 py-1  '>
            
            <div className='header__top '>
                <div className=' header__aloqa w-[100%]  flex justify-end '>
                    <span className=' header__icon flex items-center px-40 '><svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_651_11824)">
                            <path d="M15 3H3C2.175 3 1.5075 3.675 1.5075 4.5L1.5 13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V4.5C16.5 3.675 15.825 3 15 3ZM15 6L9 9.75L3 6V4.5L9 8.25L15 4.5V6Z" fill="#1E1E1E" />
                        </g>
                        <defs>
                            <clipPath id="clip0_651_11824">
                                <rect width={18} height={18} fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                        <h2 className='ml-2'>Aloqa uchun</h2>

                    </span>
                    <select className='mr-5'>
                        <option value="UZ">UZ</option>
                        <option value="ENG">ENG</option>
                        <option value="RUS">RUS</option>
                    </select>
                </div>
            </div>
            <div className='header__bottom flex items-center justify-around mt-2'>
                <img src={Logo} alt="logo-img" />

                <button className=' header__bigger text-white rounded-lg flex items-center justify-between w-[142px] h-[46px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <svg className='ml-4' width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="white" />
                    </svg>
                    <a className='mr-4' href="">KATALOG</a>
                </button>
                <label className='header__input w-[396px] h-[45px] rounded-lg flex items-center justify-between bg-white border-gray-300 border-2' >
                    <input className=' ml-3' type="text" name="" id="" placeholder='Maxsulotlarni izlash' />
                    <span className='header__icon w-[60px] h-[46px] bg-blue-700 rounded-e-lg flex items-center justify-center'><svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="white" />
                    </svg>
                    </span>
                </label>
                <div className='w-[46px] h-[46px] rounded-lg bg-slate-200 flex items-center justify-center'>
                    <svg className='hover:w-[48px] hover:h-[25px]' width={20} height={19} viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z" fill="#0D63F3" />
                    </svg>


                </div>
                <div className='header__icon w-[46px] h-[46px] rounded-lg bg-slate-200 flex items-center justify-center'>
                    <svg className='hover:w-[48px] hover:h-[25px]' width={20} height={20} viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.55 11C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C20.25 2.82 19.77 2 19.01 2H4.21L3.27 0H0V2H2L5.6 9.59L4.25 12.03C3.52 13.37 4.48 15 6 15H18V13H6L7.1 11H14.55ZM5.16 4H17.31L14.55 9H7.53L5.16 4ZM6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" fill="#0D63F3" />
                    </svg>




                </div>
                <button className='header__button mr-10 w-[105px] h-[45px] bg-gradient-to-r from-red-300 to-blue-300 hover:from-pink-300 hover:to-yellow-500 hover:text-white rounded-lg'>Kirish</button>
            </div>
        </div>
    )
}
