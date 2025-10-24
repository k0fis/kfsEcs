"use strict";
(function(module) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports)  {
            module(exports);
        });
    } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeName !== 'string') {
        module(exports);
    } else {
        module(typeof self !== 'undefined' ? self : this);
}
}(function($rt_exports) {
let $rt_seed = 2463534242,
$rt_nextId = () => {
    let x = $rt_seed;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    $rt_seed = x;
    return x;
},
$rt_wrapFunction0 = f => function() {
    return f(this);
},
$rt_wrapFunction1 = f => function(p1) {
    return f(this, p1);
},
$rt_wrapFunction2 = f => function(p1, p2) {
    return f(this, p1, p2);
},
$rt_wrapFunction3 = f => function(p1, p2, p3) {
    return f(this, p1, p2, p3, p3);
},
$rt_wrapFunction4 = f => function(p1, p2, p3, p4) {
    return f(this, p1, p2, p3, p4);
},
$rt_mainStarter = f => (args, callback) => {
    if (!args) {
        args = [];
    }
    let javaArgs = $rt_createArray($rt_objcls(), args.length);
    for (let i = 0;i < args.length;++i) {
        javaArgs.data[i] = $rt_str(args[i]);
    }
    $rt_startThread(() => {
        f.call(null, javaArgs);
    }, callback);
},
$rt_eraseClinit = target => target.$clinit = () => {
},
$dbg_class = obj => {
    let cls = obj.constructor;
    let arrayDegree = 0;
    while (cls.$meta && cls.$meta.item) {
        ++arrayDegree;
        cls = cls.$meta.item;
    }
    let clsName = "";
    if (cls.$meta.primitive) {
        clsName = cls.$meta.name;
    } else {
        clsName = cls.$meta ? cls.$meta.name || "a/" + cls.name : "@" + cls.name;
    }
    while (arrayDegree-- > 0) {
        clsName += "[]";
    }
    return clsName;
},
$rt_classWithoutFields = superclass => {
    if (superclass === 0) {
        return function() {
        };
    }
    if (superclass === void 0) {
        superclass = $rt_objcls();
    }
    return function() {
        superclass.call(this);
    };
},
$rt_cls = cls => jl_Class_getClass(cls),
$rt_objcls = () => jl_Object,
$rt_getThread = () => {
    {
        return jl_Thread_currentThread();
    }
},
$rt_setThread = t => {
    {
        return jl_Thread_setCurrentThread(t);
    }
},
$rt_callWithReceiver = f => function() {
    return f.apply(null, [this].concat(Array.prototype.slice.call(arguments)));
},
$rt_createcls = () => {
    return { $array : null, classObject : null, $meta : { supertypes : [], superclass : null } };
},
$rt_createPrimitiveCls = (name, binaryName) => {
    let cls = $rt_createcls();
    cls.$meta.primitive = true;
    cls.$meta.name = name;
    cls.$meta.binaryName = binaryName;
    cls.$meta.enum = false;
    cls.$meta.item = null;
    cls.$meta.simpleName = null;
    cls.$meta.declaringClass = null;
    cls.$meta.enclosingClass = null;
    return cls;
},
$rt_charcls = $rt_createPrimitiveCls("char", "C"),
$rt_shortcls = $rt_createPrimitiveCls("short", "S"),
$rt_intcls = $rt_createPrimitiveCls("int", "I"),
$rt_longcls = $rt_createPrimitiveCls("long", "J"),
$rt_doublecls = $rt_createPrimitiveCls("double", "D"),
$rt_voidcls = $rt_createPrimitiveCls("void", "V"),
$rt_numberConversionBuffer = new ArrayBuffer(16),
$rt_numberConversionDoubleArray = new Float64Array($rt_numberConversionBuffer),
$rt_numberConversionLongArray = new BigInt64Array($rt_numberConversionBuffer),
$rt_doubleToRawLongBits = n => {
    $rt_numberConversionDoubleArray[0] = n;
    return $rt_numberConversionLongArray[0];
},
$rt_longBitsToDouble = n => {
    $rt_numberConversionLongArray[0] = n;
    return $rt_numberConversionDoubleArray[0];
},
$rt_compare = (a, b) => a > b ? 1 : a < b ?  -1 : a === b ? 0 : 1,
$rt_imul = Math.imul || function(a, b) {
    let ah = a >>> 16 & 0xFFFF;
    let al = a & 0xFFFF;
    let bh = b >>> 16 & 0xFFFF;
    let bl = b & 0xFFFF;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
},
Long_ZERO = BigInt(0),
Long_create = (lo, hi) => BigInt.asIntN(64, BigInt.asUintN(64, BigInt(lo)) | BigInt.asUintN(64, BigInt(hi) << BigInt(32))),
Long_fromInt = val => BigInt.asIntN(64, BigInt(val | 0)),
Long_fromNumber = val => BigInt.asIntN(64, BigInt(val >= 0 ? Math.floor(val) : Math.ceil(val))),
Long_toNumber = val => Number(val),
Long_hi = val => Number(BigInt.asIntN(64, val >> BigInt(32))) | 0,
Long_lo = val => Number(BigInt.asIntN(32, val)) | 0,
Long_eq = (a, b) => a === b,
Long_ne = (a, b) => a !== b,
Long_ge = (a, b) => a >= b,
Long_le = (a, b) => a <= b,
Long_add = (a, b) => BigInt.asIntN(64, a + b),
Long_sub = (a, b) => BigInt.asIntN(64, a - b),
Long_ucompare = (a, b) => {
    a = BigInt.asUintN(64, a);
    b = BigInt.asUintN(64, b);
    return a < b ?  -1 : a > b ? 1 : 0;
},
Long_mul = (a, b) => BigInt.asIntN(64, a * b),
Long_div = (a, b) => BigInt.asIntN(64, a / b),
Long_udiv = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) / BigInt.asUintN(64, b)),
Long_rem = (a, b) => BigInt.asIntN(64, a % b),
Long_and = (a, b) => BigInt.asIntN(64, a & b);
let Long_or = (a, b) => BigInt.asIntN(64, a | b),
Long_shl = (a, b) => BigInt.asIntN(64, a << BigInt(b & 63)),
Long_shr = (a, b) => BigInt.asIntN(64, a >> BigInt(b & 63)),
Long_shru = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) >> BigInt(b & 63)),
$rt_createArray = (cls, sz) => {
    let data = new Array(sz);
    data.fill(null);
    return new ($rt_arraycls(cls))(data);
},
$rt_wrapArray = (cls, data) => new ($rt_arraycls(cls))(data),
$rt_createLongArrayFromData = data => {
    let buffer = new BigInt64Array(data.length);
    buffer.set(data);
    return new $rt_longArrayCls(buffer);
},
$rt_createCharArray = sz => new $rt_charArrayCls(new Uint16Array(sz)),
$rt_createShortArrayFromData = data => {
    let buffer = new Int16Array(data.length);
    buffer.set(data);
    return new $rt_shortArrayCls(buffer);
},
$rt_arraycls = cls => {
    let result = cls.$array;
    if (result === null) {
        function JavaArray(data) {
            ($rt_objcls()).call(this);
            this.data = data;
        }
        JavaArray.prototype = Object.create(($rt_objcls()).prototype);
        JavaArray.prototype.type = cls;
        JavaArray.prototype.constructor = JavaArray;
        JavaArray.prototype.toString = function() {
            let str = "[";
            for (let i = 0;i < this.data.length;++i) {
                if (i > 0) {
                    str += ", ";
                }
                str += this.data[i].toString();
            }
            str += "]";
            return str;
        };
        JavaArray.prototype.$clone = function() {
            let dataCopy;
            if ('slice' in this.data) {
                dataCopy = this.data.slice();
            } else {
                dataCopy = new this.data.constructor(this.data.length);
                for (let i = 0;i < dataCopy.length;++i) {
                    dataCopy[i] = this.data[i];
                }
            }
            return new ($rt_arraycls(this.type))(dataCopy);
        };
        let name = "[" + cls.$meta.binaryName;
        JavaArray.$meta = { item : cls, supertypes : [$rt_objcls()], primitive : false, superclass : $rt_objcls(), name : name, binaryName : name, enum : false, simpleName : null, declaringClass : null, enclosingClass : null };
        JavaArray.classObject = null;
        JavaArray.$array = null;
        result = JavaArray;
        cls.$array = JavaArray;
    }
    return result;
},
$rt_stringPool_instance,
$rt_stringPool = strings => {
    $rt_stringClassInit();
    $rt_stringPool_instance = new Array(strings.length);
    for (let i = 0;i < strings.length;++i) {
        $rt_stringPool_instance[i] = $rt_intern($rt_str(strings[i]));
    }
},
$rt_s = index => $rt_stringPool_instance[index],
$rt_charArrayToString = (array, offset, count) => {
    let result = "";
    let limit = offset + count;
    for (let i = offset;i < limit;i = i + 1024 | 0) {
        let next = Math.min(limit, i + 1024 | 0);
        result += String.fromCharCode.apply(null, array.subarray(i, next));
    }
    return result;
},
$rt_str = str => str === null ? null : jl_String__init_5(str),
$rt_ustr = str => str === null ? null : str.$nativeString,
$rt_stringClassInit = () => jl_String_$callClinit(),
$rt_intern;
{
    $rt_intern = str => str;
}
let $rt_throw = ex => {
    throw $rt_exception(ex);
},
$rt_javaExceptionProp = Symbol("javaException"),
$rt_exception = ex => {
    if (!ex.$jsException) {
        $rt_fillNativeException(ex);
    }
    return ex.$jsException;
},
$rt_fillNativeException = ex => {
    let javaCause = $rt_throwableCause(ex);
    let jsCause = javaCause !== null ? javaCause.$jsException : void 0;
    let cause = typeof jsCause === "object" ? { cause : jsCause } : void 0;
    let err = new JavaError("Java exception thrown", cause);
    if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(err);
    }
    err[$rt_javaExceptionProp] = ex;
    ex.$jsException = err;
    $rt_fillStack(err, ex);
},
$rt_fillStack = (err, ex) => {
    if (typeof $rt_decodeStack === "function" && err.stack) {
        let stack = $rt_decodeStack(err.stack);
        let javaStack = $rt_createArray($rt_stecls(), stack.length);
        let elem;
        let noStack = false;
        for (let i = 0;i < stack.length;++i) {
            let element = stack[i];
            elem = $rt_createStackElement($rt_str(element.className), $rt_str(element.methodName), $rt_str(element.fileName), element.lineNumber);
            if (elem == null) {
                noStack = true;
                break;
            }
            javaStack.data[i] = elem;
        }
        if (!noStack) {
            $rt_setStack(ex, javaStack);
        }
    }
},
JavaError;
if (typeof Reflect === 'object') {
    let defaultMessage = Symbol("defaultMessage");
    JavaError = function JavaError(message, cause) {
        let self = Reflect.construct(Error, [void 0, cause], JavaError);
        Object.setPrototypeOf(self, JavaError.prototype);
        self[defaultMessage] = message;
        return self;
    }
    ;
    JavaError.prototype = Object.create(Error.prototype, { constructor : { configurable : true, writable : true, value : JavaError }, message : { get() {
        try {
            let javaException = this[$rt_javaExceptionProp];
            if (typeof javaException === 'object') {
                let javaMessage = $rt_throwableMessage(javaException);
                if (typeof javaMessage === "object") {
                    return javaMessage !== null ? javaMessage.toString() : null;
                }
            }
            return this[defaultMessage];
        } catch (e){
            return "Exception occurred trying to extract Java exception message: " + e;
        }
    } } });
} else {
    JavaError = Error;
}
let $rt_javaException = e => e instanceof Error && typeof e[$rt_javaExceptionProp] === 'object' ? e[$rt_javaExceptionProp] : null,
$rt_wrapException = err => {
    let ex = err[$rt_javaExceptionProp];
    if (!ex) {
        ex = $rt_createException($rt_str("(JavaScript) " + err.toString()));
        err[$rt_javaExceptionProp] = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return ex;
},
$rt_createException = message => jl_RuntimeException__init_1(message),
$rt_throwableMessage = t => jl_Throwable_getMessage(t),
$rt_throwableCause = t => jl_Throwable_getCause(t),
$rt_stecls = () => jl_StackTraceElement,
$rt_createStackElement = (className, methodName, fileName, lineNumber) => {
    {
        return null;
    }
},
$rt_setStack = (e, stack) => {
},
$rt_packageData = null,
$rt_packages = data => {
    let i = 0;
    let packages = new Array(data.length);
    for (let j = 0;j < data.length;++j) {
        let prefixIndex = data[i++];
        let prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
        packages[j] = prefix + data[i++] + ".";
    }
    $rt_packageData = packages;
},
$rt_metadata = data => {
    let packages = $rt_packageData;
    let i = 0;
    while (i < data.length) {
        let cls = data[i++];
        cls.$meta = {  };
        let m = cls.$meta;
        let className = data[i++];
        m.name = className !== 0 ? className : null;
        if (m.name !== null) {
            let packageIndex = data[i++];
            if (packageIndex >= 0) {
                m.name = packages[packageIndex] + m.name;
            }
        }
        m.binaryName = "L" + m.name + ";";
        let superclass = data[i++];
        m.superclass = superclass !== 0 ? superclass : null;
        m.supertypes = data[i++];
        if (m.superclass) {
            m.supertypes.push(m.superclass);
            cls.prototype = Object.create(m.superclass.prototype);
        } else {
            cls.prototype = {  };
        }
        let flags = data[i++];
        m.enum = (flags & 8) !== 0;
        m.flags = flags;
        m.primitive = false;
        m.item = null;
        cls.prototype.constructor = cls;
        cls.classObject = null;
        m.accessLevel = data[i++];
        let innerClassInfo = data[i++];
        if (innerClassInfo === 0) {
            m.simpleName = null;
            m.declaringClass = null;
            m.enclosingClass = null;
        } else {
            let enclosingClass = innerClassInfo[0];
            m.enclosingClass = enclosingClass !== 0 ? enclosingClass : null;
            let declaringClass = innerClassInfo[1];
            m.declaringClass = declaringClass !== 0 ? declaringClass : null;
            let simpleName = innerClassInfo[2];
            m.simpleName = simpleName !== 0 ? simpleName : null;
        }
        let clinit = data[i++];
        cls.$clinit = clinit !== 0 ? clinit : function() {
        };
        let virtualMethods = data[i++];
        if (virtualMethods !== 0) {
            for (let j = 0;j < virtualMethods.length;j += 2) {
                let name = virtualMethods[j];
                let func = virtualMethods[j + 1];
                if (typeof name === 'string') {
                    name = [name];
                }
                for (let k = 0;k < name.length;++k) {
                    cls.prototype[name[k]] = func;
                }
            }
        }
        cls.$array = null;
    }
};
function TeaVMThread(runner) {
    this.status = 3;
    this.stack = [];
    this.suspendCallback = null;
    this.runner = runner;
    this.attribute = null;
    this.completeCallback = null;
}
TeaVMThread.prototype.push = function() {
    for (let i = 0;i < arguments.length;++i) {
        this.stack.push(arguments[i]);
    }
    return this;
};
TeaVMThread.prototype.s = TeaVMThread.prototype.push;
TeaVMThread.prototype.pop = function() {
    return this.stack.pop();
};
TeaVMThread.prototype.l = TeaVMThread.prototype.pop;
TeaVMThread.prototype.isResuming = function() {
    return this.status === 2;
};
TeaVMThread.prototype.isSuspending = function() {
    return this.status === 1;
};
TeaVMThread.prototype.suspend = function(callback) {
    this.suspendCallback = callback;
    this.status = 1;
};
TeaVMThread.prototype.start = function(callback) {
    if (this.status !== 3) {
        throw new Error("Thread already started");
    }
    if ($rt_currentNativeThread !== null) {
        throw new Error("Another thread is running");
    }
    this.status = 0;
    this.completeCallback = callback ? callback : result => {
        if (result instanceof Error) {
            throw result;
        }
    };
    this.run();
};
TeaVMThread.prototype.resume = function() {
    if ($rt_currentNativeThread !== null) {
        throw new Error("Another thread is running");
    }
    this.status = 2;
    this.run();
};
TeaVMThread.prototype.run = function() {
    $rt_currentNativeThread = this;
    let result;
    try {
        result = this.runner();
    } catch (e){
        result = e;
    } finally {
        $rt_currentNativeThread = null;
    }
    if (this.suspendCallback !== null) {
        let self = this;
        let callback = this.suspendCallback;
        this.suspendCallback = null;
        callback(() => self.resume());
    } else if (this.status === 0) {
        this.completeCallback(result);
    }
};
let $rt_suspending = () => {
    let thread = $rt_nativeThread();
    return thread != null && thread.isSuspending();
},
$rt_resuming = () => {
    let thread = $rt_nativeThread();
    return thread != null && thread.isResuming();
},
$rt_requireNativeThread = () => {
    let nativeThread = $rt_nativeThread();
    if (nativeThread === null) {
        throw new Error("Suspension point reached from non-threading context " + "(perhaps, from native JS method). See https://teavm.org/docs/runtime/coroutines.html " + "('Interaction with JavaScript' section)");
    }
    return nativeThread;
},
$rt_startThread = (runner, callback) => (new TeaVMThread(runner)).start(callback),
$rt_currentNativeThread = null,
$rt_nativeThread = () => $rt_currentNativeThread,
$rt_invalidPointer = () => {
    throw new Error("Invalid recorded state");
};
function jl_Object() {
    this.$monitor = null;
    this.$id$ = 0;
}
let jl_Object_monitorEnterSync = $o => {
    let var$2;
    if (jl_Thread_currentThread() === null)
        return;
    if ($o.$monitor === null)
        jl_Object_createMonitor($o);
    if ($o.$monitor.$owner === null)
        $o.$monitor.$owner = jl_Thread_currentThread();
    else if ($o.$monitor.$owner !== jl_Thread_currentThread())
        $rt_throw(jl_IllegalStateException__init_0($rt_s(0)));
    var$2 = $o.$monitor;
    var$2.$count = var$2.$count + 1 | 0;
},
jl_Object_monitorExitSync = $o => {
    let var$2, var$3;
    if (jl_Thread_currentThread() === null)
        return;
    if (!jl_Object_isEmptyMonitor($o) && $o.$monitor.$owner === jl_Thread_currentThread()) {
        var$2 = $o.$monitor;
        var$3 = var$2.$count - 1 | 0;
        var$2.$count = var$3;
        if (!var$3)
            $o.$monitor.$owner = null;
        jl_Object_isEmptyMonitor($o);
        return;
    }
    $rt_throw(jl_IllegalMonitorStateException__init_0());
},
jl_Object_monitorEnter0 = $o => {
    let var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();$o = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        var$2 = 1;
        $ptr = 1;
    case 1:
        jl_Object_monitorEnter($o, var$2);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($o, var$2, $ptr);
},
jl_Object_monitorEnter = ($o, $count) => {
    let var$3, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$3 = $thread.pop();$count = $thread.pop();$o = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        if ($o.$monitor === null)
            jl_Object_createMonitor($o);
        if ($o.$monitor.$owner === null)
            $o.$monitor.$owner = jl_Thread_currentThread();
        if ($o.$monitor.$owner === jl_Thread_currentThread()) {
            var$3 = $o.$monitor;
            var$3.$count = var$3.$count + $count | 0;
            return;
        }
        $ptr = 1;
    case 1:
        jl_Object_monitorEnterWait($o, $count);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($o, $count, var$3, $ptr);
},
jl_Object_createMonitor = $o => {
    $o.$monitor = jl_Object$Monitor__init_0();
},
jl_Object_monitorEnterWait = (var$1, var$2) => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();var$1 = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        $ptr = 1;
    case 1:
        jl_Object_monitorEnterWait$_asyncCall_$(var$1, var$2);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push(var$1, var$2, $ptr);
},
jl_Object_monitorEnterWait0 = ($o, $count, $callback) => {
    let $thread_0, var$5, $monitor;
    $thread_0 = jl_Thread_currentThread();
    if ($o.$monitor === null) {
        jl_Object_createMonitor($o);
        jl_Thread_setCurrentThread($thread_0);
        var$5 = $o.$monitor;
        var$5.$count = var$5.$count + $count | 0;
        $callback.$complete(null);
        return;
    }
    if ($o.$monitor.$owner === null) {
        $o.$monitor.$owner = $thread_0;
        jl_Thread_setCurrentThread($thread_0);
        var$5 = $o.$monitor;
        var$5.$count = var$5.$count + $count | 0;
        $callback.$complete(null);
        return;
    }
    $monitor = $o.$monitor;
    if ($monitor.$enteringThreads === null)
        $monitor.$enteringThreads = otp_Platform_createQueue();
    otp_PlatformQueue_add$static($monitor.$enteringThreads, jl_Object$monitorEnterWait$lambda$_6_0__init_0($thread_0, $o, $count, $callback));
},
jl_Object_monitorExit0 = $o => {
    jl_Object_monitorExit($o, 1);
},
jl_Object_monitorExit = ($o, $count) => {
    let $monitor;
    if (!jl_Object_isEmptyMonitor($o) && $o.$monitor.$owner === jl_Thread_currentThread()) {
        $monitor = $o.$monitor;
        $monitor.$count = $monitor.$count - $count | 0;
        if ($monitor.$count > 0)
            return;
        $monitor.$owner = null;
        if ($monitor.$enteringThreads !== null && !otp_PlatformQueue_isEmpty$static($monitor.$enteringThreads))
            otp_Platform_postpone(jl_Object$monitorExit$lambda$_8_0__init_0($o));
        else
            jl_Object_isEmptyMonitor($o);
        return;
    }
    $rt_throw(jl_IllegalMonitorStateException__init_0());
},
jl_Object_waitForOtherThreads = $o => {
    let $monitor, $enteringThreads, $r;
    if (!jl_Object_isEmptyMonitor($o) && $o.$monitor.$owner === null) {
        $monitor = $o.$monitor;
        if ($monitor.$enteringThreads !== null && !otp_PlatformQueue_isEmpty$static($monitor.$enteringThreads)) {
            $enteringThreads = $monitor.$enteringThreads;
            $r = otp_PlatformQueue_remove$static($enteringThreads);
            $monitor.$enteringThreads = null;
            $r.$run();
        }
        return;
    }
},
jl_Object_isEmptyMonitor = $this => {
    let $monitor, var$2;
    $monitor = $this.$monitor;
    if ($monitor === null)
        return 1;
    a: {
        b: {
            if ($monitor.$owner === null) {
                if ($monitor.$enteringThreads !== null) {
                    var$2 = $monitor.$enteringThreads;
                    if (!otp_PlatformQueue_isEmpty$static(var$2))
                        break b;
                }
                if ($monitor.$notifyListeners === null)
                    break a;
                var$2 = $monitor.$notifyListeners;
                if (otp_PlatformQueue_isEmpty$static(var$2))
                    break a;
            }
        }
        return 0;
    }
    jl_Object_deleteMonitor($this);
    return 1;
},
jl_Object_deleteMonitor = $this => {
    $this.$monitor = null;
},
jl_Object__init_ = $this => {
    return;
},
jl_Object__init_0 = () => {
    let var_0 = new jl_Object();
    jl_Object__init_(var_0);
    return var_0;
},
jl_Object_getClass = $this => {
    return jl_Class_getClass($this.constructor);
},
jl_Object_hashCode = $this => {
    return jl_Object_identity($this);
},
jl_Object_equals = ($this, $other) => {
    return $this !== $other ? 0 : 1;
},
jl_Object_toString = $this => {
    let var$1, var$2, var$3;
    var$1 = jl_Class_getName(jl_Object_getClass($this));
    var$2 = jl_Integer_toHexString(jl_Object_identity($this));
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$3, var$1), 64), var$2);
    return jl_StringBuilder_toString(var$3);
},
jl_Object_identity = $this => {
    let $platformThis;
    $platformThis = $this;
    if (!$platformThis.$id$)
        $platformThis.$id$ = $rt_nextId();
    return $this.$id$;
},
jl_Object_lambda$monitorExit$2 = $o => {
    jl_Object_waitForOtherThreads($o);
},
jl_Object_lambda$monitorEnterWait$0 = ($thread_0, $o, $count, $callback) => {
    let var$5;
    jl_Thread_setCurrentThread($thread_0);
    $o.$monitor.$owner = $thread_0;
    var$5 = $o.$monitor;
    var$5.$count = var$5.$count + $count | 0;
    $callback.$complete(null);
},
jl_Object_monitorEnterWait$_asyncCall_$ = (var$1, var$2) => {
    let thread = $rt_requireNativeThread();
    let javaThread = $rt_getThread();
    if (thread.isResuming()) {
        thread.status = 0;
        let result = thread.attribute;
        if (result instanceof Error) {
            throw result;
        }
        return result;
    }
    let callback = function() {
    };
    callback.$complete = val => {
        thread.attribute = val;
        $rt_setThread(javaThread);
        thread.resume();
    };
    callback.$error = e => {
        thread.attribute = $rt_exception(e);
        $rt_setThread(javaThread);
        thread.resume();
    };
    callback = otpp_AsyncCallbackWrapper_create(callback);
    thread.suspend(() => {
        try {
            jl_Object_monitorEnterWait0(var$1, var$2, callback);
            ;
        } catch ($e){
            callback.$error($e);
        }
    });
    return null;
},
kebm_TickEventListener = $rt_classWithoutFields(0);
function jl_Throwable() {
    let a = this; jl_Object.call(a);
    a.$message = null;
    a.$cause = null;
    a.$suppressionEnabled = 0;
    a.$writableStackTrace = 0;
}
let jl_Throwable__init_ = $this => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace();
},
jl_Throwable__init_1 = () => {
    let var_0 = new jl_Throwable();
    jl_Throwable__init_(var_0);
    return var_0;
},
jl_Throwable__init_0 = ($this, $message) => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace();
    $this.$message = $message;
},
jl_Throwable__init_2 = var_0 => {
    let var_1 = new jl_Throwable();
    jl_Throwable__init_0(var_1, var_0);
    return var_1;
},
jl_Throwable_fillInStackTrace = $this => {
    return $this;
},
jl_Throwable_initNativeException = $this => {
    $rt_fillNativeException($this);
},
jl_Throwable_getMessage = $this => {
    return $this.$message;
},
jl_Throwable_getCause = $this => {
    return $this.$cause === $this ? null : $this.$cause;
},
jl_Exception = $rt_classWithoutFields(jl_Throwable),
jl_Exception__init_0 = $this => {
    jl_Throwable__init_($this);
},
jl_Exception__init_1 = () => {
    let var_0 = new jl_Exception();
    jl_Exception__init_0(var_0);
    return var_0;
},
jl_Exception__init_ = ($this, $message) => {
    jl_Throwable__init_0($this, $message);
},
jl_Exception__init_2 = var_0 => {
    let var_1 = new jl_Exception();
    jl_Exception__init_(var_1, var_0);
    return var_1;
},
jl_RuntimeException = $rt_classWithoutFields(jl_Exception),
jl_RuntimeException__init_ = $this => {
    jl_Exception__init_0($this);
},
jl_RuntimeException__init_2 = () => {
    let var_0 = new jl_RuntimeException();
    jl_RuntimeException__init_(var_0);
    return var_0;
},
jl_RuntimeException__init_0 = ($this, $message) => {
    jl_Exception__init_($this, $message);
},
jl_RuntimeException__init_1 = var_0 => {
    let var_1 = new jl_RuntimeException();
    jl_RuntimeException__init_0(var_1, var_0);
    return var_1;
},
jl_IndexOutOfBoundsException = $rt_classWithoutFields(jl_RuntimeException),
jl_IndexOutOfBoundsException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
jl_IndexOutOfBoundsException__init_0 = () => {
    let var_0 = new jl_IndexOutOfBoundsException();
    jl_IndexOutOfBoundsException__init_(var_0);
    return var_0;
},
ju_Arrays = $rt_classWithoutFields(),
ju_Arrays_copyOf = ($array, $length) => {
    let var$3, $result, $sz, $i;
    var$3 = $array.data;
    $result = $rt_createCharArray($length);
    $sz = jl_Math_min($length, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_copyOf0 = ($original, $newLength) => {
    let var$3, $result, $sz, $i;
    var$3 = $original.data;
    $result = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass($original)), $newLength);
    $sz = jl_Math_min($newLength, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_binarySearch = ($a, $key) => {
    return ju_Arrays_binarySearch0($a, 0, $a.data.length, $key);
},
ju_Arrays_binarySearch0 = ($a, $fromIndex, $toIndex, $key) => {
    let $u, var$6, $i, $e, var$9;
    if ($fromIndex > $toIndex)
        $rt_throw(jl_IllegalArgumentException__init_());
    $u = $toIndex - 1 | 0;
    while (true) {
        if ($fromIndex > $u)
            return ( -$fromIndex | 0) - 1 | 0;
        var$6 = $a.data;
        $i = ($fromIndex + $u | 0) / 2 | 0;
        $e = var$6[$i];
        var$9 = $rt_compare($e, $key);
        if (!var$9)
            break;
        if (var$9 <= 0)
            $fromIndex = $i + 1 | 0;
        else
            $u = $i - 1 | 0;
    }
    return $i;
},
otj_JSObject = $rt_classWithoutFields(0),
otj_JSObject_cast$static = $this => {
    return $this;
},
otjde_EventListener = $rt_classWithoutFields(0);
function ket_InputTouchTeavmSystemBase$init$lambda$_1_5() {
    jl_Object.call(this);
    this.$_01 = null;
}
let ket_InputTouchTeavmSystemBase$init$lambda$_1_5__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_01 = var$1;
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_5__init_0 = var_0 => {
    let var_1 = new ket_InputTouchTeavmSystemBase$init$lambda$_1_5();
    ket_InputTouchTeavmSystemBase$init$lambda$_1_5__init_(var_1, var_0);
    return var_1;
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_5_handleEvent = (var$0, var$1) => {
    ket_InputTouchTeavmSystemBase_lambda$init$5(var$0.$_01, var$1);
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_5_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
};
function ket_InputTouchTeavmSystemBase$init$lambda$_1_4() {
    jl_Object.call(this);
    this.$_03 = null;
}
let ket_InputTouchTeavmSystemBase$init$lambda$_1_4__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_03 = var$1;
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_4__init_0 = var_0 => {
    let var_1 = new ket_InputTouchTeavmSystemBase$init$lambda$_1_4();
    ket_InputTouchTeavmSystemBase$init$lambda$_1_4__init_(var_1, var_0);
    return var_1;
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_4_handleEvent = (var$0, var$1) => {
    ket_InputTouchTeavmSystemBase_lambda$init$4(var$0.$_03, var$1);
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_4_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
},
jl_System = $rt_classWithoutFields(),
jl_System_currentTimeMillis = () => {
    return Long_fromNumber((new Date()).getTime());
},
jl_System_nanoTime = () => {
    return Long_fromNumber(performance.now() * 1000000.0);
},
juf_Function = $rt_classWithoutFields(0),
keb_World$removeComponent$lambda$_6_0 = $rt_classWithoutFields(),
keb_World$removeComponent$lambda$_6_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
keb_World$removeComponent$lambda$_6_0__init_0 = () => {
    let var_0 = new keb_World$removeComponent$lambda$_6_0();
    keb_World$removeComponent$lambda$_6_0__init_(var_0);
    return var_0;
},
keb_World$removeComponent$lambda$_6_0_apply0 = (var$0, var$1) => {
    return keb_World$removeComponent$lambda$_6_0_apply(var$0, var$1);
},
keb_World$removeComponent$lambda$_6_0_apply = (var$0, var$1) => {
    return keb_World_lambda$removeComponent$0(var$1);
},
kebm_TouchInputListener = $rt_classWithoutFields(0),
keb_Component = $rt_classWithoutFields(0);
function kebc_Spooka() {
    jl_Object.call(this);
    this.$type = 0;
}
let kebc_Spooka__init_ = ($this, $type) => {
    jl_Object__init_($this);
    $this.$type = $type;
},
kebc_Spooka__init_0 = var_0 => {
    let var_1 = new kebc_Spooka();
    kebc_Spooka__init_(var_1, var_0);
    return var_1;
};
function keth_Star() {
    let a = this; jl_Object.call(a);
    a.$x2 = 0.0;
    a.$y2 = 0.0;
    a.$r = 0.0;
    a.$phase = 0.0;
}
let keth_Star__init_ = ($this, $x, $y, $r, $phase) => {
    jl_Object__init_($this);
    $this.$x2 = $x;
    $this.$y2 = $y;
    $this.$r = $r;
    $this.$phase = $phase;
},
keth_Star__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new keth_Star();
    keth_Star__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jl_Comparable = $rt_classWithoutFields(0),
ji_Serializable = $rt_classWithoutFields(0);
function jl_Enum() {
    let a = this; jl_Object.call(a);
    a.$name1 = null;
    a.$ordinal0 = 0;
}
let jl_Enum__init_ = ($this, $name, $ordinal) => {
    jl_Object__init_($this);
    $this.$name1 = $name;
    $this.$ordinal0 = $ordinal;
},
jl_Enum_ordinal = $this => {
    return $this.$ordinal0;
},
keth_SpookaType = $rt_classWithoutFields(jl_Enum),
keth_SpookaType_spider = null,
keth_SpookaType_pumpkin = null,
keth_SpookaType_ghost = null,
keth_SpookaType_bat = null,
keth_SpookaType_cat = null,
keth_SpookaType_$VALUES = null,
keth_SpookaType_$callClinit = () => {
    keth_SpookaType_$callClinit = $rt_eraseClinit(keth_SpookaType);
    keth_SpookaType__clinit_();
},
keth_SpookaType__init_0 = ($this, var$1, var$2) => {
    keth_SpookaType_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
},
keth_SpookaType__init_ = (var_0, var_1) => {
    let var_2 = new keth_SpookaType();
    keth_SpookaType__init_0(var_2, var_0, var_1);
    return var_2;
},
keth_SpookaType_$values = () => {
    let var$1, var$2;
    keth_SpookaType_$callClinit();
    var$1 = $rt_createArray(keth_SpookaType, 5);
    var$2 = var$1.data;
    var$2[0] = keth_SpookaType_spider;
    var$2[1] = keth_SpookaType_pumpkin;
    var$2[2] = keth_SpookaType_ghost;
    var$2[3] = keth_SpookaType_bat;
    var$2[4] = keth_SpookaType_cat;
    return var$1;
},
keth_SpookaType__clinit_ = () => {
    keth_SpookaType_spider = keth_SpookaType__init_($rt_s(1), 0);
    keth_SpookaType_pumpkin = keth_SpookaType__init_($rt_s(2), 1);
    keth_SpookaType_ghost = keth_SpookaType__init_($rt_s(3), 2);
    keth_SpookaType_bat = keth_SpookaType__init_($rt_s(4), 3);
    keth_SpookaType_cat = keth_SpookaType__init_($rt_s(5), 4);
    keth_SpookaType_$VALUES = keth_SpookaType_$values();
},
keb_SystemBase = $rt_classWithoutFields(0),
keb_SystemBase_init = $this => {
    return;
},
keb_SystemBase_done = $this => {
    return;
},
keb_SystemBase_update = $this => {
    return;
};
function kebs_CollisionSystem() {
    let a = this; jl_Object.call(a);
    a.$world0 = null;
    a.$collisionListener = null;
}
let kebs_CollisionSystem__init_ = ($this, $world, $collisionListener) => {
    jl_Object__init_($this);
    $this.$world0 = $world;
    $this.$collisionListener = $collisionListener;
},
kebs_CollisionSystem__init_0 = (var_0, var_1) => {
    let var_2 = new kebs_CollisionSystem();
    kebs_CollisionSystem__init_(var_2, var_0, var_1);
    return var_2;
},
kebs_CollisionSystem_update = $this => {
    let $lst, var$2, $e1, var$4, $e2, $p1, $r1, $p2, $r2, $dx, $dy, $dist2, $radius;
    $lst = $this.$world0.$getEntitiesWith($rt_cls(kebc_Position), $rt_cls(kebc_Collision));
    var$2 = $lst.$iterator();
    while (var$2.$hasNext()) {
        $e1 = var$2.$next();
        var$4 = $lst.$iterator();
        while (var$4.$hasNext()) {
            $e2 = var$4.$next();
            if (Long_ne($e1.$id(), $e2.$id())) {
                $p1 = $this.$world0.$getComponent($e1, $rt_cls(kebc_Position));
                $r1 = $this.$world0.$getComponent($e1, $rt_cls(kebc_Collision));
                $p2 = $this.$world0.$getComponent($e2, $rt_cls(kebc_Position));
                $r2 = $this.$world0.$getComponent($e2, $rt_cls(kebc_Collision));
                if ($p1 !== null && $p2 !== null && $r1 !== null && $r2 !== null) {
                    $dx = $p1.$getX() - $p2.$getX();
                    $dy = $p1.$getY() - $p2.$getY();
                    $dist2 = $dx * $dx + $dy * $dy;
                    $radius = $r1.$radius() + $r2.$radius();
                    if ($dist2 < $radius * $radius)
                        $this.$collisionListener.$collision($this.$world0, $e1, $e2);
                }
            }
        }
    }
};
function ket_InputTouchTeavmSystemBase$init$lambda$_1_3() {
    jl_Object.call(this);
    this.$_0 = null;
}
let ket_InputTouchTeavmSystemBase$init$lambda$_1_3__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_0 = var$1;
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_3__init_0 = var_0 => {
    let var_1 = new ket_InputTouchTeavmSystemBase$init$lambda$_1_3();
    ket_InputTouchTeavmSystemBase$init$lambda$_1_3__init_(var_1, var_0);
    return var_1;
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_3_handleEvent = (var$0, var$1) => {
    ket_InputTouchTeavmSystemBase_lambda$init$3(var$0.$_0, var$1);
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_3_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
},
jl_Number = $rt_classWithoutFields(),
jl_Number__init_ = $this => {
    jl_Object__init_($this);
};
function jl_Integer() {
    jl_Number.call(this);
    this.$value0 = 0;
}
let jl_Integer_TYPE = null,
jl_Integer_integerCache = null,
jl_Integer_$callClinit = () => {
    jl_Integer_$callClinit = $rt_eraseClinit(jl_Integer);
    jl_Integer__clinit_();
},
jl_Integer__init_ = ($this, $value) => {
    jl_Integer_$callClinit();
    jl_Number__init_($this);
    $this.$value0 = $value;
},
jl_Integer__init_0 = var_0 => {
    let var_1 = new jl_Integer();
    jl_Integer__init_(var_1, var_0);
    return var_1;
},
jl_Integer_toHexString = $i => {
    jl_Integer_$callClinit();
    return otci_IntegerUtil_toUnsignedLogRadixString($i, 4);
},
jl_Integer_valueOf = $i => {
    jl_Integer_$callClinit();
    if ($i >= (-128) && $i <= 127) {
        jl_Integer_ensureIntegerCache();
        return jl_Integer_integerCache.data[$i + 128 | 0];
    }
    return jl_Integer__init_0($i);
},
jl_Integer_ensureIntegerCache = () => {
    let $j;
    jl_Integer_$callClinit();
    a: {
        if (jl_Integer_integerCache === null) {
            jl_Integer_integerCache = $rt_createArray(jl_Integer, 256);
            $j = 0;
            while (true) {
                if ($j >= jl_Integer_integerCache.data.length)
                    break a;
                jl_Integer_integerCache.data[$j] = jl_Integer__init_0($j - 128 | 0);
                $j = $j + 1 | 0;
            }
        }
    }
},
jl_Integer_equals = ($this, $other) => {
    if ($this === $other)
        return 1;
    return $other instanceof jl_Integer && $other.$value0 == $this.$value0 ? 1 : 0;
},
jl_Integer_numberOfLeadingZeros = $i => {
    let $n, var$3, var$4;
    jl_Integer_$callClinit();
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i >>> 16 | 0;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    var$4 = var$3 >>> 8 | 0;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 8;
    var$3 = var$4 >>> 4 | 0;
    if (!var$3)
        var$3 = var$4;
    else
        $n = $n | 4;
    var$4 = var$3 >>> 2 | 0;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 2;
    if (var$4 >>> 1 | 0)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
},
jl_Integer__clinit_ = () => {
    jl_Integer_TYPE = $rt_cls($rt_intcls);
};
function ket_InputTouchTeavmSystemBase$init$lambda$_1_2() {
    jl_Object.call(this);
    this.$_06 = null;
}
let ket_InputTouchTeavmSystemBase$init$lambda$_1_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_06 = var$1;
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_2__init_0 = var_0 => {
    let var_1 = new ket_InputTouchTeavmSystemBase$init$lambda$_1_2();
    ket_InputTouchTeavmSystemBase$init$lambda$_1_2__init_(var_1, var_0);
    return var_1;
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_2_handleEvent = (var$0, var$1) => {
    ket_InputTouchTeavmSystemBase_lambda$init$2(var$0.$_06, var$1);
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
};
function ket_InputTouchTeavmSystemBase$init$lambda$_1_1() {
    jl_Object.call(this);
    this.$_02 = null;
}
let ket_InputTouchTeavmSystemBase$init$lambda$_1_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_02 = var$1;
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_1__init_0 = var_0 => {
    let var_1 = new ket_InputTouchTeavmSystemBase$init$lambda$_1_1();
    ket_InputTouchTeavmSystemBase$init$lambda$_1_1__init_(var_1, var_0);
    return var_1;
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_1_handleEvent = (var$0, var$1) => {
    ket_InputTouchTeavmSystemBase_lambda$init$1(var$0.$_02, var$1);
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
};
function ket_InputTouchTeavmSystemBase$init$lambda$_1_0() {
    jl_Object.call(this);
    this.$_05 = null;
}
let ket_InputTouchTeavmSystemBase$init$lambda$_1_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_05 = var$1;
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_0__init_0 = var_0 => {
    let var_1 = new ket_InputTouchTeavmSystemBase$init$lambda$_1_0();
    ket_InputTouchTeavmSystemBase$init$lambda$_1_0__init_(var_1, var_0);
    return var_1;
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_0_handleEvent = (var$0, var$1) => {
    ket_InputTouchTeavmSystemBase_lambda$init$0(var$0.$_05, var$1);
},
ket_InputTouchTeavmSystemBase$init$lambda$_1_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
},
ju_Iterator = $rt_classWithoutFields(0),
ju_ListIterator = $rt_classWithoutFields(0),
ju_Collections$5 = $rt_classWithoutFields(),
ju_Collections$5__init_ = $this => {
    jl_Object__init_($this);
},
ju_Collections$5__init_0 = () => {
    let var_0 = new ju_Collections$5();
    ju_Collections$5__init_(var_0);
    return var_0;
},
jl_AbstractStringBuilder$Constants = $rt_classWithoutFields(),
jl_AbstractStringBuilder$Constants_longLogPowersOfTen = null,
jl_AbstractStringBuilder$Constants_doubleAnalysisResult = null,
jl_AbstractStringBuilder$Constants_floatAnalysisResult = null,
jl_AbstractStringBuilder$Constants_$callClinit = () => {
    jl_AbstractStringBuilder$Constants_$callClinit = $rt_eraseClinit(jl_AbstractStringBuilder$Constants);
    jl_AbstractStringBuilder$Constants__clinit_();
},
jl_AbstractStringBuilder$Constants__clinit_ = () => {
    jl_AbstractStringBuilder$Constants_longLogPowersOfTen = $rt_createLongArrayFromData([Long_fromInt(1), Long_fromInt(10), Long_fromInt(100), Long_fromInt(10000), Long_fromInt(100000000), Long_create(1874919424, 2328306)]);
    jl_AbstractStringBuilder$Constants_doubleAnalysisResult = otcit_DoubleAnalyzer$Result__init_();
    jl_AbstractStringBuilder$Constants_floatAnalysisResult = otcit_FloatAnalyzer$Result__init_0();
},
jl_Iterable = $rt_classWithoutFields(0),
ju_Collection = $rt_classWithoutFields(0),
ju_AbstractCollection = $rt_classWithoutFields(),
ju_AbstractCollection__init_ = $this => {
    jl_Object__init_($this);
},
ju_AbstractCollection_contains = ($this, $o) => {
    let $iter, $e;
    $iter = $this.$iterator();
    while ($iter.$hasNext()) {
        $e = $iter.$next();
        if (ju_Objects_equals($e, $o))
            return 1;
    }
    return 0;
},
ju_SequencedCollection = $rt_classWithoutFields(0),
ju_List = $rt_classWithoutFields(0),
ju_List_of = ($e1, $e2, $e3) => {
    ju_Objects_requireNonNull($e1);
    ju_Objects_requireNonNull($e2);
    ju_Objects_requireNonNull($e3);
    return ju_TemplateCollections$ImmutableArrayList__init_0($rt_wrapArray(jl_Object, [$e1, $e2, $e3]));
};
function ju_AbstractList() {
    ju_AbstractCollection.call(this);
    this.$modCount0 = 0;
}
let ju_AbstractList__init_ = $this => {
    ju_AbstractCollection__init_($this);
},
ju_AbstractList_iterator = $this => {
    return ju_AbstractList$1__init_0($this);
},
ju_RandomAccess = $rt_classWithoutFields(0),
ju_TemplateCollections$AbstractImmutableList = $rt_classWithoutFields(ju_AbstractList),
ju_TemplateCollections$AbstractImmutableList__init_ = $this => {
    ju_AbstractList__init_($this);
},
ju_Collections$3 = $rt_classWithoutFields(ju_TemplateCollections$AbstractImmutableList),
ju_Collections$3__init_ = $this => {
    ju_TemplateCollections$AbstractImmutableList__init_($this);
},
ju_Collections$3__init_0 = () => {
    let var_0 = new ju_Collections$3();
    ju_Collections$3__init_(var_0);
    return var_0;
};
function ket_InputKeysTeavmSystemBase() {
    let a = this; jl_Object.call(a);
    a.$world6 = null;
    a.$keyCallback = null;
    a.$cmds = null;
    a.$keydown = null;
    a.$keyup = null;
}
let ket_InputKeysTeavmSystemBase__init_ = ($this, $world, $cmds, $keyCallback) => {
    jl_Object__init_($this);
    $this.$keydown = otji_JSWrapper_unwrap(ket_InputKeysTeavmSystemBase$1__init_0($this));
    $this.$keyup = otji_JSWrapper_unwrap(ket_InputKeysTeavmSystemBase$2__init_0($this));
    $this.$world6 = $world;
    $this.$cmds = $cmds;
    $this.$keyCallback = $keyCallback;
},
ket_InputKeysTeavmSystemBase__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new ket_InputKeysTeavmSystemBase();
    ket_InputKeysTeavmSystemBase__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
ket_InputKeysTeavmSystemBase_init = $this => {
    let var$1, var$2;
    var$1 = window;
    var$2 = $this.$keydown;
    var$1.addEventListener("keydown", otji_JS_function(var$2, "handleEvent"));
    var$2 = window;
    var$1 = $this.$keyup;
    var$2.addEventListener("keyup", otji_JS_function(var$1, "handleEvent"));
},
ju_Collections$4 = $rt_classWithoutFields(),
ju_Collections$4__init_ = $this => {
    jl_Object__init_($this);
},
ju_Collections$4__init_0 = () => {
    let var_0 = new ju_Collections$4();
    ju_Collections$4__init_(var_0);
    return var_0;
},
ju_Collections$4_hasNext = $this => {
    return 0;
},
ju_Collections$4_next = $this => {
    $rt_throw(ju_NoSuchElementException__init_());
},
jl_Character = $rt_classWithoutFields(),
jl_Character_TYPE = null,
jl_Character_characterCache = null,
jl_Character_$callClinit = () => {
    jl_Character_$callClinit = $rt_eraseClinit(jl_Character);
    jl_Character__clinit_();
},
jl_Character_forDigit = ($digit, $radix) => {
    jl_Character_$callClinit();
    if ($radix >= 2 && $radix <= 36 && $digit >= 0 && $digit < $radix)
        return $digit < 10 ? (48 + $digit | 0) & 65535 : ((97 + $digit | 0) - 10 | 0) & 65535;
    return 0;
},
jl_Character__clinit_ = () => {
    jl_Character_TYPE = $rt_cls($rt_charcls);
    jl_Character_characterCache = $rt_createArray(jl_Character, 128);
},
ju_Set = $rt_classWithoutFields(0),
ju_AbstractSet = $rt_classWithoutFields(ju_AbstractCollection),
ju_AbstractSet__init_ = $this => {
    ju_AbstractCollection__init_($this);
},
ju_TemplateCollections$AbstractImmutableSet = $rt_classWithoutFields(ju_AbstractSet),
ju_TemplateCollections$AbstractImmutableSet__init_ = $this => {
    ju_AbstractSet__init_($this);
},
ju_Collections$1 = $rt_classWithoutFields(ju_TemplateCollections$AbstractImmutableSet),
ju_Collections$1__init_ = $this => {
    ju_TemplateCollections$AbstractImmutableSet__init_($this);
},
ju_Collections$1__init_0 = () => {
    let var_0 = new ju_Collections$1();
    ju_Collections$1__init_(var_0);
    return var_0;
},
ju_Collections$1_iterator = $this => {
    return ju_Collections_emptyIterator();
},
ju_Map = $rt_classWithoutFields(0),
ju_Map_getOrDefault = ($this, $key, $defaultValue) => {
    if ($this.$containsKey($key))
        $defaultValue = $this.$get($key);
    return $defaultValue;
},
ju_Map_computeIfAbsent = ($this, $key, $mappingFunction) => {
    let $v, $newValue;
    ju_Objects_requireNonNull($mappingFunction);
    $v = $this.$get($key);
    if ($v !== null)
        return $v;
    $newValue = $mappingFunction.$apply0($key);
    if ($newValue !== null)
        $this.$put($key, $newValue);
    return $newValue;
},
ju_Map_of = () => {
    return ju_Collections_emptyMap();
};
function ju_AbstractMap() {
    jl_Object.call(this);
    this.$cachedKeySet = null;
}
let ju_AbstractMap__init_ = $this => {
    jl_Object__init_($this);
},
ju_AbstractMap_keySet = $this => {
    if ($this.$cachedKeySet === null)
        $this.$cachedKeySet = ju_AbstractMap$KeySet__init_($this);
    return $this.$cachedKeySet;
},
ju_TemplateCollections$AbstractImmutableMap = $rt_classWithoutFields(ju_AbstractMap),
ju_TemplateCollections$AbstractImmutableMap__init_ = $this => {
    ju_AbstractMap__init_($this);
},
ju_Collections$2 = $rt_classWithoutFields(ju_TemplateCollections$AbstractImmutableMap),
ju_Collections$2__init_ = $this => {
    ju_TemplateCollections$AbstractImmutableMap__init_($this);
},
ju_Collections$2__init_0 = () => {
    let var_0 = new ju_Collections$2();
    ju_Collections$2__init_(var_0);
    return var_0;
},
ju_Collections$2_entrySet = $this => {
    return ju_Collections_emptySet();
},
ju_Collections$2_size = $this => {
    return 0;
},
ju_Collections$2_get = ($this, $key) => {
    return null;
},
jl_Long = $rt_classWithoutFields(jl_Number),
jl_Long_TYPE = null,
jl_Long_$callClinit = () => {
    jl_Long_$callClinit = $rt_eraseClinit(jl_Long);
    jl_Long__clinit_();
},
jl_Long_hashCode = $value => {
    jl_Long_$callClinit();
    return Long_lo($value) ^ Long_hi($value);
},
jl_Long_divideUnsigned = (var$1, var$2) => {
    return Long_udiv(var$1, var$2);
},
jl_Long_compareUnsigned = (var$1, var$2) => {
    return Long_ucompare(var$1, var$2);
},
jl_Long__clinit_ = () => {
    jl_Long_TYPE = $rt_cls($rt_longcls);
};
function kebc_TickEvent() {
    let a = this; jl_Object.call(a);
    a.$tickChangeRange = null;
    a.$tickInt = 0;
    a.$tickChange = 0;
}
let kebc_TickEvent__init_ = ($this, $tickRange) => {
    jl_Object__init_($this);
    $this.$tickInt = 0;
    $this.$tickChangeRange = $tickRange;
    $this.$tickChange = $this.$tickChangeRange.$random();
},
kebc_TickEvent__init_0 = var_0 => {
    let var_1 = new kebc_TickEvent();
    kebc_TickEvent__init_(var_1, var_0);
    return var_1;
},
kebc_TickEvent_tick = $this => {
    let $tick, var$2, $result;
    $tick = Long_fromInt($this.$tickInt);
    var$2 = Long_rem(Long_add($tick, Long_fromInt(1)), Long_fromInt(2147483647));
    $this.$tickInt = Long_lo(var$2);
    $result = Long_ne(var$2, Long_fromInt($this.$tickChange)) ? 0 : 1;
    if ($result) {
        $this.$tickInt = 0;
        $this.$tickChange = $this.$tickChangeRange.$random();
    }
    return $result;
},
jl_Runnable = $rt_classWithoutFields(0);
function jl_Thread() {
    let a = this; jl_Object.call(a);
    a.$id1 = Long_ZERO;
    a.$timeSliceStart = Long_ZERO;
    a.$finishedLock = null;
    a.$interruptHandler = null;
    a.$name0 = null;
    a.$alive0 = 0;
    a.$target = null;
}
let jl_Thread_mainThread = null,
jl_Thread_currentThread0 = null,
jl_Thread_nextId = 0,
jl_Thread_activeCount = 0,
jl_Thread_defaultUncaughtExceptionHandler = null,
jl_Thread_$callClinit = () => {
    jl_Thread_$callClinit = $rt_eraseClinit(jl_Thread);
    jl_Thread__clinit_();
},
jl_Thread__init_0 = ($this, $name) => {
    jl_Thread_$callClinit();
    jl_Thread__init_($this, null, $name);
},
jl_Thread__init_1 = var_0 => {
    let var_1 = new jl_Thread();
    jl_Thread__init_0(var_1, var_0);
    return var_1;
},
jl_Thread__init_ = ($this, $target, $name) => {
    let var$3;
    jl_Thread_$callClinit();
    jl_Object__init_($this);
    $this.$finishedLock = jl_Object__init_0();
    $this.$alive0 = 1;
    $this.$name0 = $name;
    $this.$target = $target;
    var$3 = jl_Thread_nextId;
    jl_Thread_nextId = var$3 + 1 | 0;
    $this.$id1 = Long_fromInt(var$3);
},
jl_Thread__init_2 = (var_0, var_1) => {
    let var_2 = new jl_Thread();
    jl_Thread__init_(var_2, var_0, var_1);
    return var_2;
},
jl_Thread_setCurrentThread = $thread_0 => {
    jl_Thread_$callClinit();
    if (jl_Thread_currentThread0 !== $thread_0)
        jl_Thread_currentThread0 = $thread_0;
    jl_Thread_currentThread0.$timeSliceStart = jl_System_currentTimeMillis();
},
jl_Thread_currentThread = () => {
    jl_Thread_$callClinit();
    return jl_Thread_currentThread0;
},
jl_Thread_sleep = var$1 => {
    let $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$1 = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        jl_Thread_$callClinit();
        $ptr = 1;
    case 1:
        jl_Thread_sleep$_asyncCall_$(var$1);
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push(var$1, $ptr);
},
jl_Thread_sleep0 = ($millis, $callback) => {
    let $current, $handler, $intMillis;
    jl_Thread_$callClinit();
    $current = jl_Thread_currentThread();
    $handler = jl_Thread$SleepHandler__init_0($current, $callback);
    $intMillis = Long_ge($millis, Long_fromInt(2147483647)) ? 2147483647 : Long_lo($millis);
    $handler.$scheduleId = otp_Platform_schedule($handler, $intMillis);
    $current.$interruptHandler = $handler;
},
jl_Thread__clinit_ = () => {
    jl_Thread_mainThread = jl_Thread__init_1($rt_s(6));
    jl_Thread_currentThread0 = jl_Thread_mainThread;
    jl_Thread_nextId = 1;
    jl_Thread_activeCount = 1;
    jl_Thread_defaultUncaughtExceptionHandler = jl_DefaultUncaughtExceptionHandler__init_0();
},
jl_Thread_sleep$_asyncCall_$ = var$1 => {
    let thread = $rt_requireNativeThread();
    let javaThread = $rt_getThread();
    if (thread.isResuming()) {
        thread.status = 0;
        let result = thread.attribute;
        if (result instanceof Error) {
            throw result;
        }
        return result;
    }
    let callback = function() {
    };
    callback.$complete = val => {
        thread.attribute = val;
        $rt_setThread(javaThread);
        thread.resume();
    };
    callback.$error = e => {
        thread.attribute = $rt_exception(e);
        $rt_setThread(javaThread);
        thread.resume();
    };
    callback = otpp_AsyncCallbackWrapper_create(callback);
    thread.suspend(() => {
        try {
            jl_Thread_sleep0(var$1, callback);
            ;
        } catch ($e){
            callback.$error($e);
        }
    });
    return null;
},
otp_PlatformRunnable = $rt_classWithoutFields(0);
function jl_Object$monitorExit$lambda$_8_0() {
    jl_Object.call(this);
    this.$_04 = null;
}
let jl_Object$monitorExit$lambda$_8_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_04 = var$1;
},
jl_Object$monitorExit$lambda$_8_0__init_0 = var_0 => {
    let var_1 = new jl_Object$monitorExit$lambda$_8_0();
    jl_Object$monitorExit$lambda$_8_0__init_(var_1, var_0);
    return var_1;
},
jl_Object$monitorExit$lambda$_8_0_run = var$0 => {
    jl_Object_lambda$monitorExit$2(var$0.$_04);
},
otp_PlatformQueue = $rt_classWithoutFields(),
otp_PlatformQueue_wrap = $obj => {
    return $obj;
},
otp_PlatformQueue_isEmpty$static = $this => {
    return $this.length ? 0 : 1;
},
otp_PlatformQueue_add$static = ($this, $e) => {
    let var$3;
    var$3 = otp_PlatformQueue_wrap($e);
    $this.push(var$3);
},
otp_PlatformQueue_remove$static = $this => {
    return otji_JSWrapper_maybeWrap($this.shift());
},
jl_CharSequence = $rt_classWithoutFields(0),
jl_StringIndexOutOfBoundsException = $rt_classWithoutFields(jl_IndexOutOfBoundsException),
jl_StringIndexOutOfBoundsException__init_ = $this => {
    jl_IndexOutOfBoundsException__init_($this);
},
jl_StringIndexOutOfBoundsException__init_0 = () => {
    let var_0 = new jl_StringIndexOutOfBoundsException();
    jl_StringIndexOutOfBoundsException__init_(var_0);
    return var_0;
},
otcir_ClassList = $rt_classWithoutFields(),
ju_Comparator = $rt_classWithoutFields(0),
ju_Collections$_clinit_$lambda$_59_0 = $rt_classWithoutFields(),
ju_Collections$_clinit_$lambda$_59_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
ju_Collections$_clinit_$lambda$_59_0__init_0 = () => {
    let var_0 = new ju_Collections$_clinit_$lambda$_59_0();
    ju_Collections$_clinit_$lambda$_59_0__init_(var_0);
    return var_0;
},
otji_JSWrapper$Helper = $rt_classWithoutFields(),
otji_JSWrapper$Helper_hashCodes = null,
otji_JSWrapper$Helper_wrappers = null,
otji_JSWrapper$Helper_stringWrappers = null,
otji_JSWrapper$Helper_numberWrappers = null,
otji_JSWrapper$Helper_undefinedWrapper = null,
otji_JSWrapper$Helper_stringFinalizationRegistry = null,
otji_JSWrapper$Helper_numberFinalizationRegistry = null,
otji_JSWrapper$Helper_$callClinit = () => {
    otji_JSWrapper$Helper_$callClinit = $rt_eraseClinit(otji_JSWrapper$Helper);
    otji_JSWrapper$Helper__clinit_();
},
otji_JSWrapper$Helper_lambda$static$1 = $token => {
    otji_JSWrapper$Helper_$callClinit();
    otji_JSWrapper$Helper_numberWrappers.delete($token);
},
otji_JSWrapper$Helper_lambda$static$0 = $token => {
    otji_JSWrapper$Helper_$callClinit();
    otji_JSWrapper$Helper_stringWrappers.delete($token);
},
otji_JSWrapper$Helper__clinit_ = () => {
    let var$1;
    otji_JSWrapper$Helper_hashCodes = new WeakMap();
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new WeakMap();
    otji_JSWrapper$Helper_wrappers = var$1;
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    otji_JSWrapper$Helper_stringWrappers = var$1;
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    otji_JSWrapper$Helper_numberWrappers = var$1;
    if (otji_JSWrapper$Helper_stringWrappers === null)
        var$1 = null;
    else {
        var$1 = otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_0();
        var$1 = new FinalizationRegistry(otji_JS_function(otji_JSWrapper_unwrap(var$1), "accept"));
    }
    otji_JSWrapper$Helper_stringFinalizationRegistry = var$1;
    if (otji_JSWrapper$Helper_numberWrappers === null)
        var$1 = null;
    else {
        var$1 = otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_0();
        var$1 = new FinalizationRegistry(otji_JS_function(otji_JSWrapper_unwrap(var$1), "accept"));
    }
    otji_JSWrapper$Helper_numberFinalizationRegistry = var$1;
};
function jl_AbstractStringBuilder() {
    let a = this; jl_Object.call(a);
    a.$buffer = null;
    a.$length0 = 0;
}
let jl_AbstractStringBuilder__init_0 = $this => {
    jl_AbstractStringBuilder__init_($this, 16);
},
jl_AbstractStringBuilder__init_1 = () => {
    let var_0 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_0(var_0);
    return var_0;
},
jl_AbstractStringBuilder__init_ = ($this, $capacity) => {
    jl_Object__init_($this);
    $this.$buffer = $rt_createCharArray($capacity);
},
jl_AbstractStringBuilder__init_2 = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder_append0 = ($this, $obj) => {
    return $this.$insert($this.$length0, $obj);
},
jl_AbstractStringBuilder_insert = ($this, $index, $string) => {
    let $i, var$4, var$5;
    if ($index >= 0 && $index <= $this.$length0) {
        if ($string === null)
            $string = $rt_s(7);
        else if ($string.$isEmpty())
            return $this;
        $this.$ensureCapacity($this.$length0 + $string.$length() | 0);
        $i = $this.$length0 - 1 | 0;
        while ($i >= $index) {
            $this.$buffer.data[$i + $string.$length() | 0] = $this.$buffer.data[$i];
            $i = $i + (-1) | 0;
        }
        $this.$length0 = $this.$length0 + $string.$length() | 0;
        $i = 0;
        while ($i < $string.$length()) {
            var$4 = $this.$buffer.data;
            var$5 = $index + 1 | 0;
            var$4[$index] = $string.$charAt($i);
            $i = $i + 1 | 0;
            $index = var$5;
        }
        return $this;
    }
    $rt_throw(jl_StringIndexOutOfBoundsException__init_0());
},
jl_AbstractStringBuilder_append = ($this, $value) => {
    return $this.$insert0($this.$length0, $value);
},
jl_AbstractStringBuilder_insert2 = ($this, $target, $value) => {
    let var$3, var$4, var$5, $number, $mantissa, $exp, $negative, $intPart, $sz, $digits, $zeros, $leadingZeros, $leadingZero, var$16, $pos, $i, $intDigit, var$20;
    var$3 = $rt_compare($value, 0.0);
    if (!var$3) {
        if (1.0 / $value === Infinity) {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 3 | 0);
            var$4 = $this.$buffer.data;
            var$3 = $target + 1 | 0;
            var$4[$target] = 48;
            var$4 = $this.$buffer.data;
            var$5 = var$3 + 1 | 0;
            var$4[var$3] = 46;
            $this.$buffer.data[var$5] = 48;
            return $this;
        }
        jl_AbstractStringBuilder_insertSpace($this, $target, $target + 4 | 0);
        var$4 = $this.$buffer.data;
        var$3 = $target + 1 | 0;
        var$4[$target] = 45;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 48;
        var$4 = $this.$buffer.data;
        var$3 = var$5 + 1 | 0;
        var$4[var$5] = 46;
        $this.$buffer.data[var$3] = 48;
        return $this;
    }
    if (isNaN($value) ? 1 : 0) {
        jl_AbstractStringBuilder_insertSpace($this, $target, $target + 3 | 0);
        var$4 = $this.$buffer.data;
        var$3 = $target + 1 | 0;
        var$4[$target] = 78;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 97;
        $this.$buffer.data[var$5] = 78;
        return $this;
    }
    if (!isFinite($value) ? 1 : 0) {
        if (var$3 > 0) {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 8 | 0);
            var$3 = $target;
        } else {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 9 | 0);
            var$4 = $this.$buffer.data;
            var$3 = $target + 1 | 0;
            var$4[$target] = 45;
        }
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 73;
        var$4 = $this.$buffer.data;
        var$3 = var$5 + 1 | 0;
        var$4[var$5] = 110;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 102;
        var$4 = $this.$buffer.data;
        var$3 = var$5 + 1 | 0;
        var$4[var$5] = 105;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 110;
        var$4 = $this.$buffer.data;
        var$3 = var$5 + 1 | 0;
        var$4[var$5] = 105;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 116;
        $this.$buffer.data[var$5] = 121;
        return $this;
    }
    jl_AbstractStringBuilder$Constants_$callClinit();
    $number = jl_AbstractStringBuilder$Constants_doubleAnalysisResult;
    otcit_DoubleAnalyzer_analyze($value, $number);
    $mantissa = $number.$mantissa;
    $exp = $number.$exponent;
    $negative = $number.$sign;
    $intPart = 1;
    $sz = 1;
    if ($negative)
        $sz = 2;
    $digits = 18;
    $zeros = jl_AbstractStringBuilder_trailingDecimalZeros($mantissa);
    if ($zeros > 0)
        $digits = $digits - $zeros | 0;
    $leadingZeros = 0;
    $leadingZero = 0;
    if ($exp < 7 && $exp >= (-3)) {
        if ($exp >= 0) {
            $intPart = $exp + 1 | 0;
            $digits = jl_Math_max($digits, $intPart + 1 | 0);
            $exp = 0;
        } else {
            $intPart = 0;
            $leadingZeros = ( -$exp | 0) - 1 | 0;
            $leadingZero = 1;
            $sz = $sz + 1 | 0;
            $exp = 0;
        }
    }
    if ($exp) {
        $sz = $sz + 2 | 0;
        if (!($exp > (-10) && $exp < 10))
            $sz = $sz + 1 | 0;
        if (!($exp > (-100) && $exp < 100))
            $sz = $sz + 1 | 0;
        if ($exp < 0)
            $sz = $sz + 1 | 0;
    }
    if ($exp && $digits == $intPart)
        $digits = $digits + 1 | 0;
    var$3 = $sz + ($digits + $leadingZeros | 0) | 0;
    jl_AbstractStringBuilder_insertSpace($this, $target, $target + var$3 | 0);
    if (!$negative)
        var$16 = $target;
    else {
        var$4 = $this.$buffer.data;
        var$16 = $target + 1 | 0;
        var$4[$target] = 45;
    }
    $pos = Long_create(1569325056, 23283064);
    if ($leadingZero) {
        var$4 = $this.$buffer.data;
        var$3 = var$16 + 1 | 0;
        var$4[var$16] = 48;
        var$4 = $this.$buffer.data;
        var$16 = var$3 + 1 | 0;
        var$4[var$3] = 46;
        while (true) {
            var$3 = $leadingZeros + (-1) | 0;
            if ($leadingZeros <= 0)
                break;
            var$4 = $this.$buffer.data;
            var$5 = var$16 + 1 | 0;
            var$4[var$16] = 48;
            $leadingZeros = var$3;
            var$16 = var$5;
        }
    }
    $i = 0;
    while ($i < $digits) {
        if (Long_le($pos, Long_ZERO))
            $intDigit = 0;
        else {
            $intDigit = Long_lo(Long_div($mantissa, $pos));
            $mantissa = Long_rem($mantissa, $pos);
        }
        var$4 = $this.$buffer.data;
        var$3 = var$16 + 1 | 0;
        var$4[var$16] = (48 + $intDigit | 0) & 65535;
        $intPart = $intPart + (-1) | 0;
        if ($intPart)
            var$16 = var$3;
        else {
            var$4 = $this.$buffer.data;
            var$16 = var$3 + 1 | 0;
            var$4[var$3] = 46;
        }
        $pos = Long_div($pos, Long_fromInt(10));
        $i = $i + 1 | 0;
    }
    if ($exp) {
        var$4 = $this.$buffer.data;
        var$5 = var$16 + 1 | 0;
        var$4[var$16] = 69;
        if ($exp >= 0)
            var$20 = var$5;
        else {
            $exp =  -$exp | 0;
            var$4 = $this.$buffer.data;
            var$20 = var$5 + 1 | 0;
            var$4[var$5] = 45;
        }
        if ($exp >= 100) {
            var$4 = $this.$buffer.data;
            var$3 = var$20 + 1 | 0;
            var$4[var$20] = (48 + ($exp / 100 | 0) | 0) & 65535;
            $exp = $exp % 100 | 0;
            var$4 = $this.$buffer.data;
            var$5 = var$3 + 1 | 0;
            var$4[var$3] = (48 + ($exp / 10 | 0) | 0) & 65535;
        } else if ($exp < 10)
            var$5 = var$20;
        else {
            var$4 = $this.$buffer.data;
            var$5 = var$20 + 1 | 0;
            var$4[var$20] = (48 + ($exp / 10 | 0) | 0) & 65535;
        }
        $this.$buffer.data[var$5] = (48 + ($exp % 10 | 0) | 0) & 65535;
    }
    return $this;
},
jl_AbstractStringBuilder_trailingDecimalZeros = $n => {
    let $zeros, $result, $bit, $i;
    $zeros = Long_fromInt(1);
    $result = 0;
    $bit = 16;
    jl_AbstractStringBuilder$Constants_$callClinit();
    $i = jl_AbstractStringBuilder$Constants_longLogPowersOfTen.data.length - 1 | 0;
    while ($i >= 0) {
        if (Long_eq(Long_rem($n, Long_mul($zeros, jl_AbstractStringBuilder$Constants_longLogPowersOfTen.data[$i])), Long_ZERO)) {
            $result = $result | $bit;
            $zeros = Long_mul($zeros, jl_AbstractStringBuilder$Constants_longLogPowersOfTen.data[$i]);
        }
        $bit = $bit >>> 1 | 0;
        $i = $i + (-1) | 0;
    }
    return $result;
},
jl_AbstractStringBuilder_append1 = ($this, $c) => {
    return $this.$insert1($this.$length0, $c);
},
jl_AbstractStringBuilder_insert1 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insertSpace($this, $index, $index + 1 | 0);
    $this.$buffer.data[$index] = $c;
    return $this;
},
jl_AbstractStringBuilder_insert0 = ($this, $index, $obj) => {
    return $this.$insert2($index, $obj === null ? $rt_s(7) : $obj.$toString());
},
jl_AbstractStringBuilder_ensureCapacity = ($this, $capacity) => {
    let $newLength;
    if ($this.$buffer.data.length >= $capacity)
        return;
    $newLength = $this.$buffer.data.length >= 1073741823 ? 2147483647 : jl_Math_max($capacity, jl_Math_max($this.$buffer.data.length * 2 | 0, 5));
    $this.$buffer = ju_Arrays_copyOf($this.$buffer, $newLength);
},
jl_AbstractStringBuilder_toString = $this => {
    return jl_String__init_6($this.$buffer, 0, $this.$length0);
},
jl_AbstractStringBuilder_insertSpace = ($this, $start, $end) => {
    let $sz, $i;
    $sz = $this.$length0 - $start | 0;
    $this.$ensureCapacity(($this.$length0 + $end | 0) - $start | 0);
    $i = $sz - 1 | 0;
    while ($i >= 0) {
        $this.$buffer.data[$end + $i | 0] = $this.$buffer.data[$start + $i | 0];
        $i = $i + (-1) | 0;
    }
    $this.$length0 = $this.$length0 + ($end - $start | 0) | 0;
},
jl_Appendable = $rt_classWithoutFields(0),
jl_StringBuilder = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuilder__init_0 = $this => {
    jl_AbstractStringBuilder__init_0($this);
},
jl_StringBuilder__init_ = () => {
    let var_0 = new jl_StringBuilder();
    jl_StringBuilder__init_0(var_0);
    return var_0;
},
jl_StringBuilder_append = ($this, $obj) => {
    jl_AbstractStringBuilder_append0($this, $obj);
    return $this;
},
jl_StringBuilder_append1 = ($this, $value) => {
    jl_AbstractStringBuilder_append($this, $value);
    return $this;
},
jl_StringBuilder_append0 = ($this, $c) => {
    jl_AbstractStringBuilder_append1($this, $c);
    return $this;
},
jl_StringBuilder_insert3 = ($this, $target, $value) => {
    jl_AbstractStringBuilder_insert2($this, $target, $value);
    return $this;
},
jl_StringBuilder_insert4 = ($this, $index, $obj) => {
    jl_AbstractStringBuilder_insert0($this, $index, $obj);
    return $this;
},
jl_StringBuilder_insert2 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insert1($this, $index, $c);
    return $this;
},
jl_StringBuilder_insert5 = ($this, $index, $string) => {
    jl_AbstractStringBuilder_insert($this, $index, $string);
    return $this;
},
jl_StringBuilder_toString = $this => {
    return jl_AbstractStringBuilder_toString($this);
},
jl_StringBuilder_ensureCapacity = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
},
jl_StringBuilder_insert1 = ($this, var$1, var$2) => {
    return $this.$insert3(var$1, var$2);
},
jl_StringBuilder_insert = ($this, var$1, var$2) => {
    return $this.$insert4(var$1, var$2);
},
jl_StringBuilder_insert0 = ($this, var$1, var$2) => {
    return $this.$insert5(var$1, var$2);
},
jl_StringBuilder_insert6 = ($this, var$1, var$2) => {
    return $this.$insert6(var$1, var$2);
};
function ju_AbstractMap$KeySet() {
    ju_AbstractSet.call(this);
    this.$this$04 = null;
}
let ju_AbstractMap$KeySet__init_0 = ($this, var$1) => {
    $this.$this$04 = var$1;
    ju_AbstractSet__init_($this);
},
ju_AbstractMap$KeySet__init_ = var_0 => {
    let var_1 = new ju_AbstractMap$KeySet();
    ju_AbstractMap$KeySet__init_0(var_1, var_0);
    return var_1;
},
ju_AbstractMap$KeySet_iterator = $this => {
    let $it;
    $it = ($this.$this$04.$entrySet()).$iterator();
    return ju_AbstractMap$KeySet$1__init_0($this, $it);
},
ju_AbstractMap$KeySet_size = $this => {
    return $this.$this$04.$size();
},
kebm_InputKeyCallback = $rt_classWithoutFields(0),
ju_ConcurrentModificationException = $rt_classWithoutFields(jl_RuntimeException),
ju_ConcurrentModificationException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
ju_ConcurrentModificationException__init_ = () => {
    let var_0 = new ju_ConcurrentModificationException();
    ju_ConcurrentModificationException__init_0(var_0);
    return var_0;
};
function keb_Entity() {
    jl_Object.call(this);
    this.$id0 = Long_ZERO;
}
let keb_Entity__init_ = ($this, $id) => {
    jl_Object__init_($this);
    $this.$id0 = $id;
},
keb_Entity__init_0 = var_0 => {
    let var_1 = new keb_Entity();
    keb_Entity__init_(var_1, var_0);
    return var_1;
},
keb_Entity_id = $this => {
    return $this.$id0;
},
keb_Entity_equals = ($this, $o) => {
    if ($this === $o)
        return 1;
    if (!($o instanceof keb_Entity))
        return 0;
    return Long_ne($this.$id0, $o.$id0) ? 0 : 1;
},
keb_Entity_hashCode = $this => {
    return jl_Long_hashCode($this.$id0);
},
jlr_AnnotatedElement = $rt_classWithoutFields(0),
jur_RandomGenerator = $rt_classWithoutFields(0),
jur_RandomGenerator_nextDouble = ($this, $origin, $bound) => {
    let $res;
    otci_RandomUtils_checkRange($origin, $bound);
    $res = $this.$nextDouble() * ($bound - $origin) + $origin;
    if ($res >= $bound)
        $res = jl_Math_nextAfter($bound, $origin);
    return $res;
},
jur_RandomGenerator_nextInt = ($this, $origin, $bound) => {
    let $range, $res;
    otci_RandomUtils_checkRange0($origin, $bound);
    $range = $bound - $origin | 0;
    if ($range > 0)
        return $this.$nextInt($range) + $origin | 0;
    while (true) {
        $res = $this.$nextInt0();
        if ($res >= $origin && $res < $bound)
            break;
    }
    return $res;
};
function ju_HashMap$1() {
    ju_AbstractSet.call(this);
    this.$this$02 = null;
}
let ju_HashMap$1__init_ = ($this, $this$0) => {
    $this.$this$02 = $this$0;
    ju_AbstractSet__init_($this);
},
ju_HashMap$1__init_0 = var_0 => {
    let var_1 = new ju_HashMap$1();
    ju_HashMap$1__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$1_contains = ($this, $object) => {
    return $this.$this$02.$containsKey($object);
},
ju_HashMap$1_size = $this => {
    return $this.$this$02.$size();
},
ju_HashMap$1_iterator = $this => {
    return ju_HashMap$KeyIterator__init_0($this.$this$02);
},
jl_Double = $rt_classWithoutFields(jl_Number),
jl_Double_TYPE = null,
jl_Double_$callClinit = () => {
    jl_Double_$callClinit = $rt_eraseClinit(jl_Double);
    jl_Double__clinit_();
},
jl_Double_doubleToLongBits = $value => {
    jl_Double_$callClinit();
    if (!(isNaN($value) ? 1 : 0))
        return $rt_doubleToRawLongBits($value);
    return Long_create(0, 2146959360);
},
jl_Double__clinit_ = () => {
    jl_Double_TYPE = $rt_cls($rt_doublecls);
},
jl_ClassCastException = $rt_classWithoutFields(jl_RuntimeException),
jl_ClassCastException__init_ = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_ClassCastException__init_0 = var_0 => {
    let var_1 = new jl_ClassCastException();
    jl_ClassCastException__init_(var_1, var_0);
    return var_1;
},
jl_Cloneable = $rt_classWithoutFields(0);
function ju_ArrayList() {
    let a = this; ju_AbstractList.call(a);
    a.$array = null;
    a.$size0 = 0;
}
let ju_ArrayList__init_1 = $this => {
    ju_ArrayList__init_0($this, 10);
},
ju_ArrayList__init_ = () => {
    let var_0 = new ju_ArrayList();
    ju_ArrayList__init_1(var_0);
    return var_0;
},
ju_ArrayList__init_0 = ($this, $initialCapacity) => {
    ju_AbstractList__init_($this);
    if ($initialCapacity >= 0) {
        $this.$array = $rt_createArray(jl_Object, $initialCapacity);
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_());
},
ju_ArrayList__init_4 = var_0 => {
    let var_1 = new ju_ArrayList();
    ju_ArrayList__init_0(var_1, var_0);
    return var_1;
},
ju_ArrayList__init_2 = ($this, $c) => {
    let $iter, $i;
    ju_ArrayList__init_0($this, $c.$size());
    $iter = $c.$iterator();
    $i = 0;
    while ($i < $this.$array.data.length) {
        $this.$array.data[$i] = $iter.$next();
        $i = $i + 1 | 0;
    }
    $this.$size0 = $this.$array.data.length;
},
ju_ArrayList__init_3 = var_0 => {
    let var_1 = new ju_ArrayList();
    ju_ArrayList__init_2(var_1, var_0);
    return var_1;
},
ju_ArrayList_ensureCapacity = ($this, $minCapacity) => {
    let $newLength;
    if ($this.$array.data.length < $minCapacity) {
        $newLength = $this.$array.data.length >= 1073741823 ? 2147483647 : jl_Math_max($minCapacity, jl_Math_max($this.$array.data.length * 2 | 0, 5));
        $this.$array = ju_Arrays_copyOf0($this.$array, $newLength);
    }
},
ju_ArrayList_get = ($this, $index) => {
    ju_ArrayList_checkIndex($this, $index);
    return $this.$array.data[$index];
},
ju_ArrayList_size = $this => {
    return $this.$size0;
},
ju_ArrayList_add = ($this, $element) => {
    let var$2, var$3;
    $this.$ensureCapacity($this.$size0 + 1 | 0);
    var$2 = $this.$array.data;
    var$3 = $this.$size0;
    $this.$size0 = var$3 + 1 | 0;
    var$2[var$3] = $element;
    $this.$modCount0 = $this.$modCount0 + 1 | 0;
    return 1;
},
ju_ArrayList_checkIndex = ($this, $index) => {
    if ($index >= 0 && $index < $this.$size0)
        return;
    $rt_throw(jl_IndexOutOfBoundsException__init_0());
},
jl_IllegalMonitorStateException = $rt_classWithoutFields(jl_RuntimeException),
jl_IllegalMonitorStateException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
jl_IllegalMonitorStateException__init_0 = () => {
    let var_0 = new jl_IllegalMonitorStateException();
    jl_IllegalMonitorStateException__init_(var_0);
    return var_0;
},
kebm_ExplosionListener = $rt_classWithoutFields(0),
ju_Random = $rt_classWithoutFields(),
ju_Random__init_ = $this => {
    jl_Object__init_($this);
},
ju_Random__init_0 = () => {
    let var_0 = new ju_Random();
    ju_Random__init_(var_0);
    return var_0;
},
ju_Random_nextInt0 = $this => {
    return 4.294967296E9 * $this.$nextDouble() + (-2.147483648E9) | 0;
},
ju_Random_nextInt = ($this, $n) => {
    if ($n <= 0)
        $rt_throw(jl_IllegalArgumentException__init_());
    return $this.$nextDouble() * $n | 0;
},
ju_Random_nextDouble = $this => {
    return jl_Math_random();
},
juc_ThreadLocalRandom = $rt_classWithoutFields(ju_Random),
juc_ThreadLocalRandom_current = null,
juc_ThreadLocalRandom_$callClinit = () => {
    juc_ThreadLocalRandom_$callClinit = $rt_eraseClinit(juc_ThreadLocalRandom);
    juc_ThreadLocalRandom__clinit_();
},
juc_ThreadLocalRandom__init_ = $this => {
    juc_ThreadLocalRandom_$callClinit();
    ju_Random__init_($this);
},
juc_ThreadLocalRandom__init_0 = () => {
    let var_0 = new juc_ThreadLocalRandom();
    juc_ThreadLocalRandom__init_(var_0);
    return var_0;
},
juc_ThreadLocalRandom_current0 = () => {
    juc_ThreadLocalRandom_$callClinit();
    return juc_ThreadLocalRandom_current;
},
juc_ThreadLocalRandom__clinit_ = () => {
    juc_ThreadLocalRandom_current = juc_ThreadLocalRandom__init_0();
};
function kebc_Explosion() {
    let a = this; jl_Object.call(a);
    a.$parts = null;
    a.$x1 = 0.0;
    a.$y1 = 0.0;
    a.$xRange0 = null;
    a.$yRange0 = null;
}
let kebc_Explosion__init_ = ($this, $position, $count, $color) => {
    let $rnd, $i, $angle, $speed, var$8, var$9, var$10, var$11, var$12, var$13;
    jl_Object__init_($this);
    $this.$parts = ju_ArrayList__init_();
    $this.$x1 = $position.$getX();
    $this.$y1 = $position.$getY();
    $this.$xRange0 = $position.$getXRange();
    $this.$yRange0 = $position.$getYRange();
    $rnd = ju_Random__init_0();
    $i = 0;
    while ($i < $count) {
        $angle = $rnd.$nextDouble() * 2.0 * 3.141592653589793;
        $speed = 1.0 + $rnd.$nextDouble() * 2.0;
        var$8 = $this.$parts;
        var$9 = new kebc_Explosion$Particle;
        var$10 = $this.$x1;
        var$11 = $this.$y1;
        var$12 = jl_Math_cos($angle) * $speed;
        var$13 = jl_Math_sin($angle) * $speed;
        kebc_Explosion$Particle__init_(var$9, $this, var$10, var$11, var$12, var$13, 2.0 + $rnd.$nextDouble(), $color);
        var$8.$add(var$9);
        $i = $i + 1 | 0;
    }
},
kebc_Explosion__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new kebc_Explosion();
    kebc_Explosion__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
kebc_Explosion_particles = $this => {
    return $this.$parts;
},
kebc_Explosion_getPosition = $this => {
    return kebc_Position__init_0($this.$x1, $this.$y1, $this.$xRange0, $this.$yRange0);
},
kebc_Explosion_update = ($this, $dt) => {
    let var$2, $p;
    var$2 = $this.$parts.$iterator();
    while (var$2.$hasNext()) {
        $p = var$2.$next();
        $p.$x = $p.$x + $p.$vx;
        $p.$y = $p.$y + $p.$vy;
        $p.$vx = $p.$vx * 0.97;
        $p.$vy = $p.$vy * 0.97;
        $p.$life = $p.$life - jl_Math_max0($dt, 0.03);
    }
},
kebc_Explosion_finished = $this => {
    let var$1, $p;
    var$1 = $this.$parts.$iterator();
    while (var$1.$hasNext()) {
        $p = var$1.$next();
        if ($p.$alive())
            return 0;
    }
    return 1;
};
function jl_String() {
    jl_Object.call(this);
    this.$hashCode1 = 0;
}
let jl_String_EMPTY_CHARS = null,
jl_String_EMPTY = null,
jl_String_CASE_INSENSITIVE_ORDER = null,
jl_String_$callClinit = () => {
    jl_String_$callClinit = $rt_eraseClinit(jl_String);
    jl_String__clinit_();
},
jl_String__init_ = $this => {
    jl_String_$callClinit();
    jl_Object__init_($this);
    $this.$nativeString = "";
},
jl_String__init_4 = () => {
    let var_0 = new jl_String();
    jl_String__init_(var_0);
    return var_0;
},
jl_String__init_0 = ($this, $characters) => {
    let var$2;
    jl_String_$callClinit();
    var$2 = $characters.data;
    jl_Object__init_($this);
    $this.$nativeString = $rt_charArrayToString($characters.data, 0, var$2.length);
},
jl_String__init_3 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_0(var_1, var_0);
    return var_1;
},
jl_String__init_1 = (var$0, var$1) => {
    var$0.$nativeString = var$1;
},
jl_String__init_5 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_1(var_1, var_0);
    return var_1;
},
jl_String__init_2 = (var$0, var$1, $offset, $count) => {
    let var$4;
    jl_String_$callClinit();
    var$4 = var$1.data;
    jl_Object__init_(var$0);
    ju_Objects_checkFromIndexSize($offset, $count, var$4.length);
    var$0.$nativeString = $rt_charArrayToString(var$1.data, $offset, $count);
},
jl_String__init_6 = (var_0, var_1, var_2) => {
    let var_3 = new jl_String();
    jl_String__init_2(var_3, var_0, var_1, var_2);
    return var_3;
},
jl_String_charAt = ($this, $index) => {
    if ($index >= 0 && $index < $this.$nativeString.length)
        return $this.$nativeString.charCodeAt($index);
    $rt_throw(jl_StringIndexOutOfBoundsException__init_0());
},
jl_String_length = $this => {
    return $this.$nativeString.length;
},
jl_String_isEmpty = $this => {
    return $this.$nativeString.length ? 0 : 1;
},
jl_String_contains = ($this, $s) => {
    let $sz, $i, $j;
    $sz = $this.$length() - $s.$length() | 0;
    $i = 0;
    while ($i <= $sz) {
        $j = 0;
        while (true) {
            if ($j >= $s.$length())
                return 1;
            if ($this.$charAt($i + $j | 0) != $s.$charAt($j))
                break;
            $j = $j + 1 | 0;
        }
        $i = $i + 1 | 0;
    }
    return 0;
},
jl_String_toString = $this => {
    return $this;
},
jl_String_equals = ($this, $other) => {
    let $str;
    if ($this === $other)
        return 1;
    if (!($other instanceof jl_String))
        return 0;
    $str = $other;
    return $this.$nativeString !== $str.$nativeString ? 0 : 1;
},
jl_String_hashCode = $this => {
    let $i;
    a: {
        if (!$this.$hashCode1) {
            $i = 0;
            while (true) {
                if ($i >= $this.$nativeString.length)
                    break a;
                $this.$hashCode1 = (31 * $this.$hashCode1 | 0) + $this.$nativeString.charCodeAt($i) | 0;
                $i = $i + 1 | 0;
            }
        }
    }
    return $this.$hashCode1;
},
jl_String__clinit_ = () => {
    jl_String_EMPTY_CHARS = $rt_createCharArray(0);
    jl_String_EMPTY = jl_String__init_4();
    jl_String_CASE_INSENSITIVE_ORDER = jl_String$_clinit_$lambda$_115_0__init_0();
},
jl_NegativeArraySizeException = $rt_classWithoutFields(jl_RuntimeException),
jl_NegativeArraySizeException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
jl_NegativeArraySizeException__init_0 = () => {
    let var_0 = new jl_NegativeArraySizeException();
    jl_NegativeArraySizeException__init_(var_0);
    return var_0;
},
ju_Map$Entry = $rt_classWithoutFields(0),
kebm_CollisionListener = $rt_classWithoutFields(0),
otci_RandomUtils = $rt_classWithoutFields(),
otci_RandomUtils_checkRange = ($origin, $bound) => {
    if ($origin < $bound && $bound - $origin < Infinity)
        return;
    $rt_throw(jl_IllegalArgumentException__init_());
},
otci_RandomUtils_checkRange0 = ($origin, $bound) => {
    if ($origin < $bound)
        return;
    $rt_throw(jl_IllegalArgumentException__init_());
},
keb_SystemBaseOutputPart = $rt_classWithoutFields(0),
keb_SystemBaseOutputPart_init = ($this, $world, $data) => {
    return;
},
keb_SystemBaseOutputPart_onResize = ($this, $width, $height) => {
    return;
};
function kebs_AOutputSystem() {
    let a = this; jl_Object.call(a);
    a.$world3 = null;
    a.$parts0 = null;
}
let kebs_AOutputSystem__init_ = ($this, $world) => {
    jl_Object__init_($this);
    $this.$parts0 = ju_ArrayList__init_();
    $this.$world3 = $world;
},
kebs_AOutputSystem_addPartOutputSystem = ($this, $partOutputSystem) => {
    $this.$parts0.$add($partOutputSystem);
},
kebs_AOutputSystem_getPartOutputSystems = $this => {
    return $this.$parts0;
},
kebs_AOutputSystem_draw = ($this, $world, $data) => {
    let var$3, $partOutputSystem;
    var$3 = $this.$parts0.$iterator();
    while (var$3.$hasNext()) {
        $partOutputSystem = var$3.$next();
        $partOutputSystem.$draw($world, $data);
    }
};
function kebc_Velocity() {
    let a = this; jl_Object.call(a);
    a.$rangeX = null;
    a.$rangeY = null;
    a.$dx0 = 0.0;
    a.$dy0 = 0.0;
}
let kebc_Velocity__init_ = ($this, $rangeX, $rangeY) => {
    jl_Object__init_($this);
    $this.$rangeX = $rangeX;
    $this.$rangeY = $rangeY;
    $this.$random1();
},
kebc_Velocity__init_0 = (var_0, var_1) => {
    let var_2 = new kebc_Velocity();
    kebc_Velocity__init_(var_2, var_0, var_1);
    return var_2;
},
kebc_Velocity_dx = $this => {
    return $this.$dx0;
},
kebc_Velocity_dy = $this => {
    return $this.$dy0;
},
kebc_Velocity_random = $this => {
    $this.$dx0 = $this.$rangeX.$random0();
    $this.$dy0 = $this.$rangeY.$random0();
};
function ju_AbstractMap$KeySet$1() {
    let a = this; jl_Object.call(a);
    a.$val$it = null;
    a.$this$1 = null;
}
let ju_AbstractMap$KeySet$1__init_ = ($this, $this$1, var$2) => {
    $this.$this$1 = $this$1;
    $this.$val$it = var$2;
    jl_Object__init_($this);
},
ju_AbstractMap$KeySet$1__init_0 = (var_0, var_1) => {
    let var_2 = new ju_AbstractMap$KeySet$1();
    ju_AbstractMap$KeySet$1__init_(var_2, var_0, var_1);
    return var_2;
},
ju_AbstractMap$KeySet$1_hasNext = $this => {
    return $this.$val$it.$hasNext();
},
ju_AbstractMap$KeySet$1_next = $this => {
    return ($this.$val$it.$next()).$getKey();
},
keth_HalloweenSpookaGSys = $rt_classWithoutFields(),
keth_HalloweenSpookaGSys__init_ = $this => {
    jl_Object__init_($this);
},
keth_HalloweenSpookaGSys__init_0 = () => {
    let var_0 = new keth_HalloweenSpookaGSys();
    keth_HalloweenSpookaGSys__init_(var_0);
    return var_0;
},
keth_HalloweenSpookaGSys_draw = ($this, $world, $g) => {
    let var$3, $e, $spooka, $pos, var$7;
    var$3 = ($world.$getEntitiesWith($rt_cls(kebc_Spooka), $rt_cls(kebc_Position))).$iterator();
    while (var$3.$hasNext()) {
        $e = var$3.$next();
        $spooka = $world.$getComponent($e, $rt_cls(kebc_Spooka));
        $pos = $world.$getComponent($e, $rt_cls(kebc_Position));
        if ($spooka !== null && $pos !== null) {
            var$7 = $spooka.$type;
            keth_SpookaType_$callClinit();
            if (var$7 == jl_Enum_ordinal(keth_SpookaType_spider))
                $this.$drawSpider($pos.$getX(), $pos.$getY(), 0.6, $g);
            else if ($spooka.$type == jl_Enum_ordinal(keth_SpookaType_pumpkin))
                $this.$drawPumpkin($pos.$getX(), $pos.$getY(), 1.0, $g);
            else if ($spooka.$type == jl_Enum_ordinal(keth_SpookaType_ghost))
                $this.$drawGhost($pos.$getX(), $pos.$getY(), 1.0, $g);
            else if ($spooka.$type == jl_Enum_ordinal(keth_SpookaType_bat))
                $this.$drawBat($pos.$getX(), $pos.$getY(), 0.6, Long_toNumber(jl_System_currentTimeMillis()) / 150.0, $g);
            else if ($spooka.$type == jl_Enum_ordinal(keth_SpookaType_cat))
                $this.$drawCatAnimated($pos.$getX(), $pos.$getY(), 1.0, Long_toNumber(jl_System_currentTimeMillis()) / 450.0, $g);
        }
    }
},
keth_HalloweenSpookaGSys_drawPumpkin = ($this, $x, $y, $size, $g) => {
    let var$5;
    $g.save();
    $g.translate($x, $y);
    $g.scale($size, $size);
    $g.save();
    $g.scale(1.3, 1.0);
    var$5 = "orange";
    $g.fillStyle = var$5;
    $g.beginPath();
    $g.arc(0.0, 0.0, 40.0, 0.0, 6.283185307179586);
    $g.fill();
    $g.restore();
    var$5 = "green";
    $g.fillStyle = var$5;
    $g.fillRect((-8.0), (-55.0), 16.0, 10.0);
    var$5 = "black";
    $g.fillStyle = var$5;
    $this.$drawTriangle((-25.0), (-10.0), 15.0, 15.0, 1, $g);
    $this.$drawTriangle(10.0, (-10.0), 15.0, 15.0, 1, $g);
    $g.beginPath();
    $g.moveTo((-30.0), 15.0);
    $g.lineTo((-15.0), 30.0);
    $g.lineTo(0.0, 15.0);
    $g.lineTo(15.0, 30.0);
    $g.lineTo(30.0, 15.0);
    $g.closePath();
    $g.fill();
    $g.restore();
},
keth_HalloweenSpookaGSys_drawGhost = ($this, $x, $y, $size, $g) => {
    let var$5;
    $g.save();
    $g.translate($x, $y);
    $g.scale($size, $size);
    var$5 = "white";
    $g.fillStyle = var$5;
    $g.beginPath();
    $g.arc(0.0, (-10.0), 25.0, 3.141592653589793, 0.0, !!0);
    $g.lineTo(25.0, 30.0);
    $g.lineTo(15.0, 25.0);
    $g.lineTo(5.0, 30.0);
    $g.lineTo((-5.0), 25.0);
    $g.lineTo((-15.0), 30.0);
    $g.lineTo((-25.0), 25.0);
    $g.closePath();
    $g.fill();
    var$5 = "black";
    $g.fillStyle = var$5;
    $g.beginPath();
    $g.arc((-10.0), (-10.0), 3.0, 0.0, 6.283185307179586);
    $g.arc(10.0, (-10.0), 3.0, 0.0, 6.283185307179586);
    $g.fill();
    $g.restore();
},
keth_HalloweenSpookaGSys_drawBat = ($this, $x, $y, $size, $time, $g) => {
    let $flap, var$7, var$8;
    $g.save();
    $g.translate($x, $y);
    $g.scale($size, $size);
    $flap = jl_Math_sin($time * 4.0) * 0.7;
    var$7 = "black";
    $g.fillStyle = var$7;
    $g.beginPath();
    $g.arc(0.0, 0.0, 10.0, 3.141592653589793, 0.0, !!0);
    $g.save();
    var$8 =  -$flap;
    $g.rotate(var$8);
    $g.arc((-20.0), 0.0, 15.0, 0.0, 3.141592653589793, !!0);
    $g.restore();
    $g.save();
    $g.rotate($flap);
    $g.arc(20.0, 0.0, 15.0, 0.0, 3.141592653589793, !!0);
    $g.restore();
    $g.closePath();
    $g.fill();
    $g.restore();
},
keth_HalloweenSpookaGSys_drawSpider = ($this, $x, $y, $size, $g) => {
    let var$5, $i, $yOffset, var$8;
    $g.save();
    $g.translate($x, $y);
    $g.scale($size, $size);
    var$5 = "black";
    $g.fillStyle = var$5;
    $g.beginPath();
    $g.arc(0.0, 0.0, 10.0, 0.0, 6.283185307179586);
    $g.fill();
    var$5 = "black";
    $g.strokeStyle = var$5;
    $i = 0;
    while ($i < 4) {
        $yOffset = ($i - 1.5) * 5.0;
        $g.beginPath();
        $g.moveTo((-10.0), $yOffset);
        var$8 = $yOffset - 5.0;
        $g.lineTo((-25.0), var$8);
        $g.stroke();
        $g.beginPath();
        $g.moveTo(10.0, $yOffset);
        $g.lineTo(25.0, var$8);
        $g.stroke();
        $i = $i + 1 | 0;
    }
    $g.restore();
},
keth_HalloweenSpookaGSys_drawCatAnimated = ($this, $x, $y, $size, $time, $g) => {
    let $tailAngle, $blink, $eyeHeight, $glow, var$10, var$11, $color, var$13, $yawn, $mouthOpen;
    $g.save();
    $g.translate($x, $y);
    $g.scale($size, $size);
    $g.fillStyle = "black";
    $g.beginPath();
    $g.arc(0.0, 0.0, 20.0, 0.0, 6.283185307179586);
    $g.fill();
    $tailAngle = jl_Math_sin($time * 2.0) * 0.4;
    $g.save();
    $g.translate(18.0, 10.0);
    $g.rotate($tailAngle);
    $g.strokeStyle = "black";
    $g.lineWidth = 4.0;
    $g.beginPath();
    $g.moveTo(0.0, 0.0);
    $g.quadraticCurveTo(15.0, (-10.0), 25.0, 5.0);
    $g.stroke();
    $g.restore();
    $g.fillStyle = "black";
    $g.beginPath();
    $g.arc(0.0, (-25.0), 15.0, 0.0, 6.283185307179586);
    $g.fill();
    $g.beginPath();
    $g.moveTo((-10.0), (-35.0));
    $g.lineTo((-3.0), (-50.0));
    $g.lineTo(3.0, (-35.0));
    $g.moveTo(10.0, (-35.0));
    $g.lineTo(3.0, (-50.0));
    $g.lineTo((-3.0), (-35.0));
    $g.fill();
    $blink = jl_Math_abs(jl_Math_sin($time * 3.0));
    $eyeHeight = 3.0 * $blink + 0.5;
    $glow = (jl_Math_sin($time * 5.0) + 1.0) / 2.0;
    var$10 = 0.4 + 0.6 * $glow;
    var$11 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append(var$11, $rt_s(8)), var$10), 41);
    $color = jl_StringBuilder_toString(var$11);
    $g.fillStyle = $rt_ustr($color);
    $g.save();
    $g.translate((-6.0), (-25.0));
    var$13 = $eyeHeight / 3.0;
    $g.scale(1.0, var$13);
    $g.beginPath();
    $g.arc(0.0, 0.0, 3.0, 0.0, 6.283185307179586);
    $g.fill();
    $g.restore();
    $g.save();
    $g.translate(6.0, (-25.0));
    $g.scale(1.0, var$13);
    $g.beginPath();
    $g.arc(0.0, 0.0, 3.0, 0.0, 6.283185307179586);
    $g.fill();
    $g.restore();
    $yawn = jl_Math_max0(0.0, jl_Math_sin($time * 0.8));
    if ($yawn > 0.9) {
        $mouthOpen = ($yawn - 0.9) * 20.0;
        $g.save();
        $g.translate(0.0, (-15.0));
        $g.scale(1.0, $mouthOpen / 3.0 + 0.3);
        $g.fillStyle = "black";
        $g.beginPath();
        $g.arc(0.0, 0.0, 4.0, 0.0, 6.283185307179586);
        $g.fill();
        $g.restore();
    }
    $g.restore();
},
keth_HalloweenSpookaGSys_drawTriangle = ($this, $x, $y, $w, $h, $up, $g) => {
    let var$7;
    $g.beginPath();
    if (!$up) {
        $g.moveTo($x, $y);
        $g.lineTo($x + $w / 2.0, $y + $h);
        $g.lineTo($x + $w, $y);
    } else {
        var$7 = $y + $h;
        $g.moveTo($x, var$7);
        $g.lineTo($x + $w / 2.0, $y);
        $g.lineTo($x + $w, var$7);
    }
    $g.closePath();
    $g.fill();
},
keth_HalloweenSpookaGSys_draw0 = ($this, var$1, var$2) => {
    $this.$draw0(var$1, otji_JSWrapper_unwrap(var$2));
};
function kebs_VelocitySystem() {
    jl_Object.call(this);
    this.$world5 = null;
}
let kebs_VelocitySystem__init_ = ($this, $world) => {
    jl_Object__init_($this);
    $this.$world5 = $world;
},
kebs_VelocitySystem__init_0 = var_0 => {
    let var_1 = new kebs_VelocitySystem();
    kebs_VelocitySystem__init_(var_1, var_0);
    return var_1;
},
kebs_VelocitySystem_update = $this => {
    let var$1, $e, $p, $v;
    var$1 = ($this.$world5.$getEntitiesWith($rt_cls(kebc_Position), $rt_cls(kebc_Velocity))).$iterator();
    while (var$1.$hasNext()) {
        $e = var$1.$next();
        $p = $this.$world5.$getComponent($e, $rt_cls(kebc_Position));
        $v = $this.$world5.$getComponent($e, $rt_cls(kebc_Velocity));
        if ($p !== null && $v !== null)
            $p.$add0($v.$dx(), $v.$dy());
    }
};
function ju_AbstractList$1() {
    let a = this; jl_Object.call(a);
    a.$index = 0;
    a.$modCount1 = 0;
    a.$size1 = 0;
    a.$removeIndex = 0;
    a.$this$00 = null;
}
let ju_AbstractList$1__init_ = ($this, $this$0) => {
    $this.$this$00 = $this$0;
    jl_Object__init_($this);
    $this.$modCount1 = $this.$this$00.$modCount0;
    $this.$size1 = $this.$this$00.$size();
    $this.$removeIndex = (-1);
},
ju_AbstractList$1__init_0 = var_0 => {
    let var_1 = new ju_AbstractList$1();
    ju_AbstractList$1__init_(var_1, var_0);
    return var_1;
},
ju_AbstractList$1_hasNext = $this => {
    return $this.$index >= $this.$size1 ? 0 : 1;
},
ju_AbstractList$1_next = $this => {
    let var$1, var$2;
    ju_AbstractList$1_checkConcurrentModification($this);
    $this.$removeIndex = $this.$index;
    var$1 = $this.$this$00;
    var$2 = $this.$index;
    $this.$index = var$2 + 1 | 0;
    return var$1.$get0(var$2);
},
ju_AbstractList$1_checkConcurrentModification = $this => {
    if ($this.$modCount1 >= $this.$this$00.$modCount0)
        return;
    $rt_throw(ju_ConcurrentModificationException__init_());
};
function keb_World() {
    let a = this; jl_Object.call(a);
    a.$components = null;
    a.$updatableSystemBaseList = null;
    a.$stopTheWorld = 0;
    a.$nextId = Long_ZERO;
    a.$sleepTime = Long_ZERO;
    a.$deltaTime0 = 0.0;
    a.$base = null;
    a.$outputSystem = null;
}
let keb_World__init_ = ($this, $sleepTime) => {
    jl_Object__init_($this);
    $this.$components = ju_HashMap__init_1();
    $this.$updatableSystemBaseList = ju_ArrayList__init_();
    $this.$stopTheWorld = 0;
    $this.$nextId = Long_ZERO;
    $this.$sleepTime = $sleepTime;
    $this.$base = $this.$createEntity();
},
keb_World__init_0 = var_0 => {
    let var_1 = new keb_World();
    keb_World__init_(var_1, var_0);
    return var_1;
},
keb_World_createEntity = $this => {
    let var$1, var$2;
    jl_Object_monitorEnterSync($this);
    try {
        var$1 = new keb_Entity;
        var$2 = $this.$nextId;
        $this.$nextId = Long_add(var$2, Long_fromInt(1));
        keb_Entity__init_(var$1, var$2);
        return var$1;
    } finally {
        jl_Object_monitorExitSync($this);
    }
},
keb_World_removeComponent = ($this, $e, $componentClass) => {
    let var$3, var$4;
    var$3 = $this.$components;
    var$4 = keb_World$removeComponent$lambda$_6_0__init_0();
    var$3 = var$3.$computeIfAbsent($componentClass, var$4);
    var$3.$remove($e);
},
keb_World_addComponent = ($this, $e, $component) => {
    let var$3;
    var$3 = $this.$components;
    var$3 = var$3.$computeIfAbsent(jl_Object_getClass($component), keb_World$addComponent$lambda$_7_0__init_0());
    var$3.$put($e, $component);
},
keb_World_getComponent = ($this, $e, $type) => {
    return jl_Class_cast($type, ($this.$components.$getOrDefault($type, ju_Map_of())).$get($e));
},
keb_World_getEntitiesWith = ($this, $c1) => {
    return ju_ArrayList__init_3(($this.$components.$getOrDefault($c1, ju_Map_of())).$keySet());
},
keb_World_getEntitiesWith0 = ($this, $c1, $c2) => {
    let $ids1, $ids2, $result, var$6, $id;
    $ids1 = ($this.$components.$getOrDefault($c1, ju_Map_of())).$keySet();
    $ids2 = ($this.$components.$getOrDefault($c2, ju_Map_of())).$keySet();
    $result = ju_ArrayList__init_();
    var$6 = $ids1.$iterator();
    while (var$6.$hasNext()) {
        $id = var$6.$next();
        if ($ids2.$contains($id))
            $result.$add($id);
    }
    return $result;
},
keb_World_add = ($this, $updatableSystemBase) => {
    $this.$updatableSystemBaseList.$add($updatableSystemBase);
},
keb_World_getSystems = ($this, $type) => {
    let $lst, var$3, $systemBase;
    $lst = ju_ArrayList__init_();
    var$3 = $this.$updatableSystemBaseList.$iterator();
    while (var$3.$hasNext()) {
        $systemBase = var$3.$next();
        if (jl_Class_isAssignableFrom($type, jl_Object_getClass($systemBase)))
            $lst.$add($systemBase);
    }
    return $lst;
},
keb_World_isStopTheWorld = $this => {
    return $this.$stopTheWorld;
},
keb_World_getOutputSystem = $this => {
    return $this.$outputSystem;
},
keb_World_setOutputSystem = ($this, $outputSystem) => {
    $this.$outputSystem = $outputSystem;
},
keb_World_deltaTime = $this => {
    return $this.$deltaTime0;
},
keb_World_init = $this => {
    let var$1, $systemBase;
    if ($this.$outputSystem !== null)
        $this.$outputSystem.$init();
    var$1 = $this.$updatableSystemBaseList.$iterator();
    while (var$1.$hasNext()) {
        $systemBase = var$1.$next();
        $systemBase.$init();
    }
},
keb_World_run = $this => {
    let $lastTime, $lastTime_0, var$3, $system, var$5, var$6, $$je, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$6 = $thread.pop();var$5 = $thread.pop();$system = $thread.pop();var$3 = $thread.pop();$lastTime_0 = $thread.pop();$lastTime = $thread.pop();$this = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        a: {
            try {
                $lastTime = jl_System_nanoTime();
                while (!$this.$isStopTheWorld()) {
                    $lastTime_0 = jl_System_nanoTime();
                    $this.$deltaTime0 = Long_toNumber(Long_sub($lastTime_0, $lastTime)) / 1.0E9;
                    var$3 = $this.$updatableSystemBaseList.$iterator();
                    while (var$3.$hasNext()) {
                        $system = var$3.$next();
                        $system.$update();
                    }
                    if ($this.$outputSystem !== null)
                        $this.$outputSystem.$update();
                    try {
                        var$5 = $this.$sleepTime;
                        $ptr = 1;
                        continue main;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof jl_InterruptedException) {
                        } else {
                            throw $$e;
                        }
                    }
                    $lastTime = $lastTime_0;
                }
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$3 = $$je;
                break a;

            }
            var$3 = $this.$updatableSystemBaseList.$iterator();
            while (var$3.$hasNext()) {
                $system = var$3.$next();
                $system.$done();
            }
            if ($this.$outputSystem !== null)
                $this.$outputSystem.$done();
            return;
        }
        var$6 = $this.$updatableSystemBaseList.$iterator();
        while (var$6.$hasNext()) {
            $system = var$6.$next();
            $system.$done();
        }
        if ($this.$outputSystem !== null)
            $this.$outputSystem.$done();
        $rt_throw(var$3);
    case 1:
        a: {
            try {
                b: {
                    try {
                        jl_Thread_sleep(var$5);
                        if ($rt_suspending()) {
                            break main;
                        }
                        break b;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof jl_InterruptedException) {
                        } else {
                            throw $$e;
                        }
                    }
                }
                while (true) {
                    $lastTime = $lastTime_0;
                    if ($this.$isStopTheWorld())
                        break a;
                    $lastTime_0 = jl_System_nanoTime();
                    $this.$deltaTime0 = Long_toNumber(Long_sub($lastTime_0, $lastTime)) / 1.0E9;
                    var$3 = $this.$updatableSystemBaseList.$iterator();
                    while (var$3.$hasNext()) {
                        $system = var$3.$next();
                        $system.$update();
                    }
                    if ($this.$outputSystem !== null)
                        $this.$outputSystem.$update();
                    try {
                        var$5 = $this.$sleepTime;
                        continue main;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof jl_InterruptedException) {
                        } else {
                            throw $$e;
                        }
                    }
                }
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$3 = $$je;

            }
            var$6 = $this.$updatableSystemBaseList.$iterator();
            while (var$6.$hasNext()) {
                $system = var$6.$next();
                $system.$done();
            }
            if ($this.$outputSystem !== null)
                $this.$outputSystem.$done();
            $rt_throw(var$3);
        }
        var$3 = $this.$updatableSystemBaseList.$iterator();
        while (var$3.$hasNext()) {
            $system = var$3.$next();
            $system.$done();
        }
        if ($this.$outputSystem !== null)
            $this.$outputSystem.$done();
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($this, $lastTime, $lastTime_0, var$3, $system, var$5, var$6, $ptr);
},
keb_World_lambda$addComponent$1 = $k => {
    return ju_HashMap__init_1();
},
keb_World_lambda$removeComponent$0 = $k => {
    return ju_HashMap__init_1();
};
function kebc_Explosion$Particle() {
    let a = this; jl_Object.call(a);
    a.$x = 0.0;
    a.$y = 0.0;
    a.$vx = 0.0;
    a.$vy = 0.0;
    a.$life = 0.0;
    a.$maxLife = 0.0;
    a.$color = null;
}
let kebc_Explosion$Particle__init_ = ($this, $this$0, $x, $y, $vx, $vy, $life, $color) => {
    jl_Object__init_($this);
    $this.$x = $x;
    $this.$y = $y;
    $this.$vx = $vx;
    $this.$vy = $vy;
    $this.$maxLife = $life;
    $this.$life = $life;
    $this.$color = $color;
},
kebc_Explosion$Particle__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5, var_6) => {
    let var_7 = new kebc_Explosion$Particle();
    kebc_Explosion$Particle__init_(var_7, var_0, var_1, var_2, var_3, var_4, var_5, var_6);
    return var_7;
},
kebc_Explosion$Particle_alive = $this => {
    return $this.$life <= 0.0 ? 0 : 1;
};
function keth_HalloweenScene() {
    let a = this; jl_Object.call(a);
    a.$stars = null;
    a.$width1 = 0.0;
    a.$height0 = 0.0;
    a.$startTime = Long_ZERO;
}
let keth_HalloweenScene__init_ = ($this, $width, $height) => {
    jl_Object__init_($this);
    $this.$stars = null;
    $this.$width1 = $width;
    $this.$height0 = $height;
    $this.$startTime = jl_System_currentTimeMillis();
},
keth_HalloweenScene__init_0 = (var_0, var_1) => {
    let var_2 = new keth_HalloweenScene();
    keth_HalloweenScene__init_(var_2, var_0, var_1);
    return var_2;
},
keth_HalloweenScene_updateStars = ($this, $count) => {
    let $newstars, $rnd, $i, var$5, var$6, var$7, var$8, var$9;
    $newstars = $rt_createArray(keth_Star, $count);
    $rnd = ju_Random__init_0();
    $i = 0;
    while (true) {
        var$5 = $newstars.data;
        if ($i >= var$5.length)
            break;
        var$6 = new keth_Star;
        var$7 = $rnd.$nextDouble() * $this.$width1 - $this.$width1 / 2.0;
        var$8 = $rnd.$nextDouble() * $this.$height0 - $this.$height0 / 2.0;
        var$9 = $rnd.$nextDouble() * 1.5 + 0.3;
        keth_Star__init_(var$6, var$7, var$8, var$9, $rnd.$nextDouble());
        var$5[$i] = var$6;
        $i = $i + 1 | 0;
    }
    $this.$stars = $newstars;
},
keth_HalloweenScene_getStars = $this => {
    if ($this.$stars === null)
        $this.$updateStars(50);
    return $this.$stars;
},
keth_HalloweenScene_draw0 = ($this, $world, $g) => {
    let $now, $elapsed, $cx, $cy, var$7, $rotation, var$9, var$10, var$11, var$12, var$13, var$14, $s, $alpha, var$17, var$18, $moonOrbit, $moonAngle, $moonX, $moonY, $gradient;
    $now = jl_System_currentTimeMillis();
    $elapsed = Long_sub($now, $this.$startTime);
    $cx = $this.$width1 / 2.0;
    $cy = $this.$height0 / 2.0;
    var$7 = Long_toNumber($elapsed);
    $rotation = var$7 / 600000.0 * 2.0 * 3.141592653589793;
    $g.save();
    var$9 = "#2a2a4a";
    $g.fillStyle = var$9;
    var$10 = $this.$width1;
    var$11 = $this.$height0;
    $g.fillRect(0.0, 0.0, var$10, var$11);
    $g.translate($cx, $cy);
    $g.rotate($rotation);
    var$12 = ($this.$getStars()).data;
    var$13 = var$12.length;
    var$14 = 0;
    while (var$14 < var$13) {
        $s = var$12[var$14];
        $alpha = 0.6 + jl_Math_sin(var$7 / 500.0 + $s.$phase) * 0.4;
        var$9 = $alpha;
        $g.globalAlpha = var$9;
        var$9 = "white";
        $g.fillStyle = var$9;
        $g.beginPath();
        var$17 = $s.$x2;
        var$18 = $s.$y2;
        var$10 = $s.$r;
        $g.arc(var$17, var$18, var$10, 0.0, 6.283185307179586);
        $g.fill();
        var$14 = var$14 + 1 | 0;
    }
    $moonOrbit = 300.0;
    $moonAngle = $rotation * 4.0;
    $moonX = $cx - $moonOrbit + jl_Math_cos($moonAngle) * $moonOrbit;
    $moonY = $cy + jl_Math_sin($moonAngle) * $moonOrbit;
    var$9 = 0.3;
    $g.globalAlpha = var$9;
    var$18 = $moonX - 10.0;
    var$10 = $moonY - 10.0;
    $gradient = $g.createRadialGradient(var$18, var$10, 5.0, $moonX, $moonY, 30.0);
    $gradient.addColorStop(0.0, "#fff");
    $gradient.addColorStop(1.0, "#ddd");
    $g.fillStyle = $gradient;
    $g.beginPath();
    $g.arc($moonX, $moonY, 25.0, 0.0, 6.283185307179586);
    $g.fill();
    $g.restore();
    $this.$drawChurchSilhouette(120.0, $this.$height0, 1.5, $g);
    $this.$drawGraveyard(200.0, $this.$height0, 1.2, $g);
    $this.$drawGraveyard(350.0, $this.$height0, 0.7, $g);
    $this.$drawGraveyard(450.0, $this.$height0, 1.0, $g);
},
keth_HalloweenScene_drawChurchSilhouette = ($this, $x, $y, $scale, $g) => {
    let var$5;
    $g.save();
    $g.translate($x, $y);
    $g.scale($scale, $scale);
    var$5 = "#111";
    $g.fillStyle = var$5;
    $g.beginPath();
    $g.moveTo((-20.0), 0.0);
    $g.lineTo((-20.0), (-30.0));
    $g.lineTo(20.0, (-30.0));
    $g.lineTo(20.0, 0.0);
    $g.closePath();
    $g.fill();
    $g.beginPath();
    $g.moveTo((-10.0), (-30.0));
    $g.lineTo((-10.0), (-70.0));
    $g.lineTo(10.0, (-70.0));
    $g.lineTo(10.0, (-30.0));
    $g.closePath();
    $g.fill();
    var$5 = "#111";
    $g.strokeStyle = var$5;
    var$5 = 3.0;
    $g.lineWidth = var$5;
    $g.beginPath();
    $g.moveTo(0.0, (-75.0));
    $g.lineTo(0.0, (-85.0));
    $g.moveTo((-5.0), (-80.0));
    $g.lineTo(5.0, (-80.0));
    $g.stroke();
    $g.restore();
},
keth_HalloweenScene_drawGraveyard = ($this, $x, $y, $scale, $g) => {
    let var$5, $i, var$7, var$8, $gx, $gy, var$11;
    $g.save();
    $g.translate($x, $y);
    $g.scale($scale, $scale);
    var$5 = "#111";
    $g.strokeStyle = var$5;
    var$5 = 2.0;
    $g.lineWidth = var$5;
    $i = 0;
    while ($i < 6) {
        var$7 = $i * 15 | 0;
        var$8 = $i;
        $gx = var$7 + jl_Math_sin(var$8 * 1.3) * 2.0;
        $gy = jl_Math_cos(var$8) * 2.0;
        $g.beginPath();
        var$7 = $gx - 3.0;
        $g.moveTo(var$7, $gy);
        var$8 = $gx + 3.0;
        $g.lineTo(var$8, $gy);
        $g.stroke();
        $g.beginPath();
        $g.moveTo($gx, $gy);
        var$11 = $gy - 10.0 - jl_Math_random() * 5.0;
        $g.lineTo($gx, var$11);
        var$11 = $gy - 6.0;
        $g.moveTo(var$7, var$11);
        $g.lineTo(var$8, var$11);
        $g.stroke();
        $i = $i + 1 | 0;
    }
    $g.restore();
},
keth_HalloweenScene_draw = ($this, var$1, var$2) => {
    $this.$draw0(var$1, otji_JSWrapper_unwrap(var$2));
},
keb_World$addComponent$lambda$_7_0 = $rt_classWithoutFields(),
keb_World$addComponent$lambda$_7_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
keb_World$addComponent$lambda$_7_0__init_0 = () => {
    let var_0 = new keb_World$addComponent$lambda$_7_0();
    keb_World$addComponent$lambda$_7_0__init_(var_0);
    return var_0;
},
keb_World$addComponent$lambda$_7_0_apply0 = (var$0, var$1) => {
    return keb_World$addComponent$lambda$_7_0_apply(var$0, var$1);
},
keb_World$addComponent$lambda$_7_0_apply = (var$0, var$1) => {
    return keb_World_lambda$addComponent$1(var$1);
},
jl_IllegalStateException = $rt_classWithoutFields(jl_RuntimeException),
jl_IllegalStateException__init_ = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_IllegalStateException__init_0 = var_0 => {
    let var_1 = new jl_IllegalStateException();
    jl_IllegalStateException__init_(var_1, var_0);
    return var_1;
},
jlr_Array = $rt_classWithoutFields(),
jlr_Array_newInstance = ($componentType, $length) => {
    if ($componentType === null)
        $rt_throw(jl_NullPointerException__init_1());
    if ($componentType === $rt_cls($rt_voidcls))
        $rt_throw(jl_IllegalArgumentException__init_());
    if ($length < 0)
        $rt_throw(jl_NegativeArraySizeException__init_0());
    return jlr_Array_newInstanceImpl(jl_Class_getPlatformClass($componentType), $length);
},
jlr_Array_newInstanceImpl = (var$1, var$2) => {
    if (var$1.$meta.primitive) {
        switch (var$1) {
        }
        ;
    }
    return $rt_createArray(var$1, var$2);
};
function ju_HashMap$AbstractMapIterator() {
    let a = this; jl_Object.call(a);
    a.$position = 0;
    a.$expectedModCount = 0;
    a.$futureEntry = null;
    a.$currentEntry = null;
    a.$prevEntry = null;
    a.$associatedMap = null;
}
let ju_HashMap$AbstractMapIterator__init_ = ($this, var$1) => {
    jl_Object__init_($this);
    $this.$associatedMap = var$1;
    $this.$expectedModCount = var$1.$modCount;
    $this.$futureEntry = null;
},
ju_HashMap$AbstractMapIterator__init_0 = var_0 => {
    let var_1 = new ju_HashMap$AbstractMapIterator();
    ju_HashMap$AbstractMapIterator__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$AbstractMapIterator_hasNext = $this => {
    if ($this.$futureEntry !== null)
        return 1;
    while ($this.$position < $this.$associatedMap.$elementData.data.length) {
        if ($this.$associatedMap.$elementData.data[$this.$position] !== null)
            return 1;
        $this.$position = $this.$position + 1 | 0;
    }
    return 0;
},
ju_HashMap$AbstractMapIterator_checkConcurrentMod = $this => {
    if ($this.$expectedModCount == $this.$associatedMap.$modCount)
        return;
    $rt_throw(ju_ConcurrentModificationException__init_());
},
ju_HashMap$AbstractMapIterator_makeNext = $this => {
    let var$1, var$2;
    ju_HashMap$AbstractMapIterator_checkConcurrentMod($this);
    if (!$this.$hasNext())
        $rt_throw(ju_NoSuchElementException__init_());
    if ($this.$futureEntry === null) {
        var$1 = $this.$associatedMap.$elementData.data;
        var$2 = $this.$position;
        $this.$position = var$2 + 1 | 0;
        $this.$currentEntry = var$1[var$2];
        $this.$futureEntry = $this.$currentEntry.$next1;
        $this.$prevEntry = null;
    } else {
        if ($this.$currentEntry !== null)
            $this.$prevEntry = $this.$currentEntry;
        $this.$currentEntry = $this.$futureEntry;
        $this.$futureEntry = $this.$futureEntry.$next1;
    }
};
function otcit_DoubleAnalyzer$Result() {
    let a = this; jl_Object.call(a);
    a.$mantissa = Long_ZERO;
    a.$exponent = 0;
    a.$sign = 0;
}
let otcit_DoubleAnalyzer$Result__init_0 = $this => {
    jl_Object__init_($this);
},
otcit_DoubleAnalyzer$Result__init_ = () => {
    let var_0 = new otcit_DoubleAnalyzer$Result();
    otcit_DoubleAnalyzer$Result__init_0(var_0);
    return var_0;
},
jl_NullPointerException = $rt_classWithoutFields(jl_RuntimeException),
jl_NullPointerException__init_ = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_NullPointerException__init_2 = var_0 => {
    let var_1 = new jl_NullPointerException();
    jl_NullPointerException__init_(var_1, var_0);
    return var_1;
},
jl_NullPointerException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_NullPointerException__init_1 = () => {
    let var_0 = new jl_NullPointerException();
    jl_NullPointerException__init_0(var_0);
    return var_0;
},
oti_AsyncCallback = $rt_classWithoutFields(0);
function otpp_AsyncCallbackWrapper() {
    jl_Object.call(this);
    this.$realAsyncCallback = null;
}
let otpp_AsyncCallbackWrapper__init_ = ($this, $realAsyncCallback) => {
    jl_Object__init_($this);
    $this.$realAsyncCallback = $realAsyncCallback;
},
otpp_AsyncCallbackWrapper__init_0 = var_0 => {
    let var_1 = new otpp_AsyncCallbackWrapper();
    otpp_AsyncCallbackWrapper__init_(var_1, var_0);
    return var_1;
},
otpp_AsyncCallbackWrapper_create = $realAsyncCallback => {
    return otpp_AsyncCallbackWrapper__init_0($realAsyncCallback);
},
otpp_AsyncCallbackWrapper_complete = ($this, $result) => {
    $this.$realAsyncCallback.$complete($result);
},
otpp_AsyncCallbackWrapper_error = ($this, $e) => {
    $this.$realAsyncCallback.$error($e);
},
otr_EventQueue$Event = $rt_classWithoutFields(0),
otci_IntegerUtil = $rt_classWithoutFields(),
otci_IntegerUtil_toUnsignedLogRadixString = ($value, $radixLog2) => {
    let $radix, $mask, $sz, $chars, $pos, $target, var$9, $target_0;
    if (!$value)
        return $rt_s(9);
    $radix = 1 << $radixLog2;
    $mask = $radix - 1 | 0;
    $sz = (((32 - jl_Integer_numberOfLeadingZeros($value) | 0) + $radixLog2 | 0) - 1 | 0) / $radixLog2 | 0;
    $chars = $rt_createCharArray($sz);
    $pos = $rt_imul($sz - 1 | 0, $radixLog2);
    $target = 0;
    while ($pos >= 0) {
        var$9 = $chars.data;
        $target_0 = $target + 1 | 0;
        var$9[$target] = jl_Character_forDigit(($value >>> $pos | 0) & $mask, $radix);
        $pos = $pos - $radixLog2 | 0;
        $target = $target_0;
    }
    return jl_String__init_3($chars);
};
function jl_Object$Monitor() {
    let a = this; jl_Object.call(a);
    a.$enteringThreads = null;
    a.$notifyListeners = null;
    a.$owner = null;
    a.$count = 0;
}
let jl_Object$Monitor__init_ = $this => {
    jl_Object__init_($this);
    $this.$owner = jl_Thread_currentThread();
},
jl_Object$Monitor__init_0 = () => {
    let var_0 = new jl_Object$Monitor();
    jl_Object$Monitor__init_(var_0);
    return var_0;
},
jl_ThreadInterruptHandler = $rt_classWithoutFields(0),
jl_Thread$UncaughtExceptionHandler = $rt_classWithoutFields(0),
jl_DefaultUncaughtExceptionHandler = $rt_classWithoutFields(),
jl_DefaultUncaughtExceptionHandler__init_ = $this => {
    jl_Object__init_($this);
},
jl_DefaultUncaughtExceptionHandler__init_0 = () => {
    let var_0 = new jl_DefaultUncaughtExceptionHandler();
    jl_DefaultUncaughtExceptionHandler__init_(var_0);
    return var_0;
},
otcir_FieldInfo = $rt_classWithoutFields(),
jl_Math = $rt_classWithoutFields(),
jl_Math_sin = var$1 => {
    return Math.sin(var$1);
},
jl_Math_cos = var$1 => {
    return Math.cos(var$1);
},
jl_Math_sqrt = var$1 => {
    return Math.sqrt(var$1);
},
jl_Math_floor = var$1 => {
    return Math.floor(var$1);
},
jl_Math_atan2 = (var$1, var$2) => {
    return Math.atan2(var$1, var$2);
},
jl_Math_random = () => {
    return jl_Math_randomImpl();
},
jl_Math_randomImpl = () => {
    return Math.random();
},
jl_Math_min = ($a, $b) => {
    if ($a < $b)
        $b = $a;
    return $b;
},
jl_Math_max = ($a, $b) => {
    if ($a > $b)
        $b = $a;
    return $b;
},
jl_Math_maxImpl = (var$1, var$2) => {
    return Math.max(var$1, var$2);
},
jl_Math_max0 = (var$1, var$2) => {
    return jl_Math_maxImpl(var$1, var$2);
},
jl_Math_absImpl = var$1 => {
    return Math.abs(var$1);
},
jl_Math_abs = var$1 => {
    return jl_Math_absImpl(var$1);
},
jl_Math_nextAfter = ($start, $direction) => {
    if ($start === $direction)
        return $direction;
    return $direction <= $start ? jl_Math_nextDown($start) : jl_Math_nextUp($start);
},
jl_Math_nextUp = $d => {
    let var$2, $bits, var$4;
    if (!(isNaN($d) ? 1 : 0) && $d !== Infinity) {
        var$2 = $rt_compare($d, 0.0);
        if (!var$2)
            return 4.9E-324;
        $bits = jl_Double_doubleToLongBits($d);
        var$4 = var$2 >= 0 ? Long_add($bits, Long_fromInt(1)) : Long_sub($bits, Long_fromInt(1));
        return $rt_longBitsToDouble(var$4);
    }
    return $d;
},
jl_Math_nextDown = $d => {
    let var$2, $bits, var$4;
    if (!(isNaN($d) ? 1 : 0) && $d !== (-Infinity)) {
        var$2 = $rt_compare($d, 0.0);
        if (!var$2)
            return (-4.9E-324);
        $bits = jl_Double_doubleToLongBits($d);
        var$4 = var$2 >= 0 ? Long_sub($bits, Long_fromInt(1)) : Long_add($bits, Long_fromInt(1));
        return $rt_longBitsToDouble(var$4);
    }
    return $d;
};
function ju_HashMap$HashMapEntrySet() {
    ju_AbstractSet.call(this);
    this.$associatedMap0 = null;
}
let ju_HashMap$HashMapEntrySet__init_ = ($this, $hm) => {
    ju_AbstractSet__init_($this);
    $this.$associatedMap0 = $hm;
},
ju_HashMap$HashMapEntrySet__init_0 = var_0 => {
    let var_1 = new ju_HashMap$HashMapEntrySet();
    ju_HashMap$HashMapEntrySet__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$HashMapEntrySet_iterator = $this => {
    return ju_HashMap$EntryIterator__init_0($this.$associatedMap0);
},
otjc_JSObjects = $rt_classWithoutFields(),
otji_JSWrapper$Helper$FinalizationRegistryConsumer = $rt_classWithoutFields(0);
function kebc_Movement() {
    let a = this; jl_Object.call(a);
    a.$up = 0;
    a.$down = 0;
    a.$left = 0;
    a.$right = 0;
}
let otji_JS = $rt_classWithoutFields(),
otji_JS_function = (var$1, var$2) => {
    let name = 'jso$functor$' + var$2;
    let result = var$1[name];
    if (typeof result !== 'function') {
        let fn = function() {
            return var$1[var$2].apply(var$1, arguments);
        };
        result = () => fn;
        var$1[name] = result;
    }
    return result();
};
function kebs_MovementSystem() {
    jl_Object.call(this);
    this.$world4 = null;
}
let kebs_MovementSystem__init_ = ($this, var$1) => {
    jl_Object__init_($this);
    $this.$world4 = var$1;
},
kebs_MovementSystem__init_0 = var_0 => {
    let var_1 = new kebs_MovementSystem();
    kebs_MovementSystem__init_(var_1, var_0);
    return var_1;
},
kebs_MovementSystem_update = $this => {
    let var$1, $e, $p, $m;
    var$1 = ($this.$world4.$getEntitiesWith($rt_cls(kebc_Position), $rt_cls(kebc_Movement))).$iterator();
    while (var$1.$hasNext()) {
        $e = var$1.$next();
        $p = $this.$world4.$getComponent($e, $rt_cls(kebc_Position));
        $m = $this.$world4.$getComponent($e, $rt_cls(kebc_Movement));
        if ($p !== null && $m !== null) {
            if ($m.$left)
                $p.$setX($p.$getX() - $m.$speed());
            if ($m.$right)
                $p.$setX($p.$getX() + $m.$speed());
            if ($m.$up)
                $p.$setY($p.$getY() - $m.$speed());
            if ($m.$down)
                $p.$setY($p.$getY() + $m.$speed());
        }
    }
};
function jl_Object$monitorEnterWait$lambda$_6_0() {
    let a = this; jl_Object.call(a);
    a.$_00 = null;
    a.$_1 = null;
    a.$_2 = 0;
    a.$_3 = null;
}
let jl_Object$monitorEnterWait$lambda$_6_0__init_ = (var$0, var$1, var$2, var$3, var$4) => {
    jl_Object__init_(var$0);
    var$0.$_00 = var$1;
    var$0.$_1 = var$2;
    var$0.$_2 = var$3;
    var$0.$_3 = var$4;
},
jl_Object$monitorEnterWait$lambda$_6_0__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jl_Object$monitorEnterWait$lambda$_6_0();
    jl_Object$monitorEnterWait$lambda$_6_0__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jl_Object$monitorEnterWait$lambda$_6_0_run = var$0 => {
    jl_Object_lambda$monitorEnterWait$0(var$0.$_00, var$0.$_1, var$0.$_2, var$0.$_3);
};
function ket_OutputTeavmSystem$1() {
    jl_Object.call(this);
    this.$this$0 = null;
}
let ket_OutputTeavmSystem$1__init_ = ($this, $this$0) => {
    $this.$this$0 = $this$0;
    jl_Object__init_($this);
},
ket_OutputTeavmSystem$1__init_0 = var_0 => {
    let var_1 = new ket_OutputTeavmSystem$1();
    ket_OutputTeavmSystem$1__init_(var_1, var_0);
    return var_1;
},
ket_OutputTeavmSystem$1_handleEvent = ($this, $evt) => {
    let var$2, $s;
    $this.$this$0.$width0 = $this.$this$0.$canvas.width;
    $this.$this$0.$height1 = $this.$this$0.$canvas.height;
    var$2 = (ket_OutputTeavmSystem_access$000($this.$this$0)).$iterator();
    while (var$2.$hasNext()) {
        $s = var$2.$next();
        $s.$onResize($this.$this$0.$width0, $this.$this$0.$height1);
    }
},
ket_OutputTeavmSystem$1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
},
ju_Objects = $rt_classWithoutFields(),
ju_Objects_equals = ($a, $b) => {
    if ($a === $b)
        return 1;
    return $a !== null ? $a.$equals0($b) : $b !== null ? 0 : 1;
},
ju_Objects_requireNonNull = $obj => {
    return ju_Objects_requireNonNull0($obj, $rt_s(10));
},
ju_Objects_requireNonNull0 = ($obj, $message) => {
    if ($obj !== null)
        return $obj;
    $rt_throw(jl_NullPointerException__init_2($message));
},
ju_Objects_checkFromIndexSize = ($fromIndex, $size, $length) => {
    if ($fromIndex >= 0 && $size >= 0 && $size <= ($length - $fromIndex | 0))
        return $fromIndex;
    $rt_throw(jl_IndexOutOfBoundsException__init_0());
},
otjc_JSUndefined = $rt_classWithoutFields();
function ju_MapEntry() {
    let a = this; jl_Object.call(a);
    a.$key = null;
    a.$value = null;
}
let ju_MapEntry__init_ = ($this, $theKey, $theValue) => {
    jl_Object__init_($this);
    $this.$key = $theKey;
    $this.$value = $theValue;
},
ju_MapEntry__init_0 = (var_0, var_1) => {
    let var_2 = new ju_MapEntry();
    ju_MapEntry__init_(var_2, var_0, var_1);
    return var_2;
},
ju_MapEntry_getKey = $this => {
    return $this.$key;
};
function ju_HashMap$HashEntry() {
    let a = this; ju_MapEntry.call(a);
    a.$origKeyHash = 0;
    a.$next1 = null;
}
let ju_HashMap$HashEntry__init_ = ($this, $theKey, $hash) => {
    ju_MapEntry__init_($this, $theKey, null);
    $this.$origKeyHash = $hash;
},
ju_HashMap$HashEntry__init_0 = (var_0, var_1) => {
    let var_2 = new ju_HashMap$HashEntry();
    ju_HashMap$HashEntry__init_(var_2, var_0, var_1);
    return var_2;
},
jlr_Type = $rt_classWithoutFields(0);
function kebs_ExplosionSystem() {
    let a = this; jl_Object.call(a);
    a.$world1 = null;
    a.$deltaTime1 = 0.0;
    a.$listener = null;
}
let kebs_ExplosionSystem__init_ = ($this, $world, $deltaTime, $listener) => {
    jl_Object__init_($this);
    $this.$world1 = $world;
    $this.$deltaTime1 = $deltaTime;
    $this.$listener = $listener;
},
kebs_ExplosionSystem__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new kebs_ExplosionSystem();
    kebs_ExplosionSystem__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
kebs_ExplosionSystem_update = $this => {
    let var$1, $e, $explosion;
    var$1 = ($this.$world1.$getEntitiesWith0($rt_cls(kebc_Explosion))).$iterator();
    while (var$1.$hasNext()) {
        $e = var$1.$next();
        $explosion = $this.$world1.$getComponent($e, $rt_cls(kebc_Explosion));
        if ($explosion !== null) {
            if (!$explosion.$finished())
                $explosion.$update0($this.$deltaTime1);
            else {
                $this.$world1.$removeComponent($e, $rt_cls(kebc_Explosion));
                if ($this.$listener !== null)
                    $this.$listener.$explosionFinished($this.$world1, $e, $explosion);
            }
        }
    }
};
function jl_Thread$SleepHandler() {
    let a = this; jl_Object.call(a);
    a.$thread = null;
    a.$callback = null;
    a.$isInterrupted = 0;
    a.$scheduleId = 0;
}
let jl_Thread$SleepHandler__init_ = ($this, $thread_0, $callback) => {
    jl_Object__init_($this);
    $this.$thread = $thread_0;
    $this.$callback = $callback;
},
jl_Thread$SleepHandler__init_0 = (var_0, var_1) => {
    let var_2 = new jl_Thread$SleepHandler();
    jl_Thread$SleepHandler__init_(var_2, var_0, var_1);
    return var_2;
},
jl_Thread$SleepHandler_run = $this => {
    if (!$this.$isInterrupted) {
        $this.$thread.$interruptHandler = null;
        jl_Thread_setCurrentThread($this.$thread);
        $this.$callback.$complete(null);
    }
},
ju_HashMap$KeyIterator = $rt_classWithoutFields(ju_HashMap$AbstractMapIterator),
ju_HashMap$KeyIterator__init_ = ($this, $map) => {
    ju_HashMap$AbstractMapIterator__init_($this, $map);
},
ju_HashMap$KeyIterator__init_0 = var_0 => {
    let var_1 = new ju_HashMap$KeyIterator();
    ju_HashMap$KeyIterator__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$KeyIterator_next = $this => {
    ju_HashMap$AbstractMapIterator_makeNext($this);
    return $this.$currentEntry.$key;
};
function kebs_TickEventSystem() {
    let a = this; jl_Object.call(a);
    a.$world2 = null;
    a.$listener1 = null;
}
let kebs_TickEventSystem__init_ = ($this, $world, $listener) => {
    jl_Object__init_($this);
    $this.$world2 = $world;
    $this.$listener1 = $listener;
},
kebs_TickEventSystem__init_0 = (var_0, var_1) => {
    let var_2 = new kebs_TickEventSystem();
    kebs_TickEventSystem__init_(var_2, var_0, var_1);
    return var_2;
},
kebs_TickEventSystem_update = $this => {
    let var$1, $e, $rte;
    var$1 = ($this.$world2.$getEntitiesWith0($rt_cls(kebc_TickEvent))).$iterator();
    while (var$1.$hasNext()) {
        $e = var$1.$next();
        $rte = $this.$world2.$getComponent($e, $rt_cls(kebc_TickEvent));
        if ($rte.$tick())
            $this.$listener1.$updateOnTick($this.$world2, $e);
    }
};
function ju_HashMap() {
    let a = this; ju_AbstractMap.call(a);
    a.$elementCount = 0;
    a.$elementData = null;
    a.$modCount = 0;
    a.$loadFactor = 0.0;
    a.$threshold = 0;
}
let ju_HashMap_newElementArray = ($this, $s) => {
    return $rt_createArray(ju_HashMap$HashEntry, $s);
},
ju_HashMap__init_2 = $this => {
    ju_HashMap__init_($this, 16);
},
ju_HashMap__init_1 = () => {
    let var_0 = new ju_HashMap();
    ju_HashMap__init_2(var_0);
    return var_0;
},
ju_HashMap__init_ = ($this, $capacity) => {
    ju_HashMap__init_0($this, $capacity, 0.75);
},
ju_HashMap__init_3 = var_0 => {
    let var_1 = new ju_HashMap();
    ju_HashMap__init_(var_1, var_0);
    return var_1;
},
ju_HashMap_calculateCapacity = $x => {
    let var$2, var$3;
    if ($x >= 1073741824)
        return 1073741824;
    if (!$x)
        return 16;
    var$2 = $x - 1 | 0;
    var$3 = var$2 | var$2 >> 1;
    var$3 = var$3 | var$3 >> 2;
    var$3 = var$3 | var$3 >> 4;
    var$3 = var$3 | var$3 >> 8;
    var$3 = var$3 | var$3 >> 16;
    return var$3 + 1 | 0;
},
ju_HashMap__init_0 = ($this, $capacity, $loadFactor) => {
    let var$3;
    ju_AbstractMap__init_($this);
    if ($capacity >= 0 && $loadFactor > 0.0) {
        var$3 = ju_HashMap_calculateCapacity($capacity);
        $this.$elementCount = 0;
        $this.$elementData = $this.$newElementArray(var$3);
        $this.$loadFactor = $loadFactor;
        ju_HashMap_computeThreshold($this);
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_());
},
ju_HashMap__init_4 = (var_0, var_1) => {
    let var_2 = new ju_HashMap();
    ju_HashMap__init_0(var_2, var_0, var_1);
    return var_2;
},
ju_HashMap_computeThreshold = $this => {
    $this.$threshold = $this.$elementData.data.length * $this.$loadFactor | 0;
},
ju_HashMap_containsKey = ($this, $key) => {
    let $m;
    $m = ju_HashMap_entryByKey($this, $key);
    return $m === null ? 0 : 1;
},
ju_HashMap_entrySet = $this => {
    return ju_HashMap$HashMapEntrySet__init_0($this);
},
ju_HashMap_get = ($this, $key) => {
    let $m;
    $m = ju_HashMap_entryByKey($this, $key);
    if ($m === null)
        return null;
    return $m.$value;
},
ju_HashMap_entryByKey = ($this, $key) => {
    let $m, $hash, $index;
    if ($key === null)
        $m = ju_HashMap_findNullKeyEntry($this);
    else {
        $hash = $key.$hashCode0();
        $index = $hash & ($this.$elementData.data.length - 1 | 0);
        $m = ju_HashMap_findNonNullKeyEntry($this, $key, $index, $hash);
    }
    return $m;
},
ju_HashMap_findNonNullKeyEntry = ($this, $key, $index, $keyHash) => {
    let $m;
    $m = $this.$elementData.data[$index];
    while ($m !== null && !($m.$origKeyHash == $keyHash && ju_HashMap_areEqualKeys($key, $m.$key))) {
        $m = $m.$next1;
    }
    return $m;
},
ju_HashMap_findNullKeyEntry = $this => {
    let $m;
    $m = $this.$elementData.data[0];
    while ($m !== null && $m.$key !== null) {
        $m = $m.$next1;
    }
    return $m;
},
ju_HashMap_keySet = $this => {
    if ($this.$cachedKeySet === null)
        $this.$cachedKeySet = ju_HashMap$1__init_0($this);
    return $this.$cachedKeySet;
},
ju_HashMap_put = ($this, $key, $value) => {
    return ju_HashMap_putImpl($this, $key, $value);
},
ju_HashMap_putImpl = ($this, $key, $value) => {
    let $entry, var$4, $hash, $index, $result;
    if ($key === null) {
        $entry = ju_HashMap_findNullKeyEntry($this);
        if ($entry === null) {
            $this.$modCount = $this.$modCount + 1 | 0;
            $entry = ju_HashMap_createHashedEntry($this, null, 0, 0);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold)
                $this.$rehash();
        }
    } else {
        $hash = $key.$hashCode0();
        $index = $hash & ($this.$elementData.data.length - 1 | 0);
        $entry = ju_HashMap_findNonNullKeyEntry($this, $key, $index, $hash);
        if ($entry === null) {
            $this.$modCount = $this.$modCount + 1 | 0;
            $entry = ju_HashMap_createHashedEntry($this, $key, $index, $hash);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold)
                $this.$rehash();
        }
    }
    $result = $entry.$value;
    $entry.$value = $value;
    return $result;
},
ju_HashMap_createHashedEntry = ($this, $key, $index, $hash) => {
    let $entry;
    $entry = ju_HashMap$HashEntry__init_0($key, $hash);
    $entry.$next1 = $this.$elementData.data[$index];
    $this.$elementData.data[$index] = $entry;
    return $entry;
},
ju_HashMap_rehash = ($this, $capacity) => {
    let $length, $newData, $i, $entry, var$6, $index, $next;
    $length = ju_HashMap_calculateCapacity(!$capacity ? 1 : $capacity << 1);
    $newData = $this.$newElementArray($length);
    $i = 0;
    while ($i < $this.$elementData.data.length) {
        $entry = $this.$elementData.data[$i];
        $this.$elementData.data[$i] = null;
        while ($entry !== null) {
            var$6 = $newData.data;
            $index = $entry.$origKeyHash & ($length - 1 | 0);
            $next = $entry.$next1;
            $entry.$next1 = var$6[$index];
            var$6[$index] = $entry;
            $entry = $next;
        }
        $i = $i + 1 | 0;
    }
    $this.$elementData = $newData;
    ju_HashMap_computeThreshold($this);
},
ju_HashMap_rehash0 = $this => {
    $this.$rehash0($this.$elementData.data.length);
},
ju_HashMap_remove = ($this, $key) => {
    let $entry;
    $entry = ju_HashMap_removeByKey($this, $key);
    if ($entry === null)
        return null;
    return $entry.$value;
},
ju_HashMap_removeByKey = ($this, $key) => {
    let $index, $last, $entry, $entry_0, $hash;
    a: {
        $index = 0;
        $last = null;
        if ($key === null) {
            $entry = $this.$elementData.data[0];
            while ($entry !== null) {
                if ($entry.$key === null)
                    break a;
                $entry_0 = $entry.$next1;
                $last = $entry;
                $entry = $entry_0;
            }
        } else {
            $hash = $key.$hashCode0();
            $index = $hash & ($this.$elementData.data.length - 1 | 0);
            $entry = $this.$elementData.data[$index];
            while ($entry !== null && !($entry.$origKeyHash == $hash && ju_HashMap_areEqualKeys($key, $entry.$key))) {
                $entry_0 = $entry.$next1;
                $last = $entry;
                $entry = $entry_0;
            }
        }
    }
    if ($entry === null)
        return null;
    if ($last !== null)
        $last.$next1 = $entry.$next1;
    else
        $this.$elementData.data[$index] = $entry.$next1;
    $this.$modCount = $this.$modCount + 1 | 0;
    $this.$elementCount = $this.$elementCount - 1 | 0;
    return $entry;
},
ju_HashMap_size = $this => {
    return $this.$elementCount;
},
ju_HashMap_areEqualKeys = ($key1, $key2) => {
    return $key1 !== $key2 && !$key1.$equals0($key2) ? 0 : 1;
};
function ju_TemplateCollections$ImmutableArrayList() {
    ju_TemplateCollections$AbstractImmutableList.call(this);
    this.$list = null;
}
let ju_TemplateCollections$ImmutableArrayList__init_ = ($this, $list) => {
    ju_TemplateCollections$AbstractImmutableList__init_($this);
    $this.$list = $list;
},
ju_TemplateCollections$ImmutableArrayList__init_0 = var_0 => {
    let var_1 = new ju_TemplateCollections$ImmutableArrayList();
    ju_TemplateCollections$ImmutableArrayList__init_(var_1, var_0);
    return var_1;
},
ju_TemplateCollections$ImmutableArrayList_get = ($this, $index) => {
    return $this.$list.data[$index];
},
ju_TemplateCollections$ImmutableArrayList_size = $this => {
    return $this.$list.data.length;
};
function otji_JSWrapper() {
    jl_Object.call(this);
    this.$js = null;
}
let otji_JSWrapper__init_0 = ($this, $js) => {
    jl_Object__init_($this);
    $this.$js = $js;
},
otji_JSWrapper__init_ = var_0 => {
    let var_1 = new otji_JSWrapper();
    otji_JSWrapper__init_0(var_1, var_0);
    return var_1;
},
otji_JSWrapper_wrap = $o => {
    let $type, $isObject, $wrappers, $existingRef, $existing, $wrapper, $jsString, $stringWrappers, $stringFinalizationRegistry, $wrapperAsJs, $jsNumber, $numberWrappers, $numberFinalizationRegistry;
    if ($o === null)
        return null;
    $type = $rt_str(typeof $o);
    $isObject = !$type.$equals0($rt_s(11)) && !$type.$equals0($rt_s(12)) ? 0 : 1;
    otji_JSWrapper$Helper_$callClinit();
    $wrappers = otji_JSWrapper$Helper_wrappers;
    if ($wrappers !== null) {
        if ($isObject) {
            $existingRef = $wrappers.get($o);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrappers.set($o, new WeakRef($wrapper));
            return $wrapper;
        }
        if ($type.$equals0($rt_s(13))) {
            $jsString = $o;
            $stringWrappers = otji_JSWrapper$Helper_stringWrappers;
            $stringFinalizationRegistry = otji_JSWrapper$Helper_stringFinalizationRegistry;
            $existingRef = $stringWrappers.get($jsString);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrapperAsJs = $wrapper;
            $stringWrappers.set($jsString, new WeakRef($wrapperAsJs));
            $stringFinalizationRegistry.register($wrapperAsJs, $jsString);
            return $wrapper;
        }
        if ($type.$equals0($rt_s(14))) {
            $jsNumber = $o;
            $numberWrappers = otji_JSWrapper$Helper_numberWrappers;
            $numberFinalizationRegistry = otji_JSWrapper$Helper_numberFinalizationRegistry;
            $existingRef = $numberWrappers.get($jsNumber);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrapperAsJs = $wrapper;
            $numberWrappers.set($jsNumber, new WeakRef($wrapperAsJs));
            $numberFinalizationRegistry.register($wrapperAsJs, $jsNumber);
            return $wrapper;
        }
        if ($type.$equals0($rt_s(15))) {
            $existingRef = otji_JSWrapper$Helper_undefinedWrapper;
            $existing = $existingRef === null ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrapperAsJs = $wrapper;
            otji_JSWrapper$Helper_undefinedWrapper = new WeakRef($wrapperAsJs);
            return $wrapper;
        }
    }
    return otji_JSWrapper__init_($o);
},
otji_JSWrapper_maybeWrap = $o => {
    if ($o !== null && !($o instanceof $rt_objcls()))
        $o = otji_JSWrapper_wrap($o);
    return $o;
},
otji_JSWrapper_unwrap = $o => {
    if ($o === null)
        return null;
    return !($o instanceof otji_JSWrapper) ? $o : $o.$js;
},
otji_JSWrapper_maybeUnwrap = $o => {
    if ($o === null)
        return null;
    return !($o instanceof $rt_objcls()) ? $o : otji_JSWrapper_unwrap($o);
};
function kebu_IntRange() {
    let a = this; jl_Object.call(a);
    a.$min0 = 0;
    a.$max1 = 0;
}
let kebu_IntRange__init_ = ($this, $min, $max) => {
    jl_Object__init_($this);
    if ($min <= $max) {
        $this.$min0 = $min;
        $this.$max1 = $max;
    } else {
        $this.$min0 = $max;
        $this.$max1 = $min;
    }
},
kebu_IntRange__init_0 = (var_0, var_1) => {
    let var_2 = new kebu_IntRange();
    kebu_IntRange__init_(var_2, var_0, var_1);
    return var_2;
},
kebu_IntRange_random = $this => {
    return kebu_IntRange_random0($this.$min0, $this.$max1);
},
kebu_IntRange_random0 = ($min, $max) => {
    if ($min == $max)
        return $min;
    return (juc_ThreadLocalRandom_current0()).$nextInt1($min, $max);
},
otcit_DoubleAnalyzer = $rt_classWithoutFields(),
otcit_DoubleAnalyzer_MAX_MANTISSA = Long_ZERO,
otcit_DoubleAnalyzer_resultForLog10 = null,
otcit_DoubleAnalyzer_mantissa10Table = null,
otcit_DoubleAnalyzer_exp10Table = null,
otcit_DoubleAnalyzer_$callClinit = () => {
    otcit_DoubleAnalyzer_$callClinit = $rt_eraseClinit(otcit_DoubleAnalyzer);
    otcit_DoubleAnalyzer__clinit_();
},
otcit_DoubleAnalyzer_analyze = ($d, $result) => {
    let $bits, $mantissa, $exponent, var$6, $decExponent, var$8, var$9, $binExponentCorrection, $mantissaShift, $decMantissa, var$13, var$14, var$15, $decMantissaHi, $decMantissaLow, $lowerPos, $upperPos, $posCmp;
    otcit_DoubleAnalyzer_$callClinit();
    $bits = jl_Double_doubleToLongBits($d);
    $result.$sign = Long_eq(Long_and($bits, Long_create(0, 2147483648)), Long_ZERO) ? 0 : 1;
    $mantissa = Long_and($bits, Long_create(4294967295, 1048575));
    $exponent = Long_lo(Long_shr($bits, 52)) & 2047;
    if (Long_eq($mantissa, Long_ZERO) && !$exponent) {
        $result.$mantissa = Long_ZERO;
        $result.$exponent = 0;
        return;
    }
    if ($exponent)
        var$6 = Long_or($mantissa, Long_create(0, 1048576));
    else {
        var$6 = Long_shl($mantissa, 1);
        while (Long_eq(Long_and(var$6, Long_create(0, 1048576)), Long_ZERO)) {
            var$6 = Long_shl(var$6, 1);
            $exponent = $exponent + (-1) | 0;
        }
    }
    $decExponent = ju_Arrays_binarySearch(otcit_DoubleAnalyzer_exp10Table, $exponent << 16 >> 16);
    if ($decExponent < 0)
        $decExponent =  -$decExponent | 0;
    var$8 = otcit_DoubleAnalyzer_exp10Table.data;
    var$9 = $decExponent + 1 | 0;
    $binExponentCorrection = $exponent - var$8[var$9] | 0;
    $mantissaShift = 12 + $binExponentCorrection | 0;
    $decMantissa = otcit_DoubleAnalyzer_mulAndShiftRight(var$6, otcit_DoubleAnalyzer_mantissa10Table.data[var$9], $mantissaShift);
    if (Long_le($decMantissa, otcit_DoubleAnalyzer_MAX_MANTISSA)) {
        while (jl_Long_compareUnsigned($decMantissa, otcit_DoubleAnalyzer_MAX_MANTISSA) <= 0) {
            $decExponent = $decExponent + (-1) | 0;
            $decMantissa = Long_add(Long_mul($decMantissa, Long_fromInt(10)), Long_fromInt(9));
        }
        var$8 = otcit_DoubleAnalyzer_exp10Table.data;
        var$9 = $decExponent + 1 | 0;
        var$13 = $exponent - var$8[var$9] | 0;
        $mantissaShift = 12 + var$13 | 0;
        $decMantissa = otcit_DoubleAnalyzer_mulAndShiftRight(var$6, otcit_DoubleAnalyzer_mantissa10Table.data[var$9], $mantissaShift);
    }
    var$14 = Long_shl(var$6, 1);
    var$6 = Long_add(var$14, Long_fromInt(1));
    var$8 = otcit_DoubleAnalyzer_mantissa10Table.data;
    var$13 = $decExponent + 1 | 0;
    var$15 = var$8[var$13];
    var$9 = $mantissaShift - 1 | 0;
    $decMantissaHi = otcit_DoubleAnalyzer_mulAndShiftRight(var$6, var$15, var$9);
    $decMantissaLow = otcit_DoubleAnalyzer_mulAndShiftRight(Long_sub(var$14, Long_fromInt(1)), otcit_DoubleAnalyzer_mantissa10Table.data[var$13], var$9);
    $lowerPos = otcit_DoubleAnalyzer_findLowerDistance($decMantissa, $decMantissaLow);
    $upperPos = otcit_DoubleAnalyzer_findUpperDistance($decMantissa, $decMantissaHi);
    $posCmp = jl_Long_compareUnsigned($lowerPos, $upperPos);
    var$6 = $posCmp > 0 ? Long_mul(jl_Long_divideUnsigned($decMantissa, $lowerPos), $lowerPos) : $posCmp < 0 ? Long_add(Long_mul(jl_Long_divideUnsigned($decMantissa, $upperPos), $upperPos), $upperPos) : Long_mul(jl_Long_divideUnsigned(Long_add($decMantissa, Long_div($upperPos, Long_fromInt(2))), $upperPos), $upperPos);
    if (jl_Long_compareUnsigned(var$6, Long_create(2808348672, 232830643)) >= 0)
        while (true) {
            $decExponent = $decExponent + 1 | 0;
            var$6 = jl_Long_divideUnsigned(var$6, Long_fromInt(10));
            if (jl_Long_compareUnsigned(var$6, Long_create(2808348672, 232830643)) < 0)
                break;
        }
    else if (jl_Long_compareUnsigned(var$6, Long_create(1569325056, 23283064)) < 0) {
        $decExponent = $decExponent + (-1) | 0;
        var$6 = Long_mul(var$6, Long_fromInt(10));
    }
    $result.$mantissa = var$6;
    $result.$exponent = $decExponent - 330 | 0;
},
otcit_DoubleAnalyzer_findLowerDistance = ($mantissa, $lower) => {
    let $pos, $pos_0, var$5, var$6;
    otcit_DoubleAnalyzer_$callClinit();
    $pos = Long_fromInt(1);
    while (true) {
        $pos_0 = Long_mul($pos, Long_fromInt(10));
        var$5 = jl_Long_divideUnsigned($mantissa, $pos_0);
        var$6 = jl_Long_divideUnsigned($lower, $pos_0);
        if (jl_Long_compareUnsigned(var$5, var$6) <= 0)
            break;
        $pos = $pos_0;
    }
    return $pos;
},
otcit_DoubleAnalyzer_findUpperDistance = ($mantissa, $upper) => {
    let $pos, $pos_0, var$5, var$6;
    otcit_DoubleAnalyzer_$callClinit();
    $pos = Long_fromInt(1);
    while (true) {
        $pos_0 = Long_mul($pos, Long_fromInt(10));
        var$5 = jl_Long_divideUnsigned($mantissa, $pos_0);
        var$6 = jl_Long_divideUnsigned($upper, $pos_0);
        if (jl_Long_compareUnsigned(var$5, var$6) >= 0)
            break;
        $pos = $pos_0;
    }
    return $pos;
},
otcit_DoubleAnalyzer_mulAndShiftRight = ($a, $b, $shift) => {
    let $a1, $a2, $a3, $a4, $b1, $b2, $b3, $b4, $cm, $c0, $c1, $c2, $c3, $c, var$18;
    otcit_DoubleAnalyzer_$callClinit();
    $a1 = Long_and($a, Long_fromInt(65535));
    $a2 = Long_and(Long_shru($a, 16), Long_fromInt(65535));
    $a3 = Long_and(Long_shru($a, 32), Long_fromInt(65535));
    $a4 = Long_and(Long_shru($a, 48), Long_fromInt(65535));
    $b1 = Long_and($b, Long_fromInt(65535));
    $b2 = Long_and(Long_shru($b, 16), Long_fromInt(65535));
    $b3 = Long_and(Long_shru($b, 32), Long_fromInt(65535));
    $b4 = Long_and(Long_shru($b, 48), Long_fromInt(65535));
    $cm = Long_add(Long_add(Long_mul($b3, $a1), Long_mul($b2, $a2)), Long_mul($b1, $a3));
    $c0 = Long_add(Long_add(Long_add(Long_mul($b4, $a1), Long_mul($b3, $a2)), Long_mul($b2, $a3)), Long_mul($b1, $a4));
    $c1 = Long_add(Long_add(Long_mul($b4, $a2), Long_mul($b3, $a3)), Long_mul($b2, $a4));
    $c2 = Long_add(Long_mul($b4, $a3), Long_mul($b3, $a4));
    $c3 = Long_mul($b4, $a4);
    $c = Long_add(Long_add(Long_shl($c3, 32 + $shift | 0), Long_shl($c2, 16 + $shift | 0)), Long_shl($c1, $shift));
    var$18 = Long_add($cm, Long_shl($c0, 16));
    var$18 = Long_add($c, Long_shru(var$18, 32 - $shift | 0));
    return var$18;
},
otcit_DoubleAnalyzer__clinit_ = () => {
    otcit_DoubleAnalyzer_MAX_MANTISSA = jl_Long_divideUnsigned(Long_fromInt(-1), Long_fromInt(10));
    otcit_DoubleAnalyzer_resultForLog10 = otcit_DoubleAnalyzer$Result__init_();
    otcit_DoubleAnalyzer_mantissa10Table = $rt_createLongArrayFromData([Long_create(3251292512, 2194092222), Long_create(1766094183, 3510547556), Long_create(553881887, 2808438045), Long_create(443105509, 2246750436), Long_create(3285949193, 3594800697), Long_create(910772436, 2875840558), Long_create(2446604867, 2300672446), Long_create(2196580869, 3681075914), Long_create(2616258154, 2944860731), Long_create(1234013064, 2355888585), Long_create(1974420903, 3769421736), Long_create(720543263, 3015537389), Long_create(1435428070, 2412429911),
    Long_create(578697993, 3859887858), Long_create(2180945313, 3087910286), Long_create(885762791, 2470328229), Long_create(3135207384, 3952525166), Long_create(1649172448, 3162020133), Long_create(3037324877, 2529616106), Long_create(3141732885, 4047385770), Long_create(2513386308, 3237908616), Long_create(1151715587, 2590326893), Long_create(983751480, 4144523029), Long_create(1645994643, 3315618423), Long_create(3034782633, 2652494738), Long_create(3996658754, 4243991581), Long_create(2338333544, 3395193265),
    Long_create(1870666835, 2716154612), Long_create(4073513845, 2172923689), Long_create(3940641775, 3476677903), Long_create(575533043, 2781342323), Long_create(2178413352, 2225073858), Long_create(2626467905, 3560118173), Long_create(3819161242, 2848094538), Long_create(478348616, 2278475631), Long_create(3342338164, 3645561009), Long_create(3532863990, 2916448807), Long_create(1108304273, 2333159046), Long_create(55299919, 3733054474), Long_create(903233395, 2986443579), Long_create(1581580175, 2389154863),
    Long_create(1671534821, 3822647781), Long_create(478234397, 3058118225), Long_create(382587518, 2446494580), Long_create(612140029, 3914391328), Long_create(2207698941, 3131513062), Long_create(48172235, 2505210450), Long_create(77075576, 4008336720), Long_create(61660460, 3206669376), Long_create(3485302205, 2565335500), Long_create(1281516232, 4104536801), Long_create(166219527, 3283629441), Long_create(3568949458, 2626903552), Long_create(2274345296, 4203045684), Long_create(2678469696, 3362436547), Long_create(424788838, 2689949238),
    Long_create(2057817989, 2151959390), Long_create(3292508783, 3443135024), Long_create(3493000485, 2754508019), Long_create(3653393847, 2203606415), Long_create(1550462860, 3525770265), Long_create(1240370288, 2820616212), Long_create(3569276608, 2256492969), Long_create(3133862195, 3610388751), Long_create(1648096297, 2888311001), Long_create(459483578, 2310648801), Long_create(3312154103, 3697038081), Long_create(1790729823, 2957630465), Long_create(1432583858, 2366104372), Long_create(3151127633, 3785766995),
    Long_create(2520902106, 3028613596), Long_create(1157728226, 2422890877), Long_create(2711358621, 3876625403), Long_create(3887073815, 3101300322), Long_create(1391672133, 2481040258), Long_create(1367681954, 3969664413), Long_create(2812132482, 3175731530), Long_create(2249705985, 2540585224), Long_create(1022549199, 4064936359), Long_create(1677032818, 3251949087), Long_create(3918606632, 2601559269), Long_create(3692790234, 4162494831), Long_create(2095238728, 3329995865), Long_create(1676190982, 2663996692),
    Long_create(3540899031, 4262394707), Long_create(1114732307, 3409915766), Long_create(32792386, 2727932613), Long_create(1744220827, 2182346090), Long_create(2790753324, 3491753744), Long_create(3091596118, 2793402995), Long_create(2473276894, 2234722396), Long_create(2239256113, 3575555834), Long_create(2650398349, 2860444667), Long_create(402331761, 2288355734), Long_create(2361717736, 3661369174), Long_create(2748367648, 2929095339), Long_create(3057687578, 2343276271), Long_create(3174313206, 3749242034),
    Long_create(3398444024, 2999393627), Long_create(1000768301, 2399514902), Long_create(2460222741, 3839223843), Long_create(3686165111, 3071379074), Long_create(3807925548, 2457103259), Long_create(3515700499, 3931365215), Long_create(2812560399, 3145092172), Long_create(532061401, 2516073738), Long_create(4287272078, 4025717980), Long_create(3429817663, 3220574384), Long_create(3602847589, 2576459507), Long_create(2328582306, 4122335212), Long_create(144878926, 3297868170), Long_create(115903141, 2638294536),
    Long_create(2762425404, 4221271257), Long_create(491953404, 3377017006), Long_create(3829536560, 2701613604), Long_create(3922622707, 2161290883), Long_create(1122235577, 3458065414), Long_create(1756781920, 2766452331), Long_create(546432077, 2213161865), Long_create(874291324, 3541058984), Long_create(1558426518, 2832847187), Long_create(3823721592, 2266277749), Long_create(3540974170, 3626044399), Long_create(3691772795, 2900835519), Long_create(3812411695, 2320668415), Long_create(1804891416, 3713069465),
    Long_create(1443913133, 2970455572), Long_create(3732110884, 2376364457), Long_create(2535403578, 3802183132), Long_create(310335944, 3041746506), Long_create(3684242592, 2433397204), Long_create(3317807769, 3893435527), Long_create(936259297, 3114748422), Long_create(3325987815, 2491798737), Long_create(1885606668, 3986877980), Long_create(1508485334, 3189502384), Long_create(2065781726, 2551601907), Long_create(4164244222, 4082563051), Long_create(2472401918, 3266050441), Long_create(1118928075, 2612840353),
    Long_create(931291461, 4180544565), Long_create(745033169, 3344435652), Long_create(3173006913, 2675548521), Long_create(3358824142, 4280877634), Long_create(3546052773, 3424702107), Long_create(1118855300, 2739761686), Long_create(36090780, 2191809349), Long_create(1775732167, 3506894958), Long_create(3138572652, 2805515966), Long_create(1651864662, 2244412773), Long_create(1783990001, 3591060437), Long_create(4004172378, 2872848349), Long_create(4062331362, 2298278679), Long_create(3922749802, 3677245887),
    Long_create(1420212923, 2941796710), Long_create(1136170338, 2353437368), Long_create(958879082, 3765499789), Long_create(1626096725, 3012399831), Long_create(441883920, 2409919865), Long_create(707014273, 3855871784), Long_create(1424604878, 3084697427), Long_create(3716664280, 2467757941), Long_create(4228675929, 3948412706), Long_create(2523947284, 3158730165), Long_create(2019157827, 2526984132), Long_create(4089645983, 4043174611), Long_create(2412723327, 3234539689), Long_create(2789172121, 2587631751),
    Long_create(2744688475, 4140210802), Long_create(477763862, 3312168642), Long_create(2959191467, 2649734913), Long_create(3875712888, 4239575861), Long_create(2241576851, 3391660689), Long_create(2652254940, 2713328551), Long_create(1262810493, 2170662841), Long_create(302509870, 3473060546), Long_create(3677981733, 2778448436), Long_create(2083391927, 2222758749), Long_create(756446706, 3556413999), Long_create(1464150824, 2845131199), Long_create(2030314118, 2276104959), Long_create(671522212, 3641767935),
    Long_create(537217769, 2913414348), Long_create(2147761134, 2330731478), Long_create(2577424355, 3729170365), Long_create(2061939484, 2983336292), Long_create(4226531965, 2386669033), Long_create(1608490388, 3818670454), Long_create(2145785770, 3054936363), Long_create(3434615534, 2443949090), Long_create(1200417559, 3910318545), Long_create(960334047, 3128254836), Long_create(4204241074, 2502603868), Long_create(1572824964, 4004166190), Long_create(1258259971, 3203332952), Long_create(3583588354, 2562666361),
    Long_create(4015754449, 4100266178), Long_create(635623181, 3280212943), Long_create(2226485463, 2624170354), Long_create(985396364, 4198672567), Long_create(3365297469, 3358938053), Long_create(115257597, 2687150443), Long_create(1810192996, 2149720354), Long_create(319328417, 3439552567), Long_create(2832443111, 2751642053), Long_create(3983941407, 2201313642), Long_create(2938332415, 3522101828), Long_create(4068652850, 2817681462), Long_create(1536935362, 2254145170), Long_create(2459096579, 3606632272),
    Long_create(249290345, 2885305818), Long_create(1917419194, 2308244654), Long_create(490890333, 3693191447), Long_create(2969692644, 2954553157), Long_create(657767197, 2363642526), Long_create(3629407892, 3781828041), Long_create(2044532855, 3025462433), Long_create(3353613202, 2420369946), Long_create(3647794205, 3872591914), Long_create(3777228823, 3098073531), Long_create(2162789599, 2478458825), Long_create(3460463359, 3965534120), Long_create(2768370687, 3172427296), Long_create(1355703090, 2537941837),
    Long_create(3028118404, 4060706939), Long_create(3281488183, 3248565551), Long_create(1766197087, 2598852441), Long_create(1107928421, 4158163906), Long_create(27349277, 3326531125), Long_create(21879422, 2661224900), Long_create(35007075, 4257959840), Long_create(28005660, 3406367872), Long_create(2599384905, 2725094297), Long_create(361521006, 2180075438), Long_create(4014407446, 3488120700), Long_create(3211525957, 2790496560), Long_create(2569220766, 2232397248), Long_create(3251759766, 3571835597),
    Long_create(883420894, 2857468478), Long_create(2424723634, 2285974782), Long_create(443583977, 3657559652), Long_create(2931847559, 2926047721), Long_create(1486484588, 2340838177), Long_create(3237368801, 3745341083), Long_create(12914663, 2996272867), Long_create(2587312108, 2397018293), Long_create(3280705914, 3835229269), Long_create(3483558190, 3068183415), Long_create(2786846552, 2454546732), Long_create(1022980646, 3927274772), Long_create(3395364895, 3141819817), Long_create(998304997, 2513455854),
    Long_create(3315274914, 4021529366), Long_create(1793226472, 3217223493), Long_create(3152568096, 2573778794), Long_create(2467128576, 4118046071), Long_create(1114709402, 3294436857), Long_create(3468747899, 2635549485), Long_create(1255029343, 4216879177), Long_create(3581003852, 3373503341), Long_create(2005809622, 2698802673), Long_create(3322634616, 2159042138), Long_create(162254630, 3454467422), Long_create(2706784082, 2763573937), Long_create(447440347, 2210859150), Long_create(715904555, 3537374640),
    Long_create(572723644, 2829899712), Long_create(3035159293, 2263919769), Long_create(2279274491, 3622271631), Long_create(964426134, 2897817305), Long_create(771540907, 2318253844), Long_create(2952452370, 3709206150), Long_create(2361961896, 2967364920), Long_create(1889569516, 2373891936), Long_create(1305324308, 3798227098), Long_create(2762246365, 3038581678), Long_create(3927784010, 2430865342), Long_create(2848480580, 3889384548), Long_create(3996771382, 3111507638), Long_create(620436728, 2489206111),
    Long_create(3569679143, 3982729777), Long_create(1137756396, 3186183822), Long_create(3487185494, 2548947057), Long_create(2143522954, 4078315292), Long_create(4291798741, 3262652233), Long_create(856458615, 2610121787), Long_create(2229327243, 4176194859), Long_create(2642455254, 3340955887), Long_create(395977285, 2672764710), Long_create(633563656, 4276423536), Long_create(3942824761, 3421138828), Long_create(577279431, 2736911063), Long_create(2179810463, 2189528850), Long_create(3487696741, 3503246160),
    Long_create(2790157393, 2802596928), Long_create(3950112833, 2242077542), Long_create(2884206696, 3587324068), Long_create(4025352275, 2869859254), Long_create(4079275279, 2295887403), Long_create(1372879692, 3673419846), Long_create(239310294, 2938735877), Long_create(2768428613, 2350988701), Long_create(2711498862, 3761581922), Long_create(451212171, 3009265538), Long_create(2078956655, 2407412430), Long_create(3326330649, 3851859888), Long_create(84084141, 3081487911), Long_create(3503241150, 2465190328),
    Long_create(451225085, 3944304526), Long_create(3796953905, 3155443620), Long_create(3037563124, 2524354896), Long_create(3142114080, 4038967834), Long_create(3372684723, 3231174267), Long_create(980160860, 2584939414), Long_create(3286244294, 4135903062), Long_create(911008517, 3308722450), Long_create(728806813, 2646977960), Long_create(1166090902, 4235164736), Long_create(73879262, 3388131789), Long_create(918096869, 2710505431), Long_create(4170451332, 2168404344), Long_create(4095741754, 3469446951),
    Long_create(2417599944, 2775557561), Long_create(1075086496, 2220446049), Long_create(3438125312, 3552713678), Long_create(173519872, 2842170943), Long_create(1856802816, 2273736754), Long_create(393904128, 3637978807), Long_create(2892103680, 2910383045), Long_create(2313682944, 2328306436), Long_create(1983905792, 3725290298), Long_create(3305111552, 2980232238), Long_create(67108864, 2384185791), Long_create(2684354560, 3814697265), Long_create(2147483648, 3051757812), Long_create(0, 2441406250), Long_create(0, 3906250000),
    Long_create(0, 3125000000), Long_create(0, 2500000000), Long_create(0, 4000000000), Long_create(0, 3200000000), Long_create(0, 2560000000), Long_create(0, 4096000000), Long_create(0, 3276800000), Long_create(0, 2621440000), Long_create(0, 4194304000), Long_create(0, 3355443200), Long_create(0, 2684354560), Long_create(0, 2147483648), Long_create(3435973836, 3435973836), Long_create(1889785610, 2748779069), Long_create(2370821947, 2199023255), Long_create(3793315115, 3518437208), Long_create(457671715, 2814749767),
    Long_create(2943117749, 2251799813), Long_create(3849994940, 3602879701), Long_create(2221002492, 2882303761), Long_create(917808535, 2305843009), Long_create(3186480574, 3689348814), Long_create(3408177918, 2951479051), Long_create(1867548875, 2361183241), Long_create(1270091283, 3777893186), Long_create(157079567, 3022314549), Long_create(984657113, 2417851639), Long_create(3293438299, 3868562622), Long_create(916763721, 3094850098), Long_create(2451397895, 2475880078), Long_create(3063243173, 3961408125),
    Long_create(2450594538, 3169126500), Long_create(1960475630, 2535301200), Long_create(3136761009, 4056481920), Long_create(2509408807, 3245185536), Long_create(1148533586, 2596148429), Long_create(3555640657, 4153837486), Long_create(1985519066, 3323069989), Long_create(2447408712, 2658455991), Long_create(2197867021, 4253529586), Long_create(899300158, 3402823669), Long_create(1578433585, 2722258935), Long_create(1262746868, 2177807148), Long_create(1161401530, 3484491437), Long_create(3506101601, 2787593149),
    Long_create(3663874740, 2230074519), Long_create(3285219207, 3568119231), Long_create(1769181906, 2854495385), Long_create(1415345525, 2283596308), Long_create(1405559381, 3653754093), Long_create(2842434423, 2923003274), Long_create(3132940998, 2338402619), Long_create(2435725219, 3741444191), Long_create(1089586716, 2993155353), Long_create(2589656291, 2394524282), Long_create(707476229, 3831238852), Long_create(3142961361, 3064991081), Long_create(1655375629, 2451992865), Long_create(2648601007, 3923188584),
    Long_create(2977874265, 3138550867), Long_create(664312493, 2510840694), Long_create(2780886908, 4017345110), Long_create(2224709526, 3213876088), Long_create(3497754539, 2571100870), Long_create(1301439967, 4113761393), Long_create(2759138892, 3291009114), Long_create(3066304573, 2632807291), Long_create(3188100398, 4212491666), Long_create(1691486859, 3369993333), Long_create(3071176406, 2695994666), Long_create(1597947665, 2156795733), Long_create(1697722806, 3450873173), Long_create(3076165163, 2760698538),
    Long_create(4178919049, 2208558830), Long_create(2391303182, 3533694129), Long_create(2772036005, 2826955303), Long_create(3935615722, 2261564242), Long_create(2861011319, 3618502788), Long_create(4006795973, 2894802230), Long_create(3205436779, 2315841784), Long_create(2551718468, 3705346855), Long_create(2041374775, 2964277484), Long_create(2492093279, 2371421987), Long_create(551375410, 3794275180), Long_create(441100328, 3035420144), Long_create(1211873721, 2428336115), Long_create(1938997954, 3885337784),
    Long_create(2410191822, 3108270227), Long_create(210166539, 2486616182), Long_create(1195259923, 3978585891), Long_create(97214479, 3182868713), Long_create(1795758501, 2546294970), Long_create(2873213602, 4074071952), Long_create(580583963, 3259257562), Long_create(3041447548, 2607406049), Long_create(2289335700, 4171849679), Long_create(2690462019, 3337479743), Long_create(3870356534, 2669983794), Long_create(3615590076, 4271974071), Long_create(2033478602, 3417579257), Long_create(4203763259, 2734063405),
    Long_create(3363010607, 2187250724), Long_create(2803836594, 3499601159), Long_create(3102062734, 2799680927), Long_create(763663269, 2239744742), Long_create(2080854690, 3583591587), Long_create(4241664129, 2866873269), Long_create(4252324763, 2293498615), Long_create(2508752324, 3669597785), Long_create(2007001859, 2935678228), Long_create(3323588406, 2348542582), Long_create(1881767613, 3757668132), Long_create(4082394468, 3006134505), Long_create(3265915574, 2404907604), Long_create(2648484541, 3847852167),
    Long_create(400800715, 3078281734), Long_create(1179634031, 2462625387), Long_create(2746407909, 3940200619), Long_create(3056119786, 3152160495), Long_create(2444895829, 2521728396), Long_create(2193846408, 4034765434), Long_create(2614070585, 3227812347), Long_create(373269550, 2582249878), Long_create(4033205117, 4131599804), Long_create(4085557553, 3305279843), Long_create(691465664, 2644223875), Long_create(1106345063, 4230758200), Long_create(885076050, 3384606560), Long_create(708060840, 2707685248),
    Long_create(2284435591, 2166148198), Long_create(2796103486, 3465837117), Long_create(518895870, 2772669694), Long_create(1274110155, 2218135755), Long_create(2038576249, 3549017208), Long_create(3348847917, 2839213766), Long_create(1820084875, 2271371013), Long_create(2053142340, 3634193621), Long_create(783520413, 2907354897), Long_create(3203796708, 2325883917), Long_create(1690100896, 3721414268), Long_create(3070067635, 2977131414), Long_create(3315047567, 2381705131), Long_create(3586089190, 3810728210),
    Long_create(2868871352, 3048582568), Long_create(4013084000, 2438866054), Long_create(3843954022, 3902185687), Long_create(1357176299, 3121748550), Long_create(1085741039, 2497398840), Long_create(1737185663, 3995838144), Long_create(2248741989, 3196670515), Long_create(1798993591, 2557336412), Long_create(3737383206, 4091738259), Long_create(3848900024, 3273390607), Long_create(1361133101, 2618712486), Long_create(459826043, 4189939978), Long_create(2085847752, 3351951982), Long_create(4245658579, 2681561585),
    Long_create(2498086431, 4290498537), Long_create(280482227, 3432398830), Long_create(224385781, 2745919064), Long_create(1038502084, 2196735251), Long_create(4238583712, 3514776401), Long_create(2531873511, 2811821121), Long_create(1166505349, 2249456897), Long_create(2725402018, 3599131035), Long_create(2180321615, 2879304828), Long_create(3462244210, 2303443862), Long_create(2103616899, 3685510180), Long_create(1682893519, 2948408144), Long_create(2205308275, 2358726515), Long_create(3528493240, 3773962424),
    Long_create(3681788051, 3019169939), Long_create(3804423900, 2415335951), Long_create(74124026, 3864537523), Long_create(1777286139, 3091630018), Long_create(3139815829, 2473304014), Long_create(2446724950, 3957286423), Long_create(3675366878, 3165829138), Long_create(363313125, 2532663311), Long_create(3158281377, 4052261297), Long_create(808638183, 3241809038), Long_create(2364897465, 2593447230), Long_create(3783835944, 4149515568), Long_create(450088378, 3319612455), Long_create(360070702, 2655689964),
    Long_create(2294100042, 4249103942), Long_create(117293115, 3399283154), Long_create(952827951, 2719426523), Long_create(2480249279, 2175541218), Long_create(3109405388, 3480865949), Long_create(3346517769, 2784692759), Long_create(3536207675, 2227754207), Long_create(2221958443, 3564406732), Long_create(59579836, 2851525386), Long_create(3483637705, 2281220308), Long_create(419859574, 3649952494), Long_create(1194881118, 2919961995), Long_create(955904894, 2335969596), Long_create(4106428209, 3737551353),
    Long_create(708162189, 2990041083), Long_create(2284516670, 2392032866), Long_create(1937239754, 3827252586), Long_create(690798344, 3061802069), Long_create(1411632134, 2449441655), Long_create(2258611415, 3919106648), Long_create(3524876050, 3135285318), Long_create(242920462, 2508228255), Long_create(388672740, 4013165208), Long_create(2028925110, 3210532166), Long_create(764146629, 2568425733), Long_create(363641147, 4109481173), Long_create(2008899836, 3287584938), Long_create(3325106787, 2630067950),
    Long_create(1025203564, 4208108721), Long_create(4256136688, 3366486976), Long_create(2545915891, 2693189581), Long_create(1177739254, 2154551665), Long_create(1884382806, 3447282664), Long_create(2366499704, 2757826131), Long_create(1034206304, 2206260905), Long_create(1654730086, 3530017448), Long_create(3041770987, 2824013958), Long_create(4151403708, 2259211166), Long_create(629291719, 3614737867), Long_create(3080413753, 2891790293), Long_create(4182317920, 2313432234), Long_create(4114728295, 3701491575),
    Long_create(3291782636, 2961193260), Long_create(2633426109, 2368954608), Long_create(3354488315, 3790327373), Long_create(106610275, 3032261899), Long_create(944281679, 2425809519), Long_create(3228837605, 3881295230), Long_create(2583070084, 3105036184), Long_create(2925449526, 2484028947), Long_create(1244745405, 3974446316), Long_create(136802865, 3179557053), Long_create(1827429210, 2543645642), Long_create(3782880196, 4069833027), Long_create(1308317238, 3255866422), Long_create(3623634168, 2604693137),
    Long_create(2361840832, 4167509020), Long_create(1889472666, 3334007216), Long_create(652584673, 2667205773), Long_create(185142018, 4267529237), Long_create(2725093992, 3414023389), Long_create(3039068653, 2731218711), Long_create(1572261463, 2184974969), Long_create(4233605259, 3495959950), Long_create(3386884207, 2796767960), Long_create(2709507366, 2237414368), Long_create(3476218326, 3579862989), Long_create(3639968120, 2863890391), Long_create(2052981037, 2291112313), Long_create(2425776200, 3665779701),
    Long_create(1081627501, 2932623761), Long_create(6308541, 2346099009), Long_create(1728080585, 3753758414), Long_create(2241457927, 3003006731), Long_create(934172882, 2402405385), Long_create(1494676612, 3843848616), Long_create(336747830, 3075078893), Long_create(1987385183, 2460063114), Long_create(602835915, 3936100983), Long_create(2200255650, 3148880786), Long_create(901211061, 2519104629), Long_create(3159924616, 4030567406), Long_create(1668946233, 3224453925), Long_create(1335156987, 2579563140),
    Long_create(2136251179, 4127301024), Long_create(2567994402, 3301840819), Long_create(2913388981, 2641472655), Long_create(366455074, 4226356249), Long_create(1152157518, 3381084999), Long_create(1780719474, 2704867999), Long_create(2283569038, 2163894399), Long_create(1076730083, 3462231039), Long_create(1720377526, 2769784831), Long_create(517308561, 2215827865), Long_create(827693699, 3545324584), Long_create(1521148418, 2836259667), Long_create(3793899112, 2269007733), Long_create(916277824, 3630412374),
    Long_create(1592015718, 2904329899), Long_create(2132606034, 2323463919), Long_create(835189277, 3717542271), Long_create(4104125258, 2974033816), Long_create(2424306747, 2379227053), Long_create(3019897337, 3806763285), Long_create(2415917869, 3045410628), Long_create(3650721214, 2436328502), Long_create(2405180105, 3898125604), Long_create(2783137543, 3118500483), Long_create(3944496953, 2494800386), Long_create(298240911, 3991680619), Long_create(1097586188, 3193344495), Long_create(878068950, 2554675596),
    Long_create(3981890698, 4087480953), Long_create(608532181, 3269984763), Long_create(2204812663, 2615987810), Long_create(3527700261, 4185580496), Long_create(1963166749, 3348464397), Long_create(4147513777, 2678771517), Long_create(3200048207, 4286034428), Long_create(4278025484, 3428827542), Long_create(1704433468, 2743062034), Long_create(2222540234, 2194449627), Long_create(120090538, 3511119404), Long_create(955065889, 2808895523), Long_create(2482039630, 2247116418), Long_create(3112269949, 3595386269),
    Long_create(3348809418, 2876309015), Long_create(2679047534, 2301047212), Long_create(850502218, 3681675540), Long_create(680401775, 2945340432), Long_create(3121301797, 2356272345), Long_create(699115580, 3770035753), Long_create(2277279382, 3016028602), Long_create(103836587, 2412822882), Long_create(1025131999, 3860516611), Long_create(4256079436, 3088413288), Long_create(827883168, 2470730631), Long_create(3901593088, 3953169009)]);
    otcit_DoubleAnalyzer_exp10Table = $rt_createShortArrayFromData([(-70), (-66), (-63), (-60), (-56), (-53), (-50), (-46), (-43), (-40), (-36), (-33), (-30), (-26), (-23), (-20), (-16), (-13), (-10), (-6), (-3), 0, 4, 7, 10, 14, 17, 20, 23, 27, 30, 33, 37, 40, 43, 47, 50, 53, 57, 60, 63, 67, 70, 73, 77, 80, 83, 87, 90, 93, 97, 100, 103, 107, 110, 113, 116, 120, 123, 126, 130, 133, 136, 140, 143, 146, 150, 153, 156, 160, 163, 166, 170, 173, 176, 180, 183, 186, 190, 193, 196, 200, 203, 206, 210, 213, 216, 219,
    223, 226, 229, 233, 236, 239, 243, 246, 249, 253, 256, 259, 263, 266, 269, 273, 276, 279, 283, 286, 289, 293, 296, 299, 303, 306, 309, 312, 316, 319, 322, 326, 329, 332, 336, 339, 342, 346, 349, 352, 356, 359, 362, 366, 369, 372, 376, 379, 382, 386, 389, 392, 396, 399, 402, 406, 409, 412, 415, 419, 422, 425, 429, 432, 435, 439, 442, 445, 449, 452, 455, 459, 462, 465, 469, 472, 475, 479, 482, 485, 489, 492, 495, 499, 502, 505, 508, 512, 515, 518, 522, 525, 528, 532, 535, 538, 542, 545, 548, 552, 555, 558,
    562, 565, 568, 572, 575, 578, 582, 585, 588, 592, 595, 598, 601, 605, 608, 611, 615, 618, 621, 625, 628, 631, 635, 638, 641, 645, 648, 651, 655, 658, 661, 665, 668, 671, 675, 678, 681, 685, 688, 691, 695, 698, 701, 704, 708, 711, 714, 718, 721, 724, 728, 731, 734, 738, 741, 744, 748, 751, 754, 758, 761, 764, 768, 771, 774, 778, 781, 784, 788, 791, 794, 797, 801, 804, 807, 811, 814, 817, 821, 824, 827, 831, 834, 837, 841, 844, 847, 851, 854, 857, 861, 864, 867, 871, 874, 877, 881, 884, 887, 891, 894, 897,
    900, 904, 907, 910, 914, 917, 920, 924, 927, 930, 934, 937, 940, 944, 947, 950, 954, 957, 960, 964, 967, 970, 974, 977, 980, 984, 987, 990, 993, 997, 1000, 1003, 1007, 1010, 1013, 1017, 1020, 1023, 1027, 1030, 1033, 1037, 1040, 1043, 1047, 1050, 1053, 1057, 1060, 1063, 1067, 1070, 1073, 1077, 1080, 1083, 1086, 1090, 1093, 1096, 1100, 1103, 1106, 1110, 1113, 1116, 1120, 1123, 1126, 1130, 1133, 1136, 1140, 1143, 1146, 1150, 1153, 1156, 1160, 1163, 1166, 1170, 1173, 1176, 1180, 1183, 1186, 1189, 1193, 1196,
    1199, 1203, 1206, 1209, 1213, 1216, 1219, 1223, 1226, 1229, 1233, 1236, 1239, 1243, 1246, 1249, 1253, 1256, 1259, 1263, 1266, 1269, 1273, 1276, 1279, 1282, 1286, 1289, 1292, 1296, 1299, 1302, 1306, 1309, 1312, 1316, 1319, 1322, 1326, 1329, 1332, 1336, 1339, 1342, 1346, 1349, 1352, 1356, 1359, 1362, 1366, 1369, 1372, 1376, 1379, 1382, 1385, 1389, 1392, 1395, 1399, 1402, 1405, 1409, 1412, 1415, 1419, 1422, 1425, 1429, 1432, 1435, 1439, 1442, 1445, 1449, 1452, 1455, 1459, 1462, 1465, 1469, 1472, 1475, 1478,
    1482, 1485, 1488, 1492, 1495, 1498, 1502, 1505, 1508, 1512, 1515, 1518, 1522, 1525, 1528, 1532, 1535, 1538, 1542, 1545, 1548, 1552, 1555, 1558, 1562, 1565, 1568, 1572, 1575, 1578, 1581, 1585, 1588, 1591, 1595, 1598, 1601, 1605, 1608, 1611, 1615, 1618, 1621, 1625, 1628, 1631, 1635, 1638, 1641, 1645, 1648, 1651, 1655, 1658, 1661, 1665, 1668, 1671, 1674, 1678, 1681, 1684, 1688, 1691, 1694, 1698, 1701, 1704, 1708, 1711, 1714, 1718, 1721, 1724, 1728, 1731, 1734, 1738, 1741, 1744, 1748, 1751, 1754, 1758, 1761,
    1764, 1767, 1771, 1774, 1777, 1781, 1784, 1787, 1791, 1794, 1797, 1801, 1804, 1807, 1811, 1814, 1817, 1821, 1824, 1827, 1831, 1834, 1837, 1841, 1844, 1847, 1851, 1854, 1857, 1861, 1864, 1867, 1870, 1874, 1877, 1880, 1884, 1887, 1890, 1894, 1897, 1900, 1904, 1907, 1910, 1914, 1917, 1920, 1924, 1927, 1930, 1934, 1937, 1940, 1944, 1947, 1950, 1954, 1957, 1960, 1963, 1967, 1970, 1973, 1977, 1980, 1983, 1987, 1990, 1993, 1997, 2000, 2003, 2007, 2010, 2013, 2017, 2020, 2023, 2027, 2030, 2033, 2037, 2040, 2043,
    2047, 2050, 2053, 2057, 2060, 2063, 2066, 2070, 2073, 2076, 2080, 2083, 2086, 2090, 2093, 2096, 2100, 2103, 2106, 2110, 2113, 2116, 2120]);
},
otp_Platform = $rt_classWithoutFields(),
otp_Platform_isAssignable = ($from, $to) => {
    let $supertypes, $i;
    if ($from === $to)
        return 1;
    $supertypes = $from.$meta.supertypes;
    $i = 0;
    while ($i < $supertypes.length) {
        if (otp_Platform_isAssignable($supertypes[$i], $to))
            return 1;
        $i = $i + 1 | 0;
    }
    return 0;
},
otp_Platform_launchThread = $runnable => {
    $runnable.$run();
},
otp_Platform_postpone = $runnable => {
    otp_Platform_schedule($runnable, 0);
},
otp_Platform_schedule = (var$1, var$2) => {
    setTimeout(() => {
        otp_Platform_launchThread(var$1);
    }, var$2);
},
otp_Platform_createQueue = () => {
    return otp_Platform_createQueueJs$js_body$_30();
},
otp_Platform_getArrayItem = $cls => {
    return $cls.$meta.item;
},
otp_Platform_getName = $cls => {
    return $rt_str($cls.$meta.name);
},
otp_Platform_createQueueJs$js_body$_30 = () => {
    return [];
};
function kebc_Collision() {
    jl_Object.call(this);
    this.$radius0 = 0.0;
}
let kebc_Collision__init_ = ($this, $radius) => {
    jl_Object__init_($this);
    $this.$radius0 = $radius;
},
kebc_Collision__init_0 = var_0 => {
    let var_1 = new kebc_Collision();
    kebc_Collision__init_(var_1, var_0);
    return var_1;
},
kebc_Collision_radius = $this => {
    return $this.$radius0;
},
ju_NoSuchElementException = $rt_classWithoutFields(jl_RuntimeException),
ju_NoSuchElementException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
ju_NoSuchElementException__init_ = () => {
    let var_0 = new ju_NoSuchElementException();
    ju_NoSuchElementException__init_0(var_0);
    return var_0;
},
otjc_JSWeakRef = $rt_classWithoutFields(),
ket_ExplosionGSys = $rt_classWithoutFields(),
ket_ExplosionGSys__init_ = $this => {
    jl_Object__init_($this);
},
ket_ExplosionGSys__init_0 = () => {
    let var_0 = new ket_ExplosionGSys();
    ket_ExplosionGSys__init_(var_0);
    return var_0;
},
ket_ExplosionGSys_draw = ($this, $world, $g) => {
    let var$3, $e, $explosion, var$6, $p, $alpha;
    $g.save();
    var$3 = ($world.$getEntitiesWith0($rt_cls(kebc_Explosion))).$iterator();
    while (var$3.$hasNext()) {
        a: {
            $e = var$3.$next();
            $explosion = $world.$getComponent($e, $rt_cls(kebc_Explosion));
            if ($explosion !== null) {
                var$6 = ($explosion.$particles()).$iterator();
                while (true) {
                    if (!var$6.$hasNext())
                        break a;
                    $p = var$6.$next();
                    if ($p.$life > 0.01) {
                        $alpha = jl_Math_max0(0.01, $p.$life / $p.$maxLife);
                        $g.globalAlpha = $alpha;
                        $g.fillStyle = $rt_ustr($p.$color);
                        $g.beginPath();
                        $g.arc($p.$x, $p.$y, 2.0, 0.0, 6.283185307179586);
                        $g.fill();
                    }
                }
            }
        }
    }
    $g.restore();
},
ket_ExplosionGSys_draw0 = ($this, var$1, var$2) => {
    $this.$draw0(var$1, otji_JSWrapper_unwrap(var$2));
};
function ket_InputKeysTeavmSystemBase$2() {
    jl_Object.call(this);
    this.$this$03 = null;
}
let ket_InputKeysTeavmSystemBase$2__init_ = ($this, $this$0) => {
    $this.$this$03 = $this$0;
    jl_Object__init_($this);
},
ket_InputKeysTeavmSystemBase$2__init_0 = var_0 => {
    let var_1 = new ket_InputKeysTeavmSystemBase$2();
    ket_InputKeysTeavmSystemBase$2__init_(var_1, var_0);
    return var_1;
},
ket_InputKeysTeavmSystemBase$2_handleEvent = ($this, $evt) => {
    let $key;
    $key = $rt_str($evt.key);
    if ($this.$this$03.$cmds.$contains0($key))
        $this.$this$03.$keyCallback.$keypress($this.$this$03.$world6, 0, $key);
},
ket_InputKeysTeavmSystemBase$2_handleEvent0 = ($this, var$1) => {
    $this.$handleEvent0(var$1);
},
ket_InputKeysTeavmSystemBase$2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
};
function ket_InputKeysTeavmSystemBase$1() {
    jl_Object.call(this);
    this.$this$01 = null;
}
let ket_InputKeysTeavmSystemBase$1__init_ = ($this, $this$0) => {
    $this.$this$01 = $this$0;
    jl_Object__init_($this);
},
ket_InputKeysTeavmSystemBase$1__init_0 = var_0 => {
    let var_1 = new ket_InputKeysTeavmSystemBase$1();
    ket_InputKeysTeavmSystemBase$1__init_(var_1, var_0);
    return var_1;
},
ket_InputKeysTeavmSystemBase$1_handleEvent0 = ($this, $evt) => {
    let $key;
    $key = $rt_str($evt.key);
    if ($this.$this$01.$cmds.$contains0($key))
        $this.$this$01.$keyCallback.$keypress($this.$this$01.$world6, 1, $key);
},
ket_InputKeysTeavmSystemBase$1_handleEvent = ($this, var$1) => {
    $this.$handleEvent0(var$1);
},
ket_InputKeysTeavmSystemBase$1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
};
function kebc_Position() {
    let a = this; jl_Object.call(a);
    a.$xRange = null;
    a.$yRange = null;
    a.$x0 = 0.0;
    a.$y0 = 0.0;
}
let kebc_Position__init_ = ($this, $x, $y, $xRange, $yRange) => {
    jl_Object__init_($this);
    $this.$xRange = $xRange;
    $this.$yRange = $yRange;
    $this.$setX($x);
    $this.$setY($y);
},
kebc_Position__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new kebc_Position();
    kebc_Position__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
