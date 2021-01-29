class Table {

    constructor() {
        document.onclick = this.hideOpenedElement;
        document.getElementById('dropdown').onclick = this.toggleElement.bind(true, this.hideOpenedElement);
    };

    initEvents() {
        document.querySelectorAll('.has-comment').forEach(item => {
            item.onclick = this.toggleElement.bind(true, this.hideOpenedElement);
        });
    };

    toggleElement(hideOpenedElement, event) {
        event.stopPropagation();
        
        const $this = event.target;

        if (!$this.classList.contains('show')) {
            hideOpenedElement();

            $this.classList.add('show');
        } else {
            $this.classList.remove('show');
        }
    };

    hideOpenedElement() {
        const dropdown = document.querySelector('#dropdown.show');
        const comment = document.querySelector('.has-comment.show');
        
        if (dropdown) dropdown.classList.remove('show');
        if (comment) comment.classList.remove('show');
    };
};

export const table = new Table();
