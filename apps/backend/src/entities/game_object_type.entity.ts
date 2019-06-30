import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ReplayEvent } from './replay_event.entity';

@Entity('game_object_type', { schema: 'tntstats' })
export class GameObjectType {

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


    @OneToMany('ReplayEvent', 'game_object_type')
    replay_events: ReplayEvent[];

}
