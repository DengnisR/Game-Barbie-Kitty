var items1L = [
  { imagen: 'Bshirt1.png'},
  { imagen: 'Bshirt2.png'},
  { imagen: 'Bshirt3.png'},
  { imagen: 'Bshirt4.png'}
];

var items2L = [
  { imagen: 'Bpant1.png'},
  { imagen: 'Bpant2.png'},
  { imagen: 'Bpant3.png'},
  { imagen: 'Bpant4.png'}
];

var items3L = [
  { imagen: 'Bshoes1.png'},
  { imagen: 'Bshoes2.png'},
  { imagen: 'Bshoes3.png'},
  { imagen: 'Bshoes4.png'}
];

var ListItems1 = document.getElementById('items1List');
var ListItems2 = document.getElementById('items2List');
var ListItems3 = document.getElementById('items3List');

insertItems(ListItems1, items1L, 'it1')
insertItems(ListItems2, items2L, 'it2')
insertItems(ListItems3, items3L, 'it3')

function addPiece(e, type) {
  var toChange = document.getElementById(type)
  toChange.src = 'img/'+e
}

// Function for insert objects in HTML with JS
function insertItems(objectHtml, arrayTrav, type) {
  var itemAccu = '';

  arrayTrav.forEach((itemArr, index) => {
    itemAccu += `<div style="width: 70px; margin: 5px; float:left">
        <button onclick="addPiece('${itemArr.imagen}', '${type}')"
          style="border: none; background: white; width: 25%; height: 50px;">
          <img src="img/${itemArr.imagen}" width="100px" height="100%" /> 
        </button>
      </div>
      `;
  });

  objectHtml.insertAdjacentHTML('afterbegin', itemAccu);
}
