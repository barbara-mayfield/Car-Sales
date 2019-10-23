export const UPDATE_TOTAL = "UPDATE_TOTAL"

export function updateTotal(total) {
    return {
        type: UPDATE_TOTAL,
        payload: total
    }
}