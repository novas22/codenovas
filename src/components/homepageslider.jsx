
import { Slide } from 'react-slideshow-image';
import '../App.css'



const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '500px',
  width:"100%",
  
}

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'BECOME PARTNER OF CHOICE. EXCEED EXPECTATIONS.',
    caption1:'At Code Novas LLC, we deliver reliable solutions that exceeds our customers expectations.'

  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'ESTABLISH CONTINUING BUSINESS RELATIONSHIP. ENSURE SECURITY.',
    caption1:'At Code Novas  LLC, we are committed to efficiency, honesty and security.'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'FOCUS ON QUALITY. END WITH EXCELLENCE.',
    caption1:'We deliver Best Quality Solutions on time and at affordable cost.'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide indicators={true}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className='home_slider' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
               <div className='home_slider_captions'>
               <p> {slideImage.caption}</p>
               <p> {slideImage.caption1}</p>
               </div>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;