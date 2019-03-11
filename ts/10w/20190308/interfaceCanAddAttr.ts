interface Person{
    readonly IdCard: string;
    name?: string;
    [propName: string]: any;
}

let person: Person = { IdCard: 'asdasdasdasd' }

function getPerson(p: Person){
    console.log(p);
}

getPerson({ IdCard: 's', b: 2 });

