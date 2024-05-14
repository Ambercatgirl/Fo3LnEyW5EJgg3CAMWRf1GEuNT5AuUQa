/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/

async function rollAbilities() {
    let m = 1;
    if (currentWorld < 2 && player.gears["gear8"]) m = 1.2;
    if (player.gears["gear23"]) m += 0.15;
    if (!resetting && ((currentWorld < 2 && player.stats.currentPickaxe >= 5)||(currentWorld === 2 && player.gears["gear14"]))) {
        if (Math.random() < 1/500 && player.settings.cavesEnabled) {
            player.stats.cavesGenerated++;
            generateCave();
            displayArea();
        }
    }
    switch (player.stats.currentPickaxe) {
        case 1:
            if (Math.random() < (1/30 * m)) {
                pickaxeAbility1(curX, curY);
                
            }
            break;
        case 2:
            if (Math.random() <= (1/35 * m)) {
                pickaxeAbility2(curX, curY, 3, 1.35);
                
            }
            break;
        case 3:
            if (Math.random() <= (1/30 * m)) {
                pickaxeAbility3(curX, curY);
                
            }
            break;
        case 4:
            if (Math.random() <= (1/25 * m)) {
                pickaxeAbility4(curX, curY);
                
            }
            break;
        case 5:
            if (Math.random() <= (1/17 * m)) {
                pickaxeAbility5(curX, curY);
                
            }
            break;
        case 6:
            if (Math.random() <= (1/60 * m)) {
                pickaxeAbility6(curX, curY);
                
            } else if (Math.random() <= (1/40 * m)) {
                pickaxeAbility7(curX, curY);
                
            }
            
            break;
        case 7:
            if (Math.random() <= (1/50 * m)) {
                pickaxeAbility8(curX, curY, 0);
                
            }
            break;
        case 8:
            if (Math.random() <= (1/50 * m)) {
                pickaxeAbility9(curX, curY, 0);
                
            }
            break;
        case 9:
            if (Math.random() <= (1/30 * m)) {
                pickaxeAbility10(curX, curY);
                
            }
            break;
        case 10:
            if (Math.random() <= (1/50 * m)) {
                pickaxeAbility11(curX, curY);
                
            }
            break;
        case 11:
            if (Math.random() <= (1/100 * m)) {
                pickaxeAbility12(curX, curY);
                
            }
            break;
        case 12:
            if (Math.random() <= (1/150 * m)) {
                pickaxeAbility13(curX, curY);
                
            }
            break;
        case 14:
            if (Math.random() <= 1/45 * m) {
                pickaxeAbility14(curX, curY);
                
            }
            break;
        case 15:
            if (Math.random() <= 1/75 * m) {
                pickaxeAbility15(curX, curY);
                
            }
            break;
        case 16:
            if (Math.random() <= 1/100 * m) {
                pickaxeAbility16(curX, curY);
                
            }
            break;
        case 17:
            if (Math.random() <= 1/150 * m) {
                pickaxeAbility17(curX, curY);
                
            }
            break;
        case 18:
            if (Math.random() <= 1/150 * m) {
                pickaxeAbility18(curX, curY);
                
            }
            break;
        case 19:
            if (Math.random() <= 1/50 * m) {
                pickaxeAbility19(curX, curY, 0);
                
            }
            break;
        case 20:
            if (Math.random() <= 1/75 * m) {
                pickaxeAbility20(curX, curY);
                
            }
            break;
        case 21:
            if (Math.random() <= 1/75 * m) {
                pickaxeAbility21(curX, curY);
                
            }
            break;
        case 22:
            if (Math.random() <= 1/120 * m) {
                pickaxeAbility22(curX, curY);
                
            }
            break;
         case 23:
            if (Math.random() <= 1/75 * m) {
                pickaxeAbility23(curX, curY);
                
            }
            break;
        case 24:
            if (Math.random() <= 1/175 * m) {
                pickaxeAbility24(curX, curY);
                
            }
            break;
        case 25:
            if (Math.random() <= 1/300 * m) {
                pickaxeAbility25(curX, curY);
                
            }
            break;
        case 26:
            if (Math.random() < 1/150 * m) {
                pickaxeAbility26(curX, curY);
            }
            break;
        case 27:
        if (Math.random() < 1/1000 * m) {
            pickaxeAbility27(curX, curY);
        }
        break;
    }
}

//generates a large cube around the player
function powerup1(x, y) {
    if (Date.now() >= player.powerupCooldowns["powerup1"].cooldown) {
        for (let r = y - 50; r < y + 50; r++) {
            for (let c = x - 50; c < x + 50; c++) {
                pickaxeAbilityMineBlock(c, r);
            }
        }
        displayArea();
        player.powerupCooldowns["powerup1"].cooldown = Date.now() + 900000;
        document.getElementById("powerup1").style.backgroundColor = "#FF3D3D";
    }
    
}

