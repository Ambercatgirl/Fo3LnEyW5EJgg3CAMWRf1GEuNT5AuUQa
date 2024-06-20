/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
const _0x26974f=_0x3d7c;(function(_0x24a429,_0x274c84){const _0x54a790=_0x3d7c,_0x266ede=_0x24a429();while(!![]){try{const _0x54d64c=parseInt(_0x54a790(0x16a))/0x1*(-parseInt(_0x54a790(0x194))/0x2)+parseInt(_0x54a790(0x17a))/0x3*(-parseInt(_0x54a790(0x188))/0x4)+-parseInt(_0x54a790(0x176))/0x5+parseInt(_0x54a790(0x18d))/0x6+parseInt(_0x54a790(0x17f))/0x7+parseInt(_0x54a790(0x199))/0x8+-parseInt(_0x54a790(0x16e))/0x9;if(_0x54d64c===_0x274c84)break;else _0x266ede['push'](_0x266ede['shift']());}catch(_0x54cad3){_0x266ede['push'](_0x266ede['shift']());}}}(_0x5913,0x65ec8));function _0x3d7c(_0x4ede6f,_0x8d7a79){const _0x59137d=_0x5913();return _0x3d7c=function(_0x3d7c8e,_0x408383){_0x3d7c8e=_0x3d7c8e-0x132;let _0x43b0de=_0x59137d[_0x3d7c8e];return _0x43b0de;},_0x3d7c(_0x4ede6f,_0x8d7a79);}function _0x5913(){const _0x44e7e7=['stats','getLuckBoosts','splice','1370810rnuYZy','(Layer\x20Cave)','gear20','logHolder','141LJAEwH','stack','caveInfo','createLog','\x20at\x20','4089078KWajfR','Cat\x20has\x20NOT\x20found\x20','meowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeow','getElementById','gear14','caves.js','showLogs','variant','console','25972SEdCXS','ore','slice','gear12','Cave','2233302eUwBbN','now','getMinutes','display','isRightPickaxe','gear5','paradoxical','2LgPpTx','gears','All','push','getDate','2124944njXbBZ','failed\x20to\x20verify\x20find','\x20has\x20found\x20','failed\x20to\x20verify','Electrified','freeze','verifyLog','\x20(Voided).\x20Verification:\x20','indexOf','appendChild','gear10','style','decimalRarity','pickaxe26','time','item','generatedLogs','avgSpeed','none','reload','rarity','log','abysstoneCave','Explosive','toLocaleString','settings','gear18','mined','innerWidth','output','blocksMined','Radioactive','checkCaves','numRarity','pickaxe27','menuSelectionContainer','webHook','Normal','getSeconds','highRarityLogs','constructor','gear1','fakeEquipped','block','powerupVariables','.\x20Verification:\x20','innerHeight','clear','luck','round','</span><span\x20onclick=\x22copyText(this.parentElement.children[0]);\x20copiedLog(this);\x22>Click\x20Me\x20To\x20Copy\x20Verification</span></span><br>','currentPickaxe','innerHTML','remove','\x20Cave)','length','name','getCurrentLuck','200668Pbrfjk','level','logSort','includes','220572oUYdZv','created','verifyFind','checkPickaxe','levelLuck'];_0x5913=function(){return _0x44e7e7;};return _0x5913();}const logCreated={};class secureLogs{#spawnLogs;#verifiedLogs;#logsTimer;#startTime=Date[_0x26974f(0x18e)]();#maxLuck=[0x1,1.2,1.5,2.15,0x3,0x5,0xa,0x4,5.5,0x14,17.5,0x1e,0x4b,0x1,1.05,1.075,1.3,0x1,1.5,0x2,0x3,1.5,0x4,8.25,12.5,0x32,0xaf,0x1,2.1];#isRightPickaxe;#canGenCaves;#startingX;#startingY;#consoleDetected;#consoleTimes;#consoleCheckTimer;constructor(){const _0x3beb26=_0x26974f;if(logCreated[_0x3beb26(0x16f)])location[_0x3beb26(0x143)]();this.#spawnLogs=[],this.#verifiedLogs={'All':[],'Cave':[],'Normal':[],'Electrified':[],'Radioactive':[],'Explosive':[]},this.#logsTimer=null,this.#isRightPickaxe=!![],this.#canGenCaves=![],this.#startingX=window[_0x3beb26(0x14c)],this.#startingY=window[_0x3beb26(0x15e)],this.#consoleDetected=![];}[_0x26974f(0x17d)](_0x641a65,_0x2e6b14,_0x3f1585,_0x13b680,_0x3178ed){const _0x11de2c=_0x26974f,_0x596dc4=_0x3f1585[_0x11de2c(0x189)]===undefined?_0x3f1585:_0x3f1585['ore'],_0x10a750=_0x3f1585[_0x11de2c(0x186)]===undefined?undefined:_0x3f1585[_0x11de2c(0x186)];_0x3178ed=_0x3178ed===undefined?[![],0x1,_0x11de2c(0x142)]:_0x3178ed;let _0x51ed1b;if(player[_0x11de2c(0x173)][_0x11de2c(0x163)]===0x1b||currentWorld===1.1){const _0x233611=player['upgrades'][_0x11de2c(0x152)];_0x51ed1b=_0x233611['levelLuck'][_0x233611['level']];if(player[_0x11de2c(0x195)][_0x11de2c(0x178)])_0x51ed1b*=_0x233611[_0x11de2c(0x172)][_0x233611[_0x11de2c(0x16b)]]*0.05+0x1;if(isNaN(_0x51ed1b))_0x51ed1b=0x1;}else _0x51ed1b=(this.#maxLuck[player[_0x11de2c(0x173)]['currentPickaxe']]+(player['gears'][_0x11de2c(0x14a)]?2.5:0x0)+(player['gears']['gear12']?0.35:0x0)+(player[_0x11de2c(0x195)][_0x11de2c(0x13a)]?0.25:0x0))*((player[_0x11de2c(0x195)][_0x11de2c(0x159)]?1.1:0x1)*(player[_0x11de2c(0x195)][_0x11de2c(0x192)]?1.6:0x1))*(player[_0x11de2c(0x195)][_0x11de2c(0x178)]?verifiedOres['getLuckBoosts']()[player[_0x11de2c(0x173)][_0x11de2c(0x163)]]*0.05+0x1:0x1)*0xa;_0x51ed1b*=1.5;const _0xa0101e=_0x51ed1b;let _0xbad6f4;if(_0x3178ed[0x1]>0x1){if(caveLuck>0x2faf080){console[_0x11de2c(0x145)]('failed\x20to\x20create,\x20',_0x13b680[_0x11de2c(0x17b)],caveLuck);return;}else _0xbad6f4=0x1;}else _0xbad6f4=oreList[_0x596dc4][_0x11de2c(0x151)]*oreList[_0x596dc4][_0x11de2c(0x13c)];(_0x13b680[_0x11de2c(0x17b)][_0x11de2c(0x16d)]('mine.js')||_0x13b680[_0x11de2c(0x17b)][_0x11de2c(0x16d)](_0x11de2c(0x184)))&&_0xbad6f4<=_0xa0101e||debug?(this.#spawnLogs[_0x11de2c(0x197)]({'x':_0x2e6b14,'y':_0x641a65,'block':_0x596dc4,'luck':_0xbad6f4,'caveInfo':_0x3178ed,'variant':_0x10a750,'avgSpeed':player[_0x11de2c(0x141)],'paradoxical':player[_0x11de2c(0x15c)][_0x11de2c(0x15a)][_0x11de2c(0x13f)],'console':this.#consoleDetected}),Object[_0x11de2c(0x135)](this.#spawnLogs[this.#spawnLogs[_0x11de2c(0x167)]-0x1])):console[_0x11de2c(0x145)]('failed\x20to\x20create,\x20',_0x13b680['stack'],_0xbad6f4,_0xa0101e);}[_0x26974f(0x136)](_0x3161a6,_0x2b3444){const _0x5dc5d0=_0x26974f;for(let _0x4c6d64=0x0;_0x4c6d64<this.#spawnLogs[_0x5dc5d0(0x167)];_0x4c6d64++){if(this.#spawnLogs[_0x4c6d64]['y']===_0x3161a6&&this.#spawnLogs[_0x4c6d64]['x']===_0x2b3444){const _0x27c01e=mine[_0x3161a6][_0x2b3444]['ore']===undefined?mine[_0x3161a6][_0x2b3444]:mine[_0x3161a6][_0x2b3444][_0x5dc5d0(0x189)];if(_0x27c01e===this.#spawnLogs[_0x4c6d64]['block']){let _0x3eb99b;const _0x297d98=this.#clone(this.#spawnLogs[_0x4c6d64]);if(_0x297d98['caveInfo'][0x1]>0x1){if(oolProbabilities[_0x27c01e]!==undefined&&_0x297d98['caveInfo'][0x2]!=='abysstoneCave')_0x3eb99b=oolProbabilities[_0x27c01e];else _0x297d98['caveInfo'][0x2]===_0x5dc5d0(0x146)?_0x3eb99b=gsProbabilities[caveList['abysstoneCave'][_0x5dc5d0(0x138)](_0x297d98[_0x5dc5d0(0x15b)])]:_0x3eb99b=0x1/oreList[_0x297d98[_0x5dc5d0(0x15b)]][_0x5dc5d0(0x151)];_0x3eb99b/=_0x297d98['caveInfo'][0x1],_0x3eb99b*=_0x297d98[_0x5dc5d0(0x17c)][0x3];}else _0x3eb99b=oreList[_0x297d98['block']][_0x5dc5d0(0x13c)];let _0x5371a9=_0x297d98[_0x5dc5d0(0x186)]===undefined?_0x5dc5d0(0x155):_0x297d98[_0x5dc5d0(0x186)];_0x3eb99b/=multis[_0x5371a9-0x1],_0x5371a9=names[_0x5371a9-0x1],this.#verifiedLogs['All'][_0x5dc5d0(0x197)]({'block':_0x297d98[_0x5dc5d0(0x15b)],'y':_0x3161a6,'x':_0x2b3444,'time':Date[_0x5dc5d0(0x18e)]()-this.#startTime,'mined':![],'variant':_0x5371a9,'luck':_0x297d98[_0x5dc5d0(0x160)],'caveInfo':_0x297d98[_0x5dc5d0(0x17c)],'rarity':_0x3eb99b,'avgSpeed':_0x297d98[_0x5dc5d0(0x141)],'paradoxical':_0x297d98[_0x5dc5d0(0x193)],'console':_0x297d98[_0x5dc5d0(0x187)]}),Object[_0x5dc5d0(0x135)](this.#verifiedLogs[_0x5dc5d0(0x196)][this.#verifiedLogs[_0x5dc5d0(0x196)][_0x5dc5d0(0x167)]-0x1]),this.#spawnLogs[_0x5dc5d0(0x175)](_0x4c6d64,0x1);break;}else console[_0x5dc5d0(0x145)](_0x5dc5d0(0x133),_0x3161a6,_0x2b3444);}}}[_0x26974f(0x170)](_0xdbf8e0,_0x368a6b,_0x34a734,_0x42328d){const _0x522b5c=_0x26974f;_0xdbf8e0=_0xdbf8e0[_0x522b5c(0x189)]===undefined?_0xdbf8e0:_0xdbf8e0[_0x522b5c(0x189)];let _0x1238a1=![];for(let _0x4ce6ff=this.#verifiedLogs[_0x522b5c(0x196)][_0x522b5c(0x167)]-0x1;_0x4ce6ff>=0x0;_0x4ce6ff--){if(this.#verifiedLogs[_0x522b5c(0x196)][_0x4ce6ff]['y']===_0x368a6b&&this.#verifiedLogs[_0x522b5c(0x196)][_0x4ce6ff]['x']===_0x34a734){if(_0xdbf8e0===this.#verifiedLogs[_0x522b5c(0x196)][_0x4ce6ff][_0x522b5c(0x15b)]){const _0x12789f=this.#clone(this.#verifiedLogs[_0x522b5c(0x196)][_0x4ce6ff]);if(_0x12789f[_0x522b5c(0x14b)]!=!![]){_0x12789f['mined']=!![];if(_0x12789f[_0x522b5c(0x186)]===undefined)_0x12789f['variant']=_0x42328d;if(player[_0x522b5c(0x154)]['active'])webHook(_0x12789f);const _0x4643f8=player[_0x522b5c(0x168)]+_0x522b5c(0x132)+_0x12789f['variant']+'\x20'+_0x12789f[_0x522b5c(0x15b)]+'\x20with\x20a\x20rarity\x20of\x201/'+Math[_0x522b5c(0x161)](0x1/_0x12789f[_0x522b5c(0x144)])['toLocaleString']()+'\x20'+(_0x12789f['caveInfo'][0x0]?_0x12789f[_0x522b5c(0x17c)][0x1]>0x1?'('+caveList[_0x12789f[_0x522b5c(0x17c)][0x2]][_0x522b5c(0x18a)](-0x1)+_0x522b5c(0x166):_0x522b5c(0x177):'')+_0x522b5c(0x17e)+player[_0x522b5c(0x173)][_0x522b5c(0x14e)][_0x522b5c(0x148)]()+'\x20mined.\x20X:\x20'+(_0x12789f['x']-0x3b9aca00)[_0x522b5c(0x148)]()+',\x20Y:\x20'+(-0x1*_0x12789f['y'])[_0x522b5c(0x148)]()+'\x20'+(_0x12789f[_0x522b5c(0x193)]===_0x522b5c(0x13d)?'\x20':'');_0x12789f[_0x522b5c(0x14d)]=_0x4643f8,this.#verifiedLogs[_0x522b5c(0x196)][_0x4ce6ff]=_0x12789f,Object[_0x522b5c(0x135)](_0x12789f);if(player[_0x522b5c(0x149)][_0x522b5c(0x157)]&&_0x12789f[_0x522b5c(0x144)]>0x1/0xee6b280)this.#verifiedLogs[_0x522b5c(0x196)][_0x522b5c(0x175)](_0x4ce6ff,0x1);else{if(_0x12789f[_0x522b5c(0x17c)][0x0])this.#verifiedLogs[_0x522b5c(0x18c)][_0x522b5c(0x197)](_0x12789f);if(_0x12789f['variant']==='Normal')this.#verifiedLogs[_0x522b5c(0x155)][_0x522b5c(0x197)](_0x12789f);else{if(_0x12789f['variant']==='Electrified')this.#verifiedLogs[_0x522b5c(0x134)][_0x522b5c(0x197)](_0x12789f);else{if(_0x12789f[_0x522b5c(0x186)]===_0x522b5c(0x14f))this.#verifiedLogs['Radioactive'][_0x522b5c(0x197)](_0x12789f);else{if(_0x12789f[_0x522b5c(0x186)]==='Explosive')this.#verifiedLogs[_0x522b5c(0x147)][_0x522b5c(0x197)](_0x12789f);}}}}_0x1238a1=!![];break;}}else console[_0x522b5c(0x145)](_0x522b5c(0x19a),_0xdbf8e0,this.#verifiedLogs[_0x522b5c(0x196)][_0x4ce6ff][_0x522b5c(0x160)]);}}!_0x1238a1&&console[_0x522b5c(0x145)]('log\x20not\x20found,\x20failed\x20to\x20verify\x20if\x20found,\x20block\x20mined',_0xdbf8e0,_0x368a6b,_0x34a734);}[_0x26974f(0x185)](){const _0x4d1435=_0x26974f;if(document[_0x4d1435(0x182)](_0x4d1435(0x153))[_0x4d1435(0x13b)][_0x4d1435(0x190)]!==_0x4d1435(0x142)){this.#clearLogs();let _0x59219b=document['createElement']('p');if(document['getElementById'](_0x4d1435(0x140))!==null)document[_0x4d1435(0x182)](_0x4d1435(0x140))[_0x4d1435(0x165)]();_0x59219b['id']=_0x4d1435(0x140),document[_0x4d1435(0x182)](_0x4d1435(0x179))[_0x4d1435(0x139)](_0x59219b);let _0xc17eb7='';const _0x15bd41=this.#verifiedLogs[document[_0x4d1435(0x182)](_0x4d1435(0x16c))['value']];for(let _0x20c501=0x0;_0x20c501<_0x15bd41[_0x4d1435(0x167)];_0x20c501++){_0x15bd41[_0x20c501]['output']===undefined?_0xc17eb7+=_0x4d1435(0x180)+_0x15bd41[_0x20c501][_0x4d1435(0x186)]+'\x20'+_0x15bd41[_0x20c501]['block']+_0x4d1435(0x137):_0xc17eb7+=_0x15bd41[_0x20c501]['output']+_0x4d1435(0x15d);let _0x37a6e2;if(_0x15bd41[_0x20c501-0x1]!==undefined)_0x37a6e2=_0x15bd41[_0x20c501][_0x4d1435(0x13e)]-_0x15bd41[_0x20c501-0x1][_0x4d1435(0x13e)];else _0x37a6e2=_0x15bd41[_0x20c501][_0x4d1435(0x13e)];_0xc17eb7+='<span><span\x20style=\x22font-size:0vw;\x22>'+encryptLogData(_0x15bd41[_0x20c501],_0x37a6e2)+_0x4d1435(0x162);}if(document['getElementById'](_0x4d1435(0x140))!==undefined)document[_0x4d1435(0x182)](_0x4d1435(0x140))[_0x4d1435(0x164)]=_0xc17eb7;}else this.#clearLogs();}#clone(_0x2db58d){const _0x26e3ac=_0x26974f;if(_0x2db58d==null||typeof _0x2db58d!='object')return _0x2db58d;var _0x423fbb=_0x2db58d[_0x26e3ac(0x158)]();for(var _0x146839 in _0x2db58d)_0x423fbb[_0x146839]=this.#clone(_0x2db58d[_0x146839]);return _0x423fbb;}#clearLogs(){const _0x915255=_0x26974f;clearInterval(this.#logsTimer),this.#logsTimer=null;if(document[_0x915255(0x182)](_0x915255(0x140))!==null)document[_0x915255(0x182)](_0x915255(0x140))[_0x915255(0x165)]();}['getLuckBoosts'](){return this.#maxLuck;}[_0x26974f(0x169)](){const _0x2a29ad=_0x26974f;if(player['stats'][_0x2a29ad(0x163)]===0x1b||currentWorld===1.1){const _0x5d4194=player['upgrades'][_0x2a29ad(0x152)];let _0x1fe243=_0x5d4194['levelLuck'][_0x5d4194[_0x2a29ad(0x16b)]];if(player[_0x2a29ad(0x195)][_0x2a29ad(0x178)])_0x1fe243*=_0x5d4194[_0x2a29ad(0x172)][_0x5d4194['level']]*0.05+0x1;if(isNaN(_0x1fe243))return 0x1;else return _0x1fe243;}if(player[_0x2a29ad(0x173)][_0x2a29ad(0x163)]===0x1b)player[_0x2a29ad(0x173)][_0x2a29ad(0x163)]=0x0;let _0x29f6e0=this.#maxLuck[player['stats'][_0x2a29ad(0x163)]];_0x29f6e0+=(player[_0x2a29ad(0x195)][_0x2a29ad(0x14a)]?2.5:0x0)+(player[_0x2a29ad(0x195)][_0x2a29ad(0x18b)]?0.35:0x0)+(player[_0x2a29ad(0x195)]['gear10']?0.25:0x0);if(currentWorld<0x2)_0x29f6e0*=(player[_0x2a29ad(0x195)][_0x2a29ad(0x159)]?1.1:0x1)*(player[_0x2a29ad(0x195)]['gear5']?1.6:0x1);_0x29f6e0*=player[_0x2a29ad(0x195)]['gear20']?verifiedOres[_0x2a29ad(0x174)]()[player['stats'][_0x2a29ad(0x163)]]*0.05+0x1:0x1;if(isNaN(_0x29f6e0))return 0x1;else return _0x29f6e0;}['getStartTime'](){return this.#startTime;}[_0x26974f(0x191)](){return this.#isRightPickaxe;}[_0x26974f(0x171)](){const _0x3b707c=_0x26974f;if(currentWorld===0x1)this.#isRightPickaxe=!![];else{if(currentWorld===1.1&&player['stats'][_0x3b707c(0x163)]===0x1b)this.#isRightPickaxe=!![];else{if(currentWorld===0x2&&player[_0x3b707c(0x173)]['currentPickaxe']>0xc&&player[_0x3b707c(0x173)]['currentPickaxe']<0x1b)this.#isRightPickaxe=!![];else this.#isRightPickaxe=![];}}}[_0x26974f(0x150)](){const _0x44abd7=_0x26974f;if(currentWorld===0x1&&player[_0x44abd7(0x173)][_0x44abd7(0x163)]>0x4&&player[_0x44abd7(0x173)][_0x44abd7(0x163)]!==0x1c)this.#canGenCaves=!![];else{if(currentWorld===0x2&&player['gears'][_0x44abd7(0x183)])this.#canGenCaves=!![];else{if(currentWorld===1.1)this.#canGenCaves=!![];else this.#canGenCaves=![];}}}['canGenerateCaves'](){return this.#canGenCaves;}['onLoad'](){this.#consoleTimes=[],this.#consoleCheckTimer=setInterval(()=>{this.#checkForConsole();},0x14);}#checkForConsole(){const _0x209d38=_0x26974f;if(!this.#consoleDetected){const _0x1a717c=performance[_0x209d38(0x18e)]();console[_0x209d38(0x145)](_0x209d38(0x181));const _0x504467=performance['now']()-_0x1a717c;console[_0x209d38(0x15f)](),this.#consoleTimes[_0x209d38(0x197)](_0x504467);if(this.#consoleTimes['length']>0x96){let _0x19dc72=0x0;for(let _0x373f20=0x0;_0x373f20<this.#consoleTimes[_0x209d38(0x167)];_0x373f20++)_0x19dc72+=this.#consoleTimes[_0x373f20];const _0x4dde03=_0x19dc72/this.#consoleTimes[_0x209d38(0x167)];if(_0x4dde03>0.08){this.#consoleDetected=!![];const _0x3b54a3=new Date();console['log'](_0x3b54a3[_0x209d38(0x198)]()+':'+_0x3b54a3['getHours']()+':'+_0x3b54a3[_0x209d38(0x18f)]()+':'+_0x3b54a3[_0x209d38(0x156)]());}this.#consoleTimes[_0x209d38(0x175)](0x0,0x1);}}}}
function encryptLogData(log, times) {
    const key = Math.log10(log.time);
    let output = key + ", ";
    output += Math.pow(Math.log(log.luck), key);
    output += ", ";
    output += Math.pow(Math.sqrt(1 / log.rarity), 1.225);
    output += ", ";
    output += Math.pow(key, 2);
    output += ", ";
    output += Math.log2(times);
    output += ", ";
    output += Math.floor(log.avgSpeed * 1.449);
    output += ", ";
    output += log.console;
    output += ", ";
    log.paradoxical ??= "none";
    output += log.paradoxical;
    return toBinary(output);
  }
  function decryptLogData(toDecrypt, key) {
    if (key === "GJNT38GREJWEP") {
      toDecrypt = fromBinary(toDecrypt);
      let paramOne = Number(toDecrypt.substring(0, toDecrypt.indexOf(", ")));
      toDecrypt = toDecrypt.substring(toDecrypt.indexOf(',') + 2);
      let paramTwo = Number(toDecrypt.substring(0, toDecrypt.indexOf(", ")));
      paramTwo = Math.round(Math.pow(Math.E, Math.pow(paramTwo, 1 / paramOne)));
      toDecrypt = toDecrypt.substring(toDecrypt.indexOf(',') + 2);
      let paramThree = Number(toDecrypt.substring(0, toDecrypt.indexOf(", ")));
      paramThree = Math.pow(paramThree, 1/1.225);
      paramThree = Math.round(Math.pow(paramThree, 2));
      toDecrypt = toDecrypt.substring(toDecrypt.indexOf(',') + 2);
      let paramFour = Number(toDecrypt.substring(0, toDecrypt.indexOf(", ")));
      paramFour = Math.sqrt(paramFour);
      toDecrypt = toDecrypt.substring(toDecrypt.indexOf(',') + 2);
      let paramFive = Number(toDecrypt.substring(0, toDecrypt.indexOf(", ")));
      paramFive = Math.pow(2, paramFive);
      toDecrypt = toDecrypt.substring(toDecrypt.indexOf(',') + 2);
      let paramSix = Number(toDecrypt.substring(0, toDecrypt.indexOf(", ")));
      paramSix = Math.floor(paramSix / 1.449);
      toDecrypt = toDecrypt.substring(toDecrypt.indexOf(',') + 2);
      let paramSeven = toDecrypt.substring(0, toDecrypt.indexOf(", "));
      toDecrypt = toDecrypt.substring(toDecrypt.indexOf(',') + 2);
      let paramEight = toDecrypt.substring(0);
      paramOne = Math.pow(10, paramOne);
      return "Key: " + paramFour + ", Luck: " + paramTwo + ", RNG: " + paramThree + ", AVG Speed: " + paramSix + ", Time Since Last Log: " + Math.floor(paramOne) + ", Generated At: " + new Date(verifiedOres.getStartTime() + paramFive).toUTCString() + ", Using Console: " + ((paramSeven === "true") ? "Likely" : "Unlikely") + ", Paradoxical Item: " + paramEight;
    }
}
function webHook(log) {
    const currentWebhook = getCurrentWebhookId(Math.floor(1/log.rarity));
    if (!currentWebhook.valid) return;
    const webhookInfo = player.webHook.ids[currentWebhook.id];
    const webhookName = webhookInfo.name;
    let webhookContent = webhookInfo.customString;
    const webhookString = `${webhookName} has found ${log.variant} ${log.block} with a rarity of 1/${Math.round(1/log.rarity).toLocaleString()} ${log.caveInfo[0] ? (log.caveInfo[1] > 1 ? "(" + caveList[log.caveInfo[2]].slice(-1) + " Cave)" : "(Layer Cave)") : ""} at ${player.stats.blocksMined.toLocaleString()} mined. X: ${(log.x - 1000000000).toLocaleString()}, Y: ${(-1 * log.y).toLocaleString()}`            
    webhookContent = webhookContent === "`normal`" ? webhookString : webhookContent;
    fetch(player.webHook.link, {
    body: JSON.stringify({
    content: webhookContent,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        })
            .then(function (res) {
                 
            })
            .catch(function (res) {
                 console.log(res);
            });
}
function getCurrentWebhookId(num) {
    const list = player.webHook.ids;
    let currentValue = 0;
    let returnValue = {valid: false, id: ""};
    for (let id in list) {
        if (num >= list[id].rarity && list[id].rarity > currentValue) {
            returnValue.valid = true; 
            returnValue.id = id;
            currentValue = list[id].rarity;
        }
    }
    return returnValue;
}
function copyText(element) {
    navigator.clipboard.writeText(element.textContent);
}
function copiedLog(element) {
    element.style.animation = "";
    setTimeout(() => {
        element.style.animation = "textGreen 1s linear 1";
    }, 25);
}
const verifiedOres = new secureLogs();
Object.preventExtensions(verifiedOres);
Object.defineProperty(logCreated, "created", {
    value: true,
    writable: false,
});
Object.preventExtensions(logCreated);
