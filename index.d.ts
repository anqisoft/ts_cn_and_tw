/**
 * string <en_us>Simplified Chinese word list</en_us><zh_cn>简体单字清单</zh_cn><zh_tw>簡體單字清單</zh_tw>
 * @see: https://github.com/luhuiguo/chinese-utils/blob/master/src/main/resources/simp.txt
 * @see: https://github.com/uutool/hanzi-convert/blob/master/src/HanziDict.php
 */
export declare const SIMPLIFIED_CHINESE_CHARS: string[];
/**
 * string <en_us>Traditional Chinese character list</en_us><zh_cn>繁体单字清单</zh_cn><zh_tw>繁體單字清單</zh_tw>
 * @see: https://github.com/luhuiguo/chinese-utils/blob/master/src/main/resources/trad.txt
 * @see: https://github.com/uutool/hanzi-convert/blob/master/src/HanziDict.php
 */
export declare const TRADITIONAL_CHINESE_CHARS: string[];
/**
 * string[] <en_us>Simplified to Traditional Chinese phrase correspondence table</en_us><zh_cn>简转繁词组对应表</zh_cn><zh_tw>簡轉繁片語對應錶</zh_tw>
 * @see: https://github.com/luhuiguo/chinese-utils/blob/master/src/main/resources/traditional.txt
 */
export declare const CHINESE_PHRASES_FROM_SIMPLIFIED_TO_TRADITIONAL: string[][];
/**
 * string[] <en_us>Correspondence table between traditional and simplified phrases</en_us><zh_cn>繁转简词组对应表</zh_cn><zh_tw>繁轉簡片語對應錶</zh_tw>
 * @see: https://github.com/luhuiguo/chinese-utils/blob/master/src/main/resources/simplified.txt
 */
export declare const CHINESE_PHRASES_FROM_TRADITIONAL_TO_SIMPLIFIED: string[][];
/**
 * <en_us>Simplified to Traditional Chinese</en_us><zh_cn>简转繁</zh_cn><zh_tw>簡轉繁</zh_tw>
 * @param original string <en_us>Simplified Chinese text</en_us><zh_cn>简体中文文本</zh_cn><zh_tw>簡體中文文本</zh_tw>
 * @return string <en_us>Traditional Chinese text</en_us><zh_cn>繁体中文文本</zh_cn><zh_tw>繁體中文文本</zh_tw>
 */
export declare function cn2tw(original: string): string;
/**
 * <en_us>Traditional to Simplified Chinese</en_us><zh_cn>繁转简</zh_cn><zh_tw>繁轉簡</zh_tw>
 * @param original string <en_us>Traditional Chinese text</en_us><zh_cn>繁体中文文本</zh_cn><zh_tw>繁體中文文本</zh_tw>
 * @return string <en_us>Simplified Chinese text</en_us><zh_cn>简体中文文本</zh_cn><zh_tw>簡體中文文本</zh_tw>
 */
export declare function tw2cn(original: string): string;
