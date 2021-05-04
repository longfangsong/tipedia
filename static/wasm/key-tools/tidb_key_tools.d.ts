/* tslint:disable */
/* eslint-disable */
/**
* @param {number} b
* @returns {number | undefined}
*/
export function write_type_from_u8(b: number): number | undefined;
/**
* @param {number} w
* @returns {number}
*/
export function write_type_to_u8(w: number): number;
/**
* @param {string} code
* @returns {Uint8Array}
*/
export function parse_input(code: string): Uint8Array;
/**
*/
export enum WriteType {
  Put,
  Delete,
  Lock,
  Rollback,
}
/**
*/
export enum EncodeMethod {
  EnumFlag,
  SingleByte,
  Bytes,
  BigEndian,
  LittleEndian,
  VarInt,
}
/**
*/
export class ParsingTrace {
  free(): void;
/**
* @returns {string}
*/
  readonly description: string;
/**
* @returns {number}
*/
  start: number;
/**
* @returns {number}
*/
  width: number;
}
/**
*/
export class TimeStamp {
  free(): void;
/**
* @returns {BigInt}
*/
  0: BigInt;
}
/**
*/
export class Write {
  free(): void;
/**
* @param {Uint8Array} b
* @returns {Write}
*/
  static parse(b: Uint8Array): Write;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @returns {TimeStamp | undefined}
*/
  gc_fence?: TimeStamp;
/**
* @returns {boolean}
*/
  has_overlapped_rollback: boolean;
/**
* @returns {any}
*/
  readonly parsing_trace: any;
/**
* @returns {Uint8Array | undefined}
*/
  short_value?: Uint8Array;
/**
* @returns {TimeStamp}
*/
  start_ts: TimeStamp;
/**
* @returns {number}
*/
  write_type: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_timestamp_free: (a: number) => void;
  readonly __wbg_get_timestamp_0: (a: number, b: number) => void;
  readonly __wbg_set_timestamp_0: (a: number, b: number, c: number) => void;
  readonly write_type_from_u8: (a: number) => number;
  readonly write_type_to_u8: (a: number) => number;
  readonly __wbg_write_free: (a: number) => void;
  readonly __wbg_get_write_write_type: (a: number) => number;
  readonly __wbg_set_write_write_type: (a: number, b: number) => void;
  readonly __wbg_get_write_start_ts: (a: number) => number;
  readonly __wbg_set_write_start_ts: (a: number, b: number) => void;
  readonly __wbg_get_write_has_overlapped_rollback: (a: number) => number;
  readonly __wbg_set_write_has_overlapped_rollback: (a: number, b: number) => void;
  readonly __wbg_get_write_gc_fence: (a: number) => number;
  readonly __wbg_set_write_gc_fence: (a: number, b: number) => void;
  readonly __wbg_parsingtrace_free: (a: number) => void;
  readonly __wbg_get_parsingtrace_start: (a: number) => number;
  readonly __wbg_set_parsingtrace_start: (a: number, b: number) => void;
  readonly __wbg_get_parsingtrace_width: (a: number) => number;
  readonly __wbg_set_parsingtrace_width: (a: number, b: number) => void;
  readonly parsingtrace_description: (a: number, b: number) => void;
  readonly write_parse: (a: number, b: number) => number;
  readonly write_to_bytes: (a: number, b: number) => void;
  readonly write_short_value: (a: number, b: number) => void;
  readonly write_set_short_value: (a: number, b: number, c: number) => void;
  readonly write_parsing_trace: (a: number) => number;
  readonly parse_input: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
