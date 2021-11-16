import React, {useEffect, useState} from 'react';
import ContactXml from "../ContactXML/ContactXML";
import {getListContact, getListReplayContact, getListValidateContact} from "../utils/contactApi";
import ListTable from "../ListTable/ListTable";
import {useParams} from "react-router-dom";

const AdminContact = () => {
    const {status} = useParams();
    const [listTask, setListTask] = useState();

    useEffect(() => {
        if (status === "reply") {
            getListReplayContact().then(r => setListTask(r));
        } else if (status === "validate") {
            getListValidateContact().then(r => setListTask(r))
        } else {
            getListContact().then(r => setListTask(r));
        }
    }, [status]);

    const handleChangeStatus = (e) => {
        alert(e);
    }

    if (status === "reply") {
        console.log('reply');
    }

    return (
        <React.Fragment>
            <ContactXml handleChangeStatus={handleChangeStatus} />
            <ListTable lists={listTask} />
        </React.Fragment>
    );
};

export default AdminContact;