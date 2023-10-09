import React, { useState,useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo1 } from './assets';
import { Home, CreatePost } from './pages';
import { useSearch } from './context/SearchContext';
import { AiOutlineSearch } from 'react-icons/ai';
import './App.css';

const App = () => {
  const { toggleSearch } = useSearch();
  const [searchButtonVisible, setSearchButtonVisible] = useState(true);
  const [bgClass, setBgClass] = useState('my-bg-default');

  const handleScrollDown = () => {
    // Calculate the position to scroll to (e.g., 2 seconds down)
    const scrollPosition = window.scrollY + (window.innerHeight * .5);

    // Scroll to the calculated position with smooth scrolling
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  };

  const determineBackgroundClass = (pathname) => {
    switch (pathname) {
      case '/':
        return 'my-bg-default'; // Use the background for the home page
      case '/create-post':
        return 'my-bg-new'; // Use the background for the create-post page
      default:
        return 'my-bg-default'; // Use the default background for other pages
    }
  };

  useEffect(() => {
    // Set the background class based on the current route
    setBgClass(determineBackgroundClass(location.pathname));
  
    // Set searchButtonVisible based on the current route
    if (location.pathname === '/') {
      setSearchButtonVisible(true);
    } else if (location.pathname === '/create-post') {
      setSearchButtonVisible(false);
    }
  }, [location.pathname]);

  const handleCreateButtonClick = () => {
    setSearchButtonVisible(false);
  };

  const handleShowButtonClick = () => {
    setSearchButtonVisible(true);
  };

  return (
    <BrowserRouter>
      <div className={bgClass} id="myElement">
        <header className='w-full flex justify-between items-center sm:px-8 px-4 py-4'>
          <Link to='/' onClick={handleShowButtonClick}>
            <img src={logo1} alt='logo' className='w-28 object-contain' />
          </Link>

          {searchButtonVisible && (
            <button className='text-white absolute right-40 transform translate-x-[-70%] flex items-center' onClick={() => {
              toggleSearch(); // Call the original toggleSearch function
              handleScrollDown(); // Add the scrolling functionality
            }}>
              <AiOutlineSearch/><span className="ml-2">Search</span>
            </button>
          )}

          {searchButtonVisible ? (
          <Link to='/create-post' onClick={handleCreateButtonClick} className='font-inter font-medium bg-[#FF3383]
            text-white px-12 py-2 rounded-md buton'>
            Create
          </Link>
          ):(
            <Link to='/' onClick={handleShowButtonClick} className='font-inter font-medium bg-[#FF3383] text-white px-12 py-2 rounded-md buton'>
              Back
            </Link> 
          )}
        </header>
        <main className='sm:p-8 px-4 py-8 w-full  min-h-[calc(100vh - 73px)] '>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
      </div>
      
    </BrowserRouter>
  );
};

export default App;
