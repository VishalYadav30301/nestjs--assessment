import { Body, Controller, Get, Put, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserResponse } from './dto/current-user.dto';
import { UpdateUserRequest } from './dto/update-user.dto';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Get()
  async current(@Request() req): Promise<UserResponse> {
    return {
      user: await this.authService.getUserWithToken(req.user),
    };
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  async update(
    @Body() command: UpdateUserRequest,
    @Request() req,
  ): Promise<UserResponse> {
    return {
      user: await this.authService.getUserWithToken(
        await this.userService.update(command.user, req.user),
      ),
    };
  }
}