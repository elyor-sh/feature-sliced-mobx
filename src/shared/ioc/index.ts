import {container, InjectionToken} from "tsyringe";

export function useInstance<T>(token: InjectionToken<T>) {
    return container.resolve(token)
}