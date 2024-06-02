import { ConfigService } from '@nestjs/config';
import { UserService } from '../user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private userService;
    constructor(configService: ConfigService, userService: UserService);
    validate({ id }: {
        id: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        name: string;
        password: string;
    }>;
}
export {};