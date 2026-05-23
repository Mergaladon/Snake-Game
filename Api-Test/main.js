const itemCountSpan = document.getElementById('item-count');
const form = document.querySelector('form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

function updateItemCount() {
  const count = taskList.children.length;
  itemCountSpan.textContent = count;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const taskText = taskInput.value;
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // click li to toggle done
  li.addEventListener('click', function () {
    li.classList.toggle('done');
  });

  // make a delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '×';      // little X
  deleteButton.className = 'delete';   // for styling

  // click X to remove the li
  deleteButton.addEventListener('click', function (event) {
    event.stopPropagation?.();  // optional: so clicking X doesn't toggle done
    li.remove();
    updateItemCount();          // update after delete
  });

  // put the button inside the li
  li.appendChild(deleteButton);

  taskList.appendChild(li);
  updateItemCount();            // update after add
  taskInput.value = '';
});