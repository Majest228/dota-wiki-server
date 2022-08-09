import {
	Body,
	Controller,
	Get,
	HttpCode,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Get('users')
	async login() {
		return this.userService.getAll()
	}
}
