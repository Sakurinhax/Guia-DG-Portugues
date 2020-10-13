// Corrupted Skynest (Dificil)
//
// made by michengs / HSDN / ZC

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	const { player } = dispatch.require.library;
	const { MARKER_ITEM } = module.parent.exports.spawn;

	let debuff = null;
	let timer1 = null;
	let timer2 = null;
	let timer3 = null;
	let timer4 = null;
	let timer5 = null;
	let boss_ent = null;
	let boss_offset = 0;
	let qbacting = null;
	let blue = false;
	let red = false;
	let debuff_tracker_started = false;

	const mech_messages = {
		0: { message_PT: "ENTRAR", message_RU: "К НЕМУ" },
		1: { message_PT: "SAIR", message_RU: "ОТ НЕГО" },
		2: { message_PT: "ESQUERDA", message_RU: "Лево" },
		3: { message_PT: "DIREITA", message_RU: "Право" }
	};

	const qbacting_messages = {
		0: { message_PT: "Diferente", message_RU: "разные" },
		1: { message_PT: "Igual", message_RU: "одинаковые" }
	};

	const debuff_messages = {
		0: { message_PT: "Pronto para obter o Debuff de FOGO", message_RU: "Готовность к переключению на Огонь" },
		1: { message_PT: "Pronto para obter o Debuff de GELO", message_RU: "Готовность к переключению на Лед" }
	};

	// NULL % 2 = 0
	//    1 % 2 = 1
	//    0 % 2 = 0
	//    2 % 2 = 0

	function spawn_marker(out) {
		if (!boss_ent) return;

		let distance = 220;
		let caption = "IN";

		if (out) {
			distance = 620;
			caption = "OUT";
		}

		handlers.event([
//			{ type: "spawn", func: "marker", args: [false, 45 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] },
//			{ type: "spawn", func: "marker", args: [false, 135 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] },
//			{ type: "spawn", func: "marker", args: [false, 225 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] },
//			{ type: "spawn", func: "marker", args: [false, 315 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] }
		], boss_ent);
	}

	function debuff_added(id) {
		debuff_removed();
		debuff = id; // debuff event id

		timer1 = dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers.text({
					sub_type: "message",
					message_PT: "Fim o Debuff em 20 segundos",
					message_RU: "Дебафф 20 сек."
				});
			}
		}, 50000);

		timer2 = dispatch.setTimeout(() => {
			if (debuff != null) {
				dispatch.setTimeout(() => {
					handlers.text({
						sub_type: "alert",
						message_PT: (`${debuff_messages[debuff % 2].message}`),
						message_RU: (`${debuff_messages[debuff % 2].message_RU}`)
					});
				}, 2000);
/*				handlers.text({
					sub_type: "message",
					message_PT: "Debuff 50 seconds",
					message_RU: "Дебафф 50 сек."
				});*/
			}
		}, 70000);

		timer3 = dispatch.setTimeout(() => {
			if (debuff != null) {
/*				handlers.text({
					sub_type: "message",
					message_PT: "Warning! Debuff 15 seconds",
					message_RU: "Дебафф 15 сек."
				});*/
			}
		}, 55000);

		timer4 = dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers.text({
					sub_type: "message",
					message_PT: "Fim do Debuff em 10 segundos",
					message_RU: "Дебафф 10 сек."
				});
			}
		}, 60000);

		timer5 = dispatch.setTimeout(() => {
			if (debuff != null) {
/*				handlers.text({
					sub_type: "message",
					message_PT: "Warning! Debuff 5 seconds",
					message_RU: "Дебафф 5 сек."
				});*/
			}
		}, 65000);

		if (blue) {
			handlers.text({
				sub_type: "message",
				message_PT: (`${mech_messages[(qbacting + debuff + 1) % 2].message}`),
				message_RU: (`${mech_messages[(qbacting + debuff + 1) % 2].message_RU}`)
			});

			spawn_marker((qbacting + debuff + 1) % 2);
		} else if (red) {
			handlers.text({
				sub_type: "message",
				message_PT: (`${mech_messages[(qbacting + debuff) % 2].message}`),
				message_RU: (`${mech_messages[(qbacting + debuff) % 2].message_RU}`)
			});

			spawn_marker((qbacting + debuff) % 2);
		}
	}

	function debuff_removed() {
		debuff = null;
		dispatch.clearTimeout(timer1);
		dispatch.clearTimeout(timer2);
		dispatch.clearTimeout(timer3);
		dispatch.clearTimeout(timer4);
		dispatch.clearTimeout(timer5);
	}

	function skilld_event(skillid, ent) {
		const abnormality_change = (added, event) => {
			// Fire/Ice debuff
			if (player.isMe(event.target.toString()) && [30260001, 30260002, 31260001, 31260002].includes(event.id)) {
				if (added) {
					debuff_added(event.id);
				} else {
					debuff_removed();
				}
			}

			// Argon Priest Essence buff
			if (player.isMe(event.target.toString()) && [30261701, 31261701].includes(event.id)) {
				if (added && boss_ent) {
					handlers.spawn({ // spawn teleport mark
						sub_type: "item",
						id: MARKER_ITEM,
						sub_delay: 50000,
						pos: {
							x: 53192,
							y: 100761,
							z: 14233
						}
					}, boss_ent);
				}
			}
		};

		// In-Out quest balloons (qbacting => ярость 0, ужас 1)
		if ([3026004, 3126004, 3026005, 3126005].includes(skillid)) {
			qbacting = skillid % 2;
		}

		// Fire/Ice debuff (debuff % 2 => синий 0, красный 1)
		if ([30260001, 31260001, 30260002, 31260002].includes(skillid) && !debuff_tracker_started) {
			debuff_added(skillid);
		}

		// In-Out identification
		if ([212, 213, 214, 215].includes(skillid)) {
			boss_ent = ent;

			handlers.event([
				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 440, 200, 11000] },
				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 4, 840, 200, 11000] }
			]);
		}

		if ([212, 214].includes(skillid)) { // Fire claw (141,  142)
			boss_offset = 10;

			handlers.event([
				{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 840, 200, 11000] },// Alterado 190>180 Rotaçao
				{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 840, 200, 11000] }  // Alterado 10>0 Rotaçao
			]);
		}

		if ([213, 215].includes(skillid)) { // Ice claw (143,  144)
			boss_offset = -10;

			handlers.event([
				{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 840, 200, 11000] },  // Alterado 170>180 Rotaçao
				{ type: "spawn", func: "vector", args: [553, 0, 0, 360, 840, 200, 11000] }   // Alterado 350>360 Rotaçao
			]);
		}

		if ([213, 214].includes(skillid)) { // Ice inside
			dispatch.setTimeout(() => {
				if (debuff != null) {
					handlers.text({
						sub_type: "message",
						message_PT: (`Gelo (${qbacting_messages[qbacting].message}) | ${mech_messages[debuff % 2 + 2].message} | ${mech_messages[(qbacting + debuff + 1) % 2].message}`),
						message_RU: (`Внутри лед (${qbacting_messages[qbacting].message_RU}) | ${mech_messages[debuff % 2 + 2].message_RU} | ${mech_messages[(qbacting + debuff + 1) % 2].message_RU}`),
					});

					spawn_marker((qbacting + debuff + 1) % 2);
				} else {
					handlers.text({
						sub_type: "message",
						message_PT: (`Gelo (${qbacting_messages[qbacting].message})`),
						message_RU: (`Внутри лед (${qbacting_messages[qbacting].message_RU})`)
					});
				}
			}, 500);

			blue = true;
			red = false;

			dispatch.setTimeout(() => {
				blue = false;
				red = true;
			}, 6600);

			dispatch.setTimeout(() => red = false, 9400);
		}

		if ([212, 215].includes(skillid)) { // Fire inside
			dispatch.setTimeout(() => {
				if (debuff != null) {
					handlers.text({
						sub_type: "message",
						message_PT: (`Fogo (${qbacting_messages[qbacting].message}) | ${mech_messages[debuff % 2 + 2].message} | ${mech_messages[(qbacting + debuff) % 2].message}`),
						message_RU: (`Внутри огонь (${qbacting_messages[qbacting].message_RU}) | ${mech_messages[debuff % 2 + 2].message_RU} | ${mech_messages[(qbacting + debuff) % 2].message_RU}`)
					});

					spawn_marker((qbacting + debuff) % 2);
				} else {
					handlers.text({
						sub_type: "message",
						message_PT: (`Fogo (${qbacting_messages[qbacting].message})`),
						message_RU: (`Внутри огонь (${qbacting_messages[qbacting].message_RU})`)
					});
				}
			}, 500);

			blue = false;
			red = true;

			dispatch.setTimeout(() => {
				blue = true;
				red = false;
			}, 6600);

			dispatch.setTimeout(() => blue = false, 9400);
		}

		if (skillid === 99020020) { // Death release debuff
			dispatch.clearTimeout(timer1);
			dispatch.clearTimeout(timer2);
		}

		if (!debuff_tracker_started) {
			dispatch.hook("S_ABNORMALITY_BEGIN", 4, abnormality_change.bind(null, true));
			dispatch.hook("S_ABNORMALITY_END", 1, abnormality_change.bind(null, false));

			debuff_tracker_started = true;
		}
	}

	const skills = {
		"112-0": [{ type: "text", sub_type: "message", message_PT: "Mao de GELO (FORA)", message_RU: "Лед (полоса)" }],
		"110-0": [{ type: "text", sub_type: "message", message_PT: "Mao de FOGO (FORA)", message_RU: "Огонь (лужа)" }],
		"108-0": [
			{ type: "text", sub_type: "message", message_PT: "Vire a Direita (Repelir!)", message_RU: "Поворот вправо (откид)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"158-0": [
			{ type: "text", sub_type: "message", message_PT: "Vire a Direita (Repelir!)", message_RU: "Поворот вправо (откид)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"109-0": [
			{ type: "text", sub_type: "message", message_PT: "Vire a Esquerda (Repelir!)", message_RU: "Поворот влево (откид)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"159-0": [
			{ type: "text", sub_type: "message", message_PT: "Vire a Esquerda (Repelir!)", message_RU: "Поворот влево (откид)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"120-0": [{ type: "text", sub_type: "message", message_PT: "Together", message_RU: "Яростный рев" }],
		"145-0": [{ type: "text", sub_type: "message", message_PT: "Pe Stun", message_RU: "Стан" }],
//		"157-0": [{ type: "text", sub_type: "message", message_PT: "Change", message_RU: "Смена" }],
		"103-0": [
			{ type: "text", sub_type: "message", message_PT: "Cauda (voando!!)", message_RU: "Хвост (полет)" },
			{ type: "text", sub_type: "message", message_PT: "Arise!", message_RU: "Удочка!", delay: 1500, class_position: "priest" },
			{ type: "spawn", func: "semicircle", args: [140, 260, 553, 0, 0, 10, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 140, 500, 0, 2000] },  //135>140 alterado Dentro
			{ type: "spawn", func: "vector", args: [553, 0, 0, 260, 500, 0, 2000] }
		],
		"153-0": [
			{ type: "text", sub_type: "message", message_PT: "Cauda (voando!!)", message_RU: "Хвост (полет)" },
			{ type: "text", sub_type: "message", message_PT: "Arise!", message_RU: "Удочка!", delay: 1500, class_position: "priest" },
			{ type: "spawn", func: "semicircle", args: [140, 260, 553, 0, 0, 10, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 140, 500, 0, 2000] },  //135>140 alterado Dentro
			{ type: "spawn", func: "vector", args: [553, 0, 0, 260, 500, 0, 2000] }
		],
		"114-0": [{ type: "text", sub_type: "message", message_PT: "Frente | Fogo", message_RU: "Огонь впереди" }],
		"118-0": [{ type: "text", sub_type: "message", message_PT: "Jogar ao alto (iframe)", message_RU: "Прыжок" }],
//		"118-1": [{ type: "text", sub_type: "message", message_PT: "Dodge", message_RU: "Эвейд!" }],

		// AOE лед (большой)
		"104-0": [
			{ type: "text", sub_type: "message", message_PT: "Magia de GELO (GRANDE)", message_RU: "Ледяные лужи" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 80, 8, 520, 0, 6500] }
		],
		// AOE огонь (большой)
		"105-0": [{ type: "text", sub_type: "message", message_PT: "AOE de FOGO (GRANDE)", message_RU: "Огненные бомбы" },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 500, 10, 270, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 500, 10, 270, 0, 3250] },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 500, 10, 270, 0, 3500] },
			{ type: "spawn", func: "circle", args: [false, 553, 235, 500, 10, 270, 0, 3750] },
			{ type: "spawn", func: "circle", args: [false, 553, 90, 500, 10, 270, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 270, 500, 10, 270, 0, 4250] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 500, 10, 270, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 500, 10, 270, 0, 4750] }
		],
		// AOE лед (малый)
		"154-0": [{ type: "text", sub_type: "message", message_PT: "Magia de GELO (Pequeno)", message_RU: "Ледяной шторм" }, { type: "spawn", func: "circle", args: [false, 553, 0, 80, 8, 520, 0, 6500] }],
		// AOE огонь (малый)
		"155-0": [{ type: "text", sub_type: "message", message_PT: "AOE de FOGO (Pequeno)", message_RU: "Огненный столб (опрокид)" },
			{ type: "text", sub_type: "message", delay: 1200, message_PT: "Esquiva", message_RU: "Эвейд" }
		],

		"206-0": [{ type: "text", sub_type: "message", message_PT: "Pulo Atras", message_RU: "Прыжок назад" }],
