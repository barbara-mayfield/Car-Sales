export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export function removeFeature(feature) {
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}