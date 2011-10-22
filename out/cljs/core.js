goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____2372 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2372))
{return or__3548__auto____2372;
} else
{var or__3548__auto____2373 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2373))
{return or__3548__auto____2373;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2374 = coll;

if(cljs.core.truth_(and__3546__auto____2374))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2374;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2375 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2375))
{return or__3548__auto____2375;
} else
{var or__3548__auto____2376 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2376))
{return or__3548__auto____2376;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2377 = coll;

if(cljs.core.truth_(and__3546__auto____2377))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2377;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2378 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2378))
{return or__3548__auto____2378;
} else
{var or__3548__auto____2379 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2379))
{return or__3548__auto____2379;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2380 = coll;

if(cljs.core.truth_(and__3546__auto____2380))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2380;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2381 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2381))
{return or__3548__auto____2381;
} else
{var or__3548__auto____2382 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2382))
{return or__3548__auto____2382;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2389 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2383 = coll;

if(cljs.core.truth_(and__3546__auto____2383))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2383;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2384 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2384))
{return or__3548__auto____2384;
} else
{var or__3548__auto____2385 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2385))
{return or__3548__auto____2385;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2390 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2386 = coll;

if(cljs.core.truth_(and__3546__auto____2386))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2386;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2387 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2387))
{return or__3548__auto____2387;
} else
{var or__3548__auto____2388 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2388))
{return or__3548__auto____2388;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2389.call(this,coll,n);
case  3 :
return _nth__2390.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2392 = coll;

if(cljs.core.truth_(and__3546__auto____2392))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2392;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2393 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2393))
{return or__3548__auto____2393;
} else
{var or__3548__auto____2394 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2394))
{return or__3548__auto____2394;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2395 = coll;

if(cljs.core.truth_(and__3546__auto____2395))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2395;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2396 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2396))
{return or__3548__auto____2396;
} else
{var or__3548__auto____2397 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2397))
{return or__3548__auto____2397;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2404 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2398 = o;

if(cljs.core.truth_(and__3546__auto____2398))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2398;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2399 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2399))
{return or__3548__auto____2399;
} else
{var or__3548__auto____2400 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2400))
{return or__3548__auto____2400;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2405 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2401 = o;

if(cljs.core.truth_(and__3546__auto____2401))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2401;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2402 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2402))
{return or__3548__auto____2402;
} else
{var or__3548__auto____2403 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2403))
{return or__3548__auto____2403;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2404.call(this,o,k);
case  3 :
return _lookup__2405.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2407 = coll;

if(cljs.core.truth_(and__3546__auto____2407))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2407;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2408 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2408))
{return or__3548__auto____2408;
} else
{var or__3548__auto____2409 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2409))
{return or__3548__auto____2409;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2410 = coll;

if(cljs.core.truth_(and__3546__auto____2410))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2410;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2411 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2411))
{return or__3548__auto____2411;
} else
{var or__3548__auto____2412 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2412))
{return or__3548__auto____2412;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2413 = coll;

if(cljs.core.truth_(and__3546__auto____2413))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2413;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2414 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2414))
{return or__3548__auto____2414;
} else
{var or__3548__auto____2415 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2415))
{return or__3548__auto____2415;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2416 = coll;

if(cljs.core.truth_(and__3546__auto____2416))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2416;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2417 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2417))
{return or__3548__auto____2417;
} else
{var or__3548__auto____2418 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2418))
{return or__3548__auto____2418;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2419 = coll;

if(cljs.core.truth_(and__3546__auto____2419))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2419;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2420 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2420))
{return or__3548__auto____2420;
} else
{var or__3548__auto____2421 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2421))
{return or__3548__auto____2421;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2422 = coll;

if(cljs.core.truth_(and__3546__auto____2422))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2422;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2423 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2423))
{return or__3548__auto____2423;
} else
{var or__3548__auto____2424 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2424))
{return or__3548__auto____2424;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2425 = coll;

if(cljs.core.truth_(and__3546__auto____2425))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2425;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2426 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2426))
{return or__3548__auto____2426;
} else
{var or__3548__auto____2427 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2427))
{return or__3548__auto____2427;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2428 = o;

if(cljs.core.truth_(and__3546__auto____2428))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2428;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2429 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2429))
{return or__3548__auto____2429;
} else
{var or__3548__auto____2430 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2430))
{return or__3548__auto____2430;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2431 = o;

if(cljs.core.truth_(and__3546__auto____2431))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2431;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2432 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2432))
{return or__3548__auto____2432;
} else
{var or__3548__auto____2433 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2433))
{return or__3548__auto____2433;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2434 = o;

if(cljs.core.truth_(and__3546__auto____2434))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2434;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2435 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2435))
{return or__3548__auto____2435;
} else
{var or__3548__auto____2436 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2436))
{return or__3548__auto____2436;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2437 = o;

if(cljs.core.truth_(and__3546__auto____2437))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2437;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2438 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2438))
{return or__3548__auto____2438;
} else
{var or__3548__auto____2439 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2439))
{return or__3548__auto____2439;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2446 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2440 = coll;

if(cljs.core.truth_(and__3546__auto____2440))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2440;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2441 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2441))
{return or__3548__auto____2441;
} else
{var or__3548__auto____2442 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2442))
{return or__3548__auto____2442;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2447 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2443 = coll;

if(cljs.core.truth_(and__3546__auto____2443))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2443;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2444 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2444))
{return or__3548__auto____2444;
} else
{var or__3548__auto____2445 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2445))
{return or__3548__auto____2445;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2446.call(this,coll,f);
case  3 :
return _reduce__2447.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2449 = o;

if(cljs.core.truth_(and__3546__auto____2449))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2449;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2450 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2450))
{return or__3548__auto____2450;
} else
{var or__3548__auto____2451 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2451))
{return or__3548__auto____2451;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2452 = o;

if(cljs.core.truth_(and__3546__auto____2452))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2452;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2453 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2453))
{return or__3548__auto____2453;
} else
{var or__3548__auto____2454 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2454))
{return or__3548__auto____2454;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2455 = o;

if(cljs.core.truth_(and__3546__auto____2455))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2455;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2456 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2456))
{return or__3548__auto____2456;
} else
{var or__3548__auto____2457 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2457))
{return or__3548__auto____2457;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____2458 = o;

if(cljs.core.truth_(and__3546__auto____2458))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2458;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2459 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2459))
{return or__3548__auto____2459;
} else
{var or__3548__auto____2460 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2460))
{return or__3548__auto____2460;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2461 = d;

if(cljs.core.truth_(and__3546__auto____2461))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2461;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2462 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2462))
{return or__3548__auto____2462;
} else
{var or__3548__auto____2463 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2463))
{return or__3548__auto____2463;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2464 = this$;

if(cljs.core.truth_(and__3546__auto____2464))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2464;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2465 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2465))
{return or__3548__auto____2465;
} else
{var or__3548__auto____2466 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2466))
{return or__3548__auto____2466;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2467 = this$;

if(cljs.core.truth_(and__3546__auto____2467))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2467;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2468 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2468))
{return or__3548__auto____2468;
} else
{var or__3548__auto____2469 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2469))
{return or__3548__auto____2469;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2470 = this$;

if(cljs.core.truth_(and__3546__auto____2470))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2470;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2471 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2471))
{return or__3548__auto____2471;
} else
{var or__3548__auto____2472 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2472))
{return or__3548__auto____2472;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2473 = null;
var G__2473__2474 = (function (o,k){
return null;
});
var G__2473__2475 = (function (o,k,not_found){
return not_found;
});
G__2473 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2473__2474.call(this,o,k);
case  3 :
return G__2473__2475.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2473;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2477 = null;
var G__2477__2478 = (function (_,f){
return f.call(null);
});
var G__2477__2479 = (function (_,f,start){
return start;
});
G__2477 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2477__2478.call(this,_,f);
case  3 :
return G__2477__2479.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2477;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2481 = null;
var G__2481__2482 = (function (_,n){
return null;
});
var G__2481__2483 = (function (_,n,not_found){
return not_found;
});
G__2481 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2481__2482.call(this,_,n);
case  3 :
return G__2481__2483.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2481;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString(),other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2491 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2485 = cljs.core._nth.call(null,cicoll,0);
var n__2486 = 1;

while(true){
if(cljs.core.truth_((n__2486 < cljs.core._count.call(null,cicoll))))
{{
var G__2495 = f.call(null,val__2485,cljs.core._nth.call(null,cicoll,n__2486));
var G__2496 = (n__2486 + 1);
val__2485 = G__2495;
n__2486 = G__2496;
continue;
}
} else
{return val__2485;
}
break;
}
}
});
var ci_reduce__2492 = (function (cicoll,f,val){
var val__2487 = val;
var n__2488 = 0;

while(true){
if(cljs.core.truth_((n__2488 < cljs.core._count.call(null,cicoll))))
{{
var G__2497 = f.call(null,val__2487,cljs.core._nth.call(null,cicoll,n__2488));
var G__2498 = (n__2488 + 1);
val__2487 = G__2497;
n__2488 = G__2498;
continue;
}
} else
{return val__2487;
}
break;
}
});
var ci_reduce__2493 = (function (cicoll,f,val,idx){
var val__2489 = val;
var n__2490 = idx;

while(true){
if(cljs.core.truth_((n__2490 < cljs.core._count.call(null,cicoll))))
{{
var G__2499 = f.call(null,val__2489,cljs.core._nth.call(null,cicoll,n__2490));
var G__2500 = (n__2490 + 1);
val__2489 = G__2499;
n__2490 = G__2500;
continue;
}
} else
{return val__2489;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2491.call(this,cicoll,f);
case  3 :
return ci_reduce__2492.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2493.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2501 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2514 = null;
var G__2514__2515 = (function (coll,f){
var this__2502 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2502.a[this__2502.i]),(this__2502.i + 1));
});
var G__2514__2516 = (function (coll,f,start){
var this__2503 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2503.i);
});
G__2514 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2514__2515.call(this,coll,f);
case  3 :
return G__2514__2516.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2514;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2504 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2505 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2518 = null;
var G__2518__2519 = (function (coll,n){
var this__2506 = this;
var i__2507 = (n + this__2506.i);

if(cljs.core.truth_((i__2507 < this__2506.a.length)))
{return (this__2506.a[i__2507]);
} else
{return null;
}
});
var G__2518__2520 = (function (coll,n,not_found){
var this__2508 = this;
var i__2509 = (n + this__2508.i);

if(cljs.core.truth_((i__2509 < this__2508.a.length)))
{return (this__2508.a[i__2509]);
} else
{return not_found;
}
});
G__2518 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2518__2519.call(this,coll,n);
case  3 :
return G__2518__2520.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2518;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2510 = this;
return (this__2510.a.length - this__2510.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2511 = this;
return (this__2511.a[this__2511.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2512 = this;
if(cljs.core.truth_(((this__2512.i + 1) < this__2512.a.length)))
{return (new cljs.core.IndexedSeq(this__2512.a,(this__2512.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2513 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2522 = null;
var G__2522__2523 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2522__2524 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2522 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2522__2523.call(this,array,f);
case  3 :
return G__2522__2524.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2522;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2526 = null;
var G__2526__2527 = (function (array,k){
return (array[k]);
});
var G__2526__2528 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2526 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2526__2527.call(this,array,k);
case  3 :
return G__2526__2528.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2526;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2530 = null;
var G__2530__2531 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2530__2532 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2530 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2530__2531.call(this,array,n);
case  3 :
return G__2530__2532.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2530;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____2534 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2534))
{var s__2535 = temp__3698__auto____2534;

return cljs.core._first.call(null,s__2535);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2536 = cljs.core.next.call(null,s);
s = G__2536;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2537 = cljs.core.seq.call(null,x);
var n__2538 = 0;

while(true){
if(cljs.core.truth_(s__2537))
{{
var G__2539 = cljs.core.next.call(null,s__2537);
var G__2540 = (n__2538 + 1);
s__2537 = G__2539;
n__2538 = G__2540;
continue;
}
} else
{return n__2538;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2541 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2542 = (function() { 
var G__2544__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2545 = conj.call(null,coll,x);
var G__2546 = cljs.core.first.call(null,xs);
var G__2547 = cljs.core.next.call(null,xs);
coll = G__2545;
x = G__2546;
xs = G__2547;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2544 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2544__delegate.call(this, coll, x, xs);
};
G__2544.cljs$lang$maxFixedArity = 2;
G__2544.cljs$lang$applyTo = (function (arglist__2548){
var coll = cljs.core.first(arglist__2548);
var x = cljs.core.first(cljs.core.next(arglist__2548));
var xs = cljs.core.rest(cljs.core.next(arglist__2548));
return G__2544__delegate.call(this, coll, x, xs);
});
return G__2544;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2541.call(this,coll,x);
default:
return conj__2542.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2542.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2549 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2550 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2549.call(this,coll,n);
case  3 :
return nth__2550.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2552 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2553 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2552.call(this,o,k);
case  3 :
return get__2553.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2556 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2557 = (function() { 
var G__2559__delegate = function (coll,k,v,kvs){
while(true){
var ret__2555 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2560 = ret__2555;
var G__2561 = cljs.core.first.call(null,kvs);
var G__2562 = cljs.core.second.call(null,kvs);
var G__2563 = cljs.core.nnext.call(null,kvs);
coll = G__2560;
k = G__2561;
v = G__2562;
kvs = G__2563;
continue;
}
} else
{return ret__2555;
}
break;
}
};
var G__2559 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2559__delegate.call(this, coll, k, v, kvs);
};
G__2559.cljs$lang$maxFixedArity = 3;
G__2559.cljs$lang$applyTo = (function (arglist__2564){
var coll = cljs.core.first(arglist__2564);
var k = cljs.core.first(cljs.core.next(arglist__2564));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2564)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2564)));
return G__2559__delegate.call(this, coll, k, v, kvs);
});
return G__2559;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2556.call(this,coll,k,v);
default:
return assoc__2557.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2557.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2566 = (function (coll){
return coll;
});
var dissoc__2567 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2568 = (function() { 
var G__2570__delegate = function (coll,k,ks){
while(true){
var ret__2565 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2571 = ret__2565;
var G__2572 = cljs.core.first.call(null,ks);
var G__2573 = cljs.core.next.call(null,ks);
coll = G__2571;
k = G__2572;
ks = G__2573;
continue;
}
} else
{return ret__2565;
}
break;
}
};
var G__2570 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2570__delegate.call(this, coll, k, ks);
};
G__2570.cljs$lang$maxFixedArity = 2;
G__2570.cljs$lang$applyTo = (function (arglist__2574){
var coll = cljs.core.first(arglist__2574);
var k = cljs.core.first(cljs.core.next(arglist__2574));
var ks = cljs.core.rest(cljs.core.next(arglist__2574));
return G__2570__delegate.call(this, coll, k, ks);
});
return G__2570;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2566.call(this,coll);
case  2 :
return dissoc__2567.call(this,coll,k);
default:
return dissoc__2568.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2568.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__314__auto____2575 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2576 = x__314__auto____2575;

if(cljs.core.truth_(and__3546__auto____2576))
{var and__3546__auto____2577 = x__314__auto____2575.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2577))
{return cljs.core.not.call(null,x__314__auto____2575.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____2577;
}
} else
{return and__3546__auto____2576;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__314__auto____2575);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2579 = (function (coll){
return coll;
});
var disj__2580 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2581 = (function() { 
var G__2583__delegate = function (coll,k,ks){
while(true){
var ret__2578 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2584 = ret__2578;
var G__2585 = cljs.core.first.call(null,ks);
var G__2586 = cljs.core.next.call(null,ks);
coll = G__2584;
k = G__2585;
ks = G__2586;
continue;
}
} else
{return ret__2578;
}
break;
}
};
var G__2583 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2583__delegate.call(this, coll, k, ks);
};
G__2583.cljs$lang$maxFixedArity = 2;
G__2583.cljs$lang$applyTo = (function (arglist__2587){
var coll = cljs.core.first(arglist__2587);
var k = cljs.core.first(cljs.core.next(arglist__2587));
var ks = cljs.core.rest(cljs.core.next(arglist__2587));
return G__2583__delegate.call(this, coll, k, ks);
});
return G__2583;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2579.call(this,coll);
case  2 :
return disj__2580.call(this,coll,k);
default:
return disj__2581.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2581.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__314__auto____2588 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2589 = x__314__auto____2588;

if(cljs.core.truth_(and__3546__auto____2589))
{var and__3546__auto____2590 = x__314__auto____2588.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2590))
{return cljs.core.not.call(null,x__314__auto____2588.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____2590;
}
} else
{return and__3546__auto____2589;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__314__auto____2588);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__314__auto____2591 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2592 = x__314__auto____2591;

if(cljs.core.truth_(and__3546__auto____2592))
{var and__3546__auto____2593 = x__314__auto____2591.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2593))
{return cljs.core.not.call(null,x__314__auto____2591.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____2593;
}
} else
{return and__3546__auto____2592;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__314__auto____2591);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__314__auto____2594 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2595 = x__314__auto____2594;

