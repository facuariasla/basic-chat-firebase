import { database } from './index'

document.querySelector('.formulario').addEventListener('submit', postChat);

function postChat(e){
  e.preventDefault();

  const timestamp = Date.now();
  const username_ = <HTMLInputElement>document.getElementById('nombre');
  const username = username_.value
  const chatTxt = <HTMLInputElement>document.getElementById('chat-txt');
  const message = chatTxt.value;
  chatTxt.value = '';

  database.ref('messages/' + timestamp).set({
    usr: username,
    msg: message,
    time: timestamp
  })
}

const fetchChat = database.ref('messages/');

// Escucha a los hijos de /messages
fetchChat.on('child_added', (snapshot) => {
  const messages = snapshot.val();
  const msg = `<li><strong>${messages.usr}</strong>: ${messages.msg}<li>`;
  console.log(messages)

  document.getElementById('messages').innerHTML += msg;

  function scroll(){
    let scrollMsg = <HTMLDivElement>document.getElementById('messages-content');
    scrollMsg.scrollTop = scrollMsg.scrollHeight;
  }
  scroll();


})


