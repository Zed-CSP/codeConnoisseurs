//  all data-value attributes from span tags and stores them in an array
//from each class=post-card

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
  const ingredientSpans = document.querySelectorAll('span.ingredient');
  const ingredientValues = [];

  ingredientSpans.forEach((span) => {
    const value = span.getAttribute('data-value');
    if (value && !ingredientValues.includes(value)) {
      ingredientValues.push(value);
    }
  });

  console.log(ingredientValues);

  const mainClass = document.querySelector('.mg-cus-nav');
  const modalBody = 
  `<div class="modal fade hidden" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         <p>words</p>
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-secondary close" data-dismiss="modal">Close</button>
         <button type="button" class="btn btn-primary save">Save changes</button>
       </div>
     </div>
    </div>
  </div> `;
  
  //append modal to mainClass
  mainClass.innerHTML += modalBody;

  //grab a tag with class myModal
  const myModal = document.querySelector('.myModalbtn');
  const modal = new bootstrap.Modal(document.querySelector('.modal'));

  //grab ingredientValues and turn them to radio buttons
  //then add to modal-body
  ingredientValues.forEach((value) => {
    const checkBoxBtn = document.createElement('input');
    checkBoxBtn.setAttribute('type', 'checkbox');
    checkBoxBtn.setAttribute('name', 'ingredients');
    checkBoxBtn.setAttribute('value', value);
    checkBoxBtn.setAttribute('id', value);
    checkBoxBtn.setAttribute('style', 'width: 30px');
    checkBoxBtn.classList.add('ingredientCheck');

    const label = document.createElement('label');
    label.setAttribute('for', value);
    label.innerText = value;

    const br = document.createElement('br');

    document.querySelector('.modal-body').appendChild(checkBoxBtn);
    document.querySelector('.modal-body').appendChild(label);
    document.querySelector('.modal-body').appendChild(br);
  });

  //add event listener to myModal
  myModal.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    modal.toggle();
  });

  //grab all button with class close
  const closeBtns = document.querySelectorAll('.close');
  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.toggle();
    });
  });

  //grab button with class save
  const saveBtn = document.querySelector('.save');
  saveBtn.addEventListener('click', () => {
    showAllPostCards();
    modal.toggle();
    //on click, grab all checked buttons
    const checkedBtnArr = getingredientSelection();
    console.log(checkedBtnArr);
    hidePostCards(checkedBtnArr);
  });

  //grab all checked buttons
  const getingredientSelection = () => {
    const checkedBtns = document.querySelectorAll('.ingredientCheck:checked');
    const checkedBtnArr = [];
    checkedBtns.forEach((btn) => {
      checkedBtnArr.push(btn.value);
    });
    return checkedBtnArr;
  };

  //hide post cards that do not contain the selected ingredients
  const hidePostCards = (checkedBtnArr) => {
    if(checkedBtnArr.length === 0) { return;};
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach((card) => {
      let hasIngredient = false;
      const cardIngredients = card.querySelectorAll('.ingredient');
      cardIngredients.forEach((ingredient) => {
        // console.log(ingredient.getAttribute('data-value'));
        if (checkedBtnArr.includes(ingredient.getAttribute('data-value'))) {
          hasIngredient = true;
        }
      });
      if (!hasIngredient) {
        card.classList.add('hidden');
      }
    });
  }

});

//show all post cards
const showAllPostCards = () => {
  const postCards = document.querySelectorAll('.post-card');
  postCards.forEach((card) => {
    card.classList.remove('hidden');
  });
}