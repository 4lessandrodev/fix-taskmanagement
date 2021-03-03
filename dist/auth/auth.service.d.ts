import { UserRepository } from './user.repository';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signup(authDto: AuthDto): Promise<void>;
    signIn(authDto: AuthDto): Promise<{
        accessToken: string;
    }>;
}
