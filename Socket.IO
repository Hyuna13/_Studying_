Zoom을 만들기위해 WebSocket과 Socket.IO를 사용하게 되었다.

Socket.IO란
'Websocket을 기반으로' 실시간 웹 애플리케이션을 위한 JavaScript 라이브러리이다.
client와 server간의 실시간 양방향 통신을 가능하게 해주는 Node.js의 모듈.(WebSocket != Socket.IO)


WebSocket과 Socket.IO의 차이
1.WebSocket과 다르게 Socket.IO는 계속해서 연결을 시도한다.
2.WebSocket에서는 client.send(data)를 for문을 사용해서 보냈다면,
  Socket은 socket.emit(event, data,...function)으로 가능.
3.Socket은 모든 자료형이 가능하지만 WebSocket은 string만 가능하며 JSON.parse나 JSON.stringify함수를 같이 사용.
