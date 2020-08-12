/*

var asyncUser = require("./asyncUser");
var ls = require("./ls");

var outputs = {
    wait: "Válassz egy színt:\n\n:red_circle: **Piros** ||x2||\n:black_circle: **Fekete** ||x2||\n:green_apple: **Zöld** ||x12||",
    green: function(message) { return `Szerencse ${message.author.username}, a golyó a **Zöldön** landolt és megnyerted a téted **12x**-ét!!!` },
    redBlack: function(message, guess) { return `${message.author.username}, sikeresen játék:${guess.toLowerCase()}: **${guess}** megnyerted a téted **2x**-esét!` },
    fail: function(message, loss, landed) { return `Balszerencse ${message.author.username}, a golyó a/az  ${landed} ladnolt és te vesztettél **$${loss}**...` }
}

function wheel(args, ifprofile, prefix, message) {
    if (args) {
        var color = args;
    }
    else {
        return "Kérlek válassz egy színt!.";
    }
    if (color && (color.toLowerCase() == "zöld" || color.toLowerCase() == "fekete" || color.toLowerCase() == "piros") && ifprofile && typeof color === " " && asyncUser.getUserObj(message.author).awaitRoulette) {
        var bet = Number(asyncUser.getUserObj(message.author).currentRouletteBet);
        asyncUser.setAwaitObj(message.author, false);
        if (bet <= Number(ifprofile)) {
            var probability = Math.floor(Math.random() * 39);
            if (probability == 0) {
                //Green
                var final = bet * 12;
                asyncUser.setBetObj(message.author, false);
                ls.remove(message.author.id + "asyncUserObj");
                if (color.toLowerCase() == "zöldn") {
                    ls.set(message.author.id + "profile", Number(ls.get(message.author.id + "profile")) + final);
                    return outputs.green(message);
                }
                else {
                    ls.set(message.author.id + "profile", Number(ls.get(message.author.id + "profile")) - bet);
                    return outputs.fail(message, bet, ":green_apple: Green");
                }
            }
            else if (probability % 2 == 0) {
                //Black
                var final = bet;
                asyncUser.setBetObj(message.author, false);
                ls.remove(message.author.id + "asyncUserObj");
                if (color.toLowerCase() == "fekete") {
                    ls.set(message.author.id + "profile", Number(ls.get(message.author.id + "profile")) + final);
                    return outputs.redBlack(message, "fekete");
                }
                else {
                    ls.set(message.author.id + "profile", Number(ls.get(message.author.id + "profile")) - bet);
                    return outputs.fail(message, bet, ":black_circle: fekete");
                }
            }
            else {
                //Red
                var final = bet;
                asyncUser.setBetObj(message.author, false);
                ls.remove(message.author.id + "asyncUserObj");
                if (color.toLowerCase() == "piros") {
                    ls.set(message.author.id + "profile", Number(ls.get(message.author.id + "profile")) + final);
                    return outputs.redBlack(message, "piros");
                }
                else {
                    ls.set(message.author.id + "profile", Number(ls.get(message.author.id + "profile")) - bet);
                    return outputs.fail(message, bet, ":red_circle: piros");
                }
            }
        }
        else {
            return `Jó próba, ${message.author.username}, de te nem rendelkezel ennyi pénzel!`;
        }
    }
    else if (!ifprofile) {
        return `Készíts egy profilt elősször! ${prefix}create`;
    }
    else if (!asyncUser.getUserObj(message.author).awaitRoulette) {
        return `Tegyél fel egy tétet ${prefix}roulette [bet]`;
    }
    else {
        return `Kérlek válassz egy színt (fekete, piros, zöld). A prefixet nem kell elé írni!`; 
    }
}

function synchronous(args, ifprofile, prefix, message) {
    if (args) {
        var amount = Number(args[0]);
    }
    else {
        return "Kérlek tedd fel a téted!.";
    }
    if (amount && amount > 0 && ifprofile && amount <= Number(ifprofile) && typeof amount === "number" && !asyncUser.getUserObj(message.author).awaitRoulette) {
        asyncUser.setBetObj(message.author, amount);
        asyncUser.setAwaitObj(message.author, true);
        return `**Feltett pénz: $${amount.toLocaleString()}**\n${outputs.wait}`;
    }
    else if (!ifprofile) {
        return `Készíts egy profilt elősször! ${prefix}create`;
    }
    else if (asyncUser.getUserObj(message.author).awaitRoulette) {
        return "Bent vagy egy játéka! Kérlek írj egy színt (Fekete, Piros, Zöld)";
    }
    else {
        return `Kérlek annyit írj be ami van is az egyenlegeden! Ha nem tudod az egyenlegedet akkor a : ${prefix}balance tudod megnézni!`; 
    }
}

module.exports = {
    spin: wheel,
    specifyBet: synchronous
}

*/