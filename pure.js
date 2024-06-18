let button = document.querySelector("button");
let container = document.querySelector(".container");
let cross = document.querySelectorAll(".cross");
let save = document.querySelectorAll(".save");


let Messegesave = () => {
    let textarea = document.querySelectorAll(".notebox textarea");
    let data = [];
    /* textarea.forEach((note) => {
         data.push(note.value)
     })
     */
    for (let note of textarea) {
        data.push(note.value)
    }
    localStorage.setItem("note",JSON.stringify(data))
console.log(data)

}



let createnote = (text = "") => {
    let box = document.createElement("div");
    box.innerHTML = `<div class="notebox">
            <div class="top"><i class="fa-regular fa-floppy-disk save" style="color: #60e6ba;"></i>
                <i class="fa-solid fa-xmark cross" style="color: #FFD43B;"></i>
            </div>
            <div class="textwriter">
                <textarea name="notes" type="text" class="data" placeholder="Write here .......">${text}</textarea>
            </div>`
    container.append(box);
    Messegesave();
    let save = box.querySelector(".save");
    let cross = box.querySelector(".cross")

    container.addEventListener("click", (evt) => {
        let position = evt.target;

        if (position == save) {
            Messegesave();
            



        }
        if (position == cross) {
            box.remove();
            Messegesave();
        }
    })

}
button.addEventListener("click", () => {
    createnote();

})
let savedata = () => {
    let notes = JSON.parse(localStorage.getItem("note"));
    for (let note of notes) {
        createnote(note)
    }
}
savedata();







