let notesContainer = document.getElementById("notesContainer");
let displayToggle = document.getElementById("test");
let textAreaEl = document.getElementById("textArea");
let firstPhase = document.getElementById("firstPhase");



let saveBtn = document.getElementById("saveBtn");

let count = 1;

function save(){
    let textAreaValue = textAreaEl.value;

    let uniqueId = "para" + count;
    count++;
    

    let notesContainerEl = document.createElement('div');
    notesContainerEl.setAttribute("id", uniqueId);
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
    iconEl.classList.add("fa-solid", "fa-trash");
    iconEl.setAttribute("id", uniqueId);
    iconEl.onclick = () => {
        notesContainer.removeChild(notesContainerEl);
    }
    iconContainer.appendChild(iconEl);

    textAreaEl.value = "";
    

}

saveBtn.onclick = save;

