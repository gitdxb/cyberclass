export default class FoodService{
    // ko khai báo thuộc tính thì ko cần constructor

    getFoodList = () => {
        // let promise = axios({
        //     method: 'get',
        //     url: 'https://6304b1ba761a3bce77ed8987.mockapi.io/QLNH',
        //   })
        // return promise;
        return axios({
            method: 'get',
            url: 'https://6304b1ba761a3bce77ed8987.mockapi.io/QLNH',
          });
    }

    addFood = (food) => {
        return axios({
            method: 'post',
            url: 'https://6304b1ba761a3bce77ed8987.mockapi.io/QLNH',
            data: food
          });
    }
}