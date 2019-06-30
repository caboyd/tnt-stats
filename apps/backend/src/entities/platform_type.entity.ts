import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Player } from './player.entity';


@Entity('platform_type', { schema: 'tntstats' })
export class PlatformType {

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


    @OneToMany('Player', 'platform_type')
    players: Player[];

}
