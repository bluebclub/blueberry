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
     

      <header data-fixed className='header-blurry py-[0.8vw] mt-4 w-full'>
        <div className='container mobile-hidden'>
          <div className='flex justify-between  list-section'>
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
           <div className='flex justify-between  list-section'>
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


            {/* <div>
              <a href="/" className=' text-zoomed bg-white block font-bold text-center leading-[25px] h-12 w-32 rounded-2xl m-auto'>
                Get in Touch
              </a>
            </div> */}
          </div>
        </div>

      </header>
    </>

  )
};

export default Scroll;
