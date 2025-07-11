import React, { useEffect, useState, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import AnimatedCursor from 'react-animated-cursor'; // Import AnimatedCursor library
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'


const Scroll = () => {
  // const headerRef = useRef(null);
  const [cursorColor, setCursorColor] = useState('0,0,0'); // Initial cursor color

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }


  const openNav = () => {
    document.getElementById("mySidenav").style.width = "300px";
  }

  /* Set the width of the side navigation to 0 */
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }


  useEffect(() => {
    const bodyScrollBar = Scrollbar.init(document.body, {
      damping: 0.03,
      plugins: {
        overscroll: {
          ...OverscrollPlugin,
          options: {
            enable: true,
            damping: 0.2,
            effect: 'glow',
            maxOverscroll: 100,
            offset: 100

          }
        }
      }
    });

    // Update position fixed elements when scrollbar updates
    bodyScrollBar.addListener(({ offset }) => {

      document.querySelectorAll('[data-fixed]').forEach(element => {

        element.style.top = `${offset.y}px`;
        element.style.transform = `translate3d(0px, ${offset.y}px, 0px);`;

      });
      document.querySelectorAll('[data-sticky]').forEach(element => {
        element.style.top = `${offset.y}px`;
      });
    });

    return () => {
      bodyScrollBar.destroy();
    };
  }, []);





  return (
    <>
      <div id="mySidenav" className="sidenav">
        <div className='flex justify-between items-center'>
          <h2 className='ml-8 text-3xl font-semibold'>Menu</h2>

          <div>
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </a>
          </div>
        </div>
        <div className='pt-28'>

          <a href='/' className='text-zoomed'>
            Home
          </a>

          <a href='/contact' className='text-zoomed'>
            Contacts
          </a>


          <a href='/expertises' className='text-zoomed'>
            Expertise
          </a>

          {/*  */}


          <a href='/portfolios' className='text-zoomed'>
            Portfolio
          </a>

          <a href="/start" className=' flex items-center text-zoomed'>
            Start Intake



          </a>
        </div>
      </div>


      <header data-fixed className='header-blurry py-[0.8vw] mt-4 w-full'>
        <div className='container mobile-hidden'>
          <div className='flex justify-between items-center list-section'>
      <div className="logo-wrapper">
  {/* Default (non-hovered) logo */}
  <div className="logo normal">
    {/* Your default logo SVG here */}
    <svg
      width={42}
      height={51}
      viewBox="0 0 42 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_64)">
        <path
          d="M22.5174 51C33.2774 51 42 42.2822 42 31.5282C42 20.7743 33.2774 12.0564 22.5174 12.0564C11.7575 12.0564 3.03488 20.7743 3.03488 31.5282C3.03488 42.2822 11.7575 51 22.5174 51Z"
          fill="#0B07A5"
        />
        <path
          opacity="0.5"
          d="M8.18003 4.08775C8.18003 1.83015 6.34887 0 4.09001 0C1.83116 0 0 1.83015 0 4.08775V46.9122C0 49.1698 1.83116 51 4.09001 51C6.34887 51 8.18003 49.1698 8.18003 46.9122V4.08775Z"
          fill="#1783C6"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_64">
          <rect width={42} height={51} fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>

  {/* White logo on hover */}
  <div className="logo hover">
    {/* White logo SVG here */}
    <svg
      width={42}
      height={51}
      viewBox="0 0 42 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_58)">
        <path
          d="M22.5174 51C33.2774 51 42 42.2822 42 31.5282C42 20.7743 33.2774 12.0564 22.5174 12.0564C11.7575 12.0564 3.03488 20.7743 3.03488 31.5282C3.03488 42.2822 11.7575 51 22.5174 51Z"
          fill="white"
        />
        <path
          opacity="0.5"
          d="M8.18003 4.08775C8.18003 1.83015 6.34887 0 4.09001 0C1.83116 0 0 1.83015 0 4.08775V46.9122C0 49.1698 1.83116 51 4.09001 51C6.34887 51 8.18003 49.1698 8.18003 46.9122V4.08775Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_58">
          <rect width={42} height={51} fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
</div>


            <div>
              <a href="/" className=' text-zoomed bg-white block font-bold text-center leading-[25px] h-12 w-32 rounded-2xl m-auto'>
                Get in Touch
              </a>
            </div>
          </div>
        </div>


        <div className='lg:hidden'>
          <div className='flex justify-between items-center px-10 py-2'>
            <a href='/' className=''>
              <img src='/assets/images/logo.svg' className='h-[2.3rem]' alt='' />
            </a>

            <button className='' onClick={openNav}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
            </button>

          </div>
        </div>

      </header>
    </>

  )
};

export default Scroll;
