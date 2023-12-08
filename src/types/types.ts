import { KeyCode } from "./keys";

export interface ComplexRule {
  description?: string;
  manipulators?: Manipulator[];
}

export interface Config {
  global: {
    ask_for_confirmation_before_quitting: boolean;
    check_for_updates_on_startup: boolean;
    show_in_menu_bar: boolean;
    show_profile_name_in_menu_bar: boolean;
    unsafe_ui: boolean;
  };
  profiles: Profile[];
}

export interface SimpleRule {
  from: From;
  to: To;
}

export interface ComplexModifications {
  parameters: Parameters;
  rules: ComplexRule[];
}

export interface From {
  key_code?: KeyCode;
  simultaneous?: SimultaneousFrom[];
  simultaneous_options?: SimultaneousOptions;
  modifiers?: Modifiers;
}

export interface To {
  key_code?: KeyCode;
  modifiers?: string[];
  shell_command?: string;
  set_variable?: {
    name: string;
    value: boolean | number | string;
  };
  mouse_key?: MouseKey;
}

export interface Manipulator {
  description?: string;
  type: "basic";
  from: From;
  to?: To[];
  to_after_key_up?: To[];
  to_if_alone?: To[];
  parameters?: Parameters;
  conditions?: Conditions[];
}

export interface Parameters {
  "basic.simultaneous_threshold_milliseconds": number;
  "basic.to_delayed_action_delay_milliseconds": number;
  "basic.to_if_alone_timeout_milliseconds": number;
  "basic.to_if_held_down_threshold_milliseconds": number;
  "mouse_motion_to_scroll.speed": number;
}

type Conditions =
  | FrontMostApplicationCondition
  | DeviceCondition
  | KeybaordTypeCondition
  | InputSourceCondition
  | VaribaleCondition
  | EventChangedCondition;

type FrontMostApplicationCondition = {
  type: "frontmost_application_if" | "frontmost_application_unless";
  bundle_identifiers?: string[];
  file_paths?: string[];
  description?: string;
};

type DeviceCondition = {
  type:
    | "device_if"
    | "device_unless"
    | "device_exists_if"
    | "device_exists_unless";
  identifiers: Identifiers;
  description?: string;
};

interface Identifiers {
  vendor_id?: number;
  product_id?: number;
  location_id?: number;
  is_keyboard?: boolean;
  is_pointing_device?: boolean;
  is_touch_bar?: boolean;
  is_built_in_keyboard?: boolean;
}

type KeybaordTypeCondition = {
  type: "keyboard_type_if" | "keyboard_type_unless";
  keyboard_types: string[];
  description?: string;
};

type InputSourceCondition = {
  type: "input_source_if" | "input_source_unless";
  input_sources: InputSource[];
  description?: string;
};

interface InputSource {
  language?: string;
  input_source_id?: string;
  input_mode_id?: string;
}

type VaribaleCondition = {
  type: "variable_if" | "variable_unless";
  name: string | number | boolean;
  value: string;
  description?: string;
};

type EventChangedCondition = {
  type: "event_changed_if" | "event_changed_unless";
  value: boolean;
  description?: string;
};

export interface SimultaneousFrom {
  key_code: KeyCode;
}

export interface SimultaneousOptions {
  key_down_order?: "insensitive" | "strict" | "strict_inverse";
  detect_key_down_uninterruptedly?: boolean;
}

export interface Modifiers {
  optional?: string[];
  mandatory?: string[];
}

export interface MouseKey {
  y?: number;
  x?: number;
  speed_multiplier?: number;
}

export interface Profile {
  name: string;
  complex_modifications: ComplexModifications;
  devices: Device[];
  selected: boolean;
  simple_modifications: [];
  virtual_hid_keyboard: VirtualHidKeyboard;
}

type Device = {
  disable_built_in_keyboard_if_exists: boolean;
  fn_function_keys: [];
  identifiers: {
    is_keyboard: boolean;
    is_pointing_device: boolean;
    product_id: number;
    vendor_id: number;
  };
  ignore: boolean;
  manipulate_caps_lock_led: boolean;
  simple_modifications: [];
  treat_as_built_in_keyboard: boolean;
};

type VirtualHidKeyboard = {
  country_code: number;
  indicate_sticky_modifier_keys_state: boolean;
  mouse_key_xy_scale: number;
};
