// Ruinous Manor (Normal)
// made by Emilia-s2 / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;
	
	return {
	// 1 BOSS
		"nd-770-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-770-1000-1206-0": [{ type: "text", sub_type: "message", message_PT: "Pular Atrás", message_RU: "nao sei russo :c desculpa" }],
		"s-770-1000-2206-0": [{ type: "text", sub_type: "message", message_PT: "Pular Atrás", message_RU: "nao sei russo :c desculpa" }],
		"s-770-1000-1106-0": [{ type: "text", sub_type: "message", message_PT: "Salto Frente Stun (Iframe)", message_RU: "nao sei russo :c desculpa" }],
		"s-770-1000-2106-0": [{ type: "text", sub_type: "message", message_PT: "Salto Frente Stun (Iframe)", message_RU: "nao sei russo :c desculpa" }],
		"s-770-1000-1107-0": [{ type: "text", sub_type: "message", message_PT: "Frente Empurrar 1", message_RU: "nao sei russo :c desculpa" },
			{ type: "spawn", func: "semicircle", args: [320, 404, 553, 0, 0, 7, 405, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 406, 400, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -406, 400, 0, 3500] }
		],
		"s-770-1000-2107-0": [{ type: "text", sub_type: "message", message_PT: "Frente Empurrar 2", message_RU: "nao sei russo :c desculpa" },
			{ type: "spawn", func: "semicircle", args: [320, 404, 553, 0, 0, 7, 405, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 406, 400, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -406, 400, 0, 3500] }
		],
		"s-770-1000-1117-0": [{ type: "text", sub_type: "message", message_PT: "Esmagar Frente", message_RU: "nao sei russo :c desculpa" }],
		"s-770-1000-2117-0": [{ type: "text", sub_type: "message", message_PT: "Esmagar Frente", message_RU: "nao sei russo :c desculpa" }],
	
	// 2-3 BOSS
			"nd-770-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-770-3000-1102-0": [{ type: "text", sub_type: "message", message_PT: "Mão Esquerda", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-2102-0": [{ type: "text", sub_type: "message", message_PT: "Mão Esquerda", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1101-0": [{ type: "text", sub_type: "message", message_PT: "Mão direita", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-2101-0": [{ type: "text", sub_type: "message", message_PT: "Mão direita", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1103-0": [{ type: "text", sub_type: "message", message_PT: "Cauda Golpe", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-2103-0": [{ type: "text", sub_type: "message", message_PT: "Cauda Golpe", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1301-0": [{ type: "text", sub_type: "message", message_PT: "Círculos Explosivos", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-2301-0": [{ type: "text", sub_type: "message", message_PT: "Círculos Explosivos", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1110-0": [{ type: "text", sub_type: "message", message_PT: "Cauda AOE (pule na frente)", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-2110-0": [{ type: "text", sub_type: "message", message_PT: "Cauda AOE (pule na frente)", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1304-0": [{ type: "text", sub_type: "message", message_PT: "Prepare-se! (para dentro e fora)", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1303-0": [{ type: "text", sub_type: "message", message_PT: "Prepare-se! (para dentro e fora)", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1113-0": [{ type: "text", sub_type: "message", message_PT: "SAIR | ENTRAR", message_RU: "nao sei russo :c desculpa" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] }
		],
		"s-770-3000-2113-0": [{ type: "text", sub_type: "message", message_PT: "SAIR | ENTRAR", message_RU: "nao sei russo :c desculpa" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] }
		],
		"s-770-3000-1116-0": [{ type: "text", sub_type: "message", message_PT: "ENTRAR | SAIR", message_RU: "nao sei russo :c desculpa" },
			{ type: "spawn", func: "circle", args: [false, 553,0, 0, 15, 300, 0, 5000] }
		],
		"s-770-3000-2116-0": [{ type: "text", sub_type: "message", message_PT: "ENTRAR | SAIR", message_RU: "nao sei russo :c desculpa" },
			{ type: "spawn", func: "circle", args: [false, 553,0, 0, 15, 300, 0, 5000] }
		],	
		"s-770-3000-1318-0": [{ type: "text", sub_type: "message", message_PT: "OBTER CRÂNIO VERMELHO!", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1317-0": [{ type: "text", sub_type: "message", message_PT: "OBTER CRÂNIO VERMELHO!", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1319-0": [{ type: "text", sub_type: "message", message_PT: "OBTER CRÂNIO VERMELHO", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1322-0": [{ type: "text", sub_type: "message", message_PT:"Iframe os Padrões!", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1311-0": [{ type: "text", sub_type: "message", message_PT: "Juntar Para Limpar", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-1120-0": [{ type: "text", sub_type: "message", message_PT: "Cabeças Disparar", message_RU: "nao sei russo :c desculpa" }],
		"s-770-3000-2120-0": [{ type: "text", sub_type: "message", message_PT: "Cabeças Disparar", message_RU: "nao sei russo :c desculpa" }],
	};
};