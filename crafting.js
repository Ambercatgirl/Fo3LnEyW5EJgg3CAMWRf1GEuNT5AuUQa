/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
/*

 */
const recipes = {
    "pickaxe1" : {
        name : "",
        recipe : [{ore:"🟫", amt:10000},{ore:"🟧", amt:333},{ore:"🟥", amt:290},{ore:"🟪", amt:250},{ore:"⚫", amt:100}],
        upgrades : {},
    },
    "pickaxe2" : {
        name : "",
        recipe : [{ore:"🟫", amt:50000},{ore:"🟢", amt:1400},{ore:"🔵", amt:1200},{ore:"🟡", amt:1100},{ore:"🟠", amt:1000},{ore:"🔴", amt:850},{ore:"🟣", amt:750},{ore:"🟤", amt:675}],
        upgrades : {},
    },
    "pickaxe3" : {
        name : "",
        recipe : [{ore:"🟫", amt:100000},{ore:"🟢", amt:2200},{ore:"🔵", amt:2000},{ore:"🟡", amt:1800},{ore:"🟠", amt:1700},{ore:"💚", amt:1},{ore:"💙", amt:1}],
        upgrades : {},
    },
    "pickaxe28" : {
        name: "",
        recipe : [{ore:"📰", amt:150000},{ore:"🟢", amt:3000},{ore:"🔵", amt:2800},{ore:"🟡", amt:2600},{ore:"💛", amt:2},{ore:"🤎", amt:1}],
        upgrades : {}
    },
    "pickaxe4" : {
        name : "",
        recipe : [{ore:"📰", amt:250000},{ore:"🟢", amt:5500},{ore:"🔵", amt:5000},{ore:"🟡", amt:4600},{ore:"🟠", amt:4200},{ore:"❤️", amt:2},{ore:"🤍", amt:1},{ore:"⚙️", amt:1}],
        upgrades : {},
    },
    "pickaxe5" : {
        name : "",
        recipe : [{ore:"🪨", amt:500000},{ore:"🟢", amt:12000},{ore:"🔵", amt:10000},{ore:"🟡", amt:9100},{ore:"🟠", amt:8300},{ore:"❤️", amt:5},{ore:"🤍", amt:3},{ore:"💠", amt:1},{ore:"🥏", amt:1}],
        upgrades : {},
    },
    "pickaxe6" : {
        name : "",
        recipe : [{ore:"🟫", amt:650000},{ore:"🟧", amt:53000},{ore:"🟪", amt:40000},{ore:"❤️", amt:5},{ore:"🤍", amt:3},{ore:"🍁", amt:1},{ore:"🎄", amt:1},{ore:"🎍", amt:1}],
        upgrades : {},
    },
    "pickaxe7" : {
        name : "",
        recipe : [{ore:"🌵", amt:500000},{ore:"🌊", amt:300000},{ore:"🟢", amt:35000},{ore:"⚫", amt:25000},{ore:"💛", amt:7},{ore:"🖍️", amt:3},{ore:"⚱️", amt:3},{ore:"🤿", amt:2},{ore:"🫧", amt:2},{ore:"🐟", amt:2},{ore:"🎀", amt:2}],
        upgrades : {},
    },
    "pickaxe8" : {
        name : "",
        recipe : [{ore:"🧱", amt:5000000},{ore:"🌊", amt:5000000},{ore:"☢️", amt:5000000},{ore:"🟥", amt:500000},{ore:"🟢", amt:330000},{ore:"🟡", amt:300000},{ore:"🟣", amt:220000},{ore:"🗿", amt:5},{ore:"🪙", amt:5},{ore:"🔔", amt:7},{ore:"🧩", amt:7},{ore:"⛵", amt:10},{ore:"🎣", amt:10},{ore:"🎇", amt:2},{ore:"🪬", amt:3},{ore:"🧲", amt:3},{ore:"👑", amt:3},{ore:"🔱", amt:2}],
        upgrades : {},
    },
    "pickaxe9" : {
        name : "",
        recipe : [{ore:"📰", amt:15000000},{ore:"🧱", amt:15000000},{ore:"🟢", amt:670000},{ore:"🟡", amt:550000},{ore:"🟠", amt:775000},{ore:"🟤", amt:530000},{ore:"✂️", amt:50},{ore:"🎲", amt:50},{ore:"🪜", amt:50},{ore:"🪚", amt:50},{ore:"🏆", amt:10},{ore:"🧨", amt:15},{ore:"🔗", amt:15},{ore:"📝", amt:1},{ore:"🌟", amt:1}],
        upgrades : {},
    },
    "pickaxe10" : {
        name : "",
        recipe : [{ore:"🟫", amt:75000000},{ore:"🟧", amt:4000000},{ore:"🔵", amt:2500000},{ore:"⚫", amt:1200000},{ore:"🍁", amt:100},{ore:"🌻", amt:100},{ore:"🪵", amt:100},{ore:"🎄", amt:100},{ore:"🎍", amt:50},{ore:"🎃", amt:45},{ore:"🌲", amt:40},{ore:"🌏", amt:10},{ore:"🌪️", amt:5},{ore:"🥗", amt:2}],
        upgrades : {},
    },
    "pickaxe11" : {
        name : "",
        recipe : [{ore:"🌊", amt:100000000},{ore:"🟥", amt:9000000},{ore:"🟢", amt:7000000},{ore:"🟡", amt:5000000},{ore:"🔴", amt:4750000},{ore:"⛵", amt:500},{ore:"🎣", amt:500},{ore:"🤿", amt:500},{ore:"🫧", amt:500},{ore:"🐟", amt:250},{ore:"👑", amt:100},{ore:"🔱", amt:100},{ore:"🌀", amt:10},{ore:"👿", amt:10},{ore:"🪩", amt:5},{ore:"💫", amt:1}],
        upgrades : {},
    },
    "pickaxe12" : {
        name : "",
        recipe : [{ore:"🧱", amt:75000000},{ore:"🪨", amt:75000000},{ore:"🌫️", amt:75000000},{ore:"🟤", amt:6400000},{ore:"⚫", amt:5000000},{ore:"💚", amt:1500},{ore:"🤍", amt:750},{ore:"🧵", amt:50},{ore:"❄️", amt:40},{ore:"🥉", amt:30},{ore:"🧊", amt:30},{ore:"💸", amt:15},{ore:"👁️", amt:3},{ore:"🌈", amt:2},{ore:"🌇", amt:1}],
        upgrades : {},
    },
    "pickaxe13" : {
        name : "",
        recipe :  [{ore:"🟫", amt:10000000},{ore:"🧱", amt:10000000},{ore:"🌫️", amt:10000000},{ore:"🌊", amt:10000000},{ore:"🪨", amt:10000000},{ore:"☢️", amt:10000000},{ore:"🌵", amt:10000000},{ore:"📰", amt:10000000},{ore:"🌏", amt:1},{ore:"🔩", amt:1},{ore:"🧵", amt:1},{ore:"🌀", amt:1},{ore:"❄️", amt:1},{ore:"🥀", amt:1},{ore:"🔥", amt:1},{ore:"📝", amt:1}],
        upgrades : {},
    },
    "pickaxe14" : {
        name : "",
        recipe : [{ore:"📺", amt:50000},{ore:"🔃", amt:500},{ore:"↘️", amt:10},{ore:"⏬", amt:1},],
        upgrades : {}
    },
    "pickaxe15" : {
        name : "",
        recipe : [{ore:"🚪", amt:400000},{ore:"🔁", amt:1800},{ore:"⬇️", amt:150},{ore:"⏫", amt:18},{ore:"▶️", amt:2},],
        upgrades : {}
    },
    "pickaxe16" : {
        name : "",
        recipe : [{ore:"🌐", amt:1000000},{ore:"⤵️", amt:1900},{ore:"↪️", amt:960},{ore:"🔽", amt:100},{ore:"⏮️", amt:20},{ore:"📕", amt:1},],
        upgrades : {}
    },
    "pickaxe17" : {
        name : "",
        recipe : [{ore:"♟️", amt:3000000},{ore:"🔂", amt:28000},{ore:"⏺️", amt:75},{ore:"⏏️", amt:25},{ore:"📗", amt:5},{ore:"📘", amt:3},{ore:"✏️", amt:1},],
        upgrades : {}
    },
    "pickaxe18" : {
        name : "",
        recipe : [{ore:"☁️", amt:7500000},{ore:"⬅️", amt:12800},{ore:"↖️", amt:2500},{ore:"➡️", amt:2250},{ore:"📙", amt:6},{ore:"🌧️", amt:2},{ore:"🌤️", amt:1},],
        upgrades : {}
    },
    "pickaxe19" : {
        name : "",
        recipe : [{ore:"♟️", amt:12500000},{ore:"⬆️", amt:19000},{ore:"◀️", amt:2400},{ore:"⏯️", amt:275},{ore:"⏸️", amt:240},{ore:"📗", amt:15},{ore:"🧠", amt:2},{ore:"📐", amt:1},],
        upgrades : {}
    },
    "pickaxe20" : {
        name : "",
        recipe : [{ore:"❌", amt:2000000},{ore:"📺", amt:35000000},{ore:"🔼", amt:6700},{ore:"⏪", amt:1950},{ore:"✴️", amt:3},{ore:"📙", amt:20},{ore:"🛡️", amt:20},{ore:"🪃", amt:10},{ore:"🪓", amt:3},],
        upgrades : {}
    },
    "pickaxe21" : {
        name : "",
        recipe : [{ore:"☁️", amt:37500000},{ore:"🚪", amt:37500000},{ore:"🔃", amt:2670000},{ore:"⏏️", amt:850},{ore:"📘", amt:50},{ore:"🔑", amt:20},{ore:"🌨️", amt:10},{ore:"🖇️", amt:10},{ore:"⛈️", amt:3},],
        upgrades : {}
    },
    "pickaxe22" : {
        name : "",
        recipe : [{ore:"❌", amt:75000000},{ore:"📺", amt:100000000},{ore:"🔄", amt:2675000},{ore:"↪️", amt:310000},{ore:"⏬", amt:9000},{ore:"⏯️", amt:2400},{ore:"📗", amt:35},{ore:"📕", amt:30},{ore:"📙", amt:25},{ore:"📘", amt:20},{ore:"🛡️", amt:30},{ore:"🪃", amt:25},{ore:"🪓", amt:5},{ore:"🔕", amt:1},],
        upgrades : {}
    },
    "pickaxe23" : {
        name : "",
        recipe : [{ore:"🚪", amt:200000000},{ore:"↘️", amt:175000},{ore:"➡️", amt:85000},{ore:"🔽", amt:57000},{ore:"🔒", amt:125},{ore:"🔑", amt:100},{ore:"🖇️", amt:35},{ore:"🔏", amt:5},{ore:"⛓️", amt:4},],
        upgrades : {}
    },
    "pickaxe24" : {
        name : "",
        recipe : [{ore:"☁️", amt:625000000},{ore:"🔃", amt:18500000},{ore:"⤵️", amt:2800000},{ore:"⏬", amt:33000},{ore:"⏺️", amt:21000},{ore:"📙", amt:7500},{ore:"📘", amt:6000},{ore:"🌨️", amt:300},{ore:"🪁", amt:200},{ore:"⛈️", amt:120},{ore:"🌩️", amt:45},{ore:"🪶", amt:4},],
        upgrades : {}
    },
    "pickaxe25" : {
        name : "",
        recipe : [{ore:"🌐", amt:1500000000},{ore:"🔂", amt:30000000},{ore:"⬇️", amt:1700000},{ore:"◀️", amt:250000},{ore:"⏫", amt:200000},{ore:"🖱️", amt:2300},{ore:"💔", amt:200},{ore:"🔪", amt:50},{ore:"🧂", amt:20},{ore:"📽️", amt:10},{ore:"💘", amt:1},],
        upgrades : {}
    },
    "pickaxe26" : {
        name : "",
        recipe : [{ore:"❌", amt:44444444444},{ore:"🕳️", amt:2600000},{ore:"✴️", amt:260},{ore:"⚙️", amt:1750000},{ore:"💠", amt:1460000},{ore:"🫧", amt:1000000},{ore:"💍", amt:584000},{ore:"🎍", amt:240000},{ore:"👑", amt:14000},{ore:"💎", amt:51500},{ore:"🌟", amt:34000},{ore:"💥", amt:23360},{ore:"🌀", amt:14175},{ore:"🪐", amt:12350},{ore:"🥗", amt:10950},{ore:"🪩", amt:8750},{ore:"📌", amt:275},{ore:"🚧", amt:320},{ore:"💫", amt:4350},{ore:"⛏️", amt:1},{ore:"☯️", amt:1},{ore:"🌳", amt:30},{ore:"🏰", amt:30},{ore:"🚿", amt:30},{ore:"🏔️", amt:30},{ore:"⚠️", amt:30},{ore:"🐪", amt:30},{ore:"🐋", amt:1095},{ore:"💵", amt:30},{ore:"🍃", amt:25},{ore:"👾", amt:15},{ore:"🪡", amt:15},{ore:"🚽", amt:15},{ore:"🎓", amt:15},{ore:"⚡", amt:15},{ore:"💘", amt:30},{ore:"💢", amt:50},{ore:"🪽", amt:2},{ore:"🗝️", amt:2},{ore:"🚫", amt:2},{ore:"♨️", amt:1},]        ,
        upgrades : {}
    },
    "pickaxe27" : {
        name: "",
        recipe : [],
        upgrades : {}
    },
    "gear0" : {
        name : "",
        recipe : [{ore:"🪨", amt:300000},{ore:"🟧", amt:25000},{ore:"🟥", amt:25000},{ore:"🟪", amt:25000},{ore:"🔋", amt:1},],
        upgrades : {}
    },
    "gear1" : {
        name : "",
        recipe : [{ore:"🌫️", amt:7500000},{ore:"🧡", amt:10},{ore:"💜", amt:5},{ore:"🎭", amt:1},{ore:"🪄", amt:2},{ore:"🕯️", amt:1},],
        upgrades : {}
    },
    "gear2" : {
        name : "",
        recipe : [{ore:"🌵", amt:12500000},{ore:"🖤", amt:1},{ore:"🤍", amt:7},{ore:"🖍️", amt:2},{ore:"⚱️", amt:2},{ore:"🎀", amt:1},{ore:"⭐", amt:1},],
        upgrades : {}
    },
    "gear3" : {
        name : "",
        recipe : [{ore:"🪨", amt:30000000},{ore:"💠", amt:25},{ore:"⚜️", amt:25},{ore:"🔋", amt:10},{ore:"🔮", amt:7},{ore:"☄️", amt:5},{ore:"💎", amt:1},],
        upgrades : {}
    },
    "gear4" : {
        name : "",
        recipe : [{ore:"🟫", amt:10000000},{ore:"🧱", amt:10000000},{ore:"🌫️", amt:10000000},{ore:"🌊", amt:10000000},{ore:"🪨", amt:10000000},{ore:"☢️", amt:10000000},{ore:"🌵", amt:10000000},{ore:"📰", amt:10000000},{ore:"📟", amt:15},{ore:"⌚", amt:2},{ore:"🔥", amt:1},],
        upgrades : {}
    },
    "gear5" : {
        name : "",
        recipe : [{ore:"🌫️", amt:50000000},{ore:"🌊", amt:50000000},{ore:"🪄", amt:50},{ore:"🎨", amt:25},{ore:"🕋", amt:20},{ore:"🕯️", amt:15},{ore:"🌀", amt:1},{ore:"⌛", amt:1},],
        upgrades : {}
    },
    "gear6" : {
        name : "",
        recipe : [{ore:"🌵", amt:150000000},{ore:"⚱️", amt:75},{ore:"🗡️", amt:50},{ore:"🎀", amt:20},{ore:"🔆", amt:10},{ore:"⭐", amt:15},{ore:"💥", amt:2},{ore:"🪐", amt:1},],
        upgrades : {}
    },
    "gear7" : {
        name : "",
        recipe : [{ore:"🌫️", amt:17500000},{ore:"🎭", amt:10},{ore:"🎴", amt:5},{ore:"🎨", amt:2},{ore:"🕋", amt:1},],
        upgrades : {}
    },
    "gear8" : {
        name : "",
        recipe : [{ore:"☢️", amt:20000000},{ore:"🧪", amt:20},{ore:"⚗️", amt:15},{ore:"⏹️", amt:5},{ore:"🔳", amt:3},],
        upgrades : {}
    },
    "gear9" : {
        name : "",
        recipe : [{ore:"🎂", amt:1},{ore:"🔮", amt:1},{ore:"🪄", amt:1},],
        upgrades : {}
    },
    "gear10" : {
        name : "",
        recipe : [{ore:"🌐", amt:2500000},{ore:"🔄", amt:28000},{ore:"🔀", amt:10000},{ore:"💻", amt:1},],
        upgrades : {}
    },
    "gear11" : {
        name : "",
        recipe : [{ore:"☁️", amt:7500000},{ore:"📗", amt:15},{ore:"📘", amt:10},{ore:"🌧️", amt:4},{ore:"🌨️", amt:1},],
        upgrades : {}
    },
    "gear12" : {
        name : "",
        recipe : [{ore:"🚪", amt:8750000},{ore:"⏪", amt:625},{ore:"⏏️", amt:125},{ore:"🔒", amt:8},{ore:"🔑", amt:5},{ore:"🖇️", amt:2},],
        upgrades : {}
    },
    "gear13" : {
        name : "",
        recipe : [{ore:"🌐", amt:15000000},{ore:"🔃", amt:675000},{ore:"⤴️", amt:67500},{ore:"➡️", amt:6750},{ore:"⏺️", amt:675},{ore:"💻", amt:15},{ore:"🖱️", amt:5},],
        upgrades : {}
    },
    "gear14" : {
        name : "",
        recipe : [{ore:"♟️", amt:22500000},{ore:"🔂", amt:450000},{ore:"↩️", amt:90000},{ore:"▶️", amt:450},{ore:"✏️", amt:15},{ore:"🧠", amt:6},{ore:"📖", amt:5},{ore:"📐", amt:4},{ore:"📚", amt:2},],
        upgrades : {}
    },
    "gear15" : {
        name : "",
        recipe : [{ore:"☁️", amt:20000000},{ore:"📺", amt:60000000},{ore:"🚪", amt:20000000},{ore:"🌐", amt:20000000},{ore:"♟️", amt:20000000},{ore:"◀️", amt:12625},{ore:"⏺️", amt:1400},{ore:"📗", amt:60},{ore:"📕", amt:50},{ore:"📙", amt:40},{ore:"📘", amt:30},{ore:"🛡️", amt:15},],
        upgrades : {}
    },
    "gear16" : {
        name : "",
        recipe : [{ore:"🌐", amt:45000000},{ore:"➡️", amt:27500},{ore:"⏩", amt:5000},{ore:"⏭️", amt:3800},{ore:"▶️", amt:920},{ore:"🖱️", amt:30},{ore:"🍆", amt:3},{ore:"💔", amt:1},],
        upgrades : {}
    },
    "gear17" : {
        name : "",
        recipe : [{ore:"♟️", amt:87500000},{ore:"🔼", amt:30000},{ore:"✏️", amt:50},{ore:"🧠", amt:35},{ore:"📖", amt:30},{ore:"📐", amt:15},{ore:"📚", amt:10},{ore:"🖊️", amt:3},],
        upgrades : {}
    },
    "gear18" : {
        name : "",
        recipe : [{ore:"📺", amt:250000000},{ore:"🔀", amt:2000000},{ore:"⬅️", amt:580000},{ore:"⏩", amt:9500},{ore:"⏮️", amt:13500},{ore:"⏸️", amt:5000},{ore:"🛡️", amt:250},{ore:"🪃", amt:200},{ore:"🪓", amt:30},{ore:"🔨", amt:5},{ore:"💣", amt:3},],
        upgrades : {}
    },
    "gear19" : {
        name : "",
        recipe : [{ore:"🚪", amt:1750000000},{ore:"⤴️", amt:2700000},{ore:"↪️", amt:1850000},{ore:"⏪", amt:45000},{ore:"⏯️", amt:15000},{ore:"🔒", amt:4200},{ore:"🖇️", amt:1300},{ore:"⛓️", amt:100},{ore:"🚧", amt:30},{ore:"🛎️", amt:5},],
        upgrades : {}
    },
    "gear20" : {
        name : "",
        recipe : [{ore:"♟️", amt:4500000000},{ore:"↩️", amt:4500000},{ore:"⬆️", amt:2300000},{ore:"↖️", amt:640000},{ore:"⏭️", amt:60000},{ore:"✏️", amt:10000},{ore:"📐", amt:3000},{ore:"🔎", amt:150},{ore:"📌", amt:75},{ore:"📍", amt:15},{ore:"🎓", amt:9},],
        upgrades : {}
    },
    "gear21" : {
        name : "",
        recipe : [{ore:"🦠", amt:70000000},{ore:"☣️", amt:40000000},{ore:"🎵", amt:20000000},{ore:"❓", amt:15000000},{ore:"🪇", amt:1},{ore:"🧬", amt:1},{ore:"🔭", amt:1},{ore:"🕸️", amt:1},],
        upgrades : {}
    },
    "gear22" : {
        name : "",
        recipe : [{ore:"🇿🇦", amt:110}, {ore:"🇹🇿", amt:100}, {ore:"🇨🇩", amt:75}],
        upgrades: {}
    },
    "gear23" : {
        name : "",
        recipe : [{ore:"🇯🇵", amt:25}, {ore:"🇧🇩", amt:25}, {ore:"🇵🇰", amt:15}],
        upgrades: {}
    },
    "gear24" : {
        name : "",
        recipe : [{ore:"🇨🇺", amt:15}, {ore:"🇭🇹", amt:13}, {ore:"🇬🇹", amt:10}],
        upgrades: {}
    },
    "gear25" : {  
        name : "",
        recipe : [{ore:"🇪🇸", amt:15}, {ore:"🇮🇹", amt:13}, {ore:"🇫🇷", amt:10}],
        upgrades: {}
    },
    "gear26" : {  
        name : "",
        recipe : [{ore:"🇪🇨", amt:18}, {ore:"🇨🇱", amt:15}, {ore:"🇻🇪", amt:12}],
        upgrades: {}
    },
    "gear27" : {  
        name : "",
        recipe : [{ore:"🇻🇺", amt:10}, {ore:"🇫🇲", amt:8}, {ore:"🇸🇧", amt:6}, {ore:"🇰🇾", amt:3}, {ore:"🇨🇰", amt:1}, {ore:"🇫🇰", amt:1}],
        upgrades: {}
    }
}
recipeElements = {};
let currentRecipe = undefined;
function displayRecipe(recipe) {
    const parentElement = document.getElementById("displayRecipe");
    while (parentElement.firstChild) parentElement.removeChild(parentElement.firstChild);
    if (currentRecipe === undefined || currentRecipe !== recipe) {
        if (recipe !== "pickaxe27") document.getElementById("craftingRecipeTitle").style.display = "block";
        recipeElements[recipe].style.display = "block";
        parentElement.appendChild(recipeElements[recipe]);
        const description = document.getElementById(`${recipe}Description`).cloneNode(true);
        description.style.display = "block";
        let time = get("craftingTimeDisplay").cloneNode(true);
        time.style.display = "block";
        parentElement.appendChild(time)
        let title = document.getElementById("descriptionTitle").cloneNode(true);
        title.style.display = "block";
        parentElement.appendChild(title);
        parentElement.appendChild(description);
        currentRecipe = recipe;
    } else {
        document.getElementById("craftingRecipeTitle").style.display = "none";
        recipeElements[recipe].style.display = "none";
        while (parentElement.firstChild) parentElement.removeChild(parentElement.firstChild);
        currentRecipe = undefined;
    }
    updateActiveRecipe();
}
let lastCount = -1;
function updateActiveRecipe() {
    let totalCount = 0;
    let count = 0;
    if (currentRecipe === "pickaxe27") return;
    if (currentRecipe !== undefined) {
        const recipe = recipes[currentRecipe].recipe;
        const elements = recipeElements[currentRecipe].children;
        let totalRarity = 0;
        let currentRarity = 0;
        for (let i = 0; i < recipe.length; i++) {
            let ore = recipe[i].ore;
            const toChange = elements[i];
            if (oreList[ore] !== undefined) {
                totalCount++;
                let needed = recipe[i].amt;
                let amtOwned = oreList[ore]["normalAmt"];
                totalRarity += oreList[ore]["numRarity"] * needed;
                toChange.innerHTML = `${ore}<span style='text-shadow: -0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff;'>${amtOwned.toLocaleString()}/${needed.toLocaleString()}</span>`;
                if(amtOwned >= needed) {
                    count++;
                    toChange.style.color = "#6BC267";
                    currentRarity += oreList[ore]["numRarity"] * needed;
                }
                else {
                    toChange.style.color = "#FF3D3D";
                    currentRarity += oreList[ore]["numRarity"] * amtOwned;
                }  
            }
        }
        let button = recipeElements[currentRecipe].lastChild;
        const type = (currentRecipe.indexOf('pickaxe') > -1) ? "pickaxe" : "gear";
        const num = Number(currentRecipe.substring(type.length));
        if (player.pickaxes[currentRecipe] || player.gears[currentRecipe]) {
            if (!(buttonGradients[button.id]["applied"])) {
                button.style.backgroundImage = buttonGradients[button.id]["gradient"];
                buttonGradients[button.id]["applied"] = true;
            }
            if (type === "pickaxe" && player.stats.currentPickaxe === num) {
                if (currentRecipe === "pickaxe26") button.innerText = "Equipped..?";
                else button.innerText = "Equipped!"
            } else if (type === "pickaxe") {
                if (currentRecipe === "pickaxe26") button.innerText = "Pledge."
                else button.innerText = "Equip!"
            } else {
                if (currentRecipe === "gear9") button.innerText = "SILLIFY!";
                else button.innerText = "Owned!" 
            }
        } else {
            let percent = 100 * (currentRarity/totalRarity);
            percent = Math.round(percent * 100) / 100;
            if (count < totalCount && percent === 100) percent = 99.99; 
            button.style.backgroundImage = "linear-gradient(to right, #6BC267 " + percent + "%, #FF3D3D " + (percent + 5) + "%)";
            if (percent < 100) button.innerText = percent + "%";
            else button.innerText = "Craft!"
            buttonGradients[button.id]["applied"] = false;
        }
        const display = get("craftingTimeDisplay");
        if (display !== null) display.textContent = `Est. Time: ${ct()}`
    }
}
function createPickaxeRecipes() {
    for (let property in recipes) {
        let recipe = recipes[property].recipe;
        const tempElement = document.createElement('div');
        if (property === "pickaxe27") {
            recipeElements[property] = tempElement;
        } else {
            tempElement.classList = 'craftingAmountsDisplay'
            tempElement.id = property;
            for (let i = 0; i < recipe.length; i++) {
                const ore = recipe[i].ore;
                const amtNeeded = recipe[i].amt;
                const amtHave = oreList[ore]["normalAmt"];
                const recipeElement = document.createElement('p');
                recipeElement.id = `${property}Display`;
                recipeElement.classList = `recipeOreDisplay`;
                recipeElement.innerText = `${ore} ${amtHave.toLocaleString()}/${amtNeeded.toLocaleString()}`
                recipeElement.setAttribute("onclick", `randomFunction("${ore}", "crafting")`);
                const colors = oreInformation.getColors(oreList[ore]["oreTier"]);
                recipeElement.style.backgroundImage = `linear-gradient(to right, black, ${colors["backgroundColor"]}, black)`;
                if (amtHave >= amtNeeded) recipeElement.style.color = "#6BC267";
                else recipeElement.style.color = "#FF3D3D";
                tempElement.appendChild(recipeElement);
            }
            let tempButton = document.createElement('button');
            if (property === "pickaxe13") {
                tempButton.innerText = "Teleport!";
                tempButton.setAttribute("onclick", "attemptSwitchWorld(2)");
                tempButton.style.width = "50%";
                tempButton.classList = "craftPickaxeButton";
                tempElement.appendChild(tempButton);
                tempButton = document.createElement('button');
            }
            tempButton.id=`${property}Craft`;
            tempButton.classList = "craftPickaxeButton";
            tempButton.setAttribute("onclick", `craftPickaxe("${property}")`);
            tempButton.style.width = property === "pickaxe13" ? "50%" : "100%";
            tempElement.appendChild(tempButton);
            recipeElements[property] = tempElement;
        }
        
    }
}
function createGearRecipes() {
    return;
}
const buttonGradients = {
    "pickaxe1Craft" : {"gradient" : "linear-gradient(to right, darkgray, darkgray)","applied" : false},
    "pickaxe2Craft" : {"gradient" : "linear-gradient(to right, #412B15, #412B15)","applied" : false},
    "pickaxe3Craft" : {"gradient" : "linear-gradient(to right, #C4A484, #C4A484)","applied" : false},
    "pickaxe4Craft" : {"gradient" : "linear-gradient(to right, white, #C0C0C0)","applied" : false},
    "pickaxe5Craft" : {"gradient" : "linear-gradient(to right, #87CEEB, #2C75FF)","applied" : false},
    "pickaxe6Craft" : {"gradient" : "linear-gradient(to right, #53CB59 30%, 50%, #CF7C5C)","applied" : false},
    "pickaxe7Craft" : {"gradient" : "linear-gradient(to right, #FFC71F 30%, 55%, #440B81)","applied" : false},
    "pickaxe8Craft" : {"gradient" : "linear-gradient(to right, #94BDC0 40%, 60%, #FFFF9D)","applied" : false},
    "pickaxe9Craft" : {"gradient" : "linear-gradient(to right, #E4A436 20%, #00F438, #33FFA4)","applied" : false},
    "pickaxe10Craft" : {"gradient" : "linear-gradient(to right, #DF1717, #00CF11, #2100CA)","applied" : false},
    "pickaxe11Craft" : {"gradient" : "linear-gradient(to right, #A0EE30, #FCFF25, #CFFFFE, #9AC6F1)","applied" : false},
    "pickaxe12Craft" : {"gradient" : "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)","applied" : false},
    "pickaxe13Craft" : {"gradient" : "linear-gradient(to right, #ffffff, #404040)","applied" : false},
    "pickaxe14Craft" : {"gradient" : "linear-gradient(to right, #70E3FF, 65%, #2BFF00)","applied" : false},
    "pickaxe15Craft" : {"gradient" : "linear-gradient(to right, #FF143E 25%, 50%, #3127ED 75%)","applied" : false},
    "pickaxe16Craft" : {"gradient" : "linear-gradient(to right, #FF3607, #FFE428)","applied" : false},
    "pickaxe17Craft" : {"gradient" : "linear-gradient(to right, #FF7011, 40%, #A9A9A9, #6C6C6C)","applied" : false},
    "pickaxe18Craft" : {"gradient" : "linear-gradient(to right, #C6F9FF, #5B6BC1, #FAFAFA)","applied" : false},
    "pickaxe19Craft" : {"gradient" : "linear-gradient(to right, #FF9F39, 30%, #6BFFE5, 80%, #FF9F39)","applied" : false},
    "pickaxe20Craft" : {"gradient" : "linear-gradient(to right, #D10003, #F210A7, 50%, #FFDF55 90%)","applied" : false},
    "pickaxe21Craft" : {"gradient" : "linear-gradient(135deg, #FFE200, #464646, #FFE200, #464646, #FFE200, #464646, #FFE200)","applied" : false},
    "pickaxe22Craft" : {"gradient" : "linear-gradient(to right, #C20000, #FF5300, #0D0D0D, #0D0D0D, #0D0D0D, #0D0D0D, #FF5300, #C20000)","applied" : false},
    "pickaxe23Craft" : {"gradient" : "linear-gradient(to right, #F5F5F5, #0D0D0D, #FFFDAF, #0D0D0D, #F5F5F5)","applied" : false},
    "pickaxe24Craft" : {"gradient" : "linear-gradient(to right, #F6FF58 7%, #0030F1, #676767, #57FDFF, #FC5EFF 93%","applied" : false},
    "pickaxe25Craft" : {"gradient" : "linear-gradient(to right, #FF2454, #600018, #FF8DCC, #121212, #FF8DCC, #600018, #FF2454","applied" : false},
    "pickaxe26Craft" : {"gradient" : "linear-gradient(to right, #000000, #5D0000, #734600, #807A00, #074D00, #006564, #021652 , #3B0076, #460038, #5D0000, #000000)","applied" : false},
    "pickaxe27Craft" : {"gradient" : "linear-gradient(to right, #0CAE5B, #40EE95, #A67B51, #613B16, #A67B51, #40EE95, #0CAE5B)","applied" : false},
    "pickaxe28Craft" : {"gradient" : "linear-gradient(to right, #c370e1, #8282e6, #ffffcd)","applied" : false},
    

    "gear0Craft" : {"gradient" : "linear-gradient(to right, #005820, #00FF23","applied" : false},
    "gear1Craft" : {"gradient" : "linear-gradient(to right, #FFF1C0, #FF9E40","applied" : false},
    "gear2Craft" : {"gradient" : "linear-gradient(to right, #F9F9F9, #FFFB48","applied" : false},
    "gear3Craft" : {"gradient" : "linear-gradient(to right, #2E2486, #45FFF2, #45A5FF","applied" : false},
    "gear4Craft" : {"gradient" : "linear-gradient(to right, #AEAEAE, #AEAEAE, #49C6FF, #6DD700, #F7F7F7, #AD7F57, #FF6312","applied" : false},
    "gear5Craft" : {"gradient" : "linear-gradient(to right, #CA18FF, #5D6BDC, #00ED2D, #5D6BDC, #CA18FF","applied" : false},
    "gear6Craft" : {"gradient" : "linear-gradient(to right, #CDAE35, #FFF584, #5DFBFF, #FFF584, #CDAE35","applied" : false},
    "gear7Craft" : {"gradient" : "linear-gradient(to right, #62FF96, #F9F9F9, #FF9FDF","applied" : false},
    "gear8Craft" : {"gradient" : "linear-gradient(to right, #FF5609, #D7C100, #A8FF21","applied" : false},
    "gear9Craft" : {"gradient" : "linear-gradient(to right, #FFEFD8, #FF5FE4, #FF2727, #FF5FE4, #FFEFD8)","applied" : false},
    "gear10Craft" : {"gradient" : "linear-gradient(to right, #8BEFFF, #44CDFF","applied" : false},
    "gear11Craft" : {"gradient" : "linear-gradient(to right, #0016AD, #616161, #616161, #FFEF32","applied" : false},
    "gear12Craft" : {"gradient" : "linear-gradient(to right, #931A1C 30%, #9CC400 80%","applied" : false},
    "gear13Craft" : {"gradient" : "linear-gradient(to right, #7AFF1F, #FFEB00, #FF0B0B","applied" : false},
    "gear14Craft" : {"gradient" : "linear-gradient(to right, #856447, #B2B2B2, #585858","applied" : false},
    "gear15Craft" : {"gradient" : "linear-gradient(to right, #DFCE21, #F1F1F1, #0C1656 90%","applied" : false},
    "gear16Craft" : {"gradient" : "linear-gradient(to right, #DCD56B, #550000, #00551F","applied" : false},
    "gear17Craft" : {"gradient" : "linear-gradient(to right, #2E2486, #45FFF2, #45A5FF ","applied" : false},
    "gear18Craft" : {"gradient" : "linear-gradient(to right, #FF7C00 10%, #032A00, #11E900, #032A00, #FF7C00 90%","applied" : false},
    "gear19Craft" : {"gradient" : "linear-gradient(to right, #CDCDCD 5%, #F55D2F, #474747, #EFD754, #474747, #F55D2F, #CDCDCD 95%","applied" : false},
    "gear20Craft" : {"gradient" : "linear-gradient(to right, #000000 5%, #FF3636, #E94585, #000ACE, #FFFFFF 95%","applied" : false},
    "gear21Craft" : {"gradient" : "linear-gradient(to right, #44533D, #37085A, #76734E, #116666, #58340B, #04370A, #3B0505, #740A32, #451676, #236B4B)","applied" : false},
    "gear22Craft" : {"gradient" : "linear-gradient(to right,#FF0B0B, #FFEB00, #7AFF1F)","applied" : false},
    "gear23Craft" : {"gradient" : "linear-gradient(to right, #00dfff, #3a00f9, #15fd00, #3a00f9, #00dfff)","applied" : false},
    "gear24Craft" : {"gradient" : "linear-gradient(to right, #FFFF99, #b4dcf0, #dcf0f0, #b4dcf0, #FFFF99)","applied" : false},
    "gear25Craft" : {"gradient" : "linear-gradient(to right, #e365fc, #c9fc3a, #ff4b33)","applied" : false},
    "gear26Craft" : {"gradient" : "linear-gradient(to right, #a3a09d, #585f2a, #978773, #8a8038, #5b590a)","applied" : false},
    "gear27Craft" : {"gradient" : "linear-gradient(to right, #DAE34A, #C69908, #EF5522, #C69908, #DAE34A)","applied" : false},
    
}
function craftPickaxe(item) {
    const recipe = recipes[item].recipe;
    const type = (item.indexOf("pickaxe") > -1) ? "pickaxe" : "gear"
    if (!player.pickaxes[item] && !player.gears[item]) {
        if (item === "pickaxe13" && !player.pickaxes["pickaxe9"]) return;
        for (let i = 0; i < recipe.length; i++) {
            const amtNeeded = recipe[i].amt;
            const amtHave = oreList[recipe[i].ore]["normalAmt"];
            if (amtHave < amtNeeded) return;
        }
        for (let i = 0; i < recipe.length; i++) {
            const ore = recipe[i].ore;
            const amtNeeded = recipe[i].amt;
            oreList[ore]["normalAmt"] -= amtNeeded;
            inventoryObj[ore] = 0;
        }
        if (type === "pickaxe") player.pickaxes[item] = true;
        else player.gears[item] = true;
    }
    if (type === "pickaxe") player.stats.currentPickaxe = Number(item.substring(type.length));
    if (currentWorld === 1 && item === "gear9")
        gearAbility2();
    if (player.gears["gear0"]) document.getElementById("trackerLock").style.display = "none";
    updateActiveRecipe();
    utilitySwitchActions();
}
function getButtonByName(item) {
    const toSearch = document.getElementsByClassName("craftingButton");
    for (let i = 0; i < toSearch.length; i++) {
        const toCheck = toSearch[i].getAttribute('onclick');
        if (toCheck.indexOf(item) > -1) return toSearch[i];
    }
    return false;
}
function utilitySwitchActions() {
    changeLayerOres();
    updateAllLayers();
    switchLayerIndex(0);
    if (debug) adminChangeLuck(verifiedOres.getCurrentLuck());
    verifiedOres.checkPickaxe();
    displayArea();
}
let m87 = 0;
let m88 = 0;
const showOrders = {
    worldOnePickaxes : ["pickaxe1", "pickaxe2", "pickaxe3", "pickaxe28", "pickaxe4", "pickaxe5", "pickaxe6", "pickaxe7", "pickaxe8", "pickaxe9", "pickaxe10", "pickaxe11", "pickaxe12", "pickaxe13"],
    worldTwoPickaxes : ["pickaxe13", "pickaxe14", "pickaxe15", "pickaxe16", "pickaxe17", "pickaxe18", "pickaxe19", "pickaxe20", "pickaxe21", "pickaxe22", "pickaxe23", "pickaxe24", "pickaxe25", "pickaxe26"],
    worldOneGears : ["gear0", "gear1", "gear2", "gear7", "gear8", "gear3", "gear4", "gear5", "gear6", "gear9"],
    worldTwoGears : ["gear10", "gear11", "gear12", "gear13", "gear14", "gear15", "gear16", "gear17", "gear18", "gear19", "gear20", "gear21"],
    srOnePickaxes : ["pickaxe27"],
    srOneGears : ["gear22", "gear23", "gear24", "gear25", "gear26", "gear27"],
}
function showPickaxes() {
    appear(document.getElementById("pickaxeCrafts"));
    disappear(document.getElementById("gearCrafts"));
    m87 = 0;
    m88++;
    if (m88 === 6) {
        let show = true;
        for (let gear in player.gears) if (!player.gears[gear]) show = false;
        for (let pickaxe in player.pickaxes) if (pickaxe !== "pickaxe26" && !player.pickaxes[pickaxe]) show = false;
        if (show) {
            let children = document.getElementById("pickaxeCrafts").children;
            for (let i = 0; i < children.length; i++) children[i].style.display = "none";
            document.getElementById("nullChroma").style.display = "block";
        } else m88 = 0;
    }
    document.getElementById("oblivionFracturer").style.display = "none";
}
function showGears() {
    disappear(document.getElementById("pickaxeCrafts"));
    appear(document.getElementById("gearCrafts"));
    m87++;
    m88 = 0;
    if (m87 === 3 && currentWorld === 2) document.getElementById("oblivionFracturer").style.display = "block";
        let children = document.getElementById("pickaxeCrafts").children;
        const list = currentWorld === 1 ? showOrders.worldOnePickaxes : (currentWorld === 1.1 ? showOrders.srOnePickaxes : showOrders.worldTwoPickaxes);
        for (let i = 0; i < list.length; i++) {
            getButtonByName(list[i]).style.display = "block";
        }
        document.getElementById("nullChroma").style.display = "none";
}
function switchWorldCraftables() {
    let gearList;
    let pickaxeList;
    const elements = document.getElementsByClassName("craftingButton");
    for (let i = 0; i < elements.length; i++) elements[i].style.display = "none";
    if (currentWorld === 1) {
        gearList = showOrders.worldOneGears;
        pickaxeList = showOrders.worldOnePickaxes;
    } else if (currentWorld === 1.1) {
        gearList = showOrders.srOneGears;
        pickaxeList = showOrders.srOnePickaxes;
    } else if (currentWorld === 2) {
        gearList = showOrders.worldTwoGears;
        pickaxeList = showOrders.worldTwoPickaxes;
    }
    for (let i = 0; i < gearList.length; i++) getButtonByName(gearList[i]).style.display = "block";
    for (let i = 0; i < pickaxeList.length; i++) getButtonByName(pickaxeList[i]).style.display = "block";
    document.getElementById("nullChroma").style.display = "none";
    document.getElementById("oblivionFracturer").style.display = "none";
    if (indexHasOre("🎂") && currentWorld === 1) document.getElementById("sillyRecipe").style.display = "block";
    else document.getElementById("sillyRecipe").style.display = "none";
}
function toggleOreForge() {
    let element = document.getElementById("forgeContainer")
    if (element.style.display === "block") {
        element.style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        canMine = true;
    } else {
        element.style.display = "block";
        document.getElementById("mainContent").style.display = "none";
        displayOreRecipe(currentOreRecipe);
        canMine = false;
    }
}
let currentOreRecipe;
const oreRecipes = {
    "frisbeeCraft" : {
        "cost" : [{"ore":"💠","amt":1}, {"ore":"💙","amt":10}],
        "result" : [{"ore":"🥏", "amt":1}],
        "multiplier" : 1
    },
    "diamondCraft" : {
        "cost" : [{"ore":"💙","amt":25}, {"ore":"🔵","amt":250000}],
        "result" : [{"ore":"💠", "amt":1}],
        "multiplier" : 1
    },
    "bowCraft" : {
        "cost" : [{"ore":"📟","amt":2},{"ore":"🖍️","amt":3},{"ore":"❤️","amt":25}],
        "result" : [{"ore":"🎀", "amt":1}],
        "multiplier" : 1
    },
    "fishCraft" : {
        "cost" : [{"ore":"🫧","amt":2},{"ore":"🤿","amt":2},{"ore":"🎣","amt":2},{"ore":"⛵","amt":2}],
        "result" : [{"ore":"🐟", "amt":1}],
        "multiplier" : 1
    },
    "greenCraft" : {
        "cost" : [{"ore":"🟢","amt":35000}],
        "result" : [{"ore":"💚", "amt":1}],
        "multiplier" : 1
    },
    "blueCraft" : {
        "cost" : [{"ore":"🔵","amt":35000}],
        "result" : [{"ore":"💙", "amt":1}],
        "multiplier" : 1
    },
    "yellowCraft" : {
        "cost" : [{"ore":"🟡","amt":20000}],
        "result" : [{"ore":"💛", "amt":1}],
        "multiplier" : 1
    },
    "orangeCraft" : {
        "cost" : [{"ore":"🟠","amt":25000}],
        "result" : [{"ore":"🧡", "amt":1}],
        "multiplier" : 1
    },
    "redCraft" : {
        "cost" : [{"ore":"🔴","amt":20000}],
        "result" : [{"ore":"❤️", "amt":1}],
        "multiplier" : 1
    },
    "purpleCraft" : {
        "cost" : [{"ore":"🟣","amt":20000}],
        "result" : [{"ore":"💜", "amt":1}],
        "multiplier" : 1
    },
    "brownCraft" : {
        "cost" : [{"ore":"🟤","amt":20000}],
        "result" : [{"ore":"🤎", "amt":1}],
        "multiplier" : 1
    },
    "blackCraft" : {
        "cost" : [{"ore":"🔵","amt":30000}, {"ore":"🟡","amt":30000}, {"ore":"🔴","amt":30000}],
        "result" : [{"ore":"🖤", "amt":1}],
        "multiplier" : 1
    },
    "whiteCraft" : {
        "cost" : [{"ore":"🔵","amt":30000}, {"ore":"🟢","amt":30000}, {"ore":"🔴","amt":30000}],
        "result" : [{"ore":"🤍", "amt":1}],
        "multiplier" : 1
    },
    "greenFission" : {
        "cost" : [{"ore":"💚", "amt":1}],
        "result" : [{"ore":"🟢","amt":25000}],
        "multiplier" : 1
    },
    "blueFission" : {
        "cost" : [{"ore":"💙", "amt":1}],
        "result" : [{"ore":"🔵","amt":25000}],
        "multiplier" : 1
    },
    "yellowFission" : {
        "cost" : [{"ore":"💛", "amt":1}],
        "result" : [{"ore":"🟡","amt":15000}],
        "multiplier" : 1
    },
    "orangeFission" : {
        "cost" : [{"ore":"🧡", "amt":1}],
        "result" : [{"ore":"🟠","amt":20000}],
        "multiplier" : 1
    },
    "redFission" : {
        "cost" : [{"ore":"❤️", "amt":1}],
        "result" : [{"ore":"🔴","amt":15000}],
        "multiplier" : 1
    },
    "purpleFission" : {
        "cost" : [{"ore":"💜", "amt":1}],
        "result" : [{"ore":"🟣","amt":15000}],
        "multiplier" : 1
    },
    "brownFission" : {
        "cost" : [{"ore":"🤎", "amt":1}],
        "result" : [{"ore":"🟤","amt":15000}],
        "multiplier" : 1
    },
    "blackFission" : {
        "cost" : [{"ore":"🖤", "amt":1}],
        "result" : [{"ore":"🔵","amt":20000}, {"ore":"🟡","amt":20000}, {"ore":"🔴","amt":20000}],
        "multiplier" : 1
    },
    "whiteFission" : {
        "cost" : [{"ore":"🤍", "amt":1}],
        "result" : [{"ore":"🔵","amt":20000}, {"ore":"🟢","amt":20000}, {"ore":"🔴","amt":20000}],
        "multiplier" : 1
    },
    "gearCraft" : {
        "cost" : [{"ore":"🤍","amt":1}, {"ore":"🖤","amt":2}, {"ore":"⚫","amt":10000}],
        "result" : [{"ore":"⚙️", "amt":1}],
        "multiplier" : 1
    },
    "batteryCraft" : {
        "cost" : [{"ore":"💍","amt":2}, {"ore":"🥏","amt":3}, {"ore":"🤍","amt":5}, {"ore":"💚","amt":10}, {"ore":"🔵","amt":50000}],
        "result" : [{"ore":"🔋", "amt":1}],
        "multiplier" : 1
    },
    "bambooCraft" : {
        "cost" : [{"ore":"🎄","amt":2}, {"ore":"🌻","amt":2}, {"ore":"🍁","amt":2}, {"ore":"💚","amt":20}, {"ore":"🟢","amt":100000}],
        "result" : [{"ore":"🎍", "amt":1}],
        "multiplier" : 1
    },
    "idoliumFission" : {
        "cost" : [{"ore":"💎","amt":1}],
        "result" : [{"ore":"🔮", "amt":2}, {"ore":"🔋", "amt":2}, {"ore":"💍", "amt":4}, {"ore":"🥏", "amt":5}, {"ore":"💠", "amt":10}, {"ore":"🪨", "amt":250000}],
        "multiplier" : 1
    },
    "cylinderFission" : {
        "cost" : [{"ore":"🧵","amt":1}],
        "result" : [{"ore":"🕯️", "amt":2}, {"ore":"🎨", "amt":1}, {"ore":"🥽", "amt":5}, {"ore":"🪄", "amt":10}, {"ore":"🌫️", "amt":750000}],
        "multiplier" : 1
    },
    "circleFission" : {
        "cost" : [{"ore":"⭕","amt":1}],
        "result" : [{"ore":"🔕", "amt":2}],
        "multiplier" : 1
    }
}
function getRecipeById(id) {
    return oreRecipes[id];
}
function displayOreRecipe(id) {
    if (id === currentOreRecipe) {
        document.getElementById("forgeSettings").style.display = "none";
        let parent = document.getElementById("forgeRecipeDisplay");
        parent.style.display = "none";
        while (parent.firstChild) parent.removeChild(parent.firstChild);
        currentOreRecipe = "";
    } else {
        let parent = document.getElementById("forgeRecipeDisplay");
        while (parent.firstChild) parent.removeChild(parent.firstChild);
        parent.style.display = "block";
        document.getElementById("forgeSettings").style.display = "block";
        currentOreRecipe = id;
        let recipe = getRecipeById(id);
        recipe["multiplier"] = 1;
        document.getElementById("forgeCraftingAmount").innerText = "1x";
        for (let i = 0; i < recipe["cost"].length; i++) {
            let ore = recipe["cost"][i]["ore"];
            let amt = recipe["cost"][i]["amt"];
            let element = document.createElement("p");
            let colors = oreInformation.getColors(oreList[ore]["oreTier"]);
            element.style.backgroundImage = "linear-gradient(to right, black, " + colors["backgroundColor"] + ", black)";
            element.innerHTML = `${ore} <span style='text-shadow: -0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff;'>${oreList[ore]["normalAmt"].toLocaleString()}/${amt.toLocaleString()}</span>`;
            element.classList = "recipeOreDisplay";
            if (oreList[ore]["normalAmt"] >= amt)
                element.style.color = "#6BC267";
            else
                element.style.color = "#FF3D3D";
            parent.appendChild(element);
        }
        for (let i = 0; i < recipe["result"].length; i++) {
            let ore = oreRecipes[id]["result"][i]["ore"];
            let element = document.createElement("p");
            if (i === 0) element.style.borderTop = "1px solid white";
            let colors = oreInformation.getColors(oreList[ore]["oreTier"]);
            element.style.backgroundImage = "linear-gradient(to right, black, " + colors["backgroundColor"] + ", black)";
            element.style.color = colors["textColor"];
            if (colors["textColor"] === "#ffffff") element.style.textShadow = "-0.05em -0.05em 0 #000, 0.05em -0.05em 0 #000, -0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000";
            else element.style.textShadow = "-0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff";
            element.innerText = `${ore} x${(oreRecipes[id]["result"][i]["amt"] * oreRecipes[id]["multiplier"]).toLocaleString()}`;
            element.classList = "recipeOreDisplay";
            parent.appendChild(element);
        }
    }
}
function multiplyRecipe(amt) {
    amt = Number(amt);
    if (isNaN(amt)) return;
    if (amt < 1) amt = 1;
    amt = Math.floor(amt);
    document.getElementById("forgeCraftingAmount").innerText = `${amt.toLocaleString()}x`;
    document.getElementById('amountInputText').value = "";
    let recipe = getRecipeById(currentOreRecipe);
    recipe["multiplier"] = amt;
    let parent = document.getElementById("forgeRecipeDisplay");
    while (parent.firstChild) parent.removeChild(parent.firstChild);
    for (let i = 0; i < recipe["cost"].length; i++) {
        let ore = recipe["cost"][i]["ore"];
        let amt = recipe["cost"][i]["amt"] * recipe["multiplier"];
        let element = document.createElement("p");
        let colors = oreInformation.getColors(oreList[ore]["oreTier"]);
        element.style.backgroundImage = "linear-gradient(to right, black, " + colors["backgroundColor"] + ", black)";
        element.innerHTML = `${ore} <span style='text-shadow: -0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff;'>${oreList[ore]["normalAmt"].toLocaleString()}/${amt.toLocaleString()}</span>`;
        element.classList = "recipeOreDisplay";
        if (oreList[ore]["normalAmt"] >= amt)
            element.style.color = "#6BC267";
        else
            element.style.color = "#FF3D3D";
        parent.appendChild(element);
    }
    for (let i = 0; i < recipe["result"].length; i++) {
        let ore = recipe["result"][i]["ore"];
        let element = document.createElement("p");
        if (i === 0) element.style.borderTop = "1px solid white";
        let colors = oreInformation.getColors(oreList[ore]["oreTier"]);
        element.style.backgroundImage = "linear-gradient(to right, black, " + colors["backgroundColor"] + ", black)";
        element.style.color = colors["textColor"];
        if (colors["textColor"] === "#ffffff") element.style.textShadow = "-0.05em -0.05em 0 #000, 0.05em -0.05em 0 #000, -0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000";
        else element.style.textShadow = "-0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff";
        element.innerText = `${ore} x${(recipe["result"][i]["amt"] * recipe["multiplier"]).toLocaleString()}`;
        element.classList = "recipeOreDisplay";
        parent.appendChild(element);
    }
}
function craftOre(id) {
    let recipe = getRecipeById(id);
    let canCraft = true;
    for (let i = 0; i < recipe["cost"].length; i++) {
        let ore = recipe["cost"][i]["ore"];
        let amt = recipe["cost"][i]["amt"] * recipe["multiplier"];
        if (oreList[ore]["normalAmt"] < amt) {
            canCraft = false; 
            break;
        }
    }
    if (canCraft) {
        for (let i = 0; i < recipe["cost"].length; i++) {
            let ore = recipe["cost"][i]["ore"];
            let amt = recipe["cost"][i]["amt"] * recipe["multiplier"];
            oreList[ore]["normalAmt"] -= amt;
            inventoryObj[ore] = 0;
        }
        for (let i = 0; i < recipe["result"].length; i++) {
            oreList[recipe["result"][i]["ore"]]["normalAmt"] += (recipe["result"][i]["amt"] * recipe["multiplier"]);
            inventoryObj[recipe["result"][i]["ore"]] = 0;
            multiplyRecipe(oreRecipes[id]["multiplier"]);
        }
    }
        
}
/*
4383 4576
19928 20978
30397 33246
37468 41654
46650 54781
*/
const upgradeRecipes = {
    "pickaxe27" : {
        "upgrade0" : 
        {
            recipe : [
                {ore: "🇩🇿", amt: 25},
                {ore: "🇸🇩", amt: 25},
                {ore: "🇺🇬", amt: 5},
                {ore: "🇰🇪", amt: 3},
            ],
            descriptions : [
                "Luck:<br>1 -> 3",
                "Ability Size:<br>4,383 -> 19,928"
            ]
        },
        "upgrade1" : 
        {
            recipe : [
                {ore: "🇪🇬", amt: 400},
                {ore: "🇪🇹", amt: 360},
                {ore: "🇳🇬", amt: 320},
                {ore: "🇹🇷", amt: 280},
                {ore: "🇮🇷", amt: 240},
                {ore: "🇻🇳", amt: 200},
                {ore: "🇵🇭", amt: 60},
            ],
            descriptions : [
                "Luck:<br>3 -> 10",
                "Ability Size:<br>19,928 -> 30,397"
            ]
        },
        "upgrade2" : 
        { 
            recipe : [   
                {ore: "🇨🇦", amt: 150},
                {ore: "🇲🇽", amt: 120},
                {ore: "🇺🇸", amt: 90},
                {ore: "🇳🇱", amt: 45},
                {ore: "🇷🇴", amt: 36},
                {ore: "🇺🇦", amt: 30},
                {ore: "🇵🇱", amt: 24},
            ],
            descriptions : [
                "Luck:<br>10 -> 20",
                "Ability Size:<br>30,397 -> 37,468"
            ]
        },
        "upgrade3" : 
        { 
            recipe : [   
                {ore: "🇬🇧", amt: 35},
                {ore: "🇩🇪", amt: 30},
                {ore: "🇷🇺", amt: 25},
                {ore: "🇺🇾", amt: 10},
                {ore: "🇵🇾", amt: 7},
                {ore: "🇧🇴", amt: 4},
            ],
            descriptions : [
                "Luck:<br>20 -> 40",
                "Ability Size:<br>37,491 -> 46,650"
            ]
        },
        "upgrade4" : 
        { 
            recipe : [   
                {ore: "🇵🇪", amt: 15},
                {ore: "🇦🇷", amt: 12},
                {ore: "🇨🇴", amt: 10},
                {ore: "🇧🇷", amt: 8},
                {ore: "🇼🇸", amt: 5},
                {ore: "🇳🇨", amt: 3},
                {ore: "🇵🇫", amt: 1},
            ],
            descriptions : [
                "Luck:<br>40 -> 100",
                "Ability Size:<br>46,650 -> 54,298"
            ]
        },
        //54298 63893
        
    }
}
let currentDisplayedUpgrade;
function displayUpgrade(id, location) {
    currentDisplayedUpgrade = {id: id, location: location};
    let holder = document.getElementById("upgradeRecipeHolder");
    while (holder.firstChild) holder.removeChild(holder.firstChild);
    location = location.parentElement;
    window.onmousemove = workshopMouse;
    if (player.upgrades[id].level >= player.upgrades[id].maxLevel) {
        if (location.lastChild.classList !== undefined) {
            if (location.lastChild.classList.contains("upgradeMaxLevel")) location.removeChild(location.lastChild);
        }
        const maxElement = document.createElement('p');
        maxElement.innerText = "Max Level Reached!";
        maxElement.classList = "upgradeMaxLevel";
        location.appendChild(maxElement);
        return;
    }
    const currentUpgrade = upgradeRecipes[id][`upgrade${player.upgrades[id].level}`].recipe;
    if (currentUpgrade === undefined) return;
    let element = document.createElement('p');
    element.classList = 'upgradeRecipeElement';
    let colors;
    let amt;
    let needed;
    let ore;
    let totalNeed = 0;
    let totalHave = 0;
    let count = 0;
    let totalCount = 0;
    currentUpgrade.forEach(recipeElement => {
        ore = recipeElement.ore;
        needed = recipeElement.amt;
        amt = oreList[ore]["normalAmt"];
        totalNeed += oreList[ore]["numRarity"] * needed;
        totalHave += amt >= needed ? (oreList[ore]["numRarity"] * needed) : (oreList[ore]["numRarity"] * amt);
        totalCount++;
        count += amt >= needed ? 1 : 0;
        element.innerText = `${ore} ${amt}/${needed}`;
        element.style.color = amt >= needed ? "#6BC267" : "#FF3D3D";
        colors = oreInformation.getColors(oreList[ore]["oreTier"]);
        element.style.backgroundImage = `linear-gradient(to right, black, ${colors["backgroundColor"]}, black)`;
        element.style.textShadow = "-0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff";
        element.setAttribute("onclick", `randomFunction("${ore}", "crafting")`);
        holder.appendChild(element.cloneNode(true));
    });
    const progressElement = document.createElement('p');
    progressElement.classList = "upgradeRecipeProgress";
    let percent = 100 * (totalHave/totalNeed);
    percent = Math.round(percent * 100) / 100
    if (count < totalCount && percent === 100) percent = 99.99; 
    progressElement.style.backgroundImage = `linear-gradient(to right, #6BC267 ${percent}%, #FF3D3D ${(percent + 5)}%)`;
    if (percent < 100) progressElement.innerText = percent + "%";
    else progressElement.innerText = "Can Upgrade!";
    holder.appendChild(progressElement);
    if (location.lastChild.id === "upgradeRecipeHolder") location.removeChild(location.lastChild);
    holder = holder.cloneNode(true);
    location.appendChild(holder);
    holder.style.display = "block";
} 
function updateDisplayedUpgrade() {
    updateUpgradeDisplay();
    if (document.getElementById("workshopContainer").style.display === "none" || currentDisplayedUpgrade === undefined) return;
    displayUpgrade(currentDisplayedUpgrade.id, currentDisplayedUpgrade.location);
}
function craftUpgrade(id) {
    if (player.upgrades[id].level >= player.upgrades[id].maxLevel) return;
    const currentUpgrade = upgradeRecipes[id][`upgrade${player.upgrades[id].level}`].recipe;
    if (currentUpgrade === undefined) return;
    for (let i = 0; i < currentUpgrade.length; i++) {
        let recipeElement = currentUpgrade[i];
        if (oreList[recipeElement.ore]["normalAmt"] < recipeElement.amt) return;
    }
    for (let i = 0; i < currentUpgrade.length; i++) {
        let recipeElement = currentUpgrade[i];
        oreList[recipeElement.ore]["normalAmt"] -= recipeElement.amt;
    }
    player.upgrades[id].level++;
    player.upgrades[id].bought++;
    updateDisplayedUpgrade();
    utilitySwitchActions();
    updateTolLuck();
}
let keepShowingUpgrade = false;
let lastShownUpgrade;
let overUpgrade = false;
function workshopMouse(event) {
    let parent = currentDisplayedUpgrade.location.parentElement
    let parentNums = parent.getBoundingClientRect();
    let bottomCheck = parentNums.bottom + 1;
    let leftCheck = parentNums.left;
    let rightCheck = parentNums.right;
    let topCheck = currentDisplayedUpgrade.location.getBoundingClientRect().top - 1;
    let heightToAdd = document.getElementById("upgradeRecipeHolder").getBoundingClientRect().height;
    overUpgrade = (event.clientY >= topCheck && event.clientY <= bottomCheck + heightToAdd && event.clientX >= leftCheck && event.clientX <= rightCheck);
    if (!overUpgrade) hideUpgrade()
}
function hideUpgrade() {
    lastShownUpgrade = currentDisplayedUpgrade.location;
    currentDisplayedUpgrade.location.parentElement.removeChild(currentDisplayedUpgrade.location.parentElement.lastChild);
    currentDisplayedUpgrade = undefined;   
    window.onmousemove = "";
}
function updateUpgradeDisplay() {
    let toEdit = document.getElementsByClassName("workshopInformationLevel");
    toEdit[0].innerText = `Level ${player.upgrades["pickaxe27"].level}/${player.upgrades["pickaxe27"].maxLevel}`;
    toEdit = document.getElementsByClassName("workshopInformationLevelDescriptor");
    
    let output = "";
    if (player.upgrades["pickaxe27"].level >= player.upgrades["pickaxe27"].maxLevel) {
        output = ""
    } else {
        let descriptions = upgradeRecipes["pickaxe27"][`upgrade${player.upgrades["pickaxe27"].level}`].descriptions;
        for (let i = 0; i < descriptions.length; i++) {
            output += `${descriptions[i]}<br>`;
        }
    }
    toEdit[0].innerHTML = output;
}
function updateTolLuck() {
    document.getElementById("treeOfLifeLuck").innerText = `Has ${player.upgrades["pickaxe27"].levelLuck[player.upgrades["pickaxe27"].level]}x Luck.`;
    document.getElementById("treeOfLifeSpeed").innerText = `${10 - player.upgrades["pickaxe27"].level}ms`;
}
const pickaxeStats = {
    0 : {mined: 1, revealed: 1, luck: 1, rate: 1, src: "⛏️"},
    1 : {mined: 24, revealed: 68, luck: 1.2, rate: 30, src: `<img class="mineImage" src="media/mulchMalletIcon.png"></img>`},
    2 : {mined: 47, revealed: 69, luck: 1.5, rate: 25, src: "⛏️"},
    3 : {mined: 46, revealed: 94, luck: 2.15, rate: 25, src: "⛏️"},
    4 : {mined: 81, revealed: 113, luck: 3, rate: 19, src: "⛏️"},
    5 : {mined: 45, revealed: 69, luck: 5, rate: 17, src: "⛏️"},
    6 : {mined: 57, revealed: 85, luck: 10, rate: 24, src: `<img class="mineImage" src="media/earthSoilerIcon.png"></img>`},
    7 : {mined: 275, revealed: 740, luck: 4, rate: 50, src: "⛏️"},
    8 : {mined: 461, revealed: 811, luck: 5.5, rate: 40, src: "⛏️"},
    9 : {mined: 188, revealed: 252, luck: 20, rate: 22, src: "⛏️"},
    10 : {mined: 973, revealed: 1195, luck: 17.5, rate: 50, src: "⛏️"},
    11 : {mined: 1018, revealed: 2993, luck: 30, rate: 100, src: "⛏️"},
    12 : {mined: 1541, revealed: 1861, luck: 75, rate: 150, src: `<img class="mineImage" src="media/wingsOfGloryIcon.png"></img>`},
    13 : {mined: 1, revealed: 1, luck: 1, rate: 1, src: `<img class="mineImage" src="media/theKeyIcon.png"></img>`},
    14 : {mined: 40, revealed: 51, luck: 1.05, rate: 45, src: "⛏️"},
    15 : {mined: 112, revealed: 140, luck: 1.075, rate: 75, src: "⛏️"},
    16 : {mined: 218, revealed: 292, luck: 1.3, rate: 100, src: "⛏️"},
    17 : {mined: 826, revealed: 936, luck: 1, rate: 150, src: `<img class="mineImage" src="media/nyabombIcon.png"></img>`},
    18 : {mined: 1005, revealed: 1160, luck: 1.5, rate: 150, src:  `<img class="mineImage" src="media/lunarLightsabreIcon.png"></img>`},
    19 : {mined: 656, revealed: 754, luck: 2, rate: 60, src: "⛏️"},
    20 : {mined: 1082, revealed: 1343, luck: 3, rate: 75, src: "⛏️"},
    21 : {mined: 1946, revealed: 4489, luck: 1.5, rate: 75, src: "⛏️"},
    22 : {mined: 2498, revealed: 5632, luck: 4, rate: 120, src: "⛏️"},
    23 : {mined: 4518, revealed: 6325, luck: 8.25, rate: 150, src: "⛏️"},
    24 : {mined: 7964, revealed: 9800, luck: 12.5, rate: 175, src: "⛏️"},
    25 : {mined: 15131, revealed: 18594, luck: 50, rate: 300, src: "⛏️"},
    26 : {mined: 15131, revealed: 18594, luck: 50, rate: 300, src: "⛏️"},
    27 : {
        0 : {mined: 4383, revealed: 4576, luck: 1},
        1 : {mined: 19928, revealed: 20978, luck: 3},
        2 : {mined: 30397, revealed: 33246, luck: 10},
        3 : {mined: 37468, revealed: 41654, luck: 20},
        4 : {mined: 46650, revealed: 54781, luck: 40},
        5 : {mined: 54298, revealed: 63893, luck: 100},
        rate: 500,
        src : "⛏️",
    },
    28 : {mined: 67, revealed: 111, luck: 2.1, rate: 20},
}
 
 
 
 
 
