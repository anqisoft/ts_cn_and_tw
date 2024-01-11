"use strict";
/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * ts_cn_and_tw/test/index.ts
 */
exports.__esModule = true;
var index_ts_1 = require("../index.ts");
var mod_ts_1 = require("https://deno.land/std@0.211.0/assert/mod.ts");
(function () {
    var SIMPLIFIED_ARRAY = ['干', '天干', '今天干燥', '如今天干燥热', '假如今天干燥热晕了'];
    var TRADITIONAL_ARRAY = ['乾', '天乾', '今天乾燥', '如今天乾燥熱', '假如今天乾燥熱暈了'];
    SIMPLIFIED_ARRAY.forEach(function (from, index) {
        mod_ts_1.assert(index_ts_1.cn2tw(from) === TRADITIONAL_ARRAY[index]);
    });
    TRADITIONAL_ARRAY.forEach(function (from, index) {
        mod_ts_1.assert(index_ts_1.tw2cn(from) === SIMPLIFIED_ARRAY[index]);
    });
})();
