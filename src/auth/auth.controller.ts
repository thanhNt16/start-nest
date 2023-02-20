import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../models/user.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async register(@Body() user: User): Promise<{ access_token: string }> {
    const createdUser = await this.authService.register(user);
    const access_token = await this.authService.login(createdUser);
    return { access_token };
  }

  @Post('login')
  async login(@Body() user: User): Promise<{ access_token: string }> {
    const foundUser = await this.authService.validateUser(
      user.email,
      user.password,
    );
    const access_token = await this.authService.login(foundUser);
    return { access_token };
  }
}
