export const pcKeys = [
  "print_screen",
  "scroll_lock",
  "pause",
  "insert",
  "application",
  "help",
  "power",
  "execute",
  "menu",
  "select",
  "stop",
  "again",
  "undo",
  "cut",
  "copy",
  "paste",
  "find",
] as const;

export const japaneseKey = [
  "japanese_eisuu",
  "japanese_kana",
  "japanese_pc_nfer",
  "japanese_pc_xfer",
  "japanese_pc_katakana",
] as const;

export const otherKeys = [
  "clear",
  "separator",
  "out",
  "oper",
  "clear_or_again",
  "cancel",
  "prior",
  "keypad_equal_sign_as400",
  "locking_caps_lock",
  "locking_num_lock",
  "locking_scroll_lock",
  "alternate_erase",
  "sys_req_or_attention",
  "cr_sel_or_props",
  "ex_sel",
  "left_alt",
  "left_gui",
  "right_alt",
  "right_gui",
  "volume_down",
  "volume_up",
] as const;

export const miscKeys = [
  "display_brightness_decrement",
  "display_brightness_increment",
  "mission_control",
  "launchpad",
  "dashboard",
  "illumination_decrement",
  "illumination_increment",
  "apple_display_brightness_decrement",
  "apple_display_brightness_increment",
  "apple_top_case_display_brightness_decrement",
  "apple_top_case_display_brightness_increment",
  "vk_none",
  "return",
  "vk_consumer_brightness_down",
  "vk_consumer_brightness_up",
  "vk_mission_control",
  "vk_launchpad",
  "vk_dashboard",
  "vk_consumer_illumination_down",
  "vk_consumer_illumination_up",
  "vk_consumer_previous",
  "vk_consumer_play",
  "vk_consumer_next",
] as const;

export const modifierKeys = [
  "caps_lock",
  "left_control",
  "left_shift",
  "left_option",
  "left_command",
  "right_control",
  "right_shift",
  "right_option",
  "right_command",
  "fn",
] as const;

export const letterKeys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
] as const;

export const controlSymbolKeys = [
  "return_or_enter",
  "escape",
  "delete_or_backspace",
  "delete_forward",
  "tab",
  "spacebar",
  "hyphen",
  "equal_sign",
  "open_bracket",
  "close_bracket",
  "backslash",
  "non_us_pound",
  "semicolon",
  "quote",
  "grave_accent_and_tilde",
  "comma",
  "period",
  "slash",
  "non_us_backslash",
] as const;

export const arrowKeys = [
  "up_arrow",
  "down_arrow",
  "left_arrow",
  "right_arrow",
  "page_up",
  "page_down",
  "home",
  "end",
] as const;

export const functionKey = [
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "f10",
  "f11",
  "f12",
  "f13",
  "f14",
  "f15",
  "f16",
  "f17",
  "f18",
  "f19",
  "f20",
  "f21",
  "f22",
  "f23",
  "f24",
] as const;

export const mediaControlKeys = [
  "rewind",
  "play_or_pause",
  "fastforward",
  "mute",
  "volume_decrement",
  "volume_increment",
  "eject",
] as const;

export const keypadKeys = [
  "keypad_num_lock",
  "keypad_slash",
  "keypad_asterisk",
  "keypad_hyphen",
  "keypad_plus",
  "keypad_enter",
  "keypad_1",
  "keypad_2",
  "keypad_3",
  "keypad_4",
  "keypad_5",
  "keypad_6",
  "keypad_7",
  "keypad_8",
  "keypad_9",
  "keypad_0",
  "keypad_period",
  "keypad_equal_sign",
  "keypad_comma",
] as const;

export const internationalKeys = [
  "international1",
  "international2",
  "international3",
  "international4",
  "international5",
  "international6",
  "international7",
  "international8",
  "international9",
  "lang1",
  "lang2",
  "lang3",
  "lang4",
  "lang5",
  "lang6",
  "lang7",
  "lang8",
  "lang9",
] as const;

export const numberKeys = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
] as const;

export type PCKeys = (typeof pcKeys)[number];
export type JapaneseKey = (typeof japaneseKey)[number];
export type OtherKeys = (typeof otherKeys)[number];
export type MiscKeys = (typeof miscKeys)[number];
export type ModifierKeys = (typeof modifierKeys)[number];
export type LetterKeys = (typeof letterKeys)[number];
export type ControlSymbolKeys = (typeof controlSymbolKeys)[number];
export type ArrowKeys = (typeof arrowKeys)[number];
export type FunctionKey = (typeof functionKey)[number];
export type MediaControlKeys = (typeof mediaControlKeys)[number];
export type KeypadKeys = (typeof keypadKeys)[number];
export type InternationalKeys = (typeof internationalKeys)[number];
export type NumberKeys = (typeof numberKeys)[number];

export type KeyCode =
  | ArrowKeys
  | ControlSymbolKeys
  | FunctionKey
  | InternationalKeys
  | JapaneseKey
  | KeypadKeys
  | LetterKeys
  | MediaControlKeys
  | MiscKeys
  | ModifierKeys
  | NumberKeys
  | OtherKeys
  | PCKeys;
