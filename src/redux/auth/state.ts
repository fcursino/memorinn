export interface User {
  name: string | null;
  email: string | null;
  userName: string | null;
  token: string | null;
  id: string | null;
}

export const initialState: User = {
  name: null,
  email: null,
  userName: null,
  token: null,
  id: null,
};