if(cljs.core.truth_(and__3546__auto____2595))
{var and__3546__auto____2596 = x__314__auto____2594.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2596))
{return cljs.core.not.call(null,x__314__auto____2594.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____2596;
}
} else
{return and__3546__auto____2595;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__314__auto____2594);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__314__auto____2597 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2598 = x__314__auto____2597;

if(cljs.core.truth_(and__3546__auto____2598))
{var and__3546__auto____2599 = x__314__auto____2597.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2599))
{return cljs.core.not.call(null,x__314__auto____2597.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____2599;
}
} else
{return and__3546__auto____2598;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__314__auto____2597);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__314__auto____2600 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2601 = x__314__auto____2600;

if(cljs.core.truth_(and__3546__auto____2601))
{var and__3546__auto____2602 = x__314__auto____2600.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2602))
{return cljs.core.not.call(null,x__314__auto____2600.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____2602;
}
} else
{return and__3546__auto____2601;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__314__auto____2600);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__314__auto____2603 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2604 = x__314__auto____2603;

if(cljs.core.truth_(and__3546__auto____2604))
{var and__3546__auto____2605 = x__314__auto____2603.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2605))
{return cljs.core.not.call(null,x__314__auto____2603.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____2605;
}
} else
{return and__3546__auto____2604;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__314__auto____2603);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__314__auto____2606 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2607 = x__314__auto____2606;

if(cljs.core.truth_(and__3546__auto____2607))
{var and__3546__auto____2608 = x__314__auto____2606.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2608))
{return cljs.core.not.call(null,x__314__auto____2606.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____2608;
}
} else
{return and__3546__auto____2607;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__314__auto____2606);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2609 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2609.push(key);
}));
return keys__2609;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__314__auto____2610 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2611 = x__314__auto____2610;

