
export const COURT_SEARCH = "COURT_SEARCH"

export function onCourtSearch(parameter) {
    return {
        type: COURT_SEARCH,
        payload: parameter
    }
}