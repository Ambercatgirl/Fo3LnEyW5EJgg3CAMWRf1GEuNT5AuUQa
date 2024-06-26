/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
const logCreated = {}
class secureLogs {
    #spawnLogs;
    #verifiedLogs;
    #logsTimer;
    #startTime = Date.now();
    #maxLuck = [1, 1.2, 1.5, 2.15, 3, 5, 10, 4, 5.5, 20, 17.5, 30, 75, 1, 1.05, 1.075, 1.3, 1, 1.5, 2, 3, 1.5, 4, 8.25, 12.5, 50, 175, 1, 2.1];
    #isRightPickaxe;
    #canGenCaves;
    #consoleDetected = 0;
    #consoleCheckTimer;
    #myNum = 0.6;
    #highestDifference = 0;
    #highestPerformance = 0;
    testTotals = [];
    //0.64
    //0.592
    constructor() {
        if (logCreated["created"]) location.reload();
        this.#spawnLogs = [];
        this.#verifiedLogs = {
            "All" : [],
            "Cave" : [],
            "Normal" : [],
            "Electrified" : [],
            "Radioactive" : [],
            "Explosive" : [],
        };
        this.#logsTimer = null;
        this.#isRightPickaxe = true;
        this.#canGenCaves = false;
        this.#consoleDetected = 0;
        this.#onLoad()
    }
    createLog(r, c, intended, obj, fromCave) {
        const ore = intended.ore === undefined ? intended : intended.ore;
        const variant = intended.variant === undefined ? undefined : intended.variant;
        fromCave = fromCave === undefined ? [false, 1, "none"] : fromCave;
        let luckModifier;
        if (player.stats.currentPickaxe === 27) luckModifier = player.upgrades["pickaxe27"].levelLuck[player.upgrades["pickaxe27"].level];
        if (currentWorld === 1.1) {
            const pickaxe = player.upgrades["pickaxe27"];
            luckModifier += getRewardTypes("luck", "add");
            if (player.gears["gear20"]) luckModifier *= ((pickaxe.levelLuck[pickaxe.level] * 0.05) + 1);
            luckModifier *= getRewardTypes("luck", "multiply")
            if (isNaN(luckModifier)) luckModifier = 1;
        } else {
            luckModifier = this.#maxLuck[player.stats.currentPickaxe];
        }
        luckModifier += (player.gears["gear18"] ? 2.5 : 0) + (player.gears["gear12"] ? 0.35 : 0) + (player.gears["gear10"] ? 0.25 : 0) + (getRewardTypes("luck", "add"));
        luckModifier *= (player.gears["gear1"] ? 1.1 : 1) * (getRewardTypes("luck", "multiply")) * (player.gears["gear5"] ? 1.6 : 1);
        if (player.gears["gear20"]) {
            if (player.stats.currentPickaxe === 27) luckModifier *= ((player.upgrades["pickaxe27"].levelLuck[player.upgrades["pickaxe27"].level] * 0.05) + 1);
            else luckModifier *= (verifiedOres.getLuckBoosts()[player.stats.currentPickaxe] * 0.05) + 1;
        }
        luckModifier *= 1.5;
        luckModifier *= 1.25;
        luckModifier *= 10;
        const maxLuck = luckModifier;
        let luck;
        if (fromCave[1] > 1) {
            if (caveLuck > 50000000) {
                console.log("failed to create, ", obj.stack, caveLuck);
                return;
            } else {
                luck = 1;
            }
        } else {
            luck = oreList[ore]["numRarity"] * oreList[ore]["decimalRarity"];
        }
        if (((obj.stack.includes("mine.js") || obj.stack.includes("caves.js")) && luck <= maxLuck) || debug) {
            this.#spawnLogs.push({x: c, y: r, block: ore, luck: luck, caveInfo: fromCave, variant: variant, avgSpeed: player.avgSpeed, paradoxical: player.powerupVariables.fakeEquipped.item, console: this.#consoleDetected, genAt: Date.now()})
            Object.freeze(this.#spawnLogs[this.#spawnLogs.length - 1])
        } else {
            console.log("failed to create, ", obj.stack, luck, maxLuck);
        }
    }
    verifyLog(r, c) {
        for (let i = 0; i < this.#spawnLogs.length; i++) {
            if (this.#spawnLogs[i].y === r && this.#spawnLogs[i].x === c) {
                const block = mine[r][c].ore === undefined ? mine[r][c] : mine[r][c].ore;
                if (block === this.#spawnLogs[i].block) {
                    let rng;
                    const log = this.#clone(this.#spawnLogs[i]);
                    if (log.caveInfo[1] > 1) {
                        if (oolProbabilities[block] !== undefined && log.caveInfo[2] !== "abysstoneCave") {
                            rng = oolProbabilities[block];
                        } else if (log.caveInfo[2] === "abysstoneCave") {
                            rng = gsProbabilities[caveList["abysstoneCave"].indexOf(log.block)];
                        } else {
                            rng = 1/oreList[log.block]["numRarity"];
                        }
                        rng /= log.caveInfo[1];
                        rng *= log.caveInfo[3];
                    } else {
                        rng = oreList[log.block]["decimalRarity"];
                    }
                    let variant = log.variant === undefined ? "Normal" : log.variant;
                    rng /= multis[variant - 1];
                    variant = names[variant - 1];
                    this.#verifiedLogs["All"].push({block: log.block, y: r, x: c, time: Date.now() - this.#startTime, mined: false, variant: variant, luck: log.luck, caveInfo: log.caveInfo, rarity: rng, avgSpeed: log.avgSpeed, paradoxical: log.paradoxical, console: log.console, genAt: log.genAt})
                    Object.freeze(this.#verifiedLogs["All"][this.#verifiedLogs["All"].length - 1])
                    this.#spawnLogs.splice(i, 1);
                    break;
                } else {
                    console.log('failed to verify', r, c);
                }
            }
        }
    }
    verifyFind(block, r, c, variant) {
        block = block.ore === undefined ? block : block.ore;
        let verified = false;
        for (let i = this.#verifiedLogs["All"].length - 1; i >= 0; i--) {
            if (this.#verifiedLogs["All"][i].y === r && this.#verifiedLogs["All"][i].x === c) {
                if (block === this.#verifiedLogs["All"][i].block) {
                    const log = this.#clone(this.#verifiedLogs["All"][i]);
                    if (log.mined != true) {
                        log.mined = true;
                        if (log.variant === undefined) log.variant = variant;
                        if (player.webHook.active) webHook(log);
                        const webhookString = `${player.name} has found ${log.variant} ${log.block} with a rarity of 1/${Math.round(1/log.rarity).toLocaleString()} ${log.caveInfo[0] ? (log.caveInfo[1] > 1 ? "(" + caveList[log.caveInfo[2]].slice(-1) + " Cave)" : "(Layer Cave)") : ""} at ${player.stats.blocksMined.toLocaleString()} mined. X: ${(log.x - 1000000000).toLocaleString()}, Y: ${(-1 * log.y).toLocaleString()} ${(log.paradoxical === "pickaxe26" ? " " : "")}`;           
                        log.output = webhookString;
                        this.#verifiedLogs["All"][i] = log;
                        Object.freeze(log);
                        if (player.settings.highRarityLogs && log.rarity > 1/250000000) {
                            this.#verifiedLogs["All"].splice(i, 1);
                        } else {
                            if (log.caveInfo[0]) this.#verifiedLogs["Cave"].push(log);
                            if (log.variant === "Normal") this.#verifiedLogs["Normal"].push(log);
                            else if (log.variant === "Electrified") this.#verifiedLogs["Electrified"].push(log);
                            else if (log.variant === "Radioactive") this.#verifiedLogs["Radioactive"].push(log);
                            else if (log.variant === "Explosive") this.#verifiedLogs["Explosive"].push(log);
                        }
                        verified = true;
                        break;
                    }
                } else {
                    console.log("failed to verify find", block, this.#verifiedLogs["All"][i].luck);
                }
            }
        }
        if (!verified) {
            console.log("log not found, failed to verify if found, block mined", block, r, c)
        }
    }
    showLogs() {
        if (document.getElementById("menuSelectionContainer").style.display !== "none") {
                this.#clearLogs()
                let element = document.createElement("p");
                if (document.getElementById("generatedLogs") !== null)
                    document.getElementById("generatedLogs").remove();
                element.id = "generatedLogs";
                document.getElementById("logHolder").appendChild(element);
                let output = "";
                const list = this.#verifiedLogs[document.getElementById("logSort").value];
                for (let i = 0; i < list.length; i++) {
                    if (list[i].output === undefined) {
                        output += `<span  style="color:${variantInformation[list[i].variant].color};">${player.name} has NOT found ${list[i].variant} ${list[i].block} (Voided).</span> Verification: `
                    } else {
                        output += `<span  style="color:${variantInformation[list[i].variant].color};">${list[i].output}.</span> Verification: `;
                    }
                    let times;
                    if (list[i - 1] !== undefined) times = list[i].time - list[i - 1].time;
                    else times = list[i].time;
                    output += `<span><span style="font-size:0vw;">${encryptLogData(list[i], times)}</span><span onclick="copyText(this.parentElement.children[0]); copiedLog(this);">Click Me To Copy Verification</span></span><br>`
                }
                if (document.getElementById("generatedLogs") !== undefined) document.getElementById("generatedLogs").innerHTML = output;
        } else {
            this.#clearLogs();
        }
    }
    #clone(obj){
        if(obj == null || typeof(obj) != 'object')
           return obj;
     
        var temp = obj.constructor();
     
        for(var key in obj)
            temp[key] = this.#clone(obj[key]);
        return temp;
    }
    #clearLogs() {
        clearInterval(this.#logsTimer);
        this.#logsTimer = null;
        if (document.getElementById("generatedLogs") !== null)
            document.getElementById("generatedLogs").remove();
    }
    getLuckBoosts() {
        return this.#maxLuck;
    }
    getCurrentLuck() {
        let luck; 
        if (player.stats.currentPickaxe === 27) luck = player.upgrades["pickaxe27"].levelLuck[player.upgrades["pickaxe27"].level];
        if (currentWorld === 1.1) {
            const pickaxe = player.upgrades["pickaxe27"];
            let luck = pickaxe.levelLuck[pickaxe.level];
            luck += getRewardTypes("luck", "add");
            if (player.gears["gear20"]) luck *= ((pickaxe.levelLuck[pickaxe.level] * 0.05) + 1);
            luck *= 1.25;
            luck *= getRewardTypes("luck", "multiply")
            if (isNaN(luck)) return 1;
            else return luck;
        } else {
            if (player.stats.currentPickaxe === 27 && !player.trophyProgress["subrealmOneCompletion"].trophyOwned) {player.stats.currentPickaxe = 0; luck = 1;}
            else luck ??= this.#maxLuck[player.stats.currentPickaxe];
        }
        luck += (player.gears["gear18"] ? 2.5 : 0) + (player.gears["gear12"] ? 0.35 : 0) + (player.gears["gear10"] ? 0.25 : 0);
        luck += getRewardTypes("luck", "add");
        if (currentWorld < 2)
            luck *= (player.gears["gear1"] ? 1.1 : 1) * (player.gears["gear5"] ? 1.6 : 1);
        if (player.gears["gear20"]) {
            if (player.stats.currentPickaxe === 27) luck *= ((player.upgrades["pickaxe27"].levelLuck[player.upgrades["pickaxe27"].level] * 0.05) + 1);
            else luck *= (verifiedOres.getLuckBoosts()[player.stats.currentPickaxe] * 0.05) + 1;
        }
        luck *= getRewardTypes("luck", "multiply");
        if (isNaN(luck)) return 1;
        else return luck;
    }
    getStartTime() {
        return this.#startTime;
    }
    isRightPickaxe() {
        return this.#isRightPickaxe;
    }
    checkPickaxe() {
        if (currentWorld === 1) this.#isRightPickaxe = true;
        else if (currentWorld === 1.1 && player.stats.currentPickaxe === 27) this.#isRightPickaxe = true;
        else if (currentWorld === 2 && player.stats.currentPickaxe > 12 && player.stats.currentPickaxe < 27) this.#isRightPickaxe = true;
        else this.#isRightPickaxe = false;
    }
    checkCaves() {
        if (currentWorld === 1 && player.stats.currentPickaxe > 4 && player.stats.currentPickaxe !== 28) this.#canGenCaves = true;
        else if (currentWorld === 2 && player.gears["gear14"]) this.#canGenCaves = true;
        else if (currentWorld === 1.1) this.#canGenCaves = true;
        else this.#canGenCaves = false;
    }
    canGenerateCaves() {
        return this.#canGenCaves;
    }
    #onLoad() {
        this.#consoleCheckTimer = setInterval(() => {
            this.#checkForConsole()
        }, 750);
    }
    #checkForConsole() {
        const thisModifier = this.#getBenchmark();
        let lowEnd = 1.2 * thisModifier;
        let highEnd = 10 * thisModifier;
        if (thisModifier < 0.1) {lowEnd = 1.2; highEnd = 10;}
        const times = [];
        for (let i = 0; i < 500; i++) {
            const timeBefore = performance.now();
            console.log();
            console.clear();
            const timeAfter = performance.now() - timeBefore;
            times.push(timeAfter);
        }
        let total = 0;
        for (let i = 0; i < times.length; i++) total += times[i];
        const distToLow = lowEnd - total;
        const distToHigh = highEnd - total;
        if ((total > highEnd) && total > lowEnd * 10) {
            this.#consoleDetected++;
            if (debug) {
                if (this.#consoleDetected < 2) window.alert(`${thisModifier}, ${roundNumberToMillionth(total)}, ${roundNumberToMillionth(lowEnd)}, ${roundNumberToMillionth(highEnd)}`);
                this.getConsoleStats();
            }
        }
        if (debug) {
            const output = `${roundNumberToMillionth(thisModifier)}x performance, ${roundNumberToMillionth(total)} time, ${roundNumberToMillionth(lowEnd)} low, ${roundNumberToMillionth(distToLow)} dist to low, ${roundNumberToMillionth(highEnd)} high, ${roundNumberToMillionth(distToHigh)} dist to high.`;
            get("secretDebugStats").textContent = output;
        }
        if (total > this.#highestPerformance) this.#highestPerformance = total;
    }
    #getBaseNumber() {
        const times = [];
        for (let i = 0; i < 800; i++) {
            const timeBefore = performance.now();
            console.dir()
            const timeAfter = performance.now() - timeBefore;
            times.push(timeAfter);
        }
        console.clear();
        let total = 0;
        for (let i = 0; i < times.length; i++) total += times[i];
        return total;
    }
    #getBenchmark() {
        const times = [];
        for (let i = 0; i < 5; i++) {
            const timeBefore = performance.now();
            this.#getBaseNumber();
            const timeAfter = performance.now() - timeBefore;
            times.push(timeAfter);
        }
        let total = 0;
        for (let i = 0; i < times.length; i++) total += times[i];
        total /= times.length;
        let num = total/this.#myNum;
        if (num < 0) num = 0.1;
        if (num > this.#highestDifference) this.#highestDifference = num;
        return num;
    }
    getConsoleStats() {
        if (debug) {
            clearInterval(this.#consoleCheckTimer);
            console.log(this.#consoleDetected, this.#highestPerformance);
        }
    }
    getHighestPerformance() {
        window.alert(`${this.#highestPerformance}, ${this.#highestDifference}`);
    }
}
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
    output += (log.paradoxical === undefined ? "none" : log.paradoxical);
    output += ", ";
    output += new Date(log.genAt);
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
      let paramEight = toDecrypt.substring(0, toDecrypt.indexOf(", "));
      toDecrypt = toDecrypt.substring(toDecrypt.indexOf(',') + 2);
      let paramNine = toDecrypt.substring(0);
      paramOne = Math.pow(10, paramOne);
      const isMobile = screen.height < 750;
      return "Key: " + paramFour + ", Luck: " + paramTwo + ", RNG: " + paramThree + ", AVG Speed: " + paramSix + ", Time Since Last Log: " + Math.floor(paramOne) + ", Generated At: " + new Date(paramNine).toUTCString() + ", Console Flags: " + `${paramSeven} ${isMobile ? "(Mobile)" : ""}` + ", Paradoxical Item: " + paramEight;
    }
}
function roundNumberToMillionth(num) {
    return Math.round(num * 1000000) / 1000000;
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
