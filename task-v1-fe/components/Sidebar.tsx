"use client";
import React, { useState } from 'react';
import User2 from '../assets/User2.jpeg';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      {isSidebarOpen ? 
        <aside id="drawer-navigation" className="w-72 border-r border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="text-base flex items-center">
              <img className="object-cover rounded-full w-8 h-8" src={User2.src} alt="Your profile picture" />
              <span className="ml-2 text-sm font-semibold text-gray-700">Callie Spurlock</span>
              <svg className="ml-1 w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
              </svg>
            </div>

            <button onClick={() => setIsSidebarOpen(false)}>
              <svg className="w-6 h-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 16-4-4 4-4m-6 8-4-4 4-4"/>
              </svg>
            </button>
          </div>

          <div className="mt-8 group relative">
            <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
            </svg>
            <input
              type="text"
              placeholder="Search articles or rem..."
              className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            />
          </div>

          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium text-gray-500">
              <li>
                <a href="#" className="flex items-center p-1 rounded-lg hover:bg-gray-100 group">
                  <svg className="w-5 h-5 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                  </svg>
                  <span className="ms-3">All Notes</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center p-1 rounded-lg hover:bg-gray-100 group">
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/>
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Daily Notes</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center p-1 rounded-lg hover:bg-gray-100 group">
                  <svg className="flex-shrink-0 w-5 h-5 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Flashcards</span>
                  <span className="inline-flex items-center justify-center px-1 ms-3 text-xs font-medium bg-gray-100 rounded">120</span>
                </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-1 font-semibold text-indigo-600 border-indigo-600 bg-indigo-100 rounded-lg hover:bg-indigo-200 group">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Spaces</span>
              </a>
            </li>
            <li>
                <a href="#" className="flex items-center p-1 rounded-lg hover:bg-gray-100 group">
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Edit Later</span>
                </a>
            </li>
          </ul>
        </div>

        <ul className="my-2 flex p-2 flex-wrap text-sm font-medium text-center justify-center bg-gray-100 text-gray-400 rounded-lg">
          <li className="me-2">
            <a href="#" className="font-semibold text-gray-500 inline-block px-4 py-2 bg-gray-200 rounded-lg active" aria-current="page">Subscribed</a>
          </li>
          <li className="me-2">
            <a href="#"  className="inline-block px-4 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100">All Spaces</a>
          </li>
        </ul>

        <div className="h-full px-3 py-4 overflow-y-auto text-gray-500 text-base">
          <ul className="space-y-2 font-medium">
            <li>
              <button type="button" className="flex items-center w-full p-1 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">The Science of Biology</span>
              </button>
            </li>
            <li>
              <button type="button" className="flex items-center w-full p-1 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">The Chemistry of Life</span>
              </button>
            </li>
            <li>
              <button type="button" className="flex items-center w-full p-1 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">The Biosphere</span>
              </button>
              <ul id="dropdown-example" className="py-1 space-y-2">
                <li>
                  <a href="#" className="flex items-center w-full p-1 transition duration-75 rounded-lg pl-7 group text-gray-800 bg-gray-100">
                    <svg className="w-4 h-4 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                    What is Ecology?
                  </a>
                </li>
                <li><a href="#" className="flex items-center w-full p-1 transition duration-75 rounded-lg pl-12 group hover:text-gray-800">Energy Flow</a></li>
                <li>
                  <a href="#" className="flex items-center w-full p-1 transition duration-75 rounded-lg pl-7 group hover:text-gray-800">
                    <svg className="w-4 h-4 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                    Cycle of Matter
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center w-full p-1 transition duration-75 rounded-lg pl-7 group hover:text-gray-800">
                    <svg className="w-4 h-4 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                    The role of Climate
                  </a>
                </li>
                <li><a href="#" className="flex items-center w-full p-1 transition duration-75 rounded-lg pl-12 group hover:text-gray-800 text-ellipsis overflow-hidden">Renewable and Non...</a></li>
              </ul>
            </li>
            <li>
              <button type="button" className="flex items-center w-full p-1 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-ellipsis overflow-hidden">Ecosystems and Communities</span>
              </button>
            </li>
            <li>
              <button type="button" className="flex items-center w-full p-1 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Populations</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>:
      <div className="fixed top-5 border border-gray-200 rounded-lg shadow">
        <button className="flex" onClick={() => setIsSidebarOpen(true)}>
          <svg className="w-6 h-6 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>
          </svg>
        </button>
      </div>
    }
    </>
  );
};

export default Sidebar;
