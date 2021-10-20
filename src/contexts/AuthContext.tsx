import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { AuthResponse, User } from "../types";

type AuthContextData = {
  user: User | null;
  signUrl: string;
  signOut: () => void;
}

type AuthProviderData = {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderData) {
  const [user, setUser] = useState<User | null>(null);

  const githubClientId = import.meta.env.VITE_APP_GITHUB_CLIENT_ID;
  const signUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${githubClientId}`;

  console.log(githubClientId);

  async function signIn(githubCode: string) {
    const response = await api.post<AuthResponse>(`/authenticate`, {
      code: githubCode
    });

    const { token, user } = response.data;

    localStorage.setItem('@dowhile:token', token);

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(user);
  } 

  function signOut() {
    setUser(null);
    localStorage.removeItem('@dowhile:token');
  }

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');

    if(hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=');

      window.history.pushState({}, '', urlWithoutCode);

      signIn(githubCode);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('@dowhile:token');

    if(token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      api.get<User>(`/profile`).then(res => setUser(res.data))
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signUrl,
      user,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}