if(cljs.core.truth_(and__3546__auto____2611))
{var and__3546__auto____2612 = x__314__auto____2610.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2612))
{return cljs.core.not.call(null,x__314__auto____2610.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____2612;
}
} else
{return and__3546__auto____2611;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__314__auto____2610);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____2613 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2613))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2614 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2614))
{return or__3548__auto____2614;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2613;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2615 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2615))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2615;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2616 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2616))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2616;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____2617 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2617))
{return (n == n.toFixed());
} else
{return and__3546__auto____2617;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2618 = coll;

if(cljs.core.truth_(and__3546__auto____2618))
{var and__3546__auto____2619 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2619))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2619;
}
} else
{return and__3546__auto____2618;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2624 = (function (x){
return true;
});
var distinct_QMARK___2625 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2626 = (function() { 
var G__2628__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2620 = cljs.core.set([y,x]);
var xs__2621 = more;

while(true){
var x__2622 = cljs.core.first.call(null,xs__2621);
var etc__2623 = cljs.core.next.call(null,xs__2621);

if(cljs.core.truth_(xs__2621))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2620,x__2622)))
{return false;
} else
{{
var G__2629 = cljs.core.conj.call(null,s__2620,x__2622);
var G__2630 = etc__2623;
s__2620 = G__2629;
xs__2621 = G__2630;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2628 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2628__delegate.call(this, x, y, more);
};
G__2628.cljs$lang$maxFixedArity = 2;
G__2628.cljs$lang$applyTo = (function (arglist__2631){
var x = cljs.core.first(arglist__2631);
var y = cljs.core.first(cljs.core.next(arglist__2631));
var more = cljs.core.rest(cljs.core.next(arglist__2631));
return G__2628__delegate.call(this, x, y, more);
});
return G__2628;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2624.call(this,x);
case  2 :
return distinct_QMARK___2625.call(this,x,y);
default:
return distinct_QMARK___2626.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2626.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2632 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2632)))
{return r__2632;
} else
{if(cljs.core.truth_(r__2632))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2634 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2635 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2633 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2633,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2633);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2634.call(this,comp);
case  2 :
return sort__2635.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2637 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2638 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2637.call(this,keyfn,comp);
case  3 :
return sort_by__2638.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2640 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2641 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2640.call(this,f,val);
case  3 :
return reduce__2641.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2647 = (function (f,coll){
var temp__3695__auto____2643 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2643))
{var s__2644 = temp__3695__auto____2643;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2644),cljs.core.next.call(null,s__2644));
} else
{return f.call(null);
}
});
var seq_reduce__2648 = (function (f,val,coll){
var val__2645 = val;
var coll__2646 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2646))
{{
var G__2650 = f.call(null,val__2645,cljs.core.first.call(null,coll__2646));
var G__2651 = cljs.core.next.call(null,coll__2646);
val__2645 = G__2650;
coll__2646 = G__2651;
continue;
}
} else
{return val__2645;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2647.call(this,f,val);
case  3 :
return seq_reduce__2648.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2652 = null;
var G__2652__2653 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2652__2654 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2652 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2652__2653.call(this,coll,f);
case  3 :
return G__2652__2654.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2652;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2656 = (function (){
return 0;
});
var _PLUS___2657 = (function (x){
return x;
});
var _PLUS___2658 = (function (x,y){
return (x + y);
});
var _PLUS___2659 = (function() { 
var G__2661__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2661 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2661__delegate.call(this, x, y, more);
};
G__2661.cljs$lang$maxFixedArity = 2;
G__2661.cljs$lang$applyTo = (function (arglist__2662){
var x = cljs.core.first(arglist__2662);
var y = cljs.core.first(cljs.core.next(arglist__2662));
var more = cljs.core.rest(cljs.core.next(arglist__2662));
return G__2661__delegate.call(this, x, y, more);
});
return G__2661;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2656.call(this);
case  1 :
return _PLUS___2657.call(this,x);
case  2 :
return _PLUS___2658.call(this,x,y);
default:
return _PLUS___2659.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2659.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2663 = (function (x){
return (- x);
});
var ___2664 = (function (x,y){
return (x - y);
});
var ___2665 = (function() { 
var G__2667__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2667 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2667__delegate.call(this, x, y, more);
};
G__2667.cljs$lang$maxFixedArity = 2;
G__2667.cljs$lang$applyTo = (function (arglist__2668){
var x = cljs.core.first(arglist__2668);
var y = cljs.core.first(cljs.core.next(arglist__2668));
var more = cljs.core.rest(cljs.core.next(arglist__2668));
return G__2667__delegate.call(this, x, y, more);
});
return G__2667;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2663.call(this,x);
case  2 :
return ___2664.call(this,x,y);
default:
return ___2665.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2665.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2669 = (function (){
return 1;
});
var _STAR___2670 = (function (x){
return x;
});
var _STAR___2671 = (function (x,y){
return (x * y);
});
var _STAR___2672 = (function() { 
var G__2674__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2674 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2674__delegate.call(this, x, y, more);
};
G__2674.cljs$lang$maxFixedArity = 2;
G__2674.cljs$lang$applyTo = (function (arglist__2675){
var x = cljs.core.first(arglist__2675);
var y = cljs.core.first(cljs.core.next(arglist__2675));
var more = cljs.core.rest(cljs.core.next(arglist__2675));
return G__2674__delegate.call(this, x, y, more);
});
return G__2674;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2669.call(this);
case  1 :
return _STAR___2670.call(this,x);
case  2 :
return _STAR___2671.call(this,x,y);
default:
return _STAR___2672.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2672.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2676 = (function (x){
return (1 / x);
});
var _SLASH___2677 = (function (x,y){
return (x / y);
});
var _SLASH___2678 = (function() { 
var G__2680__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2680 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2680__delegate.call(this, x, y, more);
};
G__2680.cljs$lang$maxFixedArity = 2;
G__2680.cljs$lang$applyTo = (function (arglist__2681){
var x = cljs.core.first(arglist__2681);
var y = cljs.core.first(cljs.core.next(arglist__2681));
var more = cljs.core.rest(cljs.core.next(arglist__2681));
return G__2680__delegate.call(this, x, y, more);
});
return G__2680;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2676.call(this,x);
case  2 :
return _SLASH___2677.call(this,x,y);
default:
return _SLASH___2678.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2678.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2682 = (function (x){
return true;
});
var _LT___2683 = (function (x,y){
return (x < y);
});
var _LT___2684 = (function() { 
var G__2686__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2687 = y;
var G__2688 = cljs.core.first.call(null,more);
var G__2689 = cljs.core.next.call(null,more);
x = G__2687;
y = G__2688;
more = G__2689;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2686 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2686__delegate.call(this, x, y, more);
};
G__2686.cljs$lang$maxFixedArity = 2;
G__2686.cljs$lang$applyTo = (function (arglist__2690){
var x = cljs.core.first(arglist__2690);
var y = cljs.core.first(cljs.core.next(arglist__2690));
var more = cljs.core.rest(cljs.core.next(arglist__2690));
return G__2686__delegate.call(this, x, y, more);
});
return G__2686;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2682.call(this,x);
case  2 :
return _LT___2683.call(this,x,y);
default:
return _LT___2684.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2684.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2691 = (function (x){
return true;
});
var _LT__EQ___2692 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2693 = (function() { 
var G__2695__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2696 = y;
var G__2697 = cljs.core.first.call(null,more);
var G__2698 = cljs.core.next.call(null,more);
x = G__2696;
y = G__2697;
more = G__2698;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2695 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2695__delegate.call(this, x, y, more);
};
G__2695.cljs$lang$maxFixedArity = 2;
G__2695.cljs$lang$applyTo = (function (arglist__2699){
var x = cljs.core.first(arglist__2699);
var y = cljs.core.first(cljs.core.next(arglist__2699));
var more = cljs.core.rest(cljs.core.next(arglist__2699));
return G__2695__delegate.call(this, x, y, more);
});
return G__2695;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2691.call(this,x);
case  2 :
return _LT__EQ___2692.call(this,x,y);
default:
return _LT__EQ___2693.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2693.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2700 = (function (x){
return true;
});
var _GT___2701 = (function (x,y){
return (x > y);
});
var _GT___2702 = (function() { 
var G__2704__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2705 = y;
var G__2706 = cljs.core.first.call(null,more);
var G__2707 = cljs.core.next.call(null,more);
x = G__2705;
y = G__2706;
more = G__2707;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2704 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2704__delegate.call(this, x, y, more);
};
G__2704.cljs$lang$maxFixedArity = 2;
G__2704.cljs$lang$applyTo = (function (arglist__2708){
var x = cljs.core.first(arglist__2708);
var y = cljs.core.first(cljs.core.next(arglist__2708));
var more = cljs.core.rest(cljs.core.next(arglist__2708));
return G__2704__delegate.call(this, x, y, more);
});
return G__2704;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2700.call(this,x);
case  2 :
return _GT___2701.call(this,x,y);
default:
return _GT___2702.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2702.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2709 = (function (x){
return true;
});
var _GT__EQ___2710 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2711 = (function() { 
var G__2713__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2714 = y;
var G__2715 = cljs.core.first.call(null,more);
var G__2716 = cljs.core.next.call(null,more);
x = G__2714;
y = G__2715;
more = G__2716;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2713 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2713__delegate.call(this, x, y, more);
};
G__2713.cljs$lang$maxFixedArity = 2;
G__2713.cljs$lang$applyTo = (function (arglist__2717){
var x = cljs.core.first(arglist__2717);
var y = cljs.core.first(cljs.core.next(arglist__2717));
var more = cljs.core.rest(cljs.core.next(arglist__2717));
return G__2713__delegate.call(this, x, y, more);
});
return G__2713;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2709.call(this,x);
case  2 :
return _GT__EQ___2710.call(this,x,y);
default:
return _GT__EQ___2711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2711.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2718 = (function (x){
return x;
});
var max__2719 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2720 = (function() { 
var G__2722__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2722 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2722__delegate.call(this, x, y, more);
};
G__2722.cljs$lang$maxFixedArity = 2;
G__2722.cljs$lang$applyTo = (function (arglist__2723){
var x = cljs.core.first(arglist__2723);
var y = cljs.core.first(cljs.core.next(arglist__2723));
var more = cljs.core.rest(cljs.core.next(arglist__2723));
return G__2722__delegate.call(this, x, y, more);
});
return G__2722;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2718.call(this,x);
case  2 :
return max__2719.call(this,x,y);
default:
return max__2720.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2720.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2724 = (function (x){
return x;
});
var min__2725 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2726 = (function() { 
var G__2728__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2728 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2728__delegate.call(this, x, y, more);
};
G__2728.cljs$lang$maxFixedArity = 2;
G__2728.cljs$lang$applyTo = (function (arglist__2729){
var x = cljs.core.first(arglist__2729);
var y = cljs.core.first(cljs.core.next(arglist__2729));
var more = cljs.core.rest(cljs.core.next(arglist__2729));
return G__2728__delegate.call(this, x, y, more);
});
return G__2728;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2724.call(this,x);
case  2 :
return min__2725.call(this,x,y);
default:
return min__2726.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2726.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2730 = (n % d);

return cljs.core.fix.call(null,((n - rem__2730) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2731 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2731));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2732 = (function (){
return Math.random.call(null);
});
var rand__2733 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2732.call(this);
case  1 :
return rand__2733.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2735 = (function (x){
return true;
});
var _EQ__EQ___2736 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2737 = (function() { 
var G__2739__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2740 = y;
var G__2741 = cljs.core.first.call(null,more);
var G__2742 = cljs.core.next.call(null,more);
x = G__2740;
y = G__2741;
more = G__2742;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2739 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2739__delegate.call(this, x, y, more);
};
G__2739.cljs$lang$maxFixedArity = 2;
G__2739.cljs$lang$applyTo = (function (arglist__2743){
var x = cljs.core.first(arglist__2743);
var y = cljs.core.first(cljs.core.next(arglist__2743));
var more = cljs.core.rest(cljs.core.next(arglist__2743));
return G__2739__delegate.call(this, x, y, more);
});
return G__2739;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2735.call(this,x);
case  2 :
return _EQ__EQ___2736.call(this,x,y);
default:
return _EQ__EQ___2737.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2737.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2744 = n;
var xs__2745 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2746 = xs__2745;

if(cljs.core.truth_(and__3546__auto____2746))
{return (n__2744 > 0);
} else
{return and__3546__auto____2746;
}
})()))
{{
var G__2747 = (n__2744 - 1);
var G__2748 = cljs.core.next.call(null,xs__2745);
n__2744 = G__2747;
xs__2745 = G__2748;
continue;
}
} else
{return xs__2745;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2753 = null;
var G__2753__2754 = (function (coll,n){
var temp__3695__auto____2749 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2749))
{var xs__2750 = temp__3695__auto____2749;

return cljs.core.first.call(null,xs__2750);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2753__2755 = (function (coll,n,not_found){
var temp__3695__auto____2751 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2751))
{var xs__2752 = temp__3695__auto____2751;

return cljs.core.first.call(null,xs__2752);
} else
{return not_found;
}
});
G__2753 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2753__2754.call(this,coll,n);
case  3 :
return G__2753__2755.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2753;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___2757 = (function (){
return "";
});
var str_STAR___2758 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2759 = (function() { 
var G__2761__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2762 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__2763 = cljs.core.next.call(null,more);
sb = G__2762;
more = G__2763;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__2761 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2761__delegate.call(this, x, ys);
};
G__2761.cljs$lang$maxFixedArity = 1;
G__2761.cljs$lang$applyTo = (function (arglist__2764){
var x = cljs.core.first(arglist__2764);
var ys = cljs.core.rest(arglist__2764);
return G__2761__delegate.call(this, x, ys);
});
return G__2761;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___2757.call(this);
case  1 :
return str_STAR___2758.call(this,x);
default:
return str_STAR___2759.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2759.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2765 = (function (){
return "";
});
var str__2766 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2767 = (function() { 
var G__2769__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__2769 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2769__delegate.call(this, x, ys);
};
G__2769.cljs$lang$maxFixedArity = 1;
G__2769.cljs$lang$applyTo = (function (arglist__2770){
var x = cljs.core.first(arglist__2770);
var ys = cljs.core.rest(arglist__2770);
return G__2769__delegate.call(this, x, ys);
});
return G__2769;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2765.call(this);
case  1 :
return str__2766.call(this,x);
default:
return str__2767.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2767.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2771 = (function (s,start){
return s.substring(start);
});
var subs__2772 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2771.call(this,s,start);
case  3 :
return subs__2772.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2774 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__2775 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2774.call(this,ns);
case  2 :
return symbol__2775.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2777 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2778 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2777.call(this,ns);
case  2 :
return keyword__2778.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2780 = cljs.core.seq.call(null,x);
var ys__2781 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2780)))
{return cljs.core.nil_QMARK_.call(null,ys__2781);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2781)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2780),cljs.core.first.call(null,ys__2781))))
{{
var G__2782 = cljs.core.next.call(null,xs__2780);
var G__2783 = cljs.core.next.call(null,ys__2781);
xs__2780 = G__2782;
ys__2781 = G__2783;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2784_SHARP_,p2__2785_SHARP_){
return cljs.core.hash_combine.call(null,p1__2784_SHARP_,cljs.core.hash.call(null,p2__2785_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__2786__2787 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__2786__2787))
{var G__2789__2791 = cljs.core.first.call(null,G__2786__2787);
var vec__2790__2792 = G__2789__2791;
var key_name__2793 = cljs.core.nth.call(null,vec__2790__2792,0,null);
var f__2794 = cljs.core.nth.call(null,vec__2790__2792,1,null);
var G__2786__2795 = G__2786__2787;

var G__2789__2796 = G__2789__2791;
var G__2786__2797 = G__2786__2795;

while(true){
var vec__2798__2799 = G__2789__2796;
var key_name__2800 = cljs.core.nth.call(null,vec__2798__2799,0,null);
var f__2801 = cljs.core.nth.call(null,vec__2798__2799,1,null);
var G__2786__2802 = G__2786__2797;

var str_name__2803 = cljs.core.name.call(null,key_name__2800);

obj[str_name__2803] = f__2801;
var temp__3698__auto____2804 = cljs.core.next.call(null,G__2786__2802);

if(cljs.core.truth_(temp__3698__auto____2804))
{var G__2786__2805 = temp__3698__auto____2804;

{
var G__2806 = cljs.core.first.call(null,G__2786__2805);
var G__2807 = G__2786__2805;
G__2789__2796 = G__2806;
G__2786__2797 = G__2807;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2808 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2809 = this;
return (new cljs.core.List(this__2809.meta,o,coll,(this__2809.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2810 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2811 = this;
return this__2811.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2812 = this;
return this__2812.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2813 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2814 = this;
return this__2814.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2815 = this;
return this__2815.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2816 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2817 = this;
return (new cljs.core.List(meta,this__2817.first,this__2817.rest,this__2817.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2818 = this;
return this__2818.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2819 = this;
return cljs.core.List.EMPTY;
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2820 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2821 = this;
return (new cljs.core.List(this__2821.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2822 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2823 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2824 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2825 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2826 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2827 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2828 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2829 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2830 = this;
return this__2830.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2831 = this;
return coll;
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2832){
var items = cljs.core.seq( arglist__2832 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2833 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2834 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2835 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2836 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2836.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2837 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2838 = this;
return this__2838.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2839 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2839.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2839.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2840 = this;
return this__2840.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2841 = this;
return (new cljs.core.Cons(meta,this__2841.first,this__2841.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2842 = null;
var G__2842__2843 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2842__2844 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2842 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2842__2843.call(this,string,f);
case  3 :
return G__2842__2844.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2842;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2846 = null;
var G__2846__2847 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2846__2848 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2846 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2846__2847.call(this,string,k);
case  3 :
return G__2846__2848.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2846;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2850 = null;
var G__2850__2851 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2850__2852 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2850 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2850__2851.call(this,string,n);
case  3 :
return G__2850__2852.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2850;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__2854 = null;
var G__2854__2855 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2854__2856 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2854 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2854__2855.call(this,_,coll);
case  3 :
return G__2854__2856.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2854;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2858 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2858;
} else
{lazy_seq.x = x__2858.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2859 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2860 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2861 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2862 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2862.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2863 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2864 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2865 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2866 = this;
return this__2866.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2867 = this;
return (new cljs.core.LazySeq(meta,this__2867.realized,this__2867.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2868 = cljs.core.array.call(null);

var s__2869 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2869)))
{ary__2868.push(cljs.core.first.call(null,s__2869));
{
var G__2870 = cljs.core.next.call(null,s__2869);
s__2869 = G__2870;
continue;
}
} else
{return ary__2868;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2871 = s;
var i__2872 = n;
var sum__2873 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2874 = (i__2872 > 0);

if(cljs.core.truth_(and__3546__auto____2874))
{return cljs.core.seq.call(null,s__2871);
} else
{return and__3546__auto____2874;
}
})()))
{{
var G__2875 = cljs.core.next.call(null,s__2871);
var G__2876 = (i__2872 - 1);
var G__2877 = (sum__2873 + 1);
s__2871 = G__2875;
i__2872 = G__2876;
sum__2873 = G__2877;
continue;
}
} else
{return sum__2873;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2881 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2882 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2883 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2878 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2878))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2878),concat.call(null,cljs.core.rest.call(null,s__2878),y));
} else
{return y;
}
})));
});
var concat__2884 = (function() { 
var G__2886__delegate = function (x,y,zs){
var cat__2880 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2879 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2879))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2879),cat.call(null,cljs.core.rest.call(null,xys__2879),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2880.call(null,concat.call(null,x,y),zs);
};
var G__2886 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2886__delegate.call(this, x, y, zs);
};
G__2886.cljs$lang$maxFixedArity = 2;
G__2886.cljs$lang$applyTo = (function (arglist__2887){
var x = cljs.core.first(arglist__2887);
var y = cljs.core.first(cljs.core.next(arglist__2887));
var zs = cljs.core.rest(cljs.core.next(arglist__2887));
return G__2886__delegate.call(this, x, y, zs);
});
return G__2886;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2881.call(this);
case  1 :
return concat__2882.call(this,x);
case  2 :
return concat__2883.call(this,x,y);
default:
return concat__2884.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2884.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2888 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2889 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2890 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2891 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2892 = (function() { 
var G__2894__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2894 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2894__delegate.call(this, a, b, c, d, more);
};
G__2894.cljs$lang$maxFixedArity = 4;
G__2894.cljs$lang$applyTo = (function (arglist__2895){
var a = cljs.core.first(arglist__2895);
var b = cljs.core.first(cljs.core.next(arglist__2895));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2895)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2895))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2895))));
return G__2894__delegate.call(this, a, b, c, d, more);
});
return G__2894;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2888.call(this,a);
case  2 :
return list_STAR___2889.call(this,a,b);
case  3 :
return list_STAR___2890.call(this,a,b,c);
case  4 :
return list_STAR___2891.call(this,a,b,c,d);
default:
return list_STAR___2892.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2892.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2905 = (function (f,args){
var fixed_arity__2896 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__2896 + 1)) <= fixed_arity__2896)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2906 = (function (f,x,args){
var arglist__2897 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2898 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2897,fixed_arity__2898) <= fixed_arity__2898)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2897));
} else
{return f.cljs$lang$applyTo(arglist__2897);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2897));
}
});
var apply__2907 = (function (f,x,y,args){
var arglist__2899 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2900 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2899,fixed_arity__2900) <= fixed_arity__2900)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2899));
} else
{return f.cljs$lang$applyTo(arglist__2899);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2899));
}
});
var apply__2908 = (function (f,x,y,z,args){
var arglist__2901 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2902 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2901,fixed_arity__2902) <= fixed_arity__2902)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2901));
} else
{return f.cljs$lang$applyTo(arglist__2901);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2901));
}
});
var apply__2909 = (function() { 
var G__2911__delegate = function (f,a,b,c,d,args){
var arglist__2903 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2904 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2903,fixed_arity__2904) <= fixed_arity__2904)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2903));
} else
{return f.cljs$lang$applyTo(arglist__2903);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2903));
}
};
var G__2911 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2911__delegate.call(this, f, a, b, c, d, args);
};
G__2911.cljs$lang$maxFixedArity = 5;
G__2911.cljs$lang$applyTo = (function (arglist__2912){
var f = cljs.core.first(arglist__2912);
var a = cljs.core.first(cljs.core.next(arglist__2912));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2912)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2912))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2912)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2912)))));
return G__2911__delegate.call(this, f, a, b, c, d, args);
});
return G__2911;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2905.call(this,f,a);
case  3 :
return apply__2906.call(this,f,a,b);
case  4 :
return apply__2907.call(this,f,a,b,c);
case  5 :
return apply__2908.call(this,f,a,b,c,d);
default:
return apply__2909.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2909.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2913){
var obj = cljs.core.first(arglist__2913);
var f = cljs.core.first(cljs.core.next(arglist__2913));
var args = cljs.core.rest(cljs.core.next(arglist__2913));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2914 = (function (x){
return false;
});
var not_EQ___2915 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2916 = (function() { 
var G__2918__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2918 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2918__delegate.call(this, x, y, more);
};
G__2918.cljs$lang$maxFixedArity = 2;
G__2918.cljs$lang$applyTo = (function (arglist__2919){
var x = cljs.core.first(arglist__2919);
var y = cljs.core.first(cljs.core.next(arglist__2919));
var more = cljs.core.rest(cljs.core.next(arglist__2919));
return G__2918__delegate.call(this, x, y, more);
});
return G__2918;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2914.call(this,x);
case  2 :
return not_EQ___2915.call(this,x,y);
default:
return not_EQ___2916.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2916.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2920 = pred;
var G__2921 = cljs.core.next.call(null,coll);
pred = G__2920;
coll = G__2921;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____2922 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____2922))
{return or__3548__auto____2922;
} else
{{
var G__2923 = pred;
var G__2924 = cljs.core.next.call(null,coll);
pred = G__2923;
coll = G__2924;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2925 = null;
var G__2925__2926 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2925__2927 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2925__2928 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2925__2929 = (function() { 
var G__2931__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2931 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2931__delegate.call(this, x, y, zs);
};
G__2931.cljs$lang$maxFixedArity = 2;
G__2931.cljs$lang$applyTo = (function (arglist__2932){
var x = cljs.core.first(arglist__2932);
var y = cljs.core.first(cljs.core.next(arglist__2932));
var zs = cljs.core.rest(cljs.core.next(arglist__2932));
return G__2931__delegate.call(this, x, y, zs);
});
return G__2931;
})()
;
G__2925 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2925__2926.call(this);
case  1 :
return G__2925__2927.call(this,x);
case  2 :
return G__2925__2928.call(this,x,y);
default:
return G__2925__2929.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2925.cljs$lang$maxFixedArity = 2;
G__2925.cljs$lang$applyTo = G__2925__2929.cljs$lang$applyTo;
return G__2925;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2933__delegate = function (args){
return x;
};
var G__2933 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2933__delegate.call(this, args);
};
G__2933.cljs$lang$maxFixedArity = 0;
G__2933.cljs$lang$applyTo = (function (arglist__2934){
var args = cljs.core.seq( arglist__2934 );;
return G__2933__delegate.call(this, args);
});
return G__2933;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2938 = (function (){
return cljs.core.identity;
});
var comp__2939 = (function (f){
return f;
});
var comp__2940 = (function (f,g){
return (function() {
var G__2944 = null;
var G__2944__2945 = (function (){
return f.call(null,g.call(null));
});
var G__2944__2946 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2944__2947 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2944__2948 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2944__2949 = (function() { 
var G__2951__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2951 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2951__delegate.call(this, x, y, z, args);
};
G__2951.cljs$lang$maxFixedArity = 3;
G__2951.cljs$lang$applyTo = (function (arglist__2952){
var x = cljs.core.first(arglist__2952);
var y = cljs.core.first(cljs.core.next(arglist__2952));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2952)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2952)));
return G__2951__delegate.call(this, x, y, z, args);
});
return G__2951;
})()
;
G__2944 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2944__2945.call(this);
case  1 :
return G__2944__2946.call(this,x);
case  2 :
return G__2944__2947.call(this,x,y);
case  3 :
return G__2944__2948.call(this,x,y,z);
default:
return G__2944__2949.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2944.cljs$lang$maxFixedArity = 3;
G__2944.cljs$lang$applyTo = G__2944__2949.cljs$lang$applyTo;
return G__2944;
})()
});
var comp__2941 = (function (f,g,h){
return (function() {
var G__2953 = null;
var G__2953__2954 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2953__2955 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2953__2956 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2953__2957 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2953__2958 = (function() { 
var G__2960__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2960 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2960__delegate.call(this, x, y, z, args);
};
G__2960.cljs$lang$maxFixedArity = 3;
G__2960.cljs$lang$applyTo = (function (arglist__2961){
var x = cljs.core.first(arglist__2961);
var y = cljs.core.first(cljs.core.next(arglist__2961));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2961)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2961)));
return G__2960__delegate.call(this, x, y, z, args);
});
return G__2960;
})()
;
G__2953 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2953__2954.call(this);
case  1 :
return G__2953__2955.call(this,x);
case  2 :
return G__2953__2956.call(this,x,y);
case  3 :
return G__2953__2957.call(this,x,y,z);
default:
return G__2953__2958.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2953.cljs$lang$maxFixedArity = 3;
G__2953.cljs$lang$applyTo = G__2953__2958.cljs$lang$applyTo;
return G__2953;
})()
});
var comp__2942 = (function() { 
var G__2962__delegate = function (f1,f2,f3,fs){
var fs__2935 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2963__delegate = function (args){
var ret__2936 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2935),args);
var fs__2937 = cljs.core.next.call(null,fs__2935);

while(true){
if(cljs.core.truth_(fs__2937))
{{
var G__2964 = cljs.core.first.call(null,fs__2937).call(null,ret__2936);
var G__2965 = cljs.core.next.call(null,fs__2937);
ret__2936 = G__2964;
fs__2937 = G__2965;
continue;
}
} else
{return ret__2936;
}
break;
}
};
var G__2963 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2963__delegate.call(this, args);
};
G__2963.cljs$lang$maxFixedArity = 0;
G__2963.cljs$lang$applyTo = (function (arglist__2966){
var args = cljs.core.seq( arglist__2966 );;
return G__2963__delegate.call(this, args);
});
return G__2963;
})()
;
};
var G__2962 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2962__delegate.call(this, f1, f2, f3, fs);
};
G__2962.cljs$lang$maxFixedArity = 3;
G__2962.cljs$lang$applyTo = (function (arglist__2967){
var f1 = cljs.core.first(arglist__2967);
var f2 = cljs.core.first(cljs.core.next(arglist__2967));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2967)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2967)));
return G__2962__delegate.call(this, f1, f2, f3, fs);
});
return G__2962;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2938.call(this);
case  1 :
return comp__2939.call(this,f1);
case  2 :
return comp__2940.call(this,f1,f2);
case  3 :
return comp__2941.call(this,f1,f2,f3);
default:
return comp__2942.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2942.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2968 = (function (f,arg1){
return (function() { 
var G__2973__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2973 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2973__delegate.call(this, args);
};
G__2973.cljs$lang$maxFixedArity = 0;
G__2973.cljs$lang$applyTo = (function (arglist__2974){
var args = cljs.core.seq( arglist__2974 );;
return G__2973__delegate.call(this, args);
});
return G__2973;
})()
;
});
var partial__2969 = (function (f,arg1,arg2){
return (function() { 
var G__2975__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2975 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2975__delegate.call(this, args);
};
G__2975.cljs$lang$maxFixedArity = 0;
G__2975.cljs$lang$applyTo = (function (arglist__2976){
var args = cljs.core.seq( arglist__2976 );;
return G__2975__delegate.call(this, args);
});
return G__2975;
})()
;
});
var partial__2970 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2977__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2977 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2977__delegate.call(this, args);
};
G__2977.cljs$lang$maxFixedArity = 0;
G__2977.cljs$lang$applyTo = (function (arglist__2978){
var args = cljs.core.seq( arglist__2978 );;
return G__2977__delegate.call(this, args);
});
return G__2977;
})()
;
});
var partial__2971 = (function() { 
var G__2979__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2980__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2980 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2980__delegate.call(this, args);
};
G__2980.cljs$lang$maxFixedArity = 0;
G__2980.cljs$lang$applyTo = (function (arglist__2981){
var args = cljs.core.seq( arglist__2981 );;
return G__2980__delegate.call(this, args);
});
return G__2980;
})()
;
};
var G__2979 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2979__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2979.cljs$lang$maxFixedArity = 4;
G__2979.cljs$lang$applyTo = (function (arglist__2982){
var f = cljs.core.first(arglist__2982);
var arg1 = cljs.core.first(cljs.core.next(arglist__2982));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2982)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2982))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2982))));
return G__2979__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__2979;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2968.call(this,f,arg1);
case  3 :
return partial__2969.call(this,f,arg1,arg2);
case  4 :
return partial__2970.call(this,f,arg1,arg2,arg3);
default:
return partial__2971.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2971.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2983 = (function (f,x){
return (function() {
var G__2987 = null;
var G__2987__2988 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2987__2989 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2987__2990 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2987__2991 = (function() { 
var G__2993__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__2993 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2993__delegate.call(this, a, b, c, ds);
};
G__2993.cljs$lang$maxFixedArity = 3;
G__2993.cljs$lang$applyTo = (function (arglist__2994){
var a = cljs.core.first(arglist__2994);
var b = cljs.core.first(cljs.core.next(arglist__2994));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2994)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2994)));
return G__2993__delegate.call(this, a, b, c, ds);
});
return G__2993;
})()
;
G__2987 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2987__2988.call(this,a);
case  2 :
return G__2987__2989.call(this,a,b);
case  3 :
return G__2987__2990.call(this,a,b,c);
default:
return G__2987__2991.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2987.cljs$lang$maxFixedArity = 3;
G__2987.cljs$lang$applyTo = G__2987__2991.cljs$lang$applyTo;
return G__2987;
})()
});
var fnil__2984 = (function (f,x,y){
return (function() {
var G__2995 = null;
var G__2995__2996 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2995__2997 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2995__2998 = (function() { 
var G__3000__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3000 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3000__delegate.call(this, a, b, c, ds);
};
G__3000.cljs$lang$maxFixedArity = 3;
G__3000.cljs$lang$applyTo = (function (arglist__3001){
var a = cljs.core.first(arglist__3001);
var b = cljs.core.first(cljs.core.next(arglist__3001));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3001)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3001)));
return G__3000__delegate.call(this, a, b, c, ds);
});
return G__3000;
})()
;
G__2995 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2995__2996.call(this,a,b);
case  3 :
return G__2995__2997.call(this,a,b,c);
default:
return G__2995__2998.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2995.cljs$lang$maxFixedArity = 3;
G__2995.cljs$lang$applyTo = G__2995__2998.cljs$lang$applyTo;
return G__2995;
})()
});
var fnil__2985 = (function (f,x,y,z){
return (function() {
var G__3002 = null;
var G__3002__3003 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3002__3004 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3002__3005 = (function() { 
var G__3007__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3007 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3007__delegate.call(this, a, b, c, ds);
};
G__3007.cljs$lang$maxFixedArity = 3;
G__3007.cljs$lang$applyTo = (function (arglist__3008){
var a = cljs.core.first(arglist__3008);
var b = cljs.core.first(cljs.core.next(arglist__3008));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3008)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3008)));
return G__3007__delegate.call(this, a, b, c, ds);
});
return G__3007;
})()
;
G__3002 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3002__3003.call(this,a,b);
case  3 :
return G__3002__3004.call(this,a,b,c);
default:
return G__3002__3005.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3002.cljs$lang$maxFixedArity = 3;
G__3002.cljs$lang$applyTo = G__3002__3005.cljs$lang$applyTo;
return G__3002;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2983.call(this,f,x);
case  3 :
return fnil__2984.call(this,f,x,y);
case  4 :
return fnil__2985.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3011 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3009 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3009))
{var s__3010 = temp__3698__auto____3009;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3010)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3010)));
} else
{return null;
}
})));
});

