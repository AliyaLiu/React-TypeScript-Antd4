import Request from "COMPONENTS/Request";

// const host = process.env.NODE_ENV === 'development' ? 'http://192.168.20.146:3000/mock/51' : 'https://webapp.leke.cn/auth/global/homework';
// const host = '/auth/global/homework';
const host = 'https://webapp.leke.cn/auth/global/homework';
const API = {
    save: function(Csts, answerJson, usedTime) {
        //无用的函数
        return Request.post("save.htm", {
            homeworkId: Csts.workInfo.homeworkId,
            homeworkDtlId: Csts.workInfo.homeworkDtlId,
            answerJson: answerJson,
            usedTime: usedTime
        });
    },

    getResType: function(params){
        //GET   获取资源类型
        return Request.get(`${host}/m/parent/homework/getResType.htm`, null, {'Content-Type': 'application/json'}).then(res=>res.data);
    },
    getHomeworkList: function(params){
        //GET   获取家长的子女固定学科的作业列表
        return Request.get(`${host}/m/parent/homework/getHomeworkList.htm`, params, {'Content-Type': 'application/json'}).then(res=>res.data);
    },

    getParentChildrenAndHomeworkSubject: ()=>{
        //GET 获取第一个子女的信息和学科信息
        return Request.get(`${host}/m/parent/homework/getParentChildrenAndHomeworkSubject.htm`, null, {'Content-Type': 'application/json'}).then(res=>res.data);
    },

    getHomeworkSubject: (params)=>{
        //GET 根据userId获取对应的学科信息
        return Request.get(`${host}/m/parent/homework/getHomeworkSubject.htm`, params, {'Content-Type': 'application/json'}).then(res=>res.data);
    }


};

export default API;
