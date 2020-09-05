import uniquid from 'uniquid';

export default class Outfit {

    constructor(name){
        this.name = name;
        this.id = uniquid(),
        this.items = [];
    }

    addItem(kamieniePrzy, kamienie){
        const item = {
            kamieniePrzy,
            kamienie
        }
        this.items.push(item);
        return item;
    }

    deleteItem(id){
        const index = this.items.find(el => el.id === id);
        this.items.splice(index, 1);
    }

    updateCount(id, newCount){
        this.items.find(el => el.id === id).count = newCount;
    }

    timer(){

    }
}