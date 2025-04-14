import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDTO {
  @IsNotEmpty()
  username?: string;

  @IsEmail()
  email?: string;

  bio?: string;

  image?: string;
}

export class UpdateUserRequest {
  user: UpdateUserDTO;
}