import { Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Player } from './player.entity';


@Entity('user', { schema: 'tntstats' })
@Index('fkIdx_225', ['player'])
export class User {

    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'id'
    })
    id: number;

    @OneToOne('Player', { nullable: true })
    @JoinColumn({ name: 'player_id' })
    player: Player | null;

}
