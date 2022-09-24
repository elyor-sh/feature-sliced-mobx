import {AxiosResponse} from "axios";

export type AxiosType<T> = Promise<AxiosResponse<T>>

export interface UserModel {
    id: string
    password: string
    name: string
    createdAt: Date
}

export type UserCreateModel = Omit<UserModel, 'id'>
export type UserAuthParams = Omit<UserModel, 'id' | 'createdAt'>

export interface TodoModel {
    id: string
    title: string
    description: string
    userId: string
    createdAt: string
    done: boolean
}

export type TodoCreateModel = Omit<TodoModel, 'id'>