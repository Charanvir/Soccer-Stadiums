import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Stadiums Across the World</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href='/new-stadium'>Add New Stadium</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
