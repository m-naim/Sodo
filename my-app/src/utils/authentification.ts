import { useContextValue } from "../shared/AppContextProvider";
import { initialState } from "../shared/initialState";

const defaultSession = JSON.stringify({ username: "" })

export const authentification = {

    session: JSON.parse(localStorage.getItem('session') || defaultSession),
    isAuthenticated() {
        if (window.localStorage.jwt || window.localStorage.session) {
            this.session = JSON.parse(localStorage.getItem('session') || '{}')
            return true
        }
        return false
    },
    authetificate(session: any) {
        this.session = session;
        localStorage.setItem('session', JSON.stringify(session))

    },
    signout() {
        localStorage.removeItem('session')
        localStorage.removeItem('session-state')
    }
}


function copyStorage(from: string, to: string) {
    let tmp = localStorage.getItem(`${from}-state`) || '{}'
    console.log('copy', tmp);
    localStorage.setItem(to, tmp)
}

