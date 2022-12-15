import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { connectWallet, walletaddress } from './features/pinksale/pinksaleSlice'
import { loadWeb3 } from './connectivity/connectivity';

function App() {
  const walletaddress = useSelector((state) => state.pinksale.walletaddress)
  // console.log('walletaddress',walletaddress)
  const dispatch = useDispatch()
  const coonect = async () => {
    let acc = await loadWeb3();

    dispatch(connectWallet(acc))
  }
  return (
    <div className="App">
      <div>
        <div>
          <button
            aria-label="Connect Wallet"
            onClick={() => coonect()}
          >
            connect Wallet
          </button>
          <h1>{walletaddress}</h1>

        </div>
      </div>
    </div>
  );
}

export default App;