//creates 4 caves around the player
function powerup2(x, y) {
    if (Date.now() >= player.powerupCooldowns["powerup2"].cooldown) {
        generateCave(x + 100, y);
        generateCave(x - 100, y);
        generateCave(x, y + 100);
        generateCave(x, y - 100);
        generateCave(x + 100, y + 100);
        generateCave(x - 100, y + 100);
        generateCave(x - 100, y - 100);
        generateCave(x + 100, y - 100);
        player.stats.cavesGenerated += 8;
        displayArea();
        player.powerupCooldowns["powerup2"].cooldown = Date.now() + 300000;
        document.getElementById("powerup2").style.backgroundColor = "#FF3D3D";
    }
    
}

//make a random layer ore more common for a short period
function powerup3() {
    if (Date.now() >= player.powerupCooldowns["powerup3"].cooldown ) {
        const layer = layerDictionary[currentLayer].layer;
        let chosenOre = layer[Math.round(Math.random() * (layer.length - 1))];
        while (oreInformation.isCommon(oreList[chosenOre]["oreTier"]) || oreList[chosenOre]["oreTier"] === "Antique") chosenOre = layer[Math.round(Math.random() * (layer.length - 1))];
        player.powerupVariables.currentChosenOre.ore = chosenOre, 
        player.powerupVariables.currentChosenOre.removeAt = Date.now() + 600000;
        updateAllLayers();
        player.powerupCooldowns["powerup3"].cooldown = Date.now() + 3000000;
        document.getElementById("powerup3").style.backgroundColor = "#FF3D3D";
    }
}
function powerup4() {
    if (Date.now() >= player.powerupCooldowns["powerup4"].cooldown) {
        player.powerupVariables.commonsAffected.state = true;
        player.powerupVariables.commonsAffected.removeAt = Date.now() + 300000;
        player.powerupCooldowns["powerup4"].cooldown = Date.now() + 1200000;
        updateAllLayers()
        document.getElementById("powerup4").style.backgroundColor = "#FF3D3D";
    }
}
function powerup5() {
    if (Date.now() >= player.powerupCooldowns["powerup5"].cooldown) {
        let toChooseFrom = Object.keys(player.pickaxes).concat(Object.keys(player.gears));
        for (let i = toChooseFrom.length - 1; i >= 0; i--) {
            if (player.pickaxes[toChooseFrom[i]] || player.gears[toChooseFrom[i]] || (currentWorld === 2 && (toChooseFrom[i].includes("pickaxe")) && Number(toChooseFrom[i].substring(7)) < 13)) toChooseFrom.splice(i, 1);
        }
        if (toChooseFrom.length > 0) {
            let toGive = toChooseFrom[Math.round(Math.random() * (toChooseFrom.length - 1))];
            player.powerupVariables.fakeEquipped.item = toGive;
            if (player.pickaxes[toGive] !== undefined) {
                player.powerupVariables.fakeEquipped.originalState = player.stats.currentPickaxe;
                player.stats.currentPickaxe = Number(toGive.substring(7));
                player.pickaxes[toGive] = true;
            }
            if (player.gears[toGive] !== undefined) {
                player.gears[toGive] = true;
                if (toGive === "gear0") document.getElementById("trackerLock").style.display = "none";
                if (toGive === "gear9") document.getElementById("sillyRecipe").style.display = "block";
            }
            updateAllLayers();
            let tempDirection = curDirection;
            stopMining();
            goDirection(tempDirection);
            player.powerupVariables.fakeEquipped.removeAt = Date.now() + 60000;
            player.powerupCooldowns["powerup5"].cooldown = Date.now() + 3600000;
            utilitySwitchActions();
        }
    }
}

let ability1Active = false;
let ability1Timeout;
let energySiphonerDirection;
function gearAbility1() {
    if (!ability1Active && !resetting) {
        ability1Active = true;
        energySiphonerDirection = curDirection;
        curDirection = "";
        baseSpeed -= 3;
        clearInterval(loopTimer);
        goDirection(energySiphonerDirection);
        ability1Timeout = setTimeout(() => {
            baseSpeed += baseSpeed <= 22 ? 3 : 0;
            clearInterval(loopTimer);
            if (energySiphonerDirection !== "" && curDirection !== "") {
                curDirection = "";
                goDirection(energySiphonerDirection);
            }
            ability1Active = false;
        }, 5000);
    }
}

function gearAbility2() {
    if (currentWorld === 1 && player.gears["gear9"]) {
        let reps = -1;
        let chosenDistance;
        while (chosenDistance === undefined) {
            reps++;
            if (repeatingLayers[reps] === undefined && Math.random() < 1/77) chosenDistance = reps;
        }
        repeatingLayers[reps]= {layer: 7777, force: false};
        specialLayerLocations["sillyLayer"] ??= 16000 + (10000 * reps);
    }
}

