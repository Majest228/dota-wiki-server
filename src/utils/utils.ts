export const getHeroStats = (id?: number) => {
	return {
		where: { id },
		relations: {
			skills: {}
		},
		select: {
			skills: {
				id: true,
				name: true,
				active: true,
				cooldown: true,
				damageOrHeal: true,
				damageYourself: true,
				description: true,
				iconPath: true,
				manapool: true,
				not_magic: true,
				quote: true,
				skill: true,
				typeDamage: true,
				videoPath: true
			}
		}
	}
}
