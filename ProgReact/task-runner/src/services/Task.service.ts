import { AxiosInstance } from "axios";

class Task{ 
    /**
     * 
     * @param $http 
     */
constructor(private $http:AxiosInstance){
}

getAllTask(){
   return this.$http.get('/tasks');
}
}

export default Task;