/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * ts_cn_and_tw/test/index.ts
 */

import { cn2tw, tw2cn } from '../index.ts';
import { assert } from 'https://deno.land/std@0.211.0/assert/mod.ts';

(() => {
	const SIMPLIFIED_ARRAY = ['干', '天干', '今天干燥', '如今天干燥热', '假如今天干燥热晕了'];
	const TRADITIONAL_ARRAY = ['乾', '天乾', '今天乾燥', '如今天乾燥熱', '假如今天乾燥熱暈了'];

	SIMPLIFIED_ARRAY.forEach((from, index) => {
		assert(cn2tw(from) === TRADITIONAL_ARRAY[index]);
	});
	TRADITIONAL_ARRAY.forEach((from, index) => {
		assert(tw2cn(from) === SIMPLIFIED_ARRAY[index]);
	});
})();
