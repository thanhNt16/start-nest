import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'johndoe@example.com',
    description: 'The user email',
  })
  email: string;

  @ApiProperty({ example: 'P@ssw0rd', description: 'The user password' })
  password: string;
}
