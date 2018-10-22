

export class Baby{
    private _name: string;
    constructor(name: string) {
        this._name = name;
        console.log('baby baby baby ohhhhhh!!!!');
    }
    static smile() {
        console.log('weixiao');
    }
    public getBabyName() : string{
        return this._name;
    }
}

export let baby = new Baby('Nico');