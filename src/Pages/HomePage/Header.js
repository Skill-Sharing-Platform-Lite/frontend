import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
    return (
        <header className="flex items-center bg-white text-black p-5 mx-auto w-full max-w-5xl">
            {/* Custom SVG icon */}
            <div className="flex items-center">
                <svg
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M19.4713 26.5417L14.9653 26.5435C14.1239 28.9214 11.8556 30.625 9.18945 30.625C5.8067 30.625 3.06445 27.8828 3.06445 24.5C3.06445 21.1172 5.8067 18.375 9.18945 18.375C11.8564 18.375 14.1252 20.0795 14.966 22.4585L19.4713 22.4583L26.5437 10.2083L33.017 10.2085C33.8579 7.82949 36.1266 6.125 38.7937 6.125C42.1763 6.125 44.9187 8.86726 44.9187 12.25C44.9187 15.6327 42.1763 18.375 38.7937 18.375C36.1274 18.375 33.8592 16.6715 33.0178 14.2935L28.8997 14.2917L23.0075 24.498L28.9018 34.7083L33.017 34.7085C33.8579 32.3296 36.1266 30.625 38.7937 30.625C42.1763 30.625 44.9187 33.3672 44.9187 36.75C44.9187 40.1328 42.1763 42.875 38.7937 42.875C36.1274 42.875 33.8592 41.1714 33.0178 38.7935L26.5437 38.7917L19.4713 26.5417ZM38.7937 34.7083C37.666 34.7083 36.752 35.6224 36.752 36.75C36.752 37.8776 37.666 38.7917 38.7937 38.7917C39.9213 38.7917 40.8353 37.8776 40.8353 36.75C40.8353 35.6224 39.9213 34.7083 38.7937 34.7083ZM9.18945 22.4583C8.06186 22.4583 7.14779 23.3724 7.14779 24.5C7.14779 25.6276 8.06186 26.5417 9.18945 26.5417C10.317 26.5417 11.2311 25.6276 11.2311 24.5C11.2311 23.3724 10.317 22.4583 9.18945 22.4583ZM38.7937 10.2083C37.666 10.2083 36.752 11.1224 36.752 12.25C36.752 13.3776 37.666 14.2917 38.7937 14.2917C39.9213 14.2917 40.8353 13.3776 40.8353 12.25C40.8353 11.1224 39.9213 10.2083 38.7937 10.2083Z"
                        fill="black"
                    />
                </svg>
            </div>
            <nav className="ml-auto">
                <ul className="flex space-x-5">
                    <li>
                        <Link to="#home" className="hover:text-blue-500 p-5">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="#about" className="hover:text-blue-500">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="#how-it-works" className="hover:text-blue-500">
                            How It Works
                        </Link>
                    </li>
                     <li><Link to="/chat" className="hover:underline">Chat</Link></li>
                              <li className="nav-item">
                                  <Link className="nav-link" to="/connect">
                                    Connect
                                  </Link>
                                </li>
                              <li><Link to='/profile'>profile</Link></li>
                    <li>
                        <Link to="#signin" className="hover:text-blue-500">
                            Sign In
                        </Link>
                    </li>
                    <li>
                        <Link to="#signup" className="hover:text-blue-500">
                            Sign Up Now
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
