import { generateWallet } from './auth/wallet.js';
import { saveWalletRecord, loadWalletRecord } from './auth/storage.js';
import { startSession } from './auth/session.js';

const output = document.getElementById('output');

document.getElementById('generate').onclick = async () => {
    const wallet = await generateWallet();
    output.textContent = `Generate Address:\n${wallet.address}`;
};

document.getElementById('save').onclick = async () => {
    const wallet = await generateWallet();
    await saveWalletRecord(wallet);
    output.textContent = `Saved Wallet:\n${wallet.address}`;
};

document.getElementById('login').onclick = async () => {
    const wallet = await loadWalletRecord();
    if (!wallet) {
        output.textContent = 'No wallet found.';
        return;
    }
    const session = startSession(wallet.address);
    output.textContent = `Logged in as:\n${session.walletAddress}`;
};

document.getElementById('recover').onclick = () => {
    output.textContent = 'Recovery not implemented in demo.';
};