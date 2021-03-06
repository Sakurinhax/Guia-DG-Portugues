// Ruinous Manor (Difícil)
// made by Emilia-s2 / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		// 3 BOSS

		"nd-970-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		// 3 BOSS

		"s-970-3000-1102-0": [{ type: "text", sub_type: "message", message_PT: "Mão Esquerda", message_RU: "Левая рука" }],
		"s-970-3000-2102-0": [{ type: "text", sub_type: "message", message_PT: "Mão Esquerda", message_RU: "Левая рука" }],
		"s-970-3000-1101-0": [{ type: "text", sub_type: "message", message_PT: "Mão Direita", message_RU: "Правая рука" }],
		"s-970-3000-2101-0": [{ type: "text", sub_type: "message", message_PT: "Mão Direita", message_RU: "Правая рука" }],
		"s-970-3000-1103-0": [{ type: "text", sub_type: "message", message_PT: "Cauda Slam", message_RU: "Хвост" }],
		"s-970-3000-2103-0": [{ type: "text", sub_type: "message", message_PT: "Cauda Slam", message_RU: "Хвост" }],
		"s-970-3000-1301-0": [{ type: "text", sub_type: "message", message_PT: "Círculos Explosivos", message_RU: "Круги" }],
		"s-970-3000-2110-0": [{ type: "text", sub_type: "message", message_PT: "Cauda AOE (Pule para Frente)", message_RU: "Хвост АОЕ (прыгать вперед)" }],
		"s-970-3000-1110-0": [{ type: "text", sub_type: "message", message_PT: "Cauda AOE (Pule para Frente)", message_RU: "Хвост АОЕ (прыгать вперед)" }],
		"s-970-3000-1304-0": [{ type: "text", sub_type: "message", message_PT: "Prepare-se! (Para Dentro e Fora!", message_RU: "Готовность!" }],
		"s-970-3000-1303-0": [{ type: "text", sub_type: "message", message_PT: "Prepare-se! (Para Dentro e Fora!", message_RU: "Готовность!" }],
		"s-970-3000-2113-0": [{ type: "text", sub_type: "message", message_PT: "SAIR - ENTRAR", message_RU: "От него > К нему" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] }
		],		
		"s-970-3000-1113-0": [{ type: "text", sub_type: "message", message_PT: "SAIR - ENTRAR", message_RU: "От него > К нему" }, 
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] }
		],
		"s-970-3000-2116-0": [{ type: "text", sub_type: "message", message_PT: "ENTRAR - SAIR", message_RU: "К нему > От него" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] }
		],		
		"s-970-3000-1116-0": [{ type: "text", sub_type: "message", message_PT: "ENTRAR - SAIR", message_RU: "К нему > От него" }, 
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] }
		],		
		"s-970-3000-1318-0": [{ type: "text", sub_type: "message", message_PT: "Pegue a Cabeça Vermelha!!", message_RU: "Взять красную голову!" }],
		"s-970-3000-1317-0": [{ type: "text", sub_type: "message", message_PT: "Pegue a Cabeça Vermelha!!", message_RU: "Взять красную голову!" }],
		"s-970-3000-1319-0": [{ type: "text", sub_type: "message", message_PT: "Pegue a Cabeça Vermelha!!", message_RU: "Взять красную голову!" }],
		"s-970-3000-1322-0": [{ type: "text", sub_type: "message", message_PT: "Esquiva dos Padrões", message_RU: "Эвейд!" }],
		"s-970-3000-1311-0": [{ type: "text", sub_type: "message", message_PT: "Juntar para Cleanse", message_RU: "Очищение" }]
	};
};