function pickaxeAbility1(x, y) {
    const constraints  = getParams(6, 6, x, y);
    const origin = [y, x];
    for (let i = 0; i < 6; i++) {
        x++;
        pickaxeAbilityMineBlock(x, y);
    }
    x = origin[1];
    for (let i = 0; i < constraints[0]; i++) {
        x--;
        pickaxeAbilityMineBlock(x, y);
    }
    x = origin[1];
    for (let i = 0; i < 6; i++) {
        y++;
        pickaxeAbilityMineBlock(x, y);
    }
    y = origin[0];
    for (let i = 0; i < constraints[1]; i++) {
        y--;
        pickaxeAbilityMineBlock(x, y);
    }
    displayArea();
}

function pickaxeAbility2(x, y, size) {
    const constraints = getParams(size, size);
    for (let r = y - constraints[1]; r <= y + size; r++) {
        for (let c = x - constraints[0]; c <= x + size; c++) {
            pickaxeAbilityMineBlock(c, r);
        }
    }
    displayArea();
}

function pickaxeAbility3(x, y) {
    const constraints  = getParams(6, 6);
    const origin = [y, x];
    for (let i = 0; i < constraints[0]; i++) {
        x--;
        pickaxeAbilityMineBlock(x, y);
        y++;
        pickaxeAbilityMineBlock(x, y);
    }
    x = origin[1];
    y = origin[0];
    for (let i = 0; i < constraints[0]; i++) {
        x++;
        pickaxeAbilityMineBlock(x, y);
        y++;
        pickaxeAbilityMineBlock(x, y);
    }
    x = origin[1];
    y = origin[0];
    for (let i = 0; i < constraints[1]; i++) {
        x++;
        pickaxeAbilityMineBlock(x, y);
        y--;
        pickaxeAbilityMineBlock(x, y);
    }
    x = origin[1];
    y = origin[0];
    if (constraints[1] < constraints[0])
        constraints[0] = constraints[1];
    for (let i = 0; i < constraints[0]; i++) {
        x--;
        pickaxeAbilityMineBlock(x, y);
        y--;
        pickaxeAbilityMineBlock(x, y);
    }
    displayArea();
}


function pickaxeAbility4(x, y) {
    const constraints  = getParams(7, 7);
    const area1 = Math.round((Math.random() * (-(constraints[0]) - 7)) + 7);
    const area2 = Math.round((Math.random() * (-(constraints[1]) - 7)) + 7);
    pickaxeAbility2((x + area1), (y + area2), 4, 1);
    displayArea();
}

function pickaxeAbility5(x, y) {
    const area1 = Math.round((Math.random() * 40) - 20);
    const area2 = Math.round((Math.random() * 40) - 20);
    let r = y + area2;
    let c = x + area1;
    for (let i = c; i < c + 5; i++) {
        pickaxeAbilityMineBlock(i, r);
    }
    r++;
    for (let i = 0; i < 5; i++) {
        for (let j = c - 1; j < c + 6; j++) {
            pickaxeAbilityMineBlock(j, r);
        }
        r++;
    }
    for (let i = c; i < c + 5; i++) {
        pickaxeAbilityMineBlock(i, r);
    }
    displayArea();
}

function pickaxeAbility6(x, y) {
    const constraints  = getParams(9, 9);
    let dist = 9;
    for (let r = y + 6; r >= y - constraints[1]; r--) {
        for (let c = x - dist; c <= x + dist; c++) {
            if (c >= x - constraints[0]) {
                pickaxeAbilityMineBlock(c, r);
            }
        }
        dist--;
    }
    displayArea();
}

function pickaxeAbility7(x, y) {
    const constraints = getParams(4, 3);
    let reps = 1;
    for (let r = y - constraints[1]; r < y; r++) {
        for (let c = x - constraints[0]; c < x + 5; c++) {
            if (reps !== 4 && reps !== 6) {
                pickaxeAbilityMineBlock(c, r);
            }
            reps++; 
        }
    }
    reps = 1;
    let dist = 3;
    for (let r = y; r < y+4; r++) {
        for (let c = x - dist; c <= x + dist; c++) {
            if (c >= x - constraints[0]) {
                pickaxeAbilityMineBlock(c, r);
            }
        }
        dist--;
    }
    displayArea();
}

function pickaxeAbility8(x, y, reps) {
    if (reps < 4) {
        let procs = [
            [],
            [],
            [],
            []
        ];
        const constraints  = getParams(8, 8, x, y);
        const origin = [y, x];
        for (let i = 0; i < 8; i++) {
            x++;
            pickaxeAbilityMineBlock(x, y);
        }
        if (Math.random() <= 0.75)
            procs[0] = [x, y, true];
        x = origin[1];
        for (let i = 0; i < constraints[0]; i++) {
            x--;
            pickaxeAbilityMineBlock(x, y);
        }
        if (Math.random() <= 0.75)
            procs[1] = [x, y, true];
        x = origin[1];
        for (let i = 0; i < 8; i++) {
            y++;
            pickaxeAbilityMineBlock(x, y);
        }
        if (Math.random() <= 0.75) {
            procs[2] = [x, y, true]
        }
        y = origin[0];
        for (let i = 0; i < constraints[1]; i++) {
            y--;
            pickaxeAbilityMineBlock(x, y);
        }
        if (Math.random() <= 0.75)
            procs[3] = [x, y, true];
        reps++;
        for (let i = 0; i < procs.length; i++) {
            if (procs[i][1])
                pickaxeAbility8(procs[i][0], procs[i][1], reps);
        }
    } else {
        displayArea();
    }
}

