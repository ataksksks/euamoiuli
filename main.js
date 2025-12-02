const dicas = [
    "Ele é muito lindo e o nome dele começa com I 😍",
    "Ele tem o sorriso mais perfeito do mundo ✨",
    "Ele é o amor da vida de Mariana Pontes 💖",
    "Ele é muito sigma 😎",
    "Ele é o menino mais cheiroso do mundo 🌸",
    "A cor favorita dele é vermelho ❤️",
    "As frutas favoritas dele são manga(rosa), melancia, melão(japonês), mamão e laranja 🥭",
    "Ele gosta de sorvete de chocolate 🍦",
    "O primeiro anime que ele assistiu foi Super 11 ⚽",
    "O pokémon favorito de todos os tempos é o Swampert",
    "A região favorita dele é Hoenn",
    "A raça de cachorro favorita dele é Beagle 🐶",
    "Ele ama muito a menina dele (Mariana Pontes) 💘"
];


function addLog(msg, tipo) {
    const log = document.getElementById('log');
    const div = document.createElement('div');
    div.className = 'msg ' + tipo;
    div.textContent = msg;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
}

function respostas(r) {
    const texto = r.toLowerCase();

    if (texto.includes('marco') || texto.includes('kael') || texto.includes('marquinhos') || texto.includes('jabes') || texto.includes('gabriel')) {
        addLog("Óbvio que não, meu menino moga ele! Tente novamente!", 'bot');
    } else if (texto.includes('anand') || texto.includes('jorge') || texto.includes('johannes')) {
        addLog("Passou longe! Tente novamente!", 'bot');
    } else if (texto.includes('leo')) {
        addLog("Só se nascer idêntico ao pai e olhe lá. Tente novamente!", 'bot');
    } else if (texto.includes('mariana') || texto.includes('minha menina') || texto.includes('minha princesa') || texto.includes('mari')) {
        addLog("Não não não, é o meu menino! Tente novamente!", 'bot');
    } else if (texto == 'iu' || texto == 'iur'){
        addLog("Quase! Tente novamente!", 'bot');
    } else {
        addLog("Tente novamente!", 'bot');
    }
}

function ehAcerto(r) {
    if (!r) return false;
    const t = r.toLowerCase();
    const compact = t.replace(/\s+/g, "");
    return compact.includes('iuri') || compact.includes('iurinho');
}

let tentativas = 0;
let aguardandoDica = false;

function enviar() {
    const input = document.getElementById('input');
    const r = input.value.trim();
    if (!r) return;

    addLog(r, 'user');

    if (aguardandoDica) {
        const t = r.toLowerCase();

        if (t === 's') {
            const dica = dicas[Math.floor(Math.random() * dicas.length)];
            addLog("💡 Dica: " + dica, 'bot');
            aguardandoDica = false;
            input.value = '';
            return;
        }

        if (t === 'n') {
            addLog("Tudo bem... continue tentando!", 'bot');
            aguardandoDica = false;
            input.value = '';
            return;
        }

        addLog("Responda apenas com 's' ou 'n'.", 'bot');
        input.value = '';
        return;
    }

    tentativas++;

    if (ehAcerto(r)) {
        addLog("ACERTOU!!!! É O MEU IURINHO ❤️", 'bot');
        input.value = '';
        return;
    }

    if (tentativas % 10 === 0) {
        addLog("Quer uma dica? (s/n)", 'bot');
        aguardandoDica = true;
        input.value = '';
        return;
    }

    respostas(r);
    input.value = '';
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");

    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault(); 
            enviar();
        }
    });
});
