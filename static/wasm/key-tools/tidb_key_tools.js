
let wasm;

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

const u32CvtShim = new Uint32Array(2);

const uint64CvtShim = new BigUint64Array(u32CvtShim.buffer);
/**
* @param {number} b
* @returns {number | undefined}
*/
export function write_type_from_u8(b) {
    var ret = wasm.write_type_from_u8(b);
    return ret === 4 ? undefined : ret;
}

/**
* @param {number} w
* @returns {number}
*/
export function write_type_to_u8(w) {
    var ret = wasm.write_type_to_u8(w);
    return ret;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}
/**
* @param {string} code
* @returns {Uint8Array}
*/
export function parse_input(code) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(code, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.parse_input(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
*/
export const WriteType = Object.freeze({ Put:0,"0":"Put",Delete:1,"1":"Delete",Lock:2,"2":"Lock",Rollback:3,"3":"Rollback", });
/**
*/
export const EncodeMethod = Object.freeze({ EnumFlag:0,"0":"EnumFlag",SingleByte:1,"1":"SingleByte",Bytes:2,"2":"Bytes",BigEndian:3,"3":"BigEndian",LittleEndian:4,"4":"LittleEndian",VarInt:5,"5":"VarInt", });
/**
*/
export class ParsingTrace {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_parsingtrace_free(ptr);
    }
    /**
    * @returns {number}
    */
    get start() {
        var ret = wasm.__wbg_get_parsingtrace_start(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set start(arg0) {
        wasm.__wbg_set_parsingtrace_start(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get width() {
        var ret = wasm.__wbg_get_parsingtrace_width(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set width(arg0) {
        wasm.__wbg_set_parsingtrace_width(this.ptr, arg0);
    }
    /**
    * @returns {string}
    */
    get description() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.parsingtrace_description(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
}
/**
*/
export class TimeStamp {

    static __wrap(ptr) {
        const obj = Object.create(TimeStamp.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_timestamp_free(ptr);
    }
    /**
    * @returns {BigInt}
    */
    get 0() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_timestamp_0(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            u32CvtShim[0] = r0;
            u32CvtShim[1] = r1;
            const n0 = uint64CvtShim[0];
            return n0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {BigInt} arg0
    */
    set 0(arg0) {
        uint64CvtShim[0] = arg0;
        const low0 = u32CvtShim[0];
        const high0 = u32CvtShim[1];
        wasm.__wbg_set_timestamp_0(this.ptr, low0, high0);
    }
}
/**
*/
export class Write {

    static __wrap(ptr) {
        const obj = Object.create(Write.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_write_free(ptr);
    }
    /**
    * @returns {number}
    */
    get write_type() {
        var ret = wasm.__wbg_get_write_write_type(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set write_type(arg0) {
        wasm.__wbg_set_write_write_type(this.ptr, arg0);
    }
    /**
    * @returns {TimeStamp}
    */
    get start_ts() {
        var ret = wasm.__wbg_get_write_start_ts(this.ptr);
        return TimeStamp.__wrap(ret);
    }
    /**
    * @param {TimeStamp} arg0
    */
    set start_ts(arg0) {
        _assertClass(arg0, TimeStamp);
        var ptr0 = arg0.ptr;
        arg0.ptr = 0;
        wasm.__wbg_set_write_start_ts(this.ptr, ptr0);
    }
    /**
    * @returns {boolean}
    */
    get has_overlapped_rollback() {
        var ret = wasm.__wbg_get_write_has_overlapped_rollback(this.ptr);
        return ret !== 0;
    }
    /**
    * @param {boolean} arg0
    */
    set has_overlapped_rollback(arg0) {
        wasm.__wbg_set_write_has_overlapped_rollback(this.ptr, arg0);
    }
    /**
    * @returns {TimeStamp | undefined}
    */
    get gc_fence() {
        var ret = wasm.__wbg_get_write_gc_fence(this.ptr);
        return ret === 0 ? undefined : TimeStamp.__wrap(ret);
    }
    /**
    * @param {TimeStamp | undefined} arg0
    */
    set gc_fence(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, TimeStamp);
            ptr0 = arg0.ptr;
            arg0.ptr = 0;
        }
        wasm.__wbg_set_write_gc_fence(this.ptr, ptr0);
    }
    /**
    * @param {Uint8Array} b
    * @returns {Write}
    */
    static parse(b) {
        var ptr0 = passArray8ToWasm0(b, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.write_parse(ptr0, len0);
        return Write.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.write_to_bytes(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Uint8Array | undefined}
    */
    get short_value() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.write_short_value(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayU8FromWasm0(r0, r1).slice();
                wasm.__wbindgen_free(r0, r1 * 1);
            }
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array | undefined} value
    */
    set short_value(value) {
        var ptr0 = isLikeNone(value) ? 0 : passArray8ToWasm0(value, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.write_set_short_value(this.ptr, ptr0, len0);
    }
    /**
    * @returns {any}
    */
    get parsing_trace() {
        var ret = wasm.write_parsing_trace(this.ptr);
        return takeObject(ret);
    }
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

async function init(input) {
    if (typeof input === 'undefined') {
        input = new URL('tidb_key_tools_bg.wasm', import.meta.url);
    }
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_json_parse = function(arg0, arg1) {
        var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        var ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_rethrow = function(arg0) {
        throw takeObject(arg0);
    };

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }



    const { instance, module } = await load(await input, imports);

    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;

    return wasm;
}

export default init;

