import './HeroSection.css';
import Image from '../../photo-1571786256017-aee7a0c009b6.avif';
function HeroSection(){
  return(
    <>
      <main>
        <div className="Welcome-editorial">
          <h1>Network Shop</h1>
          <h3>Welcome to our network shop</h3>
          <p></p>
          <p></p>
        </div>
        <div className="Hero-image">
        <img src={Image} style={{width:"300px", height:"300px", borderRadius:"8px"}} alt=""/>
        </div>
      </main>
    </>
  )
}

export default HeroSection;