kebc_Position_getX = $this => {
    return $this.$x0;
},
kebc_Position_setX = ($this, $x) => {
    if ($this.$xRange !== null)
        $x = $this.$xRange.$fit($x);
    $this.$x0 = $x;
},
kebc_Position_getY = $this => {
    return $this.$y0;
},
kebc_Position_setY = ($this, $y) => {
    if ($this.$yRange !== null)
        $y = $this.$yRange.$fit($y);
    $this.$y0 = $y;
},
kebc_Position_getXRange = $this => {
    return $this.$xRange;
},
kebc_Position_getYRange = $this => {
    return $this.$yRange;
},
kebc_Position_add = ($this, $dx, $dy) => {
    $this.$setX($this.$x0 + $dx);
    $this.$setY($this.$y0 + $dy);
    return $this;
},
kebc_Position_randomPosition = $this => {
    $this.$setX($this.$xRange.$random0());
    $this.$setY($this.$yRange.$random0());
    return $this;
},
jl_IllegalArgumentException = $rt_classWithoutFields(jl_RuntimeException),
jl_IllegalArgumentException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_IllegalArgumentException__init_ = () => {
    let var_0 = new jl_IllegalArgumentException();
    jl_IllegalArgumentException__init_0(var_0);
    return var_0;
},
jl_IllegalArgumentException__init_1 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_IllegalArgumentException__init_2 = var_0 => {
    let var_1 = new jl_IllegalArgumentException();
    jl_IllegalArgumentException__init_1(var_1, var_0);
    return var_1;
};
function kek_Main() {
    jl_Object.call(this);
    this.$world = null;
}
let kek_Main_$callClinit = () => {
    kek_Main_$callClinit = $rt_eraseClinit(kek_Main);
    kek_Main__clinit_();
},
kek_Main_main = $args => {
    let var$2, $ptr, $tmp;
    $ptr = 0;
    if ($rt_resuming()) {
        let $thread = $rt_nativeThread();
        $ptr = $thread.pop();var$2 = $thread.pop();$args = $thread.pop();
    }
    main: while (true) { switch ($ptr) {
    case 0:
        kek_Main_$callClinit();
        var$2 = (kek_Main__init_0()).$world;
        $ptr = 1;
    case 1:
        var$2.$run();
        if ($rt_suspending()) {
            break main;
        }
        return;
    default: $rt_invalidPointer();
    }}
    $rt_nativeThread().push($args, var$2, $ptr);
},
kek_Main__init_ = $this => {
    let $outGSys, $scene;
    kek_Main_$callClinit();
    jl_Object__init_($this);
    $this.$world = keb_World__init_0(Long_fromInt(40));
    $outGSys = ket_OutputTeavmSystem__init_1($this.$world);
    $this.$world.$setOutputSystem($outGSys);
    $this.$world.$add1(ket_InputKeysTeavmSystemBase__init_0($this.$world, $rt_s(16), $this));
    $this.$world.$add1(ket_InputTouchTeavmSystemBase__init_0($this.$world, $this));
    $this.$world.$add1(kebs_MovementSystem__init_0($this.$world));
    $this.$world.$add1(kebs_VelocitySystem__init_0($this.$world));
    $this.$world.$add1(kebs_TickEventSystem__init_0($this.$world, $this));
    $this.$world.$add1(kebs_ExplosionSystem__init_0($this.$world, $this.$world.$deltaTime(), $this));
    $this.$world.$add1(kebs_CollisionSystem__init_0($this.$world, $this));
    $scene = keth_HalloweenScene__init_0($outGSys.$width(), $outGSys.$height());
    $outGSys.$addPartOutputSystem($scene);
    $outGSys.$addPartOutputSystem(keth_HalloweenSpookaGSys__init_0());
    $outGSys.$addPartOutputSystem(ket_ExplosionGSys__init_0());
    keth_SpookaType_$callClinit();
    $this.$createSpooka(keth_SpookaType_pumpkin, kebu_DoubleRange__init_((-1.4), 1.4), kebu_DoubleRange__init_((-1.4), 1.4));
    $this.$createSpooka(keth_SpookaType_bat, kebu_DoubleRange__init_((-2.4), 2.4), kebu_DoubleRange__init_((-2.0), 2.0));
    $this.$createSpooka(keth_SpookaType_bat, kebu_DoubleRange__init_((-2.4), 2.4), kebu_DoubleRange__init_((-2.0), 2.0));
    $this.$createSpooka(keth_SpookaType_bat, kebu_DoubleRange__init_((-2.4), 2.4), kebu_DoubleRange__init_((-2.0), 2.0));
    $this.$createSpooka(keth_SpookaType_bat, kebu_DoubleRange__init_((-2.4), 2.4), kebu_DoubleRange__init_((-2.0), 2.0));
    $this.$createSpooka(keth_SpookaType_cat, kebu_DoubleRange__init_((-0.2), 0.2), kebu_DoubleRange__init_((-1.0E-4), 1.0E-4));
    $this.$createSpooka(keth_SpookaType_spider, kebu_DoubleRange__init_((-1.0E-4), 1.0E-4), kebu_DoubleRange__init_((-0.6), 0.6));
    $this.$world.$init();
},
kek_Main__init_0 = () => {
    let var_0 = new kek_Main();
    kek_Main__init_(var_0);
    return var_0;
},
kek_Main_keypress = ($this, $world, $pressed, $key) => {
    let var$4, $e, $movement, var$7;
    var$4 = ($world.$getEntitiesWith0($rt_cls(kebc_Movement))).$iterator();
    while (var$4.$hasNext()) {
        a: {
            $e = var$4.$next();
            $movement = $world.$getComponent($e, $rt_cls(kebc_Movement));
            if ($movement !== null) {
                b: {
                    var$7 = (-1);
                    switch ($key.$hashCode0()) {
                        case 97:
                            if (!$key.$equals0($rt_s(17)))
                                break b;
                            var$7 = 2;
                            break b;
                        case 100:
                            if (!$key.$equals0($rt_s(18)))
                                break b;
                            var$7 = 3;
                            break b;
                        case 101:
                            if (!$key.$equals0($rt_s(19)))
                                break b;
                            var$7 = 4;
                            break b;
                        case 115:
                            if (!$key.$equals0($rt_s(20)))
                                break b;
                            var$7 = 1;
                            break b;
                        case 119:
                            if (!$key.$equals0($rt_s(21)))
                                break b;
                            var$7 = 0;
                            break b;
                        default:
                    }
                }
                switch (var$7) {
                    case 4:
                        break a;
                    case 0:
                        break;
                    case 1:
                        $movement.$down = $pressed;
                        break a;
                    case 2:
                        $movement.$left = $pressed;
                        break a;
                    case 3:
                        $movement.$right = $pressed;
                        break a;
                    default:
                        break a;
                }
                $movement.$up = $pressed;
            }
        }
    }
},
kek_Main_updateDirection = ($this, $world, $up, $down, $left, $right) => {
    let var$6, $e, $movement;
    var$6 = ($world.$getEntitiesWith0($rt_cls(kebc_Movement))).$iterator();
    while (var$6.$hasNext()) {
        $e = var$6.$next();
        $movement = $world.$getComponent($e, $rt_cls(kebc_Movement));
        if ($movement !== null) {
            $movement.$up = $up;
            $movement.$down = $down;
            $movement.$left = $left;
            $movement.$right = $right;
        }
    }
},
kek_Main_updateOnTick = ($this, $world, $e) => {
    let $velocity;
    $velocity = $world.$getComponent($e, $rt_cls(kebc_Velocity));
    if ($velocity !== null)
        $velocity.$random1();
},
kek_Main_explosionFinished = ($this, $world, $entity, $explosion) => {
    if ($world.$getComponent($entity, $rt_cls(kebc_Position)) === null)
        $world.$addComponent($entity, ($explosion.$getPosition()).$randomPosition());
},
kek_Main_collision = ($this, $world, $e1, $e2) => {
    let $spooka1, $p1, $spooka2, $p2;
    $spooka1 = $world.$getComponent($e1, $rt_cls(kebc_Spooka));
    $p1 = $world.$getComponent($e1, $rt_cls(kebc_Position));
    $spooka2 = $world.$getComponent($e2, $rt_cls(kebc_Spooka));
    $p2 = $world.$getComponent($e2, $rt_cls(kebc_Position));
    if ($p1 !== null && $p2 !== null && $spooka1 !== null && $spooka2 !== null) {
        $world.$addComponent($e1, kebc_Explosion__init_0($p1, 13, $rt_s(22)));
        $world.$removeComponent($e1, $rt_cls(kebc_Position));
        $world.$addComponent($e2, kebc_Explosion__init_0($p2, 12, $rt_s(23)));
        $world.$removeComponent($e2, $rt_cls(kebc_Position));
    }
},
kek_Main_createSpooka = ($this, $type, $velocityRangeX, $velocityRangeY) => {
    let $spooka;
    $spooka = $this.$world.$createEntity();
    $this.$world.$addComponent($spooka, (kebc_Position__init_0(10.0, 10.0, kebu_DoubleRange__init_(10.0, ($this.$world.$getOutputSystem()).$width() - 10.0), kebu_DoubleRange__init_(10.0, ($this.$world.$getOutputSystem()).$height() - 10.0))).$randomPosition());
    $this.$world.$addComponent($spooka, kebc_Velocity__init_0($velocityRangeX, $velocityRangeY));
    $this.$world.$addComponent($spooka, kebc_Spooka__init_0(jl_Enum_ordinal($type)));
    $this.$world.$addComponent($spooka, kebc_Collision__init_0(15.0));
    $this.$world.$addComponent($spooka, kebc_TickEvent__init_0(kebu_IntRange__init_0(15, 75)));
},
kek_Main__clinit_ = () => {
    return;
};
function ket_InputTouchTeavmSystemBase() {
    let a = this; jl_Object.call(a);
    a.$world7 = null;
    a.$listener0 = null;
    a.$touchBaseX = 0.0;
    a.$touchBaseY = 0.0;
    a.$touching = 0;
    a.$direction = 0;
}
let ket_InputTouchTeavmSystemBase_upDirections = null,
ket_InputTouchTeavmSystemBase_rightDirections = null,
ket_InputTouchTeavmSystemBase_downDirections = null,
ket_InputTouchTeavmSystemBase_leftDirections = null,
ket_InputTouchTeavmSystemBase_$callClinit = () => {
    ket_InputTouchTeavmSystemBase_$callClinit = $rt_eraseClinit(ket_InputTouchTeavmSystemBase);
    ket_InputTouchTeavmSystemBase__clinit_();
},
ket_InputTouchTeavmSystemBase__init_ = ($this, $world, $listener) => {
    ket_InputTouchTeavmSystemBase_$callClinit();
    jl_Object__init_($this);
    $this.$touching = 0;
    $this.$direction = (-1);
    $this.$world7 = $world;
    $this.$listener0 = $listener;
},
ket_InputTouchTeavmSystemBase__init_0 = (var_0, var_1) => {
    let var_2 = new ket_InputTouchTeavmSystemBase();
    ket_InputTouchTeavmSystemBase__init_(var_2, var_0, var_1);
    return var_2;
},
ket_InputTouchTeavmSystemBase_init = ($this, $canvas) => {
    let var$2;
    var$2 = ket_InputTouchTeavmSystemBase$init$lambda$_1_0__init_0($this);
    $canvas.addEventListener("mousedown", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
    var$2 = ket_InputTouchTeavmSystemBase$init$lambda$_1_1__init_0($this);
    $canvas.addEventListener("mousemove", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
    var$2 = ket_InputTouchTeavmSystemBase$init$lambda$_1_2__init_0($this);
    $canvas.addEventListener("mouseup", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
    var$2 = ket_InputTouchTeavmSystemBase$init$lambda$_1_3__init_0($this);
    $canvas.addEventListener("touchstart", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
    var$2 = ket_InputTouchTeavmSystemBase$init$lambda$_1_4__init_0($this);
    $canvas.addEventListener("touchmove", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
    var$2 = ket_InputTouchTeavmSystemBase$init$lambda$_1_5__init_0($this);
    $canvas.addEventListener("touchend", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
},
ket_InputTouchTeavmSystemBase_updateDirectionD = ($this, $dx, $dy) => {
    let $angle, $dist, $step, $a;
    $angle = jl_Math_atan2($dy, $dx);
    $dist = jl_Math_sqrt($dx * $dx + $dy * $dy);
    if ($dist <= 10.0)
        $this.$direction = (-1);
    else {
        $step = 0.7853981633974483;
        $a = $angle + 0.39269908169872414;
        if ($a < 0.0)
            $a = $a + 6.283185307179586;
        $this.$direction = (jl_Math_floor($a / $step) | 0) % 8 | 0;
    }
    ket_InputTouchTeavmSystemBase_updateDirection($this);
},
ket_InputTouchTeavmSystemBase_updateDirection = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, var$7;
    var$1 = $this.$listener0;
    var$2 = $this.$world7;
    ket_InputTouchTeavmSystemBase_$callClinit();
    var$3 = ket_InputTouchTeavmSystemBase_upDirections;
    var$4 = $this.$direction;
    var$5 = var$3.$contains(jl_Integer_valueOf(var$4));
    var$3 = ket_InputTouchTeavmSystemBase_rightDirections;
    var$4 = $this.$direction;
    var$4 = var$3.$contains(jl_Integer_valueOf(var$4));
    var$3 = ket_InputTouchTeavmSystemBase_downDirections;
    var$6 = $this.$direction;
    var$6 = var$3.$contains(jl_Integer_valueOf(var$6));
    var$3 = ket_InputTouchTeavmSystemBase_leftDirections;
    var$7 = $this.$direction;
    var$7 = var$3.$contains(jl_Integer_valueOf(var$7));
    var$1.$updateDirection0(var$2, var$5, var$4, var$6, var$7);
},
ket_InputTouchTeavmSystemBase_lambda$init$5 = ($this, $evt) => {
    $this.$touching = 0;
    $this.$direction = (-1);
    ket_InputTouchTeavmSystemBase_updateDirection($this);
},
ket_InputTouchTeavmSystemBase_lambda$init$4 = ($this, $evt) => {
    let $e, $t;
    $e = otj_JSObject_cast$static($evt);
    if ($this.$touching) {
        $t = otji_JSWrapper_maybeUnwrap($e.touches[0]);
        ket_InputTouchTeavmSystemBase_updateDirectionD($this, $t.clientX - $this.$touchBaseX, $t.clientY - $this.$touchBaseY);
    }
    $e.preventDefault();
},
ket_InputTouchTeavmSystemBase_lambda$init$3 = ($this, $evt) => {
    let $e, $t;
    $e = otj_JSObject_cast$static($evt);
    $t = otji_JSWrapper_maybeUnwrap($e.touches[0]);
    $this.$touchBaseX = $t.clientX;
    $this.$touchBaseY = $t.clientY;
    $this.$touching = 1;
    $e.preventDefault();
},
ket_InputTouchTeavmSystemBase_lambda$init$2 = ($this, $evt) => {
    $this.$touching = 0;
    $this.$direction = (-1);
    ket_InputTouchTeavmSystemBase_updateDirection($this);
},
ket_InputTouchTeavmSystemBase_lambda$init$1 = ($this, $evt) => {
    let $e;
    if ($this.$touching) {
        $e = otj_JSObject_cast$static($evt);
        ket_InputTouchTeavmSystemBase_updateDirectionD($this, $e.clientX - $this.$touchBaseX, $e.clientY - $this.$touchBaseY);
    }
},
ket_InputTouchTeavmSystemBase_lambda$init$0 = ($this, $evt) => {
    let $e;
    $e = otj_JSObject_cast$static($evt);
    $this.$touchBaseX = $e.clientX;
    $this.$touchBaseY = $e.clientY;
    $this.$touching = 1;
    $e.preventDefault();
},
ket_InputTouchTeavmSystemBase__clinit_ = () => {
    ket_InputTouchTeavmSystemBase_upDirections = ju_List_of(jl_Integer_valueOf(5), jl_Integer_valueOf(6), jl_Integer_valueOf(7));
    ket_InputTouchTeavmSystemBase_rightDirections = ju_List_of(jl_Integer_valueOf(7), jl_Integer_valueOf(0), jl_Integer_valueOf(1));
    ket_InputTouchTeavmSystemBase_downDirections = ju_List_of(jl_Integer_valueOf(1), jl_Integer_valueOf(2), jl_Integer_valueOf(3));
    ket_InputTouchTeavmSystemBase_leftDirections = ju_List_of(jl_Integer_valueOf(3), jl_Integer_valueOf(4), jl_Integer_valueOf(5));
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1 = $rt_classWithoutFields(),
otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_ = var$0 => {
    jl_Object__init_(var$0);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_0 = () => {
    let var_0 = new otji_JSWrapper$Helper$_clinit_$lambda$_3_1();
    otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_(var_0);
    return var_0;
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept = (var$0, var$1) => {
    otji_JSWrapper$Helper_lambda$static$1(var$1);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept$exported$0 = (var$1, var$2) => {
    var$1.$accept(var$2);
},
otcit_FloatAnalyzer$Result = $rt_classWithoutFields(),
otcit_FloatAnalyzer$Result__init_ = $this => {
    jl_Object__init_($this);
},
otcit_FloatAnalyzer$Result__init_0 = () => {
    let var_0 = new otcit_FloatAnalyzer$Result();
    otcit_FloatAnalyzer$Result__init_(var_0);
    return var_0;
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0 = $rt_classWithoutFields(),
otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_0 = () => {
    let var_0 = new otji_JSWrapper$Helper$_clinit_$lambda$_3_0();
    otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_(var_0);
    return var_0;
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept = (var$0, var$1) => {
    otji_JSWrapper$Helper_lambda$static$0(var$1);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept$exported$0 = (var$1, var$2) => {
    var$1.$accept(var$2);
},
jl_InterruptedException = $rt_classWithoutFields(jl_Exception);
function ket_OutputTeavmSystem() {
    let a = this; kebs_AOutputSystem.call(a);
    a.$height1 = 0;
    a.$width0 = 0;
    a.$g = null;
    a.$canvas = null;
    a.$resize = null;
}
let ket_OutputTeavmSystem__init_0 = ($this, $world) => {
    ket_OutputTeavmSystem__init_($this, $world, 400, 800);
},
ket_OutputTeavmSystem__init_1 = var_0 => {
    let var_1 = new ket_OutputTeavmSystem();
    ket_OutputTeavmSystem__init_0(var_1, var_0);
    return var_1;
},
ket_OutputTeavmSystem__init_ = ($this, $world, $height, $width) => {
    kebs_AOutputSystem__init_($this, $world);
    $this.$resize = otji_JSWrapper_unwrap(ket_OutputTeavmSystem$1__init_0($this));
    $this.$height1 = $height;
    $this.$width0 = $width;
},
ket_OutputTeavmSystem__init_2 = (var_0, var_1, var_2) => {
    let var_3 = new ket_OutputTeavmSystem();
    ket_OutputTeavmSystem__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
ket_OutputTeavmSystem_init = $this => {
    let $document, var$2, var$3, var$4, $s;
    $document = window.document;
    $this.$canvas = $document.createElement("canvas");
    var$2 = $this.$canvas;
    var$3 = $this.$width0;
    var$2.width = var$3;
    var$2 = $this.$canvas;
    var$3 = $this.$height1;
    var$2.height = var$3;
    var$2 = $this.$canvas;
    var$4 = $this.$resize;
    var$2.addEventListener("resize", otji_JS_function(var$4, "handleEvent"));
    var$3 = $document.body;
    var$2 = $this.$canvas;
    var$3.appendChild(var$2);
    $this.$g = $this.$canvas.getContext("2d");
    var$2 = ($this.$world3.$getSystems($rt_cls(ket_InputTouchTeavmSystemBase))).$iterator();
    while (var$2.$hasNext()) {
        $s = var$2.$next();
        $s.$init0($this.$canvas);
    }
    var$2 = ($this.$getPartOutputSystems()).$iterator();
    while (var$2.$hasNext()) {
        $s = var$2.$next();
        $s.$onResize($this.$width0, $this.$height1);
        $s.$init1($this.$world3, otji_JSWrapper_wrap($this.$g));
    }
},
ket_OutputTeavmSystem_width = $this => {
    return $this.$width0;
},
ket_OutputTeavmSystem_height = $this => {
    return $this.$height1;
},
ket_OutputTeavmSystem_update = $this => {
    kebs_AOutputSystem_draw($this, $this.$world3, otji_JSWrapper_wrap($this.$g));
},
ket_OutputTeavmSystem_access$000 = $x0 => {
    return $x0.$getPartOutputSystems();
},
otcir_MethodInfo = $rt_classWithoutFields();
function kebu_DoubleRange() {
    let a = this; jl_Object.call(a);
    a.$min1 = 0.0;
    a.$max2 = 0.0;
}
let kebu_DoubleRange__init_0 = ($this, $min, $max) => {
    jl_Object__init_($this);
    if ($min <= $max) {
        $this.$min1 = $min;
        $this.$max2 = $max;
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_2($rt_s(24)));
},
kebu_DoubleRange__init_ = (var_0, var_1) => {
    let var_2 = new kebu_DoubleRange();
    kebu_DoubleRange__init_0(var_2, var_0, var_1);
    return var_2;
},
kebu_DoubleRange_getMin = $this => {
    return $this.$min1;
},
kebu_DoubleRange_getMax = $this => {
    return $this.$max2;
},
kebu_DoubleRange_random = $this => {
    if ($this.$getMin() === $this.$getMax())
        return $this.$getMax();
    return (juc_ThreadLocalRandom_current0()).$nextDouble0($this.$getMin(), $this.$getMax());
},
kebu_DoubleRange_fit0 = ($this, $value) => {
    return kebu_DoubleRange_fit($value, $this.$getMin(), $this.$getMax());
},
kebu_DoubleRange_fit = ($value, $min, $max) => {
    if ($value >= $min)
        $min = $value;
    if ($min <= $max)
        $max = $min;
    return $max;
};
function jl_Class() {
    let a = this; jl_Object.call(a);
    a.$name = null;
    a.$platformClass = null;
}
let jl_Class__init_ = ($this, $platformClass) => {
    let var$2;
    jl_Object__init_($this);
    $this.$platformClass = $platformClass;
    var$2 = $this;
    $platformClass.classObject = var$2;
},
jl_Class__init_0 = var_0 => {
    let var_1 = new jl_Class();
    jl_Class__init_(var_1, var_0);
    return var_1;
},
jl_Class_getClass = $cls => {
    let $result;
    if ($cls === null)
        return null;
    $result = $cls.classObject;
    if ($result === null)
        $result = jl_Class__init_0($cls);
    return $result;
},
jl_Class_getPlatformClass = $this => {
    return $this.$platformClass;
},
jl_Class_isAssignableFrom = ($this, $obj) => {
    return otp_Platform_isAssignable(jl_Class_getPlatformClass($obj), $this.$platformClass);
},
jl_Class_getName = $this => {
    if ($this.$name === null)
        $this.$name = otp_Platform_getName($this.$platformClass);
    return $this.$name;
},
jl_Class_getComponentType = $this => {
    return jl_Class_getClass(otp_Platform_getArrayItem($this.$platformClass));
},
jl_Class_cast = ($this, $obj) => {
    let var$2, var$3, var$4, var$5;
    if ($obj !== null && !jl_Class_isAssignableFrom($this, jl_Object_getClass($obj))) {
        var$2 = new jl_ClassCastException;
        var$3 = jl_Class_getName(jl_Object_getClass($obj));
        var$4 = jl_Class_getName($this);
        var$5 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$5, var$3), $rt_s(25)), var$4);
        jl_ClassCastException__init_(var$2, jl_StringBuilder_toString(var$5));
        $rt_throw(var$2);
    }
    return $obj;
},
jl_String$_clinit_$lambda$_115_0 = $rt_classWithoutFields(),
jl_String$_clinit_$lambda$_115_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
jl_String$_clinit_$lambda$_115_0__init_0 = () => {
    let var_0 = new jl_String$_clinit_$lambda$_115_0();
    jl_String$_clinit_$lambda$_115_0__init_(var_0);
    return var_0;
},
ju_HashMap$EntryIterator = $rt_classWithoutFields(ju_HashMap$AbstractMapIterator),
ju_HashMap$EntryIterator__init_ = ($this, $map) => {
    ju_HashMap$AbstractMapIterator__init_($this, $map);
},
ju_HashMap$EntryIterator__init_0 = var_0 => {
    let var_1 = new ju_HashMap$EntryIterator();
    ju_HashMap$EntryIterator__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$EntryIterator_next = $this => {
    ju_HashMap$AbstractMapIterator_makeNext($this);
    return $this.$currentEntry;
},
ju_HashMap$EntryIterator_next0 = $this => {
    return $this.$next0();
},
ju_Collections = $rt_classWithoutFields(),
ju_Collections_EMPTY_SET = null,
ju_Collections_EMPTY_MAP = null,
ju_Collections_EMPTY_LIST = null,
ju_Collections_EMPTY_ITERATOR = null,
ju_Collections_EMPTY_LIST_ITERATOR = null,
ju_Collections_reverseOrder = null,
ju_Collections_$callClinit = () => {
    ju_Collections_$callClinit = $rt_eraseClinit(ju_Collections);
    ju_Collections__clinit_();
},
ju_Collections_emptyIterator = () => {
    ju_Collections_$callClinit();
    return ju_Collections_EMPTY_ITERATOR;
},
ju_Collections_emptySet = () => {
    ju_Collections_$callClinit();
    return ju_Collections_EMPTY_SET;
},
ju_Collections_emptyMap = () => {
    ju_Collections_$callClinit();
    return ju_Collections_EMPTY_MAP;
},
ju_Collections__clinit_ = () => {
    ju_Collections_EMPTY_SET = ju_Collections$1__init_0();
    ju_Collections_EMPTY_MAP = ju_Collections$2__init_0();
    ju_Collections_EMPTY_LIST = ju_Collections$3__init_0();
    ju_Collections_EMPTY_ITERATOR = ju_Collections$4__init_0();
    ju_Collections_EMPTY_LIST_ITERATOR = ju_Collections$5__init_0();
    ju_Collections_reverseOrder = ju_Collections$_clinit_$lambda$_59_0__init_0();
};
$rt_packages([-1, "java", 0, "util", 0, "lang", -1, "kfs", 3, "ecs", 4, "base", 5, "comp"
]);
$rt_metadata([jl_Object, "Object", 2, 0, [], 0, 3, 0, 0, ["$isEmptyMonitor", $rt_wrapFunction0(jl_Object_isEmptyMonitor), "$getClass0", $rt_wrapFunction0(jl_Object_getClass), "$hashCode0", $rt_wrapFunction0(jl_Object_hashCode), "$equals0", $rt_wrapFunction1(jl_Object_equals), "$toString", $rt_wrapFunction0(jl_Object_toString), "$identity", $rt_wrapFunction0(jl_Object_identity)],
kebm_TickEventListener, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Throwable, 0, jl_Object, [], 0, 3, 0, 0, ["$fillInStackTrace", $rt_wrapFunction0(jl_Throwable_fillInStackTrace), "$getMessage", $rt_wrapFunction0(jl_Throwable_getMessage), "$getCause", $rt_wrapFunction0(jl_Throwable_getCause)],
jl_Exception, 0, jl_Throwable, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_Exception__init_0), "$_init_", $rt_wrapFunction1(jl_Exception__init_)],
jl_RuntimeException, 0, jl_Exception, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_RuntimeException__init_), "$_init_", $rt_wrapFunction1(jl_RuntimeException__init_0)],
jl_IndexOutOfBoundsException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_IndexOutOfBoundsException__init_)],
ju_Arrays, 0, jl_Object, [], 0, 3, 0, 0, 0,
otj_JSObject, 0, jl_Object, [], 3, 3, 0, 0, 0,
otjde_EventListener, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
ket_InputTouchTeavmSystemBase$init$lambda$_1_5, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_37", $rt_wrapFunction1(ket_InputTouchTeavmSystemBase$init$lambda$_1_5__init_), "$handleEvent", $rt_wrapFunction1(ket_InputTouchTeavmSystemBase$init$lambda$_1_5_handleEvent)],
ket_InputTouchTeavmSystemBase$init$lambda$_1_4, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_37", $rt_wrapFunction1(ket_InputTouchTeavmSystemBase$init$lambda$_1_4__init_), "$handleEvent", $rt_wrapFunction1(ket_InputTouchTeavmSystemBase$init$lambda$_1_4_handleEvent)],
jl_System, 0, jl_Object, [], 4, 3, 0, 0, 0,
juf_Function, 0, jl_Object, [], 3, 3, 0, 0, 0,
keb_World$removeComponent$lambda$_6_0, 0, jl_Object, [juf_Function], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(keb_World$removeComponent$lambda$_6_0__init_), "$apply0", $rt_wrapFunction1(keb_World$removeComponent$lambda$_6_0_apply0), "$apply", $rt_wrapFunction1(keb_World$removeComponent$lambda$_6_0_apply)],
kebm_TouchInputListener, 0, jl_Object, [], 3, 3, 0, 0, 0,
keb_Component, 0, jl_Object, [], 3, 3, 0, 0, 0,
kebc_Spooka, "Spooka", 6, jl_Object, [keb_Component], 0, 3, 0, 0, ["$_init_4", $rt_wrapFunction1(kebc_Spooka__init_)],
keth_Star, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_18", $rt_wrapFunction4(keth_Star__init_)],
jl_Comparable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ji_Serializable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Enum, 0, jl_Object, [jl_Comparable, ji_Serializable], 1, 3, 0, 0, ["$_init_3", $rt_wrapFunction2(jl_Enum__init_), "$ordinal", $rt_wrapFunction0(jl_Enum_ordinal)],
keth_SpookaType, 0, jl_Enum, [], 12, 3, 0, keth_SpookaType_$callClinit, 0,
keb_SystemBase, 0, jl_Object, [], 3, 3, 0, 0, ["$init", $rt_wrapFunction0(keb_SystemBase_init), "$done", $rt_wrapFunction0(keb_SystemBase_done), "$update", $rt_wrapFunction0(keb_SystemBase_update)],
kebs_CollisionSystem, 0, jl_Object, [keb_SystemBase], 0, 3, 0, 0, ["$init", $rt_wrapFunction0(keb_SystemBase_init), "$done", $rt_wrapFunction0(keb_SystemBase_done), "$_init_30", $rt_wrapFunction2(kebs_CollisionSystem__init_), "$update", $rt_wrapFunction0(kebs_CollisionSystem_update)],
ket_InputTouchTeavmSystemBase$init$lambda$_1_3, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_37", $rt_wrapFunction1(ket_InputTouchTeavmSystemBase$init$lambda$_1_3__init_), "$handleEvent", $rt_wrapFunction1(ket_InputTouchTeavmSystemBase$init$lambda$_1_3_handleEvent)],
jl_Number, 0, jl_Object, [ji_Serializable], 1, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_Number__init_)],
jl_Integer, 0, jl_Number, [jl_Comparable], 0, 3, 0, jl_Integer_$callClinit, ["$_init_4", $rt_wrapFunction1(jl_Integer__init_), "$equals0", $rt_wrapFunction1(jl_Integer_equals)],
ket_InputTouchTeavmSystemBase$init$lambda$_1_2, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_37", $rt_wrapFunction1(ket_InputTouchTeavmSystemBase$init$lambda$_1_2__init_), "$handleEvent", $rt_wrapFunction1(ket_InputTouchTeavmSystemBase$init$lambda$_1_2_handleEvent)],
ket_InputTouchTeavmSystemBase$init$lambda$_1_1, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_37", $rt_wrapFunction1(ket_InputTouchTeavmSystemBase$init$lambda$_1_1__init_), "$handleEvent", $rt_wrapFunction1(ket_InputTouchTeavmSystemBase$init$lambda$_1_1_handleEvent)],
ket_InputTouchTeavmSystemBase$init$lambda$_1_0, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_37", $rt_wrapFunction1(ket_InputTouchTeavmSystemBase$init$lambda$_1_0__init_), "$handleEvent", $rt_wrapFunction1(ket_InputTouchTeavmSystemBase$init$lambda$_1_0_handleEvent)],
ju_Iterator, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_ListIterator, 0, jl_Object, [ju_Iterator], 3, 3, 0, 0, 0,
ju_Collections$5, 0, jl_Object, [ju_ListIterator], 0, 0, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_Collections$5__init_)],
jl_AbstractStringBuilder$Constants, 0, jl_Object, [], 0, 0, 0, jl_AbstractStringBuilder$Constants_$callClinit, 0,
jl_Iterable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Collection, 0, jl_Object, [jl_Iterable], 3, 3, 0, 0, 0,
ju_AbstractCollection, 0, jl_Object, [ju_Collection], 1, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_AbstractCollection__init_), "$contains", $rt_wrapFunction1(ju_AbstractCollection_contains)],
ju_SequencedCollection, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
ju_List, 0, jl_Object, [ju_SequencedCollection], 3, 3, 0, 0, 0,
ju_AbstractList, 0, ju_AbstractCollection, [ju_List], 1, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_AbstractList__init_), "$iterator", $rt_wrapFunction0(ju_AbstractList_iterator)],
ju_RandomAccess, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_TemplateCollections$AbstractImmutableList, 0, ju_AbstractList, [ju_RandomAccess], 1, 0, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_TemplateCollections$AbstractImmutableList__init_)],
ju_Collections$3, 0, ju_TemplateCollections$AbstractImmutableList, [], 0, 0, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_Collections$3__init_)],
ket_InputKeysTeavmSystemBase, 0, jl_Object, [keb_SystemBase], 0, 3, 0, 0, ["$done", $rt_wrapFunction0(keb_SystemBase_done), "$update", $rt_wrapFunction0(keb_SystemBase_update), "$_init_26", $rt_wrapFunction3(ket_InputKeysTeavmSystemBase__init_), "$init", $rt_wrapFunction0(ket_InputKeysTeavmSystemBase_init)],
ju_Collections$4, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_Collections$4__init_), "$hasNext", $rt_wrapFunction0(ju_Collections$4_hasNext), "$next", $rt_wrapFunction0(ju_Collections$4_next)],
jl_Character, 0, jl_Object, [jl_Comparable], 0, 3, 0, jl_Character_$callClinit, 0,
ju_Set, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
ju_AbstractSet, 0, ju_AbstractCollection, [ju_Set], 1, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_AbstractSet__init_)],
ju_TemplateCollections$AbstractImmutableSet, 0, ju_AbstractSet, [], 1, 0, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_TemplateCollections$AbstractImmutableSet__init_)],
ju_Collections$1, 0, ju_TemplateCollections$AbstractImmutableSet, [], 0, 0, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_Collections$1__init_), "$iterator", $rt_wrapFunction0(ju_Collections$1_iterator)]]);
$rt_metadata([ju_Map, 0, jl_Object, [], 3, 3, 0, 0, ["$getOrDefault", $rt_wrapFunction2(ju_Map_getOrDefault), "$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent)],
ju_AbstractMap, 0, jl_Object, [ju_Map], 1, 3, 0, 0, ["$getOrDefault", $rt_wrapFunction2(ju_Map_getOrDefault), "$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent), "$_init_0", $rt_wrapFunction0(ju_AbstractMap__init_), "$keySet", $rt_wrapFunction0(ju_AbstractMap_keySet)],
ju_TemplateCollections$AbstractImmutableMap, 0, ju_AbstractMap, [], 1, 0, 0, 0, ["$getOrDefault", $rt_wrapFunction2(ju_Map_getOrDefault), "$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent), "$_init_0", $rt_wrapFunction0(ju_TemplateCollections$AbstractImmutableMap__init_)],
ju_Collections$2, 0, ju_TemplateCollections$AbstractImmutableMap, [], 0, 0, 0, 0, ["$getOrDefault", $rt_wrapFunction2(ju_Map_getOrDefault), "$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent), "$_init_0", $rt_wrapFunction0(ju_Collections$2__init_), "$entrySet", $rt_wrapFunction0(ju_Collections$2_entrySet), "$size", $rt_wrapFunction0(ju_Collections$2_size), "$get", $rt_wrapFunction1(ju_Collections$2_get)],
jl_Long, 0, jl_Number, [jl_Comparable], 0, 3, 0, jl_Long_$callClinit, 0,
kebc_TickEvent, "TickEvent", 6, jl_Object, [keb_Component], 0, 3, 0, 0, ["$_init_35", $rt_wrapFunction1(kebc_TickEvent__init_), "$tick", $rt_wrapFunction0(kebc_TickEvent_tick)],
jl_Runnable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Thread, 0, jl_Object, [jl_Runnable], 0, 3, 0, jl_Thread_$callClinit, ["$_init_", $rt_wrapFunction1(jl_Thread__init_0), "$_init_9", $rt_wrapFunction2(jl_Thread__init_)],
otp_PlatformRunnable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Object$monitorExit$lambda$_8_0, 0, jl_Object, [otp_PlatformRunnable], 0, 3, 0, 0, ["$_init_2", $rt_wrapFunction1(jl_Object$monitorExit$lambda$_8_0__init_), "$run", $rt_wrapFunction0(jl_Object$monitorExit$lambda$_8_0_run)],
otp_PlatformQueue, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
jl_CharSequence, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_StringIndexOutOfBoundsException, 0, jl_IndexOutOfBoundsException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_StringIndexOutOfBoundsException__init_)],
otcir_ClassList, 0, jl_Object, [], 0, 3, 0, 0, 0,
ju_Comparator, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Collections$_clinit_$lambda$_59_0, 0, jl_Object, [ju_Comparator], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_Collections$_clinit_$lambda$_59_0__init_)],
otji_JSWrapper$Helper, 0, jl_Object, [], 0, 0, 0, otji_JSWrapper$Helper_$callClinit, 0,
jl_AbstractStringBuilder, 0, jl_Object, [ji_Serializable, jl_CharSequence], 0, 0, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_AbstractStringBuilder__init_0), "$_init_4", $rt_wrapFunction1(jl_AbstractStringBuilder__init_), "$append1", $rt_wrapFunction1(jl_AbstractStringBuilder_append0), "$insert2", $rt_wrapFunction2(jl_AbstractStringBuilder_insert), "$append2", $rt_wrapFunction1(jl_AbstractStringBuilder_append), "$insert0", $rt_wrapFunction2(jl_AbstractStringBuilder_insert2), "$append3", $rt_wrapFunction1(jl_AbstractStringBuilder_append1),
"$insert1", $rt_wrapFunction2(jl_AbstractStringBuilder_insert1), "$insert", $rt_wrapFunction2(jl_AbstractStringBuilder_insert0), "$ensureCapacity", $rt_wrapFunction1(jl_AbstractStringBuilder_ensureCapacity), "$toString", $rt_wrapFunction0(jl_AbstractStringBuilder_toString)],
jl_Appendable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_StringBuilder, 0, jl_AbstractStringBuilder, [jl_Appendable], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_StringBuilder__init_0), "$append", $rt_wrapFunction1(jl_StringBuilder_append), "$append4", $rt_wrapFunction1(jl_StringBuilder_append1), "$append0", $rt_wrapFunction1(jl_StringBuilder_append0), "$insert5", $rt_wrapFunction2(jl_StringBuilder_insert3), "$insert3", $rt_wrapFunction2(jl_StringBuilder_insert4), "$insert4", $rt_wrapFunction2(jl_StringBuilder_insert2), "$insert6", $rt_wrapFunction2(jl_StringBuilder_insert5),
"$toString", $rt_wrapFunction0(jl_StringBuilder_toString), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuilder_ensureCapacity), "$insert", $rt_wrapFunction2(jl_StringBuilder_insert1), "$insert1", $rt_wrapFunction2(jl_StringBuilder_insert), "$insert0", $rt_wrapFunction2(jl_StringBuilder_insert0), "$insert2", $rt_wrapFunction2(jl_StringBuilder_insert6)],
ju_AbstractMap$KeySet, 0, ju_AbstractSet, [], 0, 0, 0, 0, ["$iterator", $rt_wrapFunction0(ju_AbstractMap$KeySet_iterator), "$size", $rt_wrapFunction0(ju_AbstractMap$KeySet_size)],
kebm_InputKeyCallback, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_ConcurrentModificationException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_ConcurrentModificationException__init_0)],
keb_Entity, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_16", $rt_wrapFunction1(keb_Entity__init_), "$id", $rt_wrapFunction0(keb_Entity_id), "$equals0", $rt_wrapFunction1(keb_Entity_equals), "$hashCode0", $rt_wrapFunction0(keb_Entity_hashCode)],
jlr_AnnotatedElement, 0, jl_Object, [], 3, 3, 0, 0, 0,
jur_RandomGenerator, 0, jl_Object, [], 3, 3, 0, 0, ["$nextDouble0", $rt_wrapFunction2(jur_RandomGenerator_nextDouble), "$nextInt1", $rt_wrapFunction2(jur_RandomGenerator_nextInt)],
ju_HashMap$1, 0, ju_AbstractSet, [], 0, 0, 0, 0, ["$_init_13", $rt_wrapFunction1(ju_HashMap$1__init_), "$contains", $rt_wrapFunction1(ju_HashMap$1_contains), "$size", $rt_wrapFunction0(ju_HashMap$1_size), "$iterator", $rt_wrapFunction0(ju_HashMap$1_iterator)],
jl_Double, 0, jl_Number, [jl_Comparable], 0, 3, 0, jl_Double_$callClinit, 0,
jl_ClassCastException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction1(jl_ClassCastException__init_)],
jl_Cloneable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_ArrayList, 0, ju_AbstractList, [jl_Cloneable, ji_Serializable, ju_RandomAccess], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_ArrayList__init_1), "$_init_4", $rt_wrapFunction1(ju_ArrayList__init_0), "$_init_17", $rt_wrapFunction1(ju_ArrayList__init_2), "$ensureCapacity", $rt_wrapFunction1(ju_ArrayList_ensureCapacity), "$get0", $rt_wrapFunction1(ju_ArrayList_get), "$size", $rt_wrapFunction0(ju_ArrayList_size), "$add", $rt_wrapFunction1(ju_ArrayList_add)],
jl_IllegalMonitorStateException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_IllegalMonitorStateException__init_)],
kebm_ExplosionListener, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Random, 0, jl_Object, [jur_RandomGenerator, ji_Serializable], 0, 3, 0, 0, ["$nextDouble0", $rt_wrapFunction2(jur_RandomGenerator_nextDouble), "$nextInt1", $rt_wrapFunction2(jur_RandomGenerator_nextInt), "$_init_0", $rt_wrapFunction0(ju_Random__init_), "$nextInt0", $rt_wrapFunction0(ju_Random_nextInt0), "$nextInt", $rt_wrapFunction1(ju_Random_nextInt), "$nextDouble", $rt_wrapFunction0(ju_Random_nextDouble)],
juc_ThreadLocalRandom, 0, ju_Random, [], 0, 3, 0, juc_ThreadLocalRandom_$callClinit, ["$nextDouble0", $rt_wrapFunction2(jur_RandomGenerator_nextDouble), "$nextInt1", $rt_wrapFunction2(jur_RandomGenerator_nextInt)],
kebc_Explosion, "Explosion", 6, jl_Object, [keb_Component], 0, 3, 0, 0, ["$_init_32", $rt_wrapFunction3(kebc_Explosion__init_), "$particles", $rt_wrapFunction0(kebc_Explosion_particles), "$getPosition", $rt_wrapFunction0(kebc_Explosion_getPosition), "$update0", $rt_wrapFunction1(kebc_Explosion_update), "$finished", $rt_wrapFunction0(kebc_Explosion_finished)],
jl_String, 0, jl_Object, [ji_Serializable, jl_Comparable, jl_CharSequence], 0, 3, 0, jl_String_$callClinit, ["$_init_0", $rt_wrapFunction0(jl_String__init_), "$_init_20", $rt_wrapFunction1(jl_String__init_0), "$_init_2", $rt_wrapFunction1(jl_String__init_1), "$_init_11", $rt_wrapFunction3(jl_String__init_2), "$charAt", $rt_wrapFunction1(jl_String_charAt), "$length", $rt_wrapFunction0(jl_String_length), "$isEmpty", $rt_wrapFunction0(jl_String_isEmpty), "$contains0", $rt_wrapFunction1(jl_String_contains), "$toString",
$rt_wrapFunction0(jl_String_toString), "$equals0", $rt_wrapFunction1(jl_String_equals), "$hashCode0", $rt_wrapFunction0(jl_String_hashCode)],
jl_NegativeArraySizeException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_NegativeArraySizeException__init_)],
ju_Map$Entry, 0, jl_Object, [], 3, 3, 0, 0, 0,
kebm_CollisionListener, 0, jl_Object, [], 3, 3, 0, 0, 0,
otci_RandomUtils, 0, jl_Object, [], 0, 3, 0, 0, 0,
keb_SystemBaseOutputPart, 0, jl_Object, [keb_SystemBase], 3, 3, 0, 0, ["$init", $rt_wrapFunction0(keb_SystemBase_init), "$done", $rt_wrapFunction0(keb_SystemBase_done), "$update", $rt_wrapFunction0(keb_SystemBase_update), "$init1", $rt_wrapFunction2(keb_SystemBaseOutputPart_init), "$onResize", $rt_wrapFunction2(keb_SystemBaseOutputPart_onResize)],
kebs_AOutputSystem, 0, jl_Object, [keb_SystemBaseOutputPart], 1, 3, 0, 0, ["$init", $rt_wrapFunction0(keb_SystemBase_init), "$done", $rt_wrapFunction0(keb_SystemBase_done), "$update", $rt_wrapFunction0(keb_SystemBase_update), "$init1", $rt_wrapFunction2(keb_SystemBaseOutputPart_init), "$onResize", $rt_wrapFunction2(keb_SystemBaseOutputPart_onResize), "$_init_25", $rt_wrapFunction1(kebs_AOutputSystem__init_), "$addPartOutputSystem", $rt_wrapFunction1(kebs_AOutputSystem_addPartOutputSystem), "$getPartOutputSystems",
$rt_wrapFunction0(kebs_AOutputSystem_getPartOutputSystems), "$draw", $rt_wrapFunction2(kebs_AOutputSystem_draw)],
kebc_Velocity, "Velocity", 6, jl_Object, [keb_Component], 0, 3, 0, 0, ["$_init_33", $rt_wrapFunction2(kebc_Velocity__init_), "$dx", $rt_wrapFunction0(kebc_Velocity_dx), "$dy", $rt_wrapFunction0(kebc_Velocity_dy), "$random1", $rt_wrapFunction0(kebc_Velocity_random)],
ju_AbstractMap$KeySet$1, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, ["$_init_12", $rt_wrapFunction2(ju_AbstractMap$KeySet$1__init_), "$hasNext", $rt_wrapFunction0(ju_AbstractMap$KeySet$1_hasNext), "$next", $rt_wrapFunction0(ju_AbstractMap$KeySet$1_next)],
keth_HalloweenSpookaGSys, 0, jl_Object, [keb_SystemBaseOutputPart], 0, 3, 0, 0, ["$init", $rt_wrapFunction0(keb_SystemBase_init), "$done", $rt_wrapFunction0(keb_SystemBase_done), "$update", $rt_wrapFunction0(keb_SystemBase_update), "$init1", $rt_wrapFunction2(keb_SystemBaseOutputPart_init), "$onResize", $rt_wrapFunction2(keb_SystemBaseOutputPart_onResize), "$_init_0", $rt_wrapFunction0(keth_HalloweenSpookaGSys__init_), "$draw0", $rt_wrapFunction2(keth_HalloweenSpookaGSys_draw), "$drawPumpkin", $rt_wrapFunction4(keth_HalloweenSpookaGSys_drawPumpkin),
"$drawGhost", $rt_wrapFunction4(keth_HalloweenSpookaGSys_drawGhost), "$drawBat", function(var_1, var_2, var_3, var_4, var_5) { keth_HalloweenSpookaGSys_drawBat(this, var_1, var_2, var_3, var_4, var_5); }, "$drawSpider", $rt_wrapFunction4(keth_HalloweenSpookaGSys_drawSpider), "$drawCatAnimated", function(var_1, var_2, var_3, var_4, var_5) { keth_HalloweenSpookaGSys_drawCatAnimated(this, var_1, var_2, var_3, var_4, var_5); }, "$drawTriangle", function(var_1, var_2, var_3, var_4, var_5, var_6) { keth_HalloweenSpookaGSys_drawTriangle(this,
var_1, var_2, var_3, var_4, var_5, var_6); }, "$draw", $rt_wrapFunction2(keth_HalloweenSpookaGSys_draw0)],
kebs_VelocitySystem, 0, jl_Object, [keb_SystemBase], 0, 3, 0, 0, ["$init", $rt_wrapFunction0(keb_SystemBase_init), "$done", $rt_wrapFunction0(keb_SystemBase_done), "$_init_25", $rt_wrapFunction1(kebs_VelocitySystem__init_), "$update", $rt_wrapFunction0(kebs_VelocitySystem_update)],
ju_AbstractList$1, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, ["$_init_6", $rt_wrapFunction1(ju_AbstractList$1__init_), "$hasNext", $rt_wrapFunction0(ju_AbstractList$1_hasNext), "$next", $rt_wrapFunction0(ju_AbstractList$1_next)],
keb_World, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_16", $rt_wrapFunction1(keb_World__init_), "$createEntity", $rt_wrapFunction0(keb_World_createEntity), "$removeComponent", $rt_wrapFunction2(keb_World_removeComponent), "$addComponent", $rt_wrapFunction2(keb_World_addComponent), "$getComponent", $rt_wrapFunction2(keb_World_getComponent), "$getEntitiesWith0", $rt_wrapFunction1(keb_World_getEntitiesWith), "$getEntitiesWith", $rt_wrapFunction2(keb_World_getEntitiesWith0), "$add1", $rt_wrapFunction1(keb_World_add),
"$getSystems", $rt_wrapFunction1(keb_World_getSystems), "$isStopTheWorld", $rt_wrapFunction0(keb_World_isStopTheWorld), "$getOutputSystem", $rt_wrapFunction0(keb_World_getOutputSystem), "$setOutputSystem", $rt_wrapFunction1(keb_World_setOutputSystem), "$deltaTime", $rt_wrapFunction0(keb_World_deltaTime), "$init", $rt_wrapFunction0(keb_World_init), "$run", $rt_wrapFunction0(keb_World_run)],
kebc_Explosion$Particle, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_14", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7) { kebc_Explosion$Particle__init_(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7); }, "$alive", $rt_wrapFunction0(kebc_Explosion$Particle_alive)]]);
$rt_metadata([keth_HalloweenScene, 0, jl_Object, [keb_SystemBaseOutputPart], 0, 3, 0, 0, ["$init", $rt_wrapFunction0(keb_SystemBase_init), "$done", $rt_wrapFunction0(keb_SystemBase_done), "$update", $rt_wrapFunction0(keb_SystemBase_update), "$init1", $rt_wrapFunction2(keb_SystemBaseOutputPart_init), "$onResize", $rt_wrapFunction2(keb_SystemBaseOutputPart_onResize), "$_init_31", $rt_wrapFunction2(keth_HalloweenScene__init_), "$updateStars", $rt_wrapFunction1(keth_HalloweenScene_updateStars), "$getStars", $rt_wrapFunction0(keth_HalloweenScene_getStars),
"$draw0", $rt_wrapFunction2(keth_HalloweenScene_draw0), "$drawChurchSilhouette", $rt_wrapFunction4(keth_HalloweenScene_drawChurchSilhouette), "$drawGraveyard", $rt_wrapFunction4(keth_HalloweenScene_drawGraveyard), "$draw", $rt_wrapFunction2(keth_HalloweenScene_draw)],
keb_World$addComponent$lambda$_7_0, 0, jl_Object, [juf_Function], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(keb_World$addComponent$lambda$_7_0__init_), "$apply0", $rt_wrapFunction1(keb_World$addComponent$lambda$_7_0_apply0), "$apply", $rt_wrapFunction1(keb_World$addComponent$lambda$_7_0_apply)],
jl_IllegalStateException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction1(jl_IllegalStateException__init_)],
jlr_Array, 0, jl_Object, [], 4, 3, 0, 0, 0,
ju_HashMap$AbstractMapIterator, 0, jl_Object, [], 0, 0, 0, 0, ["$_init_13", $rt_wrapFunction1(ju_HashMap$AbstractMapIterator__init_), "$hasNext", $rt_wrapFunction0(ju_HashMap$AbstractMapIterator_hasNext), "$checkConcurrentMod", $rt_wrapFunction0(ju_HashMap$AbstractMapIterator_checkConcurrentMod), "$makeNext", $rt_wrapFunction0(ju_HashMap$AbstractMapIterator_makeNext)],
otcit_DoubleAnalyzer$Result, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(otcit_DoubleAnalyzer$Result__init_0)],
jl_NullPointerException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction1(jl_NullPointerException__init_), "$_init_0", $rt_wrapFunction0(jl_NullPointerException__init_0)],
oti_AsyncCallback, 0, jl_Object, [], 3, 3, 0, 0, 0,
otpp_AsyncCallbackWrapper, 0, jl_Object, [oti_AsyncCallback], 0, 0, 0, 0, ["$_init_19", $rt_wrapFunction1(otpp_AsyncCallbackWrapper__init_), "$complete", $rt_wrapFunction1(otpp_AsyncCallbackWrapper_complete), "$error", $rt_wrapFunction1(otpp_AsyncCallbackWrapper_error)],
otr_EventQueue$Event, 0, jl_Object, [], 3, 3, 0, 0, 0,
otci_IntegerUtil, 0, jl_Object, [], 4, 3, 0, 0, 0,
jl_Object$Monitor, 0, jl_Object, [], 0, 0, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_Object$Monitor__init_)],
jl_ThreadInterruptHandler, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Thread$UncaughtExceptionHandler, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_DefaultUncaughtExceptionHandler, 0, jl_Object, [jl_Thread$UncaughtExceptionHandler], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_DefaultUncaughtExceptionHandler__init_)],
otcir_FieldInfo, 0, jl_Object, [], 0, 3, 0, 0, 0,
jl_Math, 0, jl_Object, [], 4, 3, 0, 0, 0,
ju_HashMap$HashMapEntrySet, 0, ju_AbstractSet, [], 0, 0, 0, 0, ["$_init_13", $rt_wrapFunction1(ju_HashMap$HashMapEntrySet__init_), "$iterator", $rt_wrapFunction0(ju_HashMap$HashMapEntrySet_iterator)],
otjc_JSObjects, 0, jl_Object, [], 4, 3, 0, 0, 0,
otji_JSWrapper$Helper$FinalizationRegistryConsumer, 0, jl_Object, [otj_JSObject], 3, 0, 0, 0, 0,
kebc_Movement, "Movement", 6, jl_Object, [keb_Component], 0, 3, 0, 0, 0,
otji_JS, 0, jl_Object, [], 4, 3, 0, 0, 0,
kebs_MovementSystem, 0, jl_Object, [keb_SystemBase], 0, 3, 0, 0, ["$init", $rt_wrapFunction0(keb_SystemBase_init), "$done", $rt_wrapFunction0(keb_SystemBase_done), "$_init_25", $rt_wrapFunction1(kebs_MovementSystem__init_), "$update", $rt_wrapFunction0(kebs_MovementSystem_update)],
jl_Object$monitorEnterWait$lambda$_6_0, 0, jl_Object, [otp_PlatformRunnable], 0, 3, 0, 0, ["$_init_1", $rt_wrapFunction4(jl_Object$monitorEnterWait$lambda$_6_0__init_), "$run", $rt_wrapFunction0(jl_Object$monitorEnterWait$lambda$_6_0_run)],
ket_OutputTeavmSystem$1, 0, jl_Object, [otjde_EventListener], 0, 0, 0, 0, ["$_init_39", $rt_wrapFunction1(ket_OutputTeavmSystem$1__init_), "$handleEvent", $rt_wrapFunction1(ket_OutputTeavmSystem$1_handleEvent)],
ju_Objects, 0, jl_Object, [], 4, 3, 0, 0, 0,
otjc_JSUndefined, 0, jl_Object, [otj_JSObject], 0, 3, 0, 0, 0,
ju_MapEntry, 0, jl_Object, [ju_Map$Entry, jl_Cloneable], 0, 0, 0, 0, ["$_init_21", $rt_wrapFunction2(ju_MapEntry__init_), "$getKey", $rt_wrapFunction0(ju_MapEntry_getKey)],
ju_HashMap$HashEntry, 0, ju_MapEntry, [], 0, 0, 0, 0, ["$_init_23", $rt_wrapFunction2(ju_HashMap$HashEntry__init_)],
jlr_Type, 0, jl_Object, [], 3, 3, 0, 0, 0,
kebs_ExplosionSystem, 0, jl_Object, [keb_SystemBase], 0, 3, 0, 0, ["$init", $rt_wrapFunction0(keb_SystemBase_init), "$done", $rt_wrapFunction0(keb_SystemBase_done), "$_init_29", $rt_wrapFunction3(kebs_ExplosionSystem__init_), "$update", $rt_wrapFunction0(kebs_ExplosionSystem_update)],
jl_Thread$SleepHandler, 0, jl_Object, [otp_PlatformRunnable, otr_EventQueue$Event, jl_ThreadInterruptHandler], 0, 0, 0, 0, ["$_init_10", $rt_wrapFunction2(jl_Thread$SleepHandler__init_), "$run", $rt_wrapFunction0(jl_Thread$SleepHandler_run)],
ju_HashMap$KeyIterator, 0, ju_HashMap$AbstractMapIterator, [ju_Iterator], 0, 0, 0, 0, ["$_init_13", $rt_wrapFunction1(ju_HashMap$KeyIterator__init_), "$next", $rt_wrapFunction0(ju_HashMap$KeyIterator_next)],
kebs_TickEventSystem, 0, jl_Object, [keb_SystemBase], 0, 3, 0, 0, ["$init", $rt_wrapFunction0(keb_SystemBase_init), "$done", $rt_wrapFunction0(keb_SystemBase_done), "$_init_28", $rt_wrapFunction2(kebs_TickEventSystem__init_), "$update", $rt_wrapFunction0(kebs_TickEventSystem_update)],
ju_HashMap, "HashMap", 1, ju_AbstractMap, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, ["$getOrDefault", $rt_wrapFunction2(ju_Map_getOrDefault), "$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent), "$newElementArray", $rt_wrapFunction1(ju_HashMap_newElementArray), "$_init_0", $rt_wrapFunction0(ju_HashMap__init_2), "$_init_4", $rt_wrapFunction1(ju_HashMap__init_), "$_init_22", $rt_wrapFunction2(ju_HashMap__init_0), "$containsKey", $rt_wrapFunction1(ju_HashMap_containsKey), "$entrySet", $rt_wrapFunction0(ju_HashMap_entrySet),
"$get", $rt_wrapFunction1(ju_HashMap_get), "$entryByKey", $rt_wrapFunction1(ju_HashMap_entryByKey), "$findNonNullKeyEntry", $rt_wrapFunction3(ju_HashMap_findNonNullKeyEntry), "$findNullKeyEntry", $rt_wrapFunction0(ju_HashMap_findNullKeyEntry), "$keySet", $rt_wrapFunction0(ju_HashMap_keySet), "$put", $rt_wrapFunction2(ju_HashMap_put), "$rehash0", $rt_wrapFunction1(ju_HashMap_rehash), "$rehash", $rt_wrapFunction0(ju_HashMap_rehash0), "$remove", $rt_wrapFunction1(ju_HashMap_remove), "$removeByKey", $rt_wrapFunction1(ju_HashMap_removeByKey),
"$size", $rt_wrapFunction0(ju_HashMap_size)],
ju_TemplateCollections$ImmutableArrayList, 0, ju_TemplateCollections$AbstractImmutableList, [ju_RandomAccess], 0, 3, 0, 0, ["$_init_5", $rt_wrapFunction1(ju_TemplateCollections$ImmutableArrayList__init_), "$get0", $rt_wrapFunction1(ju_TemplateCollections$ImmutableArrayList_get), "$size", $rt_wrapFunction0(ju_TemplateCollections$ImmutableArrayList_size)],
otji_JSWrapper, 0, jl_Object, [], 4, 3, 0, 0, 0,
kebu_IntRange, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_36", $rt_wrapFunction2(kebu_IntRange__init_), "$random", $rt_wrapFunction0(kebu_IntRange_random)],
otcit_DoubleAnalyzer, 0, jl_Object, [], 4, 3, 0, otcit_DoubleAnalyzer_$callClinit, 0,
otp_Platform, 0, jl_Object, [], 4, 3, 0, 0, 0,
kebc_Collision, "Collision", 6, jl_Object, [keb_Component], 0, 3, 0, 0, ["$_init_34", $rt_wrapFunction1(kebc_Collision__init_), "$radius", $rt_wrapFunction0(kebc_Collision_radius)],
ju_NoSuchElementException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(ju_NoSuchElementException__init_0)],
otjc_JSWeakRef, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
ket_ExplosionGSys, 0, jl_Object, [keb_SystemBaseOutputPart], 0, 3, 0, 0, ["$init", $rt_wrapFunction0(keb_SystemBase_init), "$done", $rt_wrapFunction0(keb_SystemBase_done), "$update", $rt_wrapFunction0(keb_SystemBase_update), "$init1", $rt_wrapFunction2(keb_SystemBaseOutputPart_init), "$onResize", $rt_wrapFunction2(keb_SystemBaseOutputPart_onResize), "$_init_0", $rt_wrapFunction0(ket_ExplosionGSys__init_), "$draw0", $rt_wrapFunction2(ket_ExplosionGSys_draw), "$draw", $rt_wrapFunction2(ket_ExplosionGSys_draw0)],
ket_InputKeysTeavmSystemBase$2, 0, jl_Object, [otjde_EventListener], 0, 0, 0, 0, ["$_init_7", $rt_wrapFunction1(ket_InputKeysTeavmSystemBase$2__init_), "$handleEvent0", $rt_wrapFunction1(ket_InputKeysTeavmSystemBase$2_handleEvent), "$handleEvent", $rt_wrapFunction1(ket_InputKeysTeavmSystemBase$2_handleEvent0)],
ket_InputKeysTeavmSystemBase$1, 0, jl_Object, [otjde_EventListener], 0, 0, 0, 0, ["$_init_7", $rt_wrapFunction1(ket_InputKeysTeavmSystemBase$1__init_), "$handleEvent0", $rt_wrapFunction1(ket_InputKeysTeavmSystemBase$1_handleEvent0), "$handleEvent", $rt_wrapFunction1(ket_InputKeysTeavmSystemBase$1_handleEvent)],
kebc_Position, "Position", 6, jl_Object, [keb_Component], 0, 3, 0, 0, ["$_init_15", $rt_wrapFunction4(kebc_Position__init_), "$getX", $rt_wrapFunction0(kebc_Position_getX), "$setX", $rt_wrapFunction1(kebc_Position_setX), "$getY", $rt_wrapFunction0(kebc_Position_getY), "$setY", $rt_wrapFunction1(kebc_Position_setY), "$getXRange", $rt_wrapFunction0(kebc_Position_getXRange), "$getYRange", $rt_wrapFunction0(kebc_Position_getYRange), "$add0", $rt_wrapFunction2(kebc_Position_add), "$randomPosition", $rt_wrapFunction0(kebc_Position_randomPosition)],
jl_IllegalArgumentException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_IllegalArgumentException__init_0), "$_init_", $rt_wrapFunction1(jl_IllegalArgumentException__init_1)],
kek_Main, 0, jl_Object, [kebm_InputKeyCallback, kebm_TouchInputListener, kebm_TickEventListener, kebm_ExplosionListener, kebm_CollisionListener], 0, 3, 0, kek_Main_$callClinit, ["$_init_0", $rt_wrapFunction0(kek_Main__init_), "$keypress", $rt_wrapFunction3(kek_Main_keypress), "$updateDirection0", function(var_1, var_2, var_3, var_4, var_5) { kek_Main_updateDirection(this, var_1, var_2, var_3, var_4, var_5); }, "$updateOnTick", $rt_wrapFunction2(kek_Main_updateOnTick), "$explosionFinished", $rt_wrapFunction3(kek_Main_explosionFinished),
"$collision", $rt_wrapFunction3(kek_Main_collision), "$createSpooka", $rt_wrapFunction3(kek_Main_createSpooka)],
ket_InputTouchTeavmSystemBase, 0, jl_Object, [keb_SystemBase], 0, 3, 0, ket_InputTouchTeavmSystemBase_$callClinit, ["$init", $rt_wrapFunction0(keb_SystemBase_init), "$done", $rt_wrapFunction0(keb_SystemBase_done), "$update", $rt_wrapFunction0(keb_SystemBase_update), "$_init_27", $rt_wrapFunction2(ket_InputTouchTeavmSystemBase__init_), "$init0", $rt_wrapFunction1(ket_InputTouchTeavmSystemBase_init)]]);
$rt_metadata([otji_JSWrapper$Helper$_clinit_$lambda$_3_1, 0, jl_Object, [otji_JSWrapper$Helper$FinalizationRegistryConsumer], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_), "$accept", $rt_wrapFunction1(otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept)],
otcit_FloatAnalyzer$Result, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(otcit_FloatAnalyzer$Result__init_)],
otji_JSWrapper$Helper$_clinit_$lambda$_3_0, 0, jl_Object, [otji_JSWrapper$Helper$FinalizationRegistryConsumer], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_), "$accept", $rt_wrapFunction1(otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept)],
jl_InterruptedException, 0, jl_Exception, [], 0, 3, 0, 0, 0,
ket_OutputTeavmSystem, 0, kebs_AOutputSystem, [], 0, 3, 0, 0, ["$done", $rt_wrapFunction0(keb_SystemBase_done), "$init1", $rt_wrapFunction2(keb_SystemBaseOutputPart_init), "$onResize", $rt_wrapFunction2(keb_SystemBaseOutputPart_onResize), "$_init_25", $rt_wrapFunction1(ket_OutputTeavmSystem__init_0), "$_init_38", $rt_wrapFunction3(ket_OutputTeavmSystem__init_), "$init", $rt_wrapFunction0(ket_OutputTeavmSystem_init), "$width", $rt_wrapFunction0(ket_OutputTeavmSystem_width), "$height", $rt_wrapFunction0(ket_OutputTeavmSystem_height),
"$update", $rt_wrapFunction0(ket_OutputTeavmSystem_update)],
otcir_MethodInfo, 0, jl_Object, [], 0, 3, 0, 0, 0,
kebu_DoubleRange, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_31", $rt_wrapFunction2(kebu_DoubleRange__init_0), "$getMin", $rt_wrapFunction0(kebu_DoubleRange_getMin), "$getMax", $rt_wrapFunction0(kebu_DoubleRange_getMax), "$random0", $rt_wrapFunction0(kebu_DoubleRange_random), "$fit", $rt_wrapFunction1(kebu_DoubleRange_fit0)],
jl_Class, 0, jl_Object, [jlr_AnnotatedElement, jlr_Type], 4, 3, 0, 0, ["$getPlatformClass", $rt_wrapFunction0(jl_Class_getPlatformClass), "$isAssignableFrom", $rt_wrapFunction1(jl_Class_isAssignableFrom), "$getName", $rt_wrapFunction0(jl_Class_getName), "$getComponentType", $rt_wrapFunction0(jl_Class_getComponentType), "$cast", $rt_wrapFunction1(jl_Class_cast)],
jl_String$_clinit_$lambda$_115_0, 0, jl_Object, [ju_Comparator], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction0(jl_String$_clinit_$lambda$_115_0__init_)],
ju_HashMap$EntryIterator, 0, ju_HashMap$AbstractMapIterator, [ju_Iterator], 0, 0, 0, 0, ["$_init_13", $rt_wrapFunction1(ju_HashMap$EntryIterator__init_), "$next0", $rt_wrapFunction0(ju_HashMap$EntryIterator_next), "$next", $rt_wrapFunction0(ju_HashMap$EntryIterator_next0)],
ju_Collections, 0, jl_Object, [], 0, 3, 0, ju_Collections_$callClinit, 0]);
let $rt_charArrayCls = $rt_arraycls($rt_charcls),
$rt_shortArrayCls = $rt_arraycls($rt_shortcls),
$rt_longArrayCls = $rt_arraycls($rt_longcls);
$rt_stringPool(["Can\'t enter monitor from another thread synchronously", "spider", "pumpkin", "ghost", "bat", "cat", "main", "null", "rgba(255,255,0,", "0", "", "object", "function", "string", "number", "undefined", "wsadc", "a", "d", "e", "s", "w", "red", "orange", "min > max", " is not subtype of "]);
jl_String.prototype.toString = function() {
    return $rt_ustr(this);
};
jl_String.prototype.valueOf = jl_String.prototype.toString;
jl_Object.prototype.toString = function() {
    return $rt_ustr(jl_Object_toString(this));
};
jl_Object.prototype.__teavm_class__ = function() {
    return $dbg_class(this);
};
let $rt_export_main = $rt_mainStarter(kek_Main_main);
$rt_export_main.javaException = $rt_javaException;
let $rt_jso_marker = Symbol('jsoClass');
(() => {
    let c;
    c = ket_InputTouchTeavmSystemBase$init$lambda$_1_5.prototype;
    c.handleEvent = $rt_callWithReceiver(ket_InputTouchTeavmSystemBase$init$lambda$_1_5_handleEvent$exported$0);
    c = ket_InputTouchTeavmSystemBase$init$lambda$_1_4.prototype;
    c.handleEvent = $rt_callWithReceiver(ket_InputTouchTeavmSystemBase$init$lambda$_1_4_handleEvent$exported$0);
    c = ket_InputTouchTeavmSystemBase$init$lambda$_1_3.prototype;
    c.handleEvent = $rt_callWithReceiver(ket_InputTouchTeavmSystemBase$init$lambda$_1_3_handleEvent$exported$0);
    c = ket_InputTouchTeavmSystemBase$init$lambda$_1_2.prototype;
    c.handleEvent = $rt_callWithReceiver(ket_InputTouchTeavmSystemBase$init$lambda$_1_2_handleEvent$exported$0);
    c = ket_InputTouchTeavmSystemBase$init$lambda$_1_1.prototype;
    c.handleEvent = $rt_callWithReceiver(ket_InputTouchTeavmSystemBase$init$lambda$_1_1_handleEvent$exported$0);
    c = ket_InputTouchTeavmSystemBase$init$lambda$_1_0.prototype;
    c.handleEvent = $rt_callWithReceiver(ket_InputTouchTeavmSystemBase$init$lambda$_1_0_handleEvent$exported$0);
    c = ket_OutputTeavmSystem$1.prototype;
    c.handleEvent = $rt_callWithReceiver(ket_OutputTeavmSystem$1_handleEvent$exported$0);
    c = ket_InputKeysTeavmSystemBase$2.prototype;
    c.handleEvent = $rt_callWithReceiver(ket_InputKeysTeavmSystemBase$2_handleEvent$exported$0);
    c = ket_InputKeysTeavmSystemBase$1.prototype;
    c.handleEvent = $rt_callWithReceiver(ket_InputKeysTeavmSystemBase$1_handleEvent$exported$0);
    c = otji_JSWrapper$Helper$_clinit_$lambda$_3_1.prototype;
    c.accept = $rt_callWithReceiver(otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept$exported$0);
    c = otji_JSWrapper$Helper$_clinit_$lambda$_3_0.prototype;
    c.accept = $rt_callWithReceiver(otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept$exported$0);
})();
$rt_exports.main = $rt_export_main;
}));

//# sourceMappingURL=classes.js.map