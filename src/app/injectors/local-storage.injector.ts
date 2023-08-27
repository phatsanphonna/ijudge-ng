export const LOCAL_STORAGE = 'LOCAL_STORAGE'
export type LocalStorage = Storage;

export function getLocalStorage(): Storage | null {
    return (typeof window !== "undefined") ? window.localStorage : null;
}