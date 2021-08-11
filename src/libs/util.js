const setTitle = title => {
  try {
    let lang = localStorage.getItem('marcoLang')
    if (lang) {
      switch (lang) {
        case 'zh':
          title = 'MAP Protocol: 自由互链协议'
          break
        case 'en':
          title =
            'MAP Protocol: Chain-to-chain Interoperation Protocol'
          break
        case 'ko':
          title = 'MAP Protocol: Chain-to-chain 상호운영 가능한 프로토콜'
          break
        case 'tr':
          title = 'MAP Protocol: Zincir-Zincir Birlikte Çalışma Protokolü'
          break
        case 'ru':
          title = 'MAP Protocol: Протокол взаимодействия Chain-to-chain'
          break
        case 'vn':
          title = 'MAP Protocol: Giao THức Chéo Chuỗi-sang-Chuỗi'
          break
        case 'pt':
          title = 'MAP Protocol: Protocolo de interoperação de cadeia a cadeia'
          break
        case 'ins':
          title = 'MAP Protocol: Protokol Interoperasi rantai-ke-rantai'
          break
        case 'jp':
          title = 'MAP Protocol: チェーン間相互運用プロトコル '
          break
        default:
          title =
            'MAP Protocol: Chain-to-chain Interoperation Protocol'
          break
      }
    } else {
      title =
        title || 'MAP Protocol: Chain-to-chain Interoperation Protocol'
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
            'MAP Protocol 是一种开放的、完全去中心化的链间交互协议，在独立自验证的共识机制下，链与链之间可以实现轻量级地任意交互而不需要任何中继链。MarcoPolo Protocol 期望构建一个点对点的、具有大量可互操作的未来互链网，通过各链间TPS、隐私计算、存储、安全等资源或能力互操作，为金融、AI、物联网、溯源、治理等领域应用提供坚实的区块链底层基础设施。'
          description2 = ''
          break
        case 'ko':
          keyword = '크립토 지불. ,비트코인 지불,MAP'
          description =
            '마르코폴로 프로토콜은 개방적이고 완전히 분산된 체인 간 상호운용 프로토콜로, 독립적으로 검증 가능한 여러 컨센서스 블록체인의 상호운용성을 가능하게 합니다. MAP Protocol은 상호운용 가능하고 체인 투 체인 기반의 미래 인터 체인 네트워크를 구축할 것입니다. 마르코폴로 프로토콜에 구축된 이 생태계는 크로스체인 통신, 프라이버시 계산, 공유 스토리지 등에 의해 금융, AI, IOT, 추적성 및 거버넌스를 위한 탄탄한 인프라를 제공합니다.'
          description2 = ''
          break
        default:
          keyword =
            'marcopolo ,marcopolo protocol,blockchain,Ethereum,cryptocurrency,Pay,Crypto payment,bitcoin payment,payment,map,bitcoin,Magellan protocol, peer-to-peer cash system,defi,dex,Gravity,Marcopay,MarcoPolo pay,MarcoPolo,peer-to-peer Electronic cash system'
          description =
            'MarcoPolo Protocol is an open, fully decentralized, chain-to-chain interoperation protocol that enables the interoperability of multiple independently verifiable consensus blockchains without a relay chain. MarcoPolo Protocol expects to construct a future inter-chain-net, which is interoperable and chain-to-chain based. The ecosystem built on MarcoPolo Protocol can provide a solid infrastructure for finance, AI, IoT, traceability, and governance filed by cross-chain communication, privacy computation, shared storage, etc...'
          description2 =
            ''
          break
      }
    } else {
      keyword =
        'marcopolo ,marcopolo protocol,blockchain,Ethereum,cryptocurrency,Pay,Crypto payment,bitcoin payment,payment,map,bitcoin,Magellan protocol, peer-to-peer cash system,defi,dex,Gravity,Marcopay,MarcoPolo pay,MarcoPolo,peer-to-peer Electronic cash system'
      description =
        'MarcoPolo Protocol is an open, fully decentralized, chain-to-chain interoperation protocol that enables the interoperability of multiple independently verifiable consensus blockchains without a relay chain. MarcoPolo Protocol expects to construct a future inter-chain-net, which is interoperable and chain-to-chain based. The ecosystem built on MarcoPolo Protocol can provide a solid infrastructure for finance, AI, IoT, traceability, and governance filed by cross-chain communication, privacy computation, shared storage, etc...'
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