return mapi__3011.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3012 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3012))
{var s__3013 = temp__3698__auto____3012;

var x__3014 = f.call(null,cljs.core.first.call(null,s__3013));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3014)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3013));
} else
{return cljs.core.cons.call(null,x__3014,keep.call(null,f,cljs.core.rest.call(null,s__3013)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3024 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3021 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3021))
{var s__3022 = temp__3698__auto____3021;

var x__3023 = f.call(null,idx,cljs.core.first.call(null,s__3022));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3023)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3022));
} else
{return cljs.core.cons.call(null,x__3023,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3022)));
}
} else
{return null;
}
})));
});

return keepi__3024.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3069 = (function (p){
return (function() {
var ep1 = null;
var ep1__3074 = (function (){
return true;
});
var ep1__3075 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3076 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3031 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3031))
{return p.call(null,y);
} else
{return and__3546__auto____3031;
}
})());
});
var ep1__3077 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3032 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3032))
{var and__3546__auto____3033 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3033))
{return p.call(null,z);
} else
{return and__3546__auto____3033;
}
} else
{return and__3546__auto____3032;
}
})());
});
var ep1__3078 = (function() { 
var G__3080__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3034 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3034))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3034;
}
})());
};
var G__3080 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3080__delegate.call(this, x, y, z, args);
};
G__3080.cljs$lang$maxFixedArity = 3;
G__3080.cljs$lang$applyTo = (function (arglist__3081){
var x = cljs.core.first(arglist__3081);
var y = cljs.core.first(cljs.core.next(arglist__3081));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3081)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3081)));
return G__3080__delegate.call(this, x, y, z, args);
});
return G__3080;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3074.call(this);
case  1 :
return ep1__3075.call(this,x);
case  2 :
return ep1__3076.call(this,x,y);
case  3 :
return ep1__3077.call(this,x,y,z);
default:
return ep1__3078.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3078.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3070 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3082 = (function (){
return true;
});
var ep2__3083 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3035 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3035))
{return p2.call(null,x);
} else
{return and__3546__auto____3035;
}
})());
});
var ep2__3084 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3036 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3036))
{var and__3546__auto____3037 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3037))
{var and__3546__auto____3038 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3038))
{return p2.call(null,y);
} else
{return and__3546__auto____3038;
}
} else
{return and__3546__auto____3037;
}
} else
{return and__3546__auto____3036;
}
})());
});
var ep2__3085 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3039 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3039))
{var and__3546__auto____3040 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3040))
{var and__3546__auto____3041 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3041))
{var and__3546__auto____3042 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3042))
{var and__3546__auto____3043 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3043))
{return p2.call(null,z);
} else
{return and__3546__auto____3043;
}
} else
{return and__3546__auto____3042;
}
} else
{return and__3546__auto____3041;
}
} else
{return and__3546__auto____3040;
}
} else
{return and__3546__auto____3039;
}
})());
});
var ep2__3086 = (function() { 
var G__3088__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3044 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3044))
{return cljs.core.every_QMARK_.call(null,(function (p1__3015_SHARP_){
var and__3546__auto____3045 = p1.call(null,p1__3015_SHARP_);

if(cljs.core.truth_(and__3546__auto____3045))
{return p2.call(null,p1__3015_SHARP_);
} else
{return and__3546__auto____3045;
}
}),args);
} else
{return and__3546__auto____3044;
}
})());
};
var G__3088 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3088__delegate.call(this, x, y, z, args);
};
G__3088.cljs$lang$maxFixedArity = 3;
G__3088.cljs$lang$applyTo = (function (arglist__3089){
var x = cljs.core.first(arglist__3089);
var y = cljs.core.first(cljs.core.next(arglist__3089));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3089)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3089)));
return G__3088__delegate.call(this, x, y, z, args);
});
return G__3088;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3082.call(this);
case  1 :
return ep2__3083.call(this,x);
case  2 :
return ep2__3084.call(this,x,y);
case  3 :
return ep2__3085.call(this,x,y,z);
default:
return ep2__3086.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3086.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3071 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3090 = (function (){
return true;
});
var ep3__3091 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3046 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3046))
{var and__3546__auto____3047 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3047))
{return p3.call(null,x);
} else
{return and__3546__auto____3047;
}
} else
{return and__3546__auto____3046;
}
})());
});
var ep3__3092 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3048 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3048))
{var and__3546__auto____3049 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3049))
{var and__3546__auto____3050 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3050))
{var and__3546__auto____3051 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3051))
{var and__3546__auto____3052 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3052))
{return p3.call(null,y);
} else
{return and__3546__auto____3052;
}
} else
{return and__3546__auto____3051;
}
} else
{return and__3546__auto____3050;
}
} else
{return and__3546__auto____3049;
}
} else
{return and__3546__auto____3048;
}
})());
});
var ep3__3093 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3053 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3053))
{var and__3546__auto____3054 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3054))
{var and__3546__auto____3055 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3055))
{var and__3546__auto____3056 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3056))
{var and__3546__auto____3057 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3057))
{var and__3546__auto____3058 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3058))
{var and__3546__auto____3059 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3059))
{var and__3546__auto____3060 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3060))
{return p3.call(null,z);
} else
{return and__3546__auto____3060;
}
} else
{return and__3546__auto____3059;
}
} else
{return and__3546__auto____3058;
}
} else
{return and__3546__auto____3057;
}
} else
{return and__3546__auto____3056;
}
} else
{return and__3546__auto____3055;
}
} else
{return and__3546__auto____3054;
}
} else
{return and__3546__auto____3053;
}
})());
});
var ep3__3094 = (function() { 
var G__3096__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3061 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3061))
{return cljs.core.every_QMARK_.call(null,(function (p1__3016_SHARP_){
var and__3546__auto____3062 = p1.call(null,p1__3016_SHARP_);

if(cljs.core.truth_(and__3546__auto____3062))
{var and__3546__auto____3063 = p2.call(null,p1__3016_SHARP_);

if(cljs.core.truth_(and__3546__auto____3063))
{return p3.call(null,p1__3016_SHARP_);
} else
{return and__3546__auto____3063;
}
} else
{return and__3546__auto____3062;
}
}),args);
} else
{return and__3546__auto____3061;
}
})());
};
var G__3096 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3096__delegate.call(this, x, y, z, args);
};
G__3096.cljs$lang$maxFixedArity = 3;
G__3096.cljs$lang$applyTo = (function (arglist__3097){
var x = cljs.core.first(arglist__3097);
var y = cljs.core.first(cljs.core.next(arglist__3097));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3097)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3097)));
return G__3096__delegate.call(this, x, y, z, args);
});
return G__3096;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3090.call(this);
case  1 :
return ep3__3091.call(this,x);
case  2 :
return ep3__3092.call(this,x,y);
case  3 :
return ep3__3093.call(this,x,y,z);
default:
return ep3__3094.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3094.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3072 = (function() { 
var G__3098__delegate = function (p1,p2,p3,ps){
var ps__3064 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3099 = (function (){
return true;
});
var epn__3100 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3017_SHARP_){
return p1__3017_SHARP_.call(null,x);
}),ps__3064);
});
var epn__3101 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3018_SHARP_){
var and__3546__auto____3065 = p1__3018_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3065))
{return p1__3018_SHARP_.call(null,y);
} else
{return and__3546__auto____3065;
}
}),ps__3064);
});
var epn__3102 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3019_SHARP_){
var and__3546__auto____3066 = p1__3019_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3066))
{var and__3546__auto____3067 = p1__3019_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3067))
{return p1__3019_SHARP_.call(null,z);
} else
{return and__3546__auto____3067;
}
} else
{return and__3546__auto____3066;
}
}),ps__3064);
});
var epn__3103 = (function() { 
var G__3105__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3068 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3068))
{return cljs.core.every_QMARK_.call(null,(function (p1__3020_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3020_SHARP_,args);
}),ps__3064);
} else
{return and__3546__auto____3068;
}
})());
};
var G__3105 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3105__delegate.call(this, x, y, z, args);
};
G__3105.cljs$lang$maxFixedArity = 3;
G__3105.cljs$lang$applyTo = (function (arglist__3106){
var x = cljs.core.first(arglist__3106);
var y = cljs.core.first(cljs.core.next(arglist__3106));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3106)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3106)));
return G__3105__delegate.call(this, x, y, z, args);
});
return G__3105;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3099.call(this);
case  1 :
return epn__3100.call(this,x);
case  2 :
return epn__3101.call(this,x,y);
case  3 :
return epn__3102.call(this,x,y,z);
default:
return epn__3103.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3103.cljs$lang$applyTo;
return epn;
})()
};
var G__3098 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3098__delegate.call(this, p1, p2, p3, ps);
};
G__3098.cljs$lang$maxFixedArity = 3;
G__3098.cljs$lang$applyTo = (function (arglist__3107){
var p1 = cljs.core.first(arglist__3107);
var p2 = cljs.core.first(cljs.core.next(arglist__3107));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3107)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3107)));
return G__3098__delegate.call(this, p1, p2, p3, ps);
});
return G__3098;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3069.call(this,p1);
case  2 :
return every_pred__3070.call(this,p1,p2);
case  3 :
return every_pred__3071.call(this,p1,p2,p3);
default:
return every_pred__3072.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3072.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3147 = (function (p){
return (function() {
var sp1 = null;
var sp1__3152 = (function (){
return null;
});
var sp1__3153 = (function (x){
return p.call(null,x);
});
var sp1__3154 = (function (x,y){
var or__3548__auto____3109 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3109))
{return or__3548__auto____3109;
} else
{return p.call(null,y);
}
});
var sp1__3155 = (function (x,y,z){
var or__3548__auto____3110 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3110))
{return or__3548__auto____3110;
} else
{var or__3548__auto____3111 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3111))
{return or__3548__auto____3111;
} else
{return p.call(null,z);
}
}
});
var sp1__3156 = (function() { 
var G__3158__delegate = function (x,y,z,args){
var or__3548__auto____3112 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3112))
{return or__3548__auto____3112;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3158 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3158__delegate.call(this, x, y, z, args);
};
G__3158.cljs$lang$maxFixedArity = 3;
G__3158.cljs$lang$applyTo = (function (arglist__3159){
var x = cljs.core.first(arglist__3159);
var y = cljs.core.first(cljs.core.next(arglist__3159));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3159)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3159)));
return G__3158__delegate.call(this, x, y, z, args);
});
return G__3158;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3152.call(this);
case  1 :
return sp1__3153.call(this,x);
case  2 :
return sp1__3154.call(this,x,y);
case  3 :
return sp1__3155.call(this,x,y,z);
default:
return sp1__3156.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3156.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3148 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3160 = (function (){
return null;
});
var sp2__3161 = (function (x){
var or__3548__auto____3113 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3113))
{return or__3548__auto____3113;
} else
{return p2.call(null,x);
}
});
var sp2__3162 = (function (x,y){
var or__3548__auto____3114 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3114))
{return or__3548__auto____3114;
} else
{var or__3548__auto____3115 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3115))
{return or__3548__auto____3115;
} else
{var or__3548__auto____3116 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3116))
{return or__3548__auto____3116;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3163 = (function (x,y,z){
var or__3548__auto____3117 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3117))
{return or__3548__auto____3117;
} else
{var or__3548__auto____3118 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3118))
{return or__3548__auto____3118;
} else
{var or__3548__auto____3119 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3119))
{return or__3548__auto____3119;
} else
{var or__3548__auto____3120 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3120))
{return or__3548__auto____3120;
} else
{var or__3548__auto____3121 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3121))
{return or__3548__auto____3121;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3164 = (function() { 
var G__3166__delegate = function (x,y,z,args){
var or__3548__auto____3122 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3122))
{return or__3548__auto____3122;
} else
{return cljs.core.some.call(null,(function (p1__3025_SHARP_){
var or__3548__auto____3123 = p1.call(null,p1__3025_SHARP_);

if(cljs.core.truth_(or__3548__auto____3123))
{return or__3548__auto____3123;
} else
{return p2.call(null,p1__3025_SHARP_);
}
}),args);
}
};
var G__3166 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3166__delegate.call(this, x, y, z, args);
};
G__3166.cljs$lang$maxFixedArity = 3;
G__3166.cljs$lang$applyTo = (function (arglist__3167){
var x = cljs.core.first(arglist__3167);
var y = cljs.core.first(cljs.core.next(arglist__3167));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3167)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3167)));
return G__3166__delegate.call(this, x, y, z, args);
});
return G__3166;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3160.call(this);
case  1 :
return sp2__3161.call(this,x);
case  2 :
return sp2__3162.call(this,x,y);
case  3 :
return sp2__3163.call(this,x,y,z);
default:
return sp2__3164.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3164.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3149 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3168 = (function (){
return null;
});
var sp3__3169 = (function (x){
var or__3548__auto____3124 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3124))
{return or__3548__auto____3124;
} else
{var or__3548__auto____3125 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3125))
{return or__3548__auto____3125;
} else
{return p3.call(null,x);
}
}
});
var sp3__3170 = (function (x,y){
var or__3548__auto____3126 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3126))
{return or__3548__auto____3126;
} else
{var or__3548__auto____3127 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3127))
{return or__3548__auto____3127;
} else
{var or__3548__auto____3128 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3128))
{return or__3548__auto____3128;
} else
{var or__3548__auto____3129 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3129))
{return or__3548__auto____3129;
} else
{var or__3548__auto____3130 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3130))
{return or__3548__auto____3130;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3171 = (function (x,y,z){
var or__3548__auto____3131 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3131))
{return or__3548__auto____3131;
} else
{var or__3548__auto____3132 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3132))
{return or__3548__auto____3132;
} else
{var or__3548__auto____3133 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3133))
{return or__3548__auto____3133;
} else
{var or__3548__auto____3134 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3134))
{return or__3548__auto____3134;
} else
{var or__3548__auto____3135 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3135))
{return or__3548__auto____3135;
} else
{var or__3548__auto____3136 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3136))
{return or__3548__auto____3136;
} else
{var or__3548__auto____3137 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3137))
{return or__3548__auto____3137;
} else
{var or__3548__auto____3138 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3138))
{return or__3548__auto____3138;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3172 = (function() { 
var G__3174__delegate = function (x,y,z,args){
var or__3548__auto____3139 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3139))
{return or__3548__auto____3139;
} else
{return cljs.core.some.call(null,(function (p1__3026_SHARP_){
var or__3548__auto____3140 = p1.call(null,p1__3026_SHARP_);

if(cljs.core.truth_(or__3548__auto____3140))
{return or__3548__auto____3140;
} else
{var or__3548__auto____3141 = p2.call(null,p1__3026_SHARP_);

if(cljs.core.truth_(or__3548__auto____3141))
{return or__3548__auto____3141;
} else
{return p3.call(null,p1__3026_SHARP_);
}
}
}),args);
}
};
var G__3174 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3174__delegate.call(this, x, y, z, args);
};
G__3174.cljs$lang$maxFixedArity = 3;
G__3174.cljs$lang$applyTo = (function (arglist__3175){
var x = cljs.core.first(arglist__3175);
var y = cljs.core.first(cljs.core.next(arglist__3175));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3175)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3175)));
return G__3174__delegate.call(this, x, y, z, args);
});
return G__3174;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3168.call(this);
case  1 :
return sp3__3169.call(this,x);
case  2 :
return sp3__3170.call(this,x,y);
case  3 :
return sp3__3171.call(this,x,y,z);
default:
return sp3__3172.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3172.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3150 = (function() { 
var G__3176__delegate = function (p1,p2,p3,ps){
var ps__3142 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3177 = (function (){
return null;
});
var spn__3178 = (function (x){
return cljs.core.some.call(null,(function (p1__3027_SHARP_){
return p1__3027_SHARP_.call(null,x);
}),ps__3142);
});
var spn__3179 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3028_SHARP_){
var or__3548__auto____3143 = p1__3028_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3143))
{return or__3548__auto____3143;
} else
{return p1__3028_SHARP_.call(null,y);
}
}),ps__3142);
});
var spn__3180 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3029_SHARP_){
var or__3548__auto____3144 = p1__3029_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3144))
{return or__3548__auto____3144;
} else
{var or__3548__auto____3145 = p1__3029_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3145))
{return or__3548__auto____3145;
} else
{return p1__3029_SHARP_.call(null,z);
}
}
}),ps__3142);
});
var spn__3181 = (function() { 
var G__3183__delegate = function (x,y,z,args){
var or__3548__auto____3146 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3146))
{return or__3548__auto____3146;
} else
{return cljs.core.some.call(null,(function (p1__3030_SHARP_){
return cljs.core.some.call(null,p1__3030_SHARP_,args);
}),ps__3142);
}
};
var G__3183 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3183__delegate.call(this, x, y, z, args);
};
G__3183.cljs$lang$maxFixedArity = 3;
G__3183.cljs$lang$applyTo = (function (arglist__3184){
var x = cljs.core.first(arglist__3184);
var y = cljs.core.first(cljs.core.next(arglist__3184));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3184)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3184)));
return G__3183__delegate.call(this, x, y, z, args);
});
return G__3183;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3177.call(this);
case  1 :
return spn__3178.call(this,x);
case  2 :
return spn__3179.call(this,x,y);
case  3 :
return spn__3180.call(this,x,y,z);
default:
return spn__3181.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3181.cljs$lang$applyTo;
return spn;
})()
};
var G__3176 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3176__delegate.call(this, p1, p2, p3, ps);
};
G__3176.cljs$lang$maxFixedArity = 3;
G__3176.cljs$lang$applyTo = (function (arglist__3185){
var p1 = cljs.core.first(arglist__3185);
var p2 = cljs.core.first(cljs.core.next(arglist__3185));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3185)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3185)));
return G__3176__delegate.call(this, p1, p2, p3, ps);
});
return G__3176;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3147.call(this,p1);
case  2 :
return some_fn__3148.call(this,p1,p2);
case  3 :
return some_fn__3149.call(this,p1,p2,p3);
default:
return some_fn__3150.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3150.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3198 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3186 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3186))
{var s__3187 = temp__3698__auto____3186;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3187)),map.call(null,f,cljs.core.rest.call(null,s__3187)));
} else
{return null;
}
})));
});
var map__3199 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3188 = cljs.core.seq.call(null,c1);
var s2__3189 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3190 = s1__3188;

