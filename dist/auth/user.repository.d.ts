import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthDto } from './dto/auth.dto';
export declare class UserRepository extends Repository<User> {
    signUp(authDto: AuthDto): Promise<void>;
    validateUserPassword(authDto: AuthDto): Promise<string>;
    private hashPassword;
}
