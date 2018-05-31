
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$core$Native_Bitwise = function() {

return {
	and: F2(function and(a, b) { return a & b; }),
	or: F2(function or(a, b) { return a | b; }),
	xor: F2(function xor(a, b) { return a ^ b; }),
	complement: function complement(a) { return ~a; },
	shiftLeftBy: F2(function(offset, a) { return a << offset; }),
	shiftRightBy: F2(function(offset, a) { return a >> offset; }),
	shiftRightZfBy: F2(function(offset, a) { return a >>> offset; })
};

}();

var _elm_lang$core$Bitwise$shiftRightZfBy = _elm_lang$core$Native_Bitwise.shiftRightZfBy;
var _elm_lang$core$Bitwise$shiftRightBy = _elm_lang$core$Native_Bitwise.shiftRightBy;
var _elm_lang$core$Bitwise$shiftLeftBy = _elm_lang$core$Native_Bitwise.shiftLeftBy;
var _elm_lang$core$Bitwise$complement = _elm_lang$core$Native_Bitwise.complement;
var _elm_lang$core$Bitwise$xor = _elm_lang$core$Native_Bitwise.xor;
var _elm_lang$core$Bitwise$or = _elm_lang$core$Native_Bitwise.or;
var _elm_lang$core$Bitwise$and = _elm_lang$core$Native_Bitwise.and;

var _Skinney$murmur3$UTF8$accumulate = F3(
	function (add, $char, _p0) {
		var _p1 = _p0;
		var _p3 = _p1._0;
		var _p2 = _p1._1;
		if (_p2.ctor === 'Nothing') {
			return (_elm_lang$core$Native_Utils.cmp($char, 128) < 0) ? {
				ctor: '_Tuple2',
				_0: A2(add, $char, _p3),
				_1: _elm_lang$core$Maybe$Nothing
			} : ((_elm_lang$core$Native_Utils.cmp($char, 2048) < 0) ? {
				ctor: '_Tuple2',
				_0: A2(
					add,
					128 | (63 & $char),
					A2(add, 192 | ($char >>> 6), _p3)),
				_1: _elm_lang$core$Maybe$Nothing
			} : (((_elm_lang$core$Native_Utils.cmp($char, 55296) < 0) || (_elm_lang$core$Native_Utils.cmp($char, 57344) > -1)) ? {
				ctor: '_Tuple2',
				_0: A2(
					add,
					128 | (63 & $char),
					A2(
						add,
						128 | (63 & ($char >>> 6)),
						A2(add, 224 | ($char >>> 12), _p3))),
				_1: _elm_lang$core$Maybe$Nothing
			} : {
				ctor: '_Tuple2',
				_0: _p3,
				_1: _elm_lang$core$Maybe$Just($char)
			}));
		} else {
			var combined = ((1023 & $char) | ((1023 & _p2._0) << 10)) + 65536;
			return {
				ctor: '_Tuple2',
				_0: A2(
					add,
					128 | (63 & combined),
					A2(
						add,
						128 | (63 & (combined >>> 6)),
						A2(
							add,
							128 | (63 & (combined >>> 12)),
							A2(add, 240 | (combined >>> 18), _p3)))),
				_1: _elm_lang$core$Maybe$Nothing
			};
		}
	});
var _Skinney$murmur3$UTF8$foldl = F3(
	function (op, acc, input) {
		var helper = F2(
			function ($char, acc) {
				return A3(
					_Skinney$murmur3$UTF8$accumulate,
					op,
					_elm_lang$core$Char$toCode($char),
					acc);
			});
		return _elm_lang$core$Tuple$first(
			A3(
				_elm_lang$core$String$foldl,
				helper,
				{ctor: '_Tuple2', _0: acc, _1: _elm_lang$core$Maybe$Nothing},
				input));
	});

var _Skinney$murmur3$Murmur3$mur = F2(
	function (c, h) {
		return 4294967295 & (((h & 65535) * c) + ((65535 & ((h >>> 16) * c)) << 16));
	});
var _Skinney$murmur3$Murmur3$step = function (acc) {
	var h1 = A2(_Skinney$murmur3$Murmur3$mur, 5, (acc >>> 19) | (acc << 13));
	return ((h1 & 65535) + 27492) + ((65535 & ((h1 >>> 16) + 58964)) << 16);
};
var _Skinney$murmur3$Murmur3$mix = F2(
	function (h1, h2) {
		var k1 = A2(_Skinney$murmur3$Murmur3$mur, 3432918353, h2);
		return h1 ^ A2(_Skinney$murmur3$Murmur3$mur, 461845907, (k1 >>> 17) | (k1 << 15));
	});
var _Skinney$murmur3$Murmur3$finalize = function (data) {
	var acc = (!_elm_lang$core$Native_Utils.eq(data.hash, 0)) ? A2(_Skinney$murmur3$Murmur3$mix, data.seed, data.hash) : data.seed;
	var h1 = acc ^ data.charsProcessed;
	var h2 = A2(_Skinney$murmur3$Murmur3$mur, 2246822507, h1 ^ (h1 >>> 16));
	var h3 = A2(_Skinney$murmur3$Murmur3$mur, 3266489909, h2 ^ (h2 >>> 13));
	return (h3 ^ (h3 >>> 16)) >>> 0;
};
var _Skinney$murmur3$Murmur3$hashFold = F2(
	function (c, data) {
		var res = data.hash | (c << data.shift);
		var _p0 = data.shift;
		if (_p0 === 24) {
			var newHash = _Skinney$murmur3$Murmur3$step(
				A2(_Skinney$murmur3$Murmur3$mix, data.seed, res));
			return {shift: 0, seed: newHash, hash: 0, charsProcessed: data.charsProcessed + 1};
		} else {
			return {shift: data.shift + 8, seed: data.seed, hash: res, charsProcessed: data.charsProcessed + 1};
		}
	});
var _Skinney$murmur3$Murmur3$HashData = F4(
	function (a, b, c, d) {
		return {shift: a, seed: b, hash: c, charsProcessed: d};
	});
var _Skinney$murmur3$Murmur3$hashString = F2(
	function (seed, str) {
		return _Skinney$murmur3$Murmur3$finalize(
			A3(
				_Skinney$murmur3$UTF8$foldl,
				_Skinney$murmur3$Murmur3$hashFold,
				A4(_Skinney$murmur3$Murmur3$HashData, 0, seed, 0, 0),
				str));
	});

var _elm_lang$core$Color$fmod = F2(
	function (f, n) {
		var integer = _elm_lang$core$Basics$floor(f);
		return (_elm_lang$core$Basics$toFloat(
			A2(_elm_lang$core$Basics_ops['%'], integer, n)) + f) - _elm_lang$core$Basics$toFloat(integer);
	});
var _elm_lang$core$Color$rgbToHsl = F3(
	function (red, green, blue) {
		var b = _elm_lang$core$Basics$toFloat(blue) / 255;
		var g = _elm_lang$core$Basics$toFloat(green) / 255;
		var r = _elm_lang$core$Basics$toFloat(red) / 255;
		var cMax = A2(
			_elm_lang$core$Basics$max,
			A2(_elm_lang$core$Basics$max, r, g),
			b);
		var cMin = A2(
			_elm_lang$core$Basics$min,
			A2(_elm_lang$core$Basics$min, r, g),
			b);
		var c = cMax - cMin;
		var lightness = (cMax + cMin) / 2;
		var saturation = _elm_lang$core$Native_Utils.eq(lightness, 0) ? 0 : (c / (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)));
		var hue = _elm_lang$core$Basics$degrees(60) * (_elm_lang$core$Native_Utils.eq(cMax, r) ? A2(_elm_lang$core$Color$fmod, (g - b) / c, 6) : (_elm_lang$core$Native_Utils.eq(cMax, g) ? (((b - r) / c) + 2) : (((r - g) / c) + 4)));
		return {ctor: '_Tuple3', _0: hue, _1: saturation, _2: lightness};
	});
var _elm_lang$core$Color$hslToRgb = F3(
	function (hue, saturation, lightness) {
		var normHue = hue / _elm_lang$core$Basics$degrees(60);
		var chroma = (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)) * saturation;
		var x = chroma * (1 - _elm_lang$core$Basics$abs(
			A2(_elm_lang$core$Color$fmod, normHue, 2) - 1));
		var _p0 = (_elm_lang$core$Native_Utils.cmp(normHue, 0) < 0) ? {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 1) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: x, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 2) < 0) ? {ctor: '_Tuple3', _0: x, _1: chroma, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 3) < 0) ? {ctor: '_Tuple3', _0: 0, _1: chroma, _2: x} : ((_elm_lang$core$Native_Utils.cmp(normHue, 4) < 0) ? {ctor: '_Tuple3', _0: 0, _1: x, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 5) < 0) ? {ctor: '_Tuple3', _0: x, _1: 0, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 6) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: 0, _2: x} : {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0}))))));
		var r = _p0._0;
		var g = _p0._1;
		var b = _p0._2;
		var m = lightness - (chroma / 2);
		return {ctor: '_Tuple3', _0: r + m, _1: g + m, _2: b + m};
	});
var _elm_lang$core$Color$toRgb = function (color) {
	var _p1 = color;
	if (_p1.ctor === 'RGBA') {
		return {red: _p1._0, green: _p1._1, blue: _p1._2, alpha: _p1._3};
	} else {
		var _p2 = A3(_elm_lang$core$Color$hslToRgb, _p1._0, _p1._1, _p1._2);
		var r = _p2._0;
		var g = _p2._1;
		var b = _p2._2;
		return {
			red: _elm_lang$core$Basics$round(255 * r),
			green: _elm_lang$core$Basics$round(255 * g),
			blue: _elm_lang$core$Basics$round(255 * b),
			alpha: _p1._3
		};
	}
};
var _elm_lang$core$Color$toHsl = function (color) {
	var _p3 = color;
	if (_p3.ctor === 'HSLA') {
		return {hue: _p3._0, saturation: _p3._1, lightness: _p3._2, alpha: _p3._3};
	} else {
		var _p4 = A3(_elm_lang$core$Color$rgbToHsl, _p3._0, _p3._1, _p3._2);
		var h = _p4._0;
		var s = _p4._1;
		var l = _p4._2;
		return {hue: h, saturation: s, lightness: l, alpha: _p3._3};
	}
};
var _elm_lang$core$Color$HSLA = F4(
	function (a, b, c, d) {
		return {ctor: 'HSLA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$hsla = F4(
	function (hue, saturation, lightness, alpha) {
		return A4(
			_elm_lang$core$Color$HSLA,
			hue - _elm_lang$core$Basics$turns(
				_elm_lang$core$Basics$toFloat(
					_elm_lang$core$Basics$floor(hue / (2 * _elm_lang$core$Basics$pi)))),
			saturation,
			lightness,
			alpha);
	});
var _elm_lang$core$Color$hsl = F3(
	function (hue, saturation, lightness) {
		return A4(_elm_lang$core$Color$hsla, hue, saturation, lightness, 1);
	});
var _elm_lang$core$Color$complement = function (color) {
	var _p5 = color;
	if (_p5.ctor === 'HSLA') {
		return A4(
			_elm_lang$core$Color$hsla,
			_p5._0 + _elm_lang$core$Basics$degrees(180),
			_p5._1,
			_p5._2,
			_p5._3);
	} else {
		var _p6 = A3(_elm_lang$core$Color$rgbToHsl, _p5._0, _p5._1, _p5._2);
		var h = _p6._0;
		var s = _p6._1;
		var l = _p6._2;
		return A4(
			_elm_lang$core$Color$hsla,
			h + _elm_lang$core$Basics$degrees(180),
			s,
			l,
			_p5._3);
	}
};
var _elm_lang$core$Color$grayscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$greyscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$RGBA = F4(
	function (a, b, c, d) {
		return {ctor: 'RGBA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$rgba = _elm_lang$core$Color$RGBA;
var _elm_lang$core$Color$rgb = F3(
	function (r, g, b) {
		return A4(_elm_lang$core$Color$RGBA, r, g, b, 1);
	});
var _elm_lang$core$Color$lightRed = A4(_elm_lang$core$Color$RGBA, 239, 41, 41, 1);
var _elm_lang$core$Color$red = A4(_elm_lang$core$Color$RGBA, 204, 0, 0, 1);
var _elm_lang$core$Color$darkRed = A4(_elm_lang$core$Color$RGBA, 164, 0, 0, 1);
var _elm_lang$core$Color$lightOrange = A4(_elm_lang$core$Color$RGBA, 252, 175, 62, 1);
var _elm_lang$core$Color$orange = A4(_elm_lang$core$Color$RGBA, 245, 121, 0, 1);
var _elm_lang$core$Color$darkOrange = A4(_elm_lang$core$Color$RGBA, 206, 92, 0, 1);
var _elm_lang$core$Color$lightYellow = A4(_elm_lang$core$Color$RGBA, 255, 233, 79, 1);
var _elm_lang$core$Color$yellow = A4(_elm_lang$core$Color$RGBA, 237, 212, 0, 1);
var _elm_lang$core$Color$darkYellow = A4(_elm_lang$core$Color$RGBA, 196, 160, 0, 1);
var _elm_lang$core$Color$lightGreen = A4(_elm_lang$core$Color$RGBA, 138, 226, 52, 1);
var _elm_lang$core$Color$green = A4(_elm_lang$core$Color$RGBA, 115, 210, 22, 1);
var _elm_lang$core$Color$darkGreen = A4(_elm_lang$core$Color$RGBA, 78, 154, 6, 1);
var _elm_lang$core$Color$lightBlue = A4(_elm_lang$core$Color$RGBA, 114, 159, 207, 1);
var _elm_lang$core$Color$blue = A4(_elm_lang$core$Color$RGBA, 52, 101, 164, 1);
var _elm_lang$core$Color$darkBlue = A4(_elm_lang$core$Color$RGBA, 32, 74, 135, 1);
var _elm_lang$core$Color$lightPurple = A4(_elm_lang$core$Color$RGBA, 173, 127, 168, 1);
var _elm_lang$core$Color$purple = A4(_elm_lang$core$Color$RGBA, 117, 80, 123, 1);
var _elm_lang$core$Color$darkPurple = A4(_elm_lang$core$Color$RGBA, 92, 53, 102, 1);
var _elm_lang$core$Color$lightBrown = A4(_elm_lang$core$Color$RGBA, 233, 185, 110, 1);
var _elm_lang$core$Color$brown = A4(_elm_lang$core$Color$RGBA, 193, 125, 17, 1);
var _elm_lang$core$Color$darkBrown = A4(_elm_lang$core$Color$RGBA, 143, 89, 2, 1);
var _elm_lang$core$Color$black = A4(_elm_lang$core$Color$RGBA, 0, 0, 0, 1);
var _elm_lang$core$Color$white = A4(_elm_lang$core$Color$RGBA, 255, 255, 255, 1);
var _elm_lang$core$Color$lightGrey = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$grey = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGrey = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightGray = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$gray = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGray = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightCharcoal = A4(_elm_lang$core$Color$RGBA, 136, 138, 133, 1);
var _elm_lang$core$Color$charcoal = A4(_elm_lang$core$Color$RGBA, 85, 87, 83, 1);
var _elm_lang$core$Color$darkCharcoal = A4(_elm_lang$core$Color$RGBA, 46, 52, 54, 1);
var _elm_lang$core$Color$Radial = F5(
	function (a, b, c, d, e) {
		return {ctor: 'Radial', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Color$radial = _elm_lang$core$Color$Radial;
var _elm_lang$core$Color$Linear = F3(
	function (a, b, c) {
		return {ctor: 'Linear', _0: a, _1: b, _2: c};
	});
var _elm_lang$core$Color$linear = _elm_lang$core$Color$Linear;

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _evancz$elm_markdown$Native_Markdown = function() {


// VIRTUAL-DOM WIDGETS

function toHtml(options, factList, rawMarkdown)
{
	var model = {
		options: options,
		markdown: rawMarkdown
	};
	return _elm_lang$virtual_dom$Native_VirtualDom.custom(factList, model, implementation);
}


// WIDGET IMPLEMENTATION

var implementation = {
	render: render,
	diff: diff
};

function render(model)
{
	var html = marked(model.markdown, formatOptions(model.options));
	var div = document.createElement('div');
	div.innerHTML = html;
	return div;
}

function diff(a, b)
{
	
	if (a.model.markdown === b.model.markdown && a.model.options === b.model.options)
	{
		return null;
	}

	return {
		applyPatch: applyPatch,
		data: marked(b.model.markdown, formatOptions(b.model.options))
	};
}

function applyPatch(domNode, data)
{
	domNode.innerHTML = data;
	return domNode;
}


// ACTUAL MARKDOWN PARSER

var marked = function() {
	// catch the `marked` object regardless of the outer environment.
	// (ex. a CommonJS module compatible environment.)
	// note that this depends on marked's implementation of environment detection.
	var module = {};
	var exports = module.exports = {};

	/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 * commit cd2f6f5b7091154c5526e79b5f3bfb4d15995a51
	 */
	(function(){var block={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:noop,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:noop,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:noop,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};block.bullet=/(?:[*+-]|\d+\.)/;block.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;block.item=replace(block.item,"gm")(/bull/g,block.bullet)();block.list=replace(block.list)(/bull/g,block.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+block.def.source+")")();block.blockquote=replace(block.blockquote)("def",block.def)();block._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";block.html=replace(block.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,block._tag)();block.paragraph=replace(block.paragraph)("hr",block.hr)("heading",block.heading)("lheading",block.lheading)("blockquote",block.blockquote)("tag","<"+block._tag)("def",block.def)();block.normal=merge({},block);block.gfm=merge({},block.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/});block.gfm.paragraph=replace(block.paragraph)("(?!","(?!"+block.gfm.fences.source.replace("\\1","\\2")+"|"+block.list.source.replace("\\1","\\3")+"|")();block.tables=merge({},block.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function Lexer(options){this.tokens=[];this.tokens.links={};this.options=options||marked.defaults;this.rules=block.normal;if(this.options.gfm){if(this.options.tables){this.rules=block.tables}else{this.rules=block.gfm}}}Lexer.rules=block;Lexer.lex=function(src,options){var lexer=new Lexer(options);return lexer.lex(src)};Lexer.prototype.lex=function(src){src=src.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(src,true)};Lexer.prototype.token=function(src,top,bq){var src=src.replace(/^ +$/gm,""),next,loose,cap,bull,b,item,space,i,l;while(src){if(cap=this.rules.newline.exec(src)){src=src.substring(cap[0].length);if(cap[0].length>1){this.tokens.push({type:"space"})}}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);cap=cap[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?cap.replace(/\n+$/,""):cap});continue}if(cap=this.rules.fences.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"code",lang:cap[2],text:cap[3]||""});continue}if(cap=this.rules.heading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[1].length,text:cap[2]});continue}if(top&&(cap=this.rules.nptable.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].split(/ *\| */)}this.tokens.push(item);continue}if(cap=this.rules.lheading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[2]==="="?1:2,text:cap[1]});continue}if(cap=this.rules.hr.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"hr"});continue}if(cap=this.rules.blockquote.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"blockquote_start"});cap=cap[0].replace(/^ *> ?/gm,"");this.token(cap,top,true);this.tokens.push({type:"blockquote_end"});continue}if(cap=this.rules.list.exec(src)){src=src.substring(cap[0].length);bull=cap[2];this.tokens.push({type:"list_start",ordered:bull.length>1});cap=cap[0].match(this.rules.item);next=false;l=cap.length;i=0;for(;i<l;i++){item=cap[i];space=item.length;item=item.replace(/^ *([*+-]|\d+\.) +/,"");if(~item.indexOf("\n ")){space-=item.length;item=!this.options.pedantic?item.replace(new RegExp("^ {1,"+space+"}","gm"),""):item.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&i!==l-1){b=block.bullet.exec(cap[i+1])[0];if(bull!==b&&!(bull.length>1&&b.length>1)){src=cap.slice(i+1).join("\n")+src;i=l-1}}loose=next||/\n\n(?!\s*$)/.test(item);if(i!==l-1){next=item.charAt(item.length-1)==="\n";if(!loose)loose=next}this.tokens.push({type:loose?"loose_item_start":"list_item_start"});this.token(item,false,bq);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(cap=this.rules.html.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&(cap[1]==="pre"||cap[1]==="script"||cap[1]==="style"),text:cap[0]});continue}if(!bq&&top&&(cap=this.rules.def.exec(src))){src=src.substring(cap[0].length);this.tokens.links[cap[1].toLowerCase()]={href:cap[2],title:cap[3]};continue}if(top&&(cap=this.rules.table.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(item);continue}if(top&&(cap=this.rules.paragraph.exec(src))){src=src.substring(cap[0].length);this.tokens.push({type:"paragraph",text:cap[1].charAt(cap[1].length-1)==="\n"?cap[1].slice(0,-1):cap[1]});continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"text",text:cap[0]});continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return this.tokens};var inline={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:noop,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:noop,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};inline._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;inline._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;inline.link=replace(inline.link)("inside",inline._inside)("href",inline._href)();inline.reflink=replace(inline.reflink)("inside",inline._inside)();inline.normal=merge({},inline);inline.pedantic=merge({},inline.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});inline.gfm=merge({},inline.normal,{escape:replace(inline.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:replace(inline.text)("]|","~]|")("|","|https?://|")()});inline.breaks=merge({},inline.gfm,{br:replace(inline.br)("{2,}","*")(),text:replace(inline.gfm.text)("{2,}","*")()});function InlineLexer(links,options){this.options=options||marked.defaults;this.links=links;this.rules=inline.normal;this.renderer=this.options.renderer||new Renderer;this.renderer.options=this.options;if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=inline.breaks}else{this.rules=inline.gfm}}else if(this.options.pedantic){this.rules=inline.pedantic}}InlineLexer.rules=inline;InlineLexer.output=function(src,links,options){var inline=new InlineLexer(links,options);return inline.output(src)};InlineLexer.prototype.output=function(src){var out="",link,text,href,cap;while(src){if(cap=this.rules.escape.exec(src)){src=src.substring(cap[0].length);out+=cap[1];continue}if(cap=this.rules.autolink.exec(src)){src=src.substring(cap[0].length);if(cap[2]==="@"){text=cap[1].charAt(6)===":"?this.mangle(cap[1].substring(7)):this.mangle(cap[1]);href=this.mangle("mailto:")+text}else{text=escape(cap[1]);href=text}out+=this.renderer.link(href,null,text);continue}if(!this.inLink&&(cap=this.rules.url.exec(src))){src=src.substring(cap[0].length);text=escape(cap[1]);href=text;out+=this.renderer.link(href,null,text);continue}if(cap=this.rules.tag.exec(src)){if(!this.inLink&&/^<a /i.test(cap[0])){this.inLink=true}else if(this.inLink&&/^<\/a>/i.test(cap[0])){this.inLink=false}src=src.substring(cap[0].length);out+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(cap[0]):escape(cap[0]):cap[0];continue}if(cap=this.rules.link.exec(src)){src=src.substring(cap[0].length);this.inLink=true;out+=this.outputLink(cap,{href:cap[2],title:cap[3]});this.inLink=false;continue}if((cap=this.rules.reflink.exec(src))||(cap=this.rules.nolink.exec(src))){src=src.substring(cap[0].length);link=(cap[2]||cap[1]).replace(/\s+/g," ");link=this.links[link.toLowerCase()];if(!link||!link.href){out+=cap[0].charAt(0);src=cap[0].substring(1)+src;continue}this.inLink=true;out+=this.outputLink(cap,link);this.inLink=false;continue}if(cap=this.rules.strong.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.strong(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.em.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.em(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.codespan(escape(cap[2],true));continue}if(cap=this.rules.br.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.br();continue}if(cap=this.rules.del.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.del(this.output(cap[1]));continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.text(escape(this.smartypants(cap[0])));continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return out};InlineLexer.prototype.outputLink=function(cap,link){var href=escape(link.href),title=link.title?escape(link.title):null;return cap[0].charAt(0)!=="!"?this.renderer.link(href,title,this.output(cap[1])):this.renderer.image(href,title,escape(cap[1]))};InlineLexer.prototype.smartypants=function(text){if(!this.options.smartypants)return text;return text.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")};InlineLexer.prototype.mangle=function(text){if(!this.options.mangle)return text;var out="",l=text.length,i=0,ch;for(;i<l;i++){ch=text.charCodeAt(i);if(Math.random()>.5){ch="x"+ch.toString(16)}out+="&#"+ch+";"}return out};function Renderer(options){this.options=options||{}}Renderer.prototype.code=function(code,lang,escaped){if(this.options.highlight){var out=this.options.highlight(code,lang);if(out!=null&&out!==code){escaped=true;code=out}}if(!lang){return"<pre><code>"+(escaped?code:escape(code,true))+"\n</code></pre>"}return'<pre><code class="'+this.options.langPrefix+escape(lang,true)+'">'+(escaped?code:escape(code,true))+"\n</code></pre>\n"};Renderer.prototype.blockquote=function(quote){return"<blockquote>\n"+quote+"</blockquote>\n"};Renderer.prototype.html=function(html){return html};Renderer.prototype.heading=function(text,level,raw){return"<h"+level+' id="'+this.options.headerPrefix+raw.toLowerCase().replace(/[^\w]+/g,"-")+'">'+text+"</h"+level+">\n"};Renderer.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"};Renderer.prototype.list=function(body,ordered){var type=ordered?"ol":"ul";return"<"+type+">\n"+body+"</"+type+">\n"};Renderer.prototype.listitem=function(text){return"<li>"+text+"</li>\n"};Renderer.prototype.paragraph=function(text){return"<p>"+text+"</p>\n"};Renderer.prototype.table=function(header,body){return"<table>\n"+"<thead>\n"+header+"</thead>\n"+"<tbody>\n"+body+"</tbody>\n"+"</table>\n"};Renderer.prototype.tablerow=function(content){return"<tr>\n"+content+"</tr>\n"};Renderer.prototype.tablecell=function(content,flags){var type=flags.header?"th":"td";var tag=flags.align?"<"+type+' style="text-align:'+flags.align+'">':"<"+type+">";return tag+content+"</"+type+">\n"};Renderer.prototype.strong=function(text){return"<strong>"+text+"</strong>"};Renderer.prototype.em=function(text){return"<em>"+text+"</em>"};Renderer.prototype.codespan=function(text){return"<code>"+text+"</code>"};Renderer.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"};Renderer.prototype.del=function(text){return"<del>"+text+"</del>"};Renderer.prototype.link=function(href,title,text){if(this.options.sanitize){try{var prot=decodeURIComponent(unescape(href)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(prot.indexOf("javascript:")===0||prot.indexOf("vbscript:")===0||prot.indexOf("data:")===0){return""}}var out='<a href="'+href+'"';if(title){out+=' title="'+title+'"'}out+=">"+text+"</a>";return out};Renderer.prototype.image=function(href,title,text){var out='<img src="'+href+'" alt="'+text+'"';if(title){out+=' title="'+title+'"'}out+=this.options.xhtml?"/>":">";return out};Renderer.prototype.text=function(text){return text};function Parser(options){this.tokens=[];this.token=null;this.options=options||marked.defaults;this.options.renderer=this.options.renderer||new Renderer;this.renderer=this.options.renderer;this.renderer.options=this.options}Parser.parse=function(src,options,renderer){var parser=new Parser(options,renderer);return parser.parse(src)};Parser.prototype.parse=function(src){this.inline=new InlineLexer(src.links,this.options,this.renderer);this.tokens=src.reverse();var out="";while(this.next()){out+=this.tok()}return out};Parser.prototype.next=function(){return this.token=this.tokens.pop()};Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};Parser.prototype.parseText=function(){var body=this.token.text;while(this.peek().type==="text"){body+="\n"+this.next().text}return this.inline.output(body)};Parser.prototype.tok=function(){switch(this.token.type){case"space":{return""}case"hr":{return this.renderer.hr()}case"heading":{return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text)}case"code":{return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)}case"table":{var header="",body="",i,row,cell,flags,j;cell="";for(i=0;i<this.token.header.length;i++){flags={header:true,align:this.token.align[i]};cell+=this.renderer.tablecell(this.inline.output(this.token.header[i]),{header:true,align:this.token.align[i]})}header+=this.renderer.tablerow(cell);for(i=0;i<this.token.cells.length;i++){row=this.token.cells[i];cell="";for(j=0;j<row.length;j++){cell+=this.renderer.tablecell(this.inline.output(row[j]),{header:false,align:this.token.align[j]})}body+=this.renderer.tablerow(cell)}return this.renderer.table(header,body)}case"blockquote_start":{var body="";while(this.next().type!=="blockquote_end"){body+=this.tok()}return this.renderer.blockquote(body)}case"list_start":{var body="",ordered=this.token.ordered;while(this.next().type!=="list_end"){body+=this.tok()}return this.renderer.list(body,ordered)}case"list_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.token.type==="text"?this.parseText():this.tok()}return this.renderer.listitem(body)}case"loose_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.tok()}return this.renderer.listitem(body)}case"html":{var html=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(html)}case"paragraph":{return this.renderer.paragraph(this.inline.output(this.token.text))}case"text":{return this.renderer.paragraph(this.parseText())}}};function escape(html,encode){return html.replace(!encode?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function unescape(html){return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(_,n){n=n.toLowerCase();if(n==="colon")return":";if(n.charAt(0)==="#"){return n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1))}return""})}function replace(regex,opt){regex=regex.source;opt=opt||"";return function self(name,val){if(!name)return new RegExp(regex,opt);val=val.source||val;val=val.replace(/(^|[^\[])\^/g,"$1");regex=regex.replace(name,val);return self}}function noop(){}noop.exec=noop;function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key]}}}return obj}function marked(src,opt,callback){if(callback||typeof opt==="function"){if(!callback){callback=opt;opt=null}opt=merge({},marked.defaults,opt||{});var highlight=opt.highlight,tokens,pending,i=0;try{tokens=Lexer.lex(src,opt)}catch(e){return callback(e)}pending=tokens.length;var done=function(err){if(err){opt.highlight=highlight;return callback(err)}var out;try{out=Parser.parse(tokens,opt)}catch(e){err=e}opt.highlight=highlight;return err?callback(err):callback(null,out)};if(!highlight||highlight.length<3){return done()}delete opt.highlight;if(!pending)return done();for(;i<tokens.length;i++){(function(token){if(token.type!=="code"){return--pending||done()}return highlight(token.text,token.lang,function(err,code){if(err)return done(err);if(code==null||code===token.text){return--pending||done()}token.text=code;token.escaped=true;--pending||done()})})(tokens[i])}return}try{if(opt)opt=merge({},marked.defaults,opt);return Parser.parse(Lexer.lex(src,opt),opt)}catch(e){e.message+="\nPlease report this to https://github.com/chjj/marked.";if((opt||marked.defaults).silent){return"<p>An error occured:</p><pre>"+escape(e.message+"",true)+"</pre>"}throw e}}marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);return marked};marked.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,sanitizer:null,mangle:true,smartLists:false,silent:false,highlight:null,langPrefix:"lang-",smartypants:false,headerPrefix:"",renderer:new Renderer,xhtml:false};marked.Parser=Parser;marked.parser=Parser.parse;marked.Renderer=Renderer;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.InlineLexer=InlineLexer;marked.inlineLexer=InlineLexer.output;marked.parse=marked;if(typeof module!=="undefined"&&typeof exports==="object"){module.exports=marked}else if(typeof define==="function"&&define.amd){define(function(){return marked})}else{this.marked=marked}}).call(function(){return this||(typeof window!=="undefined"?window:global)}());

	return module.exports;
}();


// FORMAT OPTIONS FOR MARKED IMPLEMENTATION

function formatOptions(options)
{
	function toHighlight(code, lang)
	{
		if (!lang && options.defaultHighlighting.ctor === 'Just')
		{
			lang = options.defaultHighlighting._0;
		}

		if (typeof hljs !== 'undefined' && lang && hljs.listLanguages().indexOf(lang) >= 0)
		{
			return hljs.highlight(lang, code, true).value;
		}

		return code;
	}

	var gfm = options.githubFlavored;
	if (gfm.ctor === 'Just')
	{
		return {
			highlight: toHighlight,
			gfm: true,
			tables: gfm._0.tables,
			breaks: gfm._0.breaks,
			sanitize: options.sanitize,
			smartypants: options.smartypants
		};
	}

	return {
		highlight: toHighlight,
		gfm: false,
		tables: false,
		breaks: false,
		sanitize: options.sanitize,
		smartypants: options.smartypants
	};
}


// EXPORTS

return {
	toHtml: F3(toHtml)
};

}();

var _evancz$elm_markdown$Markdown$toHtmlWith = _evancz$elm_markdown$Native_Markdown.toHtml;
var _evancz$elm_markdown$Markdown$defaultOptions = {
	githubFlavored: _elm_lang$core$Maybe$Just(
		{tables: false, breaks: false}),
	defaultHighlighting: _elm_lang$core$Maybe$Nothing,
	sanitize: false,
	smartypants: false
};
var _evancz$elm_markdown$Markdown$toHtml = F2(
	function (attrs, string) {
		return A3(_evancz$elm_markdown$Native_Markdown.toHtml, _evancz$elm_markdown$Markdown$defaultOptions, attrs, string);
	});
var _evancz$elm_markdown$Markdown$Options = F4(
	function (a, b, c, d) {
		return {githubFlavored: a, defaultHighlighting: b, sanitize: c, smartypants: d};
	});

var _rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier = function (identifier) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('[^a-zA-Z0-9_-]'),
		function (_p0) {
			return '';
		},
		A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex('\\s+'),
			function (_p1) {
				return '-';
			},
			_elm_lang$core$String$trim(
				_elm_lang$core$Basics$toString(identifier))));
};
var _rtfeldman$elm_css_util$Css_Helpers$identifierToString = F2(
	function (name, identifier) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(name),
			_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(identifier));
	});

var _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations = function (declarations) {
	dropEmptyDeclarations:
	while (true) {
		var _p0 = declarations;
		if (_p0.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			switch (_p0._0.ctor) {
				case 'StyleBlockDeclaration':
					var _p1 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0._2)) {
						var _v1 = _p1;
						declarations = _v1;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p1)
						};
					}
				case 'MediaRule':
					var _p4 = _p0._1;
					if (A2(
						_elm_lang$core$List$all,
						function (_p2) {
							var _p3 = _p2;
							return _elm_lang$core$List$isEmpty(_p3._2);
						},
						_p0._0._1)) {
						var _v3 = _p4;
						declarations = _v3;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p4)
						};
					}
				case 'SupportsRule':
					var _p5 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v4 = _p5;
						declarations = _v4;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p5)
						};
					}
				case 'DocumentRule':
					return {
						ctor: '::',
						_0: _p0._0,
						_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p0._1)
					};
				case 'PageRule':
					var _p6 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v5 = _p6;
						declarations = _v5;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p6)
						};
					}
				case 'FontFace':
					var _p7 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v6 = _p7;
						declarations = _v6;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p7)
						};
					}
				case 'Keyframes':
					var _p8 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v7 = _p8;
						declarations = _v7;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p8)
						};
					}
				case 'Viewport':
					var _p9 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v8 = _p9;
						declarations = _v8;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p9)
						};
					}
				case 'CounterStyle':
					var _p10 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v9 = _p10;
						declarations = _v9;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p10)
						};
					}
				default:
					var _p13 = _p0._1;
					if (A2(
						_elm_lang$core$List$all,
						function (_p11) {
							var _p12 = _p11;
							return _elm_lang$core$List$isEmpty(_p12._1);
						},
						_p0._0._0)) {
						var _v11 = _p13;
						declarations = _v11;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p13)
						};
					}
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Structure$dropEmpty = function (_p14) {
	var _p15 = _p14;
	return {
		charset: _p15.charset,
		imports: _p15.imports,
		namespaces: _p15.namespaces,
		declarations: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p15.declarations)
	};
};
var _rtfeldman$elm_css$Css_Structure$concatMapLast = F2(
	function (update, list) {
		var _p16 = list;
		if (_p16.ctor === '[]') {
			return list;
		} else {
			if (_p16._1.ctor === '[]') {
				return update(_p16._0);
			} else {
				return {
					ctor: '::',
					_0: _p16._0,
					_1: A2(_rtfeldman$elm_css$Css_Structure$concatMapLast, update, _p16._1)
				};
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$mapLast = F2(
	function (update, list) {
		var _p17 = list;
		if (_p17.ctor === '[]') {
			return list;
		} else {
			if (_p17._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: update(_p17._0),
					_1: {ctor: '[]'}
				};
			} else {
				return {
					ctor: '::',
					_0: _p17._0,
					_1: A2(_rtfeldman$elm_css$Css_Structure$mapLast, update, _p17._1)
				};
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$Property = F3(
	function (a, b, c) {
		return {important: a, key: b, value: c};
	});
var _rtfeldman$elm_css$Css_Structure$Stylesheet = F4(
	function (a, b, c, d) {
		return {charset: a, imports: b, namespaces: c, declarations: d};
	});
var _rtfeldman$elm_css$Css_Structure$MediaExpression = F2(
	function (a, b) {
		return {feature: a, value: b};
	});
var _rtfeldman$elm_css$Css_Structure$Compatible = {ctor: 'Compatible'};
var _rtfeldman$elm_css$Css_Structure$FontFeatureValues = function (a) {
	return {ctor: 'FontFeatureValues', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$CounterStyle = function (a) {
	return {ctor: 'CounterStyle', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Viewport = function (a) {
	return {ctor: 'Viewport', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Keyframes = F2(
	function (a, b) {
		return {ctor: 'Keyframes', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$FontFace = function (a) {
	return {ctor: 'FontFace', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$PageRule = F2(
	function (a, b) {
		return {ctor: 'PageRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {ctor: 'DocumentRule', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _rtfeldman$elm_css$Css_Structure$SupportsRule = F2(
	function (a, b) {
		return {ctor: 'SupportsRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$MediaRule = F2(
	function (a, b) {
		return {ctor: 'MediaRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration = function (a) {
	return {ctor: 'StyleBlockDeclaration', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock = F2(
	function (update, declarations) {
		var _p18 = declarations;
		_v15_12:
		do {
			if (_p18.ctor === '[]') {
				return declarations;
			} else {
				if (_p18._1.ctor === '[]') {
					switch (_p18._0.ctor) {
						case 'StyleBlockDeclaration':
							return A2(
								_elm_lang$core$List$map,
								_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration,
								update(_p18._0._0));
						case 'MediaRule':
							if (_p18._0._1.ctor === '::') {
								if (_p18._0._1._1.ctor === '[]') {
									return {
										ctor: '::',
										_0: A2(
											_rtfeldman$elm_css$Css_Structure$MediaRule,
											_p18._0._0,
											update(_p18._0._1._0)),
										_1: {ctor: '[]'}
									};
								} else {
									var _p19 = A2(
										_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock,
										update,
										{
											ctor: '::',
											_0: A2(_rtfeldman$elm_css$Css_Structure$MediaRule, _p18._0._0, _p18._0._1._1),
											_1: {ctor: '[]'}
										});
									if (((_p19.ctor === '::') && (_p19._0.ctor === 'MediaRule')) && (_p19._1.ctor === '[]')) {
										return {
											ctor: '::',
											_0: A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p19._0._0,
												{ctor: '::', _0: _p18._0._1._0, _1: _p19._0._1}),
											_1: {ctor: '[]'}
										};
									} else {
										return _p19;
									}
								}
							} else {
								break _v15_12;
							}
						case 'SupportsRule':
							return {
								ctor: '::',
								_0: A2(
									_rtfeldman$elm_css$Css_Structure$SupportsRule,
									_p18._0._0,
									A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, update, _p18._0._1)),
								_1: {ctor: '[]'}
							};
						case 'DocumentRule':
							return A2(
								_elm_lang$core$List$map,
								A4(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p18._0._0, _p18._0._1, _p18._0._2, _p18._0._3),
								update(_p18._0._4));
						case 'PageRule':
							return declarations;
						case 'FontFace':
							return declarations;
						case 'Keyframes':
							return declarations;
						case 'Viewport':
							return declarations;
						case 'CounterStyle':
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v15_12;
				}
			}
		} while(false);
		return {
			ctor: '::',
			_0: _p18._0,
			_1: A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, update, _p18._1)
		};
	});
var _rtfeldman$elm_css$Css_Structure$StyleBlock = F3(
	function (a, b, c) {
		return {ctor: 'StyleBlock', _0: a, _1: b, _2: c};
	});
var _rtfeldman$elm_css$Css_Structure$withPropertyAppended = F2(
	function (property, _p20) {
		var _p21 = _p20;
		return A3(
			_rtfeldman$elm_css$Css_Structure$StyleBlock,
			_p21._0,
			_p21._1,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p21._2,
				{
					ctor: '::',
					_0: property,
					_1: {ctor: '[]'}
				}));
	});
var _rtfeldman$elm_css$Css_Structure$appendProperty = F2(
	function (property, declarations) {
		var _p22 = declarations;
		if (_p22.ctor === '[]') {
			return declarations;
		} else {
			if (_p22._1.ctor === '[]') {
				switch (_p22._0.ctor) {
					case 'StyleBlockDeclaration':
						return {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
								A2(_rtfeldman$elm_css$Css_Structure$withPropertyAppended, property, _p22._0._0)),
							_1: {ctor: '[]'}
						};
					case 'MediaRule':
						return {
							ctor: '::',
							_0: A2(
								_rtfeldman$elm_css$Css_Structure$MediaRule,
								_p22._0._0,
								A2(
									_rtfeldman$elm_css$Css_Structure$mapLast,
									_rtfeldman$elm_css$Css_Structure$withPropertyAppended(property),
									_p22._0._1)),
							_1: {ctor: '[]'}
						};
					default:
						return declarations;
				}
			} else {
				return {
					ctor: '::',
					_0: _p22._0,
					_1: A2(_rtfeldman$elm_css$Css_Structure$appendProperty, property, _p22._1)
				};
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$appendToLastSelector = F2(
	function (f, styleBlock) {
		var _p23 = styleBlock;
		if (_p23._1.ctor === '[]') {
			var _p24 = _p23._0;
			return {
				ctor: '::',
				_0: A3(
					_rtfeldman$elm_css$Css_Structure$StyleBlock,
					_p24,
					{ctor: '[]'},
					_p23._2),
				_1: {
					ctor: '::',
					_0: A3(
						_rtfeldman$elm_css$Css_Structure$StyleBlock,
						f(_p24),
						{ctor: '[]'},
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				}
			};
		} else {
			var _p26 = _p23._1;
			var _p25 = _p23._0;
			var newFirst = f(_p25);
			var newRest = A2(_elm_lang$core$List$map, f, _p26);
			return {
				ctor: '::',
				_0: A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p25, _p26, _p23._2),
				_1: {
					ctor: '::',
					_0: A3(
						_rtfeldman$elm_css$Css_Structure$StyleBlock,
						newFirst,
						newRest,
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				}
			};
		}
	});
var _rtfeldman$elm_css$Css_Structure$Speech = {ctor: 'Speech'};
var _rtfeldman$elm_css$Css_Structure$Screen = {ctor: 'Screen'};
var _rtfeldman$elm_css$Css_Structure$Print = {ctor: 'Print'};
var _rtfeldman$elm_css$Css_Structure$CustomQuery = function (a) {
	return {ctor: 'CustomQuery', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$NotQuery = F2(
	function (a, b) {
		return {ctor: 'NotQuery', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$OnlyQuery = F2(
	function (a, b) {
		return {ctor: 'OnlyQuery', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$AllQuery = function (a) {
	return {ctor: 'AllQuery', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Selector = F3(
	function (a, b, c) {
		return {ctor: 'Selector', _0: a, _1: b, _2: c};
	});
var _rtfeldman$elm_css$Css_Structure$applyPseudoElement = F2(
	function (pseudo, _p27) {
		var _p28 = _p27;
		return A3(
			_rtfeldman$elm_css$Css_Structure$Selector,
			_p28._0,
			_p28._1,
			_elm_lang$core$Maybe$Just(pseudo));
	});
var _rtfeldman$elm_css$Css_Structure$appendPseudoElementToLastSelector = F2(
	function (pseudo, styleBlock) {
		return A2(
			_rtfeldman$elm_css$Css_Structure$appendToLastSelector,
			_rtfeldman$elm_css$Css_Structure$applyPseudoElement(pseudo),
			styleBlock);
	});
var _rtfeldman$elm_css$Css_Structure$CustomSelector = F2(
	function (a, b) {
		return {ctor: 'CustomSelector', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence = function (a) {
	return {ctor: 'UniversalSelectorSequence', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$TypeSelectorSequence = F2(
	function (a, b) {
		return {ctor: 'TypeSelectorSequence', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatable = F2(
	function (selector, sequence) {
		var _p29 = sequence;
		switch (_p29.ctor) {
			case 'TypeSelectorSequence':
				return A2(
					_rtfeldman$elm_css$Css_Structure$TypeSelectorSequence,
					_p29._0,
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p29._1,
						{
							ctor: '::',
							_0: selector,
							_1: {ctor: '[]'}
						}));
			case 'UniversalSelectorSequence':
				return _rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p29._0,
						{
							ctor: '::',
							_0: selector,
							_1: {ctor: '[]'}
						}));
			default:
				return A2(
					_rtfeldman$elm_css$Css_Structure$CustomSelector,
					_p29._0,
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p29._1,
						{
							ctor: '::',
							_0: selector,
							_1: {ctor: '[]'}
						}));
		}
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator = F2(
	function (selector, list) {
		var _p30 = list;
		if (_p30.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if ((_p30._0.ctor === '_Tuple2') && (_p30._1.ctor === '[]')) {
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: _p30._0._0,
						_1: A2(_rtfeldman$elm_css$Css_Structure$appendRepeatable, selector, _p30._0._1)
					},
					_1: {ctor: '[]'}
				};
			} else {
				return {
					ctor: '::',
					_0: _p30._0,
					_1: A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator, selector, _p30._1)
				};
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatableSelector = F2(
	function (repeatableSimpleSelector, selector) {
		var _p31 = selector;
		if (_p31._1.ctor === '[]') {
			return A3(
				_rtfeldman$elm_css$Css_Structure$Selector,
				A2(_rtfeldman$elm_css$Css_Structure$appendRepeatable, repeatableSimpleSelector, _p31._0),
				{ctor: '[]'},
				_p31._2);
		} else {
			return A3(
				_rtfeldman$elm_css$Css_Structure$Selector,
				_p31._0,
				A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator, repeatableSimpleSelector, _p31._1),
				_p31._2);
		}
	});
var _rtfeldman$elm_css$Css_Structure$extendLastSelector = F2(
	function (selector, declarations) {
		var _p32 = declarations;
		_v24_15:
		do {
			if (_p32.ctor === '[]') {
				return declarations;
			} else {
				if (_p32._1.ctor === '[]') {
					switch (_p32._0.ctor) {
						case 'StyleBlockDeclaration':
							if (_p32._0._0._1.ctor === '[]') {
								return {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
										A3(
											_rtfeldman$elm_css$Css_Structure$StyleBlock,
											A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p32._0._0._0),
											{ctor: '[]'},
											_p32._0._0._2)),
									_1: {ctor: '[]'}
								};
							} else {
								var newRest = A2(
									_rtfeldman$elm_css$Css_Structure$mapLast,
									_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
									_p32._0._0._1);
								return {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
										A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p32._0._0._0, newRest, _p32._0._0._2)),
									_1: {ctor: '[]'}
								};
							}
						case 'MediaRule':
							if (_p32._0._1.ctor === '::') {
								if (_p32._0._1._1.ctor === '[]') {
									if (_p32._0._1._0._1.ctor === '[]') {
										var newStyleBlock = A3(
											_rtfeldman$elm_css$Css_Structure$StyleBlock,
											A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p32._0._1._0._0),
											{ctor: '[]'},
											_p32._0._1._0._2);
										return {
											ctor: '::',
											_0: A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p32._0._0,
												{
													ctor: '::',
													_0: newStyleBlock,
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										};
									} else {
										var newRest = A2(
											_rtfeldman$elm_css$Css_Structure$mapLast,
											_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
											_p32._0._1._0._1);
										var newStyleBlock = A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p32._0._1._0._0, newRest, _p32._0._1._0._2);
										return {
											ctor: '::',
											_0: A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p32._0._0,
												{
													ctor: '::',
													_0: newStyleBlock,
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										};
									}
								} else {
									var _p33 = A2(
										_rtfeldman$elm_css$Css_Structure$extendLastSelector,
										selector,
										{
											ctor: '::',
											_0: A2(_rtfeldman$elm_css$Css_Structure$MediaRule, _p32._0._0, _p32._0._1._1),
											_1: {ctor: '[]'}
										});
									if (((_p33.ctor === '::') && (_p33._0.ctor === 'MediaRule')) && (_p33._1.ctor === '[]')) {
										return {
											ctor: '::',
											_0: A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p33._0._0,
												{ctor: '::', _0: _p32._0._1._0, _1: _p33._0._1}),
											_1: {ctor: '[]'}
										};
									} else {
										return _p33;
									}
								}
							} else {
								break _v24_15;
							}
						case 'SupportsRule':
							return {
								ctor: '::',
								_0: A2(
									_rtfeldman$elm_css$Css_Structure$SupportsRule,
									_p32._0._0,
									A2(_rtfeldman$elm_css$Css_Structure$extendLastSelector, selector, _p32._0._1)),
								_1: {ctor: '[]'}
							};
						case 'DocumentRule':
							if (_p32._0._4._1.ctor === '[]') {
								var newStyleBlock = A3(
									_rtfeldman$elm_css$Css_Structure$StyleBlock,
									A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p32._0._4._0),
									{ctor: '[]'},
									_p32._0._4._2);
								return {
									ctor: '::',
									_0: A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p32._0._0, _p32._0._1, _p32._0._2, _p32._0._3, newStyleBlock),
									_1: {ctor: '[]'}
								};
							} else {
								var newRest = A2(
									_rtfeldman$elm_css$Css_Structure$mapLast,
									_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
									_p32._0._4._1);
								var newStyleBlock = A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p32._0._4._0, newRest, _p32._0._4._2);
								return {
									ctor: '::',
									_0: A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p32._0._0, _p32._0._1, _p32._0._2, _p32._0._3, newStyleBlock),
									_1: {ctor: '[]'}
								};
							}
						case 'PageRule':
							return declarations;
						case 'FontFace':
							return declarations;
						case 'Keyframes':
							return declarations;
						case 'Viewport':
							return declarations;
						case 'CounterStyle':
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v24_15;
				}
			}
		} while(false);
		return {
			ctor: '::',
			_0: _p32._0,
			_1: A2(_rtfeldman$elm_css$Css_Structure$extendLastSelector, selector, _p32._1)
		};
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatableToLastSelector = F2(
	function (selector, styleBlock) {
		return A2(
			_rtfeldman$elm_css$Css_Structure$appendToLastSelector,
			_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
			styleBlock);
	});
var _rtfeldman$elm_css$Css_Structure$PseudoClassSelector = function (a) {
	return {ctor: 'PseudoClassSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$IdSelector = function (a) {
	return {ctor: 'IdSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$ClassSelector = function (a) {
	return {ctor: 'ClassSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$TypeSelector = function (a) {
	return {ctor: 'TypeSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$PseudoElement = function (a) {
	return {ctor: 'PseudoElement', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Descendant = {ctor: 'Descendant'};
var _rtfeldman$elm_css$Css_Structure$Child = {ctor: 'Child'};
var _rtfeldman$elm_css$Css_Structure$GeneralSibling = {ctor: 'GeneralSibling'};
var _rtfeldman$elm_css$Css_Structure$AdjacentSibling = {ctor: 'AdjacentSibling'};

var _rtfeldman$elm_css$Css_Preprocess$propertyToPair = function (property) {
	var value = property.important ? A2(_elm_lang$core$Basics_ops['++'], property.value, ' !important') : property.value;
	return {ctor: '_Tuple2', _0: property.key, _1: value};
};
var _rtfeldman$elm_css$Css_Preprocess$toPropertyPairs = function (styles) {
	toPropertyPairs:
	while (true) {
		var _p0 = styles;
		if (_p0.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			switch (_p0._0.ctor) {
				case 'AppendProperty':
					return {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css_Preprocess$propertyToPair(_p0._0._0),
						_1: _rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._1)
					};
				case 'ApplyStyles':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						_rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._0._0),
						_rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._1));
				default:
					var _v1 = _p0._1;
					styles = _v1;
					continue toPropertyPairs;
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet = function (_p1) {
	var _p2 = _p1;
	return _p2._0;
};
var _rtfeldman$elm_css$Css_Preprocess$toMediaRule = F2(
	function (mediaQueries, declaration) {
		var _p3 = declaration;
		switch (_p3.ctor) {
			case 'StyleBlockDeclaration':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					mediaQueries,
					{
						ctor: '::',
						_0: _p3._0,
						_1: {ctor: '[]'}
					});
			case 'MediaRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p3._0),
					_p3._1);
			case 'SupportsRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$SupportsRule,
					_p3._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Preprocess$toMediaRule(mediaQueries),
						_p3._1));
			case 'DocumentRule':
				return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p3._0, _p3._1, _p3._2, _p3._3, _p3._4);
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return declaration;
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var _rtfeldman$elm_css$Css_Preprocess$stylesheet = function (snippets) {
	return {
		charset: _elm_lang$core$Maybe$Nothing,
		imports: {ctor: '[]'},
		namespaces: {ctor: '[]'},
		snippets: snippets
	};
};
var _rtfeldman$elm_css$Css_Preprocess$Property = F4(
	function (a, b, c, d) {
		return {key: a, value: b, important: c, warnings: d};
	});
var _rtfeldman$elm_css$Css_Preprocess$Stylesheet = F4(
	function (a, b, c, d) {
		return {charset: a, imports: b, namespaces: c, snippets: d};
	});
var _rtfeldman$elm_css$Css_Preprocess$ApplyStyles = function (a) {
	return {ctor: 'ApplyStyles', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$WithMedia = F2(
	function (a, b) {
		return {ctor: 'WithMedia', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement = F2(
	function (a, b) {
		return {ctor: 'WithPseudoElement', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$NestSnippet = F2(
	function (a, b) {
		return {ctor: 'NestSnippet', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$ExtendSelector = F2(
	function (a, b) {
		return {ctor: 'ExtendSelector', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$AppendProperty = function (a) {
	return {ctor: 'AppendProperty', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$mapLastProperty = F2(
	function (update, style) {
		var _p4 = style;
		switch (_p4.ctor) {
			case 'AppendProperty':
				return _rtfeldman$elm_css$Css_Preprocess$AppendProperty(
					update(_p4._0));
			case 'ExtendSelector':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$ExtendSelector,
					_p4._0,
					A2(_rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty, update, _p4._1));
			case 'NestSnippet':
				return style;
			case 'WithPseudoElement':
				return style;
			case 'WithMedia':
				return style;
			default:
				return _rtfeldman$elm_css$Css_Preprocess$ApplyStyles(
					A2(
						_rtfeldman$elm_css$Css_Structure$mapLast,
						_rtfeldman$elm_css$Css_Preprocess$mapLastProperty(update),
						_p4._0));
		}
	});
var _rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty = F2(
	function (update, styles) {
		var _p5 = styles;
		if (_p5.ctor === '[]') {
			return styles;
		} else {
			if (_p5._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: A2(_rtfeldman$elm_css$Css_Preprocess$mapLastProperty, update, _p5._0),
					_1: {ctor: '[]'}
				};
			} else {
				return {
					ctor: '::',
					_0: _p5._0,
					_1: A2(_rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty, update, _p5._1)
				};
			}
		}
	});
var _rtfeldman$elm_css$Css_Preprocess$Snippet = function (a) {
	return {ctor: 'Snippet', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$FontFeatureValues = function (a) {
	return {ctor: 'FontFeatureValues', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$CounterStyle = function (a) {
	return {ctor: 'CounterStyle', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$Viewport = function (a) {
	return {ctor: 'Viewport', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$Keyframes = F2(
	function (a, b) {
		return {ctor: 'Keyframes', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$FontFace = function (a) {
	return {ctor: 'FontFace', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$PageRule = F2(
	function (a, b) {
		return {ctor: 'PageRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {ctor: 'DocumentRule', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _rtfeldman$elm_css$Css_Preprocess$SupportsRule = F2(
	function (a, b) {
		return {ctor: 'SupportsRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$MediaRule = F2(
	function (a, b) {
		return {ctor: 'MediaRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration = function (a) {
	return {ctor: 'StyleBlockDeclaration', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$StyleBlock = F3(
	function (a, b, c) {
		return {ctor: 'StyleBlock', _0: a, _1: b, _2: c};
	});

var _rtfeldman$hex$Hex$toString = function (num) {
	return _elm_lang$core$String$fromList(
		(_elm_lang$core$Native_Utils.cmp(num, 0) < 0) ? {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('-'),
			_1: A2(
				_rtfeldman$hex$Hex$unsafePositiveToDigits,
				{ctor: '[]'},
				_elm_lang$core$Basics$negate(num))
		} : A2(
			_rtfeldman$hex$Hex$unsafePositiveToDigits,
			{ctor: '[]'},
			num));
};
var _rtfeldman$hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(num, 16) < 0) {
				return {
					ctor: '::',
					_0: _rtfeldman$hex$Hex$unsafeToDigit(num),
					_1: digits
				};
			} else {
				var _v0 = {
					ctor: '::',
					_0: _rtfeldman$hex$Hex$unsafeToDigit(
						A2(_elm_lang$core$Basics_ops['%'], num, 16)),
					_1: digits
				},
					_v1 = (num / 16) | 0;
				digits = _v0;
				num = _v1;
				continue unsafePositiveToDigits;
			}
		}
	});
var _rtfeldman$hex$Hex$unsafeToDigit = function (num) {
	var _p0 = num;
	switch (_p0) {
		case 0:
			return _elm_lang$core$Native_Utils.chr('0');
		case 1:
			return _elm_lang$core$Native_Utils.chr('1');
		case 2:
			return _elm_lang$core$Native_Utils.chr('2');
		case 3:
			return _elm_lang$core$Native_Utils.chr('3');
		case 4:
			return _elm_lang$core$Native_Utils.chr('4');
		case 5:
			return _elm_lang$core$Native_Utils.chr('5');
		case 6:
			return _elm_lang$core$Native_Utils.chr('6');
		case 7:
			return _elm_lang$core$Native_Utils.chr('7');
		case 8:
			return _elm_lang$core$Native_Utils.chr('8');
		case 9:
			return _elm_lang$core$Native_Utils.chr('9');
		case 10:
			return _elm_lang$core$Native_Utils.chr('a');
		case 11:
			return _elm_lang$core$Native_Utils.chr('b');
		case 12:
			return _elm_lang$core$Native_Utils.chr('c');
		case 13:
			return _elm_lang$core$Native_Utils.chr('d');
		case 14:
			return _elm_lang$core$Native_Utils.chr('e');
		case 15:
			return _elm_lang$core$Native_Utils.chr('f');
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'Hex',
				{
					start: {line: 138, column: 5},
					end: {line: 188, column: 84}
				},
				_p0)(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Tried to convert ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_rtfeldman$hex$Hex$toString(num),
						' to hexadecimal.')));
	}
};
var _rtfeldman$hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		var _p2 = chars;
		if (_p2.ctor === '[]') {
			return _elm_lang$core$Result$Ok(accumulated);
		} else {
			var recurse = function (additional) {
				return A3(
					_rtfeldman$hex$Hex$fromStringHelp,
					position - 1,
					_p2._1,
					accumulated + (additional * Math.pow(16, position)));
			};
			var _p3 = _p2._0;
			switch (_p3.valueOf()) {
				case '0':
					return recurse(0);
				case '1':
					return recurse(1);
				case '2':
					return recurse(2);
				case '3':
					return recurse(3);
				case '4':
					return recurse(4);
				case '5':
					return recurse(5);
				case '6':
					return recurse(6);
				case '7':
					return recurse(7);
				case '8':
					return recurse(8);
				case '9':
					return recurse(9);
				case 'a':
					return recurse(10);
				case 'b':
					return recurse(11);
				case 'c':
					return recurse(12);
				case 'd':
					return recurse(13);
				case 'e':
					return recurse(14);
				case 'f':
					return recurse(15);
				default:
					return _elm_lang$core$Result$Err(
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p3),
							' is not a valid hexadecimal character.'));
			}
		}
	});
var _rtfeldman$hex$Hex$fromString = function (str) {
	if (_elm_lang$core$String$isEmpty(str)) {
		return _elm_lang$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var formatError = function (err) {
			return A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(str),
					_1: {
						ctor: '::',
						_0: 'is not a valid hexadecimal string because',
						_1: {
							ctor: '::',
							_0: err,
							_1: {ctor: '[]'}
						}
					}
				});
		};
		var result = function () {
			if (A2(_elm_lang$core$String$startsWith, '-', str)) {
				var list = A2(
					_elm_lang$core$Maybe$withDefault,
					{ctor: '[]'},
					_elm_lang$core$List$tail(
						_elm_lang$core$String$toList(str)));
				return A2(
					_elm_lang$core$Result$map,
					_elm_lang$core$Basics$negate,
					A3(
						_rtfeldman$hex$Hex$fromStringHelp,
						_elm_lang$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					_rtfeldman$hex$Hex$fromStringHelp,
					_elm_lang$core$String$length(str) - 1,
					_elm_lang$core$String$toList(str),
					0);
			}
		}();
		return A2(_elm_lang$core$Result$mapError, formatError, result);
	}
};

var _rtfeldman$elm_css$Css$manipulation = {value: 'manipulation', touchAction: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$pinchZoom = {value: 'pinch-zoom', touchAction: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$panDown = {value: 'pan-down', touchAction: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$panUp = {value: 'pan-up', touchAction: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$panY = {value: 'pan-y', touchAction: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$panRight = {value: 'pan-right', touchAction: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$panLeft = {value: 'pan-left', touchAction: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$panX = {value: 'pan-x', touchAction: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$asPairsDEPRECATED = _rtfeldman$elm_css$Css_Preprocess$toPropertyPairs;
var _rtfeldman$elm_css$Css$stringsToValue = function (list) {
	return _elm_lang$core$List$isEmpty(list) ? {value: 'none'} : {
		value: A2(
			_elm_lang$core$String$join,
			', ',
			A2(
				_elm_lang$core$List$map,
				function (s) {
					return s;
				},
				list))
	};
};
var _rtfeldman$elm_css$Css$valuesOrNone = function (list) {
	return _elm_lang$core$List$isEmpty(list) ? {value: 'none'} : {
		value: A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.value;
				},
				list))
	};
};
var _rtfeldman$elm_css$Css$stringToInt = function (str) {
	return A2(
		_elm_lang$core$Result$withDefault,
		0,
		_elm_lang$core$String$toInt(str));
};
var _rtfeldman$elm_css$Css$numberToString = function (num) {
	return _elm_lang$core$Basics$toString(num + 0);
};
var _rtfeldman$elm_css$Css$numericalPercentageToString = function (value) {
	return A3(
		_elm_lang$core$Basics$flip,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		'%',
		_rtfeldman$elm_css$Css$numberToString(
			A2(
				F2(
					function (x, y) {
						return x * y;
					}),
				100,
				value)));
};
var _rtfeldman$elm_css$Css$pseudoElement = function (element) {
	return _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
		_rtfeldman$elm_css$Css_Structure$PseudoElement(element));
};
var _rtfeldman$elm_css$Css$after = _rtfeldman$elm_css$Css$pseudoElement('after');
var _rtfeldman$elm_css$Css$before = _rtfeldman$elm_css$Css$pseudoElement('before');
var _rtfeldman$elm_css$Css$firstLetter = _rtfeldman$elm_css$Css$pseudoElement('first-letter');
var _rtfeldman$elm_css$Css$firstLine = _rtfeldman$elm_css$Css$pseudoElement('first-line');
var _rtfeldman$elm_css$Css$selection = _rtfeldman$elm_css$Css$pseudoElement('selection');
var _rtfeldman$elm_css$Css$pseudoClass = function ($class) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector($class));
};
var _rtfeldman$elm_css$Css$active = _rtfeldman$elm_css$Css$pseudoClass('active');
var _rtfeldman$elm_css$Css$any = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'any(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$checked = _rtfeldman$elm_css$Css$pseudoClass('checked');
var _rtfeldman$elm_css$Css$disabled = _rtfeldman$elm_css$Css$pseudoClass('disabled');
var _rtfeldman$elm_css$Css$empty = _rtfeldman$elm_css$Css$pseudoClass('empty');
var _rtfeldman$elm_css$Css$enabled = _rtfeldman$elm_css$Css$pseudoClass('enabled');
var _rtfeldman$elm_css$Css$first = _rtfeldman$elm_css$Css$pseudoClass('first');
var _rtfeldman$elm_css$Css$firstChild = _rtfeldman$elm_css$Css$pseudoClass('first-child');
var _rtfeldman$elm_css$Css$firstOfType = _rtfeldman$elm_css$Css$pseudoClass('first-of-type');
var _rtfeldman$elm_css$Css$fullscreen = _rtfeldman$elm_css$Css$pseudoClass('fullscreen');
var _rtfeldman$elm_css$Css$focus = _rtfeldman$elm_css$Css$pseudoClass('focus');
var _rtfeldman$elm_css$Css$hover = _rtfeldman$elm_css$Css$pseudoClass('hover');
var _rtfeldman$elm_css$Css$visited = _rtfeldman$elm_css$Css$pseudoClass('visited');
var _rtfeldman$elm_css$Css$indeterminate = _rtfeldman$elm_css$Css$pseudoClass('indeterminate');
var _rtfeldman$elm_css$Css$invalid = _rtfeldman$elm_css$Css$pseudoClass('invalid');
var _rtfeldman$elm_css$Css$lang = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'lang(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$lastChild = _rtfeldman$elm_css$Css$pseudoClass('last-child');
var _rtfeldman$elm_css$Css$lastOfType = _rtfeldman$elm_css$Css$pseudoClass('last-of-type');
var _rtfeldman$elm_css$Css$link = _rtfeldman$elm_css$Css$pseudoClass('link');
var _rtfeldman$elm_css$Css$nthChild = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'nth-child(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$nthLastChild = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'nth-last-child(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$nthLastOfType = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'nth-last-of-type(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$nthOfType = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'nth-of-type(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$onlyChild = _rtfeldman$elm_css$Css$pseudoClass('only-child');
var _rtfeldman$elm_css$Css$onlyOfType = _rtfeldman$elm_css$Css$pseudoClass('only-of-type');
var _rtfeldman$elm_css$Css$optional = _rtfeldman$elm_css$Css$pseudoClass('optional');
var _rtfeldman$elm_css$Css$outOfRange = _rtfeldman$elm_css$Css$pseudoClass('out-of-range');
var _rtfeldman$elm_css$Css$readWrite = _rtfeldman$elm_css$Css$pseudoClass('read-write');
var _rtfeldman$elm_css$Css$required = _rtfeldman$elm_css$Css$pseudoClass('required');
var _rtfeldman$elm_css$Css$root = _rtfeldman$elm_css$Css$pseudoClass('root');
var _rtfeldman$elm_css$Css$scope = _rtfeldman$elm_css$Css$pseudoClass('scope');
var _rtfeldman$elm_css$Css$target = _rtfeldman$elm_css$Css$pseudoClass('target');
var _rtfeldman$elm_css$Css$valid = _rtfeldman$elm_css$Css$pseudoClass('valid');
var _rtfeldman$elm_css$Css$directionalityToString = function (directionality) {
	var _p0 = directionality;
	if (_p0.ctor === 'Ltr') {
		return 'ltr';
	} else {
		return 'rtl';
	}
};
var _rtfeldman$elm_css$Css$dir = function (directionality) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'dir(',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_rtfeldman$elm_css$Css$directionalityToString(directionality),
				')')));
};
var _rtfeldman$elm_css$Css$propertyWithWarnings = F3(
	function (warnings, key, value) {
		return _rtfeldman$elm_css$Css_Preprocess$AppendProperty(
			{key: key, value: value, important: false, warnings: warnings});
	});
var _rtfeldman$elm_css$Css$property = _rtfeldman$elm_css$Css$propertyWithWarnings(
	{ctor: '[]'});
var _rtfeldman$elm_css$Css$batch = _rtfeldman$elm_css$Css_Preprocess$ApplyStyles;
var _rtfeldman$elm_css$Css$animationNames = function (identifiers) {
	var value = A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			_rtfeldman$elm_css_util$Css_Helpers$identifierToString(''),
			identifiers));
	return A2(_rtfeldman$elm_css$Css$property, 'animation-name', value);
};
var _rtfeldman$elm_css$Css$animationName = function (identifier) {
	return _rtfeldman$elm_css$Css$animationNames(
		{
			ctor: '::',
			_0: identifier,
			_1: {ctor: '[]'}
		});
};
var _rtfeldman$elm_css$Css$preLine = {value: 'pre-line', whiteSpace: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$preWrap = {value: 'pre-wrap', whiteSpace: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$pre = {value: 'pre', whiteSpace: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$grabbing = {value: 'grabbing', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$grab = {value: 'grab', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$zoomOut = {value: 'zoom-out', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$zoomIn = {value: 'zoom-in', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$allScroll = {value: 'all-scroll', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$rowResize = {value: 'row-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$colResize = {value: 'col-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$nwseResize = {value: 'nwse-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$neswResize = {value: 'nesw-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$nsResize = {value: 'ns-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$ewResize = {value: 'ew-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$wResize = {value: 'w-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$swResize = {value: 'sw-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$seResize = {value: 'se-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$sResize = {value: 's-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$nwResize = {value: 'nw-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$neResize = {value: 'ne-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$nResize = {value: 'n-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$eResize = {value: 'e-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$notAllowed = {value: 'not-allowed', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$noDrop = {value: 'no-drop', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$move = {value: 'move', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$copy = {value: 'copy', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$cursorAlias = {value: 'alias', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$verticalText = {value: 'vertical-text', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$text_ = {value: 'text', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$cell = {value: 'cell', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$wait = {value: 'wait', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$progress = {value: 'progress', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$pointer = {value: 'pointer', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$help = {value: 'help', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$contextMenu = {value: 'context-menu', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$crosshair = {value: 'crosshair', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$default = {value: 'default', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$fontWeight = function (_p1) {
	var _p2 = _p1;
	var _p3 = _p2.value;
	var validWeight = function (weight) {
		return (!_elm_lang$core$Native_Utils.eq(
			_p3,
			_elm_lang$core$Basics$toString(weight))) ? true : A2(
			_elm_lang$core$List$member,
			weight,
			A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return x * y;
					})(100),
				A2(_elm_lang$core$List$range, 1, 9)));
	};
	var warnings = validWeight(
		_rtfeldman$elm_css$Css$stringToInt(_p3)) ? {ctor: '[]'} : {
		ctor: '::',
		_0: A2(
			_elm_lang$core$Basics_ops['++'],
			'fontWeight ',
			A2(_elm_lang$core$Basics_ops['++'], _p3, ' is invalid. Valid weights are: 100, 200, 300, 400, 500, 600, 700, 800, 900. Please see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Values')),
		_1: {ctor: '[]'}
	};
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'font-weight', _p3);
};
var _rtfeldman$elm_css$Css$fontFeatureSettingsList = function (featureTagValues) {
	var warnings = _elm_lang$core$List$concat(
		A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.warnings;
			},
			featureTagValues));
	var value = A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.value;
			},
			featureTagValues));
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'font-feature-settings', value);
};
var _rtfeldman$elm_css$Css$fontFeatureSettings = function (_p4) {
	var _p5 = _p4;
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, _p5.warnings, 'font-feature-settings', _p5.value);
};
var _rtfeldman$elm_css$Css$qt = function (str) {
	return _elm_lang$core$Basics$toString(str);
};
var _rtfeldman$elm_css$Css$fontFace = function (value) {
	return A2(_elm_lang$core$Basics_ops['++'], 'font-face ', value);
};
var _rtfeldman$elm_css$Css$src_ = function (value) {
	return _elm_lang$core$Basics$toString(value.value);
};
var _rtfeldman$elm_css$Css$color = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'color', c.value);
};
var _rtfeldman$elm_css$Css$backgroundColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'background-color', c.value);
};
var _rtfeldman$elm_css$Css$outlineColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'outline-color', c.value);
};
var _rtfeldman$elm_css$Css$borderColor4 = F4(
	function (c1, c2, c3, c4) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: c1.value,
				_1: {
					ctor: '::',
					_0: c2.value,
					_1: {
						ctor: '::',
						_0: c3.value,
						_1: {
							ctor: '::',
							_0: c4.value,
							_1: {ctor: '[]'}
						}
					}
				}
			});
		var warnings = A2(
			_elm_lang$core$Basics_ops['++'],
			c1.warnings,
			A2(
				_elm_lang$core$Basics_ops['++'],
				c2.warnings,
				A2(_elm_lang$core$Basics_ops['++'], c3.warnings, c4.warnings)));
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _rtfeldman$elm_css$Css$borderColor3 = F3(
	function (c1, c2, c3) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: c1.value,
				_1: {
					ctor: '::',
					_0: c2.value,
					_1: {
						ctor: '::',
						_0: c3.value,
						_1: {ctor: '[]'}
					}
				}
			});
		var warnings = A2(
			_elm_lang$core$Basics_ops['++'],
			c1.warnings,
			A2(_elm_lang$core$Basics_ops['++'], c2.warnings, c3.warnings));
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _rtfeldman$elm_css$Css$borderColor2 = F2(
	function (c1, c2) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: c1.value,
				_1: {
					ctor: '::',
					_0: c2.value,
					_1: {ctor: '[]'}
				}
			});
		var warnings = A2(_elm_lang$core$Basics_ops['++'], c1.warnings, c2.warnings);
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _rtfeldman$elm_css$Css$borderColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-color', c.value);
};
var _rtfeldman$elm_css$Css$borderBlockEndColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-block-end-color', c.value);
};
var _rtfeldman$elm_css$Css$borderTopColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-top-color', c.value);
};
var _rtfeldman$elm_css$Css$borderRightColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-right-color', c.value);
};
var _rtfeldman$elm_css$Css$borderLeftColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-left-color', c.value);
};
var _rtfeldman$elm_css$Css$borderInlineEndColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-inline-end-color', c.value);
};
var _rtfeldman$elm_css$Css$borderInlineStartColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-inline-start-color', c.value);
};
var _rtfeldman$elm_css$Css$borderBottomColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-bottom-color', c.value);
};
var _rtfeldman$elm_css$Css$borderBlockStartColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-block-start-color', c.value);
};
var _rtfeldman$elm_css$Css$featureTag2 = F2(
	function (tag, value) {
		var potentialWarnings = {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: !_elm_lang$core$Native_Utils.eq(
					_elm_lang$core$String$length(tag),
					4),
				_1: A2(
					_elm_lang$core$Basics_ops['++'],
					'Feature tags must be exactly 4 characters long. ',
					A2(_elm_lang$core$Basics_ops['++'], tag, ' is invalid.'))
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.cmp(value, 0) < 0,
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						'Feature values cannot be negative. ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(value),
							' is invalid.'))
				},
				_1: {ctor: '[]'}
			}
		};
		var warnings = A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$second,
			A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$first, potentialWarnings));
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(tag),
				A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					_elm_lang$core$Basics$toString(value))),
			featureTagValue: _rtfeldman$elm_css$Css_Structure$Compatible,
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css$featureTag = function (tag) {
	return A2(_rtfeldman$elm_css$Css$featureTag2, tag, 1);
};
var _rtfeldman$elm_css$Css$featureOff = 0;
var _rtfeldman$elm_css$Css$featureOn = 1;
var _rtfeldman$elm_css$Css$slashedZero = {value: 'slashed-zero', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$ordinal = {value: 'ordinal', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$stackedFractions = {value: 'stacked-fractions', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$diagonalFractions = {value: 'diagonal-fractions', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tabularNums = {value: 'tabular-nums', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$proportionalNums = {value: 'proportional-nums', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$oldstyleNums = {value: 'oldstyle-nums', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$liningNums = {value: 'lining-nums', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$noContextual = {value: 'no-contextual', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$contextual = {value: 'context', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$noHistoricalLigatures = {value: 'no-historical-ligatures', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$historicalLigatures = {value: 'historical-ligatures', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$noDiscretionaryLigatures = {value: 'no-discretionary-ligatures', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$discretionaryLigatures = {value: 'discretionary-ligatures', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$noCommonLigatures = {value: 'no-common-ligatures', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$commonLigatures = {value: 'common-ligatures', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$titlingCaps = {value: 'titling-caps', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$unicase = {value: 'unicase', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$allPetiteCaps = {value: 'all-petite-caps', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$petiteCaps = {value: 'petite-caps', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$allSmallCaps = {value: 'all-small-caps', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$smallCaps = {value: 'small-caps', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$bolder = {value: 'bolder', fontWeight: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$lighter = {value: 'lighter', fontWeight: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$bold = {value: 'bold', fontWeight: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$oblique = {value: 'oblique', fontStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$italic = {value: 'italic', fontStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$normal = {
	value: 'normal',
	warnings: {ctor: '[]'},
	fontStyle: _rtfeldman$elm_css$Css_Structure$Compatible,
	fontWeight: _rtfeldman$elm_css$Css_Structure$Compatible,
	featureTagValue: _rtfeldman$elm_css$Css_Structure$Compatible,
	overflowWrap: _rtfeldman$elm_css$Css_Structure$Compatible,
	whiteSpace: _rtfeldman$elm_css$Css_Structure$Compatible
};
var _rtfeldman$elm_css$Css$larger = {value: 'larger', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$smaller = {value: 'smaller', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$xxLarge = {value: 'xx-large', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$xLarge = {value: 'x-large', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$large = {value: 'large', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$medium = {value: 'medium', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$small = {value: 'small', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$xSmall = {value: 'x-small', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$xxSmall = {value: 'xx-small', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$fantasy = {value: 'fantasy', fontFamily: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$cursive = {value: 'cursive', fontFamily: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$monospace = {value: 'monospace', fontFamily: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$sansSerif = {value: 'sans-serif', fontFamily: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$serif = {value: 'serif', fontFamily: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$absolute = {value: 'absolute', position: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$relative = {value: 'relative', position: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$sticky = {value: 'sticky', position: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$fixed = {value: 'fixed', position: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundAttachment: _rtfeldman$elm_css$Css_Structure$Compatible, tableLayout: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$static = {value: 'static', position: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$fillAvailable = {value: 'fill-available', minMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$fitContent = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$fillAvailable,
	{value: 'fit-content'});
var _rtfeldman$elm_css$Css$minContent = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$fillAvailable,
	{value: 'min-content'});
var _rtfeldman$elm_css$Css$maxContent = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$fillAvailable,
	{value: 'max-content'});
var _rtfeldman$elm_css$Css$displayFlex = A2(_rtfeldman$elm_css$Css$property, 'display', 'flex');
var _rtfeldman$elm_css$Css$textEmphasisColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'text-emphasis-color', c.value);
};
var _rtfeldman$elm_css$Css$textDecorationColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'text-decoration-color', c.value);
};
var _rtfeldman$elm_css$Css$prop6 = F7(
	function (key, argA, argB, argC, argD, argE, argF) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: argA.value,
					_1: {
						ctor: '::',
						_0: argB.value,
						_1: {
							ctor: '::',
							_0: argC.value,
							_1: {
								ctor: '::',
								_0: argD.value,
								_1: {
									ctor: '::',
									_0: argE.value,
									_1: {
										ctor: '::',
										_0: argF.value,
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}));
	});
var _rtfeldman$elm_css$Css$boxShadow6 = _rtfeldman$elm_css$Css$prop6('box-shadow');
var _rtfeldman$elm_css$Css$prop5 = F6(
	function (key, argA, argB, argC, argD, argE) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: argA.value,
					_1: {
						ctor: '::',
						_0: argB.value,
						_1: {
							ctor: '::',
							_0: argC.value,
							_1: {
								ctor: '::',
								_0: argD.value,
								_1: {
									ctor: '::',
									_0: argE.value,
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}));
	});
var _rtfeldman$elm_css$Css$boxShadow5 = _rtfeldman$elm_css$Css$prop5('box-shadow');
var _rtfeldman$elm_css$Css$prop4 = F5(
	function (key, argA, argB, argC, argD) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: argA.value,
					_1: {
						ctor: '::',
						_0: argB.value,
						_1: {
							ctor: '::',
							_0: argC.value,
							_1: {
								ctor: '::',
								_0: argD.value,
								_1: {ctor: '[]'}
							}
						}
					}
				}));
	});
var _rtfeldman$elm_css$Css$textShadow4 = _rtfeldman$elm_css$Css$prop4('text-shadow');
var _rtfeldman$elm_css$Css$boxShadow4 = _rtfeldman$elm_css$Css$prop4('box-shadow');
var _rtfeldman$elm_css$Css$padding4 = _rtfeldman$elm_css$Css$prop4('padding');
var _rtfeldman$elm_css$Css$margin4 = _rtfeldman$elm_css$Css$prop4('margin');
var _rtfeldman$elm_css$Css$borderImageOutset4 = _rtfeldman$elm_css$Css$prop4('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth4 = _rtfeldman$elm_css$Css$prop4('border-image-width');
var _rtfeldman$elm_css$Css$borderWidth4 = _rtfeldman$elm_css$Css$prop4('border-width');
var _rtfeldman$elm_css$Css$borderRadius4 = _rtfeldman$elm_css$Css$prop4('border-radius');
var _rtfeldman$elm_css$Css$prop3 = F4(
	function (key, argA, argB, argC) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: argA.value,
					_1: {
						ctor: '::',
						_0: argB.value,
						_1: {
							ctor: '::',
							_0: argC.value,
							_1: {ctor: '[]'}
						}
					}
				}));
	});
var _rtfeldman$elm_css$Css$textShadow3 = _rtfeldman$elm_css$Css$prop3('text-shadow');
var _rtfeldman$elm_css$Css$boxShadow3 = _rtfeldman$elm_css$Css$prop3('box-shadow');
var _rtfeldman$elm_css$Css$textIndent3 = _rtfeldman$elm_css$Css$prop3('text-indent');
var _rtfeldman$elm_css$Css$padding3 = _rtfeldman$elm_css$Css$prop3('padding');
var _rtfeldman$elm_css$Css$margin3 = _rtfeldman$elm_css$Css$prop3('margin');
var _rtfeldman$elm_css$Css$border3 = _rtfeldman$elm_css$Css$prop3('border');
var _rtfeldman$elm_css$Css$borderTop3 = _rtfeldman$elm_css$Css$prop3('border-top');
var _rtfeldman$elm_css$Css$borderBottom3 = _rtfeldman$elm_css$Css$prop3('border-bottom');
var _rtfeldman$elm_css$Css$borderLeft3 = _rtfeldman$elm_css$Css$prop3('border-left');
var _rtfeldman$elm_css$Css$borderRight3 = _rtfeldman$elm_css$Css$prop3('border-right');
var _rtfeldman$elm_css$Css$borderBlockStart3 = _rtfeldman$elm_css$Css$prop3('border-block-start');
var _rtfeldman$elm_css$Css$borderBlockEnd3 = _rtfeldman$elm_css$Css$prop3('border-block-end');
var _rtfeldman$elm_css$Css$borderInlineStart3 = _rtfeldman$elm_css$Css$prop3('border-block-start');
var _rtfeldman$elm_css$Css$borderInlineEnd3 = _rtfeldman$elm_css$Css$prop3('border-block-end');
var _rtfeldman$elm_css$Css$borderImageOutset3 = _rtfeldman$elm_css$Css$prop3('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth3 = _rtfeldman$elm_css$Css$prop3('border-image-width');
var _rtfeldman$elm_css$Css$borderWidth3 = _rtfeldman$elm_css$Css$prop3('border-width');
var _rtfeldman$elm_css$Css$borderRadius3 = _rtfeldman$elm_css$Css$prop3('border-radius');
var _rtfeldman$elm_css$Css$outline3 = _rtfeldman$elm_css$Css$prop3('outline');
var _rtfeldman$elm_css$Css$fontVariant3 = _rtfeldman$elm_css$Css$prop3('font-variant');
var _rtfeldman$elm_css$Css$fontVariantNumeric3 = _rtfeldman$elm_css$Css$prop3('font-variant-numeric');
var _rtfeldman$elm_css$Css$textDecoration3 = _rtfeldman$elm_css$Css$prop3('text-decoration');
var _rtfeldman$elm_css$Css$textDecorations3 = function (_p6) {
	return A2(
		_rtfeldman$elm_css$Css$prop3,
		'text-decoration',
		_rtfeldman$elm_css$Css$valuesOrNone(_p6));
};
var _rtfeldman$elm_css$Css$prop2 = F3(
	function (key, argA, argB) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: argA.value,
					_1: {
						ctor: '::',
						_0: argB.value,
						_1: {ctor: '[]'}
					}
				}));
	});
var _rtfeldman$elm_css$Css$textShadow2 = _rtfeldman$elm_css$Css$prop2('text-shadow');
var _rtfeldman$elm_css$Css$boxShadow2 = _rtfeldman$elm_css$Css$prop2('box-shadow');
var _rtfeldman$elm_css$Css$textIndent2 = _rtfeldman$elm_css$Css$prop2('text-indent');
var _rtfeldman$elm_css$Css$padding2 = _rtfeldman$elm_css$Css$prop2('padding');
var _rtfeldman$elm_css$Css$margin2 = _rtfeldman$elm_css$Css$prop2('margin');
var _rtfeldman$elm_css$Css$border2 = _rtfeldman$elm_css$Css$prop2('border');
var _rtfeldman$elm_css$Css$borderTop2 = _rtfeldman$elm_css$Css$prop2('border-top');
var _rtfeldman$elm_css$Css$borderBottom2 = _rtfeldman$elm_css$Css$prop2('border-bottom');
var _rtfeldman$elm_css$Css$borderLeft2 = _rtfeldman$elm_css$Css$prop2('border-left');
var _rtfeldman$elm_css$Css$borderRight2 = _rtfeldman$elm_css$Css$prop2('border-right');
var _rtfeldman$elm_css$Css$borderBlockStart2 = _rtfeldman$elm_css$Css$prop2('border-block-start');
var _rtfeldman$elm_css$Css$borderBlockEnd2 = _rtfeldman$elm_css$Css$prop2('border-block-end');
var _rtfeldman$elm_css$Css$borderInlineStart2 = _rtfeldman$elm_css$Css$prop2('border-block-start');
var _rtfeldman$elm_css$Css$borderInlineEnd2 = _rtfeldman$elm_css$Css$prop2('border-block-end');
var _rtfeldman$elm_css$Css$borderImageOutset2 = _rtfeldman$elm_css$Css$prop2('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth2 = _rtfeldman$elm_css$Css$prop2('border-image-width');
var _rtfeldman$elm_css$Css$borderWidth2 = _rtfeldman$elm_css$Css$prop2('border-width');
var _rtfeldman$elm_css$Css$borderTopWidth2 = _rtfeldman$elm_css$Css$prop2('border-top-width');
var _rtfeldman$elm_css$Css$borderBottomLeftRadius2 = _rtfeldman$elm_css$Css$prop2('border-bottom-left-radius');
var _rtfeldman$elm_css$Css$borderBottomRightRadius2 = _rtfeldman$elm_css$Css$prop2('border-bottom-right-radius');
var _rtfeldman$elm_css$Css$borderTopLeftRadius2 = _rtfeldman$elm_css$Css$prop2('border-top-left-radius');
var _rtfeldman$elm_css$Css$borderTopRightRadius2 = _rtfeldman$elm_css$Css$prop2('border-top-right-radius');
var _rtfeldman$elm_css$Css$borderRadius2 = _rtfeldman$elm_css$Css$prop2('border-radius');
var _rtfeldman$elm_css$Css$borderSpacing2 = _rtfeldman$elm_css$Css$prop2('border-spacing');
var _rtfeldman$elm_css$Css$backgroundRepeat2 = _rtfeldman$elm_css$Css$prop2('background-repeat');
var _rtfeldman$elm_css$Css$backgroundPosition2 = _rtfeldman$elm_css$Css$prop2('background-position');
var _rtfeldman$elm_css$Css$backgroundSize2 = _rtfeldman$elm_css$Css$prop2('background-size');
var _rtfeldman$elm_css$Css$fontVariant2 = _rtfeldman$elm_css$Css$prop2('font-variant');
var _rtfeldman$elm_css$Css$fontVariantNumeric2 = _rtfeldman$elm_css$Css$prop2('font-variant-numeric');
var _rtfeldman$elm_css$Css$textDecoration2 = _rtfeldman$elm_css$Css$prop2('text-decoration');
var _rtfeldman$elm_css$Css$textDecorations2 = function (_p7) {
	return A2(
		_rtfeldman$elm_css$Css$prop2,
		'text-decoration',
		_rtfeldman$elm_css$Css$valuesOrNone(_p7));
};
var _rtfeldman$elm_css$Css$prop1 = F2(
	function (key, arg) {
		return A2(_rtfeldman$elm_css$Css$property, key, arg.value);
	});
var _rtfeldman$elm_css$Css$textRendering = _rtfeldman$elm_css$Css$prop1('text-rendering');
var _rtfeldman$elm_css$Css$textOrientation = _rtfeldman$elm_css$Css$prop1('text-orientation');
var _rtfeldman$elm_css$Css$textOverflow = _rtfeldman$elm_css$Css$prop1('text-overflow');
var _rtfeldman$elm_css$Css$textShadow = _rtfeldman$elm_css$Css$prop1('text-shadow');
var _rtfeldman$elm_css$Css$boxShadow = _rtfeldman$elm_css$Css$prop1('box-shadow');
var _rtfeldman$elm_css$Css$textIndent = _rtfeldman$elm_css$Css$prop1('text-indent');
var _rtfeldman$elm_css$Css$textTransform = _rtfeldman$elm_css$Css$prop1('text-transform');
var _rtfeldman$elm_css$Css$display = _rtfeldman$elm_css$Css$prop1('display');
var _rtfeldman$elm_css$Css$opacity = _rtfeldman$elm_css$Css$prop1('opacity');
var _rtfeldman$elm_css$Css$width = _rtfeldman$elm_css$Css$prop1('width');
var _rtfeldman$elm_css$Css$maxWidth = _rtfeldman$elm_css$Css$prop1('max-width');
var _rtfeldman$elm_css$Css$minWidth = _rtfeldman$elm_css$Css$prop1('min-width');
var _rtfeldman$elm_css$Css$height = _rtfeldman$elm_css$Css$prop1('height');
var _rtfeldman$elm_css$Css$minHeight = _rtfeldman$elm_css$Css$prop1('min-height');
var _rtfeldman$elm_css$Css$maxHeight = _rtfeldman$elm_css$Css$prop1('max-height');
var _rtfeldman$elm_css$Css$padding = _rtfeldman$elm_css$Css$prop1('padding');
var _rtfeldman$elm_css$Css$paddingBlockStart = _rtfeldman$elm_css$Css$prop1('padding-block-start');
var _rtfeldman$elm_css$Css$paddingBlockEnd = _rtfeldman$elm_css$Css$prop1('padding-block-end');
var _rtfeldman$elm_css$Css$paddingInlineStart = _rtfeldman$elm_css$Css$prop1('padding-inline-start');
var _rtfeldman$elm_css$Css$paddingInlineEnd = _rtfeldman$elm_css$Css$prop1('padding-inline-end');
var _rtfeldman$elm_css$Css$paddingTop = _rtfeldman$elm_css$Css$prop1('padding-top');
var _rtfeldman$elm_css$Css$paddingBottom = _rtfeldman$elm_css$Css$prop1('padding-bottom');
var _rtfeldman$elm_css$Css$paddingRight = _rtfeldman$elm_css$Css$prop1('padding-right');
var _rtfeldman$elm_css$Css$paddingLeft = _rtfeldman$elm_css$Css$prop1('padding-left');
var _rtfeldman$elm_css$Css$margin = _rtfeldman$elm_css$Css$prop1('margin');
var _rtfeldman$elm_css$Css$marginTop = _rtfeldman$elm_css$Css$prop1('margin-top');
var _rtfeldman$elm_css$Css$marginBottom = _rtfeldman$elm_css$Css$prop1('margin-bottom');
var _rtfeldman$elm_css$Css$marginRight = _rtfeldman$elm_css$Css$prop1('margin-right');
var _rtfeldman$elm_css$Css$marginLeft = _rtfeldman$elm_css$Css$prop1('margin-left');
var _rtfeldman$elm_css$Css$marginBlockStart = _rtfeldman$elm_css$Css$prop1('margin-block-start');
var _rtfeldman$elm_css$Css$marginBlockEnd = _rtfeldman$elm_css$Css$prop1('margin-block-end');
var _rtfeldman$elm_css$Css$marginInlineStart = _rtfeldman$elm_css$Css$prop1('margin-inline-start');
var _rtfeldman$elm_css$Css$marginInlineEnd = _rtfeldman$elm_css$Css$prop1('margin-inline-end');
var _rtfeldman$elm_css$Css$top = _rtfeldman$elm_css$Css$prop1('top');
var _rtfeldman$elm_css$Css$bottom = _rtfeldman$elm_css$Css$prop1('bottom');
var _rtfeldman$elm_css$Css$left = _rtfeldman$elm_css$Css$prop1('left');
var _rtfeldman$elm_css$Css$right = _rtfeldman$elm_css$Css$prop1('right');
var _rtfeldman$elm_css$Css$border = _rtfeldman$elm_css$Css$prop1('border');
var _rtfeldman$elm_css$Css$borderTop = _rtfeldman$elm_css$Css$prop1('border-top');
var _rtfeldman$elm_css$Css$borderBottom = _rtfeldman$elm_css$Css$prop1('border-bottom');
var _rtfeldman$elm_css$Css$borderLeft = _rtfeldman$elm_css$Css$prop1('border-left');
var _rtfeldman$elm_css$Css$borderRight = _rtfeldman$elm_css$Css$prop1('border-right');
var _rtfeldman$elm_css$Css$borderBlockStart = _rtfeldman$elm_css$Css$prop1('border-block-start');
var _rtfeldman$elm_css$Css$borderBlockEnd = _rtfeldman$elm_css$Css$prop1('border-block-end');
var _rtfeldman$elm_css$Css$borderInlineStart = _rtfeldman$elm_css$Css$prop1('border-block-start');
var _rtfeldman$elm_css$Css$borderInlineEnd = _rtfeldman$elm_css$Css$prop1('border-block-end');
var _rtfeldman$elm_css$Css$borderImageOutset = _rtfeldman$elm_css$Css$prop1('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth = _rtfeldman$elm_css$Css$prop1('border-image-width');
var _rtfeldman$elm_css$Css$borderBlockEndStyle = _rtfeldman$elm_css$Css$prop1('border-block-end-style');
var _rtfeldman$elm_css$Css$borderBlockStartStyle = _rtfeldman$elm_css$Css$prop1('border-block-start-style');
var _rtfeldman$elm_css$Css$borderInlineEndStyle = _rtfeldman$elm_css$Css$prop1('border-inline-end-style');
var _rtfeldman$elm_css$Css$borderBottomStyle = _rtfeldman$elm_css$Css$prop1('border-bottom-style');
var _rtfeldman$elm_css$Css$borderInlineStartStyle = _rtfeldman$elm_css$Css$prop1('border-inline-start-style');
var _rtfeldman$elm_css$Css$borderLeftStyle = _rtfeldman$elm_css$Css$prop1('border-left-style');
var _rtfeldman$elm_css$Css$borderRightStyle = _rtfeldman$elm_css$Css$prop1('border-right-style');
var _rtfeldman$elm_css$Css$borderTopStyle = _rtfeldman$elm_css$Css$prop1('border-top-style');
var _rtfeldman$elm_css$Css$borderStyle = _rtfeldman$elm_css$Css$prop1('border-style');
var _rtfeldman$elm_css$Css$borderCollapse = _rtfeldman$elm_css$Css$prop1('border-collapse');
var _rtfeldman$elm_css$Css$borderWidth = _rtfeldman$elm_css$Css$prop1('border-width');
var _rtfeldman$elm_css$Css$borderBottomWidth = _rtfeldman$elm_css$Css$prop1('border-bottom-width');
var _rtfeldman$elm_css$Css$borderInlineEndWidth = _rtfeldman$elm_css$Css$prop1('border-inline-end-width');
var _rtfeldman$elm_css$Css$borderLeftWidth = _rtfeldman$elm_css$Css$prop1('border-left-width');
var _rtfeldman$elm_css$Css$borderRightWidth = _rtfeldman$elm_css$Css$prop1('border-right-width');
var _rtfeldman$elm_css$Css$borderTopWidth = _rtfeldman$elm_css$Css$prop1('border-top-width');
var _rtfeldman$elm_css$Css$borderBottomLeftRadius = _rtfeldman$elm_css$Css$prop1('border-bottom-left-radius');
var _rtfeldman$elm_css$Css$borderBottomRightRadius = _rtfeldman$elm_css$Css$prop1('border-bottom-right-radius');
var _rtfeldman$elm_css$Css$borderTopLeftRadius = _rtfeldman$elm_css$Css$prop1('border-top-left-radius');
var _rtfeldman$elm_css$Css$borderTopRightRadius = _rtfeldman$elm_css$Css$prop1('border-top-right-radius');
var _rtfeldman$elm_css$Css$borderRadius = _rtfeldman$elm_css$Css$prop1('border-radius');
var _rtfeldman$elm_css$Css$borderSpacing = _rtfeldman$elm_css$Css$prop1('border-spacing');
var _rtfeldman$elm_css$Css$outline = _rtfeldman$elm_css$Css$prop1('outline');
var _rtfeldman$elm_css$Css$outlineWidth = _rtfeldman$elm_css$Css$prop1('outline-width');
var _rtfeldman$elm_css$Css$outlineStyle = _rtfeldman$elm_css$Css$prop1('outline-style');
var _rtfeldman$elm_css$Css$outlineOffset = _rtfeldman$elm_css$Css$prop1('outline-offset');
var _rtfeldman$elm_css$Css$resize = _rtfeldman$elm_css$Css$prop1('resize');
var _rtfeldman$elm_css$Css$fill = _rtfeldman$elm_css$Css$prop1('fill');
var _rtfeldman$elm_css$Css$visibility = _rtfeldman$elm_css$Css$prop1('visibility');
var _rtfeldman$elm_css$Css$overflow = _rtfeldman$elm_css$Css$prop1('overflow');
var _rtfeldman$elm_css$Css$overflowX = _rtfeldman$elm_css$Css$prop1('overflow-x');
var _rtfeldman$elm_css$Css$overflowY = _rtfeldman$elm_css$Css$prop1('overflow-y');
var _rtfeldman$elm_css$Css$overflowWrap = _rtfeldman$elm_css$Css$prop1('overflow-wrap');
var _rtfeldman$elm_css$Css$whiteSpace = _rtfeldman$elm_css$Css$prop1('white-space');
var _rtfeldman$elm_css$Css$backgroundRepeat = _rtfeldman$elm_css$Css$prop1('background-repeat');
var _rtfeldman$elm_css$Css$backgroundAttachment = _rtfeldman$elm_css$Css$prop1('background-attachment');
var _rtfeldman$elm_css$Css$backgroundClip = _rtfeldman$elm_css$Css$prop1('background-clip');
var _rtfeldman$elm_css$Css$backgroundOrigin = _rtfeldman$elm_css$Css$prop1('background-origin');
var _rtfeldman$elm_css$Css$backgroundImage = _rtfeldman$elm_css$Css$prop1('background-image');
var _rtfeldman$elm_css$Css$backgroundSize = _rtfeldman$elm_css$Css$prop1('background-size');
var _rtfeldman$elm_css$Css$lineHeight = _rtfeldman$elm_css$Css$prop1('line-height');
var _rtfeldman$elm_css$Css$letterSpacing = _rtfeldman$elm_css$Css$prop1('letter-spacing');
var _rtfeldman$elm_css$Css$fontFamily = _rtfeldman$elm_css$Css$prop1('font-family');
var _rtfeldman$elm_css$Css$fontFamilies = function (_p8) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'font-family',
		_rtfeldman$elm_css$Css$stringsToValue(_p8));
};
var _rtfeldman$elm_css$Css$fontSize = _rtfeldman$elm_css$Css$prop1('font-size');
var _rtfeldman$elm_css$Css$fontStyle = _rtfeldman$elm_css$Css$prop1('font-style');
var _rtfeldman$elm_css$Css$fontVariant = _rtfeldman$elm_css$Css$prop1('font-variant');
var _rtfeldman$elm_css$Css$fontVariantLigatures = _rtfeldman$elm_css$Css$prop1('font-variant-ligatures');
var _rtfeldman$elm_css$Css$fontVariantCaps = _rtfeldman$elm_css$Css$prop1('font-variant-caps');
var _rtfeldman$elm_css$Css$fontVariantNumeric = _rtfeldman$elm_css$Css$prop1('font-variant-numeric');
var _rtfeldman$elm_css$Css$fontVariantNumerics = function (_p9) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'font-variant-numeric',
		_rtfeldman$elm_css$Css$valuesOrNone(_p9));
};
var _rtfeldman$elm_css$Css$cursor = _rtfeldman$elm_css$Css$prop1('cursor');
var _rtfeldman$elm_css$Css$textDecoration = _rtfeldman$elm_css$Css$prop1('text-decoration');
var _rtfeldman$elm_css$Css$textDecorations = function (_p10) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'text-decoration',
		_rtfeldman$elm_css$Css$valuesOrNone(_p10));
};
var _rtfeldman$elm_css$Css$textDecorationLine = _rtfeldman$elm_css$Css$prop1('text-decoration-line');
var _rtfeldman$elm_css$Css$textDecorationLines = function (_p11) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'text-decoration-line',
		_rtfeldman$elm_css$Css$valuesOrNone(_p11));
};
var _rtfeldman$elm_css$Css$textDecorationStyle = _rtfeldman$elm_css$Css$prop1('text-decoration-style');
var _rtfeldman$elm_css$Css$zIndex = _rtfeldman$elm_css$Css$prop1('z-index');
var _rtfeldman$elm_css$Css$touchAction = _rtfeldman$elm_css$Css$prop1('touch-action');
var _rtfeldman$elm_css$Css$tableLayout = _rtfeldman$elm_css$Css$prop1('table-layout');
var _rtfeldman$elm_css$Css$position = _rtfeldman$elm_css$Css$prop1('position');
var _rtfeldman$elm_css$Css$textBottom = _rtfeldman$elm_css$Css$prop1('text-bottom');
var _rtfeldman$elm_css$Css$textTop = _rtfeldman$elm_css$Css$prop1('text-top');
var _rtfeldman$elm_css$Css$super = _rtfeldman$elm_css$Css$prop1('super');
var _rtfeldman$elm_css$Css$sub = _rtfeldman$elm_css$Css$prop1('sub');
var _rtfeldman$elm_css$Css$baseline = _rtfeldman$elm_css$Css$prop1('baseline');
var _rtfeldman$elm_css$Css$middle = _rtfeldman$elm_css$Css$prop1('middle');
var _rtfeldman$elm_css$Css$noWrap = {value: 'nowrap', whiteSpace: _rtfeldman$elm_css$Css_Structure$Compatible, flexWrap: _rtfeldman$elm_css$Css_Structure$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$auto = {value: 'auto', cursor: _rtfeldman$elm_css$Css_Structure$Compatible, flexBasis: _rtfeldman$elm_css$Css_Structure$Compatible, overflow: _rtfeldman$elm_css$Css_Structure$Compatible, textRendering: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css_Structure$Compatible, alignItemsOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css_Structure$Compatible, justifyContentOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible, intOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible, touchAction: _rtfeldman$elm_css$Css_Structure$Compatible, tableLayout: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$none = {value: 'none', cursor: _rtfeldman$elm_css$Css_Structure$Compatible, none: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNone: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css_Structure$Compatible, textDecorationLine: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible, display: _rtfeldman$elm_css$Css_Structure$Compatible, outline: _rtfeldman$elm_css$Css_Structure$Compatible, resize: _rtfeldman$elm_css$Css_Structure$Compatible, transform: _rtfeldman$elm_css$Css_Structure$Compatible, borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundImage: _rtfeldman$elm_css$Css_Structure$Compatible, textTransform: _rtfeldman$elm_css$Css_Structure$Compatible, touchAction: _rtfeldman$elm_css$Css_Structure$Compatible, updateFrequency: _rtfeldman$elm_css$Css_Structure$Compatible, blockAxisOverflow: _rtfeldman$elm_css$Css_Structure$Compatible, inlineAxisOverflow: _rtfeldman$elm_css$Css_Structure$Compatible, pointerDevice: _rtfeldman$elm_css$Css_Structure$Compatible, hoverCapability: _rtfeldman$elm_css$Css_Structure$Compatible, scriptingSupport: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$inlineListItem = {value: 'inline-list-item', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$listItem = {value: 'list-item', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tableFooterGroup = {value: 'table-footer-group', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tableHeaderGroup = {value: 'table-header-group', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tableColumnGroup = {value: 'table-column-group', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tableRowGroup = {value: 'table-row-group', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tableCaption = {value: 'table-caption', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tableColumn = {value: 'table-column', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tableCell = {value: 'table-cell', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tableRow = {value: 'table-row', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$inlineTable = {value: 'inline-table', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$table = {value: 'table', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$inline = {value: 'inline', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$inlineFlex = {value: 'inline-flex', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$inlineBlock = {value: 'inline-block', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$block = {value: 'block', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$toTopLeft = {value: 'to top left', angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$toLeft = {value: 'to left', angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$toBottomLeft = {value: 'to bottom left', angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$toBottom = {value: 'to bottom', angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$toBottomRight = {value: 'to bottom right', angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$toRight = {value: 'to right', angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$toTopRight = {value: 'to top right', angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$toTop = {value: 'to top', angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$stop2 = F2(
	function (c, len) {
		return {
			ctor: '_Tuple2',
			_0: c,
			_1: _elm_lang$core$Maybe$Just(len)
		};
	});
var _rtfeldman$elm_css$Css$stop = function (c) {
	return {ctor: '_Tuple2', _0: c, _1: _elm_lang$core$Maybe$Nothing};
};
var _rtfeldman$elm_css$Css$collectStops = _elm_lang$core$List$map(
	function (_p12) {
		var _p13 = _p12;
		return A2(
			_elm_lang$core$String$append,
			_p13._0.value,
			A2(
				_elm_lang$core$Maybe$withDefault,
				'',
				A2(
					_elm_lang$core$Maybe$map,
					function (_p14) {
						return A2(
							_elm_lang$core$String$cons,
							_elm_lang$core$Native_Utils.chr(' '),
							function (_) {
								return _.value;
							}(_p14));
					},
					_p13._1)));
	});
var _rtfeldman$elm_css$Css$local = {value: 'local', backgroundAttachment: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$noRepeat = {value: 'no-repeat', backgroundRepeat: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundRepeatShorthand: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$round = {value: 'round', backgroundRepeat: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundRepeatShorthand: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$space = {value: 'space', backgroundRepeat: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundRepeatShorthand: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$repeat = {value: 'repeat', backgroundRepeat: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundRepeatShorthand: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$repeatY = {value: 'repeat-y', backgroundRepeatShorthand: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$repeatX = {value: 'repeat-x', backgroundRepeatShorthand: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$lineThrough = {value: 'line-through', textDecorationLine: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$overline = {value: 'overline', textDecorationLine: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$underline = {value: 'underline', textDecorationLine: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$row = {value: 'row', flexDirection: _rtfeldman$elm_css$Css_Structure$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$rowReverse = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$row,
	{value: 'row-reverse'});
var _rtfeldman$elm_css$Css$column = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$row,
	{value: 'column'});
var _rtfeldman$elm_css$Css$columnReverse = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$row,
	{value: 'column-reverse'});
var _rtfeldman$elm_css$Css$stretch = _rtfeldman$elm_css$Css$prop1('stretch');
var _rtfeldman$elm_css$Css$spaceBetween = _rtfeldman$elm_css$Css$prop1('space-between');
var _rtfeldman$elm_css$Css$spaceAround = _rtfeldman$elm_css$Css$prop1('space-around');
var _rtfeldman$elm_css$Css$flexEnd = _rtfeldman$elm_css$Css$prop1('flex-end');
var _rtfeldman$elm_css$Css$flexStart = _rtfeldman$elm_css$Css$prop1('flex-start');
var _rtfeldman$elm_css$Css$wrap = {value: 'wrap', flexWrap: _rtfeldman$elm_css$Css_Structure$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$wrapReverse = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$wrap,
	{value: 'wrap-reverse'});
var _rtfeldman$elm_css$Css$content = {value: 'content', flexBasis: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$order = _rtfeldman$elm_css$Css$prop1('order');
var _rtfeldman$elm_css$Css$flexFlow2 = _rtfeldman$elm_css$Css$prop2('flex-flow');
var _rtfeldman$elm_css$Css$flexFlow1 = _rtfeldman$elm_css$Css$prop1('flex-flow');
var _rtfeldman$elm_css$Css$flexDirection = _rtfeldman$elm_css$Css$prop1('flex-direction');
var _rtfeldman$elm_css$Css$flexWrap = _rtfeldman$elm_css$Css$prop1('flex-wrap');
var _rtfeldman$elm_css$Css$flexShrink = _rtfeldman$elm_css$Css$prop1('flex-shrink');
var _rtfeldman$elm_css$Css$flexGrow = _rtfeldman$elm_css$Css$prop1('flex-grow');
var _rtfeldman$elm_css$Css$flexBasis = _rtfeldman$elm_css$Css$prop1('flex-basis');
var _rtfeldman$elm_css$Css$flex3 = _rtfeldman$elm_css$Css$prop3('flex');
var _rtfeldman$elm_css$Css$flex2 = _rtfeldman$elm_css$Css$prop2('flex');
var _rtfeldman$elm_css$Css$flex = _rtfeldman$elm_css$Css$prop1('flex');
var _rtfeldman$elm_css$Css$listStyle3 = _rtfeldman$elm_css$Css$prop3('list-style');
var _rtfeldman$elm_css$Css$listStyle2 = _rtfeldman$elm_css$Css$prop2('list-style');
var _rtfeldman$elm_css$Css$listStyle = _rtfeldman$elm_css$Css$prop1('list-style');
var _rtfeldman$elm_css$Css$thai = {value: 'thai', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$telugu = {value: 'telugu', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$oriya = {value: 'oriya', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$myanmar = {value: 'myanmar', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$malayalam = {value: 'malayalam', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$lao = {value: 'lao', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$khmer = {value: 'khmer', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$kannada = {value: 'kannada', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$gurmukhi = {value: 'gurmukhi', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$gujarati = {value: 'gujarati', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$georgian = {value: 'georgian', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$devanagari = {value: 'devanagari', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$cjkHeavenlyStem = {value: 'cjk-heavenly-stem', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$cjkEarthlyBranch = {value: 'cjk-earthly-branch', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$bengali = {value: 'bengali', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$armenian = {value: 'armenian', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$arabicIndic = {value: 'arabic-indic', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$upperLatin = {value: 'upper-latin', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$lowerLatin = {value: 'lower-latin', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$upperAlpha = {value: 'upper-alpha', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$lowerAlpha = {value: 'lower-alpha', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$upperGreek = {value: 'upper-greek', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$lowerGreek = {value: 'lower-greek', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$upperRoman = {value: 'upper-roman', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$lowerRoman = {value: 'lower-roman', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$decimalLeadingZero = {value: 'decimal-leading-zero', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$decimal = {value: 'decimal', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$square = {value: 'square', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$circle = {value: 'circle', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$disc = {value: 'disc', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$listStyleType = _rtfeldman$elm_css$Css$prop1('list-style-type');
var _rtfeldman$elm_css$Css$outside = {value: 'outside', listStylePosition: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$inside = {value: 'inside', listStylePosition: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$listStylePosition = _rtfeldman$elm_css$Css$prop1('list-style-position');
var _rtfeldman$elm_css$Css$transformStyle = _rtfeldman$elm_css$Css$prop1('transform-style');
var _rtfeldman$elm_css$Css$flat = {value: 'flat', transformStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$preserve3d = {value: 'preserve-3d', transformStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$boxSizing = _rtfeldman$elm_css$Css$prop1('box-sizing');
var _rtfeldman$elm_css$Css$transformBox = _rtfeldman$elm_css$Css$prop1('transform-box');
var _rtfeldman$elm_css$Css$viewBox = {value: 'view-box', transformBox: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$borderBox = {value: 'border-box', boxSizing: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundClip: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$contentBox = {value: 'content-box', boxSizing: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundClip: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$fillBox = {value: 'fill-box', transformBox: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$transforms = function (_p15) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'transform',
		_rtfeldman$elm_css$Css$valuesOrNone(_p15));
};
var _rtfeldman$elm_css$Css$transform = function (only) {
	return _rtfeldman$elm_css$Css$transforms(
		{
			ctor: '::',
			_0: only,
			_1: {ctor: '[]'}
		});
};
var _rtfeldman$elm_css$Css$angleConverter = F2(
	function (suffix, num) {
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_rtfeldman$elm_css$Css$numberToString(num),
				suffix),
			angle: _rtfeldman$elm_css$Css_Structure$Compatible,
			angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$deg = _rtfeldman$elm_css$Css$angleConverter('deg');
var _rtfeldman$elm_css$Css$grad = _rtfeldman$elm_css$Css$angleConverter('grad');
var _rtfeldman$elm_css$Css$rad = _rtfeldman$elm_css$Css$angleConverter('rad');
var _rtfeldman$elm_css$Css$turn = _rtfeldman$elm_css$Css$angleConverter('turn');
var _rtfeldman$elm_css$Css$lengthConverter = F3(
	function (units, unitLabel, numericValue) {
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_rtfeldman$elm_css$Css$numberToString(numericValue),
				unitLabel),
			numericValue: numericValue,
			units: units,
			unitLabel: unitLabel,
			length: _rtfeldman$elm_css$Css_Structure$Compatible,
			lengthOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible,
			lengthOrNumber: _rtfeldman$elm_css$Css_Structure$Compatible,
			lengthOrNone: _rtfeldman$elm_css$Css_Structure$Compatible,
			lengthOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible,
			lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible,
			textIndent: _rtfeldman$elm_css$Css_Structure$Compatible,
			flexBasis: _rtfeldman$elm_css$Css_Structure$Compatible,
			lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css_Structure$Compatible,
			fontSize: _rtfeldman$elm_css$Css_Structure$Compatible,
			absoluteLength: _rtfeldman$elm_css$Css_Structure$Compatible,
			lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css_Structure$Compatible,
			calc: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$true = _rtfeldman$elm_css$Css$prop1('true');
var _rtfeldman$elm_css$Css$matchParent = _rtfeldman$elm_css$Css$prop1('match-parent');
var _rtfeldman$elm_css$Css$end = _rtfeldman$elm_css$Css$prop1('end');
var _rtfeldman$elm_css$Css$start = _rtfeldman$elm_css$Css$prop1('start');
var _rtfeldman$elm_css$Css$justifyAll = _rtfeldman$elm_css$Css$prop1('justify-all');
var _rtfeldman$elm_css$Css$justify = _rtfeldman$elm_css$Css$prop1('justify');
var _rtfeldman$elm_css$Css$center = _rtfeldman$elm_css$Css$prop1('center');
var _rtfeldman$elm_css$Css$collapse = {value: 'collapse', borderCollapse: _rtfeldman$elm_css$Css_Structure$Compatible, visibility: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$separate = {value: 'separate', borderCollapse: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$outset = {value: 'outset', borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$inset = {value: 'inset', borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$ridge = {value: 'ridge', borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$groove = {value: 'groove', borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$double = {value: 'double', borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$solid = {value: 'solid', borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$dashed = {value: 'dashed', borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$dotted = {value: 'dotted', borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$wavy = {value: 'wavy', textDecorationStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$clip = {value: 'clip', textOverflow: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$ellipsis = {value: 'ellipsis', textOverflow: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$fullWidth = {value: 'full-width', textTransform: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$lowercase = {value: 'lowercase', textTransform: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$uppercase = {value: 'uppercase', textTransform: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$capitalize = {value: 'capitalize', textTransform: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$sideways = {value: 'sideways', textOrientation: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$upright = {value: 'upright', textOrientation: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$mixed = {value: 'mixed', textOrientation: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$eachLine = {value: 'each-line', textIndent: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$hanging = {value: 'hanging', textIndent: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$geometricPrecision = {value: 'geometricPrecision', textRendering: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$optimizeLegibility = {value: 'optimizeLegibility', textRendering: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$optimizeSpeed = {value: 'optimizeSpeed', textRendering: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$hslaToRgba = F6(
	function (value, warnings, hue, saturation, lightness, hslAlpha) {
		var _p16 = _elm_lang$core$Color$toRgb(
			A4(_elm_lang$core$Color$hsla, hue, saturation, lightness, hslAlpha));
		var red = _p16.red;
		var green = _p16.green;
		var blue = _p16.blue;
		var alpha = _p16.alpha;
		return {value: value, color: _rtfeldman$elm_css$Css_Structure$Compatible, red: red, green: green, blue: blue, alpha: alpha, warnings: warnings};
	});
var _rtfeldman$elm_css$Css$withPrecedingHash = function (str) {
	return A2(_elm_lang$core$String$startsWith, '#', str) ? str : A2(
		_elm_lang$core$String$cons,
		_elm_lang$core$Native_Utils.chr('#'),
		str);
};
var _rtfeldman$elm_css$Css$erroneousHex = function (str) {
	return {
		value: _rtfeldman$elm_css$Css$withPrecedingHash(str),
		color: _rtfeldman$elm_css$Css_Structure$Compatible,
		red: 0,
		green: 0,
		blue: 0,
		alpha: 1,
		warnings: _elm_lang$core$List$singleton(
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: 'Hex color strings must contain exactly 3, 4, 6, or 8 hexadecimal digits, optionally preceded by \"#\".',
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Basics$toString(str),
						_1: {
							ctor: '::',
							_0: 'is an invalid hex color string.',
							_1: {
								ctor: '::',
								_0: 'Please see: https://drafts.csswg.org/css-color/#hex-notation',
								_1: {ctor: '[]'}
							}
						}
					}
				}))
	};
};
var _rtfeldman$elm_css$Css$validHex = F5(
	function (str, _p20, _p19, _p18, _p17) {
		var _p21 = _p20;
		var _p22 = _p19;
		var _p23 = _p18;
		var _p24 = _p17;
		var toResult = function (_p25) {
			return _rtfeldman$hex$Hex$fromString(
				_elm_lang$core$String$toLower(
					_elm_lang$core$String$fromList(_p25)));
		};
		var results = {
			ctor: '_Tuple4',
			_0: toResult(
				{
					ctor: '::',
					_0: _p21._0,
					_1: {
						ctor: '::',
						_0: _p21._1,
						_1: {ctor: '[]'}
					}
				}),
			_1: toResult(
				{
					ctor: '::',
					_0: _p22._0,
					_1: {
						ctor: '::',
						_0: _p22._1,
						_1: {ctor: '[]'}
					}
				}),
			_2: toResult(
				{
					ctor: '::',
					_0: _p23._0,
					_1: {
						ctor: '::',
						_0: _p23._1,
						_1: {ctor: '[]'}
					}
				}),
			_3: toResult(
				{
					ctor: '::',
					_0: _p24._0,
					_1: {
						ctor: '::',
						_0: _p24._1,
						_1: {ctor: '[]'}
					}
				})
		};
		var _p26 = results;
		if (((((_p26.ctor === '_Tuple4') && (_p26._0.ctor === 'Ok')) && (_p26._1.ctor === 'Ok')) && (_p26._2.ctor === 'Ok')) && (_p26._3.ctor === 'Ok')) {
			return {
				value: _rtfeldman$elm_css$Css$withPrecedingHash(str),
				color: _rtfeldman$elm_css$Css_Structure$Compatible,
				red: _p26._0._0,
				green: _p26._1._0,
				blue: _p26._2._0,
				alpha: _elm_lang$core$Basics$toFloat(_p26._3._0) / 255,
				warnings: {ctor: '[]'}
			};
		} else {
			return _rtfeldman$elm_css$Css$erroneousHex(str);
		}
	});
var _rtfeldman$elm_css$Css$hex = function (str) {
	var withoutHash = A2(_elm_lang$core$String$startsWith, '#', str) ? A2(_elm_lang$core$String$dropLeft, 1, str) : str;
	var _p27 = _elm_lang$core$String$toList(withoutHash);
	_v9_4:
	do {
		if (((_p27.ctor === '::') && (_p27._1.ctor === '::')) && (_p27._1._1.ctor === '::')) {
			if (_p27._1._1._1.ctor === '[]') {
				var _p30 = _p27._0;
				var _p29 = _p27._1._0;
				var _p28 = _p27._1._1._0;
				return A5(
					_rtfeldman$elm_css$Css$validHex,
					str,
					{ctor: '_Tuple2', _0: _p30, _1: _p30},
					{ctor: '_Tuple2', _0: _p29, _1: _p29},
					{ctor: '_Tuple2', _0: _p28, _1: _p28},
					{
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.chr('f'),
						_1: _elm_lang$core$Native_Utils.chr('f')
					});
			} else {
				if (_p27._1._1._1._1.ctor === '[]') {
					var _p34 = _p27._0;
					var _p33 = _p27._1._0;
					var _p32 = _p27._1._1._0;
					var _p31 = _p27._1._1._1._0;
					return A5(
						_rtfeldman$elm_css$Css$validHex,
						str,
						{ctor: '_Tuple2', _0: _p34, _1: _p34},
						{ctor: '_Tuple2', _0: _p33, _1: _p33},
						{ctor: '_Tuple2', _0: _p32, _1: _p32},
						{ctor: '_Tuple2', _0: _p31, _1: _p31});
				} else {
					if (_p27._1._1._1._1._1.ctor === '::') {
						if (_p27._1._1._1._1._1._1.ctor === '[]') {
							return A5(
								_rtfeldman$elm_css$Css$validHex,
								str,
								{ctor: '_Tuple2', _0: _p27._0, _1: _p27._1._0},
								{ctor: '_Tuple2', _0: _p27._1._1._0, _1: _p27._1._1._1._0},
								{ctor: '_Tuple2', _0: _p27._1._1._1._1._0, _1: _p27._1._1._1._1._1._0},
								{
									ctor: '_Tuple2',
									_0: _elm_lang$core$Native_Utils.chr('f'),
									_1: _elm_lang$core$Native_Utils.chr('f')
								});
						} else {
							if ((_p27._1._1._1._1._1._1._1.ctor === '::') && (_p27._1._1._1._1._1._1._1._1.ctor === '[]')) {
								return A5(
									_rtfeldman$elm_css$Css$validHex,
									str,
									{ctor: '_Tuple2', _0: _p27._0, _1: _p27._1._0},
									{ctor: '_Tuple2', _0: _p27._1._1._0, _1: _p27._1._1._1._0},
									{ctor: '_Tuple2', _0: _p27._1._1._1._1._0, _1: _p27._1._1._1._1._1._0},
									{ctor: '_Tuple2', _0: _p27._1._1._1._1._1._1._0, _1: _p27._1._1._1._1._1._1._1._0});
							} else {
								break _v9_4;
							}
						}
					} else {
						break _v9_4;
					}
				}
			}
		} else {
			break _v9_4;
		}
	} while(false);
	return _rtfeldman$elm_css$Css$erroneousHex(str);
};
var _rtfeldman$elm_css$Css$hidden = {value: 'hidden', overflow: _rtfeldman$elm_css$Css_Structure$Compatible, borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible, visibility: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$contain = {value: 'contain', lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$cover = {value: 'cover', lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$url = function (urlValue) {
	return {
		value: A2(
			_elm_lang$core$Basics_ops['++'],
			'url(',
			A2(_elm_lang$core$Basics_ops['++'], urlValue, ')')),
		backgroundImage: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$paddingBox = {value: 'padding-box', backgroundClip: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$luminosity = _rtfeldman$elm_css$Css$prop1('luminosity');
var _rtfeldman$elm_css$Css$saturation = _rtfeldman$elm_css$Css$prop1('saturation');
var _rtfeldman$elm_css$Css$hue = _rtfeldman$elm_css$Css$prop1('hue');
var _rtfeldman$elm_css$Css$exclusion = _rtfeldman$elm_css$Css$prop1('exclusion');
var _rtfeldman$elm_css$Css$difference = _rtfeldman$elm_css$Css$prop1('difference');
var _rtfeldman$elm_css$Css$softLight = _rtfeldman$elm_css$Css$prop1('soft-light');
var _rtfeldman$elm_css$Css$hardLight = _rtfeldman$elm_css$Css$prop1('hard-light');
var _rtfeldman$elm_css$Css$colorBurn = _rtfeldman$elm_css$Css$prop1('color-burn');
var _rtfeldman$elm_css$Css$colorDodge = _rtfeldman$elm_css$Css$prop1('color-dodge');
var _rtfeldman$elm_css$Css$lighten = _rtfeldman$elm_css$Css$prop1('lighten');
var _rtfeldman$elm_css$Css$darken = _rtfeldman$elm_css$Css$prop1('darken');
var _rtfeldman$elm_css$Css$overlay = _rtfeldman$elm_css$Css$prop1('overlay');
var _rtfeldman$elm_css$Css$screenBlendMode = _rtfeldman$elm_css$Css$prop1('screen');
var _rtfeldman$elm_css$Css$multiply = _rtfeldman$elm_css$Css$prop1('multiply');
var _rtfeldman$elm_css$Css$vertical = {value: 'vertical', resize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$horizontal = {value: 'horizontal', resize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$both = {value: 'both', resize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$breakWord = {value: 'break-word', overflowWrap: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$scroll = {value: 'scroll', scroll: _rtfeldman$elm_css$Css_Structure$Compatible, overflow: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundAttachment: _rtfeldman$elm_css$Css_Structure$Compatible, blockAxisOverflow: _rtfeldman$elm_css$Css_Structure$Compatible, inlineAxisOverflow: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$visible = {value: 'visible', overflow: _rtfeldman$elm_css$Css_Structure$Compatible, visibility: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$currentColor = {
	value: 'currentColor',
	color: _rtfeldman$elm_css$Css_Structure$Compatible,
	warnings: {ctor: '[]'}
};
var _rtfeldman$elm_css$Css$transparent = {
	value: 'transparent',
	color: _rtfeldman$elm_css$Css_Structure$Compatible,
	warnings: {ctor: '[]'}
};
var _rtfeldman$elm_css$Css$important = _rtfeldman$elm_css$Css_Preprocess$mapLastProperty(
	function (property) {
		return _elm_lang$core$Native_Utils.update(
			property,
			{important: true});
	});
var _rtfeldman$elm_css$Css$all = _rtfeldman$elm_css$Css$prop1('all');
var _rtfeldman$elm_css$Css$combineLengths = F3(
	function (operation, first, second) {
		var numericValue = A2(operation, first.numericValue, second.numericValue);
		var value = A2(
			_elm_lang$core$String$join,
			'',
			A2(
				_elm_lang$core$List$filter,
				function (_p35) {
					return !_elm_lang$core$String$isEmpty(_p35);
				},
				{
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(numericValue),
					_1: {
						ctor: '::',
						_0: first.unitLabel,
						_1: {ctor: '[]'}
					}
				}));
		return _elm_lang$core$Native_Utils.update(
			first,
			{value: value, numericValue: numericValue});
	});
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|*|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x * y;
		}));
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|/|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x / y;
		}));
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|-|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x - y;
		}));
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|+|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x + y;
		}));
var _rtfeldman$elm_css$Css$calcExpressionToString = function (expression) {
	var _p36 = expression;
	if (_p36.ctor === 'Addition') {
		return '+';
	} else {
		return '-';
	}
};
var _rtfeldman$elm_css$Css$colorValueForOverloadedProperty = _rtfeldman$elm_css$Css$transparent;
var _rtfeldman$elm_css$Css$getOverloadedProperty = F3(
	function (functionName, desiredKey, style) {
		getOverloadedProperty:
		while (true) {
			var _p37 = style;
			switch (_p37.ctor) {
				case 'AppendProperty':
					return A2(_rtfeldman$elm_css$Css$property, desiredKey, _p37._0.key);
				case 'ExtendSelector':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable Style for selector ',
										_elm_lang$core$Basics$toString(_p37._0)))),
							_1: {ctor: '[]'}
						},
						desiredKey,
						'');
				case 'NestSnippet':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable Style for combinator ',
										_elm_lang$core$Basics$toString(_p37._0)))),
							_1: {ctor: '[]'}
						},
						desiredKey,
						'');
				case 'WithPseudoElement':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable Style for pseudo-element setter ',
										_elm_lang$core$Basics$toString(_p37._0)))),
							_1: {ctor: '[]'}
						},
						desiredKey,
						'');
				case 'WithMedia':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable Style for media query ',
										_elm_lang$core$Basics$toString(_p37._0)))),
							_1: {ctor: '[]'}
						},
						desiredKey,
						'');
				default:
					if (_p37._0.ctor === '[]') {
						return A3(
							_rtfeldman$elm_css$Css$propertyWithWarnings,
							{
								ctor: '::',
								_0: A2(
									_elm_lang$core$Basics_ops['++'],
									'Cannot apply ',
									A2(_elm_lang$core$Basics_ops['++'], functionName, ' with empty Style. ')),
								_1: {ctor: '[]'}
							},
							desiredKey,
							'');
					} else {
						if (_p37._0._1.ctor === '[]') {
							var _v12 = functionName,
								_v13 = desiredKey,
								_v14 = _p37._0._0;
							functionName = _v12;
							desiredKey = _v13;
							style = _v14;
							continue getOverloadedProperty;
						} else {
							var _v15 = functionName,
								_v16 = desiredKey,
								_v17 = _rtfeldman$elm_css$Css_Preprocess$ApplyStyles(_p37._0._1);
							functionName = _v15;
							desiredKey = _v16;
							style = _v17;
							continue getOverloadedProperty;
						}
					}
			}
		}
	});
var _rtfeldman$elm_css$Css$backgroundBlendMode = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'backgroundBlendMode',
		'background-blend-mode',
		fn(_rtfeldman$elm_css$Css$colorValueForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$cssFunction = F2(
	function (funcName, args) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			funcName,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_elm_lang$core$String$join, ', ', args),
					')')));
	});
var _rtfeldman$elm_css$Css$calc = F3(
	function (first, expression, second) {
		var grab = function (l) {
			return A2(_elm_lang$core$String$startsWith, 'calc(', l.value) ? A2(_elm_lang$core$String$dropLeft, 4, l.value) : l.value;
		};
		var calcs = A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: grab(first),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$calcExpressionToString(expression),
					_1: {
						ctor: '::',
						_0: grab(second),
						_1: {ctor: '[]'}
					}
				}
			});
		var value = A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'calc',
			{
				ctor: '::',
				_0: calcs,
				_1: {ctor: '[]'}
			});
		return {value: value, length: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNumber: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNone: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible, textIndent: _rtfeldman$elm_css$Css_Structure$Compatible, flexBasis: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css_Structure$Compatible, fontSize: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css_Structure$Compatible, calc: _rtfeldman$elm_css$Css_Structure$Compatible};
	});
var _rtfeldman$elm_css$Css$rgb = F3(
	function (red, green, blue) {
		var warnings = ((_elm_lang$core$Native_Utils.cmp(red, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(red, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(green, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(green, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(blue, 255) > 0)))))) ? {
			ctor: '::',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				'RGB color values must be between 0 and 255. rgb(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(red),
					A2(
						_elm_lang$core$Basics_ops['++'],
						', ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(green),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(blue),
									') is not valid.')))))),
			_1: {ctor: '[]'}
		} : {ctor: '[]'};
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rgb',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					{
						ctor: '::',
						_0: red,
						_1: {
							ctor: '::',
							_0: green,
							_1: {
								ctor: '::',
								_0: blue,
								_1: {ctor: '[]'}
							}
						}
					})),
			color: _rtfeldman$elm_css$Css_Structure$Compatible,
			warnings: warnings,
			red: red,
			green: green,
			blue: blue,
			alpha: 1
		};
	});
var _rtfeldman$elm_css$Css$rgba = F4(
	function (red, green, blue, alpha) {
		var warnings = ((_elm_lang$core$Native_Utils.cmp(red, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(red, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(green, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(green, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(alpha, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(alpha, 1) > 0)))))))) ? {
			ctor: '::',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				'RGB color values must be between 0 and 255, and the alpha in RGBA must be between 0 and 1. rgba(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(red),
					A2(
						_elm_lang$core$Basics_ops['++'],
						', ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(green),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(blue),
									A2(
										_elm_lang$core$Basics_ops['++'],
										', ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(alpha),
											') is not valid.')))))))),
			_1: {ctor: '[]'}
		} : {ctor: '[]'};
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rgba',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css$numberToString,
						{
							ctor: '::',
							_0: red,
							_1: {
								ctor: '::',
								_0: green,
								_1: {
									ctor: '::',
									_0: blue,
									_1: {ctor: '[]'}
								}
							}
						}),
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$numberToString(alpha),
						_1: {ctor: '[]'}
					})),
			color: _rtfeldman$elm_css$Css_Structure$Compatible,
			warnings: warnings,
			red: red,
			green: green,
			blue: blue,
			alpha: alpha
		};
	});
var _rtfeldman$elm_css$Css$hsl = F3(
	function (hue, saturation, lightness) {
		var valuesList = {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$numberToString(hue),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numericalPercentageToString(saturation),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$numericalPercentageToString(lightness),
					_1: {ctor: '[]'}
				}
			}
		};
		var value = A2(_rtfeldman$elm_css$Css$cssFunction, 'hsl', valuesList);
		var warnings = ((_elm_lang$core$Native_Utils.cmp(hue, 360) > 0) || ((_elm_lang$core$Native_Utils.cmp(hue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 1) > 0) || (_elm_lang$core$Native_Utils.cmp(lightness, 0) < 0)))))) ? {
			ctor: '::',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				'HSL color values must have an H value between 0 and 360 (as in degrees) and S and L values between 0 and 1. ',
				A2(_elm_lang$core$Basics_ops['++'], value, ' is not valid.')),
			_1: {ctor: '[]'}
		} : {ctor: '[]'};
		return A6(_rtfeldman$elm_css$Css$hslaToRgba, value, warnings, hue, saturation, lightness, 1);
	});
var _rtfeldman$elm_css$Css$hsla = F4(
	function (hue, saturation, lightness, alpha) {
		var valuesList = {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$numberToString(hue),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numericalPercentageToString(saturation),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$numericalPercentageToString(lightness),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$numberToString(alpha),
						_1: {ctor: '[]'}
					}
				}
			}
		};
		var value = A2(_rtfeldman$elm_css$Css$cssFunction, 'hsla', valuesList);
		var warnings = ((_elm_lang$core$Native_Utils.cmp(hue, 360) > 0) || ((_elm_lang$core$Native_Utils.cmp(hue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(alpha, 1) > 0) || (_elm_lang$core$Native_Utils.cmp(alpha, 0) < 0)))))))) ? {
			ctor: '::',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				'HSLA color values must have an H value between 0 and 360 (as in degrees) and S, L, and A values between 0 and 1. ',
				A2(_elm_lang$core$Basics_ops['++'], value, ' is not valid.')),
			_1: {ctor: '[]'}
		} : {ctor: '[]'};
		return A6(_rtfeldman$elm_css$Css$hslaToRgba, value, warnings, hue, saturation, lightness, alpha);
	});
var _rtfeldman$elm_css$Css$matrix = F6(
	function (a, b, c, d, tx, ty) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'matrix',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					{
						ctor: '::',
						_0: a,
						_1: {
							ctor: '::',
							_0: b,
							_1: {
								ctor: '::',
								_0: c,
								_1: {
									ctor: '::',
									_0: d,
									_1: {
										ctor: '::',
										_0: tx,
										_1: {
											ctor: '::',
											_0: ty,
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					})),
			transform: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$matrix3d = function (a1) {
	return function (a2) {
		return function (a3) {
			return function (a4) {
				return function (b1) {
					return function (b2) {
						return function (b3) {
							return function (b4) {
								return function (c1) {
									return function (c2) {
										return function (c3) {
											return function (c4) {
												return function (d1) {
													return function (d2) {
														return function (d3) {
															return function (d4) {
																return {
																	value: A2(
																		_rtfeldman$elm_css$Css$cssFunction,
																		'matrix3d',
																		A2(
																			_elm_lang$core$List$map,
																			_rtfeldman$elm_css$Css$numberToString,
																			{
																				ctor: '::',
																				_0: a1,
																				_1: {
																					ctor: '::',
																					_0: a2,
																					_1: {
																						ctor: '::',
																						_0: a3,
																						_1: {
																							ctor: '::',
																							_0: a4,
																							_1: {
																								ctor: '::',
																								_0: b1,
																								_1: {
																									ctor: '::',
																									_0: b2,
																									_1: {
																										ctor: '::',
																										_0: b3,
																										_1: {
																											ctor: '::',
																											_0: b4,
																											_1: {
																												ctor: '::',
																												_0: c1,
																												_1: {
																													ctor: '::',
																													_0: c2,
																													_1: {
																														ctor: '::',
																														_0: c3,
																														_1: {
																															ctor: '::',
																															_0: c4,
																															_1: {
																																ctor: '::',
																																_0: d1,
																																_1: {
																																	ctor: '::',
																																	_0: d2,
																																	_1: {
																																		ctor: '::',
																																		_0: d3,
																																		_1: {
																																			ctor: '::',
																																			_0: d4,
																																			_1: {ctor: '[]'}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			})),
																	transform: _rtfeldman$elm_css$Css_Structure$Compatible
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rtfeldman$elm_css$Css$perspective = function (l) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'perspective',
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numberToString(l),
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotate = function (_p38) {
	var _p39 = _p38;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotate',
			{
				ctor: '::',
				_0: _p39.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotateX = function (_p40) {
	var _p41 = _p40;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotateX',
			{
				ctor: '::',
				_0: _p41.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotateY = function (_p42) {
	var _p43 = _p42;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotateY',
			{
				ctor: '::',
				_0: _p43.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotateZ = function (_p44) {
	var _p45 = _p44;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotateZ',
			{
				ctor: '::',
				_0: _p45.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotate3d = F4(
	function (x, y, z, _p46) {
		var _p47 = _p46;
		var coordsAsStrings = A2(
			_elm_lang$core$List$map,
			_rtfeldman$elm_css$Css$numberToString,
			{
				ctor: '::',
				_0: x,
				_1: {
					ctor: '::',
					_0: y,
					_1: {
						ctor: '::',
						_0: z,
						_1: {ctor: '[]'}
					}
				}
			});
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rotate3d',
				A2(
					_elm_lang$core$Basics_ops['++'],
					coordsAsStrings,
					{
						ctor: '::',
						_0: _p47.value,
						_1: {ctor: '[]'}
					})),
			transform: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$scale = function (x) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'scale',
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numberToString(x),
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$scale2 = F2(
	function (x, y) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'scale',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					{
						ctor: '::',
						_0: x,
						_1: {
							ctor: '::',
							_0: y,
							_1: {ctor: '[]'}
						}
					})),
			transform: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$scaleX = function (x) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'scaleX',
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numberToString(x),
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$scaleY = function (y) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'scaleY',
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numberToString(y),
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$scale3d = F3(
	function (x, y, z) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'scale3d',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					{
						ctor: '::',
						_0: x,
						_1: {
							ctor: '::',
							_0: y,
							_1: {
								ctor: '::',
								_0: z,
								_1: {ctor: '[]'}
							}
						}
					})),
			transform: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$skew = function (_p48) {
	var _p49 = _p48;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'skew',
			{
				ctor: '::',
				_0: _p49.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$skew2 = F2(
	function (ax, ay) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'skew',
				{
					ctor: '::',
					_0: ax.value,
					_1: {
						ctor: '::',
						_0: ay.value,
						_1: {ctor: '[]'}
					}
				}),
			transform: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$skewX = function (_p50) {
	var _p51 = _p50;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'skewX',
			{
				ctor: '::',
				_0: _p51.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$skewY = function (_p52) {
	var _p53 = _p52;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'skewY',
			{
				ctor: '::',
				_0: _p53.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$translate = function (_p54) {
	var _p55 = _p54;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translate',
			{
				ctor: '::',
				_0: _p55.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$translate2 = F2(
	function (tx, ty) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'translate',
				{
					ctor: '::',
					_0: tx.value,
					_1: {
						ctor: '::',
						_0: ty.value,
						_1: {ctor: '[]'}
					}
				}),
			transform: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$translateX = function (_p56) {
	var _p57 = _p56;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translateX',
			{
				ctor: '::',
				_0: _p57.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$translateY = function (_p58) {
	var _p59 = _p58;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translateY',
			{
				ctor: '::',
				_0: _p59.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$translateZ = function (_p60) {
	var _p61 = _p60;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translateZ',
			{
				ctor: '::',
				_0: _p61.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$translate3d = F3(
	function (tx, ty, tz) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'translate3d',
				{
					ctor: '::',
					_0: tx.value,
					_1: {
						ctor: '::',
						_0: ty.value,
						_1: {
							ctor: '::',
							_0: tz.value,
							_1: {ctor: '[]'}
						}
					}
				}),
			transform: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$linearGradient = F3(
	function (stop1, stop2, stops) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'linear-gradient',
				_rtfeldman$elm_css$Css$collectStops(
					A2(
						_elm_lang$core$Basics_ops['++'],
						{
							ctor: '::',
							_0: stop1,
							_1: {
								ctor: '::',
								_0: stop2,
								_1: {ctor: '[]'}
							}
						},
						stops))),
			backgroundImage: _rtfeldman$elm_css$Css_Structure$Compatible,
			listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$linearGradient2 = F4(
	function (dir, stop1, stop2, stops) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'linear-gradient',
				A2(
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						}),
					dir.value,
					_rtfeldman$elm_css$Css$collectStops(
						A2(
							_elm_lang$core$Basics_ops['++'],
							{
								ctor: '::',
								_0: stop1,
								_1: {
									ctor: '::',
									_0: stop2,
									_1: {ctor: '[]'}
								}
							},
							stops)))),
			backgroundImage: _rtfeldman$elm_css$Css_Structure$Compatible,
			listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$CalculatedLength = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return {value: a, length: b, lengthOrAuto: c, lengthOrNumber: d, lengthOrNone: e, lengthOrMinMaxDimension: f, lengthOrNoneOrMinMaxDimension: g, textIndent: h, flexBasis: i, lengthOrNumberOrAutoOrNoneOrContent: j, fontSize: k, lengthOrAutoOrCoverOrContain: l, calc: m};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rtfeldman$elm_css$Css$ExplicitLength = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return function (q) {
																	return {value: a, numericValue: b, units: c, unitLabel: d, length: e, lengthOrAuto: f, lengthOrNumber: g, lengthOrNone: h, lengthOrMinMaxDimension: i, lengthOrNoneOrMinMaxDimension: j, textIndent: k, flexBasis: l, absoluteLength: m, lengthOrNumberOrAutoOrNoneOrContent: n, fontSize: o, lengthOrAutoOrCoverOrContain: p, calc: q};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rtfeldman$elm_css$Css$NonMixable = {};
var _rtfeldman$elm_css$Css$BasicProperty = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return function (q) {
																	return function (r) {
																		return function (s) {
																			return function (t) {
																				return function (u) {
																					return function (v) {
																						return function (w) {
																							return function (x) {
																								return function (y) {
																									return function (z) {
																										return function (_1) {
																											return function (_2) {
																												return function (_3) {
																													return function (_4) {
																														return function (_5) {
																															return function (_6) {
																																return function (_7) {
																																	return function (_8) {
																																		return function (_9) {
																																			return function (_10) {
																																				return function (_11) {
																																					return function (_12) {
																																						return function (_13) {
																																							return function (_14) {
																																								return function (_15) {
																																									return function (_16) {
																																										return function (_17) {
																																											return function (_18) {
																																												return function (_19) {
																																													return function (_20) {
																																														return function (_21) {
																																															return function (_22) {
																																																return function (_23) {
																																																	return function (_24) {
																																																		return function (_25) {
																																																			return function (_26) {
																																																				return function (_27) {
																																																					return {value: a, all: b, alignItems: c, borderStyle: d, boxSizing: e, color: f, cursor: g, display: h, flexBasis: i, flexWrap: j, flexDirection: k, flexDirectionOrWrap: l, justifyContent: m, none: n, number: o, outline: p, overflow: q, visibility: r, textDecorationLine: s, textRendering: t, textIndent: u, textDecorationStyle: v, textTransform: w, length: x, lengthOrAuto: y, lengthOrNone: z, lengthOrNumber: _1, lengthOrMinMaxDimension: _2, lengthOrNoneOrMinMaxDimension: _3, lengthOrNumberOrAutoOrNoneOrContent: _4, listStyleType: _5, listStylePosition: _6, listStyleTypeOrPositionOrImage: _7, fontFamily: _8, fontSize: _9, fontStyle: _10, fontWeight: _11, fontVariant: _12, units: _13, numericValue: _14, unitLabel: _15, warnings: _16, backgroundRepeat: _17, backgroundRepeatShorthand: _18, backgroundAttachment: _19, backgroundBlendMode: _20, backgroundOrigin: _21, backgroundImage: _22, lengthOrAutoOrCoverOrContain: _23, intOrAuto: _24, touchAction: _25, whiteSpace: _26, tableLayout: _27};
																																																				};
																																																			};
																																																		};
																																																	};
																																																};
																																															};
																																														};
																																													};
																																												};
																																											};
																																										};
																																									};
																																								};
																																							};
																																						};
																																					};
																																				};
																																			};
																																		};
																																	};
																																};
																															};
																														};
																													};
																												};
																											};
																										};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rtfeldman$elm_css$Css$Normal = F7(
	function (a, b, c, d, e, f, g) {
		return {value: a, warnings: b, fontStyle: c, fontWeight: d, featureTagValue: e, overflowWrap: f, whiteSpace: g};
	});
var _rtfeldman$elm_css$Css$Subtraction = {ctor: 'Subtraction'};
var _rtfeldman$elm_css$Css$minus = _rtfeldman$elm_css$Css$Subtraction;
var _rtfeldman$elm_css$Css$Addition = {ctor: 'Addition'};
var _rtfeldman$elm_css$Css$plus = _rtfeldman$elm_css$Css$Addition;
var _rtfeldman$elm_css$Css$PercentageUnits = {ctor: 'PercentageUnits'};
var _rtfeldman$elm_css$Css$pct = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PercentageUnits, '%');
var _rtfeldman$elm_css$Css$EmUnits = {ctor: 'EmUnits'};
var _rtfeldman$elm_css$Css$em = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$EmUnits, 'em');
var _rtfeldman$elm_css$Css$ExUnits = {ctor: 'ExUnits'};
var _rtfeldman$elm_css$Css$ex = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$ExUnits, 'ex');
var _rtfeldman$elm_css$Css$ChUnits = {ctor: 'ChUnits'};
var _rtfeldman$elm_css$Css$ch = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$ChUnits, 'ch');
var _rtfeldman$elm_css$Css$RemUnits = {ctor: 'RemUnits'};
var _rtfeldman$elm_css$Css$rem = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$RemUnits, 'rem');
var _rtfeldman$elm_css$Css$VhUnits = {ctor: 'VhUnits'};
var _rtfeldman$elm_css$Css$vh = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VhUnits, 'vh');
var _rtfeldman$elm_css$Css$VwUnits = {ctor: 'VwUnits'};
var _rtfeldman$elm_css$Css$vw = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VwUnits, 'vw');
var _rtfeldman$elm_css$Css$VMinUnits = {ctor: 'VMinUnits'};
var _rtfeldman$elm_css$Css$vmin = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VMinUnits, 'vmin');
var _rtfeldman$elm_css$Css$VMaxUnits = {ctor: 'VMaxUnits'};
var _rtfeldman$elm_css$Css$vmax = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VMaxUnits, 'vmax');
var _rtfeldman$elm_css$Css$PxUnits = {ctor: 'PxUnits'};
var _rtfeldman$elm_css$Css$px = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PxUnits, 'px');
var _rtfeldman$elm_css$Css$MMUnits = {ctor: 'MMUnits'};
var _rtfeldman$elm_css$Css$mm = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$MMUnits, 'mm');
var _rtfeldman$elm_css$Css$CMUnits = {ctor: 'CMUnits'};
var _rtfeldman$elm_css$Css$cm = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$CMUnits, 'cm');
var _rtfeldman$elm_css$Css$InchUnits = {ctor: 'InchUnits'};
var _rtfeldman$elm_css$Css$inches = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$InchUnits, 'in');
var _rtfeldman$elm_css$Css$PtUnits = {ctor: 'PtUnits'};
var _rtfeldman$elm_css$Css$pt = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PtUnits, 'pt');
var _rtfeldman$elm_css$Css$PcUnits = {ctor: 'PcUnits'};
var _rtfeldman$elm_css$Css$pc = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PcUnits, 'pc');
var _rtfeldman$elm_css$Css$UnitlessInteger = {ctor: 'UnitlessInteger'};
var _rtfeldman$elm_css$Css$zero = {value: '0', length: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNumber: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNone: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible, number: _rtfeldman$elm_css$Css_Structure$Compatible, outline: _rtfeldman$elm_css$Css_Structure$Compatible, units: _rtfeldman$elm_css$Css$UnitlessInteger, unitLabel: '', numericValue: 0, lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$int = function (val) {
	return {
		value: _rtfeldman$elm_css$Css$numberToString(val),
		lengthOrNumber: _rtfeldman$elm_css$Css_Structure$Compatible,
		number: _rtfeldman$elm_css$Css_Structure$Compatible,
		fontWeight: _rtfeldman$elm_css$Css_Structure$Compatible,
		lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css_Structure$Compatible,
		intOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible,
		numericValue: _elm_lang$core$Basics$toFloat(val),
		unitLabel: '',
		units: _rtfeldman$elm_css$Css$UnitlessInteger
	};
};
var _rtfeldman$elm_css$Css$UnitlessFloat = {ctor: 'UnitlessFloat'};
var _rtfeldman$elm_css$Css$num = function (val) {
	return {
		value: _rtfeldman$elm_css$Css$numberToString(val),
		lengthOrNumber: _rtfeldman$elm_css$Css_Structure$Compatible,
		number: _rtfeldman$elm_css$Css_Structure$Compatible,
		lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css_Structure$Compatible,
		numericValue: val,
		unitLabel: '',
		units: _rtfeldman$elm_css$Css$UnitlessFloat
	};
};
var _rtfeldman$elm_css$Css$IncompatibleUnits = {ctor: 'IncompatibleUnits'};
var _rtfeldman$elm_css$Css$initial = {
	value: 'initial',
	overflow: _rtfeldman$elm_css$Css_Structure$Compatible,
	visibility: _rtfeldman$elm_css$Css_Structure$Compatible,
	none: _rtfeldman$elm_css$Css_Structure$Compatible,
	number: _rtfeldman$elm_css$Css_Structure$Compatible,
	textDecorationLine: _rtfeldman$elm_css$Css_Structure$Compatible,
	textRendering: _rtfeldman$elm_css$Css_Structure$Compatible,
	textIndent: _rtfeldman$elm_css$Css_Structure$Compatible,
	textDecorationStyle: _rtfeldman$elm_css$Css_Structure$Compatible,
	textTransform: _rtfeldman$elm_css$Css_Structure$Compatible,
	borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible,
	boxSizing: _rtfeldman$elm_css$Css_Structure$Compatible,
	color: _rtfeldman$elm_css$Css_Structure$Compatible,
	cursor: _rtfeldman$elm_css$Css_Structure$Compatible,
	display: _rtfeldman$elm_css$Css_Structure$Compatible,
	all: _rtfeldman$elm_css$Css_Structure$Compatible,
	alignItems: _rtfeldman$elm_css$Css_Structure$Compatible,
	justifyContent: _rtfeldman$elm_css$Css_Structure$Compatible,
	length: _rtfeldman$elm_css$Css_Structure$Compatible,
	lengthOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible,
	lengthOrNone: _rtfeldman$elm_css$Css_Structure$Compatible,
	lengthOrNumber: _rtfeldman$elm_css$Css_Structure$Compatible,
	lengthOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible,
	lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible,
	listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible,
	listStylePosition: _rtfeldman$elm_css$Css_Structure$Compatible,
	listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible,
	flexBasis: _rtfeldman$elm_css$Css_Structure$Compatible,
	flexWrap: _rtfeldman$elm_css$Css_Structure$Compatible,
	flexDirection: _rtfeldman$elm_css$Css_Structure$Compatible,
	flexDirectionOrWrap: _rtfeldman$elm_css$Css_Structure$Compatible,
	lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css_Structure$Compatible,
	fontFamily: _rtfeldman$elm_css$Css_Structure$Compatible,
	fontSize: _rtfeldman$elm_css$Css_Structure$Compatible,
	fontStyle: _rtfeldman$elm_css$Css_Structure$Compatible,
	fontWeight: _rtfeldman$elm_css$Css_Structure$Compatible,
	fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible,
	outline: _rtfeldman$elm_css$Css_Structure$Compatible,
	units: _rtfeldman$elm_css$Css$IncompatibleUnits,
	numericValue: 0,
	unitLabel: '',
	warnings: {ctor: '[]'},
	backgroundRepeat: _rtfeldman$elm_css$Css_Structure$Compatible,
	backgroundRepeatShorthand: _rtfeldman$elm_css$Css_Structure$Compatible,
	backgroundAttachment: _rtfeldman$elm_css$Css_Structure$Compatible,
	backgroundBlendMode: _rtfeldman$elm_css$Css_Structure$Compatible,
	backgroundOrigin: _rtfeldman$elm_css$Css_Structure$Compatible,
	backgroundImage: _rtfeldman$elm_css$Css_Structure$Compatible,
	lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css_Structure$Compatible,
	intOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible,
	touchAction: _rtfeldman$elm_css$Css_Structure$Compatible,
	whiteSpace: _rtfeldman$elm_css$Css_Structure$Compatible,
	tableLayout: _rtfeldman$elm_css$Css_Structure$Compatible
};
var _rtfeldman$elm_css$Css$unset = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$initial,
	{value: 'unset'});
var _rtfeldman$elm_css$Css$inherit = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$initial,
	{value: 'inherit'});
var _rtfeldman$elm_css$Css$lengthForOverloadedProperty = A3(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$IncompatibleUnits, '', 0);
var _rtfeldman$elm_css$Css$alignItems = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'alignItems',
		'align-items',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$alignSelf = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'alignSelf',
		'align-self',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$justifyContent = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'justifyContent',
		'justify-content',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$float = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'float',
		'float',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$textAlignLast = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'textAlignLast',
		'text-align-last',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$textAlign = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'textAlign',
		'text-align',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$verticalAlign = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'verticalAlign',
		'vertical-align',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$backgroundPosition = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'backgroundPosition',
		'background-position',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$Rtl = {ctor: 'Rtl'};
var _rtfeldman$elm_css$Css$Ltr = {ctor: 'Ltr'};
var _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs = {ctor: 'IntentionallyUnsupportedPleaseSeeDocs'};
var _rtfeldman$elm_css$Css$thin = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;
var _rtfeldman$elm_css$Css$thick = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;
var _rtfeldman$elm_css$Css$blink = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;

var _rtfeldman$elm_css$Css_Colors$white = _rtfeldman$elm_css$Css$hex('ffffff');
var _rtfeldman$elm_css$Css_Colors$silver = _rtfeldman$elm_css$Css$hex('dddddd');
var _rtfeldman$elm_css$Css_Colors$gray = _rtfeldman$elm_css$Css$hex('AAAAAA');
var _rtfeldman$elm_css$Css_Colors$black = _rtfeldman$elm_css$Css$hex('111111');
var _rtfeldman$elm_css$Css_Colors$purple = _rtfeldman$elm_css$Css$hex('B10DC9');
var _rtfeldman$elm_css$Css_Colors$fuchsia = _rtfeldman$elm_css$Css$hex('F012BE');
var _rtfeldman$elm_css$Css_Colors$maroon = _rtfeldman$elm_css$Css$hex('85144b');
var _rtfeldman$elm_css$Css_Colors$red = _rtfeldman$elm_css$Css$hex('FF4136');
var _rtfeldman$elm_css$Css_Colors$orange = _rtfeldman$elm_css$Css$hex('FF851B');
var _rtfeldman$elm_css$Css_Colors$yellow = _rtfeldman$elm_css$Css$hex('FFDC00');
var _rtfeldman$elm_css$Css_Colors$lime = _rtfeldman$elm_css$Css$hex('01FF70');
var _rtfeldman$elm_css$Css_Colors$green = _rtfeldman$elm_css$Css$hex('2ECC40');
var _rtfeldman$elm_css$Css_Colors$olive = _rtfeldman$elm_css$Css$hex('3D9970');
var _rtfeldman$elm_css$Css_Colors$teal = _rtfeldman$elm_css$Css$hex('39CCCC');
var _rtfeldman$elm_css$Css_Colors$aqua = _rtfeldman$elm_css$Css$hex('7FDBFF');
var _rtfeldman$elm_css$Css_Colors$blue = _rtfeldman$elm_css$Css$hex('0074D9');
var _rtfeldman$elm_css$Css_Colors$navy = _rtfeldman$elm_css$Css$hex('001F3F');

var _rtfeldman$elm_css$Css_Structure_Output$noIndent = '';
var _rtfeldman$elm_css$Css_Structure_Output$spaceIndent = '    ';
var _rtfeldman$elm_css$Css_Structure_Output$indent = function (str) {
	return A2(_elm_lang$core$Basics_ops['++'], _rtfeldman$elm_css$Css_Structure_Output$spaceIndent, str);
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperty = function (_p0) {
	var _p1 = _p0;
	var suffix = _p1.important ? ' !important;' : ';';
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_p1.key,
		A2(
			_elm_lang$core$Basics_ops['++'],
			': ',
			A2(_elm_lang$core$Basics_ops['++'], _p1.value, suffix)));
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperties = function (properties) {
	return A2(
		_elm_lang$core$String$join,
		'\n',
		A2(
			_elm_lang$core$List$map,
			function (_p2) {
				return _rtfeldman$elm_css$Css_Structure_Output$indent(
					_rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperty(_p2));
			},
			properties));
};
var _rtfeldman$elm_css$Css_Structure_Output$combinatorToString = function (combinator) {
	var _p3 = combinator;
	switch (_p3.ctor) {
		case 'AdjacentSibling':
			return '+';
		case 'GeneralSibling':
			return '~';
		case 'Child':
			return '>';
		default:
			return '';
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$pseudoElementToString = function (_p4) {
	var _p5 = _p4;
	return A2(_elm_lang$core$Basics_ops['++'], '::', _p5._0);
};
var _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString = function (repeatableSimpleSelector) {
	var _p6 = repeatableSimpleSelector;
	switch (_p6.ctor) {
		case 'ClassSelector':
			return A2(_elm_lang$core$Basics_ops['++'], '.', _p6._0);
		case 'IdSelector':
			return A2(_elm_lang$core$Basics_ops['++'], '#', _p6._0);
		default:
			return A2(_elm_lang$core$Basics_ops['++'], ':', _p6._0);
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString = function (simpleSelectorSequence) {
	var _p7 = simpleSelectorSequence;
	switch (_p7.ctor) {
		case 'TypeSelectorSequence':
			return A2(
				_elm_lang$core$String$join,
				'',
				{
					ctor: '::',
					_0: _p7._0._0,
					_1: A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p7._1)
				});
		case 'UniversalSelectorSequence':
			var _p8 = _p7._0;
			return _elm_lang$core$List$isEmpty(_p8) ? '*' : A2(
				_elm_lang$core$String$join,
				'',
				A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p8));
		default:
			return A2(
				_elm_lang$core$String$join,
				'',
				{
					ctor: '::',
					_0: _p7._0,
					_1: A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p7._1)
				});
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$selectorChainToString = function (_p9) {
	var _p10 = _p9;
	return A2(
		_elm_lang$core$String$join,
		' ',
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure_Output$combinatorToString(_p10._0),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString(_p10._1),
				_1: {ctor: '[]'}
			}
		});
};
var _rtfeldman$elm_css$Css_Structure_Output$selectorToString = function (_p11) {
	var _p12 = _p11;
	var pseudoElementsString = A2(
		_elm_lang$core$String$join,
		'',
		{
			ctor: '::',
			_0: A2(
				_elm_lang$core$Maybe$withDefault,
				'',
				A2(_elm_lang$core$Maybe$map, _rtfeldman$elm_css$Css_Structure_Output$pseudoElementToString, _p12._2)),
			_1: {ctor: '[]'}
		});
	var segments = A2(
		_elm_lang$core$Basics_ops['++'],
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString(_p12._0),
			_1: {ctor: '[]'}
		},
		A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$selectorChainToString, _p12._1));
	return A3(
		_elm_lang$core$Basics$flip,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		pseudoElementsString,
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$filter,
				function (_p13) {
					return !_elm_lang$core$String$isEmpty(_p13);
				},
				segments)));
};
var _rtfeldman$elm_css$Css_Structure_Output$mediaExpressionToString = function (expression) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'(',
		A2(
			_elm_lang$core$Basics_ops['++'],
			expression.feature,
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					A2(
						_elm_lang$core$Maybe$map,
						F2(
							function (x, y) {
								return A2(_elm_lang$core$Basics_ops['++'], x, y);
							})(': '),
						expression.value)),
				')')));
};
var _rtfeldman$elm_css$Css_Structure_Output$mediaTypeToString = function (mediaType) {
	var _p14 = mediaType;
	switch (_p14.ctor) {
		case 'Print':
			return 'print';
		case 'Screen':
			return 'screen';
		default:
			return 'speech';
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$mediaQueryToString = function (mediaQuery) {
	var prefixWith = F3(
		function (str, mediaType, expressions) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				str,
				A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					A2(
						_elm_lang$core$String$join,
						' and ',
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Css_Structure_Output$mediaTypeToString(mediaType),
							_1: A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$mediaExpressionToString, expressions)
						})));
		});
	var _p15 = mediaQuery;
	switch (_p15.ctor) {
		case 'AllQuery':
			return A2(
				_elm_lang$core$String$join,
				' and ',
				A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$mediaExpressionToString, _p15._0));
		case 'OnlyQuery':
			return A3(prefixWith, 'only', _p15._0, _p15._1);
		case 'NotQuery':
			return A3(prefixWith, 'not', _p15._0, _p15._1);
		default:
			return _p15._0;
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock = F2(
	function (indentLevel, _p16) {
		var _p17 = _p16;
		var selectorStr = A2(
			_elm_lang$core$String$join,
			', ',
			A2(
				_elm_lang$core$List$map,
				_rtfeldman$elm_css$Css_Structure_Output$selectorToString,
				{ctor: '::', _0: _p17._0, _1: _p17._1}));
		return A2(
			_elm_lang$core$String$join,
			'',
			{
				ctor: '::',
				_0: selectorStr,
				_1: {
					ctor: '::',
					_0: ' {\n',
					_1: {
						ctor: '::',
						_0: indentLevel,
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperties(_p17._2),
							_1: {
								ctor: '::',
								_0: '\n',
								_1: {
									ctor: '::',
									_0: indentLevel,
									_1: {
										ctor: '::',
										_0: '}',
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			});
	});
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintDeclaration = function (declaration) {
	var _p18 = declaration;
	switch (_p18.ctor) {
		case 'StyleBlockDeclaration':
			return A2(_rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock, _rtfeldman$elm_css$Css_Structure_Output$noIndent, _p18._0);
		case 'MediaRule':
			var query = A2(
				_elm_lang$core$String$join,
				',\n',
				A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$mediaQueryToString, _p18._0));
			var blocks = A2(
				_elm_lang$core$String$join,
				'\n\n',
				A2(
					_elm_lang$core$List$map,
					function (_p19) {
						return _rtfeldman$elm_css$Css_Structure_Output$indent(
							A2(_rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock, _rtfeldman$elm_css$Css_Structure_Output$spaceIndent, _p19));
					},
					_p18._1));
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'@media ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					query,
					A2(
						_elm_lang$core$Basics_ops['++'],
						' {\n',
						A2(_elm_lang$core$Basics_ops['++'], blocks, '\n}'))));
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'Css.Structure.Output',
				{
					start: {line: 61, column: 5},
					end: {line: 78, column: 49}
				},
				_p18)('not yet implemented :x');
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$namespaceToString = function (_p21) {
	var _p22 = _p21;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'@namespace ',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_p22._0,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'\"',
				A2(_elm_lang$core$Basics_ops['++'], _p22._1, '\"'))));
};
var _rtfeldman$elm_css$Css_Structure_Output$importToString = function (_p23) {
	var _p24 = _p23;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'@import \"',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_p24._0,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p24._1),
				'\"')));
};
var _rtfeldman$elm_css$Css_Structure_Output$charsetToString = function (charset) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		A2(
			_elm_lang$core$Maybe$map,
			function (str) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'@charset \"',
					A2(_elm_lang$core$Basics_ops['++'], str, '\"'));
			},
			charset));
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrint = function (_p25) {
	var _p26 = _p25;
	return A2(
		_elm_lang$core$String$join,
		'\n\n',
		A2(
			_elm_lang$core$List$filter,
			function (_p27) {
				return !_elm_lang$core$String$isEmpty(_p27);
			},
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css_Structure_Output$charsetToString(_p26.charset),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$String$join,
						'\n',
						A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$importToString, _p26.imports)),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$core$String$join,
							'\n',
							A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$namespaceToString, _p26.namespaces)),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$core$String$join,
								'\n\n',
								A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$prettyPrintDeclaration, _p26.declarations)),
							_1: {ctor: '[]'}
						}
					}
				}
			}));
};

var _rtfeldman$elm_css$Css_Preprocess_Resolve$oneOf = function (maybes) {
	oneOf:
	while (true) {
		var _p0 = maybes;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p2 = _p0._0;
			var _p1 = _p2;
			if (_p1.ctor === 'Nothing') {
				var _v2 = _p0._1;
				maybes = _v2;
				continue oneOf;
			} else {
				return _p2;
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		var _p3 = declarations;
		if (_p3.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p3._0.ctor === 'StyleBlockDeclaration') {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					{ctor: '::', _0: _p3._0._0._0, _1: _p3._0._0._1},
					_rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(_p3._1));
			} else {
				var _v4 = _p3._1;
				declarations = _v4;
				continue collectSelectors;
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning = function (_p4) {
	var _p5 = _p4;
	return {
		ctor: '_Tuple2',
		_0: _p5.warnings,
		_1: {key: _p5.key, value: _p5.value, important: _p5.important}
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings = function (properties) {
	return {
		ctor: '_Tuple2',
		_0: A2(
			_elm_lang$core$List$concatMap,
			function (_) {
				return _.warnings;
			},
			properties),
		_1: A2(
			_elm_lang$core$List$map,
			function (prop) {
				return _elm_lang$core$Tuple$second(
					_rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning(prop));
			},
			properties)
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toDocumentRule = F5(
	function (str1, str2, str3, str4, declaration) {
		var _p6 = declaration;
		if (_p6.ctor === 'StyleBlockDeclaration') {
			return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, str1, str2, str3, str4, _p6._0);
		} else {
			return declaration;
		}
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$lastDeclaration = function (declarations) {
	lastDeclaration:
	while (true) {
		var _p7 = declarations;
		if (_p7.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			if (_p7._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(
					{
						ctor: '::',
						_0: _p7._0,
						_1: {ctor: '[]'}
					});
			} else {
				var _v8 = _p7._1;
				declarations = _v8;
				continue lastDeclaration;
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings = function (declarationsAndWarnings) {
	var _p8 = declarationsAndWarnings;
	if (_p8.ctor === '[]') {
		return {
			declarations: {ctor: '[]'},
			warnings: {ctor: '[]'}
		};
	} else {
		var result = _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(_p8._1);
		return {
			declarations: A2(_elm_lang$core$Basics_ops['++'], _p8._0.declarations, result.declarations),
			warnings: A2(_elm_lang$core$Basics_ops['++'], _p8._0.warnings, result.warnings)
		};
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues = function (tuples) {
	var expandTuples = function (tuplesToExpand) {
		var _p9 = tuplesToExpand;
		if (_p9.ctor === '[]') {
			return {
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			};
		} else {
			var _p10 = expandTuples(_p9._1);
			var nextWarnings = _p10._0;
			var nextTuples = _p10._1;
			var _p11 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(_p9._0._1);
			var warnings = _p11._0;
			var properties = _p11._1;
			return {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$Basics_ops['++'], warnings, nextWarnings),
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: _p9._0._0, _1: properties},
					_1: nextTuples
				}
			};
		}
	};
	var _p12 = expandTuples(tuples);
	var warnings = _p12._0;
	var newTuples = _p12._1;
	return {
		declarations: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure$FontFeatureValues(newTuples),
			_1: {ctor: '[]'}
		},
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle = function (counterStyleProperties) {
	var _p13 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(counterStyleProperties);
	var warnings = _p13._0;
	var properties = _p13._1;
	return {
		declarations: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure$Viewport(properties),
			_1: {ctor: '[]'}
		},
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport = function (viewportProperties) {
	var _p14 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(viewportProperties);
	var warnings = _p14._0;
	var properties = _p14._1;
	return {
		declarations: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure$Viewport(properties),
			_1: {ctor: '[]'}
		},
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes = F2(
	function (str, properties) {
		return {
			declarations: {
				ctor: '::',
				_0: A2(_rtfeldman$elm_css$Css_Structure$Keyframes, str, properties),
				_1: {ctor: '[]'}
			},
			warnings: {ctor: '[]'}
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace = function (fontFaceProperties) {
	var _p15 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(fontFaceProperties);
	var warnings = _p15._0;
	var properties = _p15._1;
	return {
		declarations: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure$FontFace(properties),
			_1: {ctor: '[]'}
		},
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule = F2(
	function (str, pageRuleProperties) {
		var _p16 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(pageRuleProperties);
		var warnings = _p16._0;
		var properties = _p16._1;
		return {
			declarations: {
				ctor: '::',
				_0: A2(_rtfeldman$elm_css$Css_Structure$PageRule, str, properties),
				_1: {ctor: '[]'}
			},
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule = F2(
	function (mediaQueries, declaration) {
		var _p17 = declaration;
		switch (_p17.ctor) {
			case 'StyleBlockDeclaration':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					mediaQueries,
					{
						ctor: '::',
						_0: _p17._0,
						_1: {ctor: '[]'}
					});
			case 'MediaRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p17._0),
					_p17._1);
			case 'SupportsRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$SupportsRule,
					_p17._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule(mediaQueries),
						_p17._1));
			case 'DocumentRule':
				return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p17._0, _p17._1, _p17._2, _p17._3, _p17._4);
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return declaration;
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule = F2(
	function (mediaQueries, styleBlocks) {
		var handleStyleBlock = function (styleBlock) {
			var _p18 = _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(styleBlock);
			var declarations = _p18.declarations;
			var warnings = _p18.warnings;
			return {
				declarations: A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule(mediaQueries),
					declarations),
				warnings: warnings
			};
		};
		var results = A2(_elm_lang$core$List$map, handleStyleBlock, styleBlocks);
		return {
			warnings: A2(
				_elm_lang$core$List$concatMap,
				function (_) {
					return _.warnings;
				},
				results),
			declarations: A2(
				_elm_lang$core$List$concatMap,
				function (_) {
					return _.declarations;
				},
				results)
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock = function (_p19) {
	var _p20 = _p19;
	return A2(
		_rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles,
		_p20._2,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
				A3(
					_rtfeldman$elm_css$Css_Structure$StyleBlock,
					_p20._0,
					_p20._1,
					{ctor: '[]'})),
			_1: {ctor: '[]'}
		});
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles = F2(
	function (styles, declarations) {
		applyStyles:
		while (true) {
			var _p21 = styles;
			if (_p21.ctor === '[]') {
				return {
					declarations: declarations,
					warnings: {ctor: '[]'}
				};
			} else {
				switch (_p21._0.ctor) {
					case 'AppendProperty':
						var _p22 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning(_p21._0._0);
						var warnings = _p22._0;
						var property = _p22._1;
						var result = A2(
							_rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles,
							_p21._1,
							A2(_rtfeldman$elm_css$Css_Structure$appendProperty, property, declarations));
						return {
							declarations: result.declarations,
							warnings: A2(_elm_lang$core$Basics_ops['++'], warnings, result.warnings)
						};
					case 'ExtendSelector':
						return A4(
							_rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedStylesToLast,
							_p21._0._1,
							_p21._1,
							_rtfeldman$elm_css$Css_Structure$appendRepeatableToLastSelector(_p21._0._0),
							declarations);
					case 'NestSnippet':
						var chain = F2(
							function (_p24, _p23) {
								var _p25 = _p24;
								var _p26 = _p23;
								return A3(
									_rtfeldman$elm_css$Css_Structure$Selector,
									_p25._0,
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p25._1,
										{
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: _p21._0._0, _1: _p26._0},
											_1: _p26._1
										}),
									_rtfeldman$elm_css$Css_Preprocess_Resolve$oneOf(
										{
											ctor: '::',
											_0: _p26._2,
											_1: {
												ctor: '::',
												_0: _p25._2,
												_1: {ctor: '[]'}
											}
										}));
							});
						var expandDeclaration = function (declaration) {
							var _p27 = declaration;
							switch (_p27.ctor) {
								case 'StyleBlockDeclaration':
									var newSelectors = A2(
										_elm_lang$core$List$concatMap,
										function (originalSelector) {
											return A2(
												_elm_lang$core$List$map,
												chain(originalSelector),
												{ctor: '::', _0: _p27._0._0, _1: _p27._0._1});
										},
										_rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(declarations));
									var newDeclarations = function () {
										var _p28 = newSelectors;
										if (_p28.ctor === '[]') {
											return {ctor: '[]'};
										} else {
											return {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
													A3(
														_rtfeldman$elm_css$Css_Structure$StyleBlock,
														_p28._0,
														_p28._1,
														{ctor: '[]'})),
												_1: {ctor: '[]'}
											};
										}
									}();
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
										{
											ctor: '::',
											_0: A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles, _p27._0._2, newDeclarations),
											_1: {ctor: '[]'}
										});
								case 'MediaRule':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule, _p27._0, _p27._1);
								case 'SupportsRule':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule, _p27._0, _p27._1);
								case 'DocumentRule':
									return A5(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule, _p27._0, _p27._1, _p27._2, _p27._3, _p27._4);
								case 'PageRule':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule, _p27._0, _p27._1);
								case 'FontFace':
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace(_p27._0);
								case 'Keyframes':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes, _p27._0, _p27._1);
								case 'Viewport':
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport(_p27._0);
								case 'CounterStyle':
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle(_p27._0);
								default:
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues(_p27._0);
							}
						};
						return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
							A2(
								F2(
									function (x, y) {
										return A2(_elm_lang$core$Basics_ops['++'], x, y);
									}),
								{
									ctor: '::',
									_0: A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles, _p21._1, declarations),
									_1: {ctor: '[]'}
								},
								A2(
									_elm_lang$core$List$map,
									expandDeclaration,
									A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, _p21._0._1))));
					case 'WithPseudoElement':
						return A4(
							_rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedStylesToLast,
							_p21._0._1,
							_p21._1,
							_rtfeldman$elm_css$Css_Structure$appendPseudoElementToLastSelector(_p21._0._0),
							declarations);
					case 'WithMedia':
						var newDeclarations = function () {
							var _p29 = _rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(declarations);
							if (_p29.ctor === '[]') {
								return {ctor: '[]'};
							} else {
								return {
									ctor: '::',
									_0: A2(
										_rtfeldman$elm_css$Css_Structure$MediaRule,
										_p21._0._0,
										{
											ctor: '::',
											_0: A3(
												_rtfeldman$elm_css$Css_Structure$StyleBlock,
												_p29._0,
												_p29._1,
												{ctor: '[]'}),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								};
							}
						}();
						return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
							{
								ctor: '::',
								_0: A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles, _p21._1, declarations),
								_1: {
									ctor: '::',
									_0: A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles, _p21._0._1, newDeclarations),
									_1: {ctor: '[]'}
								}
							});
					default:
						var _v19 = A2(_elm_lang$core$Basics_ops['++'], _p21._0._0, _p21._1),
							_v20 = declarations;
						styles = _v19;
						declarations = _v20;
						continue applyStyles;
				}
			}
		}
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedStylesToLast = F4(
	function (nestedStyles, rest, f, declarations) {
		var withoutParent = function (decls) {
			return A2(
				_elm_lang$core$Maybe$withDefault,
				{ctor: '[]'},
				_elm_lang$core$List$tail(decls));
		};
		var nextResult = A2(
			_rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles,
			rest,
			A2(
				_elm_lang$core$Maybe$withDefault,
				{ctor: '[]'},
				_rtfeldman$elm_css$Css_Preprocess_Resolve$lastDeclaration(declarations)));
		var newDeclarations = function () {
			var _p30 = {
				ctor: '_Tuple2',
				_0: _elm_lang$core$List$head(nextResult.declarations),
				_1: _elm_lang$core$List$head(
					_elm_lang$core$List$reverse(declarations))
			};
			if (((_p30.ctor === '_Tuple2') && (_p30._0.ctor === 'Just')) && (_p30._1.ctor === 'Just')) {
				var _p32 = _p30._1._0;
				var _p31 = _p30._0._0;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$List$take,
						_elm_lang$core$List$length(declarations) - 1,
						declarations),
					{
						ctor: '::',
						_0: (!_elm_lang$core$Native_Utils.eq(_p32, _p31)) ? _p31 : _p32,
						_1: {ctor: '[]'}
					});
			} else {
				return declarations;
			}
		}();
		var handleInitial = function (declarationsAndWarnings) {
			var result = A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles, nestedStyles, declarationsAndWarnings.declarations);
			return {
				warnings: A2(_elm_lang$core$Basics_ops['++'], declarationsAndWarnings.warnings, result.warnings),
				declarations: result.declarations
			};
		};
		var insertStylesToNestedDecl = function (lastDecl) {
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
				A2(
					_rtfeldman$elm_css$Css_Structure$mapLast,
					handleInitial,
					A2(
						_elm_lang$core$List$map,
						function (declaration) {
							return {
								declarations: {
									ctor: '::',
									_0: declaration,
									_1: {ctor: '[]'}
								},
								warnings: {ctor: '[]'}
							};
						},
						A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, f, lastDecl))));
		};
		var initialResult = A2(
			_elm_lang$core$Maybe$withDefault,
			{
				warnings: {ctor: '[]'},
				declarations: {ctor: '[]'}
			},
			A2(
				_elm_lang$core$Maybe$map,
				insertStylesToNestedDecl,
				_rtfeldman$elm_css$Css_Preprocess_Resolve$lastDeclaration(declarations)));
		return {
			warnings: A2(_elm_lang$core$Basics_ops['++'], initialResult.warnings, nextResult.warnings),
			declarations: A2(
				_elm_lang$core$Basics_ops['++'],
				newDeclarations,
				A2(
					_elm_lang$core$Basics_ops['++'],
					withoutParent(initialResult.declarations),
					withoutParent(nextResult.declarations)))
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule = F5(
	function (str1, str2, str3, str4, styleBlock) {
		var _p33 = _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(styleBlock);
		var declarations = _p33.declarations;
		var warnings = _p33.warnings;
		return {
			declarations: A2(
				_elm_lang$core$List$map,
				A4(_rtfeldman$elm_css$Css_Preprocess_Resolve$toDocumentRule, str1, str2, str3, str4),
				declarations),
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule = F2(
	function (str, snippets) {
		var _p34 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(
			A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, snippets));
		var declarations = _p34.declarations;
		var warnings = _p34.warnings;
		return {
			declarations: {
				ctor: '::',
				_0: A2(_rtfeldman$elm_css$Css_Structure$SupportsRule, str, declarations),
				_1: {ctor: '[]'}
			},
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$extract = function (snippetDeclarations) {
	var _p35 = snippetDeclarations;
	if (_p35.ctor === '[]') {
		return {
			declarations: {ctor: '[]'},
			warnings: {ctor: '[]'}
		};
	} else {
		var _p36 = _rtfeldman$elm_css$Css_Preprocess_Resolve$toDeclarations(_p35._0);
		var declarations = _p36.declarations;
		var warnings = _p36.warnings;
		var nextResult = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(_p35._1);
		return {
			declarations: A2(_elm_lang$core$Basics_ops['++'], declarations, nextResult.declarations),
			warnings: A2(_elm_lang$core$Basics_ops['++'], warnings, nextResult.warnings)
		};
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toDeclarations = function (snippetDeclaration) {
	var _p37 = snippetDeclaration;
	switch (_p37.ctor) {
		case 'StyleBlockDeclaration':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(_p37._0);
		case 'MediaRule':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule, _p37._0, _p37._1);
		case 'SupportsRule':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule, _p37._0, _p37._1);
		case 'DocumentRule':
			return A5(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule, _p37._0, _p37._1, _p37._2, _p37._3, _p37._4);
		case 'PageRule':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule, _p37._0, _p37._1);
		case 'FontFace':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace(_p37._0);
		case 'Keyframes':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes, _p37._0, _p37._1);
		case 'Viewport':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport(_p37._0);
		case 'CounterStyle':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle(_p37._0);
		default:
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues(_p37._0);
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toStructure = function (_p38) {
	var _p39 = _p38;
	var _p40 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(
		A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, _p39.snippets));
	var warnings = _p40.warnings;
	var declarations = _p40.declarations;
	return {
		ctor: '_Tuple2',
		_0: {charset: _p39.charset, imports: _p39.imports, namespaces: _p39.namespaces, declarations: declarations},
		_1: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$compile1 = function (sheet) {
	var _p41 = _rtfeldman$elm_css$Css_Preprocess_Resolve$toStructure(sheet);
	var structureStylesheet = _p41._0;
	var warnings = _p41._1;
	return {
		warnings: warnings,
		css: _rtfeldman$elm_css$Css_Structure_Output$prettyPrint(
			_rtfeldman$elm_css$Css_Structure$dropEmpty(structureStylesheet))
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$compile = function (styles) {
	var results = A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Preprocess_Resolve$compile1, styles);
	return {
		warnings: A2(
			_elm_lang$core$List$concatMap,
			function (_) {
				return _.warnings;
			},
			results),
		css: A2(
			_elm_lang$core$String$join,
			'\n\n',
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.css;
				},
				results))
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$DeclarationsAndWarnings = F2(
	function (a, b) {
		return {declarations: a, warnings: b};
	});

var _rtfeldman$elm_css$VirtualDom_Styled$containsKey = F2(
	function (key, pairs) {
		containsKey:
		while (true) {
			var _p0 = pairs;
			if (_p0.ctor === '[]') {
				return false;
			} else {
				if (_elm_lang$core$Native_Utils.eq(key, _p0._0._0)) {
					return true;
				} else {
					var _v1 = key,
						_v2 = _p0._1;
					key = _v1;
					pairs = _v2;
					continue containsKey;
				}
			}
		}
	});
var _rtfeldman$elm_css$VirtualDom_Styled$getUnusedKey = F2(
	function ($default, pairs) {
		getUnusedKey:
		while (true) {
			var _p1 = pairs;
			if (_p1.ctor === '[]') {
				return $default;
			} else {
				var _p2 = _p1._1;
				var newKey = A2(_elm_lang$core$Basics_ops['++'], '_', _p1._0._0);
				if (A2(_rtfeldman$elm_css$VirtualDom_Styled$containsKey, newKey, _p2)) {
					var _v4 = newKey,
						_v5 = _p2;
					$default = _v4;
					pairs = _v5;
					continue getUnusedKey;
				} else {
					return newKey;
				}
			}
		}
	});
var _rtfeldman$elm_css$VirtualDom_Styled$extractUnstyledProperty = function (_p3) {
	var _p4 = _p3;
	return _p4._0;
};
var _rtfeldman$elm_css$VirtualDom_Styled$stylesFromPropertiesHelp = F2(
	function (candidate, properties) {
		stylesFromPropertiesHelp:
		while (true) {
			var _p5 = properties;
			if (_p5.ctor === '[]') {
				return candidate;
			} else {
				var _p7 = _p5._1;
				var _p6 = _p5._0._2;
				if (_elm_lang$core$String$isEmpty(_p6)) {
					var _v8 = candidate,
						_v9 = _p7;
					candidate = _v8;
					properties = _v9;
					continue stylesFromPropertiesHelp;
				} else {
					var _v10 = _elm_lang$core$Maybe$Just(
						{ctor: '_Tuple2', _0: _p6, _1: _p5._0._1}),
						_v11 = _p7;
					candidate = _v10;
					properties = _v11;
					continue stylesFromPropertiesHelp;
				}
			}
		}
	});
var _rtfeldman$elm_css$VirtualDom_Styled$stylesFromProperties = function (properties) {
	var _p8 = A2(_rtfeldman$elm_css$VirtualDom_Styled$stylesFromPropertiesHelp, _elm_lang$core$Maybe$Nothing, properties);
	if (_p8.ctor === 'Nothing') {
		return _elm_lang$core$Dict$empty;
	} else {
		return A2(_elm_lang$core$Dict$singleton, _p8._0._0, _p8._0._1);
	}
};
var _rtfeldman$elm_css$VirtualDom_Styled$accumulateStyles = F2(
	function (_p9, styles) {
		var _p10 = _p9;
		var _p11 = _p10._1;
		return _elm_lang$core$List$isEmpty(_p11) ? styles : A3(_elm_lang$core$Dict$insert, _p10._2, _p11, styles);
	});
var _rtfeldman$elm_css$VirtualDom_Styled$accumulateKeyedStyledHtml = F2(
	function (_p13, _p12) {
		var _p14 = _p13;
		var _p23 = _p14._0;
		var _p15 = _p12;
		var _p22 = _p15._1;
		var _p21 = _p15._0;
		var _p16 = _p14._1;
		switch (_p16.ctor) {
			case 'Unstyled':
				return {
					ctor: '_Tuple2',
					_0: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _p23, _1: _p16._0},
						_1: _p21
					},
					_1: _p22
				};
			case 'Element':
				var _p18 = _p16._1;
				var combinedStyles = A3(_elm_lang$core$List$foldl, _rtfeldman$elm_css$VirtualDom_Styled$accumulateStyles, _p22, _p18);
				var _p17 = A3(
					_elm_lang$core$List$foldl,
					_rtfeldman$elm_css$VirtualDom_Styled$accumulateStyledHtml,
					{
						ctor: '_Tuple2',
						_0: {ctor: '[]'},
						_1: combinedStyles
					},
					_p16._2);
				var childNodes = _p17._0;
				var finalStyles = _p17._1;
				var vdom = A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					_p16._0,
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$VirtualDom_Styled$extractUnstyledProperty, _p18),
					_elm_lang$core$List$reverse(childNodes));
				return {
					ctor: '_Tuple2',
					_0: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _p23, _1: vdom},
						_1: _p21
					},
					_1: finalStyles
				};
			default:
				var _p20 = _p16._1;
				var combinedStyles = A3(_elm_lang$core$List$foldl, _rtfeldman$elm_css$VirtualDom_Styled$accumulateStyles, _p22, _p20);
				var _p19 = A3(
					_elm_lang$core$List$foldl,
					_rtfeldman$elm_css$VirtualDom_Styled$accumulateKeyedStyledHtml,
					{
						ctor: '_Tuple2',
						_0: {ctor: '[]'},
						_1: combinedStyles
					},
					_p16._2);
				var childNodes = _p19._0;
				var finalStyles = _p19._1;
				var vdom = A3(
					_elm_lang$virtual_dom$VirtualDom$keyedNode,
					_p16._0,
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$VirtualDom_Styled$extractUnstyledProperty, _p20),
					_elm_lang$core$List$reverse(childNodes));
				return {
					ctor: '_Tuple2',
					_0: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _p23, _1: vdom},
						_1: _p21
					},
					_1: finalStyles
				};
		}
	});
var _rtfeldman$elm_css$VirtualDom_Styled$accumulateStyledHtml = F2(
	function (html, _p24) {
		var _p25 = _p24;
		var _p32 = _p25._1;
		var _p31 = _p25._0;
		var _p26 = html;
		switch (_p26.ctor) {
			case 'Unstyled':
				return {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: _p26._0, _1: _p31},
					_1: _p32
				};
			case 'Element':
				var _p28 = _p26._1;
				var combinedStyles = A3(_elm_lang$core$List$foldl, _rtfeldman$elm_css$VirtualDom_Styled$accumulateStyles, _p32, _p28);
				var _p27 = A3(
					_elm_lang$core$List$foldl,
					_rtfeldman$elm_css$VirtualDom_Styled$accumulateStyledHtml,
					{
						ctor: '_Tuple2',
						_0: {ctor: '[]'},
						_1: combinedStyles
					},
					_p26._2);
				var childNodes = _p27._0;
				var finalStyles = _p27._1;
				var node = A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					_p26._0,
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$VirtualDom_Styled$extractUnstyledProperty, _p28),
					_elm_lang$core$List$reverse(childNodes));
				return {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: node, _1: _p31},
					_1: finalStyles
				};
			default:
				var _p30 = _p26._1;
				var combinedStyles = A3(_elm_lang$core$List$foldl, _rtfeldman$elm_css$VirtualDom_Styled$accumulateStyles, _p32, _p30);
				var _p29 = A3(
					_elm_lang$core$List$foldl,
					_rtfeldman$elm_css$VirtualDom_Styled$accumulateKeyedStyledHtml,
					{
						ctor: '_Tuple2',
						_0: {ctor: '[]'},
						_1: combinedStyles
					},
					_p26._2);
				var childNodes = _p29._0;
				var finalStyles = _p29._1;
				var node = A3(
					_elm_lang$virtual_dom$VirtualDom$keyedNode,
					_p26._0,
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$VirtualDom_Styled$extractUnstyledProperty, _p30),
					_elm_lang$core$List$reverse(childNodes));
				return {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: node, _1: _p31},
					_1: finalStyles
				};
		}
	});
var _rtfeldman$elm_css$VirtualDom_Styled$murmurSeed = 15739;
var _rtfeldman$elm_css$VirtualDom_Styled$makeSnippet = F2(
	function (styles, sequence) {
		var selector = A3(
			_rtfeldman$elm_css$Css_Structure$Selector,
			sequence,
			{ctor: '[]'},
			_elm_lang$core$Maybe$Nothing);
		return _rtfeldman$elm_css$Css_Preprocess$Snippet(
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration(
					A3(
						_rtfeldman$elm_css$Css_Preprocess$StyleBlock,
						selector,
						{ctor: '[]'},
						styles)),
				_1: {ctor: '[]'}
			});
	});
var _rtfeldman$elm_css$VirtualDom_Styled$snippetFromPair = function (_p33) {
	var _p34 = _p33;
	return A2(
		_rtfeldman$elm_css$VirtualDom_Styled$makeSnippet,
		_p34._1,
		_rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css_Structure$ClassSelector(_p34._0),
				_1: {ctor: '[]'}
			}));
};
var _rtfeldman$elm_css$VirtualDom_Styled$toDeclaration = function (dict) {
	return function (_) {
		return _.css;
	}(
		_rtfeldman$elm_css$Css_Preprocess_Resolve$compile(
			_elm_lang$core$List$singleton(
				_rtfeldman$elm_css$Css_Preprocess$stylesheet(
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$VirtualDom_Styled$snippetFromPair,
						_elm_lang$core$Dict$toList(dict))))));
};
var _rtfeldman$elm_css$VirtualDom_Styled$toStyleNode = function (styles) {
	return A3(
		_elm_lang$virtual_dom$VirtualDom$node,
		'style',
		{ctor: '[]'},
		_elm_lang$core$List$singleton(
			_elm_lang$virtual_dom$VirtualDom$text(
				_rtfeldman$elm_css$VirtualDom_Styled$toDeclaration(styles))));
};
var _rtfeldman$elm_css$VirtualDom_Styled$unstyle = F3(
	function (elemType, properties, children) {
		var unstyledProperties = A2(_elm_lang$core$List$map, _rtfeldman$elm_css$VirtualDom_Styled$extractUnstyledProperty, properties);
		var initialStyles = _rtfeldman$elm_css$VirtualDom_Styled$stylesFromProperties(properties);
		var _p35 = A3(
			_elm_lang$core$List$foldl,
			_rtfeldman$elm_css$VirtualDom_Styled$accumulateStyledHtml,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: initialStyles
			},
			children);
		var childNodes = _p35._0;
		var styles = _p35._1;
		var styleNode = _rtfeldman$elm_css$VirtualDom_Styled$toStyleNode(styles);
		return A3(
			_elm_lang$virtual_dom$VirtualDom$node,
			elemType,
			unstyledProperties,
			{
				ctor: '::',
				_0: styleNode,
				_1: _elm_lang$core$List$reverse(childNodes)
			});
	});
var _rtfeldman$elm_css$VirtualDom_Styled$toKeyedStyleNode = F2(
	function (allStyles, keyedChildNodes) {
		var finalNode = _rtfeldman$elm_css$VirtualDom_Styled$toStyleNode(allStyles);
		var styleNodeKey = A2(_rtfeldman$elm_css$VirtualDom_Styled$getUnusedKey, '_', keyedChildNodes);
		return {ctor: '_Tuple2', _0: styleNodeKey, _1: finalNode};
	});
var _rtfeldman$elm_css$VirtualDom_Styled$unstyleKeyed = F3(
	function (elemType, properties, keyedChildren) {
		var unstyledProperties = A2(_elm_lang$core$List$map, _rtfeldman$elm_css$VirtualDom_Styled$extractUnstyledProperty, properties);
		var initialStyles = _rtfeldman$elm_css$VirtualDom_Styled$stylesFromProperties(properties);
		var _p36 = A3(
			_elm_lang$core$List$foldl,
			_rtfeldman$elm_css$VirtualDom_Styled$accumulateKeyedStyledHtml,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: initialStyles
			},
			keyedChildren);
		var keyedChildNodes = _p36._0;
		var styles = _p36._1;
		var keyedStyleNode = A2(_rtfeldman$elm_css$VirtualDom_Styled$toKeyedStyleNode, styles, keyedChildNodes);
		return A3(
			_elm_lang$virtual_dom$VirtualDom$keyedNode,
			elemType,
			unstyledProperties,
			{
				ctor: '::',
				_0: keyedStyleNode,
				_1: _elm_lang$core$List$reverse(keyedChildNodes)
			});
	});
var _rtfeldman$elm_css$VirtualDom_Styled$getClassname = function (styles) {
	return _elm_lang$core$List$isEmpty(styles) ? 'unstyled' : A2(
		_elm_lang$core$String$cons,
		_elm_lang$core$Native_Utils.chr('_'),
		_rtfeldman$hex$Hex$toString(
			A2(
				_Skinney$murmur3$Murmur3$hashString,
				_rtfeldman$elm_css$VirtualDom_Styled$murmurSeed,
				function (_) {
					return _.css;
				}(
					_rtfeldman$elm_css$Css_Preprocess_Resolve$compile(
						_elm_lang$core$List$singleton(
							_rtfeldman$elm_css$Css_Preprocess$stylesheet(
								_elm_lang$core$List$singleton(
									A2(
										_rtfeldman$elm_css$VirtualDom_Styled$makeSnippet,
										styles,
										_rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
											{ctor: '[]'}))))))))));
};
var _rtfeldman$elm_css$VirtualDom_Styled$toUnstyled = function (node) {
	var _p37 = node;
	switch (_p37.ctor) {
		case 'Unstyled':
			return _p37._0;
		case 'Element':
			return A3(_rtfeldman$elm_css$VirtualDom_Styled$unstyle, _p37._0, _p37._1, _p37._2);
		default:
			return A3(_rtfeldman$elm_css$VirtualDom_Styled$unstyleKeyed, _p37._0, _p37._1, _p37._2);
	}
};
var _rtfeldman$elm_css$VirtualDom_Styled$Unstyled = function (a) {
	return {ctor: 'Unstyled', _0: a};
};
var _rtfeldman$elm_css$VirtualDom_Styled$unstyledNode = _rtfeldman$elm_css$VirtualDom_Styled$Unstyled;
var _rtfeldman$elm_css$VirtualDom_Styled$text = function (_p38) {
	return _rtfeldman$elm_css$VirtualDom_Styled$Unstyled(
		_elm_lang$virtual_dom$VirtualDom$text(_p38));
};
var _rtfeldman$elm_css$VirtualDom_Styled$lazy = F2(
	function (fn, arg) {
		return _rtfeldman$elm_css$VirtualDom_Styled$Unstyled(
			A2(_elm_lang$virtual_dom$VirtualDom$lazy, fn, arg));
	});
var _rtfeldman$elm_css$VirtualDom_Styled$lazy2 = F3(
	function (fn, arg1, arg2) {
		return _rtfeldman$elm_css$VirtualDom_Styled$Unstyled(
			A3(_elm_lang$virtual_dom$VirtualDom$lazy2, fn, arg1, arg2));
	});
var _rtfeldman$elm_css$VirtualDom_Styled$lazy3 = F4(
	function (fn, arg1, arg2, arg3) {
		return _rtfeldman$elm_css$VirtualDom_Styled$Unstyled(
			A4(_elm_lang$virtual_dom$VirtualDom$lazy3, fn, arg1, arg2, arg3));
	});
var _rtfeldman$elm_css$VirtualDom_Styled$KeyedElement = F3(
	function (a, b, c) {
		return {ctor: 'KeyedElement', _0: a, _1: b, _2: c};
	});
var _rtfeldman$elm_css$VirtualDom_Styled$keyedNode = _rtfeldman$elm_css$VirtualDom_Styled$KeyedElement;
var _rtfeldman$elm_css$VirtualDom_Styled$Element = F3(
	function (a, b, c) {
		return {ctor: 'Element', _0: a, _1: b, _2: c};
	});
var _rtfeldman$elm_css$VirtualDom_Styled$node = _rtfeldman$elm_css$VirtualDom_Styled$Element;
var _rtfeldman$elm_css$VirtualDom_Styled$Property = F3(
	function (a, b, c) {
		return {ctor: 'Property', _0: a, _1: b, _2: c};
	});
var _rtfeldman$elm_css$VirtualDom_Styled$property = F2(
	function (key, value) {
		return A3(
			_rtfeldman$elm_css$VirtualDom_Styled$Property,
			A2(_elm_lang$virtual_dom$VirtualDom$property, key, value),
			{ctor: '[]'},
			'');
	});
var _rtfeldman$elm_css$VirtualDom_Styled$attribute = F2(
	function (key, value) {
		return A3(
			_rtfeldman$elm_css$VirtualDom_Styled$Property,
			A2(_elm_lang$virtual_dom$VirtualDom$attribute, key, value),
			{ctor: '[]'},
			'');
	});
var _rtfeldman$elm_css$VirtualDom_Styled$attributeNS = F3(
	function (namespace, key, value) {
		return A3(
			_rtfeldman$elm_css$VirtualDom_Styled$Property,
			A3(_elm_lang$virtual_dom$VirtualDom$attributeNS, namespace, key, value),
			{ctor: '[]'},
			'');
	});
var _rtfeldman$elm_css$VirtualDom_Styled$unstyledProperty = function (prop) {
	return A3(
		_rtfeldman$elm_css$VirtualDom_Styled$Property,
		prop,
		{ctor: '[]'},
		'');
};
var _rtfeldman$elm_css$VirtualDom_Styled$on = F2(
	function (eventName, decoder) {
		return A3(
			_rtfeldman$elm_css$VirtualDom_Styled$Property,
			A2(_elm_lang$virtual_dom$VirtualDom$on, eventName, decoder),
			{ctor: '[]'},
			'');
	});
var _rtfeldman$elm_css$VirtualDom_Styled$onWithOptions = F3(
	function (eventName, options, decoder) {
		return A3(
			_rtfeldman$elm_css$VirtualDom_Styled$Property,
			A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, options, decoder),
			{ctor: '[]'},
			'');
	});
var _rtfeldman$elm_css$VirtualDom_Styled$mapProperty = F2(
	function (transform, _p39) {
		var _p40 = _p39;
		return A3(
			_rtfeldman$elm_css$VirtualDom_Styled$Property,
			A2(_elm_lang$virtual_dom$VirtualDom$mapProperty, transform, _p40._0),
			_p40._1,
			_p40._2);
	});
var _rtfeldman$elm_css$VirtualDom_Styled$map = F2(
	function (transform, node) {
		var _p41 = node;
		switch (_p41.ctor) {
			case 'Element':
				return A3(
					_rtfeldman$elm_css$VirtualDom_Styled$Element,
					_p41._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$VirtualDom_Styled$mapProperty(transform),
						_p41._1),
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$VirtualDom_Styled$map(transform),
						_p41._2));
			case 'KeyedElement':
				return A3(
					_rtfeldman$elm_css$VirtualDom_Styled$KeyedElement,
					_p41._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$VirtualDom_Styled$mapProperty(transform),
						_p41._1),
					A2(
						_elm_lang$core$List$map,
						function (_p42) {
							var _p43 = _p42;
							return {
								ctor: '_Tuple2',
								_0: _p43._0,
								_1: A2(_rtfeldman$elm_css$VirtualDom_Styled$map, transform, _p43._1)
							};
						},
						_p41._2));
			default:
				return _rtfeldman$elm_css$VirtualDom_Styled$Unstyled(
					A2(_elm_lang$virtual_dom$VirtualDom$map, transform, _p41._0));
		}
	});

var _rtfeldman$elm_css$Html_Styled_Internal$css = function (styles) {
	var classname = _rtfeldman$elm_css$VirtualDom_Styled$getClassname(styles);
	var classProperty = A2(
		_elm_lang$virtual_dom$VirtualDom$property,
		'className',
		_elm_lang$core$Json_Encode$string(classname));
	return A3(_rtfeldman$elm_css$VirtualDom_Styled$Property, classProperty, styles, classname);
};

var _rtfeldman$elm_css$Html_Styled$fromUnstyled = _rtfeldman$elm_css$VirtualDom_Styled$unstyledNode;
var _rtfeldman$elm_css$Html_Styled$toUnstyled = _rtfeldman$elm_css$VirtualDom_Styled$toUnstyled;
var _rtfeldman$elm_css$Html_Styled$program = function (config) {
	return _elm_lang$virtual_dom$VirtualDom$program(
		_elm_lang$core$Native_Utils.update(
			config,
			{
				view: function (_p0) {
					return _rtfeldman$elm_css$Html_Styled$toUnstyled(
						config.view(_p0));
				}
			}));
};
var _rtfeldman$elm_css$Html_Styled$beginnerProgram = function (_p1) {
	var _p2 = _p1;
	return _rtfeldman$elm_css$Html_Styled$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p2.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p2.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p2.view,
			subscriptions: function (_p3) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _rtfeldman$elm_css$Html_Styled$programWithFlags = function (config) {
	return _elm_lang$virtual_dom$VirtualDom$programWithFlags(
		_elm_lang$core$Native_Utils.update(
			config,
			{
				view: function (_p4) {
					return _rtfeldman$elm_css$Html_Styled$toUnstyled(
						config.view(_p4));
				}
			}));
};
var _rtfeldman$elm_css$Html_Styled$styled = F4(
	function (fn, styles, attrs, children) {
		return A2(
			fn,
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Html_Styled_Internal$css(styles),
				_1: attrs
			},
			children);
	});
var _rtfeldman$elm_css$Html_Styled$map = _rtfeldman$elm_css$VirtualDom_Styled$map;
var _rtfeldman$elm_css$Html_Styled$text = _rtfeldman$elm_css$VirtualDom_Styled$text;
var _rtfeldman$elm_css$Html_Styled$node = _rtfeldman$elm_css$VirtualDom_Styled$node;
var _rtfeldman$elm_css$Html_Styled$body = _rtfeldman$elm_css$Html_Styled$node('body');
var _rtfeldman$elm_css$Html_Styled$section = _rtfeldman$elm_css$Html_Styled$node('section');
var _rtfeldman$elm_css$Html_Styled$nav = _rtfeldman$elm_css$Html_Styled$node('nav');
var _rtfeldman$elm_css$Html_Styled$article = _rtfeldman$elm_css$Html_Styled$node('article');
var _rtfeldman$elm_css$Html_Styled$aside = _rtfeldman$elm_css$Html_Styled$node('aside');
var _rtfeldman$elm_css$Html_Styled$h1 = _rtfeldman$elm_css$Html_Styled$node('h1');
var _rtfeldman$elm_css$Html_Styled$h2 = _rtfeldman$elm_css$Html_Styled$node('h2');
var _rtfeldman$elm_css$Html_Styled$h3 = _rtfeldman$elm_css$Html_Styled$node('h3');
var _rtfeldman$elm_css$Html_Styled$h4 = _rtfeldman$elm_css$Html_Styled$node('h4');
var _rtfeldman$elm_css$Html_Styled$h5 = _rtfeldman$elm_css$Html_Styled$node('h5');
var _rtfeldman$elm_css$Html_Styled$h6 = _rtfeldman$elm_css$Html_Styled$node('h6');
var _rtfeldman$elm_css$Html_Styled$header = _rtfeldman$elm_css$Html_Styled$node('header');
var _rtfeldman$elm_css$Html_Styled$footer = _rtfeldman$elm_css$Html_Styled$node('footer');
var _rtfeldman$elm_css$Html_Styled$address = _rtfeldman$elm_css$Html_Styled$node('address');
var _rtfeldman$elm_css$Html_Styled$main_ = _rtfeldman$elm_css$Html_Styled$node('main');
var _rtfeldman$elm_css$Html_Styled$p = _rtfeldman$elm_css$Html_Styled$node('p');
var _rtfeldman$elm_css$Html_Styled$hr = _rtfeldman$elm_css$Html_Styled$node('hr');
var _rtfeldman$elm_css$Html_Styled$pre = _rtfeldman$elm_css$Html_Styled$node('pre');
var _rtfeldman$elm_css$Html_Styled$blockquote = _rtfeldman$elm_css$Html_Styled$node('blockquote');
var _rtfeldman$elm_css$Html_Styled$ol = _rtfeldman$elm_css$Html_Styled$node('ol');
var _rtfeldman$elm_css$Html_Styled$ul = _rtfeldman$elm_css$Html_Styled$node('ul');
var _rtfeldman$elm_css$Html_Styled$li = _rtfeldman$elm_css$Html_Styled$node('li');
var _rtfeldman$elm_css$Html_Styled$dl = _rtfeldman$elm_css$Html_Styled$node('dl');
var _rtfeldman$elm_css$Html_Styled$dt = _rtfeldman$elm_css$Html_Styled$node('dt');
var _rtfeldman$elm_css$Html_Styled$dd = _rtfeldman$elm_css$Html_Styled$node('dd');
var _rtfeldman$elm_css$Html_Styled$figure = _rtfeldman$elm_css$Html_Styled$node('figure');
var _rtfeldman$elm_css$Html_Styled$figcaption = _rtfeldman$elm_css$Html_Styled$node('figcaption');
var _rtfeldman$elm_css$Html_Styled$div = _rtfeldman$elm_css$Html_Styled$node('div');
var _rtfeldman$elm_css$Html_Styled$a = _rtfeldman$elm_css$Html_Styled$node('a');
var _rtfeldman$elm_css$Html_Styled$em = _rtfeldman$elm_css$Html_Styled$node('em');
var _rtfeldman$elm_css$Html_Styled$strong = _rtfeldman$elm_css$Html_Styled$node('strong');
var _rtfeldman$elm_css$Html_Styled$small = _rtfeldman$elm_css$Html_Styled$node('small');
var _rtfeldman$elm_css$Html_Styled$s = _rtfeldman$elm_css$Html_Styled$node('s');
var _rtfeldman$elm_css$Html_Styled$cite = _rtfeldman$elm_css$Html_Styled$node('cite');
var _rtfeldman$elm_css$Html_Styled$q = _rtfeldman$elm_css$Html_Styled$node('q');
var _rtfeldman$elm_css$Html_Styled$dfn = _rtfeldman$elm_css$Html_Styled$node('dfn');
var _rtfeldman$elm_css$Html_Styled$abbr = _rtfeldman$elm_css$Html_Styled$node('abbr');
var _rtfeldman$elm_css$Html_Styled$time = _rtfeldman$elm_css$Html_Styled$node('time');
var _rtfeldman$elm_css$Html_Styled$code = _rtfeldman$elm_css$Html_Styled$node('code');
var _rtfeldman$elm_css$Html_Styled$var = _rtfeldman$elm_css$Html_Styled$node('var');
var _rtfeldman$elm_css$Html_Styled$samp = _rtfeldman$elm_css$Html_Styled$node('samp');
var _rtfeldman$elm_css$Html_Styled$kbd = _rtfeldman$elm_css$Html_Styled$node('kbd');
var _rtfeldman$elm_css$Html_Styled$sub = _rtfeldman$elm_css$Html_Styled$node('sub');
var _rtfeldman$elm_css$Html_Styled$sup = _rtfeldman$elm_css$Html_Styled$node('sup');
var _rtfeldman$elm_css$Html_Styled$i = _rtfeldman$elm_css$Html_Styled$node('i');
var _rtfeldman$elm_css$Html_Styled$b = _rtfeldman$elm_css$Html_Styled$node('b');
var _rtfeldman$elm_css$Html_Styled$u = _rtfeldman$elm_css$Html_Styled$node('u');
var _rtfeldman$elm_css$Html_Styled$mark = _rtfeldman$elm_css$Html_Styled$node('mark');
var _rtfeldman$elm_css$Html_Styled$ruby = _rtfeldman$elm_css$Html_Styled$node('ruby');
var _rtfeldman$elm_css$Html_Styled$rt = _rtfeldman$elm_css$Html_Styled$node('rt');
var _rtfeldman$elm_css$Html_Styled$rp = _rtfeldman$elm_css$Html_Styled$node('rp');
var _rtfeldman$elm_css$Html_Styled$bdi = _rtfeldman$elm_css$Html_Styled$node('bdi');
var _rtfeldman$elm_css$Html_Styled$bdo = _rtfeldman$elm_css$Html_Styled$node('bdo');
var _rtfeldman$elm_css$Html_Styled$span = _rtfeldman$elm_css$Html_Styled$node('span');
var _rtfeldman$elm_css$Html_Styled$br = _rtfeldman$elm_css$Html_Styled$node('br');
var _rtfeldman$elm_css$Html_Styled$wbr = _rtfeldman$elm_css$Html_Styled$node('wbr');
var _rtfeldman$elm_css$Html_Styled$ins = _rtfeldman$elm_css$Html_Styled$node('ins');
var _rtfeldman$elm_css$Html_Styled$del = _rtfeldman$elm_css$Html_Styled$node('del');
var _rtfeldman$elm_css$Html_Styled$img = _rtfeldman$elm_css$Html_Styled$node('img');
var _rtfeldman$elm_css$Html_Styled$iframe = _rtfeldman$elm_css$Html_Styled$node('iframe');
var _rtfeldman$elm_css$Html_Styled$embed = _rtfeldman$elm_css$Html_Styled$node('embed');
var _rtfeldman$elm_css$Html_Styled$object = _rtfeldman$elm_css$Html_Styled$node('object');
var _rtfeldman$elm_css$Html_Styled$param = _rtfeldman$elm_css$Html_Styled$node('param');
var _rtfeldman$elm_css$Html_Styled$video = _rtfeldman$elm_css$Html_Styled$node('video');
var _rtfeldman$elm_css$Html_Styled$audio = _rtfeldman$elm_css$Html_Styled$node('audio');
var _rtfeldman$elm_css$Html_Styled$source = _rtfeldman$elm_css$Html_Styled$node('source');
var _rtfeldman$elm_css$Html_Styled$track = _rtfeldman$elm_css$Html_Styled$node('track');
var _rtfeldman$elm_css$Html_Styled$canvas = _rtfeldman$elm_css$Html_Styled$node('canvas');
var _rtfeldman$elm_css$Html_Styled$math = _rtfeldman$elm_css$Html_Styled$node('math');
var _rtfeldman$elm_css$Html_Styled$table = _rtfeldman$elm_css$Html_Styled$node('table');
var _rtfeldman$elm_css$Html_Styled$caption = _rtfeldman$elm_css$Html_Styled$node('caption');
var _rtfeldman$elm_css$Html_Styled$colgroup = _rtfeldman$elm_css$Html_Styled$node('colgroup');
var _rtfeldman$elm_css$Html_Styled$col = _rtfeldman$elm_css$Html_Styled$node('col');
var _rtfeldman$elm_css$Html_Styled$tbody = _rtfeldman$elm_css$Html_Styled$node('tbody');
var _rtfeldman$elm_css$Html_Styled$thead = _rtfeldman$elm_css$Html_Styled$node('thead');
var _rtfeldman$elm_css$Html_Styled$tfoot = _rtfeldman$elm_css$Html_Styled$node('tfoot');
var _rtfeldman$elm_css$Html_Styled$tr = _rtfeldman$elm_css$Html_Styled$node('tr');
var _rtfeldman$elm_css$Html_Styled$td = _rtfeldman$elm_css$Html_Styled$node('td');
var _rtfeldman$elm_css$Html_Styled$th = _rtfeldman$elm_css$Html_Styled$node('th');
var _rtfeldman$elm_css$Html_Styled$form = _rtfeldman$elm_css$Html_Styled$node('form');
var _rtfeldman$elm_css$Html_Styled$fieldset = _rtfeldman$elm_css$Html_Styled$node('fieldset');
var _rtfeldman$elm_css$Html_Styled$legend = _rtfeldman$elm_css$Html_Styled$node('legend');
var _rtfeldman$elm_css$Html_Styled$label = _rtfeldman$elm_css$Html_Styled$node('label');
var _rtfeldman$elm_css$Html_Styled$input = _rtfeldman$elm_css$Html_Styled$node('input');
var _rtfeldman$elm_css$Html_Styled$button = _rtfeldman$elm_css$Html_Styled$node('button');
var _rtfeldman$elm_css$Html_Styled$select = _rtfeldman$elm_css$Html_Styled$node('select');
var _rtfeldman$elm_css$Html_Styled$datalist = _rtfeldman$elm_css$Html_Styled$node('datalist');
var _rtfeldman$elm_css$Html_Styled$optgroup = _rtfeldman$elm_css$Html_Styled$node('optgroup');
var _rtfeldman$elm_css$Html_Styled$option = _rtfeldman$elm_css$Html_Styled$node('option');
var _rtfeldman$elm_css$Html_Styled$textarea = _rtfeldman$elm_css$Html_Styled$node('textarea');
var _rtfeldman$elm_css$Html_Styled$keygen = _rtfeldman$elm_css$Html_Styled$node('keygen');
var _rtfeldman$elm_css$Html_Styled$output = _rtfeldman$elm_css$Html_Styled$node('output');
var _rtfeldman$elm_css$Html_Styled$progress = _rtfeldman$elm_css$Html_Styled$node('progress');
var _rtfeldman$elm_css$Html_Styled$meter = _rtfeldman$elm_css$Html_Styled$node('meter');
var _rtfeldman$elm_css$Html_Styled$details = _rtfeldman$elm_css$Html_Styled$node('details');
var _rtfeldman$elm_css$Html_Styled$summary = _rtfeldman$elm_css$Html_Styled$node('summary');
var _rtfeldman$elm_css$Html_Styled$menuitem = _rtfeldman$elm_css$Html_Styled$node('menuitem');
var _rtfeldman$elm_css$Html_Styled$menu = _rtfeldman$elm_css$Html_Styled$node('menu');

var _rtfeldman$elm_css$Html_Styled_Attributes$css = _rtfeldman$elm_css$Html_Styled_Internal$css;
var _rtfeldman$elm_css$Html_Styled_Attributes$map = _rtfeldman$elm_css$VirtualDom_Styled$mapProperty;
var _rtfeldman$elm_css$Html_Styled_Attributes$attribute = _rtfeldman$elm_css$VirtualDom_Styled$attribute;
var _rtfeldman$elm_css$Html_Styled_Attributes$contextmenu = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'contextmenu', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$draggable = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'draggable', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$itemprop = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'itemprop', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$tabindex = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$charset = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'charset', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$height = function (value) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$width = function (value) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$formaction = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'formAction', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$list = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'list', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$minlength = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$maxlength = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$size = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$form = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'form', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$cols = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$rows = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$challenge = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'challenge', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$media = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'media', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$rel = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'rel', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$datetime = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'datetime', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$pubdate = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'pubdate', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$colspan = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$rowspan = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$manifest = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'manifest', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$property = _rtfeldman$elm_css$VirtualDom_Styled$property;
var _rtfeldman$elm_css$Html_Styled_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_rtfeldman$elm_css$Html_Styled_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _rtfeldman$elm_css$Html_Styled_Attributes$class = function (name) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'className', name);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$id = function (name) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'id', name);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$title = function (name) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'title', name);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$accesskey = function ($char) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$dir = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'dir', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$dropzone = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'dropzone', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$lang = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'lang', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$content = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'content', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$httpEquiv = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'httpEquiv', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$language = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'language', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$src = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'src', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$alt = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'alt', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$preload = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'preload', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$poster = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'poster', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$kind = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'kind', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$srclang = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'srclang', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$sandbox = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'sandbox', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$srcdoc = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'srcdoc', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$type_ = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'type', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$value = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'value', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$defaultValue = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'defaultValue', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$placeholder = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'placeholder', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$accept = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'accept', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$acceptCharset = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'acceptCharset', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$action = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'action', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$autocomplete = function (bool) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _rtfeldman$elm_css$Html_Styled_Attributes$enctype = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'enctype', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$method = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'method', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$name = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'name', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$pattern = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'pattern', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$for = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'htmlFor', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$max = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'max', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$min = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'min', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$step = function (n) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'step', n);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$wrap = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'wrap', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$usemap = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'useMap', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$shape = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'shape', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$coords = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'coords', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$keytype = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'keytype', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$align = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'align', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$cite = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'cite', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$href = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'href', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$target = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'target', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$downloadAs = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'download', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$hreflang = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'hreflang', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$ping = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'ping', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$start = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$headers = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'headers', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$scope = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'scope', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_rtfeldman$elm_css$Html_Styled_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _rtfeldman$elm_css$Html_Styled_Attributes$hidden = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'hidden', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$contenteditable = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'contentEditable', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$spellcheck = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'spellcheck', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$async = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'async', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$defer = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'defer', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$scoped = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'scoped', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$autoplay = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'autoplay', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$controls = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'controls', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$loop = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'loop', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$default = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'default', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$seamless = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'seamless', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$checked = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'checked', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$selected = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'selected', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$autofocus = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'autofocus', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$disabled = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'disabled', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$multiple = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'multiple', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$novalidate = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'noValidate', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$readonly = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'readOnly', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$required = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'required', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$ismap = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'isMap', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$download = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'download', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$reversed = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'reversed', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$classList = function (list) {
	return _rtfeldman$elm_css$Html_Styled_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$fromUnstyled = _rtfeldman$elm_css$VirtualDom_Styled$unstyledProperty;
var _rtfeldman$elm_css$Html_Styled_Attributes$style = function (_p0) {
	return _rtfeldman$elm_css$Html_Styled_Attributes$fromUnstyled(
		_elm_lang$virtual_dom$VirtualDom$style(_p0));
};

var _rtfeldman$elm_css$Html_Styled_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _rtfeldman$elm_css$Html_Styled_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _rtfeldman$elm_css$Html_Styled_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _rtfeldman$elm_css$Html_Styled_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _rtfeldman$elm_css$Html_Styled_Events$onWithOptions = _rtfeldman$elm_css$VirtualDom_Styled$onWithOptions;
var _rtfeldman$elm_css$Html_Styled_Events$on = _rtfeldman$elm_css$VirtualDom_Styled$on;
var _rtfeldman$elm_css$Html_Styled_Events$onFocus = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onBlur = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Html_Styled_Events$defaultOptions,
	{preventDefault: true});
var _rtfeldman$elm_css$Html_Styled_Events$onSubmit = function (msg) {
	return A3(
		_rtfeldman$elm_css$Html_Styled_Events$onWithOptions,
		'submit',
		_rtfeldman$elm_css$Html_Styled_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onCheck = function (tagger) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _rtfeldman$elm_css$Html_Styled_Events$targetChecked));
};
var _rtfeldman$elm_css$Html_Styled_Events$onInput = function (tagger) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _rtfeldman$elm_css$Html_Styled_Events$targetValue));
};
var _rtfeldman$elm_css$Html_Styled_Events$onMouseOut = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onMouseOver = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onMouseLeave = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onMouseEnter = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onMouseUp = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onMouseDown = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onDoubleClick = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onClick = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _rtfeldman$elm_css$Svg_Styled_Internal$svgNamespace = A2(
	_rtfeldman$elm_css$VirtualDom_Styled$property,
	'namespace',
	_elm_lang$core$Json_Encode$string('http://www.w3.org/2000/svg'));
var _rtfeldman$elm_css$Svg_Styled_Internal$css = function (styles) {
	var classname = _rtfeldman$elm_css$VirtualDom_Styled$getClassname(styles);
	var classAttribute = A2(_elm_lang$virtual_dom$VirtualDom$attribute, 'class', classname);
	return A3(_rtfeldman$elm_css$VirtualDom_Styled$Property, classAttribute, styles, classname);
};

var _rtfeldman$elm_css$Svg_Styled$fromUnstyled = _rtfeldman$elm_css$VirtualDom_Styled$unstyledNode;
var _rtfeldman$elm_css$Svg_Styled$toUnstyled = _rtfeldman$elm_css$VirtualDom_Styled$toUnstyled;
var _rtfeldman$elm_css$Svg_Styled$styled = F4(
	function (fn, styles, attrs, children) {
		return A2(
			fn,
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Svg_Styled_Internal$css(styles),
				_1: attrs
			},
			children);
	});
var _rtfeldman$elm_css$Svg_Styled$map = _rtfeldman$elm_css$VirtualDom_Styled$map;
var _rtfeldman$elm_css$Svg_Styled$text = _rtfeldman$elm_css$VirtualDom_Styled$text;
var _rtfeldman$elm_css$Svg_Styled$node = F3(
	function (name, attrs, children) {
		return A3(
			_rtfeldman$elm_css$VirtualDom_Styled$node,
			name,
			{ctor: '::', _0: _rtfeldman$elm_css$Svg_Styled_Internal$svgNamespace, _1: attrs},
			children);
	});
var _rtfeldman$elm_css$Svg_Styled$svg = _rtfeldman$elm_css$Svg_Styled$node('svg');
var _rtfeldman$elm_css$Svg_Styled$foreignObject = _rtfeldman$elm_css$Svg_Styled$node('foreignObject');
var _rtfeldman$elm_css$Svg_Styled$animate = _rtfeldman$elm_css$Svg_Styled$node('animate');
var _rtfeldman$elm_css$Svg_Styled$animateColor = _rtfeldman$elm_css$Svg_Styled$node('animateColor');
var _rtfeldman$elm_css$Svg_Styled$animateMotion = _rtfeldman$elm_css$Svg_Styled$node('animateMotion');
var _rtfeldman$elm_css$Svg_Styled$animateTransform = _rtfeldman$elm_css$Svg_Styled$node('animateTransform');
var _rtfeldman$elm_css$Svg_Styled$mpath = _rtfeldman$elm_css$Svg_Styled$node('mpath');
var _rtfeldman$elm_css$Svg_Styled$set = _rtfeldman$elm_css$Svg_Styled$node('set');
var _rtfeldman$elm_css$Svg_Styled$a = _rtfeldman$elm_css$Svg_Styled$node('a');
var _rtfeldman$elm_css$Svg_Styled$defs = _rtfeldman$elm_css$Svg_Styled$node('defs');
var _rtfeldman$elm_css$Svg_Styled$g = _rtfeldman$elm_css$Svg_Styled$node('g');
var _rtfeldman$elm_css$Svg_Styled$marker = _rtfeldman$elm_css$Svg_Styled$node('marker');
var _rtfeldman$elm_css$Svg_Styled$mask = _rtfeldman$elm_css$Svg_Styled$node('mask');
var _rtfeldman$elm_css$Svg_Styled$pattern = _rtfeldman$elm_css$Svg_Styled$node('pattern');
var _rtfeldman$elm_css$Svg_Styled$switch = _rtfeldman$elm_css$Svg_Styled$node('switch');
var _rtfeldman$elm_css$Svg_Styled$symbol = _rtfeldman$elm_css$Svg_Styled$node('symbol');
var _rtfeldman$elm_css$Svg_Styled$desc = _rtfeldman$elm_css$Svg_Styled$node('desc');
var _rtfeldman$elm_css$Svg_Styled$metadata = _rtfeldman$elm_css$Svg_Styled$node('metadata');
var _rtfeldman$elm_css$Svg_Styled$title = _rtfeldman$elm_css$Svg_Styled$node('title');
var _rtfeldman$elm_css$Svg_Styled$feBlend = _rtfeldman$elm_css$Svg_Styled$node('feBlend');
var _rtfeldman$elm_css$Svg_Styled$feColorMatrix = _rtfeldman$elm_css$Svg_Styled$node('feColorMatrix');
var _rtfeldman$elm_css$Svg_Styled$feComponentTransfer = _rtfeldman$elm_css$Svg_Styled$node('feComponentTransfer');
var _rtfeldman$elm_css$Svg_Styled$feComposite = _rtfeldman$elm_css$Svg_Styled$node('feComposite');
var _rtfeldman$elm_css$Svg_Styled$feConvolveMatrix = _rtfeldman$elm_css$Svg_Styled$node('feConvolveMatrix');
var _rtfeldman$elm_css$Svg_Styled$feDiffuseLighting = _rtfeldman$elm_css$Svg_Styled$node('feDiffuseLighting');
var _rtfeldman$elm_css$Svg_Styled$feDisplacementMap = _rtfeldman$elm_css$Svg_Styled$node('feDisplacementMap');
var _rtfeldman$elm_css$Svg_Styled$feFlood = _rtfeldman$elm_css$Svg_Styled$node('feFlood');
var _rtfeldman$elm_css$Svg_Styled$feFuncA = _rtfeldman$elm_css$Svg_Styled$node('feFuncA');
var _rtfeldman$elm_css$Svg_Styled$feFuncB = _rtfeldman$elm_css$Svg_Styled$node('feFuncB');
var _rtfeldman$elm_css$Svg_Styled$feFuncG = _rtfeldman$elm_css$Svg_Styled$node('feFuncG');
var _rtfeldman$elm_css$Svg_Styled$feFuncR = _rtfeldman$elm_css$Svg_Styled$node('feFuncR');
var _rtfeldman$elm_css$Svg_Styled$feGaussianBlur = _rtfeldman$elm_css$Svg_Styled$node('feGaussianBlur');
var _rtfeldman$elm_css$Svg_Styled$feImage = _rtfeldman$elm_css$Svg_Styled$node('feImage');
var _rtfeldman$elm_css$Svg_Styled$feMerge = _rtfeldman$elm_css$Svg_Styled$node('feMerge');
var _rtfeldman$elm_css$Svg_Styled$feMergeNode = _rtfeldman$elm_css$Svg_Styled$node('feMergeNode');
var _rtfeldman$elm_css$Svg_Styled$feMorphology = _rtfeldman$elm_css$Svg_Styled$node('feMorphology');
var _rtfeldman$elm_css$Svg_Styled$feOffset = _rtfeldman$elm_css$Svg_Styled$node('feOffset');
var _rtfeldman$elm_css$Svg_Styled$feSpecularLighting = _rtfeldman$elm_css$Svg_Styled$node('feSpecularLighting');
var _rtfeldman$elm_css$Svg_Styled$feTile = _rtfeldman$elm_css$Svg_Styled$node('feTile');
var _rtfeldman$elm_css$Svg_Styled$feTurbulence = _rtfeldman$elm_css$Svg_Styled$node('feTurbulence');
var _rtfeldman$elm_css$Svg_Styled$font = _rtfeldman$elm_css$Svg_Styled$node('font');
var _rtfeldman$elm_css$Svg_Styled$linearGradient = _rtfeldman$elm_css$Svg_Styled$node('linearGradient');
var _rtfeldman$elm_css$Svg_Styled$radialGradient = _rtfeldman$elm_css$Svg_Styled$node('radialGradient');
var _rtfeldman$elm_css$Svg_Styled$stop = _rtfeldman$elm_css$Svg_Styled$node('stop');
var _rtfeldman$elm_css$Svg_Styled$circle = _rtfeldman$elm_css$Svg_Styled$node('circle');
var _rtfeldman$elm_css$Svg_Styled$ellipse = _rtfeldman$elm_css$Svg_Styled$node('ellipse');
var _rtfeldman$elm_css$Svg_Styled$image = _rtfeldman$elm_css$Svg_Styled$node('image');
var _rtfeldman$elm_css$Svg_Styled$line = _rtfeldman$elm_css$Svg_Styled$node('line');
var _rtfeldman$elm_css$Svg_Styled$path = _rtfeldman$elm_css$Svg_Styled$node('path');
var _rtfeldman$elm_css$Svg_Styled$polygon = _rtfeldman$elm_css$Svg_Styled$node('polygon');
var _rtfeldman$elm_css$Svg_Styled$polyline = _rtfeldman$elm_css$Svg_Styled$node('polyline');
var _rtfeldman$elm_css$Svg_Styled$rect = _rtfeldman$elm_css$Svg_Styled$node('rect');
var _rtfeldman$elm_css$Svg_Styled$use = _rtfeldman$elm_css$Svg_Styled$node('use');
var _rtfeldman$elm_css$Svg_Styled$feDistantLight = _rtfeldman$elm_css$Svg_Styled$node('feDistantLight');
var _rtfeldman$elm_css$Svg_Styled$fePointLight = _rtfeldman$elm_css$Svg_Styled$node('fePointLight');
var _rtfeldman$elm_css$Svg_Styled$feSpotLight = _rtfeldman$elm_css$Svg_Styled$node('feSpotLight');
var _rtfeldman$elm_css$Svg_Styled$altGlyph = _rtfeldman$elm_css$Svg_Styled$node('altGlyph');
var _rtfeldman$elm_css$Svg_Styled$altGlyphDef = _rtfeldman$elm_css$Svg_Styled$node('altGlyphDef');
var _rtfeldman$elm_css$Svg_Styled$altGlyphItem = _rtfeldman$elm_css$Svg_Styled$node('altGlyphItem');
var _rtfeldman$elm_css$Svg_Styled$glyph = _rtfeldman$elm_css$Svg_Styled$node('glyph');
var _rtfeldman$elm_css$Svg_Styled$glyphRef = _rtfeldman$elm_css$Svg_Styled$node('glyphRef');
var _rtfeldman$elm_css$Svg_Styled$textPath = _rtfeldman$elm_css$Svg_Styled$node('textPath');
var _rtfeldman$elm_css$Svg_Styled$text_ = _rtfeldman$elm_css$Svg_Styled$node('text');
var _rtfeldman$elm_css$Svg_Styled$tref = _rtfeldman$elm_css$Svg_Styled$node('tref');
var _rtfeldman$elm_css$Svg_Styled$tspan = _rtfeldman$elm_css$Svg_Styled$node('tspan');
var _rtfeldman$elm_css$Svg_Styled$clipPath = _rtfeldman$elm_css$Svg_Styled$node('clipPath');
var _rtfeldman$elm_css$Svg_Styled$colorProfile = _rtfeldman$elm_css$Svg_Styled$node('colorProfile');
var _rtfeldman$elm_css$Svg_Styled$cursor = _rtfeldman$elm_css$Svg_Styled$node('cursor');
var _rtfeldman$elm_css$Svg_Styled$filter = _rtfeldman$elm_css$Svg_Styled$node('filter');
var _rtfeldman$elm_css$Svg_Styled$script = _rtfeldman$elm_css$Svg_Styled$node('script');
var _rtfeldman$elm_css$Svg_Styled$style = _rtfeldman$elm_css$Svg_Styled$node('style');
var _rtfeldman$elm_css$Svg_Styled$view = _rtfeldman$elm_css$Svg_Styled$node('view');

var _rtfeldman$elm_css$Svg_Styled_Attributes$writingMode = _rtfeldman$elm_css$VirtualDom_Styled$attribute('writing-mode');
var _rtfeldman$elm_css$Svg_Styled_Attributes$wordSpacing = _rtfeldman$elm_css$VirtualDom_Styled$attribute('word-spacing');
var _rtfeldman$elm_css$Svg_Styled_Attributes$visibility = _rtfeldman$elm_css$VirtualDom_Styled$attribute('visibility');
var _rtfeldman$elm_css$Svg_Styled_Attributes$unicodeBidi = _rtfeldman$elm_css$VirtualDom_Styled$attribute('unicode-bidi');
var _rtfeldman$elm_css$Svg_Styled_Attributes$textRendering = _rtfeldman$elm_css$VirtualDom_Styled$attribute('text-rendering');
var _rtfeldman$elm_css$Svg_Styled_Attributes$textDecoration = _rtfeldman$elm_css$VirtualDom_Styled$attribute('text-decoration');
var _rtfeldman$elm_css$Svg_Styled_Attributes$textAnchor = _rtfeldman$elm_css$VirtualDom_Styled$attribute('text-anchor');
var _rtfeldman$elm_css$Svg_Styled_Attributes$stroke = _rtfeldman$elm_css$VirtualDom_Styled$attribute('stroke');
var _rtfeldman$elm_css$Svg_Styled_Attributes$strokeWidth = _rtfeldman$elm_css$VirtualDom_Styled$attribute('stroke-width');
var _rtfeldman$elm_css$Svg_Styled_Attributes$strokeOpacity = _rtfeldman$elm_css$VirtualDom_Styled$attribute('stroke-opacity');
var _rtfeldman$elm_css$Svg_Styled_Attributes$strokeMiterlimit = _rtfeldman$elm_css$VirtualDom_Styled$attribute('stroke-miterlimit');
var _rtfeldman$elm_css$Svg_Styled_Attributes$strokeLinejoin = _rtfeldman$elm_css$VirtualDom_Styled$attribute('stroke-linejoin');
var _rtfeldman$elm_css$Svg_Styled_Attributes$strokeLinecap = _rtfeldman$elm_css$VirtualDom_Styled$attribute('stroke-linecap');
var _rtfeldman$elm_css$Svg_Styled_Attributes$strokeDashoffset = _rtfeldman$elm_css$VirtualDom_Styled$attribute('stroke-dashoffset');
var _rtfeldman$elm_css$Svg_Styled_Attributes$strokeDasharray = _rtfeldman$elm_css$VirtualDom_Styled$attribute('stroke-dasharray');
var _rtfeldman$elm_css$Svg_Styled_Attributes$stopOpacity = _rtfeldman$elm_css$VirtualDom_Styled$attribute('stop-opacity');
var _rtfeldman$elm_css$Svg_Styled_Attributes$stopColor = _rtfeldman$elm_css$VirtualDom_Styled$attribute('stop-color');
var _rtfeldman$elm_css$Svg_Styled_Attributes$shapeRendering = _rtfeldman$elm_css$VirtualDom_Styled$attribute('shape-rendering');
var _rtfeldman$elm_css$Svg_Styled_Attributes$pointerEvents = _rtfeldman$elm_css$VirtualDom_Styled$attribute('pointer-events');
var _rtfeldman$elm_css$Svg_Styled_Attributes$overflow = _rtfeldman$elm_css$VirtualDom_Styled$attribute('overflow');
var _rtfeldman$elm_css$Svg_Styled_Attributes$opacity = _rtfeldman$elm_css$VirtualDom_Styled$attribute('opacity');
var _rtfeldman$elm_css$Svg_Styled_Attributes$mask = _rtfeldman$elm_css$VirtualDom_Styled$attribute('mask');
var _rtfeldman$elm_css$Svg_Styled_Attributes$markerStart = _rtfeldman$elm_css$VirtualDom_Styled$attribute('marker-start');
var _rtfeldman$elm_css$Svg_Styled_Attributes$markerMid = _rtfeldman$elm_css$VirtualDom_Styled$attribute('marker-mid');
var _rtfeldman$elm_css$Svg_Styled_Attributes$markerEnd = _rtfeldman$elm_css$VirtualDom_Styled$attribute('marker-end');
var _rtfeldman$elm_css$Svg_Styled_Attributes$lightingColor = _rtfeldman$elm_css$VirtualDom_Styled$attribute('lighting-color');
var _rtfeldman$elm_css$Svg_Styled_Attributes$letterSpacing = _rtfeldman$elm_css$VirtualDom_Styled$attribute('letter-spacing');
var _rtfeldman$elm_css$Svg_Styled_Attributes$kerning = _rtfeldman$elm_css$VirtualDom_Styled$attribute('kerning');
var _rtfeldman$elm_css$Svg_Styled_Attributes$imageRendering = _rtfeldman$elm_css$VirtualDom_Styled$attribute('image-rendering');
var _rtfeldman$elm_css$Svg_Styled_Attributes$glyphOrientationVertical = _rtfeldman$elm_css$VirtualDom_Styled$attribute('glyph-orientation-vertical');
var _rtfeldman$elm_css$Svg_Styled_Attributes$glyphOrientationHorizontal = _rtfeldman$elm_css$VirtualDom_Styled$attribute('glyph-orientation-horizontal');
var _rtfeldman$elm_css$Svg_Styled_Attributes$fontWeight = _rtfeldman$elm_css$VirtualDom_Styled$attribute('font-weight');
var _rtfeldman$elm_css$Svg_Styled_Attributes$fontVariant = _rtfeldman$elm_css$VirtualDom_Styled$attribute('font-variant');
var _rtfeldman$elm_css$Svg_Styled_Attributes$fontStyle = _rtfeldman$elm_css$VirtualDom_Styled$attribute('font-style');
var _rtfeldman$elm_css$Svg_Styled_Attributes$fontStretch = _rtfeldman$elm_css$VirtualDom_Styled$attribute('font-stretch');
var _rtfeldman$elm_css$Svg_Styled_Attributes$fontSize = _rtfeldman$elm_css$VirtualDom_Styled$attribute('font-size');
var _rtfeldman$elm_css$Svg_Styled_Attributes$fontSizeAdjust = _rtfeldman$elm_css$VirtualDom_Styled$attribute('font-size-adjust');
var _rtfeldman$elm_css$Svg_Styled_Attributes$fontFamily = _rtfeldman$elm_css$VirtualDom_Styled$attribute('font-family');
var _rtfeldman$elm_css$Svg_Styled_Attributes$floodOpacity = _rtfeldman$elm_css$VirtualDom_Styled$attribute('flood-opacity');
var _rtfeldman$elm_css$Svg_Styled_Attributes$floodColor = _rtfeldman$elm_css$VirtualDom_Styled$attribute('flood-color');
var _rtfeldman$elm_css$Svg_Styled_Attributes$filter = _rtfeldman$elm_css$VirtualDom_Styled$attribute('filter');
var _rtfeldman$elm_css$Svg_Styled_Attributes$fill = _rtfeldman$elm_css$VirtualDom_Styled$attribute('fill');
var _rtfeldman$elm_css$Svg_Styled_Attributes$fillRule = _rtfeldman$elm_css$VirtualDom_Styled$attribute('fill-rule');
var _rtfeldman$elm_css$Svg_Styled_Attributes$fillOpacity = _rtfeldman$elm_css$VirtualDom_Styled$attribute('fill-opacity');
var _rtfeldman$elm_css$Svg_Styled_Attributes$enableBackground = _rtfeldman$elm_css$VirtualDom_Styled$attribute('enable-background');
var _rtfeldman$elm_css$Svg_Styled_Attributes$dominantBaseline = _rtfeldman$elm_css$VirtualDom_Styled$attribute('dominant-baseline');
var _rtfeldman$elm_css$Svg_Styled_Attributes$display = _rtfeldman$elm_css$VirtualDom_Styled$attribute('display');
var _rtfeldman$elm_css$Svg_Styled_Attributes$direction = _rtfeldman$elm_css$VirtualDom_Styled$attribute('direction');
var _rtfeldman$elm_css$Svg_Styled_Attributes$cursor = _rtfeldman$elm_css$VirtualDom_Styled$attribute('cursor');
var _rtfeldman$elm_css$Svg_Styled_Attributes$color = _rtfeldman$elm_css$VirtualDom_Styled$attribute('color');
var _rtfeldman$elm_css$Svg_Styled_Attributes$colorRendering = _rtfeldman$elm_css$VirtualDom_Styled$attribute('color-rendering');
var _rtfeldman$elm_css$Svg_Styled_Attributes$colorProfile = _rtfeldman$elm_css$VirtualDom_Styled$attribute('color-profile');
var _rtfeldman$elm_css$Svg_Styled_Attributes$colorInterpolation = _rtfeldman$elm_css$VirtualDom_Styled$attribute('color-interpolation');
var _rtfeldman$elm_css$Svg_Styled_Attributes$colorInterpolationFilters = _rtfeldman$elm_css$VirtualDom_Styled$attribute('color-interpolation-filters');
var _rtfeldman$elm_css$Svg_Styled_Attributes$clip = _rtfeldman$elm_css$VirtualDom_Styled$attribute('clip');
var _rtfeldman$elm_css$Svg_Styled_Attributes$clipRule = _rtfeldman$elm_css$VirtualDom_Styled$attribute('clip-rule');
var _rtfeldman$elm_css$Svg_Styled_Attributes$clipPath = _rtfeldman$elm_css$VirtualDom_Styled$attribute('clip-path');
var _rtfeldman$elm_css$Svg_Styled_Attributes$baselineShift = _rtfeldman$elm_css$VirtualDom_Styled$attribute('baseline-shift');
var _rtfeldman$elm_css$Svg_Styled_Attributes$alignmentBaseline = _rtfeldman$elm_css$VirtualDom_Styled$attribute('alignment-baseline');
var _rtfeldman$elm_css$Svg_Styled_Attributes$zoomAndPan = _rtfeldman$elm_css$VirtualDom_Styled$attribute('zoomAndPan');
var _rtfeldman$elm_css$Svg_Styled_Attributes$z = _rtfeldman$elm_css$VirtualDom_Styled$attribute('z');
var _rtfeldman$elm_css$Svg_Styled_Attributes$yChannelSelector = _rtfeldman$elm_css$VirtualDom_Styled$attribute('yChannelSelector');
var _rtfeldman$elm_css$Svg_Styled_Attributes$y2 = _rtfeldman$elm_css$VirtualDom_Styled$attribute('y2');
var _rtfeldman$elm_css$Svg_Styled_Attributes$y1 = _rtfeldman$elm_css$VirtualDom_Styled$attribute('y1');
var _rtfeldman$elm_css$Svg_Styled_Attributes$y = _rtfeldman$elm_css$VirtualDom_Styled$attribute('y');
var _rtfeldman$elm_css$Svg_Styled_Attributes$xmlSpace = A2(_rtfeldman$elm_css$VirtualDom_Styled$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:space');
var _rtfeldman$elm_css$Svg_Styled_Attributes$xmlLang = A2(_rtfeldman$elm_css$VirtualDom_Styled$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:lang');
var _rtfeldman$elm_css$Svg_Styled_Attributes$xmlBase = A2(_rtfeldman$elm_css$VirtualDom_Styled$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:base');
var _rtfeldman$elm_css$Svg_Styled_Attributes$xlinkType = A2(_rtfeldman$elm_css$VirtualDom_Styled$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:type');
var _rtfeldman$elm_css$Svg_Styled_Attributes$xlinkTitle = A2(_rtfeldman$elm_css$VirtualDom_Styled$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:title');
var _rtfeldman$elm_css$Svg_Styled_Attributes$xlinkShow = A2(_rtfeldman$elm_css$VirtualDom_Styled$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:show');
var _rtfeldman$elm_css$Svg_Styled_Attributes$xlinkRole = A2(_rtfeldman$elm_css$VirtualDom_Styled$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:role');
var _rtfeldman$elm_css$Svg_Styled_Attributes$xlinkHref = A2(_rtfeldman$elm_css$VirtualDom_Styled$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:href');
var _rtfeldman$elm_css$Svg_Styled_Attributes$xlinkArcrole = A2(_rtfeldman$elm_css$VirtualDom_Styled$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:arcrole');
var _rtfeldman$elm_css$Svg_Styled_Attributes$xlinkActuate = A2(_rtfeldman$elm_css$VirtualDom_Styled$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:actuate');
var _rtfeldman$elm_css$Svg_Styled_Attributes$xChannelSelector = _rtfeldman$elm_css$VirtualDom_Styled$attribute('xChannelSelector');
var _rtfeldman$elm_css$Svg_Styled_Attributes$x2 = _rtfeldman$elm_css$VirtualDom_Styled$attribute('x2');
var _rtfeldman$elm_css$Svg_Styled_Attributes$x1 = _rtfeldman$elm_css$VirtualDom_Styled$attribute('x1');
var _rtfeldman$elm_css$Svg_Styled_Attributes$xHeight = _rtfeldman$elm_css$VirtualDom_Styled$attribute('x-height');
var _rtfeldman$elm_css$Svg_Styled_Attributes$x = _rtfeldman$elm_css$VirtualDom_Styled$attribute('x');
var _rtfeldman$elm_css$Svg_Styled_Attributes$widths = _rtfeldman$elm_css$VirtualDom_Styled$attribute('widths');
var _rtfeldman$elm_css$Svg_Styled_Attributes$width = _rtfeldman$elm_css$VirtualDom_Styled$attribute('width');
var _rtfeldman$elm_css$Svg_Styled_Attributes$viewTarget = _rtfeldman$elm_css$VirtualDom_Styled$attribute('viewTarget');
var _rtfeldman$elm_css$Svg_Styled_Attributes$viewBox = _rtfeldman$elm_css$VirtualDom_Styled$attribute('viewBox');
var _rtfeldman$elm_css$Svg_Styled_Attributes$vertOriginY = _rtfeldman$elm_css$VirtualDom_Styled$attribute('vert-origin-y');
var _rtfeldman$elm_css$Svg_Styled_Attributes$vertOriginX = _rtfeldman$elm_css$VirtualDom_Styled$attribute('vert-origin-x');
var _rtfeldman$elm_css$Svg_Styled_Attributes$vertAdvY = _rtfeldman$elm_css$VirtualDom_Styled$attribute('vert-adv-y');
var _rtfeldman$elm_css$Svg_Styled_Attributes$version = _rtfeldman$elm_css$VirtualDom_Styled$attribute('version');
var _rtfeldman$elm_css$Svg_Styled_Attributes$values = _rtfeldman$elm_css$VirtualDom_Styled$attribute('values');
var _rtfeldman$elm_css$Svg_Styled_Attributes$vMathematical = _rtfeldman$elm_css$VirtualDom_Styled$attribute('v-mathematical');
var _rtfeldman$elm_css$Svg_Styled_Attributes$vIdeographic = _rtfeldman$elm_css$VirtualDom_Styled$attribute('v-ideographic');
var _rtfeldman$elm_css$Svg_Styled_Attributes$vHanging = _rtfeldman$elm_css$VirtualDom_Styled$attribute('v-hanging');
var _rtfeldman$elm_css$Svg_Styled_Attributes$vAlphabetic = _rtfeldman$elm_css$VirtualDom_Styled$attribute('v-alphabetic');
var _rtfeldman$elm_css$Svg_Styled_Attributes$unitsPerEm = _rtfeldman$elm_css$VirtualDom_Styled$attribute('units-per-em');
var _rtfeldman$elm_css$Svg_Styled_Attributes$unicodeRange = _rtfeldman$elm_css$VirtualDom_Styled$attribute('unicode-range');
var _rtfeldman$elm_css$Svg_Styled_Attributes$unicode = _rtfeldman$elm_css$VirtualDom_Styled$attribute('unicode');
var _rtfeldman$elm_css$Svg_Styled_Attributes$underlineThickness = _rtfeldman$elm_css$VirtualDom_Styled$attribute('underline-thickness');
var _rtfeldman$elm_css$Svg_Styled_Attributes$underlinePosition = _rtfeldman$elm_css$VirtualDom_Styled$attribute('underline-position');
var _rtfeldman$elm_css$Svg_Styled_Attributes$u2 = _rtfeldman$elm_css$VirtualDom_Styled$attribute('u2');
var _rtfeldman$elm_css$Svg_Styled_Attributes$u1 = _rtfeldman$elm_css$VirtualDom_Styled$attribute('u1');
var _rtfeldman$elm_css$Svg_Styled_Attributes$type_ = _rtfeldman$elm_css$VirtualDom_Styled$attribute('type');
var _rtfeldman$elm_css$Svg_Styled_Attributes$transform = _rtfeldman$elm_css$VirtualDom_Styled$attribute('transform');
var _rtfeldman$elm_css$Svg_Styled_Attributes$to = _rtfeldman$elm_css$VirtualDom_Styled$attribute('to');
var _rtfeldman$elm_css$Svg_Styled_Attributes$title = _rtfeldman$elm_css$VirtualDom_Styled$attribute('title');
var _rtfeldman$elm_css$Svg_Styled_Attributes$textLength = _rtfeldman$elm_css$VirtualDom_Styled$attribute('textLength');
var _rtfeldman$elm_css$Svg_Styled_Attributes$targetY = _rtfeldman$elm_css$VirtualDom_Styled$attribute('targetY');
var _rtfeldman$elm_css$Svg_Styled_Attributes$targetX = _rtfeldman$elm_css$VirtualDom_Styled$attribute('targetX');
var _rtfeldman$elm_css$Svg_Styled_Attributes$target = _rtfeldman$elm_css$VirtualDom_Styled$attribute('target');
var _rtfeldman$elm_css$Svg_Styled_Attributes$tableValues = _rtfeldman$elm_css$VirtualDom_Styled$attribute('tableValues');
var _rtfeldman$elm_css$Svg_Styled_Attributes$systemLanguage = _rtfeldman$elm_css$VirtualDom_Styled$attribute('systemLanguage');
var _rtfeldman$elm_css$Svg_Styled_Attributes$surfaceScale = _rtfeldman$elm_css$VirtualDom_Styled$attribute('surfaceScale');
var _rtfeldman$elm_css$Svg_Styled_Attributes$style = _rtfeldman$elm_css$VirtualDom_Styled$attribute('style');
var _rtfeldman$elm_css$Svg_Styled_Attributes$string = _rtfeldman$elm_css$VirtualDom_Styled$attribute('string');
var _rtfeldman$elm_css$Svg_Styled_Attributes$strikethroughThickness = _rtfeldman$elm_css$VirtualDom_Styled$attribute('strikethrough-thickness');
var _rtfeldman$elm_css$Svg_Styled_Attributes$strikethroughPosition = _rtfeldman$elm_css$VirtualDom_Styled$attribute('strikethrough-position');
var _rtfeldman$elm_css$Svg_Styled_Attributes$stitchTiles = _rtfeldman$elm_css$VirtualDom_Styled$attribute('stitchTiles');
var _rtfeldman$elm_css$Svg_Styled_Attributes$stemv = _rtfeldman$elm_css$VirtualDom_Styled$attribute('stemv');
var _rtfeldman$elm_css$Svg_Styled_Attributes$stemh = _rtfeldman$elm_css$VirtualDom_Styled$attribute('stemh');
var _rtfeldman$elm_css$Svg_Styled_Attributes$stdDeviation = _rtfeldman$elm_css$VirtualDom_Styled$attribute('stdDeviation');
var _rtfeldman$elm_css$Svg_Styled_Attributes$startOffset = _rtfeldman$elm_css$VirtualDom_Styled$attribute('startOffset');
var _rtfeldman$elm_css$Svg_Styled_Attributes$spreadMethod = _rtfeldman$elm_css$VirtualDom_Styled$attribute('spreadMethod');
var _rtfeldman$elm_css$Svg_Styled_Attributes$speed = _rtfeldman$elm_css$VirtualDom_Styled$attribute('speed');
var _rtfeldman$elm_css$Svg_Styled_Attributes$specularExponent = _rtfeldman$elm_css$VirtualDom_Styled$attribute('specularExponent');
var _rtfeldman$elm_css$Svg_Styled_Attributes$specularConstant = _rtfeldman$elm_css$VirtualDom_Styled$attribute('specularConstant');
var _rtfeldman$elm_css$Svg_Styled_Attributes$spacing = _rtfeldman$elm_css$VirtualDom_Styled$attribute('spacing');
var _rtfeldman$elm_css$Svg_Styled_Attributes$slope = _rtfeldman$elm_css$VirtualDom_Styled$attribute('slope');
var _rtfeldman$elm_css$Svg_Styled_Attributes$seed = _rtfeldman$elm_css$VirtualDom_Styled$attribute('seed');
var _rtfeldman$elm_css$Svg_Styled_Attributes$scale = _rtfeldman$elm_css$VirtualDom_Styled$attribute('scale');
var _rtfeldman$elm_css$Svg_Styled_Attributes$ry = _rtfeldman$elm_css$VirtualDom_Styled$attribute('ry');
var _rtfeldman$elm_css$Svg_Styled_Attributes$rx = _rtfeldman$elm_css$VirtualDom_Styled$attribute('rx');
var _rtfeldman$elm_css$Svg_Styled_Attributes$rotate = _rtfeldman$elm_css$VirtualDom_Styled$attribute('rotate');
var _rtfeldman$elm_css$Svg_Styled_Attributes$result = _rtfeldman$elm_css$VirtualDom_Styled$attribute('result');
var _rtfeldman$elm_css$Svg_Styled_Attributes$restart = _rtfeldman$elm_css$VirtualDom_Styled$attribute('restart');
var _rtfeldman$elm_css$Svg_Styled_Attributes$requiredFeatures = _rtfeldman$elm_css$VirtualDom_Styled$attribute('requiredFeatures');
var _rtfeldman$elm_css$Svg_Styled_Attributes$requiredExtensions = _rtfeldman$elm_css$VirtualDom_Styled$attribute('requiredExtensions');
var _rtfeldman$elm_css$Svg_Styled_Attributes$repeatDur = _rtfeldman$elm_css$VirtualDom_Styled$attribute('repeatDur');
var _rtfeldman$elm_css$Svg_Styled_Attributes$repeatCount = _rtfeldman$elm_css$VirtualDom_Styled$attribute('repeatCount');
var _rtfeldman$elm_css$Svg_Styled_Attributes$renderingIntent = _rtfeldman$elm_css$VirtualDom_Styled$attribute('rendering-intent');
var _rtfeldman$elm_css$Svg_Styled_Attributes$refY = _rtfeldman$elm_css$VirtualDom_Styled$attribute('refY');
var _rtfeldman$elm_css$Svg_Styled_Attributes$refX = _rtfeldman$elm_css$VirtualDom_Styled$attribute('refX');
var _rtfeldman$elm_css$Svg_Styled_Attributes$radius = _rtfeldman$elm_css$VirtualDom_Styled$attribute('radius');
var _rtfeldman$elm_css$Svg_Styled_Attributes$r = _rtfeldman$elm_css$VirtualDom_Styled$attribute('r');
var _rtfeldman$elm_css$Svg_Styled_Attributes$primitiveUnits = _rtfeldman$elm_css$VirtualDom_Styled$attribute('primitiveUnits');
var _rtfeldman$elm_css$Svg_Styled_Attributes$preserveAspectRatio = _rtfeldman$elm_css$VirtualDom_Styled$attribute('preserveAspectRatio');
var _rtfeldman$elm_css$Svg_Styled_Attributes$preserveAlpha = _rtfeldman$elm_css$VirtualDom_Styled$attribute('preserveAlpha');
var _rtfeldman$elm_css$Svg_Styled_Attributes$pointsAtZ = _rtfeldman$elm_css$VirtualDom_Styled$attribute('pointsAtZ');
var _rtfeldman$elm_css$Svg_Styled_Attributes$pointsAtY = _rtfeldman$elm_css$VirtualDom_Styled$attribute('pointsAtY');
var _rtfeldman$elm_css$Svg_Styled_Attributes$pointsAtX = _rtfeldman$elm_css$VirtualDom_Styled$attribute('pointsAtX');
var _rtfeldman$elm_css$Svg_Styled_Attributes$points = _rtfeldman$elm_css$VirtualDom_Styled$attribute('points');
var _rtfeldman$elm_css$Svg_Styled_Attributes$pointOrder = _rtfeldman$elm_css$VirtualDom_Styled$attribute('point-order');
var _rtfeldman$elm_css$Svg_Styled_Attributes$patternUnits = _rtfeldman$elm_css$VirtualDom_Styled$attribute('patternUnits');
var _rtfeldman$elm_css$Svg_Styled_Attributes$patternTransform = _rtfeldman$elm_css$VirtualDom_Styled$attribute('patternTransform');
var _rtfeldman$elm_css$Svg_Styled_Attributes$patternContentUnits = _rtfeldman$elm_css$VirtualDom_Styled$attribute('patternContentUnits');
var _rtfeldman$elm_css$Svg_Styled_Attributes$pathLength = _rtfeldman$elm_css$VirtualDom_Styled$attribute('pathLength');
var _rtfeldman$elm_css$Svg_Styled_Attributes$path = _rtfeldman$elm_css$VirtualDom_Styled$attribute('path');
var _rtfeldman$elm_css$Svg_Styled_Attributes$panose1 = _rtfeldman$elm_css$VirtualDom_Styled$attribute('panose-1');
var _rtfeldman$elm_css$Svg_Styled_Attributes$overlineThickness = _rtfeldman$elm_css$VirtualDom_Styled$attribute('overline-thickness');
var _rtfeldman$elm_css$Svg_Styled_Attributes$overlinePosition = _rtfeldman$elm_css$VirtualDom_Styled$attribute('overline-position');
var _rtfeldman$elm_css$Svg_Styled_Attributes$origin = _rtfeldman$elm_css$VirtualDom_Styled$attribute('origin');
var _rtfeldman$elm_css$Svg_Styled_Attributes$orientation = _rtfeldman$elm_css$VirtualDom_Styled$attribute('orientation');
var _rtfeldman$elm_css$Svg_Styled_Attributes$orient = _rtfeldman$elm_css$VirtualDom_Styled$attribute('orient');
var _rtfeldman$elm_css$Svg_Styled_Attributes$order = _rtfeldman$elm_css$VirtualDom_Styled$attribute('order');
var _rtfeldman$elm_css$Svg_Styled_Attributes$operator = _rtfeldman$elm_css$VirtualDom_Styled$attribute('operator');
var _rtfeldman$elm_css$Svg_Styled_Attributes$offset = _rtfeldman$elm_css$VirtualDom_Styled$attribute('offset');
var _rtfeldman$elm_css$Svg_Styled_Attributes$numOctaves = _rtfeldman$elm_css$VirtualDom_Styled$attribute('numOctaves');
var _rtfeldman$elm_css$Svg_Styled_Attributes$name = _rtfeldman$elm_css$VirtualDom_Styled$attribute('name');
var _rtfeldman$elm_css$Svg_Styled_Attributes$mode = _rtfeldman$elm_css$VirtualDom_Styled$attribute('mode');
var _rtfeldman$elm_css$Svg_Styled_Attributes$min = _rtfeldman$elm_css$VirtualDom_Styled$attribute('min');
var _rtfeldman$elm_css$Svg_Styled_Attributes$method = _rtfeldman$elm_css$VirtualDom_Styled$attribute('method');
var _rtfeldman$elm_css$Svg_Styled_Attributes$media = _rtfeldman$elm_css$VirtualDom_Styled$attribute('media');
var _rtfeldman$elm_css$Svg_Styled_Attributes$max = _rtfeldman$elm_css$VirtualDom_Styled$attribute('max');
var _rtfeldman$elm_css$Svg_Styled_Attributes$mathematical = _rtfeldman$elm_css$VirtualDom_Styled$attribute('mathematical');
var _rtfeldman$elm_css$Svg_Styled_Attributes$maskUnits = _rtfeldman$elm_css$VirtualDom_Styled$attribute('maskUnits');
var _rtfeldman$elm_css$Svg_Styled_Attributes$maskContentUnits = _rtfeldman$elm_css$VirtualDom_Styled$attribute('maskContentUnits');
var _rtfeldman$elm_css$Svg_Styled_Attributes$markerWidth = _rtfeldman$elm_css$VirtualDom_Styled$attribute('markerWidth');
var _rtfeldman$elm_css$Svg_Styled_Attributes$markerUnits = _rtfeldman$elm_css$VirtualDom_Styled$attribute('markerUnits');
var _rtfeldman$elm_css$Svg_Styled_Attributes$markerHeight = _rtfeldman$elm_css$VirtualDom_Styled$attribute('markerHeight');
var _rtfeldman$elm_css$Svg_Styled_Attributes$local = _rtfeldman$elm_css$VirtualDom_Styled$attribute('local');
var _rtfeldman$elm_css$Svg_Styled_Attributes$limitingConeAngle = _rtfeldman$elm_css$VirtualDom_Styled$attribute('limitingConeAngle');
var _rtfeldman$elm_css$Svg_Styled_Attributes$lengthAdjust = _rtfeldman$elm_css$VirtualDom_Styled$attribute('lengthAdjust');
var _rtfeldman$elm_css$Svg_Styled_Attributes$lang = _rtfeldman$elm_css$VirtualDom_Styled$attribute('lang');
var _rtfeldman$elm_css$Svg_Styled_Attributes$keyTimes = _rtfeldman$elm_css$VirtualDom_Styled$attribute('keyTimes');
var _rtfeldman$elm_css$Svg_Styled_Attributes$keySplines = _rtfeldman$elm_css$VirtualDom_Styled$attribute('keySplines');
var _rtfeldman$elm_css$Svg_Styled_Attributes$keyPoints = _rtfeldman$elm_css$VirtualDom_Styled$attribute('keyPoints');
var _rtfeldman$elm_css$Svg_Styled_Attributes$kernelUnitLength = _rtfeldman$elm_css$VirtualDom_Styled$attribute('kernelUnitLength');
var _rtfeldman$elm_css$Svg_Styled_Attributes$kernelMatrix = _rtfeldman$elm_css$VirtualDom_Styled$attribute('kernelMatrix');
var _rtfeldman$elm_css$Svg_Styled_Attributes$k4 = _rtfeldman$elm_css$VirtualDom_Styled$attribute('k4');
var _rtfeldman$elm_css$Svg_Styled_Attributes$k3 = _rtfeldman$elm_css$VirtualDom_Styled$attribute('k3');
var _rtfeldman$elm_css$Svg_Styled_Attributes$k2 = _rtfeldman$elm_css$VirtualDom_Styled$attribute('k2');
var _rtfeldman$elm_css$Svg_Styled_Attributes$k1 = _rtfeldman$elm_css$VirtualDom_Styled$attribute('k1');
var _rtfeldman$elm_css$Svg_Styled_Attributes$k = _rtfeldman$elm_css$VirtualDom_Styled$attribute('k');
var _rtfeldman$elm_css$Svg_Styled_Attributes$intercept = _rtfeldman$elm_css$VirtualDom_Styled$attribute('intercept');
var _rtfeldman$elm_css$Svg_Styled_Attributes$in2 = _rtfeldman$elm_css$VirtualDom_Styled$attribute('in2');
var _rtfeldman$elm_css$Svg_Styled_Attributes$in_ = _rtfeldman$elm_css$VirtualDom_Styled$attribute('in');
var _rtfeldman$elm_css$Svg_Styled_Attributes$ideographic = _rtfeldman$elm_css$VirtualDom_Styled$attribute('ideographic');
var _rtfeldman$elm_css$Svg_Styled_Attributes$id = _rtfeldman$elm_css$VirtualDom_Styled$attribute('id');
var _rtfeldman$elm_css$Svg_Styled_Attributes$horizOriginY = _rtfeldman$elm_css$VirtualDom_Styled$attribute('horiz-origin-y');
var _rtfeldman$elm_css$Svg_Styled_Attributes$horizOriginX = _rtfeldman$elm_css$VirtualDom_Styled$attribute('horiz-origin-x');
var _rtfeldman$elm_css$Svg_Styled_Attributes$horizAdvX = _rtfeldman$elm_css$VirtualDom_Styled$attribute('horiz-adv-x');
var _rtfeldman$elm_css$Svg_Styled_Attributes$height = _rtfeldman$elm_css$VirtualDom_Styled$attribute('height');
var _rtfeldman$elm_css$Svg_Styled_Attributes$hanging = _rtfeldman$elm_css$VirtualDom_Styled$attribute('hanging');
var _rtfeldman$elm_css$Svg_Styled_Attributes$gradientUnits = _rtfeldman$elm_css$VirtualDom_Styled$attribute('gradientUnits');
var _rtfeldman$elm_css$Svg_Styled_Attributes$gradientTransform = _rtfeldman$elm_css$VirtualDom_Styled$attribute('gradientTransform');
var _rtfeldman$elm_css$Svg_Styled_Attributes$glyphRef = _rtfeldman$elm_css$VirtualDom_Styled$attribute('glyphRef');
var _rtfeldman$elm_css$Svg_Styled_Attributes$glyphName = _rtfeldman$elm_css$VirtualDom_Styled$attribute('glyph-name');
var _rtfeldman$elm_css$Svg_Styled_Attributes$g2 = _rtfeldman$elm_css$VirtualDom_Styled$attribute('g2');
var _rtfeldman$elm_css$Svg_Styled_Attributes$g1 = _rtfeldman$elm_css$VirtualDom_Styled$attribute('g1');
var _rtfeldman$elm_css$Svg_Styled_Attributes$fy = _rtfeldman$elm_css$VirtualDom_Styled$attribute('fy');
var _rtfeldman$elm_css$Svg_Styled_Attributes$fx = _rtfeldman$elm_css$VirtualDom_Styled$attribute('fx');
var _rtfeldman$elm_css$Svg_Styled_Attributes$from = _rtfeldman$elm_css$VirtualDom_Styled$attribute('from');
var _rtfeldman$elm_css$Svg_Styled_Attributes$format = _rtfeldman$elm_css$VirtualDom_Styled$attribute('format');
var _rtfeldman$elm_css$Svg_Styled_Attributes$filterUnits = _rtfeldman$elm_css$VirtualDom_Styled$attribute('filterUnits');
var _rtfeldman$elm_css$Svg_Styled_Attributes$filterRes = _rtfeldman$elm_css$VirtualDom_Styled$attribute('filterRes');
var _rtfeldman$elm_css$Svg_Styled_Attributes$externalResourcesRequired = _rtfeldman$elm_css$VirtualDom_Styled$attribute('externalResourcesRequired');
var _rtfeldman$elm_css$Svg_Styled_Attributes$exponent = _rtfeldman$elm_css$VirtualDom_Styled$attribute('exponent');
var _rtfeldman$elm_css$Svg_Styled_Attributes$end = _rtfeldman$elm_css$VirtualDom_Styled$attribute('end');
var _rtfeldman$elm_css$Svg_Styled_Attributes$elevation = _rtfeldman$elm_css$VirtualDom_Styled$attribute('elevation');
var _rtfeldman$elm_css$Svg_Styled_Attributes$edgeMode = _rtfeldman$elm_css$VirtualDom_Styled$attribute('edgeMode');
var _rtfeldman$elm_css$Svg_Styled_Attributes$dy = _rtfeldman$elm_css$VirtualDom_Styled$attribute('dy');
var _rtfeldman$elm_css$Svg_Styled_Attributes$dx = _rtfeldman$elm_css$VirtualDom_Styled$attribute('dx');
var _rtfeldman$elm_css$Svg_Styled_Attributes$dur = _rtfeldman$elm_css$VirtualDom_Styled$attribute('dur');
var _rtfeldman$elm_css$Svg_Styled_Attributes$divisor = _rtfeldman$elm_css$VirtualDom_Styled$attribute('divisor');
var _rtfeldman$elm_css$Svg_Styled_Attributes$diffuseConstant = _rtfeldman$elm_css$VirtualDom_Styled$attribute('diffuseConstant');
var _rtfeldman$elm_css$Svg_Styled_Attributes$descent = _rtfeldman$elm_css$VirtualDom_Styled$attribute('descent');
var _rtfeldman$elm_css$Svg_Styled_Attributes$decelerate = _rtfeldman$elm_css$VirtualDom_Styled$attribute('decelerate');
var _rtfeldman$elm_css$Svg_Styled_Attributes$d = _rtfeldman$elm_css$VirtualDom_Styled$attribute('d');
var _rtfeldman$elm_css$Svg_Styled_Attributes$cy = _rtfeldman$elm_css$VirtualDom_Styled$attribute('cy');
var _rtfeldman$elm_css$Svg_Styled_Attributes$cx = _rtfeldman$elm_css$VirtualDom_Styled$attribute('cx');
var _rtfeldman$elm_css$Svg_Styled_Attributes$contentStyleType = _rtfeldman$elm_css$VirtualDom_Styled$attribute('contentStyleType');
var _rtfeldman$elm_css$Svg_Styled_Attributes$contentScriptType = _rtfeldman$elm_css$VirtualDom_Styled$attribute('contentScriptType');
var _rtfeldman$elm_css$Svg_Styled_Attributes$clipPathUnits = _rtfeldman$elm_css$VirtualDom_Styled$attribute('clipPathUnits');
var _rtfeldman$elm_css$Svg_Styled_Attributes$class = _rtfeldman$elm_css$VirtualDom_Styled$attribute('class');
var _rtfeldman$elm_css$Svg_Styled_Attributes$capHeight = _rtfeldman$elm_css$VirtualDom_Styled$attribute('cap-height');
var _rtfeldman$elm_css$Svg_Styled_Attributes$calcMode = _rtfeldman$elm_css$VirtualDom_Styled$attribute('calcMode');
var _rtfeldman$elm_css$Svg_Styled_Attributes$by = _rtfeldman$elm_css$VirtualDom_Styled$attribute('by');
var _rtfeldman$elm_css$Svg_Styled_Attributes$bias = _rtfeldman$elm_css$VirtualDom_Styled$attribute('bias');
var _rtfeldman$elm_css$Svg_Styled_Attributes$begin = _rtfeldman$elm_css$VirtualDom_Styled$attribute('begin');
var _rtfeldman$elm_css$Svg_Styled_Attributes$bbox = _rtfeldman$elm_css$VirtualDom_Styled$attribute('bbox');
var _rtfeldman$elm_css$Svg_Styled_Attributes$baseProfile = _rtfeldman$elm_css$VirtualDom_Styled$attribute('baseProfile');
var _rtfeldman$elm_css$Svg_Styled_Attributes$baseFrequency = _rtfeldman$elm_css$VirtualDom_Styled$attribute('baseFrequency');
var _rtfeldman$elm_css$Svg_Styled_Attributes$azimuth = _rtfeldman$elm_css$VirtualDom_Styled$attribute('azimuth');
var _rtfeldman$elm_css$Svg_Styled_Attributes$autoReverse = _rtfeldman$elm_css$VirtualDom_Styled$attribute('autoReverse');
var _rtfeldman$elm_css$Svg_Styled_Attributes$attributeType = _rtfeldman$elm_css$VirtualDom_Styled$attribute('attributeType');
var _rtfeldman$elm_css$Svg_Styled_Attributes$attributeName = _rtfeldman$elm_css$VirtualDom_Styled$attribute('attributeName');
var _rtfeldman$elm_css$Svg_Styled_Attributes$ascent = _rtfeldman$elm_css$VirtualDom_Styled$attribute('ascent');
var _rtfeldman$elm_css$Svg_Styled_Attributes$arabicForm = _rtfeldman$elm_css$VirtualDom_Styled$attribute('arabic-form');
var _rtfeldman$elm_css$Svg_Styled_Attributes$amplitude = _rtfeldman$elm_css$VirtualDom_Styled$attribute('amplitude');
var _rtfeldman$elm_css$Svg_Styled_Attributes$allowReorder = _rtfeldman$elm_css$VirtualDom_Styled$attribute('allowReorder');
var _rtfeldman$elm_css$Svg_Styled_Attributes$alphabetic = _rtfeldman$elm_css$VirtualDom_Styled$attribute('alphabetic');
var _rtfeldman$elm_css$Svg_Styled_Attributes$additive = _rtfeldman$elm_css$VirtualDom_Styled$attribute('additive');
var _rtfeldman$elm_css$Svg_Styled_Attributes$accumulate = _rtfeldman$elm_css$VirtualDom_Styled$attribute('accumulate');
var _rtfeldman$elm_css$Svg_Styled_Attributes$accelerate = _rtfeldman$elm_css$VirtualDom_Styled$attribute('accelerate');
var _rtfeldman$elm_css$Svg_Styled_Attributes$accentHeight = _rtfeldman$elm_css$VirtualDom_Styled$attribute('accent-height');
var _rtfeldman$elm_css$Svg_Styled_Attributes$css = _rtfeldman$elm_css$Svg_Styled_Internal$css;
var _rtfeldman$elm_css$Svg_Styled_Attributes$fromUnstyled = _rtfeldman$elm_css$VirtualDom_Styled$unstyledProperty;

var _user$project$Core_Effects_Msg$NoOp = {ctor: 'NoOp'};

var _user$project$Data_UI$Off = {ctor: 'Off'};
var _user$project$Data_UI$On = {ctor: 'On'};
var _user$project$Data_UI$toggle = function (x) {
	var _p0 = x;
	if (_p0.ctor === 'On') {
		return _user$project$Data_UI$Off;
	} else {
		return _user$project$Data_UI$On;
	}
};
var _user$project$Data_UI$Bottom = {ctor: 'Bottom'};
var _user$project$Data_UI$Top = {ctor: 'Top'};

var _user$project$Data_Either$Right = function (a) {
	return {ctor: 'Right', _0: a};
};
var _user$project$Data_Either$Left = function (a) {
	return {ctor: 'Left', _0: a};
};

var _user$project$Entry_Data$Joined = {ctor: 'Joined'};
var _user$project$Entry_Data$Broken = {ctor: 'Broken'};
var _user$project$Entry_Data$PaperBlock = function (a) {
	return {ctor: 'PaperBlock', _0: a};
};
var _user$project$Entry_Data$CodeBlock = function (a) {
	return {ctor: 'CodeBlock', _0: a};
};

var _user$project$Entry_Model$initPaperModel = {};
var _user$project$Entry_Model$initCodeModel = {};
var _user$project$Entry_Model$initPaperEntry = F3(
	function (ix, topBorder, bottomBorder) {
		return {
			blockType: _user$project$Entry_Data$PaperBlock(_user$project$Entry_Model$initPaperModel),
			top: topBorder,
			bottom: bottomBorder,
			active: false,
			index: ix
		};
	});
var _user$project$Entry_Model$initActiveCodeEntry = F3(
	function (ix, topBorder, bottomBorder) {
		return {
			blockType: _user$project$Entry_Data$CodeBlock(_user$project$Entry_Model$initCodeModel),
			top: topBorder,
			bottom: bottomBorder,
			active: true,
			index: ix
		};
	});
var _user$project$Entry_Model$initCodeEntry = F3(
	function (ix, topBorder, bottomBorder) {
		return {
			blockType: _user$project$Entry_Data$CodeBlock(_user$project$Entry_Model$initCodeModel),
			top: topBorder,
			bottom: bottomBorder,
			active: false,
			index: ix
		};
	});
var _user$project$Entry_Model$Model = F5(
	function (a, b, c, d, e) {
		return {blockType: a, top: b, bottom: c, active: d, index: e};
	});
var _user$project$Entry_Model$CodeModel = {};
var _user$project$Entry_Model$PaperModel = {};

var _user$project$Entries_Model$initModel = {
	entries: {
		ctor: '::',
		_0: A3(_user$project$Entry_Model$initPaperEntry, 0, _user$project$Entry_Data$Joined, _user$project$Entry_Data$Broken),
		_1: {
			ctor: '::',
			_0: A3(_user$project$Entry_Model$initPaperEntry, 1, _user$project$Entry_Data$Broken, _user$project$Entry_Data$Joined),
			_1: {
				ctor: '::',
				_0: A3(_user$project$Entry_Model$initActiveCodeEntry, 2, _user$project$Entry_Data$Joined, _user$project$Entry_Data$Joined),
				_1: {
					ctor: '::',
					_0: A3(_user$project$Entry_Model$initPaperEntry, 3, _user$project$Entry_Data$Joined, _user$project$Entry_Data$Broken),
					_1: {
						ctor: '::',
						_0: A3(_user$project$Entry_Model$initCodeEntry, 4, _user$project$Entry_Data$Broken, _user$project$Entry_Data$Broken),
						_1: {
							ctor: '::',
							_0: A3(_user$project$Entry_Model$initPaperEntry, 5, _user$project$Entry_Data$Broken, _user$project$Entry_Data$Joined),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		}
	}
};
var _user$project$Entries_Model$Model = function (a) {
	return {entries: a};
};

var _user$project$Core_Model$initModel = {entries: _user$project$Entries_Model$initModel};
var _user$project$Core_Model$init = {ctor: '_Tuple2', _0: _user$project$Core_Model$initModel, _1: _elm_lang$core$Platform_Cmd$none};
var _user$project$Core_Model$Model = function (a) {
	return {entries: a};
};

var _user$project$Core_Effects_Sub$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$none;
};

var _user$project$Core_Update$update = F2(
	function (msg, model) {
		return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
	});

var _user$project$Entry_Block_Code_Input$inputPane = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$backgroundColor(
						_rtfeldman$elm_css$Css$hex('#f9f9f9')),
					_1: {
						ctor: '::',
						_0: A3(
							_rtfeldman$elm_css$Css$border3,
							_rtfeldman$elm_css$Css$px(1),
							_rtfeldman$elm_css$Css$solid,
							_rtfeldman$elm_css$Css$hex('bdbdbd')),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$borderRadius(
								_rtfeldman$elm_css$Css$px(3)),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$zIndex(
									_rtfeldman$elm_css$Css$int(3)),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$width(
										_rtfeldman$elm_css$Css$pct(101)),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$marginLeft(
											_rtfeldman$elm_css$Css$pct(-0.5)),
										_1: {
											ctor: '::',
											_0: A2(
												_rtfeldman$elm_css$Css$property,
												'box-shadow',
												A2(
													_elm_lang$core$String$join,
													' ',
													{
														ctor: '::',
														_0: '0px -6px 4px -4px rgba(193, 193, 193, 0.84),',
														_1: {
															ctor: '::',
															_0: '0px 6px 4px -4px #c1c1c1;',
															_1: {ctor: '[]'}
														}
													})),
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$zIndex(
													_rtfeldman$elm_css$Css$int(3)),
												_1: {
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$minHeight(
														_rtfeldman$elm_css$Css$px(100)),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		},
		{ctor: '[]'});
};

var _user$project$Entry_UI_Dialog_Swoop_Filters$dropShadow = A2(
	_rtfeldman$elm_css$Svg_Styled$filter,
	{
		ctor: '::',
		_0: _rtfeldman$elm_css$Svg_Styled_Attributes$id('drop-shadow'),
		_1: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Svg_Styled_Attributes$height('200%'),
			_1: {ctor: '[]'}
		}
	},
	{
		ctor: '::',
		_0: A2(
			_rtfeldman$elm_css$Svg_Styled$feColorMatrix,
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Svg_Styled_Attributes$type_('matrix'),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Svg_Styled_Attributes$values('\n                0 0 0 0   0\n                0 0 0 0 0\n                0 0 0 0 0\n                0 0 0 0.4   0\n                '),
					_1: {ctor: '[]'}
				}
			},
			{ctor: '[]'}),
		_1: {
			ctor: '::',
			_0: A2(
				_rtfeldman$elm_css$Svg_Styled$feGaussianBlur,
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Svg_Styled_Attributes$stdDeviation('3.5'),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Svg_Styled_Attributes$result('coloredBlur'),
						_1: {ctor: '[]'}
					}
				},
				{ctor: '[]'}),
			_1: {
				ctor: '::',
				_0: A2(
					_rtfeldman$elm_css$Svg_Styled$feOffset,
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Svg_Styled_Attributes$in_('coloredBlur'),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Svg_Styled_Attributes$dx('0'),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Svg_Styled_Attributes$dy('3'),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Svg_Styled_Attributes$result('offsetBlur'),
									_1: {ctor: '[]'}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_rtfeldman$elm_css$Svg_Styled$feMerge,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_rtfeldman$elm_css$Svg_Styled$feMergeNode,
								{
									ctor: '::',
									_0: _rtfeldman$elm_css$Svg_Styled_Attributes$in_('offsetBlur'),
									_1: {ctor: '[]'}
								},
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: A2(
									_rtfeldman$elm_css$Svg_Styled$feMergeNode,
									{
										ctor: '::',
										_0: _rtfeldman$elm_css$Svg_Styled_Attributes$in_('SourceGraphic'),
										_1: {ctor: '[]'}
									},
									{ctor: '[]'}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}
			}
		}
	});

var _user$project$Entry_UI_Dialog_Swoop$objectPath = '\n    M 0,0\n    L 100,0\n    C   100,0\n        60,50\n        50,50\n    C   50,50\n        40,50\n        0,0\n    Z\n    ';
var _user$project$Entry_UI_Dialog_Swoop$svgBody = A2(
	_rtfeldman$elm_css$Svg_Styled$g,
	{ctor: '[]'},
	{
		ctor: '::',
		_0: A2(
			_rtfeldman$elm_css$Svg_Styled$path,
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Svg_Styled_Attributes$d(_user$project$Entry_UI_Dialog_Swoop$objectPath),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Svg_Styled_Attributes$fill('url(#lgrad)'),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Svg_Styled_Attributes$stroke('url(#border-grad)'),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Svg_Styled_Attributes$strokeLinejoin('round'),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Svg_Styled_Attributes$strokeWidth('1'),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Svg_Styled_Attributes$filter('url(#drop-shadow)'),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			},
			{ctor: '[]'}),
		_1: {
			ctor: '::',
			_0: A2(
				_rtfeldman$elm_css$Svg_Styled$path,
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Svg_Styled_Attributes$d('\n                M 1,0\n                L 99, 0\n                '),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Svg_Styled_Attributes$stroke('#fff'),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Svg_Styled_Attributes$strokeWidth('1.1'),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Svg_Styled_Attributes$fill('none'),
								_1: {ctor: '[]'}
							}
						}
					}
				},
				{ctor: '[]'}),
			_1: {ctor: '[]'}
		}
	});
var _user$project$Entry_UI_Dialog_Swoop$svgDefs = A2(
	_rtfeldman$elm_css$Svg_Styled$defs,
	{ctor: '[]'},
	{
		ctor: '::',
		_0: _user$project$Entry_UI_Dialog_Swoop_Filters$dropShadow,
		_1: {
			ctor: '::',
			_0: A2(
				_rtfeldman$elm_css$Svg_Styled$linearGradient,
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Svg_Styled_Attributes$id('lgrad'),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Svg_Styled_Attributes$x1('50%'),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Svg_Styled_Attributes$y1('0%'),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Svg_Styled_Attributes$x2('50%'),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Svg_Styled_Attributes$y2('100%'),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				},
				{
					ctor: '::',
					_0: A2(
						_rtfeldman$elm_css$Svg_Styled$stop,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Svg_Styled_Attributes$offset('0%'),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Svg_Styled_Attributes$style('stop-color:#f9f9f9; stop-opacity:1'),
								_1: {ctor: '[]'}
							}
						},
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: A2(
							_rtfeldman$elm_css$Svg_Styled$stop,
							{
								ctor: '::',
								_0: _rtfeldman$elm_css$Svg_Styled_Attributes$offset('25%'),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Svg_Styled_Attributes$style('stop-color:#f9f9f9; stop-opacity:1'),
									_1: {ctor: '[]'}
								}
							},
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: A2(
								_rtfeldman$elm_css$Svg_Styled$stop,
								{
									ctor: '::',
									_0: _rtfeldman$elm_css$Svg_Styled_Attributes$offset('100%'),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Svg_Styled_Attributes$style('stop-color:#e0e0e0; stop-opacity:1'),
										_1: {ctor: '[]'}
									}
								},
								{ctor: '[]'}),
							_1: {ctor: '[]'}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_rtfeldman$elm_css$Svg_Styled$linearGradient,
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Svg_Styled_Attributes$id('border-grad'),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Svg_Styled_Attributes$x1('50%'),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Svg_Styled_Attributes$y1('0%'),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Svg_Styled_Attributes$x2('50%'),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Svg_Styled_Attributes$y2('100%'),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					},
					{
						ctor: '::',
						_0: A2(
							_rtfeldman$elm_css$Svg_Styled$stop,
							{
								ctor: '::',
								_0: _rtfeldman$elm_css$Svg_Styled_Attributes$offset('0%'),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Svg_Styled_Attributes$style('stop-color:#f9f9f9; stop-opacity:1'),
									_1: {ctor: '[]'}
								}
							},
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: A2(
								_rtfeldman$elm_css$Svg_Styled$stop,
								{
									ctor: '::',
									_0: _rtfeldman$elm_css$Svg_Styled_Attributes$offset('2.4%'),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Svg_Styled_Attributes$style('stop-color:#bdbdbd; stop-opacity:1'),
										_1: {ctor: '[]'}
									}
								},
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: A2(
									_rtfeldman$elm_css$Svg_Styled$stop,
									{
										ctor: '::',
										_0: _rtfeldman$elm_css$Svg_Styled_Attributes$offset('10%'),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Svg_Styled_Attributes$style('stop-color:#bdbdbd; stop-opacity:1'),
											_1: {ctor: '[]'}
										}
									},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: A2(
										_rtfeldman$elm_css$Svg_Styled$stop,
										{
											ctor: '::',
											_0: _rtfeldman$elm_css$Svg_Styled_Attributes$offset('100%'),
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Svg_Styled_Attributes$style('stop-color:#bdbdbd; stop-opacity:1'),
												_1: {ctor: '[]'}
											}
										},
										{ctor: '[]'}),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$Entry_UI_Dialog_Swoop$swoopGraphic = A2(
	_rtfeldman$elm_css$Html_Styled$div,
	{
		ctor: '::',
		_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$height(
					_rtfeldman$elm_css$Css$px(25)),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$top(
							_rtfeldman$elm_css$Css$px(0)),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$zIndex(
								_rtfeldman$elm_css$Css$int(3)),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$marginTop(
									_rtfeldman$elm_css$Css$px(-1)),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$right(
										_rtfeldman$elm_css$Css$px(0)),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: A2(
			_rtfeldman$elm_css$Svg_Styled$svg,
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Svg_Styled_Attributes$viewBox('0 0 100 100'),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Svg_Styled_Attributes$width('100px'),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Svg_Styled_Attributes$height('60px'),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Svg_Styled_Attributes$style('padding-bottom: 10px;'),
							_1: {ctor: '[]'}
						}
					}
				}
			},
			{
				ctor: '::',
				_0: _user$project$Entry_UI_Dialog_Swoop$svgDefs,
				_1: {
					ctor: '::',
					_0: _user$project$Entry_UI_Dialog_Swoop$svgBody,
					_1: {ctor: '[]'}
				}
			}),
		_1: {ctor: '[]'}
	});

var _user$project$Entry_Block_Code_Output$body = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$padding(
						_rtfeldman$elm_css$Css$px(20)),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$displayFlex,
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$flexDirection(_rtfeldman$elm_css$Css$column),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$alignItems(_rtfeldman$elm_css$Css$center),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$justifyContent(_rtfeldman$elm_css$Css$center),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_rtfeldman$elm_css$Html_Styled$h1,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Html_Styled$text('Output'),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};
var _user$project$Entry_Block_Code_Output$outputPane = function (model) {
	var _p0 = function (_) {
		return _.active;
	}(model);
	if (_p0 === true) {
		return A2(
			_rtfeldman$elm_css$Html_Styled$div,
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$relative),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _user$project$Entry_UI_Dialog_Swoop$swoopGraphic,
				_1: {
					ctor: '::',
					_0: _user$project$Entry_Block_Code_Output$body(model),
					_1: {ctor: '[]'}
				}
			});
	} else {
		return A2(
			_rtfeldman$elm_css$Html_Styled$div,
			{ctor: '[]'},
			{ctor: '[]'});
	}
};

var _user$project$Entry_Block_Code$view = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'code-block', ''),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$width(
							_rtfeldman$elm_css$Css$pct(100)),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$zIndex(
								_rtfeldman$elm_css$Css$int(3)),
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _user$project$Entry_Block_Code_Input$inputPane(model),
			_1: {
				ctor: '::',
				_0: _user$project$Entry_Block_Code_Output$outputPane(model),
				_1: {ctor: '[]'}
			}
		});
};

var _user$project$Entry_Special_Intro$markdownOptions = {
	githubFlavored: _elm_lang$core$Maybe$Just(
		{tables: true, breaks: true}),
	defaultHighlighting: _elm_lang$core$Maybe$Nothing,
	sanitize: false,
	smartypants: true
};
var _user$project$Entry_Special_Intro$workBody = function (model) {
	return A3(
		_evancz$elm_markdown$Markdown$toHtmlWith,
		_user$project$Entry_Special_Intro$markdownOptions,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('markdown-paper'),
			_1: {ctor: '[]'}
		},
		'\n# Employment\n');
};
var _user$project$Entry_Special_Intro$work = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$width(
						_rtfeldman$elm_css$Css$pct(100)),
					_1: {
						ctor: '::',
						_0: A3(
							_rtfeldman$elm_css$Css$borderRight3,
							_rtfeldman$elm_css$Css$px(1),
							_rtfeldman$elm_css$Css$solid,
							_rtfeldman$elm_css$Css$hex('#b7b7b7')),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$paddingRight(
								_rtfeldman$elm_css$Css$px(12)),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$marginRight(
									_rtfeldman$elm_css$Css$px(12)),
								_1: {ctor: '[]'}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Html_Styled$fromUnstyled(
				_user$project$Entry_Special_Intro$workBody(model)),
			_1: {ctor: '[]'}
		});
};
var _user$project$Entry_Special_Intro$projectsBody = function (model) {
	return A3(
		_evancz$elm_markdown$Markdown$toHtmlWith,
		_user$project$Entry_Special_Intro$markdownOptions,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('markdown-paper'),
			_1: {ctor: '[]'}
		},
		'\n# Projects\n## The Helm Language (i.e. Compiler)<sup>‡</sup>\n> https://github.com/SubSys/Compiler\n\nA rather long term project of mine. The overall aspiration is to create a simple medium for CPU/(GP)GPU computing; intended to serve as the ‘beginner friendly’ language for a video game engine focused on streaming, or rather, more commonly known as ‘cloud gaming’. \n\n### Notable Components:\n> Note that, this is still very incomplete given the enormity of the project. Although these features are working fairly well, so definitely presentable during an interview, if you’re interested. ;)\n\n- The Frontend Parser\n- Type Inference/Type Checking \n- The rust code-gen\n\nFor more information regarding the compiler, the readme page should go much more in-depth on various details of interest (via the given link to the repository).\n\n\n## Other projects to ask about<sup>‡</sup>\n\n- A CLI tool simular to ‘cargo-web’ for ghcjs.<sup>†</sup>\n- A text editor compiled with ghcjs. So far all that works alright is my multi cursor implementation; since I just recently started this projects.<sup>†</sup>\n-  A simple ghc/ghcjs macrc that generates function stubs when compiled with ghc.<sup>†</sup>\n    * The elaborate, although this isn’t ideal, the purpose of the aforementioned macro is to declare JavaScript/ECMAScript FFI declarations that will compile with normal GHC. I.e. You declare your FFI declarations using the provided macros that will become regular JavaScript FFI declarations when compiled with GHCJS, and function declaration stubs when compiled with normal GHC.\n    * All it really does is not brake my beloved ghc based development tools.\n    * E.g.\n    ```haskell\n    [Call.jsFFI|\n        appendChild :: Instance.Node -> Instance.Node -> IO Instance.Node\n        $r = Node.prototype.appendChild.call($1, $2);  \n    |]\n    ```\n\n\n‡ If inclined to see, these are fairly presentable (something I quite enjoy doing). ;)\n† These projects will be open sourced as a whole when reasonably complete.\n');
};
var _user$project$Entry_Special_Intro$projects = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$width(
						_rtfeldman$elm_css$Css$pct(100)),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Html_Styled$fromUnstyled(
				_user$project$Entry_Special_Intro$projectsBody(model)),
			_1: {ctor: '[]'}
		});
};
var _user$project$Entry_Special_Intro$intro = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'intro', ''),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$displayFlex,
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$flexDirection(_rtfeldman$elm_css$Css$row),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$paddingBottom(
									_rtfeldman$elm_css$Css$px(50)),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _user$project$Entry_Special_Intro$projects(model),
			_1: {ctor: '[]'}
		});
};

var _user$project$Entry_Block_Paper$body = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$height(
						_rtfeldman$elm_css$Css$px(80)),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_rtfeldman$elm_css$Html_Styled$p,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Html_Styled$text('lorem'),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};
var _user$project$Entry_Block_Paper$view = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'paper-block', ''),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$width(
							_rtfeldman$elm_css$Css$pct(99)),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$zIndex(
								_rtfeldman$elm_css$Css$int(3)),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$padding(
									_rtfeldman$elm_css$Css$px(12)),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: function () {
				var _p0 = function (_) {
					return _.index;
				}(model);
				if (_p0 === 0) {
					return _user$project$Entry_Special_Intro$intro(model);
				} else {
					return _user$project$Entry_Block_Paper$body(model);
				}
			}(),
			_1: {ctor: '[]'}
		});
};

var _user$project$Entry_Border_Paper_Broken_Filters$dropShadow = A2(
	_rtfeldman$elm_css$Svg_Styled$filter,
	{
		ctor: '::',
		_0: _rtfeldman$elm_css$Svg_Styled_Attributes$id('drop-shadow'),
		_1: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Svg_Styled_Attributes$height('200%'),
			_1: {ctor: '[]'}
		}
	},
	{
		ctor: '::',
		_0: A2(
			_rtfeldman$elm_css$Svg_Styled$feColorMatrix,
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Svg_Styled_Attributes$type_('matrix'),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Svg_Styled_Attributes$values('\n                0 0 0 0   0\n                0 0 0 0 0\n                0 0 0 0 0\n                0 0 0 0.2   0\n                '),
					_1: {ctor: '[]'}
				}
			},
			{ctor: '[]'}),
		_1: {
			ctor: '::',
			_0: A2(
				_rtfeldman$elm_css$Svg_Styled$feGaussianBlur,
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Svg_Styled_Attributes$stdDeviation('3.5'),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Svg_Styled_Attributes$result('coloredBlur'),
						_1: {ctor: '[]'}
					}
				},
				{ctor: '[]'}),
			_1: {
				ctor: '::',
				_0: A2(
					_rtfeldman$elm_css$Svg_Styled$feOffset,
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Svg_Styled_Attributes$in_('coloredBlur'),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Svg_Styled_Attributes$dx('0'),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Svg_Styled_Attributes$dy('-10'),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Svg_Styled_Attributes$result('offsetBlur'),
									_1: {ctor: '[]'}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_rtfeldman$elm_css$Svg_Styled$feMerge,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_rtfeldman$elm_css$Svg_Styled$feMergeNode,
								{
									ctor: '::',
									_0: _rtfeldman$elm_css$Svg_Styled_Attributes$in_('offsetBlur'),
									_1: {ctor: '[]'}
								},
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: A2(
									_rtfeldman$elm_css$Svg_Styled$feMergeNode,
									{
										ctor: '::',
										_0: _rtfeldman$elm_css$Svg_Styled_Attributes$in_('SourceGraphic'),
										_1: {ctor: '[]'}
									},
									{ctor: '[]'}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}
			}
		}
	});

var _user$project$Entry_Border_Paper_Broken_Utils$renderAspectRatio = F4(
	function (minWidth, minHeight, width, height) {
		return A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: _elm_lang$core$Basics$toString(minWidth),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(minHeight),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Basics$toString(width),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$toString(height),
							_1: {ctor: '[]'}
						}
					}
				}
			});
	});
var _user$project$Entry_Border_Paper_Broken_Utils$renderPair = F2(
	function (x, y) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			A2(
				_elm_lang$core$Basics_ops['++'],
				',',
				_elm_lang$core$Basics$toString(y)));
	});
var _user$project$Entry_Border_Paper_Broken_Utils$renderDataEntry = F3(
	function (name, x, y) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			name,
			A2(
				_elm_lang$core$Basics_ops['++'],
				' ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_user$project$Entry_Border_Paper_Broken_Utils$renderPair, x, y),
					' ')));
	});
var _user$project$Entry_Border_Paper_Broken_Utils$genItems = F3(
	function (start, inc, end) {
		return (_elm_lang$core$Native_Utils.cmp(start, end) > -1) ? {ctor: '[]'} : {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: start, _1: start + inc},
			_1: A3(_user$project$Entry_Border_Paper_Broken_Utils$genItems, start + inc, inc, end)
		};
	});

var _user$project$Entry_Border_Paper_Broken$borderElement = F2(
	function (config, _p0) {
		var _p1 = _p0;
		var _p3 = _p1._0;
		var _p2 = _p1._1;
		var mean = (_p3 + _p2) / 2;
		return A2(
			_rtfeldman$elm_css$Svg_Styled$path,
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Svg_Styled_Attributes$d(
					_elm_lang$core$String$concat(
						{
							ctor: '::',
							_0: A3(_user$project$Entry_Border_Paper_Broken_Utils$renderDataEntry, 'M', _p3, 0),
							_1: {
								ctor: '::',
								_0: A3(_user$project$Entry_Border_Paper_Broken_Utils$renderDataEntry, 'L', _p2, 0),
								_1: {
									ctor: '::',
									_0: A3(
										_user$project$Entry_Border_Paper_Broken_Utils$renderDataEntry,
										'L',
										mean,
										function (_) {
											return _.width;
										}(config)),
									_1: {
										ctor: '::',
										_0: 'Z',
										_1: {ctor: '[]'}
									}
								}
							}
						})),
				_1: {ctor: '[]'}
			},
			{ctor: '[]'});
	});
var _user$project$Entry_Border_Paper_Broken$initSvgItems = F2(
	function (config, items) {
		return A2(
			_rtfeldman$elm_css$Svg_Styled$g,
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Svg_Styled_Attributes$strokeWidth('0.2'),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Svg_Styled_Attributes$fill(
						function (_) {
							return _.value;
						}(
							function (_) {
								return _.backgroundColor;
							}(config))),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Svg_Styled_Attributes$stroke(
							function (_) {
								return _.value;
							}(
								function (_) {
									return _.borderColor;
								}(config))),
						_1: {ctor: '[]'}
					}
				}
			},
			A2(
				_elm_lang$core$List$map,
				_user$project$Entry_Border_Paper_Broken$borderElement(config),
				items));
	});
var _user$project$Entry_Border_Paper_Broken$initDefs = function (config) {
	return A2(
		_rtfeldman$elm_css$Svg_Styled$defs,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _user$project$Entry_Border_Paper_Broken_Filters$dropShadow,
			_1: {ctor: '[]'}
		});
};
var _user$project$Entry_Border_Paper_Broken$initSvgBody = function (config) {
	var defs = _user$project$Entry_Border_Paper_Broken$initDefs(config);
	var numItems = function (_) {
		return _.numItems;
	}(config);
	var height = function (_) {
		return _.height;
	}(config);
	var width = function (_) {
		return _.width;
	}(config);
	var items = A3(_user$project$Entry_Border_Paper_Broken_Utils$genItems, 0, width / numItems, width);
	var domItems = A2(_user$project$Entry_Border_Paper_Broken$initSvgItems, config, items);
	return {
		ctor: '::',
		_0: defs,
		_1: {
			ctor: '::',
			_0: domItems,
			_1: {ctor: '[]'}
		}
	};
};
var _user$project$Entry_Border_Paper_Broken$initSvgHeader = function (config) {
	var svgPlacement = function () {
		var _p4 = function (_) {
			return _.direction;
		}(config);
		if (_p4.ctor === 'Top') {
			return {
				ctor: '::',
				_0: _rtfeldman$elm_css$Svg_Styled_Attributes$transform('scale(1,-1) translate(0,0)'),
				_1: {ctor: '[]'}
			};
		} else {
			return {ctor: '[]'};
		}
	}();
	return A2(
		_elm_lang$core$List$append,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Svg_Styled_Attributes$width('100%'),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Svg_Styled_Attributes$height('100%'),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Svg_Styled_Attributes$preserveAspectRatio('none'),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Svg_Styled_Attributes$viewBox(
							A4(
								_user$project$Entry_Border_Paper_Broken_Utils$renderAspectRatio,
								0,
								0,
								function (_) {
									return _.width;
								}(config),
								function (_) {
									return _.height;
								}(config))),
						_1: {ctor: '[]'}
					}
				}
			}
		},
		svgPlacement);
};
var _user$project$Entry_Border_Paper_Broken$initBorder = function (config) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$displayFlex,
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$height(
							_rtfeldman$elm_css$Css$px(10)),
						_1: {
							ctor: '::',
							_0: A2(_rtfeldman$elm_css$Css$margin2, _rtfeldman$elm_css$Css$zero, _rtfeldman$elm_css$Css$auto),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$flexDirection(_rtfeldman$elm_css$Css$column),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$width(
										_rtfeldman$elm_css$Css$pct(100)),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_rtfeldman$elm_css$Svg_Styled$svg,
				_user$project$Entry_Border_Paper_Broken$initSvgHeader(config),
				_user$project$Entry_Border_Paper_Broken$initSvgBody(config)),
			_1: {ctor: '[]'}
		});
};
var _user$project$Entry_Border_Paper_Broken$initConfig = F3(
	function (x, bgColor, borderColor) {
		return {width: 100, height: 100, numItems: 40, direction: x, backgroundColor: bgColor, borderColor: borderColor};
	});
var _user$project$Entry_Border_Paper_Broken$paperBorder = F4(
	function (margin, facing, backgroundColor, borderColor) {
		var config = A3(_user$project$Entry_Border_Paper_Broken$initConfig, facing, backgroundColor, borderColor);
		var _p5 = margin;
		if (_p5.ctor === 'Broken') {
			return _user$project$Entry_Border_Paper_Broken$initBorder(config);
		} else {
			return A2(
				_rtfeldman$elm_css$Html_Styled$div,
				{ctor: '[]'},
				{ctor: '[]'});
		}
	});
var _user$project$Entry_Border_Paper_Broken$topBorder = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'top-border', ''),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Svg_Styled_Attributes$css(
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$width(
							_rtfeldman$elm_css$Css$pct(100)),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$zIndex(
								_rtfeldman$elm_css$Css$int(2)),
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A4(
				_user$project$Entry_Border_Paper_Broken$paperBorder,
				function (_) {
					return _.top;
				}(model),
				_user$project$Data_UI$Top,
				_rtfeldman$elm_css$Css$hex('#f1f1f1'),
				_rtfeldman$elm_css$Css$hex('#fbfbfb')),
			_1: {ctor: '[]'}
		});
};
var _user$project$Entry_Border_Paper_Broken$bottomBorder = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'bottom-border', ''),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Svg_Styled_Attributes$css(
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$width(
							_rtfeldman$elm_css$Css$pct(100)),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$zIndex(
								_rtfeldman$elm_css$Css$int(2)),
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A4(
				_user$project$Entry_Border_Paper_Broken$paperBorder,
				function (_) {
					return _.bottom;
				}(model),
				_user$project$Data_UI$Bottom,
				_rtfeldman$elm_css$Css$hex('#f1f1f1'),
				_rtfeldman$elm_css$Css$hex('#fbfbfb')),
			_1: {ctor: '[]'}
		});
};
var _user$project$Entry_Border_Paper_Broken$Config = F6(
	function (a, b, c, d, e, f) {
		return {width: a, height: b, numItems: c, direction: d, backgroundColor: e, borderColor: f};
	});

var _user$project$Entry_Border_Paper_Joined$hr = A2(
	_rtfeldman$elm_css$Html_Styled$hr,
	{
		ctor: '::',
		_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$width(
					_rtfeldman$elm_css$Css$pct(100)),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$borderStyle(_rtfeldman$elm_css$Css$solid),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$borderColor(
							_rtfeldman$elm_css$Css$hex('#e0e0e0')),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$borderWidth(
								_rtfeldman$elm_css$Css$px(1)),
							_1: {ctor: '[]'}
						}
					}
				}
			}),
		_1: {ctor: '[]'}
	},
	{ctor: '[]'});
var _user$project$Entry_Border_Paper_Joined$body = A2(
	_rtfeldman$elm_css$Html_Styled$div,
	{
		ctor: '::',
		_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$height(
					_rtfeldman$elm_css$Css$px(20)),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$width(
						_rtfeldman$elm_css$Css$pct(100)),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$backgroundColor(
							_rtfeldman$elm_css$Css$hex('#f1f1f1')),
						_1: {
							ctor: '::',
							_0: A3(
								_rtfeldman$elm_css$Css$borderLeft3,
								_rtfeldman$elm_css$Css$px(1),
								_rtfeldman$elm_css$Css$solid,
								_rtfeldman$elm_css$Css$hex('#fbfbfb')),
							_1: {
								ctor: '::',
								_0: A3(
									_rtfeldman$elm_css$Css$borderRight3,
									_rtfeldman$elm_css$Css$px(1),
									_rtfeldman$elm_css$Css$solid,
									_rtfeldman$elm_css$Css$hex('#fbfbfb')),
								_1: {
									ctor: '::',
									_0: A2(_rtfeldman$elm_css$Css$property, 'box-shadow', '\n                    -3px 0px 7px -2px rgba(175, 175, 175, 0.43),\n                    3px 0px 7px -2px rgba(175, 175, 175, 0.43)\n                    '),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$zIndex(
											_rtfeldman$elm_css$Css$int(0)),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$displayFlex,
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$flexDirection(_rtfeldman$elm_css$Css$column),
												_1: {
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$alignItems(_rtfeldman$elm_css$Css$center),
													_1: {
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$justifyContent(_rtfeldman$elm_css$Css$center),
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _user$project$Entry_Border_Paper_Joined$hr,
		_1: {ctor: '[]'}
	});
var _user$project$Entry_Border_Paper_Joined$gutter = A2(
	_rtfeldman$elm_css$Html_Styled$div,
	{
		ctor: '::',
		_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$height(
					_rtfeldman$elm_css$Css$px(4)),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$width(
						_rtfeldman$elm_css$Css$pct(100)),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$backgroundColor(
							_rtfeldman$elm_css$Css$hex('#f1f1f1')),
						_1: {
							ctor: '::',
							_0: A3(
								_rtfeldman$elm_css$Css$borderLeft3,
								_rtfeldman$elm_css$Css$px(1),
								_rtfeldman$elm_css$Css$solid,
								_rtfeldman$elm_css$Css$hex('#fbfbfb')),
							_1: {
								ctor: '::',
								_0: A3(
									_rtfeldman$elm_css$Css$borderRight3,
									_rtfeldman$elm_css$Css$px(1),
									_rtfeldman$elm_css$Css$solid,
									_rtfeldman$elm_css$Css$hex('#fbfbfb')),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$zIndex(
										_rtfeldman$elm_css$Css$int(3)),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}),
		_1: {ctor: '[]'}
	},
	{ctor: '[]'});
var _user$project$Entry_Border_Paper_Joined$joined = A2(
	_rtfeldman$elm_css$Html_Styled$div,
	{
		ctor: '::',
		_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
			{
				ctor: '::',
				_0: A2(_rtfeldman$elm_css$Css$margin2, _rtfeldman$elm_css$Css$zero, _rtfeldman$elm_css$Css$auto),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$displayFlex,
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$flexDirection(_rtfeldman$elm_css$Css$column),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$width(
								_rtfeldman$elm_css$Css$pct(100)),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$zIndex(
									_rtfeldman$elm_css$Css$int(3)),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _user$project$Entry_Border_Paper_Joined$gutter,
		_1: {
			ctor: '::',
			_0: _user$project$Entry_Border_Paper_Joined$body,
			_1: {
				ctor: '::',
				_0: _user$project$Entry_Border_Paper_Joined$gutter,
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$Entry_Border_Paper_Joined$bottomMargin = A2(
	_rtfeldman$elm_css$Html_Styled$div,
	{
		ctor: '::',
		_0: A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'bottom-margin', ''),
		_1: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$height(
						_rtfeldman$elm_css$Css$px(2)),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$backgroundColor(
							_rtfeldman$elm_css$Css$hex('#f1f1f1')),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$zIndex(
								_rtfeldman$elm_css$Css$int(2)),
							_1: {
								ctor: '::',
								_0: A3(
									_rtfeldman$elm_css$Css$borderLeft3,
									_rtfeldman$elm_css$Css$px(1),
									_rtfeldman$elm_css$Css$solid,
									_rtfeldman$elm_css$Css$hex('#fbfbfb')),
								_1: {
									ctor: '::',
									_0: A3(
										_rtfeldman$elm_css$Css$borderRight3,
										_rtfeldman$elm_css$Css$px(1),
										_rtfeldman$elm_css$Css$solid,
										_rtfeldman$elm_css$Css$hex('#fbfbfb')),
									_1: {
										ctor: '::',
										_0: A3(
											_rtfeldman$elm_css$Css$borderBottom3,
											_rtfeldman$elm_css$Css$px(1),
											_rtfeldman$elm_css$Css$solid,
											_rtfeldman$elm_css$Css$hex('#e0e0e0')),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		}
	},
	{ctor: '[]'});
var _user$project$Entry_Border_Paper_Joined$topMargin = A2(
	_rtfeldman$elm_css$Html_Styled$div,
	{
		ctor: '::',
		_0: A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'top-margin', ''),
		_1: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$height(
						_rtfeldman$elm_css$Css$px(2)),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$backgroundColor(
							_rtfeldman$elm_css$Css$hex('#f1f1f1')),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$zIndex(
								_rtfeldman$elm_css$Css$int(2)),
							_1: {
								ctor: '::',
								_0: A3(
									_rtfeldman$elm_css$Css$borderLeft3,
									_rtfeldman$elm_css$Css$px(1),
									_rtfeldman$elm_css$Css$solid,
									_rtfeldman$elm_css$Css$hex('#fbfbfb')),
								_1: {
									ctor: '::',
									_0: A3(
										_rtfeldman$elm_css$Css$borderRight3,
										_rtfeldman$elm_css$Css$px(1),
										_rtfeldman$elm_css$Css$solid,
										_rtfeldman$elm_css$Css$hex('#fbfbfb')),
									_1: {
										ctor: '::',
										_0: A3(
											_rtfeldman$elm_css$Css$borderTop3,
											_rtfeldman$elm_css$Css$px(1),
											_rtfeldman$elm_css$Css$solid,
											_rtfeldman$elm_css$Css$hex('#e0e0e0')),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		}
	},
	{ctor: '[]'});

var _user$project$Entry_Border$bottomBorder = function (model) {
	var _p0 = function (_) {
		return _.bottom;
	}(model);
	if (_p0.ctor === 'Broken') {
		return _user$project$Entry_Border_Paper_Broken$bottomBorder(model);
	} else {
		return _user$project$Entry_Border_Paper_Joined$bottomMargin;
	}
};
var _user$project$Entry_Border$topBorder = function (model) {
	var _p1 = function (_) {
		return _.top;
	}(model);
	if (_p1.ctor === 'Broken') {
		return _user$project$Entry_Border_Paper_Broken$topBorder(model);
	} else {
		return _user$project$Entry_Border_Paper_Joined$topMargin;
	}
};

var _user$project$Entry_View$initBoxShadow = function (model) {
	var rightValue = '3px 0px 7px -2px rgba(175, 175, 175, 0.43)';
	var leftValue = '-3px 0px 7px -2px rgba(175, 175, 175, 0.43),';
	var botValue = function () {
		var _p0 = function (_) {
			return _.bottom;
		}(model);
		if (_p0.ctor === 'Broken') {
			return '0px 9px 7px -3px rgba(175, 175, 175, 0.43),';
		} else {
			return '';
		}
	}();
	var topValue = function () {
		var _p1 = function (_) {
			return _.top;
		}(model);
		if (_p1.ctor === 'Broken') {
			return '0px -9px 7px -3px rgba(175, 175, 175, 0.43),';
		} else {
			return '';
		}
	}();
	return A2(
		_rtfeldman$elm_css$Css$property,
		'box-shadow',
		A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: topValue,
				_1: {
					ctor: '::',
					_0: botValue,
					_1: {
						ctor: '::',
						_0: leftValue,
						_1: {
							ctor: '::',
							_0: rightValue,
							_1: {ctor: '[]'}
						}
					}
				}
			}));
};
var _user$project$Entry_View$baseEntryStyling = function (model) {
	return _rtfeldman$elm_css$Css$batch(
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$width(
				_rtfeldman$elm_css$Css$pct(100)),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$backgroundColor(
					_rtfeldman$elm_css$Css$hex('#f1f1f1')),
				_1: {
					ctor: '::',
					_0: A3(
						_rtfeldman$elm_css$Css$borderLeft3,
						_rtfeldman$elm_css$Css$px(1),
						_rtfeldman$elm_css$Css$solid,
						_rtfeldman$elm_css$Css$hex('#fbfbfb')),
					_1: {
						ctor: '::',
						_0: A3(
							_rtfeldman$elm_css$Css$borderRight3,
							_rtfeldman$elm_css$Css$px(1),
							_rtfeldman$elm_css$Css$solid,
							_rtfeldman$elm_css$Css$hex('#fbfbfb')),
						_1: {
							ctor: '::',
							_0: _user$project$Entry_View$initBoxShadow(model),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		});
};
var _user$project$Entry_View$foreground = function (model) {
	var _p2 = function (_) {
		return _.blockType;
	}(model);
	if (_p2.ctor === 'CodeBlock') {
		return _user$project$Entry_Block_Code$view(model);
	} else {
		return _user$project$Entry_Block_Paper$view(model);
	}
};
var _user$project$Entry_View$background = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
				{
					ctor: '::',
					_0: _user$project$Entry_View$baseEntryStyling(model),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$height(
								_rtfeldman$elm_css$Css$pct(100)),
							_1: {ctor: '[]'}
						}
					}
				}),
			_1: {ctor: '[]'}
		},
		{ctor: '[]'});
};
var _user$project$Entry_View$body = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'entry-body', ''),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$relative),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$displayFlex,
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$flexDirection(_rtfeldman$elm_css$Css$column),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$alignItems(_rtfeldman$elm_css$Css$center),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$justifyContent(_rtfeldman$elm_css$Css$center),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$width(
												_rtfeldman$elm_css$Css$pct(100)),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _user$project$Entry_View$background(model),
			_1: {
				ctor: '::',
				_0: _user$project$Entry_View$foreground(model),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Entry_View$view = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'entry-view', ''),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$width(
							_rtfeldman$elm_css$Css$pct(100)),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$displayFlex,
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$flexDirection(_rtfeldman$elm_css$Css$column),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _user$project$Entry_Border$topBorder(model),
			_1: {
				ctor: '::',
				_0: _user$project$Entry_View$body(model),
				_1: {
					ctor: '::',
					_0: _user$project$Entry_Border$bottomBorder(model),
					_1: {ctor: '[]'}
				}
			}
		});
};

var _user$project$Entries_Header$view = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$header,
		{
			ctor: '::',
			_0: A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'entries-header', ''),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
					{
						ctor: '::',
						_0: A2(_rtfeldman$elm_css$Css$margin2, _rtfeldman$elm_css$Css$zero, _rtfeldman$elm_css$Css$auto),
						_1: {
							ctor: '::',
							_0: _user$project$Entry_View$baseEntryStyling(
								{top: _user$project$Entry_Data$Broken, bottom: _user$project$Entry_Data$Joined}),
							_1: {
								ctor: '::',
								_0: A2(_rtfeldman$elm_css$Css$property, 'box-shadow', '\n                0px -6px 7px -3px rgba(175, 175, 175, 0.43),\n                -3px 0px 7px -2px rgba(175, 175, 175, 0.43),\n                3px 0px 7px -2px rgba(175, 175, 175, 0.43)\n                '),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$marginTop(
										_rtfeldman$elm_css$Css$px(10)),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$borderTopLeftRadius(
											_rtfeldman$elm_css$Css$px(3)),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$borderTopRightRadius(
												_rtfeldman$elm_css$Css$px(3)),
											_1: {
												ctor: '::',
												_0: A3(
													_rtfeldman$elm_css$Css$borderTop3,
													_rtfeldman$elm_css$Css$px(1),
													_rtfeldman$elm_css$Css$solid,
													_rtfeldman$elm_css$Css$hex('#fbfbfb')),
												_1: {
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$zIndex(
														_rtfeldman$elm_css$Css$int(6)),
													_1: {
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$height(
															_rtfeldman$elm_css$Css$px(40)),
														_1: {
															ctor: '::',
															_0: _rtfeldman$elm_css$Css$backgroundColor(
																_rtfeldman$elm_css$Css$hex('#f5f5f5')),
															_1: {
																ctor: '::',
																_0: _rtfeldman$elm_css$Css$displayFlex,
																_1: {
																	ctor: '::',
																	_0: _rtfeldman$elm_css$Css$justifyContent(_rtfeldman$elm_css$Css$center),
																	_1: {
																		ctor: '::',
																		_0: _rtfeldman$elm_css$Css$alignItems(_rtfeldman$elm_css$Css$center),
																		_1: {
																			ctor: '::',
																			_0: _rtfeldman$elm_css$Css$width(
																				_rtfeldman$elm_css$Css$pct(100)),
																			_1: {
																				ctor: '::',
																				_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$relative),
																				_1: {ctor: '[]'}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_rtfeldman$elm_css$Html_Styled$h1,
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
						{
							ctor: '::',
							_0: A2(_rtfeldman$elm_css$Css$property, 'font-family', 'monospace'),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$fontWeight(
									_rtfeldman$elm_css$Css$int(200)),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Html_Styled$text('Colbyn\'s Résumé'),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};

var _user$project$Entries_Footer$view = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'entries-footer', ''),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
					{
						ctor: '::',
						_0: A2(_rtfeldman$elm_css$Css$margin2, _rtfeldman$elm_css$Css$zero, _rtfeldman$elm_css$Css$auto),
						_1: {
							ctor: '::',
							_0: _user$project$Entry_View$baseEntryStyling(
								{top: _user$project$Entry_Data$Joined, bottom: _user$project$Entry_Data$Broken}),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$marginBottom(
									_rtfeldman$elm_css$Css$px(10)),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$borderBottomLeftRadius(
										_rtfeldman$elm_css$Css$px(3)),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$borderBottomRightRadius(
											_rtfeldman$elm_css$Css$px(3)),
										_1: {
											ctor: '::',
											_0: A3(
												_rtfeldman$elm_css$Css$borderBottom3,
												_rtfeldman$elm_css$Css$px(1),
												_rtfeldman$elm_css$Css$solid,
												_rtfeldman$elm_css$Css$hex('#fbfbfb')),
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$zIndex(
													_rtfeldman$elm_css$Css$int(6)),
												_1: {
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$height(
														_rtfeldman$elm_css$Css$px(40)),
													_1: {
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$backgroundColor(
															_rtfeldman$elm_css$Css$hex('#f5f5f5')),
														_1: {
															ctor: '::',
															_0: _rtfeldman$elm_css$Css$width(
																_rtfeldman$elm_css$Css$pct(100)),
															_1: {
																ctor: '::',
																_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$relative),
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		},
		{ctor: '[]'});
};

var _user$project$Entries_Group$atEnd = function (entry) {
	var _p0 = function (_) {
		return _.bottom;
	}(entry);
	if (_p0.ctor === 'Broken') {
		return true;
	} else {
		return false;
	}
};
var _user$project$Entries_Group$gather = function (xs) {
	var _p1 = xs;
	if (_p1.ctor === '[]') {
		return {
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		};
	} else {
		var _p4 = _p1._1;
		var _p3 = _p1._0;
		if (_user$project$Entries_Group$atEnd(_p3)) {
			return {
				ctor: '_Tuple2',
				_0: {
					ctor: '::',
					_0: _p3,
					_1: {ctor: '[]'}
				},
				_1: _p4
			};
		} else {
			var _p2 = _user$project$Entries_Group$gather(_p4);
			var rest = _p2._0;
			var es1 = _p2._1;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p3, _1: rest},
				_1: es1
			};
		}
	}
};
var _user$project$Entries_Group$groupJoinedEntries = function (xs) {
	var _p5 = xs;
	if (_p5.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p9 = _p5._1;
		var _p8 = _p5._0;
		var _p6 = function (_) {
			return _.bottom;
		}(_p8);
		if (_p6.ctor === 'Broken') {
			return {
				ctor: '::',
				_0: {
					ctor: '::',
					_0: _p8,
					_1: {ctor: '[]'}
				},
				_1: _user$project$Entries_Group$groupJoinedEntries(_p9)
			};
		} else {
			var _p7 = _user$project$Entries_Group$gather(_p9);
			var rest = _p7._0;
			var es1 = _p7._1;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: _p8, _1: rest},
				_1: _user$project$Entries_Group$groupJoinedEntries(es1)
			};
		}
	}
};
var _user$project$Entries_Group$groupBody = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'group-body', ''),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$displayFlex,
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$flexDirection(_rtfeldman$elm_css$Css$column),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$width(
									_rtfeldman$elm_css$Css$pct(100)),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$paddingTop(
										_rtfeldman$elm_css$Css$px(48)),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$width(
											_rtfeldman$elm_css$Css$pct(100)),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$firstChild(
												{
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$paddingTop(_rtfeldman$elm_css$Css$zero),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		},
		A2(_elm_lang$core$List$map, _user$project$Entry_View$view, model));
};
var _user$project$Entries_Group$entryGroup = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'entry-group', ''),
			_1: {ctor: '[]'}
		},
		A2(
			_elm_lang$core$List$map,
			_user$project$Entries_Group$groupBody,
			_user$project$Entries_Group$groupJoinedEntries(
				function (_) {
					return _.entries;
				}(model))));
};

var _user$project$Entries_View$contents = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$displayFlex,
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$flexDirection(_rtfeldman$elm_css$Css$column),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$width(
								_rtfeldman$elm_css$Css$pct(98)),
							_1: {
								ctor: '::',
								_0: A2(_rtfeldman$elm_css$Css$margin2, _rtfeldman$elm_css$Css$zero, _rtfeldman$elm_css$Css$auto),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$width(
										_rtfeldman$elm_css$Css$pct(98)),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$Entries_Header$view(model),
			_1: {
				ctor: '::',
				_0: _user$project$Entries_Group$entryGroup(model),
				_1: {
					ctor: '::',
					_0: _user$project$Entries_Footer$view(model),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Entries_View$body = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$displayFlex,
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$flexDirection(_rtfeldman$elm_css$Css$column),
						_1: {ctor: '[]'}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$Entries_View$contents(model),
			_1: {ctor: '[]'}
		});
};
var _user$project$Entries_View$view = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'entries-view', ''),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$width(
							_rtfeldman$elm_css$Css$pct(100)),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$height(
								_rtfeldman$elm_css$Css$pct(100)),
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _user$project$Entries_View$body(model),
			_1: {ctor: '[]'}
		});
};

var _user$project$UI_Typography$listItemBase = _rtfeldman$elm_css$Css$batch(
	{
		ctor: '::',
		_0: _rtfeldman$elm_css$Css$listStyle(_rtfeldman$elm_css$Css$disc),
		_1: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$listStyleType(_rtfeldman$elm_css$Css$disc),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$color(
					_rtfeldman$elm_css$Css$hex('#6d6d6d')),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$UI_Typography$liStyleUpdate = function (xs) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		xs,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$padding(_rtfeldman$elm_css$Css$zero),
			_1: {ctor: '[]'}
		});
};
var _user$project$UI_Typography$headerBase = _rtfeldman$elm_css$Css$batch(
	{
		ctor: '::',
		_0: A2(_rtfeldman$elm_css$Css$property, 'font-family', 'Source Sans Pro'),
		_1: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$color(
				_rtfeldman$elm_css$Css$hex('#808080')),
			_1: {ctor: '[]'}
		}
	});
var _user$project$UI_Typography$lang2String = function (lang) {
	var _p0 = lang;
	if (_p0.ctor === 'Haskell') {
		return 'haskell';
	} else {
		return 'elm';
	}
};
var _user$project$UI_Typography$codeRaw = F2(
	function (lang, body) {
		return _rtfeldman$elm_css$Html_Styled$fromUnstyled(
			A2(
				_evancz$elm_markdown$Markdown$toHtml,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('nodecors'),
					_1: {ctor: '[]'}
				},
				A2(
					_elm_lang$core$String$join,
					'\n',
					{
						ctor: '::',
						_0: '```',
						_1: {
							ctor: '::',
							_0: body,
							_1: {
								ctor: '::',
								_0: '```',
								_1: {ctor: '[]'}
							}
						}
					})));
	});
var _user$project$UI_Typography$renderElement = function (e) {
	var _p1 = e;
	switch (_p1.ctor) {
		case 'Display':
			switch (_p1._0.ctor) {
				case 'H1':
					return A2(
						_rtfeldman$elm_css$Html_Styled$h1,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._1),
							_1: {ctor: '[]'}
						},
						A2(_elm_lang$core$List$map, _user$project$UI_Typography$renderElement, _p1._2));
				case 'H2':
					return A2(
						_rtfeldman$elm_css$Html_Styled$h2,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._1),
							_1: {ctor: '[]'}
						},
						A2(_elm_lang$core$List$map, _user$project$UI_Typography$renderElement, _p1._2));
				case 'H3':
					return A2(
						_rtfeldman$elm_css$Html_Styled$h3,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._1),
							_1: {ctor: '[]'}
						},
						A2(_elm_lang$core$List$map, _user$project$UI_Typography$renderElement, _p1._2));
				case 'H4':
					return A2(
						_rtfeldman$elm_css$Html_Styled$h4,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._1),
							_1: {ctor: '[]'}
						},
						A2(_elm_lang$core$List$map, _user$project$UI_Typography$renderElement, _p1._2));
				case 'P':
					return A2(
						_rtfeldman$elm_css$Html_Styled$p,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._1),
							_1: {ctor: '[]'}
						},
						A2(_elm_lang$core$List$map, _user$project$UI_Typography$renderElement, _p1._2));
				case 'UL':
					return A2(
						_rtfeldman$elm_css$Html_Styled$ul,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._1),
							_1: {ctor: '[]'}
						},
						A2(_elm_lang$core$List$map, _user$project$UI_Typography$renderElement, _p1._2));
				case 'LI':
					return A2(
						_rtfeldman$elm_css$Html_Styled$li,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._1),
							_1: {ctor: '[]'}
						},
						A2(_elm_lang$core$List$map, _user$project$UI_Typography$renderElement, _p1._2));
				case 'Blockquote':
					return A2(
						_rtfeldman$elm_css$Html_Styled$blockquote,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._1),
							_1: {ctor: '[]'}
						},
						A2(_elm_lang$core$List$map, _user$project$UI_Typography$renderElement, _p1._2));
				case 'Sup':
					return A2(
						_rtfeldman$elm_css$Html_Styled$sup,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._1),
							_1: {ctor: '[]'}
						},
						A2(_elm_lang$core$List$map, _user$project$UI_Typography$renderElement, _p1._2));
				case 'Sub':
					return A2(
						_rtfeldman$elm_css$Html_Styled$sub,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._1),
							_1: {ctor: '[]'}
						},
						A2(_elm_lang$core$List$map, _user$project$UI_Typography$renderElement, _p1._2));
				case 'A':
					return A2(
						_rtfeldman$elm_css$Html_Styled$a,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._1),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Html_Styled_Attributes$href(_p1._0._0),
								_1: {ctor: '[]'}
							}
						},
						A2(_elm_lang$core$List$map, _user$project$UI_Typography$renderElement, _p1._2));
				case 'Img':
					return A2(
						_rtfeldman$elm_css$Html_Styled$img,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._1),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Html_Styled_Attributes$src(_p1._0._0),
								_1: {ctor: '[]'}
							}
						},
						A2(_elm_lang$core$List$map, _user$project$UI_Typography$renderElement, _p1._2));
				case 'Badge':
					return A2(
						_rtfeldman$elm_css$Html_Styled$span,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._1),
							_1: {ctor: '[]'}
						},
						A2(_elm_lang$core$List$map, _user$project$UI_Typography$renderElement, _p1._2));
				default:
					return A2(
						_rtfeldman$elm_css$Html_Styled$span,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._1),
							_1: {ctor: '[]'}
						},
						A2(_elm_lang$core$List$map, _user$project$UI_Typography$renderElement, _p1._2));
			}
		case 'Text':
			return _rtfeldman$elm_css$Html_Styled$text(_p1._0);
		case 'Code':
			return A2(
				_rtfeldman$elm_css$Html_Styled$div,
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._2),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_user$project$UI_Typography$codeRaw,
						_user$project$UI_Typography$lang2String(_p1._1),
						_p1._3),
					_1: {ctor: '[]'}
				});
		default:
			switch (_p1._0.ctor) {
				case 'Indent':
					return A2(
						_rtfeldman$elm_css$Html_Styled$div,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._1),
							_1: {ctor: '[]'}
						},
						A2(_elm_lang$core$List$map, _user$project$UI_Typography$renderElement, _p1._2));
				case 'Section':
					return A2(
						_rtfeldman$elm_css$Html_Styled$section,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._1),
							_1: {ctor: '[]'}
						},
						A2(_elm_lang$core$List$map, _user$project$UI_Typography$renderElement, _p1._2));
				default:
					return A2(
						_rtfeldman$elm_css$Html_Styled$div,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(_p1._1),
							_1: {ctor: '[]'}
						},
						A2(_elm_lang$core$List$map, _user$project$UI_Typography$renderElement, _p1._2));
			}
	}
};
var _user$project$UI_Typography$fontBase = _rtfeldman$elm_css$Css$batch(
	{
		ctor: '::',
		_0: A2(_rtfeldman$elm_css$Css$property, 'font-family', 'Source Sans Pro'),
		_1: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$color(
				_rtfeldman$elm_css$Css$hex('#5a5a5a')),
			_1: {ctor: '[]'}
		}
	});
var _user$project$UI_Typography$isOfType = F2(
	function (dt, e) {
		var _p2 = {ctor: '_Tuple2', _0: dt, _1: e};
		_v2_3:
		do {
			if (_p2.ctor === '_Tuple2') {
				switch (_p2._0.ctor) {
					case 'DisplayType':
						if (_p2._1.ctor === 'Display') {
							return _elm_lang$core$Native_Utils.eq(_p2._0._0, _p2._1._0);
						} else {
							break _v2_3;
						}
					case 'CodeType':
						if (_p2._1.ctor === 'Code') {
							return true;
						} else {
							break _v2_3;
						}
					case 'TextType':
						if (_p2._1.ctor === 'Text') {
							return true;
						} else {
							break _v2_3;
						}
					default:
						break _v2_3;
				}
			} else {
				break _v2_3;
			}
		} while(false);
		return false;
	});
var _user$project$UI_Typography$invertIter = F2(
	function (ty, ss) {
		var $default = {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$color(
				_rtfeldman$elm_css$Css$hex('#dadada')),
			_1: {ctor: '[]'}
		};
		var header = {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$color(
				_rtfeldman$elm_css$Css$hex('#fff')),
			_1: {ctor: '[]'}
		};
		var _p3 = ty;
		_v3_11:
		do {
			if (_p3.ctor === 'DisplayType') {
				switch (_p3._0.ctor) {
					case 'H1':
						return A2(_elm_lang$core$Basics_ops['++'], ss, header);
					case 'H2':
						return A2(_elm_lang$core$Basics_ops['++'], ss, header);
					case 'H3':
						return A2(_elm_lang$core$Basics_ops['++'], ss, header);
					case 'H4':
						return A2(_elm_lang$core$Basics_ops['++'], ss, header);
					case 'P':
						return A2(_elm_lang$core$Basics_ops['++'], ss, $default);
					case 'UL':
						return A2(_elm_lang$core$Basics_ops['++'], ss, $default);
					case 'LI':
						return A2(_elm_lang$core$Basics_ops['++'], ss, $default);
					case 'Blockquote':
						return A2(_elm_lang$core$Basics_ops['++'], ss, $default);
					case 'Sup':
						return A2(_elm_lang$core$Basics_ops['++'], ss, $default);
					case 'Sub':
						return A2(_elm_lang$core$Basics_ops['++'], ss, $default);
					case 'A':
						return A2(_elm_lang$core$Basics_ops['++'], ss, $default);
					default:
						break _v3_11;
				}
			} else {
				break _v3_11;
			}
		} while(false);
		return A2(_elm_lang$core$Basics_ops['++'], ss, $default);
	});
var _user$project$UI_Typography$Text = function (a) {
	return {ctor: 'Text', _0: a};
};
var _user$project$UI_Typography$text = function (txt) {
	return _user$project$UI_Typography$Text(txt);
};
var _user$project$UI_Typography$Code = F4(
	function (a, b, c, d) {
		return {ctor: 'Code', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$UI_Typography$Layout = F3(
	function (a, b, c) {
		return {ctor: 'Layout', _0: a, _1: b, _2: c};
	});
var _user$project$UI_Typography$Display = F3(
	function (a, b, c) {
		return {ctor: 'Display', _0: a, _1: b, _2: c};
	});
var _user$project$UI_Typography$updateAttrs = F2(
	function (f, element) {
		var _p4 = element;
		switch (_p4.ctor) {
			case 'Text':
				return _user$project$UI_Typography$Text(_p4._0);
			case 'Code':
				return A4(_user$project$UI_Typography$Code, _p4._0, _p4._1, _p4._2, _p4._3);
			case 'Layout':
				return A3(
					_user$project$UI_Typography$Layout,
					_p4._0,
					f(_p4._1),
					_p4._2);
			default:
				return A3(
					_user$project$UI_Typography$Display,
					_p4._0,
					f(_p4._1),
					_p4._2);
		}
	});
var _user$project$UI_Typography$updateAttrsIf = F3(
	function (f, pred, e) {
		return pred(e) ? A2(_user$project$UI_Typography$updateAttrs, f, e) : e;
	});
var _user$project$UI_Typography$updateAttrsFor = F3(
	function (f, pred, xs) {
		var _p5 = xs;
		if (_p5.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p7 = _p5._1;
			var _p6 = _p5._0;
			return pred(_p6) ? {
				ctor: '::',
				_0: A2(_user$project$UI_Typography$updateAttrs, f, _p6),
				_1: A3(_user$project$UI_Typography$updateAttrsFor, f, pred, _p7)
			} : {
				ctor: '::',
				_0: _p6,
				_1: A3(_user$project$UI_Typography$updateAttrsFor, f, pred, _p7)
			};
		}
	});
var _user$project$UI_Typography$appendStyles = function (ss) {
	return _user$project$UI_Typography$updateAttrs(
		function (xs) {
			return A2(_elm_lang$core$Basics_ops['++'], xs, ss);
		});
};
var _user$project$UI_Typography$indent = function () {
	var styling = {
		ctor: '::',
		_0: _rtfeldman$elm_css$Css$paddingLeft(
			_rtfeldman$elm_css$Css$px(42)),
		_1: {ctor: '[]'}
	};
	return _user$project$UI_Typography$updateAttrs(
		function (ss) {
			return A2(_elm_lang$core$Basics_ops['++'], ss, styling);
		});
}();
var _user$project$UI_Typography$Span = {ctor: 'Span'};
var _user$project$UI_Typography$span = function (txt) {
	return A3(
		_user$project$UI_Typography$Display,
		_user$project$UI_Typography$Span,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$fontSize(_rtfeldman$elm_css$Css$inherit),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$color(_rtfeldman$elm_css$Css$inherit),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _user$project$UI_Typography$text(txt),
			_1: {ctor: '[]'}
		});
};
var _user$project$UI_Typography$Badge = {ctor: 'Badge'};
var _user$project$UI_Typography$badge = function (txt) {
	return A3(
		_user$project$UI_Typography$Display,
		_user$project$UI_Typography$Badge,
		{
			ctor: '::',
			_0: _user$project$UI_Typography$fontBase,
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$padding(
					_rtfeldman$elm_css$Css$px(2)),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$fontSize(
						_rtfeldman$elm_css$Css$em(0.7)),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$height(
							_rtfeldman$elm_css$Css$pct(100)),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$marginLeft(
								_rtfeldman$elm_css$Css$px(8)),
							_1: {
								ctor: '::',
								_0: A4(
									_rtfeldman$elm_css$Css$padding4,
									_rtfeldman$elm_css$Css$px(1),
									_rtfeldman$elm_css$Css$px(3),
									_rtfeldman$elm_css$Css$px(1),
									_rtfeldman$elm_css$Css$px(3)),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$color(
										_rtfeldman$elm_css$Css$hex('#868686')),
									_1: {
										ctor: '::',
										_0: A3(
											_rtfeldman$elm_css$Css$border3,
											_rtfeldman$elm_css$Css$px(1),
											_rtfeldman$elm_css$Css$solid,
											_rtfeldman$elm_css$Css$hex('#fff')),
										_1: {
											ctor: '::',
											_0: A2(_rtfeldman$elm_css$Css$property, 'box-shadow', '0 0 1px 0px #a0a0a0'),
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$fontWeight(
													_rtfeldman$elm_css$Css$int(300)),
												_1: {
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$borderRadius(
														_rtfeldman$elm_css$Css$px(3)),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		{
			ctor: '::',
			_0: _user$project$UI_Typography$text(txt),
			_1: {ctor: '[]'}
		});
};
var _user$project$UI_Typography$Img = function (a) {
	return {ctor: 'Img', _0: a};
};
var _user$project$UI_Typography$img = function (link) {
	return A3(
		_user$project$UI_Typography$Display,
		_user$project$UI_Typography$Img(link),
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$width(
				_rtfeldman$elm_css$Css$pct(75)),
			_1: {
				ctor: '::',
				_0: A2(_rtfeldman$elm_css$Css$margin2, _rtfeldman$elm_css$Css$zero, _rtfeldman$elm_css$Css$auto),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$display(_rtfeldman$elm_css$Css$block),
					_1: {ctor: '[]'}
				}
			}
		},
		{ctor: '[]'});
};
var _user$project$UI_Typography$A = function (a) {
	return {ctor: 'A', _0: a};
};
var _user$project$UI_Typography$a_ = F2(
	function (src, es) {
		return A3(
			_user$project$UI_Typography$Display,
			_user$project$UI_Typography$A(src),
			{
				ctor: '::',
				_0: _user$project$UI_Typography$fontBase,
				_1: {ctor: '[]'}
			},
			es);
	});
var _user$project$UI_Typography$a = F2(
	function (src, txt) {
		return A2(
			_user$project$UI_Typography$a_,
			src,
			{
				ctor: '::',
				_0: _user$project$UI_Typography$text(txt),
				_1: {ctor: '[]'}
			});
	});
var _user$project$UI_Typography$Sub = {ctor: 'Sub'};
var _user$project$UI_Typography$sub = function (txt) {
	return A3(
		_user$project$UI_Typography$Display,
		_user$project$UI_Typography$Sub,
		{
			ctor: '::',
			_0: _user$project$UI_Typography$fontBase,
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$UI_Typography$text(txt),
			_1: {ctor: '[]'}
		});
};
var _user$project$UI_Typography$Sup = {ctor: 'Sup'};
var _user$project$UI_Typography$sup = function (txt) {
	return A3(
		_user$project$UI_Typography$Display,
		_user$project$UI_Typography$Sup,
		{
			ctor: '::',
			_0: _user$project$UI_Typography$fontBase,
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$UI_Typography$text(txt),
			_1: {ctor: '[]'}
		});
};
var _user$project$UI_Typography$Blockquote = {ctor: 'Blockquote'};
var _user$project$UI_Typography$blockquote_ = function (es) {
	return A3(
		_user$project$UI_Typography$Display,
		_user$project$UI_Typography$Blockquote,
		{
			ctor: '::',
			_0: _user$project$UI_Typography$fontBase,
			_1: {
				ctor: '::',
				_0: A3(
					_rtfeldman$elm_css$Css$borderLeft3,
					_rtfeldman$elm_css$Css$px(4),
					_rtfeldman$elm_css$Css$solid,
					_rtfeldman$elm_css$Css$hex('#c7c7c7')),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$paddingLeft(
						_rtfeldman$elm_css$Css$px(2)),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$marginLeft(
							_rtfeldman$elm_css$Css$px(2)),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$paddingLeft(
								_rtfeldman$elm_css$Css$px(4)),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$color(
									_rtfeldman$elm_css$Css$hex('#848484')),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		},
		es);
};
var _user$project$UI_Typography$blockquote = function (txt) {
	return _user$project$UI_Typography$blockquote_(
		{
			ctor: '::',
			_0: _user$project$UI_Typography$text(txt),
			_1: {ctor: '[]'}
		});
};
var _user$project$UI_Typography$LI = {ctor: 'LI'};
var _user$project$UI_Typography$li_ = function (xs) {
	return A3(
		_user$project$UI_Typography$Display,
		_user$project$UI_Typography$LI,
		{
			ctor: '::',
			_0: _user$project$UI_Typography$fontBase,
			_1: {
				ctor: '::',
				_0: _user$project$UI_Typography$listItemBase,
				_1: {ctor: '[]'}
			}
		},
		A2(
			_elm_lang$core$List$map,
			_user$project$UI_Typography$updateAttrs(_user$project$UI_Typography$liStyleUpdate),
			xs));
};
var _user$project$UI_Typography$li = function (txt) {
	return _user$project$UI_Typography$li_(
		{
			ctor: '::',
			_0: _user$project$UI_Typography$text(txt),
			_1: {ctor: '[]'}
		});
};
var _user$project$UI_Typography$UL = {ctor: 'UL'};
var _user$project$UI_Typography$ul = function (xs) {
	return A3(
		_user$project$UI_Typography$Display,
		_user$project$UI_Typography$UL,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$marginLeft(
				_rtfeldman$elm_css$Css$px(42)),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$padding(_rtfeldman$elm_css$Css$zero),
				_1: {ctor: '[]'}
			}
		},
		xs);
};
var _user$project$UI_Typography$liHeader_ = F2(
	function (root, children) {
		return A3(
			_user$project$UI_Typography$Display,
			_user$project$UI_Typography$LI,
			{
				ctor: '::',
				_0: _user$project$UI_Typography$fontBase,
				_1: {
					ctor: '::',
					_0: _user$project$UI_Typography$listItemBase,
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(_user$project$UI_Typography$updateAttrs, _user$project$UI_Typography$liStyleUpdate, root),
				_1: {
					ctor: '::',
					_0: _user$project$UI_Typography$ul(children),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$UI_Typography$liHeader = F2(
	function (txt, es) {
		return A2(
			_user$project$UI_Typography$liHeader_,
			_user$project$UI_Typography$text(txt),
			es);
	});
var _user$project$UI_Typography$P = {ctor: 'P'};
var _user$project$UI_Typography$p_ = function (es) {
	return A3(
		_user$project$UI_Typography$Display,
		_user$project$UI_Typography$P,
		{
			ctor: '::',
			_0: _user$project$UI_Typography$fontBase,
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$color(
					_rtfeldman$elm_css$Css$hex('#5a5a5a')),
				_1: {ctor: '[]'}
			}
		},
		es);
};
var _user$project$UI_Typography$p = function (txt) {
	return _user$project$UI_Typography$p_(
		{
			ctor: '::',
			_0: _user$project$UI_Typography$text(txt),
			_1: {ctor: '[]'}
		});
};
var _user$project$UI_Typography$H4 = {ctor: 'H4'};
var _user$project$UI_Typography$H3 = {ctor: 'H3'};
var _user$project$UI_Typography$H2 = {ctor: 'H2'};
var _user$project$UI_Typography$H1 = {ctor: 'H1'};
var _user$project$UI_Typography$Block = {ctor: 'Block'};
var _user$project$UI_Typography$codeBlock = F2(
	function (lang, txt) {
		return A4(
			_user$project$UI_Typography$Code,
			_user$project$UI_Typography$Block,
			lang,
			{ctor: '[]'},
			txt);
	});
var _user$project$UI_Typography$Inline = {ctor: 'Inline'};
var _user$project$UI_Typography$Wrapper = {ctor: 'Wrapper'};
var _user$project$UI_Typography$wrapper = F2(
	function (ss, xs) {
		return A3(_user$project$UI_Typography$Layout, _user$project$UI_Typography$Wrapper, ss, xs);
	});
var _user$project$UI_Typography$Section = {ctor: 'Section'};
var _user$project$UI_Typography$section = function (xs) {
	return A3(
		_user$project$UI_Typography$Layout,
		_user$project$UI_Typography$Section,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$marginBottom(
				_rtfeldman$elm_css$Css$px(8)),
			_1: {ctor: '[]'}
		},
		xs);
};
var _user$project$UI_Typography$subsection = function (xs) {
	return A3(
		_user$project$UI_Typography$Layout,
		_user$project$UI_Typography$Section,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$marginBottom(
				_rtfeldman$elm_css$Css$px(4)),
			_1: {ctor: '[]'}
		},
		xs);
};
var _user$project$UI_Typography$rootSection = function (xs) {
	return A3(
		_user$project$UI_Typography$Layout,
		_user$project$UI_Typography$Section,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$padding(
				_rtfeldman$elm_css$Css$px(10)),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_user$project$UI_Typography$wrapper,
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$maxWidth(
						_rtfeldman$elm_css$Css$px(860)),
					_1: {
						ctor: '::',
						_0: A2(_rtfeldman$elm_css$Css$margin2, _rtfeldman$elm_css$Css$zero, _rtfeldman$elm_css$Css$auto),
						_1: {ctor: '[]'}
					}
				},
				xs),
			_1: {ctor: '[]'}
		});
};
var _user$project$UI_Typography$Indent = {ctor: 'Indent'};
var _user$project$UI_Typography$Elm = {ctor: 'Elm'};
var _user$project$UI_Typography$Haskell = {ctor: 'Haskell'};
var _user$project$UI_Typography$LayoutType = function (a) {
	return {ctor: 'LayoutType', _0: a};
};
var _user$project$UI_Typography$DisplayType = function (a) {
	return {ctor: 'DisplayType', _0: a};
};
var _user$project$UI_Typography$isSup = _user$project$UI_Typography$isOfType(
	_user$project$UI_Typography$DisplayType(_user$project$UI_Typography$Sup));
var _user$project$UI_Typography$isSub = _user$project$UI_Typography$isOfType(
	_user$project$UI_Typography$DisplayType(_user$project$UI_Typography$Sub));
var _user$project$UI_Typography$h1Child = function (e) {
	var inlineExts = {
		ctor: '::',
		_0: _rtfeldman$elm_css$Css$fontSize(
			_rtfeldman$elm_css$Css$em(1.2)),
		_1: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$fontWeight(
				_rtfeldman$elm_css$Css$int(400)),
			_1: {ctor: '[]'}
		}
	};
	var ifSup = A2(
		_user$project$UI_Typography$updateAttrsIf,
		function (xs) {
			return A2(_elm_lang$core$Basics_ops['++'], xs, inlineExts);
		},
		_user$project$UI_Typography$isSup);
	var ifSub = A2(
		_user$project$UI_Typography$updateAttrsIf,
		function (xs) {
			return A2(_elm_lang$core$Basics_ops['++'], xs, inlineExts);
		},
		_user$project$UI_Typography$isSub);
	return ifSub(
		ifSup(
			A2(
				_user$project$UI_Typography$updateAttrs,
				function (ss) {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						ss,
						{
							ctor: '::',
							_0: _user$project$UI_Typography$headerBase,
							_1: {ctor: '[]'}
						});
				},
				e)));
};
var _user$project$UI_Typography$h1_ = function (es) {
	return A3(
		_user$project$UI_Typography$Display,
		_user$project$UI_Typography$H1,
		{
			ctor: '::',
			_0: _user$project$UI_Typography$fontBase,
			_1: {
				ctor: '::',
				_0: _user$project$UI_Typography$headerBase,
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$fontSize(
						_rtfeldman$elm_css$Css$em(1.8)),
					_1: {ctor: '[]'}
				}
			}
		},
		A2(_elm_lang$core$List$map, _user$project$UI_Typography$h1Child, es));
};
var _user$project$UI_Typography$h1 = function (txt) {
	return _user$project$UI_Typography$h1_(
		{
			ctor: '::',
			_0: _user$project$UI_Typography$text(txt),
			_1: {ctor: '[]'}
		});
};
var _user$project$UI_Typography$h2Child = function (e) {
	var inlineExts = {
		ctor: '::',
		_0: _rtfeldman$elm_css$Css$fontSize(
			_rtfeldman$elm_css$Css$em(0.9)),
		_1: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$fontWeight(
				_rtfeldman$elm_css$Css$int(400)),
			_1: {ctor: '[]'}
		}
	};
	var ifSup = A2(
		_user$project$UI_Typography$updateAttrsIf,
		function (xs) {
			return A2(_elm_lang$core$Basics_ops['++'], xs, inlineExts);
		},
		_user$project$UI_Typography$isSup);
	var ifSub = A2(
		_user$project$UI_Typography$updateAttrsIf,
		function (xs) {
			return A2(_elm_lang$core$Basics_ops['++'], xs, inlineExts);
		},
		_user$project$UI_Typography$isSub);
	return ifSub(
		ifSup(
			A2(
				_user$project$UI_Typography$updateAttrs,
				function (ss) {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						ss,
						{
							ctor: '::',
							_0: _user$project$UI_Typography$headerBase,
							_1: {ctor: '[]'}
						});
				},
				e)));
};
var _user$project$UI_Typography$h2_ = function (es) {
	return A3(
		_user$project$UI_Typography$Display,
		_user$project$UI_Typography$H2,
		{
			ctor: '::',
			_0: _user$project$UI_Typography$fontBase,
			_1: {
				ctor: '::',
				_0: _user$project$UI_Typography$headerBase,
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$fontSize(
						_rtfeldman$elm_css$Css$em(1.4)),
					_1: {ctor: '[]'}
				}
			}
		},
		A2(_elm_lang$core$List$map, _user$project$UI_Typography$h2Child, es));
};
var _user$project$UI_Typography$h2 = function (txt) {
	return _user$project$UI_Typography$h2_(
		{
			ctor: '::',
			_0: _user$project$UI_Typography$text(txt),
			_1: {ctor: '[]'}
		});
};
var _user$project$UI_Typography$h3Child = function (e) {
	var inlineExts = {
		ctor: '::',
		_0: _rtfeldman$elm_css$Css$fontSize(
			_rtfeldman$elm_css$Css$em(0.8)),
		_1: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$fontWeight(
				_rtfeldman$elm_css$Css$int(400)),
			_1: {ctor: '[]'}
		}
	};
	var ifSup = A2(
		_user$project$UI_Typography$updateAttrsIf,
		function (xs) {
			return A2(_elm_lang$core$Basics_ops['++'], xs, inlineExts);
		},
		_user$project$UI_Typography$isSup);
	var ifSub = A2(
		_user$project$UI_Typography$updateAttrsIf,
		function (xs) {
			return A2(_elm_lang$core$Basics_ops['++'], xs, inlineExts);
		},
		_user$project$UI_Typography$isSub);
	return ifSub(
		ifSup(
			A2(
				_user$project$UI_Typography$updateAttrs,
				function (ss) {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						ss,
						{
							ctor: '::',
							_0: _user$project$UI_Typography$headerBase,
							_1: {ctor: '[]'}
						});
				},
				e)));
};
var _user$project$UI_Typography$h3_ = function (es) {
	return A3(
		_user$project$UI_Typography$Display,
		_user$project$UI_Typography$H3,
		{
			ctor: '::',
			_0: _user$project$UI_Typography$fontBase,
			_1: {
				ctor: '::',
				_0: _user$project$UI_Typography$headerBase,
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$fontSize(
						_rtfeldman$elm_css$Css$em(1.2)),
					_1: {ctor: '[]'}
				}
			}
		},
		A2(_elm_lang$core$List$map, _user$project$UI_Typography$h3Child, es));
};
var _user$project$UI_Typography$h3 = function (txt) {
	return _user$project$UI_Typography$h3_(
		{
			ctor: '::',
			_0: _user$project$UI_Typography$text(txt),
			_1: {ctor: '[]'}
		});
};
var _user$project$UI_Typography$h4Child = function (e) {
	var inlineExts = {
		ctor: '::',
		_0: _rtfeldman$elm_css$Css$fontSize(
			_rtfeldman$elm_css$Css$em(0.7)),
		_1: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$fontWeight(
				_rtfeldman$elm_css$Css$int(400)),
			_1: {ctor: '[]'}
		}
	};
	var ifSup = A2(
		_user$project$UI_Typography$updateAttrsIf,
		function (xs) {
			return A2(_elm_lang$core$Basics_ops['++'], xs, inlineExts);
		},
		_user$project$UI_Typography$isSup);
	var ifSub = A2(
		_user$project$UI_Typography$updateAttrsIf,
		function (xs) {
			return A2(_elm_lang$core$Basics_ops['++'], xs, inlineExts);
		},
		_user$project$UI_Typography$isSub);
	return ifSub(
		ifSup(
			A2(
				_user$project$UI_Typography$updateAttrs,
				function (ss) {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						ss,
						{
							ctor: '::',
							_0: _user$project$UI_Typography$headerBase,
							_1: {ctor: '[]'}
						});
				},
				e)));
};
var _user$project$UI_Typography$h4_ = function (es) {
	return A3(
		_user$project$UI_Typography$Display,
		_user$project$UI_Typography$H4,
		{
			ctor: '::',
			_0: _user$project$UI_Typography$fontBase,
			_1: {
				ctor: '::',
				_0: _user$project$UI_Typography$headerBase,
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$fontSize(
						_rtfeldman$elm_css$Css$em(1.8)),
					_1: {ctor: '[]'}
				}
			}
		},
		A2(_elm_lang$core$List$map, _user$project$UI_Typography$h4Child, es));
};
var _user$project$UI_Typography$h4 = function (txt) {
	return _user$project$UI_Typography$h4_(
		{
			ctor: '::',
			_0: _user$project$UI_Typography$text(txt),
			_1: {ctor: '[]'}
		});
};
var _user$project$UI_Typography$CodeType = function (a) {
	return {ctor: 'CodeType', _0: a};
};
var _user$project$UI_Typography$updateAll = F2(
	function (f, e) {
		var _p8 = e;
		switch (_p8.ctor) {
			case 'Text':
				return _user$project$UI_Typography$Text(_p8._0);
			case 'Code':
				var _p9 = _p8._0;
				return A4(
					_user$project$UI_Typography$Code,
					_p9,
					_p8._1,
					A2(
						f,
						_user$project$UI_Typography$CodeType(_p9),
						_p8._2),
					_p8._3);
			case 'Layout':
				var _p10 = _p8._0;
				return A3(
					_user$project$UI_Typography$Layout,
					_p10,
					A2(
						f,
						_user$project$UI_Typography$LayoutType(_p10),
						_p8._1),
					A2(
						_elm_lang$core$List$map,
						_user$project$UI_Typography$updateAll(f),
						_p8._2));
			default:
				var _p11 = _p8._0;
				return A3(
					_user$project$UI_Typography$Display,
					_p11,
					A2(
						f,
						_user$project$UI_Typography$DisplayType(_p11),
						_p8._1),
					A2(
						_elm_lang$core$List$map,
						_user$project$UI_Typography$updateAll(f),
						_p8._2));
		}
	});
var _user$project$UI_Typography$invert = _user$project$UI_Typography$updateAll(_user$project$UI_Typography$invertIter);
var _user$project$UI_Typography$TextType = {ctor: 'TextType'};

var _user$project$Page_Projects$legend = A2(
	_user$project$UI_Typography$appendStyles,
	{
		ctor: '::',
		_0: _rtfeldman$elm_css$Css$marginTop(
			_rtfeldman$elm_css$Css$px(32)),
		_1: {ctor: '[]'}
	},
	_user$project$UI_Typography$section(
		{
			ctor: '::',
			_0: _user$project$UI_Typography$p('‡ If inclined to see, these are fairly presentable (something I quite enjoy doing). :)'),
			_1: {
				ctor: '::',
				_0: _user$project$UI_Typography$p('† These projects will be open sourced as a whole when reasonably complete (or factored out). Likewise, if inclined to see, these are fairly presentable. '),
				_1: {
					ctor: '::',
					_0: _user$project$UI_Typography$p_(
						{
							ctor: '::',
							_0: _user$project$UI_Typography$text('*(1) '),
							_1: {
								ctor: '::',
								_0: A2(_user$project$UI_Typography$a, 'https://github.com/SubSys/Compiler/tree/master/src/SLIR/HelmSyntax/Module/Core/Parser', 'https://github.com/SubSys/Compiler/tree/master/src/SLIR/HelmSyntax/Module/Core/Parser'),
								_1: {ctor: '[]'}
							}
						}),
					_1: {
						ctor: '::',
						_0: _user$project$UI_Typography$p_(
							{
								ctor: '::',
								_0: _user$project$UI_Typography$text('*(2) '),
								_1: {
									ctor: '::',
									_0: A2(_user$project$UI_Typography$a, 'https://github.com/SubSys/Compiler/tree/master/src/SLIR/HelmSyntax/Module/Core/TypeCheck', 'https://github.com/SubSys/Compiler/tree/master/src/SLIR/HelmSyntax/Module/Core/TypeCheck'),
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: _user$project$UI_Typography$p_(
								{
									ctor: '::',
									_0: _user$project$UI_Typography$text('*(3) '),
									_1: {
										ctor: '::',
										_0: A2(_user$project$UI_Typography$a, 'https://github.com/SubSys/Compiler/blob/master/src/CGIR/Rust/Dev/DryRun.hs', 'https://github.com/SubSys/Compiler/blob/master/src/CGIR/Rust/Dev/DryRun.hs'),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: _user$project$UI_Typography$p('Regarding *(3): The dry-run/development compilation pipelines expect to be invoked in ‘stack ghci’.'),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		}));
var _user$project$Page_Projects$macroExample = _elm_lang$core$String$trim('\n[Call.jsFFI|\n    appendChild :: Instance.Node -> Instance.Node -> IO Instance.Node\n    $r = Node.prototype.appendChild.call($1, $2);  \n|]\n');
var _user$project$Page_Projects$otherProjectsBody = A2(
	_user$project$UI_Typography$updateAttrs,
	function (ss) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			ss,
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$paddingLeft(
					_rtfeldman$elm_css$Css$px(22)),
				_1: {ctor: '[]'}
			});
	},
	_user$project$UI_Typography$ul(
		{
			ctor: '::',
			_0: _user$project$UI_Typography$li_(
				{
					ctor: '::',
					_0: _user$project$UI_Typography$text('A CLI tool simular to ‘cargo-web’ for ghcjs.'),
					_1: {
						ctor: '::',
						_0: _user$project$UI_Typography$sup('†'),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: _user$project$UI_Typography$li_(
					{
						ctor: '::',
						_0: _user$project$UI_Typography$text('A text editor compiled with ghcjs. So far all that works alright is my multi cursor implementation; since I just recently started this projects.'),
						_1: {
							ctor: '::',
							_0: _user$project$UI_Typography$sup('†'),
							_1: {ctor: '[]'}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_user$project$UI_Typography$liHeader_,
						_user$project$UI_Typography$p_(
							{
								ctor: '::',
								_0: _user$project$UI_Typography$text('A simple ghc/ghcjs macro that generates function stubs when compiled with ghc.'),
								_1: {
									ctor: '::',
									_0: _user$project$UI_Typography$sup('†'),
									_1: {ctor: '[]'}
								}
							}),
						{
							ctor: '::',
							_0: A2(
								_user$project$UI_Typography$updateAttrs,
								function (ss) {
									return A2(
										_elm_lang$core$Basics_ops['++'],
										ss,
										{
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$marginLeft(
												_rtfeldman$elm_css$Css$px(22)),
											_1: {ctor: '[]'}
										});
								},
								_user$project$UI_Typography$ul(
									{
										ctor: '::',
										_0: _user$project$UI_Typography$li('The elaborate, although this isn’t ideal, the purpose of the aforementioned macro is to declare JavaScript/ECMAScript FFI declarations that will compile with normal GHC. I.e. You declare your FFI declarations using the provided macros that will become regular JavaScript FFI declarations when compiled with GHCJS, and function declaration stubs when compiled with normal GHC.'),
										_1: {
											ctor: '::',
											_0: _user$project$UI_Typography$li('All it really does is not brake my beloved ghc based development tools.'),
											_1: {
												ctor: '::',
												_0: A2(
													_user$project$UI_Typography$liHeader,
													'E.g.',
													{
														ctor: '::',
														_0: A2(_user$project$UI_Typography$codeBlock, _user$project$UI_Typography$Haskell, _user$project$Page_Projects$macroExample),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										}
									})),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			}
		}));
var _user$project$Page_Projects$otherProjects = _user$project$UI_Typography$section(
	{
		ctor: '::',
		_0: _user$project$UI_Typography$h2_(
			{
				ctor: '::',
				_0: _user$project$UI_Typography$text('Other projects to ask about'),
				_1: {
					ctor: '::',
					_0: _user$project$UI_Typography$sup('‡'),
					_1: {ctor: '[]'}
				}
			}),
		_1: {
			ctor: '::',
			_0: _user$project$Page_Projects$otherProjectsBody,
			_1: {ctor: '[]'}
		}
	});
var _user$project$Page_Projects$helmProject = _user$project$UI_Typography$section(
	{
		ctor: '::',
		_0: _user$project$UI_Typography$h2_(
			{
				ctor: '::',
				_0: A2(_user$project$UI_Typography$a, 'https://github.com/SubSys/Compiler', 'The Helm Language (i.e. Compiler)'),
				_1: {
					ctor: '::',
					_0: _user$project$UI_Typography$sup('‡'),
					_1: {ctor: '[]'}
				}
			}),
		_1: {
			ctor: '::',
			_0: _user$project$UI_Typography$indent(
				_user$project$UI_Typography$subsection(
					{
						ctor: '::',
						_0: _user$project$UI_Typography$blockquote_(
							{
								ctor: '::',
								_0: A2(_user$project$UI_Typography$a, 'https://github.com/SubSys/Compiler', 'https://github.com/SubSys/Compiler'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: _user$project$UI_Typography$p('A rather long term project of mine. The overall aspiration is to create a simple medium for CPU/(GP)GPU computing; intended to serve as the ‘beginner friendly’ language for a video game engine focused on streaming, or rather, more commonly known as ‘cloud gaming’.'),
							_1: {ctor: '[]'}
						}
					})),
			_1: {
				ctor: '::',
				_0: _user$project$UI_Typography$indent(
					_user$project$UI_Typography$subsection(
						{
							ctor: '::',
							_0: _user$project$UI_Typography$h3('Notable Components:'),
							_1: {
								ctor: '::',
								_0: _user$project$UI_Typography$ul(
									{
										ctor: '::',
										_0: _user$project$UI_Typography$li_(
											{
												ctor: '::',
												_0: A2(
													_user$project$UI_Typography$a_,
													'https://github.com/SubSys/Compiler/tree/master/src/SLIR/HelmSyntax/Module/Core/Parser',
													{
														ctor: '::',
														_0: _user$project$UI_Typography$text('The Frontend Parser'),
														_1: {
															ctor: '::',
															_0: _user$project$UI_Typography$sup('*(1)'),
															_1: {ctor: '[]'}
														}
													}),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: _user$project$UI_Typography$li_(
												{
													ctor: '::',
													_0: A2(
														_user$project$UI_Typography$a_,
														'https://github.com/SubSys/Compiler/tree/master/src/SLIR/HelmSyntax/Module/Core/TypeCheck',
														{
															ctor: '::',
															_0: _user$project$UI_Typography$text('Type Inference/Type Checking'),
															_1: {
																ctor: '::',
																_0: _user$project$UI_Typography$sup('*(2)'),
																_1: {ctor: '[]'}
															}
														}),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: _user$project$UI_Typography$li_(
													{
														ctor: '::',
														_0: A2(
															_user$project$UI_Typography$a_,
															'https://github.com/SubSys/Compiler/blob/master/src/CGIR/Rust/Dev/DryRun.hs',
															{
																ctor: '::',
																_0: _user$project$UI_Typography$text('The rust code-gen'),
																_1: {
																	ctor: '::',
																	_0: _user$project$UI_Typography$sup('*(3)'),
																	_1: {ctor: '[]'}
																}
															}),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										}
									}),
								_1: {
									ctor: '::',
									_0: _user$project$UI_Typography$p('For more information regarding the compiler, the readme page should go much more in-depth on various details of interest (via the given link to the repository).'),
									_1: {ctor: '[]'}
								}
							}
						})),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$Page_Projects$projects = _user$project$UI_Typography$rootSection(
	{
		ctor: '::',
		_0: _user$project$UI_Typography$h1('Projects'),
		_1: {
			ctor: '::',
			_0: _user$project$UI_Typography$indent(
				_user$project$UI_Typography$section(
					{
						ctor: '::',
						_0: _user$project$Page_Projects$helmProject,
						_1: {
							ctor: '::',
							_0: _user$project$Page_Projects$otherProjects,
							_1: {
								ctor: '::',
								_0: _user$project$Page_Projects$legend,
								_1: {ctor: '[]'}
							}
						}
					})),
			_1: {ctor: '[]'}
		}
	});

var _user$project$Page_Employment$selfemployment = _user$project$UI_Typography$section(
	{
		ctor: '::',
		_0: _user$project$UI_Typography$h2('Self Employment'),
		_1: {
			ctor: '::',
			_0: _user$project$UI_Typography$blockquote('See the following section “Projects”.'),
			_1: {
				ctor: '::',
				_0: _user$project$UI_Typography$indent(
					_user$project$UI_Typography$subsection(
						{
							ctor: '::',
							_0: _user$project$UI_Typography$p('20-21 (current). todo...'),
							_1: {ctor: '[]'}
						})),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$Page_Employment$uplynk = _user$project$UI_Typography$section(
	{
		ctor: '::',
		_0: _user$project$UI_Typography$h2('Uplynk/Verizon Digital Media Services'),
		_1: {
			ctor: '::',
			_0: _user$project$UI_Typography$blockquote('Multimedia streaming backend for primarily broadcast providers (such as ABC, and ESPN).'),
			_1: {
				ctor: '::',
				_0: _user$project$UI_Typography$indent(
					_user$project$UI_Typography$subsection(
						{
							ctor: '::',
							_0: _user$project$UI_Typography$p('19-20, Jr. Developer.'),
							_1: {ctor: '[]'}
						})),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$Page_Employment$galileo = _user$project$UI_Typography$section(
	{
		ctor: '::',
		_0: _user$project$UI_Typography$h2('Galileo'),
		_1: {
			ctor: '::',
			_0: _user$project$UI_Typography$blockquote('Prepaid credit card processor.'),
			_1: {
				ctor: '::',
				_0: _user$project$UI_Typography$indent(
					_user$project$UI_Typography$subsection(
						{
							ctor: '::',
							_0: _user$project$UI_Typography$p('17-18, Data Center Tech.'),
							_1: {ctor: '[]'}
						})),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$Page_Employment$spaceMonkey = _user$project$UI_Typography$section(
	{
		ctor: '::',
		_0: _user$project$UI_Typography$h2('Space Monkey'),
		_1: {
			ctor: '::',
			_0: _user$project$UI_Typography$blockquote('Decentralized, p2p cloud storage.'),
			_1: {
				ctor: '::',
				_0: _user$project$UI_Typography$indent(
					_user$project$UI_Typography$subsection(
						{
							ctor: '::',
							_0: _user$project$UI_Typography$p('Began when I was 17. Brief summer internship, under my mentor Tom Metge.'),
							_1: {ctor: '[]'}
						})),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$Page_Employment$employment = _user$project$UI_Typography$rootSection(
	{
		ctor: '::',
		_0: _user$project$UI_Typography$h1('Employment'),
		_1: {
			ctor: '::',
			_0: _user$project$UI_Typography$indent(
				_user$project$UI_Typography$section(
					{
						ctor: '::',
						_0: _user$project$Page_Employment$spaceMonkey,
						_1: {
							ctor: '::',
							_0: _user$project$Page_Employment$galileo,
							_1: {
								ctor: '::',
								_0: _user$project$Page_Employment$uplynk,
								_1: {
									ctor: '::',
									_0: _user$project$Page_Employment$selfemployment,
									_1: {ctor: '[]'}
								}
							}
						}
					})),
			_1: {ctor: '[]'}
		}
	});

var _user$project$Page_Skillset$adaptation = _user$project$UI_Typography$subsection(
	{
		ctor: '::',
		_0: _user$project$UI_Typography$h2('Adaptation'),
		_1: {
			ctor: '::',
			_0: _user$project$UI_Typography$p('Although it’s been quite a while, I’m certainly adaptable with regards to relearning python and various other high level scripting languages.'),
			_1: {ctor: '[]'}
		}
	});
var _user$project$Page_Skillset$unix = _user$project$UI_Typography$subsection(
	{
		ctor: '::',
		_0: _user$project$UI_Typography$h2('Unix'),
		_1: {
			ctor: '::',
			_0: _user$project$UI_Typography$p('General unix concepts; though mostly practical knowledge such as the command line/cli tools, and shell scripting.'),
			_1: {ctor: '[]'}
		}
	});
var _user$project$Page_Skillset$webTech = _user$project$UI_Typography$subsection(
	{
		ctor: '::',
		_0: _user$project$UI_Typography$h2('Web Technologies'),
		_1: {
			ctor: '::',
			_0: _user$project$UI_Typography$blockquote('To name a few.'),
			_1: {
				ctor: '::',
				_0: _user$project$UI_Typography$ul(
					{
						ctor: '::',
						_0: _user$project$UI_Typography$li_(
							{
								ctor: '::',
								_0: _user$project$UI_Typography$text('XML/HTML(5)'),
								_1: {
									ctor: '::',
									_0: _user$project$UI_Typography$badge('proficient'),
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: _user$project$UI_Typography$li_(
								{
									ctor: '::',
									_0: _user$project$UI_Typography$text('CSS(3)'),
									_1: {
										ctor: '::',
										_0: _user$project$UI_Typography$badge('proficient'),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: _user$project$UI_Typography$li_(
									{
										ctor: '::',
										_0: _user$project$UI_Typography$text('SVG'),
										_1: {
											ctor: '::',
											_0: _user$project$UI_Typography$badge('proficient'),
											_1: {ctor: '[]'}
										}
									}),
								_1: {
									ctor: '::',
									_0: _user$project$UI_Typography$li_(
										{
											ctor: '::',
											_0: _user$project$UI_Typography$text('JavaScript(ECMAScript)'),
											_1: {
												ctor: '::',
												_0: _user$project$UI_Typography$badge('proficient'),
												_1: {ctor: '[]'}
											}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_user$project$UI_Typography$liHeader,
											'Browser APIs',
											{
												ctor: '::',
												_0: _user$project$UI_Typography$li('HTML5 (various interfaces)'),
												_1: {
													ctor: '::',
													_0: _user$project$UI_Typography$li('DOM level 3, and 4 (various interfaces).'),
													_1: {
														ctor: '::',
														_0: _user$project$UI_Typography$li('A various multitude of extensions to the aforementioned interfaces.'),
														_1: {ctor: '[]'}
													}
												}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_user$project$UI_Typography$liHeader,
												'WebIDL (sadly)',
												{
													ctor: '::',
													_0: _user$project$UI_Typography$li('A rather contrived, ad-hock sudo language that had better typing information for FFI bindings from a typed language (with regards to Mozilla\'s own API references).'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$Page_Skillset$rust = _user$project$UI_Typography$subsection(
	{
		ctor: '::',
		_0: _user$project$UI_Typography$h2_(
			{
				ctor: '::',
				_0: _user$project$UI_Typography$text('Rust'),
				_1: {
					ctor: '::',
					_0: _user$project$UI_Typography$badge('beginner'),
					_1: {ctor: '[]'}
				}
			}),
		_1: {
			ctor: '::',
			_0: _user$project$UI_Typography$p('I’m comfortable with the language, likewise I quite enjoy it’s type system. Not so with popular apis and the like, so i’m most certainly a beginner in this regard.'),
			_1: {ctor: '[]'}
		}
	});
var _user$project$Page_Skillset$functional = _user$project$UI_Typography$subsection(
	{
		ctor: '::',
		_0: _user$project$UI_Typography$h2('Functional Programing'),
		_1: {
			ctor: '::',
			_0: _user$project$UI_Typography$blockquote('If it’s not obvious already ;)'),
			_1: {
				ctor: '::',
				_0: _user$project$UI_Typography$ul(
					{
						ctor: '::',
						_0: _user$project$UI_Typography$li_(
							{
								ctor: '::',
								_0: _user$project$UI_Typography$text('Haskell'),
								_1: {
									ctor: '::',
									_0: _user$project$UI_Typography$badge('expert beginner'),
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: _user$project$UI_Typography$li_(
								{
									ctor: '::',
									_0: _user$project$UI_Typography$text('Elm'),
									_1: {
										ctor: '::',
										_0: _user$project$UI_Typography$badge('proficient'),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: _user$project$UI_Typography$li_(
									{
										ctor: '::',
										_0: _user$project$UI_Typography$text('PureScript'),
										_1: {
											ctor: '::',
											_0: _user$project$UI_Typography$badge('beginner'),
											_1: {ctor: '[]'}
										}
									}),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$Page_Skillset$skillset = _user$project$UI_Typography$rootSection(
	{
		ctor: '::',
		_0: _user$project$UI_Typography$h1('Skillset'),
		_1: {
			ctor: '::',
			_0: _user$project$UI_Typography$indent(
				_user$project$UI_Typography$section(
					{
						ctor: '::',
						_0: _user$project$Page_Skillset$functional,
						_1: {
							ctor: '::',
							_0: _user$project$Page_Skillset$webTech,
							_1: {
								ctor: '::',
								_0: _user$project$Page_Skillset$rust,
								_1: {
									ctor: '::',
									_0: _user$project$Page_Skillset$unix,
									_1: {
										ctor: '::',
										_0: _user$project$Page_Skillset$adaptation,
										_1: {ctor: '[]'}
									}
								}
							}
						}
					})),
			_1: {ctor: '[]'}
		}
	});

var _user$project$Page$designStyling = {
	ctor: '::',
	_0: _rtfeldman$elm_css$Css$backgroundColor(
		_rtfeldman$elm_css$Css$hex('#676767')),
	_1: {ctor: '[]'}
};
var _user$project$Page$design = A2(
	_user$project$UI_Typography$appendStyles,
	_user$project$Page$designStyling,
	_user$project$UI_Typography$invert(
		_user$project$UI_Typography$rootSection(
			{
				ctor: '::',
				_0: _user$project$UI_Typography$h1_(
					{
						ctor: '::',
						_0: _user$project$UI_Typography$text('Design'),
						_1: {
							ctor: '::',
							_0: _user$project$UI_Typography$badge('beginner'),
							_1: {ctor: '[]'}
						}
					}),
				_1: {
					ctor: '::',
					_0: _user$project$UI_Typography$p('Mostly limited to UI interfaces.'),
					_1: {
						ctor: '::',
						_0: _user$project$UI_Typography$indent(
							_user$project$UI_Typography$subsection(
								{
									ctor: '::',
									_0: _user$project$UI_Typography$h2('Example:'),
									_1: {
										ctor: '::',
										_0: _user$project$UI_Typography$blockquote('layout prototype I’m working on for a project'),
										_1: {ctor: '[]'}
									}
								})),
						_1: {
							ctor: '::',
							_0: _user$project$UI_Typography$img('assets/preview/notebook/layout.png'),
							_1: {
								ctor: '::',
								_0: A2(
									_user$project$UI_Typography$appendStyles,
									{
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$textAlign(_rtfeldman$elm_css$Css$center),
										_1: {ctor: '[]'}
									},
									_user$project$UI_Typography$p('The above is based on an old idea, with renewed interest. With regards to the old notebook concept (pardon the syntax error):')),
								_1: {
									ctor: '::',
									_0: _user$project$UI_Typography$img('assets/preview/notebook/unnamed-1.png'),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			})));
var _user$project$Page$view = function (model) {
	return A2(
		_rtfeldman$elm_css$Html_Styled$div,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$backgroundColor(
						_rtfeldman$elm_css$Css$hex('#fff')),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$marginBottom(_rtfeldman$elm_css$Css$zero),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$displayFlex,
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$flexDirection(_rtfeldman$elm_css$Css$column),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$height(
										_rtfeldman$elm_css$Css$pct(100)),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		},
		A2(
			_elm_lang$core$List$map,
			_user$project$UI_Typography$renderElement,
			{
				ctor: '::',
				_0: _user$project$Page_Employment$employment,
				_1: {
					ctor: '::',
					_0: _user$project$Page_Projects$projects,
					_1: {
						ctor: '::',
						_0: _user$project$Page_Skillset$skillset,
						_1: {
							ctor: '::',
							_0: _user$project$Page$design,
							_1: {ctor: '[]'}
						}
					}
				}
			}));
};

var _user$project$Core_View$view = function (model) {
	return _user$project$Page$view(model);
};

var _user$project$Entries_Menu$x = 0;

var _user$project$Main$main = _elm_lang$html$Html$program(
	{
		init: _user$project$Core_Model$init,
		view: function (_p0) {
			return _rtfeldman$elm_css$Html_Styled$toUnstyled(
				_user$project$Core_View$view(_p0));
		},
		update: _user$project$Core_Update$update,
		subscriptions: _user$project$Core_Effects_Sub$subscriptions
	})();

var _user$project$Prelude_ops = _user$project$Prelude_ops || {};
_user$project$Prelude_ops['$'] = F2(
	function (x, y) {
		return x(y);
	});

var _user$project$Prelude_Update$finish = F2(
	function (cmd, model) {
		return {ctor: '_Tuple2', _0: model, _1: cmd};
	});

var Elm = {};
Elm['Core'] = Elm['Core'] || {};
Elm['Core']['Effects'] = Elm['Core']['Effects'] || {};
Elm['Core']['Effects']['Msg'] = Elm['Core']['Effects']['Msg'] || {};
if (typeof _user$project$Core_Effects_Msg$main !== 'undefined') {
    _user$project$Core_Effects_Msg$main(Elm['Core']['Effects']['Msg'], 'Core.Effects.Msg', undefined);
}
Elm['Core'] = Elm['Core'] || {};
Elm['Core']['Effects'] = Elm['Core']['Effects'] || {};
Elm['Core']['Effects']['Sub'] = Elm['Core']['Effects']['Sub'] || {};
if (typeof _user$project$Core_Effects_Sub$main !== 'undefined') {
    _user$project$Core_Effects_Sub$main(Elm['Core']['Effects']['Sub'], 'Core.Effects.Sub', undefined);
}
Elm['Core'] = Elm['Core'] || {};
Elm['Core']['Model'] = Elm['Core']['Model'] || {};
if (typeof _user$project$Core_Model$main !== 'undefined') {
    _user$project$Core_Model$main(Elm['Core']['Model'], 'Core.Model', undefined);
}
Elm['Core'] = Elm['Core'] || {};
Elm['Core']['Update'] = Elm['Core']['Update'] || {};
if (typeof _user$project$Core_Update$main !== 'undefined') {
    _user$project$Core_Update$main(Elm['Core']['Update'], 'Core.Update', undefined);
}
Elm['Core'] = Elm['Core'] || {};
Elm['Core']['View'] = Elm['Core']['View'] || {};
if (typeof _user$project$Core_View$main !== 'undefined') {
    _user$project$Core_View$main(Elm['Core']['View'], 'Core.View', undefined);
}
Elm['Data'] = Elm['Data'] || {};
Elm['Data']['Either'] = Elm['Data']['Either'] || {};
if (typeof _user$project$Data_Either$main !== 'undefined') {
    _user$project$Data_Either$main(Elm['Data']['Either'], 'Data.Either', undefined);
}
Elm['Data'] = Elm['Data'] || {};
Elm['Data']['UI'] = Elm['Data']['UI'] || {};
if (typeof _user$project$Data_UI$main !== 'undefined') {
    _user$project$Data_UI$main(Elm['Data']['UI'], 'Data.UI', undefined);
}
Elm['Entries'] = Elm['Entries'] || {};
Elm['Entries']['Footer'] = Elm['Entries']['Footer'] || {};
if (typeof _user$project$Entries_Footer$main !== 'undefined') {
    _user$project$Entries_Footer$main(Elm['Entries']['Footer'], 'Entries.Footer', undefined);
}
Elm['Entries'] = Elm['Entries'] || {};
Elm['Entries']['Group'] = Elm['Entries']['Group'] || {};
if (typeof _user$project$Entries_Group$main !== 'undefined') {
    _user$project$Entries_Group$main(Elm['Entries']['Group'], 'Entries.Group', undefined);
}
Elm['Entries'] = Elm['Entries'] || {};
Elm['Entries']['Header'] = Elm['Entries']['Header'] || {};
if (typeof _user$project$Entries_Header$main !== 'undefined') {
    _user$project$Entries_Header$main(Elm['Entries']['Header'], 'Entries.Header', undefined);
}
Elm['Entries'] = Elm['Entries'] || {};
Elm['Entries']['Menu'] = Elm['Entries']['Menu'] || {};
if (typeof _user$project$Entries_Menu$main !== 'undefined') {
    _user$project$Entries_Menu$main(Elm['Entries']['Menu'], 'Entries.Menu', undefined);
}
Elm['Entries'] = Elm['Entries'] || {};
Elm['Entries']['Model'] = Elm['Entries']['Model'] || {};
if (typeof _user$project$Entries_Model$main !== 'undefined') {
    _user$project$Entries_Model$main(Elm['Entries']['Model'], 'Entries.Model', undefined);
}
Elm['Entries'] = Elm['Entries'] || {};
Elm['Entries']['View'] = Elm['Entries']['View'] || {};
if (typeof _user$project$Entries_View$main !== 'undefined') {
    _user$project$Entries_View$main(Elm['Entries']['View'], 'Entries.View', undefined);
}
Elm['Entry'] = Elm['Entry'] || {};
Elm['Entry']['Block'] = Elm['Entry']['Block'] || {};
Elm['Entry']['Block']['Code'] = Elm['Entry']['Block']['Code'] || {};
if (typeof _user$project$Entry_Block_Code$main !== 'undefined') {
    _user$project$Entry_Block_Code$main(Elm['Entry']['Block']['Code'], 'Entry.Block.Code', undefined);
}
Elm['Entry'] = Elm['Entry'] || {};
Elm['Entry']['Block'] = Elm['Entry']['Block'] || {};
Elm['Entry']['Block']['Code'] = Elm['Entry']['Block']['Code'] || {};
Elm['Entry']['Block']['Code']['Input'] = Elm['Entry']['Block']['Code']['Input'] || {};
if (typeof _user$project$Entry_Block_Code_Input$main !== 'undefined') {
    _user$project$Entry_Block_Code_Input$main(Elm['Entry']['Block']['Code']['Input'], 'Entry.Block.Code.Input', undefined);
}
Elm['Entry'] = Elm['Entry'] || {};
Elm['Entry']['Block'] = Elm['Entry']['Block'] || {};
Elm['Entry']['Block']['Code'] = Elm['Entry']['Block']['Code'] || {};
Elm['Entry']['Block']['Code']['Output'] = Elm['Entry']['Block']['Code']['Output'] || {};
if (typeof _user$project$Entry_Block_Code_Output$main !== 'undefined') {
    _user$project$Entry_Block_Code_Output$main(Elm['Entry']['Block']['Code']['Output'], 'Entry.Block.Code.Output', undefined);
}
Elm['Entry'] = Elm['Entry'] || {};
Elm['Entry']['Block'] = Elm['Entry']['Block'] || {};
Elm['Entry']['Block']['Paper'] = Elm['Entry']['Block']['Paper'] || {};
if (typeof _user$project$Entry_Block_Paper$main !== 'undefined') {
    _user$project$Entry_Block_Paper$main(Elm['Entry']['Block']['Paper'], 'Entry.Block.Paper', undefined);
}
Elm['Entry'] = Elm['Entry'] || {};
Elm['Entry']['Border'] = Elm['Entry']['Border'] || {};
if (typeof _user$project$Entry_Border$main !== 'undefined') {
    _user$project$Entry_Border$main(Elm['Entry']['Border'], 'Entry.Border', undefined);
}
Elm['Entry'] = Elm['Entry'] || {};
Elm['Entry']['Border'] = Elm['Entry']['Border'] || {};
Elm['Entry']['Border']['Paper'] = Elm['Entry']['Border']['Paper'] || {};
Elm['Entry']['Border']['Paper']['Broken'] = Elm['Entry']['Border']['Paper']['Broken'] || {};
if (typeof _user$project$Entry_Border_Paper_Broken$main !== 'undefined') {
    _user$project$Entry_Border_Paper_Broken$main(Elm['Entry']['Border']['Paper']['Broken'], 'Entry.Border.Paper.Broken', undefined);
}
Elm['Entry'] = Elm['Entry'] || {};
Elm['Entry']['Border'] = Elm['Entry']['Border'] || {};
Elm['Entry']['Border']['Paper'] = Elm['Entry']['Border']['Paper'] || {};
Elm['Entry']['Border']['Paper']['Broken'] = Elm['Entry']['Border']['Paper']['Broken'] || {};
Elm['Entry']['Border']['Paper']['Broken']['Filters'] = Elm['Entry']['Border']['Paper']['Broken']['Filters'] || {};
if (typeof _user$project$Entry_Border_Paper_Broken_Filters$main !== 'undefined') {
    _user$project$Entry_Border_Paper_Broken_Filters$main(Elm['Entry']['Border']['Paper']['Broken']['Filters'], 'Entry.Border.Paper.Broken.Filters', undefined);
}
Elm['Entry'] = Elm['Entry'] || {};
Elm['Entry']['Border'] = Elm['Entry']['Border'] || {};
Elm['Entry']['Border']['Paper'] = Elm['Entry']['Border']['Paper'] || {};
Elm['Entry']['Border']['Paper']['Broken'] = Elm['Entry']['Border']['Paper']['Broken'] || {};
Elm['Entry']['Border']['Paper']['Broken']['Utils'] = Elm['Entry']['Border']['Paper']['Broken']['Utils'] || {};
if (typeof _user$project$Entry_Border_Paper_Broken_Utils$main !== 'undefined') {
    _user$project$Entry_Border_Paper_Broken_Utils$main(Elm['Entry']['Border']['Paper']['Broken']['Utils'], 'Entry.Border.Paper.Broken.Utils', undefined);
}
Elm['Entry'] = Elm['Entry'] || {};
Elm['Entry']['Border'] = Elm['Entry']['Border'] || {};
Elm['Entry']['Border']['Paper'] = Elm['Entry']['Border']['Paper'] || {};
Elm['Entry']['Border']['Paper']['Joined'] = Elm['Entry']['Border']['Paper']['Joined'] || {};
if (typeof _user$project$Entry_Border_Paper_Joined$main !== 'undefined') {
    _user$project$Entry_Border_Paper_Joined$main(Elm['Entry']['Border']['Paper']['Joined'], 'Entry.Border.Paper.Joined', undefined);
}
Elm['Entry'] = Elm['Entry'] || {};
Elm['Entry']['Data'] = Elm['Entry']['Data'] || {};
if (typeof _user$project$Entry_Data$main !== 'undefined') {
    _user$project$Entry_Data$main(Elm['Entry']['Data'], 'Entry.Data', undefined);
}
Elm['Entry'] = Elm['Entry'] || {};
Elm['Entry']['Model'] = Elm['Entry']['Model'] || {};
if (typeof _user$project$Entry_Model$main !== 'undefined') {
    _user$project$Entry_Model$main(Elm['Entry']['Model'], 'Entry.Model', undefined);
}
Elm['Entry'] = Elm['Entry'] || {};
Elm['Entry']['Special'] = Elm['Entry']['Special'] || {};
Elm['Entry']['Special']['Intro'] = Elm['Entry']['Special']['Intro'] || {};
if (typeof _user$project$Entry_Special_Intro$main !== 'undefined') {
    _user$project$Entry_Special_Intro$main(Elm['Entry']['Special']['Intro'], 'Entry.Special.Intro', undefined);
}
Elm['Entry'] = Elm['Entry'] || {};
Elm['Entry']['UI'] = Elm['Entry']['UI'] || {};
Elm['Entry']['UI']['Dialog'] = Elm['Entry']['UI']['Dialog'] || {};
Elm['Entry']['UI']['Dialog']['Swoop'] = Elm['Entry']['UI']['Dialog']['Swoop'] || {};
if (typeof _user$project$Entry_UI_Dialog_Swoop$main !== 'undefined') {
    _user$project$Entry_UI_Dialog_Swoop$main(Elm['Entry']['UI']['Dialog']['Swoop'], 'Entry.UI.Dialog.Swoop', undefined);
}
Elm['Entry'] = Elm['Entry'] || {};
Elm['Entry']['UI'] = Elm['Entry']['UI'] || {};
Elm['Entry']['UI']['Dialog'] = Elm['Entry']['UI']['Dialog'] || {};
Elm['Entry']['UI']['Dialog']['Swoop'] = Elm['Entry']['UI']['Dialog']['Swoop'] || {};
Elm['Entry']['UI']['Dialog']['Swoop']['Filters'] = Elm['Entry']['UI']['Dialog']['Swoop']['Filters'] || {};
if (typeof _user$project$Entry_UI_Dialog_Swoop_Filters$main !== 'undefined') {
    _user$project$Entry_UI_Dialog_Swoop_Filters$main(Elm['Entry']['UI']['Dialog']['Swoop']['Filters'], 'Entry.UI.Dialog.Swoop.Filters', undefined);
}
Elm['Entry'] = Elm['Entry'] || {};
Elm['Entry']['View'] = Elm['Entry']['View'] || {};
if (typeof _user$project$Entry_View$main !== 'undefined') {
    _user$project$Entry_View$main(Elm['Entry']['View'], 'Entry.View', undefined);
}
Elm['Entry'] = Elm['Entry'] || {};
Elm['Entry']['View'] = Elm['Entry']['View'] || {};
if (typeof _user$project$Entry_View$main !== 'undefined') {
    _user$project$Entry_View$main(Elm['Entry']['View'], 'Entry.View', undefined);
}
Elm['Main'] = Elm['Main'] || {};
if (typeof _user$project$Main$main !== 'undefined') {
    _user$project$Main$main(Elm['Main'], 'Main', undefined);
}
Elm['Page'] = Elm['Page'] || {};
if (typeof _user$project$Page$main !== 'undefined') {
    _user$project$Page$main(Elm['Page'], 'Page', undefined);
}
Elm['Page'] = Elm['Page'] || {};
Elm['Page']['Employment'] = Elm['Page']['Employment'] || {};
if (typeof _user$project$Page_Employment$main !== 'undefined') {
    _user$project$Page_Employment$main(Elm['Page']['Employment'], 'Page.Employment', undefined);
}
Elm['Page'] = Elm['Page'] || {};
Elm['Page']['Projects'] = Elm['Page']['Projects'] || {};
if (typeof _user$project$Page_Projects$main !== 'undefined') {
    _user$project$Page_Projects$main(Elm['Page']['Projects'], 'Page.Projects', undefined);
}
Elm['Page'] = Elm['Page'] || {};
Elm['Page']['Skillset'] = Elm['Page']['Skillset'] || {};
if (typeof _user$project$Page_Skillset$main !== 'undefined') {
    _user$project$Page_Skillset$main(Elm['Page']['Skillset'], 'Page.Skillset', undefined);
}
Elm['Prelude'] = Elm['Prelude'] || {};
if (typeof _user$project$Prelude$main !== 'undefined') {
    _user$project$Prelude$main(Elm['Prelude'], 'Prelude', undefined);
}
Elm['Prelude'] = Elm['Prelude'] || {};
Elm['Prelude']['Update'] = Elm['Prelude']['Update'] || {};
if (typeof _user$project$Prelude_Update$main !== 'undefined') {
    _user$project$Prelude_Update$main(Elm['Prelude']['Update'], 'Prelude.Update', undefined);
}
Elm['UI'] = Elm['UI'] || {};
Elm['UI']['Typography'] = Elm['UI']['Typography'] || {};
if (typeof _user$project$UI_Typography$main !== 'undefined') {
    _user$project$UI_Typography$main(Elm['UI']['Typography'], 'UI.Typography', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);
