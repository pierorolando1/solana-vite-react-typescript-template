/*
This file is the place where all the providers are defined and injected into the app.
*/

import { useMemo } from "react";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { clusterApiUrl } from "@solana/web3.js";
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter
} from '@solana/wallet-adapter-wallets';


const Providers: React.FC = ({ children }) => {
    const network = WalletAdapterNetwork.Mainnet;
    // You can also provide a custom RPC endpoint
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
    const WALLETS = useMemo(() => [
        new PhantomWalletAdapter(),
        new SlopeWalletAdapter(),
        new SolflareWalletAdapter(),
        new TorusWalletAdapter(),
        new LedgerWalletAdapter(),
        new SolletWalletAdapter({ network }),
        new SolletExtensionWalletAdapter({ network }),
      ], [network])

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider autoConnect wallets={WALLETS}>
                <WalletModalProvider>
                    { children }
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
};

export default Providers