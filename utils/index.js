export const phoneReg=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;

export function importAll(r, fn = (key, r) => r(key)) {
    r.keys().forEach((key) => fn(key, r))
}

export * from './date';