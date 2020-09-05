import Outfit from './models/outfitClass';
import {renderResults, renderValues} from './views/outfitView';

// let openRequest = indexedDB.open("stroje", 0);

// openRequest.onupgradeneeded = function(){

// };

// openRequest.onerror = function() {
//     console.log("Error", openRequest.error);
// };

// openRequest.onsuccess = function () {
//     let db = openRequest.results;
    
// };

const toggleModal = () => {
    document.querySelector('.modal').classList.toggle('modal-hidden');
    document.querySelector('.inp-name').value = '';
};

document.querySelector('.btn-add').addEventListener('click', toggleModal);

document.querySelector('.modal-close-bar').addEventListener('click', toggleModal);

document.querySelector('.btn-save').addEventListener('click', () => {
    controlOutfit();
    toggleModal();
});


const state = {};

const controlOutfit = () => {

    const query = document.querySelector('.inp-name').value;
    //console.log(query);
    if(query){
        state.outfit = new Outfit(query);
        renderResults(state.outfit);

        document.querySelector('.modal-close-bar2').addEventListener('click', () => {
            document.querySelector('.modal-edit-outfit').classList.toggle('modal-hidden');
        });
       
    }

};


