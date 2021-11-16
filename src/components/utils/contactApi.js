import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:7777/bpmn/contactUs",
})

export const getListContact = async () => {
    try {
        const {data} = await API.get("/");

        return data.data.content;
    } catch (err) {
        console.log(err);
    }
}

export const getListValidateContact = async () => {
    try {
        const {data} = await API.get('/validate/list');
        return data.data.content;
    } catch (err) {
        console.log(err);
    }
}

export const getListReplayContact = async () => {
    try {
        const {data} = await API.get('/reply/list');
        return data.data.content;
    } catch (err) {
        console.log(err);
    }
}