const player = {
    gears: {
        "gear0": false,
        "gear1": false,
        "gear2": false,
        "gear3": false,
        "gear4": false,
        "gear5": false,
        "gear6": false,
        "gear7": false,
        "gear8": false,
        "gear9": false,
        "gear10": false,
        "gear11": false,
        "gear12": false,
        "gear13": false,
        "gear14": false,
        "gear15": false,
        "gear16": false,
        "gear17": false,
        "gear18": false,
        "gear19": false,
        "gear20": false,
        "gear21": false,
    },
    pickaxes: {
        "pickaxe0": true,
        "pickaxe1": false,
        "pickaxe2": false,
        "pickaxe3": false,
        "pickaxe4": false,
        "pickaxe5": false,
        "pickaxe6": false,
        "pickaxe7": false,
        "pickaxe8": false,
        "pickaxe9": false,
        "pickaxe10": false,
        "pickaxe11": false,
        "pickaxe12": false,
        "pickaxe13": false,
        "pickaxe14": false,
        "pickaxe15": false,
        "pickaxe16": false,
        "pickaxe17": false,
        "pickaxe18": false,
        "pickaxe19": false,
        "pickaxe20": false,
        "pickaxe21": false,
        "pickaxe22": false,
        "pickaxe23": false,
        "pickaxe24": false,
        "pickaxe25": false,
        "pickaxe26": false,
    },
    settings: {
        audioSettings: {
            "Antique": {canPlay: true, volume: 100},
            "Mystical": {canPlay: true, volume: 100},
            "Divine": {canPlay: true, volume: 100},
            "Flawless": {canPlay: true, volume: 100},
            "Interstellar": {canPlay: true, volume: 100},
            "Metaversal": {canPlay: true, volume: 100},
            "Sacred": {canPlay: true, volume: 100},
            "Ethereal": {canPlay: true, volume: 100},
            "Celestial": {canPlay: true, volume: 100},
            "Imaginary": {canPlay: true, volume: 100},
        },
        musicSettings: {
            active: true,
            volume: 100
        },
        baseMineCapacity: 250000,
        minSpeed: 0,
        stopOnRare: {active: true, minimum: "Antique"},
        canDisplay: true,
        useNumbers: false,
        inventorySettings: {invToIndex: true, craftingToIndex: true},
        usePathBlocks: true,
        cavesEnabled: true,
        useDisguisedChills: false,
        usingNewEmojis: false,
        minRarityNum: 0,
    },
    stats: {
        currentPickaxe: 0,
        blocksMined: 0,
        timePlayed: 0,
    },
    powerupCooldowns: {

    }
}
function oldDataToNew(data) {
    console.log("transfered old");
    for (let i = 0; i < data[0].length; i++) {
        if (oreList[data[0][i][0]] !== undefined) {
            oreList[data[0][i][0]]["normalAmt"] = data[0][i][1][0][0];
            oreList[data[0][i][0]]["electrifiedAmt"] = data[0][i][1][0][1];
            oreList[data[0][i][0]]["radioactiveAmt"] = data[0][i][1][0][2];
            oreList[data[0][i][0]]["explosiveAmt"] = data[0][i][1][0][3];
        }
    }
    if (data[1] !== undefined) {
        let i = 0;
        for (let propertyName in player.pickaxes) {
            player.pickaxes[propertyName] = data[1][0][0][i][1];
            i++;
        }
        player.stats.currentPickaxe = data[1][0][1];
    }
    while (Array.isArray(data[2])) data[2] = data[2][0];
        player.stats.blocksMined = data[2];
    if (data[4] !== undefined) {
        let i = 0;
        for (let propertyName in player.gears) {
            player.gears[propertyName] = data[4][0][i];
            i++;
        }
    }
    if (data[3] !== undefined) {
        if (data[3][0] != undefined) {
            let i = 0;
            for (let propertyName in player.settings.audioSettings) {
                player.settings.audioSettings[propertyName].canPlay = data[3][0][i];
                player.settings.audioSettings[propertyName].volume = data[3][1][i];
                i++;
            }
        }
        if (data[3][2] != undefined) {
            player.settings.musicSettings.active = !data[3][2];
        }
        if (data[3][3] != undefined) {
            player.settings.musicSettings.volume = data[3][3];
        }
        if (data[3][4] != undefined) {
            player.settings.baseMineCapacity = data[3][4];    
        }
        if (data[3][5] != undefined) {
            player.settings.minSpeed = data[3][5];
        }
        if (data[3][6] != undefined) {
            player.settings.stopOnRare.active = data[3][6];
        }
        if (data[3][7] != undefined) {
            player.settings.stopOnRare.minimum = oreInformation.getTierAt(data[3][7] + 5);
        }
        if (data[3][8] != undefined) {
            player.settings.canDisplay = data[3][8];
        }
        if (data[3][9] != undefined) {
            player.settings.useNumbers = data[3][9];
        }
        if (data[3][10] != undefined) {
            player.settings.inventorySettings.craftingToIndex = data[3][10];
        }
        if (data[3][11] != undefined) {
            player.settings.inventorySettings.invToIndex = data[3][11];
        }
        if (data[3][16] != undefined) {
            player.settings.usePathBlocks = data[3][16];
        }
        if (data[3][17] != undefined) {
            player.settings.cavesEnabled = data[3][17];
        }
        if (data[3][18] != undefined) {
            player.settings.useDisguisedChills = data[3][18]
        }
        if (data[3][19] != undefined) {
            player.settings.usingNewEmojis = data[3][19]
        }
        if (data[3][20] != undefined) {
            player.settings.minRarityNum = data[3][20];
        }
    }
    return saveNewData(true);
}

