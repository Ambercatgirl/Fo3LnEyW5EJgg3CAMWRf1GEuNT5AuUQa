/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
const _0x2fd8c3=_0x4fe0;function _0x4fe0(_0x2080cb,_0x5b156c){const _0x37b4b0=_0x37b4();return _0x4fe0=function(_0x4fe0ba,_0x71115d){_0x4fe0ba=_0x4fe0ba-0xc1;let _0x298cf4=_0x37b4b0[_0x4fe0ba];return _0x298cf4;},_0x4fe0(_0x2080cb,_0x5b156c);}(function(_0x46639d,_0x3280de){const _0x34d362=_0x4fe0,_0x125b7e=_0x46639d();while(!![]){try{const _0x1b2c32=parseInt(_0x34d362(0xed))/0x1+parseInt(_0x34d362(0xe8))/0x2*(-parseInt(_0x34d362(0xd5))/0x3)+parseInt(_0x34d362(0x114))/0x4+-parseInt(_0x34d362(0x137))/0x5*(parseInt(_0x34d362(0xd2))/0x6)+parseInt(_0x34d362(0x12a))/0x7+-parseInt(_0x34d362(0xdf))/0x8+parseInt(_0x34d362(0x109))/0x9*(parseInt(_0x34d362(0xee))/0xa);if(_0x1b2c32===_0x3280de)break;else _0x125b7e['push'](_0x125b7e['shift']());}catch(_0x4a526d){_0x125b7e['push'](_0x125b7e['shift']());}}}(_0x37b4,0x2aee0));const logCreated={};class secureLogs{#spawnLogs;#verifiedLogs;#logsTimer;#startTime=Date[_0x2fd8c3(0x105)]();#maxLuck=[0x1,1.2,1.5,2.15,0x3,0x5,0xa,0x4,5.5,0x14,17.5,0x1e,0x4b,0x1,1.05,1.075,1.3,0x1,1.5,0x2,0x3,1.5,0x4,8.25,12.5,0x32,0xaf,0x1,2.1];#isRightPickaxe;#canGenCaves;#startingX;#startingY;#consoleDetected;#consoleTimes;#consoleCheckTimer;#lastNumber;#lastAverage;#timeDecreased=![];#benchmarkTests;#benchmarkAvg;constructor(){const _0xb83e3f=_0x2fd8c3;if(logCreated[_0xb83e3f(0xc5)])location[_0xb83e3f(0x118)]();this.#spawnLogs=[],this.#verifiedLogs={'All':[],'Cave':[],'Normal':[],'Electrified':[],'Radioactive':[],'Explosive':[]},this.#logsTimer=null,this.#isRightPickaxe=!![],this.#canGenCaves=![],this.#startingX=window[_0xb83e3f(0x133)],this.#startingY=window[_0xb83e3f(0x10b)],this.#consoleDetected=![],this.#benchmarkTests=[],this.#benchmarkAvg=0x0;}[_0x2fd8c3(0xd0)](_0x5131ac,_0x3d7159,_0x4e74f9,_0x21893b,_0xaa6aa1){const _0x16aa2a=_0x2fd8c3,_0x1af98c=_0x4e74f9[_0x16aa2a(0xef)]===undefined?_0x4e74f9:_0x4e74f9[_0x16aa2a(0xef)],_0x356905=_0x4e74f9['variant']===undefined?undefined:_0x4e74f9[_0x16aa2a(0x125)];_0xaa6aa1=_0xaa6aa1===undefined?[![],0x1,'none']:_0xaa6aa1;let _0xcc1695;if(player[_0x16aa2a(0xdb)]['currentPickaxe']===0x1b||currentWorld===1.1){const _0x530ddc=player[_0x16aa2a(0x11d)][_0x16aa2a(0x123)];_0xcc1695=_0x530ddc[_0x16aa2a(0xf0)][_0x530ddc[_0x16aa2a(0xcb)]];if(player['gears'][_0x16aa2a(0x12d)])_0xcc1695*=_0x530ddc[_0x16aa2a(0xf0)][_0x530ddc['level']]*0.05+0x1;if(isNaN(_0xcc1695))_0xcc1695=0x1;}else _0xcc1695=(this.#maxLuck[player[_0x16aa2a(0xdb)]['currentPickaxe']]+(player[_0x16aa2a(0xc2)][_0x16aa2a(0xdd)]?2.5:0x0)+(player[_0x16aa2a(0xc2)][_0x16aa2a(0x11a)]?0.35:0x0)+(player['gears'][_0x16aa2a(0x115)]?0.25:0x0))*((player[_0x16aa2a(0xc2)][_0x16aa2a(0xec)]?1.1:0x1)*(player[_0x16aa2a(0xc2)]['gear5']?1.6:0x1))*(player[_0x16aa2a(0xc2)][_0x16aa2a(0x12d)]?verifiedOres[_0x16aa2a(0xd4)]()[player['stats'][_0x16aa2a(0x134)]]*0.05+0x1:0x1)*0xa;_0xcc1695*=1.5;const _0x556449=_0xcc1695;let _0x108399;if(_0xaa6aa1[0x1]>0x1){if(caveLuck>0x2faf080){console[_0x16aa2a(0xca)](_0x16aa2a(0xc6),_0x21893b['stack'],caveLuck);return;}else _0x108399=0x1;}else _0x108399=oreList[_0x1af98c][_0x16aa2a(0x11b)]*oreList[_0x1af98c][_0x16aa2a(0xf2)];(_0x21893b[_0x16aa2a(0xfa)]['includes']('mine.js')||_0x21893b[_0x16aa2a(0xfa)][_0x16aa2a(0xda)]('caves.js'))&&_0x108399<=_0x556449||debug?(this.#spawnLogs[_0x16aa2a(0x121)]({'x':_0x3d7159,'y':_0x5131ac,'block':_0x1af98c,'luck':_0x108399,'caveInfo':_0xaa6aa1,'variant':_0x356905,'avgSpeed':player[_0x16aa2a(0x11f)],'paradoxical':player[_0x16aa2a(0x108)][_0x16aa2a(0xd9)][_0x16aa2a(0xf6)],'console':this.#consoleDetected}),Object[_0x16aa2a(0xc7)](this.#spawnLogs[this.#spawnLogs['length']-0x1])):console['log'](_0x16aa2a(0xc6),_0x21893b[_0x16aa2a(0xfa)],_0x108399,_0x556449);}[_0x2fd8c3(0x128)](_0x1cba0d,_0x52cbcd){const _0x1255d1=_0x2fd8c3;for(let _0x2329be=0x0;_0x2329be<this.#spawnLogs['length'];_0x2329be++){if(this.#spawnLogs[_0x2329be]['y']===_0x1cba0d&&this.#spawnLogs[_0x2329be]['x']===_0x52cbcd){const _0x451f6b=mine[_0x1cba0d][_0x52cbcd][_0x1255d1(0xef)]===undefined?mine[_0x1cba0d][_0x52cbcd]:mine[_0x1cba0d][_0x52cbcd][_0x1255d1(0xef)];if(_0x451f6b===this.#spawnLogs[_0x2329be][_0x1255d1(0xea)]){let _0x17a509;const _0xeca349=this.#clone(this.#spawnLogs[_0x2329be]);if(_0xeca349[_0x1255d1(0xeb)][0x1]>0x1){if(oolProbabilities[_0x451f6b]!==undefined&&_0xeca349['caveInfo'][0x2]!==_0x1255d1(0x129))_0x17a509=oolProbabilities[_0x451f6b];else _0xeca349[_0x1255d1(0xeb)][0x2]===_0x1255d1(0x129)?_0x17a509=gsProbabilities[caveList[_0x1255d1(0x129)][_0x1255d1(0xc4)](_0xeca349[_0x1255d1(0xea)])]:_0x17a509=0x1/oreList[_0xeca349[_0x1255d1(0xea)]][_0x1255d1(0x11b)];_0x17a509/=_0xeca349['caveInfo'][0x1],_0x17a509*=_0xeca349[_0x1255d1(0xeb)][0x3];}else _0x17a509=oreList[_0xeca349[_0x1255d1(0xea)]][_0x1255d1(0xf2)];let _0x2e0c0d=_0xeca349[_0x1255d1(0x125)]===undefined?_0x1255d1(0xd3):_0xeca349[_0x1255d1(0x125)];_0x17a509/=multis[_0x2e0c0d-0x1],_0x2e0c0d=names[_0x2e0c0d-0x1],this.#verifiedLogs[_0x1255d1(0x132)][_0x1255d1(0x121)]({'block':_0xeca349['block'],'y':_0x1cba0d,'x':_0x52cbcd,'time':Date[_0x1255d1(0x105)]()-this.#startTime,'mined':![],'variant':_0x2e0c0d,'luck':_0xeca349[_0x1255d1(0xe6)],'caveInfo':_0xeca349[_0x1255d1(0xeb)],'rarity':_0x17a509,'avgSpeed':_0xeca349[_0x1255d1(0x11f)],'paradoxical':_0xeca349['paradoxical'],'console':_0xeca349[_0x1255d1(0xe9)]}),Object['freeze'](this.#verifiedLogs[_0x1255d1(0x132)][this.#verifiedLogs[_0x1255d1(0x132)][_0x1255d1(0x122)]-0x1]),this.#spawnLogs['splice'](_0x2329be,0x1);break;}else console[_0x1255d1(0xca)]('failed\x20to\x20verify',_0x1cba0d,_0x52cbcd);}}}[_0x2fd8c3(0xe7)](_0x46609b,_0x25ca76,_0x5d2a0d,_0x298dd1){const _0x48c26f=_0x2fd8c3;_0x46609b=_0x46609b[_0x48c26f(0xef)]===undefined?_0x46609b:_0x46609b[_0x48c26f(0xef)];let _0x2c16d2=![];for(let _0x706648=this.#verifiedLogs[_0x48c26f(0x132)]['length']-0x1;_0x706648>=0x0;_0x706648--){if(this.#verifiedLogs[_0x48c26f(0x132)][_0x706648]['y']===_0x25ca76&&this.#verifiedLogs[_0x48c26f(0x132)][_0x706648]['x']===_0x5d2a0d){if(_0x46609b===this.#verifiedLogs[_0x48c26f(0x132)][_0x706648]['block']){const _0x56ab56=this.#clone(this.#verifiedLogs[_0x48c26f(0x132)][_0x706648]);if(_0x56ab56[_0x48c26f(0xcc)]!=!![]){_0x56ab56['mined']=!![];if(_0x56ab56[_0x48c26f(0x125)]===undefined)_0x56ab56[_0x48c26f(0x125)]=_0x298dd1;if(player[_0x48c26f(0xd6)]['active'])webHook(_0x56ab56);const _0x36b1da=player[_0x48c26f(0x10d)]+_0x48c26f(0x113)+_0x56ab56[_0x48c26f(0x125)]+'\x20'+_0x56ab56['block']+'\x20with\x20a\x20rarity\x20of\x201/'+Math[_0x48c26f(0x13b)](0x1/_0x56ab56[_0x48c26f(0x12f)])[_0x48c26f(0x112)]()+'\x20'+(_0x56ab56[_0x48c26f(0xeb)][0x0]?_0x56ab56[_0x48c26f(0xeb)][0x1]>0x1?'('+caveList[_0x56ab56[_0x48c26f(0xeb)][0x2]][_0x48c26f(0x124)](-0x1)+_0x48c26f(0xe4):_0x48c26f(0xf3):'')+_0x48c26f(0x10e)+player[_0x48c26f(0xdb)][_0x48c26f(0xf5)][_0x48c26f(0x112)]()+'\x20mined.\x20X:\x20'+(_0x56ab56['x']-0x3b9aca00)[_0x48c26f(0x112)]()+_0x48c26f(0x127)+(-0x1*_0x56ab56['y'])[_0x48c26f(0x112)]()+'\x20'+(_0x56ab56[_0x48c26f(0x131)]===_0x48c26f(0xd7)?'\x20':'');_0x56ab56[_0x48c26f(0xde)]=_0x36b1da,this.#verifiedLogs[_0x48c26f(0x132)][_0x706648]=_0x56ab56,Object[_0x48c26f(0xc7)](_0x56ab56);if(player[_0x48c26f(0xc3)][_0x48c26f(0xfb)]&&_0x56ab56['rarity']>0x1/0xee6b280)this.#verifiedLogs['All'][_0x48c26f(0xf8)](_0x706648,0x1);else{if(_0x56ab56[_0x48c26f(0xeb)][0x0])this.#verifiedLogs[_0x48c26f(0xf9)][_0x48c26f(0x121)](_0x56ab56);if(_0x56ab56[_0x48c26f(0x125)]==='Normal')this.#verifiedLogs[_0x48c26f(0xd3)][_0x48c26f(0x121)](_0x56ab56);else{if(_0x56ab56[_0x48c26f(0x125)]===_0x48c26f(0x12e))this.#verifiedLogs[_0x48c26f(0x12e)][_0x48c26f(0x121)](_0x56ab56);else{if(_0x56ab56['variant']===_0x48c26f(0x116))this.#verifiedLogs[_0x48c26f(0x116)][_0x48c26f(0x121)](_0x56ab56);else{if(_0x56ab56[_0x48c26f(0x125)]==='Explosive')this.#verifiedLogs['Explosive'][_0x48c26f(0x121)](_0x56ab56);}}}}_0x2c16d2=!![];break;}}else console[_0x48c26f(0xca)]('failed\x20to\x20verify\x20find',_0x46609b,this.#verifiedLogs['All'][_0x706648][_0x48c26f(0xe6)]);}}!_0x2c16d2&&console['log'](_0x48c26f(0x136),_0x46609b,_0x25ca76,_0x5d2a0d);}[_0x2fd8c3(0x104)](){const _0x1a1f0a=_0x2fd8c3;if(document[_0x1a1f0a(0x135)](_0x1a1f0a(0x117))[_0x1a1f0a(0xfd)][_0x1a1f0a(0x13a)]!==_0x1a1f0a(0xe3)){this.#clearLogs();let _0x1b7c71=document[_0x1a1f0a(0x110)]('p');if(document['getElementById'](_0x1a1f0a(0x138))!==null)document[_0x1a1f0a(0x135)](_0x1a1f0a(0x138))[_0x1a1f0a(0xe5)]();_0x1b7c71['id']=_0x1a1f0a(0x138),document[_0x1a1f0a(0x135)](_0x1a1f0a(0xff))[_0x1a1f0a(0xce)](_0x1b7c71);let _0x2f1f6e='';const _0x5d56e8=this.#verifiedLogs[document['getElementById']('logSort')['value']];for(let _0x3a6afa=0x0;_0x3a6afa<_0x5d56e8[_0x1a1f0a(0x122)];_0x3a6afa++){_0x5d56e8[_0x3a6afa]['output']===undefined?_0x2f1f6e+=player[_0x1a1f0a(0x10d)]+'\x20has\x20NOT\x20found\x20'+_0x5d56e8[_0x3a6afa]['variant']+'\x20'+_0x5d56e8[_0x3a6afa][_0x1a1f0a(0xea)]+'\x20(Voided).\x20Verification:\x20':_0x2f1f6e+=_0x5d56e8[_0x3a6afa][_0x1a1f0a(0xde)]+_0x1a1f0a(0x119);let _0x59f027;if(_0x5d56e8[_0x3a6afa-0x1]!==undefined)_0x59f027=_0x5d56e8[_0x3a6afa][_0x1a1f0a(0x10a)]-_0x5d56e8[_0x3a6afa-0x1][_0x1a1f0a(0x10a)];else _0x59f027=_0x5d56e8[_0x3a6afa][_0x1a1f0a(0x10a)];_0x2f1f6e+=_0x1a1f0a(0xe1)+encryptLogData(_0x5d56e8[_0x3a6afa],_0x59f027)+'</span><span\x20onclick=\x22copyText(this.parentElement.children[0]);\x20copiedLog(this);\x22>Click\x20Me\x20To\x20Copy\x20Verification</span></span><br>';}if(document[_0x1a1f0a(0x135)](_0x1a1f0a(0x138))!==undefined)document['getElementById'](_0x1a1f0a(0x138))[_0x1a1f0a(0xcf)]=_0x2f1f6e;}else this.#clearLogs();}#clone(_0x1e039e){const _0x503a09=_0x2fd8c3;if(_0x1e039e==null||typeof _0x1e039e!='object')return _0x1e039e;var _0xefac62=_0x1e039e[_0x503a09(0xe2)]();for(var _0x7e585a in _0x1e039e)_0xefac62[_0x7e585a]=this.#clone(_0x1e039e[_0x7e585a]);return _0xefac62;}#clearLogs(){const _0x4413e9=_0x2fd8c3;clearInterval(this.#logsTimer),this.#logsTimer=null;if(document[_0x4413e9(0x135)]('generatedLogs')!==null)document[_0x4413e9(0x135)](_0x4413e9(0x138))[_0x4413e9(0xe5)]();}['getLuckBoosts'](){return this.#maxLuck;}['getCurrentLuck'](){const _0x31a26b=_0x2fd8c3;if(player[_0x31a26b(0xdb)][_0x31a26b(0x134)]===0x1b||currentWorld===1.1){const _0x3e2ce4=player['upgrades'][_0x31a26b(0x123)];let _0x1b89d2=_0x3e2ce4[_0x31a26b(0xf0)][_0x3e2ce4['level']];if(player['gears']['gear20'])_0x1b89d2*=_0x3e2ce4['levelLuck'][_0x3e2ce4['level']]*0.05+0x1;if(isNaN(_0x1b89d2))return 0x1;else return _0x1b89d2;}if(player[_0x31a26b(0xdb)][_0x31a26b(0x134)]===0x1b)player[_0x31a26b(0xdb)][_0x31a26b(0x134)]=0x0;let _0x1db25d=this.#maxLuck[player[_0x31a26b(0xdb)]['currentPickaxe']];_0x1db25d+=(player[_0x31a26b(0xc2)][_0x31a26b(0xdd)]?2.5:0x0)+(player[_0x31a26b(0xc2)][_0x31a26b(0x11a)]?0.35:0x0)+(player['gears'][_0x31a26b(0x115)]?0.25:0x0);if(currentWorld<0x2)_0x1db25d*=(player[_0x31a26b(0xc2)]['gear1']?1.1:0x1)*(player[_0x31a26b(0xc2)]['gear5']?1.6:0x1);_0x1db25d*=player['gears']['gear20']?verifiedOres[_0x31a26b(0xd4)]()[player[_0x31a26b(0xdb)][_0x31a26b(0x134)]]*0.05+0x1:0x1;if(isNaN(_0x1db25d))return 0x1;else return _0x1db25d;}['getStartTime'](){return this.#startTime;}['isRightPickaxe'](){return this.#isRightPickaxe;}[_0x2fd8c3(0xf4)](){const _0x20f46e=_0x2fd8c3;if(currentWorld===0x1)this.#isRightPickaxe=!![];else{if(currentWorld===1.1&&player[_0x20f46e(0xdb)][_0x20f46e(0x134)]===0x1b)this.#isRightPickaxe=!![];else{if(currentWorld===0x2&&player[_0x20f46e(0xdb)][_0x20f46e(0x134)]>0xc&&player['stats']['currentPickaxe']<0x1b)this.#isRightPickaxe=!![];else this.#isRightPickaxe=![];}}}[_0x2fd8c3(0x139)](){const _0x5afb08=_0x2fd8c3;if(currentWorld===0x1&&player[_0x5afb08(0xdb)][_0x5afb08(0x134)]>0x4&&player[_0x5afb08(0xdb)][_0x5afb08(0x134)]!==0x1c)this.#canGenCaves=!![];else{if(currentWorld===0x2&&player[_0x5afb08(0xc2)][_0x5afb08(0xd8)])this.#canGenCaves=!![];else{if(currentWorld===1.1)this.#canGenCaves=!![];else this.#canGenCaves=![];}}}[_0x2fd8c3(0xf1)](){return this.#canGenCaves;}['onLoad'](){const _0x451d4d=_0x2fd8c3;for(let _0x273d01=0x0;_0x273d01<0x6;_0x273d01++)this[_0x451d4d(0x103)]();this.#consoleTimes=[],this.#consoleCheckTimer=setInterval(()=>{this.#checkForConsole();},0x5);}#checkForConsole(){const _0x1ac0a5=_0x2fd8c3;if(!this.#consoleDetected){const _0x230ee1=performance['now']();console[_0x1ac0a5(0xca)](_0x1ac0a5(0x11e));const _0x310460=performance[_0x1ac0a5(0x105)]()-_0x230ee1;console[_0x1ac0a5(0x106)](),this.#consoleTimes[_0x1ac0a5(0x121)](_0x310460);if(this.#consoleTimes[_0x1ac0a5(0x122)]>0x96){!this.#timeDecreased&&(this.#timeDecreased=!![],clearInterval(this.#consoleCheckTimer),setInterval(()=>{this.#checkForConsole();},0x14));let _0x5d89e5;if(this.#lastAverage===undefined){let _0x41d384=0x0;for(let _0x181c0b=0x0;_0x181c0b<this.#consoleTimes['length'];_0x181c0b++)_0x41d384+=this.#consoleTimes[_0x181c0b];_0x5d89e5=_0x41d384/this.#consoleTimes[_0x1ac0a5(0x122)];}else _0x5d89e5=this.#lastAverage*this.#consoleTimes[_0x1ac0a5(0x122)],_0x5d89e5-=this.#lastNumber,_0x5d89e5+=_0x310460,_0x5d89e5/=this.#consoleTimes[_0x1ac0a5(0x122)];if(_0x5d89e5>0.07+this.#benchmarkAvg*0.1){this.#consoleDetected=!![];if(debug)window[_0x1ac0a5(0xdc)]('GET\x20MEOWED');const _0x5ccec2=new Date();console[_0x1ac0a5(0xca)](_0x5ccec2[_0x1ac0a5(0xd1)]()+':'+_0x5ccec2[_0x1ac0a5(0x111)]()+':'+_0x5ccec2[_0x1ac0a5(0xe0)]()+':'+_0x5ccec2[_0x1ac0a5(0xcd)]());}this.#lastNumber=this.#consoleTimes[0x0],this.#lastAverage=_0x5d89e5,this.#consoleTimes[_0x1ac0a5(0xf8)](0x0,0x1);}}}#benchmarkTest(){const _0x443c04=_0x2fd8c3,_0x586729=performance[_0x443c04(0x105)]();JSON[_0x443c04(0x11c)](JSON[_0x443c04(0xc1)](player));const _0x4d5ddd=performance[_0x443c04(0x105)]()-_0x586729;return _0x4d5ddd;}[_0x2fd8c3(0x103)](){const _0x5f22a0=_0x2fd8c3;if(this.#consoleDetected)return;const _0x50010d=[];for(let _0x55db24=0x0;_0x55db24<0x5;_0x55db24++)_0x50010d['push'](this.#benchmarkTest());let _0x11a786=0x0;for(let _0x5a9b41=0x0;_0x5a9b41<_0x50010d[_0x5f22a0(0x122)];_0x5a9b41++)_0x11a786+=_0x50010d[_0x5a9b41];this.#benchmarkTests[_0x5f22a0(0x121)](_0x11a786);if(this.#benchmarkTests['length']>0x5){if(this.#benchmarkAvg===undefined){let _0x30d058=0x0;for(let _0x25999f=0x0;_0x25999f<this.#benchmarkTests[_0x5f22a0(0x122)]-0x1;_0x25999f++)_0x30d058+=this.#benchmarkTests[_0x25999f];this.#benchmarkAvg=_0x30d058/this.#benchmarkTests[_0x5f22a0(0x122)];}else{let _0x18729b=this.#benchmarkAvg*this.#benchmarkTests[_0x5f22a0(0x122)];_0x18729b-=this.#benchmarkTests[0x0],_0x18729b+=this.#benchmarkTests[this.#benchmarkTests[_0x5f22a0(0x122)]-0x1],_0x18729b/=this.#benchmarkTests[_0x5f22a0(0x122)],this.#benchmarkAvg=_0x18729b;}this.#benchmarkTests['splice'](0x0,0x1);}}}function encryptLogData(_0x3bd1fb,_0x5aadb1){const _0x27ee61=_0x2fd8c3,_0x567c00=Math[_0x27ee61(0x126)](_0x3bd1fb[_0x27ee61(0x10a)]);let _0x2f3c94=_0x567c00+',\x20';return _0x2f3c94+=Math[_0x27ee61(0xc9)](Math['log'](_0x3bd1fb[_0x27ee61(0xe6)]),_0x567c00),_0x2f3c94+=',\x20',_0x2f3c94+=Math[_0x27ee61(0xc9)](Math[_0x27ee61(0x100)](0x1/_0x3bd1fb[_0x27ee61(0x12f)]),1.225),_0x2f3c94+=',\x20',_0x2f3c94+=Math[_0x27ee61(0xc9)](_0x567c00,0x2),_0x2f3c94+=',\x20',_0x2f3c94+=Math[_0x27ee61(0x10f)](_0x5aadb1),_0x2f3c94+=',\x20',_0x2f3c94+=Math[_0x27ee61(0xf7)](_0x3bd1fb['avgSpeed']*1.449),_0x2f3c94+=',\x20',_0x2f3c94+=_0x3bd1fb[_0x27ee61(0xe9)],_0x2f3c94+=',\x20',_0x3bd1fb[_0x27ee61(0x131)]??=_0x27ee61(0xe3),_0x2f3c94+=_0x3bd1fb[_0x27ee61(0x131)],toBinary(_0x2f3c94);}function decryptLogData(_0xfb43d0,_0x2b7c5d){const _0x2b070b=_0x2fd8c3;if(_0x2b7c5d==='GJNT38GREJWEP'){_0xfb43d0=fromBinary(_0xfb43d0);let _0x334623=Number(_0xfb43d0[_0x2b070b(0xfe)](0x0,_0xfb43d0[_0x2b070b(0xc4)](',\x20')));_0xfb43d0=_0xfb43d0['substring'](_0xfb43d0[_0x2b070b(0xc4)](',')+0x2);let _0x2e7b9e=Number(_0xfb43d0[_0x2b070b(0xfe)](0x0,_0xfb43d0[_0x2b070b(0xc4)](',\x20')));_0x2e7b9e=Math[_0x2b070b(0x13b)](Math['pow'](Math['E'],Math['pow'](_0x2e7b9e,0x1/_0x334623))),_0xfb43d0=_0xfb43d0['substring'](_0xfb43d0[_0x2b070b(0xc4)](',')+0x2);let _0x33b5d6=Number(_0xfb43d0[_0x2b070b(0xfe)](0x0,_0xfb43d0['indexOf'](',\x20')));_0x33b5d6=Math[_0x2b070b(0xc9)](_0x33b5d6,0x1/1.225),_0x33b5d6=Math[_0x2b070b(0x13b)](Math[_0x2b070b(0xc9)](_0x33b5d6,0x2)),_0xfb43d0=_0xfb43d0[_0x2b070b(0xfe)](_0xfb43d0[_0x2b070b(0xc4)](',')+0x2);let _0x423999=Number(_0xfb43d0[_0x2b070b(0xfe)](0x0,_0xfb43d0[_0x2b070b(0xc4)](',\x20')));_0x423999=Math[_0x2b070b(0x100)](_0x423999),_0xfb43d0=_0xfb43d0[_0x2b070b(0xfe)](_0xfb43d0['indexOf'](',')+0x2);let _0x13a084=Number(_0xfb43d0[_0x2b070b(0xfe)](0x0,_0xfb43d0[_0x2b070b(0xc4)](',\x20')));_0x13a084=Math['pow'](0x2,_0x13a084),_0xfb43d0=_0xfb43d0[_0x2b070b(0xfe)](_0xfb43d0[_0x2b070b(0xc4)](',')+0x2);let _0x47e792=Number(_0xfb43d0[_0x2b070b(0xfe)](0x0,_0xfb43d0[_0x2b070b(0xc4)](',\x20')));_0x47e792=Math[_0x2b070b(0xf7)](_0x47e792/1.449),_0xfb43d0=_0xfb43d0[_0x2b070b(0xfe)](_0xfb43d0[_0x2b070b(0xc4)](',')+0x2);let _0x2282ad=_0xfb43d0[_0x2b070b(0xfe)](0x0,_0xfb43d0[_0x2b070b(0xc4)](',\x20'));_0xfb43d0=_0xfb43d0['substring'](_0xfb43d0['indexOf'](',')+0x2);let _0xe27b99=_0xfb43d0[_0x2b070b(0xfe)](0x0);return _0x334623=Math[_0x2b070b(0xc9)](0xa,_0x334623),_0x2b070b(0x12b)+_0x423999+_0x2b070b(0x120)+_0x2e7b9e+',\x20RNG:\x20'+_0x33b5d6+_0x2b070b(0x102)+_0x47e792+_0x2b070b(0x12c)+Math[_0x2b070b(0xf7)](_0x334623)+_0x2b070b(0xfc)+new Date(verifiedOres[_0x2b070b(0x130)]()+_0x13a084)[_0x2b070b(0x10c)]()+_0x2b070b(0xc8)+(_0x2282ad===_0x2b070b(0x107)?_0x2b070b(0x101):'Unlikely')+',\x20Paradoxical\x20Item:\x20'+_0xe27b99;}}function _0x37b4(){const _0x561f03=['variant','log10',',\x20Y:\x20','verifyLog','abysstoneCave','1044008IszaQC','Key:\x20',',\x20Time\x20Since\x20Last\x20Log:\x20','gear20','Electrified','rarity','getStartTime','paradoxical','All','innerWidth','currentPickaxe','getElementById','log\x20not\x20found,\x20failed\x20to\x20verify\x20if\x20found,\x20block\x20mined','52095jDdxbt','generatedLogs','checkCaves','display','round','stringify','gears','settings','indexOf','created','failed\x20to\x20create,\x20','freeze',',\x20Using\x20Console:\x20','pow','log','level','mined','getSeconds','appendChild','innerHTML','createLog','getDate','198joqEdi','Normal','getLuckBoosts','705906PmtMZL','webHook','pickaxe26','gear14','fakeEquipped','includes','stats','alert','gear18','output','1724704CPXEoy','getMinutes','<span><span\x20style=\x22font-size:0vw;\x22>','constructor','none','\x20Cave)','remove','luck','verifyFind','2BekIgq','console','block','caveInfo','gear1','32317QForAW','30sztjiq','ore','levelLuck','canGenerateCaves','decimalRarity','(Layer\x20Cave)','checkPickaxe','blocksMined','item','floor','splice','Cave','stack','highRarityLogs',',\x20Generated\x20At:\x20','style','substring','logHolder','sqrt','Likely',',\x20AVG\x20Speed:\x20','getBenchmark','showLogs','now','clear','true','powerupVariables','2133522ZGBlSJ','time','innerHeight','toUTCString','name','\x20at\x20','log2','createElement','getHours','toLocaleString','\x20has\x20found\x20','311688tHOfus','gear10','Radioactive','menuSelectionContainer','reload','.\x20Verification:\x20','gear12','numRarity','parse','upgrades','meowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeow','avgSpeed',',\x20Luck:\x20','push','length','pickaxe27','slice'];_0x37b4=function(){return _0x561f03;};return _0x37b4();}
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
