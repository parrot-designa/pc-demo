import axios from 'axios';
import FormData from 'form-data';
import S from '@/spx';


const transformData = (config) => {
   
if(process.env.VUE_ENV=='client'){ 
    console.log("$nuxt",$nuxt);
}

    let formData = new FormData(); 
    // formData.append('site', process.env.site)
    if($nuxt.$cookies.get('TOKEN')){
        formData.append('token',$nuxt.$cookies.get('TOKEN'))
    }
    if (config.data) {
        Object.keys(config.data).forEach(key => {
            formData.append(key, config.data[key])
        })
    } 
    config.data = formData

}

class CreateAxios {

    constructor() {
        this.created();
        return this.inst;
    }

    created() {
        console.log('CreateAxios Class created......', process.env.baseUrl)
      
        this.inst = axios.create();
        this.inst.defaults.timeout = 30 * 1000;
        this.inst.defaults.baseURL = process.env.baseUrl;
        this.inst.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

        this.inst.interceptors.request.use((config) => {
            transformData(config);
            return config
        })
        this.inst.interceptors.response.use(
            (res) => { 
                if (res.status === 200 && res.data.code == 200) {
                    return res.data.data
                }
            },
            (err) => {
                console.log('xxxreq:', err) 
            }
        )
        return this.inst;
    }

    static init(content) {
        CreateAxios.content = content
    }

    static getInstance() {
        if (!CreateAxios.instance) {
            CreateAxios.instance = new CreateAxios();
        }
        return CreateAxios.instance;
    }

}

const req = CreateAxios.getInstance()

export default req;