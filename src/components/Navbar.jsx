import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';
import { useEffect } from 'react';
const Navbar = () => {
 
    useEffect(() => {
      // find the collection of elements with the class name 'my-text'
      const collection = document.getElementsByClassName('menu-items');
  
      // turn the collection into an array
      const myElements = Array.from(collection);
      myElements.forEach((element) => {
        // element.style.backgroundColor = 'red';
        
        element.addEventListener('click', () => {
          myElements.forEach((element) => {
            element.classList.remove("active_menu");
          })
          element.classList.add("active_menu");
              
            });
      });
  
     
    }, []);

  return (
    <nav className="navs">
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <>
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
              />              
            </>
            
          );
        })}
      </ul>
    </nav>
  );
};

// console.log(document.querySelectorAll(".menu-items")[0])
// let dropdown = document.querySelectorAll(".menu-items");
// dropdown.forEach(item => {   
//   item.addEventListener('click', (e) => {
//     console.log(item)     
    
//   });
  
// })

export default Navbar;
