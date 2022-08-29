export default class Question{
    constructor(id, questionType, content, answers) {
        this.id = id;
        this.questionType = questionType;
        this.content = content;
        this.answers = answers;
    }

    renderHTML(){
        return `loại câu hỏi chưa phân loại`
    }
    checkAns(){
        return `Chưa tính điểm`
    }
}