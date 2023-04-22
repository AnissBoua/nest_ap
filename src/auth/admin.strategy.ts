import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Injectable, UnauthorizedException, Body } from "@nestjs/common";
import { jwtConstants } from "./constants";
import { UsersService } from "src/users/users.service";


@Injectable()
export class AdminStrategy extends PassportStrategy(Strategy,"jwt-admin") {
  constructor(private usersService:UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: jwtConstants.secret,
      passReqToCallback:true
    });
  }
 
  async validate(req, payload: any) {
    var user = await this.usersService.getUserByEmail(payload.email);
    
    if (user.type.name != "admin") {
        throw new UnauthorizedException();
    }

    const { password, ...result } = user;
    
    return result;
  }
}