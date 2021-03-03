import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authDto: AuthDto): Promise<void>;
    signIn(authDto: AuthDto): Promise<{
        accessToken: string;
    }>;
}
