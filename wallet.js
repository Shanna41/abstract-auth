// Placeholder wallet generator for demo
// Replace with Leo wallet adapter later

export async function generateWallet()    {
    const randomBytes = crypto.getRandomValues(new Uint8Array(32));
    const address = 'aleo1-' + btoa(String.fromCharCode(...randomBytes)).slice(0, 20);

    return {
        address,
        privateKeyBytes: randomBytes
    };
}