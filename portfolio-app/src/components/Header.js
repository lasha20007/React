import React from 'react'
import {Link} from "react-router-dom";

export default function Header() {
    return(
        <div>
            <nav>
                <ul className='navigation'>
                    <li>
                        <Link className='link' to='/'>
                            Home Page
                        </Link>
                    </li>
                    
                    <li>
                        <Link className='link' to='/Movies'>
                            Movies
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to='/Contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