function pickaxeAbility9(x, y, reps) {
    if (reps < 4) {
        let procs = [
            [],
            [],
            [],
            []
        ];
        const constraints  = getParams(6, 6, x, y);
        const origin = [y, x];
        for (let i = 0; i < constraints[0]; i++) {
            x--;
            pickaxeAbilityMineBlock(x, y);
            y++;
            pickaxeAbilityMineBlock(x, y);
        }
        if (Math.random() <= 0.75)
            procs[0] = [x, y, true];
        x = origin[1];
        y = origin[0];
        for (let i = 0; i < constraints[0]; i++) {
            x++;
            pickaxeAbilityMineBlock(x, y);
            y++;
            pickaxeAbilityMineBlock(x, y);
        }
        if (Math.random() <= 0.75)
            procs[1] = [x, y, true];
        x = origin[1];
        y = origin[0];
        for (let i = 0; i < constraints[1]; i++) {
            x++;
            pickaxeAbilityMineBlock(x, y);
            y--;
            pickaxeAbilityMineBlock(x, y);
        }
        if (Math.random() <= 0.75)
            procs[2] = [x, y, true];
        x = origin[1];
        y = origin[0];
        if (constraints[1] < constraints[0])
            constraints[0] = constraints[1];
        for (let i = 0; i < constraints[0]; i++) {
            x--;
            pickaxeAbilityMineBlock(x, y);
            y--;
            pickaxeAbilityMineBlock(x, y);
        }
        if (Math.random() <= 0.75)
            procs[3] = [x, y, true];
        reps++;
        for (let i = 0; i < procs.length; i++) {
            if (procs[i][1])
                pickaxeAbility9(procs[i][0], procs[i][1], reps);
        }
    } else {
        displayArea();
    }
}

function pickaxeAbility10(x, y) {
    let skips = [
        [0, 4, 12, 16],
        [5, 11],
        [6, 10],
        [0, 16],
        [0, 1, 15, 16],
        [0, 16],
        [6, 10],
        [5, 11],
        [0, 4, 12, 16]
    ];
    let i = 0;
    let reps = 0;
    for (let c = x - 4; c < x + 5; c++) {
        for (let r = y - 8; r < y + 9; r++) {
            if (mine[r] !== undefined) {
                if (!(skips[reps].includes(i))) {
                    pickaxeAbilityMineBlock(c, r);
                }
            }
            i++;
        }
        i = 0;
        reps++;
    }
    i = 0;
    reps = 0;
    for (let r = y - 4; r < y + 5; r++) {
        for (let c = x - 8; c < x + 9; c++) {
            if (mine[r] !== undefined) {
                if (!(skips[reps].includes(i))) {
                    pickaxeAbilityMineBlock(c, r);
                }
            }
            i++;
        }
        i = 0;
        reps++;
    }
    displayArea();
}

function pickaxeAbility11(x, y) {
    for (let i = -3; i < 4; i++) {
        for (let j = -3; j < 4; j++) {
            if (!(i === 0 && j === 0) && Math.random() <= 0.5) {
                let startX = x + 7 * j;
                let startY = y + 7 * i
                for (let r = startY; r < startY + 7; r++)
                    for (let c = startX; c < startX + 7; c++)
                        pickaxeAbilityMineBlock(c, r);
            }
        }
    }
    displayArea();
}

function pickaxeAbility12(x, y) {
    let direction;
    let dirNum = 0;
    const nums = [3, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 36, 38, 39, 41, 42, 44, 45, 47, 48, 50, 51, 53, 54];
    const dirs = ["down", "left", "up", "right"];
    for (let i = 0; i < nums.length; i++) {
        direction = dirs[dirNum];
        switch(direction) {
            case "down":
                for (let r = y; r <= y + nums[i]; r++) {
                    pickaxeAbilityMineBlock(x, r);
            }
            y += nums[i];
            break;
            case "left":
                for (let c = x; c >= x - nums[i]; c--) {
                    pickaxeAbilityMineBlock(c, y);
                }
                x -= nums[i];
                break;
            case "up":
                for (let r = y; r >= y - nums[i]; r--) {
                    if (mine[r] != undefined) {
                        pickaxeAbilityMineBlock(x, r);
                    }
                }
                y -= nums[i];
                break;
            case "right":
                for (let c = x; c <= x + nums[i]; c++) {
                    pickaxeAbilityMineBlock(c, y);
                }
                x += nums[i];
                break;
        }
        dirNum++;
        if (dirNum > 3)
            dirNum = 0;
    }
    
    displayArea();
}

