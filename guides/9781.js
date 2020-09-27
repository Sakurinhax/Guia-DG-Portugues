﻿// Velik's Sanctuary
//
// made by michengs / HSDN

let player, entity, library, effect;

let thirdboss_fifty = false;

function thirdboss_message_event(skillid, handlers, event, ent, dispatch) {
	switch (skillid) {
		// Lakan has noticed you.
		case 1043:
			if (!thirdboss_fifty) {
/*				handlers['text']({
					"sub_type": "notification",
					"message": "Debuff (Perto)",
					"message_RU": "ДКБ"
				});*/
			} else {
/*				handlers['text']({
					"sub_type": "notification",
					"message": "Debuffs > Bombs > Circles 2",
					"message_RU": "ДБК"
				});*/
			}
			break;
		// Lakan is trying to take you on one at a time.
		case 1044:
			if (!thirdboss_fifty) {
/*				handlers['text']({
					"sub_type": "notification",
					"message": "Circles > Bombs > Debuffs 3",
					"message_RU": "КБД"
				});*/
			} else {
/*				handlers['text']({
					"sub_type": "notification",
					"message": "Circles > Debuffs > Bombs 4",
					"message_RU": "КДБ"
				});*/
			}
			break;
		// Lakan intends to kill all of you at once.
		case 1045:
			if (!thirdboss_fifty) {
/*				handlers['text']({
					"sub_type": "notification",
					"message": "Bombas > Debuffs > Circles 5",
					"message_RU": "БДК"
				});*/
			} else {
/*				handlers['text']({
					"sub_type": "notification",
					"message": "Bombs (juntar + Cleanse)",
					"message_RU": "БКД"
				});*/
			}
			break;
	}
}

function thirdboss_start_event() {
	thirdboss_fifty = false;
}

