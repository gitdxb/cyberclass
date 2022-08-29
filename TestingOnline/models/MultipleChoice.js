import Question from "./Question.js";

export default class MultipleChoice extends Question {
    renderHTML(){
        let contentRadio = "";
        this.answers.map((ans) => {
            let {id, content} = ans;
            contentRadio += `
            <div class="col-6">
                <div class="custom-control custom-radio">
                    <input type="radio" id="multi${this.id}-mulAnswer${id}" name="multi-${this.id}" class="custom-control-input" value="${content}">
                    <label class="custom-control-label" for="multi${this.id}-mulAnswer${id}">${content}</label>
                </div>
            </div>
            `
        })
        return contentRadio;
    }
    checkAns(){
        return `Tính điểm MultipleChoice`
    }
}