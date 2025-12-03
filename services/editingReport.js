


export function editRepo(data, id, updatesKey, updatesValues){

    let count = 0;

    for (let repo of data){
        if (repo.id === id){
            for (let key in repo){
                if (key === updatesKey){
                    data[count][key] = updatesValues;
                    return repo;
                };
            };
        }
        else{
            count ++
        }

    };

    throw 'error'

};