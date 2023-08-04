import { Link } from 'react-router-dom';
import { useState } from 'react';
import { menuItems } from '../menuItems';
function MobileNavbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    return (
      <>
        <div style={styles.hamburger} onClick={toggleMenu}>
          <span style={styles.hamburgerIcon}></span>
          <span style={styles.hamburgerIcon}></span>
          <span style={styles.hamburgerIcon}></span>
        </div>
        {isMenuOpen && (
          <nav style={styles.nav}>
            <ul style={styles.menu}>
              {menuItems.map((item, index) => (
                <li key={index} style={styles.menuItem}>
                  <Link to={item.url} style={styles.link} onClick={toggleMenu}>
                    {item.title}
                  </Link>
                  {item.submenu && (
                    <ul style={styles.submenu}>
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} style={styles.submenuItem}>
                          <Link to={subItem.url} style={styles.link} onClick={toggleMenu}>
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </>
    );
  }
  
  export default MobileNavbar;
  
  const styles = {
    hamburger: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '30px',
      height: '30px',
      cursor: 'pointer',
    },
    hamburgerIcon: {
      width: '100%',
      height: '3px',
      backgroundColor: '#333',
      marginBottom: '3px',
    },
    nav: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: '#f5f5f5',
      padding: '20px',
      zIndex: '9999',
    },
    menu: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
    menuItem: {
      marginBottom: '10px',
    },
    link: {
      color: '#333',
      textDecoration: 'none',
      display: 'block',
      padding: '5px',
    },
    submenu: {
      listStyleType: 'none',
      paddingLeft: '15px',
    },
    submenuItem: {
      marginBottom: '5px',
    },
  };