import { IsEmail, IsString } from 'class-validator'

export class UserDto {
	@IsEmail()
	email: string

	password?: string

	@IsString()
	login: string

	@IsString()
	name: string

	@IsString()
	surname: string

	@IsString()
	avatarPath
}
