import { useState, useEffect } from 'react'
import {Contract, providers} from "ethers";

function App() {

  const [isWalletInstalled, setIsWalletInstalled] = useState(false);

  const [account, setAccount] = useState(null);

  useEffect(() => {
    if(window.ethereum){
      setIsWalletInstalled(true);
    }
  }, []);

  return (
    <>
     
    </>
  )
}

export default App
