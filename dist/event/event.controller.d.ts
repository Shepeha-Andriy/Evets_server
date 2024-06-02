import { EventDto } from './event.dto';
import { EventService } from './event.service';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    getEvent(id: string, params: {
        eventId: string;
    }, query: {
        forUpdate: string;
    }): Promise<{
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
    createEvent(id: string, dto: EventDto): Promise<{
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
    getEvents(): Promise<{
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
    updateEvent(id: string, params: {
        eventId: string;
    }, dto: EventDto): Promise<{
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
    deleteEvent(id: string, params: {
        eventId: string;
    }): Promise<{
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
