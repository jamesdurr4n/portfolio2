let subButton = document.getElementById("itemsubmit");

// Renders the items from local storage so the page appears correct when it loads.
renderItems();

subButton.addEventListener("click", function() {

  // Start by getting the form values.
  let itemName = document.getElementById("itemname").value;

  if(itemName == "") { document.getElementById("itemname").classList.add("error");
    return;
  }

  // Make a JS object to contain the data we want to write into local storage for each item. This is nice because we can have one key:value pair as we do here, or 50.
  let itemObj = {
    'itemName': itemName
  };

  // Get the item list from localStorage. This uses a custom function, since we need to do this action in a few different places. See that function for deets of how it works.
  let existingItems = getItems();

  // Add the new item onto the end of the list.
  existingItems.push(itemObj);

  existingItems = JSON.stringify(existingItems);

  localStorage.setItem('items', existingItems);

  renderItems();
});

function getItems() {
  let items = localStorage.getItem('items');

  if (items == null) {
    return [];
  }

  items = JSON.parse(items);

  return items;
}

// Render the items to the screen using the DOM manipulation methods.
function renderItems() {
  // Use our custom getItems() function to retrieve info from local storage.
  let items = getItems();

  // Find the UL element within the #itemlist DIV.
  let itemUl = document.querySelector('#itemlist ul');

  // Cleared the contents of the UL to rebuild it fresh.
  itemUl.innerHTML = ""; // <-- this is the one time I'm okay with you using innerHTML. Otherwise build the DOM elements properly and don't concatenate strings :)

  // forEach is like a shorthand for() loop. It runs the internal function once per item in the array.
  items.forEach(function(item) {

    // Created a li DOM element to hold each item
    let itemLi = document.createElement('li');

    let itemName = document.createElement('span');
    itemName.setAttribute('class', 'itemname'); 
    itemName.innerText = item.itemName; // And we just put the text into this span, and nothing else.

    let itemRemove = document.createElement('button', "remove");
    itemRemove.setAttribute('class', 'remove');
    itemRemove.innerText = 'x'; 

    // Add an event handler to the remove button. To make this work properly we need to do two things. Remove the DOM element from the document _AND_ remove the correct item from the local storage list.
    itemRemove.addEventListener("click", function() {
      // This allows us to remove the list li element directly which takes care of the visual removal.
      itemLi.remove();

      // And the custom removeItem function helps us to remove it from local storage.
      removeItem(item.itemName);
    });

    // Add the name and remove button to the li
    itemLi.appendChild(itemName);
    itemLi.appendChild(itemRemove);

    // Add the li to the ul.
    itemUl.appendChild(itemLi);
  });
}

function removeItem(itemName) {
  let items = getItems();

  let itemIndex = items.findIndex(function(item) {
    return item.itemName == itemName;
  });

  items.splice(itemIndex, 1);

  items = JSON.stringify(items);
  localStorage.setItem('items', items);
}