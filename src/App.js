import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { connectWallet, walletaddress, connect } from './features/pinksale/pinksaleSlice'
import { loadWeb3 } from './connectivity/connectivity';
import Creatlock from './component/Creat_lock/Creatlock';
import Token from './component/Token_pink/Token';
import { useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




function App() {
  const walletaddress = useSelector((state) => state.pinksale.walletaddress)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(connectWallet())
  }, []);

  return (
    <div className="App">
      <Creatlock />
      {/* <Token/> */}
      {/* <div>
        <div>
          <button
            aria-label="Connect Wallet"
            onClick={() => dispatch(connectWallet())}
          >
            connect Wallet
          </button>
          <h1>{walletaddress}</h1>

        </div>
      </div> */}
    </div>
  );
}

export default App;
