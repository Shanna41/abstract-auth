// Simple in-memory session for demo purposes

let currentSession = null;

export function startSession(walletAddress) {
    currentSession = {
        walletAddress,
        starAt: new Date().toISOString()
    };
    return currentSession;
}

export function endSession() {
    currentSession = null;
}

export function getSession() {
    return currentSession;
}