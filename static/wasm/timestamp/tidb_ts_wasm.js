
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

const u32CvtShim = new Uint32Array(2);

const uint64CvtShim = new BigUint64Array(u32CvtShim.buffer);

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}
/**
* @param {BigInt} n
* @param {number} width
* @returns {string}
*/
export function as_bit_str(n, width) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        uint64CvtShim[0] = n;
        const low0 = u32CvtShim[0];
        const high0 = u32CvtShim[1];
        wasm.as_bit_str(retptr, low0, high0, width);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {BigInt} physical
* @returns {BigInt}
*/
export function physical_to_time(physical) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        uint64CvtShim[0] = physical;
        const low0 = u32CvtShim[0];
        const high0 = u32CvtShim[1];
        wasm.physical_to_time(retptr, low0, high0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        u32CvtShim[0] = r0;
        u32CvtShim[1] = r1;
        const n1 = uint64CvtShim[0];
        return n1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
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
    * Create a time stamp from physical and logical components.
    * @param {BigInt} physical
    * @param {BigInt} logical
    * @returns {TimeStamp}
    */
    static compose(physical, logical) {
        uint64CvtShim[0] = physical;
        const low0 = u32CvtShim[0];
        const high0 = u32CvtShim[1];
        uint64CvtShim[0] = logical;
        const low1 = u32CvtShim[0];
        const high1 = u32CvtShim[1];
        var ret = wasm.timestamp_compose(low0, high0, low1, high1);
        return TimeStamp.__wrap(ret);
    }
    /**
    * @returns {TimeStamp}
    */
    static zero() {
        var ret = wasm.timestamp_zero();
        return TimeStamp.__wrap(ret);
    }
    /**
    * @returns {TimeStamp}
    */
    static max() {
        var ret = wasm.timestamp_max();
        return TimeStamp.__wrap(ret);
    }
    /**
    * @param {BigInt} ts
    * @returns {TimeStamp}
    */
    static new(ts) {
        uint64CvtShim[0] = ts;
        const low0 = u32CvtShim[0];
        const high0 = u32CvtShim[1];
        var ret = wasm.timestamp_new(low0, high0);
        return TimeStamp.__wrap(ret);
    }
    /**
    * Extracts physical part of a timestamp, in milliseconds.
    * @returns {BigInt}
    */
    physical() {
        try {
            const ptr = this.__destroy_into_raw();
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.timestamp_physical(retptr, ptr);
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
    * @returns {TimeStamp}
    */
    next() {
        const ptr = this.__destroy_into_raw();
        var ret = wasm.timestamp_next(ptr);
        return TimeStamp.__wrap(ret);
    }
    /**
    * @returns {TimeStamp}
    */
    prev() {
        const ptr = this.__destroy_into_raw();
        var ret = wasm.timestamp_prev(ptr);
        return TimeStamp.__wrap(ret);
    }
    /**
    * @returns {boolean}
    */
    is_zero() {
        const ptr = this.__destroy_into_raw();
        var ret = wasm.timestamp_is_zero(ptr);
        return ret !== 0;
    }
    /**
    * @returns {boolean}
    */
    is_max() {
        const ptr = this.__destroy_into_raw();
        var ret = wasm.timestamp_is_max(ptr);
        return ret !== 0;
    }
    /**
    * @returns {BigInt}
    */
    into_inner() {
        try {
            const ptr = this.__destroy_into_raw();
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.timestamp_into_inner(retptr, ptr);
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
        input = new URL('tidb_ts_wasm_bg.wasm', import.meta.url);
    }
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
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