function loadNewData(data) {
    try {
        console.log("loaded new");
        for (let propertyName in data.blocks) {
            if (oreList[propertyName] !== undefined) {
                oreList[propertyName]["normalAmt"] = data.blocks[propertyName].normalAmt;
                oreList[propertyName]["electrifiedAmt"] = data.blocks[propertyName].electrifiedAmt;
                oreList[propertyName]["radioactiveAmt"] = data.blocks[propertyName].radioactiveAmt;
                oreList[propertyName]["explosiveAmt"] = data.blocks[propertyName].explosiveAmt;
                inventoryObj[propertyName] = 0;
            }
        }
        data = data.player;
        if (data.gears !== undefined && player.gears !== undefined) {
            for (let propertyName in data.gears) if (player.gears[propertyName] !== undefined) player.gears[propertyName] = data.gears[propertyName];
        }
        if (data.pickaxes !== undefined && player.pickaxes !== undefined) {
            for (let propertyName in data.pickaxes) if (player.pickaxes[propertyName] !== undefined) player.pickaxes[propertyName] = data.pickaxes[propertyName];
        }
        if (data.stats.currentPickaxe !== undefined) player.stats.currentPickaxe = data.stats.currentPickaxe;
        if (data.stats.blocksMined !== undefined) player.stats.blocksMined = data.stats.blocksMined;
        document.getElementById("blocksMined").innerText = `${player.stats.blocksMined.toLocaleString()} Blocks Mined.`;
        if (data.settings.audioSettings !== undefined) {
            for (let propertyName in data.settings.audioSettings) {
                player.settings.audioSettings[propertyName].canPlay = data.settings.audioSettings[propertyName].canPlay;
                player.settings.audioSettings[propertyName].volume = data.settings.audioSettings[propertyName].volume;
                let text = document.getElementById(`mute${propertyName}`).innerText;
                text = text.substring(text.indexOf(" ") + 1);
                if (!(player.settings.audioSettings[propertyName].canPlay)) document.getElementById(`mute${propertyName}`).innerText = `Unmute ${text}`;
                let element = document.getElementById(`mute${propertyName}`).parentElement.children[1].children[0];
                element.value = player.settings.audioSettings[propertyName].volume;
                changeSpawnVolume(element.value, propertyName);

            }
        }
        if (data.settings.baseMineCapacity !== undefined) {
            player.settings.baseMineCapacity = data.settings.baseMineCapacity;
            document.getElementById("mineResetProgress").innerText = `0/${player.settings.baseMineCapacity.toLocaleString()} Blocks Revealed This Reset.`;
        }
        if (data.settings.canDisplay !== undefined) {
            if (!data.settings.canDisplay) changeCanDisplay(document.getElementById("blockUpdates"));
        }
        if (data.settings.cavesEnabled !== undefined) {
            if (!data.settings.cavesEnabled) toggleCaves(document.getElementById("caveToggle"));
        }
        if (data.settings.inventorySettings !== undefined) {
            if (!data.settings.inventorySettings.craftingToIndex) switchToIndex(document.getElementById("invIndex"), 0);
            if (!data.settings.inventorySettings.invToIndex) switchToIndex(document.getElementById("craftIndex"), 1);
        }
        if (data.settings.minRarityNum !== undefined) {
            player.settings.minRarityNum = (data.settings.minRarityNum) - 1;
            changeSpawnMessageRarity(document.getElementById("changeSMrarityDisplay"));
        }
        if (data.settings.minSpeed !== undefined) {
            player.settings.minSpeed = data.settings.minSpeed;
        }
        if (data.settings.musicSettings !== undefined) {
            player.settings.musicSettings.active = data.settings.musicSettings.active;
            player.settings.musicSettings.volume = data.settings.musicSettings.volume;
            if (!player.settings.musicSettings.active) document.getElementById("musicButton").click();
            document.getElementById("musicVolume").value = data.settings.musicSettings.volume;
        }
        if (data.settings.stopOnRare!== undefined) {
            player.settings.stopOnRare.minimum = oreInformation.getPreviousTier(data.settings.stopOnRare.minimum);
            player.settings.stopOnRare.active = data.settings.stopOnRare.active;
            if (!player.settings.stopOnRare.active) document.getElementById("stopOnRare").style.backgroundColor = "#FF3D3D";
            changeMinRarity(document.getElementById("stopOnRareDisplay"));
        }
        if (data.settings.useDisguisedChills!== undefined) {
            if (data.settings.useDisguisedChills) enableDisguisedChills();
        }
        if (data.settings.useNumbers!== undefined) {
            if (data.settings.useNumbers) changeUseNumbers(document.getElementById("useNumbers"));
        }
        if (data.settings.usePathBlocks!== undefined) {
            if (!data.settings.usePathBlocks) togglePathBlocks();
        }
        if (data.settings.usingNewEmojis!== undefined) {
            if (data.settings.usingNewEmojis) switchFont();
        }
    } catch (err) {
        console.log(err);
    }
}

function saveNewData(returnData) {
    try {
        let data = {blocks: {}, player: player};
        for (let propertyName in oreList) {
            data.blocks[propertyName] = {
                normalAmt: oreList[propertyName]["normalAmt"],
                electrifiedAmt: oreList[propertyName]["electrifiedAmt"],
                radioactiveAmt: oreList[propertyName]["radioactiveAmt"],
                explosiveAmt: oreList[propertyName]["explosiveAmt"]
            };
        }
        if (!debug) localStorage.setItem("newPlayerData", JSON.stringify(data));
        else localStorage.setItem("newTestingData", JSON.stringify(data));
        if (returnData) return data;
    } catch (err) {
        console.log(err)
    }
}