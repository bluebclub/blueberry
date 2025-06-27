import React from 'react'

export default function Banner() {
    return (
        <div className=''>
            {/* lg:h-screen !pt-10 !pb-20 lg:py-0 !mt-[6.400000000000002vw] */}
            <div className='container lg:h-screen !pt-10 !pb-20 lg:py-0 !mt-[6.400000000000002vw]'>
                <div>
                    <h2 className='pt-[1.5vw]  title-banner text-center'>
                        We craft immersive, human- <br />
                        centric digital Products.
                    </h2>
                    <button className='text-center opacity-400_b text-xs block m-auto mt-12 border p-2 rounded-2xl pl-4 pr-4 border-white'>Crafted by Community_</button>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-16 mb-4'>
                    <div>
                        <video loop autoPlay muted className='video w-full rounded-2xl'>
                            <source src='/assets/images/Video-1.mp4' type="video/mp4"></source>
                        </video>
                    </div>
                    <div>
                        <video loop autoPlay muted className='video w-full rounded-2xl'>
                            <source src='/assets/images/Video-2.mp4' type="video/mp4"></source>
                        </video>
                    </div>
                </div>

                <div className=' mt-8'>
                    <img aria-hidden="true"
                        alt='true'
                        className='w-full object-cover rounded-2xl'
                        src="/assets/images/UI.jpg" />
                    <p></p>
                </div>


                {/*  */}

                <div className='flex lg:py-14'>
                    <div className='w-[50%] block'>
                        <h3 className='text-xl'>About Us</h3>
                        <p className='text-xl opacity-[40%]'>Blueberry Club</p>
                    </div>
                    <div className=''>
                        <p className='text-2xl mb-8'>
                            Blueberry Club is a creative design studio focused on building bold digital experiences through design, motion, and strategy. Our mission is to craft visually impactful and purpose-driven work that we ourselves would be proud to use or share.
                        </p>
                        <p className='text-2xl'>
                            By blending UI/UX design, graphic storytelling, and motion creativity into a unified process, we help brands connect meaningfully with their audience online and beyond. Every project we take on is rooted in clarity, emotion, and forward-thinking execution.
                        </p>
                    </div>
                </div>

                {/*  */}

                <div className='flex lg:py-14'>
                    <div className='w-[30%] pr-30'>
                        <h3 className='text-xl'>Design</h3>
                        <p className='text-xl opacity-[40%]'>Services</p>


                        <p className='pt-6'>Designs that don’t just look
good—they connect,
convert, and leave a mark.</p>


                    </div>
                    <div className=''>
                        <ul className='under-list'>
                            <li>UX Design</li>
                            <li>Interface Design</li>
                            <li>Design Systems</li>
                            <li>Custom Typefaces</li>
                            <li>Digital Product Design</li>
                            <li>Visual Pototyping</li>
                            <li>Graphic Design</li>
                        </ul>
                    </div>
                </div>



                {/*  */}

                <div>
                     <div>
                         <h2 className='text-xl productregular'>Official Accounts</h2>
                         <div className='grid grid-cols-3 gap-6'>
                            <div>
                                <div>
                                    <p>fdugsuf</p>
                                </div>
                                <div>
                                    <p>fdugsuf</p>
                            
                                </div>
                                <div>
                                    <p>fdugsuf</p>

                                </div>
                            </div>
                         </div>
                     </div>
                </div>

                {/*  */}

                <div className='py-10 mb-20'>
                    <h2 className='pt-[1.5vw] title-banner text-center'>
                        Have a project in mind? <br />
                        Let’s get to work.
                    </h2>
                    <button className='text-center block m-auto mt-12 border p-2 h-12 rounded-xl productBold pl-4 pr-4 bg-white text-black'>Get in Touch</button>
                </div>


                {/* footer */}

                <div className='p-10 border border-color mb-6 rounded-3xl flex justify-between'>
                    <div>
                        <ul className='social-icon'>
                            <li>
                                <a href='/'>
                                    <svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M7.5 7.5C7.5 6.50544 7.89509 5.55161 8.59835 4.84835C9.30161 4.14509 10.2554 3.75 11.25 3.75H15V11.25H11.25C10.2554 11.25 9.30161 10.8549 8.59835 10.1516C7.89509 9.44839 7.5 8.49456 7.5 7.5Z"
                                        stroke="white"
                                        strokeWidth="1.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M15 3.75H18.75C19.2425 3.75 19.7301 3.847 20.1851 4.03545C20.64 4.22391 21.0534 4.50012 21.4016 4.84835C21.7499 5.19658 22.0261 5.60996 22.2145 6.06494C22.403 6.51991 22.5 7.00754 22.5 7.5C22.5 7.99246 22.403 8.48009 22.2145 8.93506C22.0261 9.39004 21.7499 9.80342 21.4016 10.1516C21.0534 10.4999 20.64 10.7761 20.1851 10.9645C19.7301 11.153 19.2425 11.25 18.75 11.25H15V3.75Z"
                                        stroke="white"
                                        strokeWidth="1.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M15 15C15 14.5075 15.097 14.0199 15.2855 13.5649C15.4739 13.11 15.7501 12.6966 16.0984 12.3484C16.4466 12.0001 16.86 11.7239 17.3149 11.5355C17.7699 11.347 18.2575 11.25 18.75 11.25C19.2425 11.25 19.7301 11.347 20.1851 11.5355C20.64 11.7239 21.0534 12.0001 21.4016 12.3484C21.7499 12.6966 22.0261 13.11 22.2145 13.5649C22.403 14.0199 22.5 14.5075 22.5 15C22.5 15.4925 22.403 15.9801 22.2145 16.4351C22.0261 16.89 21.7499 17.3034 21.4016 17.6516C21.0534 17.9999 20.64 18.2761 20.1851 18.4645C19.7301 18.653 19.2425 18.75 18.75 18.75C18.2575 18.75 17.7699 18.653 17.3149 18.4645C16.86 18.2761 16.4466 17.9999 16.0984 17.6516C15.7501 17.3034 15.4739 16.89 15.2855 16.4351C15.097 15.9801 15 15.4925 15 15Z"
                                        stroke="white"
                                        strokeWidth="1.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7.5 22.5C7.5 21.5055 7.89509 20.5516 8.59835 19.8484C9.30161 19.1451 10.2554 18.75 11.25 18.75H15V22.5C15 23.4945 14.6049 24.4484 13.9016 25.1516C13.1984 25.8549 12.2446 26.25 11.25 26.25C10.2554 26.25 9.30161 25.8549 8.59835 25.1516C7.89509 24.4484 7.5 23.4945 7.5 22.5Z"
                                        stroke="white"
                                        strokeWidth="1.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7.5 15C7.5 14.0055 7.89509 13.0516 8.59835 12.3484C9.30161 11.6451 10.2554 11.25 11.25 11.25H15V18.75H11.25C10.2554 18.75 9.30161 18.3549 8.59835 17.6516C7.89509 16.9484 7.5 15.9945 7.5 15Z"
                                        stroke="white"
                                        strokeWidth="1.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href='/'>
                                    <svg
                                        width={30}
                                        height={30}
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.5 7.5C7.5 6.50544 7.89509 5.55161 8.59835 4.84835C9.30161 4.14509 10.2554 3.75 11.25 3.75H15V11.25H11.25C10.2554 11.25 9.30161 10.8549 8.59835 10.1516C7.89509 9.44839 7.5 8.49456 7.5 7.5Z"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15 3.75H18.75C19.2425 3.75 19.7301 3.847 20.1851 4.03545C20.64 4.22391 21.0534 4.50012 21.4016 4.84835C21.7499 5.19658 22.0261 5.60996 22.2145 6.06494C22.403 6.51991 22.5 7.00754 22.5 7.5C22.5 7.99246 22.403 8.48009 22.2145 8.93506C22.0261 9.39004 21.7499 9.80342 21.4016 10.1516C21.0534 10.4999 20.64 10.7761 20.1851 10.9645C19.7301 11.153 19.2425 11.25 18.75 11.25H15V3.75Z"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15 15C15 14.5075 15.097 14.0199 15.2855 13.5649C15.4739 13.11 15.7501 12.6966 16.0984 12.3484C16.4466 12.0001 16.86 11.7239 17.3149 11.5355C17.7699 11.347 18.2575 11.25 18.75 11.25C19.2425 11.25 19.7301 11.347 20.1851 11.5355C20.64 11.7239 21.0534 12.0001 21.4016 12.3484C21.7499 12.6966 22.0261 13.11 22.2145 13.5649C22.403 14.0199 22.5 14.5075 22.5 15C22.5 15.4925 22.403 15.9801 22.2145 16.4351C22.0261 16.89 21.7499 17.3034 21.4016 17.6516C21.0534 17.9999 20.64 18.2761 20.1851 18.4645C19.7301 18.653 19.2425 18.75 18.75 18.75C18.2575 18.75 17.7699 18.653 17.3149 18.4645C16.86 18.2761 16.4466 17.9999 16.0984 17.6516C15.7501 17.3034 15.4739 16.89 15.2855 16.4351C15.097 15.9801 15 15.4925 15 15Z"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.5 22.5C7.5 21.5055 7.89509 20.5516 8.59835 19.8484C9.30161 19.1451 10.2554 18.75 11.25 18.75H15V22.5C15 23.4945 14.6049 24.4484 13.9016 25.1516C13.1984 25.8549 12.2446 26.25 11.25 26.25C10.2554 26.25 9.30161 25.8549 8.59835 25.1516C7.89509 24.4484 7.5 23.4945 7.5 22.5Z"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.5 15C7.5 14.0055 7.89509 13.0516 8.59835 12.3484C9.30161 11.6451 10.2554 11.25 11.25 11.25H15V18.75H11.25C10.2554 18.75 9.30161 18.3549 8.59835 17.6516C7.89509 16.9484 7.5 15.9945 7.5 15Z"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href='/'>
                                    <svg
                                        width={30}
                                        height={30}
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.5 7.5C7.5 6.50544 7.89509 5.55161 8.59835 4.84835C9.30161 4.14509 10.2554 3.75 11.25 3.75H15V11.25H11.25C10.2554 11.25 9.30161 10.8549 8.59835 10.1516C7.89509 9.44839 7.5 8.49456 7.5 7.5Z"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15 3.75H18.75C19.2425 3.75 19.7301 3.847 20.1851 4.03545C20.64 4.22391 21.0534 4.50012 21.4016 4.84835C21.7499 5.19658 22.0261 5.60996 22.2145 6.06494C22.403 6.51991 22.5 7.00754 22.5 7.5C22.5 7.99246 22.403 8.48009 22.2145 8.93506C22.0261 9.39004 21.7499 9.80342 21.4016 10.1516C21.0534 10.4999 20.64 10.7761 20.1851 10.9645C19.7301 11.153 19.2425 11.25 18.75 11.25H15V3.75Z"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15 15C15 14.5075 15.097 14.0199 15.2855 13.5649C15.4739 13.11 15.7501 12.6966 16.0984 12.3484C16.4466 12.0001 16.86 11.7239 17.3149 11.5355C17.7699 11.347 18.2575 11.25 18.75 11.25C19.2425 11.25 19.7301 11.347 20.1851 11.5355C20.64 11.7239 21.0534 12.0001 21.4016 12.3484C21.7499 12.6966 22.0261 13.11 22.2145 13.5649C22.403 14.0199 22.5 14.5075 22.5 15C22.5 15.4925 22.403 15.9801 22.2145 16.4351C22.0261 16.89 21.7499 17.3034 21.4016 17.6516C21.0534 17.9999 20.64 18.2761 20.1851 18.4645C19.7301 18.653 19.2425 18.75 18.75 18.75C18.2575 18.75 17.7699 18.653 17.3149 18.4645C16.86 18.2761 16.4466 17.9999 16.0984 17.6516C15.7501 17.3034 15.4739 16.89 15.2855 16.4351C15.097 15.9801 15 15.4925 15 15Z"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.5 22.5C7.5 21.5055 7.89509 20.5516 8.59835 19.8484C9.30161 19.1451 10.2554 18.75 11.25 18.75H15V22.5C15 23.4945 14.6049 24.4484 13.9016 25.1516C13.1984 25.8549 12.2446 26.25 11.25 26.25C10.2554 26.25 9.30161 25.8549 8.59835 25.1516C7.89509 24.4484 7.5 23.4945 7.5 22.5Z"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.5 15C7.5 14.0055 7.89509 13.0516 8.59835 12.3484C9.30161 11.6451 10.2554 11.25 11.25 11.25H15V18.75H11.25C10.2554 18.75 9.30161 18.3549 8.59835 17.6516C7.89509 16.9484 7.5 15.9945 7.5 15Z"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href='/'>
                                    <svg
                                        width={30}
                                        height={30}
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.5 7.5C7.5 6.50544 7.89509 5.55161 8.59835 4.84835C9.30161 4.14509 10.2554 3.75 11.25 3.75H15V11.25H11.25C10.2554 11.25 9.30161 10.8549 8.59835 10.1516C7.89509 9.44839 7.5 8.49456 7.5 7.5Z"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15 3.75H18.75C19.2425 3.75 19.7301 3.847 20.1851 4.03545C20.64 4.22391 21.0534 4.50012 21.4016 4.84835C21.7499 5.19658 22.0261 5.60996 22.2145 6.06494C22.403 6.51991 22.5 7.00754 22.5 7.5C22.5 7.99246 22.403 8.48009 22.2145 8.93506C22.0261 9.39004 21.7499 9.80342 21.4016 10.1516C21.0534 10.4999 20.64 10.7761 20.1851 10.9645C19.7301 11.153 19.2425 11.25 18.75 11.25H15V3.75Z"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15 15C15 14.5075 15.097 14.0199 15.2855 13.5649C15.4739 13.11 15.7501 12.6966 16.0984 12.3484C16.4466 12.0001 16.86 11.7239 17.3149 11.5355C17.7699 11.347 18.2575 11.25 18.75 11.25C19.2425 11.25 19.7301 11.347 20.1851 11.5355C20.64 11.7239 21.0534 12.0001 21.4016 12.3484C21.7499 12.6966 22.0261 13.11 22.2145 13.5649C22.403 14.0199 22.5 14.5075 22.5 15C22.5 15.4925 22.403 15.9801 22.2145 16.4351C22.0261 16.89 21.7499 17.3034 21.4016 17.6516C21.0534 17.9999 20.64 18.2761 20.1851 18.4645C19.7301 18.653 19.2425 18.75 18.75 18.75C18.2575 18.75 17.7699 18.653 17.3149 18.4645C16.86 18.2761 16.4466 17.9999 16.0984 17.6516C15.7501 17.3034 15.4739 16.89 15.2855 16.4351C15.097 15.9801 15 15.4925 15 15Z"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.5 22.5C7.5 21.5055 7.89509 20.5516 8.59835 19.8484C9.30161 19.1451 10.2554 18.75 11.25 18.75H15V22.5C15 23.4945 14.6049 24.4484 13.9016 25.1516C13.1984 25.8549 12.2446 26.25 11.25 26.25C10.2554 26.25 9.30161 25.8549 8.59835 25.1516C7.89509 24.4484 7.5 23.4945 7.5 22.5Z"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.5 15C7.5 14.0055 7.89509 13.0516 8.59835 12.3484C9.30161 11.6451 10.2554 11.25 11.25 11.25H15V18.75H11.25C10.2554 18.75 9.30161 18.3549 8.59835 17.6516C7.89509 16.9484 7.5 15.9945 7.5 15Z"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                </a>
                            </li>
                            <li>
                                <a href='/'>
                                    <svg
                                        width={30}
                                        height={30}
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.75 18.75C8.75 18.75 14.375 17.5 20 20"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M8.125 15C8.125 15 15.625 13.125 21.875 16.875"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.5 11.2503C11.25 10.6253 17.5 10.0003 23.75 13.7502"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15 27.5C8.09644 27.5 2.5 21.9035 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9035 2.5 27.5 8.09644 27.5 15C27.5 21.9035 21.9035 27.5 15 27.5Z"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        Crafted by Community_
                    </div>
                </div>

                {/*  */}

                <div className='flex justify-between pb-4'>
                    <div>
                        <p>© 2025 Blueberry Club</p>
                    </div>
                    <div>
                        <p>
                            All rights reserved
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
