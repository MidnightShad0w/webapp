export function updateAddress(value) {
    return {
        type: 'UPDATE_ADDRESS',
        payload: value
    };
}

export function updateCount(value) {
    return {
        type: 'UPDATE_COUNT',
        payload: value
    };
}