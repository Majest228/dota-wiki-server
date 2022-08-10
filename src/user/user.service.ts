import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserDto } from './user.dto'
import { UserEntity } from './user.entity'
import { genSalt, hash } from 'bcryptjs'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>
	) {}

	async byId(id: number) {
		const user = await this.userRepository.findOne({
			where: {
				id
			}
		})

		if (!user) throw new NotFoundException('Пользователь не найден')

		return user
	}

	async updateProfile(id: number, dto: UserDto) {
		const user = await this.byId(id)

		const isSameUser = await this.userRepository.findOneBy({ email: dto.email })
		if (isSameUser && id !== isSameUser.id)
			throw new BadRequestException('Email занят')

		if (dto.password) {
			const salt = await genSalt(6)
			user.password = await hash(dto.password, salt)
		}

		user.email = dto.email
		user.name = dto.name
		user.login = dto.login
		user.avatarPath = dto.avatarPath
		user.surname = dto.surname

		return this.userRepository.save(user)
	}

	async getAll() {
		return this.userRepository.find()
	}
}
