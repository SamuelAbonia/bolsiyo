export interface LoginResponse {
  readonly accessToken: string;
  readonly expire: number;
}

export interface AuthPort {
  login(params: { user: string; password: string }): Promise<LoginResponse>;
}
