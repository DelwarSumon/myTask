import Axios from "axios";

export const getProjectList = () => {

}
/**
 * storeNewProject()
 * 
 * @param {*} data 
 */
export const storeNewProject = async (data) => {
    data.user_id= 1;
    return await Axios.post("http://localhost/delwar/laravel_react/myTask/api/projects", data).then((res) => {
        return res.data;
    });

}