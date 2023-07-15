import Navbar from './Navbar';
// ...
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src="https://res.cloudinary.com/duw2d3yeh/image/upload/v1689329652/course/blob_qxyzbn.png" alt="logo"/>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
