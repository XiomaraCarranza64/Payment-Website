import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import CreditCard from './components/CreditCard';


function App() {
  return (
    <div className='w-screen'>
      <Navbar/>
        <div className=' flex w-full h-2/3 justify-center '>
        <Form/>
      </div>

    </div>
      
      
    
  );
}


export default App;
