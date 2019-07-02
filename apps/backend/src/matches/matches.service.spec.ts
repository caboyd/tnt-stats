import { Test, TestingModule } from '@nestjs/testing';
import { MatchesService } from './matches.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from '../entities/match.entity';

const path = require('path');
const fs = require('fs');


describe('MatchesService', () => {
    let service: MatchesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MatchesService, {
                provide: getRepositoryToken(Match),
                useClass: Repository
            }]
        }).compile();

        service = module.get<MatchesService>(MatchesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });


    describe('Test Replays', () => {
        const p = path.join(__dirname, '../', 'assets/replays/');
        const replay_1v1_filename = '1_vs_1_ranked.xml';
        const replay_3v1_filename = '3_vs_1.xml';
        const replay_bad_filename = 'bad_replay.xml';
        const invalid_filename = 'invalid_xml.xml';

        describe(replay_1v1_filename, () => {
            const file_path = path.join(p, replay_1v1_filename);

            it('should exist', () => {
                expect(fs.existsSync(file_path)).toBe(true);
            });

            it('should be valid replay', done => {
                fs.readFile(file_path, 'utf8', (err, data) => {
                    const result = service.XMLToReplay(data);
                    expect(service.validateReplay(result)).toBe(true);
                    done();
                });
            });
        });

        describe(replay_3v1_filename, () => {
            const file_path = path.join(p, replay_1v1_filename);

            it('should exist', () => {
                expect(fs.existsSync(file_path)).toBe(true);
            });

            it('should be valid replay', done => {
                fs.readFile(file_path, 'utf8', (err, data) => {
                    const result = service.XMLToReplay(data);
                    expect(service.validateReplay(result)).toBe(true);
                    done();
                });
            });
        });

        describe(replay_bad_filename, () => {
            const file_path = path.join(p, replay_bad_filename);

            it('should exist', () => {
                expect(fs.existsSync(file_path)).toBe(true);
            });

            it('should not be valid', done => {
                fs.readFile(file_path, 'utf8', (err, data) => {
                    const result = service.XMLToReplay(data);
                    const valid = service.validateReplay(result);
                    expect(valid).toBe(false);
                    done();
                });
            });
        });


        describe(invalid_filename, () => {
            const file_path = path.join(p, invalid_filename);

            it('should exist', () => {
                expect(fs.existsSync(file_path)).toBe(true);
            });

            it('should not be valid xml', done => {
                fs.readFile(file_path, 'utf8', (err, data) => {
                    const result = service.XMLToReplay(data);
                    expect(result).toBe(null);
                    done();
                });
            });
        });

    });

});
