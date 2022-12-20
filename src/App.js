import logo from './logo.svg';
import { unstable_HistoryRouter } from 'react-router-dom';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { connectWallet, walletaddress, connect } from './features/pinksale/pinksaleSlice'
import { loadWeb3 } from './connectivity/connectivity';
import Creatlock from './component/Creat_lock/Creatlock';
import Head from './component/Head/Head';
import Lockinfo from './component/Lock_detail/Lockinfo';
import Lockin from './component/Lock_in/Lockin';
import Mylockin from './component/Mylockin/Mylockin';
import Pink_drawer from './component/Pink_drawer/Pink_drawer';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const walletaddress = useSelector((state) => state.pinksale.walletaddress)
  console.log('walletaddress', walletaddress)
  const dispatch = useDispatch()
  // const coonect = async () => {
  //   let acc = await loadWeb3();

  //   dispatch(connectWallet(acc))
  // }
  return (
    <div className="App">
        <BrowserRouter>
        <Head/>
      {/* <Routes>
        <Route path="/Creatlock" element={<Creatlock/>}> </Route>
        <Route path="/Token" element={<Token />}> </Route>
        <Route path="/Lockinfo" element={<Lockinfo />}> </Route>
        <Route path="/Lockin" element={<Lockin />}> </Route>
        <Route path="/Mylockin" element={<Mylockin />}> </Route>
        
      </Routes> */}
      </BrowserRouter>
{/*     
      <Creatlock />/ */}
      {/* <Token/> */}
      {/* <Lockinfo/> */}
      {/* <Lockin/> */}
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
