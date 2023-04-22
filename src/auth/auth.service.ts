import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
var randtoken = require('rand-token');


@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.userService.getUserByEmail(email);
        if (user) {
            const { password, ...result } = user;
            const isMatch = await bcrypt.compare(pass, user.password);
            if (isMatch) {
                return result;
            }
        }
        return null;
    }

    
    async generateRefreshToken(userId):  Promise<string>{
        var refreshToken = randtoken.generate(16);
        var expirydate =new Date();
        expirydate.setDate(expirydate.getDate() + 6);
        await this.userService.saveOrUpdateRefreshToken(userId, refreshToken , expirydate);
        return refreshToken
    }
    
    async login(user: any) {
        const payload = { email: user.email, sub: user.id };
        return {
          access_token: this.jwtService.sign(payload),
          refresh_token: await this.generateRefreshToken(user.id)
        };
    }


}
