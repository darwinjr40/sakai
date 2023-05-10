
import { LayoutProvider } from '../layout/context/layoutcontext';
import Layout from '../layout/layout';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';

import "../styles/globals.css";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

function MyApp({ Component, pageProps }) {
  const [walletAccount, setWalletAccount] = useState("");
  const [isConnectedToRinkeby, setConnectedToRinkeby] = useState (true);

  const checkIfMetaMaskIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Check if Metamask is installed.");
    } else {
      console.log("Check if Metamask is installed.");

      ethereum.on("chainChanged", function (networkId) {
        console.log(parseInt(networkId));
        if (parseInt(networkId) !== 11155111) {
        setConnectedToRinkeby(false);
        } else {
        setConnectedToRinkeby(true) ;
        }
      });
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    if (accounts.length != 0) {
      setWalletAccount(accounts[0]);
    } else {
      console.log("Not authorized");
    }
  };

  useEffect(() => {
    checkIfMetaMaskIsConnected();
  }, []);

  const connectMetamask = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts[0]);
      setWalletAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>

      {!isConnectedToRinkeby && (
        <div className={styles.container}>
          <div className={styles.wrongNetwork}>
            <h1>Red Equivocada</h1>
            <p>
              {" "}
              Por favor conectarse a la red Rinkeby en su MetaMask. Gracias
            </p>
          </div>
        </div>
        )
      }
      {!walletAccount && (
        <div className={styles.container}>
          <button
            className={styles.eth_connect_wallet_button}
            onClick={connectMetamask}
          >
            Iniciar
          </button>
        </div>
      )}

      {(walletAccount && isConnectedToRinkeby) && (        
        <div>
          <main>
          <LayoutProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </LayoutProvider>
          </main>
        </div>
      )}
    </div>  
  );
}

export default MyApp;