function pickaxeAbility13(x, y) {
    let startNums = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 4, 5, 6, 6];
    let endNums = [37, 36, 35, 34, 29, 31, 30, 29, 28, 27, 26, 24, 29, 28, 32, 31, 25, 24, 23, 16, 24, 23, 22, 24, 26, 28, 19, 31, 30, 24, 13, 20, 21];
    let numSkips = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [28], [27], [], [], [], [], [19, 20], [21, 22], [], [], [], [], [], [24], [12, 25], [13], [], [15], [16]];
    let i = 0;
    for (let r = y - 16; r < y + 17; r++) {
        if (mine[r] != undefined) {
            for (let c = x + startNums[i]; c <= x + endNums[i]; c++) {
                if (!(numSkips[i].includes(c - x))) {
                    pickaxeAbilityMineBlock(c, r);
                }
            }
        }
        i++;
    }
    i = 0;
    for (let r = y - 16; r < y + 17; r++) {
        if (mine[r] != undefined) {
            for (let c = x - startNums[i]; c >= x - endNums[i]; c--) {
                if (!(numSkips[i].includes(-(c - x)))) {
                    pickaxeAbilityMineBlock(c, r);
                }
            }
        }
        i++;
    }
    displayArea();
}
function pickaxeAbility14(translatex, translatey) {
    let r = Math.round((Math.random() * 5) + 1)
    let a = 0; //FAKE CENTER POINT
    let x = 0; //START POINT
    let nums = [];
    while (x <= r) {
        let num1 = Math.sqrt(Math.pow(r, 2) - Math.pow((x - a), 2));
        nums.push(Math.floor(num1));
        x++;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let r = translatey + nums[i]; r >= translatey - nums[i]; r--) {
            pickaxeAbilityMineBlock(translatex + i, r);
            pickaxeAbilityMineBlock(translatex - i, r);
        }
    }
    displayArea();
}
//pickaxeAbility14(curX, curY, 5, 1);
function pickaxeAbility15(x, y) {
    let dist = 7;
    for (let r = y; r < y + 8; r++) {
        let r2 = y - (r - y)
        for (let c = x - dist; c <= x + dist; c++) {
            pickaxeAbilityMineBlock(c, r)
            pickaxeAbilityMineBlock(c, r2)
        }
        dist--;
    }
    displayArea();
}
function pickaxeAbility16(x, y) {
    let startNums = [0, 0, 1, 1, 1, 2, 2, 2, 9, 11, 10, 8, 7, 6, 5, 5, 5, 5, 6, 6, 6, 7, 7];
    let endNums = [1, 1, 2, 2, 2, 3, 3, 3, 10, 12, 11, 9, 8, 7, 6, 6, 6, 6, 7, 5, 4, 3, 2];
    let i = 0;
    for (let r = y - 11; r <= y + 11; r++) {
        for (let c = x - startNums[i]; c < x - startNums[i] + endNums[i]; c++) {
            let c2 = x + (x - c);
            if (mine[r] != undefined) {
                pickaxeAbilityMineBlock(c, r);
                pickaxeAbilityMineBlock(c2, r);
            }
        }
        i++;
    }
    displayArea();
}
function pickaxeAbility17(x, y) {
    let startNums = [17, 16, 15, 14, 13, 12, 12, 11, 11, 11, 12, 12, 12, 12, 12, 12];
    let endNums = [23, 24, 25, 25, 25, 26, 27, 26, 27, 27, 28, 29, 29, 29, 29, 29];
    let i = 0;
    for (let c = x - 15; c <= x; c++) {
        let c2 = x + (x - c)
        for (let r = y - startNums[i]; r < y - (startNums[i] - endNums[i]); r++) {
            if (mine[r] != undefined) {
                pickaxeAbilityMineBlock(c, r);
                pickaxeAbilityMineBlock(c2, r);
            }
        }
        i++;
    }
    displayArea();
}
function pickaxeAbility18(x, y) {
        let startNums = [-13, -17, -20, -22, -24, -26, -28, -30, -31, -32, -22, -18, -15, -12, -10, -8, -6, -5, -3, -2, -1, 0, 1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14];
        let endNums = [8, 16, 23, 27, 31, 35, 38, 41, 43, 45, 36, 33, 31, 29, 28, 26, 25, 24, 23, 22, 22, 21, 21, 20, 19, 19, 18, 18, 17, 17, 17, 16, 15, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 9, 8, 8, 6, 6, 5, 5, 4, 4, 3, 2, 1];
        let i = 0;

        for (let r = y + 22; r > y - 33; r--) {
                for (let c = x - startNums[i]; c > x - (startNums[i] + endNums[i]); c--) {
                    pickaxeAbilityMineBlock(c, r);
                }
            i++;
        }
    displayArea();
}
function pickaxeAbility19(x, y, reps) {
    if (reps > 7)
        return;
    let newOrigins = [];
    let dist = 7;
    for (let r = y; r < y + 8; r++) {
        for (let c = x - dist; c <= x + dist; c++) {
            let r2 = y - (r - y)
            pickaxeAbilityMineBlock(c, r);
            pickaxeAbilityMineBlock(c, r2);
            if (r2 < y) {
                if (c < x && Math.random() < 1/60)
                    newOrigins[0] = [y - 8, x - 8];
                if (c > x && Math.random() < 1/60)
                    newOrigins[1] = [y - 8, x + 8];
            }
            if (r > y) {
                if (c < x && Math.random() < 1/60)
                    newOrigins[2] = [y + 8, x - 8];
                if (c > x && Math.random() < 1/60)
                    newOrigins[3] = [y + 8, x + 8];
            }
        }
        dist--;
    }
    for (let i = 0; i < 4; i++) {
        if (newOrigins[i] != undefined) {
            reps++;
            pickaxeAbility19(newOrigins[i][1], newOrigins[i][0], reps)
        }
    }
}
function pickaxeAbility20(x, y) {
    let board = [
        [],
        [],
        []
    ]
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (Math.random() < 0.5)
                board[i][j] = "O";
            else 
                board[i][j] = "X";
        }
    }
    let toMine = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            toMine[i][0] = toMine[i][1] = toMine[i][2] = true;
        }
    }
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
            toMine[0][j]= toMine[1][j] = toMine[2][j] = true;
        }  
    }
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        toMine[0][0] = toMine[1][1] = toMine[2][2] = true;
    }
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        toMine[0][2] = toMine[1][1] = toMine[2][0] = true;
    } 
    let generated;
    //CREATE SPACES ON THE BOARD    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let yStart = y - 22 + (15 * i);
            let xStart = x - 22 + (15 * j);
            if (toMine[i][j]) {
                for (let r = yStart; r < yStart + 15; r++) {
                    for (let c = xStart; c < xStart + 15; c++) {
                        pickaxeAbilityMineBlock(c, r);
                    }
                }
            } else if (board[i][j] === "X") {
                    for (let r = 0; r < 15; r++) {
                        if (mine[yStart + r] != undefined) {
                            pickaxeAbilityMineBlock(xStart + r, yStart + r);
                            pickaxeAbilityMineBlock(xStart + (14 - r), yStart + r);
                        }
                    }
                
                
            } else {
                for (let r = 1; r < 14; r++) {
                    pickaxeAbilityMineBlock(xStart, yStart + r);
                    pickaxeAbilityMineBlock(xStart + r, yStart);
                    pickaxeAbilityMineBlock(xStart + 14, yStart + 14);
                    pickaxeAbilityMineBlock(xStart + r, yStart + 14);
                }
            }
            
        }
    }
    displayArea();
}