function thirdboss_fifty_event() {
	thirdboss_fifty = true;
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 1 BOSS
	
	"s-781-1000-2401": [
		{ "type": "text", "sub_type": "message", "message": "DIREITO", "message_RU": "Откид вправо" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 300, 100, 0, 2000, true, null] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 230, 100, 0, 2000, true, null] }
	],
	"s-781-1000-2402": [
		{ "type": "text", "sub_type": "message", "message": "ESQUERDO", "message_RU": "Откид влево" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 60, 100, 0, 2000, true, null] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 130, 100, 0, 2000, true, null] }
	],
	"s-781-1000-2304-0": [{ "type": "text", "sub_type": "message", "message": "Voar", "message_RU": "Взлет" }, { "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 10, 300, 0, 6000] }],
	"s-781-1000-2303-0": [{ "type": "text", "sub_type": "message", "message": "GIRAR", "message_RU": "Крутилка" }],
	"s-781-1000-2301-0": [{ "type": "text", "sub_type": "message", "message": "Veneno Geral", "message_RU": "Крутилка" }], //Adicionado
	"s-781-1000-2113-0": [{ "type": "text", "sub_type": "message", "message": "Frente + AOEs", "message_RU": "Передняя | AOE" }],
	"s-781-1000-2308-0": [{ "type": "text", "sub_type": "message", "message": "SAIR", "message_RU": "Наружу" }],
	"s-781-1000-2309-0": [{ "type": "text", "sub_type": "message", "message": "ENTRAR", "message_RU": "Внутрь" }],
	"s-781-1000-1401": [
		{ "type": "text", "sub_type": "message", "message": "DIREITO", "message_RU": "Откид вправо" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 300, 100, 0, 2000, true, null] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 230, 100, 0, 2000, true, null] }
	],
	"s-781-1000-1402": [
		{ "type": "text", "sub_type": "message", "message": "ESQUERDO", "message_RU": "Откид влево" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 60, 100, 0, 2000, true, null] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 130, 100, 0, 2000, true, null] }
	],
	"s-781-1000-1304-0": [{ "type": "text", "sub_type": "message", "message": "Voar", "message_RU": "Взлет" }, { "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 10, 300, 0, 6000] }],
	"s-781-1000-1303-0": [{ "type": "text", "sub_type": "message", "message": "Girar", "message_RU": "Крутилка" }],
    "s-781-1000-1301-0": [{ "type": "text", "sub_type": "message", "message": "Veneno Geral", "message_RU": "Крутилка" }],  // Adicionado
	"s-781-1000-1113-0": [{ "type": "text", "sub_type": "message", "message": "Frente + AOEs", "message_RU": "Передняя | AOE" }],
	"s-781-1000-1308-0": [{ "type": "text", "sub_type": "message", "message": "SAIR", "message_RU": "Наружу" }],
	"s-781-1000-1309-0": [{ "type": "text", "sub_type": "message", "message": "ENTRAR", "message_RU": "Внутрь" }],
	//"qb-781-1000-78102": [{"type": "text","sub_type": "message","message": "Run away","message_RU": "Уходи!"}],
	//"qb-781-1000-78103": [{"type": "text","sub_type": "message","message": "点名炸石柱","message_RU": "点名炸石柱"}], // круг на одного
	//"qb-781-1000-78106": [{"type": "text","sub_type": "message","message": "集体炸石柱","message_RU": "集体炸石柱"}], // круги на всех


	// 2 BOSS

	// Cage Mechanic
	//"s-781-2000-1503-0": [{"type": "text","sub_type": "message","message": "坦快跑远","message_RU": "坦快跑远"}], // наткнул
	"s-781-2000-1106-0": [{ "type": "text", "sub_type": "message", "message": "Atras", "message_RU": "Задний" }],
	"s-781-2000-1108-0": [{ "type": "text", "sub_type": "message", "message": "Frente", "message_RU": "Передний" }],
	"s-781-2000-1111-0": [{ "type": "text", "sub_type": "message", "message": "Ataque 360", "message_RU": "Круговая" }],
	"s-781-2000-1134-0": [{ "type": "text", "sub_type": "message", "message": "Debuff","message_RU": "Круговая" }],
	"s-781-2000-1302-0": [{ "type": "text", "sub_type": "message", "message": "Bait", "message_RU": "Байт" }],
	//"s-781-2000-1121-0": [{"type": "text","sub_type": "message","message": "Summon Mobs","message_RU": "Призыв мобов"}],
	"s-781-2000-1501-0": [
		{ "type": "text", "sub_type": "message", "message": "Identification", "message_RU": "Идентификация" },
		{ "type": "text", "sub_type": "message", "delay": 1000, "message": "3" },
		{ "type": "text", "sub_type": "message", "delay": 2000, "message": "2" },
		{ "type": "text", "sub_type": "message", "delay": 3000, "message": "1" }
	],
	//"s-781-2000-1112-0": [{"type": "func","func": single_stage_callout.bind(null, "STAB + KNOCKUP")}],
	"s-781-2000-1130-0": [
		{ "type": "text", "sub_type": "message", "message": "Esquerdo", "message_RU": "Откид влево" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 60, 100, 0, 2000, true, null] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 130, 100, 0, 2000, true, null] }
	],
	"s-781-2000-1131-0": [
		{ "type": "text", "sub_type": "message", "message": "Direito", "message_RU": "Откид вправо" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 300, 100, 0, 2000, true, null] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 230, 100, 0, 2000, true, null] }
	],
	//"s-781-2000-1134-0": [{"type": "func","func": single_stage_callout.bind(null, "吃注视")}], // удар черенком
	//"s-781-2000-1502-0": [{"type": "func","func": single_stage_callout.bind(null, "鉴定准备")}], // ?
	//"s-781-2000-2503-0": [{"type": "text","sub_type": "message","message": "坦快跑远","message_RU": "坦快跑远"}], // дурион выбрал цель

	"s-781-2000-2106-0": [{ "type": "text", "sub_type": "message", "message": "Atras", "message_RU": "Задний" }],
	"s-781-2000-2108-0": [{ "type": "text", "sub_type": "message", "message": "Frente", "message_RU": "Передний" }],
	"s-781-2000-2111-0": [{ "type": "text", "sub_type": "message", "message": "Ataque 360", "message_RU": "Круговая" }],
	"s-781-2000-2134-0": [{ "type": "text", "sub_type": "message", "message": "Debuff", "message_RU": "Круговая" }],
	//"s-781-2000-2121-0": [{"type": "text","sub_type": "message","message": "Summon Mobs","message_RU": "Призыв мобов"}],
	"s-781-2000-2501-0": [
		{ "type": "text", "sub_type": "message", "message": "Identificacao", "message_RU": "Идентификация" },
		{ "type": "text", "sub_type": "message", "delay": 1000, "message": "3" },
		{ "type": "text", "sub_type": "message", "delay": 2000, "message": "2" },
		{ "type": "text", "sub_type": "message", "delay": 3000, "message": "1" }
	],
	//"s-781-2000-2112-0": [{"type": "func","func": single_stage_callout.bind(null, "STAB + KNOCKUP")}], // ?
	"s-781-2000-2130-0": [{ "type": "text", "sub_type": "message", "message": "ESQUERDO", "message_RU": "Откид влево" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 60, 100, 0, 2000, true, null] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 130, 100, 0, 2000, true, null] }
	],
	"s-781-2000-2131-0": [{ "type": "text", "sub_type": "message", "message": "DIREITO", "message_RU": "Откид вправо" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 300, 100, 0, 2000, true, null] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 230, 100, 0, 2000, true, null] }
	],
	//"s-781-2000-2134-0": [{"type": "func","func": single_stage_callout.bind(null, "吃注视")}], // удар черенком
	//"s-781-2000-2502-0": [{"type": "func","func": single_stage_callout.bind(null, "鉴定准备")}], // ?
	//"s-781-2000-4000-0": [{"type": "text","sub_type": "alert","message": "鉴定！！！！","message_RU": "Дискотека！"}],
	
	//"dm-0-0-9781022": [{"type": "text","sub_type": "alert","message": "鉴定","message_RU": "鉴定"}],
	//"dm-0-0-9781023": [{"type": "text","sub_type": "message","message": "全场鉴定","message_RU": "全场鉴定"}],
	"dm-0-0-9781046": [{ "type": "text", "sub_type": "message", "message": "First: (Debuffs) Closest", "message_RU": "[ДКБ] Первая: дебафф (ближние)" }], // Thank you... for this release...
	"dm-0-0-9781047": [{ "type": "text", "sub_type": "message", "message": "First: (Circles) Spread", "message_RU": "[КБД] Первая: круги (отдельно)" }], // Beware the... red lightning...
	"dm-0-0-9781048": [{ "type": "text", "sub_type": "message", "message": "First: (Bombs) Gather + cleanse", "message_RU": "[БДК] Первая: бомбы (вместе + клинс)" }], // Beware the mark... of Lakan...  


	// 3 BOSS
	"h-781-3000-99": [{ "type": "func", "func": thirdboss_start_event }],
	"h-781-3000-50": [{ "type": "func", "func": thirdboss_fifty_event }],
	"dm-0-0-9781043": [{ "type": "func", "func": thirdboss_message_event.bind(null, 1043) }], // Lakan has noticed you.
	"dm-0-0-9781044": [{ "type": "func", "func": thirdboss_message_event.bind(null, 1044) }], // Lakan is trying to take you on one at a time.
	"dm-0-0-9781045": [{ "type": "func", "func": thirdboss_message_event.bind(null, 1045) }], // Lakan intends to kill all of you at once.

	"s-781-3000-1404-0": [{ "type": "text", "sub_type": "message", "message": "(Debuff) Perto", "message_RU": "Дебафф (ближние)" }],
	"s-781-3000-1405-0": [{ "type": "text", "sub_type": "message", "message": "(Debuff) Longe", "message_RU": "Дебафф (дальние)" }],
	"s-781-3000-1301-0": [{ "type": "text", "sub_type": "message", "message": "(Bombas) Juntar + Cleanse", "message_RU": "Бомбы (вместе!) + клинс" }],
	"s-781-3000-1302-0": [{ "type": "text", "sub_type": "message", "message": "(Bombas) Juntar No cleanse", "message_RU": "Бомбы (вместе!) + без клинса" }],
	"s-781-3000-3103-0": [{ "type": "text", "sub_type": "message", "message": "(Raios) Espalhar", "message_RU": "Круги (отдельно!)" }],
	"s-781-3000-3105-0": [{ "type": "text", "sub_type": "message", "message": "(Raios) Juntar", "message_RU": "Круги (вместе!)" }],
	"s-781-3000-1116-0": [{ "type": "text", "sub_type": "message", "message": "Empurrar Atras | Stun Frontal", "message_RU": "Волны" }],
	"s-781-3000-2116-0": [{ "type": "text", "sub_type": "message", "message": "Empurrar Atras | Stun Frontal", "message_RU": "Круг" }],
	"s-781-3000-1136-0": [{ "type": "text", "sub_type": "message", "message": "Claw", "message_RU": "Когти" }],
	"s-781-3000-1701-0": [{ "type": "text", "sub_type": "message", "message": "Empurrar atras | Ataque Frontal ", "message_RU": "Назад + Вперед" }],
	"s-781-3000-1113-0": [{ "type": "text", "sub_type": "message", "message": "Bait", "message_RU": "Байт" }],
	"s-781-3000-1151-0": [{ "type": "text", "sub_type": "message", "message": "Stun + Tres capturas)", "message_RU": "Стан" }],
	"s-781-3000-2151-0": [{ "type": "text", "sub_type": "message", "message": "Atencao stun", "message_RU": "Стан" }],
	"s-781-3000-2113-0": [{ "type": "text", "sub_type": "message", "message": "Bait", "message_RU": "Байт" }],
	"s-781-3000-1152-0": [{ "type": "text", "sub_type": "message", "message": "Stun Frontal | Empurrar Atras", "message_RU": "Стан + Откид назад" }],
	"s-781-3000-2152-0": [{ "type": "text", "sub_type": "message", "message": "Stun Frontal | Empurrar Atras ", "message_RU": "Стан + Откид назад" }],
	"s-781-3000-2138-0": [{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 10, 250, 0, 6000] }],
	"s-781-3000-1138-0": [{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 10, 250, 0, 6000] }],
	"s-781-3000-1144-0": [{ "type": "text", "sub_type": "message", "message": "SAIR", "message_RU": "Наружу" }],
	"s-781-3000-1145-0": [{ "type": "text", "sub_type": "message", "message": "ENTRAR", "message_RU": "Внутрь" }],
	"s-781-3000-1240-0": [{ "type": "text", "sub_type": "message", "message": "Donuts", "message_RU": "Бублики" }, { "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 10, 350, 0, 6000] }],
	"s-781-3000-1401-0": [{ "type": "text", "sub_type": "message", "message": "Dissipar", "message_RU": "Регресс!!" }],
	"s-781-3000-1402-0": [{ "type": "text", "sub_type": "message", "message": "Dormir", "message_RU": "Слип!!" }]
};