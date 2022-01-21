 

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
 
    } 

    get(key) { 
        return sessionStorage.getItem(key)
    }

    set(key, val) {  
        sessionStorage.setItem(key, val) 
    } 

    //获取地址
    getAddressList(){
        const addressList=this.get(ADDRESS_KEY);    
        if(addressList){
            return JSON.parse(this.get(ADDRESS_KEY));
        } 
    }

    //设置地址
    setAddressList(addressList){  
        this.set(ADDRESS_KEY, JSON.stringify(addressList));
    }

}

export default new Spx();