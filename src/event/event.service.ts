import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { EventDto } from './event.dto'


@Injectable()
export class EventService {
	constructor(private prisma: PrismaService) {}

	getById(id: string) {
		return this.prisma.event.findUnique({
			where: {
				id
			}
		})
	}
	
	async increaseViews(id: string) {
		return await this.prisma.event.update({
			where: {
				id
			},
			data: { views: { increment: 1 } }
		})
	}

	async getOne(userId: string, eventId: string, forUpdate: string) {
		if(forUpdate === '0') await this.increaseViews(eventId)
		const event = await this.getById(eventId)

		return event
	}
	
	getAll() {
		return this.prisma.event.findMany()
	}

	async create(userId: string, dto: EventDto) {
		const event = {
			user_id: userId,
			name: dto.name,
			description: dto.description,
			lat: dto.lat,
			lng: dto.lng,
			time: dto.time,
		}

		return this.prisma.event.create({
			data: event
		})
	}

	async update(userId: string, eventId: string, dto: EventDto) {
		const event = await this.getById(eventId)
		if(event.user_id !== userId) throw new BadRequestException('User can update only own events')

		return this.prisma.event.update({
			where: {
				id: eventId
			},
			data: dto,
		})
	}

	async delete(userId: string, eventId: string) {
		const event = await this.getById(eventId)
		if(event.user_id !== userId) throw new BadRequestException('User can delete only own events')

		return this.prisma.event.delete({
			where: { id: eventId }
		})
	}
}
