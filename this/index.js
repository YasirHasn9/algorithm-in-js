class NameFiled {
    constructor(name) {
        const li = document.createElement("li");
        li.textContent = name;
        const namesHook = document.querySelector("#names");
        namesHook.appendChild(li);
    }
}

class NameGenerator {
    constructor() {
        const btn = document.querySelector("button");
        // we are telling the js, hey js we need you to register this function and eventually will
        // be called when we click the button. when it called the function we passed to you a
        // reference to the function that we want you to execute it out. we don't end our function with ()
        // because we want js/browser to do that for us
        this.names = ["Yasir", "Hayden", "Aj"];
        this.count = 0;
        // now calling this function does not work because the "this" keyword dose not always
        // refers to the same object instead it refers to whoever causes to be called
        // in our case the button who causes the object to be called
        // js is great friend and therefor; provides for us a built-in function that helps to
        // bind the function to the class
        btn.addEventListener("click", () => this.addName());
    }

    addName() {
        let name = new NameFiled(this.names[this.count]);
        this.count++;
        if (this.count >= this.names.length) {
            this.count = 0;
        }
    }
}

const gen = new NameGenerator();
