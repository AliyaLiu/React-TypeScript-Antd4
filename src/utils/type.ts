export interface IndexType<T> {
    [p: string]: T;
}

export interface Location {

}

export interface Void<T = undefined> {
    (param?: T): void;
}

/*
下面两种类型已经被记录到TypeScript标准库里，所以无需再去定义
export type Readonly<T> = {
    //将类型的属性都变为readonly
    readonly [P in keyof T]: T[P];
}
export type Partial<T> = {
    //将类型的属性都变为可选的
    [P in keyof T]?: T[P];
}
*/
