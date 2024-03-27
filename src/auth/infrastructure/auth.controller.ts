import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor() {
    //this.authService = authService;
  }

  @Post('login')
  @ApiOperation({ summary: 'Iniciar Sesión' })
  async login(
    @Body() { email, password }: { email: string; password: string },
  ) {
    console.log({ email, password });
    return 'User logged in!';
  }

  @Post('forgot-password')
  @ApiOperation({ summary: 'Restablecer contraseña' })
  async forgotPassword(@Body() { email }: { email: string }) {
    console.log({ email });
    return 'Password reset link sent!';
  }
}
