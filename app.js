import { data } from "./services/database.js";
import { deleteRepoById } from "./services/deletingReportById.js";
import { editRepo } from "./services/editingReport.js";
import { getRepos } from "./services/gettingReports.js";
import { addReport } from "./services/newReport.js";
import { saveRepo } from "./services/saveReport.js";
import { searchById } from "./services/searchingById.js";

import input from 'analiza-sync';




let status = true;

while (status){

    console.log('1: Add a new intelligence report');
    console.log('2: Show all reports');
    console.log('3: Search report by ID');
    console.log('4: Delete report by ID');
    console.log('5: Edit report by ID');
    console.log('0: Exit');
    
    let userChoice = input('please choose what action do you want to make: ');
    let changeToNum = Number (userChoice)

    switch (changeToNum){
        case 1:
            let nameTerrorist = input('please write the name of the terrorist: ');
            let weaponKind = input('please write the weapon that he used: ');
            let addText = input('please write a little info: ')
            let addRepo = addReport(nameTerrorist, weaponKind, addText);
            let saveIt = saveRepo(addRepo, data);
            console.log(addRepo);
            break;

        case 2:
            let showAll = getRepos(data)
            console.log(showAll);
            break;

        case 3:
            let witchId = input('please write the id that you want to check: ')
            let search = searchById(data, witchId)
            console.log(search);
            break;

        case 4:
            let witchDelete = input('please write the id that you want to delete: ')
            let deleteOneRepo = deleteRepoById(data, witchDelete);
            console.log(deleteOneRepo);
            break;

        case 5:
            let witchUpdate = input('please write the id that you want to update: ')
            let updatesKey = input('please write which key do you want to update: ');
            let updatesValues = input('please write the new value: ');  
            let makeEdit = editRepo(data, witchUpdate, updatesKey ,updatesValues)
            console.log(makeEdit);
            break;

        case 0:
            status = false;
            break;

    }
}