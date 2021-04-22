(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{409:function(e,s,t){"use strict";t.r(s);var n=t(21),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"附录d-bitcore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附录d-bitcore"}},[e._v("#")]),e._v(" 附录D Bitcore")]),e._v(" "),t("p",[e._v("Bitcore是BitPay提供的一套工具。 其目标是为Bitcoin开发人员提供易于使用的工具。 几乎所有的Bitcore的代码都是用JavaScript编写的。 有一些专门为NodeJS编写的模块。 最后，Bitcore的“节点”模块包括Bitcoin Core的C ++代码。 有关详细信息，请参阅"),t("a",{attrs:{href:"https://bitcore.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://bitcore.io"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"bitcore的功能列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bitcore的功能列表"}},[e._v("#")]),e._v(" Bitcore的功能列表")]),e._v(" "),t("ul",[t("li",[e._v("Bitcoin full node (bitcore-node)")]),e._v(" "),t("li",[e._v("Block explorer (insight)")]),e._v(" "),t("li",[e._v("Block, transaction, and wallet utilities (bitcore-lib)")]),e._v(" "),t("li",[e._v("Communicating directly with Bitcoin’s P2P network (bitcore-p2p)")]),e._v(" "),t("li",[e._v("Seed entropy mnemonic generation（种子熵助记符） (bitcore-mnemonic)")]),e._v(" "),t("li",[e._v("Payment protocol (bitcore-payment-protocol)")]),e._v(" "),t("li",[e._v("Message verification and signing (bitcore-message)")]),e._v(" "),t("li",[e._v("Elliptic curve Integrated Encryption Scheme（椭圆曲线综合加密方案） (bitcore-ecies)")]),e._v(" "),t("li",[e._v("Wallet service (bitcore-wallet-service)")]),e._v(" "),t("li",[e._v("Wallet client (bitcore-wallet-client)")]),e._v(" "),t("li",[e._v("Integrating services directly with Bitcoin Core (bitcore-node)")])]),e._v(" "),t("h2",{attrs:{id:"bitcore库示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bitcore库示例"}},[e._v("#")]),e._v(" Bitcore库示例")]),e._v(" "),t("h3",{attrs:{id:"先决条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先决条件"}},[e._v("#")]),e._v(" 先决条件")]),e._v(" "),t("ul",[t("li",[e._v("NodeJS >= 4.x")])]),e._v(" "),t("p",[e._v("如果使用NodeJS和节点REPL：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ npm install -g bitcore-lib bitcore-p2p\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"使用bitcore-lib的钱包示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用bitcore-lib的钱包示例"}},[e._v("#")]),e._v(" 使用bitcore-lib的钱包示例")]),e._v(" "),t("p",[e._v("使用关联的私钥创建新的比特币地址：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> bitcore = require('bitcore-lib')\n> privateKey = new bitcore.PrivateKey()\n> address = privateKey.toAddress().toString()\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("创建分层确定性私钥和地址：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> hdPrivateKey = bitcore.HDPrivateKey()\n> hdPublicKey = bitcore.HDPublicKey(hdPrivateKey)\n> hdAddress = new bitcore.Address(hdPublicKey.publicKey).toString()\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("从UTXO创建和签署交易：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> utxo = {\n  txId: transaction id containing an unspent output,\n  outputIndex: output index e.g. 0,\n  address: addressOfUtxo,\n  script: bitcore.Script.buildPublicKeyHashOut(addressOfUtxo).toString(),\n  satoshis: amount sent to the address\n}\n> fee = 3000 //set appropriately for conditions on the network\n> tx = new bitcore.Transaction()\n        .from(utxo)\n        .to(address, 35000)\n        .fee(fee)\n        .enableRBF()\n        .sign(privateKeyOfUtxo)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br")])]),t("p",[e._v("替换mempool中的最后一个交易（替换费）：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> rbfTx = new Transaction()\n           .from(utxo)\n           .to(address, 35000)\n           .fee(fee*2)\n           .enableRBF()\n           .sign(privateKeyOfUtxo);\n> tx.serialize();\n> rbfTx.serialize();\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("p",[e._v("将交易广播到比特币网络（注意：仅广播有效交易;请参阅"),t("a",{attrs:{href:"https://bitnodes.21.co/nodes",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://bitnodes.21.co/nodes"),t("OutboundLink")],1),e._v("）："),t("br"),e._v("\n1.将以下代码复制到名为broadcast.js的文件中。"),t("br"),e._v("\n2.tx和rbfTx变量分别是tx.serialize（）和rbfTx.serialize（）的输出。"),t("br"),e._v("\n3.为了更换费用，对等端必须支持bitcoind选项mempoolreplace并将其设置为1。"),t("br"),e._v("\n4.运行文件节点broadcast.js：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var p2p = require('bitcore-p2p');\nvar bitcore = require('bitcore-lib');\nvar tx = new bitcore.Transaction('output from serialize function');\nvar rbfTx = new bitcore.Transaction('output from serialize function');\nvar host = 'ip address'; //use valid peer listening on tcp 8333\nvar peer = new p2p.Peer({host: host});\nvar messages = new p2p.Messages();\npeer.on('ready', function() {\n  var txs = [messages.Transaction(tx), messages.Transaction(rbfTx)];\n  var index = 0;\n  var interval = setInterval(function() {\n    peer.sendMessage(txs[index++]);\n    console.log('tx: ' + index + ' sent');\n    if (index === txs.length) {\n      clearInterval(interval);\n      console.log('disconnecting from peer: ' + host);\n      peer.disconnect();\n    }\n  }, 2000);\n});\npeer.connect();\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);