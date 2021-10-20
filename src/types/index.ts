export type User = {
  avatar_url: string;
  github_id: number
  id: string;
  login: string;
  name: string;
}

export type Message = {
  created_at: string;
  id: string;
  text: string;
  user: User;
  user_id: string;
}

export type AuthResponse = {
  token: string;
  user: User;
}