import FillInBlank from "../models/FillInBlank.js";
import MultipleChoice from "../models/MultipleChoice.js";
import QuestionService from "../services/QuestionService.js";



const quesService = new QuestionService();
//chứa các đối tượng câu hỏi đã phân loại
let quesArray = [];


let getList = () => {
    quesService.getQuestionList()
        .then((result) => {
            console.log(result.data);
            //  phân loại tạo đối tượng câu hỏi phù hợp
            result.data.map((ques) => {
                let { id, questionType, content, answers } = ques;
                if (questionType == 1) {
                    //multiple
                    let mul = new MultipleChoice(id, questionType, content, answers)
                    quesArray.push(mul);
                } else {
                    //fill in blank
                    let fill = new FillInBlank(id, questionType, content, answers);
                    quesArray = [...quesArray, fill];
                }
            });

            console.log(quesArray);

            renderQuestion();
        })
        .catch((error) => {
            console.log(error)
        })
}

getList();

let renderQuestion = () => {
    //chứa tất cả các thẻ html của question
    let contentHTML = "";
    let count = 0;
    let buttonHTML = "";
    quesArray.map((ques,index) => {
        let { id, questionType, content, answers } = ques;
       
        if(index  == quesArray.length-1){
            //nếu câu hỏi là câu cuối cùng
            buttonHTML = `<a href="#quizResult" class="quiz__btn quiz__next" onclick="submitQuestion()">SUBMIT</a>`
        }else{
            //chưa đến câu cuối cùng
            //cần lấy được id của câu hỏi kế tiếp
            let quesNext = quesArray[index + 1];
            buttonHTML = `<a href="#quiz-${quesNext.id}" class="quiz__btn quiz__next">NEXT</a>`
        }

        contentHTML += `
                <div class="quizSection" id="quiz-${id}">
                    <div class="quiz__main">
                        <div class="quiz__header">
                            <p>${content}</p>
                        </div>
                        <div class="quiz__body row">
                            ${ques.renderHTML()}
                        </div>
                        <div class="quiz__footer">
                            <p class="quiz__current">Question ${++count} of ${quesArray.length}</p>
                           ${buttonHTML}
                        </div>
                    </div>
                </div>
            `
    })

    document.getElementById("quizList").innerHTML = contentHTML;

}

let submitQuestion = () => {
    let correct = 0;
    quesArray.map((ansObj) => {
        //ansObj.checkAns() ==  true
        if(ansObj.checkAns()){
            // checkAns() => true => ng dùng trả lởi đúng
            correct++;
        }
    })
    console.log(correct);
    document.getElementById.apply("correct").innerHTML = correct;
    document.getElementById.apply("incorrect").innerHTML = quesArray.length - correct;
    console.log(correct*100/ quesArray.length);
    
}
window.submitQuestion = submitQuestion; // thay cho onclick