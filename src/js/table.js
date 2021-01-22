class Table {

    constructor() {
        document.getElementById('dropdown').onclick = this.toggleDropdown;
    };

    initEvents() {
        document.querySelectorAll('.has-comment').forEach(item => {
            item.onclick = this.toggleComment;
        });
    };

    toggleDropdown(event) {
        const $this = event.target;

        $this.classList.toggle('open');
    };

    toggleComment(event) {
        const $this = event.target;

        $this.classList.toggle('show');
    };
};

export const table = new Table();
