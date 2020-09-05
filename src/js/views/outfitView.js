export const renderResults = obj => {
   const markup = `
   <div class = "outfit" data-itemid="${obj.id}">
        <h3>${obj.name}</h3>
    </div>
   `;

   document.querySelector('.container-outfits').insertAdjacentHTML('afterbegin', markup);
};

export const renderValues = id => {
    const markup = `
    <div class = "modal-edit-outfit">
        <div class = "modal-outfit-content">
            <div class ="modal-close-bar2">
                <span>X</span>
            </div>
            <div class = 'work edit'>Praca</div>
            <div class = 'kam edit'>Kamienie</div>
            <div class = 'kam-przy edit'>Kamienie prz.</div>
        </div>
    </div>
    `;
 
    document.querySelector(`[data-itemid="${id}"`).insertAdjacentHTML('afterend', markup);
 };