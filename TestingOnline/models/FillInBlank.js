import Question from "./Question.js";

export default class FillInBlank extends Question {
    renderHTML(){
        return `
        <div class="col-12">
            <textarea class="form-control" id="fill${this.id}-fillAnswer${this.answers[0].id}" rows="3"></textarea>
        </div>
        `
    }
    checkAns(){
        return `Tính điểm FillInBlank`
    }
}