function pickaxeAbility21(x, y) {
    let reps = 0;
    let increaseNum = 2;
    for (let cat = 0; cat < 12; cat++) {
    for (let i = 0; i < increaseNum; i++) {
        x--;
        pickaxeAbilityMineBlock(x, y);
        y++
        pickaxeAbilityMineBlock(x, y);
        
    }
    while (reps < increaseNum) {
        x--;
        pickaxeAbilityMineBlock(x, y);
        reps++;
    }
    reps = 0;
    for (let i = 0; i < increaseNum; i++) {
        y--;
        pickaxeAbilityMineBlock(x, y);
        x--;
        pickaxeAbilityMineBlock(x, y);
        
    }
    while (reps < increaseNum) {
        y--;
        pickaxeAbilityMineBlock(x, y);
        reps++;
    }
    reps = 0;
    increaseNum++;

    for (let i = 0; i < increaseNum; i++) {
        x++;
        pickaxeAbilityMineBlock(x, y);
        y--;
        pickaxeAbilityMineBlock(x, y);
        
    }
    while (reps < increaseNum) {
        x++;
        pickaxeAbilityMineBlock(x, y);
        reps++;
    }
    reps = 0;
    for (let i = 0; i < increaseNum; i++) {
        y++;
        pickaxeAbilityMineBlock(x, y);
        x++;
        pickaxeAbilityMineBlock(x, y);
        
    }
    while (reps < increaseNum) {
        y++;
        pickaxeAbilityMineBlock(x, y);
        reps++;
    }
    reps = 0;
    increaseNum++;
    }
    displayArea();
}

