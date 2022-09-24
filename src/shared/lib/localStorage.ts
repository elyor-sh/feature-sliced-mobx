import {singleton} from "tsyringe";

/**
 * @description localStorage ga qo'shimcha key bilan ishlash uchun service
 * @author Elyor Shodiyorov
 */

@singleton()
export default class LocalStorageService {

    private readonly key = 'v1-key'

    public setPrimitive (key: string, value: string): void {
        localStorage.setItem(this.key + key, value)
    }

    public setNonPrimitive (key: string, value: any): void {
        localStorage.setItem(this.key + key, JSON.stringify(value))
    }

    public getNonPrimitive<T>(key: string): T | null{
        const item =  localStorage.getItem(`${this.key + key}`)

        if(!item) {
            return null
        }

        return JSON.parse(item) as T
    }

    public getPrimitive (key: string): string | null {
        return localStorage.getItem(`${this.key + key}`)
    }

    public refresh () {
        localStorage.clear()
    }
}