//		"206-2": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 350, 0, 3000] }],
        "164-0": [{ type: "text", sub_type: "message", message_PT: "R.I.P xD e.e (100%)", message_RU: "Прыжок назад" }], 
		"165-0": [{ type: "text", sub_type: "message", message_PT: "R.I.P xD e.e (0%)", message_RU: "Прыжок назад" }], 
		"137-0": [{ type: "text", sub_type: "message", message_PT: "Derrubar + Explosao Ampla (50metros)", message_RU: "Опрокидывание" }],
		"138-0": [{ type: "text", sub_type: "message", message_PT: "Explosao Ampla!!", message_RU: "AOE" }],
		"139-0": [
			{ type: "text", sub_type: "message", message_PT: "60+ Todos (Fogo)", message_RU: "60° (Огонь всем)" },
			{ type: "text", sub_type: "message", delay: 4000, message_PT: "Abaixe a temperatura", message_RU: "Снизить температуру" }
		],
		"140-0": [
			{ type: "text", sub_type: "message", message_PT: "40- Todos (Gelo)", message_RU: "40° (Лед всем)" },
			{ type: "text", sub_type: "message", delay: 4000, message_PT: "Abaixe a temperatura", message_RU: "Повысить температуру" }
		],

		"nd-3126-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3126-1000-1212-0": [{ type: "func", func: skilld_event, args: [212] }],
		"s-3126-1000-1215-0": [{ type: "func", func: skilld_event, args: [215] }],
		"s-3126-1000-1213-0": [{ type: "func", func: skilld_event, args: [213] }],
		"s-3126-1000-1214-0": [{ type: "func", func: skilld_event, args: [214] }],
		"qb-3126-1000-3026005": [{ type: "func", func: skilld_event, args: [3026005] }], // ужас, одинаковые цвета
		"qb-3126-1000-3026004": [{ type: "func", func: skilld_event, args: [3026004] }], // ярость, разные цвета
		"qb-3126-1000-3126005": [{ type: "func", func: skilld_event, args: [3126005] }], // ужас, одинаковые цвета
		"qb-3126-1000-3126004": [{ type: "func", func: skilld_event, args: [3126004] }], // ярость, разные цвета
		"ae-0-0-99020020": [{ type: "func", func: skilld_event, args: [99020020] }],
		"am-3126-1000-30260001": [{ type: "func", func: skilld_event, args: [30260001] }], // красный
		"am-3126-1000-30260002": [{ type: "func", func: skilld_event, args: [30260002] }], // синий
		"am-3126-1000-31260001": [{ type: "func", func: skilld_event, args: [31260001] }], // красный
		"am-3126-1000-31260002": [{ type: "func", func: skilld_event, args: [31260002] }], // синий

		"s-3126-1000-1107-0": [{ type: "text", sub_type: "message", message_PT: "[Debuff] Mais Londe", message_RU: "[Дебафф] Дальние" }],
		"s-3126-1000-2107-0": [{ type: "text", sub_type: "message", message_PT: "[Debuff] Mais Perto", message_RU: "[Дебафф] Ближние" }],
		"am-3126-1000-31260251": [{ type: "text", sub_type: "message", message_PT: "[Debuff] Camada 1", message_RU: "[Дебафф] 1 стак" }],
		"am-3126-1000-31260067": [{ type: "text", sub_type: "message", message_PT: "[Debuff] Camada 2", message_RU: "[Дебафф] 2 стак" }],
		"am-3126-1000-31260068": [
			{ type: "text", sub_type: "message", message_PT: "[Debuff] Camada 3", message_RU: "[Дебафф] 3 стак" },
			{ type: "text", sub_type: "message", delay: 145000, message_PT: "[Debuff] 2.5 minutos passado", message_RU: "[Дебафф] Прошло 2.5 минуты (стаки удалены)" }
		]
	};

	let object = {};

	for (let [key, value] of Object.entries(skills)) {
		if (key.length === 5) {
			object[`s-3126-1000-1${key}`] = value;
			object[`s-3126-1000-2${key}`] = value;
		} else {
			object[key] = value;
		}
	}

	return object;
};