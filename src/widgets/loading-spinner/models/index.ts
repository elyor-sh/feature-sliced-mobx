import {singleton} from "tsyringe"
import {makeAutoObservable} from "mobx"

@singleton()
export default class LoadingSpinnerModel {

    public loading: boolean = false

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    public setLoading (param: boolean) {
        this.loading = param
    }
}