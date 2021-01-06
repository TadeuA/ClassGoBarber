interface SignCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  token: string;
  user: Object;
}
export interface AuthContextData {
  user: Object;
  signIn(credentials: SignCredentials): Promise<void>;
  signOut(): void;
}
