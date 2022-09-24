import {inject, singleton} from "tsyringe";
import {makeAutoObservable, runInAction} from "mobx";
import {toast} from "react-toastify";
import {NavigateFunction} from "react-router-dom";

import {UserAuthParams, UserCreateModel, UserModel, UserService} from "../../../shared/api";
import {LocalStorageService} from "../../../shared/lib";


@singleton()
export default class CurrentUser {

    public currentUser: UserModel | null = this.localStorageService.getNonPrimitive<UserModel>('currentUser')
    public authParams: UserAuthParams = {name: '', password: ''}

    constructor(
        @inject(LocalStorageService) private readonly localStorageService: LocalStorageService,
        @inject(UserService) private readonly userService: UserService
    ) {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    public setAuthParams (name: string, value: string) {
        this.authParams = {
            ...this.authParams,
            [name]: value
        }
    }

    public setUser (user: UserModel | null) {
        this.currentUser = user
    }

    public refreshAuthParams () {
        this.authParams = {name: '', password: ''}
    }

    public async login (navigate: NavigateFunction) {

        try {

            const response = await this.userService.getUsers()

            runInAction(() => {
                const user = this.check(response.data, this.authParams)

                if(!user) {
                    toast.error(`Bunday foydalanuvchi topilmadi!`, {toastId: 'Login error'})
                    return
                }

                this.setUser(user)

                this.localStorageService.setNonPrimitive('currentUser', user)

                this.refreshAuthParams()

                navigate('/')
            })

        }catch (e) {

        }

    }

    public async register ( navigate: NavigateFunction) {
        try {

            const params: UserCreateModel = {
                ...this.authParams,
                createdAt: new Date()
            }

            await this.userService.createUser(params)

            runInAction(() => {
                toast.success(`Muvaffaqqiyatli registratsiya qildinggiz!`)
                navigate('/login')
            })

        }catch (e) {

        }
    }

    public logout (navigate: NavigateFunction) {
        this.localStorageService.refresh()
        this.currentUser = null
        navigate('/login')
    }

    private check (users: UserModel[], user: UserAuthParams): UserModel | undefined {
        return users.find(u => u.name === user.name && u.password === user.password)
    }

}