if(cljs.core.truth_(and__3546__auto____3190))
{return s2__3189;
} else
{return and__3546__auto____3190;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3188),cljs.core.first.call(null,s2__3189)),map.call(null,f,cljs.core.rest.call(null,s1__3188),cljs.core.rest.call(null,s2__3189)));
} else
{return null;
}
})));
});
var map__3200 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3191 = cljs.core.seq.call(null,c1);
var s2__3192 = cljs.core.seq.call(null,c2);
var s3__3193 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3194 = s1__3191;

if(cljs.core.truth_(and__3546__auto____3194))
{var and__3546__auto____3195 = s2__3192;

if(cljs.core.truth_(and__3546__auto____3195))
{return s3__3193;
} else
{return and__3546__auto____3195;
}
} else
{return and__3546__auto____3194;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3191),cljs.core.first.call(null,s2__3192),cljs.core.first.call(null,s3__3193)),map.call(null,f,cljs.core.rest.call(null,s1__3191),cljs.core.rest.call(null,s2__3192),cljs.core.rest.call(null,s3__3193)));
} else
{return null;
}
})));
});
var map__3201 = (function() { 
var G__3203__delegate = function (f,c1,c2,c3,colls){
var step__3197 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3196 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3196)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3196),step.call(null,map.call(null,cljs.core.rest,ss__3196)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3108_SHARP_){
return cljs.core.apply.call(null,f,p1__3108_SHARP_);
}),step__3197.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3203 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3203__delegate.call(this, f, c1, c2, c3, colls);
};
G__3203.cljs$lang$maxFixedArity = 4;
G__3203.cljs$lang$applyTo = (function (arglist__3204){
var f = cljs.core.first(arglist__3204);
var c1 = cljs.core.first(cljs.core.next(arglist__3204));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3204)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3204))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3204))));
return G__3203__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3203;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3198.call(this,f,c1);
case  3 :
return map__3199.call(this,f,c1,c2);
case  4 :
return map__3200.call(this,f,c1,c2,c3);
default:
return map__3201.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3201.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____3205 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3205))
{var s__3206 = temp__3698__auto____3205;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3206),take.call(null,(n - 1),cljs.core.rest.call(null,s__3206)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__3209 = (function (n,coll){
while(true){
var s__3207 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3208 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3208))
{return s__3207;
} else
{return and__3546__auto____3208;
}
})()))
{{
var G__3210 = (n - 1);
var G__3211 = cljs.core.rest.call(null,s__3207);
n = G__3210;
coll = G__3211;
continue;
}
} else
{return s__3207;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3209.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3212 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3213 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3212.call(this,n);
case  2 :
return drop_last__3213.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__3215 = cljs.core.seq.call(null,coll);
var lead__3216 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3216))
{{
var G__3217 = cljs.core.next.call(null,s__3215);
var G__3218 = cljs.core.next.call(null,lead__3216);
s__3215 = G__3217;
lead__3216 = G__3218;
continue;
}
} else
{return s__3215;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3221 = (function (pred,coll){
while(true){
var s__3219 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3220 = s__3219;

if(cljs.core.truth_(and__3546__auto____3220))
{return pred.call(null,cljs.core.first.call(null,s__3219));
} else
{return and__3546__auto____3220;
}
})()))
{{
var G__3222 = pred;
var G__3223 = cljs.core.rest.call(null,s__3219);
pred = G__3222;
coll = G__3223;
continue;
}
} else
{return s__3219;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3221.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3224 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3224))
{var s__3225 = temp__3698__auto____3224;

return cljs.core.concat.call(null,s__3225,cycle.call(null,s__3225));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3226 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3227 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3226.call(this,n);
case  2 :
return repeat__3227.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__3229 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3230 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3229.call(this,n);
case  2 :
return repeatedly__3230.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__3236 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3232 = cljs.core.seq.call(null,c1);
var s2__3233 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3234 = s1__3232;

if(cljs.core.truth_(and__3546__auto____3234))
{return s2__3233;
} else
{return and__3546__auto____3234;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3232),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3233),interleave.call(null,cljs.core.rest.call(null,s1__3232),cljs.core.rest.call(null,s2__3233))));
} else
{return null;
}
})));
});
var interleave__3237 = (function() { 
var G__3239__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3235 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3235)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3235),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3235)));
} else
{return null;
}
})));
};
var G__3239 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3239__delegate.call(this, c1, c2, colls);
};
G__3239.cljs$lang$maxFixedArity = 2;
G__3239.cljs$lang$applyTo = (function (arglist__3240){
var c1 = cljs.core.first(arglist__3240);
var c2 = cljs.core.first(cljs.core.next(arglist__3240));
var colls = cljs.core.rest(cljs.core.next(arglist__3240));
return G__3239__delegate.call(this, c1, c2, colls);
});
return G__3239;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3236.call(this,c1,c2);
default:
return interleave__3237.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3237.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__3243 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3241 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3241))
{var coll__3242 = temp__3695__auto____3241;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3242),cat.call(null,cljs.core.rest.call(null,coll__3242),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3243.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3244 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3245 = (function() { 
var G__3247__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3247 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3247__delegate.call(this, f, coll, colls);
};
G__3247.cljs$lang$maxFixedArity = 2;
G__3247.cljs$lang$applyTo = (function (arglist__3248){
var f = cljs.core.first(arglist__3248);
var coll = cljs.core.first(cljs.core.next(arglist__3248));
var colls = cljs.core.rest(cljs.core.next(arglist__3248));
return G__3247__delegate.call(this, f, coll, colls);
});
return G__3247;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3244.call(this,f,coll);
default:
return mapcat__3245.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3245.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3249 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3249))
{var s__3250 = temp__3698__auto____3249;

var f__3251 = cljs.core.first.call(null,s__3250);
var r__3252 = cljs.core.rest.call(null,s__3250);

if(cljs.core.truth_(pred.call(null,f__3251)))
{return cljs.core.cons.call(null,f__3251,filter.call(null,pred,r__3252));
} else
{return filter.call(null,pred,r__3252);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__3254 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3254.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3253_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3253_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3261 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3262 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3255 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3255))
{var s__3256 = temp__3698__auto____3255;

var p__3257 = cljs.core.take.call(null,n,s__3256);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3257))))
{return cljs.core.cons.call(null,p__3257,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3256)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3263 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3258 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3258))
{var s__3259 = temp__3698__auto____3258;

var p__3260 = cljs.core.take.call(null,n,s__3259);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3260))))
{return cljs.core.cons.call(null,p__3260,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3259)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3260,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3261.call(this,n,step);
case  3 :
return partition__3262.call(this,n,step,pad);
case  4 :
return partition__3263.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3269 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3270 = (function (m,ks,not_found){
var sentinel__3265 = cljs.core.lookup_sentinel;
var m__3266 = m;
var ks__3267 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3267))
{var m__3268 = cljs.core.get.call(null,m__3266,cljs.core.first.call(null,ks__3267),sentinel__3265);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__3265,m__3268)))
{return not_found;
} else
{{
var G__3272 = sentinel__3265;
var G__3273 = m__3268;
var G__3274 = cljs.core.next.call(null,ks__3267);
sentinel__3265 = G__3272;
m__3266 = G__3273;
ks__3267 = G__3274;
continue;
}
}
} else
{return m__3266;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3269.call(this,m,ks);
case  3 :
return get_in__3270.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3275,v){
var vec__3276__3277 = p__3275;
var k__3278 = cljs.core.nth.call(null,vec__3276__3277,0,null);
var ks__3279 = cljs.core.nthnext.call(null,vec__3276__3277,1);

if(cljs.core.truth_(ks__3279))
{return cljs.core.assoc.call(null,m,k__3278,assoc_in.call(null,cljs.core.get.call(null,m,k__3278),ks__3279,v));
} else
{return cljs.core.assoc.call(null,m,k__3278,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__3280,f,args){
var vec__3281__3282 = p__3280;
var k__3283 = cljs.core.nth.call(null,vec__3281__3282,0,null);
var ks__3284 = cljs.core.nthnext.call(null,vec__3281__3282,1);

if(cljs.core.truth_(ks__3284))
{return cljs.core.assoc.call(null,m,k__3283,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3283),ks__3284,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3283,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3283),args));
}
};
var update_in = function (m,p__3280,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3280, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3285){
var m = cljs.core.first(arglist__3285);
var p__3280 = cljs.core.first(cljs.core.next(arglist__3285));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3285)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3285)));
return update_in__delegate.call(this, m, p__3280, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3286 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3311 = null;
var G__3311__3312 = (function (coll,k){
var this__3287 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3311__3313 = (function (coll,k,not_found){
var this__3288 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3311 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3311__3312.call(this,coll,k);
case  3 :
return G__3311__3313.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3311;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3289 = this;
var new_array__3290 = cljs.core.aclone.call(null,this__3289.array);

(new_array__3290[k] = v);
return (new cljs.core.Vector(this__3289.meta,new_array__3290));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3291 = this;
var new_array__3292 = cljs.core.aclone.call(null,this__3291.array);

new_array__3292.push(o);
return (new cljs.core.Vector(this__3291.meta,new_array__3292));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3315 = null;
var G__3315__3316 = (function (v,f){
var this__3293 = this;
return cljs.core.ci_reduce.call(null,this__3293.array,f);
});
var G__3315__3317 = (function (v,f,start){
var this__3294 = this;
return cljs.core.ci_reduce.call(null,this__3294.array,f,start);
});
G__3315 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3315__3316.call(this,v,f);
case  3 :
return G__3315__3317.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3315;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3295 = this;
if(cljs.core.truth_((this__3295.array.length > 0)))
{var vector_seq__3296 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3295.array.length)))
{return cljs.core.cons.call(null,(this__3295.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3296.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3297 = this;
return this__3297.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3298 = this;
var count__3299 = this__3298.array.length;

if(cljs.core.truth_((count__3299 > 0)))
{return (this__3298.array[(count__3299 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3300 = this;
if(cljs.core.truth_((this__3300.array.length > 0)))
{var new_array__3301 = cljs.core.aclone.call(null,this__3300.array);

new_array__3301.pop();
return (new cljs.core.Vector(this__3300.meta,new_array__3301));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3302 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3303 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3304 = this;
return (new cljs.core.Vector(meta,this__3304.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3305 = this;
return this__3305.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3319 = null;
var G__3319__3320 = (function (coll,n){
var this__3306 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3307 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3307))
{return (n < this__3306.array.length);
} else
{return and__3546__auto____3307;
}
})()))
{return (this__3306.array[n]);
} else
{return null;
}
});
var G__3319__3321 = (function (coll,n,not_found){
var this__3308 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3309 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3309))
{return (n < this__3308.array.length);
} else
{return and__3546__auto____3309;
}
})()))
{return (this__3308.array[n]);
} else
{return not_found;
}
});
G__3319 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3319__3320.call(this,coll,n);
case  3 :
return G__3319__3321.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3319;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3310 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3310.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3323 = null;
var G__3323__3324 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3323__3325 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3323 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3323__3324.call(this,_,k);
case  3 :
return G__3323__3325.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3323;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__3327){
var args = cljs.core.seq( arglist__3327 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3328 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__3329 = array.length;

var i__3330 = 0;

while(true){
if(cljs.core.truth_((i__3330 < len__3329)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3330]))))
{return i__3330;
} else
{{
var G__3331 = (i__3330 + incr);
i__3330 = G__3331;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___3333 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3334 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3332 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3332))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3332;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___3333.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3334.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3337 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3356 = null;
var G__3356__3357 = (function (coll,k){
var this__3338 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3356__3358 = (function (coll,k,not_found){
var this__3339 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3339.strobj,(this__3339.strobj[k]),not_found);
});
G__3356 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3356__3357.call(this,coll,k);
case  3 :
return G__3356__3358.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3356;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3340 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3341 = goog.object.clone.call(null,this__3340.strobj);
var overwrite_QMARK___3342 = new_strobj__3341.hasOwnProperty(k);

(new_strobj__3341[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3342))
{return (new cljs.core.ObjMap(this__3340.meta,this__3340.keys,new_strobj__3341));
} else
{var new_keys__3343 = cljs.core.aclone.call(null,this__3340.keys);

new_keys__3343.push(k);
return (new cljs.core.ObjMap(this__3340.meta,new_keys__3343,new_strobj__3341));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3340.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3344 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3344.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3345 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3346 = this;
if(cljs.core.truth_((this__3346.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3336_SHARP_){
return cljs.core.vector.call(null,p1__3336_SHARP_,(this__3346.strobj[p1__3336_SHARP_]));
}),this__3346.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3347 = this;
return this__3347.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3348 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3349 = this;
return (new cljs.core.ObjMap(meta,this__3349.keys,this__3349.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3350 = this;
return this__3350.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3351 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3351.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3352 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3353 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3353))
{return this__3352.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3353;
}
})()))
{var new_keys__3354 = cljs.core.aclone.call(null,this__3352.keys);
var new_strobj__3355 = goog.object.clone.call(null,this__3352.strobj);

new_keys__3354.splice(cljs.core.scan_array.call(null,1,k,new_keys__3354),1);
cljs.core.js_delete.call(null,new_strobj__3355,k);
return (new cljs.core.ObjMap(this__3352.meta,new_keys__3354,new_strobj__3355));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3361 = null;
var G__3361__3362 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3361__3363 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3361 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3361__3362.call(this,_,k);
case  3 :
return G__3361__3363.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3361;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3365 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3395 = null;
var G__3395__3396 = (function (coll,k){
var this__3366 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3395__3397 = (function (coll,k,not_found){
var this__3367 = this;
var bucket__3368 = (this__3367.hashobj[cljs.core.hash.call(null,k)]);
var i__3369 = (cljs.core.truth_(bucket__3368)?cljs.core.scan_array.call(null,2,k,bucket__3368):null);

if(cljs.core.truth_(i__3369))
{return (bucket__3368[(i__3369 + 1)]);
} else
{return not_found;
}
});
G__3395 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3395__3396.call(this,coll,k);
case  3 :
return G__3395__3397.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3395;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3370 = this;
var h__3371 = cljs.core.hash.call(null,k);
var bucket__3372 = (this__3370.hashobj[h__3371]);

if(cljs.core.truth_(bucket__3372))
{var new_bucket__3373 = cljs.core.aclone.call(null,bucket__3372);
var new_hashobj__3374 = goog.object.clone.call(null,this__3370.hashobj);

(new_hashobj__3374[h__3371] = new_bucket__3373);
var temp__3695__auto____3375 = cljs.core.scan_array.call(null,2,k,new_bucket__3373);

if(cljs.core.truth_(temp__3695__auto____3375))
{var i__3376 = temp__3695__auto____3375;

(new_bucket__3373[(i__3376 + 1)] = v);
return (new cljs.core.HashMap(this__3370.meta,this__3370.count,new_hashobj__3374));
} else
{new_bucket__3373.push(k,v);
return (new cljs.core.HashMap(this__3370.meta,(this__3370.count + 1),new_hashobj__3374));
}
} else
{var new_hashobj__3377 = goog.object.clone.call(null,this__3370.hashobj);

(new_hashobj__3377[h__3371] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3370.meta,(this__3370.count + 1),new_hashobj__3377));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3378 = this;
var bucket__3379 = (this__3378.hashobj[cljs.core.hash.call(null,k)]);
var i__3380 = (cljs.core.truth_(bucket__3379)?cljs.core.scan_array.call(null,2,k,bucket__3379):null);

if(cljs.core.truth_(i__3380))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3381 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3382 = this;
if(cljs.core.truth_((this__3382.count > 0)))
{var hashes__3383 = cljs.core.js_keys.call(null,this__3382.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3360_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3382.hashobj[p1__3360_SHARP_])));
}),hashes__3383);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3384 = this;
return this__3384.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3385 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3386 = this;
return (new cljs.core.HashMap(meta,this__3386.count,this__3386.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3387 = this;
return this__3387.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3388 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3388.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3389 = this;
var h__3390 = cljs.core.hash.call(null,k);
var bucket__3391 = (this__3389.hashobj[h__3390]);
var i__3392 = (cljs.core.truth_(bucket__3391)?cljs.core.scan_array.call(null,2,k,bucket__3391):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3392)))
{return coll;
} else
{var new_hashobj__3393 = goog.object.clone.call(null,this__3389.hashobj);

if(cljs.core.truth_((3 > bucket__3391.length)))
{cljs.core.js_delete.call(null,new_hashobj__3393,h__3390);
} else
{var new_bucket__3394 = cljs.core.aclone.call(null,bucket__3391);

new_bucket__3394.splice(i__3392,2);
(new_hashobj__3393[h__3390] = new_bucket__3394);
}
return (new cljs.core.HashMap(this__3389.meta,(this__3389.count - 1),new_hashobj__3393));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3399 = ks.length;

var i__3400 = 0;
var out__3401 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3400 < len__3399)))
{{
var G__3402 = (i__3400 + 1);
var G__3403 = cljs.core.assoc.call(null,out__3401,(ks[i__3400]),(vs[i__3400]));
i__3400 = G__3402;
out__3401 = G__3403;
continue;
}
} else
{return out__3401;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3404 = null;
var G__3404__3405 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3404__3406 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3404 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3404__3405.call(this,_,k);
case  3 :
return G__3404__3406.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3404;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3408 = cljs.core.seq.call(null,keyvals);
var out__3409 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3408))
{{
var G__3410 = cljs.core.nnext.call(null,in$__3408);
var G__3411 = cljs.core.assoc.call(null,out__3409,cljs.core.first.call(null,in$__3408),cljs.core.second.call(null,in$__3408));
in$__3408 = G__3410;
out__3409 = G__3411;
continue;
}
} else
{return out__3409;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3412){
var keyvals = cljs.core.seq( arglist__3412 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3413_SHARP_,p2__3414_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3415 = p1__3413_SHARP_;

if(cljs.core.truth_(or__3548__auto____3415))
{return or__3548__auto____3415;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3414_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3416){
var maps = cljs.core.seq( arglist__3416 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__3419 = (function (m,e){
var k__3417 = cljs.core.first.call(null,e);
var v__3418 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3417)))
{return cljs.core.assoc.call(null,m,k__3417,f.call(null,cljs.core.get.call(null,m,k__3417),v__3418));
} else
{return cljs.core.assoc.call(null,m,k__3417,v__3418);
}
});
var merge2__3421 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3419,(function (){var or__3548__auto____3420 = m1;

if(cljs.core.truth_(or__3548__auto____3420))
{return or__3548__auto____3420;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3421,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3422){
var f = cljs.core.first(arglist__3422);
var maps = cljs.core.rest(arglist__3422);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3424 = cljs.core.ObjMap.fromObject([],{});
var keys__3425 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3425))
{var key__3426 = cljs.core.first.call(null,keys__3425);
var entry__3427 = cljs.core.get.call(null,map,key__3426,"﷐'user/not-found");

{
var G__3428 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__3427,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__3424,key__3426,entry__3427):ret__3424);
var G__3429 = cljs.core.next.call(null,keys__3425);
ret__3424 = G__3428;
keys__3425 = G__3429;
continue;
}
} else
{return ret__3424;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3430 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3443 = null;
var G__3443__3444 = (function (coll,v){
var this__3431 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3443__3445 = (function (coll,v,not_found){
var this__3432 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3432.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3443 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3443__3444.call(this,coll,v);
case  3 :
return G__3443__3445.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3443;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3433 = this;
return (new cljs.core.Set(this__3433.meta,cljs.core.assoc.call(null,this__3433.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3434 = this;
return cljs.core.keys.call(null,this__3434.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3435 = this;
return (new cljs.core.Set(this__3435.meta,cljs.core.dissoc.call(null,this__3435.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3436 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3437 = this;
var and__3546__auto____3438 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3438))
{var and__3546__auto____3439 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3439))
{return cljs.core.every_QMARK_.call(null,(function (p1__3423_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3423_SHARP_);
}),other);
} else
{return and__3546__auto____3439;
}
} else
{return and__3546__auto____3438;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3440 = this;
return (new cljs.core.Set(meta,this__3440.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3441 = this;
return this__3441.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3442 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3442.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3447 = null;
var G__3447__3448 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3447__3449 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3447 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3447__3448.call(this,_,k);
case  3 :
return G__3447__3449.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3447;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3452 = cljs.core.seq.call(null,coll);
var out__3453 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3452))))
{{
var G__3454 = cljs.core.rest.call(null,in$__3452);
var G__3455 = cljs.core.conj.call(null,out__3453,cljs.core.first.call(null,in$__3452));
in$__3452 = G__3454;
out__3453 = G__3455;
continue;
}
} else
{return out__3453;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3456 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3457 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3457))
{var e__3458 = temp__3695__auto____3457;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3458));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3456,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3451_SHARP_){
var temp__3695__auto____3459 = cljs.core.find.call(null,smap,p1__3451_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3459))
{var e__3460 = temp__3695__auto____3459;

return cljs.core.second.call(null,e__3460);
} else
{return p1__3451_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3468 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3461,seen){
while(true){
var vec__3462__3463 = p__3461;
var f__3464 = cljs.core.nth.call(null,vec__3462__3463,0,null);
var xs__3465 = vec__3462__3463;

var temp__3698__auto____3466 = cljs.core.seq.call(null,xs__3465);

if(cljs.core.truth_(temp__3698__auto____3466))
{var s__3467 = temp__3698__auto____3466;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3464)))
{{
var G__3469 = cljs.core.rest.call(null,s__3467);
var G__3470 = seen;
p__3461 = G__3469;
seen = G__3470;
continue;
}
} else
{return cljs.core.cons.call(null,f__3464,step.call(null,cljs.core.rest.call(null,s__3467),cljs.core.conj.call(null,seen,f__3464)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3468.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3471 = cljs.core.Vector.fromArray([]);
var s__3472 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3472)))
{{
var G__3473 = cljs.core.conj.call(null,ret__3471,cljs.core.first.call(null,s__3472));
var G__3474 = cljs.core.next.call(null,s__3472);
ret__3471 = G__3473;
s__3472 = G__3474;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3471);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____3475 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3475))
{return or__3548__auto____3475;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3476 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3476 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3476 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____3477 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3477))
{return or__3548__auto____3477;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3478 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3478 > -1)))
{return cljs.core.subs.call(null,x,2,i__3478);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3481 = cljs.core.ObjMap.fromObject([],{});
var ks__3482 = cljs.core.seq.call(null,keys);
var vs__3483 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3484 = ks__3482;

if(cljs.core.truth_(and__3546__auto____3484))
{return vs__3483;
} else
{return and__3546__auto____3484;
}
})()))
{{
var G__3485 = cljs.core.assoc.call(null,map__3481,cljs.core.first.call(null,ks__3482),cljs.core.first.call(null,vs__3483));
var G__3486 = cljs.core.next.call(null,ks__3482);
var G__3487 = cljs.core.next.call(null,vs__3483);
map__3481 = G__3485;
ks__3482 = G__3486;
vs__3483 = G__3487;
continue;
}
} else
{return map__3481;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3490 = (function (k,x){
return x;
});
var max_key__3491 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3492 = (function() { 
var G__3494__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3479_SHARP_,p2__3480_SHARP_){
return max_key.call(null,k,p1__3479_SHARP_,p2__3480_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3494 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3494__delegate.call(this, k, x, y, more);
};
G__3494.cljs$lang$maxFixedArity = 3;
G__3494.cljs$lang$applyTo = (function (arglist__3495){
var k = cljs.core.first(arglist__3495);
var x = cljs.core.first(cljs.core.next(arglist__3495));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3495)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3495)));
return G__3494__delegate.call(this, k, x, y, more);
});
return G__3494;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3490.call(this,k,x);
case  3 :
return max_key__3491.call(this,k,x,y);
default:
return max_key__3492.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3492.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3496 = (function (k,x){
return x;
});
var min_key__3497 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3498 = (function() { 
var G__3500__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3488_SHARP_,p2__3489_SHARP_){
return min_key.call(null,k,p1__3488_SHARP_,p2__3489_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3500 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3500__delegate.call(this, k, x, y, more);
};
G__3500.cljs$lang$maxFixedArity = 3;
G__3500.cljs$lang$applyTo = (function (arglist__3501){
var k = cljs.core.first(arglist__3501);
var x = cljs.core.first(cljs.core.next(arglist__3501));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3501)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3501)));
return G__3500__delegate.call(this, k, x, y, more);
});
return G__3500;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3496.call(this,k,x);
case  3 :
return min_key__3497.call(this,k,x,y);
default:
return min_key__3498.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3498.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3504 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3505 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3502 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3502))
{var s__3503 = temp__3698__auto____3502;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3503),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3503)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3504.call(this,n,step);
case  3 :
return partition_all__3505.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3507 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3507))
{var s__3508 = temp__3698__auto____3507;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3508))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3508),take_while.call(null,pred,cljs.core.rest.call(null,s__3508)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3509 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3510 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3526 = null;
var G__3526__3527 = (function (rng,f){
var this__3511 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3526__3528 = (function (rng,f,s){
var this__3512 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3526 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3526__3527.call(this,rng,f);
case  3 :
return G__3526__3528.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3526;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3513 = this;
var comp__3514 = (cljs.core.truth_((this__3513.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3514.call(null,this__3513.start,this__3513.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3515 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3515.end - this__3515.start) / this__3515.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3516 = this;
return this__3516.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3517 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3517.meta,(this__3517.start + this__3517.step),this__3517.end,this__3517.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3518 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3519 = this;
return (new cljs.core.Range(meta,this__3519.start,this__3519.end,this__3519.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3520 = this;
return this__3520.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3530 = null;
var G__3530__3531 = (function (rng,n){
var this__3521 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3521.start + (n * this__3521.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3522 = (this__3521.start > this__3521.end);

if(cljs.core.truth_(and__3546__auto____3522))
{return cljs.core._EQ_.call(null,this__3521.step,0);
} else
{return and__3546__auto____3522;
}
})()))
{return this__3521.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3530__3532 = (function (rng,n,not_found){
var this__3523 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3523.start + (n * this__3523.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3524 = (this__3523.start > this__3523.end);

if(cljs.core.truth_(and__3546__auto____3524))
{return cljs.core._EQ_.call(null,this__3523.step,0);
} else
{return and__3546__auto____3524;
}
})()))
{return this__3523.start;
} else
{return not_found;
}
}
});
G__3530 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3530__3531.call(this,rng,n);
case  3 :
return G__3530__3532.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3530;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3525 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3525.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3534 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3535 = (function (end){
return range.call(null,0,end,1);
});
var range__3536 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3537 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3534.call(this);
case  1 :
return range__3535.call(this,start);
case  2 :
return range__3536.call(this,start,end);
case  3 :
return range__3537.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3539 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3539))
{var s__3540 = temp__3698__auto____3539;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3540),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3540)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3542 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3542))
{var s__3543 = temp__3698__auto____3542;

var fst__3544 = cljs.core.first.call(null,s__3543);
var fv__3545 = f.call(null,fst__3544);
var run__3546 = cljs.core.cons.call(null,fst__3544,cljs.core.take_while.call(null,(function (p1__3541_SHARP_){
return cljs.core._EQ_.call(null,fv__3545,f.call(null,p1__3541_SHARP_));
}),cljs.core.next.call(null,s__3543)));

return cljs.core.cons.call(null,run__3546,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3546),s__3543))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3561 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3557 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3557))
{var s__3558 = temp__3695__auto____3557;

return reductions.call(null,f,cljs.core.first.call(null,s__3558),cljs.core.rest.call(null,s__3558));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3562 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3559 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3559))
{var s__3560 = temp__3698__auto____3559;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3560)),cljs.core.rest.call(null,s__3560));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3561.call(this,f,init);
case  3 :
return reductions__3562.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3565 = (function (f){
return (function() {
var G__3570 = null;
var G__3570__3571 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3570__3572 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3570__3573 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3570__3574 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3570__3575 = (function() { 
var G__3577__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3577 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3577__delegate.call(this, x, y, z, args);
};
G__3577.cljs$lang$maxFixedArity = 3;
G__3577.cljs$lang$applyTo = (function (arglist__3578){
var x = cljs.core.first(arglist__3578);
var y = cljs.core.first(cljs.core.next(arglist__3578));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3578)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3578)));
return G__3577__delegate.call(this, x, y, z, args);
});
return G__3577;
})()
;
G__3570 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3570__3571.call(this);
case  1 :
return G__3570__3572.call(this,x);
case  2 :
return G__3570__3573.call(this,x,y);
case  3 :
return G__3570__3574.call(this,x,y,z);
default:
return G__3570__3575.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3570.cljs$lang$maxFixedArity = 3;
G__3570.cljs$lang$applyTo = G__3570__3575.cljs$lang$applyTo;
return G__3570;
})()
});
var juxt__3566 = (function (f,g){
return (function() {
var G__3579 = null;
var G__3579__3580 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3579__3581 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3579__3582 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3579__3583 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3579__3584 = (function() { 
var G__3586__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3586 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3586__delegate.call(this, x, y, z, args);
};
G__3586.cljs$lang$maxFixedArity = 3;
G__3586.cljs$lang$applyTo = (function (arglist__3587){
var x = cljs.core.first(arglist__3587);
var y = cljs.core.first(cljs.core.next(arglist__3587));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3587)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3587)));
return G__3586__delegate.call(this, x, y, z, args);
});
return G__3586;
})()
;
G__3579 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3579__3580.call(this);
case  1 :
return G__3579__3581.call(this,x);
case  2 :
return G__3579__3582.call(this,x,y);
case  3 :
return G__3579__3583.call(this,x,y,z);
default:
return G__3579__3584.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3579.cljs$lang$maxFixedArity = 3;
G__3579.cljs$lang$applyTo = G__3579__3584.cljs$lang$applyTo;
return G__3579;
})()
});
var juxt__3567 = (function (f,g,h){
return (function() {
var G__3588 = null;
var G__3588__3589 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3588__3590 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3588__3591 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3588__3592 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3588__3593 = (function() { 
var G__3595__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3595 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3595__delegate.call(this, x, y, z, args);
};
G__3595.cljs$lang$maxFixedArity = 3;
G__3595.cljs$lang$applyTo = (function (arglist__3596){
var x = cljs.core.first(arglist__3596);
var y = cljs.core.first(cljs.core.next(arglist__3596));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3596)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3596)));
return G__3595__delegate.call(this, x, y, z, args);
});
return G__3595;
})()
;
G__3588 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3588__3589.call(this);
case  1 :
return G__3588__3590.call(this,x);
case  2 :
return G__3588__3591.call(this,x,y);
case  3 :
return G__3588__3592.call(this,x,y,z);
default:
return G__3588__3593.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3588.cljs$lang$maxFixedArity = 3;
G__3588.cljs$lang$applyTo = G__3588__3593.cljs$lang$applyTo;
return G__3588;
})()
});
var juxt__3568 = (function() { 
var G__3597__delegate = function (f,g,h,fs){
var fs__3564 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3598 = null;
var G__3598__3599 = (function (){
return cljs.core.reduce.call(null,(function (p1__3547_SHARP_,p2__3548_SHARP_){
return cljs.core.conj.call(null,p1__3547_SHARP_,p2__3548_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3564);
});
var G__3598__3600 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3549_SHARP_,p2__3550_SHARP_){
return cljs.core.conj.call(null,p1__3549_SHARP_,p2__3550_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3564);
});
var G__3598__3601 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3551_SHARP_,p2__3552_SHARP_){
return cljs.core.conj.call(null,p1__3551_SHARP_,p2__3552_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3564);
});
var G__3598__3602 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3553_SHARP_,p2__3554_SHARP_){
return cljs.core.conj.call(null,p1__3553_SHARP_,p2__3554_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3564);
});
var G__3598__3603 = (function() { 
var G__3605__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3555_SHARP_,p2__3556_SHARP_){
return cljs.core.conj.call(null,p1__3555_SHARP_,cljs.core.apply.call(null,p2__3556_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3564);
};
var G__3605 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3605__delegate.call(this, x, y, z, args);
};
G__3605.cljs$lang$maxFixedArity = 3;
G__3605.cljs$lang$applyTo = (function (arglist__3606){
var x = cljs.core.first(arglist__3606);
var y = cljs.core.first(cljs.core.next(arglist__3606));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3606)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3606)));
return G__3605__delegate.call(this, x, y, z, args);
});
return G__3605;
})()
;
G__3598 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3598__3599.call(this);
case  1 :
return G__3598__3600.call(this,x);
case  2 :
return G__3598__3601.call(this,x,y);
case  3 :
return G__3598__3602.call(this,x,y,z);
default:
return G__3598__3603.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3598.cljs$lang$maxFixedArity = 3;
G__3598.cljs$lang$applyTo = G__3598__3603.cljs$lang$applyTo;
return G__3598;
})()
};
var G__3597 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3597__delegate.call(this, f, g, h, fs);
};
G__3597.cljs$lang$maxFixedArity = 3;
G__3597.cljs$lang$applyTo = (function (arglist__3607){
var f = cljs.core.first(arglist__3607);
var g = cljs.core.first(cljs.core.next(arglist__3607));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3607)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3607)));
return G__3597__delegate.call(this, f, g, h, fs);
});
return G__3597;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3565.call(this,f);
case  2 :
return juxt__3566.call(this,f,g);
case  3 :
return juxt__3567.call(this,f,g,h);
default:
return juxt__3568.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3568.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3609 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3612 = cljs.core.next.call(null,coll);
coll = G__3612;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3610 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3608 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3608))
{return (n > 0);
} else
{return and__3546__auto____3608;
}
})()))
{{
var G__3613 = (n - 1);
var G__3614 = cljs.core.next.call(null,coll);
n = G__3613;
coll = G__3614;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3609.call(this,n);
case  2 :
return dorun__3610.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3615 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3616 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3615.call(this,n);
case  2 :
return doall__3616.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3618 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3618),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3618),1)))
{return cljs.core.first.call(null,matches__3618);
} else
{return cljs.core.vec.call(null,matches__3618);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3619 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3619)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3619),1)))
{return cljs.core.first.call(null,matches__3619);
} else
{return cljs.core.vec.call(null,matches__3619);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3620 = cljs.core.re_find.call(null,re,s);
var match_idx__3621 = s.search(re);
var match_str__3622 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3620))?cljs.core.first.call(null,match_data__3620):match_data__3620);
var post_match__3623 = cljs.core.subs.call(null,s,(match_idx__3621 + cljs.core.count.call(null,match_str__3622)));

