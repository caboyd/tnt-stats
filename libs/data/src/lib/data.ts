import { IsInt, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

const tnt_date_offset = 504911232000000000;





class WeatherChance {
    Chance: number;
    Weather: string;
}

class Card {
    a_Data: string;
}

class Players {
    Player: Player[];
}

class Identity {
    a_Name: string;
    a_Slot: number;
    a_Id: number;
}


class Cards {
    @ValidateNested()
    @Type(() => Card)
    Card: Card[];
}

class Deck {
    HideInEditor: boolean;

    @ValidateNested()
    @Type(() => Cards)
    Cards: Cards;
}

class Player {
    @ValidateNested()
    @Type(() => Identity)
    Identity: Identity;
    IsBot: boolean;
    Observer: boolean;
    Deck: Deck;
    HideInEditor: number;
    ArmyIndex: number;
    FactionId: number;
    Personality: string;
    Team: number;
    Flag: number;
    PlayerPlatform: string;
}

class GameEvent {
    a_e: string;
    a_t: number;
    a_p: number;
    a_d: string;
}

export class WorldGenInfo {
    MissionType: string;
    Campfire: string;
    Windmill: string;
    Size: string;
    Environment: string;
}

class SpawnBases {
    Block: string;
}

class ExpansionBases {
    Block: string;
}

class Campsites {
    Block: string;
}

class ElevationChances {
    ElevationChance: string;
}

class WeatherTypes {
    @ValidateNested()
    @Type(() => WeatherChance)
    WeatherChance: WeatherChance[];
}

class TerrainElevationLayers {
    Layer: string;
}

class MapEdgeDecor {
    Decor: string;
}

class RoadChancePerElevation {
    RoadChance: number;
}

class WorldGen {
    DisplayName: string;
    HideInEditor: boolean;
    TeamConfiguration: string;
    Climate: string;
    WorldDimensions: string;
    DimensionsMin: string;
    DimensionsMax: string;
    SectorsMin: string;
    SectorsMax: string;
    SectorMargin: string;
    BaseCountMin: string;
    BaseCountMax: string;
    CampsiteCountMin: string;
    CampsiteCountMax: string;
    EdgeOfMapImportance: number;
    ProximityToEnemyImportance: number;
    ProximityToFriendlyImportance: number;
    UseCabins: boolean;
    MinEnemyDistance: number;
    FairnessMin: number;
    FairnessThresholdReductionPerFailure: number;
    FairnessSpawnNearEnemyImportance: number;
    FairnessExpansionsPerTeamImportance: number;
    FairnessElevationImportance: number;
    FairnessTeammateProximityImportance: number;
    FairnessBestNaturalImportance: number;
    FairnessMaxNaturalDistance: number;
    @ValidateNested()
    @Type(() => SpawnBases)
    SpawnBases: SpawnBases;
    @ValidateNested()
    @Type(() => ExpansionBases)
    ExpansionBases: ExpansionBases;
    @ValidateNested()
    @Type(() => Campsites)
    Campsites: Campsites;
    @ValidateNested()
    @Type(() => ElevationChances)
    ElevationChances: ElevationChances;
    ChanceOfStone: number;
    GeologyIterations: number;
    GeologyRadiusMin: number;
    GeologyRadiusMax: number;
    RampsMin: number;
    RampsMax: number;
    LakesMin: number;
    LakesMax: number;
    LakeSizeMin: number;
    LakeSizeMax: number;
    RiversMin: number;
    RiversMax: number;
    RiverSizeMin: number;
    RiverSizeMax: number;
    @ValidateNested()
    @Type(() => WeatherTypes)
    WeatherTypes: WeatherTypes;
    @ValidateNested()
    @Type(() => TerrainElevationLayers)
    TerrainElevationLayers: TerrainElevationLayers;
    TerrainShoreline: string;
    TerrainShallowWater: string;
    TerrainMediumWater: string;
    TerrainDeepWater: string;
    TerrainRamp: string;
    TerrainDefault: string;
    TerrainOutOfBounds: string;
    TerrainRampNatural: string;
    TerrainRampConstructed: string;
    TerrainCliffNatural: string;
    TerrainCliffConstructed: string;
    TerrainRoad: string;
    TerrainWater: string;
    TerrainBridge: string;
    FillerDecor: string;
    @ValidateNested()
    @Type(() => MapEdgeDecor)
    MapEdgeDecor: MapEdgeDecor;
    Forests: object;
    MinPathWidth: number;
    MaxPathWidth: number;
    @ValidateNested()
    @Type(() => RoadChancePerElevation)
    RoadChancePerElevation: RoadChancePerElevation;
    RoadMin: number;
    RoadMax: number;
    RoadMinWidth: number;
    RoadMaxWidth: number;
}


class Description {
    Filename: string;
    Name: string;
    Description: string;
    MissionType: string;
    Id: number;
    Seed: number;
    Source: string;
    TeamConfig: string;
    DeckSize: number;
    Script: string;
    SaveKey: string | null;
    HeroicKey: string | null;
    HasHiddenUnits: boolean;
    WorldGenInfo: WorldGenInfo;
    WorldGen: WorldGen;
}

class Results {
    @IsInt()
    WinningTeam: number;
    HeroicAchieved: boolean;
}

class GameEvents {
    @ValidateNested()
    @Type(() => GameEvent)
    g: GameEvent;
}

class EventHistory {
    @IsString()
    VersionHash: string;

    @ValidateNested()
    @Type(() => Description)
    Description: Description;
    @IsInt()
    WorldSeed: number;
    @IsInt()
    RandomSeed: number;
    @IsInt()
    DesyncCheckInterval: number;

    @IsNumber()
    MatchTime: number;

    @ValidateNested()
    @Type(() => Results)
    Results: Results;
    @IsInt()
    OriginalDate: number;

    @ValidateNested()
    @Type(() => Players)
    Players: Players;
    @IsInt()
    InputDelay: number;
    @IsInt()
    WindmillCount: number;
    @IsInt()
    CampsiteCount: number;

    @ValidateNested()
    @Type(() => GameEvents)
    GameEvents: GameEvents;
    @IsString()
    History: string;
}

export class Replay {
    @ValidateNested()
    @Type(() => EventHistory)
    EventHistory: EventHistory;
}
