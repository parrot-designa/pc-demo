 

const globalData = {}
const TOKEN_IDENTIFIER = 'token'
const TOKEN_TIMESTAMP = 'refresh_token_time'
const ADDRESS_KEY='addressList'


class Spx {
    constructor(options = {}) {
        this.options = {
            autoRefreshToken: true,
            ...options
        }

        if (this.options.autoRefreshToken) {
            this.startRefreshToken()
        }
    }

    startRefreshToken() {
        if (this._refreshTokenTimer) {
            clearTimeout(this._refreshTokenTimer);
        }

        const checkAndRefresh = async () => {
            const expired = localStorage.getItem(TOKEN_TIMESTAMP);
            if (!expired) return
            const delta = expired - Date.now()
            if (delta > 0 && delta <= 5 * 60 * 1000) {
                const { token } = await api.user.refreshToken()
                clearTimeout(this._refreshTokenTimer)
                this.setAuthToken(token)
            }
        }
        setInterval(checkAndRefresh, 5 * 60 * 1000)
    }

    get(key, forceLocal) {
        let val = globalData[key]
        if (forceLocal) {
            val = localStorage.getItem(key)
            this.set(key, val)
        }
        return val
    }

    set(key, val, forceLocal) {
        globalData[key] = val
        if (forceLocal) {
            localStorage.setItem(key, val)
        }
    }

    getAuthToken() {
        const authToken = localStorage.getItem(TOKEN_IDENTIFIER)
        if (authToken && !this.get(TOKEN_IDENTIFIER)) {
            this.set(TOKEN_IDENTIFIER, authToken)
        }
        return authToken
    }

    setAuthToken(token) {
        this.set(TOKEN_IDENTIFIER, token)
        localStorage.setItem(TOKEN_IDENTIFIER, token)
        localStorage.setItem(TOKEN_TIMESTAMP, Date.now() + 55 * 60 * 1000)
    }

    //获取地址
    getAddressList(){
        const addressList=this.get(ADDRESS_KEY,true); 
        if(addressList){
            return JSON.parse(this.get(ADDRESS_KEY,true));
        } 
    }

    //设置地址
    setAddressList(addressList){ 
        this.set(ADDRESS_KEY, JSON.stringify(addressList),true);
    }

}

export default new Spx();