if(cljs.core.truth_(match_data__3620))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3620,re_seq.call(null,re,post_match__3623));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3624_SHARP_){
return print_one.call(null,p1__3624_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3625 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3625))
{var and__3546__auto____3629 = (function (){var x__314__auto____3626 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3627 = x__314__auto____3626;

if(cljs.core.truth_(and__3546__auto____3627))
{var and__3546__auto____3628 = x__314__auto____3626.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3628))
{return cljs.core.not.call(null,x__314__auto____3626.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3628;
}
} else
{return and__3546__auto____3627;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__314__auto____3626);
}
})();

if(cljs.core.truth_(and__3546__auto____3629))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3629;
}
} else
{return and__3546__auto____3625;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__314__auto____3630 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3631 = x__314__auto____3630;

if(cljs.core.truth_(and__3546__auto____3631))
{var and__3546__auto____3632 = x__314__auto____3630.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3632))
{return cljs.core.not.call(null,x__314__auto____3630.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____3632;
}
} else
{return and__3546__auto____3631;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__314__auto____3630);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3633 = cljs.core.first.call(null,objs);
var sb__3634 = (new goog.string.StringBuffer());

var G__3635__3636 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3635__3636))
{var obj__3637 = cljs.core.first.call(null,G__3635__3636);
var G__3635__3638 = G__3635__3636;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3637,first_obj__3633)))
{} else
{sb__3634.append(" ");
}
var G__3639__3640 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3637,opts));

