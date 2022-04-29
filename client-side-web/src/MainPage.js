import './MainPage.css';
import addContactFunctions from './AddContact.js'
import searchContactButton from './SearchContact';
import sendMessage from './sendMessageButton';
import sendImage from './sendImage';
import attachmentButton from './Attachment';
import recordManeger from './record';
import "./InsertPictrues.css";
import add_contact2 from './Pictures/add_contact2.png';
import addImage from './Pictures/addImage.png';
import Attachment from './Pictures/Attachment.png';
import sendMessageImage from './Pictures/sendMessage.png';
import record from './Pictures/record.png';
import initUser from './initUser';
import userIdx from './UserIdx';
import users from './DataBase';
import { useEffect } from 'react';

function MainPage() {
    useEffect(() => {
        initUser();
    }, []);

    return (
        <div>
            <div className="container" style={{ top: "7%", left: "7%", position: "absolute" }}>
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr style={{ backgroundColor: "aliceblue" }}>
                            <td style={{ width: "30%" }}>
                                <div style={{ paddingTop: "1%", overflowY: "auto", overflowX: "hidden", height: "7vh" }}>
                                    <div className="row">
                                        <div className="col-7">
                                            <input id="searchContact" style={{ width: "100%" }} placeholder="Search contact"></input>
                                        </div>
                                        <div className="col-2">
                                            <button id="searchContactButton" type="button" className="btn btn-primary" onClick={searchContactButton}>Search</button>
                                        </div>
                                        <div className="col-1"></div>
                                        <div className="col-2">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#addContactModal" style={{ width: "auto", backgroundColor: "white", border: "0px" }}>
                                                <img src={add_contact2} width="100%" alt="" id="addContactImage"></img>
                                            </button>
                                            <div className="modal fade" id="addContactModal" tabIndex="-1" aria-labelledby="addContactModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="addContactModalLabel">Add new contact</h5>
                                                            <button type="button" id="addContactModalExit" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={addContactFunctions.addContactModalExit}></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <input id="inputAddContact" placeholder="Enter new contact's name here" style={{ width: "100%" }}></input>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button id="newContactConfirm" type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addContactFunctions.addContactButton}>Add</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row" style={{ visibility: "hidden" }} id="curContactBoard">
                                    <div className="col-1">
                                        <img id="curContactPicture" style={{ maxWidth: "100%" }} alt=""></img>
                                    </div>
                                    <div className="col">
                                        <div id="curContactName" style={{ top: "2vh", position: "absolute" }}>
                                            hey there
                                        </div>
                                    </div>
                                    <div className="col">
                                        <input type="text" id="searchMessage" style={{ width: "100%" }} placeholder="Search message"></input>
                                    </div>
                                    <div className="col-2">
                                        <button id="prevResult" className="btn" style={{ borderColor: "black" }}>prev</button>
                                        <button id="nextResult" className="btn" style={{ borderColor: "black" }}>next</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr style={{ height: "80vh" }}>
                            <td style={{ width: "30%", backgroundColor: "white" }}>
                                <div style={{ paddingTop: "1%", overflowY: "auto", overflowX: "hidden", height: "80vh" }}>
                                    <div className="list-group" aria-label="attempt" id="Friends"></div>
                                </div>
                            </td>
                            <td style={{ width: "70%", position: "relative", height: "80vh" }} id="chatBackground">
                                <div id="chatPlaceHolder" style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}>
                                    hello
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr style={{height: "80vh"}}>
                        <td style={{width: "30%", backgroundColor: "white"}}>
                            <div style={{paddingTop: "1%",overflowY: "auto", overflowX: "hidden", height: "80vh"}}>
                                <div class="list-group" aria-label="attempt" id="Friends"></div>
                            </div>
                        </td>
                        <td style={{width: "70%", position: "relative", height: "80vh"}} id="chatBackground">
                            <div id="chatPlaceHolder" style={{height: "100%",overflowY: "auto", overflowX: "hidden"}}>
                                hello
                            </div>
                            <div id="sendingBoard" style={{bottom: "0%",position: "absolute",width: "100%",height: "50px", backgroundColor: "aliceblue", visibility: "hidden"}}>
                                <input type="text" style={{width: "80%", bottom: "20%", position: "inherit"}} id="typeMessage" autoComplete="off"></input>
                                <button class="btn" style={{left: "80%", bottom:"20%", position: "inherit", color:"aliceblue", width: "5%"}} id="sendButton" onClick={sendMessage}>
                                    <img src={sendMessageImage} style={{width: "100%"}} alt=""></img>
                                </button>
                                <label class="btn" style={{left: "85%",bottom:"20%", position: "inherit", color:"aliceblue", width: "5%"}}>
                                    <input type="file" id="addImageButton" style={{visibility: "hidden", width: "100%"}} onChange={sendImage} accept="image/*"></input>
                                    <img src={addImage} style={{width: "100%"}} alt=""></img>
                                </label>
                                <label class="btn" style={{left: "90%", bottom:"20%", position: "inherit", color: "aliceblue", width: "5%"}}>
                                    <input type="file" id="attachmentButton" style={{visibility: "hidden", width: "100%"}} onChange={attachmentButton}></input>
                                    <img src={Attachment} style={{width: "100%"}} alt=""></img>
                                </label>
                                <button class="btn" style={{left: "95%", bottom:"20%", position: "inherit", color:"aliceblue", width: "5%"}} id="recordButton" data-bs-toggle="modal" data-bs-target="#recordModal">
                                    <img src={record} style={{width: "100%"}} alt=""></img>
                                </button>
                                <div class="modal fade" id="recordModal" tabindex="-1" aria-labelledby="recordModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="recordModalLabel">Send audio</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeModalRecord" onClick={recordManeger.closeModalRecord}></button>
                                            </div>
                                            <div class="modal-body" id="recordModalBody">
                                                <button class="btn btn-primary" id="startRecord" onClick={recordManeger.startRecord}>Record</button>
                                                <button class="btn btn-danger" id="stopRecord" onClick={recordManeger.stopRecord}>stop</button>
                                                <button class="btn btn-warning" id="restartRecording" onClick={recordManeger.restartRecording}>Record again</button>
                                                <div id="recordSign" style={{visibility: "hidden"}}>
                                                    recording...
                                <div id="sendingBoard" style={{ bottom: "0%", position: "absolute", width: "100%", height: "50px", backgroundColor: "aliceblue", visibility: "visible" }}>
                                    <input type="text" style={{ width: "80%", bottom: "20%", position: "inherit" }} id="typeMessage"></input>
                                    <button className="btn" style={{ left: "80%", bottom: "20%", position: "inherit", color: "aliceblue", width: "5%" }} id="sendButton" onClick={sendMessage}>
                                        <img src={sendMessageImage} style={{ width: "100%" }} alt=""></img>
                                    </button>
                                    <label className="btn" style={{ left: "85%", bottom: "20%", position: "inherit", color: "aliceblue", width: "5%" }}>
                                        <input type="file" id="addImageButton" style={{ visibility: "hidden", width: "100%" }} onChange={sendImage} accept="image/*"></input>
                                        <img src={addImage} style={{ width: "100%" }} alt=""></img>
                                    </label>
                                    <label className="btn" style={{ left: "90%", bottom: "20%", position: "inherit", color: "aliceblue", width: "5%" }}>
                                        <input type="file" id="attachmentButton" style={{ visibility: "hidden", width: "100%" }} onChange={attachmentButton}></input>
                                        <img src={Attachment} style={{ width: "100%" }} alt=""></img>
                                    </label>
                                    <button className="btn" style={{ left: "95%", bottom: "20%", position: "inherit", color: "aliceblue", width: "5%" }} id="recordButton" data-bs-toggle="modal" data-bs-target="#recordModal">
                                        <img src={record} style={{ width: "100%" }} alt=""></img>
                                    </button>
                                    <div className="modal fade" id="recordModal" tabIndex="-1" aria-labelledby="recordModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="recordModalLabel">Send audio</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeModalRecord" onClick={recordManeger.closeModalRecord}></button>
                                                </div>
                                                <div className="modal-body" id="recordModalBody">
                                                    <button className="btn btn-primary" id="startRecord" onClick={recordManeger.startRecord}>Record</button>
                                                    <button className="btn btn-danger" id="stopRecord" onClick={recordManeger.stopRecord}>stop</button>
                                                    <button className="btn btn-warning" id="restartRecording" onClick={recordManeger.restartRecording}>Record again</button>
                                                    <div id="recordSign" style={{ visibility: "hidden" }}>
                                                        recording...
                                                    </div>
                                                    <div id="recordEndSign" style={{ visibility: "hidden" }}>
                                                        recorded!
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button id="recordingConfirm" type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={recordManeger.recordingConfirm}>Send</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MainPage;