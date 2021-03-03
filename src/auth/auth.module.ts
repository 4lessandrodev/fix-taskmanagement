import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
/* import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository'; */
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { User } from './user.entity';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { AuthDto } from './dto/auth.dto';

@Module({
     imports: [
          PassportModule.register({ defaultStrategy: 'jwt' }),
          JwtModule.register({
               secret: 'topSecret51',
               signOptions: {
                    expiresIn: 3600,
               },
          }),
          /* TypeOrmModule.forFeature([UserRepository]), */
          NestjsQueryGraphQLModule.forFeature({
               imports: [NestjsQueryTypeOrmModule.forFeature([User])],
               resolvers: [
                    {
                         DTOClass: AuthDto,
                         EntityClass: User,
                    },
               ],
          }),
     ],
     controllers: [AuthController],
     providers: [AuthService, JwtStrategy],
     exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
