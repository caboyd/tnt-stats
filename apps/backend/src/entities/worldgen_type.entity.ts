import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MatchDetails } from './match_details.entity';


@Entity('worldgen_type', { schema: 'tntstats' })
export class WorldgenType {

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

    @OneToMany('MatchDetails', 'worldgen_type')
    match_details: MatchDetails[];

}
