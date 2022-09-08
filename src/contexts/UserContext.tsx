import Cookies from 'js-cookie';
import { createContext, PropsWithChildren, useState } from "react";

interface UserType {
    user: string;
    token: string;
}

interface UserContextType {
    setUser: React.Dispatch<React.SetStateAction<UserType>>
    user: UserType;
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: PropsWithChildren) {

    const userByCookie = Cookies.get('user') ? JSON.parse(Cookies.get('user')!) : {};
    const [user, setUser] = useState(userByCookie)
    Cookies.set('user', JSON.stringify(user));

    return (
        <UserContext.Provider value={{ setUser, user }}>
            {children}
        </UserContext.Provider>
    )
}