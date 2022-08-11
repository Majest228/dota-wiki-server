import {
	Body,
	Controller,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { CurrentUser } from 'src/user/user.decorator'
import { HeroDto } from './hero.dto'
import { HeroService } from './hero.service'

@Controller('hero')
export class HeroController {
	constructor(private readonly heroService: HeroService) {}

	@HttpCode(200)
	@Get()
	async getAll() {
		return this.heroService.getAll()
	}
	@HttpCode(200)
	@Get(':id')
	async getHero(@Param('id') id: string) {
		return this.heroService.byId(+id)
	}

	@HttpCode(200)
	@Post('create')
	async createHero() {
		return this.heroService.createHero()
	}

	@HttpCode(200)
	@Put(':id')
	async updateHero(@Param('id') id: string, @Body() dto: HeroDto) {
		return this.heroService.updateHero(+id, dto)
	}
}
