import axios from 'axios';
import FormData from 'form-data';


const transformData = (config) => {

    let formData = new FormData();
    let token;

    if (process.client) {
        token = $nuxt.$cookies.get('TOKEN');
        if (token) {
            formData.append('token', token)
        } 

        if (config.data) {
            Object.keys(config.data).forEach(key => {
                formData.append(key, config.data[key])
            })
        }
    } else {
        const { app, req } = CreateAxios.content;
        token = app.$cookies.get('TOKEN');
    }
   
    config.data = process.client?formData:{...config.data,token};

}

class CreateAxios {

    constructor() {
        this.created();
        return this.inst;
    }

    created() { 
        this.inst = axios.create();
        this.inst.defaults.timeout = 30 * 1000;
        this.inst.defaults.baseURL = process.env.baseUrl; 
        this.inst.interceptors.request.use((config) => {
            transformData(config); 
            return config
        }, (err) => {
            // $nuxt.$toast.error('服务器开小差啦~~')
        })
        this.inst.interceptors.response.use(
            (res) => { 
                if (res.status === 200 && res.data.code == 200) {
                    return res.data.data
                }else{
                    $nuxt.$toast.error(res.data.message)
                }
            },
            (err) => {
                // $nuxt.$toast.error('服务器开小差啦~~')
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

export {
    CreateAxios
}

export default req;