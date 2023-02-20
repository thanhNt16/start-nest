import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from './user.model';
import { AuthController } from 'src/auth/auth.controller';
import { PassportModule } from '@nestjs/passport';
const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    passportModule, // Add PassportModule here
  ],
  providers: [UserService],
  controllers: [UserController, AuthController],
  exports: [UserService, passportModule], // Add passportModule here
})
export class UserModule {}
