import Mock from "mockjs";
const bookData = Mock.mock({
    'data|7':[{
        'title|+1':['有声书','儿童','承认','学习','生活','情商','餐饮'],
        'id|+1':0,
        'cont|10':[{
            'id|+1':0,
            name:'@cname',
            img:'@image',
            'info|20-40':'@cword'
        }]
    }]
})
export {bookData};