function pickaxeAbility22(translatex, translatey) {
    let r = 1;
    for (let reps = 0; reps < 21; reps++) {
        let a = 0; //FAKE CENTER POINT
        let x = 0; //START POINT
        let y = 0;
        let nums1 = [];
        let nums2 = [];
        while (x <= r) {
            let num1 = Math.sqrt(Math.pow(r, 2) - Math.pow((x - a), 2));
            let num2 = Math.sqrt(Math.pow(r, 2) - Math.pow((y - a), 2));
            nums1.push(Math.round(num1));
            nums2.push(Math.round(num2));
            x++;
            y++;
        }
        for (let i = 0; i < nums1.length; i++) {
            pickaxeAbilityMineBlock(translatex + i, translatey + nums1[i]);
            pickaxeAbilityMineBlock(translatex + i, translatey - nums1[i]);
            pickaxeAbilityMineBlock(translatex - i, translatey + nums1[i]);
            pickaxeAbilityMineBlock(translatex - i, translatey - nums1[i]);
            pickaxeAbilityMineBlock(translatex + nums2[i], translatey + i);
            pickaxeAbilityMineBlock(translatex + nums2[i], translatey - i);
            pickaxeAbilityMineBlock(translatex - nums2[i], translatey + i);
            pickaxeAbilityMineBlock(translatex - nums2[i], translatey - i);
        }
        r += 2;
    }
    
    displayArea();
}
//IN ARRAY, ORDER IS X, Y
let pa1 = [];
let pa2 = [];
let pa3 = [];
let pa4 = [];
let pickaxeAbility23Num = 0;

