import { HttpService } from '@nestjs/axios';
import { UnauthorizedException } from '@nestjs/common';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { AuthPort, LoginResponse } from 'src/auth/domain/AuthPort';

export class Auth0Provider implements AuthPort {
  constructor(private readonly httpService: HttpService) {}
  async login(params: {
    user: string;
    password: string;
  }): Promise<LoginResponse> {
    const { user, password } = params;
    try {
      const response = await lastValueFrom(
        this.httpService.post(`${process.env.AUTH0_DOMAIN}oauth/token`, {
          grant_type: 'client_credentials',
          audience: process.env.AUTH0_AUDIENCE,
          client_id: process.env.AUTH0_CLIENT_ID,
          client_secret: process.env.AUTH0_CLIENT_SECRET,
          username: user,
          password: password,
        }),
      );
      const data = response.data;
      const loginRespose = {
        accessToken: data.access_token,
        expire: data.expires_in,
      } as LoginResponse;

      return loginRespose;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
