import { table } from "./table";

class Template {

    constructor() {};

    createTable(data) {
        const subjects = data.subjects;
        
        let subjectDays = [];

        const creater = new Promise(resolve => {
            for (let subject in subjects) {
                this.createSubject(subject, data.days);
    
                subjects[subject].forEach(item => {
                    subjectDays.push(item[0].value);
    
                    this.createSubjectDays(subject, item);
                });
            }
    
            subjectDays = [...new Set(subjectDays)];
    
            this.createDays('#days', data.days, true);
    
            this.removeEmptyDays(data.days, subjectDays);

            resolve();
        });

        creater.then(() => {
            table.initEvents();
        });
    };

    createDays(selector, days, dayNumber) {
        const daysTemplate = document.querySelector(selector);

        days.forEach(day => {
            daysTemplate.innerHTML += `<div class="day" data-day="${day}">${dayNumber ? day : ''}</div>`;
        });
    };

    createSubject(subject, days) {
        const subjectsTemplate = document.getElementById('subjects');
        const randomColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();

        subjectsTemplate.innerHTML += `<div class="subject">
            <div class="name" style="border-left: 4px solid ${randomColor}">${subject}</div>
            <div class="days" data-subject="${subject}"></div>
        </div>`

        this.createDays(`[data-subject="${subject}"]`, days, null);
    };

    createSubjectDays(subject, day) {
        const daysTemplate = document.querySelector(`[data-subject="${subject}"] [data-day="${day[0].value}"]`);
        const commentText = day[2] ? `<div class="comment">${day[2].value}</div>` : '';
        const mark = day[1] ? day[1].value : '';

        if (day[2]) daysTemplate.classList.add('has-comment');

        daysTemplate.innerHTML += mark + commentText;
    };

    removeEmptyDays(days, subjectDays) {
        days.filter(day => subjectDays.indexOf(day) == -1).forEach(item => {
            document.querySelectorAll(`[data-day="${item.toString()}"]`).forEach(e => e.parentNode.removeChild(e));
        });
    };
};

export const template = new Template();
