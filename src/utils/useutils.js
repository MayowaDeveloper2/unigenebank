import axios from "axios";


const useUtils = () => {

const openModal = (modal) => {
  var Dom = document.getElementById(modal);
  if(Dom){
   Dom.style.display = 'block';
  }
}

const closeModal = (modal)=> {
 var Dom = document.getElementById(modal);
 if(Dom){
  Dom.style.display = 'none';
 }
}


// let toastTimeout; // variable to hold the timeout
const setToast = (msg) => {
  const toast = document.getElementById('my-toast');
  const mg = document.getElementById('msg');
  // const icon = document.getElementById('toast-icon');
  if (msg !== "") {
    mg.innerHTML = msg;
    toast.style.display = 'block';
  }
}


const clickHandler =(dom)=> {
 var input = document.getElementById(dom);
 if(input){
  input.click();
 }
}

const setInnerText =(dom, text, show)=> {
 var DOM = document.getElementById(dom);
 if(show === true){
  DOM.style.display = 'block'
  DOM.innerHTML = text
 }else{
  DOM.style.display = 'none'
  DOM.innerHTML = ""
 }
}

const isPending =(dom, action)=> {
 var btn = document.getElementById(dom);
 if(btn){
  if(action === true){
   btn.innerHTML = `<span><i class="fa fa-spinner fa-pulse white"></i></span>`;
   btn.style.pointerEvents = 'none';
  }else{
   btn.innerHTML = action;
   btn.style.pointerEvents = 'unset';
  }
 }
}

const makeid = (length) => {
 var result           = '';
 var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
 var charactersLength = characters.length;
 for ( var i = 0; i < length; i++ ) {
   result += characters.charAt(Math.floor(Math.random() * 
   charactersLength));
  }
  return result;
}

const requestMaker = async (api, params) => {
 const formdata = new FormData();
 const arrKeys = Object.keys(params)  // titles
 const arrValue = Object.values(params)  // values
 for(var i = 0; i < arrKeys.length; i++){
   formdata.append(`${arrKeys[i]}`, arrValue[i])
 }
 const makeRequest = {
  method: 'post',      // The HTTP method (GET, POST, PUT, DELETE, etc.)
  url: api, // The URL you're sending the request to
  headers: {'Content-Type': 'multipart/form-data'},
  data: formdata 
 }
 try {
  const res = await axios(makeRequest);
  const response = await res.data;
  if(response?.status === 'failed'){
    setToast('Something went wrong. Please try again');
    return;
  }
  return response;
 } catch (error) {
  console.log(error)
  if(error.code === 'ERR_NETWORK'){
    setToast('Internal Server error. Please try again later');
  }
  if(error.name === 404){
    setToast('Internet Error');
  }
  if(error.name === 404){
    setToast('Internet Error');
  }
 }



}

 

 return {
  closeModal,
  openModal,
  setToast,
  clickHandler,
  setInnerText,
  isPending,
  makeid,
  requestMaker
 };
}
 
export default useUtils;