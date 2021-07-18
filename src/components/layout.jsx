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
                        <Link to='/articles'>Articles</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
            <h1 sx={{color: 'accent'}}>{pageTitle}</h1>
            {children}
            <footer sx={{color: 'muted'}}>
                Built with ❤️‍ by{' '}
                <a href='https://github.com/2kabhishek'>2KAbhishek</a>
            </footer>
        </main>
    );
};

export default Layout;
