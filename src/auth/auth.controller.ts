import { Controller, Post, Body, UseGuards, HttpStatus, HttpCode, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  // @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Body() userLogin, @Res() res: any){
    // return this.authService.login(userLogin);
    //gerando um error
    // console.log('gerando error')
    return res.status(404).json()
  }

}