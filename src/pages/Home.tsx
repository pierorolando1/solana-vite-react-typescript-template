import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import '@solana/wallet-adapter-react-ui/styles.css'

export const Home = () => {

    const wallet = useWallet()

    return (
        <div className='bg-gray-900 min-h-screen flex items-center justify-center flex-col'>
            <WalletMultiButton />
            <hr className='my-3' />
            {
                wallet.connected &&
                <h1 className='text-gray-200 font-semibold'>
                    Your public key is 
                    {
                    ' '+wallet.publicKey?.toString()
                    }
                </h1>
            }
            <hr className='my-3' />
            {
                wallet.connected && <WalletDisconnectButton />
            }
        </div>
    )
};
