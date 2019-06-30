import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Match } from './match.entity';
import { WorldgenType } from './worldgen_type.entity';

@Entity('match_details', { schema: 'tntstats' })
@Index('fkIdx_370', ['match'])
@Index('fkIdx_290', ['worldgenType'])
export class MatchDetails {

    // @OneToOne('Match', 'match_details', { primary: true, nullable: false })
    // @JoinColumn({ name: 'match_id' })
    // match: Match | null;

    @Column('text', {
        nullable: true,
        name: 'file_url'
    })
    file_url: string | null;


    @Column('integer', {
        nullable: false,
        name: 'random_seed'
    })
    random_seed: number;


    @Column('integer', {
        nullable: false,
        name: 'world_seed'
    })
    world_seed: number;


    @Column('integer', {
        nullable: false,
        name: 'windmill_count'
    })
    windmill_count: number;


    @ManyToOne('WorldgenType', 'match_details', { nullable: false })
    @JoinColumn({ name: 'worldgen_type_id' })
    worldgen_type: WorldgenType | null;

    @Column('integer', {
        nullable: false,
        name: 'campsite_count'
    })
    campsite_count: number;

}
