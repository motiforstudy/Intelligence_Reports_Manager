
export function deleteRepoById(data, id){

    let count = 0;

    for (let repo of data){

        if (repo.id === id){

            data.pop(count);
            return data;
            
        }
        else {
            count ++
        }

    };

    throw 'error';

};