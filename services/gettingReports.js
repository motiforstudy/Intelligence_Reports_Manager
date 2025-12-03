

export function getRepos(data){
    return data.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
};