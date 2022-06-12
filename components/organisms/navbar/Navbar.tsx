import styles from './Navbar.module.scss';
import { faCartShopping, 
    faUser, 
    faArrowDown, 
    faGears} from '@fortawesome/free-solid-svg-icons';
import { Icon, SRLink } from '../../';
import { useState } from 'react';

export const Navbar = () => {

    const [isDropdown, setDropdown] = useState(false);

    const clickUserIcon = () => {
        setDropdown(!isDropdown);
    }

    const userDropdown = <nav>
        <div>
            <SRLink href="/settings">
                Settings <Icon icon={faGears} size={"xs"}/>
            </SRLink>
        </div>
        <div>Logout (con icona)</div>
    </nav>;

    return (
        <>
        <nav className={`${styles.navbar} ${styles.shopRockNavbar}`}>
            <div className='my-10'>Shop Rock!</div>
            <div className='my-10'>
                <div className="mx-10">
                    <SRLink href="/cart/shopping">
                        <Icon icon={faCartShopping} />
                    </SRLink>
                </div>
                <div className="mx-10" onClick={clickUserIcon}>
                    <Icon icon={faUser} />
                    <Icon icon={faArrowDown} size={"xs"} />
                </div>
            </div>
        </nav>
        {isDropdown && userDropdown}
        </>
    );
}