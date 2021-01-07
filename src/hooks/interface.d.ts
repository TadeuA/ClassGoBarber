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

export interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}
