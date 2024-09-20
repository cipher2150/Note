let notesContainer = document.getElementById("notesContainer");
//let notesContainer = document.getElementById("test");
let textAreaEl = document.getElementById("textArea");

let saveBtn = document.getElementById("saveBtn");

function save(){
    let textAreaValue = textArea.value;

    let notesContainerEl = document.createElement('div');
    notesContainerEl.classList.add("notes-container", "d-flex", "flex-row");
    notesContainer.appendChild(notesContainerEl);

    let notesTextContainer = document.createElement('div');
    notesTextContainer.classList.add("notes-item");
    notesContainerEl.appendChild(notesTextContainer);

    let textEl = document.createElement('p');
    textEl.classList.add("paragraph");
    textEl.textContent = textAreaValue;
    notesTextContainer.appendChild(textEl);

    let iconContainer = document.createElement('div');
    iconContainer.classList.add('delete-icon');
    notesContainerEl.appendChild(iconContainer);

    let iconEl = document.createElement('i');
    iconEl.classList.add('fa-solid', 'fa-trash');
    iconContainer.appendChild(iconEl);

    textAreaEl.value = "";
}

saveBtn.onclick = save;

