'use client';

import './page.css';
import Navigation from '../components/Navigation';
import Wallet from '../components/Wallet';
import { MetaMaskProvider } from '@metamask/sdk-react';

const page = () => {
  const host = typeof window !== 'undefined' ? window.location.href : 'defaultHost'; // Чтобы window передавался в dApp метадату только на стороне клиента

  return (
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: 'MetaMask Wallet',
          url: host,
        },
      }}
    >
      <Navigation />
      <Wallet />
    </MetaMaskProvider>
  );
};

export default page;
