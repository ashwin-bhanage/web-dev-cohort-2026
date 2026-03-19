const columns = document.querySelectorAll(".column");
let draggedTask = null;

// ADD TASK
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-btn")) {
        const txt = prompt("Enter Task Name");
        if (!txt) return;

        const task = document.createElement("div");
        task.className = "task";
        task.textContent = txt;
        task.draggable = true;

        e.target.previousElementSibling.appendChild(task);
    }
});

// DRAG START
document.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("task")) {
        draggedTask = e.target;
        e.target.classList.add("dragging");
    }
});

// DRAG END
document.addEventListener("dragend", (e) => {
    if (e.target.classList.contains("task")) {
        e.target.classList.remove("dragging");
        draggedTask = null;
    }
});

// DROP ZONES → FIXED TARGET
columns.forEach((col) => {
    const tasksContainer = col.querySelector(".tasks");

    tasksContainer.addEventListener("dragover", (e) => {
        e.preventDefault(); // REQUIRED
        col.classList.add("drag-over");
    });

    tasksContainer.addEventListener("dragleave", () => {
        col.classList.remove("drag-over");
    });

    tasksContainer.addEventListener("drop", () => {
        if (!draggedTask) return;

        tasksContainer.appendChild(draggedTask);

        col.classList.remove("drag-over");
    });
});
