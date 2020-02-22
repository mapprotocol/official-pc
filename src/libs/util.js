const setTitle = title => {
  try {
    let lang = localStorage.getItem('marcoLang')
    if (lang) {
      switch (lang) {
        case 'zh':
          title = '马可波罗（MAP）：一种新型的点对点电子现金系统'
          break
        case 'en':
          title =
            'MarcoPolo Protocol(MAP)：A New Peer-to-Peer Electronic Cash System'
          break
        case 'ko':
          title = '마르코 폴로MarcoPolo(MAP)：새로운 피어 투 피어 전자 현금 시스템'
          break
        default:
          title =
            'MarcoPolo Protocol(MAP)：A New Peer-to-Peer Electronic Cash System'
          break
      }
    } else {
      title =
        title || 'MarcoPolo Protocol(MAP)：A New Peer-to-Peer Electronic Cash System'
    }
  } catch (e) {}
  window.document.title = title
}

const setMeta = (keyword, description, description2) => {
  try {
    let lang = localStorage.getItem('marcoLang')
    if (lang) {
      switch (lang) {
        case 'zh':
          keyword =
            '马可波罗,marcopolo ,MAP,marcopolo protocol,blockchain,区块链,以太坊,,BTC支付,区块链支付,Marcopay'
          description =
            'MarcoPoloProtocol马可波罗协议（MAP）由软银战略投资的，一个新型的点对点电子现金系统基础设施，旨在通过一系列技术机制，实现区块链世界公有链TPS共享和智能调度，成为整个区块链世界的交易调度平台，点对点电子现金系统应用可以享受无限扩容的TPS和整个区块链网络最优GAS。'
          description2 = ''
          break
        case 'ko':
          keyword = '크립토 지불. ,비트코인 지불,MAP'
          description =
            '마르코폴로 프로토콜 (MarcoPolo Protocol)은 새로운 P2P 전자 현금 시스템 인프라로, SoftBank와 같은 유명한 투자 기관의 투자를 받았습니다. 프로젝트는 일련의 기술 메커니즘을 통해 블록 체인 세계 퍼블릭 체인 TPS 공유 및 지능형 스케줄링을 달성하는 것을 목표로합니다. 전체 블록 체인 세계의 거래 플랫폼 인 P2P 전자 현금 시스템 애플리케이션은 무제한TPS확장 및 전체 블록 체인 네트워크 최적의 GAS를 이용할수 있습니다.'
          description2 = ''
          break
        default:
          keyword =
            'marcopolo ,marcopolo protocol,blockchain,Ethereum,cryptocurrency,Pay,Crypto payment,bitcoin payment,payment,map,bitcoin,truechain,Magellan protocol, peer-to-peer cash system,defi,dex,Gravity,Marcopay,MarcoPolo pay,MarcoPolo,peer-to-peer Electronic cash system'
          description =
            'MarcoPolo Protocol (MAP) is a new peer-to-peer electronic cash system infrastructure, which is invested by SoftBank. It aims to achieve blockchain world public chain TPS sharing and intelligent scheduling through a series of technical mechanisms. As the trading platform of the entire blockchain world, the peer-to-peer electronic cash system application can enjoy the unlimited expansion of TPS and optimal GAS fee among the entire blockchain network.'
          description2 =
            ''
          break
      }
    } else {
      keyword =
        'marcopolo ,marcopolo protocol,blockchain,Ethereum,cryptocurrency,Pay,Crypto payment,bitcoin payment,payment,map,bitcoin,truechain,Magellan protocol, peer-to-peer cash system,defi,dex,Gravity,Marcopay,MarcoPolo pay,MarcoPolo,peer-to-peer Electronic cash system'
      description =
        'MarcoPolo Protocol (MAP) is a new peer-to-peer electronic cash system infrastructure, which is invested by SoftBank. It aims to achieve blockchain world public chain TPS sharing and intelligent scheduling through a series of technical mechanisms. As the trading platform of the entire blockchain world, the peer-to-peer electronic cash system application can enjoy the unlimited expansion of TPS and optimal GAS fee among the entire blockchain network.'
      description2 =
        ''
    }
  } catch (e) {}
  return { keyword, description, description2 }
}

/**
 * 存储localStorage
 */
const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

export { setTitle, setMeta, setStore, getStore, removeStore }
