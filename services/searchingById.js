import { log } from "console"



export function searchById(data, id){

    let temp = ''

        for (let repo of data){
            if (repo.id === id){
                temp = repo;
                return temp;
            }
        }

    throw 'error'

};