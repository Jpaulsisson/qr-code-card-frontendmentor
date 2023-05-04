import './App.css'
import QR from '../../qr-code-component-main/images/image-qr-code.png';

function App() {
  return (
    <>
      <div className="main-card-container">
        <div className="main-card">
          <img src={QR} className='qr-code-img' />
          <h2>Improve your front-end skills by building projects</h2>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </>
  )
}

export default App