if(cljs.core.truth_(G__3639__3640))
{var string__3641 = cljs.core.first.call(null,G__3639__3640);
var G__3639__3642 = G__3639__3640;

while(true){
sb__3634.append(string__3641);
var temp__3698__auto____3643 = cljs.core.next.call(null,G__3639__3642);

if(cljs.core.truth_(temp__3698__auto____3643))
{var G__3639__3644 = temp__3698__auto____3643;

{
var G__3647 = cljs.core.first.call(null,G__3639__3644);
var G__3648 = G__3639__3644;
string__3641 = G__3647;
G__3639__3642 = G__3648;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3645 = cljs.core.next.call(null,G__3635__3638);

if(cljs.core.truth_(temp__3698__auto____3645))
{var G__3635__3646 = temp__3698__auto____3645;

{
var G__3649 = cljs.core.first.call(null,G__3635__3646);
var G__3650 = G__3635__3646;
obj__3637 = G__3649;
G__3635__3638 = G__3650;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3634);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3651 = cljs.core.first.call(null,objs);

var G__3652__3653 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3652__3653))
{var obj__3654 = cljs.core.first.call(null,G__3652__3653);
var G__3652__3655 = G__3652__3653;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3654,first_obj__3651)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3656__3657 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3654,opts));

if(cljs.core.truth_(G__3656__3657))
{var string__3658 = cljs.core.first.call(null,G__3656__3657);
var G__3656__3659 = G__3656__3657;

while(true){
cljs.core.string_print.call(null,string__3658);
var temp__3698__auto____3660 = cljs.core.next.call(null,G__3656__3659);

if(cljs.core.truth_(temp__3698__auto____3660))
{var G__3656__3661 = temp__3698__auto____3660;

{
var G__3664 = cljs.core.first.call(null,G__3656__3661);
var G__3665 = G__3656__3661;
string__3658 = G__3664;
G__3656__3659 = G__3665;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3662 = cljs.core.next.call(null,G__3652__3655);

if(cljs.core.truth_(temp__3698__auto____3662))
{var G__3652__3663 = temp__3698__auto____3662;

{
var G__3666 = cljs.core.first.call(null,G__3652__3663);
var G__3667 = G__3652__3663;
obj__3654 = G__3666;
G__3652__3655 = G__3667;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3668){
var objs = cljs.core.seq( arglist__3668 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3669){
var objs = cljs.core.seq( arglist__3669 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3670){
var objs = cljs.core.seq( arglist__3670 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3671){
var objs = cljs.core.seq( arglist__3671 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3672){
var objs = cljs.core.seq( arglist__3672 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3673 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3673,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3674 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3674))
{var nspc__3675 = temp__3698__auto____3674;

return cljs.core.str.call(null,nspc__3675,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3676 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3676))
{var nspc__3677 = temp__3698__auto____3676;

return cljs.core.str.call(null,nspc__3677,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3678 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3678,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__3679 = this;
var G__3680__3681 = cljs.core.seq.call(null,this__3679.watches);

if(cljs.core.truth_(G__3680__3681))
{var G__3683__3685 = cljs.core.first.call(null,G__3680__3681);
var vec__3684__3686 = G__3683__3685;
var key__3687 = cljs.core.nth.call(null,vec__3684__3686,0,null);
var f__3688 = cljs.core.nth.call(null,vec__3684__3686,1,null);
var G__3680__3689 = G__3680__3681;

var G__3683__3690 = G__3683__3685;
var G__3680__3691 = G__3680__3689;

while(true){
var vec__3692__3693 = G__3683__3690;
var key__3694 = cljs.core.nth.call(null,vec__3692__3693,0,null);
var f__3695 = cljs.core.nth.call(null,vec__3692__3693,1,null);
var G__3680__3696 = G__3680__3691;

f__3695.call(null,key__3694,this$,oldval,newval);
var temp__3698__auto____3697 = cljs.core.next.call(null,G__3680__3696);

if(cljs.core.truth_(temp__3698__auto____3697))
{var G__3680__3698 = temp__3698__auto____3697;

{
var G__3705 = cljs.core.first.call(null,G__3680__3698);
var G__3706 = G__3680__3698;
G__3683__3690 = G__3705;
G__3680__3691 = G__3706;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__3699 = this;
return this$.watches = cljs.core.assoc.call(null,this__3699.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3700 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3700.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3701 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3701.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3702 = this;
return this__3702.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3703 = this;
return this__3703.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3704 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3713 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3714 = (function() { 
var G__3716__delegate = function (x,p__3707){
var map__3708__3709 = p__3707;
var map__3708__3710 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3708__3709))?cljs.core.apply.call(null,cljs.core.hash_map,map__3708__3709):map__3708__3709);
var validator__3711 = cljs.core.get.call(null,map__3708__3710,"﷐'validator");
var meta__3712 = cljs.core.get.call(null,map__3708__3710,"﷐'meta");

return (new cljs.core.Atom(x,meta__3712,validator__3711,null));
};
var G__3716 = function (x,var_args){
var p__3707 = null;
if (goog.isDef(var_args)) {
  p__3707 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3716__delegate.call(this, x, p__3707);
};
G__3716.cljs$lang$maxFixedArity = 1;
G__3716.cljs$lang$applyTo = (function (arglist__3717){
var x = cljs.core.first(arglist__3717);
var p__3707 = cljs.core.rest(arglist__3717);
return G__3716__delegate.call(this, x, p__3707);
});
return G__3716;
})()
;
atom = function(x,var_args){
var p__3707 = var_args;
switch(arguments.length){
case  1 :
return atom__3713.call(this,x);
default:
return atom__3714.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3714.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3718 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3718))
{var validate__3719 = temp__3698__auto____3718;

if(cljs.core.truth_(validate__3719.call(null,new_value)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.list("﷑'validate","﷑'new-value")));
}
} else
{}
var old_value__3720 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3720,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3721 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3722 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3723 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3724 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3725 = (function() { 
var G__3727__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3727 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3727__delegate.call(this, a, f, x, y, z, more);
};
G__3727.cljs$lang$maxFixedArity = 5;
G__3727.cljs$lang$applyTo = (function (arglist__3728){
var a = cljs.core.first(arglist__3728);
var f = cljs.core.first(cljs.core.next(arglist__3728));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3728)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3728))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3728)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3728)))));
return G__3727__delegate.call(this, a, f, x, y, z, more);
});
return G__3727;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3721.call(this,a,f);
case  3 :
return swap_BANG___3722.call(this,a,f,x);
case  4 :
return swap_BANG___3723.call(this,a,f,x,y);
case  5 :
return swap_BANG___3724.call(this,a,f,x,y,z);
default:
return swap_BANG___3725.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3725.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3729){
var iref = cljs.core.first(arglist__3729);
var f = cljs.core.first(cljs.core.next(arglist__3729));
var args = cljs.core.rest(cljs.core.next(arglist__3729));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3730 = (function (){
return gensym.call(null,"G__");
});
var gensym__3731 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3730.call(this);
case  1 :
return gensym__3731.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3733 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3733.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3734 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3734.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3734.state,this__3734.f);
}
return cljs.core.deref.call(null,this__3734.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3735){
var body = cljs.core.seq( arglist__3735 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3736__3737 = options;
var map__3736__3738 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3736__3737))?cljs.core.apply.call(null,cljs.core.hash_map,map__3736__3737):map__3736__3737);
var keywordize_keys__3739 = cljs.core.get.call(null,map__3736__3738,"﷐'keywordize-keys");
var keyfn__3740 = (cljs.core.truth_(keywordize_keys__3739)?cljs.core.keyword:cljs.core.str);
var f__3746 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__378__auto____3745 = (function iter__3741(s__3742){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3742__3743 = s__3742;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3742__3743)))
{var k__3744 = cljs.core.first.call(null,s__3742__3743);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3740.call(null,k__3744),thisfn.call(null,(x[k__3744]))]),iter__3741.call(null,cljs.core.rest.call(null,s__3742__3743)));
} else
{return null;
}
break;
}
})));
});

