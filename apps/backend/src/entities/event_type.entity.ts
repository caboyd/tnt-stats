import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ReplayEvent } from './replay_event.entity';

@Entity('event_type', { schema: 'tntstats' })
export class EventType {
    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'id'
    })
    id: number;

    @Column('text', {
        nullable: false,
        name: 'name'
    })
    name: string;

    @OneToMany('ReplayEvent', 'event_type')
    replay_events: Promise<ReplayEvent[]>;
}
