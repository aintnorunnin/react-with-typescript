class Todo {
    id: string;
    text: string;

    constructor(text: string) {
        this.text = text;
        this.id = text + Math.random();
    }
}

export default Todo;