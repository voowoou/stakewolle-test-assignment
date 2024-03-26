'use client';

import { Button, Snackbar } from '@mui/material';
import { useState } from 'react';
import {}


const Wallet = () => {
  const { connected, account, chainId, balance } = useSDK();
  const [chainName, setChainName] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(formatAddress(account)).then(() => {
      setSnackbarOpen(true);
    });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    connected && (
      <section>
        <h2>Wallet</h2>
        <div>
          <h3>Balance</h3>
          <div>
            <span>{formatBalance(balance)}</span>
            <span>{chainName}</span>
          </div>
        </div>
        <div>
          <h3>Adress</h3>
          <div>
            <span>{formatAddress(account)}</span>
            <Button variant="contained" onClick={handleCopyAddress}>
              COPY
            </Button>
          </div>
        </div>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          message="Address copied to clipboard"
          onClose={handleSnackbarClose}
        />
      </section>
    )
  );
};

export default Wallet;
