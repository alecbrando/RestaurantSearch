import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer c_5mXYtr4WQxie2JVHlX9ShRIDHTmOQzfM5Ksb1MQS0xrjZCsgYwpck7uGDETO5Gsab7dbGJLESw1Mu7KehaXuNP8uKwj4FBmup5IySHFSrzs9Nop9j_VOa67KrjX3Yx'
    }
})