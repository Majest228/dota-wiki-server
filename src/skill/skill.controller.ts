import { Body, Controller, HttpCode, Post } from '@nestjs/common'
import { SkillDto } from './skill.dto'
import { SkillService } from './skill.service'

@Controller('skill')
export class SkillController {
	constructor(private readonly skillService: SkillService) {}

	@HttpCode(200)
	@Post('create')
	async createHero(@Body() dto: SkillDto) {
		return this.skillService.createSkill(dto)
	}
}
