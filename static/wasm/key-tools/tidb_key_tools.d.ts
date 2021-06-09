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
* @param {Uint8Array} code
* @returns {Record}
*/
export function parse_record(code: Uint8Array): Record;
/**
* @param {string} code
* @returns {Uint8Array}
*/
export function parse_input(code: string): Uint8Array;
/**
* @param {string} code
* @returns {Uint8Array}
*/
export function parse_golang_fmt_print(code: string): Uint8Array;
/**
* @param {string} code
* @returns {Uint8Array}
*/
export function parse_hex_encoded(code: string): Uint8Array;
/**
* @param {Uint8Array} code
* @returns {BigInt}
*/
export function big_endian_decode_u64(code: Uint8Array): BigInt;
/**
* @param {Uint8Array} buf
* @param {BigInt} n
*/
export function big_endian_encode_u64(buf: Uint8Array, n: BigInt): void;
/**
* @param {Uint8Array} code
* @returns {BigInt}
*/
export function little_endian_decode_u64(code: Uint8Array): BigInt;
/**
* @param {Uint8Array} buf
* @param {BigInt} n
*/
export function little_endian_encode_u64(buf: Uint8Array, n: BigInt): void;
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
export class Record {
  free(): void;
/**
* @returns {BigInt}
*/
  row_id: BigInt;
/**
* @returns {BigInt}
*/
  table_id: BigInt;
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
