import { Inject, Injectable } from '@nestjs/common';
import { AuthPort } from 'src/auth/domain/AuthPort';

@Injectable()
export class ApiLogin {
  constructor(
    @Inject('AUHT0_PROVIED')
    private readonly authApi: AuthPort,
  ) {}

  async login(params: { user: string; password: string }) {
    return this.authApi.login(params);
  }
}
