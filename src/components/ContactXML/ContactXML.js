import React, {useEffect, useState} from 'react';
import axios from "axios";
import BpmnJS from "bpmn-js";

import "./style.css";

const ContactXml = ({handleChangeStatus}) => {
    const [idBpmnContact] = useState(['validate', 'reply']);

    useEffect(() => {
        const getContactXML = async () => {
            try {
                const {data} = await axios.get("http://localhost:7777/bpmn/contactUs/xml");
                return data;
            } catch (err) {
                console.log(err);
            }
        }

        const getStatisticContact = async () => {
            try {
                const {data} = await axios.get("http://localhost:7777/bpmn/contactUs/statistic");
                return data.data;
            } catch (err) {
                console.log(err);
            }
        }

        const createNewElementOverlay = (className, link, overlay, tasks) => {
            return `<a href="${link}" class="${className}" style="width: ${overlay.width}px; height: ${overlay.height}px; display: block">
                        <span class="count-overlay">${tasks[overlay.id]}</span>
                    </a>`
        }

        const renderContactXML = async (xmlDiagram) => {
            const bpmnJS = new BpmnJS({
                container: "#containerCanvas",
            });

            try {

                await bpmnJS.importXML(xmlDiagram);
                const {tasks} = await getStatisticContact();
                const canvas = bpmnJS.get("canvas");
                const overlays = bpmnJS.get("overlays");
                const elementRegistry = bpmnJS.get("elementRegistry");


                idBpmnContact.forEach((id, index) => {
                    const overLayId = elementRegistry.get(id);
                    overlays.add(id, {
                        position: {
                            top: 0,
                            left: 0
                        },
                        html: createNewElementOverlay("highlight-overlay", `/admin/contact/${id}`, overLayId, tasks)
                    })
                })

                canvas.zoom("fit-viewport");
            } catch (err) {
                console.log(err);
            }
        }

        getContactXML().then(r => renderContactXML(r));
    }, []);

    return (
        <div>
            <div id="containerCanvas" />
        </div>
    );
};

export default ContactXml;