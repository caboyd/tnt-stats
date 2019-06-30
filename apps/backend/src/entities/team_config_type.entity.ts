import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Match } from './match.entity';


@Entity('team_config_type', { schema: 'tntstats' })
export class TeamConfigType {

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

    @OneToMany('Match', 'team_config_type')
    matches: Match[];

}
