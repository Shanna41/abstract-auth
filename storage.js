const DB_NAME = 'abstract-auth-demo';
const STORE = 'wallet';

function openDb() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(DB_NAME, 1);

        req.onupgradeneeded = () => {
            req.result.createObjectStore(STORE);
        };

        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

export async function saveWalletRecord(wallet) {
    const db = await openDb();
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put(wallet, 'wallet');
}

export async function loadWalletRecord() {
    const db = await openDb();
    const tx = db.transaction(STORE, 'readonly');
    return new Promise((resolve) => {
        const req = tx.objecStore(STORE).get('wallet');
        req.onsuccess = () => resolve(req.result || null);

    });
}