(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{412:function(_,v,t){"use strict";t.r(v);var d=t(21),r=Object(d.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"附录b、交易脚本语言操作符-常量和符号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附录b、交易脚本语言操作符-常量和符号"}},[_._v("#")]),_._v(" 附录B、交易脚本语言操作符，常量和符号")]),_._v(" "),t("blockquote",[t("p",[_._v("原内容来源于"),t("a",{attrs:{href:"https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script",target:"_blank",rel:"noopener noreferrer"}},[_._v("Opcodes used in Bitcoin Script - Bitcoin Wiki"),t("OutboundLink")],1),_._v(" 和"),t("a",{attrs:{href:"https://en.bitcoin.it/wiki/Script",target:"_blank",rel:"noopener noreferrer"}},[_._v("Script - Bitcoin Wiki"),t("OutboundLink")],1),_._v(" 基于CC 3.0 做了修订和更新。中文翻译来自"),t("a",{attrs:{href:"https://github.com/tianmingyun/MasterBitcoin2CN/blob/master/appdx-scriptops.md",target:"_blank",rel:"noopener noreferrer"}},[_._v("MasterBitcoin2CN-appdx-scriptops"),t("OutboundLink")],1),_._v(" 基于 CC BY-SA 4.0 做了修订和更新")])]),_._v(" "),t("p",[_._v("这里是所有 比特币脚本操作符，也称为关键词、命令或函数。False 是零或负零(使用了任意数量的字节)或空数组，而 True 是其他任何东西。")]),_._v(" "),t("h2",{attrs:{id:"常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常量"}},[_._v("#")]),_._v(" 常量")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("符号")]),_._v(" "),t("th",[_._v("值 (十六进制)")]),_._v(" "),t("th",[_._v("输入")]),_._v(" "),t("th",[_._v("输出")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("OP_0 or OP_FALSE")]),_._v(" "),t("td",[_._v("0x00")]),_._v(" "),t("td",[_._v("Nothing")]),_._v(" "),t("td",[_._v("(empty value)")]),_._v(" "),t("td",[_._v("把一个空的字节压入堆栈")])]),_._v(" "),t("tr",[t("td",[_._v("1-75")]),_._v(" "),t("td",[_._v("0x01-0x4b")]),_._v(" "),t("td",[_._v("(special)")]),_._v(" "),t("td",[_._v("data")]),_._v(" "),t("td",[_._v("把接下来的N 个字节压入堆栈中，N 的取值在1 到75 之间")])]),_._v(" "),t("tr",[t("td",[_._v("OP_PUSHDATA1")]),_._v(" "),t("td",[_._v("0x4c")]),_._v(" "),t("td",[_._v("(special)")]),_._v(" "),t("td",[_._v("data")]),_._v(" "),t("td",[_._v("下一个字节包括数字N，会将接下来的N 个字节压入堆栈")])]),_._v(" "),t("tr",[t("td",[_._v("OP_PUSHDATA2")]),_._v(" "),t("td",[_._v("0x4d")]),_._v(" "),t("td",[_._v("(special)")]),_._v(" "),t("td",[_._v("data")]),_._v(" "),t("td",[_._v("下面两个字节包括数字N，会将接下来的N 个字节压入堆栈")])]),_._v(" "),t("tr",[t("td",[_._v("OP_PUSHDATA4")]),_._v(" "),t("td",[_._v("0x4e")]),_._v(" "),t("td",[_._v("(special)")]),_._v(" "),t("td",[_._v("data")]),_._v(" "),t("td",[_._v("下面四个字节包括数字N，会将接下来的N 个字节压入堆栈")])]),_._v(" "),t("tr",[t("td",[_._v("OP_1NEGATE")]),_._v(" "),t("td",[_._v("0x4f")]),_._v(" "),t("td",[_._v("Nothing")]),_._v(" "),t("td",[_._v("-1")]),_._v(" "),t("td",[_._v("将数字-1 压入堆栈")])]),_._v(" "),t("tr",[t("td",[_._v("OP_1 or OP_TRUE")]),_._v(" "),t("td",[_._v("0x51")]),_._v(" "),t("td",[_._v("Nothing")]),_._v(" "),t("td",[_._v("1")]),_._v(" "),t("td",[_._v("将数字1 压入堆栈")])]),_._v(" "),t("tr",[t("td",[_._v("OP_2 to OP_16")]),_._v(" "),t("td",[_._v("0x52 to 0x60")]),_._v(" "),t("td",[_._v("Nothing")]),_._v(" "),t("td",[_._v("2-16")]),_._v(" "),t("td",[_._v("将数字N 压入堆栈，例如OP_2 压入数字2")])])])]),_._v(" "),t("h2",{attrs:{id:"程序流控制操作符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#程序流控制操作符"}},[_._v("#")]),_._v(" 程序流控制操作符")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("符号")]),_._v(" "),t("th",[_._v("值 (十六进制)")]),_._v(" "),t("th",[_._v("输入")]),_._v(" "),t("th",[_._v("输出")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("OP_NOP")]),_._v(" "),t("td",[_._v("0x61")]),_._v(" "),t("td",[_._v("Nothing")]),_._v(" "),t("td",[_._v("Nothing")]),_._v(" "),t("td",[_._v("无操作")])]),_._v(" "),t("tr",[t("td",[_._v("OP_VER")]),_._v(" "),t("td",[_._v("0x62")]),_._v(" "),t("td",[_._v("Nothing")]),_._v(" "),t("td",[_._v("Protocol version")]),_._v(" "),t("td",[_._v("将此事务所依据的协议版本放到堆栈上。(此操作码计划在Chronicle版本中重新启用)")])]),_._v(" "),t("tr",[t("td",[_._v("OP_IF")]),_._v(" "),t("td",[_._v("0x63")]),_._v(" "),t("td"),_._v(" "),t("td"),_._v(" "),t("td",[_._v("如果栈项元素值不为FALSE，在IF和ELSE之间的语句将被执行。如果如果栈项元素值为FALSE，在ELSE和ENDIF之间的语句将被执行。栈顶元素被删除。 IF [statements>ELSE [statements]ENDIF")])]),_._v(" "),t("tr",[t("td",[_._v("OP_NOTIF")]),_._v(" "),t("td",[_._v("0x64")]),_._v(" "),t("td"),_._v(" "),t("td"),_._v(" "),t("td",[_._v("如果栈项元素值为FALSE，在IF和ELSE之间的语句将被执行。如果如果栈项元素值不为FALSE，在ELSE和ENDIF之间的语句将被执行。栈顶元素被删除。 IF [statements>ELSE [statements]ENDIF")])]),_._v(" "),t("tr",[t("td",[_._v("OP_VERIF")]),_._v(" "),t("td",[_._v("0x65")]),_._v(" "),t("td"),_._v(" "),t("td"),_._v(" "),t("td",[_._v("如果栈项元素值等于交易执行时的协议版本，在IF和ELSE之间的语句将被执行。如果如果栈项元素值不等于交易执行时的协议版本，在ELSE和ENDIF之间的语句将被执行。栈顶元素被删除。(此操作码计划在Chronicle版本中重新启用)  IF [statements>ELSE [statements]ENDIF")])]),_._v(" "),t("tr",[t("td",[_._v("OP_VERNOTIF")]),_._v(" "),t("td",[_._v("0x66")]),_._v(" "),t("td"),_._v(" "),t("td"),_._v(" "),t("td",[_._v("如果栈项元素值不等于交易执行时的协议版本，在IF和ELSE之间的语句将被执行。如果如果栈项元素值等于交易执行时的协议版本，在ELSE和ENDIF之间的语句将被执行。栈顶元素被删除。(此操作码计划在Chronicle版本中重新启用) IF [statements>ELSE [statements]ENDIF")])]),_._v(" "),t("tr",[t("td",[_._v("OP_ELSE")]),_._v(" "),t("td",[_._v("0x67")]),_._v(" "),t("td"),_._v(" "),t("td"),_._v(" "),t("td",[_._v("如果前述的OP_IF 或OP_NOTIF 或OP_ELSE 未被执行，这些语句就会被执行")])]),_._v(" "),t("tr",[t("td",[_._v("OP_ENDIF")]),_._v(" "),t("td",[_._v("0x68")]),_._v(" "),t("td"),_._v(" "),t("td"),_._v(" "),t("td",[_._v("终止OP_IF, OP_NOTIF, OP_ELSE 区块")])]),_._v(" "),t("tr",[t("td",[_._v("OP_VERIFY")]),_._v(" "),t("td",[_._v("0x69")]),_._v(" "),t("td",[_._v("True / False")]),_._v(" "),t("td",[_._v("Nothing / Fail")]),_._v(" "),t("td",[_._v("如果栈项元素值非真，则标记交易无效。栈顶元素被删除。")])]),_._v(" "),t("tr",[t("td",[_._v("OP_RETURN")]),_._v(" "),t("td",[_._v("0x6a")]),_._v(" "),t("td",[_._v("Nothing")]),_._v(" "),t("td",[_._v("结束脚本。栈顶元素是脚本最终结果")]),_._v(" "),t("td",[_._v("OP_ Return 还可用于创建“ False Return”输出，其中 scriptPubKey 由 OP_FALE OP _RETURN 和数据组成。这样的输出是不可花费的，并且应该给出一个零Satoshi值。可以从 UTXO数据集存储中删除这些输出，从而减小大小。目前BitcoinSV 网络支持在给定交易中包含多个 FALSE RETURN 输出，最初每个输出可以容纳100KB 的数据。在2020年创世升级之后，根据矿工的设置可包含任何大小的数据。")])])])]),_._v(" "),t("h2",{attrs:{id:"堆栈操作符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆栈操作符"}},[_._v("#")]),_._v(" 堆栈操作符")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("符号")]),_._v(" "),t("th",[_._v("值 (十六进制)")]),_._v(" "),t("th",[_._v("输入")]),_._v(" "),t("th",[_._v("输出")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("OP_TOALTSTACK")]),_._v(" "),t("td",[_._v("0x6b")]),_._v(" "),t("td",[_._v("x1")]),_._v(" "),t("td",[_._v("(alt)x1")]),_._v(" "),t("td",[_._v("从主堆栈中取出元素，推入辅堆栈。")])]),_._v(" "),t("tr",[t("td",[_._v("OP_FROMALTSTACK")]),_._v(" "),t("td",[_._v("0x6c")]),_._v(" "),t("td",[_._v("(alt)x1")]),_._v(" "),t("td",[_._v("x1")]),_._v(" "),t("td",[_._v("从辅堆栈中取出元素，推入主堆栈")])]),_._v(" "),t("tr",[t("td",[_._v("OP_2DROP")]),_._v(" "),t("td",[_._v("0x6d")]),_._v(" "),t("td",[_._v("x1 x2")]),_._v(" "),t("td",[_._v("Nothing")]),_._v(" "),t("td",[_._v("移除栈顶两个元素")])]),_._v(" "),t("tr",[t("td",[_._v("OP_2DUP")]),_._v(" "),t("td",[_._v("0x6e")]),_._v(" "),t("td",[_._v("x1 x2")]),_._v(" "),t("td",[_._v("x1 x2 x1 x2")]),_._v(" "),t("td",[_._v("复制栈顶两个元素")])]),_._v(" "),t("tr",[t("td",[_._v("OP_3DUP")]),_._v(" "),t("td",[_._v("0x6f")]),_._v(" "),t("td",[_._v("x1 x2 x3")]),_._v(" "),t("td",[_._v("x1 x2 x3 x1 x2 x3")]),_._v(" "),t("td",[_._v("复制栈顶三个元素")])]),_._v(" "),t("tr",[t("td",[_._v("OP_2OVER")]),_._v(" "),t("td",[_._v("0x70")]),_._v(" "),t("td",[_._v("x1 x2 x3 x4")]),_._v(" "),t("td",[_._v("x1 x2 x3 x4 x1 x2")]),_._v(" "),t("td",[_._v("把栈底的第三、第四个元素拷贝到栈顶")])]),_._v(" "),t("tr",[t("td",[_._v("OP_2ROT")]),_._v(" "),t("td",[_._v("0x71")]),_._v(" "),t("td",[_._v("x1 x2 x3 x4 x5 x6")]),_._v(" "),t("td",[_._v("x3 x4 x5 x6 x1 x2")]),_._v(" "),t("td",[_._v("移动第五、第六元素到栈顶")])]),_._v(" "),t("tr",[t("td",[_._v("OP_2SWAP")]),_._v(" "),t("td",[_._v("0x72")]),_._v(" "),t("td",[_._v("x1 x2 x3 x4")]),_._v(" "),t("td",[_._v("x3 x4 x1 x2")]),_._v(" "),t("td",[_._v("将栈顶的两个元素进行交换")])]),_._v(" "),t("tr",[t("td",[_._v("OP_IFDUP")]),_._v(" "),t("td",[_._v("0x73")]),_._v(" "),t("td",[_._v("x")]),_._v(" "),t("td",[_._v("x / x x")]),_._v(" "),t("td",[_._v("如果栈项元素值不为0，复制该元素值")])]),_._v(" "),t("tr",[t("td",[_._v("OP_DEPTH")]),_._v(" "),t("td",[_._v("0x74")]),_._v(" "),t("td",[_._v("Nothing")]),_._v(" "),t("td",[_._v("Stack size")]),_._v(" "),t("td",[_._v("计算堆栈元素的数量，并将值放置在堆栈顶部")])]),_._v(" "),t("tr",[t("td",[_._v("OP_DROP")]),_._v(" "),t("td",[_._v("0x75")]),_._v(" "),t("td",[_._v("x")]),_._v(" "),t("td",[_._v("Nothing")]),_._v(" "),t("td",[_._v("删除栈顶元素")])]),_._v(" "),t("tr",[t("td",[_._v("OP_DUP")]),_._v(" "),t("td",[_._v("0x76")]),_._v(" "),t("td",[_._v("x")]),_._v(" "),t("td",[_._v("x x")]),_._v(" "),t("td",[_._v("复制栈顶元素")])]),_._v(" "),t("tr",[t("td",[_._v("OP_NIP")]),_._v(" "),t("td",[_._v("0x77")]),_._v(" "),t("td",[_._v("x1 x2")]),_._v(" "),t("td",[_._v("x2")]),_._v(" "),t("td",[_._v("删除栈顶的下一个元素")])]),_._v(" "),t("tr",[t("td",[_._v("OP_OVER")]),_._v(" "),t("td",[_._v("0x78")]),_._v(" "),t("td",[_._v("x1 x2")]),_._v(" "),t("td",[_._v("x1 x2 x1")]),_._v(" "),t("td",[_._v("复制栈顶的下一个元素到栈顶")])]),_._v(" "),t("tr",[t("td",[_._v("OP_PICK")]),_._v(" "),t("td",[_._v("0x79")]),_._v(" "),t("td",[_._v("xn ... x2 x1 x0 n")]),_._v(" "),t("td",[_._v("xn ... x2 x1 x0 xn")]),_._v(" "),t("td",[_._v("把堆栈的第n 个元素拷贝到栈顶")])]),_._v(" "),t("tr",[t("td",[_._v("OP_ROLL")]),_._v(" "),t("td",[_._v("0x7a")]),_._v(" "),t("td",[_._v("xn ... x2 x1 x0 n")]),_._v(" "),t("td",[_._v("... x2 x1 x0 xn")]),_._v(" "),t("td",[_._v("把堆栈的第n 个元素移动到栈顶")])]),_._v(" "),t("tr",[t("td",[_._v("OP_ROT")]),_._v(" "),t("td",[_._v("0x7b")]),_._v(" "),t("td",[_._v("x1 x2 x3")]),_._v(" "),t("td",[_._v("x2 x3 x1")]),_._v(" "),t("td",[_._v("翻转栈顶的三个元素")])]),_._v(" "),t("tr",[t("td",[_._v("OP_SWAP")]),_._v(" "),t("td",[_._v("0x7c")]),_._v(" "),t("td",[_._v("x1 x2")]),_._v(" "),t("td",[_._v("x2 x1")]),_._v(" "),t("td",[_._v("栈顶的三个元素交换")])]),_._v(" "),t("tr",[t("td",[_._v("OP_TUCK")]),_._v(" "),t("td",[_._v("0x7d")]),_._v(" "),t("td",[_._v("x1 x2")]),_._v(" "),t("td",[_._v("x2 x1 x2")]),_._v(" "),t("td",[_._v("拷贝栈顶元素并插入到栈顶第二个元素之后")])])])]),_._v(" "),t("h2",{attrs:{id:"字符串操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串操作"}},[_._v("#")]),_._v(" 字符串操作")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("符号")]),_._v(" "),t("th",[_._v("值 (十六进制)")]),_._v(" "),t("th",[_._v("输入")]),_._v(" "),t("th",[_._v("输出")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("em",[_._v("OP_CAT")])]),_._v(" "),t("td",[_._v("0x7e")]),_._v(" "),t("td",[_._v("x1 x2")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("连接两个字符串")])]),_._v(" "),t("tr",[t("td",[t("em",[_._v("OP_SPLIT")])]),_._v(" "),t("td",[_._v("0x7f")]),_._v(" "),t("td",[_._v("x n")]),_._v(" "),t("td",[_._v("x1 x2")]),_._v(" "),t("td",[_._v("在位置 n 处拆分字节序列 x")])]),_._v(" "),t("tr",[t("td",[t("em",[_._v("OP_NUM2BIN")])]),_._v(" "),t("td",[_._v("0x80")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("将数值 a 转换为长度为 b 的字节序列")])]),_._v(" "),t("tr",[t("td",[t("em",[_._v("OP_BIN2NUM")])]),_._v(" "),t("td",[_._v("0x81")]),_._v(" "),t("td",[_._v("x")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("将字节序列 x 转换为数值")])]),_._v(" "),t("tr",[t("td",[_._v("OP_SIZE")]),_._v(" "),t("td",[_._v("0x82")]),_._v(" "),t("td",[_._v("in")]),_._v(" "),t("td",[_._v("in size")]),_._v(" "),t("td",[_._v("把栈顶元素的字符串长度压入堆栈（原字符串不出栈）")])])])]),_._v(" "),t("h2",{attrs:{id:"二进制算术和条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二进制算术和条件"}},[_._v("#")]),_._v(" 二进制算术和条件")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("符号")]),_._v(" "),t("th",[_._v("值 (十六进制)")]),_._v(" "),t("th",[_._v("输入")]),_._v(" "),t("th",[_._v("输出")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("em",[_._v("OP_INVERT")])]),_._v(" "),t("td",[_._v("0x83")]),_._v(" "),t("td",[_._v("in")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("所有输入的位取反，已禁用")])]),_._v(" "),t("tr",[t("td",[t("em",[_._v("OP_AND")])]),_._v(" "),t("td",[_._v("0x84")]),_._v(" "),t("td",[_._v("x1 x2")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("对输入的所有位进行布尔与运算，已禁用")])]),_._v(" "),t("tr",[t("td",[t("em",[_._v("OP_OR")])]),_._v(" "),t("td",[_._v("0x85")]),_._v(" "),t("td",[_._v("x1 x2")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("对输入的每一位进行布尔或运算，已禁用")])]),_._v(" "),t("tr",[t("td",[t("em",[_._v("OP_XOR")])]),_._v(" "),t("td",[_._v("0x86")]),_._v(" "),t("td",[_._v("x1 x2")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("对输入的每一位进行布尔异或运算，已禁用")])]),_._v(" "),t("tr",[t("td",[_._v("OP_EQUAL")]),_._v(" "),t("td",[_._v("0x87")]),_._v(" "),t("td",[_._v("x1 x2")]),_._v(" "),t("td",[_._v("True / false")]),_._v(" "),t("td",[_._v("如果输入的两个数相等，返回1，否则返回0")])]),_._v(" "),t("tr",[t("td",[_._v("OP_EQUALVERIFY")]),_._v(" "),t("td",[_._v("0x88")]),_._v(" "),t("td",[_._v("x1 x2")]),_._v(" "),t("td",[_._v("Nothing / fail")]),_._v(" "),t("td",[_._v("与OP_EQUAL 一样，如结果为0，之后运行OP_VERIFY")])])])]),_._v(" "),t("h2",{attrs:{id:"数值操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数值操作"}},[_._v("#")]),_._v(" 数值操作")]),_._v(" "),t("p",[_._v("注意: 算术输入仅限于有符号的32位整数，但可能会溢出。如果这些命令的任何输入值超过4字节，脚本必须中止并失败。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("符号")]),_._v(" "),t("th",[_._v("值 (十六进制)")]),_._v(" "),t("th",[_._v("输入")]),_._v(" "),t("th",[_._v("输出")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("OP_1ADD")]),_._v(" "),t("td",[_._v("0x8b")]),_._v(" "),t("td",[_._v("in")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("栈顶值加1")])]),_._v(" "),t("tr",[t("td",[_._v("OP_1SUB")]),_._v(" "),t("td",[_._v("0x8c")]),_._v(" "),t("td",[_._v("in")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("栈顶值减1")])]),_._v(" "),t("tr",[t("td",[t("em",[_._v("OP_2MUL")])]),_._v(" "),t("td",[_._v("0x8d")]),_._v(" "),t("td",[_._v("in")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("栈顶值乘2(此操作码计划在Chronicle版本中重新启用)")])]),_._v(" "),t("tr",[t("td",[t("em",[_._v("OP_2DIV")])]),_._v(" "),t("td",[_._v("0x8e")]),_._v(" "),t("td",[_._v("in")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("栈顶值除2(此操作码计划在Chronicle版本中重新启用)")])]),_._v(" "),t("tr",[t("td",[_._v("OP_NEGATE")]),_._v(" "),t("td",[_._v("0x8f")]),_._v(" "),t("td",[_._v("in")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("栈顶值符号取反")])]),_._v(" "),t("tr",[t("td",[_._v("OP_ABS")]),_._v(" "),t("td",[_._v("0x90")]),_._v(" "),t("td",[_._v("in")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("栈顶值符号取正")])]),_._v(" "),t("tr",[t("td",[_._v("OP_NOT")]),_._v(" "),t("td",[_._v("0x91")]),_._v(" "),t("td",[_._v("in")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("如果栈顶值为0 或1，则输出1或0；否则输出0")])]),_._v(" "),t("tr",[t("td",[_._v("OP_0NOTEQUAL")]),_._v(" "),t("td",[_._v("0x92")]),_._v(" "),t("td",[_._v("in")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("输入值为0 输出0；否则输出1")])]),_._v(" "),t("tr",[t("td",[_._v("OP_ADD")]),_._v(" "),t("td",[_._v("0x93")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("弹出栈顶的两个元素，压入二者相加结果 b+a")])]),_._v(" "),t("tr",[t("td",[_._v("OP_SUB")]),_._v(" "),t("td",[_._v("0x94")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("弹出栈顶的两个元素，压入二者相减（第二项减去第一项）结果 b-a")])]),_._v(" "),t("tr",[t("td",[_._v("OP_MUL")]),_._v(" "),t("td",[_._v("0x95")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("栈顶两项的积")])]),_._v(" "),t("tr",[t("td",[_._v("OP_DIV")]),_._v(" "),t("td",[_._v("0x96")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("输出用第二项除以第一项的倍数")])]),_._v(" "),t("tr",[t("td",[_._v("OP_MOD")]),_._v(" "),t("td",[_._v("0x97")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("输出用第二项除以第一项得到的余数")])]),_._v(" "),t("tr",[t("td",[_._v("OP_LSHIFT")]),_._v(" "),t("td",[_._v("0x98")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("左移第二项，移动位数为第一项的二进制位数, 无视符号")])]),_._v(" "),t("tr",[t("td",[_._v("OP_RSHIFT")]),_._v(" "),t("td",[_._v("0x99")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("右移第二项，移动位数为第一项的二进制位数,无视符号")])]),_._v(" "),t("tr",[t("td",[_._v("OP_BOOLAND")]),_._v(" "),t("td",[_._v("0x9a")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("布尔与运算，两项都不为0，输出1，否则输出0")])]),_._v(" "),t("tr",[t("td",[_._v("OP_BOOLOR")]),_._v(" "),t("td",[_._v("0x9b")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("布尔或运算，两项有一个不为0，输出1，否则输出0")])]),_._v(" "),t("tr",[t("td",[_._v("OP_NUMEQUAL")]),_._v(" "),t("td",[_._v("0x9c")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("两项相等则输出1，否则输出为0")])]),_._v(" "),t("tr",[t("td",[_._v("OP_NUMEQUALVERIFY")]),_._v(" "),t("td",[_._v("0x9d")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("Nothing / fail")]),_._v(" "),t("td",[_._v("与NUMEQUAL 相同，如结果为0， 运行OP_VERIFY")])]),_._v(" "),t("tr",[t("td",[_._v("OP_NUMNOTEQUAL")]),_._v(" "),t("td",[_._v("0x9e")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("如果栈顶两项不是相等数的话，则输出1，否则输出为0")])]),_._v(" "),t("tr",[t("td",[_._v("OP_LESSTHAN")]),_._v(" "),t("td",[_._v("0x9f")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("如果栈顶数第二项小于栈顶项，则输出1，否则输出为0  a<b")])]),_._v(" "),t("tr",[t("td",[_._v("OP_GREATERTHAN")]),_._v(" "),t("td",[_._v("0xa0")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("如果栈顶数第二项大于栈顶项，则输出1 a>b")])]),_._v(" "),t("tr",[t("td",[_._v("OP_LESSTHANOREQUAL")]),_._v(" "),t("td",[_._v("0xa1")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("如果栈顶数第二项小于或等于第一项，则输出1 a<=b")])]),_._v(" "),t("tr",[t("td",[_._v("OP_GREATERTHANOREQUAL")]),_._v(" "),t("td",[_._v("0xa2")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("如果栈顶数第二项大于或等于第一项，则输出1 a>=b")])]),_._v(" "),t("tr",[t("td",[_._v("OP_MIN")]),_._v(" "),t("td",[_._v("0xa3")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("输出栈顶两项中较小的一项")])]),_._v(" "),t("tr",[t("td",[_._v("OP_MAX")]),_._v(" "),t("td",[_._v("0xa4")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("输出栈顶两项中较大的一项")])]),_._v(" "),t("tr",[t("td",[_._v("OP_WITHIN")]),_._v(" "),t("td",[_._v("0xa5")]),_._v(" "),t("td",[_._v("a b")]),_._v(" "),t("td",[_._v("out")]),_._v(" "),t("td",[_._v("如果第三项的数值介于前两项之间，则输出1，否则输出为0")])])])]),_._v(" "),t("h2",{attrs:{id:"加密和哈希操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加密和哈希操作"}},[_._v("#")]),_._v(" 加密和哈希操作")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("符号")]),_._v(" "),t("th",[_._v("值 (十六进制)")]),_._v(" "),t("th",[_._v("输入")]),_._v(" "),t("th",[_._v("输出")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("OP_RIPEMD160")]),_._v(" "),t("td",[_._v("0xa6")]),_._v(" "),t("td",[_._v("in")]),_._v(" "),t("td",[_._v("hash")]),_._v(" "),t("td",[_._v("返回栈顶元素的RIPEMD160 哈希值")])]),_._v(" "),t("tr",[t("td",[_._v("OP_SHA1")]),_._v(" "),t("td",[_._v("0xa7")]),_._v(" "),t("td",[_._v("in")]),_._v(" "),t("td",[_._v("hash")]),_._v(" "),t("td",[_._v("返回栈顶元素SHA1 哈希值")])]),_._v(" "),t("tr",[t("td",[_._v("OP_SHA256")]),_._v(" "),t("td",[_._v("0xa8")]),_._v(" "),t("td",[_._v("in")]),_._v(" "),t("td",[_._v("hash")]),_._v(" "),t("td",[_._v("返回栈顶元素SHA256 哈希值")])]),_._v(" "),t("tr",[t("td",[_._v("OP_HASH160")]),_._v(" "),t("td",[_._v("0xa9")]),_._v(" "),t("td",[_._v("in")]),_._v(" "),t("td",[_._v("hash")]),_._v(" "),t("td",[_._v("栈顶元素进行两次HASH，先用SHA-256，再用RIPEMD-160")])]),_._v(" "),t("tr",[t("td",[_._v("OP_HASH256")]),_._v(" "),t("td",[_._v("0xaa")]),_._v(" "),t("td",[_._v("in")]),_._v(" "),t("td",[_._v("hash")]),_._v(" "),t("td",[_._v("栈顶元素用SHA-256 算法HASH 两次")])]),_._v(" "),t("tr",[t("td",[_._v("OP_CODESEPARATOR")]),_._v(" "),t("td",[_._v("0xab")]),_._v(" "),t("td",[_._v("Nothing")]),_._v(" "),t("td",[_._v("Nothing")]),_._v(" "),t("td",[_._v("标记已进行签名验证的数据。All of the signature checking words will only match signatures to the data after the most recently-executed OP_CODESEPARATOR.")])]),_._v(" "),t("tr",[t("td",[_._v("OP_CHECKSIG")]),_._v(" "),t("td",[_._v("0xac")]),_._v(" "),t("td",[_._v("sig pubkey")]),_._v(" "),t("td",[_._v("True / false")]),_._v(" "),t("td",[_._v("交易用的签名必须是哈希值和公钥的有效签名，如果为真，则返回1，否则为0。整个事务的输出、输入和脚本(从最近执行的 op_codeseparator 到最后)都取哈希值。Op_checksig 使用的签名必须是此哈希值。")])]),_._v(" "),t("tr",[t("td",[_._v("OP_CHECKSIGVERIFY")]),_._v(" "),t("td",[_._v("0xad")]),_._v(" "),t("td",[_._v("sig pubkey")]),_._v(" "),t("td",[_._v("Nothing / fail")]),_._v(" "),t("td",[_._v("与CHECKSIG 一样，但之后运行OP_VERIFY, 栈顶元素移除。")])]),_._v(" "),t("tr",[t("td",[_._v("OP_CHECKMULTISIG")]),_._v(" "),t("td",[_._v("0xae")]),_._v(" "),t("td",[_._v("x sig1 sig2 ... number of signatures pub1 pub2 number of public keys")]),_._v(" "),t("td",[_._v("True / False")]),_._v(" "),t("td",[_._v("对于每对签名和公钥运行CHECKSIG。所有的签名要与公钥匹配。实现中存在一个BUG，会从堆栈中弹出一个前缀为OP_0的值。如果公钥无法进行任何签名比较，就不会再次检查它们，所以必须使用与它们相应的公钥在 scriptPubKey 或 redeemScript 中相同的顺序将签名放在 scriptSig 中。如果所有签名都有效，则返回1，否则返回0。")])]),_._v(" "),t("tr",[t("td",[_._v("OP_CHECKMULTISIGVERIFY")]),_._v(" "),t("td",[_._v("0xaf")]),_._v(" "),t("td",[_._v("x sig1 sig2 ... number of signatures pub1 pub2 ... number of public keys")]),_._v(" "),t("td",[_._v("Nothing / fail")]),_._v(" "),t("td",[_._v("与CHECKMULTISIG 一样，但之后运行OP_VERIFY")])])])]),_._v(" "),t("h2",{attrs:{id:"用过的nop操作符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用过的nop操作符"}},[_._v("#")]),_._v(" 用过的NOP操作符")]),_._v(" "),t("p",[_._v("在比特币的历史上，有操作码使用过保留的 NO_NOP 操作码标识符。现在这些操作码已经恢复到最初的无操作功能。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("符号")]),_._v(" "),t("th",[_._v("值 (十六进制)")]),_._v(" "),t("th",[_._v("输入")]),_._v(" "),t("th",[_._v("输出")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("OP_NOP2(之前是OP_CHECKLOCKTIMEVERIFY)")]),_._v(" "),t("td",[_._v("0xb1")]),_._v(" "),t("td",[_._v("Nothing(之前是 x)")]),_._v(" "),t("td",[_._v("Nothing(之前是 x或fail)")]),_._v(" "),t("td",[_._v("无操作忽略 （ 之前的语义在 bip0065中进行了描述）")])]),_._v(" "),t("tr",[t("td",[_._v("OP_NOP3(之前是 OP_CHECKSEQUENCEVERIFY)")]),_._v(" "),t("td",[_._v("0xb2")]),_._v(" "),t("td",[_._v("Nothing(之前是 x)")]),_._v(" "),t("td",[_._v("Nothing(之前是 x或fail)")]),_._v(" "),t("td",[_._v("无操作忽略（ 之前的语义在 bip0112中进行了描述）")])])])]),_._v(" "),t("h2",{attrs:{id:"伪关键词"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#伪关键词"}},[_._v("#")]),_._v(" 伪关键词")]),_._v(" "),t("p",[_._v("这些关键词在内部用于协助交易匹配。如果在实际脚本中使用它们则无效。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("符号")]),_._v(" "),t("th",[_._v("值 (十六进制)")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("OP_PUBKEYHASH")]),_._v(" "),t("td",[_._v("0xfd")]),_._v(" "),t("td",[_._v("表示OP_HASH160哈希的公钥")])]),_._v(" "),t("tr",[t("td",[_._v("OP_PUBKEY")]),_._v(" "),t("td",[_._v("0xfe")]),_._v(" "),t("td",[_._v("表示与OP_CHECKSIG兼容的公钥")])]),_._v(" "),t("tr",[t("td",[_._v("OP_INVALIDOPCODE")]),_._v(" "),t("td",[_._v("0xff")]),_._v(" "),t("td",[_._v("代表当前未指定的操作码")])])])]),_._v(" "),t("h2",{attrs:{id:"保留操作符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保留操作符"}},[_._v("#")]),_._v(" 保留操作符")]),_._v(" "),t("p",[_._v("未分配的任何操作码也被保留。使用未分配的操作码会导致交易无效。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("符号")]),_._v(" "),t("th",[_._v("值 (十六进制)")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("OP_RESERVED")]),_._v(" "),t("td",[_._v("0x50")]),_._v(" "),t("td",[_._v("除非放在未执行的 OP_IF 分支中，否则交易无效")])]),_._v(" "),t("tr",[t("td",[_._v("OP_RESERVED1")]),_._v(" "),t("td",[_._v("0x89")]),_._v(" "),t("td",[_._v("除非放在未执行的 OP_IF 分支中，否则交易无效")])]),_._v(" "),t("tr",[t("td",[_._v("OP_RESERVED2")]),_._v(" "),t("td",[_._v("0x8a")]),_._v(" "),t("td",[_._v("除非放在未执行的 OP_IF 分支中，否则交易无效")])]),_._v(" "),t("tr",[t("td",[_._v("OP_NOP1, OP_NOP4-OP_NOP10")]),_._v(" "),t("td",[_._v("0xb0, 0xb3-0xb9")]),_._v(" "),t("td",[_._v("忽略该操作符。不将交易标记为无效。")])])])]),_._v(" "),t("h6",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[_._v("#")])])])}),[],!1,null,null,null);v.default=r.exports}}]);