

import Context from "@/ContextAPI"
import { useContext } from "react"
const Navbars = ({ children }) => {
    const context=useContext(Context);
    return (
        <>
            <nav className="fixed flex top-0 z-50 w-full bg-bg2-col border-b border-text-col dark:bg-text-col dark:border-text-col">
                <div className="px-3 py-3 lg:px-5 lg:pl-3 w-full">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <button
                                data-drawer-target="logo-sidebar"
                                data-drawer-toggle="logo-sidebar"
                                aria-controls="logo-sidebar"
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-primary-col rounded-lg sm:hidden focus:outline-none "
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    />
                                </svg>
                            </button>

                                <span className="text-xl font-bold sm:text-2xl  space-nowrap text-primary-col ml-2">
                                    Society Synergy
                                </span>
            
                        </div>
                        <div class="justify-self-center md:flex hidden">
                            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                            <div class="relative hidden md:block">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                    <span class="sr-only">Search icon</span>
                                </div>
                                <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm border-none text-white focus:outline-none focus:outline-primary-col rounded-lg bg-bg1-col " placeholder="Search..." />
                            </div>
                        </div>
                        <div className="flex items-center mx-2">
                            <div className="flex items-center ms-3">
                                <div>
                                    <button
                                        type="button"
                                        className="flex text-sm bg-text-col rounded-full focus:ring-4 focus:ring-text-col dark:focus:ring-text-col"
                                        aria-expanded="false"
                                        data-dropdown-toggle="dropdown-user"
                                    >
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="w-8 h-8 rounded-full"
                                            src={context.dept.club.logoUrl}
                                            alt="user photo"
                                        />
                                    </button>
                                </div>
                                <div
                                    className="z-50 hidden my-4 text-base list-none bg-bg2-col divide-y divide-text-col rounded shadow dark:bg-text-col dark:divide-text-col"
                                    id="dropdown-user"
                                >
                                    <div className="px-4 py-3" role="none">
                                        <p
                                            className="text-sm text-text-col dark:text-bg2-col"
                                            role="none"
                                        >
                                            Neil Sims
                                        </p>
                                        <p
                                            className="text-sm font-medium text-text-col truncate dark:text-text-col"
                                            role="none"
                                        >
                                            neil.sims@flowbite.com
                                        </p>
                                    </div>
                                    <ul className="py-1" role="none">
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-text-col hover:bg-text-col dark:text-text-col dark:hover:bg-text-col dark:hover:text-bg2-col"
                                                role="menuitem"
                                            >
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-text-col hover:bg-text-col dark:text-text-col dark:hover:bg-text-col dark:hover:text-bg2-col"
                                                role="menuitem"
                                            >
                                                Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-text-col hover:bg-text-col dark:text-text-col dark:hover:bg-text-col dark:hover:text-bg2-col"
                                                role="menuitem"
                                            >
                                                Earnings
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-text-col hover:bg-text-col dark:text-text-col dark:hover:bg-text-col dark:hover:text-bg2-col"
                                                role="menuitem"
                                            >
                                                Sign out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <aside
                id="logo-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-bg2-col border-r border-text-col sm:translate-x-0 dark:bg-text-col dark:border-text-col"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-bg2-col dark:bg-text-col">
                    <ul className="space-y-2 font-medium">

                        <li className="my-5 ml-2">
                            <span className="font-bold text-2xl text-text-col">GDSC</span>
                        </li>

                        <li>
                            <a
                                href="/"
                                className="flex items-center p-2 text-text-col rounded-lg dark:text-bg2-col hover:bg-text-col dark:hover:bg-text-col group"
                            >
                                <svg
                                    className="w-5 h-5 text-text-col transition duration-75 dark:text-text-col group-hover:text-text-col dark:group-hover:text-bg2-col"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21"
                                >
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-text-col rounded-lg dark:text-bg2-col hover:bg-text-col dark:hover:bg-text-col group"
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-text-col transition duration-75 dark:text-text-col group-hover:text-text-col dark:group-hover:text-bg2-col"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 18"
                                >
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span className="flex-1 ms-3 bg2-colspace-nowrap">
                                    Overview
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/events"
                                className="flex items-center p-2 text-text-col rounded-lg dark:text-bg2-col hover:bg-text-col dark:hover:bg-text-col group"
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-text-col transition duration-75 dark:text-text-col group-hover:text-text-col dark:group-hover:text-bg2-col"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="flex-1 ms-3 bg2-colspace-nowrap">
                                    Events
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/members"
                                className="flex items-center p-2 text-text-col rounded-lg dark:text-bg2-col hover:bg-text-col dark:hover:bg-text-col group"
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-text-col transition duration-75 dark:text-text-col group-hover:text-text-col dark:group-hover:text-bg2-col"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 18"
                                >
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span className="flex-1 ms-3 bg2-colspace-nowrap">
                                    Members
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className="p-8 sm:ml-64">{children}</div>
        </>
    )
}

export default Navbars
