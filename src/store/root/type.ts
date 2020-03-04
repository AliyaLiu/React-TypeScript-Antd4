export type UserInfo = null | {
    userName: string;
    userId: number;
    content: string;
}
export default interface RootState {
    title: string;
    isNormal: boolean;
    isSignin: boolean;
    successful: boolean;
    failed: boolean;
    userInfo: UserInfo;
}
