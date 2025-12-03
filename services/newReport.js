import { nanoid } from 'nanoid'


export function addReport(terroristName, weapons, text){

    let id = nanoid();

    let repo = {id : id, terroristName : terroristName, weapons : [weapons], text : text};

    return repo;

};