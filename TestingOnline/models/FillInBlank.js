import Question from "./Question.js";

export default class FillInBlank extends Question {
    renderHTML(){
        return `
        <div class="col-12">
            <textarea class="form-control" id="fill${this.id}-fillAnswer${this.answers[0].id}" rows="3"></textarea>
        </div>
        `
    }
    /**
 * Input: userAns, apiAns
 * 
 * Các bước kiểm tra đáp án
 *  B1: Dom tới ô text area => lấy userAns
 *          lấy apiAns từ API của BE
 *  B2: so sánh chuỗi ký tự
 * + chuyển in hoa thành chữ thường (userAns, apiAns)
 * + xoá khoảng trắng (userAns, apiAns)
 * B2: => nếu bằng (==) thì return true
 * ngc lại return true
 * 
 * Output: câu trả lời là đúng hay sai
 * nếu đúng:
 * return true
 * nếu sai: 
 * return false
 */

    checkAns() {
        // Lấy userAns từ người dùng
        let userAns = document.querySelector(`#fill${this.id}-fillAnswer${this.answers[0].id}`).value;
        console.log(userAns);

        // lấy apiAns từ BE
        let apiAns = this.answers[0].content;
        console.log(apiAns);

        if(userAns == apiAns) {
            // trả lời đúng
            return true;
        }
        // trả lời sai
        return false;
    }
}
