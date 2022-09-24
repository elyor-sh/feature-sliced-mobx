import {AxiosType, UserCreateModel, UserModel} from "./models";
import httpInstance from "./base";
import {singleton} from "tsyringe";

/**
 *
 * @description Bu yerda hamma user ga tegishli endpointlar yoziladi
 * @author Elyor Shodiyorov
 *
 * */

@singleton()
class UserService {

    public getUsers =
        (): AxiosType<UserModel[]> => httpInstance.get('/users')

    public createUser =
        (
            params: UserCreateModel
        ): AxiosType<UserModel> => httpInstance.post('/users', params)

    public deleteUser =
        (
            id: string
        ): AxiosType<UserModel> => httpInstance.delete(`/users/${id}`)

    public updateUser =
        (
            id: string,
            params: UserCreateModel
        ): AxiosType<UserModel> => httpInstance.put(`/users/${id}`, params)

}


export default UserService