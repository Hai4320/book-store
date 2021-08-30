export const INIT_STATE = {
    posts : {
        isLoading : false,
        data : [],
    },
    books : {
        isLoading : false,
        data : [],
        book: {}
    },
    user : {
        isLoading : false,
        isLogin : localStorage.getItem('isLogin'),
        data : localStorage.getItem('userData'),
    }
}