function pickaxeAbility23(x, y) {
    if (pickaxeAbility23Num === 0) {
        pa1[0] = x - Math.round(Math.random() * 600) + 350;
        pa1[1] = y - Math.round(Math.random() * 75) + 10;
        pa2[0] = x + Math.round(Math.random() * 600) + 350;
        pa2[1] = y - Math.round(Math.random() * 75) + 10;
        pickaxeAbility23Num++;
    } else {
        pickaxeAbility23Num = 0;
        pa3[0] = x - Math.round(Math.random() * 600) + 350;
        pa3[1] = y + Math.round(Math.random() * 75) + 10;
        pa4[0] = x + Math.round(Math.random() * 600) + 350;
        pa4[1] = y + Math.round(Math.random() * 75) + 10;
        //ARRAY ORDER IS X, Y
        let dist1 = [Math.abs(pa1[0] - pa4[0]), Math.abs(pa1[1] - pa4[1])];
        let dist2 = [Math.abs(pa2[0] - pa3[0]), Math.abs(pa2[1] - pa3[1])];
        dist1[1] = dist1[1] === 0 ? 1 : dist1[1];
        let xIncrease = dist1[0]/dist1[1];
        let startNumY = pa1[1] < pa4[1] ? pa1[1] : pa4[1];
        let endNumY = pa1[1] > pa4[1] ? pa1[1] : pa4[1];
        let startNumX = pa1[0] < pa4[0] ? pa1[0] : pa4[0];
        let lastChangeX = startNumX;
        let lastChangeY = startNumY;
        let useX;
        if (xIncrease >= 1)
            useX = true;
        else
            useX = false;
        for (let r = startNumY; r < endNumY; r++) {  
            if (!useX) {
                if (r > lastChangeY + 3) {
                    lastChangeY += 3;
                    for (let r2 = r - 2; r2 <= r + 1; r2++) {
                        for (let c = startNumX - 2; c <= startNumX + 1; c++) {
                            pickaxeAbilityMineBlock(Math.floor(c), r2);
                        }
                    }
                }
                
            } else {
                for (let c = startNumX; c < startNumX + xIncrease; c++) {
                    if (c > lastChangeX + 3) {
                        lastChangeX += 3;
                        for (let r2 = r - 2; r2 <= r + 1; r2++) {
                            for (let c2 = c - 2; c2 <= c + 1; c2++) {
                                pickaxeAbilityMineBlock(Math.floor(c2), r2);
                            }
                        }
                    }
                }
            }
            startNumX += xIncrease;
        }
        dist2[1] = dist2[1] === 0 ? 1 : dist2[1];
        xIncrease = dist2[0]/dist2[1];
        startNumY = pa2[1] > pa3[1] ? pa2[1] : pa3[1];
        endNumY = pa2[1] < pa3[1] ? pa2[1] : pa3[1];
        startNumX = pa2[0] < pa3[0] ? pa2[0] : pa3[0];
        lastChangeX = startNumX;
        lastChangeY = startNumY;
        if (xIncrease >= 1)
            useX = true;
        else
            useX = false;
        for (let r = startNumY; r > endNumY; r--) { 
            if (!useX) {
                if (r > lastChangeY - 3) {
                    for (let r2 = r - 2; r2 <= r + 1; r2++) {
                        for (let c = startNumX - 2; c <= startNumX + 1; c++) {
                            pickaxeAbilityMineBlock(Math.floor(c), r2);
                        }
                    }
                    lastChangeY -= 3;
                }
            } else {
                for (let c = startNumX; c < startNumX + xIncrease; c++) {
                    if (c < lastChangeX + 3) {
                        lastChangeX += 3;
                        for (let r2 = r - 2; r2 <= r + 1; r2++) {
                            for (let c2 = c - 2; c2 <= c + 1; c2++) {
                                pickaxeAbilityMineBlock(Math.floor(c2), r2);
                            }
                        }
                    }
                }
            }
            startNumX += xIncrease;
        }
    }
    displayArea();
}
function pickaxeAbility24(x, y) {
    x = x - 60;
    y = y - 110;
    for (let i = 0; i < pickaxe24Nums.length; i++) {
        pickaxeAbilityMineBlock(pickaxe24Nums[i]["x"] + x, pickaxe24Nums[i]["y"] + y)
    }
    displayArea();
}
function pickaxeAbility25(x, y) {
    x = x - 130;
    y = y - 110;
    for (let i = 0; i < pickaxe25Nums.length; i++) {
        pickaxeAbilityMineBlock(pickaxe25Nums[i]["x"] + x, pickaxe25Nums[i]["y"] + y)
    }
    displayArea();
}
const abilityTable = {
    " 22" : 1/78,
    " 19" : 1/75,
    " 20" : 1/61,
    " 18" : 1/58,
    " 17" : 1/55,
    " 21" : 1/52,
    " 13" : 1/49,
    " 24" : 1/46,
    " 25" : 1/43,
    " 16" : 1/40,
    " 15" : 1/37,
    " 14" : 1/34,
    " 7" : 1/31,
    " 11" : 1/28,
    " 12" : 1/25,
    " 23" : 1/22,
    " 1" : 1/19,
    " 2" : 1/16,
    " 3" : 1/13,
    " 5" : 1/10,
    " 9" : 1/9,
    " 8" : 1/7,
    " 6" : 1/5,
    " 4" : 1/3,
    " 10" : 1/1,
}
const abilityTableArray = [" 22", " 19", " 20", " 18", " 17", " 21", " 13", " 24", " 25", " 16", " 15", " 14", " 7", " 11", " 12", " 23", " 1", " 2", " 3", " 5", " 9", " 8", " 6", " 4", " 10"];
function pickaxeAbility26(x, y) {
    const points = {
        "a" : {"X":x, "Y":y},
        "b" : {"X":x + 300, "Y":y - 300},
        "c" : {"X":x - 300, "Y":y - 300},
        "d" : {"X":x + 300, "Y":y + 300},
        "e" : {"X":x - 300, "Y":y + 300}
    }
    for (let propertyName in points) {
        let low = 0;
        let high = abilityTableArray.length;
        let chosenValue = Math.random();
        while (low < high) {
            const mid = (low + high) >> 1; // Use bitwise shift for integer division
            if (chosenValue >= abilityTable[abilityTableArray[mid]]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        let num = Number(abilityTableArray[low].substring(1));
        switch (num) {
            case 1:
                pickaxeAbility1(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
            case 2:
                pickaxeAbility2(points[propertyName]["X"], points[propertyName]["Y"], 3);
                break;
            case 3:
                pickaxeAbility3(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
            case 4:
                pickaxeAbility4(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
            case 5:
                pickaxeAbility5(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
            case 6:
                if (Math.random() < 1/2) {
                    pickaxeAbility6(points[propertyName]["X"], points[propertyName]["Y"]);
                } else {
                    pickaxeAbility7(points[propertyName]["X"], points[propertyName]["Y"]);
                }
                break;
            case 7:
                pickaxeAbility8(points[propertyName]["X"], points[propertyName]["Y"], 0);
                break;
            case 8:
                pickaxeAbility9(points[propertyName]["X"], points[propertyName]["Y"], 0);
                break;
            case 9:
                pickaxeAbility10(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
            case 10:
                pickaxeAbility11(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
            case 11:
                pickaxeAbility12(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
            case 12:
                pickaxeAbility13(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
            case 14:
                pickaxeAbility14(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
            case 15:
                pickaxeAbility15(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
            case 16:
                pickaxeAbility16(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
            case 17:
                pickaxeAbility17(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
            case 18:
                pickaxeAbility18(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
            case 19:
                pickaxeAbility19(points[propertyName]["X"], points[propertyName]["Y"], 0);
                break;
            case 20:
                pickaxeAbility20(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
            case 21:
                pickaxeAbility21(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
            case 22:
                pickaxeAbility22(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
             case 23:
                pickaxeAbility23(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
            case 24:
                pickaxeAbility24(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
            case 25:
                pickaxeAbility25(points[propertyName]["X"], points[propertyName]["Y"]);
                break;
        }
    }
}
const treeLevels = {
    0: [],
    1: []
}
function pickaxeAbility27(x, y) {
    x -= 50;
    y -= 600;
    const arrToIndex = treeLevels[player.upgrades["pickaxe27"].level];
    for (let i = 0; i < arrToIndex.length; i++) {
        pickaxeAbilityMineBlock(arrToIndex[i]["x"] + x, arrToIndex[i]["y"] + y)
    }
    displayArea();
}

function pickaxeAbilityMineBlock(x, y) {
    if (y > 0) {
        mine[y] ??= [];
        if (mine[y][x] === undefined) 
            generateBlock({"Y":y, "X":x});
        mineBlock(x, y, "ability"); 
    }
}
//GET THIS HELL SPAWN AWAY FROM ME PLEASE
