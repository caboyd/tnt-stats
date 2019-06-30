import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Match } from './match.entity';
import { EventType } from './event_type.entity';
import { GameObjectType } from './game_object_type.entity';


@Entity('replay_event', { schema: 'tntstats' })
@Index('fkIdx_299', ['eventType'])
@Index('fkIdx_308', ['gameObjectType'])
@Index('fkIdx_399', ['match'])
export class ReplayEvent {

    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'id'
    })
    id: number;

    @ManyToOne('Match', 'replay_events', { nullable: false })
    @JoinColumn({ name: 'match_id' })
    match: Match | null;

    @ManyToOne('EventType', 'replay_events', { nullable: false })
    @JoinColumn({ name: 'event_type_id' })
    event_type: EventType | null;


    @Column('integer', {
        nullable: false,
        name: 'timestamp'
    })
    timestamp: number;


    @Column('integer', {
        nullable: false,
        name: 'player_index'
    })
    player_index: number;


    @ManyToOne(type => GameObjectType, game_object_type => game_object_type.replay_events, { nullable: false })
    @JoinColumn({ name: 'game_object_type_id' })
    game_object_type: GameObjectType | null;

}