function ct() {
    const nums = calcSpeed();
    nums.speed = nums.speed < 1 ? 0 : nums.speed;
    const speed = (1000 / nums.speed) * nums.reps;
    const pickaxeUsing = player.stats.currentPickaxe;
    const abilityMined = pickaxeUsing !== 27 ? pickaxeStats[pickaxeUsing].mined : pickaxeStats[27][player.upgrades["pickaxe27"].level].mined;
    const abilityRevealed = pickaxeUsing !== 27 ? pickaxeStats[pickaxeUsing].revealed : pickaxeStats[27][player.upgrades["pickaxe27"].level].revealed;
    let m = 1;
    if (currentWorld < 2 && player.gears["gear8"]) m += 0.2;
    if (player.gears["gear23"]) m += 0.15;
    const abilityRate = pickaxeUsing !== 27 ? pickaxeStats[pickaxeUsing].rate/m : 500/m;
    const recipe = !overUpgrade ? recipes[currentRecipe].recipe : player.upgrades["pickaxe27"].level === player.upgrades["pickaxe27"].maxLevel ? "RETURN" : upgradeRecipes["pickaxe27"][`upgrade${player.upgrades["pickaxe27"].level}`].recipe;
    if (recipe === "RETURN") return;
    const recipeLayers = {
    }
    for (let i = 0; i < recipe.length; i++) {
        const ore = recipe[i].ore;
        if (!oreList[ore]["caveExclusive"] && oreList[ore]["oreTier"] !== "Celestial") {
            let currentOreLayer;
            if (oreInformation.isCommon(oreList[ore]["oreTier"]) && oreList[ore]["oreTier"]) {
                recipeLayers.commons ??= {highestRarity : 0}
                currentOreLayer = "commons";
            } else {
                for (let layer in layerDictionary) {
                    if (layerDictionary[layer].layer.includes(ore)) {
                        recipeLayers[layer] ??= {highestRarity : 0}
                        currentOreLayer = layer;
                        break;
                    }
                }
            }
            const needed = recipe[i].amt;
            let have = oreList[ore]["normalAmt"];
            have = have >= needed ? needed : have;
            const rarity = 1/oreList[ore]["decimalRarity"];
            const totalOreRarity = ((rarity * needed) - (rarity * have));
            if (totalOreRarity > recipeLayers[currentOreLayer].highestRarity) recipeLayers[currentOreLayer].highestRarity = totalOreRarity;
        }
    }
    //console.log(abilityMined, abilityRevealed, recipe, recipeLayers, abilityRate, speed)
    let rarityNeeded = 0;
    let usingCommons = false;
    if (recipeLayers.commons !== undefined) {
        for (let layer in recipeLayers) if (recipeLayers.commons.highestRarity >= recipeLayers[layer].highestRarity) usingCommons = true;
        if (Object.keys(recipeLayers).length === 1) usingCommons = true;
    }
    let procsNeeded;
    if (usingCommons) {
        for (let layer in recipeLayers) recipeLayers[layer].highestRarity = recipeLayers.commons.highestRarity;
        rarityNeeded = recipeLayers.commons.highestRarity * Object.keys(recipeLayers).length;
        procsNeeded = rarityNeeded / abilityMined;
    } else {
        for (let layer in recipeLayers) if (layer !== "commons") rarityNeeded += recipeLayers[layer].highestRarity;
        procsNeeded = rarityNeeded / abilityRevealed;
    }
    const timeForProcs = (procsNeeded * abilityRate) / speed;
    if (player.stats.currentPickaxe === 12) timeForProcs /= 2;
    return longTime(timeForProcs * 1000);
}