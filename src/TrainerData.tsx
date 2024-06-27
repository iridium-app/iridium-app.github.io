import trainers from "./data/trainers.json"
let x: unknown = trainers;
interface IDictionary {
    [index: string]: TrainerInfo;
}
export type TrainerInfo = {
    name: string;
    numMons: number;
    battleType: string;
    party: {
        level: number;
        name: string;
        item: string;
        moveset: string[];
    }[];
};

class TrainerData {
    static Dict: IDictionary = x as {string: TrainerInfo };
}

export default TrainerData