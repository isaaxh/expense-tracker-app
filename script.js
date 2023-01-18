const tableBody = document.querySelector('.table-body');
const btnAdd = document.querySelector('.btn-add');
const form = document.querySelector('.form');



form.addEventListener('submit', (e) => {
    const inputValue = document.querySelector('#name').value;
    const expenseDate = document.querySelector('#date-picker').value;
    const expenseAmount = document.querySelector('#amount').value;
    const errorElement = document.querySelector('.error-message');
    let messages = [];

    if (inputValue === '' || inputValue === null ||
        expenseDate === '' || expenseDate === null ||
        expenseAmount === '' || expenseAmount === null) {
            messages.push('Please fill all the fields');
        } else {
            e.preventDefault();
            errorElement.innerText = '';
            const newRow = document.createElement('tr');
            const newName = document.createElement('td');
            const newDate = document.createElement('td');
            const newAmount = document.createElement('td');
            const btnContainer = document.createElement('td');
            const btnDeleteItem = document.createElement('button');
        
            newName.innerText = inputValue;
            newDate.innerText = expenseDate;
            newAmount.innerText = expenseAmount;
            btnDeleteItem.innerText = 'X';
            btnDeleteItem.classList.add('btn-delete');
            btnDeleteItem.setAttribute('onClick', 'deleteItem(event)');
            btnContainer.appendChild(btnDeleteItem);
        
            newRow.appendChild(newName);
            newRow.appendChild(newDate);
            newRow.appendChild(newAmount);
            newRow.appendChild(btnContainer);
        
            tableBody.appendChild(newRow);
        }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }

})

function deleteItem(e){
    const tdElement = e.target.parentNode.parentNode;
    tdElement.remove();
}