/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Link} from 'gatsby';
import {} from './layout.module.css';

const Layout = ({pageTitle, children}) => {
    return (
        <main>
            <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
            <h1 sx={{color: 'accent'}}>{pageTitle}</h1>
            {children}
        </main>
    );
};

export default Layout;
