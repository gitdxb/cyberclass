export default class FoodService {
    //không khai báo thuộc tính thì không cần constructor

    getFoodList = () => {
        // let promise = axios({
        //     method: 'get',
        //     url: 'https://6065c01ab8fbbd001756734b.mockapi.io/foods',
        // });
        // return promise;
        return axios({
            method: 'get',
            url: 'https://6065c01ab8fbbd001756734b.mockapi.io/foods',
        });
    }

    addFood = (food) => {
        return axios({
            method: 'post',
            url: 'https://6065c01ab8fbbd001756734b.mockapi.io/foods',
            data: food
        });
    }

    getFoodDetail = (id) => {
        return axios({
            method: 'get',
            url:`https://6065c01ab8fbbd001756734b.mockapi.io/foods/${id}`,
        });
    }
}