Ethers.js

Web3.js와 Ethers.js 둘 다 이더리움 블록체인과 상호작용하기 위한 라이브러리이지만
개인적으로 Ethers.js가 배우기 더 쉬웠다.
Web3.js가 먼저 나왔지만 ethers.js가 더 가볍고 빠르다.

Ethers.provider
-이더 리움 블록 체인과의 연결을 캡슐화하고 서명된 트랜잭션 생성 가능

Ethers.contract
-이더리움 네트워크 내에 스마트 계약을 배포하고 상호 작용, 이벤트 수신 등

Ethers.utils
-데이터 형식화 및 사용자 입력 처리를위한 유틸리티 함수를 제공
  
Ethers.wallets
-지갑 연결을 설정, 지갑 생성, 거래에 서명 할 수 있게 제공

제일 큰 차이점
provider: connection to the ethereum network
signer: access the private key and sign the transactions
ethers.js에서는 유연성있게 하기위해 API가 크게 두개로 나눠진다.

https://github.com/Hyuna13/Blockchain/tree/main/ethers.js

https://moralis.io/web3-js-vs-ethers-js-guide-to-eth-javascript-libraries/  <-- Web3.js vs Ethers.js
