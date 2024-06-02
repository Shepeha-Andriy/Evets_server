import { PrismaService } from 'src/prisma.service';
import { EventDto } from './event.dto';
export declare class EventService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(id: string): import("prisma/generated/client").Prisma.Prisma__EventClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        user_id: string;
        lat: number;
        lng: number;
        time: Date;
        name: string;
        description: string;
        views: number;
    }, null, import("prisma/generated/client/runtime/library").DefaultArgs>;
    increaseViews(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        user_id: string;
        lat: number;
        lng: number;
        time: Date;
        name: string;
        description: string;
        views: number;
    }>;
    getOne(userId: string, eventId: string, forUpdate: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        user_id: string;
        lat: number;
        lng: number;
        time: Date;
        name: string;
        description: string;
        views: number;
    }>;
    getAll(): import("prisma/generated/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        user_id: string;
        lat: number;
        lng: number;
        time: Date;
        name: string;
        description: string;
        views: number;
    }[]>;
    create(userId: string, dto: EventDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        user_id: string;
        lat: number;
        lng: number;
        time: Date;
        name: string;
        description: string;
        views: number;
    }>;
    update(userId: string, eventId: string, dto: EventDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        user_id: string;
        lat: number;
        lng: number;
        time: Date;
        name: string;
        description: string;
        views: number;
    }>;
    delete(userId: string, eventId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        user_id: string;
        lat: number;
        lng: number;
        time: Date;
        name: string;
        description: string;
        views: number;
    }>;
}
