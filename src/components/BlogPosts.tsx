import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const ToText = (node: string) => {
  const tag = document.createElement('div');
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
};

type PostType = {
  link: string;
  thumbnail: string;
  title: string;
  content: string;
  pubDate: string;
};

const Post = (post: PostType, index: number) => (
  <div
    className='p-6 font-primary transition hover:scale-105 lg:w-1/3 '
    key={index}
  >
    <div className='mx-auto max-w-lg text-black'>
      <a href={post.link} target='_blank' rel='noreferrer'>
        <div className='mb-5 max-w-sm rounded-lg border border-gray-800 bg-white  shadow-md'>
          <img alt='' className='h-[200px] rounded-t-lg' src={post.thumbnail} />
          <div className='p-5 '>
            <h5 className='mb-2 truncate text-xl font-bold tracking-tight'>
              {post.title}
            </h5>
            <p className='mb-3 h-[10rem] overflow-hidden text-ellipsis text-sm font-normal leading-relaxed'>
              {ToText(post.content.substring(0, 500))}...
            </p>
            <div className='mt-4 flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-4 w-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
                />
              </svg>
              <span className='text-muted ml-2 text-xs'>
                {dayjs(post.pubDate).format('MMM DD, YYYY')}
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
);

const BlogPosts = () => {
  // const [posts, setPosts] = useState<any[]>();
  // const URL =
  //   'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mapprotocolofficial';

  // useEffect(() => {
  //   if (!posts) {
  //     axios.get(URL).then((res) => {
  //       setPosts(res.data.items);
  //     });
  //   }
  // }, [posts]);
  // if (!posts) {
  //   return <div className=''></div>;
  // }

  const posts = [
    {
      link: 'https://www.maplabs.io/blog/map-community-update-map-staking-and-voting-clarification/',
      thumbnail:
        'https://www.maplabs.io/blog/wp-content/uploads/2022/10/map-staking-and-voting.jpg',
      title: 'MAP Community Update: MAP Staking and Voting Clarification',
      content:
        '\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/0*dYEnuBa9hxVEaHgy"><figcaption>MAP Community Update: $MAP Staking &amp; Voting</figcaption></figure><p><a href="https://medium.com/marcopolo-protocol/map-mainnet-goes-live-on-august-31-4d3b044fcd8c">MAP Mainnet</a> has been officially LIVE for a month, and a lot of things have happened since then:</p>\n<ul>\n<li>\n<a href="https://twitter.com/MapProtocol/status/1566788518185095168">Ankr has join</a>ed our validator network</li>\n<li>\n<a href="https://medium.com/marcopolo-protocol/map-protocol-and-certik-join-forces-to-safeguard-cross-chain-security-e4cbf1c40fe7">CertiK is collaborating</a> with us for safeguarding Web3</li>\n<li>\n<a href="https://twitter.com/MapProtocol/status/1569672380150325249">$MAP staking competition</a> kicked off</li>\n<li>MAP team members <a href="https://twitter.com/MapProtocol/status/1570409984898519040">joining NEARCON2022</a> in Lisbon</li>\n<li>\n<a href="https://twitter.com/MapProtocol/status/1575472020552196096">MAP presenting Web3 007 Gala</a> at Token2049 in Singapore</li>\n<li>🎉 New chains — the first non-EVM and several EVMs — are underway to integrate with MAP</li>\n</ul>\n<p>Among them, $MAP staking is asked most often by the community. Here are our top five community questions for $MAP Staking.</p>\n<blockquote><strong><em>🧑\u200d💻 </em>1. How does the rotating committee of validators work in MAP?</strong></blockquote>\n<p>The rotating committee is selected from validators and changes <strong>every 5000 blocks (approximately 3 days)</strong>. Only those who get the most votes among all validator candidates can join the rotating committee. Thus,<strong> the amount of delegated votes</strong> is key for a validator to join the committee.</p>\n<blockquote><strong><em>⏳ </em>2. How long do I have to wait to get my staking rewards?</strong></blockquote>\n<p>As the rotating committee in MAP Mainnet changes<strong> every three days</strong>, the rewards will be distributed<strong> every three days</strong> as well. However, when a member stakes for the first time, the rewards will be distributed in <strong>four to six days</strong>, because this first-time staking will be active in the next committee, not the current one, and the rewards will be calculated accordingly as well.</p>\n<blockquote><strong><em>💰 </em>3. Are staking rewards always the same regardless of the validator I choose to vote for?</strong></blockquote>\n<p><strong>Staking rewards are weighted</strong> based on the staking amount of the validator and the status of node signatures. Ineffective validators who don’t work in a consistent manner or who rarely work will get fewer rewards, and members who have voted for ineffective validators will be affected accordingly. For this reason, it is recommended that members should choose a validator <strong>based on the rate of return (APY) and the validator’s online time</strong>, thus selecting <strong>effective ones</strong> that can work consistently and stably.</p>\n<blockquote><strong><em>⏰</em> 4. Can I revoke my vote? If so, how long do I have to wait for withdrawal?</strong></blockquote>\n<p>Vote revoking is available 24/7. However, there is a<strong> 15-day pending period</strong> from locking to unlocking. After the pending time, you will be able to withdraw.</p>\n<blockquote><strong><em>🪐 </em>5. The vote page only shows 30 validators. Is that all the validators that MAP has? How can MAP ensure security and decentralization?</strong></blockquote>\n<p>To become a validator, there’s an <strong>entry threshold: </strong>staking at least 1,000,000 $MAP and being able to set up their hardware. Although there could be an infinite number of available validators for MAP, <strong>the number of validators in a rotating committee</strong> has a limitation. Currently, at the initial Mainnet launch stage, the limitation is set at 30 so that no one can control the whole network. Coincidentally, the number of available validators at the moment is also 30, which explains why the voting page only shows 30 validators. But this will change as more validators will become available.</p>\n<p>In the future, via on-chain governance, the number limitation on validators in a committee will gradually increase based on the number of available validators and the staking amount. By then, only validators that work with long-term stability and that have the most votes can join the committee, thus achieving maximum security as well as maximum decentralization.</p>\n<p>💙 Huge thanks to the MAP community for raising those important questions. We hope the answers above will help members gain more clarity on $MAP staking and voting. As the MAP ecosystem is actively expanding beyond the current chain, the team is also working on a full set of documentation available for public consumption.</p>\n<p>At the moment, if you have any questions related to the MAP network or $MAP staking, please reach out to us in our <a href="https://t.me/MAPprotocol">Telegram</a> community or our <a href="https://discord.com/invite/MtYjv9jh4u">Discord</a> channel to get immediate help. Again, thank you for betting on $MAP. Let’s keep building the future of the internet and make omnichain a reality!</p>\n<h3>About MAP Protocol</h3>\n<p><a href="https://www.maplabs.io/">MAP Protocol </a>is the ultimate omnichain layer of Web3 with provably secure cross-chain communication built on Light-client and zk technology. MAP provides seamless communication with all chains and connects EVM with non-EVM. Developers can access a full suite of SDKs so their DApps can easily become omnichain applications.</p>\n<p><a href="https://docsend.com/view/3ugtsz5mut39juc6">Introduction</a> |<a href="https://maplabs.io/"> </a><a href="https://files.maplabs.io/pdf/mapprotocol_Litebook_en.pdf">Litebook</a> |<a href="https://maplabs.io/"> Website</a> |<a href="https://twitter.com/MapProtocol"> Twitter</a> |<a href="https://mapprotocolofficial.medium.com/"> Medium</a> |<a href="https://t.me/MAPprotocol"> Telegram</a> |<a href="https://github.com/mapprotocol"> GitHub</a> |<a href="https://www.linkedin.com/company/map-protocol/"> LinkedIn</a></p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=481f5368f68c" width="1" height="1" alt=""><hr>\n<p><a href="https://medium.com/marcopolo-protocol/map-community-update-map-staking-and-voting-clarification-481f5368f68c">MAP Community Update: $MAP Staking and Voting Clarification</a> was originally published in <a href="https://medium.com/marcopolo-protocol">MAP Protocol</a> on Medium, where people are continuing the conversation by highlighting and responding to this story.</p>\n',
      pubDate: '2022 10-02',
    },
    {
      link: 'https://www.maplabs.io/blog/map-token-staking/',
      thumbnail:
        'https://www.maplabs.io/blog/wp-content/uploads/2022/09/MAP-token-staking-on-map-validator-pool.jpg',
      title: '$MAP Token Staking Tutorial',
      content:
        '\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*iXKXeXaplg5kn3MH4rwGeg.png"><figcaption>$MAP Token Staking</figcaption></figure><blockquote>✍️ Authors: <a href="https://medium.com/u/d20da5c092a3">Hank the Crank</a> &amp; <a href="https://medium.com/u/3c7e5a270f28">Maffaz</a>\n</blockquote>\n<p>This guide will teach you how to stake your $MAP token into a MAP Validator Pool.</p>\n<p>🤑 From Sept 13 to 21, top 3 users, that staked the most amount of $MAP into the Validator Pool with the most $MAP staked (the winning Validator), will split an extra reward of $1000 worth of $MAP. An additional $2000 worth of $MAP will also be split between 30 lucky winners, randomly picked from those that staked in the winning Validator’s Pool.</p>\n<p>📌 Please note that staking your $MAP token into a MAP Validator Pool means you will <strong>delegate for $MAP to that specific MAP Validator</strong> for the purpose of securing the MAP Mainnet, Relay Chain.</p>\n<h4><strong>Step 1 — Going to the Staking Page</strong></h4>\n<p>Let’s head on over to the website: <a href="https://staking.maplabs.io/">https://staking.maplabs.io</a></p>\n<h4><strong>Step 2 — Connecting your wallet</strong></h4>\n<p>It will ask you to connect your wallet and collect to your wallet with $MAP tokens.</p>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/0*5pYYmRi6w7qEWqIT.png"></figure><figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/0*p5nxvUeU1mkrAYlA.png"><figcaption>Choose the wallet to connect</figcaption></figure><p>For this tutorial, we will be using <strong>MetaMask</strong> as an example. You will need some $MAP token (on MAP Mainnet) in order to create an account and participate in the staking.</p>\n<p>📍If your wallet is not already on the MAP Mainnet Network, there might be a pop-up window asking you to <strong>switch over to MAP Mainnet</strong> (“MAP-poc3”).</p>\n<p>📍If you need to purchase $MAP tokens, please visit the following link on how to obtain some $MAP tokens.</p>\n<p><a href="https://mapprotocolofficial.medium.com/how-to-get-map-tokens-via-metamask-5ad02ba98b13">How to Purchase MAP Tokens | Tutorial</a></p>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/354/0*0xv8M0OcBY99vteW.png"></figure><h4><strong>Step 3 — Creating a MAP Account</strong></h4>\n<p>After connecting your wallet you will be asked to create a name for your staking account.</p>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/633/0*n35opQVa4ELH94GW.png"></figure><figure><img alt="" src="https://cdn-images-1.medium.com/max/341/0*P1Qj67v56MK-v9v4.png"></figure><h4><strong>Step 4 — Locking your $MAP tokens for staking</strong></h4>\n<p>Next, we will have to lock your $MAP tokens. The amount of $MAP locked will be the amount of $MAP you would be able to use for staking. “Unlock” shows the amount of $MAP tokens remaining in your wallet which are not locked.</p>\n<p>Hit the <strong>Lock</strong> button and put in the amount you want to use for staking.</p>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/0*bKg2GCVW2CXv9VA1.png"></figure><p>Hit <strong>continue</strong> and confirm the transaction.</p>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/573/0*ZxJgXAul1xy_sIkh.png"></figure><p>Now that your $MAP tokens are locked you can use them to vote (stake).</p>\n<h4><strong>Step 5 — Choosing the Validator Pool &amp; Staking your $MAP tokens</strong></h4>\n<p>Click on the “<strong>vote</strong>” button in the top right of the website and choose the Validator Pool which you wish to stake/vote.</p>\n<p>Click ‘<strong>vote for</strong>’ to stake your $MAP into that pool. *Please note that staking your $MAP token into a MAP Validator Pool means you will delegate for $MAP to that specific MAP Validator for the purpose of securing the MAP Mainnet, Relay Chain.</p>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/0*cUpqZTbnU1YQSsvv.png"></figure><p><strong>Put in the amount</strong> you want to stake and hit continue.</p>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/0*rhiFLiziwkPNRE_6.png"></figure><p>Click on the <strong>vote</strong> button and confirm the transaction in your wallet.</p>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/622/0*3_isSMNE6Yrgg1A_.png"></figure><p>🎉Congratulations, you have now successfully staked your $MAP tokens into a Validator Pool!</p>\n<p>You can choose <strong>multiple different Validator Pools</strong> if you wish for your $MAP token staking. The respective APY represents the approximate amount you will get for the staking into that specific Validator Pool which will change according to the number of total participants in that particular pool.</p>\n<blockquote>Just remember that to <strong>withdraw $MAP tokens</strong> back to your wallet you have to <strong>unlock </strong>them first and wait approximately<strong> 15 days </strong>subsequently for the withdrawal.</blockquote>\n<h3>About MAP Protocol</h3>\n<p><a href="https://www.maplabs.io/">MAP Protocol </a>is the ultimate omnichain layer of Web3 with provably secure cross-chain communication built on Light-client and zk technology. MAP provides seamless communication with all chains and connects EVM with non-EVM. Developers can access a full suite of SDKs so their DApps can easily become omnichain applications.</p>\n<p><a href="https://docsend.com/view/3ugtsz5mut39juc6"><strong>Introduction</strong></a><strong> |</strong><a href="https://maplabs.io/"><strong> </strong></a><a href="https://files.maplabs.io/pdf/mapprotocol_Litebook_en.pdf"><strong>Litebook</strong></a><strong> |</strong><a href="https://maplabs.io/"><strong> Website</strong></a><strong> |</strong><a href="https://twitter.com/MapProtocol"><strong> Twitter</strong></a><strong> |</strong><a href="https://mapprotocolofficial.medium.com/"><strong> Medium</strong></a><strong> |</strong><a href="https://t.me/MAPprotocol"><strong> Telegram</strong></a><strong> |</strong><a href="https://github.com/mapprotocol"><strong> GitHub</strong></a><strong> |</strong><a href="https://www.linkedin.com/company/map-protocol/"><strong> LinkedIn</strong></a></p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=d78fc60e76e9" width="1" height="1" alt=""><hr>\n<p><a href="https://medium.com/marcopolo-protocol/map-token-staking-tutorial-d78fc60e76e9">$MAP Token Staking | Tutorial</a> was originally published in <a href="https://medium.com/marcopolo-protocol">MAP Protocol</a> on Medium, where people are continuing the conversation by highlighting and responding to this story.</p>\n',
      pubDate: '2022 12-17',
    },
    {
      link: 'https://www.maplabs.io/blog/map-protocol-and-certik-join-forces-to-safeguard-cross-chain-security/',
      thumbnail:
        'https://www.maplabs.io/blog/wp-content/uploads/2022/09/Certik.jpg',
      title:
        'MAP Protocol and CertiK Join Forces to Safeguard Cross-Chain Security',
      content:
        '\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/0*Eokez8zfEbhZysS-"><figcaption>MAP Protocol X CertiK</figcaption></figure><p>We are thrilled to announce MAP Protocol’s collaboration with CertiK, combining CertiK’s best-in-class network security monitoring technology with MAP Protocol’s industry-leading omnichain infrastructure to improve Web3 security.</p>\n<h3>What to expect from this collaboration?</h3>\n<p>Founded in 2018 by professors of Columbia and Yale, CertiK is the pioneer in blockchain security, utilizing best-in-class Formal Verification and AI technology to secure and monitor blockchains, smart contracts, and Web3 apps. With CertiK’s high-standard and in-depth security auditing, MAP Protocol will further ensure its end-to-end security and consistently maintain its security due diligence.</p>\n<p>As the ultimate omnichain layer for Web3 with security finality built upon light-client and ZK-SNARK, MAP Protocol seamlessly enables cross-chain communication with both EVM and Non -EVM chains. By connecting to the Web3 omnichain layer, CertiK can leverage this layer of security for a wider range of networks, thus better defending the integrity of the Web3 space.</p>\n<p>Of this successful collaboration, MAP Protocol CCO Michelle Law said, “ Collaborating with CertiK to ensure security in the Web3 space certainly allows us to provide the very best and perhaps the most secure cross-chain solution on the market. As our security foundation grows more solid with CertiK, we will be able to place dApps and projects on the best path for maximum security.”</p>\n<p>“We are excited to collaborate with MAP protocol in this joint venture which underscores our mission of securing the web3 work,” said Jason Jiang, CBO of CertiK. “Together — with CertiK’s end-to-end security services and MAP Protocols secure omnichain layer — we are confident that this joint solution will further solidify our strategy around security.”</p>\n<h3>Buckle up on security</h3>\n<p>Bridges are created to connect independent blockchains and to enable faster assets and information transfer, yet there seems to be an inevitable trade-off between security and utility. In this year so far, bridge hacks have incurred near <a href="https://finance.yahoo.com/news/crypt-hack-losses-2022-150100075.html">$2 billion in losses</a>, including <a href="https://www.maplabs.io/blog/nomad-bridge-hack-explained/">Nomad</a> ($190 million) earlier in August, <a href="https://decrypt.co/104138/north-korean-attackers-behind-100m-harmony-hack-report">Harmony</a> ($100 million) in June, <a href="https://rekt.news/ronin-rekt/">Ronin</a> ($625 million) during March, and <a href="https://www.theverge.com/2022/2/3/22916111/wormhole-hack-github-error-325-million-theft-ethereum-solana">Wormhole</a> ($326 million) at the beginning of February.</p>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/0*UGRU6C09wH2DmN_E"><figcaption><em>From </em><a href="https://finance.yahoo.com/news/crypt-hack-losses-2022-150100075.html"><em>Yahoo Finance</em></a></figcaption></figure><p>As the amount of value locked in bridges continues to rise, hacks will grow bigger and more sophisticated unless we figure out a better mechanism to stave off security risks. With the shared goal of securing Web3, MAP Protocol will work closely with CertiK to establish a security consensus, safeguard Web3 public chains, and build a more solid foundation for web3 projects.</p>\n<h3>About CertiK</h3>\n<p>CertiK’s mission is to secure the Web3 world. Starting with blockchain, <a href="https://www.certik.com/">CertiK</a> applies cutting-edge innovations from academia into Enterprise, enabling mission-critical applications to be built with security and correctness. Headquartered in New York City, CertiK was founded by computer science professors Ronghui Gu and Zhong Shao. CertiK is backed by industry leaders, including Insight Partners, Tiger Global, Sequoia, Coatue Management, Advent International, Goldman Sachs, Lightspeed, Hillhouse Capital, Binance, Coinbase Ventures, and more.</p>\n<h3>About MAP Protocol</h3>\n<p><a href="https://www.maplabs.io/">MAP Protocol </a>is the ultimate omnichain layer of Web3 with provably secure cross-chain communication built on Light-client and zk technology. MAP provides seamless communication with all chains and connects EVM with non-EVM. Developers can access a full suite of SDKs so their DApps can easily become omnichain applications.</p>\n<p><a href="https://docsend.com/view/3ugtsz5mut39juc6"><strong>Introduction</strong></a><strong> |</strong><a href="https://maplabs.io/"><strong> </strong></a><a href="https://files.maplabs.io/pdf/mapprotocol_Litebook_en.pdf"><strong>Litebook</strong></a><strong> |</strong><a href="https://maplabs.io/"><strong> Website</strong></a><strong> |</strong><a href="https://twitter.com/MapProtocol"><strong> Twitter</strong></a><strong> |</strong><a href="https://mapprotocolofficial.medium.com/"><strong> Medium</strong></a><strong> |</strong><a href="https://t.me/MAPprotocol"><strong> Telegram</strong></a><strong> |</strong><a href="https://github.com/mapprotocol"><strong> GitHub</strong></a><strong> |</strong><a href="https://www.linkedin.com/company/map-protocol/"><strong> LinkedIn</strong></a></p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=e4cbf1c40fe7" width="1" height="1" alt=""><hr>\n<p><a href="https://medium.com/marcopolo-protocol/map-protocol-and-certik-join-forces-to-safeguard-cross-chain-security-e4cbf1c40fe7">MAP Protocol and CertiK Join Forces to Safeguard Cross-Chain Security</a> was originally published in <a href="https://medium.com/marcopolo-protocol">MAP Protocol</a> on Medium, where people are continuing the conversation by highlighting and responding to this story.</p>\n',
      pubDate: '2022 12-12',
    },
  ];

  return (
    <div className='layout flex flex-col lg:flex-row'>
      {posts.slice(0, 3).map((item, index) => {
        return Post(item, index);
      })}
    </div>
  );
};

export default BlogPosts;