return iter__378__auto____3745.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3746.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3747){
var x = cljs.core.first(arglist__3747);
var options = cljs.core.rest(arglist__3747);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3748 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3752__delegate = function (args){
var temp__3695__auto____3749 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3748),args);

if(cljs.core.truth_(temp__3695__auto____3749))
{var v__3750 = temp__3695__auto____3749;

return v__3750;
} else
{var ret__3751 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3748,cljs.core.assoc,args,ret__3751);
return ret__3751;
}
};
var G__3752 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3752__delegate.call(this, args);
};
G__3752.cljs$lang$maxFixedArity = 0;
G__3752.cljs$lang$applyTo = (function (arglist__3753){
var args = cljs.core.seq( arglist__3753 );;
return G__3752__delegate.call(this, args);
});
return G__3752;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3755 = (function (f){
while(true){
var ret__3754 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3754)))
{{
var G__3758 = ret__3754;
f = G__3758;
continue;
}
} else
{return ret__3754;
}
break;
}
});
var trampoline__3756 = (function() { 
var G__3759__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3759 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3759__delegate.call(this, f, args);
};
G__3759.cljs$lang$maxFixedArity = 1;
G__3759.cljs$lang$applyTo = (function (arglist__3760){
var f = cljs.core.first(arglist__3760);
var args = cljs.core.rest(arglist__3760);
return G__3759__delegate.call(this, f, args);
});
return G__3759;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3755.call(this,f);
default:
return trampoline__3756.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3756.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3761 = (function (){
return rand.call(null,1);
});
var rand__3762 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3761.call(this);
case  1 :
return rand__3762.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3764 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3764,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3764,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3773 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3774 = (function (h,child,parent){
var or__3548__auto____3765 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3765))
{return or__3548__auto____3765;
} else
{var or__3548__auto____3766 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3766))
{return or__3548__auto____3766;
} else
{var and__3546__auto____3767 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3767))
{var and__3546__auto____3768 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3768))
{var and__3546__auto____3769 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3769))
{var ret__3770 = true;
var i__3771 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3772 = cljs.core.not.call(null,ret__3770);

if(cljs.core.truth_(or__3548__auto____3772))
{return or__3548__auto____3772;
} else
{return cljs.core._EQ_.call(null,i__3771,cljs.core.count.call(null,parent));
}
})()))
{return ret__3770;
} else
{{
var G__3776 = isa_QMARK_.call(null,h,child.call(null,i__3771),parent.call(null,i__3771));
var G__3777 = (i__3771 + 1);
ret__3770 = G__3776;
i__3771 = G__3777;
continue;
}
}
break;
}
} else
{return and__3546__auto____3769;
}
} else
{return and__3546__auto____3768;
}
} else
{return and__3546__auto____3767;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3773.call(this,h,child);
case  3 :
return isa_QMARK___3774.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3778 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3779 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3778.call(this,h);
case  2 :
return parents__3779.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3781 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3782 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3781.call(this,h);
case  2 :
return ancestors__3782.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3784 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3785 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3784.call(this,h);
case  2 :
return descendants__3785.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3795 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3796 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3790 = "﷐'parents".call(null,h);
var td__3791 = "﷐'descendants".call(null,h);
var ta__3792 = "﷐'ancestors".call(null,h);
var tf__3793 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3794 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3790.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3792.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3792.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3790,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3793.call(null,"﷐'ancestors".call(null,h),tag,td__3791,parent,ta__3792),"﷐'descendants":tf__3793.call(null,"﷐'descendants".call(null,h),parent,ta__3792,tag,td__3791)});
})());

if(cljs.core.truth_(or__3548__auto____3794))
{return or__3548__auto____3794;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3795.call(this,h,tag);
case  3 :
return derive__3796.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3802 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3803 = (function (h,tag,parent){
var parentMap__3798 = "﷐'parents".call(null,h);
var childsParents__3799 = (cljs.core.truth_(parentMap__3798.call(null,tag))?cljs.core.disj.call(null,parentMap__3798.call(null,tag),parent):cljs.core.set([]));
var newParents__3800 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3799))?cljs.core.assoc.call(null,parentMap__3798,tag,childsParents__3799):cljs.core.dissoc.call(null,parentMap__3798,tag));
var deriv_seq__3801 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3787_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3787_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3787_SHARP_),cljs.core.second.call(null,p1__3787_SHARP_)));
}),cljs.core.seq.call(null,newParents__3800)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3798.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3788_SHARP_,p2__3789_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3788_SHARP_,p2__3789_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3801));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3802.call(this,h,tag);
case  3 :
return underive__3803.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3805 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3807 = (cljs.core.truth_((function (){var and__3546__auto____3806 = xprefs__3805;

if(cljs.core.truth_(and__3546__auto____3806))
{return xprefs__3805.call(null,y);
} else
{return and__3546__auto____3806;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3807))
{return or__3548__auto____3807;
} else
{var or__3548__auto____3809 = (function (){var ps__3808 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3808) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3808),prefer_table)))
{} else
{}
{
var G__3812 = cljs.core.rest.call(null,ps__3808);
ps__3808 = G__3812;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3809))
{return or__3548__auto____3809;
} else
{var or__3548__auto____3811 = (function (){var ps__3810 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3810) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3810),y,prefer_table)))
{} else
{}
{
var G__3813 = cljs.core.rest.call(null,ps__3810);
ps__3810 = G__3813;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3811))
{return or__3548__auto____3811;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3814 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3814))
{return or__3548__auto____3814;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3823 = cljs.core.reduce.call(null,(function (be,p__3815){
var vec__3816__3817 = p__3815;
var k__3818 = cljs.core.nth.call(null,vec__3816__3817,0,null);
var ___3819 = cljs.core.nth.call(null,vec__3816__3817,1,null);
var e__3820 = vec__3816__3817;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3818)))
{var be2__3822 = (cljs.core.truth_((function (){var or__3548__auto____3821 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3821))
{return or__3548__auto____3821;
} else
{return cljs.core.dominates.call(null,k__3818,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3820:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3822),k__3818,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3818," and ",cljs.core.first.call(null,be2__3822),", and neither is preferred")));
}
return be2__3822;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3823))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3823));
return cljs.core.second.call(null,best_entry__3823);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3824 = mf;

if(cljs.core.truth_(and__3546__auto____3824))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3824;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3825 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3825))
{return or__3548__auto____3825;
} else
{var or__3548__auto____3826 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____3826))
{return or__3548__auto____3826;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3827 = mf;

if(cljs.core.truth_(and__3546__auto____3827))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3827;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3828 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3828))
{return or__3548__auto____3828;
} else
{var or__3548__auto____3829 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3829))
{return or__3548__auto____3829;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3830 = mf;

if(cljs.core.truth_(and__3546__auto____3830))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3830;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3831 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3831))
{return or__3548__auto____3831;
} else
{var or__3548__auto____3832 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3832))
{return or__3548__auto____3832;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3833 = mf;

if(cljs.core.truth_(and__3546__auto____3833))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3833;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3834 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3834))
{return or__3548__auto____3834;
} else
{var or__3548__auto____3835 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3835))
{return or__3548__auto____3835;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3836 = mf;

if(cljs.core.truth_(and__3546__auto____3836))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3836;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3837 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3837))
{return or__3548__auto____3837;
} else
{var or__3548__auto____3838 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3838))
{return or__3548__auto____3838;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3839 = mf;

if(cljs.core.truth_(and__3546__auto____3839))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3839;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3840 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3840))
{return or__3548__auto____3840;
} else
{var or__3548__auto____3841 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____3841))
{return or__3548__auto____3841;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3842 = mf;

if(cljs.core.truth_(and__3546__auto____3842))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3842;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3843 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3843))
{return or__3548__auto____3843;
} else
{var or__3548__auto____3844 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3844))
{return or__3548__auto____3844;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3845 = mf;

if(cljs.core.truth_(and__3546__auto____3845))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3845;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3846 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3846))
{return or__3548__auto____3846;
} else
{var or__3548__auto____3847 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3847))
{return or__3548__auto____3847;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3848 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3849 = cljs.core._get_method.call(null,mf,dispatch_val__3848);

if(cljs.core.truth_(target_fn__3849))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3848)));
}
return cljs.core.apply.call(null,target_fn__3849,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3850 = this;
cljs.core.swap_BANG_.call(null,this__3850.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3850.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3850.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3850.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3851 = this;
cljs.core.swap_BANG_.call(null,this__3851.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3851.method_cache,this__3851.method_table,this__3851.cached_hierarchy,this__3851.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3852 = this;
cljs.core.swap_BANG_.call(null,this__3852.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3852.method_cache,this__3852.method_table,this__3852.cached_hierarchy,this__3852.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3853 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3853.cached_hierarchy),cljs.core.deref.call(null,this__3853.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3853.method_cache,this__3853.method_table,this__3853.cached_hierarchy,this__3853.hierarchy);
}
var temp__3695__auto____3854 = cljs.core.deref.call(null,this__3853.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3854))
{var target_fn__3855 = temp__3695__auto____3854;

return target_fn__3855;
} else
{var temp__3695__auto____3856 = cljs.core.find_and_cache_best_method.call(null,this__3853.name,dispatch_val,this__3853.hierarchy,this__3853.method_table,this__3853.prefer_table,this__3853.method_cache,this__3853.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3856))
{var target_fn__3857 = temp__3695__auto____3856;

return target_fn__3857;
} else
{return cljs.core.deref.call(null,this__3853.method_table).call(null,this__3853.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3858 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3858.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__3858.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__3858.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3858.method_cache,this__3858.method_table,this__3858.cached_hierarchy,this__3858.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3859 = this;
return cljs.core.deref.call(null,this__3859.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3860 = this;
return cljs.core.deref.call(null,this__3860.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3861 = this;
return cljs.core.do_invoke.call(null,mf,this__3861.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3862__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3862 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3862__delegate.call(this, _, args);
};
G__3862.cljs$lang$maxFixedArity = 1;
G__3862.cljs$lang$applyTo = (function (arglist__3863){
var _ = cljs.core.first(arglist__3863);
var args = cljs.core.rest(arglist__3863);
return G__3862__delegate.call(this, _, args);
});
return G__3862;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
