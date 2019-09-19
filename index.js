/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';
// shopping list should be rendered to the page
// should be able to add items on the list
// should be able to check items on the list
// should be able to delete items on the list
const STORE = [
  {id: cuid(), name: 'apples', checked: false},
  {id: cuid(), name: 'oranges', checked: false},
  {id: cuid(), name: 'milk', checked: true},
  {id: cuid(), name: 'bread', checked: false}
];
  
  
function generateItemElement(item) {
  return `
      <li data-item-id="${item.id}">
        <span class="shopping-item js-shopping-item ${item.checked ? 'shopping-item__checked' : ''}">${item.name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle js-item-toggle">
              <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete js-item-delete">
              <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
}
  
  
function generateShoppingItemsString(shoppingList) {
  const items = shoppingList.map((item) => generateItemElement(item));
  return items.join('');
}
  
  
function renderShoppingList() {
  const shoppingListItemsString = generateShoppingItemsString(STORE);
  $('.js-shopping-list').html(shoppingListItemsString);
}

function handleNewItemSubmit() {
$('#js-shopping-list-entry').submit(e => {
    e.preventDefault();
    const newItem = $('.js-shopping-list-entry').val();
    addItemToShoppingList(newItem);
    renderShoppingList();
  });
}
  
  
function handleItemCheckClicked() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function(){
    $(this).find('span').toggleClass(' shopping-item__checked');
  });
}
  
  
function handleDeleteItemClicked() {
  $('.shopping-list').on('click', '.shopping-item-delete', function(){
    $(this).closest('li').remove();
  });
}
  
// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
}
  
// when the page loads, call `handleShoppingList`
handleShoppingList();