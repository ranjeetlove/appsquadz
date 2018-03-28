(function (global, factory) {
	if (typeof module === "object" && typeof module.exports === "object") {
		module.exports = global.document ? factory(global, true) : function (w) {
			if (!w.document) {
				throw new Error("jQuery requires a window with a document");
			}
			return factory(w);
		};
	} else {
		factory(global);
	}
}(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
	var deletedIds = [];
	var slice = deletedIds.slice;
	var concat = deletedIds.concat;
	var push = deletedIds.push;
	var indexOf = deletedIds.indexOf;
	var class2type = {};
	var toString = class2type.toString;
	var hasOwn = class2type.hasOwnProperty;
	var support = {};
	var
		version = "1.11.3",
		jQuery = function (selector, context) {
			return new jQuery.fn.init(selector, context);
		},
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,
		fcamelCase = function (all, letter) {
			return letter.toUpperCase();
		};
	jQuery.fn = jQuery.prototype = {
		jquery: version,
		constructor: jQuery,
		selector: "",
		length: 0,
		toArray: function () {
			return slice.call(this);
		},
		get: function (num) {
			return num != null ? (num < 0 ? this[num + this.length] : this[num]) : slice.call(this);
		},
		pushStack: function (elems) {
			var ret = jQuery.merge(this.constructor(), elems);
			ret.prevObject = this;
			ret.context = this.context;
			return ret;
		},
		each: function (callback, args) {
			return jQuery.each(this, callback, args);
		},
		map: function (callback) {
			return this.pushStack(jQuery.map(this, function (elem, i) {
				return callback.call(elem, i, elem);
			}));
		},
		slice: function () {
			return this.pushStack(slice.apply(this, arguments));
		},
		first: function () {
			return this.eq(0);
		},
		last: function () {
			return this.eq(-1);
		},
		eq: function (i) {
			var len = this.length,
				j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},
		end: function () {
			return this.prevObject || this.constructor(null);
		},
		push: push,
		sort: deletedIds.sort,
		splice: deletedIds.splice
	};
	jQuery.extend = jQuery.fn.extend = function () {
		var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;
		if (typeof target === "boolean") {
			deep = target;
			target = arguments[i] || {};
			i++;
		}
		if (typeof target !== "object" && !jQuery.isFunction(target)) {
			target = {};
		}
		if (i === length) {
			target = this;
			i--;
		}
		for (; i < length; i++) {
			if ((options = arguments[i]) != null) {
				for (name in options) {
					src = target[name];
					copy = options[name];
					if (target === copy) {
						continue;
					}
					if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}
						target[name] = jQuery.extend(deep, clone, copy);
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}
		return target;
	};
	jQuery.extend({
		expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
		isReady: true,
		error: function (msg) {
			throw new Error(msg);
		},
		noop: function () {},
		isFunction: function (obj) {
			return jQuery.type(obj) === "function";
		},
		isArray: Array.isArray || function (obj) {
			return jQuery.type(obj) === "array";
		},
		isWindow: function (obj) {
			return obj != null && obj == obj.window;
		},
		isNumeric: function (obj) {
			return !jQuery.isArray(obj) && (obj - parseFloat(obj) + 1) >= 0;
		},
		isEmptyObject: function (obj) {
			var name;
			for (name in obj) {
				return false;
			}
			return true;
		},
		isPlainObject: function (obj) {
			var key;
			if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
				return false;
			}
			try {
				if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
					return false;
				}
			} catch (e) {
				return false;
			}
			if (support.ownLast) {
				for (key in obj) {
					return hasOwn.call(obj, key);
				}
			}
			for (key in obj) {}
			return key === undefined || hasOwn.call(obj, key);
		},
		type: function (obj) {
			if (obj == null) {
				return obj + "";
			}
			return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
		},
		globalEval: function (data) {
			if (data && jQuery.trim(data)) {
				(window.execScript || function (data) {
					window["eval"].call(window, data);
				})(data);
			}
		},
		camelCase: function (string) {
			return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
		},
		nodeName: function (elem, name) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
		each: function (obj, callback, args) {
			var value, i = 0,
				length = obj.length,
				isArray = isArraylike(obj);
			if (args) {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.apply(obj[i], args);
						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						value = callback.apply(obj[i], args);
						if (value === false) {
							break;
						}
					}
				}
			} else {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.call(obj[i], i, obj[i]);
						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						value = callback.call(obj[i], i, obj[i]);
						if (value === false) {
							break;
						}
					}
				}
			}
			return obj;
		},
		trim: function (text) {
			return text == null ? "" : (text + "").replace(rtrim, "");
		},
		makeArray: function (arr, results) {
			var ret = results || [];
			if (arr != null) {
				if (isArraylike(Object(arr))) {
					jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					push.call(ret, arr);
				}
			}
			return ret;
		},
		inArray: function (elem, arr, i) {
			var len;
			if (arr) {
				if (indexOf) {
					return indexOf.call(arr, elem, i);
				}
				len = arr.length;
				i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
				for (; i < len; i++) {
					if (i in arr && arr[i] === elem) {
						return i;
					}
				}
			}
			return -1;
		},
		merge: function (first, second) {
			var len = +second.length,
				j = 0,
				i = first.length;
			while (j < len) {
				first[i++] = second[j++];
			}
			if (len !== len) {
				while (second[j] !== undefined) {
					first[i++] = second[j++];
				}
			}
			first.length = i;
			return first;
		},
		grep: function (elems, callback, invert) {
			var callbackInverse, matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
			for (; i < length; i++) {
				callbackInverse = !callback(elems[i], i);
				if (callbackInverse !== callbackExpect) {
					matches.push(elems[i]);
				}
			}
			return matches;
		},
		map: function (elems, callback, arg) {
			var value, i = 0,
				length = elems.length,
				isArray = isArraylike(elems),
				ret = [];
			if (isArray) {
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);
					if (value != null) {
						ret.push(value);
					}
				}
			} else {
				for (i in elems) {
					value = callback(elems[i], i, arg);
					if (value != null) {
						ret.push(value);
					}
				}
			}
			return concat.apply([], ret);
		},
		guid: 1,
		proxy: function (fn, context) {
			var args, proxy, tmp;
			if (typeof context === "string") {
				tmp = fn[context];
				context = fn;
				fn = tmp;
			}
			if (!jQuery.isFunction(fn)) {
				return undefined;
			}
			args = slice.call(arguments, 2);
			proxy = function () {
				return fn.apply(context || this, args.concat(slice.call(arguments)));
			};
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
			return proxy;
		},
		now: function () {
			return +(new Date());
		},
		support: support
	});
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});

	function isArraylike(obj) {
		var length = "length" in obj && obj.length,
			type = jQuery.type(obj);
		if (type === "function" || jQuery.isWindow(obj)) {
			return false;
		}
		if (obj.nodeType === 1 && length) {
			return true;
		}
		return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
	}
	var Sizzle = (function (window) {
		var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(),
			preferredDoc = window.document,
			dirruns = 0,
			done = 0,
			classCache = createCache(),
			tokenCache = createCache(),
			compilerCache = createCache(),
			sortOrder = function (a, b) {
				if (a === b) {
					hasDuplicate = true;
				}
				return 0;
			},
			MAX_NEGATIVE = 1 << 31,
			hasOwn = ({}).hasOwnProperty,
			arr = [],
			pop = arr.pop,
			push_native = arr.push,
			push = arr.push,
			slice = arr.slice,
			indexOf = function (list, elem) {
				var i = 0,
					len = list.length;
				for (; i < len; i++) {
					if (list[i] === elem) {
						return i;
					}
				}
				return -1;
			},
			booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			whitespace = "[\\x20\\t\\r\\n\\f]",
			characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			identifier = characterEncoding.replace("w", "w#"),
			attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
			pseudos = ":(" + characterEncoding + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
			rwhitespace = new RegExp(whitespace + "+", "g"),
			rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
			rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
			rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
			rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
			rpseudo = new RegExp(pseudos),
			ridentifier = new RegExp("^" + identifier + "$"),
			matchExpr = {
				"ID": new RegExp("^#(" + characterEncoding + ")"),
				"CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
				"TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
				"ATTR": new RegExp("^" + attributes),
				"PSEUDO": new RegExp("^" + pseudos),
				"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
				"bool": new RegExp("^(?:" + booleans + ")$", "i"),
				"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
					whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
			},
			rinputs = /^(?:input|select|textarea|button)$/i,
			rheader = /^h\d$/i,
			rnative = /^[^{]+\{\s*\[native \w/,
			rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			rsibling = /[+~]/,
			rescape = /'|\\/g,
			runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
			funescape = function (_, escaped, escapedWhitespace) {
				var high = "0x" + escaped - 0x10000;
				return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
			},
			unloadHandler = function () {
				setDocument();
			};
		try {
			push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
			arr[preferredDoc.childNodes.length].nodeType;
		} catch (e) {
			push = {
				apply: arr.length ? function (target, els) {
					push_native.apply(target, slice.call(els));
				} : function (target, els) {
					var j = target.length,
						i = 0;
					while ((target[j++] = els[i++])) {}
					target.length = j - 1;
				}
			};
		}

		function Sizzle(selector, context, results, seed) {
			var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
			if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
				setDocument(context);
			}
			context = context || document;
			results = results || [];
			nodeType = context.nodeType;
			if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
				return results;
			}
			if (!seed && documentIsHTML) {
				if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
					if ((m = match[1])) {
						if (nodeType === 9) {
							elem = context.getElementById(m);
							if (elem && elem.parentNode) {
								if (elem.id === m) {
									results.push(elem);
									return results;
								}
							} else {
								return results;
							}
						} else {
							if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
								results.push(elem);
								return results;
							}
						}
					} else if (match[2]) {
						push.apply(results, context.getElementsByTagName(selector));
						return results;
					} else if ((m = match[3]) && support.getElementsByClassName) {
						push.apply(results, context.getElementsByClassName(m));
						return results;
					}
				}
				if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
					nid = old = expando;
					newContext = context;
					newSelector = nodeType !== 1 && selector;
					if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
						groups = tokenize(selector);
						if ((old = context.getAttribute("id"))) {
							nid = old.replace(rescape, "\\$&");
						} else {
							context.setAttribute("id", nid);
						}
						nid = "[id='" + nid + "'] ";
						i = groups.length;
						while (i--) {
							groups[i] = nid + toSelector(groups[i]);
						}
						newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
						newSelector = groups.join(",");
					}
					if (newSelector) {
						try {
							push.apply(results, newContext.querySelectorAll(newSelector));
							return results;
						} catch (qsaError) {} finally {
							if (!old) {
								context.removeAttribute("id");
							}
						}
					}
				}
			}
			return select(selector.replace(rtrim, "$1"), context, results, seed);
		}

		function createCache() {
			var keys = [];

			function cache(key, value) {
				if (keys.push(key + " ") > Expr.cacheLength) {
					delete cache[keys.shift()];
				}
				return (cache[key + " "] = value);
			}
			return cache;
		}

		function markFunction(fn) {
			fn[expando] = true;
			return fn;
		}

		function assert(fn) {
			var div = document.createElement("div");
			try {
				return !!fn(div);
			} catch (e) {
				return false;
			} finally {
				if (div.parentNode) {
					div.parentNode.removeChild(div);
				}
				div = null;
			}
		}

		function addHandle(attrs, handler) {
			var arr = attrs.split("|"),
				i = attrs.length;
			while (i--) {
				Expr.attrHandle[arr[i]] = handler;
			}
		}

		function siblingCheck(a, b) {
			var cur = b && a,
				diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) -
				(~a.sourceIndex || MAX_NEGATIVE);
			if (diff) {
				return diff;
			}
			if (cur) {
				while ((cur = cur.nextSibling)) {
					if (cur === b) {
						return -1;
					}
				}
			}
			return a ? 1 : -1;
		}

		function createInputPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === type;
			};
		}

		function createButtonPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return (name === "input" || name === "button") && elem.type === type;
			};
		}

		function createPositionalPseudo(fn) {
			return markFunction(function (argument) {
				argument = +argument;
				return markFunction(function (seed, matches) {
					var j, matchIndexes = fn([], seed.length, argument),
						i = matchIndexes.length;
					while (i--) {
						if (seed[(j = matchIndexes[i])]) {
							seed[j] = !(matches[j] = seed[j]);
						}
					}
				});
			});
		}

		function testContext(context) {
			return context && typeof context.getElementsByTagName !== "undefined" && context;
		}
		support = Sizzle.support = {};
		isXML = Sizzle.isXML = function (elem) {
			var documentElement = elem && (elem.ownerDocument || elem).documentElement;
			return documentElement ? documentElement.nodeName !== "HTML" : false;
		};
		setDocument = Sizzle.setDocument = function (node) {
			var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
			if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
				return document;
			}
			document = doc;
			docElem = doc.documentElement;
			parent = doc.defaultView;
			if (parent && parent !== parent.top) {
				if (parent.addEventListener) {
					parent.addEventListener("unload", unloadHandler, false);
				} else if (parent.attachEvent) {
					parent.attachEvent("onunload", unloadHandler);
				}
			}
			documentIsHTML = !isXML(doc);
			support.attributes = assert(function (div) {
				div.className = "i";
				return !div.getAttribute("className");
			});
			support.getElementsByTagName = assert(function (div) {
				div.appendChild(doc.createComment(""));
				return !div.getElementsByTagName("*").length;
			});
			support.getElementsByClassName = rnative.test(doc.getElementsByClassName);
			support.getById = assert(function (div) {
				docElem.appendChild(div).id = expando;
				return !doc.getElementsByName || !doc.getElementsByName(expando).length;
			});
			if (support.getById) {
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var m = context.getElementById(id);
						return m && m.parentNode ? [m] : [];
					}
				};
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						return elem.getAttribute("id") === attrId;
					};
				};
			} else {
				delete Expr.find["ID"];
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
						return node && node.value === attrId;
					};
				};
			}
			Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
				if (typeof context.getElementsByTagName !== "undefined") {
					return context.getElementsByTagName(tag);
				} else if (support.qsa) {
					return context.querySelectorAll(tag);
				}
			} : function (tag, context) {
				var elem, tmp = [],
					i = 0,
					results = context.getElementsByTagName(tag);
				if (tag === "*") {
					while ((elem = results[i++])) {
						if (elem.nodeType === 1) {
							tmp.push(elem);
						}
					}
					return tmp;
				}
				return results;
			};
			Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
				if (documentIsHTML) {
					return context.getElementsByClassName(className);
				}
			};
			rbuggyMatches = [];
			rbuggyQSA = [];
			if ((support.qsa = rnative.test(doc.querySelectorAll))) {
				assert(function (div) {
					docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";
					if (div.querySelectorAll("[msallowcapture^='']").length) {
						rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
					}
					if (!div.querySelectorAll("[selected]").length) {
						rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
					}
					if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
						rbuggyQSA.push("~=");
					}
					if (!div.querySelectorAll(":checked").length) {
						rbuggyQSA.push(":checked");
					}
					if (!div.querySelectorAll("a#" + expando + "+*").length) {
						rbuggyQSA.push(".#.+[+~]");
					}
				});
				assert(function (div) {
					var input = doc.createElement("input");
					input.setAttribute("type", "hidden");
					div.appendChild(input).setAttribute("name", "D");
					if (div.querySelectorAll("[name=d]").length) {
						rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
					}
					if (!div.querySelectorAll(":enabled").length) {
						rbuggyQSA.push(":enabled", ":disabled");
					}
					div.querySelectorAll("*,:x");
					rbuggyQSA.push(",.*:");
				});
			}
			if ((support.matchesSelector = rnative.test((matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {
				assert(function (div) {
					support.disconnectedMatch = matches.call(div, "div");
					matches.call(div, "[s!='']:x");
					rbuggyMatches.push("!=", pseudos);
				});
			}
			rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
			rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
			hasCompare = rnative.test(docElem.compareDocumentPosition);
			contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
			} : function (a, b) {
				if (b) {
					while ((b = b.parentNode)) {
						if (b === a) {
							return true;
						}
					}
				}
				return false;
			};
			sortOrder = hasCompare ? function (a, b) {
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}
				var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
				if (compare) {
					return compare;
				}
				compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
				if (compare & 1 || (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
					if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
						return -1;
					}
					if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
						return 1;
					}
					return sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
				}
				return compare & 4 ? -1 : 1;
			} : function (a, b) {
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}
				var cur, i = 0,
					aup = a.parentNode,
					bup = b.parentNode,
					ap = [a],
					bp = [b];
				if (!aup || !bup) {
					return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
				} else if (aup === bup) {
					return siblingCheck(a, b);
				}
				cur = a;
				while ((cur = cur.parentNode)) {
					ap.unshift(cur);
				}
				cur = b;
				while ((cur = cur.parentNode)) {
					bp.unshift(cur);
				}
				while (ap[i] === bp[i]) {
					i++;
				}
				return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
			};
			return doc;
		};
		Sizzle.matches = function (expr, elements) {
			return Sizzle(expr, null, null, elements);
		};
		Sizzle.matchesSelector = function (elem, expr) {
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}
			expr = expr.replace(rattributeQuotes, "='$1']");
			if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
				try {
					var ret = matches.call(elem, expr);
					if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
						return ret;
					}
				} catch (e) {}
			}
			return Sizzle(expr, document, null, [elem]).length > 0;
		};
		Sizzle.contains = function (context, elem) {
			if ((context.ownerDocument || context) !== document) {
				setDocument(context);
			}
			return contains(context, elem);
		};
		Sizzle.attr = function (elem, name) {
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}
			var fn = Expr.attrHandle[name.toLowerCase()],
				val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
			return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
		};
		Sizzle.error = function (msg) {
			throw new Error("Syntax error, unrecognized expression: " + msg);
		};
		Sizzle.uniqueSort = function (results) {
			var elem, duplicates = [],
				j = 0,
				i = 0;
			hasDuplicate = !support.detectDuplicates;
			sortInput = !support.sortStable && results.slice(0);
			results.sort(sortOrder);
			if (hasDuplicate) {
				while ((elem = results[i++])) {
					if (elem === results[i]) {
						j = duplicates.push(i);
					}
				}
				while (j--) {
					results.splice(duplicates[j], 1);
				}
			}
			sortInput = null;
			return results;
		};
		getText = Sizzle.getText = function (elem) {
			var node, ret = "",
				i = 0,
				nodeType = elem.nodeType;
			if (!nodeType) {
				while ((node = elem[i++])) {
					ret += getText(node);
				}
			} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
				if (typeof elem.textContent === "string") {
					return elem.textContent;
				} else {
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						ret += getText(elem);
					}
				}
			} else if (nodeType === 3 || nodeType === 4) {
				return elem.nodeValue;
			}
			return ret;
		};
		Expr = Sizzle.selectors = {
			cacheLength: 50,
			createPseudo: markFunction,
			match: matchExpr,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: true
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: true
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				"ATTR": function (match) {
					match[1] = match[1].replace(runescape, funescape);
					match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
					if (match[2] === "~=") {
						match[3] = " " + match[3] + " ";
					}
					return match.slice(0, 4);
				},
				"CHILD": function (match) {
					match[1] = match[1].toLowerCase();
					if (match[1].slice(0, 3) === "nth") {
						if (!match[3]) {
							Sizzle.error(match[0]);
						}
						match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
						match[5] = +((match[7] + match[8]) || match[3] === "odd");
					} else if (match[3]) {
						Sizzle.error(match[0]);
					}
					return match;
				},
				"PSEUDO": function (match) {
					var excess, unquoted = !match[6] && match[2];
					if (matchExpr["CHILD"].test(match[0])) {
						return null;
					}
					if (match[3]) {
						match[2] = match[4] || match[5] || "";
					} else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
						match[0] = match[0].slice(0, excess);
						match[2] = unquoted.slice(0, excess);
					}
					return match.slice(0, 3);
				}
			},
			filter: {
				"TAG": function (nodeNameSelector) {
					var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
					return nodeNameSelector === "*" ? function () {
						return true;
					} : function (elem) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
				},
				"CLASS": function (className) {
					var pattern = classCache[className + " "];
					return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
						return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
					});
				},
				"ATTR": function (name, operator, check) {
					return function (elem) {
						var result = Sizzle.attr(elem, name);
						if (result == null) {
							return operator === "!=";
						}
						if (!operator) {
							return true;
						}
						result += "";
						return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
					};
				},
				"CHILD": function (type, what, argument, first, last) {
					var simple = type.slice(0, 3) !== "nth",
						forward = type.slice(-4) !== "last",
						ofType = what === "of-type";
					return first === 1 && last === 0 ? function (elem) {
						return !!elem.parentNode;
					} : function (elem, context, xml) {
						var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;
						if (parent) {
							if (simple) {
								while (dir) {
									node = elem;
									while ((node = node[dir])) {
										if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
											return false;
										}
									}
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
							start = [forward ? parent.firstChild : parent.lastChild];
							if (forward && useCache) {
								outerCache = parent[expando] || (parent[expando] = {});
								cache = outerCache[type] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[nodeIndex];
								while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
									if (node.nodeType === 1 && ++diff && node === elem) {
										outerCache[type] = [dirruns, nodeIndex, diff];
										break;
									}
								}
							} else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
								diff = cache[1];
							} else {
								while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
									if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
										if (useCache) {
											(node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
										}
										if (node === elem) {
											break;
										}
									}
								}
							}
							diff -= last;
							return diff === first || (diff % first === 0 && diff / first >= 0);
						}
					};
				},
				"PSEUDO": function (pseudo, argument) {
					var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
					if (fn[expando]) {
						return fn(argument);
					}
					if (fn.length > 1) {
						args = [pseudo, pseudo, "", argument];
						return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
							var idx, matched = fn(seed, argument),
								i = matched.length;
							while (i--) {
								idx = indexOf(seed, matched[i]);
								seed[idx] = !(matches[idx] = matched[i]);
							}
						}) : function (elem) {
							return fn(elem, 0, args);
						};
					}
					return fn;
				}
			},
			pseudos: {
				"not": markFunction(function (selector) {
					var input = [],
						results = [],
						matcher = compile(selector.replace(rtrim, "$1"));
					return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
						var elem, unmatched = matcher(seed, null, xml, []),
							i = seed.length;
						while (i--) {
							if ((elem = unmatched[i])) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) : function (elem, context, xml) {
						input[0] = elem;
						matcher(input, null, xml, results);
						input[0] = null;
						return !results.pop();
					};
				}),
				"has": markFunction(function (selector) {
					return function (elem) {
						return Sizzle(selector, elem).length > 0;
					};
				}),
				"contains": markFunction(function (text) {
					text = text.replace(runescape, funescape);
					return function (elem) {
						return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
					};
				}),
				"lang": markFunction(function (lang) {
					if (!ridentifier.test(lang || "")) {
						Sizzle.error("unsupported lang: " + lang);
					}
					lang = lang.replace(runescape, funescape).toLowerCase();
					return function (elem) {
						var elemLang;
						do {
							if ((elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
								elemLang = elemLang.toLowerCase();
								return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
							}
						} while ((elem = elem.parentNode) && elem.nodeType === 1);
						return false;
					};
				}),
				"target": function (elem) {
					var hash = window.location && window.location.hash;
					return hash && hash.slice(1) === elem.id;
				},
				"root": function (elem) {
					return elem === docElem;
				},
				"focus": function (elem) {
					return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
				},
				"enabled": function (elem) {
					return elem.disabled === false;
				},
				"disabled": function (elem) {
					return elem.disabled === true;
				},
				"checked": function (elem) {
					var nodeName = elem.nodeName.toLowerCase();
					return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
				},
				"selected": function (elem) {
					if (elem.parentNode) {
						elem.parentNode.selectedIndex;
					}
					return elem.selected === true;
				},
				"empty": function (elem) {
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						if (elem.nodeType < 6) {
							return false;
						}
					}
					return true;
				},
				"parent": function (elem) {
					return !Expr.pseudos["empty"](elem);
				},
				"header": function (elem) {
					return rheader.test(elem.nodeName);
				},
				"input": function (elem) {
					return rinputs.test(elem.nodeName);
				},
				"button": function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === "button" || name === "button";
				},
				"text": function (elem) {
					var attr;
					return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
				},
				"first": createPositionalPseudo(function () {
					return [0];
				}),
				"last": createPositionalPseudo(function (matchIndexes, length) {
					return [length - 1];
				}),
				"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
					return [argument < 0 ? argument + length : argument];
				}),
				"even": createPositionalPseudo(function (matchIndexes, length) {
					var i = 0;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),
				"odd": createPositionalPseudo(function (matchIndexes, length) {
					var i = 1;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),
				"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; --i >= 0;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),
				"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; ++i < length;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				})
			}
		};
		Expr.pseudos["nth"] = Expr.pseudos["eq"];
		for (i in {
				radio: true,
				checkbox: true,
				file: true,
				password: true,
				image: true
			}) {
			Expr.pseudos[i] = createInputPseudo(i);
		}
		for (i in {
				submit: true,
				reset: true
			}) {
			Expr.pseudos[i] = createButtonPseudo(i);
		}

		function setFilters() {}
		setFilters.prototype = Expr.filters = Expr.pseudos;
		Expr.setFilters = new setFilters();
		tokenize = Sizzle.tokenize = function (selector, parseOnly) {
			var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
			if (cached) {
				return parseOnly ? 0 : cached.slice(0);
			}
			soFar = selector;
			groups = [];
			preFilters = Expr.preFilter;
			while (soFar) {
				if (!matched || (match = rcomma.exec(soFar))) {
					if (match) {
						soFar = soFar.slice(match[0].length) || soFar;
					}
					groups.push((tokens = []));
				}
				matched = false;
				if ((match = rcombinators.exec(soFar))) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: match[0].replace(rtrim, " ")
					});
					soFar = soFar.slice(matched.length);
				}
				for (type in Expr.filter) {
					if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
						matched = match.shift();
						tokens.push({
							value: matched,
							type: type,
							matches: match
						});
						soFar = soFar.slice(matched.length);
					}
				}
				if (!matched) {
					break;
				}
			}
			return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
		};

		function toSelector(tokens) {
			var i = 0,
				len = tokens.length,
				selector = "";
			for (; i < len; i++) {
				selector += tokens[i].value;
			}
			return selector;
		}

		function addCombinator(matcher, combinator, base) {
			var dir = combinator.dir,
				checkNonElements = base && dir === "parentNode",
				doneName = done++;
			return combinator.first ? function (elem, context, xml) {
				while ((elem = elem[dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						return matcher(elem, context, xml);
					}
				}
			} : function (elem, context, xml) {
				var oldCache, outerCache, newCache = [dirruns, doneName];
				if (xml) {
					while ((elem = elem[dir])) {
						if (elem.nodeType === 1 || checkNonElements) {
							if (matcher(elem, context, xml)) {
								return true;
							}
						}
					}
				} else {
					while ((elem = elem[dir])) {
						if (elem.nodeType === 1 || checkNonElements) {
							outerCache = elem[expando] || (elem[expando] = {});
							if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
								return (newCache[2] = oldCache[2]);
							} else {
								outerCache[dir] = newCache;
								if ((newCache[2] = matcher(elem, context, xml))) {
									return true;
								}
							}
						}
					}
				}
			};
		}

		function elementMatcher(matchers) {
			return matchers.length > 1 ? function (elem, context, xml) {
				var i = matchers.length;
				while (i--) {
					if (!matchers[i](elem, context, xml)) {
						return false;
					}
				}
				return true;
			} : matchers[0];
		}

		function multipleContexts(selector, contexts, results) {
			var i = 0,
				len = contexts.length;
			for (; i < len; i++) {
				Sizzle(selector, contexts[i], results);
			}
			return results;
		}

		function condense(unmatched, map, filter, context, xml) {
			var elem, newUnmatched = [],
				i = 0,
				len = unmatched.length,
				mapped = map != null;
			for (; i < len; i++) {
				if ((elem = unmatched[i])) {
					if (!filter || filter(elem, context, xml)) {
						newUnmatched.push(elem);
						if (mapped) {
							map.push(i);
						}
					}
				}
			}
			return newUnmatched;
		}

		function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
			if (postFilter && !postFilter[expando]) {
				postFilter = setMatcher(postFilter);
			}
			if (postFinder && !postFinder[expando]) {
				postFinder = setMatcher(postFinder, postSelector);
			}
			return markFunction(function (seed, results, context, xml) {
				var temp, i, elem, preMap = [],
					postMap = [],
					preexisting = results.length,
					elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
					matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
					matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
				if (matcher) {
					matcher(matcherIn, matcherOut, context, xml);
				}
				if (postFilter) {
					temp = condense(matcherOut, postMap);
					postFilter(temp, [], context, xml);
					i = temp.length;
					while (i--) {
						if ((elem = temp[i])) {
							matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
						}
					}
				}
				if (seed) {
					if (postFinder || preFilter) {
						if (postFinder) {
							temp = [];
							i = matcherOut.length;
							while (i--) {
								if ((elem = matcherOut[i])) {
									temp.push((matcherIn[i] = elem));
								}
							}
							postFinder(null, (matcherOut = []), temp, xml);
						}
						i = matcherOut.length;
						while (i--) {
							if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
								seed[temp] = !(results[temp] = elem);
							}
						}
					}
				} else {
					matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
					if (postFinder) {
						postFinder(null, results, matcherOut, xml);
					} else {
						push.apply(results, matcherOut);
					}
				}
			});
		}

		function matcherFromTokens(tokens) {
			var checkContext, matcher, j, len = tokens.length,
				leadingRelative = Expr.relative[tokens[0].type],
				implicitRelative = leadingRelative || Expr.relative[" "],
				i = leadingRelative ? 1 : 0,
				matchContext = addCombinator(function (elem) {
					return elem === checkContext;
				}, implicitRelative, true),
				matchAnyContext = addCombinator(function (elem) {
					return indexOf(checkContext, elem) > -1;
				}, implicitRelative, true),
				matchers = [function (elem, context, xml) {
					var ret = (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
					checkContext = null;
					return ret;
				}];
			for (; i < len; i++) {
				if ((matcher = Expr.relative[tokens[i].type])) {
					matchers = [addCombinator(elementMatcher(matchers), matcher)];
				} else {
					matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
					if (matcher[expando]) {
						j = ++i;
						for (; j < len; j++) {
							if (Expr.relative[tokens[j].type]) {
								break;
							}
						}
						return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
							value: tokens[i - 2].type === " " ? "*" : ""
						})).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens));
					}
					matchers.push(matcher);
				}
			}
			return elementMatcher(matchers);
		}

		function matcherFromGroupMatchers(elementMatchers, setMatchers) {
			var bySet = setMatchers.length > 0,
				byElement = elementMatchers.length > 0,
				superMatcher = function (seed, context, xml, results, outermost) {
					var elem, j, matcher, matchedCount = 0,
						i = "0",
						unmatched = seed && [],
						setMatched = [],
						contextBackup = outermostContext,
						elems = seed || byElement && Expr.find["TAG"]("*", outermost),
						dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
						len = elems.length;
					if (outermost) {
						outermostContext = context !== document && context;
					}
					for (; i !== len && (elem = elems[i]) != null; i++) {
						if (byElement && elem) {
							j = 0;
							while ((matcher = elementMatchers[j++])) {
								if (matcher(elem, context, xml)) {
									results.push(elem);
									break;
								}
							}
							if (outermost) {
								dirruns = dirrunsUnique;
							}
						}
						if (bySet) {
							if ((elem = !matcher && elem)) {
								matchedCount--;
							}
							if (seed) {
								unmatched.push(elem);
							}
						}
					}
					matchedCount += i;
					if (bySet && i !== matchedCount) {
						j = 0;
						while ((matcher = setMatchers[j++])) {
							matcher(unmatched, setMatched, context, xml);
						}
						if (seed) {
							if (matchedCount > 0) {
								while (i--) {
									if (!(unmatched[i] || setMatched[i])) {
										setMatched[i] = pop.call(results);
									}
								}
							}
							setMatched = condense(setMatched);
						}
						push.apply(results, setMatched);
						if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) {
							Sizzle.uniqueSort(results);
						}
					}
					if (outermost) {
						dirruns = dirrunsUnique;
						outermostContext = contextBackup;
					}
					return unmatched;
				};
			return bySet ? markFunction(superMatcher) : superMatcher;
		}
		compile = Sizzle.compile = function (selector, match) {
			var i, setMatchers = [],
				elementMatchers = [],
				cached = compilerCache[selector + " "];
			if (!cached) {
				if (!match) {
					match = tokenize(selector);
				}
				i = match.length;
				while (i--) {
					cached = matcherFromTokens(match[i]);
					if (cached[expando]) {
						setMatchers.push(cached);
					} else {
						elementMatchers.push(cached);
					}
				}
				cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
				cached.selector = selector;
			}
			return cached;
		};
		select = Sizzle.select = function (selector, context, results, seed) {
			var i, tokens, token, type, find, compiled = typeof selector === "function" && selector,
				match = !seed && tokenize((selector = compiled.selector || selector));
			results = results || [];
			if (match.length === 1) {
				tokens = match[0] = match[0].slice(0);
				if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
					context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
					if (!context) {
						return results;
					} else if (compiled) {
						context = context.parentNode;
					}
					selector = selector.slice(tokens.shift().value.length);
				}
				i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
				while (i--) {
					token = tokens[i];
					if (Expr.relative[(type = token.type)]) {
						break;
					}
					if ((find = Expr.find[type])) {
						if ((seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
							tokens.splice(i, 1);
							selector = seed.length && toSelector(tokens);
							if (!selector) {
								push.apply(results, seed);
								return results;
							}
							break;
						}
					}
				}
			}
			(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
			return results;
		};
		support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
		support.detectDuplicates = !!hasDuplicate;
		setDocument();
		support.sortDetached = assert(function (div1) {
			return div1.compareDocumentPosition(document.createElement("div")) & 1;
		});
		if (!assert(function (div) {
				div.innerHTML = "<a href='#'></a>";
				return div.firstChild.getAttribute("href") === "#";
			})) {
			addHandle("type|href|height|width", function (elem, name, isXML) {
				if (!isXML) {
					return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
				}
			});
		}
		if (!support.attributes || !assert(function (div) {
				div.innerHTML = "<input/>";
				div.firstChild.setAttribute("value", "");
				return div.firstChild.getAttribute("value") === "";
			})) {
			addHandle("value", function (elem, name, isXML) {
				if (!isXML && elem.nodeName.toLowerCase() === "input") {
					return elem.defaultValue;
				}
			});
		}
		if (!assert(function (div) {
				return div.getAttribute("disabled") == null;
			})) {
			addHandle(booleans, function (elem, name, isXML) {
				var val;
				if (!isXML) {
					return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
				}
			});
		}
		return Sizzle;
	})(window);
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	var rneedsContext = jQuery.expr.match.needsContext;
	var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
	var risSimple = /^.[^:#\[\.,]*$/;

	function winnow(elements, qualifier, not) {
		if (jQuery.isFunction(qualifier)) {
			return jQuery.grep(elements, function (elem, i) {
				return !!qualifier.call(elem, i, elem) !== not;
			});
		}
		if (qualifier.nodeType) {
			return jQuery.grep(elements, function (elem) {
				return (elem === qualifier) !== not;
			});
		}
		if (typeof qualifier === "string") {
			if (risSimple.test(qualifier)) {
				return jQuery.filter(qualifier, elements, not);
			}
			qualifier = jQuery.filter(qualifier, elements);
		}
		return jQuery.grep(elements, function (elem) {
			return (jQuery.inArray(elem, qualifier) >= 0) !== not;
		});
	}
	jQuery.filter = function (expr, elems, not) {
		var elem = elems[0];
		if (not) {
			expr = ":not(" + expr + ")";
		}
		return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
			return elem.nodeType === 1;
		}));
	};
	jQuery.fn.extend({
		find: function (selector) {
			var i, ret = [],
				self = this,
				len = self.length;
			if (typeof selector !== "string") {
				return this.pushStack(jQuery(selector).filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(self[i], this)) {
							return true;
						}
					}
				}));
			}
			for (i = 0; i < len; i++) {
				jQuery.find(selector, self[i], ret);
			}
			ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function (selector) {
			return this.pushStack(winnow(this, selector || [], false));
		},
		not: function (selector) {
			return this.pushStack(winnow(this, selector || [], true));
		},
		is: function (selector) {
			return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
		}
	});
	var rootjQuery, document = window.document,
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		init = jQuery.fn.init = function (selector, context) {
			var match, elem;
			if (!selector) {
				return this;
			}
			if (typeof selector === "string") {
				if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
					match = [null, selector, null];
				} else {
					match = rquickExpr.exec(selector);
				}
				if (match && (match[1] || !context)) {
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;
						jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							for (match in context) {
								if (jQuery.isFunction(this[match])) {
									this[match](context[match]);
								} else {
									this.attr(match, context[match]);
								}
							}
						}
						return this;
					} else {
						elem = document.getElementById(match[2]);
						if (elem && elem.parentNode) {
							if (elem.id !== match[2]) {
								return rootjQuery.find(selector);
							}
							this.length = 1;
							this[0] = elem;
						}
						this.context = document;
						this.selector = selector;
						return this;
					}
				} else if (!context || context.jquery) {
					return (context || rootjQuery).find(selector);
				} else {
					return this.constructor(context).find(selector);
				}
			} else if (selector.nodeType) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;
			} else if (jQuery.isFunction(selector)) {
				return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) : selector(jQuery);
			}
			if (selector.selector !== undefined) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
			return jQuery.makeArray(selector, this);
		};
	init.prototype = jQuery.fn;
	rootjQuery = jQuery(document);
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	jQuery.extend({
		dir: function (elem, dir, until) {
			var matched = [],
				cur = elem[dir];
			while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
				if (cur.nodeType === 1) {
					matched.push(cur);
				}
				cur = cur[dir];
			}
			return matched;
		},
		sibling: function (n, elem) {
			var r = [];
			for (; n; n = n.nextSibling) {
				if (n.nodeType === 1 && n !== elem) {
					r.push(n);
				}
			}
			return r;
		}
	});
	jQuery.fn.extend({
		has: function (target) {
			var i, targets = jQuery(target, this),
				len = targets.length;
			return this.filter(function () {
				for (i = 0; i < len; i++) {
					if (jQuery.contains(this, targets[i])) {
						return true;
					}
				}
			});
		},
		closest: function (selectors, context) {
			var cur, i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
			for (; i < l; i++) {
				for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
					if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
						matched.push(cur);
						break;
					}
				}
			}
			return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
		},
		index: function (elem) {
			if (!elem) {
				return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
			}
			if (typeof elem === "string") {
				return jQuery.inArray(this[0], jQuery(elem));
			}
			return jQuery.inArray(elem.jquery ? elem[0] : elem, this);
		},
		add: function (selector, context) {
			return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
		},
		addBack: function (selector) {
			return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
		}
	});

	function sibling(cur, dir) {
		do {
			cur = cur[dir];
		} while (cur && cur.nodeType !== 1);
		return cur;
	}
	jQuery.each({
		parent: function (elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function (elem) {
			return jQuery.dir(elem, "parentNode");
		},
		parentsUntil: function (elem, i, until) {
			return jQuery.dir(elem, "parentNode", until);
		},
		next: function (elem) {
			return sibling(elem, "nextSibling");
		},
		prev: function (elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll: function (elem) {
			return jQuery.dir(elem, "nextSibling");
		},
		prevAll: function (elem) {
			return jQuery.dir(elem, "previousSibling");
		},
		nextUntil: function (elem, i, until) {
			return jQuery.dir(elem, "nextSibling", until);
		},
		prevUntil: function (elem, i, until) {
			return jQuery.dir(elem, "previousSibling", until);
		},
		siblings: function (elem) {
			return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
		},
		children: function (elem) {
			return jQuery.sibling(elem.firstChild);
		},
		contents: function (elem) {
			return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
		}
	}, function (name, fn) {
		jQuery.fn[name] = function (until, selector) {
			var ret = jQuery.map(this, fn, until);
			if (name.slice(-5) !== "Until") {
				selector = until;
			}
			if (selector && typeof selector === "string") {
				ret = jQuery.filter(selector, ret);
			}
			if (this.length > 1) {
				if (!guaranteedUnique[name]) {
					ret = jQuery.unique(ret);
				}
				if (rparentsprev.test(name)) {
					ret = ret.reverse();
				}
			}
			return this.pushStack(ret);
		};
	});
	var rnotwhite = (/\S+/g);
	var optionsCache = {};

	function createOptions(options) {
		var object = optionsCache[options] = {};
		jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
			object[flag] = true;
		});
		return object;
	}
	jQuery.Callbacks = function (options) {
		options = typeof options === "string" ? (optionsCache[options] || createOptions(options)) : jQuery.extend({}, options);
		var
			firing, memory, fired, firingLength, firingIndex, firingStart, list = [],
			stack = !options.once && [],
			fire = function (data) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for (; list && firingIndex < firingLength; firingIndex++) {
					if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
						memory = false;
						break;
					}
				}
				firing = false;
				if (list) {
					if (stack) {
						if (stack.length) {
							fire(stack.shift());
						}
					} else if (memory) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			self = {
				add: function () {
					if (list) {
						var start = list.length;
						(function add(args) {
							jQuery.each(args, function (_, arg) {
								var type = jQuery.type(arg);
								if (type === "function") {
									if (!options.unique || !self.has(arg)) {
										list.push(arg);
									}
								} else if (arg && arg.length && type !== "string") {
									add(arg);
								}
							});
						})(arguments);
						if (firing) {
							firingLength = list.length;
						} else if (memory) {
							firingStart = start;
							fire(memory);
						}
					}
					return this;
				},
				remove: function () {
					if (list) {
						jQuery.each(arguments, function (_, arg) {
							var index;
							while ((index = jQuery.inArray(arg, list, index)) > -1) {
								list.splice(index, 1);
								if (firing) {
									if (index <= firingLength) {
										firingLength--;
									}
									if (index <= firingIndex) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				has: function (fn) {
					return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
				},
				empty: function () {
					list = [];
					firingLength = 0;
					return this;
				},
				disable: function () {
					list = stack = memory = undefined;
					return this;
				},
				disabled: function () {
					return !list;
				},
				lock: function () {
					stack = undefined;
					if (!memory) {
						self.disable();
					}
					return this;
				},
				locked: function () {
					return !stack;
				},
				fireWith: function (context, args) {
					if (list && (!fired || stack)) {
						args = args || [];
						args = [context, args.slice ? args.slice() : args];
						if (firing) {
							stack.push(args);
						} else {
							fire(args);
						}
					}
					return this;
				},
				fire: function () {
					self.fireWith(this, arguments);
					return this;
				},
				fired: function () {
					return !!fired;
				}
			};
		return self;
	};
	jQuery.extend({
		Deferred: function (func) {
			var tuples = [
					["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
					["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
					["notify", "progress", jQuery.Callbacks("memory")]
				],
				state = "pending",
				promise = {
					state: function () {
						return state;
					},
					always: function () {
						deferred.done(arguments).fail(arguments);
						return this;
					},
					then: function () {
						var fns = arguments;
						return jQuery.Deferred(function (newDefer) {
							jQuery.each(tuples, function (i, tuple) {
								var fn = jQuery.isFunction(fns[i]) && fns[i];
								deferred[tuple[1]](function () {
									var returned = fn && fn.apply(this, arguments);
									if (returned && jQuery.isFunction(returned.promise)) {
										returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
									} else {
										newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
									}
								});
							});
							fns = null;
						}).promise();
					},
					promise: function (obj) {
						return obj != null ? jQuery.extend(obj, promise) : promise;
					}
				},
				deferred = {};
			promise.pipe = promise.then;
			jQuery.each(tuples, function (i, tuple) {
				var list = tuple[2],
					stateString = tuple[3];
				promise[tuple[1]] = list.add;
				if (stateString) {
					list.add(function () {
						state = stateString;
					}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
				}
				deferred[tuple[0]] = function () {
					deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
					return this;
				};
				deferred[tuple[0] + "With"] = list.fireWith;
			});
			promise.promise(deferred);
			if (func) {
				func.call(deferred, deferred);
			}
			return deferred;
		},
		when: function (subordinate) {
			var i = 0,
				resolveValues = slice.call(arguments),
				length = resolveValues.length,
				remaining = length !== 1 || (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
				updateFunc = function (i, contexts, values) {
					return function (value) {
						contexts[i] = this;
						values[i] = arguments.length > 1 ? slice.call(arguments) : value;
						if (values === progressValues) {
							deferred.notifyWith(contexts, values);
						} else if (!(--remaining)) {
							deferred.resolveWith(contexts, values);
						}
					};
				},
				progressValues, progressContexts, resolveContexts;
			if (length > 1) {
				progressValues = new Array(length);
				progressContexts = new Array(length);
				resolveContexts = new Array(length);
				for (; i < length; i++) {
					if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
						resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
					} else {
						--remaining;
					}
				}
			}
			if (!remaining) {
				deferred.resolveWith(resolveContexts, resolveValues);
			}
			return deferred.promise();
		}
	});
	var readyList;
	jQuery.fn.ready = function (fn) {
		jQuery.ready.promise().done(fn);
		return this;
	};
	jQuery.extend({
		isReady: false,
		readyWait: 1,
		holdReady: function (hold) {
			if (hold) {
				jQuery.readyWait++;
			} else {
				jQuery.ready(true);
			}
		},
		ready: function (wait) {
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
				return;
			}
			if (!document.body) {
				return setTimeout(jQuery.ready);
			}
			jQuery.isReady = true;
			if (wait !== true && --jQuery.readyWait > 0) {
				return;
			}
			readyList.resolveWith(document, [jQuery]);
			if (jQuery.fn.triggerHandler) {
				jQuery(document).triggerHandler("ready");
				jQuery(document).off("ready");
			}
		}
	});

	function detach() {
		if (document.addEventListener) {
			document.removeEventListener("DOMContentLoaded", completed, false);
			window.removeEventListener("load", completed, false);
		} else {
			document.detachEvent("onreadystatechange", completed);
			window.detachEvent("onload", completed);
		}
	}

	function completed() {
		if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
			detach();
			jQuery.ready();
		}
	}
	jQuery.ready.promise = function (obj) {
		if (!readyList) {
			readyList = jQuery.Deferred();
			if (document.readyState === "complete") {
				setTimeout(jQuery.ready);
			} else if (document.addEventListener) {
				document.addEventListener("DOMContentLoaded", completed, false);
				window.addEventListener("load", completed, false);
			} else {
				document.attachEvent("onreadystatechange", completed);
				window.attachEvent("onload", completed);
				var top = false;
				try {
					top = window.frameElement == null && document.documentElement;
				} catch (e) {}
				if (top && top.doScroll) {
					(function doScrollCheck() {
						if (!jQuery.isReady) {
							try {
								top.doScroll("left");
							} catch (e) {
								return setTimeout(doScrollCheck, 50);
							}
							detach();
							jQuery.ready();
						}
					})();
				}
			}
		}
		return readyList.promise(obj);
	};
	var strundefined = typeof undefined;
	var i;
	for (i in jQuery(support)) {
		break;
	}
	support.ownLast = i !== "0";
	support.inlineBlockNeedsLayout = false;
	jQuery(function () {
		var val, div, body, container;
		body = document.getElementsByTagName("body")[0];
		if (!body || !body.style) {
			return;
		}
		div = document.createElement("div");
		container = document.createElement("div");
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild(container).appendChild(div);
		if (typeof div.style.zoom !== strundefined) {
			div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
			support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
			if (val) {
				body.style.zoom = 1;
			}
		}
		body.removeChild(container);
	});
	(function () {
		var div = document.createElement("div");
		if (support.deleteExpando == null) {
			support.deleteExpando = true;
			try {
				delete div.test;
			} catch (e) {
				support.deleteExpando = false;
			}
		}
		div = null;
	})();
	jQuery.acceptData = function (elem) {
		var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
			nodeType = +elem.nodeType || 1;
		return nodeType !== 1 && nodeType !== 9 ? false : !noData || noData !== true && elem.getAttribute("classid") === noData;
	};
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;

	function dataAttr(elem, key, data) {
		if (data === undefined && elem.nodeType === 1) {
			var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
			data = elem.getAttribute(name);
			if (typeof data === "string") {
				try {
					data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
				} catch (e) {}
				jQuery.data(elem, key, data);
			} else {
				data = undefined;
			}
		}
		return data;
	}

	function isEmptyDataObject(obj) {
		var name;
		for (name in obj) {
			if (name === "data" && jQuery.isEmptyObject(obj[name])) {
				continue;
			}
			if (name !== "toJSON") {
				return false;
			}
		}
		return true;
	}

	function internalData(elem, name, data, pvt) {
		if (!jQuery.acceptData(elem)) {
			return;
		}
		var ret, thisCache, internalKey = jQuery.expando,
			isNode = elem.nodeType,
			cache = isNode ? jQuery.cache : elem,
			id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
		if ((!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string") {
			return;
		}
		if (!id) {
			if (isNode) {
				id = elem[internalKey] = deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}
		if (!cache[id]) {
			cache[id] = isNode ? {} : {
				toJSON: jQuery.noop
			};
		}
		if (typeof name === "object" || typeof name === "function") {
			if (pvt) {
				cache[id] = jQuery.extend(cache[id], name);
			} else {
				cache[id].data = jQuery.extend(cache[id].data, name);
			}
		}
		thisCache = cache[id];
		if (!pvt) {
			if (!thisCache.data) {
				thisCache.data = {};
			}
			thisCache = thisCache.data;
		}
		if (data !== undefined) {
			thisCache[jQuery.camelCase(name)] = data;
		}
		if (typeof name === "string") {
			ret = thisCache[name];
			if (ret == null) {
				ret = thisCache[jQuery.camelCase(name)];
			}
		} else {
			ret = thisCache;
		}
		return ret;
	}

	function internalRemoveData(elem, name, pvt) {
		if (!jQuery.acceptData(elem)) {
			return;
		}
		var thisCache, i, isNode = elem.nodeType,
			cache = isNode ? jQuery.cache : elem,
			id = isNode ? elem[jQuery.expando] : jQuery.expando;
		if (!cache[id]) {
			return;
		}
		if (name) {
			thisCache = pvt ? cache[id] : cache[id].data;
			if (thisCache) {
				if (!jQuery.isArray(name)) {
					if (name in thisCache) {
						name = [name];
					} else {
						name = jQuery.camelCase(name);
						if (name in thisCache) {
							name = [name];
						} else {
							name = name.split(" ");
						}
					}
				} else {
					name = name.concat(jQuery.map(name, jQuery.camelCase));
				}
				i = name.length;
				while (i--) {
					delete thisCache[name[i]];
				}
				if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
					return;
				}
			}
		}
		if (!pvt) {
			delete cache[id].data;
			if (!isEmptyDataObject(cache[id])) {
				return;
			}
		}
		if (isNode) {
			jQuery.cleanData([elem], true);
		} else if (support.deleteExpando || cache != cache.window) {
			delete cache[id];
		} else {
			cache[id] = null;
		}
	}
	jQuery.extend({
		cache: {},
		noData: {
			"applet ": true,
			"embed ": true,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function (elem) {
			elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
			return !!elem && !isEmptyDataObject(elem);
		},
		data: function (elem, name, data) {
			return internalData(elem, name, data);
		},
		removeData: function (elem, name) {
			return internalRemoveData(elem, name);
		},
		_data: function (elem, name, data) {
			return internalData(elem, name, data, true);
		},
		_removeData: function (elem, name) {
			return internalRemoveData(elem, name, true);
		}
	});
	jQuery.fn.extend({
		data: function (key, value) {
			var i, name, data, elem = this[0],
				attrs = elem && elem.attributes;
			if (key === undefined) {
				if (this.length) {
					data = jQuery.data(elem);
					if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
						i = attrs.length;
						while (i--) {
							if (attrs[i]) {
								name = attrs[i].name;
								if (name.indexOf("data-") === 0) {
									name = jQuery.camelCase(name.slice(5));
									dataAttr(elem, name, data[name]);
								}
							}
						}
						jQuery._data(elem, "parsedAttrs", true);
					}
				}
				return data;
			}
			if (typeof key === "object") {
				return this.each(function () {
					jQuery.data(this, key);
				});
			}
			return arguments.length > 1 ? this.each(function () {
				jQuery.data(this, key, value);
			}) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : undefined;
		},
		removeData: function (key) {
			return this.each(function () {
				jQuery.removeData(this, key);
			});
		}
	});
	jQuery.extend({
		queue: function (elem, type, data) {
			var queue;
			if (elem) {
				type = (type || "fx") + "queue";
				queue = jQuery._data(elem, type);
				if (data) {
					if (!queue || jQuery.isArray(data)) {
						queue = jQuery._data(elem, type, jQuery.makeArray(data));
					} else {
						queue.push(data);
					}
				}
				return queue || [];
			}
		},
		dequeue: function (elem, type) {
			type = type || "fx";
			var queue = jQuery.queue(elem, type),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks(elem, type),
				next = function () {
					jQuery.dequeue(elem, type);
				};
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}
			if (fn) {
				if (type === "fx") {
					queue.unshift("inprogress");
				}
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}
			if (!startLength && hooks) {
				hooks.empty.fire();
			}
		},
		_queueHooks: function (elem, type) {
			var key = type + "queueHooks";
			return jQuery._data(elem, key) || jQuery._data(elem, key, {
				empty: jQuery.Callbacks("once memory").add(function () {
					jQuery._removeData(elem, type + "queue");
					jQuery._removeData(elem, key);
				})
			});
		}
	});
	jQuery.fn.extend({
		queue: function (type, data) {
			var setter = 2;
			if (typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}
			if (arguments.length < setter) {
				return jQuery.queue(this[0], type);
			}
			return data === undefined ? this : this.each(function () {
				var queue = jQuery.queue(this, type, data);
				jQuery._queueHooks(this, type);
				if (type === "fx" && queue[0] !== "inprogress") {
					jQuery.dequeue(this, type);
				}
			});
		},
		dequeue: function (type) {
			return this.each(function () {
				jQuery.dequeue(this, type);
			});
		},
		clearQueue: function (type) {
			return this.queue(type || "fx", []);
		},
		promise: function (type, obj) {
			var tmp, count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function () {
					if (!(--count)) {
						defer.resolveWith(elements, [elements]);
					}
				};
			if (typeof type !== "string") {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
			while (i--) {
				tmp = jQuery._data(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
	var cssExpand = ["Top", "Right", "Bottom", "Left"];
	var isHidden = function (elem, el) {
		elem = el || elem;
		return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
	};
	var access = jQuery.access = function (elems, fn, key, value, chainable, emptyGet, raw) {
		var i = 0,
			length = elems.length,
			bulk = key == null;
		if (jQuery.type(key) === "object") {
			chainable = true;
			for (i in key) {
				jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
			}
		} else if (value !== undefined) {
			chainable = true;
			if (!jQuery.isFunction(value)) {
				raw = true;
			}
			if (bulk) {
				if (raw) {
					fn.call(elems, value);
					fn = null;
				} else {
					bulk = fn;
					fn = function (elem, key, value) {
						return bulk.call(jQuery(elem), value);
					};
				}
			}
			if (fn) {
				for (; i < length; i++) {
					fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
				}
			}
		}
		return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
	};
	var rcheckableType = (/^(?:checkbox|radio)$/i);
	(function () {
		var input = document.createElement("input"),
			div = document.createElement("div"),
			fragment = document.createDocumentFragment();
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		support.leadingWhitespace = div.firstChild.nodeType === 3;
		support.tbody = !div.getElementsByTagName("tbody").length;
		support.htmlSerialize = !!div.getElementsByTagName("link").length;
		support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
		input.type = "checkbox";
		input.checked = true;
		fragment.appendChild(input);
		support.appendChecked = input.checked;
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
		fragment.appendChild(div);
		div.innerHTML = "<input type='radio' checked='checked' name='t'/>";
		support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
		support.noCloneEvent = true;
		if (div.attachEvent) {
			div.attachEvent("onclick", function () {
				support.noCloneEvent = false;
			});
			div.cloneNode(true).click();
		}
		if (support.deleteExpando == null) {
			support.deleteExpando = true;
			try {
				delete div.test;
			} catch (e) {
				support.deleteExpando = false;
			}
		}
	})();
	(function () {
		var i, eventName, div = document.createElement("div");
		for (i in {
				submit: true,
				change: true,
				focusin: true
			}) {
			eventName = "on" + i;
			if (!(support[i + "Bubbles"] = eventName in window)) {
				div.setAttribute(eventName, "t");
				support[i + "Bubbles"] = div.attributes[eventName].expando === false;
			}
		}
		div = null;
	})();
	var rformElems = /^(?:input|select|textarea)$/i,
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch (err) {}
	}
	jQuery.event = {
		global: {},
		add: function (elem, types, handler, data, selector) {
			var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
			if (!elemData) {
				return;
			}
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
			if (!handler.guid) {
				handler.guid = jQuery.guid++;
			}
			if (!(events = elemData.events)) {
				events = elemData.events = {};
			}
			if (!(eventHandle = elemData.handle)) {
				eventHandle = elemData.handle = function (e) {
					return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
				};
				eventHandle.elem = elem;
			}
			types = (types || "").match(rnotwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();
				if (!type) {
					continue;
				}
				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				special = jQuery.event.special[type] || {};
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test(selector),
					namespace: namespaces.join(".")
				}, handleObjIn);
				if (!(handlers = events[type])) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;
					if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
						if (elem.addEventListener) {
							elem.addEventListener(type, eventHandle, false);
						} else if (elem.attachEvent) {
							elem.attachEvent("on" + type, eventHandle);
						}
					}
				}
				if (special.add) {
					special.add.call(elem, handleObj);
					if (!handleObj.handler.guid) {
						handleObj.handler.guid = handler.guid;
					}
				}
				if (selector) {
					handlers.splice(handlers.delegateCount++, 0, handleObj);
				} else {
					handlers.push(handleObj);
				}
				jQuery.event.global[type] = true;
			}
			elem = null;
		},
		remove: function (elem, types, handler, selector, mappedTypes) {
			var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
			if (!elemData || !(events = elemData.events)) {
				return;
			}
			types = (types || "").match(rnotwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();
				if (!type) {
					for (type in events) {
						jQuery.event.remove(elem, type + types[t], handler, selector, true);
					}
					continue;
				}
				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				handlers = events[type] || [];
				tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
				origCount = j = handlers.length;
				while (j--) {
					handleObj = handlers[j];
					if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
						handlers.splice(j, 1);
						if (handleObj.selector) {
							handlers.delegateCount--;
						}
						if (special.remove) {
							special.remove.call(elem, handleObj);
						}
					}
				}
				if (origCount && !handlers.length) {
					if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
						jQuery.removeEvent(elem, type, elemData.handle);
					}
					delete events[type];
				}
			}
			if (jQuery.isEmptyObject(events)) {
				delete elemData.handle;
				jQuery._removeData(elem, "events");
			}
		},
		trigger: function (event, data, elem, onlyHandlers) {
			var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [elem || document],
				type = hasOwn.call(event, "type") ? event.type : event,
				namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
			cur = tmp = elem = elem || document;
			if (elem.nodeType === 3 || elem.nodeType === 8) {
				return;
			}
			if (rfocusMorph.test(type + jQuery.event.triggered)) {
				return;
			}
			if (type.indexOf(".") >= 0) {
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;
			event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
			event.result = undefined;
			if (!event.target) {
				event.target = elem;
			}
			data = data == null ? [event] : jQuery.makeArray(data, [event]);
			special = jQuery.event.special[type] || {};
			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
				return;
			}
			if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
				bubbleType = special.delegateType || type;
				if (!rfocusMorph.test(bubbleType + type)) {
					cur = cur.parentNode;
				}
				for (; cur; cur = cur.parentNode) {
					eventPath.push(cur);
					tmp = cur;
				}
				if (tmp === (elem.ownerDocument || document)) {
					eventPath.push(tmp.defaultView || tmp.parentWindow || window);
				}
			}
			i = 0;
			while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
				event.type = i > 1 ? bubbleType : special.bindType || type;
				handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
				if (handle) {
					handle.apply(cur, data);
				}
				handle = ontype && cur[ontype];
				if (handle && handle.apply && jQuery.acceptData(cur)) {
					event.result = handle.apply(cur, data);
					if (event.result === false) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
			if (!onlyHandlers && !event.isDefaultPrevented()) {
				if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
					if (ontype && elem[type] && !jQuery.isWindow(elem)) {
						tmp = elem[ontype];
						if (tmp) {
							elem[ontype] = null;
						}
						jQuery.event.triggered = type;
						try {
							elem[type]();
						} catch (e) {}
						jQuery.event.triggered = undefined;
						if (tmp) {
							elem[ontype] = tmp;
						}
					}
				}
			}
			return event.result;
		},
		dispatch: function (event) {
			event = jQuery.event.fix(event);
			var i, ret, handleObj, matched, j, handlerQueue = [],
				args = slice.call(arguments),
				handlers = (jQuery._data(this, "events") || {})[event.type] || [],
				special = jQuery.event.special[event.type] || {};
			args[0] = event;
			event.delegateTarget = this;
			if (special.preDispatch && special.preDispatch.call(this, event) === false) {
				return;
			}
			handlerQueue = jQuery.event.handlers.call(this, event, handlers);
			i = 0;
			while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
				event.currentTarget = matched.elem;
				j = 0;
				while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
					if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
						event.handleObj = handleObj;
						event.data = handleObj.data;
						ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
						if (ret !== undefined) {
							if ((event.result = ret) === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
			if (special.postDispatch) {
				special.postDispatch.call(this, event);
			}
			return event.result;
		},
		handlers: function (event, handlers) {
			var sel, handleObj, matches, i, handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
			if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
				for (; cur != this; cur = cur.parentNode || this) {
					if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
						matches = [];
						for (i = 0; i < delegateCount; i++) {
							handleObj = handlers[i];
							sel = handleObj.selector + " ";
							if (matches[sel] === undefined) {
								matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
							}
							if (matches[sel]) {
								matches.push(handleObj);
							}
						}
						if (matches.length) {
							handlerQueue.push({
								elem: cur,
								handlers: matches
							});
						}
					}
				}
			}
			if (delegateCount < handlers.length) {
				handlerQueue.push({
					elem: this,
					handlers: handlers.slice(delegateCount)
				});
			}
			return handlerQueue;
		},
		fix: function (event) {
			if (event[jQuery.expando]) {
				return event;
			}
			var i, prop, copy, type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[type];
			if (!fixHook) {
				this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
			}
			copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
			event = new jQuery.Event(originalEvent);
			i = copy.length;
			while (i--) {
				prop = copy[i];
				event[prop] = originalEvent[prop];
			}
			if (!event.target) {
				event.target = originalEvent.srcElement || document;
			}
			if (event.target.nodeType === 3) {
				event.target = event.target.parentNode;
			}
			event.metaKey = !!event.metaKey;
			return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (event, original) {
				if (event.which == null) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
				return event;
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (event, original) {
				var body, eventDoc, doc, button = original.button,
					fromElement = original.fromElement;
				if (event.pageX == null && original.clientX != null) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
					event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
					event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
				}
				if (!event.relatedTarget && fromElement) {
					event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
				}
				if (!event.which && button !== undefined) {
					event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
				}
				return event;
			}
		},
		special: {
			load: {
				noBubble: true
			},
			focus: {
				trigger: function () {
					if (this !== safeActiveElement() && this.focus) {
						try {
							this.focus();
							return false;
						} catch (e) {}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					if (this === safeActiveElement() && this.blur) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
						this.click();
						return false;
					}
				},
				_default: function (event) {
					return jQuery.nodeName(event.target, "a");
				}
			},
			beforeunload: {
				postDispatch: function (event) {
					if (event.result !== undefined && event.originalEvent) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},
		simulate: function (type, elem, event, bubble) {
			var e = jQuery.extend(new jQuery.Event(), event, {
				type: type,
				isSimulated: true,
				originalEvent: {}
			});
			if (bubble) {
				jQuery.event.trigger(e, null, elem);
			} else {
				jQuery.event.dispatch.call(elem, e);
			}
			if (e.isDefaultPrevented()) {
				event.preventDefault();
			}
		}
	};
	jQuery.removeEvent = document.removeEventListener ? function (elem, type, handle) {
		if (elem.removeEventListener) {
			elem.removeEventListener(type, handle, false);
		}
	} : function (elem, type, handle) {
		var name = "on" + type;
		if (elem.detachEvent) {
			if (typeof elem[name] === strundefined) {
				elem[name] = null;
			}
			elem.detachEvent(name, handle);
		}
	};
	jQuery.Event = function (src, props) {
		if (!(this instanceof jQuery.Event)) {
			return new jQuery.Event(src, props);
		}
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;
			this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
		} else {
			this.type = src;
		}
		if (props) {
			jQuery.extend(this, props);
		}
		this.timeStamp = src && src.timeStamp || jQuery.now();
		this[jQuery.expando] = true;
	};
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		preventDefault: function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = returnTrue;
			if (!e) {
				return;
			}
			if (e.preventDefault) {
				e.preventDefault();
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function () {
			var e = this.originalEvent;
			this.isPropagationStopped = returnTrue;
			if (!e) {
				return;
			}
			if (e.stopPropagation) {
				e.stopPropagation();
			}
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function () {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = returnTrue;
			if (e && e.stopImmediatePropagation) {
				e.stopImmediatePropagation();
			}
			this.stopPropagation();
		}
	};
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (orig, fix) {
		jQuery.event.special[orig] = {
			delegateType: fix,
			bindType: fix,
			handle: function (event) {
				var ret, target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
				if (!related || (related !== target && !jQuery.contains(target, related))) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});
	if (!support.submitBubbles) {
		jQuery.event.special.submit = {
			setup: function () {
				if (jQuery.nodeName(this, "form")) {
					return false;
				}
				jQuery.event.add(this, "click._submit keypress._submit", function (e) {
					var elem = e.target,
						form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
					if (form && !jQuery._data(form, "submitBubbles")) {
						jQuery.event.add(form, "submit._submit", function (event) {
							event._submit_bubble = true;
						});
						jQuery._data(form, "submitBubbles", true);
					}
				});
			},
			postDispatch: function (event) {
				if (event._submit_bubble) {
					delete event._submit_bubble;
					if (this.parentNode && !event.isTrigger) {
						jQuery.event.simulate("submit", this.parentNode, event, true);
					}
				}
			},
			teardown: function () {
				if (jQuery.nodeName(this, "form")) {
					return false;
				}
				jQuery.event.remove(this, "._submit");
			}
		};
	}
	if (!support.changeBubbles) {
		jQuery.event.special.change = {
			setup: function () {
				if (rformElems.test(this.nodeName)) {
					if (this.type === "checkbox" || this.type === "radio") {
						jQuery.event.add(this, "propertychange._change", function (event) {
							if (event.originalEvent.propertyName === "checked") {
								this._just_changed = true;
							}
						});
						jQuery.event.add(this, "click._change", function (event) {
							if (this._just_changed && !event.isTrigger) {
								this._just_changed = false;
							}
							jQuery.event.simulate("change", this, event, true);
						});
					}
					return false;
				}
				jQuery.event.add(this, "beforeactivate._change", function (e) {
					var elem = e.target;
					if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
						jQuery.event.add(elem, "change._change", function (event) {
							if (this.parentNode && !event.isSimulated && !event.isTrigger) {
								jQuery.event.simulate("change", this.parentNode, event, true);
							}
						});
						jQuery._data(elem, "changeBubbles", true);
					}
				});
			},
			handle: function (event) {
				var elem = event.target;
				if (this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox")) {
					return event.handleObj.handler.apply(this, arguments);
				}
			},
			teardown: function () {
				jQuery.event.remove(this, "._change");
				return !rformElems.test(this.nodeName);
			}
		};
	}
	if (!support.focusinBubbles) {
		jQuery.each({
			focus: "focusin",
			blur: "focusout"
		}, function (orig, fix) {
			var handler = function (event) {
				jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
			};
			jQuery.event.special[fix] = {
				setup: function () {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data(doc, fix);
					if (!attaches) {
						doc.addEventListener(orig, handler, true);
					}
					jQuery._data(doc, fix, (attaches || 0) + 1);
				},
				teardown: function () {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data(doc, fix) - 1;
					if (!attaches) {
						doc.removeEventListener(orig, handler, true);
						jQuery._removeData(doc, fix);
					} else {
						jQuery._data(doc, fix, attaches);
					}
				}
			};
		});
	}
	jQuery.fn.extend({
		on: function (types, selector, data, fn, one) {
			var type, origFn;
			if (typeof types === "object") {
				if (typeof selector !== "string") {
					data = data || selector;
					selector = undefined;
				}
				for (type in types) {
					this.on(type, selector, data, types[type], one);
				}
				return this;
			}
			if (data == null && fn == null) {
				fn = selector;
				data = selector = undefined;
			} else if (fn == null) {
				if (typeof selector === "string") {
					fn = data;
					data = undefined;
				} else {
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if (fn === false) {
				fn = returnFalse;
			} else if (!fn) {
				return this;
			}
			if (one === 1) {
				origFn = fn;
				fn = function (event) {
					jQuery().off(event);
					return origFn.apply(this, arguments);
				};
				fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
			}
			return this.each(function () {
				jQuery.event.add(this, types, fn, data, selector);
			});
		},
		one: function (types, selector, data, fn) {
			return this.on(types, selector, data, fn, 1);
		},
		off: function (types, selector, fn) {
			var handleObj, type;
			if (types && types.preventDefault && types.handleObj) {
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
				return this;
			}
			if (typeof types === "object") {
				for (type in types) {
					this.off(type, selector, types[type]);
				}
				return this;
			}
			if (selector === false || typeof selector === "function") {
				fn = selector;
				selector = undefined;
			}
			if (fn === false) {
				fn = returnFalse;
			}
			return this.each(function () {
				jQuery.event.remove(this, types, fn, selector);
			});
		},
		trigger: function (type, data) {
			return this.each(function () {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler: function (type, data) {
			var elem = this[0];
			if (elem) {
				return jQuery.event.trigger(type, data, elem, true);
			}
		}
	});

	function createSafeFragment(document) {
		var list = nodeNames.split("|"),
			safeFrag = document.createDocumentFragment();
		if (safeFrag.createElement) {
			while (list.length) {
				safeFrag.createElement(list.pop());
			}
		}
		return safeFrag;
	}
	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
		rleadingWhitespace = /^\s+/,
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rtbody = /<tbody/i,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		wrapMap = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		safeFragment = createSafeFragment(document),
		fragmentDiv = safeFragment.appendChild(document.createElement("div"));
	wrapMap.optgroup = wrapMap.option;
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	function getAll(context, tag) {
		var elems, elem, i = 0,
			found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== strundefined ? context.querySelectorAll(tag || "*") : undefined;
		if (!found) {
			for (found = [], elems = context.childNodes || context;
				(elem = elems[i]) != null; i++) {
				if (!tag || jQuery.nodeName(elem, tag)) {
					found.push(elem);
				} else {
					jQuery.merge(found, getAll(elem, tag));
				}
			}
		}
		return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
	}

	function fixDefaultChecked(elem) {
		if (rcheckableType.test(elem.type)) {
			elem.defaultChecked = elem.checked;
		}
	}

	function manipulationTarget(elem, content) {
		return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
	}

	function disableScript(elem) {
		elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
		return elem;
	}

	function restoreScript(elem) {
		var match = rscriptTypeMasked.exec(elem.type);
		if (match) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}
		return elem;
	}

	function setGlobalEval(elems, refElements) {
		var elem, i = 0;
		for (;
			(elem = elems[i]) != null; i++) {
			jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
		}
	}

	function cloneCopyEvent(src, dest) {
		if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
			return;
		}
		var type, i, l, oldData = jQuery._data(src),
			curData = jQuery._data(dest, oldData),
			events = oldData.events;
		if (events) {
			delete curData.handle;
			curData.events = {};
			for (type in events) {
				for (i = 0, l = events[type].length; i < l; i++) {
					jQuery.event.add(dest, type, events[type][i]);
				}
			}
		}
		if (curData.data) {
			curData.data = jQuery.extend({}, curData.data);
		}
	}

	function fixCloneNodeIssues(src, dest) {
		var nodeName, e, data;
		if (dest.nodeType !== 1) {
			return;
		}
		nodeName = dest.nodeName.toLowerCase();
		if (!support.noCloneEvent && dest[jQuery.expando]) {
			data = jQuery._data(dest);
			for (e in data.events) {
				jQuery.removeEvent(dest, e, data.handle);
			}
			dest.removeAttribute(jQuery.expando);
		}
		if (nodeName === "script" && dest.text !== src.text) {
			disableScript(dest).text = src.text;
			restoreScript(dest);
		} else if (nodeName === "object") {
			if (dest.parentNode) {
				dest.outerHTML = src.outerHTML;
			}
			if (support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML))) {
				dest.innerHTML = src.innerHTML;
			}
		} else if (nodeName === "input" && rcheckableType.test(src.type)) {
			dest.defaultChecked = dest.checked = src.checked;
			if (dest.value !== src.value) {
				dest.value = src.value;
			}
		} else if (nodeName === "option") {
			dest.defaultSelected = dest.selected = src.defaultSelected;
		} else if (nodeName === "input" || nodeName === "textarea") {
			dest.defaultValue = src.defaultValue;
		}
	}
	jQuery.extend({
		clone: function (elem, dataAndEvents, deepDataAndEvents) {
			var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
			if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
				clone = elem.cloneNode(true);
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
			}
			if ((!support.noCloneEvent || !support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
				destElements = getAll(clone);
				srcElements = getAll(elem);
				for (i = 0;
					(node = srcElements[i]) != null; ++i) {
					if (destElements[i]) {
						fixCloneNodeIssues(node, destElements[i]);
					}
				}
			}
			if (dataAndEvents) {
				if (deepDataAndEvents) {
					srcElements = srcElements || getAll(elem);
					destElements = destElements || getAll(clone);
					for (i = 0;
						(node = srcElements[i]) != null; i++) {
						cloneCopyEvent(node, destElements[i]);
					}
				} else {
					cloneCopyEvent(elem, clone);
				}
			}
			destElements = getAll(clone, "script");
			if (destElements.length > 0) {
				setGlobalEval(destElements, !inPage && getAll(elem, "script"));
			}
			destElements = srcElements = node = null;
			return clone;
		},
		buildFragment: function (elems, context, scripts, selection) {
			var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length,
				safe = createSafeFragment(context),
				nodes = [],
				i = 0;
			for (; i < l; i++) {
				elem = elems[i];
				if (elem || elem === 0) {
					if (jQuery.type(elem) === "object") {
						jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
					} else if (!rhtml.test(elem)) {
						nodes.push(context.createTextNode(elem));
					} else {
						tmp = tmp || safe.appendChild(context.createElement("div"));
						tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
						wrap = wrapMap[tag] || wrapMap._default;
						tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
						j = wrap[0];
						while (j--) {
							tmp = tmp.lastChild;
						}
						if (!support.leadingWhitespace && rleadingWhitespace.test(elem)) {
							nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
						}
						if (!support.tbody) {
							elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
							j = elem && elem.childNodes.length;
							while (j--) {
								if (jQuery.nodeName((tbody = elem.childNodes[j]), "tbody") && !tbody.childNodes.length) {
									elem.removeChild(tbody);
								}
							}
						}
						jQuery.merge(nodes, tmp.childNodes);
						tmp.textContent = "";
						while (tmp.firstChild) {
							tmp.removeChild(tmp.firstChild);
						}
						tmp = safe.lastChild;
					}
				}
			}
			if (tmp) {
				safe.removeChild(tmp);
			}
			if (!support.appendChecked) {
				jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
			}
			i = 0;
			while ((elem = nodes[i++])) {
				if (selection && jQuery.inArray(elem, selection) !== -1) {
					continue;
				}
				contains = jQuery.contains(elem.ownerDocument, elem);
				tmp = getAll(safe.appendChild(elem), "script");
				if (contains) {
					setGlobalEval(tmp);
				}
				if (scripts) {
					j = 0;
					while ((elem = tmp[j++])) {
						if (rscriptType.test(elem.type || "")) {
							scripts.push(elem);
						}
					}
				}
			}
			tmp = null;
			return safe;
		},
		cleanData: function (elems, acceptData) {
			var elem, type, id, data, i = 0,
				internalKey = jQuery.expando,
				cache = jQuery.cache,
				deleteExpando = support.deleteExpando,
				special = jQuery.event.special;
			for (;
				(elem = elems[i]) != null; i++) {
				if (acceptData || jQuery.acceptData(elem)) {
					id = elem[internalKey];
					data = id && cache[id];
					if (data) {
						if (data.events) {
							for (type in data.events) {
								if (special[type]) {
									jQuery.event.remove(elem, type);
								} else {
									jQuery.removeEvent(elem, type, data.handle);
								}
							}
						}
						if (cache[id]) {
							delete cache[id];
							if (deleteExpando) {
								delete elem[internalKey];
							} else if (typeof elem.removeAttribute !== strundefined) {
								elem.removeAttribute(internalKey);
							} else {
								elem[internalKey] = null;
							}
							deletedIds.push(id);
						}
					}
				}
			}
		}
	});
	jQuery.fn.extend({
		text: function (value) {
			return access(this, function (value) {
				return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
			}, null, value, arguments.length);
		},
		append: function () {
			return this.domManip(arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.appendChild(elem);
				}
			});
		},
		prepend: function () {
			return this.domManip(arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.insertBefore(elem, target.firstChild);
				}
			});
		},
		before: function () {
			return this.domManip(arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this);
				}
			});
		},
		after: function () {
			return this.domManip(arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this.nextSibling);
				}
			});
		},
		remove: function (selector, keepData) {
			var elem, elems = selector ? jQuery.filter(selector, this) : this,
				i = 0;
			for (;
				(elem = elems[i]) != null; i++) {
				if (!keepData && elem.nodeType === 1) {
					jQuery.cleanData(getAll(elem));
				}
				if (elem.parentNode) {
					if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
						setGlobalEval(getAll(elem, "script"));
					}
					elem.parentNode.removeChild(elem);
				}
			}
			return this;
		},
		empty: function () {
			var elem, i = 0;
			for (;
				(elem = this[i]) != null; i++) {
				if (elem.nodeType === 1) {
					jQuery.cleanData(getAll(elem, false));
				}
				while (elem.firstChild) {
					elem.removeChild(elem.firstChild);
				}
				if (elem.options && jQuery.nodeName(elem, "select")) {
					elem.options.length = 0;
				}
			}
			return this;
		},
		clone: function (dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
			return this.map(function () {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},
		html: function (value) {
			return access(this, function (value) {
				var elem = this[0] || {},
					i = 0,
					l = this.length;
				if (value === undefined) {
					return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
				}
				if (typeof value === "string" && !rnoInnerhtml.test(value) && (support.htmlSerialize || !rnoshimcache.test(value)) && (support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
					value = value.replace(rxhtmlTag, "<$1></$2>");
					try {
						for (; i < l; i++) {
							elem = this[i] || {};
							if (elem.nodeType === 1) {
								jQuery.cleanData(getAll(elem, false));
								elem.innerHTML = value;
							}
						}
						elem = 0;
					} catch (e) {}
				}
				if (elem) {
					this.empty().append(value);
				}
			}, null, value, arguments.length);
		},
		replaceWith: function () {
			var arg = arguments[0];
			this.domManip(arguments, function (elem) {
				arg = this.parentNode;
				jQuery.cleanData(getAll(this));
				if (arg) {
					arg.replaceChild(elem, this);
				}
			});
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},
		detach: function (selector) {
			return this.remove(selector, true);
		},
		domManip: function (args, callback) {
			args = concat.apply([], args);
			var first, node, hasScripts, scripts, doc, fragment, i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[0],
				isFunction = jQuery.isFunction(value);
			if (isFunction || (l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value))) {
				return this.each(function (index) {
					var self = set.eq(index);
					if (isFunction) {
						args[0] = value.call(this, index, self.html());
					}
					self.domManip(args, callback);
				});
			}
			if (l) {
				fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
				first = fragment.firstChild;
				if (fragment.childNodes.length === 1) {
					fragment = first;
				}
				if (first) {
					scripts = jQuery.map(getAll(fragment, "script"), disableScript);
					hasScripts = scripts.length;
					for (; i < l; i++) {
						node = fragment;
						if (i !== iNoClone) {
							node = jQuery.clone(node, true, true);
							if (hasScripts) {
								jQuery.merge(scripts, getAll(node, "script"));
							}
						}
						callback.call(this[i], node, i);
					}
					if (hasScripts) {
						doc = scripts[scripts.length - 1].ownerDocument;
						jQuery.map(scripts, restoreScript);
						for (i = 0; i < hasScripts; i++) {
							node = scripts[i];
							if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
								if (node.src) {
									if (jQuery._evalUrl) {
										jQuery._evalUrl(node.src);
									}
								} else {
									jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
								}
							}
						}
					}
					fragment = first = null;
				}
			}
			return this;
		}
	});
	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (name, original) {
		jQuery.fn[name] = function (selector) {
			var elems, i = 0,
				ret = [],
				insert = jQuery(selector),
				last = insert.length - 1;
			for (; i <= last; i++) {
				elems = i === last ? this : this.clone(true);
				jQuery(insert[i])[original](elems);
				push.apply(ret, elems.get());
			}
			return this.pushStack(ret);
		};
	});
	var iframe, elemdisplay = {};

	function actualDisplay(name, doc) {
		var style, elem = jQuery(doc.createElement(name)).appendTo(doc.body),
			display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");
		elem.detach();
		return display;
	}

	function defaultDisplay(nodeName) {
		var doc = document,
			display = elemdisplay[nodeName];
		if (!display) {
			display = actualDisplay(nodeName, doc);
			if (display === "none" || !display) {
				iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
				doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
				doc.write();
				doc.close();
				display = actualDisplay(nodeName, doc);
				iframe.detach();
			}
			elemdisplay[nodeName] = display;
		}
		return display;
	}
	(function () {
		var shrinkWrapBlocksVal;
		support.shrinkWrapBlocks = function () {
			if (shrinkWrapBlocksVal != null) {
				return shrinkWrapBlocksVal;
			}
			shrinkWrapBlocksVal = false;
			var div, body, container;
			body = document.getElementsByTagName("body")[0];
			if (!body || !body.style) {
				return;
			}
			div = document.createElement("div");
			container = document.createElement("div");
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild(container).appendChild(div);
			if (typeof div.style.zoom !== strundefined) {
				div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;" + "padding:1px;width:1px;zoom:1";
				div.appendChild(document.createElement("div")).style.width = "5px";
				shrinkWrapBlocksVal = div.offsetWidth !== 3;
			}
			body.removeChild(container);
			return shrinkWrapBlocksVal;
		};
	})();
	var rmargin = (/^margin/);
	var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
	var getStyles, curCSS, rposition = /^(top|right|bottom|left)$/;
	if (window.getComputedStyle) {
		getStyles = function (elem) {
			if (elem.ownerDocument.defaultView.opener) {
				return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
			}
			return window.getComputedStyle(elem, null);
		};
		curCSS = function (elem, name, computed) {
			var width, minWidth, maxWidth, ret, style = elem.style;
			computed = computed || getStyles(elem);
			ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;
			if (computed) {
				if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
					ret = jQuery.style(elem, name);
				}
				if (rnumnonpx.test(ret) && rmargin.test(name)) {
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}
			return ret === undefined ? ret : ret + "";
		};
	} else if (document.documentElement.currentStyle) {
		getStyles = function (elem) {
			return elem.currentStyle;
		};
		curCSS = function (elem, name, computed) {
			var left, rs, rsLeft, ret, style = elem.style;
			computed = computed || getStyles(elem);
			ret = computed ? computed[name] : undefined;
			if (ret == null && style && style[name]) {
				ret = style[name];
			}
			if (rnumnonpx.test(ret) && !rposition.test(name)) {
				left = style.left;
				rs = elem.runtimeStyle;
				rsLeft = rs && rs.left;
				if (rsLeft) {
					rs.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";
				style.left = left;
				if (rsLeft) {
					rs.left = rsLeft;
				}
			}
			return ret === undefined ? ret : ret + "" || "auto";
		};
	}

	function addGetHookIf(conditionFn, hookFn) {
		return {
			get: function () {
				var condition = conditionFn();
				if (condition == null) {
					return;
				}
				if (condition) {
					delete this.get;
					return;
				}
				return (this.get = hookFn).apply(this, arguments);
			}
		};
	}
	(function () {
		var div, style, a, pixelPositionVal, boxSizingReliableVal, reliableHiddenOffsetsVal, reliableMarginRightVal;
		div = document.createElement("div");
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName("a")[0];
		style = a && a.style;
		if (!style) {
			return;
		}
		style.cssText = "float:left;opacity:.5";
		support.opacity = style.opacity === "0.5";
		support.cssFloat = !!style.cssFloat;
		div.style.backgroundClip = "content-box";
		div.cloneNode(true).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
		support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" || style.WebkitBoxSizing === "";
		jQuery.extend(support, {
			reliableHiddenOffsets: function () {
				if (reliableHiddenOffsetsVal == null) {
					computeStyleTests();
				}
				return reliableHiddenOffsetsVal;
			},
			boxSizingReliable: function () {
				if (boxSizingReliableVal == null) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelPosition: function () {
				if (pixelPositionVal == null) {
					computeStyleTests();
				}
				return pixelPositionVal;
			},
			reliableMarginRight: function () {
				if (reliableMarginRightVal == null) {
					computeStyleTests();
				}
				return reliableMarginRightVal;
			}
		});

		function computeStyleTests() {
			var div, body, container, contents;
			body = document.getElementsByTagName("body")[0];
			if (!body || !body.style) {
				return;
			}
			div = document.createElement("div");
			container = document.createElement("div");
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild(container).appendChild(div);
			div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
			pixelPositionVal = boxSizingReliableVal = false;
			reliableMarginRightVal = true;
			if (window.getComputedStyle) {
				pixelPositionVal = (window.getComputedStyle(div, null) || {}).top !== "1%";
				boxSizingReliableVal = (window.getComputedStyle(div, null) || {
					width: "4px"
				}).width === "4px";
				contents = div.appendChild(document.createElement("div"));
				contents.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				contents.style.marginRight = contents.style.width = "0";
				div.style.width = "1px";
				reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents, null) || {}).marginRight);
				div.removeChild(contents);
			}
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			contents = div.getElementsByTagName("td");
			contents[0].style.cssText = "margin:0;border:0;padding:0;display:none";
			reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
			if (reliableHiddenOffsetsVal) {
				contents[0].style.display = "";
				contents[1].style.display = "none";
				reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
			}
			body.removeChild(container);
		}
	})();
	jQuery.swap = function (elem, options, callback, args) {
		var ret, name, old = {};
		for (name in options) {
			old[name] = elem.style[name];
			elem.style[name] = options[name];
		}
		ret = callback.apply(elem, args || []);
		for (name in options) {
			elem.style[name] = old[name];
		}
		return ret;
	};
	var
		ralpha = /alpha\([^)]*\)/i,
		ropacity = /opacity\s*=\s*([^)]*)/,
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
		rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
		cssShow = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		cssPrefixes = ["Webkit", "O", "Moz", "ms"];

	function vendorPropName(style, name) {
		if (name in style) {
			return name;
		}
		var capName = name.charAt(0).toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;
		while (i--) {
			name = cssPrefixes[i] + capName;
			if (name in style) {
				return name;
			}
		}
		return origName;
	}

	function showHide(elements, show) {
		var display, elem, hidden, values = [],
			index = 0,
			length = elements.length;
		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}
			values[index] = jQuery._data(elem, "olddisplay");
			display = elem.style.display;
			if (show) {
				if (!values[index] && display === "none") {
					elem.style.display = "";
				}
				if (elem.style.display === "" && isHidden(elem)) {
					values[index] = jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
				}
			} else {
				hidden = isHidden(elem);
				if (display && display !== "none" || !hidden) {
					jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
				}
			}
		}
		for (index = 0; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}
			if (!show || elem.style.display === "none" || elem.style.display === "") {
				elem.style.display = show ? values[index] || "" : "none";
			}
		}
		return elements;
	}

	function setPositiveNumber(elem, value, subtract) {
		var matches = rnumsplit.exec(value);
		return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
	}

	function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
		var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
			val = 0;
		for (; i < 4; i += 2) {
			if (extra === "margin") {
				val += jQuery.css(elem, extra + cssExpand[i], true, styles);
			}
			if (isBorderBox) {
				if (extra === "content") {
					val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				}
				if (extra !== "margin") {
					val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			} else {
				val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				if (extra !== "padding") {
					val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			}
		}
		return val;
	}

	function getWidthOrHeight(elem, name, extra) {
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles(elem),
			isBorderBox = support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
		if (val <= 0 || val == null) {
			val = curCSS(elem, name, styles);
			if (val < 0 || val == null) {
				val = elem.style[name];
			}
			if (rnumnonpx.test(val)) {
				return val;
			}
			valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
			val = parseFloat(val) || 0;
		}
		return (val +
			augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles)) + "px";
	}
	jQuery.extend({
		cssHooks: {
			opacity: {
				get: function (elem, computed) {
					if (computed) {
						var ret = curCSS(elem, "opacity");
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
		cssProps: {
			"float": support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function (elem, name, value, extra) {
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
				return;
			}
			var ret, type, hooks, origName = jQuery.camelCase(name),
				style = elem.style;
			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
			if (value !== undefined) {
				type = typeof value;
				if (type === "string" && (ret = rrelNum.exec(value))) {
					value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
					type = "number";
				}
				if (value == null || value !== value) {
					return;
				}
				if (type === "number" && !jQuery.cssNumber[origName]) {
					value += "px";
				}
				if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
					style[name] = "inherit";
				}
				if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
					try {
						style[name] = value;
					} catch (e) {}
				}
			} else {
				if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
					return ret;
				}
				return style[name];
			}
		},
		css: function (elem, name, extra, styles) {
			var num, val, hooks, origName = jQuery.camelCase(name);
			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
			if (hooks && "get" in hooks) {
				val = hooks.get(elem, true, extra);
			}
			if (val === undefined) {
				val = curCSS(elem, name, styles);
			}
			if (val === "normal" && name in cssNormalTransform) {
				val = cssNormalTransform[name];
			}
			if (extra === "" || extra) {
				num = parseFloat(val);
				return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
			}
			return val;
		}
	});
	jQuery.each(["height", "width"], function (i, name) {
		jQuery.cssHooks[name] = {
			get: function (elem, computed, extra) {
				if (computed) {
					return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function () {
						return getWidthOrHeight(elem, name, extra);
					}) : getWidthOrHeight(elem, name, extra);
				}
			},
			set: function (elem, value, extra) {
				var styles = extra && getStyles(elem);
				return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
			}
		};
	});
	if (!support.opacity) {
		jQuery.cssHooks.opacity = {
			get: function (elem, computed) {
				return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : computed ? "1" : "";
			},
			set: function (elem, value) {
				var style = elem.style,
					currentStyle = elem.currentStyle,
					opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
					filter = currentStyle && currentStyle.filter || style.filter || "";
				style.zoom = 1;
				if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
					style.removeAttribute("filter");
					if (value === "" || currentStyle && !currentStyle.filter) {
						return;
					}
				}
				style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
			}
		};
	}
	jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
		if (computed) {
			return jQuery.swap(elem, {
				"display": "inline-block"
			}, curCSS, [elem, "marginRight"]);
		}
	});
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = {
			expand: function (value) {
				var i = 0,
					expanded = {},
					parts = typeof value === "string" ? value.split(" ") : [value];
				for (; i < 4; i++) {
					expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
				}
				return expanded;
			}
		};
		if (!rmargin.test(prefix)) {
			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
		}
	});
	jQuery.fn.extend({
		css: function (name, value) {
			return access(this, function (elem, name, value) {
				var styles, len, map = {},
					i = 0;
				if (jQuery.isArray(name)) {
					styles = getStyles(elem);
					len = name.length;
					for (; i < len; i++) {
						map[name[i]] = jQuery.css(elem, name[i], false, styles);
					}
					return map;
				}
				return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
			}, name, value, arguments.length > 1);
		},
		show: function () {
			return showHide(this, true);
		},
		hide: function () {
			return showHide(this);
		},
		toggle: function (state) {
			if (typeof state === "boolean") {
				return state ? this.show() : this.hide();
			}
			return this.each(function () {
				if (isHidden(this)) {
					jQuery(this).show();
				} else {
					jQuery(this).hide();
				}
			});
		}
	});

	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}
	jQuery.Tween = Tween;
	Tween.prototype = {
		constructor: Tween,
		init: function (elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
		},
		cur: function () {
			var hooks = Tween.propHooks[this.prop];
			return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
		},
		run: function (percent) {
			var eased, hooks = Tween.propHooks[this.prop];
			if (this.options.duration) {
				this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
			} else {
				this.pos = eased = percent;
			}
			this.now = (this.end - this.start) * eased + this.start;
			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}
			if (hooks && hooks.set) {
				hooks.set(this);
			} else {
				Tween.propHooks._default.set(this);
			}
			return this;
		}
	};
	Tween.prototype.init.prototype = Tween.prototype;
	Tween.propHooks = {
		_default: {
			get: function (tween) {
				var result;
				if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
					return tween.elem[tween.prop];
				}
				result = jQuery.css(tween.elem, tween.prop, "");
				return !result || result === "auto" ? 0 : result;
			},
			set: function (tween) {
				if (jQuery.fx.step[tween.prop]) {
					jQuery.fx.step[tween.prop](tween);
				} else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
				} else {
					tween.elem[tween.prop] = tween.now;
				}
			}
		}
	};
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function (tween) {
			if (tween.elem.nodeType && tween.elem.parentNode) {
				tween.elem[tween.prop] = tween.now;
			}
		}
	};
	jQuery.easing = {
		linear: function (p) {
			return p;
		},
		swing: function (p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		}
	};
	jQuery.fx = Tween.prototype.init;
	jQuery.fx.step = {};
	var
		fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
		rrun = /queueHooks$/,
		animationPrefilters = [defaultPrefilter],
		tweeners = {
			"*": [function (prop, value) {
				var tween = this.createTween(prop, value),
					target = tween.cur(),
					parts = rfxnum.exec(value),
					unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
					start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
					scale = 1,
					maxIterations = 20;
				if (start && start[3] !== unit) {
					unit = unit || start[3];
					parts = parts || [];
					start = +target || 1;
					do {
						scale = scale || ".5";
						start = start / scale;
						jQuery.style(tween.elem, prop, start + unit);
					} while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
				}
				if (parts) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
				}
				return tween;
			}]
		};

	function createFxNow() {
		setTimeout(function () {
			fxNow = undefined;
		});
		return (fxNow = jQuery.now());
	}

	function genFx(type, includeWidth) {
		var which, attrs = {
				height: type
			},
			i = 0;
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}
		if (includeWidth) {
			attrs.opacity = attrs.width = type;
		}
		return attrs;
	}

	function createTween(value, prop, animation) {
		var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]),
			index = 0,
			length = collection.length;
		for (; index < length; index++) {
			if ((tween = collection[index].call(animation, prop, value))) {
				return tween;
			}
		}
	}

	function defaultPrefilter(elem, props, opts) {
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden(elem),
			dataShow = jQuery._data(elem, "fxshow");
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function () {
					if (!hooks.unqueued) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
			anim.always(function () {
				anim.always(function () {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) {
						hooks.empty.fire();
					}
				});
			});
		}
		if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
			opts.overflow = [style.overflow, style.overflowX, style.overflowY];
			display = jQuery.css(elem, "display");
			checkDisplay = display === "none" ? jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
			if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
				if (!support.inlineBlockNeedsLayout || defaultDisplay(elem.nodeName) === "inline") {
					style.display = "inline-block";
				} else {
					style.zoom = 1;
				}
			}
		}
		if (opts.overflow) {
			style.overflow = "hidden";
			if (!support.shrinkWrapBlocks()) {
				anim.always(function () {
					style.overflow = opts.overflow[0];
					style.overflowX = opts.overflow[1];
					style.overflowY = opts.overflow[2];
				});
			}
		}
		for (prop in props) {
			value = props[prop];
			if (rfxtypes.exec(value)) {
				delete props[prop];
				toggle = toggle || value === "toggle";
				if (value === (hidden ? "hide" : "show")) {
					if (value === "show" && dataShow && dataShow[prop] !== undefined) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
			} else {
				display = undefined;
			}
		}
		if (!jQuery.isEmptyObject(orig)) {
			if (dataShow) {
				if ("hidden" in dataShow) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = jQuery._data(elem, "fxshow", {});
			}
			if (toggle) {
				dataShow.hidden = !hidden;
			}
			if (hidden) {
				jQuery(elem).show();
			} else {
				anim.done(function () {
					jQuery(elem).hide();
				});
			}
			anim.done(function () {
				var prop;
				jQuery._removeData(elem, "fxshow");
				for (prop in orig) {
					jQuery.style(elem, prop, orig[prop]);
				}
			});
			for (prop in orig) {
				tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
				if (!(prop in dataShow)) {
					dataShow[prop] = tween.start;
					if (hidden) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
		} else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
			style.display = display;
		}
	}

	function propFilter(props, specialEasing) {
		var index, name, easing, value, hooks;
		for (index in props) {
			name = jQuery.camelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (jQuery.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}
			if (index !== name) {
				props[name] = value;
				delete props[index];
			}
			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];
				for (index in value) {
					if (!(index in props)) {
						props[index] = value[index];
						specialEasing[index] = easing;
					}
				}
			} else {
				specialEasing[name] = easing;
			}
		}
	}

	function Animation(elem, properties, options) {
		var result, stopped, index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always(function () {
				delete tick.elem;
			}),
			tick = function () {
				if (stopped) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
				for (; index < length; index++) {
					animation.tweens[index].run(percent);
				}
				deferred.notifyWith(elem, [animation, percent, remaining]);
				if (percent < 1 && length) {
					return remaining;
				} else {
					deferred.resolveWith(elem, [animation]);
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend({}, properties),
				opts: jQuery.extend(true, {
					specialEasing: {}
				}, options),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function (prop, end) {
					var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
					animation.tweens.push(tween);
					return tween;
				},
				stop: function (gotoEnd) {
					var index = 0,
						length = gotoEnd ? animation.tweens.length : 0;
					if (stopped) {
						return this;
					}
					stopped = true;
					for (; index < length; index++) {
						animation.tweens[index].run(1);
					}
					if (gotoEnd) {
						deferred.resolveWith(elem, [animation, gotoEnd]);
					} else {
						deferred.rejectWith(elem, [animation, gotoEnd]);
					}
					return this;
				}
			}),
			props = animation.props;
		propFilter(props, animation.opts.specialEasing);
		for (; index < length; index++) {
			result = animationPrefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				return result;
			}
		}
		jQuery.map(props, createTween, animation);
		if (jQuery.isFunction(animation.opts.start)) {
			animation.opts.start.call(elem, animation);
		}
		jQuery.fx.timer(jQuery.extend(tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		}));
		return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
	}
	jQuery.Animation = jQuery.extend(Animation, {
		tweener: function (props, callback) {
			if (jQuery.isFunction(props)) {
				callback = props;
				props = ["*"];
			} else {
				props = props.split(" ");
			}
			var prop, index = 0,
				length = props.length;
			for (; index < length; index++) {
				prop = props[index];
				tweeners[prop] = tweeners[prop] || [];
				tweeners[prop].unshift(callback);
			}
		},
		prefilter: function (callback, prepend) {
			if (prepend) {
				animationPrefilters.unshift(callback);
			} else {
				animationPrefilters.push(callback);
			}
		}
	});
	jQuery.speed = function (speed, easing, fn) {
		var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
			complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
		if (opt.queue == null || opt.queue === true) {
			opt.queue = "fx";
		}
		opt.old = opt.complete;
		opt.complete = function () {
			if (jQuery.isFunction(opt.old)) {
				opt.old.call(this);
			}
			if (opt.queue) {
				jQuery.dequeue(this, opt.queue);
			}
		};
		return opt;
	};
	jQuery.fn.extend({
		fadeTo: function (speed, to, easing, callback) {
			return this.filter(isHidden).css("opacity", 0).show().end().animate({
				opacity: to
			}, speed, easing, callback);
		},
		animate: function (prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop),
				optall = jQuery.speed(speed, easing, callback),
				doAnimation = function () {
					var anim = Animation(this, jQuery.extend({}, prop), optall);
					if (empty || jQuery._data(this, "finish")) {
						anim.stop(true);
					}
				};
			doAnimation.finish = doAnimation;
			return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
		},
		stop: function (type, clearQueue, gotoEnd) {
			var stopQueue = function (hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};
			if (typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if (clearQueue && type !== false) {
				this.queue(type || "fx", []);
			}
			return this.each(function () {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = jQuery._data(this);
				if (index) {
					if (data[index] && data[index].stop) {
						stopQueue(data[index]);
					}
				} else {
					for (index in data) {
						if (data[index] && data[index].stop && rrun.test(index)) {
							stopQueue(data[index]);
						}
					}
				}
				for (index = timers.length; index--;) {
					if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
						timers[index].anim.stop(gotoEnd);
						dequeue = false;
						timers.splice(index, 1);
					}
				}
				if (dequeue || !gotoEnd) {
					jQuery.dequeue(this, type);
				}
			});
		},
		finish: function (type) {
			if (type !== false) {
				type = type || "fx";
			}
			return this.each(function () {
				var index, data = jQuery._data(this),
					queue = data[type + "queue"],
					hooks = data[type + "queueHooks"],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
				data.finish = true;
				jQuery.queue(this, type, []);
				if (hooks && hooks.stop) {
					hooks.stop.call(this, true);
				}
				for (index = timers.length; index--;) {
					if (timers[index].elem === this && timers[index].queue === type) {
						timers[index].anim.stop(true);
						timers.splice(index, 1);
					}
				}
				for (index = 0; index < length; index++) {
					if (queue[index] && queue[index].finish) {
						queue[index].finish.call(this);
					}
				}
				delete data.finish;
			});
		}
	});
	jQuery.each(["toggle", "show", "hide"], function (i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function (speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
		};
	});
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function (name, props) {
		jQuery.fn[name] = function (speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});
	jQuery.timers = [];
	jQuery.fx.tick = function () {
		var timer, timers = jQuery.timers,
			i = 0;
		fxNow = jQuery.now();
		for (; i < timers.length; i++) {
			timer = timers[i];
			if (!timer() && timers[i] === timer) {
				timers.splice(i--, 1);
			}
		}
		if (!timers.length) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	jQuery.fx.timer = function (timer) {
		jQuery.timers.push(timer);
		if (timer()) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	jQuery.fx.interval = 13;
	jQuery.fx.start = function () {
		if (!timerId) {
			timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
		}
	};
	jQuery.fx.stop = function () {
		clearInterval(timerId);
		timerId = null;
	};
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	};
	jQuery.fn.delay = function (time, type) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";
		return this.queue(type, function (next, hooks) {
			var timeout = setTimeout(next, time);
			hooks.stop = function () {
				clearTimeout(timeout);
			};
		});
	};
	(function () {
		var input, div, select, a, opt;
		div = document.createElement("div");
		div.setAttribute("className", "t");
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName("a")[0];
		select = document.createElement("select");
		opt = select.appendChild(document.createElement("option"));
		input = div.getElementsByTagName("input")[0];
		a.style.cssText = "top:1px";
		support.getSetAttribute = div.className !== "t";
		support.style = /top/.test(a.getAttribute("style"));
		support.hrefNormalized = a.getAttribute("href") === "/a";
		support.checkOn = !!input.value;
		support.optSelected = opt.selected;
		support.enctype = !!document.createElement("form").enctype;
		select.disabled = true;
		support.optDisabled = !opt.disabled;
		input = document.createElement("input");
		input.setAttribute("value", "");
		support.input = input.getAttribute("value") === "";
		input.value = "t";
		input.setAttribute("type", "radio");
		support.radioValue = input.value === "t";
	})();
	var rreturn = /\r/g;
	jQuery.fn.extend({
		val: function (value) {
			var hooks, ret, isFunction, elem = this[0];
			if (!arguments.length) {
				if (elem) {
					hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
					if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
						return ret;
					}
					ret = elem.value;
					return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
				}
				return;
			}
			isFunction = jQuery.isFunction(value);
			return this.each(function (i) {
				var val;
				if (this.nodeType !== 1) {
					return;
				}
				if (isFunction) {
					val = value.call(this, i, jQuery(this).val());
				} else {
					val = value;
				}
				if (val == null) {
					val = "";
				} else if (typeof val === "number") {
					val += "";
				} else if (jQuery.isArray(val)) {
					val = jQuery.map(val, function (value) {
						return value == null ? "" : value + "";
					});
				}
				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
					this.value = val;
				}
			});
		}
	});
	jQuery.extend({
		valHooks: {
			option: {
				get: function (elem) {
					var val = jQuery.find.attr(elem, "value");
					return val != null ? val : jQuery.trim(jQuery.text(elem));
				}
			},
			select: {
				get: function (elem) {
					var value, option, options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ? max : one ? index : 0;
					for (; i < max; i++) {
						option = options[i];
						if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
							value = jQuery(option).val();
							if (one) {
								return value;
							}
							values.push(value);
						}
					}
					return values;
				},
				set: function (elem, value) {
					var optionSet, option, options = elem.options,
						values = jQuery.makeArray(value),
						i = options.length;
					while (i--) {
						option = options[i];
						if (jQuery.inArray(jQuery.valHooks.option.get(option), values) >= 0) {
							try {
								option.selected = optionSet = true;
							} catch (_) {
								option.scrollHeight;
							}
						} else {
							option.selected = false;
						}
					}
					if (!optionSet) {
						elem.selectedIndex = -1;
					}
					return options;
				}
			}
		}
	});
	jQuery.each(["radio", "checkbox"], function () {
		jQuery.valHooks[this] = {
			set: function (elem, value) {
				if (jQuery.isArray(value)) {
					return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0);
				}
			}
		};
		if (!support.checkOn) {
			jQuery.valHooks[this].get = function (elem) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});
	var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle,
		ruseDefault = /^(?:checked|selected)$/i,
		getSetAttribute = support.getSetAttribute,
		getSetInput = support.input;
	jQuery.fn.extend({
		attr: function (name, value) {
			return access(this, jQuery.attr, name, value, arguments.length > 1);
		},
		removeAttr: function (name) {
			return this.each(function () {
				jQuery.removeAttr(this, name);
			});
		}
	});
	jQuery.extend({
		attr: function (elem, name, value) {
			var hooks, ret, nType = elem.nodeType;
			if (!elem || nType === 3 || nType === 8 || nType === 2) {
				return;
			}
			if (typeof elem.getAttribute === strundefined) {
				return jQuery.prop(elem, name, value);
			}
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
			}
			if (value !== undefined) {
				if (value === null) {
					jQuery.removeAttr(elem, name);
				} else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				} else {
					elem.setAttribute(name, value + "");
					return value;
				}
			} else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			} else {
				ret = jQuery.find.attr(elem, name);
				return ret == null ? undefined : ret;
			}
		},
		removeAttr: function (elem, value) {
			var name, propName, i = 0,
				attrNames = value && value.match(rnotwhite);
			if (attrNames && elem.nodeType === 1) {
				while ((name = attrNames[i++])) {
					propName = jQuery.propFix[name] || name;
					if (jQuery.expr.match.bool.test(name)) {
						if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
							elem[propName] = false;
						} else {
							elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
						}
					} else {
						jQuery.attr(elem, name, "");
					}
					elem.removeAttribute(getSetAttribute ? name : propName);
				}
			}
		},
		attrHooks: {
			type: {
				set: function (elem, value) {
					if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
						var val = elem.value;
						elem.setAttribute("type", value);
						if (val) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});
	boolHook = {
		set: function (elem, value, name) {
			if (value === false) {
				jQuery.removeAttr(elem, name);
			} else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
				elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
			} else {
				elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
			}
			return name;
		}
	};
	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
		var getter = attrHandle[name] || jQuery.find.attr;
		attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function (elem, name, isXML) {
			var ret, handle;
			if (!isXML) {
				handle = attrHandle[name];
				attrHandle[name] = ret;
				ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
				attrHandle[name] = handle;
			}
			return ret;
		} : function (elem, name, isXML) {
			if (!isXML) {
				return elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null;
			}
		};
	});
	if (!getSetInput || !getSetAttribute) {
		jQuery.attrHooks.value = {
			set: function (elem, value, name) {
				if (jQuery.nodeName(elem, "input")) {
					elem.defaultValue = value;
				} else {
					return nodeHook && nodeHook.set(elem, value, name);
				}
			}
		};
	}
	if (!getSetAttribute) {
		nodeHook = {
			set: function (elem, value, name) {
				var ret = elem.getAttributeNode(name);
				if (!ret) {
					elem.setAttributeNode((ret = elem.ownerDocument.createAttribute(name)));
				}
				ret.value = value += "";
				if (name === "value" || value === elem.getAttribute(name)) {
					return value;
				}
			}
		};
		attrHandle.id = attrHandle.name = attrHandle.coords = function (elem, name, isXML) {
			var ret;
			if (!isXML) {
				return (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null;
			}
		};
		jQuery.valHooks.button = {
			get: function (elem, name) {
				var ret = elem.getAttributeNode(name);
				if (ret && ret.specified) {
					return ret.value;
				}
			},
			set: nodeHook.set
		};
		jQuery.attrHooks.contenteditable = {
			set: function (elem, value, name) {
				nodeHook.set(elem, value === "" ? false : value, name);
			}
		};
		jQuery.each(["width", "height"], function (i, name) {
			jQuery.attrHooks[name] = {
				set: function (elem, value) {
					if (value === "") {
						elem.setAttribute(name, "auto");
						return value;
					}
				}
			};
		});
	}
	if (!support.style) {
		jQuery.attrHooks.style = {
			get: function (elem) {
				return elem.style.cssText || undefined;
			},
			set: function (elem, value) {
				return (elem.style.cssText = value + "");
			}
		};
	}
	var rfocusable = /^(?:input|select|textarea|button|object)$/i,
		rclickable = /^(?:a|area)$/i;
	jQuery.fn.extend({
		prop: function (name, value) {
			return access(this, jQuery.prop, name, value, arguments.length > 1);
		},
		removeProp: function (name) {
			name = jQuery.propFix[name] || name;
			return this.each(function () {
				try {
					this[name] = undefined;
					delete this[name];
				} catch (e) {}
			});
		}
	});
	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function (elem, name, value) {
			var ret, hooks, notxml, nType = elem.nodeType;
			if (!elem || nType === 3 || nType === 8 || nType === 2) {
				return;
			}
			notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
			if (notxml) {
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}
			if (value !== undefined) {
				return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : (elem[name] = value);
			} else {
				return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
			}
		},
		propHooks: {
			tabIndex: {
				get: function (elem) {
					var tabindex = jQuery.find.attr(elem, "tabindex");
					return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
				}
			}
		}
	});
	if (!support.hrefNormalized) {
		jQuery.each(["href", "src"], function (i, name) {
			jQuery.propHooks[name] = {
				get: function (elem) {
					return elem.getAttribute(name, 4);
				}
			};
		});
	}
	if (!support.optSelected) {
		jQuery.propHooks.selected = {
			get: function (elem) {
				var parent = elem.parentNode;
				if (parent) {
					parent.selectedIndex;
					if (parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			}
		};
	}
	jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		jQuery.propFix[this.toLowerCase()] = this;
	});
	if (!support.enctype) {
		jQuery.propFix.enctype = "encoding";
	}
	var rclass = /[\t\r\n\f]/g;
	jQuery.fn.extend({
		addClass: function (value) {
			var classes, elem, cur, clazz, j, finalValue, i = 0,
				len = this.length,
				proceed = typeof value === "string" && value;
			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).addClass(value.call(this, j, this.className));
				});
			}
			if (proceed) {
				classes = (value || "").match(rnotwhite) || [];
				for (; i < len; i++) {
					elem = this[i];
					cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
					if (cur) {
						j = 0;
						while ((clazz = classes[j++])) {
							if (cur.indexOf(" " + clazz + " ") < 0) {
								cur += clazz + " ";
							}
						}
						finalValue = jQuery.trim(cur);
						if (elem.className !== finalValue) {
							elem.className = finalValue;
						}
					}
				}
			}
			return this;
		},
		removeClass: function (value) {
			var classes, elem, cur, clazz, j, finalValue, i = 0,
				len = this.length,
				proceed = arguments.length === 0 || typeof value === "string" && value;
			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).removeClass(value.call(this, j, this.className));
				});
			}
			if (proceed) {
				classes = (value || "").match(rnotwhite) || [];
				for (; i < len; i++) {
					elem = this[i];
					cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
					if (cur) {
						j = 0;
						while ((clazz = classes[j++])) {
							while (cur.indexOf(" " + clazz + " ") >= 0) {
								cur = cur.replace(" " + clazz + " ", " ");
							}
						}
						finalValue = value ? jQuery.trim(cur) : "";
						if (elem.className !== finalValue) {
							elem.className = finalValue;
						}
					}
				}
			}
			return this;
		},
		toggleClass: function (value, stateVal) {
			var type = typeof value;
			if (typeof stateVal === "boolean" && type === "string") {
				return stateVal ? this.addClass(value) : this.removeClass(value);
			}
			if (jQuery.isFunction(value)) {
				return this.each(function (i) {
					jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
				});
			}
			return this.each(function () {
				if (type === "string") {
					var className, i = 0,
						self = jQuery(this),
						classNames = value.match(rnotwhite) || [];
					while ((className = classNames[i++])) {
						if (self.hasClass(className)) {
							self.removeClass(className);
						} else {
							self.addClass(className);
						}
					}
				} else if (type === strundefined || type === "boolean") {
					if (this.className) {
						jQuery._data(this, "__className__", this.className);
					}
					this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
				}
			});
		},
		hasClass: function (selector) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for (; i < l; i++) {
				if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
					return true;
				}
			}
			return false;
		}
	});
	jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {
		jQuery.fn[name] = function (data, fn) {
			return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
		};
	});
	jQuery.fn.extend({
		hover: function (fnOver, fnOut) {
			return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
		},
		bind: function (types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind: function (types, fn) {
			return this.off(types, null, fn);
		},
		delegate: function (selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate: function (selector, types, fn) {
			return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
		}
	});
	var nonce = jQuery.now();
	var rquery = (/\?/);
	var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	jQuery.parseJSON = function (data) {
		if (window.JSON && window.JSON.parse) {
			return window.JSON.parse(data + "");
		}
		var requireNonComma, depth = null,
			str = jQuery.trim(data + "");
		return str && !jQuery.trim(str.replace(rvalidtokens, function (token, comma, open, close) {
			if (requireNonComma && comma) {
				depth = 0;
			}
			if (depth === 0) {
				return token;
			}
			requireNonComma = open || comma;
			depth += !close - !open;
			return "";
		})) ? (Function("return " + str))() : jQuery.error("Invalid JSON: " + data);
	};
	jQuery.parseXML = function (data) {
		var xml, tmp;
		if (!data || typeof data !== "string") {
			return null;
		}
		try {
			if (window.DOMParser) {
				tmp = new DOMParser();
				xml = tmp.parseFromString(data, "text/xml");
			} else {
				xml = new ActiveXObject("Microsoft.XMLDOM");
				xml.async = "false";
				xml.loadXML(data);
			}
		} catch (e) {
			xml = undefined;
		}
		if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
			jQuery.error("Invalid XML: " + data);
		}
		return xml;
	};
	var
		ajaxLocParts, ajaxLocation, rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		prefilters = {},
		transports = {},
		allTypes = "*/".concat("*");
	try {
		ajaxLocation = location.href;
	} catch (e) {
		ajaxLocation = document.createElement("a");
		ajaxLocation.href = "";
		ajaxLocation = ajaxLocation.href;
	}
	ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

	function addToPrefiltersOrTransports(structure) {
		return function (dataTypeExpression, func) {
			if (typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
			var dataType, i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
			if (jQuery.isFunction(func)) {
				while ((dataType = dataTypes[i++])) {
					if (dataType.charAt(0) === "+") {
						dataType = dataType.slice(1) || "*";
						(structure[dataType] = structure[dataType] || []).unshift(func);
					} else {
						(structure[dataType] = structure[dataType] || []).push(func);
					}
				}
			}
		};
	}

	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
		var inspected = {},
			seekingTransport = (structure === transports);

		function inspect(dataType) {
			var selected;
			inspected[dataType] = true;
			jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
				if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
					options.dataTypes.unshift(dataTypeOrTransport);
					inspect(dataTypeOrTransport);
					return false;
				} else if (seekingTransport) {
					return !(selected = dataTypeOrTransport);
				}
			});
			return selected;
		}
		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	}

	function ajaxExtend(target, src) {
		var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
		for (key in src) {
			if (src[key] !== undefined) {
				(flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
			}
		}
		if (deep) {
			jQuery.extend(true, target, deep);
		}
		return target;
	}

	function ajaxHandleResponses(s, jqXHR, responses) {
		var firstDataType, ct, finalDataType, type, contents = s.contents,
			dataTypes = s.dataTypes;
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === undefined) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}
		if (ct) {
			for (type in contents) {
				if (contents[type] && contents[type].test(ct)) {
					dataTypes.unshift(type);
					break;
				}
			}
		}
		if (dataTypes[0] in responses) {
			finalDataType = dataTypes[0];
		} else {
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) {
					firstDataType = type;
				}
			}
			finalDataType = finalDataType || firstDataType;
		}
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) {
				dataTypes.unshift(finalDataType);
			}
			return responses[finalDataType];
		}
	}

	function ajaxConvert(s, response, jqXHR, isSuccess) {
		var conv2, current, conv, tmp, prev, converters = {},
			dataTypes = s.dataTypes.slice();
		if (dataTypes[1]) {
			for (conv in s.converters) {
				converters[conv.toLowerCase()] = s.converters[conv];
			}
		}
		current = dataTypes.shift();
		while (current) {
			if (s.responseFields[current]) {
				jqXHR[s.responseFields[current]] = response;
			}
			if (!prev && isSuccess && s.dataFilter) {
				response = s.dataFilter(response, s.dataType);
			}
			prev = current;
			current = dataTypes.shift();
			if (current) {
				if (current === "*") {
					current = prev;
				} else if (prev !== "*" && prev !== current) {
					conv = converters[prev + " " + current] || converters["* " + current];
					if (!conv) {
						for (conv2 in converters) {
							tmp = conv2.split(" ");
							if (tmp[1] === current) {
								conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
								if (conv) {
									if (conv === true) {
										conv = converters[conv2];
									} else if (converters[conv2] !== true) {
										current = tmp[0];
										dataTypes.unshift(tmp[1]);
									}
									break;
								}
							}
						}
					}
					if (conv !== true) {
						if (conv && s["throws"]) {
							response = conv(response);
						} else {
							try {
								response = conv(response);
							} catch (e) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
		return {
			state: "success",
			data: response
		};
	}
	jQuery.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test(ajaxLocParts[1]),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": true,
				"text json": jQuery.parseJSON,
				"text xml": jQuery.parseXML
			},
			flatOptions: {
				url: true,
				context: true
			}
		},
		ajaxSetup: function (target, settings) {
			return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
		},
		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),
		ajax: function (url, options) {
			if (typeof url === "object") {
				options = url;
				url = undefined;
			}
			options = options || {};
			var
				parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options),
				callbackContext = s.context || s,
				globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				statusCode = s.statusCode || {},
				requestHeaders = {},
				requestHeadersNames = {},
				state = 0,
				strAbort = "canceled",
				jqXHR = {
					readyState: 0,
					getResponseHeader: function (key) {
						var match;
						if (state === 2) {
							if (!responseHeaders) {
								responseHeaders = {};
								while ((match = rheaders.exec(responseHeadersString))) {
									responseHeaders[match[1].toLowerCase()] = match[2];
								}
							}
							match = responseHeaders[key.toLowerCase()];
						}
						return match == null ? null : match;
					},
					getAllResponseHeaders: function () {
						return state === 2 ? responseHeadersString : null;
					},
					setRequestHeader: function (name, value) {
						var lname = name.toLowerCase();
						if (!state) {
							name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
							requestHeaders[name] = value;
						}
						return this;
					},
					overrideMimeType: function (type) {
						if (!state) {
							s.mimeType = type;
						}
						return this;
					},
					statusCode: function (map) {
						var code;
						if (map) {
							if (state < 2) {
								for (code in map) {
									statusCode[code] = [statusCode[code], map[code]];
								}
							} else {
								jqXHR.always(map[jqXHR.status]);
							}
						}
						return this;
					},
					abort: function (statusText) {
						var finalText = statusText || strAbort;
						if (transport) {
							transport.abort(finalText);
						}
						done(0, finalText);
						return this;
					}
				};
			deferred.promise(jqXHR).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;
			s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
			s.type = options.method || options.type || s.method || s.type;
			s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
			if (s.crossDomain == null) {
				parts = rurl.exec(s.url.toLowerCase());
				s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
			}
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = jQuery.param(s.data, s.traditional);
			}
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
			if (state === 2) {
				return jqXHR;
			}
			fireGlobals = jQuery.event && s.global;
			if (fireGlobals && jQuery.active++ === 0) {
				jQuery.event.trigger("ajaxStart");
			}
			s.type = s.type.toUpperCase();
			s.hasContent = !rnoContent.test(s.type);
			cacheURL = s.url;
			if (!s.hasContent) {
				if (s.data) {
					cacheURL = (s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data);
					delete s.data;
				}
				if (s.cache === false) {
					s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
				}
			}
			if (s.ifModified) {
				if (jQuery.lastModified[cacheURL]) {
					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
				}
				if (jQuery.etag[cacheURL]) {
					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
				}
			}
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
				jqXHR.setRequestHeader("Content-Type", s.contentType);
			}
			jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
			for (i in s.headers) {
				jqXHR.setRequestHeader(i, s.headers[i]);
			}
			if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
				return jqXHR.abort();
			}
			strAbort = "abort";
			for (i in {
					success: 1,
					error: 1,
					complete: 1
				}) {
				jqXHR[i](s[i]);
			}
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
			if (!transport) {
				done(-1, "No Transport");
			} else {
				jqXHR.readyState = 1;
				if (fireGlobals) {
					globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				}
				if (s.async && s.timeout > 0) {
					timeoutTimer = setTimeout(function () {
						jqXHR.abort("timeout");
					}, s.timeout);
				}
				try {
					state = 1;
					transport.send(requestHeaders, done);
				} catch (e) {
					if (state < 2) {
						done(-1, e);
					} else {
						throw e;
					}
				}
			}

			function done(status, nativeStatusText, responses, headers) {
				var isSuccess, success, error, response, modified, statusText = nativeStatusText;
				if (state === 2) {
					return;
				}
				state = 2;
				if (timeoutTimer) {
					clearTimeout(timeoutTimer);
				}
				transport = undefined;
				responseHeadersString = headers || "";
				jqXHR.readyState = status > 0 ? 4 : 0;
				isSuccess = status >= 200 && status < 300 || status === 304;
				if (responses) {
					response = ajaxHandleResponses(s, jqXHR, responses);
				}
				response = ajaxConvert(s, response, jqXHR, isSuccess);
				if (isSuccess) {
					if (s.ifModified) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) {
							jQuery.lastModified[cacheURL] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if (modified) {
							jQuery.etag[cacheURL] = modified;
						}
					}
					if (status === 204 || s.type === "HEAD") {
						statusText = "nocontent";
					} else if (status === 304) {
						statusText = "notmodified";
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					error = statusText;
					if (status || !statusText) {
						statusText = "error";
						if (status < 0) {
							status = 0;
						}
					}
				}
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";
				if (isSuccess) {
					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
				} else {
					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
				}
				jqXHR.statusCode(statusCode);
				statusCode = undefined;
				if (fireGlobals) {
					globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
				}
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
					if (!(--jQuery.active)) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}
			return jqXHR;
		},
		getJSON: function (url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},
		getScript: function (url, callback) {
			return jQuery.get(url, undefined, callback, "script");
		}
	});
	jQuery.each(["get", "post"], function (i, method) {
		jQuery[method] = function (url, data, callback, type) {
			if (jQuery.isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});
	jQuery._evalUrl = function (url) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};
	jQuery.fn.extend({
		wrapAll: function (html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapAll(html.call(this, i));
				});
			}
			if (this[0]) {
				var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
				if (this[0].parentNode) {
					wrap.insertBefore(this[0]);
				}
				wrap.map(function () {
					var elem = this;
					while (elem.firstChild && elem.firstChild.nodeType === 1) {
						elem = elem.firstChild;
					}
					return elem;
				}).append(this);
			}
			return this;
		},
		wrapInner: function (html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapInner(html.call(this, i));
				});
			}
			return this.each(function () {
				var self = jQuery(this),
					contents = self.contents();
				if (contents.length) {
					contents.wrapAll(html);
				} else {
					self.append(html);
				}
			});
		},
		wrap: function (html) {
			var isFunction = jQuery.isFunction(html);
			return this.each(function (i) {
				jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
			});
		},
		unwrap: function () {
			return this.parent().each(function () {
				if (!jQuery.nodeName(this, "body")) {
					jQuery(this).replaceWith(this.childNodes);
				}
			}).end();
		}
	});
	jQuery.expr.filters.hidden = function (elem) {
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || (!support.reliableHiddenOffsets() && ((elem.style && elem.style.display) || jQuery.css(elem, "display")) === "none");
	};
	jQuery.expr.filters.visible = function (elem) {
		return !jQuery.expr.filters.hidden(elem);
	};
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams(prefix, obj, traditional, add) {
		var name;
		if (jQuery.isArray(obj)) {
			jQuery.each(obj, function (i, v) {
				if (traditional || rbracket.test(prefix)) {
					add(prefix, v);
				} else {
					buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
				}
			});
		} else if (!traditional && jQuery.type(obj) === "object") {
			for (name in obj) {
				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
			}
		} else {
			add(prefix, obj);
		}
	}
	jQuery.param = function (a, traditional) {
		var prefix, s = [],
			add = function (key, value) {
				value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
			};
		if (traditional === undefined) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}
		if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
			jQuery.each(a, function () {
				add(this.name, this.value);
			});
		} else {
			for (prefix in a) {
				buildParams(prefix, a[prefix], traditional, add);
			}
		}
		return s.join("&").replace(r20, "+");
	};
	jQuery.fn.extend({
		serialize: function () {
			return jQuery.param(this.serializeArray());
		},
		serializeArray: function () {
			return this.map(function () {
				var elements = jQuery.prop(this, "elements");
				return elements ? jQuery.makeArray(elements) : this;
			}).filter(function () {
				var type = this.type;
				return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
			}).map(function (i, elem) {
				var val = jQuery(this).val();
				return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
					return {
						name: elem.name,
						value: val.replace(rCRLF, "\r\n")
					};
				}) : {
					name: elem.name,
					value: val.replace(rCRLF, "\r\n")
				};
			}).get();
		}
	});
	jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ? function () {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR();
	} : createStandardXHR;
	var xhrId = 0,
		xhrCallbacks = {},
		xhrSupported = jQuery.ajaxSettings.xhr();
	if (window.attachEvent) {
		window.attachEvent("onunload", function () {
			for (var key in xhrCallbacks) {
				xhrCallbacks[key](undefined, true);
			}
		});
	}
	support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
	xhrSupported = support.ajax = !!xhrSupported;
	if (xhrSupported) {
		jQuery.ajaxTransport(function (options) {
			if (!options.crossDomain || support.cors) {
				var callback;
				return {
					send: function (headers, complete) {
						var i, xhr = options.xhr(),
							id = ++xhrId;
						xhr.open(options.type, options.url, options.async, options.username, options.password);
						if (options.xhrFields) {
							for (i in options.xhrFields) {
								xhr[i] = options.xhrFields[i];
							}
						}
						if (options.mimeType && xhr.overrideMimeType) {
							xhr.overrideMimeType(options.mimeType);
						}
						if (!options.crossDomain && !headers["X-Requested-With"]) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}
						for (i in headers) {
							if (headers[i] !== undefined) {
								xhr.setRequestHeader(i, headers[i] + "");
							}
						}
						xhr.send((options.hasContent && options.data) || null);
						callback = function (_, isAbort) {
							var status, statusText, responses;
							if (callback && (isAbort || xhr.readyState === 4)) {
								delete xhrCallbacks[id];
								callback = undefined;
								xhr.onreadystatechange = jQuery.noop;
								if (isAbort) {
									if (xhr.readyState !== 4) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;
									if (typeof xhr.responseText === "string") {
										responses.text = xhr.responseText;
									}
									try {
										statusText = xhr.statusText;
									} catch (e) {
										statusText = "";
									}
									if (!status && options.isLocal && !options.crossDomain) {
										status = responses.text ? 200 : 404;
									} else if (status === 1223) {
										status = 204;
									}
								}
							}
							if (responses) {
								complete(status, statusText, responses, xhr.getAllResponseHeaders());
							}
						};
						if (!options.async) {
							callback();
						} else if (xhr.readyState === 4) {
							setTimeout(callback);
						} else {
							xhr.onreadystatechange = xhrCallbacks[id] = callback;
						}
					},
					abort: function () {
						if (callback) {
							callback(undefined, true);
						}
					}
				};
			}
		});
	}

	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch (e) {}
	}

	function createActiveXHR() {
		try {
			return new window.ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {}
	}
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function (text) {
				jQuery.globalEval(text);
				return text;
			}
		}
	});
	jQuery.ajaxPrefilter("script", function (s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
			s.global = false;
		}
	});
	jQuery.ajaxTransport("script", function (s) {
		if (s.crossDomain) {
			var script, head = document.head || jQuery("head")[0] || document.documentElement;
			return {
				send: function (_, callback) {
					script = document.createElement("script");
					script.async = true;
					if (s.scriptCharset) {
						script.charset = s.scriptCharset;
					}
					script.src = s.url;
					script.onload = script.onreadystatechange = function (_, isAbort) {
						if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
							script.onload = script.onreadystatechange = null;
							if (script.parentNode) {
								script.parentNode.removeChild(script);
							}
							script = null;
							if (!isAbort) {
								callback(200, "success");
							}
						}
					};
					head.insertBefore(script, head.firstChild);
				},
				abort: function () {
					if (script) {
						script.onload(undefined, true);
					}
				}
			};
		}
	});
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
			this[callback] = true;
			return callback;
		}
	});
	jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
		var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
		if (jsonProp || s.dataTypes[0] === "jsonp") {
			callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
			if (jsonProp) {
				s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
			} else if (s.jsonp !== false) {
				s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
			}
			s.converters["script json"] = function () {
				if (!responseContainer) {
					jQuery.error(callbackName + " was not called");
				}
				return responseContainer[0];
			};
			s.dataTypes[0] = "json";
			overwritten = window[callbackName];
			window[callbackName] = function () {
				responseContainer = arguments;
			};
			jqXHR.always(function () {
				window[callbackName] = overwritten;
				if (s[callbackName]) {
					s.jsonpCallback = originalSettings.jsonpCallback;
					oldCallbacks.push(callbackName);
				}
				if (responseContainer && jQuery.isFunction(overwritten)) {
					overwritten(responseContainer[0]);
				}
				responseContainer = overwritten = undefined;
			});
			return "script";
		}
	});
	jQuery.parseHTML = function (data, context, keepScripts) {
		if (!data || typeof data !== "string") {
			return null;
		}
		if (typeof context === "boolean") {
			keepScripts = context;
			context = false;
		}
		context = context || document;
		var parsed = rsingleTag.exec(data),
			scripts = !keepScripts && [];
		if (parsed) {
			return [context.createElement(parsed[1])];
		}
		parsed = jQuery.buildFragment([data], context, scripts);
		if (scripts && scripts.length) {
			jQuery(scripts).remove();
		}
		return jQuery.merge([], parsed.childNodes);
	};
	var _load = jQuery.fn.load;
	jQuery.fn.load = function (url, params, callback) {
		if (typeof url !== "string" && _load) {
			return _load.apply(this, arguments);
		}
		var selector, response, type, self = this,
			off = url.indexOf(" ");
		if (off >= 0) {
			selector = jQuery.trim(url.slice(off, url.length));
			url = url.slice(0, off);
		}
		if (jQuery.isFunction(params)) {
			callback = params;
			params = undefined;
		} else if (params && typeof params === "object") {
			type = "POST";
		}
		if (self.length > 0) {
			jQuery.ajax({
				url: url,
				type: type,
				dataType: "html",
				data: params
			}).done(function (responseText) {
				response = arguments;
				self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
			}).complete(callback && function (jqXHR, status) {
				self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
			});
		}
		return this;
	};
	jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
		jQuery.fn[type] = function (fn) {
			return this.on(type, fn);
		};
	});
	jQuery.expr.filters.animated = function (elem) {
		return jQuery.grep(jQuery.timers, function (fn) {
			return elem === fn.elem;
		}).length;
	};
	var docElem = window.document.documentElement;

	function getWindow(elem) {
		return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
	}
	jQuery.offset = {
		setOffset: function (elem, options, i) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"),
				curElem = jQuery(elem),
				props = {};
			if (position === "static") {
				elem.style.position = "relative";
			}
			curOffset = curElem.offset();
			curCSSTop = jQuery.css(elem, "top");
			curCSSLeft = jQuery.css(elem, "left");
			calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1;
			if (calculatePosition) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat(curCSSTop) || 0;
				curLeft = parseFloat(curCSSLeft) || 0;
			}
			if (jQuery.isFunction(options)) {
				options = options.call(elem, i, curOffset);
			}
			if (options.top != null) {
				props.top = (options.top - curOffset.top) + curTop;
			}
			if (options.left != null) {
				props.left = (options.left - curOffset.left) + curLeft;
			}
			if ("using" in options) {
				options.using.call(elem, props);
			} else {
				curElem.css(props);
			}
		}
	};
	jQuery.fn.extend({
		offset: function (options) {
			if (arguments.length) {
				return options === undefined ? this : this.each(function (i) {
					jQuery.offset.setOffset(this, options, i);
				});
			}
			var docElem, win, box = {
					top: 0,
					left: 0
				},
				elem = this[0],
				doc = elem && elem.ownerDocument;
			if (!doc) {
				return;
			}
			docElem = doc.documentElement;
			if (!jQuery.contains(docElem, elem)) {
				return box;
			}
			if (typeof elem.getBoundingClientRect !== strundefined) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow(doc);
			return {
				top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
				left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
			};
		},
		position: function () {
			if (!this[0]) {
				return;
			}
			var offsetParent, offset, parentOffset = {
					top: 0,
					left: 0
				},
				elem = this[0];
			if (jQuery.css(elem, "position") === "fixed") {
				offset = elem.getBoundingClientRect();
			} else {
				offsetParent = this.offsetParent();
				offset = this.offset();
				if (!jQuery.nodeName(offsetParent[0], "html")) {
					parentOffset = offsetParent.offset();
				}
				parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
				parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
			}
			return {
				top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
				left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
			};
		},
		offsetParent: function () {
			return this.map(function () {
				var offsetParent = this.offsetParent || docElem;
				while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || docElem;
			});
		}
	});
	jQuery.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (method, prop) {
		var top = /Y/.test(prop);
		jQuery.fn[method] = function (val) {
			return access(this, function (elem, method, val) {
				var win = getWindow(elem);
				if (val === undefined) {
					return win ? (prop in win) ? win[prop] : win.document.documentElement[method] : elem[method];
				}
				if (win) {
					win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
				} else {
					elem[method] = val;
				}
			}, method, val, arguments.length, null);
		};
	});
	jQuery.each(["top", "left"], function (i, prop) {
		jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
			if (computed) {
				computed = curCSS(elem, prop);
				return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
			}
		});
	});
	jQuery.each({
		Height: "height",
		Width: "width"
	}, function (name, type) {
		jQuery.each({
			padding: "inner" + name,
			content: type,
			"": "outer" + name
		}, function (defaultExtra, funcName) {
			jQuery.fn[funcName] = function (margin, value) {
				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
					extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
				return access(this, function (elem, type, value) {
					var doc;
					if (jQuery.isWindow(elem)) {
						return elem.document.documentElement["client" + name];
					}
					if (elem.nodeType === 9) {
						doc = elem.documentElement;
						return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
					}
					return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
				}, type, chainable ? margin : undefined, chainable, null);
			};
		});
	});
	jQuery.fn.size = function () {
		return this.length;
	};
	jQuery.fn.andSelf = jQuery.fn.addBack;
	if (typeof define === "function" && define.amd) {
		define("jquery", [], function () {
			return jQuery;
		});
	}
	var
		_jQuery = window.jQuery,
		_$ = window.$;
	jQuery.noConflict = function (deep) {
		if (window.$ === jQuery) {
			window.$ = _$;
		}
		if (deep && window.jQuery === jQuery) {
			window.jQuery = _jQuery;
		}
		return jQuery;
	};
	if (typeof noGlobal === strundefined) {
		window.jQuery = window.$ = jQuery;
	}
	return jQuery;
}));
(function (a) {
	if (typeof define === "function" && define.amd) {
		define(["jquery"], a)
	} else {
		a(jQuery)
	}
}(function (e) {
	var a = /\+/g;

	function d(g) {
		return g
	}

	function b(g) {
		return decodeURIComponent(g.replace(a, " "))
	}

	function f(g) {
		if (g.indexOf('"') === 0) {
			g = g.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
		}
		try {
			return c.json ? JSON.parse(g) : g
		} catch (h) {}
	}
	var c = e.cookie = function (p, o, u) {
		if (o !== undefined) {
			u = e.extend({}, c.defaults, u);
			if (typeof u.expires === "number") {
				var q = u.expires,
					s = u.expires = new Date();
				s.setDate(s.getDate() + q)
			}
			o = c.json ? JSON.stringify(o) : String(o);
			return (document.cookie = [c.raw ? p : encodeURIComponent(p), "=", c.raw ? o : encodeURIComponent(o), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join(""))
		}
		var g = c.raw ? d : b;
		var r = document.cookie.split("; ");
		var v = p ? undefined : {};
		for (var n = 0, k = r.length; n < k; n++) {
			var m = r[n].split("=");
			var h = g(m.shift());
			var j = g(m.join("="));
			if (p && p === h) {
				v = f(j);
				break
			}
			if (!p) {
				v[h] = f(j)
			}
		}
		return v
	};
	c.defaults = {};
	e.removeCookie = function (h, g) {
		if (e.cookie(h) !== undefined) {
			e.cookie(h, "", e.extend({}, g, {
				expires: -1
			}));
			return true
		}
		return false
	}
}));
(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(["jquery"], factory);
	} else {
		factory(jQuery);
	}
}(function ($) {
	$.ui = $.ui || {};
	$.extend($.ui, {
		version: "1.11.4",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	});
	$.fn.extend({
		scrollParent: function (includeHidden) {
			var position = this.css("position"),
				excludeStaticParent = position === "absolute",
				overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
				scrollParent = this.parents().filter(function () {
					var parent = $(this);
					if (excludeStaticParent && parent.css("position") === "static") {
						return false;
					}
					return overflowRegex.test(parent.css("overflow") + parent.css("overflow-y") + parent.css("overflow-x"));
				}).eq(0);
			return position === "fixed" || !scrollParent.length ? $(this[0].ownerDocument || document) : scrollParent;
		},
		uniqueId: (function () {
			var uuid = 0;
			return function () {
				return this.each(function () {
					if (!this.id) {
						this.id = "ui-id-" + (++uuid);
					}
				});
			};
		})(),
		removeUniqueId: function () {
			return this.each(function () {
				if (/^ui-id-\d+$/.test(this.id)) {
					$(this).removeAttr("id");
				}
			});
		}
	});

	function focusable(element, isTabIndexNotNaN) {
		var map, mapName, img, nodeName = element.nodeName.toLowerCase();
		if ("area" === nodeName) {
			map = element.parentNode;
			mapName = map.name;
			if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
				return false;
			}
			img = $("img[usemap='#" + mapName + "']")[0];
			return !!img && visible(img);
		}
		return (/^(input|select|textarea|button|object)$/.test(nodeName) ? !element.disabled : "a" === nodeName ? element.href || isTabIndexNotNaN : isTabIndexNotNaN) && visible(element);
	}

	function visible(element) {
		return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function () {
			return $.css(this, "visibility") === "hidden";
		}).length;
	}
	$.extend($.expr[":"], {
		data: $.expr.createPseudo ? $.expr.createPseudo(function (dataName) {
			return function (elem) {
				return !!$.data(elem, dataName);
			};
		}) : function (elem, i, match) {
			return !!$.data(elem, match[3]);
		},
		focusable: function (element) {
			return focusable(element, !isNaN($.attr(element, "tabindex")));
		},
		tabbable: function (element) {
			var tabIndex = $.attr(element, "tabindex"),
				isTabIndexNaN = isNaN(tabIndex);
			return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
		}
	});
	if (!$("<a>").outerWidth(1).jquery) {
		$.each(["Width", "Height"], function (i, name) {
			var side = name === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
				type = name.toLowerCase(),
				orig = {
					innerWidth: $.fn.innerWidth,
					innerHeight: $.fn.innerHeight,
					outerWidth: $.fn.outerWidth,
					outerHeight: $.fn.outerHeight
				};

			function reduce(elem, size, border, margin) {
				$.each(side, function () {
					size -= parseFloat($.css(elem, "padding" + this)) || 0;
					if (border) {
						size -= parseFloat($.css(elem, "border" + this + "Width")) || 0;
					}
					if (margin) {
						size -= parseFloat($.css(elem, "margin" + this)) || 0;
					}
				});
				return size;
			}
			$.fn["inner" + name] = function (size) {
				if (size === undefined) {
					return orig["inner" + name].call(this);
				}
				return this.each(function () {
					$(this).css(type, reduce(this, size) + "px");
				});
			};
			$.fn["outer" + name] = function (size, margin) {
				if (typeof size !== "number") {
					return orig["outer" + name].call(this, size);
				}
				return this.each(function () {
					$(this).css(type, reduce(this, size, true, margin) + "px");
				});
			};
		});
	}
	if (!$.fn.addBack) {
		$.fn.addBack = function (selector) {
			return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
		};
	}
	if ($("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
		$.fn.removeData = (function (removeData) {
			return function (key) {
				if (arguments.length) {
					return removeData.call(this, $.camelCase(key));
				} else {
					return removeData.call(this);
				}
			};
		})($.fn.removeData);
	}
	$.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
	$.fn.extend({
		focus: (function (orig) {
			return function (delay, fn) {
				return typeof delay === "number" ? this.each(function () {
					var elem = this;
					setTimeout(function () {
						$(elem).focus();
						if (fn) {
							fn.call(elem);
						}
					}, delay);
				}) : orig.apply(this, arguments);
			};
		})($.fn.focus),
		disableSelection: (function () {
			var eventType = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
			return function () {
				return this.bind(eventType + ".ui-disableSelection", function (event) {
					event.preventDefault();
				});
			};
		})(),
		enableSelection: function () {
			return this.unbind(".ui-disableSelection");
		},
		zIndex: function (zIndex) {
			if (zIndex !== undefined) {
				return this.css("zIndex", zIndex);
			}
			if (this.length) {
				var elem = $(this[0]),
					position, value;
				while (elem.length && elem[0] !== document) {
					position = elem.css("position");
					if (position === "absolute" || position === "relative" || position === "fixed") {
						value = parseInt(elem.css("zIndex"), 10);
						if (!isNaN(value) && value !== 0) {
							return value;
						}
					}
					elem = elem.parent();
				}
			}
			return 0;
		}
	});
	$.ui.plugin = {
		add: function (module, option, set) {
			var i, proto = $.ui[module].prototype;
			for (i in set) {
				proto.plugins[i] = proto.plugins[i] || [];
				proto.plugins[i].push([option, set[i]]);
			}
		},
		call: function (instance, name, args, allowDisconnected) {
			var i, set = instance.plugins[name];
			if (!set) {
				return;
			}
			if (!allowDisconnected && (!instance.element[0].parentNode || instance.element[0].parentNode.nodeType === 11)) {
				return;
			}
			for (i = 0; i < set.length; i++) {
				if (instance.options[set[i][0]]) {
					set[i][1].apply(instance.element, args);
				}
			}
		}
	};
	var widget_uuid = 0,
		widget_slice = Array.prototype.slice;
	$.cleanData = (function (orig) {
		return function (elems) {
			var events, elem, i;
			for (i = 0;
				(elem = elems[i]) != null; i++) {
				try {
					events = $._data(elem, "events");
					if (events && events.remove) {
						$(elem).triggerHandler("remove");
					}
				} catch (e) {}
			}
			orig(elems);
		};
	})($.cleanData);
	$.widget = function (name, base, prototype) {
		var fullName, existingConstructor, constructor, basePrototype, proxiedPrototype = {},
			namespace = name.split(".")[0];
		name = name.split(".")[1];
		fullName = namespace + "-" + name;
		if (!prototype) {
			prototype = base;
			base = $.Widget;
		}
		$.expr[":"][fullName.toLowerCase()] = function (elem) {
			return !!$.data(elem, fullName);
		};
		$[namespace] = $[namespace] || {};
		existingConstructor = $[namespace][name];
		constructor = $[namespace][name] = function (options, element) {
			if (!this._createWidget) {
				return new constructor(options, element);
			}
			if (arguments.length) {
				this._createWidget(options, element);
			}
		};
		$.extend(constructor, existingConstructor, {
			version: prototype.version,
			_proto: $.extend({}, prototype),
			_childConstructors: []
		});
		basePrototype = new base();
		basePrototype.options = $.widget.extend({}, basePrototype.options);
		$.each(prototype, function (prop, value) {
			if (!$.isFunction(value)) {
				proxiedPrototype[prop] = value;
				return;
			}
			proxiedPrototype[prop] = (function () {
				var _super = function () {
						return base.prototype[prop].apply(this, arguments);
					},
					_superApply = function (args) {
						return base.prototype[prop].apply(this, args);
					};
				return function () {
					var __super = this._super,
						__superApply = this._superApply,
						returnValue;
					this._super = _super;
					this._superApply = _superApply;
					returnValue = value.apply(this, arguments);
					this._super = __super;
					this._superApply = __superApply;
					return returnValue;
				};
			})();
		});
		constructor.prototype = $.widget.extend(basePrototype, {
			widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
		}, proxiedPrototype, {
			constructor: constructor,
			namespace: namespace,
			widgetName: name,
			widgetFullName: fullName
		});
		if (existingConstructor) {
			$.each(existingConstructor._childConstructors, function (i, child) {
				var childPrototype = child.prototype;
				$.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
			});
			delete existingConstructor._childConstructors;
		} else {
			base._childConstructors.push(constructor);
		}
		$.widget.bridge(name, constructor);
		return constructor;
	};
	$.widget.extend = function (target) {
		var input = widget_slice.call(arguments, 1),
			inputIndex = 0,
			inputLength = input.length,
			key, value;
		for (; inputIndex < inputLength; inputIndex++) {
			for (key in input[inputIndex]) {
				value = input[inputIndex][key];
				if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
					if ($.isPlainObject(value)) {
						target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : $.widget.extend({}, value);
					} else {
						target[key] = value;
					}
				}
			}
		}
		return target;
	};
	$.widget.bridge = function (name, object) {
		var fullName = object.prototype.widgetFullName || name;
		$.fn[name] = function (options) {
			var isMethodCall = typeof options === "string",
				args = widget_slice.call(arguments, 1),
				returnValue = this;
			if (isMethodCall) {
				this.each(function () {
					var methodValue, instance = $.data(this, fullName);
					if (options === "instance") {
						returnValue = instance;
						return false;
					}
					if (!instance) {
						return $.error("cannot call methods on " + name + " prior to initialization; " + "attempted to call method '" + options + "'");
					}
					if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
						return $.error("no such method '" + options + "' for " + name + " widget instance");
					}
					methodValue = instance[options].apply(instance, args);
					if (methodValue !== instance && methodValue !== undefined) {
						returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
						return false;
					}
				});
			} else {
				if (args.length) {
					options = $.widget.extend.apply(null, [options].concat(args));
				}
				this.each(function () {
					var instance = $.data(this, fullName);
					if (instance) {
						instance.option(options || {});
						if (instance._init) {
							instance._init();
						}
					} else {
						$.data(this, fullName, new object(options, this));
					}
				});
			}
			return returnValue;
		};
	};
	$.Widget = function () {};
	$.Widget._childConstructors = [];
	$.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: false,
			create: null
		},
		_createWidget: function (options, element) {
			element = $(element || this.defaultElement || this)[0];
			this.element = $(element);
			this.uuid = widget_uuid++;
			this.eventNamespace = "." + this.widgetName + this.uuid;
			this.bindings = $();
			this.hoverable = $();
			this.focusable = $();
			if (element !== this) {
				$.data(element, this.widgetFullName, this);
				this._on(true, this.element, {
					remove: function (event) {
						if (event.target === element) {
							this.destroy();
						}
					}
				});
				this.document = $(element.style ? element.ownerDocument : element.document || element);
				this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
			}
			this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);
			this._create();
			this._trigger("create", null, this._getCreateEventData());
			this._init();
		},
		_getCreateOptions: $.noop,
		_getCreateEventData: $.noop,
		_create: $.noop,
		_init: $.noop,
		destroy: function () {
			this._destroy();
			this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName));
			this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled");
			this.bindings.unbind(this.eventNamespace);
			this.hoverable.removeClass("ui-state-hover");
			this.focusable.removeClass("ui-state-focus");
		},
		_destroy: $.noop,
		widget: function () {
			return this.element;
		},
		option: function (key, value) {
			var options = key,
				parts, curOption, i;
			if (arguments.length === 0) {
				return $.widget.extend({}, this.options);
			}
			if (typeof key === "string") {
				options = {};
				parts = key.split(".");
				key = parts.shift();
				if (parts.length) {
					curOption = options[key] = $.widget.extend({}, this.options[key]);
					for (i = 0; i < parts.length - 1; i++) {
						curOption[parts[i]] = curOption[parts[i]] || {};
						curOption = curOption[parts[i]];
					}
					key = parts.pop();
					if (arguments.length === 1) {
						return curOption[key] === undefined ? null : curOption[key];
					}
					curOption[key] = value;
				} else {
					if (arguments.length === 1) {
						return this.options[key] === undefined ? null : this.options[key];
					}
					options[key] = value;
				}
			}
			this._setOptions(options);
			return this;
		},
		_setOptions: function (options) {
			var key;
			for (key in options) {
				this._setOption(key, options[key]);
			}
			return this;
		},
		_setOption: function (key, value) {
			this.options[key] = value;
			if (key === "disabled") {
				this.widget().toggleClass(this.widgetFullName + "-disabled", !!value);
				if (value) {
					this.hoverable.removeClass("ui-state-hover");
					this.focusable.removeClass("ui-state-focus");
				}
			}
			return this;
		},
		enable: function () {
			return this._setOptions({
				disabled: false
			});
		},
		disable: function () {
			return this._setOptions({
				disabled: true
			});
		},
		_on: function (suppressDisabledCheck, element, handlers) {
			var delegateElement, instance = this;
			if (typeof suppressDisabledCheck !== "boolean") {
				handlers = element;
				element = suppressDisabledCheck;
				suppressDisabledCheck = false;
			}
			if (!handlers) {
				handlers = element;
				element = this.element;
				delegateElement = this.widget();
			} else {
				element = delegateElement = $(element);
				this.bindings = this.bindings.add(element);
			}
			$.each(handlers, function (event, handler) {
				function handlerProxy() {
					if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass("ui-state-disabled"))) {
						return;
					}
					return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
				}
				if (typeof handler !== "string") {
					handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++;
				}
				var match = event.match(/^([\w:-]*)\s*(.*)$/),
					eventName = match[1] + instance.eventNamespace,
					selector = match[2];
				if (selector) {
					delegateElement.delegate(selector, eventName, handlerProxy);
				} else {
					element.bind(eventName, handlerProxy);
				}
			});
		},
		_off: function (element, eventName) {
			eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
			element.unbind(eventName).undelegate(eventName);
			this.bindings = $(this.bindings.not(element).get());
			this.focusable = $(this.focusable.not(element).get());
			this.hoverable = $(this.hoverable.not(element).get());
		},
		_delay: function (handler, delay) {
			function handlerProxy() {
				return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
			}
			var instance = this;
			return setTimeout(handlerProxy, delay || 0);
		},
		_hoverable: function (element) {
			this.hoverable = this.hoverable.add(element);
			this._on(element, {
				mouseenter: function (event) {
					$(event.currentTarget).addClass("ui-state-hover");
				},
				mouseleave: function (event) {
					$(event.currentTarget).removeClass("ui-state-hover");
				}
			});
		},
		_focusable: function (element) {
			this.focusable = this.focusable.add(element);
			this._on(element, {
				focusin: function (event) {
					$(event.currentTarget).addClass("ui-state-focus");
				},
				focusout: function (event) {
					$(event.currentTarget).removeClass("ui-state-focus");
				}
			});
		},
		_trigger: function (type, event, data) {
			var prop, orig, callback = this.options[type];
			data = data || {};
			event = $.Event(event);
			event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();
			event.target = this.element[0];
			orig = event.originalEvent;
			if (orig) {
				for (prop in orig) {
					if (!(prop in event)) {
						event[prop] = orig[prop];
					}
				}
			}
			this.element.trigger(event, data);
			return !($.isFunction(callback) && callback.apply(this.element[0], [event].concat(data)) === false || event.isDefaultPrevented());
		}
	};
	$.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function (method, defaultEffect) {
		$.Widget.prototype["_" + method] = function (element, options, callback) {
			if (typeof options === "string") {
				options = {
					effect: options
				};
			}
			var hasOptions, effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect;
			options = options || {};
			if (typeof options === "number") {
				options = {
					duration: options
				};
			}
			hasOptions = !$.isEmptyObject(options);
			options.complete = callback;
			if (options.delay) {
				element.delay(options.delay);
			}
			if (hasOptions && $.effects && $.effects.effect[effectName]) {
				element[method](options);
			} else if (effectName !== method && element[effectName]) {
				element[effectName](options.duration, options.easing, callback);
			} else {
				element.queue(function (next) {
					$(this)[method]();
					if (callback) {
						callback.call(element[0]);
					}
					next();
				});
			}
		};
	});
	var widget = $.widget;
	var mouseHandled = false;
	$(document).mouseup(function () {
		mouseHandled = false;
	});
	var mouse = $.widget("ui.mouse", {
		version: "1.11.4",
		options: {
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function () {
			var that = this;
			this.element.bind("mousedown." + this.widgetName, function (event) {
				return that._mouseDown(event);
			}).bind("click." + this.widgetName, function (event) {
				if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
					$.removeData(event.target, that.widgetName + ".preventClickEvent");
					event.stopImmediatePropagation();
					return false;
				}
			});
			this.started = false;
		},
		_mouseDestroy: function () {
			this.element.unbind("." + this.widgetName);
			if (this._mouseMoveDelegate) {
				this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
			}
		},
		_mouseDown: function (event) {
			if (mouseHandled) {
				return;
			}
			this._mouseMoved = false;
			(this._mouseStarted && this._mouseUp(event));
			this._mouseDownEvent = event;
			var that = this,
				btnIsLeft = (event.which === 1),
				elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
			if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
				return true;
			}
			this.mouseDelayMet = !this.options.delay;
			if (!this.mouseDelayMet) {
				this._mouseDelayTimer = setTimeout(function () {
					that.mouseDelayMet = true;
				}, this.options.delay);
			}
			if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
				this._mouseStarted = (this._mouseStart(event) !== false);
				if (!this._mouseStarted) {
					event.preventDefault();
					return true;
				}
			}
			if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
				$.removeData(event.target, this.widgetName + ".preventClickEvent");
			}
			this._mouseMoveDelegate = function (event) {
				return that._mouseMove(event);
			};
			this._mouseUpDelegate = function (event) {
				return that._mouseUp(event);
			};
			this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
			event.preventDefault();
			mouseHandled = true;
			return true;
		},
		_mouseMove: function (event) {
			if (this._mouseMoved) {
				if ($.ui.ie && (!document.documentMode || document.documentMode < 9) && !event.button) {
					return this._mouseUp(event);
				} else if (!event.which) {
					return this._mouseUp(event);
				}
			}
			if (event.which || event.button) {
				this._mouseMoved = true;
			}
			if (this._mouseStarted) {
				this._mouseDrag(event);
				return event.preventDefault();
			}
			if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
				this._mouseStarted = (this._mouseStart(this._mouseDownEvent, event) !== false);
				(this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
			}
			return !this._mouseStarted;
		},
		_mouseUp: function (event) {
			this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
			if (this._mouseStarted) {
				this._mouseStarted = false;
				if (event.target === this._mouseDownEvent.target) {
					$.data(event.target, this.widgetName + ".preventClickEvent", true);
				}
				this._mouseStop(event);
			}
			mouseHandled = false;
			return false;
		},
		_mouseDistanceMet: function (event) {
			return (Math.max(Math.abs(this._mouseDownEvent.pageX - event.pageX), Math.abs(this._mouseDownEvent.pageY - event.pageY)) >= this.options.distance);
		},
		_mouseDelayMet: function () {
			return this.mouseDelayMet;
		},
		_mouseStart: function () {},
		_mouseDrag: function () {},
		_mouseStop: function () {},
		_mouseCapture: function () {
			return true;
		}
	});
	(function () {
		$.ui = $.ui || {};
		var cachedScrollbarWidth, supportsOffsetFractions, max = Math.max,
			abs = Math.abs,
			round = Math.round,
			rhorizontal = /left|center|right/,
			rvertical = /top|center|bottom/,
			roffset = /[\+\-]\d+(\.[\d]+)?%?/,
			rposition = /^\w+/,
			rpercent = /%$/,
			_position = $.fn.position;

		function getOffsets(offsets, width, height) {
			return [parseFloat(offsets[0]) * (rpercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (rpercent.test(offsets[1]) ? height / 100 : 1)];
		}

		function parseCss(element, property) {
			return parseInt($.css(element, property), 10) || 0;
		}

		function getDimensions(elem) {
			var raw = elem[0];
			if (raw.nodeType === 9) {
				return {
					width: elem.width(),
					height: elem.height(),
					offset: {
						top: 0,
						left: 0
					}
				};
			}
			if ($.isWindow(raw)) {
				return {
					width: elem.width(),
					height: elem.height(),
					offset: {
						top: elem.scrollTop(),
						left: elem.scrollLeft()
					}
				};
			}
			if (raw.preventDefault) {
				return {
					width: 0,
					height: 0,
					offset: {
						top: raw.pageY,
						left: raw.pageX
					}
				};
			}
			return {
				width: elem.outerWidth(),
				height: elem.outerHeight(),
				offset: elem.offset()
			};
		}
		$.position = {
			scrollbarWidth: function () {
				if (cachedScrollbarWidth !== undefined) {
					return cachedScrollbarWidth;
				}
				var w1, w2, div = $("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
					innerDiv = div.children()[0];
				$("body").append(div);
				w1 = innerDiv.offsetWidth;
				div.css("overflow", "scroll");
				w2 = innerDiv.offsetWidth;
				if (w1 === w2) {
					w2 = div[0].clientWidth;
				}
				div.remove();
				return (cachedScrollbarWidth = w1 - w2);
			},
			getScrollInfo: function (within) {
				var overflowX = within.isWindow || within.isDocument ? "" : within.element.css("overflow-x"),
					overflowY = within.isWindow || within.isDocument ? "" : within.element.css("overflow-y"),
					hasOverflowX = overflowX === "scroll" || (overflowX === "auto" && within.width < within.element[0].scrollWidth),
					hasOverflowY = overflowY === "scroll" || (overflowY === "auto" && within.height < within.element[0].scrollHeight);
				return {
					width: hasOverflowY ? $.position.scrollbarWidth() : 0,
					height: hasOverflowX ? $.position.scrollbarWidth() : 0
				};
			},
			getWithinInfo: function (element) {
				var withinElement = $(element || window),
					isWindow = $.isWindow(withinElement[0]),
					isDocument = !!withinElement[0] && withinElement[0].nodeType === 9;
				return {
					element: withinElement,
					isWindow: isWindow,
					isDocument: isDocument,
					offset: withinElement.offset() || {
						left: 0,
						top: 0
					},
					scrollLeft: withinElement.scrollLeft(),
					scrollTop: withinElement.scrollTop(),
					width: isWindow || isDocument ? withinElement.width() : withinElement.outerWidth(),
					height: isWindow || isDocument ? withinElement.height() : withinElement.outerHeight()
				};
			}
		};
		$.fn.position = function (options) {
			if (!options || !options.of) {
				return _position.apply(this, arguments);
			}
			options = $.extend({}, options);
			var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions, target = $(options.of),
				within = $.position.getWithinInfo(options.within),
				scrollInfo = $.position.getScrollInfo(within),
				collision = (options.collision || "flip").split(" "),
				offsets = {};
			dimensions = getDimensions(target);
			if (target[0].preventDefault) {
				options.at = "left top";
			}
			targetWidth = dimensions.width;
			targetHeight = dimensions.height;
			targetOffset = dimensions.offset;
			basePosition = $.extend({}, targetOffset);
			$.each(["my", "at"], function () {
				var pos = (options[this] || "").split(" "),
					horizontalOffset, verticalOffset;
				if (pos.length === 1) {
					pos = rhorizontal.test(pos[0]) ? pos.concat(["center"]) : rvertical.test(pos[0]) ? ["center"].concat(pos) : ["center", "center"];
				}
				pos[0] = rhorizontal.test(pos[0]) ? pos[0] : "center";
				pos[1] = rvertical.test(pos[1]) ? pos[1] : "center";
				horizontalOffset = roffset.exec(pos[0]);
				verticalOffset = roffset.exec(pos[1]);
				offsets[this] = [horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0];
				options[this] = [rposition.exec(pos[0])[0], rposition.exec(pos[1])[0]];
			});
			if (collision.length === 1) {
				collision[1] = collision[0];
			}
			if (options.at[0] === "right") {
				basePosition.left += targetWidth;
			} else if (options.at[0] === "center") {
				basePosition.left += targetWidth / 2;
			}
			if (options.at[1] === "bottom") {
				basePosition.top += targetHeight;
			} else if (options.at[1] === "center") {
				basePosition.top += targetHeight / 2;
			}
			atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
			basePosition.left += atOffset[0];
			basePosition.top += atOffset[1];
			return this.each(function () {
				var collisionPosition, using, elem = $(this),
					elemWidth = elem.outerWidth(),
					elemHeight = elem.outerHeight(),
					marginLeft = parseCss(this, "marginLeft"),
					marginTop = parseCss(this, "marginTop"),
					collisionWidth = elemWidth + marginLeft + parseCss(this, "marginRight") + scrollInfo.width,
					collisionHeight = elemHeight + marginTop + parseCss(this, "marginBottom") + scrollInfo.height,
					position = $.extend({}, basePosition),
					myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());
				if (options.my[0] === "right") {
					position.left -= elemWidth;
				} else if (options.my[0] === "center") {
					position.left -= elemWidth / 2;
				}
				if (options.my[1] === "bottom") {
					position.top -= elemHeight;
				} else if (options.my[1] === "center") {
					position.top -= elemHeight / 2;
				}
				position.left += myOffset[0];
				position.top += myOffset[1];
				if (!supportsOffsetFractions) {
					position.left = round(position.left);
					position.top = round(position.top);
				}
				collisionPosition = {
					marginLeft: marginLeft,
					marginTop: marginTop
				};
				$.each(["left", "top"], function (i, dir) {
					if ($.ui.position[collision[i]]) {
						$.ui.position[collision[i]][dir](position, {
							targetWidth: targetWidth,
							targetHeight: targetHeight,
							elemWidth: elemWidth,
							elemHeight: elemHeight,
							collisionPosition: collisionPosition,
							collisionWidth: collisionWidth,
							collisionHeight: collisionHeight,
							offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
							my: options.my,
							at: options.at,
							within: within,
							elem: elem
						});
					}
				});
				if (options.using) {
					using = function (props) {
						var left = targetOffset.left - position.left,
							right = left + targetWidth - elemWidth,
							top = targetOffset.top - position.top,
							bottom = top + targetHeight - elemHeight,
							feedback = {
								target: {
									element: target,
									left: targetOffset.left,
									top: targetOffset.top,
									width: targetWidth,
									height: targetHeight
								},
								element: {
									element: elem,
									left: position.left,
									top: position.top,
									width: elemWidth,
									height: elemHeight
								},
								horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
								vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
							};
						if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
							feedback.horizontal = "center";
						}
						if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
							feedback.vertical = "middle";
						}
						if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
							feedback.important = "horizontal";
						} else {
							feedback.important = "vertical";
						}
						options.using.call(this, props, feedback);
					};
				}
				elem.offset($.extend(position, {
					using: using
				}));
			});
		};
		$.ui.position = {
			fit: {
				left: function (position, data) {
					var within = data.within,
						withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
						outerWidth = within.width,
						collisionPosLeft = position.left - data.collisionPosition.marginLeft,
						overLeft = withinOffset - collisionPosLeft,
						overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
						newOverRight;
					if (data.collisionWidth > outerWidth) {
						if (overLeft > 0 && overRight <= 0) {
							newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
							position.left += overLeft - newOverRight;
						} else if (overRight > 0 && overLeft <= 0) {
							position.left = withinOffset;
						} else {
							if (overLeft > overRight) {
								position.left = withinOffset + outerWidth - data.collisionWidth;
							} else {
								position.left = withinOffset;
							}
						}
					} else if (overLeft > 0) {
						position.left += overLeft;
					} else if (overRight > 0) {
						position.left -= overRight;
					} else {
						position.left = max(position.left - collisionPosLeft, position.left);
					}
				},
				top: function (position, data) {
					var within = data.within,
						withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
						outerHeight = data.within.height,
						collisionPosTop = position.top - data.collisionPosition.marginTop,
						overTop = withinOffset - collisionPosTop,
						overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
						newOverBottom;
					if (data.collisionHeight > outerHeight) {
						if (overTop > 0 && overBottom <= 0) {
							newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
							position.top += overTop - newOverBottom;
						} else if (overBottom > 0 && overTop <= 0) {
							position.top = withinOffset;
						} else {
							if (overTop > overBottom) {
								position.top = withinOffset + outerHeight - data.collisionHeight;
							} else {
								position.top = withinOffset;
							}
						}
					} else if (overTop > 0) {
						position.top += overTop;
					} else if (overBottom > 0) {
						position.top -= overBottom;
					} else {
						position.top = max(position.top - collisionPosTop, position.top);
					}
				}
			},
			flip: {
				left: function (position, data) {
					var within = data.within,
						withinOffset = within.offset.left + within.scrollLeft,
						outerWidth = within.width,
						offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
						collisionPosLeft = position.left - data.collisionPosition.marginLeft,
						overLeft = collisionPosLeft - offsetLeft,
						overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
						myOffset = data.my[0] === "left" ? -data.elemWidth : data.my[0] === "right" ? data.elemWidth : 0,
						atOffset = data.at[0] === "left" ? data.targetWidth : data.at[0] === "right" ? -data.targetWidth : 0,
						offset = -2 * data.offset[0],
						newOverRight, newOverLeft;
					if (overLeft < 0) {
						newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
						if (newOverRight < 0 || newOverRight < abs(overLeft)) {
							position.left += myOffset + atOffset + offset;
						}
					} else if (overRight > 0) {
						newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
						if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
							position.left += myOffset + atOffset + offset;
						}
					}
				},
				top: function (position, data) {
					var within = data.within,
						withinOffset = within.offset.top + within.scrollTop,
						outerHeight = within.height,
						offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
						collisionPosTop = position.top - data.collisionPosition.marginTop,
						overTop = collisionPosTop - offsetTop,
						overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
						top = data.my[1] === "top",
						myOffset = top ? -data.elemHeight : data.my[1] === "bottom" ? data.elemHeight : 0,
						atOffset = data.at[1] === "top" ? data.targetHeight : data.at[1] === "bottom" ? -data.targetHeight : 0,
						offset = -2 * data.offset[1],
						newOverTop, newOverBottom;
					if (overTop < 0) {
						newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
						if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
							position.top += myOffset + atOffset + offset;
						}
					} else if (overBottom > 0) {
						newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
						if (newOverTop > 0 || abs(newOverTop) < overBottom) {
							position.top += myOffset + atOffset + offset;
						}
					}
				}
			},
			flipfit: {
				left: function () {
					$.ui.position.flip.left.apply(this, arguments);
					$.ui.position.fit.left.apply(this, arguments);
				},
				top: function () {
					$.ui.position.flip.top.apply(this, arguments);
					$.ui.position.fit.top.apply(this, arguments);
				}
			}
		};
		(function () {
			var testElement, testElementParent, testElementStyle, offsetLeft, i, body = document.getElementsByTagName("body")[0],
				div = document.createElement("div");
			testElement = document.createElement(body ? "div" : "body");
			testElementStyle = {
				visibility: "hidden",
				width: 0,
				height: 0,
				border: 0,
				margin: 0,
				background: "none"
			};
			if (body) {
				$.extend(testElementStyle, {
					position: "absolute",
					left: "-1000px",
					top: "-1000px"
				});
			}
			for (i in testElementStyle) {
				testElement.style[i] = testElementStyle[i];
			}
			testElement.appendChild(div);
			testElementParent = body || document.documentElement;
			testElementParent.insertBefore(testElement, testElementParent.firstChild);
			div.style.cssText = "position: absolute; left: 10.7432222px;";
			offsetLeft = $(div).offset().left;
			supportsOffsetFractions = offsetLeft > 10 && offsetLeft < 11;
			testElement.innerHTML = "";
			testElementParent.removeChild(testElement);
		})();
	})();
	var position = $.ui.position;
	var accordion = $.widget("ui.accordion", {
		version: "1.11.4",
		options: {
			active: 0,
			animate: {},
			collapsible: false,
			event: "click",
			header: "> li > :first-child,> :not(li):even",
			heightStyle: "auto",
			icons: {
				activeHeader: "ui-icon-triangle-1-s",
				header: "ui-icon-triangle-1-e"
			},
			activate: null,
			beforeActivate: null
		},
		hideProps: {
			borderTopWidth: "hide",
			borderBottomWidth: "hide",
			paddingTop: "hide",
			paddingBottom: "hide",
			height: "hide"
		},
		showProps: {
			borderTopWidth: "show",
			borderBottomWidth: "show",
			paddingTop: "show",
			paddingBottom: "show",
			height: "show"
		},
		_create: function () {
			var options = this.options;
			this.prevShow = this.prevHide = $();
			this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
			if (!options.collapsible && (options.active === false || options.active == null)) {
				options.active = 0;
			}
			this._processPanels();
			if (options.active < 0) {
				options.active += this.headers.length;
			}
			this._refresh();
		},
		_getCreateEventData: function () {
			return {
				header: this.active,
				panel: !this.active.length ? $() : this.active.next()
			};
		},
		_createIcons: function () {
			var icons = this.options.icons;
			if (icons) {
				$("<span>").addClass("ui-accordion-header-icon ui-icon " + icons.header).prependTo(this.headers);
				this.active.children(".ui-accordion-header-icon").removeClass(icons.header).addClass(icons.activeHeader);
				this.headers.addClass("ui-accordion-icons");
			}
		},
		_destroyIcons: function () {
			this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove();
		},
		_destroy: function () {
			var contents;
			this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
			this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default " + "ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId();
			this._destroyIcons();
			contents = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom " + "ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();
			if (this.options.heightStyle !== "content") {
				contents.css("height", "");
			}
		},
		_setOption: function (key, value) {
			if (key === "active") {
				this._activate(value);
				return;
			}
			if (key === "event") {
				if (this.options.event) {
					this._off(this.headers, this.options.event);
				}
				this._setupEvents(value);
			}
			this._super(key, value);
			if (key === "collapsible" && !value && this.options.active === false) {
				this._activate(0);
			}
			if (key === "icons") {
				this._destroyIcons();
				if (value) {
					this._createIcons();
				}
			}
			if (key === "disabled") {
				this.element.toggleClass("ui-state-disabled", !!value).attr("aria-disabled", value);
				this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!value);
			}
		},
		_keydown: function (event) {
			if (event.altKey || event.ctrlKey) {
				return;
			}
			var keyCode = $.ui.keyCode,
				length = this.headers.length,
				currentIndex = this.headers.index(event.target),
				toFocus = false;
			switch (event.keyCode) {
				case keyCode.RIGHT:
				case keyCode.DOWN:
					toFocus = this.headers[(currentIndex + 1) % length];
					break;
				case keyCode.LEFT:
				case keyCode.UP:
					toFocus = this.headers[(currentIndex - 1 + length) % length];
					break;
				case keyCode.SPACE:
				case keyCode.ENTER:
					this._eventHandler(event);
					break;
				case keyCode.HOME:
					toFocus = this.headers[0];
					break;
				case keyCode.END:
					toFocus = this.headers[length - 1];
					break;
			}
			if (toFocus) {
				$(event.target).attr("tabIndex", -1);
				$(toFocus).attr("tabIndex", 0);
				toFocus.focus();
				event.preventDefault();
			}
		},
		_panelKeyDown: function (event) {
			if (event.keyCode === $.ui.keyCode.UP && event.ctrlKey) {
				$(event.currentTarget).prev().focus();
			}
		},
		refresh: function () {
			var options = this.options;
			this._processPanels();
			if ((options.active === false && options.collapsible === true) || !this.headers.length) {
				options.active = false;
				this.active = $();
			} else if (options.active === false) {
				this._activate(0);
			} else if (this.active.length && !$.contains(this.element[0], this.active[0])) {
				if (this.headers.length === this.headers.find(".ui-state-disabled").length) {
					options.active = false;
					this.active = $();
				} else {
					this._activate(Math.max(0, options.active - 1));
				}
			} else {
				options.active = this.headers.index(this.active);
			}
			this._destroyIcons();
			this._refresh();
		},
		_processPanels: function () {
			var prevHeaders = this.headers,
				prevPanels = this.panels;
			this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all");
			this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();
			if (prevPanels) {
				this._off(prevHeaders.not(this.headers));
				this._off(prevPanels.not(this.panels));
			}
		},
		_refresh: function () {
			var maxHeight, options = this.options,
				heightStyle = options.heightStyle,
				parent = this.element.parent();
			this.active = this._findActive(options.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
			this.active.next().addClass("ui-accordion-content-active").show();
			this.headers.attr("role", "tab").each(function () {
				var header = $(this),
					headerId = header.uniqueId().attr("id"),
					panel = header.next(),
					panelId = panel.uniqueId().attr("id");
				header.attr("aria-controls", panelId);
				panel.attr("aria-labelledby", headerId);
			}).next().attr("role", "tabpanel");
			this.headers.not(this.active).attr({
				"aria-selected": "false",
				"aria-expanded": "false",
				tabIndex: -1
			}).next().attr({
				"aria-hidden": "true"
			}).hide();
			if (!this.active.length) {
				this.headers.eq(0).attr("tabIndex", 0);
			} else {
				this.active.attr({
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				}).next().attr({
					"aria-hidden": "false"
				});
			}
			this._createIcons();
			this._setupEvents(options.event);
			if (heightStyle === "fill") {
				maxHeight = parent.height();
				this.element.siblings(":visible").each(function () {
					var elem = $(this),
						position = elem.css("position");
					if (position === "absolute" || position === "fixed") {
						return;
					}
					maxHeight -= elem.outerHeight(true);
				});
				this.headers.each(function () {
					maxHeight -= $(this).outerHeight(true);
				});
				this.headers.next().each(function () {
					$(this).height(Math.max(0, maxHeight - $(this).innerHeight() + $(this).height()));
				}).css("overflow", "auto");
			} else if (heightStyle === "auto") {
				maxHeight = 0;
				this.headers.next().each(function () {
					maxHeight = Math.max(maxHeight, $(this).css("height", "").height());
				}).height(maxHeight);
			}
		},
		_activate: function (index) {
			var active = this._findActive(index)[0];
			if (active === this.active[0]) {
				return;
			}
			active = active || this.active[0];
			this._eventHandler({
				target: active,
				currentTarget: active,
				preventDefault: $.noop
			});
		},
		_findActive: function (selector) {
			return typeof selector === "number" ? this.headers.eq(selector) : $();
		},
		_setupEvents: function (event) {
			var events = {
				keydown: "_keydown"
			};
			if (event) {
				$.each(event.split(" "), function (index, eventName) {
					events[eventName] = "_eventHandler";
				});
			}
			this._off(this.headers.add(this.headers.next()));
			this._on(this.headers, events);
			this._on(this.headers.next(), {
				keydown: "_panelKeyDown"
			});
			this._hoverable(this.headers);
			this._focusable(this.headers);
		},
		_eventHandler: function (event) {
			var options = this.options,
				active = this.active,
				clicked = $(event.currentTarget),
				clickedIsActive = clicked[0] === active[0],
				collapsing = clickedIsActive && options.collapsible,
				toShow = collapsing ? $() : clicked.next(),
				toHide = active.next(),
				eventData = {
					oldHeader: active,
					oldPanel: toHide,
					newHeader: collapsing ? $() : clicked,
					newPanel: toShow
				};
			event.preventDefault();
			if ((clickedIsActive && !options.collapsible) || (this._trigger("beforeActivate", event, eventData) === false)) {
				return;
			}
			options.active = collapsing ? false : this.headers.index(clicked);
			this.active = clickedIsActive ? $() : clicked;
			this._toggle(eventData);
			active.removeClass("ui-accordion-header-active ui-state-active");
			if (options.icons) {
				active.children(".ui-accordion-header-icon").removeClass(options.icons.activeHeader).addClass(options.icons.header);
			}
			if (!clickedIsActive) {
				clicked.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
				if (options.icons) {
					clicked.children(".ui-accordion-header-icon").removeClass(options.icons.header).addClass(options.icons.activeHeader);
				}
				clicked.next().addClass("ui-accordion-content-active");
			}
		},
		_toggle: function (data) {
			var toShow = data.newPanel,
				toHide = this.prevShow.length ? this.prevShow : data.oldPanel;
			this.prevShow.add(this.prevHide).stop(true, true);
			this.prevShow = toShow;
			this.prevHide = toHide;
			if (this.options.animate) {
				this._animate(toShow, toHide, data);
			} else {
				toHide.hide();
				toShow.show();
				this._toggleComplete(data);
			}
			toHide.attr({
				"aria-hidden": "true"
			});
			toHide.prev().attr({
				"aria-selected": "false",
				"aria-expanded": "false"
			});
			if (toShow.length && toHide.length) {
				toHide.prev().attr({
					"tabIndex": -1,
					"aria-expanded": "false"
				});
			} else if (toShow.length) {
				this.headers.filter(function () {
					return parseInt($(this).attr("tabIndex"), 10) === 0;
				}).attr("tabIndex", -1);
			}
			toShow.attr("aria-hidden", "false").prev().attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			});
		},
		_animate: function (toShow, toHide, data) {
			var total, easing, duration, that = this,
				adjust = 0,
				boxSizing = toShow.css("box-sizing"),
				down = toShow.length && (!toHide.length || (toShow.index() < toHide.index())),
				animate = this.options.animate || {},
				options = down && animate.down || animate,
				complete = function () {
					that._toggleComplete(data);
				};
			if (typeof options === "number") {
				duration = options;
			}
			if (typeof options === "string") {
				easing = options;
			}
			easing = easing || options.easing || animate.easing;
			duration = duration || options.duration || animate.duration;
			if (!toHide.length) {
				return toShow.animate(this.showProps, duration, easing, complete);
			}
			if (!toShow.length) {
				return toHide.animate(this.hideProps, duration, easing, complete);
			}
			total = toShow.show().outerHeight();
			toHide.animate(this.hideProps, {
				duration: duration,
				easing: easing,
				step: function (now, fx) {
					fx.now = Math.round(now);
				}
			});
			toShow.hide().animate(this.showProps, {
				duration: duration,
				easing: easing,
				complete: complete,
				step: function (now, fx) {
					fx.now = Math.round(now);
					if (fx.prop !== "height") {
						if (boxSizing === "content-box") {
							adjust += fx.now;
						}
					} else if (that.options.heightStyle !== "content") {
						fx.now = Math.round(total - toHide.outerHeight() - adjust);
						adjust = 0;
					}
				}
			});
		},
		_toggleComplete: function (data) {
			var toHide = data.oldPanel;
			toHide.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
			if (toHide.length) {
				toHide.parent()[0].className = toHide.parent()[0].className;
			}
			this._trigger("activate", null, data);
		}
	});
	var menu = $.widget("ui.menu", {
		version: "1.11.4",
		defaultElement: "<ul>",
		delay: 300,
		options: {
			icons: {
				submenu: "ui-icon-carat-1-e"
			},
			items: "> *",
			menus: "ul",
			position: {
				my: "left-1 top",
				at: "right top"
			},
			role: "menu",
			blur: null,
			focus: null,
			select: null
		},
		_create: function () {
			this.activeMenu = this.element;
			this.mouseHandled = false;
			this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
				role: this.options.role,
				tabIndex: 0
			});
			if (this.options.disabled) {
				this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
			}
			this._on({
				"mousedown .ui-menu-item": function (event) {
					event.preventDefault();
				},
				"click .ui-menu-item": function (event) {
					var target = $(event.target);
					if (!this.mouseHandled && target.not(".ui-state-disabled").length) {
						this.select(event);
						if (!event.isPropagationStopped()) {
							this.mouseHandled = true;
						}
						if (target.has(".ui-menu").length) {
							this.expand(event);
						} else if (!this.element.is(":focus") && $(this.document[0].activeElement).closest(".ui-menu").length) {
							this.element.trigger("focus", [true]);
							if (this.active && this.active.parents(".ui-menu").length === 1) {
								clearTimeout(this.timer);
							}
						}
					}
				},
				"mouseenter .ui-menu-item": function (event) {
					if (this.previousFilter) {
						return;
					}
					var target = $(event.currentTarget);
					target.siblings(".ui-state-active").removeClass("ui-state-active");
					this.focus(event, target);
				},
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function (event, keepActiveItem) {
					var item = this.active || this.element.find(this.options.items).eq(0);
					if (!keepActiveItem) {
						this.focus(event, item);
					}
				},
				blur: function (event) {
					this._delay(function () {
						if (!$.contains(this.element[0], this.document[0].activeElement)) {
							this.collapseAll(event);
						}
					});
				},
				keydown: "_keydown"
			});
			this.refresh();
			this._on(this.document, {
				click: function (event) {
					if (this._closeOnDocumentClick(event)) {
						this.collapseAll(event);
					}
					this.mouseHandled = false;
				}
			});
		},
		_destroy: function () {
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
			this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
				var elem = $(this);
				if (elem.data("ui-menu-submenu-carat")) {
					elem.remove();
				}
			});
			this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
		},
		_keydown: function (event) {
			var match, prev, character, skip, preventDefault = true;
			switch (event.keyCode) {
				case $.ui.keyCode.PAGE_UP:
					this.previousPage(event);
					break;
				case $.ui.keyCode.PAGE_DOWN:
					this.nextPage(event);
					break;
				case $.ui.keyCode.HOME:
					this._move("first", "first", event);
					break;
				case $.ui.keyCode.END:
					this._move("last", "last", event);
					break;
				case $.ui.keyCode.UP:
					this.previous(event);
					break;
				case $.ui.keyCode.DOWN:
					this.next(event);
					break;
				case $.ui.keyCode.LEFT:
					this.collapse(event);
					break;
				case $.ui.keyCode.RIGHT:
					if (this.active && !this.active.is(".ui-state-disabled")) {
						this.expand(event);
					}
					break;
				case $.ui.keyCode.ENTER:
				case $.ui.keyCode.SPACE:
					this._activate(event);
					break;
				case $.ui.keyCode.ESCAPE:
					this.collapse(event);
					break;
				default:
					preventDefault = false;
					prev = this.previousFilter || "";
					character = String.fromCharCode(event.keyCode);
					skip = false;
					clearTimeout(this.filterTimer);
					if (character === prev) {
						skip = true;
					} else {
						character = prev + character;
					}
					match = this._filterMenuItems(character);
					match = skip && match.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : match;
					if (!match.length) {
						character = String.fromCharCode(event.keyCode);
						match = this._filterMenuItems(character);
					}
					if (match.length) {
						this.focus(event, match);
						this.previousFilter = character;
						this.filterTimer = this._delay(function () {
							delete this.previousFilter;
						}, 1000);
					} else {
						delete this.previousFilter;
					}
			}
			if (preventDefault) {
				event.preventDefault();
			}
		},
		_activate: function (event) {
			if (!this.active.is(".ui-state-disabled")) {
				if (this.active.is("[aria-haspopup='true']")) {
					this.expand(event);
				} else {
					this.select(event);
				}
			}
		},
		refresh: function () {
			var menus, items, that = this,
				icon = this.options.icons.submenu,
				submenus = this.element.find(this.options.menus);
			this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
			submenus.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			}).each(function () {
				var menu = $(this),
					item = menu.parent(),
					submenuCarat = $("<span>").addClass("ui-menu-icon ui-icon " + icon).data("ui-menu-submenu-carat", true);
				item.attr("aria-haspopup", "true").prepend(submenuCarat);
				menu.attr("aria-labelledby", item.attr("id"));
			});
			menus = submenus.add(this.element);
			items = menus.find(this.options.items);
			items.not(".ui-menu-item").each(function () {
				var item = $(this);
				if (that._isDivider(item)) {
					item.addClass("ui-widget-content ui-menu-divider");
				}
			});
			items.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
				tabIndex: -1,
				role: this._itemRole()
			});
			items.filter(".ui-state-disabled").attr("aria-disabled", "true");
			if (this.active && !$.contains(this.element[0], this.active[0])) {
				this.blur();
			}
		},
		_itemRole: function () {
			return {
				menu: "menuitem",
				listbox: "option"
			}[this.options.role];
		},
		_setOption: function (key, value) {
			if (key === "icons") {
				this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(value.submenu);
			}
			if (key === "disabled") {
				this.element.toggleClass("ui-state-disabled", !!value).attr("aria-disabled", value);
			}
			this._super(key, value);
		},
		focus: function (event, item) {
			var nested, focused;
			this.blur(event, event && event.type === "focus");
			this._scrollIntoView(item);
			this.active = item.first();
			focused = this.active.addClass("ui-state-focus").removeClass("ui-state-active");
			if (this.options.role) {
				this.element.attr("aria-activedescendant", focused.attr("id"));
			}
			this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");
			if (event && event.type === "keydown") {
				this._close();
			} else {
				this.timer = this._delay(function () {
					this._close();
				}, this.delay);
			}
			nested = item.children(".ui-menu");
			if (nested.length && event && (/^mouse/.test(event.type))) {
				this._startOpening(nested);
			}
			this.activeMenu = item.parent();
			this._trigger("focus", event, {
				item: item
			});
		},
		_scrollIntoView: function (item) {
			var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
			if (this._hasScroll()) {
				borderTop = parseFloat($.css(this.activeMenu[0], "borderTopWidth")) || 0;
				paddingTop = parseFloat($.css(this.activeMenu[0], "paddingTop")) || 0;
				offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
				scroll = this.activeMenu.scrollTop();
				elementHeight = this.activeMenu.height();
				itemHeight = item.outerHeight();
				if (offset < 0) {
					this.activeMenu.scrollTop(scroll + offset);
				} else if (offset + itemHeight > elementHeight) {
					this.activeMenu.scrollTop(scroll + offset - elementHeight + itemHeight);
				}
			}
		},
		blur: function (event, fromFocus) {
			if (!fromFocus) {
				clearTimeout(this.timer);
			}
			if (!this.active) {
				return;
			}
			this.active.removeClass("ui-state-focus");
			this.active = null;
			this._trigger("blur", event, {
				item: this.active
			});
		},
		_startOpening: function (submenu) {
			clearTimeout(this.timer);
			if (submenu.attr("aria-hidden") !== "true") {
				return;
			}
			this.timer = this._delay(function () {
				this._close();
				this._open(submenu);
			}, this.delay);
		},
		_open: function (submenu) {
			var position = $.extend({ of: this.active
			}, this.options.position);
			clearTimeout(this.timer);
			this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden", "true");
			submenu.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(position);
		},
		collapseAll: function (event, all) {
			clearTimeout(this.timer);
			this.timer = this._delay(function () {
				var currentMenu = all ? this.element : $(event && event.target).closest(this.element.find(".ui-menu"));
				if (!currentMenu.length) {
					currentMenu = this.element;
				}
				this._close(currentMenu);
				this.blur(event);
				this.activeMenu = currentMenu;
			}, this.delay);
		},
		_close: function (startMenu) {
			if (!startMenu) {
				startMenu = this.active ? this.active.parent() : this.element;
			}
			startMenu.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active");
		},
		_closeOnDocumentClick: function (event) {
			return !$(event.target).closest(".ui-menu").length;
		},
		_isDivider: function (item) {
			return !/[^\-\u2014\u2013\s]/.test(item.text());
		},
		collapse: function (event) {
			var newItem = this.active && this.active.parent().closest(".ui-menu-item", this.element);
			if (newItem && newItem.length) {
				this._close();
				this.focus(event, newItem);
			}
		},
		expand: function (event) {
			var newItem = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
			if (newItem && newItem.length) {
				this._open(newItem.parent());
				this._delay(function () {
					this.focus(event, newItem);
				});
			}
		},
		next: function (event) {
			this._move("next", "first", event);
		},
		previous: function (event) {
			this._move("prev", "last", event);
		},
		isFirstItem: function () {
			return this.active && !this.active.prevAll(".ui-menu-item").length;
		},
		isLastItem: function () {
			return this.active && !this.active.nextAll(".ui-menu-item").length;
		},
		_move: function (direction, filter, event) {
			var next;
			if (this.active) {
				if (direction === "first" || direction === "last") {
					next = this.active[direction === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1);
				} else {
					next = this.active[direction + "All"](".ui-menu-item").eq(0);
				}
			}
			if (!next || !next.length || !this.active) {
				next = this.activeMenu.find(this.options.items)[filter]();
			}
			this.focus(event, next);
		},
		nextPage: function (event) {
			var item, base, height;
			if (!this.active) {
				this.next(event);
				return;
			}
			if (this.isLastItem()) {
				return;
			}
			if (this._hasScroll()) {
				base = this.active.offset().top;
				height = this.element.height();
				this.active.nextAll(".ui-menu-item").each(function () {
					item = $(this);
					return item.offset().top - base - height < 0;
				});
				this.focus(event, item);
			} else {
				this.focus(event, this.activeMenu.find(this.options.items)[!this.active ? "first" : "last"]());
			}
		},
		previousPage: function (event) {
			var item, base, height;
			if (!this.active) {
				this.next(event);
				return;
			}
			if (this.isFirstItem()) {
				return;
			}
			if (this._hasScroll()) {
				base = this.active.offset().top;
				height = this.element.height();
				this.active.prevAll(".ui-menu-item").each(function () {
					item = $(this);
					return item.offset().top - base + height > 0;
				});
				this.focus(event, item);
			} else {
				this.focus(event, this.activeMenu.find(this.options.items).first());
			}
		},
		_hasScroll: function () {
			return this.element.outerHeight() < this.element.prop("scrollHeight");
		},
		select: function (event) {
			this.active = this.active || $(event.target).closest(".ui-menu-item");
			var ui = {
				item: this.active
			};
			if (!this.active.has(".ui-menu").length) {
				this.collapseAll(event, true);
			}
			this._trigger("select", event, ui);
		},
		_filterMenuItems: function (character) {
			var escapedCharacter = character.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
				regex = new RegExp("^" + escapedCharacter, "i");
			return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
				return regex.test($.trim($(this).text()));
			});
		}
	});
	$.widget("ui.autocomplete", {
		version: "1.11.4",
		defaultElement: "<input>",
		options: {
			appendTo: null,
			autoFocus: false,
			delay: 300,
			minLength: 1,
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			response: null,
			search: null,
			select: null
		},
		requestIndex: 0,
		pending: 0,
		_create: function () {
			var suppressKeyPress, suppressKeyPressRepeat, suppressInput, nodeName = this.element[0].nodeName.toLowerCase(),
				isTextarea = nodeName === "textarea",
				isInput = nodeName === "input";
			this.isMultiLine = isTextarea ? true : isInput ? false : this.element.prop("isContentEditable");
			this.valueMethod = this.element[isTextarea || isInput ? "val" : "text"];
			this.isNewMenu = true;
			this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
			this._on(this.element, {
				keydown: function (event) {
					if (this.element.prop("readOnly")) {
						suppressKeyPress = true;
						suppressInput = true;
						suppressKeyPressRepeat = true;
						return;
					}
					suppressKeyPress = false;
					suppressInput = false;
					suppressKeyPressRepeat = false;
					var keyCode = $.ui.keyCode;
					switch (event.keyCode) {
						case keyCode.PAGE_UP:
							suppressKeyPress = true;
							this._move("previousPage", event);
							break;
						case keyCode.PAGE_DOWN:
							suppressKeyPress = true;
							this._move("nextPage", event);
							break;
						case keyCode.UP:
							suppressKeyPress = true;
							this._keyEvent("previous", event);
							break;
						case keyCode.DOWN:
							suppressKeyPress = true;
							this._keyEvent("next", event);
							break;
						case keyCode.ENTER:
							if (this.menu.active) {
								suppressKeyPress = true;
								event.preventDefault();
								this.menu.select(event);
							}
							break;
						case keyCode.TAB:
							if (this.menu.active) {
								this.menu.select(event);
							}
							break;
						case keyCode.ESCAPE:
							if (this.menu.element.is(":visible")) {
								if (!this.isMultiLine) {
									this._value(this.term);
								}
								this.close(event);
								event.preventDefault();
							}
							break;
						default:
							suppressKeyPressRepeat = true;
							this._searchTimeout(event);
							break;
					}
				},
				keypress: function (event) {
					if (suppressKeyPress) {
						suppressKeyPress = false;
						if (!this.isMultiLine || this.menu.element.is(":visible")) {
							event.preventDefault();
						}
						return;
					}
					if (suppressKeyPressRepeat) {
						return;
					}
					var keyCode = $.ui.keyCode;
					switch (event.keyCode) {
						case keyCode.PAGE_UP:
							this._move("previousPage", event);
							break;
						case keyCode.PAGE_DOWN:
							this._move("nextPage", event);
							break;
						case keyCode.UP:
							this._keyEvent("previous", event);
							break;
						case keyCode.DOWN:
							this._keyEvent("next", event);
							break;
					}
				},
				input: function (event) {
					if (suppressInput) {
						suppressInput = false;
						event.preventDefault();
						return;
					}
					this._searchTimeout(event);
				},
				focus: function () {
					this.selectedItem = null;
					this.previous = this._value();
				},
				blur: function (event) {
					if (this.cancelBlur) {
						delete this.cancelBlur;
						return;
					}
					clearTimeout(this.searching);
					this.close(event);
					this._change(event);
				}
			});
			this._initSource();
			this.menu = $("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
				role: null
			}).hide().menu("instance");
			this._on(this.menu.element, {
				mousedown: function (event) {
					event.preventDefault();
					this.cancelBlur = true;
					this._delay(function () {
						delete this.cancelBlur;
					});
					var menuElement = this.menu.element[0];
					if (!$(event.target).closest(".ui-menu-item").length) {
						this._delay(function () {
							var that = this;
							this.document.one("mousedown", function (event) {
								if (event.target !== that.element[0] && event.target !== menuElement && !$.contains(menuElement, event.target)) {
									that.close();
								}
							});
						});
					}
				},
				menufocus: function (event, ui) {
					var label, item;
					if (this.isNewMenu) {
						this.isNewMenu = false;
						if (event.originalEvent && /^mouse/.test(event.originalEvent.type)) {
							this.menu.blur();
							this.document.one("mousemove", function () {
								$(event.target).trigger(event.originalEvent);
							});
							return;
						}
					}
					item = ui.item.data("ui-autocomplete-item");
					if (false !== this._trigger("focus", event, {
							item: item
						})) {
						if (event.originalEvent && /^key/.test(event.originalEvent.type)) {
							this._value(item.value);
						}
					}
					label = ui.item.attr("aria-label") || item.value;
					if (label && $.trim(label).length) {
						this.liveRegion.children().hide();
						$("<div>").text(label).appendTo(this.liveRegion);
					}
				},
				menuselect: function (event, ui) {
					var item = ui.item.data("ui-autocomplete-item"),
						previous = this.previous;
					if (this.element[0] !== this.document[0].activeElement) {
						this.element.focus();
						this.previous = previous;
						this._delay(function () {
							this.previous = previous;
							this.selectedItem = item;
						});
					}
					if (false !== this._trigger("select", event, {
							item: item
						})) {
						this._value(item.value);
					}
					this.term = this._value();
					this.close(event);
					this.selectedItem = item;
				}
			});
			this.liveRegion = $("<span>", {
				role: "status",
				"aria-live": "assertive",
				"aria-relevant": "additions"
			}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
			this._on(this.window, {
				beforeunload: function () {
					this.element.removeAttr("autocomplete");
				}
			});
		},
		_destroy: function () {
			clearTimeout(this.searching);
			this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
			this.menu.element.remove();
			this.liveRegion.remove();
		},
		_setOption: function (key, value) {
			this._super(key, value);
			if (key === "source") {
				this._initSource();
			}
			if (key === "appendTo") {
				this.menu.element.appendTo(this._appendTo());
			}
			if (key === "disabled" && value && this.xhr) {
				this.xhr.abort();
			}
		},
		_appendTo: function () {
			var element = this.options.appendTo;
			if (element) {
				element = element.jquery || element.nodeType ? $(element) : this.document.find(element).eq(0);
			}
			if (!element || !element[0]) {
				element = this.element.closest(".ui-front");
			}
			if (!element.length) {
				element = this.document[0].body;
			}
			return element;
		},
		_initSource: function () {
			var array, url, that = this;
			if ($.isArray(this.options.source)) {
				array = this.options.source;
				this.source = function (request, response) {
					response($.ui.autocomplete.filter(array, request.term));
				};
			} else if (typeof this.options.source === "string") {
				url = this.options.source;
				this.source = function (request, response) {
					if (that.xhr) {
						that.xhr.abort();
					}
					that.xhr = $.ajax({
						url: url,
						data: request,
						dataType: "json",
						success: function (data) {
							response(data);
						},
						error: function () {
							response([]);
						}
					});
				};
			} else {
				this.source = this.options.source;
			}
		},
		_searchTimeout: function (event) {
			clearTimeout(this.searching);
			this.searching = this._delay(function () {
				var equalValues = this.term === this._value(),
					menuVisible = this.menu.element.is(":visible"),
					modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
				if (!equalValues || (equalValues && !menuVisible && !modifierKey)) {
					this.selectedItem = null;
					this.search(null, event);
				}
			}, this.options.delay);
		},
		search: function (value, event) {
			value = value != null ? value : this._value();
			this.term = this._value();
			if (value.length < this.options.minLength) {
				return this.close(event);
			}
			if (this._trigger("search", event) === false) {
				return;
			}
			return this._search(value);
		},
		_search: function (value) {
			this.pending++;
			this.element.addClass("ui-autocomplete-loading");
			this.cancelSearch = false;
			this.source({
				term: value
			}, this._response());
		},
		_response: function () {
			var index = ++this.requestIndex;
			return $.proxy(function (content) {
				if (index === this.requestIndex) {
					this.__response(content);
				}
				this.pending--;
				if (!this.pending) {
					this.element.removeClass("ui-autocomplete-loading");
				}
			}, this);
		},
		__response: function (content) {
			if (content) {
				content = this._normalize(content);
			}
			this._trigger("response", null, {
				content: content
			});
			if (!this.options.disabled && content && content.length && !this.cancelSearch) {
				this._suggest(content);
				this._trigger("open");
			} else {
				this._close();
			}
		},
		close: function (event) {
			this.cancelSearch = true;
			this._close(event);
		},
		_close: function (event) {
			if (this.menu.element.is(":visible")) {
				this.menu.element.hide();
				this.menu.blur();
				this.isNewMenu = true;
				this._trigger("close", event);
			}
		},
		_change: function (event) {
			if (this.previous !== this._value()) {
				this._trigger("change", event, {
					item: this.selectedItem
				});
			}
		},
		_normalize: function (items) {
			if (items.length && items[0].label && items[0].value) {
				return items;
			}
			return $.map(items, function (item) {
				if (typeof item === "string") {
					return {
						label: item,
						value: item
					};
				}
				return $.extend({}, item, {
					label: item.label || item.value,
					value: item.value || item.label
				});
			});
		},
		_suggest: function (items) {
			var ul = this.menu.element.empty();
			this._renderMenu(ul, items);
			this.isNewMenu = true;
			this.menu.refresh();
			ul.show();
			this._resizeMenu();
			ul.position($.extend({ of: this.element
			}, this.options.position));
			if (this.options.autoFocus) {
				this.menu.next();
			}
		},
		_resizeMenu: function () {
			var ul = this.menu.element;
			ul.outerWidth(Math.max(ul.width("").outerWidth() + 1, this.element.outerWidth()));
		},
		_renderMenu: function (ul, items) {
			var that = this;
			$.each(items, function (index, item) {
				that._renderItemData(ul, item);
			});
		},
		_renderItemData: function (ul, item) {
			return this._renderItem(ul, item).data("ui-autocomplete-item", item);
		},
		_renderItem: function (ul, item) {
			return $("<li>").text(item.label).appendTo(ul);
		},
		_move: function (direction, event) {
			if (!this.menu.element.is(":visible")) {
				this.search(null, event);
				return;
			}
			if (this.menu.isFirstItem() && /^previous/.test(direction) || this.menu.isLastItem() && /^next/.test(direction)) {
				if (!this.isMultiLine) {
					this._value(this.term);
				}
				this.menu.blur();
				return;
			}
			this.menu[direction](event);
		},
		widget: function () {
			return this.menu.element;
		},
		_value: function () {
			return this.valueMethod.apply(this.element, arguments);
		},
		_keyEvent: function (keyEvent, event) {
			if (!this.isMultiLine || this.menu.element.is(":visible")) {
				this._move(keyEvent, event);
				event.preventDefault();
			}
		}
	});
	$.extend($.ui.autocomplete, {
		escapeRegex: function (value) {
			return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
		},
		filter: function (array, term) {
			var matcher = new RegExp($.ui.autocomplete.escapeRegex(term), "i");
			return $.grep(array, function (value) {
				return matcher.test(value.label || value.value || value);
			});
		}
	});
	$.widget("ui.autocomplete", $.ui.autocomplete, {
		options: {
			messages: {
				noResults: "No search results.",
				results: function (amount) {
					return amount + (amount > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
				}
			}
		},
		__response: function (content) {
			var message;
			this._superApply(arguments);
			if (this.options.disabled || this.cancelSearch) {
				return;
			}
			if (content && content.length) {
				message = this.options.messages.results(content.length);
			} else {
				message = this.options.messages.noResults;
			}
			this.liveRegion.children().hide();
			$("<div>").text(message).appendTo(this.liveRegion);
		}
	});
	var autocomplete = $.ui.autocomplete;
	var lastActive, baseClasses = "ui-button ui-widget ui-state-default ui-corner-all",
		typeClasses = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
		formResetHandler = function () {
			var form = $(this);
			setTimeout(function () {
				form.find(":ui-button").button("refresh");
			}, 1);
		},
		radioGroup = function (radio) {
			var name = radio.name,
				form = radio.form,
				radios = $([]);
			if (name) {
				name = name.replace(/'/g, "\\'");
				if (form) {
					radios = $(form).find("[name='" + name + "'][type=radio]");
				} else {
					radios = $("[name='" + name + "'][type=radio]", radio.ownerDocument).filter(function () {
						return !this.form;
					});
				}
			}
			return radios;
		};
	$.widget("ui.button", {
		version: "1.11.4",
		defaultElement: "<button>",
		options: {
			disabled: null,
			text: true,
			label: null,
			icons: {
				primary: null,
				secondary: null
			}
		},
		_create: function () {
			this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, formResetHandler);
			if (typeof this.options.disabled !== "boolean") {
				this.options.disabled = !!this.element.prop("disabled");
			} else {
				this.element.prop("disabled", this.options.disabled);
			}
			this._determineButtonType();
			this.hasTitle = !!this.buttonElement.attr("title");
			var that = this,
				options = this.options,
				toggleButton = this.type === "checkbox" || this.type === "radio",
				activeClass = !toggleButton ? "ui-state-active" : "";
			if (options.label === null) {
				options.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html());
			}
			this._hoverable(this.buttonElement);
			this.buttonElement.addClass(baseClasses).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
				if (options.disabled) {
					return;
				}
				if (this === lastActive) {
					$(this).addClass("ui-state-active");
				}
			}).bind("mouseleave" + this.eventNamespace, function () {
				if (options.disabled) {
					return;
				}
				$(this).removeClass(activeClass);
			}).bind("click" + this.eventNamespace, function (event) {
				if (options.disabled) {
					event.preventDefault();
					event.stopImmediatePropagation();
				}
			});
			this._on({
				focus: function () {
					this.buttonElement.addClass("ui-state-focus");
				},
				blur: function () {
					this.buttonElement.removeClass("ui-state-focus");
				}
			});
			if (toggleButton) {
				this.element.bind("change" + this.eventNamespace, function () {
					that.refresh();
				});
			}
			if (this.type === "checkbox") {
				this.buttonElement.bind("click" + this.eventNamespace, function () {
					if (options.disabled) {
						return false;
					}
				});
			} else if (this.type === "radio") {
				this.buttonElement.bind("click" + this.eventNamespace, function () {
					if (options.disabled) {
						return false;
					}
					$(this).addClass("ui-state-active");
					that.buttonElement.attr("aria-pressed", "true");
					var radio = that.element[0];
					radioGroup(radio).not(radio).map(function () {
						return $(this).button("widget")[0];
					}).removeClass("ui-state-active").attr("aria-pressed", "false");
				});
			} else {
				this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
					if (options.disabled) {
						return false;
					}
					$(this).addClass("ui-state-active");
					lastActive = this;
					that.document.one("mouseup", function () {
						lastActive = null;
					});
				}).bind("mouseup" + this.eventNamespace, function () {
					if (options.disabled) {
						return false;
					}
					$(this).removeClass("ui-state-active");
				}).bind("keydown" + this.eventNamespace, function (event) {
					if (options.disabled) {
						return false;
					}
					if (event.keyCode === $.ui.keyCode.SPACE || event.keyCode === $.ui.keyCode.ENTER) {
						$(this).addClass("ui-state-active");
					}
				}).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
					$(this).removeClass("ui-state-active");
				});
				if (this.buttonElement.is("a")) {
					this.buttonElement.keyup(function (event) {
						if (event.keyCode === $.ui.keyCode.SPACE) {
							$(this).click();
						}
					});
				}
			}
			this._setOption("disabled", options.disabled);
			this._resetButton();
		},
		_determineButtonType: function () {
			var ancestor, labelSelector, checked;
			if (this.element.is("[type=checkbox]")) {
				this.type = "checkbox";
			} else if (this.element.is("[type=radio]")) {
				this.type = "radio";
			} else if (this.element.is("input")) {
				this.type = "input";
			} else {
				this.type = "button";
			}
			if (this.type === "checkbox" || this.type === "radio") {
				ancestor = this.element.parents().last();
				labelSelector = "label[for='" + this.element.attr("id") + "']";
				this.buttonElement = ancestor.find(labelSelector);
				if (!this.buttonElement.length) {
					ancestor = ancestor.length ? ancestor.siblings() : this.element.siblings();
					this.buttonElement = ancestor.filter(labelSelector);
					if (!this.buttonElement.length) {
						this.buttonElement = ancestor.find(labelSelector);
					}
				}
				this.element.addClass("ui-helper-hidden-accessible");
				checked = this.element.is(":checked");
				if (checked) {
					this.buttonElement.addClass("ui-state-active");
				}
				this.buttonElement.prop("aria-pressed", checked);
			} else {
				this.buttonElement = this.element;
			}
		},
		widget: function () {
			return this.buttonElement;
		},
		_destroy: function () {
			this.element.removeClass("ui-helper-hidden-accessible");
			this.buttonElement.removeClass(baseClasses + " ui-state-active " + typeClasses).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
			if (!this.hasTitle) {
				this.buttonElement.removeAttr("title");
			}
		},
		_setOption: function (key, value) {
			this._super(key, value);
			if (key === "disabled") {
				this.widget().toggleClass("ui-state-disabled", !!value);
				this.element.prop("disabled", !!value);
				if (value) {
					if (this.type === "checkbox" || this.type === "radio") {
						this.buttonElement.removeClass("ui-state-focus");
					} else {
						this.buttonElement.removeClass("ui-state-focus ui-state-active");
					}
				}
				return;
			}
			this._resetButton();
		},
		refresh: function () {
			var isDisabled = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
			if (isDisabled !== this.options.disabled) {
				this._setOption("disabled", isDisabled);
			}
			if (this.type === "radio") {
				radioGroup(this.element[0]).each(function () {
					if ($(this).is(":checked")) {
						$(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true");
					} else {
						$(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false");
					}
				});
			} else if (this.type === "checkbox") {
				if (this.element.is(":checked")) {
					this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true");
				} else {
					this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false");
				}
			}
		},
		_resetButton: function () {
			if (this.type === "input") {
				if (this.options.label) {
					this.element.val(this.options.label);
				}
				return;
			}
			var buttonElement = this.buttonElement.removeClass(typeClasses),
				buttonText = $("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(buttonElement.empty()).text(),
				icons = this.options.icons,
				multipleIcons = icons.primary && icons.secondary,
				buttonClasses = [];
			if (icons.primary || icons.secondary) {
				if (this.options.text) {
					buttonClasses.push("ui-button-text-icon" + (multipleIcons ? "s" : (icons.primary ? "-primary" : "-secondary")));
				}
				if (icons.primary) {
					buttonElement.prepend("<span class='ui-button-icon-primary ui-icon " + icons.primary + "'></span>");
				}
				if (icons.secondary) {
					buttonElement.append("<span class='ui-button-icon-secondary ui-icon " + icons.secondary + "'></span>");
				}
				if (!this.options.text) {
					buttonClasses.push(multipleIcons ? "ui-button-icons-only" : "ui-button-icon-only");
					if (!this.hasTitle) {
						buttonElement.attr("title", $.trim(buttonText));
					}
				}
			} else {
				buttonClasses.push("ui-button-text-only");
			}
			buttonElement.addClass(buttonClasses.join(" "));
		}
	});
	$.widget("ui.buttonset", {
		version: "1.11.4",
		options: {
			items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
		},
		_create: function () {
			this.element.addClass("ui-buttonset");
		},
		_init: function () {
			this.refresh();
		},
		_setOption: function (key, value) {
			if (key === "disabled") {
				this.buttons.button("option", key, value);
			}
			this._super(key, value);
		},
		refresh: function () {
			var rtl = this.element.css("direction") === "rtl",
				allButtons = this.element.find(this.options.items),
				existingButtons = allButtons.filter(":ui-button");
			allButtons.not(":ui-button").button();
			existingButtons.button("refresh");
			this.buttons = allButtons.map(function () {
				return $(this).button("widget")[0];
			}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(rtl ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(rtl ? "ui-corner-left" : "ui-corner-right").end().end();
		},
		_destroy: function () {
			this.element.removeClass("ui-buttonset");
			this.buttons.map(function () {
				return $(this).button("widget")[0];
			}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
		}
	});
	var button = $.ui.button;
	$.extend($.ui, {
		datepicker: {
			version: "1.11.4"
		}
	});
	var datepicker_instActive;

	function datepicker_getZindex(elem) {
		var position, value;
		while (elem.length && elem[0] !== document) {
			position = elem.css("position");
			if (position === "absolute" || position === "relative" || position === "fixed") {
				value = parseInt(elem.css("zIndex"), 10);
				if (!isNaN(value) && value !== 0) {
					return value;
				}
			}
			elem = elem.parent();
		}
		return 0;
	}

	function Datepicker() {
		this._curInst = null;
		this._keyEvent = false;
		this._disabledInputs = [];
		this._datepickerShowing = false;
		this._inDialog = false;
		this._mainDivId = "ui-datepicker-div";
		this._inlineClass = "ui-datepicker-inline";
		this._appendClass = "ui-datepicker-append";
		this._triggerClass = "ui-datepicker-trigger";
		this._dialogClass = "ui-datepicker-dialog";
		this._disableClass = "ui-datepicker-disabled";
		this._unselectableClass = "ui-datepicker-unselectable";
		this._currentClass = "ui-datepicker-current-day";
		this._dayOverClass = "ui-datepicker-days-cell-over";
		this.regional = [];
		this.regional[""] = {
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ""
		};
		this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: false,
			hideIfNoPrevNext: false,
			navigationAsDateFormat: false,
			gotoCurrent: false,
			changeMonth: false,
			changeYear: false,
			yearRange: "c-10:c+10",
			showOtherMonths: false,
			selectOtherMonths: false,
			showWeek: false,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: true,
			showButtonPanel: false,
			autoSize: false,
			disabled: false
		};
		$.extend(this._defaults, this.regional[""]);
		this.regional.en = $.extend(true, {}, this.regional[""]);
		this.regional["en-US"] = $.extend(true, {}, this.regional.en);
		this.dpDiv = datepicker_bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
	}
	$.extend(Datepicker.prototype, {
		markerClassName: "hasDatepicker",
		maxRows: 4,
		_widgetDatepicker: function () {
			return this.dpDiv;
		},
		setDefaults: function (settings) {
			datepicker_extendRemove(this._defaults, settings || {});
			return this;
		},
		_attachDatepicker: function (target, settings) {
			var nodeName, inline, inst;
			nodeName = target.nodeName.toLowerCase();
			inline = (nodeName === "div" || nodeName === "span");
			if (!target.id) {
				this.uuid += 1;
				target.id = "dp" + this.uuid;
			}
			inst = this._newInst($(target), inline);
			inst.settings = $.extend({}, settings || {});
			if (nodeName === "input") {
				this._connectDatepicker(target, inst);
			} else if (inline) {
				this._inlineDatepicker(target, inst);
			}
		},
		_newInst: function (target, inline) {
			var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
			return {
				id: id,
				input: target,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: inline,
				dpDiv: (!inline ? this.dpDiv : datepicker_bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))
			};
		},
		_connectDatepicker: function (target, inst) {
			var input = $(target);
			inst.append = $([]);
			inst.trigger = $([]);
			if (input.hasClass(this.markerClassName)) {
				return;
			}
			this._attachments(input, inst);
			input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
			this._autoSize(inst);
			$.data(target, "datepicker", inst);
			if (inst.settings.disabled) {
				this._disableDatepicker(target);
			}
		},
		_attachments: function (input, inst) {
			var showOn, buttonText, buttonImage, appendText = this._get(inst, "appendText"),
				isRTL = this._get(inst, "isRTL");
			if (inst.append) {
				inst.append.remove();
			}
			if (appendText) {
				inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>");
				input[isRTL ? "before" : "after"](inst.append);
			}
			input.unbind("focus", this._showDatepicker);
			if (inst.trigger) {
				inst.trigger.remove();
			}
			showOn = this._get(inst, "showOn");
			if (showOn === "focus" || showOn === "both") {
				input.focus(this._showDatepicker);
			}
			if (showOn === "button" || showOn === "both") {
				buttonText = this._get(inst, "buttonText");
				buttonImage = this._get(inst, "buttonImage");
				inst.trigger = $(this._get(inst, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
					src: buttonImage,
					alt: buttonText,
					title: buttonText
				}) : $("<button type='button'></button>").addClass(this._triggerClass).html(!buttonImage ? buttonText : $("<img/>").attr({
					src: buttonImage,
					alt: buttonText,
					title: buttonText
				})));
				input[isRTL ? "before" : "after"](inst.trigger);
				inst.trigger.click(function () {
					if ($.datepicker._datepickerShowing && $.datepicker._lastInput === input[0]) {
						$.datepicker._hideDatepicker();
					} else if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0]) {
						$.datepicker._hideDatepicker();
						$.datepicker._showDatepicker(input[0]);
					} else {
						$.datepicker._showDatepicker(input[0]);
					}
					return false;
				});
			}
		},
		_autoSize: function (inst) {
			if (this._get(inst, "autoSize") && !inst.inline) {
				var findMax, max, maxI, i, date = new Date(2009, 12 - 1, 20),
					dateFormat = this._get(inst, "dateFormat");
				if (dateFormat.match(/[DM]/)) {
					findMax = function (names) {
						max = 0;
						maxI = 0;
						for (i = 0; i < names.length; i++) {
							if (names[i].length > max) {
								max = names[i].length;
								maxI = i;
							}
						}
						return maxI;
					};
					date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort"))));
					date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - date.getDay());
				}
				inst.input.attr("size", this._formatDate(inst, date).length);
			}
		},
		_inlineDatepicker: function (target, inst) {
			var divSpan = $(target);
			if (divSpan.hasClass(this.markerClassName)) {
				return;
			}
			divSpan.addClass(this.markerClassName).append(inst.dpDiv);
			$.data(target, "datepicker", inst);
			this._setDate(inst, this._getDefaultDate(inst), true);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);
			if (inst.settings.disabled) {
				this._disableDatepicker(target);
			}
			inst.dpDiv.css("display", "block");
		},
		_dialogDatepicker: function (input, date, onSelect, settings, pos) {
			var id, browserWidth, browserHeight, scrollX, scrollY, inst = this._dialogInst;
			if (!inst) {
				this.uuid += 1;
				id = "dp" + this.uuid;
				this._dialogInput = $("<input type='text' id='" + id + "' style='position: absolute; top: -100px; width: 0px;'/>");
				this._dialogInput.keydown(this._doKeyDown);
				$("body").append(this._dialogInput);
				inst = this._dialogInst = this._newInst(this._dialogInput, false);
				inst.settings = {};
				$.data(this._dialogInput[0], "datepicker", inst);
			}
			datepicker_extendRemove(inst.settings, settings || {});
			date = (date && date.constructor === Date ? this._formatDate(inst, date) : date);
			this._dialogInput.val(date);
			this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
			if (!this._pos) {
				browserWidth = document.documentElement.clientWidth;
				browserHeight = document.documentElement.clientHeight;
				scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
				scrollY = document.documentElement.scrollTop || document.body.scrollTop;
				this._pos = [(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
			}
			this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
			inst.settings.onSelect = onSelect;
			this._inDialog = true;
			this.dpDiv.addClass(this._dialogClass);
			this._showDatepicker(this._dialogInput[0]);
			if ($.blockUI) {
				$.blockUI(this.dpDiv);
			}
			$.data(this._dialogInput[0], "datepicker", inst);
			return this;
		},
		_destroyDatepicker: function (target) {
			var nodeName, $target = $(target),
				inst = $.data(target, "datepicker");
			if (!$target.hasClass(this.markerClassName)) {
				return;
			}
			nodeName = target.nodeName.toLowerCase();
			$.removeData(target, "datepicker");
			if (nodeName === "input") {
				inst.append.remove();
				inst.trigger.remove();
				$target.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp);
			} else if (nodeName === "div" || nodeName === "span") {
				$target.removeClass(this.markerClassName).empty();
			}
			if (datepicker_instActive === inst) {
				datepicker_instActive = null;
			}
		},
		_enableDatepicker: function (target) {
			var nodeName, inline, $target = $(target),
				inst = $.data(target, "datepicker");
			if (!$target.hasClass(this.markerClassName)) {
				return;
			}
			nodeName = target.nodeName.toLowerCase();
			if (nodeName === "input") {
				target.disabled = false;
				inst.trigger.filter("button").each(function () {
					this.disabled = false;
				}).end().filter("img").css({
					opacity: "1.0",
					cursor: ""
				});
			} else if (nodeName === "div" || nodeName === "span") {
				inline = $target.children("." + this._inlineClass);
				inline.children().removeClass("ui-state-disabled");
				inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false);
			}
			this._disabledInputs = $.map(this._disabledInputs, function (value) {
				return (value === target ? null : value);
			});
		},
		_disableDatepicker: function (target) {
			var nodeName, inline, $target = $(target),
				inst = $.data(target, "datepicker");
			if (!$target.hasClass(this.markerClassName)) {
				return;
			}
			nodeName = target.nodeName.toLowerCase();
			if (nodeName === "input") {
				target.disabled = true;
				inst.trigger.filter("button").each(function () {
					this.disabled = true;
				}).end().filter("img").css({
					opacity: "0.5",
					cursor: "default"
				});
			} else if (nodeName === "div" || nodeName === "span") {
				inline = $target.children("." + this._inlineClass);
				inline.children().addClass("ui-state-disabled");
				inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true);
			}
			this._disabledInputs = $.map(this._disabledInputs, function (value) {
				return (value === target ? null : value);
			});
			this._disabledInputs[this._disabledInputs.length] = target;
		},
		_isDisabledDatepicker: function (target) {
			if (!target) {
				return false;
			}
			for (var i = 0; i < this._disabledInputs.length; i++) {
				if (this._disabledInputs[i] === target) {
					return true;
				}
			}
			return false;
		},
		_getInst: function (target) {
			try {
				return $.data(target, "datepicker");
			} catch (err) {
				throw "Missing instance data for this datepicker";
			}
		},
		_optionDatepicker: function (target, name, value) {
			var settings, date, minDate, maxDate, inst = this._getInst(target);
			if (arguments.length === 2 && typeof name === "string") {
				return (name === "defaults" ? $.extend({}, $.datepicker._defaults) : (inst ? (name === "all" ? $.extend({}, inst.settings) : this._get(inst, name)) : null));
			}
			settings = name || {};
			if (typeof name === "string") {
				settings = {};
				settings[name] = value;
			}
			if (inst) {
				if (this._curInst === inst) {
					this._hideDatepicker();
				}
				date = this._getDateDatepicker(target, true);
				minDate = this._getMinMaxDate(inst, "min");
				maxDate = this._getMinMaxDate(inst, "max");
				datepicker_extendRemove(inst.settings, settings);
				if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
					inst.settings.minDate = this._formatDate(inst, minDate);
				}
				if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
					inst.settings.maxDate = this._formatDate(inst, maxDate);
				}
				if ("disabled" in settings) {
					if (settings.disabled) {
						this._disableDatepicker(target);
					} else {
						this._enableDatepicker(target);
					}
				}
				this._attachments($(target), inst);
				this._autoSize(inst);
				this._setDate(inst, date);
				this._updateAlternate(inst);
				this._updateDatepicker(inst);
			}
		},
		_changeDatepicker: function (target, name, value) {
			this._optionDatepicker(target, name, value);
		},
		_refreshDatepicker: function (target) {
			var inst = this._getInst(target);
			if (inst) {
				this._updateDatepicker(inst);
			}
		},
		_setDateDatepicker: function (target, date) {
			var inst = this._getInst(target);
			if (inst) {
				this._setDate(inst, date);
				this._updateDatepicker(inst);
				this._updateAlternate(inst);
			}
		},
		_getDateDatepicker: function (target, noDefault) {
			var inst = this._getInst(target);
			if (inst && !inst.inline) {
				this._setDateFromField(inst, noDefault);
			}
			return (inst ? this._getDate(inst) : null);
		},
		_doKeyDown: function (event) {
			var onSelect, dateStr, sel, inst = $.datepicker._getInst(event.target),
				handled = true,
				isRTL = inst.dpDiv.is(".ui-datepicker-rtl");
			inst._keyEvent = true;
			if ($.datepicker._datepickerShowing) {
				switch (event.keyCode) {
					case 9:
						$.datepicker._hideDatepicker();
						handled = false;
						break;
					case 13:
						sel = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", inst.dpDiv);
						if (sel[0]) {
							$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
						}
						onSelect = $.datepicker._get(inst, "onSelect");
						if (onSelect) {
							dateStr = $.datepicker._formatDate(inst);
							onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
						} else {
							$.datepicker._hideDatepicker();
						}
						return false;
					case 27:
						$.datepicker._hideDatepicker();
						break;
					case 33:
						$.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths")), "M");
						break;
					case 34:
						$.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths")), "M");
						break;
					case 35:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._clearDate(event.target);
						}
						handled = event.ctrlKey || event.metaKey;
						break;
					case 36:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._gotoToday(event.target);
						}
						handled = event.ctrlKey || event.metaKey;
						break;
					case 37:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D");
						}
						handled = event.ctrlKey || event.metaKey;
						if (event.originalEvent.altKey) {
							$.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths")), "M");
						}
						break;
					case 38:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, -7, "D");
						}
						handled = event.ctrlKey || event.metaKey;
						break;
					case 39:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D");
						}
						handled = event.ctrlKey || event.metaKey;
						if (event.originalEvent.altKey) {
							$.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths")), "M");
						}
						break;
					case 40:
						if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, +7, "D");
						}
						handled = event.ctrlKey || event.metaKey;
						break;
					default:
						handled = false;
				}
			} else if (event.keyCode === 36 && event.ctrlKey) {
				$.datepicker._showDatepicker(this);
			} else {
				handled = false;
			}
			if (handled) {
				event.preventDefault();
				event.stopPropagation();
			}
		},
		_doKeyPress: function (event) {
			var chars, chr, inst = $.datepicker._getInst(event.target);
			if ($.datepicker._get(inst, "constrainInput")) {
				chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
				chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
				return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1);
			}
		},
		_doKeyUp: function (event) {
			var date, inst = $.datepicker._getInst(event.target);
			if (inst.input.val() !== inst.lastVal) {
				try {
					date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), (inst.input ? inst.input.val() : null), $.datepicker._getFormatConfig(inst));
					if (date) {
						$.datepicker._setDateFromField(inst);
						$.datepicker._updateAlternate(inst);
						$.datepicker._updateDatepicker(inst);
					}
				} catch (err) {}
			}
			return true;
		},
		_showDatepicker: function (input) {
			input = input.target || input;
			if (input.nodeName.toLowerCase() !== "input") {
				input = $("input", input.parentNode)[0];
			}
			if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) {
				return;
			}
			var inst, beforeShow, beforeShowSettings, isFixed, offset, showAnim, duration;
			inst = $.datepicker._getInst(input);
			if ($.datepicker._curInst && $.datepicker._curInst !== inst) {
				$.datepicker._curInst.dpDiv.stop(true, true);
				if (inst && $.datepicker._datepickerShowing) {
					$.datepicker._hideDatepicker($.datepicker._curInst.input[0]);
				}
			}
			beforeShow = $.datepicker._get(inst, "beforeShow");
			beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
			if (beforeShowSettings === false) {
				return;
			}
			datepicker_extendRemove(inst.settings, beforeShowSettings);
			inst.lastVal = null;
			$.datepicker._lastInput = input;
			$.datepicker._setDateFromField(inst);
			if ($.datepicker._inDialog) {
				input.value = "";
			}
			if (!$.datepicker._pos) {
				$.datepicker._pos = $.datepicker._findPos(input);
				$.datepicker._pos[1] += input.offsetHeight;
			}
			isFixed = false;
			$(input).parents().each(function () {
				isFixed |= $(this).css("position") === "fixed";
				return !isFixed;
			});
			offset = {
				left: $.datepicker._pos[0],
				top: $.datepicker._pos[1]
			};
			$.datepicker._pos = null;
			inst.dpDiv.empty();
			inst.dpDiv.css({
				position: "absolute",
				display: "block",
				top: "-1000px"
			});
			$.datepicker._updateDatepicker(inst);
			offset = $.datepicker._checkOffset(inst, offset, isFixed);
			inst.dpDiv.css({
				position: ($.datepicker._inDialog && $.blockUI ? "static" : (isFixed ? "fixed" : "absolute")),
				display: "none",
				left: offset.left + "px",
				top: offset.top + "px"
			});
			if (!inst.inline) {
				showAnim = $.datepicker._get(inst, "showAnim");
				duration = $.datepicker._get(inst, "duration");
				inst.dpDiv.css("z-index", datepicker_getZindex($(input)) + 1);
				$.datepicker._datepickerShowing = true;
				if ($.effects && $.effects.effect[showAnim]) {
					inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration);
				} else {
					inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
				}
				if ($.datepicker._shouldFocusInput(inst)) {
					inst.input.focus();
				}
				$.datepicker._curInst = inst;
			}
		},
		_updateDatepicker: function (inst) {
			this.maxRows = 4;
			datepicker_instActive = inst;
			inst.dpDiv.empty().append(this._generateHTML(inst));
			this._attachHandlers(inst);
			var origyearshtml, numMonths = this._getNumberOfMonths(inst),
				cols = numMonths[1],
				width = 17,
				activeCell = inst.dpDiv.find("." + this._dayOverClass + " a");
			if (activeCell.length > 0) {
				datepicker_handleMouseover.apply(activeCell.get(0));
			}
			inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
			if (cols > 1) {
				inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em");
			}
			inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
			inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
			if (inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput(inst)) {
				inst.input.focus();
			}
			if (inst.yearshtml) {
				origyearshtml = inst.yearshtml;
				setTimeout(function () {
					if (origyearshtml === inst.yearshtml && inst.yearshtml) {
						inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
					}
					origyearshtml = inst.yearshtml = null;
				}, 0);
			}
		},
		_shouldFocusInput: function (inst) {
			return inst.input && inst.input.is(":visible") && !inst.input.is(":disabled") && !inst.input.is(":focus");
		},
		_checkOffset: function (inst, offset, isFixed) {
			var dpWidth = inst.dpDiv.outerWidth(),
				dpHeight = inst.dpDiv.outerHeight(),
				inputWidth = inst.input ? inst.input.outerWidth() : 0,
				inputHeight = inst.input ? inst.input.outerHeight() : 0,
				viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()),
				viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());
			offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
			offset.left -= (isFixed && offset.left === inst.input.offset().left) ? $(document).scrollLeft() : 0;
			offset.top -= (isFixed && offset.top === (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;
			offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
			offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ? Math.abs(dpHeight + inputHeight) : 0);
			return offset;
		},
		_findPos: function (obj) {
			var position, inst = this._getInst(obj),
				isRTL = this._get(inst, "isRTL");
			while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden(obj))) {
				obj = obj[isRTL ? "previousSibling" : "nextSibling"];
			}
			position = $(obj).offset();
			return [position.left, position.top];
		},
		_hideDatepicker: function (input) {
			var showAnim, duration, postProcess, onClose, inst = this._curInst;
			if (!inst || (input && inst !== $.data(input, "datepicker"))) {
				return;
			}
			if (this._datepickerShowing) {
				showAnim = this._get(inst, "showAnim");
				duration = this._get(inst, "duration");
				postProcess = function () {
					$.datepicker._tidyDialog(inst);
				};
				if ($.effects && ($.effects.effect[showAnim] || $.effects[showAnim])) {
					inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
				} else {
					inst.dpDiv[(showAnim === "slideDown" ? "slideUp" : (showAnim === "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess);
				}
				if (!showAnim) {
					postProcess();
				}
				this._datepickerShowing = false;
				onClose = this._get(inst, "onClose");
				if (onClose) {
					onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst]);
				}
				this._lastInput = null;
				if (this._inDialog) {
					this._dialogInput.css({
						position: "absolute",
						left: "0",
						top: "-100px"
					});
					if ($.blockUI) {
						$.unblockUI();
						$("body").append(this.dpDiv);
					}
				}
				this._inDialog = false;
			}
		},
		_tidyDialog: function (inst) {
			inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
		},
		_checkExternalClick: function (event) {
			if (!$.datepicker._curInst) {
				return;
			}
			var $target = $(event.target),
				inst = $.datepicker._getInst($target[0]);
			if ((($target[0].id !== $.datepicker._mainDivId && $target.parents("#" + $.datepicker._mainDivId).length === 0 && !$target.hasClass($.datepicker.markerClassName) && !$target.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))) || ($target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== inst)) {
				$.datepicker._hideDatepicker();
			}
		},
		_adjustDate: function (id, offset, period) {
			var target = $(id),
				inst = this._getInst(target[0]);
			if (this._isDisabledDatepicker(target[0])) {
				return;
			}
			this._adjustInstDate(inst, offset + (period === "M" ? this._get(inst, "showCurrentAtPos") : 0), period);
			this._updateDatepicker(inst);
		},
		_gotoToday: function (id) {
			var date, target = $(id),
				inst = this._getInst(target[0]);
			if (this._get(inst, "gotoCurrent") && inst.currentDay) {
				inst.selectedDay = inst.currentDay;
				inst.drawMonth = inst.selectedMonth = inst.currentMonth;
				inst.drawYear = inst.selectedYear = inst.currentYear;
			} else {
				date = new Date();
				inst.selectedDay = date.getDate();
				inst.drawMonth = inst.selectedMonth = date.getMonth();
				inst.drawYear = inst.selectedYear = date.getFullYear();
			}
			this._notifyChange(inst);
			this._adjustDate(target);
		},
		_selectMonthYear: function (id, select, period) {
			var target = $(id),
				inst = this._getInst(target[0]);
			inst["selected" + (period === "M" ? "Month" : "Year")] = inst["draw" + (period === "M" ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10);
			this._notifyChange(inst);
			this._adjustDate(target);
		},
		_selectDay: function (id, month, year, td) {
			var inst, target = $(id);
			if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
				return;
			}
			inst = this._getInst(target[0]);
			inst.selectedDay = inst.currentDay = $("a", td).html();
			inst.selectedMonth = inst.currentMonth = month;
			inst.selectedYear = inst.currentYear = year;
			this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear));
		},
		_clearDate: function (id) {
			var target = $(id);
			this._selectDate(target, "");
		},
		_selectDate: function (id, dateStr) {
			var onSelect, target = $(id),
				inst = this._getInst(target[0]);
			dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
			if (inst.input) {
				inst.input.val(dateStr);
			}
			this._updateAlternate(inst);
			onSelect = this._get(inst, "onSelect");
			if (onSelect) {
				onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
			} else if (inst.input) {
				inst.input.trigger("change");
			}
			if (inst.inline) {
				this._updateDatepicker(inst);
			} else {
				this._hideDatepicker();
				this._lastInput = inst.input[0];
				if (typeof (inst.input[0]) !== "object") {
					inst.input.focus();
				}
				this._lastInput = null;
			}
		},
		_updateAlternate: function (inst) {
			var altFormat, date, dateStr, altField = this._get(inst, "altField");
			if (altField) {
				altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
				date = this._getDate(inst);
				dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
				$(altField).each(function () {
					$(this).val(dateStr);
				});
			}
		},
		noWeekends: function (date) {
			var day = date.getDay();
			return [(day > 0 && day < 6), ""];
		},
		iso8601Week: function (date) {
			var time, checkDate = new Date(date.getTime());
			checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
			time = checkDate.getTime();
			checkDate.setMonth(0);
			checkDate.setDate(1);
			return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
		},
		parseDate: function (format, value, settings) {
			if (format == null || value == null) {
				throw "Invalid arguments";
			}
			value = (typeof value === "object" ? value.toString() : value + "");
			if (value === "") {
				return null;
			}
			var iFormat, dim, extra, iValue = 0,
				shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff,
				shortYearCutoff = (typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp : new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10)),
				dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
				dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
				monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
				monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
				year = -1,
				month = -1,
				day = -1,
				doy = -1,
				literal = false,
				date, lookAhead = function (match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
					if (matches) {
						iFormat++;
					}
					return matches;
				},
				getNumber = function (match) {
					var isDoubled = lookAhead(match),
						size = (match === "@" ? 14 : (match === "!" ? 20 : (match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))),
						minSize = (match === "y" ? size : 1),
						digits = new RegExp("^\\d{" + minSize + "," + size + "}"),
						num = value.substring(iValue).match(digits);
					if (!num) {
						throw "Missing number at position " + iValue;
					}
					iValue += num[0].length;
					return parseInt(num[0], 10);
				},
				getName = function (match, shortNames, longNames) {
					var index = -1,
						names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
							return [
								[k, v]
							];
						}).sort(function (a, b) {
							return -(a[1].length - b[1].length);
						});
					$.each(names, function (i, pair) {
						var name = pair[1];
						if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
							index = pair[0];
							iValue += name.length;
							return false;
						}
					});
					if (index !== -1) {
						return index + 1;
					} else {
						throw "Unknown name at position " + iValue;
					}
				},
				checkLiteral = function () {
					if (value.charAt(iValue) !== format.charAt(iFormat)) {
						throw "Unexpected literal at position " + iValue;
					}
					iValue++;
				};
			for (iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
						literal = false;
					} else {
						checkLiteral();
					}
				} else {
					switch (format.charAt(iFormat)) {
						case "d":
							day = getNumber("d");
							break;
						case "D":
							getName("D", dayNamesShort, dayNames);
							break;
						case "o":
							doy = getNumber("o");
							break;
						case "m":
							month = getNumber("m");
							break;
						case "M":
							month = getName("M", monthNamesShort, monthNames);
							break;
						case "y":
							year = getNumber("y");
							break;
						case "@":
							date = new Date(getNumber("@"));
							year = date.getFullYear();
							month = date.getMonth() + 1;
							day = date.getDate();
							break;
						case "!":
							date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
							year = date.getFullYear();
							month = date.getMonth() + 1;
							day = date.getDate();
							break;
						case "'":
							if (lookAhead("'")) {
								checkLiteral();
							} else {
								literal = true;
							}
							break;
						default:
							checkLiteral();
					}
				}
			}
			if (iValue < value.length) {
				extra = value.substr(iValue);
				if (!/^\s+/.test(extra)) {
					throw "Extra/unparsed characters found in date: " + extra;
				}
			}
			if (year === -1) {
				year = new Date().getFullYear();
			} else if (year < 100) {
				year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
			}
			if (doy > -1) {
				month = 1;
				day = doy;
				do {
					dim = this._getDaysInMonth(year, month - 1);
					if (day <= dim) {
						break;
					}
					month++;
					day -= dim;
				} while (true);
			}
			date = this._daylightSavingAdjust(new Date(year, month - 1, day));
			if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
				throw "Invalid date";
			}
			return date;
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
		formatDate: function (format, date, settings) {
			if (!date) {
				return "";
			}
			var iFormat, dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
				dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
				monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
				monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
				lookAhead = function (match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
					if (matches) {
						iFormat++;
					}
					return matches;
				},
				formatNumber = function (match, value, len) {
					var num = "" + value;
					if (lookAhead(match)) {
						while (num.length < len) {
							num = "0" + num;
						}
					}
					return num;
				},
				formatName = function (match, value, shortNames, longNames) {
					return (lookAhead(match) ? longNames[value] : shortNames[value]);
				},
				output = "",
				literal = false;
			if (date) {
				for (iFormat = 0; iFormat < format.length; iFormat++) {
					if (literal) {
						if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
							literal = false;
						} else {
							output += format.charAt(iFormat);
						}
					} else {
						switch (format.charAt(iFormat)) {
							case "d":
								output += formatNumber("d", date.getDate(), 2);
								break;
							case "D":
								output += formatName("D", date.getDay(), dayNamesShort, dayNames);
								break;
							case "o":
								output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
								break;
							case "m":
								output += formatNumber("m", date.getMonth() + 1, 2);
								break;
							case "M":
								output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
								break;
							case "y":
								output += (lookAhead("y") ? date.getFullYear() : (date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100);
								break;
							case "@":
								output += date.getTime();
								break;
							case "!":
								output += date.getTime() * 10000 + this._ticksTo1970;
								break;
							case "'":
								if (lookAhead("'")) {
									output += "'";
								} else {
									literal = true;
								}
								break;
							default:
								output += format.charAt(iFormat);
						}
					}
				}
			}
			return output;
		},
		_possibleChars: function (format) {
			var iFormat, chars = "",
				literal = false,
				lookAhead = function (match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
					if (matches) {
						iFormat++;
					}
					return matches;
				};
			for (iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
						literal = false;
					} else {
						chars += format.charAt(iFormat);
					}
				} else {
					switch (format.charAt(iFormat)) {
						case "d":
						case "m":
						case "y":
						case "@":
							chars += "0123456789";
							break;
						case "D":
						case "M":
							return null;
						case "'":
							if (lookAhead("'")) {
								chars += "'";
							} else {
								literal = true;
							}
							break;
						default:
							chars += format.charAt(iFormat);
					}
				}
			}
			return chars;
		},
		_get: function (inst, name) {
			return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name];
		},
		_setDateFromField: function (inst, noDefault) {
			if (inst.input.val() === inst.lastVal) {
				return;
			}
			var dateFormat = this._get(inst, "dateFormat"),
				dates = inst.lastVal = inst.input ? inst.input.val() : null,
				defaultDate = this._getDefaultDate(inst),
				date = defaultDate,
				settings = this._getFormatConfig(inst);
			try {
				date = this.parseDate(dateFormat, dates, settings) || defaultDate;
			} catch (event) {
				dates = (noDefault ? "" : dates);
			}
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
			inst.currentDay = (dates ? date.getDate() : 0);
			inst.currentMonth = (dates ? date.getMonth() : 0);
			inst.currentYear = (dates ? date.getFullYear() : 0);
			this._adjustInstDate(inst);
		},
		_getDefaultDate: function (inst) {
			return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
		},
		_determineDate: function (inst, date, defaultDate) {
			var offsetNumeric = function (offset) {
					var date = new Date();
					date.setDate(date.getDate() + offset);
					return date;
				},
				offsetString = function (offset) {
					try {
						return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), offset, $.datepicker._getFormatConfig(inst));
					} catch (e) {}
					var date = (offset.toLowerCase().match(/^c/) ? $.datepicker._getDate(inst) : null) || new Date(),
						year = date.getFullYear(),
						month = date.getMonth(),
						day = date.getDate(),
						pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
						matches = pattern.exec(offset);
					while (matches) {
						switch (matches[2] || "d") {
							case "d":
							case "D":
								day += parseInt(matches[1], 10);
								break;
							case "w":
							case "W":
								day += parseInt(matches[1], 10) * 7;
								break;
							case "m":
							case "M":
								month += parseInt(matches[1], 10);
								day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
								break;
							case "y":
							case "Y":
								year += parseInt(matches[1], 10);
								day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
								break;
						}
						matches = pattern.exec(offset);
					}
					return new Date(year, month, day);
				},
				newDate = (date == null || date === "" ? defaultDate : (typeof date === "string" ? offsetString(date) : (typeof date === "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
			newDate = (newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate);
			if (newDate) {
				newDate.setHours(0);
				newDate.setMinutes(0);
				newDate.setSeconds(0);
				newDate.setMilliseconds(0);
			}
			return this._daylightSavingAdjust(newDate);
		},
		_daylightSavingAdjust: function (date) {
			if (!date) {
				return null;
			}
			date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
			return date;
		},
		_setDate: function (inst, date, noChange) {
			var clear = !date,
				origMonth = inst.selectedMonth,
				origYear = inst.selectedYear,
				newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
			inst.selectedDay = inst.currentDay = newDate.getDate();
			inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
			inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
			if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
				this._notifyChange(inst);
			}
			this._adjustInstDate(inst);
			if (inst.input) {
				inst.input.val(clear ? "" : this._formatDate(inst));
			}
		},
		_getDate: function (inst) {
			var startDate = (!inst.currentYear || (inst.input && inst.input.val() === "") ? null : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
			return startDate;
		},
		_attachHandlers: function (inst) {
			var stepMonths = this._get(inst, "stepMonths"),
				id = "#" + inst.id.replace(/\\\\/g, "\\");
			inst.dpDiv.find("[data-handler]").map(function () {
				var handler = {
					prev: function () {
						$.datepicker._adjustDate(id, -stepMonths, "M");
					},
					next: function () {
						$.datepicker._adjustDate(id, +stepMonths, "M");
					},
					hide: function () {
						$.datepicker._hideDatepicker();
					},
					today: function () {
						$.datepicker._gotoToday(id);
					},
					selectDay: function () {
						$.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
						return false;
					},
					selectMonth: function () {
						$.datepicker._selectMonthYear(id, this, "M");
						return false;
					},
					selectYear: function () {
						$.datepicker._selectMonthYear(id, this, "Y");
						return false;
					}
				};
				$(this).bind(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
			});
		},
		_generateHTML: function (inst) {
			var maxDraw, prevText, prev, nextText, next, currentText, gotoDate, controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin, monthNames, monthNamesShort, beforeShowDay, showOtherMonths, selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate, cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows, printDate, dRow, tbody, daySettings, otherMonth, unselectable, tempDate = new Date(),
				today = this._daylightSavingAdjust(new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())),
				isRTL = this._get(inst, "isRTL"),
				showButtonPanel = this._get(inst, "showButtonPanel"),
				hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"),
				navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"),
				numMonths = this._getNumberOfMonths(inst),
				showCurrentAtPos = this._get(inst, "showCurrentAtPos"),
				stepMonths = this._get(inst, "stepMonths"),
				isMultiMonth = (numMonths[0] !== 1 || numMonths[1] !== 1),
				currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) : new Date(inst.currentYear, inst.currentMonth, inst.currentDay))),
				minDate = this._getMinMaxDate(inst, "min"),
				maxDate = this._getMinMaxDate(inst, "max"),
				drawMonth = inst.drawMonth - showCurrentAtPos,
				drawYear = inst.drawYear;
			if (drawMonth < 0) {
				drawMonth += 12;
				drawYear--;
			}
			if (maxDate) {
				maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(), maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
				maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
				while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
					drawMonth--;
					if (drawMonth < 0) {
						drawMonth = 11;
						drawYear--;
					}
				}
			}
			inst.drawMonth = drawMonth;
			inst.drawYear = drawYear;
			prevText = this._get(inst, "prevText");
			prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)), this._getFormatConfig(inst)));
			prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" + " title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" : (hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>"));
			nextText = this._get(inst, "nextText");
			nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)), this._getFormatConfig(inst)));
			next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" + " title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" : (hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>"));
			currentText = this._get(inst, "currentText");
			gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
			currentText = (!navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
			controls = (!inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(inst, "closeText") + "</button>" : "");
			buttonPanel = (showButtonPanel) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") + (this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" + ">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";
			firstDay = parseInt(this._get(inst, "firstDay"), 10);
			firstDay = (isNaN(firstDay) ? 0 : firstDay);
			showWeek = this._get(inst, "showWeek");
			dayNames = this._get(inst, "dayNames");
			dayNamesMin = this._get(inst, "dayNamesMin");
			monthNames = this._get(inst, "monthNames");
			monthNamesShort = this._get(inst, "monthNamesShort");
			beforeShowDay = this._get(inst, "beforeShowDay");
			showOtherMonths = this._get(inst, "showOtherMonths");
			selectOtherMonths = this._get(inst, "selectOtherMonths");
			defaultDate = this._getDefaultDate(inst);
			html = "";
			dow;
			for (row = 0; row < numMonths[0]; row++) {
				group = "";
				this.maxRows = 4;
				for (col = 0; col < numMonths[1]; col++) {
					selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
					cornerClass = " ui-corner-all";
					calender = "";
					if (isMultiMonth) {
						calender += "<div class='ui-datepicker-group";
						if (numMonths[1] > 1) {
							switch (col) {
								case 0:
									calender += " ui-datepicker-group-first";
									cornerClass = " ui-corner-" + (isRTL ? "right" : "left");
									break;
								case numMonths[1] - 1:
									calender += " ui-datepicker-group-last";
									cornerClass = " ui-corner-" + (isRTL ? "left" : "right");
									break;
								default:
									calender += " ui-datepicker-group-middle";
									cornerClass = "";
									break;
							}
						}
						calender += "'>";
					}
					calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" + (/all|left/.test(cornerClass) && row === 0 ? (isRTL ? next : prev) : "") + (/all|right/.test(cornerClass) && row === 0 ? (isRTL ? prev : next) : "") + this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>";
					thead = (showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "");
					for (dow = 0; dow < 7; dow++) {
						day = (dow + firstDay) % 7;
						thead += "<th scope='col'" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
					}
					calender += thead + "</tr></thead><tbody>";
					daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
					if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
						inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
					}
					leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
					curRows = Math.ceil((leadDays + daysInMonth) / 7);
					numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows);
					this.maxRows = numRows;
					printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
					for (dRow = 0; dRow < numRows; dRow++) {
						calender += "<tr>";
						tbody = (!showWeek ? "" : "<td class='ui-datepicker-week-col'>" + this._get(inst, "calculateWeek")(printDate) + "</td>");
						for (dow = 0; dow < 7; dow++) {
							daySettings = (beforeShowDay ? beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
							otherMonth = (printDate.getMonth() !== drawMonth);
							unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] || (minDate && printDate < minDate) || (maxDate && printDate > maxDate);
							tbody += "<td class='" + ((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (otherMonth ? " ui-datepicker-other-month" : "") + ((printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent) || (defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime()) ? " " + this._dayOverClass : "") + (unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") + (otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + (printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + (printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + (unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + (otherMonth && !showOtherMonths ? "&#xa0;" : (unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" + (printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") + (printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + (otherMonth ? " ui-priority-secondary" : "") + "' href='#'>" + printDate.getDate() + "</a>")) + "</td>";
							printDate.setDate(printDate.getDate() + 1);
							printDate = this._daylightSavingAdjust(printDate);
						}
						calender += tbody + "</tr>";
					}
					drawMonth++;
					if (drawMonth > 11) {
						drawMonth = 0;
						drawYear++;
					}
					calender += "</tbody></table>" + (isMultiMonth ? "</div>" + ((numMonths[0] > 0 && col === numMonths[1] - 1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
					group += calender;
				}
				html += group;
			}
			html += buttonPanel;
			inst._keyEvent = false;
			return html;
		},
		_generateMonthYearHeader: function (inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
			var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear, changeMonth = this._get(inst, "changeMonth"),
				changeYear = this._get(inst, "changeYear"),
				showMonthAfterYear = this._get(inst, "showMonthAfterYear"),
				html = "<div class='ui-datepicker-title'>",
				monthHtml = "";
			if (secondary || !changeMonth) {
				monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
			} else {
				inMinYear = (minDate && minDate.getFullYear() === drawYear);
				inMaxYear = (maxDate && maxDate.getFullYear() === drawYear);
				monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
				for (month = 0; month < 12; month++) {
					if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
						monthHtml += "<option value='" + month + "'" + (month === drawMonth ? " selected='selected'" : "") + ">" + monthNamesShort[month] + "</option>";
					}
				}
				monthHtml += "</select>";
			}
			if (!showMonthAfterYear) {
				html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
			}
			if (!inst.yearshtml) {
				inst.yearshtml = "";
				if (secondary || !changeYear) {
					html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
				} else {
					years = this._get(inst, "yearRange").split(":");
					thisYear = new Date().getFullYear();
					determineYear = function (value) {
						var year = (value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) : (value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10)));
						return (isNaN(year) ? thisYear : year);
					};
					year = determineYear(years[0]);
					endYear = Math.max(year, determineYear(years[1] || ""));
					year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
					endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
					inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
					for (; year <= endYear; year++) {
						inst.yearshtml += "<option value='" + year + "'" + (year === drawYear ? " selected='selected'" : "") + ">" + year + "</option>";
					}
					inst.yearshtml += "</select>";
					html += inst.yearshtml;
					inst.yearshtml = null;
				}
			}
			html += this._get(inst, "yearSuffix");
			if (showMonthAfterYear) {
				html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
			}
			html += "</div>";
			return html;
		},
		_adjustInstDate: function (inst, offset, period) {
			var year = inst.drawYear + (period === "Y" ? offset : 0),
				month = inst.drawMonth + (period === "M" ? offset : 0),
				day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0),
				date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
			if (period === "M" || period === "Y") {
				this._notifyChange(inst);
			}
		},
		_restrictMinMax: function (inst, date) {
			var minDate = this._getMinMaxDate(inst, "min"),
				maxDate = this._getMinMaxDate(inst, "max"),
				newDate = (minDate && date < minDate ? minDate : date);
			return (maxDate && newDate > maxDate ? maxDate : newDate);
		},
		_notifyChange: function (inst) {
			var onChange = this._get(inst, "onChangeMonthYear");
			if (onChange) {
				onChange.apply((inst.input ? inst.input[0] : null), [inst.selectedYear, inst.selectedMonth + 1, inst]);
			}
		},
		_getNumberOfMonths: function (inst) {
			var numMonths = this._get(inst, "numberOfMonths");
			return (numMonths == null ? [1, 1] : (typeof numMonths === "number" ? [1, numMonths] : numMonths));
		},
		_getMinMaxDate: function (inst, minMax) {
			return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
		},
		_getDaysInMonth: function (year, month) {
			return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
		},
		_getFirstDayOfMonth: function (year, month) {
			return new Date(year, month, 1).getDay();
		},
		_canAdjustMonth: function (inst, offset, curYear, curMonth) {
			var numMonths = this._getNumberOfMonths(inst),
				date = this._daylightSavingAdjust(new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
			if (offset < 0) {
				date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
			}
			return this._isInRange(inst, date);
		},
		_isInRange: function (inst, date) {
			var yearSplit, currentYear, minDate = this._getMinMaxDate(inst, "min"),
				maxDate = this._getMinMaxDate(inst, "max"),
				minYear = null,
				maxYear = null,
				years = this._get(inst, "yearRange");
			if (years) {
				yearSplit = years.split(":");
				currentYear = new Date().getFullYear();
				minYear = parseInt(yearSplit[0], 10);
				maxYear = parseInt(yearSplit[1], 10);
				if (yearSplit[0].match(/[+\-].*/)) {
					minYear += currentYear;
				}
				if (yearSplit[1].match(/[+\-].*/)) {
					maxYear += currentYear;
				}
			}
			return ((!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()) && (!minYear || date.getFullYear() >= minYear) && (!maxYear || date.getFullYear() <= maxYear));
		},
		_getFormatConfig: function (inst) {
			var shortYearCutoff = this._get(inst, "shortYearCutoff");
			shortYearCutoff = (typeof shortYearCutoff !== "string" ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
			return {
				shortYearCutoff: shortYearCutoff,
				dayNamesShort: this._get(inst, "dayNamesShort"),
				dayNames: this._get(inst, "dayNames"),
				monthNamesShort: this._get(inst, "monthNamesShort"),
				monthNames: this._get(inst, "monthNames")
			};
		},
		_formatDate: function (inst, day, month, year) {
			if (!day) {
				inst.currentDay = inst.selectedDay;
				inst.currentMonth = inst.selectedMonth;
				inst.currentYear = inst.selectedYear;
			}
			var date = (day ? (typeof day === "object" ? day : this._daylightSavingAdjust(new Date(year, month, day))) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
			return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
		}
	});

	function datepicker_bindHover(dpDiv) {
		var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return dpDiv.delegate(selector, "mouseout", function () {
			$(this).removeClass("ui-state-hover");
			if (this.className.indexOf("ui-datepicker-prev") !== -1) {
				$(this).removeClass("ui-datepicker-prev-hover");
			}
			if (this.className.indexOf("ui-datepicker-next") !== -1) {
				$(this).removeClass("ui-datepicker-next-hover");
			}
		}).delegate(selector, "mouseover", datepicker_handleMouseover);
	}

	function datepicker_handleMouseover() {
		if (!$.datepicker._isDisabledDatepicker(datepicker_instActive.inline ? datepicker_instActive.dpDiv.parent()[0] : datepicker_instActive.input[0])) {
			$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
			$(this).addClass("ui-state-hover");
			if (this.className.indexOf("ui-datepicker-prev") !== -1) {
				$(this).addClass("ui-datepicker-prev-hover");
			}
			if (this.className.indexOf("ui-datepicker-next") !== -1) {
				$(this).addClass("ui-datepicker-next-hover");
			}
		}
	}

	function datepicker_extendRemove(target, props) {
		$.extend(target, props);
		for (var name in props) {
			if (props[name] == null) {
				target[name] = props[name];
			}
		}
		return target;
	}
	$.fn.datepicker = function (options) {
		if (!this.length) {
			return this;
		}
		if (!$.datepicker.initialized) {
			$(document).mousedown($.datepicker._checkExternalClick);
			$.datepicker.initialized = true;
		}
		if ($("#" + $.datepicker._mainDivId).length === 0) {
			$("body").append($.datepicker.dpDiv);
		}
		var otherArgs = Array.prototype.slice.call(arguments, 1);
		if (typeof options === "string" && (options === "isDisabled" || options === "getDate" || options === "widget")) {
			return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs));
		}
		if (options === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
			return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs));
		}
		return this.each(function () {
			typeof options === "string" ? $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this].concat(otherArgs)) : $.datepicker._attachDatepicker(this, options);
		});
	};
	$.datepicker = new Datepicker();
	$.datepicker.initialized = false;
	$.datepicker.uuid = new Date().getTime();
	$.datepicker.version = "1.11.4";
	var datepicker = $.datepicker;
	$.widget("ui.draggable", $.ui.mouse, {
		version: "1.11.4",
		widgetEventPrefix: "drag",
		options: {
			addClasses: true,
			appendTo: "parent",
			axis: false,
			connectToSortable: false,
			containment: false,
			cursor: "auto",
			cursorAt: false,
			grid: false,
			handle: false,
			helper: "original",
			iframeFix: false,
			opacity: false,
			refreshPositions: false,
			revert: false,
			revertDuration: 500,
			scope: "default",
			scroll: true,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: false,
			snapMode: "both",
			snapTolerance: 20,
			stack: false,
			zIndex: false,
			drag: null,
			start: null,
			stop: null
		},
		_create: function () {
			if (this.options.helper === "original") {
				this._setPositionRelative();
			}
			if (this.options.addClasses) {
				this.element.addClass("ui-draggable");
			}
			if (this.options.disabled) {
				this.element.addClass("ui-draggable-disabled");
			}
			this._setHandleClassName();
			this._mouseInit();
		},
		_setOption: function (key, value) {
			this._super(key, value);
			if (key === "handle") {
				this._removeHandleClassName();
				this._setHandleClassName();
			}
		},
		_destroy: function () {
			if ((this.helper || this.element).is(".ui-draggable-dragging")) {
				this.destroyOnClear = true;
				return;
			}
			this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
			this._removeHandleClassName();
			this._mouseDestroy();
		},
		_mouseCapture: function (event) {
			var o = this.options;
			this._blurActiveElement(event);
			if (this.helper || o.disabled || $(event.target).closest(".ui-resizable-handle").length > 0) {
				return false;
			}
			this.handle = this._getHandle(event);
			if (!this.handle) {
				return false;
			}
			this._blockFrames(o.iframeFix === true ? "iframe" : o.iframeFix);
			return true;
		},
		_blockFrames: function (selector) {
			this.iframeBlocks = this.document.find(selector).map(function () {
				var iframe = $(this);
				return $("<div>").css("position", "absolute").appendTo(iframe.parent()).outerWidth(iframe.outerWidth()).outerHeight(iframe.outerHeight()).offset(iframe.offset())[0];
			});
		},
		_unblockFrames: function () {
			if (this.iframeBlocks) {
				this.iframeBlocks.remove();
				delete this.iframeBlocks;
			}
		},
		_blurActiveElement: function (event) {
			var document = this.document[0];
			if (!this.handleElement.is(event.target)) {
				return;
			}
			try {
				if (document.activeElement && document.activeElement.nodeName.toLowerCase() !== "body") {
					$(document.activeElement).blur();
				}
			} catch (error) {}
		},
		_mouseStart: function (event) {
			var o = this.options;
			this.helper = this._createHelper(event);
			this.helper.addClass("ui-draggable-dragging");
			this._cacheHelperProportions();
			if ($.ui.ddmanager) {
				$.ui.ddmanager.current = this;
			}
			this._cacheMargins();
			this.cssPosition = this.helper.css("position");
			this.scrollParent = this.helper.scrollParent(true);
			this.offsetParent = this.helper.offsetParent();
			this.hasFixedAncestor = this.helper.parents().filter(function () {
				return $(this).css("position") === "fixed";
			}).length > 0;
			this.positionAbs = this.element.offset();
			this._refreshOffsets(event);
			this.originalPosition = this.position = this._generatePosition(event, false);
			this.originalPageX = event.pageX;
			this.originalPageY = event.pageY;
			(o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));
			this._setContainment();
			if (this._trigger("start", event) === false) {
				this._clear();
				return false;
			}
			this._cacheHelperProportions();
			if ($.ui.ddmanager && !o.dropBehaviour) {
				$.ui.ddmanager.prepareOffsets(this, event);
			}
			this._normalizeRightBottom();
			this._mouseDrag(event, true);
			if ($.ui.ddmanager) {
				$.ui.ddmanager.dragStart(this, event);
			}
			return true;
		},
		_refreshOffsets: function (event) {
			this.offset = {
				top: this.positionAbs.top - this.margins.top,
				left: this.positionAbs.left - this.margins.left,
				scroll: false,
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			};
			this.offset.click = {
				left: event.pageX - this.offset.left,
				top: event.pageY - this.offset.top
			};
		},
		_mouseDrag: function (event, noPropagation) {
			if (this.hasFixedAncestor) {
				this.offset.parent = this._getParentOffset();
			}
			this.position = this._generatePosition(event, true);
			this.positionAbs = this._convertPositionTo("absolute");
			if (!noPropagation) {
				var ui = this._uiHash();
				if (this._trigger("drag", event, ui) === false) {
					this._mouseUp({});
					return false;
				}
				this.position = ui.position;
			}
			this.helper[0].style.left = this.position.left + "px";
			this.helper[0].style.top = this.position.top + "px";
			if ($.ui.ddmanager) {
				$.ui.ddmanager.drag(this, event);
			}
			return false;
		},
		_mouseStop: function (event) {
			var that = this,
				dropped = false;
			if ($.ui.ddmanager && !this.options.dropBehaviour) {
				dropped = $.ui.ddmanager.drop(this, event);
			}
			if (this.dropped) {
				dropped = this.dropped;
				this.dropped = false;
			}
			if ((this.options.revert === "invalid" && !dropped) || (this.options.revert === "valid" && dropped) || this.options.revert === true || ($.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped))) {
				$(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
					if (that._trigger("stop", event) !== false) {
						that._clear();
					}
				});
			} else {
				if (this._trigger("stop", event) !== false) {
					this._clear();
				}
			}
			return false;
		},
		_mouseUp: function (event) {
			this._unblockFrames();
			if ($.ui.ddmanager) {
				$.ui.ddmanager.dragStop(this, event);
			}
			if (this.handleElement.is(event.target)) {
				this.element.focus();
			}
			return $.ui.mouse.prototype._mouseUp.call(this, event);
		},
		cancel: function () {
			if (this.helper.is(".ui-draggable-dragging")) {
				this._mouseUp({});
			} else {
				this._clear();
			}
			return this;
		},
		_getHandle: function (event) {
			return this.options.handle ? !!$(event.target).closest(this.element.find(this.options.handle)).length : true;
		},
		_setHandleClassName: function () {
			this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
			this.handleElement.addClass("ui-draggable-handle");
		},
		_removeHandleClassName: function () {
			this.handleElement.removeClass("ui-draggable-handle");
		},
		_createHelper: function (event) {
			var o = this.options,
				helperIsFunction = $.isFunction(o.helper),
				helper = helperIsFunction ? $(o.helper.apply(this.element[0], [event])) : (o.helper === "clone" ? this.element.clone().removeAttr("id") : this.element);
			if (!helper.parents("body").length) {
				helper.appendTo((o.appendTo === "parent" ? this.element[0].parentNode : o.appendTo));
			}
			if (helperIsFunction && helper[0] === this.element[0]) {
				this._setPositionRelative();
			}
			if (helper[0] !== this.element[0] && !(/(fixed|absolute)/).test(helper.css("position"))) {
				helper.css("position", "absolute");
			}
			return helper;
		},
		_setPositionRelative: function () {
			if (!(/^(?:r|a|f)/).test(this.element.css("position"))) {
				this.element[0].style.position = "relative";
			}
		},
		_adjustOffsetFromHelper: function (obj) {
			if (typeof obj === "string") {
				obj = obj.split(" ");
			}
			if ($.isArray(obj)) {
				obj = {
					left: +obj[0],
					top: +obj[1] || 0
				};
			}
			if ("left" in obj) {
				this.offset.click.left = obj.left + this.margins.left;
			}
			if ("right" in obj) {
				this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
			}
			if ("top" in obj) {
				this.offset.click.top = obj.top + this.margins.top;
			}
			if ("bottom" in obj) {
				this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
			}
		},
		_isRootNode: function (element) {
			return (/(html|body)/i).test(element.tagName) || element === this.document[0];
		},
		_getParentOffset: function () {
			var po = this.offsetParent.offset(),
				document = this.document[0];
			if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
				po.left += this.scrollParent.scrollLeft();
				po.top += this.scrollParent.scrollTop();
			}
			if (this._isRootNode(this.offsetParent[0])) {
				po = {
					top: 0,
					left: 0
				};
			}
			return {
				top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			};
		},
		_getRelativeOffset: function () {
			if (this.cssPosition !== "relative") {
				return {
					top: 0,
					left: 0
				};
			}
			var p = this.element.position(),
				scrollIsRootNode = this._isRootNode(this.scrollParent[0]);
			return {
				top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + (!scrollIsRootNode ? this.scrollParent.scrollTop() : 0),
				left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + (!scrollIsRootNode ? this.scrollParent.scrollLeft() : 0)
			};
		},
		_cacheMargins: function () {
			this.margins = {
				left: (parseInt(this.element.css("marginLeft"), 10) || 0),
				top: (parseInt(this.element.css("marginTop"), 10) || 0),
				right: (parseInt(this.element.css("marginRight"), 10) || 0),
				bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
			};
		},
		_cacheHelperProportions: function () {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			};
		},
		_setContainment: function () {
			var isUserScrollable, c, ce, o = this.options,
				document = this.document[0];
			this.relativeContainer = null;
			if (!o.containment) {
				this.containment = null;
				return;
			}
			if (o.containment === "window") {
				this.containment = [$(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, $(window).scrollLeft() + $(window).width() - this.helperProportions.width - this.margins.left, $(window).scrollTop() + ($(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
				return;
			}
			if (o.containment === "document") {
				this.containment = [0, 0, $(document).width() - this.helperProportions.width - this.margins.left, ($(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
				return;
			}
			if (o.containment.constructor === Array) {
				this.containment = o.containment;
				return;
			}
			if (o.containment === "parent") {
				o.containment = this.helper[0].parentNode;
			}
			c = $(o.containment);
			ce = c[0];
			if (!ce) {
				return;
			}
			isUserScrollable = /(scroll|auto)/.test(c.css("overflow"));
			this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (isUserScrollable ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (isUserScrollable ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
			this.relativeContainer = c;
		},
		_convertPositionTo: function (d, pos) {
			if (!pos) {
				pos = this.position;
			}
			var mod = d === "absolute" ? 1 : -1,
				scrollIsRootNode = this._isRootNode(this.scrollParent[0]);
			return {
				top: (pos.top + this.offset.relative.top * mod + this.offset.parent.top * mod - ((this.cssPosition === "fixed" ? -this.offset.scroll.top : (scrollIsRootNode ? 0 : this.offset.scroll.top)) * mod)),
				left: (pos.left + this.offset.relative.left * mod + this.offset.parent.left * mod - ((this.cssPosition === "fixed" ? -this.offset.scroll.left : (scrollIsRootNode ? 0 : this.offset.scroll.left)) * mod))
			};
		},
		_generatePosition: function (event, constrainPosition) {
			var containment, co, top, left, o = this.options,
				scrollIsRootNode = this._isRootNode(this.scrollParent[0]),
				pageX = event.pageX,
				pageY = event.pageY;
			if (!scrollIsRootNode || !this.offset.scroll) {
				this.offset.scroll = {
					top: this.scrollParent.scrollTop(),
					left: this.scrollParent.scrollLeft()
				};
			}
			if (constrainPosition) {
				if (this.containment) {
					if (this.relativeContainer) {
						co = this.relativeContainer.offset();
						containment = [this.containment[0] + co.left, this.containment[1] + co.top, this.containment[2] + co.left, this.containment[3] + co.top];
					} else {
						containment = this.containment;
					}
					if (event.pageX - this.offset.click.left < containment[0]) {
						pageX = containment[0] + this.offset.click.left;
					}
					if (event.pageY - this.offset.click.top < containment[1]) {
						pageY = containment[1] + this.offset.click.top;
					}
					if (event.pageX - this.offset.click.left > containment[2]) {
						pageX = containment[2] + this.offset.click.left;
					}
					if (event.pageY - this.offset.click.top > containment[3]) {
						pageY = containment[3] + this.offset.click.top;
					}
				}
				if (o.grid) {
					top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
					pageY = containment ? ((top - this.offset.click.top >= containment[1] || top - this.offset.click.top > containment[3]) ? top : ((top - this.offset.click.top >= containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;
					left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
					pageX = containment ? ((left - this.offset.click.left >= containment[0] || left - this.offset.click.left > containment[2]) ? left : ((left - this.offset.click.left >= containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
				}
				if (o.axis === "y") {
					pageX = this.originalPageX;
				}
				if (o.axis === "x") {
					pageY = this.originalPageY;
				}
			}
			return {
				top: (pageY - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : (scrollIsRootNode ? 0 : this.offset.scroll.top))),
				left: (pageX - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : (scrollIsRootNode ? 0 : this.offset.scroll.left)))
			};
		},
		_clear: function () {
			this.helper.removeClass("ui-draggable-dragging");
			if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
				this.helper.remove();
			}
			this.helper = null;
			this.cancelHelperRemoval = false;
			if (this.destroyOnClear) {
				this.destroy();
			}
		},
		_normalizeRightBottom: function () {
			if (this.options.axis !== "y" && this.helper.css("right") !== "auto") {
				this.helper.width(this.helper.width());
				this.helper.css("right", "auto");
			}
			if (this.options.axis !== "x" && this.helper.css("bottom") !== "auto") {
				this.helper.height(this.helper.height());
				this.helper.css("bottom", "auto");
			}
		},
		_trigger: function (type, event, ui) {
			ui = ui || this._uiHash();
			$.ui.plugin.call(this, type, [event, ui, this], true);
			if (/^(drag|start|stop)/.test(type)) {
				this.positionAbs = this._convertPositionTo("absolute");
				ui.offset = this.positionAbs;
			}
			return $.Widget.prototype._trigger.call(this, type, event, ui);
		},
		plugins: {},
		_uiHash: function () {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			};
		}
	});
	$.ui.plugin.add("draggable", "connectToSortable", {
		start: function (event, ui, draggable) {
			var uiSortable = $.extend({}, ui, {
				item: draggable.element
			});
			draggable.sortables = [];
			$(draggable.options.connectToSortable).each(function () {
				var sortable = $(this).sortable("instance");
				if (sortable && !sortable.options.disabled) {
					draggable.sortables.push(sortable);
					sortable.refreshPositions();
					sortable._trigger("activate", event, uiSortable);
				}
			});
		},
		stop: function (event, ui, draggable) {
			var uiSortable = $.extend({}, ui, {
				item: draggable.element
			});
			draggable.cancelHelperRemoval = false;
			$.each(draggable.sortables, function () {
				var sortable = this;
				if (sortable.isOver) {
					sortable.isOver = 0;
					draggable.cancelHelperRemoval = true;
					sortable.cancelHelperRemoval = false;
					sortable._storedCSS = {
						position: sortable.placeholder.css("position"),
						top: sortable.placeholder.css("top"),
						left: sortable.placeholder.css("left")
					};
					sortable._mouseStop(event);
					sortable.options.helper = sortable.options._helper;
				} else {
					sortable.cancelHelperRemoval = true;
					sortable._trigger("deactivate", event, uiSortable);
				}
			});
		},
		drag: function (event, ui, draggable) {
			$.each(draggable.sortables, function () {
				var innermostIntersecting = false,
					sortable = this;
				sortable.positionAbs = draggable.positionAbs;
				sortable.helperProportions = draggable.helperProportions;
				sortable.offset.click = draggable.offset.click;
				if (sortable._intersectsWith(sortable.containerCache)) {
					innermostIntersecting = true;
					$.each(draggable.sortables, function () {
						this.positionAbs = draggable.positionAbs;
						this.helperProportions = draggable.helperProportions;
						this.offset.click = draggable.offset.click;
						if (this !== sortable && this._intersectsWith(this.containerCache) && $.contains(sortable.element[0], this.element[0])) {
							innermostIntersecting = false;
						}
						return innermostIntersecting;
					});
				}
				if (innermostIntersecting) {
					if (!sortable.isOver) {
						sortable.isOver = 1;
						draggable._parent = ui.helper.parent();
						sortable.currentItem = ui.helper.appendTo(sortable.element).data("ui-sortable-item", true);
						sortable.options._helper = sortable.options.helper;
						sortable.options.helper = function () {
							return ui.helper[0];
						};
						event.target = sortable.currentItem[0];
						sortable._mouseCapture(event, true);
						sortable._mouseStart(event, true, true);
						sortable.offset.click.top = draggable.offset.click.top;
						sortable.offset.click.left = draggable.offset.click.left;
						sortable.offset.parent.left -= draggable.offset.parent.left - sortable.offset.parent.left;
						sortable.offset.parent.top -= draggable.offset.parent.top - sortable.offset.parent.top;
						draggable._trigger("toSortable", event);
						draggable.dropped = sortable.element;
						$.each(draggable.sortables, function () {
							this.refreshPositions();
						});
						draggable.currentItem = draggable.element;
						sortable.fromOutside = draggable;
					}
					if (sortable.currentItem) {
						sortable._mouseDrag(event);
						ui.position = sortable.position;
					}
				} else {
					if (sortable.isOver) {
						sortable.isOver = 0;
						sortable.cancelHelperRemoval = true;
						sortable.options._revert = sortable.options.revert;
						sortable.options.revert = false;
						sortable._trigger("out", event, sortable._uiHash(sortable));
						sortable._mouseStop(event, true);
						sortable.options.revert = sortable.options._revert;
						sortable.options.helper = sortable.options._helper;
						if (sortable.placeholder) {
							sortable.placeholder.remove();
						}
						ui.helper.appendTo(draggable._parent);
						draggable._refreshOffsets(event);
						ui.position = draggable._generatePosition(event, true);
						draggable._trigger("fromSortable", event);
						draggable.dropped = false;
						$.each(draggable.sortables, function () {
							this.refreshPositions();
						});
					}
				}
			});
		}
	});
	$.ui.plugin.add("draggable", "cursor", {
		start: function (event, ui, instance) {
			var t = $("body"),
				o = instance.options;
			if (t.css("cursor")) {
				o._cursor = t.css("cursor");
			}
			t.css("cursor", o.cursor);
		},
		stop: function (event, ui, instance) {
			var o = instance.options;
			if (o._cursor) {
				$("body").css("cursor", o._cursor);
			}
		}
	});
	$.ui.plugin.add("draggable", "opacity", {
		start: function (event, ui, instance) {
			var t = $(ui.helper),
				o = instance.options;
			if (t.css("opacity")) {
				o._opacity = t.css("opacity");
			}
			t.css("opacity", o.opacity);
		},
		stop: function (event, ui, instance) {
			var o = instance.options;
			if (o._opacity) {
				$(ui.helper).css("opacity", o._opacity);
			}
		}
	});
	$.ui.plugin.add("draggable", "scroll", {
		start: function (event, ui, i) {
			if (!i.scrollParentNotHidden) {
				i.scrollParentNotHidden = i.helper.scrollParent(false);
			}
			if (i.scrollParentNotHidden[0] !== i.document[0] && i.scrollParentNotHidden[0].tagName !== "HTML") {
				i.overflowOffset = i.scrollParentNotHidden.offset();
			}
		},
		drag: function (event, ui, i) {
			var o = i.options,
				scrolled = false,
				scrollParent = i.scrollParentNotHidden[0],
				document = i.document[0];
			if (scrollParent !== document && scrollParent.tagName !== "HTML") {
				if (!o.axis || o.axis !== "x") {
					if ((i.overflowOffset.top + scrollParent.offsetHeight) - event.pageY < o.scrollSensitivity) {
						scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
					} else if (event.pageY - i.overflowOffset.top < o.scrollSensitivity) {
						scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
					}
				}
				if (!o.axis || o.axis !== "y") {
					if ((i.overflowOffset.left + scrollParent.offsetWidth) - event.pageX < o.scrollSensitivity) {
						scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
					} else if (event.pageX - i.overflowOffset.left < o.scrollSensitivity) {
						scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
					}
				}
			} else {
				if (!o.axis || o.axis !== "x") {
					if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
						scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
					} else if ($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
						scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
					}
				}
				if (!o.axis || o.axis !== "y") {
					if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
						scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
					} else if ($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
						scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
					}
				}
			}
			if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
				$.ui.ddmanager.prepareOffsets(i, event);
			}
		}
	});
	$.ui.plugin.add("draggable", "snap", {
		start: function (event, ui, i) {
			var o = i.options;
			i.snapElements = [];
			$(o.snap.constructor !== String ? (o.snap.items || ":data(ui-draggable)") : o.snap).each(function () {
				var $t = $(this),
					$o = $t.offset();
				if (this !== i.element[0]) {
					i.snapElements.push({
						item: this,
						width: $t.outerWidth(),
						height: $t.outerHeight(),
						top: $o.top,
						left: $o.left
					});
				}
			});
		},
		drag: function (event, ui, inst) {
			var ts, bs, ls, rs, l, r, t, b, i, first, o = inst.options,
				d = o.snapTolerance,
				x1 = ui.offset.left,
				x2 = x1 + inst.helperProportions.width,
				y1 = ui.offset.top,
				y2 = y1 + inst.helperProportions.height;
			for (i = inst.snapElements.length - 1; i >= 0; i--) {
				l = inst.snapElements[i].left - inst.margins.left;
				r = l + inst.snapElements[i].width;
				t = inst.snapElements[i].top - inst.margins.top;
				b = t + inst.snapElements[i].height;
				if (x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d || !$.contains(inst.snapElements[i].item.ownerDocument, inst.snapElements[i].item)) {
					if (inst.snapElements[i].snapping) {
						(inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), {
							snapItem: inst.snapElements[i].item
						})));
					}
					inst.snapElements[i].snapping = false;
					continue;
				}
				if (o.snapMode !== "inner") {
					ts = Math.abs(t - y2) <= d;
					bs = Math.abs(b - y1) <= d;
					ls = Math.abs(l - x2) <= d;
					rs = Math.abs(r - x1) <= d;
					if (ts) {
						ui.position.top = inst._convertPositionTo("relative", {
							top: t - inst.helperProportions.height,
							left: 0
						}).top;
					}
					if (bs) {
						ui.position.top = inst._convertPositionTo("relative", {
							top: b,
							left: 0
						}).top;
					}
					if (ls) {
						ui.position.left = inst._convertPositionTo("relative", {
							top: 0,
							left: l - inst.helperProportions.width
						}).left;
					}
					if (rs) {
						ui.position.left = inst._convertPositionTo("relative", {
							top: 0,
							left: r
						}).left;
					}
				}
				first = (ts || bs || ls || rs);
				if (o.snapMode !== "outer") {
					ts = Math.abs(t - y1) <= d;
					bs = Math.abs(b - y2) <= d;
					ls = Math.abs(l - x1) <= d;
					rs = Math.abs(r - x2) <= d;
					if (ts) {
						ui.position.top = inst._convertPositionTo("relative", {
							top: t,
							left: 0
						}).top;
					}
					if (bs) {
						ui.position.top = inst._convertPositionTo("relative", {
							top: b - inst.helperProportions.height,
							left: 0
						}).top;
					}
					if (ls) {
						ui.position.left = inst._convertPositionTo("relative", {
							top: 0,
							left: l
						}).left;
					}
					if (rs) {
						ui.position.left = inst._convertPositionTo("relative", {
							top: 0,
							left: r - inst.helperProportions.width
						}).left;
					}
				}
				if (!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) {
					(inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), {
						snapItem: inst.snapElements[i].item
					})));
				}
				inst.snapElements[i].snapping = (ts || bs || ls || rs || first);
			}
		}
	});
	$.ui.plugin.add("draggable", "stack", {
		start: function (event, ui, instance) {
			var min, o = instance.options,
				group = $.makeArray($(o.stack)).sort(function (a, b) {
					return (parseInt($(a).css("zIndex"), 10) || 0) - (parseInt($(b).css("zIndex"), 10) || 0);
				});
			if (!group.length) {
				return;
			}
			min = parseInt($(group[0]).css("zIndex"), 10) || 0;
			$(group).each(function (i) {
				$(this).css("zIndex", min + i);
			});
			this.css("zIndex", (min + group.length));
		}
	});
	$.ui.plugin.add("draggable", "zIndex", {
		start: function (event, ui, instance) {
			var t = $(ui.helper),
				o = instance.options;
			if (t.css("zIndex")) {
				o._zIndex = t.css("zIndex");
			}
			t.css("zIndex", o.zIndex);
		},
		stop: function (event, ui, instance) {
			var o = instance.options;
			if (o._zIndex) {
				$(ui.helper).css("zIndex", o._zIndex);
			}
		}
	});
	var draggable = $.ui.draggable;
	$.widget("ui.resizable", $.ui.mouse, {
		version: "1.11.4",
		widgetEventPrefix: "resize",
		options: {
			alsoResize: false,
			animate: false,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: false,
			autoHide: false,
			containment: false,
			ghost: false,
			grid: false,
			handles: "e,s,se",
			helper: false,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 90,
			resize: null,
			start: null,
			stop: null
		},
		_num: function (value) {
			return parseInt(value, 10) || 0;
		},
		_isNumber: function (value) {
			return !isNaN(parseInt(value, 10));
		},
		_hasScroll: function (el, a) {
			if ($(el).css("overflow") === "hidden") {
				return false;
			}
			var scroll = (a && a === "left") ? "scrollLeft" : "scrollTop",
				has = false;
			if (el[scroll] > 0) {
				return true;
			}
			el[scroll] = 1;
			has = (el[scroll] > 0);
			el[scroll] = 0;
			return has;
		},
		_create: function () {
			var n, i, handle, axis, hname, that = this,
				o = this.options;
			this.element.addClass("ui-resizable");
			$.extend(this, {
				_aspectRatio: !!(o.aspectRatio),
				aspectRatio: o.aspectRatio,
				originalElement: this.element,
				_proportionallyResizeElements: [],
				_helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
			});
			if (this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)) {
				this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
					position: this.element.css("position"),
					width: this.element.outerWidth(),
					height: this.element.outerHeight(),
					top: this.element.css("top"),
					left: this.element.css("left")
				}));
				this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance"));
				this.elementIsWrapper = true;
				this.element.css({
					marginLeft: this.originalElement.css("marginLeft"),
					marginTop: this.originalElement.css("marginTop"),
					marginRight: this.originalElement.css("marginRight"),
					marginBottom: this.originalElement.css("marginBottom")
				});
				this.originalElement.css({
					marginLeft: 0,
					marginTop: 0,
					marginRight: 0,
					marginBottom: 0
				});
				this.originalResizeStyle = this.originalElement.css("resize");
				this.originalElement.css("resize", "none");
				this._proportionallyResizeElements.push(this.originalElement.css({
					position: "static",
					zoom: 1,
					display: "block"
				}));
				this.originalElement.css({
					margin: this.originalElement.css("margin")
				});
				this._proportionallyResize();
			}
			this.handles = o.handles || (!$(".ui-resizable-handle", this.element).length ? "e,s,se" : {
				n: ".ui-resizable-n",
				e: ".ui-resizable-e",
				s: ".ui-resizable-s",
				w: ".ui-resizable-w",
				se: ".ui-resizable-se",
				sw: ".ui-resizable-sw",
				ne: ".ui-resizable-ne",
				nw: ".ui-resizable-nw"
			});
			this._handles = $();
			if (this.handles.constructor === String) {
				if (this.handles === "all") {
					this.handles = "n,e,s,w,se,sw,ne,nw";
				}
				n = this.handles.split(",");
				this.handles = {};
				for (i = 0; i < n.length; i++) {
					handle = $.trim(n[i]);
					hname = "ui-resizable-" + handle;
					axis = $("<div class='ui-resizable-handle " + hname + "'></div>");
					axis.css({
						zIndex: o.zIndex
					});
					if ("se" === handle) {
						axis.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
					}
					this.handles[handle] = ".ui-resizable-" + handle;
					this.element.append(axis);
				}
			}
			this._renderAxis = function (target) {
				var i, axis, padPos, padWrapper;
				target = target || this.element;
				for (i in this.handles) {
					if (this.handles[i].constructor === String) {
						this.handles[i] = this.element.children(this.handles[i]).first().show();
					} else if (this.handles[i].jquery || this.handles[i].nodeType) {
						this.handles[i] = $(this.handles[i]);
						this._on(this.handles[i], {
							"mousedown": that._mouseDown
						});
					}
					if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)) {
						axis = $(this.handles[i], this.element);
						padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth();
						padPos = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
						target.css(padPos, padWrapper);
						this._proportionallyResize();
					}
					this._handles = this._handles.add(this.handles[i]);
				}
			};
			this._renderAxis(this.element);
			this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
			this._handles.disableSelection();
			this._handles.mouseover(function () {
				if (!that.resizing) {
					if (this.className) {
						axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
					}
					that.axis = axis && axis[1] ? axis[1] : "se";
				}
			});
			if (o.autoHide) {
				this._handles.hide();
				$(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
					if (o.disabled) {
						return;
					}
					$(this).removeClass("ui-resizable-autohide");
					that._handles.show();
				}).mouseleave(function () {
					if (o.disabled) {
						return;
					}
					if (!that.resizing) {
						$(this).addClass("ui-resizable-autohide");
						that._handles.hide();
					}
				});
			}
			this._mouseInit();
		},
		_destroy: function () {
			this._mouseDestroy();
			var wrapper, _destroy = function (exp) {
				$(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
			};
			if (this.elementIsWrapper) {
				_destroy(this.element);
				wrapper = this.element;
				this.originalElement.css({
					position: wrapper.css("position"),
					width: wrapper.outerWidth(),
					height: wrapper.outerHeight(),
					top: wrapper.css("top"),
					left: wrapper.css("left")
				}).insertAfter(wrapper);
				wrapper.remove();
			}
			this.originalElement.css("resize", this.originalResizeStyle);
			_destroy(this.originalElement);
			return this;
		},
		_mouseCapture: function (event) {
			var i, handle, capture = false;
			for (i in this.handles) {
				handle = $(this.handles[i])[0];
				if (handle === event.target || $.contains(handle, event.target)) {
					capture = true;
				}
			}
			return !this.options.disabled && capture;
		},
		_mouseStart: function (event) {
			var curleft, curtop, cursor, o = this.options,
				el = this.element;
			this.resizing = true;
			this._renderProxy();
			curleft = this._num(this.helper.css("left"));
			curtop = this._num(this.helper.css("top"));
			if (o.containment) {
				curleft += $(o.containment).scrollLeft() || 0;
				curtop += $(o.containment).scrollTop() || 0;
			}
			this.offset = this.helper.offset();
			this.position = {
				left: curleft,
				top: curtop
			};
			this.size = this._helper ? {
				width: this.helper.width(),
				height: this.helper.height()
			} : {
				width: el.width(),
				height: el.height()
			};
			this.originalSize = this._helper ? {
				width: el.outerWidth(),
				height: el.outerHeight()
			} : {
				width: el.width(),
				height: el.height()
			};
			this.sizeDiff = {
				width: el.outerWidth() - el.width(),
				height: el.outerHeight() - el.height()
			};
			this.originalPosition = {
				left: curleft,
				top: curtop
			};
			this.originalMousePosition = {
				left: event.pageX,
				top: event.pageY
			};
			this.aspectRatio = (typeof o.aspectRatio === "number") ? o.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
			cursor = $(".ui-resizable-" + this.axis).css("cursor");
			$("body").css("cursor", cursor === "auto" ? this.axis + "-resize" : cursor);
			el.addClass("ui-resizable-resizing");
			this._propagate("start", event);
			return true;
		},
		_mouseDrag: function (event) {
			var data, props, smp = this.originalMousePosition,
				a = this.axis,
				dx = (event.pageX - smp.left) || 0,
				dy = (event.pageY - smp.top) || 0,
				trigger = this._change[a];
			this._updatePrevProperties();
			if (!trigger) {
				return false;
			}
			data = trigger.apply(this, [event, dx, dy]);
			this._updateVirtualBoundaries(event.shiftKey);
			if (this._aspectRatio || event.shiftKey) {
				data = this._updateRatio(data, event);
			}
			data = this._respectSize(data, event);
			this._updateCache(data);
			this._propagate("resize", event);
			props = this._applyChanges();
			if (!this._helper && this._proportionallyResizeElements.length) {
				this._proportionallyResize();
			}
			if (!$.isEmptyObject(props)) {
				this._updatePrevProperties();
				this._trigger("resize", event, this.ui());
				this._applyChanges();
			}
			return false;
		},
		_mouseStop: function (event) {
			this.resizing = false;
			var pr, ista, soffseth, soffsetw, s, left, top, o = this.options,
				that = this;
			if (this._helper) {
				pr = this._proportionallyResizeElements;
				ista = pr.length && (/textarea/i).test(pr[0].nodeName);
				soffseth = ista && this._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height;
				soffsetw = ista ? 0 : that.sizeDiff.width;
				s = {
					width: (that.helper.width() - soffsetw),
					height: (that.helper.height() - soffseth)
				};
				left = (parseInt(that.element.css("left"), 10) + (that.position.left - that.originalPosition.left)) || null;
				top = (parseInt(that.element.css("top"), 10) + (that.position.top - that.originalPosition.top)) || null;
				if (!o.animate) {
					this.element.css($.extend(s, {
						top: top,
						left: left
					}));
				}
				that.helper.height(that.size.height);
				that.helper.width(that.size.width);
				if (this._helper && !o.animate) {
					this._proportionallyResize();
				}
			}
			$("body").css("cursor", "auto");
			this.element.removeClass("ui-resizable-resizing");
			this._propagate("stop", event);
			if (this._helper) {
				this.helper.remove();
			}
			return false;
		},
		_updatePrevProperties: function () {
			this.prevPosition = {
				top: this.position.top,
				left: this.position.left
			};
			this.prevSize = {
				width: this.size.width,
				height: this.size.height
			};
		},
		_applyChanges: function () {
			var props = {};
			if (this.position.top !== this.prevPosition.top) {
				props.top = this.position.top + "px";
			}
			if (this.position.left !== this.prevPosition.left) {
				props.left = this.position.left + "px";
			}
			if (this.size.width !== this.prevSize.width) {
				props.width = this.size.width + "px";
			}
			if (this.size.height !== this.prevSize.height) {
				props.height = this.size.height + "px";
			}
			this.helper.css(props);
			return props;
		},
		_updateVirtualBoundaries: function (forceAspectRatio) {
			var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b, o = this.options;
			b = {
				minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
				maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : Infinity,
				minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
				maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : Infinity
			};
			if (this._aspectRatio || forceAspectRatio) {
				pMinWidth = b.minHeight * this.aspectRatio;
				pMinHeight = b.minWidth / this.aspectRatio;
				pMaxWidth = b.maxHeight * this.aspectRatio;
				pMaxHeight = b.maxWidth / this.aspectRatio;
				if (pMinWidth > b.minWidth) {
					b.minWidth = pMinWidth;
				}
				if (pMinHeight > b.minHeight) {
					b.minHeight = pMinHeight;
				}
				if (pMaxWidth < b.maxWidth) {
					b.maxWidth = pMaxWidth;
				}
				if (pMaxHeight < b.maxHeight) {
					b.maxHeight = pMaxHeight;
				}
			}
			this._vBoundaries = b;
		},
		_updateCache: function (data) {
			this.offset = this.helper.offset();
			if (this._isNumber(data.left)) {
				this.position.left = data.left;
			}
			if (this._isNumber(data.top)) {
				this.position.top = data.top;
			}
			if (this._isNumber(data.height)) {
				this.size.height = data.height;
			}
			if (this._isNumber(data.width)) {
				this.size.width = data.width;
			}
		},
		_updateRatio: function (data) {
			var cpos = this.position,
				csize = this.size,
				a = this.axis;
			if (this._isNumber(data.height)) {
				data.width = (data.height * this.aspectRatio);
			} else if (this._isNumber(data.width)) {
				data.height = (data.width / this.aspectRatio);
			}
			if (a === "sw") {
				data.left = cpos.left + (csize.width - data.width);
				data.top = null;
			}
			if (a === "nw") {
				data.top = cpos.top + (csize.height - data.height);
				data.left = cpos.left + (csize.width - data.width);
			}
			return data;
		},
		_respectSize: function (data) {
			var o = this._vBoundaries,
				a = this.axis,
				ismaxw = this._isNumber(data.width) && o.maxWidth && (o.maxWidth < data.width),
				ismaxh = this._isNumber(data.height) && o.maxHeight && (o.maxHeight < data.height),
				isminw = this._isNumber(data.width) && o.minWidth && (o.minWidth > data.width),
				isminh = this._isNumber(data.height) && o.minHeight && (o.minHeight > data.height),
				dw = this.originalPosition.left + this.originalSize.width,
				dh = this.position.top + this.size.height,
				cw = /sw|nw|w/.test(a),
				ch = /nw|ne|n/.test(a);
			if (isminw) {
				data.width = o.minWidth;
			}
			if (isminh) {
				data.height = o.minHeight;
			}
			if (ismaxw) {
				data.width = o.maxWidth;
			}
			if (ismaxh) {
				data.height = o.maxHeight;
			}
			if (isminw && cw) {
				data.left = dw - o.minWidth;
			}
			if (ismaxw && cw) {
				data.left = dw - o.maxWidth;
			}
			if (isminh && ch) {
				data.top = dh - o.minHeight;
			}
			if (ismaxh && ch) {
				data.top = dh - o.maxHeight;
			}
			if (!data.width && !data.height && !data.left && data.top) {
				data.top = null;
			} else if (!data.width && !data.height && !data.top && data.left) {
				data.left = null;
			}
			return data;
		},
		_getPaddingPlusBorderDimensions: function (element) {
			var i = 0,
				widths = [],
				borders = [element.css("borderTopWidth"), element.css("borderRightWidth"), element.css("borderBottomWidth"), element.css("borderLeftWidth")],
				paddings = [element.css("paddingTop"), element.css("paddingRight"), element.css("paddingBottom"), element.css("paddingLeft")];
			for (; i < 4; i++) {
				widths[i] = (parseInt(borders[i], 10) || 0);
				widths[i] += (parseInt(paddings[i], 10) || 0);
			}
			return {
				height: widths[0] + widths[2],
				width: widths[1] + widths[3]
			};
		},
		_proportionallyResize: function () {
			if (!this._proportionallyResizeElements.length) {
				return;
			}
			var prel, i = 0,
				element = this.helper || this.element;
			for (; i < this._proportionallyResizeElements.length; i++) {
				prel = this._proportionallyResizeElements[i];
				if (!this.outerDimensions) {
					this.outerDimensions = this._getPaddingPlusBorderDimensions(prel);
				}
				prel.css({
					height: (element.height() - this.outerDimensions.height) || 0,
					width: (element.width() - this.outerDimensions.width) || 0
				});
			}
		},
		_renderProxy: function () {
			var el = this.element,
				o = this.options;
			this.elementOffset = el.offset();
			if (this._helper) {
				this.helper = this.helper || $("<div style='overflow:hidden;'></div>");
				this.helper.addClass(this._helper).css({
					width: this.element.outerWidth() - 1,
					height: this.element.outerHeight() - 1,
					position: "absolute",
					left: this.elementOffset.left + "px",
					top: this.elementOffset.top + "px",
					zIndex: ++o.zIndex
				});
				this.helper.appendTo("body").disableSelection();
			} else {
				this.helper = this.element;
			}
		},
		_change: {
			e: function (event, dx) {
				return {
					width: this.originalSize.width + dx
				};
			},
			w: function (event, dx) {
				var cs = this.originalSize,
					sp = this.originalPosition;
				return {
					left: sp.left + dx,
					width: cs.width - dx
				};
			},
			n: function (event, dx, dy) {
				var cs = this.originalSize,
					sp = this.originalPosition;
				return {
					top: sp.top + dy,
					height: cs.height - dy
				};
			},
			s: function (event, dx, dy) {
				return {
					height: this.originalSize.height + dy
				};
			},
			se: function (event, dx, dy) {
				return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
			},
			sw: function (event, dx, dy) {
				return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
			},
			ne: function (event, dx, dy) {
				return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
			},
			nw: function (event, dx, dy) {
				return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
			}
		},
		_propagate: function (n, event) {
			$.ui.plugin.call(this, n, [event, this.ui()]);
			(n !== "resize" && this._trigger(n, event, this.ui()));
		},
		plugins: {},
		ui: function () {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			};
		}
	});
	$.ui.plugin.add("resizable", "animate", {
		stop: function (event) {
			var that = $(this).resizable("instance"),
				o = that.options,
				pr = that._proportionallyResizeElements,
				ista = pr.length && (/textarea/i).test(pr[0].nodeName),
				soffseth = ista && that._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height,
				soffsetw = ista ? 0 : that.sizeDiff.width,
				style = {
					width: (that.size.width - soffsetw),
					height: (that.size.height - soffseth)
				},
				left = (parseInt(that.element.css("left"), 10) + (that.position.left - that.originalPosition.left)) || null,
				top = (parseInt(that.element.css("top"), 10) + (that.position.top - that.originalPosition.top)) || null;
			that.element.animate($.extend(style, top && left ? {
				top: top,
				left: left
			} : {}), {
				duration: o.animateDuration,
				easing: o.animateEasing,
				step: function () {
					var data = {
						width: parseInt(that.element.css("width"), 10),
						height: parseInt(that.element.css("height"), 10),
						top: parseInt(that.element.css("top"), 10),
						left: parseInt(that.element.css("left"), 10)
					};
					if (pr && pr.length) {
						$(pr[0]).css({
							width: data.width,
							height: data.height
						});
					}
					that._updateCache(data);
					that._propagate("resize", event);
				}
			});
		}
	});
	$.ui.plugin.add("resizable", "containment", {
		start: function () {
			var element, p, co, ch, cw, width, height, that = $(this).resizable("instance"),
				o = that.options,
				el = that.element,
				oc = o.containment,
				ce = (oc instanceof $) ? oc.get(0) : (/parent/.test(oc)) ? el.parent().get(0) : oc;
			if (!ce) {
				return;
			}
			that.containerElement = $(ce);
			if (/document/.test(oc) || oc === document) {
				that.containerOffset = {
					left: 0,
					top: 0
				};
				that.containerPosition = {
					left: 0,
					top: 0
				};
				that.parentData = {
					element: $(document),
					left: 0,
					top: 0,
					width: $(document).width(),
					height: $(document).height() || document.body.parentNode.scrollHeight
				};
			} else {
				element = $(ce);
				p = [];
				$(["Top", "Right", "Left", "Bottom"]).each(function (i, name) {
					p[i] = that._num(element.css("padding" + name));
				});
				that.containerOffset = element.offset();
				that.containerPosition = element.position();
				that.containerSize = {
					height: (element.innerHeight() - p[3]),
					width: (element.innerWidth() - p[1])
				};
				co = that.containerOffset;
				ch = that.containerSize.height;
				cw = that.containerSize.width;
				width = (that._hasScroll(ce, "left") ? ce.scrollWidth : cw);
				height = (that._hasScroll(ce) ? ce.scrollHeight : ch);
				that.parentData = {
					element: ce,
					left: co.left,
					top: co.top,
					width: width,
					height: height
				};
			}
		},
		resize: function (event) {
			var woset, hoset, isParent, isOffsetRelative, that = $(this).resizable("instance"),
				o = that.options,
				co = that.containerOffset,
				cp = that.position,
				pRatio = that._aspectRatio || event.shiftKey,
				cop = {
					top: 0,
					left: 0
				},
				ce = that.containerElement,
				continueResize = true;
			if (ce[0] !== document && (/static/).test(ce.css("position"))) {
				cop = co;
			}
			if (cp.left < (that._helper ? co.left : 0)) {
				that.size.width = that.size.width + (that._helper ? (that.position.left - co.left) : (that.position.left - cop.left));
				if (pRatio) {
					that.size.height = that.size.width / that.aspectRatio;
					continueResize = false;
				}
				that.position.left = o.helper ? co.left : 0;
			}
			if (cp.top < (that._helper ? co.top : 0)) {
				that.size.height = that.size.height + (that._helper ? (that.position.top - co.top) : that.position.top);
				if (pRatio) {
					that.size.width = that.size.height * that.aspectRatio;
					continueResize = false;
				}
				that.position.top = that._helper ? co.top : 0;
			}
			isParent = that.containerElement.get(0) === that.element.parent().get(0);
			isOffsetRelative = /relative|absolute/.test(that.containerElement.css("position"));
			if (isParent && isOffsetRelative) {
				that.offset.left = that.parentData.left + that.position.left;
				that.offset.top = that.parentData.top + that.position.top;
			} else {
				that.offset.left = that.element.offset().left;
				that.offset.top = that.element.offset().top;
			}
			woset = Math.abs(that.sizeDiff.width + (that._helper ? that.offset.left - cop.left : (that.offset.left - co.left)));
			hoset = Math.abs(that.sizeDiff.height + (that._helper ? that.offset.top - cop.top : (that.offset.top - co.top)));
			if (woset + that.size.width >= that.parentData.width) {
				that.size.width = that.parentData.width - woset;
				if (pRatio) {
					that.size.height = that.size.width / that.aspectRatio;
					continueResize = false;
				}
			}
			if (hoset + that.size.height >= that.parentData.height) {
				that.size.height = that.parentData.height - hoset;
				if (pRatio) {
					that.size.width = that.size.height * that.aspectRatio;
					continueResize = false;
				}
			}
			if (!continueResize) {
				that.position.left = that.prevPosition.left;
				that.position.top = that.prevPosition.top;
				that.size.width = that.prevSize.width;
				that.size.height = that.prevSize.height;
			}
		},
		stop: function () {
			var that = $(this).resizable("instance"),
				o = that.options,
				co = that.containerOffset,
				cop = that.containerPosition,
				ce = that.containerElement,
				helper = $(that.helper),
				ho = helper.offset(),
				w = helper.outerWidth() - that.sizeDiff.width,
				h = helper.outerHeight() - that.sizeDiff.height;
			if (that._helper && !o.animate && (/relative/).test(ce.css("position"))) {
				$(this).css({
					left: ho.left - cop.left - co.left,
					width: w,
					height: h
				});
			}
			if (that._helper && !o.animate && (/static/).test(ce.css("position"))) {
				$(this).css({
					left: ho.left - cop.left - co.left,
					width: w,
					height: h
				});
			}
		}
	});
	$.ui.plugin.add("resizable", "alsoResize", {
		start: function () {
			var that = $(this).resizable("instance"),
				o = that.options;
			$(o.alsoResize).each(function () {
				var el = $(this);
				el.data("ui-resizable-alsoresize", {
					width: parseInt(el.width(), 10),
					height: parseInt(el.height(), 10),
					left: parseInt(el.css("left"), 10),
					top: parseInt(el.css("top"), 10)
				});
			});
		},
		resize: function (event, ui) {
			var that = $(this).resizable("instance"),
				o = that.options,
				os = that.originalSize,
				op = that.originalPosition,
				delta = {
					height: (that.size.height - os.height) || 0,
					width: (that.size.width - os.width) || 0,
					top: (that.position.top - op.top) || 0,
					left: (that.position.left - op.left) || 0
				};
			$(o.alsoResize).each(function () {
				var el = $(this),
					start = $(this).data("ui-resizable-alsoresize"),
					style = {},
					css = el.parents(ui.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
				$.each(css, function (i, prop) {
					var sum = (start[prop] || 0) + (delta[prop] || 0);
					if (sum && sum >= 0) {
						style[prop] = sum || null;
					}
				});
				el.css(style);
			});
		},
		stop: function () {
			$(this).removeData("resizable-alsoresize");
		}
	});
	$.ui.plugin.add("resizable", "ghost", {
		start: function () {
			var that = $(this).resizable("instance"),
				o = that.options,
				cs = that.size;
			that.ghost = that.originalElement.clone();
			that.ghost.css({
				opacity: 0.25,
				display: "block",
				position: "relative",
				height: cs.height,
				width: cs.width,
				margin: 0,
				left: 0,
				top: 0
			}).addClass("ui-resizable-ghost").addClass(typeof o.ghost === "string" ? o.ghost : "");
			that.ghost.appendTo(that.helper);
		},
		resize: function () {
			var that = $(this).resizable("instance");
			if (that.ghost) {
				that.ghost.css({
					position: "relative",
					height: that.size.height,
					width: that.size.width
				});
			}
		},
		stop: function () {
			var that = $(this).resizable("instance");
			if (that.ghost && that.helper) {
				that.helper.get(0).removeChild(that.ghost.get(0));
			}
		}
	});
	$.ui.plugin.add("resizable", "grid", {
		resize: function () {
			var outerDimensions, that = $(this).resizable("instance"),
				o = that.options,
				cs = that.size,
				os = that.originalSize,
				op = that.originalPosition,
				a = that.axis,
				grid = typeof o.grid === "number" ? [o.grid, o.grid] : o.grid,
				gridX = (grid[0] || 1),
				gridY = (grid[1] || 1),
				ox = Math.round((cs.width - os.width) / gridX) * gridX,
				oy = Math.round((cs.height - os.height) / gridY) * gridY,
				newWidth = os.width + ox,
				newHeight = os.height + oy,
				isMaxWidth = o.maxWidth && (o.maxWidth < newWidth),
				isMaxHeight = o.maxHeight && (o.maxHeight < newHeight),
				isMinWidth = o.minWidth && (o.minWidth > newWidth),
				isMinHeight = o.minHeight && (o.minHeight > newHeight);
			o.grid = grid;
			if (isMinWidth) {
				newWidth += gridX;
			}
			if (isMinHeight) {
				newHeight += gridY;
			}
			if (isMaxWidth) {
				newWidth -= gridX;
			}
			if (isMaxHeight) {
				newHeight -= gridY;
			}
			if (/^(se|s|e)$/.test(a)) {
				that.size.width = newWidth;
				that.size.height = newHeight;
			} else if (/^(ne)$/.test(a)) {
				that.size.width = newWidth;
				that.size.height = newHeight;
				that.position.top = op.top - oy;
			} else if (/^(sw)$/.test(a)) {
				that.size.width = newWidth;
				that.size.height = newHeight;
				that.position.left = op.left - ox;
			} else {
				if (newHeight - gridY <= 0 || newWidth - gridX <= 0) {
					outerDimensions = that._getPaddingPlusBorderDimensions(this);
				}
				if (newHeight - gridY > 0) {
					that.size.height = newHeight;
					that.position.top = op.top - oy;
				} else {
					newHeight = gridY - outerDimensions.height;
					that.size.height = newHeight;
					that.position.top = op.top + os.height - newHeight;
				}
				if (newWidth - gridX > 0) {
					that.size.width = newWidth;
					that.position.left = op.left - ox;
				} else {
					newWidth = gridX - outerDimensions.width;
					that.size.width = newWidth;
					that.position.left = op.left + os.width - newWidth;
				}
			}
		}
	});
	var resizable = $.ui.resizable;
	var dialog = $.widget("ui.dialog", {
		version: "1.11.4",
		options: {
			appendTo: "body",
			autoOpen: true,
			buttons: [],
			closeOnEscape: true,
			closeText: "Close",
			dialogClass: "",
			draggable: true,
			hide: null,
			height: "auto",
			maxHeight: null,
			maxWidth: null,
			minHeight: 150,
			minWidth: 150,
			modal: false,
			position: {
				my: "center",
				at: "center",
				of: window,
				collision: "fit",
				using: function (pos) {
					var topOffset = $(this).css(pos).offset().top;
					if (topOffset < 0) {
						$(this).css("top", pos.top - topOffset);
					}
				}
			},
			resizable: true,
			show: null,
			title: null,
			width: 300,
			beforeClose: null,
			close: null,
			drag: null,
			dragStart: null,
			dragStop: null,
			focus: null,
			open: null,
			resize: null,
			resizeStart: null,
			resizeStop: null
		},
		sizeRelatedOptions: {
			buttons: true,
			height: true,
			maxHeight: true,
			maxWidth: true,
			minHeight: true,
			minWidth: true,
			width: true
		},
		resizableRelatedOptions: {
			maxHeight: true,
			maxWidth: true,
			minHeight: true,
			minWidth: true
		},
		_create: function () {
			this.originalCss = {
				display: this.element[0].style.display,
				width: this.element[0].style.width,
				minHeight: this.element[0].style.minHeight,
				maxHeight: this.element[0].style.maxHeight,
				height: this.element[0].style.height
			};
			this.originalPosition = {
				parent: this.element.parent(),
				index: this.element.parent().children().index(this.element)
			};
			this.originalTitle = this.element.attr("title");
			this.options.title = this.options.title || this.originalTitle;
			this._createWrapper();
			this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
			this._createTitlebar();
			this._createButtonPane();
			if (this.options.draggable && $.fn.draggable) {
				this._makeDraggable();
			}
			if (this.options.resizable && $.fn.resizable) {
				this._makeResizable();
			}
			this._isOpen = false;
			this._trackFocus();
		},
		_init: function () {
			if (this.options.autoOpen) {
				this.open();
			}
		},
		_appendTo: function () {
			var element = this.options.appendTo;
			if (element && (element.jquery || element.nodeType)) {
				return $(element);
			}
			return this.document.find(element || "body").eq(0);
		},
		_destroy: function () {
			var next, originalPosition = this.originalPosition;
			this._untrackInstance();
			this._destroyOverlay();
			this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
			this.uiDialog.stop(true, true).remove();
			if (this.originalTitle) {
				this.element.attr("title", this.originalTitle);
			}
			next = originalPosition.parent.children().eq(originalPosition.index);
			if (next.length && next[0] !== this.element[0]) {
				next.before(this.element);
			} else {
				originalPosition.parent.append(this.element);
			}
		},
		widget: function () {
			return this.uiDialog;
		},
		disable: $.noop,
		enable: $.noop,
		close: function (event) {
			var activeElement, that = this;
			if (!this._isOpen || this._trigger("beforeClose", event) === false) {
				return;
			}
			this._isOpen = false;
			this._focusedElement = null;
			this._destroyOverlay();
			this._untrackInstance();
			if (!this.opener.filter(":focusable").focus().length) {
				try {
					activeElement = this.document[0].activeElement;
					if (activeElement && activeElement.nodeName.toLowerCase() !== "body") {
						$(activeElement).blur();
					}
				} catch (error) {}
			}
			this._hide(this.uiDialog, this.options.hide, function () {
				that._trigger("close", event);
			});
		},
		isOpen: function () {
			return this._isOpen;
		},
		moveToTop: function () {
			this._moveToTop();
		},
		_moveToTop: function (event, silent) {
			var moved = false,
				zIndices = this.uiDialog.siblings(".ui-front:visible").map(function () {
					return +$(this).css("z-index");
				}).get(),
				zIndexMax = Math.max.apply(null, zIndices);
			if (zIndexMax >= +this.uiDialog.css("z-index")) {
				this.uiDialog.css("z-index", zIndexMax + 1);
				moved = true;
			}
			if (moved && !silent) {
				this._trigger("focus", event);
			}
			return moved;
		},
		open: function () {
			var that = this;
			if (this._isOpen) {
				if (this._moveToTop()) {
					this._focusTabbable();
				}
				return;
			}
			this._isOpen = true;
			this.opener = $(this.document[0].activeElement);
			this._size();
			this._position();
			this._createOverlay();
			this._moveToTop(null, true);
			if (this.overlay) {
				this.overlay.css("z-index", this.uiDialog.css("z-index") - 1);
			}
			this._show(this.uiDialog, this.options.show, function () {
				that._focusTabbable();
				that._trigger("focus");
			});
			this._makeFocusTarget();
			this._trigger("open");
		},
		_focusTabbable: function () {
			var hasFocus = this._focusedElement;
			if (!hasFocus) {
				hasFocus = this.element.find("[autofocus]");
			}
			if (!hasFocus.length) {
				hasFocus = this.element.find(":tabbable");
			}
			if (!hasFocus.length) {
				hasFocus = this.uiDialogButtonPane.find(":tabbable");
			}
			if (!hasFocus.length) {
				hasFocus = this.uiDialogTitlebarClose.filter(":tabbable");
			}
			if (!hasFocus.length) {
				hasFocus = this.uiDialog;
			}
			hasFocus.eq(0).focus();
		},
		_keepFocus: function (event) {
			function checkFocus() {
				var activeElement = this.document[0].activeElement,
					isActive = this.uiDialog[0] === activeElement || $.contains(this.uiDialog[0], activeElement);
				if (!isActive) {
					this._focusTabbable();
				}
			}
			event.preventDefault();
			checkFocus.call(this);
			this._delay(checkFocus);
		},
		_createWrapper: function () {
			this.uiDialog = $("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
				tabIndex: -1,
				role: "dialog"
			}).appendTo(this._appendTo());
			this._on(this.uiDialog, {
				keydown: function (event) {
					if (this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode && event.keyCode === $.ui.keyCode.ESCAPE) {
						event.preventDefault();
						this.close(event);
						return;
					}
					if (event.keyCode !== $.ui.keyCode.TAB || event.isDefaultPrevented()) {
						return;
					}
					var tabbables = this.uiDialog.find(":tabbable"),
						first = tabbables.filter(":first"),
						last = tabbables.filter(":last");
					if ((event.target === last[0] || event.target === this.uiDialog[0]) && !event.shiftKey) {
						this._delay(function () {
							first.focus();
						});
						event.preventDefault();
					} else if ((event.target === first[0] || event.target === this.uiDialog[0]) && event.shiftKey) {
						this._delay(function () {
							last.focus();
						});
						event.preventDefault();
					}
				},
				mousedown: function (event) {
					if (this._moveToTop(event)) {
						this._focusTabbable();
					}
				}
			});
			if (!this.element.find("[aria-describedby]").length) {
				this.uiDialog.attr({
					"aria-describedby": this.element.uniqueId().attr("id")
				});
			}
		},
		_createTitlebar: function () {
			var uiDialogTitle;
			this.uiDialogTitlebar = $("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
			this._on(this.uiDialogTitlebar, {
				mousedown: function (event) {
					if (!$(event.target).closest(".ui-dialog-titlebar-close")) {
						this.uiDialog.focus();
					}
				}
			});
			this.uiDialogTitlebarClose = $("<button type='button'></button>").button({
				label: this.options.closeText,
				icons: {
					primary: "ui-icon-closethick"
				},
				text: false
			}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
			this._on(this.uiDialogTitlebarClose, {
				click: function (event) {
					event.preventDefault();
					this.close(event);
				}
			});
			uiDialogTitle = $("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
			this._title(uiDialogTitle);
			this.uiDialog.attr({
				"aria-labelledby": uiDialogTitle.attr("id")
			});
		},
		_title: function (title) {
			if (!this.options.title) {
				title.html("&#160;");
			}
			title.text(this.options.title);
		},
		_createButtonPane: function () {
			this.uiDialogButtonPane = $("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
			this.uiButtonSet = $("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
			this._createButtons();
		},
		_createButtons: function () {
			var that = this,
				buttons = this.options.buttons;
			this.uiDialogButtonPane.remove();
			this.uiButtonSet.empty();
			if ($.isEmptyObject(buttons) || ($.isArray(buttons) && !buttons.length)) {
				this.uiDialog.removeClass("ui-dialog-buttons");
				return;
			}
			$.each(buttons, function (name, props) {
				var click, buttonOptions;
				props = $.isFunction(props) ? {
					click: props,
					text: name
				} : props;
				props = $.extend({
					type: "button"
				}, props);
				click = props.click;
				props.click = function () {
					click.apply(that.element[0], arguments);
				};
				buttonOptions = {
					icons: props.icons,
					text: props.showText
				};
				delete props.icons;
				delete props.showText;
				$("<button></button>", props).button(buttonOptions).appendTo(that.uiButtonSet);
			});
			this.uiDialog.addClass("ui-dialog-buttons");
			this.uiDialogButtonPane.appendTo(this.uiDialog);
		},
		_makeDraggable: function () {
			var that = this,
				options = this.options;

			function filteredUi(ui) {
				return {
					position: ui.position,
					offset: ui.offset
				};
			}
			this.uiDialog.draggable({
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function (event, ui) {
					$(this).addClass("ui-dialog-dragging");
					that._blockFrames();
					that._trigger("dragStart", event, filteredUi(ui));
				},
				drag: function (event, ui) {
					that._trigger("drag", event, filteredUi(ui));
				},
				stop: function (event, ui) {
					var left = ui.offset.left - that.document.scrollLeft(),
						top = ui.offset.top - that.document.scrollTop();
					options.position = {
						my: "left top",
						at: "left" + (left >= 0 ? "+" : "") + left + " " + "top" + (top >= 0 ? "+" : "") + top,
						of: that.window
					};
					$(this).removeClass("ui-dialog-dragging");
					that._unblockFrames();
					that._trigger("dragStop", event, filteredUi(ui));
				}
			});
		},
		_makeResizable: function () {
			var that = this,
				options = this.options,
				handles = options.resizable,
				position = this.uiDialog.css("position"),
				resizeHandles = typeof handles === "string" ? handles : "n,e,s,w,se,sw,ne,nw";

			function filteredUi(ui) {
				return {
					originalPosition: ui.originalPosition,
					originalSize: ui.originalSize,
					position: ui.position,
					size: ui.size
				};
			}
			this.uiDialog.resizable({
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: this.element,
				maxWidth: options.maxWidth,
				maxHeight: options.maxHeight,
				minWidth: options.minWidth,
				minHeight: this._minHeight(),
				handles: resizeHandles,
				start: function (event, ui) {
					$(this).addClass("ui-dialog-resizing");
					that._blockFrames();
					that._trigger("resizeStart", event, filteredUi(ui));
				},
				resize: function (event, ui) {
					that._trigger("resize", event, filteredUi(ui));
				},
				stop: function (event, ui) {
					var offset = that.uiDialog.offset(),
						left = offset.left - that.document.scrollLeft(),
						top = offset.top - that.document.scrollTop();
					options.height = that.uiDialog.height();
					options.width = that.uiDialog.width();
					options.position = {
						my: "left top",
						at: "left" + (left >= 0 ? "+" : "") + left + " " + "top" + (top >= 0 ? "+" : "") + top,
						of: that.window
					};
					$(this).removeClass("ui-dialog-resizing");
					that._unblockFrames();
					that._trigger("resizeStop", event, filteredUi(ui));
				}
			}).css("position", position);
		},
		_trackFocus: function () {
			this._on(this.widget(), {
				focusin: function (event) {
					this._makeFocusTarget();
					this._focusedElement = $(event.target);
				}
			});
		},
		_makeFocusTarget: function () {
			this._untrackInstance();
			this._trackingInstances().unshift(this);
		},
		_untrackInstance: function () {
			var instances = this._trackingInstances(),
				exists = $.inArray(this, instances);
			if (exists !== -1) {
				instances.splice(exists, 1);
			}
		},
		_trackingInstances: function () {
			var instances = this.document.data("ui-dialog-instances");
			if (!instances) {
				instances = [];
				this.document.data("ui-dialog-instances", instances);
			}
			return instances;
		},
		_minHeight: function () {
			var options = this.options;
			return options.height === "auto" ? options.minHeight : Math.min(options.minHeight, options.height);
		},
		_position: function () {
			var isVisible = this.uiDialog.is(":visible");
			if (!isVisible) {
				this.uiDialog.show();
			}
			this.uiDialog.position(this.options.position);
			if (!isVisible) {
				this.uiDialog.hide();
			}
		},
		_setOptions: function (options) {
			var that = this,
				resize = false,
				resizableOptions = {};
			$.each(options, function (key, value) {
				that._setOption(key, value);
				if (key in that.sizeRelatedOptions) {
					resize = true;
				}
				if (key in that.resizableRelatedOptions) {
					resizableOptions[key] = value;
				}
			});
			if (resize) {
				this._size();
				this._position();
			}
			if (this.uiDialog.is(":data(ui-resizable)")) {
				this.uiDialog.resizable("option", resizableOptions);
			}
		},
		_setOption: function (key, value) {
			var isDraggable, isResizable, uiDialog = this.uiDialog;
			if (key === "dialogClass") {
				uiDialog.removeClass(this.options.dialogClass).addClass(value);
			}
			if (key === "disabled") {
				return;
			}
			this._super(key, value);
			if (key === "appendTo") {
				this.uiDialog.appendTo(this._appendTo());
			}
			if (key === "buttons") {
				this._createButtons();
			}
			if (key === "closeText") {
				this.uiDialogTitlebarClose.button({
					label: "" + value
				});
			}
			if (key === "draggable") {
				isDraggable = uiDialog.is(":data(ui-draggable)");
				if (isDraggable && !value) {
					uiDialog.draggable("destroy");
				}
				if (!isDraggable && value) {
					this._makeDraggable();
				}
			}
			if (key === "position") {
				this._position();
			}
			if (key === "resizable") {
				isResizable = uiDialog.is(":data(ui-resizable)");
				if (isResizable && !value) {
					uiDialog.resizable("destroy");
				}
				if (isResizable && typeof value === "string") {
					uiDialog.resizable("option", "handles", value);
				}
				if (!isResizable && value !== false) {
					this._makeResizable();
				}
			}
			if (key === "title") {
				this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));
			}
		},
		_size: function () {
			var nonContentHeight, minContentHeight, maxContentHeight, options = this.options;
			this.element.show().css({
				width: "auto",
				minHeight: 0,
				maxHeight: "none",
				height: 0
			});
			if (options.minWidth > options.width) {
				options.width = options.minWidth;
			}
			nonContentHeight = this.uiDialog.css({
				height: "auto",
				width: options.width
			}).outerHeight();
			minContentHeight = Math.max(0, options.minHeight - nonContentHeight);
			maxContentHeight = typeof options.maxHeight === "number" ? Math.max(0, options.maxHeight - nonContentHeight) : "none";
			if (options.height === "auto") {
				this.element.css({
					minHeight: minContentHeight,
					maxHeight: maxContentHeight,
					height: "auto"
				});
			} else {
				this.element.height(Math.max(0, options.height - nonContentHeight));
			}
			if (this.uiDialog.is(":data(ui-resizable)")) {
				this.uiDialog.resizable("option", "minHeight", this._minHeight());
			}
		},
		_blockFrames: function () {
			this.iframeBlocks = this.document.find("iframe").map(function () {
				var iframe = $(this);
				return $("<div>").css({
					position: "absolute",
					width: iframe.outerWidth(),
					height: iframe.outerHeight()
				}).appendTo(iframe.parent()).offset(iframe.offset())[0];
			});
		},
		_unblockFrames: function () {
			if (this.iframeBlocks) {
				this.iframeBlocks.remove();
				delete this.iframeBlocks;
			}
		},
		_allowInteraction: function (event) {
			if ($(event.target).closest(".ui-dialog").length) {
				return true;
			}
			return !!$(event.target).closest(".ui-datepicker").length;
		},
		_createOverlay: function () {
			if (!this.options.modal) {
				return;
			}
			var isOpening = true;
			this._delay(function () {
				isOpening = false;
			});
			if (!this.document.data("ui-dialog-overlays")) {
				this._on(this.document, {
					focusin: function (event) {
						if (isOpening) {
							return;
						}
						if (!this._allowInteraction(event)) {
							event.preventDefault();
							this._trackingInstances()[0]._focusTabbable();
						}
					}
				});
			}
			this.overlay = $("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
			this._on(this.overlay, {
				mousedown: "_keepFocus"
			});
			this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
		},
		_destroyOverlay: function () {
			if (!this.options.modal) {
				return;
			}
			if (this.overlay) {
				var overlays = this.document.data("ui-dialog-overlays") - 1;
				if (!overlays) {
					this.document.unbind("focusin").removeData("ui-dialog-overlays");
				} else {
					this.document.data("ui-dialog-overlays", overlays);
				}
				this.overlay.remove();
				this.overlay = null;
			}
		}
	});
	$.widget("ui.droppable", {
		version: "1.11.4",
		widgetEventPrefix: "drop",
		options: {
			accept: "*",
			activeClass: false,
			addClasses: true,
			greedy: false,
			hoverClass: false,
			scope: "default",
			tolerance: "intersect",
			activate: null,
			deactivate: null,
			drop: null,
			out: null,
			over: null
		},
		_create: function () {
			var proportions, o = this.options,
				accept = o.accept;
			this.isover = false;
			this.isout = true;
			this.accept = $.isFunction(accept) ? accept : function (d) {
				return d.is(accept);
			};
			this.proportions = function () {
				if (arguments.length) {
					proportions = arguments[0];
				} else {
					return proportions ? proportions : proportions = {
						width: this.element[0].offsetWidth,
						height: this.element[0].offsetHeight
					};
				}
			};
			this._addToManager(o.scope);
			o.addClasses && this.element.addClass("ui-droppable");
		},
		_addToManager: function (scope) {
			$.ui.ddmanager.droppables[scope] = $.ui.ddmanager.droppables[scope] || [];
			$.ui.ddmanager.droppables[scope].push(this);
		},
		_splice: function (drop) {
			var i = 0;
			for (; i < drop.length; i++) {
				if (drop[i] === this) {
					drop.splice(i, 1);
				}
			}
		},
		_destroy: function () {
			var drop = $.ui.ddmanager.droppables[this.options.scope];
			this._splice(drop);
			this.element.removeClass("ui-droppable ui-droppable-disabled");
		},
		_setOption: function (key, value) {
			if (key === "accept") {
				this.accept = $.isFunction(value) ? value : function (d) {
					return d.is(value);
				};
			} else if (key === "scope") {
				var drop = $.ui.ddmanager.droppables[this.options.scope];
				this._splice(drop);
				this._addToManager(value);
			}
			this._super(key, value);
		},
		_activate: function (event) {
			var draggable = $.ui.ddmanager.current;
			if (this.options.activeClass) {
				this.element.addClass(this.options.activeClass);
			}
			if (draggable) {
				this._trigger("activate", event, this.ui(draggable));
			}
		},
		_deactivate: function (event) {
			var draggable = $.ui.ddmanager.current;
			if (this.options.activeClass) {
				this.element.removeClass(this.options.activeClass);
			}
			if (draggable) {
				this._trigger("deactivate", event, this.ui(draggable));
			}
		},
		_over: function (event) {
			var draggable = $.ui.ddmanager.current;
			if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
				return;
			}
			if (this.accept.call(this.element[0], (draggable.currentItem || draggable.element))) {
				if (this.options.hoverClass) {
					this.element.addClass(this.options.hoverClass);
				}
				this._trigger("over", event, this.ui(draggable));
			}
		},
		_out: function (event) {
			var draggable = $.ui.ddmanager.current;
			if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
				return;
			}
			if (this.accept.call(this.element[0], (draggable.currentItem || draggable.element))) {
				if (this.options.hoverClass) {
					this.element.removeClass(this.options.hoverClass);
				}
				this._trigger("out", event, this.ui(draggable));
			}
		},
		_drop: function (event, custom) {
			var draggable = custom || $.ui.ddmanager.current,
				childrenIntersection = false;
			if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
				return false;
			}
			this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
				var inst = $(this).droppable("instance");
				if (inst.options.greedy && !inst.options.disabled && inst.options.scope === draggable.options.scope && inst.accept.call(inst.element[0], (draggable.currentItem || draggable.element)) && $.ui.intersect(draggable, $.extend(inst, {
						offset: inst.element.offset()
					}), inst.options.tolerance, event)) {
					childrenIntersection = true;
					return false;
				}
			});
			if (childrenIntersection) {
				return false;
			}
			if (this.accept.call(this.element[0], (draggable.currentItem || draggable.element))) {
				if (this.options.activeClass) {
					this.element.removeClass(this.options.activeClass);
				}
				if (this.options.hoverClass) {
					this.element.removeClass(this.options.hoverClass);
				}
				this._trigger("drop", event, this.ui(draggable));
				return this.element;
			}
			return false;
		},
		ui: function (c) {
			return {
				draggable: (c.currentItem || c.element),
				helper: c.helper,
				position: c.position,
				offset: c.positionAbs
			};
		}
	});
	$.ui.intersect = (function () {
		function isOverAxis(x, reference, size) {
			return (x >= reference) && (x < (reference + size));
		}
		return function (draggable, droppable, toleranceMode, event) {
			if (!droppable.offset) {
				return false;
			}
			var x1 = (draggable.positionAbs || draggable.position.absolute).left + draggable.margins.left,
				y1 = (draggable.positionAbs || draggable.position.absolute).top + draggable.margins.top,
				x2 = x1 + draggable.helperProportions.width,
				y2 = y1 + draggable.helperProportions.height,
				l = droppable.offset.left,
				t = droppable.offset.top,
				r = l + droppable.proportions().width,
				b = t + droppable.proportions().height;
			switch (toleranceMode) {
				case "fit":
					return (l <= x1 && x2 <= r && t <= y1 && y2 <= b);
				case "intersect":
					return (l < x1 + (draggable.helperProportions.width / 2) && x2 - (draggable.helperProportions.width / 2) < r && t < y1 + (draggable.helperProportions.height / 2) && y2 - (draggable.helperProportions.height / 2) < b);
				case "pointer":
					return isOverAxis(event.pageY, t, droppable.proportions().height) && isOverAxis(event.pageX, l, droppable.proportions().width);
				case "touch":
					return ((y1 >= t && y1 <= b) || (y2 >= t && y2 <= b) || (y1 < t && y2 > b)) && ((x1 >= l && x1 <= r) || (x2 >= l && x2 <= r) || (x1 < l && x2 > r));
				default:
					return false;
			}
		};
	})();
	$.ui.ddmanager = {
		current: null,
		droppables: {
			"default": []
		},
		prepareOffsets: function (t, event) {
			var i, j, m = $.ui.ddmanager.droppables[t.options.scope] || [],
				type = event ? event.type : null,
				list = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
			droppablesLoop: for (i = 0; i < m.length; i++) {
				if (m[i].options.disabled || (t && !m[i].accept.call(m[i].element[0], (t.currentItem || t.element)))) {
					continue;
				}
				for (j = 0; j < list.length; j++) {
					if (list[j] === m[i].element[0]) {
						m[i].proportions().height = 0;
						continue droppablesLoop;
					}
				}
				m[i].visible = m[i].element.css("display") !== "none";
				if (!m[i].visible) {
					continue;
				}
				if (type === "mousedown") {
					m[i]._activate.call(m[i], event);
				}
				m[i].offset = m[i].element.offset();
				m[i].proportions({
					width: m[i].element[0].offsetWidth,
					height: m[i].element[0].offsetHeight
				});
			}
		},
		drop: function (draggable, event) {
			var dropped = false;
			$.each(($.ui.ddmanager.droppables[draggable.options.scope] || []).slice(), function () {
				if (!this.options) {
					return;
				}
				if (!this.options.disabled && this.visible && $.ui.intersect(draggable, this, this.options.tolerance, event)) {
					dropped = this._drop.call(this, event) || dropped;
				}
				if (!this.options.disabled && this.visible && this.accept.call(this.element[0], (draggable.currentItem || draggable.element))) {
					this.isout = true;
					this.isover = false;
					this._deactivate.call(this, event);
				}
			});
			return dropped;
		},
		dragStart: function (draggable, event) {
			draggable.element.parentsUntil("body").bind("scroll.droppable", function () {
				if (!draggable.options.refreshPositions) {
					$.ui.ddmanager.prepareOffsets(draggable, event);
				}
			});
		},
		drag: function (draggable, event) {
			if (draggable.options.refreshPositions) {
				$.ui.ddmanager.prepareOffsets(draggable, event);
			}
			$.each($.ui.ddmanager.droppables[draggable.options.scope] || [], function () {
				if (this.options.disabled || this.greedyChild || !this.visible) {
					return;
				}
				var parentInstance, scope, parent, intersects = $.ui.intersect(draggable, this, this.options.tolerance, event),
					c = !intersects && this.isover ? "isout" : (intersects && !this.isover ? "isover" : null);
				if (!c) {
					return;
				}
				if (this.options.greedy) {
					scope = this.options.scope;
					parent = this.element.parents(":data(ui-droppable)").filter(function () {
						return $(this).droppable("instance").options.scope === scope;
					});
					if (parent.length) {
						parentInstance = $(parent[0]).droppable("instance");
						parentInstance.greedyChild = (c === "isover");
					}
				}
				if (parentInstance && c === "isover") {
					parentInstance.isover = false;
					parentInstance.isout = true;
					parentInstance._out.call(parentInstance, event);
				}
				this[c] = true;
				this[c === "isout" ? "isover" : "isout"] = false;
				this[c === "isover" ? "_over" : "_out"].call(this, event);
				if (parentInstance && c === "isout") {
					parentInstance.isout = false;
					parentInstance.isover = true;
					parentInstance._over.call(parentInstance, event);
				}
			});
		},
		dragStop: function (draggable, event) {
			draggable.element.parentsUntil("body").unbind("scroll.droppable");
			if (!draggable.options.refreshPositions) {
				$.ui.ddmanager.prepareOffsets(draggable, event);
			}
		}
	};
	var droppable = $.ui.droppable;
	var dataSpace = "ui-effects-",
		jQuery = $;
	$.effects = {
		effect: {}
	};
	(function (jQuery, undefined) {
		var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
			rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
			stringParsers = [{
				re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse: function (execResult) {
					return [execResult[1], execResult[2], execResult[3], execResult[4]];
				}
			}, {
				re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse: function (execResult) {
					return [execResult[1] * 2.55, execResult[2] * 2.55, execResult[3] * 2.55, execResult[4]];
				}
			}, {
				re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
				parse: function (execResult) {
					return [parseInt(execResult[1], 16), parseInt(execResult[2], 16), parseInt(execResult[3], 16)];
				}
			}, {
				re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
				parse: function (execResult) {
					return [parseInt(execResult[1] + execResult[1], 16), parseInt(execResult[2] + execResult[2], 16), parseInt(execResult[3] + execResult[3], 16)];
				}
			}, {
				re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				space: "hsla",
				parse: function (execResult) {
					return [execResult[1], execResult[2] / 100, execResult[3] / 100, execResult[4]];
				}
			}],
			color = jQuery.Color = function (color, green, blue, alpha) {
				return new jQuery.Color.fn.parse(color, green, blue, alpha);
			},
			spaces = {
				rgba: {
					props: {
						red: {
							idx: 0,
							type: "byte"
						},
						green: {
							idx: 1,
							type: "byte"
						},
						blue: {
							idx: 2,
							type: "byte"
						}
					}
				},
				hsla: {
					props: {
						hue: {
							idx: 0,
							type: "degrees"
						},
						saturation: {
							idx: 1,
							type: "percent"
						},
						lightness: {
							idx: 2,
							type: "percent"
						}
					}
				}
			},
			propTypes = {
				"byte": {
					floor: true,
					max: 255
				},
				"percent": {
					max: 1
				},
				"degrees": {
					mod: 360,
					floor: true
				}
			},
			support = color.support = {},
			supportElem = jQuery("<p>")[0],
			colors, each = jQuery.each;
		supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
		support.rgba = supportElem.style.backgroundColor.indexOf("rgba") > -1;
		each(spaces, function (spaceName, space) {
			space.cache = "_" + spaceName;
			space.props.alpha = {
				idx: 3,
				type: "percent",
				def: 1
			};
		});

		function clamp(value, prop, allowEmpty) {
			var type = propTypes[prop.type] || {};
			if (value == null) {
				return (allowEmpty || !prop.def) ? null : prop.def;
			}
			value = type.floor ? ~~value : parseFloat(value);
			if (isNaN(value)) {
				return prop.def;
			}
			if (type.mod) {
				return (value + type.mod) % type.mod;
			}
			return 0 > value ? 0 : type.max < value ? type.max : value;
		}

		function stringParse(string) {
			var inst = color(),
				rgba = inst._rgba = [];
			string = string.toLowerCase();
			each(stringParsers, function (i, parser) {
				var parsed, match = parser.re.exec(string),
					values = match && parser.parse(match),
					spaceName = parser.space || "rgba";
				if (values) {
					parsed = inst[spaceName](values);
					inst[spaces[spaceName].cache] = parsed[spaces[spaceName].cache];
					rgba = inst._rgba = parsed._rgba;
					return false;
				}
			});
			if (rgba.length) {
				if (rgba.join() === "0,0,0,0") {
					jQuery.extend(rgba, colors.transparent);
				}
				return inst;
			}
			return colors[string];
		}
		color.fn = jQuery.extend(color.prototype, {
			parse: function (red, green, blue, alpha) {
				if (red === undefined) {
					this._rgba = [null, null, null, null];
					return this;
				}
				if (red.jquery || red.nodeType) {
					red = jQuery(red).css(green);
					green = undefined;
				}
				var inst = this,
					type = jQuery.type(red),
					rgba = this._rgba = [];
				if (green !== undefined) {
					red = [red, green, blue, alpha];
					type = "array";
				}
				if (type === "string") {
					return this.parse(stringParse(red) || colors._default);
				}
				if (type === "array") {
					each(spaces.rgba.props, function (key, prop) {
						rgba[prop.idx] = clamp(red[prop.idx], prop);
					});
					return this;
				}
				if (type === "object") {
					if (red instanceof color) {
						each(spaces, function (spaceName, space) {
							if (red[space.cache]) {
								inst[space.cache] = red[space.cache].slice();
							}
						});
					} else {
						each(spaces, function (spaceName, space) {
							var cache = space.cache;
							each(space.props, function (key, prop) {
								if (!inst[cache] && space.to) {
									if (key === "alpha" || red[key] == null) {
										return;
									}
									inst[cache] = space.to(inst._rgba);
								}
								inst[cache][prop.idx] = clamp(red[key], prop, true);
							});
							if (inst[cache] && jQuery.inArray(null, inst[cache].slice(0, 3)) < 0) {
								inst[cache][3] = 1;
								if (space.from) {
									inst._rgba = space.from(inst[cache]);
								}
							}
						});
					}
					return this;
				}
			},
			is: function (compare) {
				var is = color(compare),
					same = true,
					inst = this;
				each(spaces, function (_, space) {
					var localCache, isCache = is[space.cache];
					if (isCache) {
						localCache = inst[space.cache] || space.to && space.to(inst._rgba) || [];
						each(space.props, function (_, prop) {
							if (isCache[prop.idx] != null) {
								same = (isCache[prop.idx] === localCache[prop.idx]);
								return same;
							}
						});
					}
					return same;
				});
				return same;
			},
			_space: function () {
				var used = [],
					inst = this;
				each(spaces, function (spaceName, space) {
					if (inst[space.cache]) {
						used.push(spaceName);
					}
				});
				return used.pop();
			},
			transition: function (other, distance) {
				var end = color(other),
					spaceName = end._space(),
					space = spaces[spaceName],
					startColor = this.alpha() === 0 ? color("transparent") : this,
					start = startColor[space.cache] || space.to(startColor._rgba),
					result = start.slice();
				end = end[space.cache];
				each(space.props, function (key, prop) {
					var index = prop.idx,
						startValue = start[index],
						endValue = end[index],
						type = propTypes[prop.type] || {};
					if (endValue === null) {
						return;
					}
					if (startValue === null) {
						result[index] = endValue;
					} else {
						if (type.mod) {
							if (endValue - startValue > type.mod / 2) {
								startValue += type.mod;
							} else if (startValue - endValue > type.mod / 2) {
								startValue -= type.mod;
							}
						}
						result[index] = clamp((endValue - startValue) * distance + startValue, prop);
					}
				});
				return this[spaceName](result);
			},
			blend: function (opaque) {
				if (this._rgba[3] === 1) {
					return this;
				}
				var rgb = this._rgba.slice(),
					a = rgb.pop(),
					blend = color(opaque)._rgba;
				return color(jQuery.map(rgb, function (v, i) {
					return (1 - a) * blend[i] + a * v;
				}));
			},
			toRgbaString: function () {
				var prefix = "rgba(",
					rgba = jQuery.map(this._rgba, function (v, i) {
						return v == null ? (i > 2 ? 1 : 0) : v;
					});
				if (rgba[3] === 1) {
					rgba.pop();
					prefix = "rgb(";
				}
				return prefix + rgba.join() + ")";
			},
			toHslaString: function () {
				var prefix = "hsla(",
					hsla = jQuery.map(this.hsla(), function (v, i) {
						if (v == null) {
							v = i > 2 ? 1 : 0;
						}
						if (i && i < 3) {
							v = Math.round(v * 100) + "%";
						}
						return v;
					});
				if (hsla[3] === 1) {
					hsla.pop();
					prefix = "hsl(";
				}
				return prefix + hsla.join() + ")";
			},
			toHexString: function (includeAlpha) {
				var rgba = this._rgba.slice(),
					alpha = rgba.pop();
				if (includeAlpha) {
					rgba.push(~~(alpha * 255));
				}
				return "#" + jQuery.map(rgba, function (v) {
					v = (v || 0).toString(16);
					return v.length === 1 ? "0" + v : v;
				}).join("");
			},
			toString: function () {
				return this._rgba[3] === 0 ? "transparent" : this.toRgbaString();
			}
		});
		color.fn.parse.prototype = color.fn;

		function hue2rgb(p, q, h) {
			h = (h + 1) % 1;
			if (h * 6 < 1) {
				return p + (q - p) * h * 6;
			}
			if (h * 2 < 1) {
				return q;
			}
			if (h * 3 < 2) {
				return p + (q - p) * ((2 / 3) - h) * 6;
			}
			return p;
		}
		spaces.hsla.to = function (rgba) {
			if (rgba[0] == null || rgba[1] == null || rgba[2] == null) {
				return [null, null, null, rgba[3]];
			}
			var r = rgba[0] / 255,
				g = rgba[1] / 255,
				b = rgba[2] / 255,
				a = rgba[3],
				max = Math.max(r, g, b),
				min = Math.min(r, g, b),
				diff = max - min,
				add = max + min,
				l = add * 0.5,
				h, s;
			if (min === max) {
				h = 0;
			} else if (r === max) {
				h = (60 * (g - b) / diff) + 360;
			} else if (g === max) {
				h = (60 * (b - r) / diff) + 120;
			} else {
				h = (60 * (r - g) / diff) + 240;
			}
			if (diff === 0) {
				s = 0;
			} else if (l <= 0.5) {
				s = diff / add;
			} else {
				s = diff / (2 - add);
			}
			return [Math.round(h) % 360, s, l, a == null ? 1 : a];
		};
		spaces.hsla.from = function (hsla) {
			if (hsla[0] == null || hsla[1] == null || hsla[2] == null) {
				return [null, null, null, hsla[3]];
			}
			var h = hsla[0] / 360,
				s = hsla[1],
				l = hsla[2],
				a = hsla[3],
				q = l <= 0.5 ? l * (1 + s) : l + s - l * s,
				p = 2 * l - q;
			return [Math.round(hue2rgb(p, q, h + (1 / 3)) * 255), Math.round(hue2rgb(p, q, h) * 255), Math.round(hue2rgb(p, q, h - (1 / 3)) * 255), a];
		};
		each(spaces, function (spaceName, space) {
			var props = space.props,
				cache = space.cache,
				to = space.to,
				from = space.from;
			color.fn[spaceName] = function (value) {
				if (to && !this[cache]) {
					this[cache] = to(this._rgba);
				}
				if (value === undefined) {
					return this[cache].slice();
				}
				var ret, type = jQuery.type(value),
					arr = (type === "array" || type === "object") ? value : arguments,
					local = this[cache].slice();
				each(props, function (key, prop) {
					var val = arr[type === "object" ? key : prop.idx];
					if (val == null) {
						val = local[prop.idx];
					}
					local[prop.idx] = clamp(val, prop);
				});
				if (from) {
					ret = color(from(local));
					ret[cache] = local;
					return ret;
				} else {
					return color(local);
				}
			};
			each(props, function (key, prop) {
				if (color.fn[key]) {
					return;
				}
				color.fn[key] = function (value) {
					var vtype = jQuery.type(value),
						fn = (key === "alpha" ? (this._hsla ? "hsla" : "rgba") : spaceName),
						local = this[fn](),
						cur = local[prop.idx],
						match;
					if (vtype === "undefined") {
						return cur;
					}
					if (vtype === "function") {
						value = value.call(this, cur);
						vtype = jQuery.type(value);
					}
					if (value == null && prop.empty) {
						return this;
					}
					if (vtype === "string") {
						match = rplusequals.exec(value);
						if (match) {
							value = cur + parseFloat(match[2]) * (match[1] === "+" ? 1 : -1);
						}
					}
					local[prop.idx] = value;
					return this[fn](local);
				};
			});
		});
		color.hook = function (hook) {
			var hooks = hook.split(" ");
			each(hooks, function (i, hook) {
				jQuery.cssHooks[hook] = {
					set: function (elem, value) {
						var parsed, curElem, backgroundColor = "";
						if (value !== "transparent" && (jQuery.type(value) !== "string" || (parsed = stringParse(value)))) {
							value = color(parsed || value);
							if (!support.rgba && value._rgba[3] !== 1) {
								curElem = hook === "backgroundColor" ? elem.parentNode : elem;
								while ((backgroundColor === "" || backgroundColor === "transparent") && curElem && curElem.style) {
									try {
										backgroundColor = jQuery.css(curElem, "backgroundColor");
										curElem = curElem.parentNode;
									} catch (e) {}
								}
								value = value.blend(backgroundColor && backgroundColor !== "transparent" ? backgroundColor : "_default");
							}
							value = value.toRgbaString();
						}
						try {
							elem.style[hook] = value;
						} catch (e) {}
					}
				};
				jQuery.fx.step[hook] = function (fx) {
					if (!fx.colorInit) {
						fx.start = color(fx.elem, hook);
						fx.end = color(fx.end);
						fx.colorInit = true;
					}
					jQuery.cssHooks[hook].set(fx.elem, fx.start.transition(fx.end, fx.pos));
				};
			});
		};
		color.hook(stepHooks);
		jQuery.cssHooks.borderColor = {
			expand: function (value) {
				var expanded = {};
				each(["Top", "Right", "Bottom", "Left"], function (i, part) {
					expanded["border" + part + "Color"] = value;
				});
				return expanded;
			}
		};
		colors = jQuery.Color.names = {
			aqua: "#00ffff",
			black: "#000000",
			blue: "#0000ff",
			fuchsia: "#ff00ff",
			gray: "#808080",
			green: "#008000",
			lime: "#00ff00",
			maroon: "#800000",
			navy: "#000080",
			olive: "#808000",
			purple: "#800080",
			red: "#ff0000",
			silver: "#c0c0c0",
			teal: "#008080",
			white: "#ffffff",
			yellow: "#ffff00",
			transparent: [null, null, null, 0],
			_default: "#ffffff"
		};
	})(jQuery);
	(function () {
		var classAnimationActions = ["add", "remove", "toggle"],
			shorthandStyles = {
				border: 1,
				borderBottom: 1,
				borderColor: 1,
				borderLeft: 1,
				borderRight: 1,
				borderTop: 1,
				borderWidth: 1,
				margin: 1,
				padding: 1
			};
		$.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (_, prop) {
			$.fx.step[prop] = function (fx) {
				if (fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr) {
					jQuery.style(fx.elem, prop, fx.end);
					fx.setAttr = true;
				}
			};
		});

		function getElementStyles(elem) {
			var key, len, style = elem.ownerDocument.defaultView ? elem.ownerDocument.defaultView.getComputedStyle(elem, null) : elem.currentStyle,
				styles = {};
			if (style && style.length && style[0] && style[style[0]]) {
				len = style.length;
				while (len--) {
					key = style[len];
					if (typeof style[key] === "string") {
						styles[$.camelCase(key)] = style[key];
					}
				}
			} else {
				for (key in style) {
					if (typeof style[key] === "string") {
						styles[key] = style[key];
					}
				}
			}
			return styles;
		}

		function styleDifference(oldStyle, newStyle) {
			var diff = {},
				name, value;
			for (name in newStyle) {
				value = newStyle[name];
				if (oldStyle[name] !== value) {
					if (!shorthandStyles[name]) {
						if ($.fx.step[name] || !isNaN(parseFloat(value))) {
							diff[name] = value;
						}
					}
				}
			}
			return diff;
		}
		if (!$.fn.addBack) {
			$.fn.addBack = function (selector) {
				return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
			};
		}
		$.effects.animateClass = function (value, duration, easing, callback) {
			var o = $.speed(duration, easing, callback);
			return this.queue(function () {
				var animated = $(this),
					baseClass = animated.attr("class") || "",
					applyClassChange, allAnimations = o.children ? animated.find("*").addBack() : animated;
				allAnimations = allAnimations.map(function () {
					var el = $(this);
					return {
						el: el,
						start: getElementStyles(this)
					};
				});
				applyClassChange = function () {
					$.each(classAnimationActions, function (i, action) {
						if (value[action]) {
							animated[action + "Class"](value[action]);
						}
					});
				};
				applyClassChange();
				allAnimations = allAnimations.map(function () {
					this.end = getElementStyles(this.el[0]);
					this.diff = styleDifference(this.start, this.end);
					return this;
				});
				animated.attr("class", baseClass);
				allAnimations = allAnimations.map(function () {
					var styleInfo = this,
						dfd = $.Deferred(),
						opts = $.extend({}, o, {
							queue: false,
							complete: function () {
								dfd.resolve(styleInfo);
							}
						});
					this.el.animate(this.diff, opts);
					return dfd.promise();
				});
				$.when.apply($, allAnimations.get()).done(function () {
					applyClassChange();
					$.each(arguments, function () {
						var el = this.el;
						$.each(this.diff, function (key) {
							el.css(key, "");
						});
					});
					o.complete.call(animated[0]);
				});
			});
		};
		$.fn.extend({
			addClass: (function (orig) {
				return function (classNames, speed, easing, callback) {
					return speed ? $.effects.animateClass.call(this, {
						add: classNames
					}, speed, easing, callback) : orig.apply(this, arguments);
				};
			})($.fn.addClass),
			removeClass: (function (orig) {
				return function (classNames, speed, easing, callback) {
					return arguments.length > 1 ? $.effects.animateClass.call(this, {
						remove: classNames
					}, speed, easing, callback) : orig.apply(this, arguments);
				};
			})($.fn.removeClass),
			toggleClass: (function (orig) {
				return function (classNames, force, speed, easing, callback) {
					if (typeof force === "boolean" || force === undefined) {
						if (!speed) {
							return orig.apply(this, arguments);
						} else {
							return $.effects.animateClass.call(this, (force ? {
								add: classNames
							} : {
								remove: classNames
							}), speed, easing, callback);
						}
					} else {
						return $.effects.animateClass.call(this, {
							toggle: classNames
						}, force, speed, easing);
					}
				};
			})($.fn.toggleClass),
			switchClass: function (remove, add, speed, easing, callback) {
				return $.effects.animateClass.call(this, {
					add: add,
					remove: remove
				}, speed, easing, callback);
			}
		});
	})();
	(function () {
		$.extend($.effects, {
			version: "1.11.4",
			save: function (element, set) {
				for (var i = 0; i < set.length; i++) {
					if (set[i] !== null) {
						element.data(dataSpace + set[i], element[0].style[set[i]]);
					}
				}
			},
			restore: function (element, set) {
				var val, i;
				for (i = 0; i < set.length; i++) {
					if (set[i] !== null) {
						val = element.data(dataSpace + set[i]);
						if (val === undefined) {
							val = "";
						}
						element.css(set[i], val);
					}
				}
			},
			setMode: function (el, mode) {
				if (mode === "toggle") {
					mode = el.is(":hidden") ? "show" : "hide";
				}
				return mode;
			},
			getBaseline: function (origin, original) {
				var y, x;
				switch (origin[0]) {
					case "top":
						y = 0;
						break;
					case "middle":
						y = 0.5;
						break;
					case "bottom":
						y = 1;
						break;
					default:
						y = origin[0] / original.height;
				}
				switch (origin[1]) {
					case "left":
						x = 0;
						break;
					case "center":
						x = 0.5;
						break;
					case "right":
						x = 1;
						break;
					default:
						x = origin[1] / original.width;
				}
				return {
					x: x,
					y: y
				};
			},
			createWrapper: function (element) {
				if (element.parent().is(".ui-effects-wrapper")) {
					return element.parent();
				}
				var props = {
						width: element.outerWidth(true),
						height: element.outerHeight(true),
						"float": element.css("float")
					},
					wrapper = $("<div></div>").addClass("ui-effects-wrapper").css({
						fontSize: "100%",
						background: "transparent",
						border: "none",
						margin: 0,
						padding: 0
					}),
					size = {
						width: element.width(),
						height: element.height()
					},
					active = document.activeElement;
				try {
					active.id;
				} catch (e) {
					active = document.body;
				}
				element.wrap(wrapper);
				if (element[0] === active || $.contains(element[0], active)) {
					$(active).focus();
				}
				wrapper = element.parent();
				if (element.css("position") === "static") {
					wrapper.css({
						position: "relative"
					});
					element.css({
						position: "relative"
					});
				} else {
					$.extend(props, {
						position: element.css("position"),
						zIndex: element.css("z-index")
					});
					$.each(["top", "left", "bottom", "right"], function (i, pos) {
						props[pos] = element.css(pos);
						if (isNaN(parseInt(props[pos], 10))) {
							props[pos] = "auto";
						}
					});
					element.css({
						position: "relative",
						top: 0,
						left: 0,
						right: "auto",
						bottom: "auto"
					});
				}
				element.css(size);
				return wrapper.css(props).show();
			},
			removeWrapper: function (element) {
				var active = document.activeElement;
				if (element.parent().is(".ui-effects-wrapper")) {
					element.parent().replaceWith(element);
					if (element[0] === active || $.contains(element[0], active)) {
						$(active).focus();
					}
				}
				return element;
			},
			setTransition: function (element, list, factor, value) {
				value = value || {};
				$.each(list, function (i, x) {
					var unit = element.cssUnit(x);
					if (unit[0] > 0) {
						value[x] = unit[0] * factor + unit[1];
					}
				});
				return value;
			}
		});

		function _normalizeArguments(effect, options, speed, callback) {
			if ($.isPlainObject(effect)) {
				options = effect;
				effect = effect.effect;
			}
			effect = {
				effect: effect
			};
			if (options == null) {
				options = {};
			}
			if ($.isFunction(options)) {
				callback = options;
				speed = null;
				options = {};
			}
			if (typeof options === "number" || $.fx.speeds[options]) {
				callback = speed;
				speed = options;
				options = {};
			}
			if ($.isFunction(speed)) {
				callback = speed;
				speed = null;
			}
			if (options) {
				$.extend(effect, options);
			}
			speed = speed || options.duration;
			effect.duration = $.fx.off ? 0 : typeof speed === "number" ? speed : speed in $.fx.speeds ? $.fx.speeds[speed] : $.fx.speeds._default;
			effect.complete = callback || options.complete;
			return effect;
		}

		function standardAnimationOption(option) {
			if (!option || typeof option === "number" || $.fx.speeds[option]) {
				return true;
			}
			if (typeof option === "string" && !$.effects.effect[option]) {
				return true;
			}
			if ($.isFunction(option)) {
				return true;
			}
			if (typeof option === "object" && !option.effect) {
				return true;
			}
			return false;
		}
		$.fn.extend({
			effect: function () {
				var args = _normalizeArguments.apply(this, arguments),
					mode = args.mode,
					queue = args.queue,
					effectMethod = $.effects.effect[args.effect];
				if ($.fx.off || !effectMethod) {
					if (mode) {
						return this[mode](args.duration, args.complete);
					} else {
						return this.each(function () {
							if (args.complete) {
								args.complete.call(this);
							}
						});
					}
				}

				function run(next) {
					var elem = $(this),
						complete = args.complete,
						mode = args.mode;

					function done() {
						if ($.isFunction(complete)) {
							complete.call(elem[0]);
						}
						if ($.isFunction(next)) {
							next();
						}
					}
					if (elem.is(":hidden") ? mode === "hide" : mode === "show") {
						elem[mode]();
						done();
					} else {
						effectMethod.call(elem[0], args, done);
					}
				}
				return queue === false ? this.each(run) : this.queue(queue || "fx", run);
			},
			show: (function (orig) {
				return function (option) {
					if (standardAnimationOption(option)) {
						return orig.apply(this, arguments);
					} else {
						var args = _normalizeArguments.apply(this, arguments);
						args.mode = "show";
						return this.effect.call(this, args);
					}
				};
			})($.fn.show),
			hide: (function (orig) {
				return function (option) {
					if (standardAnimationOption(option)) {
						return orig.apply(this, arguments);
					} else {
						var args = _normalizeArguments.apply(this, arguments);
						args.mode = "hide";
						return this.effect.call(this, args);
					}
				};
			})($.fn.hide),
			toggle: (function (orig) {
				return function (option) {
					if (standardAnimationOption(option) || typeof option === "boolean") {
						return orig.apply(this, arguments);
					} else {
						var args = _normalizeArguments.apply(this, arguments);
						args.mode = "toggle";
						return this.effect.call(this, args);
					}
				};
			})($.fn.toggle),
			cssUnit: function (key) {
				var style = this.css(key),
					val = [];
				$.each(["em", "px", "%", "pt"], function (i, unit) {
					if (style.indexOf(unit) > 0) {
						val = [parseFloat(style), unit];
					}
				});
				return val;
			}
		});
	})();
	(function () {
		var baseEasings = {};
		$.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (i, name) {
			baseEasings[name] = function (p) {
				return Math.pow(p, i + 2);
			};
		});
		$.extend(baseEasings, {
			Sine: function (p) {
				return 1 - Math.cos(p * Math.PI / 2);
			},
			Circ: function (p) {
				return 1 - Math.sqrt(1 - p * p);
			},
			Elastic: function (p) {
				return p === 0 || p === 1 ? p : -Math.pow(2, 8 * (p - 1)) * Math.sin(((p - 1) * 80 - 7.5) * Math.PI / 15);
			},
			Back: function (p) {
				return p * p * (3 * p - 2);
			},
			Bounce: function (p) {
				var pow2, bounce = 4;
				while (p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) {}
				return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p, 2);
			}
		});
		$.each(baseEasings, function (name, easeIn) {
			$.easing["easeIn" + name] = easeIn;
			$.easing["easeOut" + name] = function (p) {
				return 1 - easeIn(1 - p);
			};
			$.easing["easeInOut" + name] = function (p) {
				return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn(p * -2 + 2) / 2;
			};
		});
	})();
	var effect = $.effects;
	var effectBlind = $.effects.effect.blind = function (o, done) {
		var el = $(this),
			rvertical = /up|down|vertical/,
			rpositivemotion = /up|left|vertical|horizontal/,
			props = ["position", "top", "bottom", "left", "right", "height", "width"],
			mode = $.effects.setMode(el, o.mode || "hide"),
			direction = o.direction || "up",
			vertical = rvertical.test(direction),
			ref = vertical ? "height" : "width",
			ref2 = vertical ? "top" : "left",
			motion = rpositivemotion.test(direction),
			animation = {},
			show = mode === "show",
			wrapper, distance, margin;
		if (el.parent().is(".ui-effects-wrapper")) {
			$.effects.save(el.parent(), props);
		} else {
			$.effects.save(el, props);
		}
		el.show();
		wrapper = $.effects.createWrapper(el).css({
			overflow: "hidden"
		});
		distance = wrapper[ref]();
		margin = parseFloat(wrapper.css(ref2)) || 0;
		animation[ref] = show ? distance : 0;
		if (!motion) {
			el.css(vertical ? "bottom" : "right", 0).css(vertical ? "top" : "left", "auto").css({
				position: "absolute"
			});
			animation[ref2] = show ? margin : distance + margin;
		}
		if (show) {
			wrapper.css(ref, 0);
			if (!motion) {
				wrapper.css(ref2, margin + distance);
			}
		}
		wrapper.animate(animation, {
			duration: o.duration,
			easing: o.easing,
			queue: false,
			complete: function () {
				if (mode === "hide") {
					el.hide();
				}
				$.effects.restore(el, props);
				$.effects.removeWrapper(el);
				done();
			}
		});
	};
	var effectBounce = $.effects.effect.bounce = function (o, done) {
		var el = $(this),
			props = ["position", "top", "bottom", "left", "right", "height", "width"],
			mode = $.effects.setMode(el, o.mode || "effect"),
			hide = mode === "hide",
			show = mode === "show",
			direction = o.direction || "up",
			distance = o.distance,
			times = o.times || 5,
			anims = times * 2 + (show || hide ? 1 : 0),
			speed = o.duration / anims,
			easing = o.easing,
			ref = (direction === "up" || direction === "down") ? "top" : "left",
			motion = (direction === "up" || direction === "left"),
			i, upAnim, downAnim, queue = el.queue(),
			queuelen = queue.length;
		if (show || hide) {
			props.push("opacity");
		}
		$.effects.save(el, props);
		el.show();
		$.effects.createWrapper(el);
		if (!distance) {
			distance = el[ref === "top" ? "outerHeight" : "outerWidth"]() / 3;
		}
		if (show) {
			downAnim = {
				opacity: 1
			};
			downAnim[ref] = 0;
			el.css("opacity", 0).css(ref, motion ? -distance * 2 : distance * 2).animate(downAnim, speed, easing);
		}
		if (hide) {
			distance = distance / Math.pow(2, times - 1);
		}
		downAnim = {};
		downAnim[ref] = 0;
		for (i = 0; i < times; i++) {
			upAnim = {};
			upAnim[ref] = (motion ? "-=" : "+=") + distance;
			el.animate(upAnim, speed, easing).animate(downAnim, speed, easing);
			distance = hide ? distance * 2 : distance / 2;
		}
		if (hide) {
			upAnim = {
				opacity: 0
			};
			upAnim[ref] = (motion ? "-=" : "+=") + distance;
			el.animate(upAnim, speed, easing);
		}
		el.queue(function () {
			if (hide) {
				el.hide();
			}
			$.effects.restore(el, props);
			$.effects.removeWrapper(el);
			done();
		});
		if (queuelen > 1) {
			queue.splice.apply(queue, [1, 0].concat(queue.splice(queuelen, anims + 1)));
		}
		el.dequeue();
	};
	var effectClip = $.effects.effect.clip = function (o, done) {
		var el = $(this),
			props = ["position", "top", "bottom", "left", "right", "height", "width"],
			mode = $.effects.setMode(el, o.mode || "hide"),
			show = mode === "show",
			direction = o.direction || "vertical",
			vert = direction === "vertical",
			size = vert ? "height" : "width",
			position = vert ? "top" : "left",
			animation = {},
			wrapper, animate, distance;
		$.effects.save(el, props);
		el.show();
		wrapper = $.effects.createWrapper(el).css({
			overflow: "hidden"
		});
		animate = (el[0].tagName === "IMG") ? wrapper : el;
		distance = animate[size]();
		if (show) {
			animate.css(size, 0);
			animate.css(position, distance / 2);
		}
		animation[size] = show ? distance : 0;
		animation[position] = show ? 0 : distance / 2;
		animate.animate(animation, {
			queue: false,
			duration: o.duration,
			easing: o.easing,
			complete: function () {
				if (!show) {
					el.hide();
				}
				$.effects.restore(el, props);
				$.effects.removeWrapper(el);
				done();
			}
		});
	};
	var effectDrop = $.effects.effect.drop = function (o, done) {
		var el = $(this),
			props = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
			mode = $.effects.setMode(el, o.mode || "hide"),
			show = mode === "show",
			direction = o.direction || "left",
			ref = (direction === "up" || direction === "down") ? "top" : "left",
			motion = (direction === "up" || direction === "left") ? "pos" : "neg",
			animation = {
				opacity: show ? 1 : 0
			},
			distance;
		$.effects.save(el, props);
		el.show();
		$.effects.createWrapper(el);
		distance = o.distance || el[ref === "top" ? "outerHeight" : "outerWidth"](true) / 2;
		if (show) {
			el.css("opacity", 0).css(ref, motion === "pos" ? -distance : distance);
		}
		animation[ref] = (show ? (motion === "pos" ? "+=" : "-=") : (motion === "pos" ? "-=" : "+=")) + distance;
		el.animate(animation, {
			queue: false,
			duration: o.duration,
			easing: o.easing,
			complete: function () {
				if (mode === "hide") {
					el.hide();
				}
				$.effects.restore(el, props);
				$.effects.removeWrapper(el);
				done();
			}
		});
	};
	var effectExplode = $.effects.effect.explode = function (o, done) {
		var rows = o.pieces ? Math.round(Math.sqrt(o.pieces)) : 3,
			cells = rows,
			el = $(this),
			mode = $.effects.setMode(el, o.mode || "hide"),
			show = mode === "show",
			offset = el.show().css("visibility", "hidden").offset(),
			width = Math.ceil(el.outerWidth() / cells),
			height = Math.ceil(el.outerHeight() / rows),
			pieces = [],
			i, j, left, top, mx, my;

		function childComplete() {
			pieces.push(this);
			if (pieces.length === rows * cells) {
				animComplete();
			}
		}
		for (i = 0; i < rows; i++) {
			top = offset.top + i * height;
			my = i - (rows - 1) / 2;
			for (j = 0; j < cells; j++) {
				left = offset.left + j * width;
				mx = j - (cells - 1) / 2;
				el.clone().appendTo("body").wrap("<div></div>").css({
					position: "absolute",
					visibility: "visible",
					left: -j * width,
					top: -i * height
				}).parent().addClass("ui-effects-explode").css({
					position: "absolute",
					overflow: "hidden",
					width: width,
					height: height,
					left: left + (show ? mx * width : 0),
					top: top + (show ? my * height : 0),
					opacity: show ? 0 : 1
				}).animate({
					left: left + (show ? 0 : mx * width),
					top: top + (show ? 0 : my * height),
					opacity: show ? 1 : 0
				}, o.duration || 500, o.easing, childComplete);
			}
		}

		function animComplete() {
			el.css({
				visibility: "visible"
			});
			$(pieces).remove();
			if (!show) {
				el.hide();
			}
			done();
		}
	};
	var effectFade = $.effects.effect.fade = function (o, done) {
		var el = $(this),
			mode = $.effects.setMode(el, o.mode || "toggle");
		el.animate({
			opacity: mode
		}, {
			queue: false,
			duration: o.duration,
			easing: o.easing,
			complete: done
		});
	};
	var effectFold = $.effects.effect.fold = function (o, done) {
		var el = $(this),
			props = ["position", "top", "bottom", "left", "right", "height", "width"],
			mode = $.effects.setMode(el, o.mode || "hide"),
			show = mode === "show",
			hide = mode === "hide",
			size = o.size || 15,
			percent = /([0-9]+)%/.exec(size),
			horizFirst = !!o.horizFirst,
			widthFirst = show !== horizFirst,
			ref = widthFirst ? ["width", "height"] : ["height", "width"],
			duration = o.duration / 2,
			wrapper, distance, animation1 = {},
			animation2 = {};
		$.effects.save(el, props);
		el.show();
		wrapper = $.effects.createWrapper(el).css({
			overflow: "hidden"
		});
		distance = widthFirst ? [wrapper.width(), wrapper.height()] : [wrapper.height(), wrapper.width()];
		if (percent) {
			size = parseInt(percent[1], 10) / 100 * distance[hide ? 0 : 1];
		}
		if (show) {
			wrapper.css(horizFirst ? {
				height: 0,
				width: size
			} : {
				height: size,
				width: 0
			});
		}
		animation1[ref[0]] = show ? distance[0] : size;
		animation2[ref[1]] = show ? distance[1] : 0;
		wrapper.animate(animation1, duration, o.easing).animate(animation2, duration, o.easing, function () {
			if (hide) {
				el.hide();
			}
			$.effects.restore(el, props);
			$.effects.removeWrapper(el);
			done();
		});
	};
	var effectHighlight = $.effects.effect.highlight = function (o, done) {
		var elem = $(this),
			props = ["backgroundImage", "backgroundColor", "opacity"],
			mode = $.effects.setMode(elem, o.mode || "show"),
			animation = {
				backgroundColor: elem.css("backgroundColor")
			};
		if (mode === "hide") {
			animation.opacity = 0;
		}
		$.effects.save(elem, props);
		elem.show().css({
			backgroundImage: "none",
			backgroundColor: o.color || "#ffff99"
		}).animate(animation, {
			queue: false,
			duration: o.duration,
			easing: o.easing,
			complete: function () {
				if (mode === "hide") {
					elem.hide();
				}
				$.effects.restore(elem, props);
				done();
			}
		});
	};
	var effectSize = $.effects.effect.size = function (o, done) {
		var original, baseline, factor, el = $(this),
			props0 = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
			props1 = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
			props2 = ["width", "height", "overflow"],
			cProps = ["fontSize"],
			vProps = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
			hProps = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
			mode = $.effects.setMode(el, o.mode || "effect"),
			restore = o.restore || mode !== "effect",
			scale = o.scale || "both",
			origin = o.origin || ["middle", "center"],
			position = el.css("position"),
			props = restore ? props0 : props1,
			zero = {
				height: 0,
				width: 0,
				outerHeight: 0,
				outerWidth: 0
			};
		if (mode === "show") {
			el.show();
		}
		original = {
			height: el.height(),
			width: el.width(),
			outerHeight: el.outerHeight(),
			outerWidth: el.outerWidth()
		};
		if (o.mode === "toggle" && mode === "show") {
			el.from = o.to || zero;
			el.to = o.from || original;
		} else {
			el.from = o.from || (mode === "show" ? zero : original);
			el.to = o.to || (mode === "hide" ? zero : original);
		}
		factor = {
			from: {
				y: el.from.height / original.height,
				x: el.from.width / original.width
			},
			to: {
				y: el.to.height / original.height,
				x: el.to.width / original.width
			}
		};
		if (scale === "box" || scale === "both") {
			if (factor.from.y !== factor.to.y) {
				props = props.concat(vProps);
				el.from = $.effects.setTransition(el, vProps, factor.from.y, el.from);
				el.to = $.effects.setTransition(el, vProps, factor.to.y, el.to);
			}
			if (factor.from.x !== factor.to.x) {
				props = props.concat(hProps);
				el.from = $.effects.setTransition(el, hProps, factor.from.x, el.from);
				el.to = $.effects.setTransition(el, hProps, factor.to.x, el.to);
			}
		}
		if (scale === "content" || scale === "both") {
			if (factor.from.y !== factor.to.y) {
				props = props.concat(cProps).concat(props2);
				el.from = $.effects.setTransition(el, cProps, factor.from.y, el.from);
				el.to = $.effects.setTransition(el, cProps, factor.to.y, el.to);
			}
		}
		$.effects.save(el, props);
		el.show();
		$.effects.createWrapper(el);
		el.css("overflow", "hidden").css(el.from);
		if (origin) {
			baseline = $.effects.getBaseline(origin, original);
			el.from.top = (original.outerHeight - el.outerHeight()) * baseline.y;
			el.from.left = (original.outerWidth - el.outerWidth()) * baseline.x;
			el.to.top = (original.outerHeight - el.to.outerHeight) * baseline.y;
			el.to.left = (original.outerWidth - el.to.outerWidth) * baseline.x;
		}
		el.css(el.from);
		if (scale === "content" || scale === "both") {
			vProps = vProps.concat(["marginTop", "marginBottom"]).concat(cProps);
			hProps = hProps.concat(["marginLeft", "marginRight"]);
			props2 = props0.concat(vProps).concat(hProps);
			el.find("*[width]").each(function () {
				var child = $(this),
					c_original = {
						height: child.height(),
						width: child.width(),
						outerHeight: child.outerHeight(),
						outerWidth: child.outerWidth()
					};
				if (restore) {
					$.effects.save(child, props2);
				}
				child.from = {
					height: c_original.height * factor.from.y,
					width: c_original.width * factor.from.x,
					outerHeight: c_original.outerHeight * factor.from.y,
					outerWidth: c_original.outerWidth * factor.from.x
				};
				child.to = {
					height: c_original.height * factor.to.y,
					width: c_original.width * factor.to.x,
					outerHeight: c_original.height * factor.to.y,
					outerWidth: c_original.width * factor.to.x
				};
				if (factor.from.y !== factor.to.y) {
					child.from = $.effects.setTransition(child, vProps, factor.from.y, child.from);
					child.to = $.effects.setTransition(child, vProps, factor.to.y, child.to);
				}
				if (factor.from.x !== factor.to.x) {
					child.from = $.effects.setTransition(child, hProps, factor.from.x, child.from);
					child.to = $.effects.setTransition(child, hProps, factor.to.x, child.to);
				}
				child.css(child.from);
				child.animate(child.to, o.duration, o.easing, function () {
					if (restore) {
						$.effects.restore(child, props2);
					}
				});
			});
		}
		el.animate(el.to, {
			queue: false,
			duration: o.duration,
			easing: o.easing,
			complete: function () {
				if (el.to.opacity === 0) {
					el.css("opacity", el.from.opacity);
				}
				if (mode === "hide") {
					el.hide();
				}
				$.effects.restore(el, props);
				if (!restore) {
					if (position === "static") {
						el.css({
							position: "relative",
							top: el.to.top,
							left: el.to.left
						});
					} else {
						$.each(["top", "left"], function (idx, pos) {
							el.css(pos, function (_, str) {
								var val = parseInt(str, 10),
									toRef = idx ? el.to.left : el.to.top;
								if (str === "auto") {
									return toRef + "px";
								}
								return val + toRef + "px";
							});
						});
					}
				}
				$.effects.removeWrapper(el);
				done();
			}
		});
	};
	var effectScale = $.effects.effect.scale = function (o, done) {
		var el = $(this),
			options = $.extend(true, {}, o),
			mode = $.effects.setMode(el, o.mode || "effect"),
			percent = parseInt(o.percent, 10) || (parseInt(o.percent, 10) === 0 ? 0 : (mode === "hide" ? 0 : 100)),
			direction = o.direction || "both",
			origin = o.origin,
			original = {
				height: el.height(),
				width: el.width(),
				outerHeight: el.outerHeight(),
				outerWidth: el.outerWidth()
			},
			factor = {
				y: direction !== "horizontal" ? (percent / 100) : 1,
				x: direction !== "vertical" ? (percent / 100) : 1
			};
		options.effect = "size";
		options.queue = false;
		options.complete = done;
		if (mode !== "effect") {
			options.origin = origin || ["middle", "center"];
			options.restore = true;
		}
		options.from = o.from || (mode === "show" ? {
			height: 0,
			width: 0,
			outerHeight: 0,
			outerWidth: 0
		} : original);
		options.to = {
			height: original.height * factor.y,
			width: original.width * factor.x,
			outerHeight: original.outerHeight * factor.y,
			outerWidth: original.outerWidth * factor.x
		};
		if (options.fade) {
			if (mode === "show") {
				options.from.opacity = 0;
				options.to.opacity = 1;
			}
			if (mode === "hide") {
				options.from.opacity = 1;
				options.to.opacity = 0;
			}
		}
		el.effect(options);
	};
	var effectPuff = $.effects.effect.puff = function (o, done) {
		var elem = $(this),
			mode = $.effects.setMode(elem, o.mode || "hide"),
			hide = mode === "hide",
			percent = parseInt(o.percent, 10) || 150,
			factor = percent / 100,
			original = {
				height: elem.height(),
				width: elem.width(),
				outerHeight: elem.outerHeight(),
				outerWidth: elem.outerWidth()
			};
		$.extend(o, {
			effect: "scale",
			queue: false,
			fade: true,
			mode: mode,
			complete: done,
			percent: hide ? percent : 100,
			from: hide ? original : {
				height: original.height * factor,
				width: original.width * factor,
				outerHeight: original.outerHeight * factor,
				outerWidth: original.outerWidth * factor
			}
		});
		elem.effect(o);
	};
	var effectPulsate = $.effects.effect.pulsate = function (o, done) {
		var elem = $(this),
			mode = $.effects.setMode(elem, o.mode || "show"),
			show = mode === "show",
			hide = mode === "hide",
			showhide = (show || mode === "hide"),
			anims = ((o.times || 5) * 2) + (showhide ? 1 : 0),
			duration = o.duration / anims,
			animateTo = 0,
			queue = elem.queue(),
			queuelen = queue.length,
			i;
		if (show || !elem.is(":visible")) {
			elem.css("opacity", 0).show();
			animateTo = 1;
		}
		for (i = 1; i < anims; i++) {
			elem.animate({
				opacity: animateTo
			}, duration, o.easing);
			animateTo = 1 - animateTo;
		}
		elem.animate({
			opacity: animateTo
		}, duration, o.easing);
		elem.queue(function () {
			if (hide) {
				elem.hide();
			}
			done();
		});
		if (queuelen > 1) {
			queue.splice.apply(queue, [1, 0].concat(queue.splice(queuelen, anims + 1)));
		}
		elem.dequeue();
	};
	var effectShake = $.effects.effect.shake = function (o, done) {
		var el = $(this),
			props = ["position", "top", "bottom", "left", "right", "height", "width"],
			mode = $.effects.setMode(el, o.mode || "effect"),
			direction = o.direction || "left",
			distance = o.distance || 20,
			times = o.times || 3,
			anims = times * 2 + 1,
			speed = Math.round(o.duration / anims),
			ref = (direction === "up" || direction === "down") ? "top" : "left",
			positiveMotion = (direction === "up" || direction === "left"),
			animation = {},
			animation1 = {},
			animation2 = {},
			i, queue = el.queue(),
			queuelen = queue.length;
		$.effects.save(el, props);
		el.show();
		$.effects.createWrapper(el);
		animation[ref] = (positiveMotion ? "-=" : "+=") + distance;
		animation1[ref] = (positiveMotion ? "+=" : "-=") + distance * 2;
		animation2[ref] = (positiveMotion ? "-=" : "+=") + distance * 2;
		el.animate(animation, speed, o.easing);
		for (i = 1; i < times; i++) {
			el.animate(animation1, speed, o.easing).animate(animation2, speed, o.easing);
		}
		el.animate(animation1, speed, o.easing).animate(animation, speed / 2, o.easing).queue(function () {
			if (mode === "hide") {
				el.hide();
			}
			$.effects.restore(el, props);
			$.effects.removeWrapper(el);
			done();
		});
		if (queuelen > 1) {
			queue.splice.apply(queue, [1, 0].concat(queue.splice(queuelen, anims + 1)));
		}
		el.dequeue();
	};
	var effectSlide = $.effects.effect.slide = function (o, done) {
		var el = $(this),
			props = ["position", "top", "bottom", "left", "right", "width", "height"],
			mode = $.effects.setMode(el, o.mode || "show"),
			show = mode === "show",
			direction = o.direction || "left",
			ref = (direction === "up" || direction === "down") ? "top" : "left",
			positiveMotion = (direction === "up" || direction === "left"),
			distance, animation = {};
		$.effects.save(el, props);
		el.show();
		distance = o.distance || el[ref === "top" ? "outerHeight" : "outerWidth"](true);
		$.effects.createWrapper(el).css({
			overflow: "hidden"
		});
		if (show) {
			el.css(ref, positiveMotion ? (isNaN(distance) ? "-" + distance : -distance) : distance);
		}
		animation[ref] = (show ? (positiveMotion ? "+=" : "-=") : (positiveMotion ? "-=" : "+=")) + distance;
		el.animate(animation, {
			queue: false,
			duration: o.duration,
			easing: o.easing,
			complete: function () {
				if (mode === "hide") {
					el.hide();
				}
				$.effects.restore(el, props);
				$.effects.removeWrapper(el);
				done();
			}
		});
	};
	var effectTransfer = $.effects.effect.transfer = function (o, done) {
		var elem = $(this),
			target = $(o.to),
			targetFixed = target.css("position") === "fixed",
			body = $("body"),
			fixTop = targetFixed ? body.scrollTop() : 0,
			fixLeft = targetFixed ? body.scrollLeft() : 0,
			endPosition = target.offset(),
			animation = {
				top: endPosition.top - fixTop,
				left: endPosition.left - fixLeft,
				height: target.innerHeight(),
				width: target.innerWidth()
			},
			startPosition = elem.offset(),
			transfer = $("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(o.className).css({
				top: startPosition.top - fixTop,
				left: startPosition.left - fixLeft,
				height: elem.innerHeight(),
				width: elem.innerWidth(),
				position: targetFixed ? "fixed" : "absolute"
			}).animate(animation, o.duration, o.easing, function () {
				transfer.remove();
				done();
			});
	};
	var progressbar = $.widget("ui.progressbar", {
		version: "1.11.4",
		options: {
			max: 100,
			value: 0,
			change: null,
			complete: null
		},
		min: 0,
		_create: function () {
			this.oldValue = this.options.value = this._constrainedValue();
			this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
				role: "progressbar",
				"aria-valuemin": this.min
			});
			this.valueDiv = $("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
			this._refreshValue();
		},
		_destroy: function () {
			this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
			this.valueDiv.remove();
		},
		value: function (newValue) {
			if (newValue === undefined) {
				return this.options.value;
			}
			this.options.value = this._constrainedValue(newValue);
			this._refreshValue();
		},
		_constrainedValue: function (newValue) {
			if (newValue === undefined) {
				newValue = this.options.value;
			}
			this.indeterminate = newValue === false;
			if (typeof newValue !== "number") {
				newValue = 0;
			}
			return this.indeterminate ? false : Math.min(this.options.max, Math.max(this.min, newValue));
		},
		_setOptions: function (options) {
			var value = options.value;
			delete options.value;
			this._super(options);
			this.options.value = this._constrainedValue(value);
			this._refreshValue();
		},
		_setOption: function (key, value) {
			if (key === "max") {
				value = Math.max(this.min, value);
			}
			if (key === "disabled") {
				this.element.toggleClass("ui-state-disabled", !!value).attr("aria-disabled", value);
			}
			this._super(key, value);
		},
		_percentage: function () {
			return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
		},
		_refreshValue: function () {
			var value = this.options.value,
				percentage = this._percentage();
			this.valueDiv.toggle(this.indeterminate || value > this.min).toggleClass("ui-corner-right", value === this.options.max).width(percentage.toFixed(0) + "%");
			this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
			if (this.indeterminate) {
				this.element.removeAttr("aria-valuenow");
				if (!this.overlayDiv) {
					this.overlayDiv = $("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv);
				}
			} else {
				this.element.attr({
					"aria-valuemax": this.options.max,
					"aria-valuenow": value
				});
				if (this.overlayDiv) {
					this.overlayDiv.remove();
					this.overlayDiv = null;
				}
			}
			if (this.oldValue !== value) {
				this.oldValue = value;
				this._trigger("change");
			}
			if (value === this.options.max) {
				this._trigger("complete");
			}
		}
	});
	var selectable = $.widget("ui.selectable", $.ui.mouse, {
		version: "1.11.4",
		options: {
			appendTo: "body",
			autoRefresh: true,
			distance: 0,
			filter: "*",
			tolerance: "touch",
			selected: null,
			selecting: null,
			start: null,
			stop: null,
			unselected: null,
			unselecting: null
		},
		_create: function () {
			var selectees, that = this;
			this.element.addClass("ui-selectable");
			this.dragged = false;
			this.refresh = function () {
				selectees = $(that.options.filter, that.element[0]);
				selectees.addClass("ui-selectee");
				selectees.each(function () {
					var $this = $(this),
						pos = $this.offset();
					$.data(this, "selectable-item", {
						element: this,
						$element: $this,
						left: pos.left,
						top: pos.top,
						right: pos.left + $this.outerWidth(),
						bottom: pos.top + $this.outerHeight(),
						startselected: false,
						selected: $this.hasClass("ui-selected"),
						selecting: $this.hasClass("ui-selecting"),
						unselecting: $this.hasClass("ui-unselecting")
					});
				});
			};
			this.refresh();
			this.selectees = selectees.addClass("ui-selectee");
			this._mouseInit();
			this.helper = $("<div class='ui-selectable-helper'></div>");
		},
		_destroy: function () {
			this.selectees.removeClass("ui-selectee").removeData("selectable-item");
			this.element.removeClass("ui-selectable ui-selectable-disabled");
			this._mouseDestroy();
		},
		_mouseStart: function (event) {
			var that = this,
				options = this.options;
			this.opos = [event.pageX, event.pageY];
			if (this.options.disabled) {
				return;
			}
			this.selectees = $(options.filter, this.element[0]);
			this._trigger("start", event);
			$(options.appendTo).append(this.helper);
			this.helper.css({
				"left": event.pageX,
				"top": event.pageY,
				"width": 0,
				"height": 0
			});
			if (options.autoRefresh) {
				this.refresh();
			}
			this.selectees.filter(".ui-selected").each(function () {
				var selectee = $.data(this, "selectable-item");
				selectee.startselected = true;
				if (!event.metaKey && !event.ctrlKey) {
					selectee.$element.removeClass("ui-selected");
					selectee.selected = false;
					selectee.$element.addClass("ui-unselecting");
					selectee.unselecting = true;
					that._trigger("unselecting", event, {
						unselecting: selectee.element
					});
				}
			});
			$(event.target).parents().addBack().each(function () {
				var doSelect, selectee = $.data(this, "selectable-item");
				if (selectee) {
					doSelect = (!event.metaKey && !event.ctrlKey) || !selectee.$element.hasClass("ui-selected");
					selectee.$element.removeClass(doSelect ? "ui-unselecting" : "ui-selected").addClass(doSelect ? "ui-selecting" : "ui-unselecting");
					selectee.unselecting = !doSelect;
					selectee.selecting = doSelect;
					selectee.selected = doSelect;
					if (doSelect) {
						that._trigger("selecting", event, {
							selecting: selectee.element
						});
					} else {
						that._trigger("unselecting", event, {
							unselecting: selectee.element
						});
					}
					return false;
				}
			});
		},
		_mouseDrag: function (event) {
			this.dragged = true;
			if (this.options.disabled) {
				return;
			}
			var tmp, that = this,
				options = this.options,
				x1 = this.opos[0],
				y1 = this.opos[1],
				x2 = event.pageX,
				y2 = event.pageY;
			if (x1 > x2) {
				tmp = x2;
				x2 = x1;
				x1 = tmp;
			}
			if (y1 > y2) {
				tmp = y2;
				y2 = y1;
				y1 = tmp;
			}
			this.helper.css({
				left: x1,
				top: y1,
				width: x2 - x1,
				height: y2 - y1
			});
			this.selectees.each(function () {
				var selectee = $.data(this, "selectable-item"),
					hit = false;
				if (!selectee || selectee.element === that.element[0]) {
					return;
				}
				if (options.tolerance === "touch") {
					hit = (!(selectee.left > x2 || selectee.right < x1 || selectee.top > y2 || selectee.bottom < y1));
				} else if (options.tolerance === "fit") {
					hit = (selectee.left > x1 && selectee.right < x2 && selectee.top > y1 && selectee.bottom < y2);
				}
				if (hit) {
					if (selectee.selected) {
						selectee.$element.removeClass("ui-selected");
						selectee.selected = false;
					}
					if (selectee.unselecting) {
						selectee.$element.removeClass("ui-unselecting");
						selectee.unselecting = false;
					}
					if (!selectee.selecting) {
						selectee.$element.addClass("ui-selecting");
						selectee.selecting = true;
						that._trigger("selecting", event, {
							selecting: selectee.element
						});
					}
				} else {
					if (selectee.selecting) {
						if ((event.metaKey || event.ctrlKey) && selectee.startselected) {
							selectee.$element.removeClass("ui-selecting");
							selectee.selecting = false;
							selectee.$element.addClass("ui-selected");
							selectee.selected = true;
						} else {
							selectee.$element.removeClass("ui-selecting");
							selectee.selecting = false;
							if (selectee.startselected) {
								selectee.$element.addClass("ui-unselecting");
								selectee.unselecting = true;
							}
							that._trigger("unselecting", event, {
								unselecting: selectee.element
							});
						}
					}
					if (selectee.selected) {
						if (!event.metaKey && !event.ctrlKey && !selectee.startselected) {
							selectee.$element.removeClass("ui-selected");
							selectee.selected = false;
							selectee.$element.addClass("ui-unselecting");
							selectee.unselecting = true;
							that._trigger("unselecting", event, {
								unselecting: selectee.element
							});
						}
					}
				}
			});
			return false;
		},
		_mouseStop: function (event) {
			var that = this;
			this.dragged = false;
			$(".ui-unselecting", this.element[0]).each(function () {
				var selectee = $.data(this, "selectable-item");
				selectee.$element.removeClass("ui-unselecting");
				selectee.unselecting = false;
				selectee.startselected = false;
				that._trigger("unselected", event, {
					unselected: selectee.element
				});
			});
			$(".ui-selecting", this.element[0]).each(function () {
				var selectee = $.data(this, "selectable-item");
				selectee.$element.removeClass("ui-selecting").addClass("ui-selected");
				selectee.selecting = false;
				selectee.selected = true;
				selectee.startselected = true;
				that._trigger("selected", event, {
					selected: selectee.element
				});
			});
			this._trigger("stop", event);
			this.helper.remove();
			return false;
		}
	});
	var selectmenu = $.widget("ui.selectmenu", {
		version: "1.11.4",
		defaultElement: "<select>",
		options: {
			appendTo: null,
			disabled: null,
			icons: {
				button: "ui-icon-triangle-1-s"
			},
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			width: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			select: null
		},
		_create: function () {
			var selectmenuId = this.element.uniqueId().attr("id");
			this.ids = {
				element: selectmenuId,
				button: selectmenuId + "-button",
				menu: selectmenuId + "-menu"
			};
			this._drawButton();
			this._drawMenu();
			if (this.options.disabled) {
				this.disable();
			}
		},
		_drawButton: function () {
			var that = this;
			this.label = $("label[for='" + this.ids.element + "']").attr("for", this.ids.button);
			this._on(this.label, {
				click: function (event) {
					this.button.focus();
					event.preventDefault();
				}
			});
			this.element.hide();
			this.button = $("<span>", {
				"class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
				tabindex: this.options.disabled ? -1 : 0,
				id: this.ids.button,
				role: "combobox",
				"aria-expanded": "false",
				"aria-autocomplete": "list",
				"aria-owns": this.ids.menu,
				"aria-haspopup": "true"
			}).insertAfter(this.element);
			$("<span>", {
				"class": "ui-icon " + this.options.icons.button
			}).prependTo(this.button);
			this.buttonText = $("<span>", {
				"class": "ui-selectmenu-text"
			}).appendTo(this.button);
			this._setText(this.buttonText, this.element.find("option:selected").text());
			this._resizeButton();
			this._on(this.button, this._buttonEvents);
			this.button.one("focusin", function () {
				if (!that.menuItems) {
					that._refreshMenu();
				}
			});
			this._hoverable(this.button);
			this._focusable(this.button);
		},
		_drawMenu: function () {
			var that = this;
			this.menu = $("<ul>", {
				"aria-hidden": "true",
				"aria-labelledby": this.ids.button,
				id: this.ids.menu
			});
			this.menuWrap = $("<div>", {
				"class": "ui-selectmenu-menu ui-front"
			}).append(this.menu).appendTo(this._appendTo());
			this.menuInstance = this.menu.menu({
				role: "listbox",
				select: function (event, ui) {
					event.preventDefault();
					that._setSelection();
					that._select(ui.item.data("ui-selectmenu-item"), event);
				},
				focus: function (event, ui) {
					var item = ui.item.data("ui-selectmenu-item");
					if (that.focusIndex != null && item.index !== that.focusIndex) {
						that._trigger("focus", event, {
							item: item
						});
						if (!that.isOpen) {
							that._select(item, event);
						}
					}
					that.focusIndex = item.index;
					that.button.attr("aria-activedescendant", that.menuItems.eq(item.index).attr("id"));
				}
			}).menu("instance");
			this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all");
			this.menuInstance._off(this.menu, "mouseleave");
			this.menuInstance._closeOnDocumentClick = function () {
				return false;
			};
			this.menuInstance._isDivider = function () {
				return false;
			};
		},
		refresh: function () {
			this._refreshMenu();
			this._setText(this.buttonText, this._getSelectedItem().text());
			if (!this.options.width) {
				this._resizeButton();
			}
		},
		_refreshMenu: function () {
			this.menu.empty();
			var item, options = this.element.find("option");
			if (!options.length) {
				return;
			}
			this._parseOptions(options);
			this._renderMenu(this.menu, this.items);
			this.menuInstance.refresh();
			this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup");
			item = this._getSelectedItem();
			this.menuInstance.focus(null, item);
			this._setAria(item.data("ui-selectmenu-item"));
			this._setOption("disabled", this.element.prop("disabled"));
		},
		open: function (event) {
			if (this.options.disabled) {
				return;
			}
			if (!this.menuItems) {
				this._refreshMenu();
			} else {
				this.menu.find(".ui-state-focus").removeClass("ui-state-focus");
				this.menuInstance.focus(null, this._getSelectedItem());
			}
			this.isOpen = true;
			this._toggleAttr();
			this._resizeMenu();
			this._position();
			this._on(this.document, this._documentClick);
			this._trigger("open", event);
		},
		_position: function () {
			this.menuWrap.position($.extend({ of: this.button
			}, this.options.position));
		},
		close: function (event) {
			if (!this.isOpen) {
				return;
			}
			this.isOpen = false;
			this._toggleAttr();
			this.range = null;
			this._off(this.document);
			this._trigger("close", event);
		},
		widget: function () {
			return this.button;
		},
		menuWidget: function () {
			return this.menu;
		},
		_renderMenu: function (ul, items) {
			var that = this,
				currentOptgroup = "";
			$.each(items, function (index, item) {
				if (item.optgroup !== currentOptgroup) {
					$("<li>", {
						"class": "ui-selectmenu-optgroup ui-menu-divider" + (item.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
						text: item.optgroup
					}).appendTo(ul);
					currentOptgroup = item.optgroup;
				}
				that._renderItemData(ul, item);
			});
		},
		_renderItemData: function (ul, item) {
			return this._renderItem(ul, item).data("ui-selectmenu-item", item);
		},
		_renderItem: function (ul, item) {
			var li = $("<li>");
			if (item.disabled) {
				li.addClass("ui-state-disabled");
			}
			this._setText(li, item.label);
			return li.appendTo(ul);
		},
		_setText: function (element, value) {
			if (value) {
				element.text(value);
			} else {
				element.html("&#160;");
			}
		},
		_move: function (direction, event) {
			var item, next, filter = ".ui-menu-item";
			if (this.isOpen) {
				item = this.menuItems.eq(this.focusIndex);
			} else {
				item = this.menuItems.eq(this.element[0].selectedIndex);
				filter += ":not(.ui-state-disabled)";
			}
			if (direction === "first" || direction === "last") {
				next = item[direction === "first" ? "prevAll" : "nextAll"](filter).eq(-1);
			} else {
				next = item[direction + "All"](filter).eq(0);
			}
			if (next.length) {
				this.menuInstance.focus(event, next);
			}
		},
		_getSelectedItem: function () {
			return this.menuItems.eq(this.element[0].selectedIndex);
		},
		_toggle: function (event) {
			this[this.isOpen ? "close" : "open"](event);
		},
		_setSelection: function () {
			var selection;
			if (!this.range) {
				return;
			}
			if (window.getSelection) {
				selection = window.getSelection();
				selection.removeAllRanges();
				selection.addRange(this.range);
			} else {
				this.range.select();
			}
			this.button.focus();
		},
		_documentClick: {
			mousedown: function (event) {
				if (!this.isOpen) {
					return;
				}
				if (!$(event.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length) {
					this.close(event);
				}
			}
		},
		_buttonEvents: {
			mousedown: function () {
				var selection;
				if (window.getSelection) {
					selection = window.getSelection();
					if (selection.rangeCount) {
						this.range = selection.getRangeAt(0);
					}
				} else {
					this.range = document.selection.createRange();
				}
			},
			click: function (event) {
				this._setSelection();
				this._toggle(event);
			},
			keydown: function (event) {
				var preventDefault = true;
				switch (event.keyCode) {
					case $.ui.keyCode.TAB:
					case $.ui.keyCode.ESCAPE:
						this.close(event);
						preventDefault = false;
						break;
					case $.ui.keyCode.ENTER:
						if (this.isOpen) {
							this._selectFocusedItem(event);
						}
						break;
					case $.ui.keyCode.UP:
						if (event.altKey) {
							this._toggle(event);
						} else {
							this._move("prev", event);
						}
						break;
					case $.ui.keyCode.DOWN:
						if (event.altKey) {
							this._toggle(event);
						} else {
							this._move("next", event);
						}
						break;
					case $.ui.keyCode.SPACE:
						if (this.isOpen) {
							this._selectFocusedItem(event);
						} else {
							this._toggle(event);
						}
						break;
					case $.ui.keyCode.LEFT:
						this._move("prev", event);
						break;
					case $.ui.keyCode.RIGHT:
						this._move("next", event);
						break;
					case $.ui.keyCode.HOME:
					case $.ui.keyCode.PAGE_UP:
						this._move("first", event);
						break;
					case $.ui.keyCode.END:
					case $.ui.keyCode.PAGE_DOWN:
						this._move("last", event);
						break;
					default:
						this.menu.trigger(event);
						preventDefault = false;
				}
				if (preventDefault) {
					event.preventDefault();
				}
			}
		},
		_selectFocusedItem: function (event) {
			var item = this.menuItems.eq(this.focusIndex);
			if (!item.hasClass("ui-state-disabled")) {
				this._select(item.data("ui-selectmenu-item"), event);
			}
		},
		_select: function (item, event) {
			var oldIndex = this.element[0].selectedIndex;
			this.element[0].selectedIndex = item.index;
			this._setText(this.buttonText, item.label);
			this._setAria(item);
			this._trigger("select", event, {
				item: item
			});
			if (item.index !== oldIndex) {
				this._trigger("change", event, {
					item: item
				});
			}
			this.close(event);
		},
		_setAria: function (item) {
			var id = this.menuItems.eq(item.index).attr("id");
			this.button.attr({
				"aria-labelledby": id,
				"aria-activedescendant": id
			});
			this.menu.attr("aria-activedescendant", id);
		},
		_setOption: function (key, value) {
			if (key === "icons") {
				this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(value.button);
			}
			this._super(key, value);
			if (key === "appendTo") {
				this.menuWrap.appendTo(this._appendTo());
			}
			if (key === "disabled") {
				this.menuInstance.option("disabled", value);
				this.button.toggleClass("ui-state-disabled", value).attr("aria-disabled", value);
				this.element.prop("disabled", value);
				if (value) {
					this.button.attr("tabindex", -1);
					this.close();
				} else {
					this.button.attr("tabindex", 0);
				}
			}
			if (key === "width") {
				this._resizeButton();
			}
		},
		_appendTo: function () {
			var element = this.options.appendTo;
			if (element) {
				element = element.jquery || element.nodeType ? $(element) : this.document.find(element).eq(0);
			}
			if (!element || !element[0]) {
				element = this.element.closest(".ui-front");
			}
			if (!element.length) {
				element = this.document[0].body;
			}
			return element;
		},
		_toggleAttr: function () {
			this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen);
			this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen);
			this.menu.attr("aria-hidden", !this.isOpen);
		},
		_resizeButton: function () {
			var width = this.options.width;
			if (!width) {
				width = this.element.show().outerWidth();
				this.element.hide();
			}
			this.button.outerWidth(width);
		},
		_resizeMenu: function () {
			this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
		},
		_getCreateOptions: function () {
			return {
				disabled: this.element.prop("disabled")
			};
		},
		_parseOptions: function (options) {
			var data = [];
			options.each(function (index, item) {
				var option = $(item),
					optgroup = option.parent("optgroup");
				data.push({
					element: option,
					index: index,
					value: option.val(),
					label: option.text(),
					optgroup: optgroup.attr("label") || "",
					disabled: optgroup.prop("disabled") || option.prop("disabled")
				});
			});
			this.items = data;
		},
		_destroy: function () {
			this.menuWrap.remove();
			this.button.remove();
			this.element.show();
			this.element.removeUniqueId();
			this.label.attr("for", this.ids.element);
		}
	});
	var slider = $.widget("ui.slider", $.ui.mouse, {
		version: "1.11.4",
		widgetEventPrefix: "slide",
		options: {
			animate: false,
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: false,
			step: 1,
			value: 0,
			values: null,
			change: null,
			slide: null,
			start: null,
			stop: null
		},
		numPages: 5,
		_create: function () {
			this._keySliding = false;
			this._mouseSliding = false;
			this._animateOff = true;
			this._handleIndex = null;
			this._detectOrientation();
			this._mouseInit();
			this._calculateNewMax();
			this.element.addClass("ui-slider" + " ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all");
			this._refresh();
			this._setOption("disabled", this.options.disabled);
			this._animateOff = false;
		},
		_refresh: function () {
			this._createRange();
			this._createHandles();
			this._setupEvents();
			this._refreshValue();
		},
		_createHandles: function () {
			var i, handleCount, options = this.options,
				existingHandles = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
				handle = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
				handles = [];
			handleCount = (options.values && options.values.length) || 1;
			if (existingHandles.length > handleCount) {
				existingHandles.slice(handleCount).remove();
				existingHandles = existingHandles.slice(0, handleCount);
			}
			for (i = existingHandles.length; i < handleCount; i++) {
				handles.push(handle);
			}
			this.handles = existingHandles.add($(handles.join("")).appendTo(this.element));
			this.handle = this.handles.eq(0);
			this.handles.each(function (i) {
				$(this).data("ui-slider-handle-index", i);
			});
		},
		_createRange: function () {
			var options = this.options,
				classes = "";
			if (options.range) {
				if (options.range === true) {
					if (!options.values) {
						options.values = [this._valueMin(), this._valueMin()];
					} else if (options.values.length && options.values.length !== 2) {
						options.values = [options.values[0], options.values[0]];
					} else if ($.isArray(options.values)) {
						options.values = options.values.slice(0);
					}
				}
				if (!this.range || !this.range.length) {
					this.range = $("<div></div>").appendTo(this.element);
					classes = "ui-slider-range" + " ui-widget-header ui-corner-all";
				} else {
					this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
						"left": "",
						"bottom": ""
					});
				}
				this.range.addClass(classes + ((options.range === "min" || options.range === "max") ? " ui-slider-range-" + options.range : ""));
			} else {
				if (this.range) {
					this.range.remove();
				}
				this.range = null;
			}
		},
		_setupEvents: function () {
			this._off(this.handles);
			this._on(this.handles, this._handleEvents);
			this._hoverable(this.handles);
			this._focusable(this.handles);
		},
		_destroy: function () {
			this.handles.remove();
			if (this.range) {
				this.range.remove();
			}
			this.element.removeClass("ui-slider" + " ui-slider-horizontal" + " ui-slider-vertical" + " ui-widget" + " ui-widget-content" + " ui-corner-all");
			this._mouseDestroy();
		},
		_mouseCapture: function (event) {
			var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle, that = this,
				o = this.options;
			if (o.disabled) {
				return false;
			}
			this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			};
			this.elementOffset = this.element.offset();
			position = {
				x: event.pageX,
				y: event.pageY
			};
			normValue = this._normValueFromMouse(position);
			distance = this._valueMax() - this._valueMin() + 1;
			this.handles.each(function (i) {
				var thisDistance = Math.abs(normValue - that.values(i));
				if ((distance > thisDistance) || (distance === thisDistance && (i === that._lastChangedValue || that.values(i) === o.min))) {
					distance = thisDistance;
					closestHandle = $(this);
					index = i;
				}
			});
			allowed = this._start(event, index);
			if (allowed === false) {
				return false;
			}
			this._mouseSliding = true;
			this._handleIndex = index;
			closestHandle.addClass("ui-state-active").focus();
			offset = closestHandle.offset();
			mouseOverHandle = !$(event.target).parents().addBack().is(".ui-slider-handle");
			this._clickOffset = mouseOverHandle ? {
				left: 0,
				top: 0
			} : {
				left: event.pageX - offset.left - (closestHandle.width() / 2),
				top: event.pageY - offset.top - (closestHandle.height() / 2) - (parseInt(closestHandle.css("borderTopWidth"), 10) || 0) - (parseInt(closestHandle.css("borderBottomWidth"), 10) || 0) + (parseInt(closestHandle.css("marginTop"), 10) || 0)
			};
			if (!this.handles.hasClass("ui-state-hover")) {
				this._slide(event, index, normValue);
			}
			this._animateOff = true;
			return true;
		},
		_mouseStart: function () {
			return true;
		},
		_mouseDrag: function (event) {
			var position = {
					x: event.pageX,
					y: event.pageY
				},
				normValue = this._normValueFromMouse(position);
			this._slide(event, this._handleIndex, normValue);
			return false;
		},
		_mouseStop: function (event) {
			this.handles.removeClass("ui-state-active");
			this._mouseSliding = false;
			this._stop(event, this._handleIndex);
			this._change(event, this._handleIndex);
			this._handleIndex = null;
			this._clickOffset = null;
			this._animateOff = false;
			return false;
		},
		_detectOrientation: function () {
			this.orientation = (this.options.orientation === "vertical") ? "vertical" : "horizontal";
		},
		_normValueFromMouse: function (position) {
			var pixelTotal, pixelMouse, percentMouse, valueTotal, valueMouse;
			if (this.orientation === "horizontal") {
				pixelTotal = this.elementSize.width;
				pixelMouse = position.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0);
			} else {
				pixelTotal = this.elementSize.height;
				pixelMouse = position.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0);
			}
			percentMouse = (pixelMouse / pixelTotal);
			if (percentMouse > 1) {
				percentMouse = 1;
			}
			if (percentMouse < 0) {
				percentMouse = 0;
			}
			if (this.orientation === "vertical") {
				percentMouse = 1 - percentMouse;
			}
			valueTotal = this._valueMax() - this._valueMin();
			valueMouse = this._valueMin() + percentMouse * valueTotal;
			return this._trimAlignValue(valueMouse);
		},
		_start: function (event, index) {
			var uiHash = {
				handle: this.handles[index],
				value: this.value()
			};
			if (this.options.values && this.options.values.length) {
				uiHash.value = this.values(index);
				uiHash.values = this.values();
			}
			return this._trigger("start", event, uiHash);
		},
		_slide: function (event, index, newVal) {
			var otherVal, newValues, allowed;
			if (this.options.values && this.options.values.length) {
				otherVal = this.values(index ? 0 : 1);
				if ((this.options.values.length === 2 && this.options.range === true) && ((index === 0 && newVal > otherVal) || (index === 1 && newVal < otherVal))) {
					newVal = otherVal;
				}
				if (newVal !== this.values(index)) {
					newValues = this.values();
					newValues[index] = newVal;
					allowed = this._trigger("slide", event, {
						handle: this.handles[index],
						value: newVal,
						values: newValues
					});
					otherVal = this.values(index ? 0 : 1);
					if (allowed !== false) {
						this.values(index, newVal);
					}
				}
			} else {
				if (newVal !== this.value()) {
					allowed = this._trigger("slide", event, {
						handle: this.handles[index],
						value: newVal
					});
					if (allowed !== false) {
						this.value(newVal);
					}
				}
			}
		},
		_stop: function (event, index) {
			var uiHash = {
				handle: this.handles[index],
				value: this.value()
			};
			if (this.options.values && this.options.values.length) {
				uiHash.value = this.values(index);
				uiHash.values = this.values();
			}
			this._trigger("stop", event, uiHash);
		},
		_change: function (event, index) {
			if (!this._keySliding && !this._mouseSliding) {
				var uiHash = {
					handle: this.handles[index],
					value: this.value()
				};
				if (this.options.values && this.options.values.length) {
					uiHash.value = this.values(index);
					uiHash.values = this.values();
				}
				this._lastChangedValue = index;
				this._trigger("change", event, uiHash);
			}
		},
		value: function (newValue) {
			if (arguments.length) {
				this.options.value = this._trimAlignValue(newValue);
				this._refreshValue();
				this._change(null, 0);
				return;
			}
			return this._value();
		},
		values: function (index, newValue) {
			var vals, newValues, i;
			if (arguments.length > 1) {
				this.options.values[index] = this._trimAlignValue(newValue);
				this._refreshValue();
				this._change(null, index);
				return;
			}
			if (arguments.length) {
				if ($.isArray(arguments[0])) {
					vals = this.options.values;
					newValues = arguments[0];
					for (i = 0; i < vals.length; i += 1) {
						vals[i] = this._trimAlignValue(newValues[i]);
						this._change(null, i);
					}
					this._refreshValue();
				} else {
					if (this.options.values && this.options.values.length) {
						return this._values(index);
					} else {
						return this.value();
					}
				}
			} else {
				return this._values();
			}
		},
		_setOption: function (key, value) {
			var i, valsLength = 0;
			if (key === "range" && this.options.range === true) {
				if (value === "min") {
					this.options.value = this._values(0);
					this.options.values = null;
				} else if (value === "max") {
					this.options.value = this._values(this.options.values.length - 1);
					this.options.values = null;
				}
			}
			if ($.isArray(this.options.values)) {
				valsLength = this.options.values.length;
			}
			if (key === "disabled") {
				this.element.toggleClass("ui-state-disabled", !!value);
			}
			this._super(key, value);
			switch (key) {
				case "orientation":
					this._detectOrientation();
					this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
					this._refreshValue();
					this.handles.css(value === "horizontal" ? "bottom" : "left", "");
					break;
				case "value":
					this._animateOff = true;
					this._refreshValue();
					this._change(null, 0);
					this._animateOff = false;
					break;
				case "values":
					this._animateOff = true;
					this._refreshValue();
					for (i = 0; i < valsLength; i += 1) {
						this._change(null, i);
					}
					this._animateOff = false;
					break;
				case "step":
				case "min":
				case "max":
					this._animateOff = true;
					this._calculateNewMax();
					this._refreshValue();
					this._animateOff = false;
					break;
				case "range":
					this._animateOff = true;
					this._refresh();
					this._animateOff = false;
					break;
			}
		},
		_value: function () {
			var val = this.options.value;
			val = this._trimAlignValue(val);
			return val;
		},
		_values: function (index) {
			var val, vals, i;
			if (arguments.length) {
				val = this.options.values[index];
				val = this._trimAlignValue(val);
				return val;
			} else if (this.options.values && this.options.values.length) {
				vals = this.options.values.slice();
				for (i = 0; i < vals.length; i += 1) {
					vals[i] = this._trimAlignValue(vals[i]);
				}
				return vals;
			} else {
				return [];
			}
		},
		_trimAlignValue: function (val) {
			if (val <= this._valueMin()) {
				return this._valueMin();
			}
			if (val >= this._valueMax()) {
				return this._valueMax();
			}
			var step = (this.options.step > 0) ? this.options.step : 1,
				valModStep = (val - this._valueMin()) % step,
				alignValue = val - valModStep;
			if (Math.abs(valModStep) * 2 >= step) {
				alignValue += (valModStep > 0) ? step : (-step);
			}
			return parseFloat(alignValue.toFixed(5));
		},
		_calculateNewMax: function () {
			var max = this.options.max,
				min = this._valueMin(),
				step = this.options.step,
				aboveMin = Math.floor((+(max - min).toFixed(this._precision())) / step) * step;
			max = aboveMin + min;
			this.max = parseFloat(max.toFixed(this._precision()));
		},
		_precision: function () {
			var precision = this._precisionOf(this.options.step);
			if (this.options.min !== null) {
				precision = Math.max(precision, this._precisionOf(this.options.min));
			}
			return precision;
		},
		_precisionOf: function (num) {
			var str = num.toString(),
				decimal = str.indexOf(".");
			return decimal === -1 ? 0 : str.length - decimal - 1;
		},
		_valueMin: function () {
			return this.options.min;
		},
		_valueMax: function () {
			return this.max;
		},
		_refreshValue: function () {
			var lastValPercent, valPercent, value, valueMin, valueMax, oRange = this.options.range,
				o = this.options,
				that = this,
				animate = (!this._animateOff) ? o.animate : false,
				_set = {};
			if (this.options.values && this.options.values.length) {
				this.handles.each(function (i) {
					valPercent = (that.values(i) - that._valueMin()) / (that._valueMax() - that._valueMin()) * 100;
					_set[that.orientation === "horizontal" ? "left" : "bottom"] = valPercent + "%";
					$(this).stop(1, 1)[animate ? "animate" : "css"](_set, o.animate);
					if (that.options.range === true) {
						if (that.orientation === "horizontal") {
							if (i === 0) {
								that.range.stop(1, 1)[animate ? "animate" : "css"]({
									left: valPercent + "%"
								}, o.animate);
							}
							if (i === 1) {
								that.range[animate ? "animate" : "css"]({
									width: (valPercent - lastValPercent) + "%"
								}, {
									queue: false,
									duration: o.animate
								});
							}
						} else {
							if (i === 0) {
								that.range.stop(1, 1)[animate ? "animate" : "css"]({
									bottom: (valPercent) + "%"
								}, o.animate);
							}
							if (i === 1) {
								that.range[animate ? "animate" : "css"]({
									height: (valPercent - lastValPercent) + "%"
								}, {
									queue: false,
									duration: o.animate
								});
							}
						}
					}
					lastValPercent = valPercent;
				});
			} else {
				value = this.value();
				valueMin = this._valueMin();
				valueMax = this._valueMax();
				valPercent = (valueMax !== valueMin) ? (value - valueMin) / (valueMax - valueMin) * 100 : 0;
				_set[this.orientation === "horizontal" ? "left" : "bottom"] = valPercent + "%";
				this.handle.stop(1, 1)[animate ? "animate" : "css"](_set, o.animate);
				if (oRange === "min" && this.orientation === "horizontal") {
					this.range.stop(1, 1)[animate ? "animate" : "css"]({
						width: valPercent + "%"
					}, o.animate);
				}
				if (oRange === "max" && this.orientation === "horizontal") {
					this.range[animate ? "animate" : "css"]({
						width: (100 - valPercent) + "%"
					}, {
						queue: false,
						duration: o.animate
					});
				}
				if (oRange === "min" && this.orientation === "vertical") {
					this.range.stop(1, 1)[animate ? "animate" : "css"]({
						height: valPercent + "%"
					}, o.animate);
				}
				if (oRange === "max" && this.orientation === "vertical") {
					this.range[animate ? "animate" : "css"]({
						height: (100 - valPercent) + "%"
					}, {
						queue: false,
						duration: o.animate
					});
				}
			}
		},
		_handleEvents: {
			keydown: function (event) {
				var allowed, curVal, newVal, step, index = $(event.target).data("ui-slider-handle-index");
				switch (event.keyCode) {
					case $.ui.keyCode.HOME:
					case $.ui.keyCode.END:
					case $.ui.keyCode.PAGE_UP:
					case $.ui.keyCode.PAGE_DOWN:
					case $.ui.keyCode.UP:
					case $.ui.keyCode.RIGHT:
					case $.ui.keyCode.DOWN:
					case $.ui.keyCode.LEFT:
						event.preventDefault();
						if (!this._keySliding) {
							this._keySliding = true;
							$(event.target).addClass("ui-state-active");
							allowed = this._start(event, index);
							if (allowed === false) {
								return;
							}
						}
						break;
				}
				step = this.options.step;
				if (this.options.values && this.options.values.length) {
					curVal = newVal = this.values(index);
				} else {
					curVal = newVal = this.value();
				}
				switch (event.keyCode) {
					case $.ui.keyCode.HOME:
						newVal = this._valueMin();
						break;
					case $.ui.keyCode.END:
						newVal = this._valueMax();
						break;
					case $.ui.keyCode.PAGE_UP:
						newVal = this._trimAlignValue(curVal + ((this._valueMax() - this._valueMin()) / this.numPages));
						break;
					case $.ui.keyCode.PAGE_DOWN:
						newVal = this._trimAlignValue(curVal - ((this._valueMax() - this._valueMin()) / this.numPages));
						break;
					case $.ui.keyCode.UP:
					case $.ui.keyCode.RIGHT:
						if (curVal === this._valueMax()) {
							return;
						}
						newVal = this._trimAlignValue(curVal + step);
						break;
					case $.ui.keyCode.DOWN:
					case $.ui.keyCode.LEFT:
						if (curVal === this._valueMin()) {
							return;
						}
						newVal = this._trimAlignValue(curVal - step);
						break;
				}
				this._slide(event, index, newVal);
			},
			keyup: function (event) {
				var index = $(event.target).data("ui-slider-handle-index");
				if (this._keySliding) {
					this._keySliding = false;
					this._stop(event, index);
					this._change(event, index);
					$(event.target).removeClass("ui-state-active");
				}
			}
		}
	});
	var sortable = $.widget("ui.sortable", $.ui.mouse, {
		version: "1.11.4",
		widgetEventPrefix: "sort",
		ready: false,
		options: {
			appendTo: "parent",
			axis: false,
			connectWith: false,
			containment: false,
			cursor: "auto",
			cursorAt: false,
			dropOnEmpty: true,
			forcePlaceholderSize: false,
			forceHelperSize: false,
			grid: false,
			handle: false,
			helper: "original",
			items: "> *",
			opacity: false,
			placeholder: false,
			revert: false,
			scroll: true,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1000,
			activate: null,
			beforeStop: null,
			change: null,
			deactivate: null,
			out: null,
			over: null,
			receive: null,
			remove: null,
			sort: null,
			start: null,
			stop: null,
			update: null
		},
		_isOverAxis: function (x, reference, size) {
			return (x >= reference) && (x < (reference + size));
		},
		_isFloating: function (item) {
			return (/left|right/).test(item.css("float")) || (/inline|table-cell/).test(item.css("display"));
		},
		_create: function () {
			this.containerCache = {};
			this.element.addClass("ui-sortable");
			this.refresh();
			this.offset = this.element.offset();
			this._mouseInit();
			this._setHandleClassName();
			this.ready = true;
		},
		_setOption: function (key, value) {
			this._super(key, value);
			if (key === "handle") {
				this._setHandleClassName();
			}
		},
		_setHandleClassName: function () {
			this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle");
			$.each(this.items, function () {
				(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle");
			});
		},
		_destroy: function () {
			this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle");
			this._mouseDestroy();
			for (var i = this.items.length - 1; i >= 0; i--) {
				this.items[i].item.removeData(this.widgetName + "-item");
			}
			return this;
		},
		_mouseCapture: function (event, overrideHandle) {
			var currentItem = null,
				validHandle = false,
				that = this;
			if (this.reverting) {
				return false;
			}
			if (this.options.disabled || this.options.type === "static") {
				return false;
			}
			this._refreshItems(event);
			$(event.target).parents().each(function () {
				if ($.data(this, that.widgetName + "-item") === that) {
					currentItem = $(this);
					return false;
				}
			});
			if ($.data(event.target, that.widgetName + "-item") === that) {
				currentItem = $(event.target);
			}
			if (!currentItem) {
				return false;
			}
			if (this.options.handle && !overrideHandle) {
				$(this.options.handle, currentItem).find("*").addBack().each(function () {
					if (this === event.target) {
						validHandle = true;
					}
				});
				if (!validHandle) {
					return false;
				}
			}
			this.currentItem = currentItem;
			this._removeCurrentsFromItems();
			return true;
		},
		_mouseStart: function (event, overrideHandle, noActivation) {
			var i, body, o = this.options;
			this.currentContainer = this;
			this.refreshPositions();
			this.helper = this._createHelper(event);
			this._cacheHelperProportions();
			this._cacheMargins();
			this.scrollParent = this.helper.scrollParent();
			this.offset = this.currentItem.offset();
			this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			};
			$.extend(this.offset, {
				click: {
					left: event.pageX - this.offset.left,
					top: event.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			});
			this.helper.css("position", "absolute");
			this.cssPosition = this.helper.css("position");
			this.originalPosition = this._generatePosition(event);
			this.originalPageX = event.pageX;
			this.originalPageY = event.pageY;
			(o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));
			this.domPosition = {
				prev: this.currentItem.prev()[0],
				parent: this.currentItem.parent()[0]
			};
			if (this.helper[0] !== this.currentItem[0]) {
				this.currentItem.hide();
			}
			this._createPlaceholder();
			if (o.containment) {
				this._setContainment();
			}
			if (o.cursor && o.cursor !== "auto") {
				body = this.document.find("body");
				this.storedCursor = body.css("cursor");
				body.css("cursor", o.cursor);
				this.storedStylesheet = $("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(body);
			}
			if (o.opacity) {
				if (this.helper.css("opacity")) {
					this._storedOpacity = this.helper.css("opacity");
				}
				this.helper.css("opacity", o.opacity);
			}
			if (o.zIndex) {
				if (this.helper.css("zIndex")) {
					this._storedZIndex = this.helper.css("zIndex");
				}
				this.helper.css("zIndex", o.zIndex);
			}
			if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
				this.overflowOffset = this.scrollParent.offset();
			}
			this._trigger("start", event, this._uiHash());
			if (!this._preserveHelperProportions) {
				this._cacheHelperProportions();
			}
			if (!noActivation) {
				for (i = this.containers.length - 1; i >= 0; i--) {
					this.containers[i]._trigger("activate", event, this._uiHash(this));
				}
			}
			if ($.ui.ddmanager) {
				$.ui.ddmanager.current = this;
			}
			if ($.ui.ddmanager && !o.dropBehaviour) {
				$.ui.ddmanager.prepareOffsets(this, event);
			}
			this.dragging = true;
			this.helper.addClass("ui-sortable-helper");
			this._mouseDrag(event);
			return true;
		},
		_mouseDrag: function (event) {
			var i, item, itemElement, intersection, o = this.options,
				scrolled = false;
			this.position = this._generatePosition(event);
			this.positionAbs = this._convertPositionTo("absolute");
			if (!this.lastPositionAbs) {
				this.lastPositionAbs = this.positionAbs;
			}
			if (this.options.scroll) {
				if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
					if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity) {
						this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
					} else if (event.pageY - this.overflowOffset.top < o.scrollSensitivity) {
						this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
					}
					if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity) {
						this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
					} else if (event.pageX - this.overflowOffset.left < o.scrollSensitivity) {
						this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;
					}
				} else {
					if (event.pageY - this.document.scrollTop() < o.scrollSensitivity) {
						scrolled = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed);
					} else if (this.window.height() - (event.pageY - this.document.scrollTop()) < o.scrollSensitivity) {
						scrolled = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed);
					}
					if (event.pageX - this.document.scrollLeft() < o.scrollSensitivity) {
						scrolled = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed);
					} else if (this.window.width() - (event.pageX - this.document.scrollLeft()) < o.scrollSensitivity) {
						scrolled = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed);
					}
				}
				if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
					$.ui.ddmanager.prepareOffsets(this, event);
				}
			}
			this.positionAbs = this._convertPositionTo("absolute");
			if (!this.options.axis || this.options.axis !== "y") {
				this.helper[0].style.left = this.position.left + "px";
			}
			if (!this.options.axis || this.options.axis !== "x") {
				this.helper[0].style.top = this.position.top + "px";
			}
			for (i = this.items.length - 1; i >= 0; i--) {
				item = this.items[i];
				itemElement = item.item[0];
				intersection = this._intersectsWithPointer(item);
				if (!intersection) {
					continue;
				}
				if (item.instance !== this.currentContainer) {
					continue;
				}
				if (itemElement !== this.currentItem[0] && this.placeholder[intersection === 1 ? "next" : "prev"]()[0] !== itemElement && !$.contains(this.placeholder[0], itemElement) && (this.options.type === "semi-dynamic" ? !$.contains(this.element[0], itemElement) : true)) {
					this.direction = intersection === 1 ? "down" : "up";
					if (this.options.tolerance === "pointer" || this._intersectsWithSides(item)) {
						this._rearrange(event, item);
					} else {
						break;
					}
					this._trigger("change", event, this._uiHash());
					break;
				}
			}
			this._contactContainers(event);
			if ($.ui.ddmanager) {
				$.ui.ddmanager.drag(this, event);
			}
			this._trigger("sort", event, this._uiHash());
			this.lastPositionAbs = this.positionAbs;
			return false;
		},
		_mouseStop: function (event, noPropagation) {
			if (!event) {
				return;
			}
			if ($.ui.ddmanager && !this.options.dropBehaviour) {
				$.ui.ddmanager.drop(this, event);
			}
			if (this.options.revert) {
				var that = this,
					cur = this.placeholder.offset(),
					axis = this.options.axis,
					animation = {};
				if (!axis || axis === "x") {
					animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft);
				}
				if (!axis || axis === "y") {
					animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop);
				}
				this.reverting = true;
				$(this.helper).animate(animation, parseInt(this.options.revert, 10) || 500, function () {
					that._clear(event);
				});
			} else {
				this._clear(event, noPropagation);
			}
			return false;
		},
		cancel: function () {
			if (this.dragging) {
				this._mouseUp({
					target: null
				});
				if (this.options.helper === "original") {
					this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
				} else {
					this.currentItem.show();
				}
				for (var i = this.containers.length - 1; i >= 0; i--) {
					this.containers[i]._trigger("deactivate", null, this._uiHash(this));
					if (this.containers[i].containerCache.over) {
						this.containers[i]._trigger("out", null, this._uiHash(this));
						this.containers[i].containerCache.over = 0;
					}
				}
			}
			if (this.placeholder) {
				if (this.placeholder[0].parentNode) {
					this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
				}
				if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
					this.helper.remove();
				}
				$.extend(this, {
					helper: null,
					dragging: false,
					reverting: false,
					_noFinalSort: null
				});
				if (this.domPosition.prev) {
					$(this.domPosition.prev).after(this.currentItem);
				} else {
					$(this.domPosition.parent).prepend(this.currentItem);
				}
			}
			return this;
		},
		serialize: function (o) {
			var items = this._getItemsAsjQuery(o && o.connected),
				str = [];
			o = o || {};
			$(items).each(function () {
				var res = ($(o.item || this).attr(o.attribute || "id") || "").match(o.expression || (/(.+)[\-=_](.+)/));
				if (res) {
					str.push((o.key || res[1] + "[]") + "=" + (o.key && o.expression ? res[1] : res[2]));
				}
			});
			if (!str.length && o.key) {
				str.push(o.key + "=");
			}
			return str.join("&");
		},
		toArray: function (o) {
			var items = this._getItemsAsjQuery(o && o.connected),
				ret = [];
			o = o || {};
			items.each(function () {
				ret.push($(o.item || this).attr(o.attribute || "id") || "");
			});
			return ret;
		},
		_intersectsWith: function (item) {
			var x1 = this.positionAbs.left,
				x2 = x1 + this.helperProportions.width,
				y1 = this.positionAbs.top,
				y2 = y1 + this.helperProportions.height,
				l = item.left,
				r = l + item.width,
				t = item.top,
				b = t + item.height,
				dyClick = this.offset.click.top,
				dxClick = this.offset.click.left,
				isOverElementHeight = (this.options.axis === "x") || ((y1 + dyClick) > t && (y1 + dyClick) < b),
				isOverElementWidth = (this.options.axis === "y") || ((x1 + dxClick) > l && (x1 + dxClick) < r),
				isOverElement = isOverElementHeight && isOverElementWidth;
			if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || (this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"])) {
				return isOverElement;
			} else {
				return (l < x1 + (this.helperProportions.width / 2) && x2 - (this.helperProportions.width / 2) < r && t < y1 + (this.helperProportions.height / 2) && y2 - (this.helperProportions.height / 2) < b);
			}
		},
		_intersectsWithPointer: function (item) {
			var isOverElementHeight = (this.options.axis === "x") || this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height),
				isOverElementWidth = (this.options.axis === "y") || this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width),
				isOverElement = isOverElementHeight && isOverElementWidth,
				verticalDirection = this._getDragVerticalDirection(),
				horizontalDirection = this._getDragHorizontalDirection();
			if (!isOverElement) {
				return false;
			}
			return this.floating ? (((horizontalDirection && horizontalDirection === "right") || verticalDirection === "down") ? 2 : 1) : (verticalDirection && (verticalDirection === "down" ? 2 : 1));
		},
		_intersectsWithSides: function (item) {
			var isOverBottomHalf = this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + (item.height / 2), item.height),
				isOverRightHalf = this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + (item.width / 2), item.width),
				verticalDirection = this._getDragVerticalDirection(),
				horizontalDirection = this._getDragHorizontalDirection();
			if (this.floating && horizontalDirection) {
				return ((horizontalDirection === "right" && isOverRightHalf) || (horizontalDirection === "left" && !isOverRightHalf));
			} else {
				return verticalDirection && ((verticalDirection === "down" && isOverBottomHalf) || (verticalDirection === "up" && !isOverBottomHalf));
			}
		},
		_getDragVerticalDirection: function () {
			var delta = this.positionAbs.top - this.lastPositionAbs.top;
			return delta !== 0 && (delta > 0 ? "down" : "up");
		},
		_getDragHorizontalDirection: function () {
			var delta = this.positionAbs.left - this.lastPositionAbs.left;
			return delta !== 0 && (delta > 0 ? "right" : "left");
		},
		refresh: function (event) {
			this._refreshItems(event);
			this._setHandleClassName();
			this.refreshPositions();
			return this;
		},
		_connectWith: function () {
			var options = this.options;
			return options.connectWith.constructor === String ? [options.connectWith] : options.connectWith;
		},
		_getItemsAsjQuery: function (connected) {
			var i, j, cur, inst, items = [],
				queries = [],
				connectWith = this._connectWith();
			if (connectWith && connected) {
				for (i = connectWith.length - 1; i >= 0; i--) {
					cur = $(connectWith[i], this.document[0]);
					for (j = cur.length - 1; j >= 0; j--) {
						inst = $.data(cur[j], this.widgetFullName);
						if (inst && inst !== this && !inst.options.disabled) {
							queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst]);
						}
					}
				}
			}
			queries.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
				options: this.options,
				item: this.currentItem
			}) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);

			function addItems() {
				items.push(this);
			}
			for (i = queries.length - 1; i >= 0; i--) {
				queries[i][0].each(addItems);
			}
			return $(items);
		},
		_removeCurrentsFromItems: function () {
			var list = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = $.grep(this.items, function (item) {
				for (var j = 0; j < list.length; j++) {
					if (list[j] === item.item[0]) {
						return false;
					}
				}
				return true;
			});
		},
		_refreshItems: function (event) {
			this.items = [];
			this.containers = [this];
			var i, j, cur, inst, targetData, _queries, item, queriesLength, items = this.items,
				queries = [
					[$.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, {
						item: this.currentItem
					}) : $(this.options.items, this.element), this]
				],
				connectWith = this._connectWith();
			if (connectWith && this.ready) {
				for (i = connectWith.length - 1; i >= 0; i--) {
					cur = $(connectWith[i], this.document[0]);
					for (j = cur.length - 1; j >= 0; j--) {
						inst = $.data(cur[j], this.widgetFullName);
						if (inst && inst !== this && !inst.options.disabled) {
							queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, {
								item: this.currentItem
							}) : $(inst.options.items, inst.element), inst]);
							this.containers.push(inst);
						}
					}
				}
			}
			for (i = queries.length - 1; i >= 0; i--) {
				targetData = queries[i][1];
				_queries = queries[i][0];
				for (j = 0, queriesLength = _queries.length; j < queriesLength; j++) {
					item = $(_queries[j]);
					item.data(this.widgetName + "-item", targetData);
					items.push({
						item: item,
						instance: targetData,
						width: 0,
						height: 0,
						left: 0,
						top: 0
					});
				}
			}
		},
		refreshPositions: function (fast) {
			this.floating = this.items.length ? this.options.axis === "x" || this._isFloating(this.items[0].item) : false;
			if (this.offsetParent && this.helper) {
				this.offset.parent = this._getParentOffset();
			}
			var i, item, t, p;
			for (i = this.items.length - 1; i >= 0; i--) {
				item = this.items[i];
				if (item.instance !== this.currentContainer && this.currentContainer && item.item[0] !== this.currentItem[0]) {
					continue;
				}
				t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;
				if (!fast) {
					item.width = t.outerWidth();
					item.height = t.outerHeight();
				}
				p = t.offset();
				item.left = p.left;
				item.top = p.top;
			}
			if (this.options.custom && this.options.custom.refreshContainers) {
				this.options.custom.refreshContainers.call(this);
			} else {
				for (i = this.containers.length - 1; i >= 0; i--) {
					p = this.containers[i].element.offset();
					this.containers[i].containerCache.left = p.left;
					this.containers[i].containerCache.top = p.top;
					this.containers[i].containerCache.width = this.containers[i].element.outerWidth();
					this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
				}
			}
			return this;
		},
		_createPlaceholder: function (that) {
			that = that || this;
			var className, o = that.options;
			if (!o.placeholder || o.placeholder.constructor === String) {
				className = o.placeholder;
				o.placeholder = {
					element: function () {
						var nodeName = that.currentItem[0].nodeName.toLowerCase(),
							element = $("<" + nodeName + ">", that.document[0]).addClass(className || that.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
						if (nodeName === "tbody") {
							that._createTrPlaceholder(that.currentItem.find("tr").eq(0), $("<tr>", that.document[0]).appendTo(element));
						} else if (nodeName === "tr") {
							that._createTrPlaceholder(that.currentItem, element);
						} else if (nodeName === "img") {
							element.attr("src", that.currentItem.attr("src"));
						}
						if (!className) {
							element.css("visibility", "hidden");
						}
						return element;
					},
					update: function (container, p) {
						if (className && !o.forcePlaceholderSize) {
							return;
						}
						if (!p.height()) {
							p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css("paddingTop") || 0, 10) - parseInt(that.currentItem.css("paddingBottom") || 0, 10));
						}
						if (!p.width()) {
							p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css("paddingLeft") || 0, 10) - parseInt(that.currentItem.css("paddingRight") || 0, 10));
						}
					}
				};
			}
			that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem));
			that.currentItem.after(that.placeholder);
			o.placeholder.update(that, that.placeholder);
		},
		_createTrPlaceholder: function (sourceTr, targetTr) {
			var that = this;
			sourceTr.children().each(function () {
				$("<td>&#160;</td>", that.document[0]).attr("colspan", $(this).attr("colspan") || 1).appendTo(targetTr);
			});
		},
		_contactContainers: function (event) {
			var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom, floating, axis, innermostContainer = null,
				innermostIndex = null;
			for (i = this.containers.length - 1; i >= 0; i--) {
				if ($.contains(this.currentItem[0], this.containers[i].element[0])) {
					continue;
				}
				if (this._intersectsWith(this.containers[i].containerCache)) {
					if (innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0])) {
						continue;
					}
					innermostContainer = this.containers[i];
					innermostIndex = i;
				} else {
					if (this.containers[i].containerCache.over) {
						this.containers[i]._trigger("out", event, this._uiHash(this));
						this.containers[i].containerCache.over = 0;
					}
				}
			}
			if (!innermostContainer) {
				return;
			}
			if (this.containers.length === 1) {
				if (!this.containers[innermostIndex].containerCache.over) {
					this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
					this.containers[innermostIndex].containerCache.over = 1;
				}
			} else {
				dist = 10000;
				itemWithLeastDistance = null;
				floating = innermostContainer.floating || this._isFloating(this.currentItem);
				posProperty = floating ? "left" : "top";
				sizeProperty = floating ? "width" : "height";
				axis = floating ? "clientX" : "clientY";
				for (j = this.items.length - 1; j >= 0; j--) {
					if (!$.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) {
						continue;
					}
					if (this.items[j].item[0] === this.currentItem[0]) {
						continue;
					}
					cur = this.items[j].item.offset()[posProperty];
					nearBottom = false;
					if (event[axis] - cur > this.items[j][sizeProperty] / 2) {
						nearBottom = true;
					}
					if (Math.abs(event[axis] - cur) < dist) {
						dist = Math.abs(event[axis] - cur);
						itemWithLeastDistance = this.items[j];
						this.direction = nearBottom ? "up" : "down";
					}
				}
				if (!itemWithLeastDistance && !this.options.dropOnEmpty) {
					return;
				}
				if (this.currentContainer === this.containers[innermostIndex]) {
					if (!this.currentContainer.containerCache.over) {
						this.containers[innermostIndex]._trigger("over", event, this._uiHash());
						this.currentContainer.containerCache.over = 1;
					}
					return;
				}
				itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true);
				this._trigger("change", event, this._uiHash());
				this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));
				this.currentContainer = this.containers[innermostIndex];
				this.options.placeholder.update(this.currentContainer, this.placeholder);
				this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
				this.containers[innermostIndex].containerCache.over = 1;
			}
		},
		_createHelper: function (event) {
			var o = this.options,
				helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : (o.helper === "clone" ? this.currentItem.clone() : this.currentItem);
			if (!helper.parents("body").length) {
				$(o.appendTo !== "parent" ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);
			}
			if (helper[0] === this.currentItem[0]) {
				this._storedCSS = {
					width: this.currentItem[0].style.width,
					height: this.currentItem[0].style.height,
					position: this.currentItem.css("position"),
					top: this.currentItem.css("top"),
					left: this.currentItem.css("left")
				};
			}
			if (!helper[0].style.width || o.forceHelperSize) {
				helper.width(this.currentItem.width());
			}
			if (!helper[0].style.height || o.forceHelperSize) {
				helper.height(this.currentItem.height());
			}
			return helper;
		},
		_adjustOffsetFromHelper: function (obj) {
			if (typeof obj === "string") {
				obj = obj.split(" ");
			}
			if ($.isArray(obj)) {
				obj = {
					left: +obj[0],
					top: +obj[1] || 0
				};
			}
			if ("left" in obj) {
				this.offset.click.left = obj.left + this.margins.left;
			}
			if ("right" in obj) {
				this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
			}
			if ("top" in obj) {
				this.offset.click.top = obj.top + this.margins.top;
			}
			if ("bottom" in obj) {
				this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
			}
		},
		_getParentOffset: function () {
			this.offsetParent = this.helper.offsetParent();
			var po = this.offsetParent.offset();
			if (this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) {
				po.left += this.scrollParent.scrollLeft();
				po.top += this.scrollParent.scrollTop();
			}
			if (this.offsetParent[0] === this.document[0].body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie)) {
				po = {
					top: 0,
					left: 0
				};
			}
			return {
				top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			};
		},
		_getRelativeOffset: function () {
			if (this.cssPosition === "relative") {
				var p = this.currentItem.position();
				return {
					top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				};
			} else {
				return {
					top: 0,
					left: 0
				};
			}
		},
		_cacheMargins: function () {
			this.margins = {
				left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0),
				top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)
			};
		},
		_cacheHelperProportions: function () {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			};
		},
		_setContainment: function () {
			var ce, co, over, o = this.options;
			if (o.containment === "parent") {
				o.containment = this.helper[0].parentNode;
			}
			if (o.containment === "document" || o.containment === "window") {
				this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, o.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, (o.containment === "document" ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
			}
			if (!(/^(document|window|parent)$/).test(o.containment)) {
				ce = $(o.containment)[0];
				co = $(o.containment).offset();
				over = ($(ce).css("overflow") !== "hidden");
				this.containment = [co.left + (parseInt($(ce).css("borderLeftWidth"), 10) || 0) + (parseInt($(ce).css("paddingLeft"), 10) || 0) - this.margins.left, co.top + (parseInt($(ce).css("borderTopWidth"), 10) || 0) + (parseInt($(ce).css("paddingTop"), 10) || 0) - this.margins.top, co.left + (over ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"), 10) || 0) - (parseInt($(ce).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, co.top + (over ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"), 10) || 0) - (parseInt($(ce).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top];
			}
		},
		_convertPositionTo: function (d, pos) {
			if (!pos) {
				pos = this.position;
			}
			var mod = d === "absolute" ? 1 : -1,
				scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
				scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);
			return {
				top: (pos.top + this.offset.relative.top * mod + this.offset.parent.top * mod - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (scrollIsRootNode ? 0 : scroll.scrollTop())) * mod)),
				left: (pos.left + this.offset.relative.left * mod + this.offset.parent.left * mod - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft()) * mod))
			};
		},
		_generatePosition: function (event) {
			var top, left, o = this.options,
				pageX = event.pageX,
				pageY = event.pageY,
				scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
				scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);
			if (this.cssPosition === "relative" && !(this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0])) {
				this.offset.relative = this._getRelativeOffset();
			}
			if (this.originalPosition) {
				if (this.containment) {
					if (event.pageX - this.offset.click.left < this.containment[0]) {
						pageX = this.containment[0] + this.offset.click.left;
					}
					if (event.pageY - this.offset.click.top < this.containment[1]) {
						pageY = this.containment[1] + this.offset.click.top;
					}
					if (event.pageX - this.offset.click.left > this.containment[2]) {
						pageX = this.containment[2] + this.offset.click.left;
					}
					if (event.pageY - this.offset.click.top > this.containment[3]) {
						pageY = this.containment[3] + this.offset.click.top;
					}
				}
				if (o.grid) {
					top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
					pageY = this.containment ? ((top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3]) ? top : ((top - this.offset.click.top >= this.containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;
					left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
					pageX = this.containment ? ((left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2]) ? left : ((left - this.offset.click.left >= this.containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
				}
			}
			return {
				top: (pageY - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (scrollIsRootNode ? 0 : scroll.scrollTop())))),
				left: (pageX - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft())))
			};
		},
		_rearrange: function (event, i, a, hardRefresh) {
			a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? i.item[0] : i.item[0].nextSibling));
			this.counter = this.counter ? ++this.counter : 1;
			var counter = this.counter;
			this._delay(function () {
				if (counter === this.counter) {
					this.refreshPositions(!hardRefresh);
				}
			});
		},
		_clear: function (event, noPropagation) {
			this.reverting = false;
			var i, delayedTriggers = [];
			if (!this._noFinalSort && this.currentItem.parent().length) {
				this.placeholder.before(this.currentItem);
			}
			this._noFinalSort = null;
			if (this.helper[0] === this.currentItem[0]) {
				for (i in this._storedCSS) {
					if (this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") {
						this._storedCSS[i] = "";
					}
				}
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
			} else {
				this.currentItem.show();
			}
			if (this.fromOutside && !noPropagation) {
				delayedTriggers.push(function (event) {
					this._trigger("receive", event, this._uiHash(this.fromOutside));
				});
			}
			if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !noPropagation) {
				delayedTriggers.push(function (event) {
					this._trigger("update", event, this._uiHash());
				});
			}
			if (this !== this.currentContainer) {
				if (!noPropagation) {
					delayedTriggers.push(function (event) {
						this._trigger("remove", event, this._uiHash());
					});
					delayedTriggers.push((function (c) {
						return function (event) {
							c._trigger("receive", event, this._uiHash(this));
						};
					}).call(this, this.currentContainer));
					delayedTriggers.push((function (c) {
						return function (event) {
							c._trigger("update", event, this._uiHash(this));
						};
					}).call(this, this.currentContainer));
				}
			}

			function delayEvent(type, instance, container) {
				return function (event) {
					container._trigger(type, event, instance._uiHash(instance));
				};
			}
			for (i = this.containers.length - 1; i >= 0; i--) {
				if (!noPropagation) {
					delayedTriggers.push(delayEvent("deactivate", this, this.containers[i]));
				}
				if (this.containers[i].containerCache.over) {
					delayedTriggers.push(delayEvent("out", this, this.containers[i]));
					this.containers[i].containerCache.over = 0;
				}
			}
			if (this.storedCursor) {
				this.document.find("body").css("cursor", this.storedCursor);
				this.storedStylesheet.remove();
			}
			if (this._storedOpacity) {
				this.helper.css("opacity", this._storedOpacity);
			}
			if (this._storedZIndex) {
				this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex);
			}
			this.dragging = false;
			if (!noPropagation) {
				this._trigger("beforeStop", event, this._uiHash());
			}
			this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
			if (!this.cancelHelperRemoval) {
				if (this.helper[0] !== this.currentItem[0]) {
					this.helper.remove();
				}
				this.helper = null;
			}
			if (!noPropagation) {
				for (i = 0; i < delayedTriggers.length; i++) {
					delayedTriggers[i].call(this, event);
				}
				this._trigger("stop", event, this._uiHash());
			}
			this.fromOutside = false;
			return !this.cancelHelperRemoval;
		},
		_trigger: function () {
			if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
				this.cancel();
			}
		},
		_uiHash: function (_inst) {
			var inst = _inst || this;
			return {
				helper: inst.helper,
				placeholder: inst.placeholder || $([]),
				position: inst.position,
				originalPosition: inst.originalPosition,
				offset: inst.positionAbs,
				item: inst.currentItem,
				sender: _inst ? _inst.element : null
			};
		}
	});

	function spinner_modifier(fn) {
		return function () {
			var previous = this.element.val();
			fn.apply(this, arguments);
			this._refresh();
			if (previous !== this.element.val()) {
				this._trigger("change");
			}
		};
	}
	var spinner = $.widget("ui.spinner", {
		version: "1.11.4",
		defaultElement: "<input>",
		widgetEventPrefix: "spin",
		options: {
			culture: null,
			icons: {
				down: "ui-icon-triangle-1-s",
				up: "ui-icon-triangle-1-n"
			},
			incremental: true,
			max: null,
			min: null,
			numberFormat: null,
			page: 10,
			step: 1,
			change: null,
			spin: null,
			start: null,
			stop: null
		},
		_create: function () {
			this._setOption("max", this.options.max);
			this._setOption("min", this.options.min);
			this._setOption("step", this.options.step);
			if (this.value() !== "") {
				this._value(this.element.val(), true);
			}
			this._draw();
			this._on(this._events);
			this._refresh();
			this._on(this.window, {
				beforeunload: function () {
					this.element.removeAttr("autocomplete");
				}
			});
		},
		_getCreateOptions: function () {
			var options = {},
				element = this.element;
			$.each(["min", "max", "step"], function (i, option) {
				var value = element.attr(option);
				if (value !== undefined && value.length) {
					options[option] = value;
				}
			});
			return options;
		},
		_events: {
			keydown: function (event) {
				if (this._start(event) && this._keydown(event)) {
					event.preventDefault();
				}
			},
			keyup: "_stop",
			focus: function () {
				this.previous = this.element.val();
			},
			blur: function (event) {
				if (this.cancelBlur) {
					delete this.cancelBlur;
					return;
				}
				this._stop();
				this._refresh();
				if (this.previous !== this.element.val()) {
					this._trigger("change", event);
				}
			},
			mousewheel: function (event, delta) {
				if (!delta) {
					return;
				}
				if (!this.spinning && !this._start(event)) {
					return false;
				}
				this._spin((delta > 0 ? 1 : -1) * this.options.step, event);
				clearTimeout(this.mousewheelTimer);
				this.mousewheelTimer = this._delay(function () {
					if (this.spinning) {
						this._stop(event);
					}
				}, 100);
				event.preventDefault();
			},
			"mousedown .ui-spinner-button": function (event) {
				var previous;
				previous = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();

				function checkFocus() {
					var isActive = this.element[0] === this.document[0].activeElement;
					if (!isActive) {
						this.element.focus();
						this.previous = previous;
						this._delay(function () {
							this.previous = previous;
						});
					}
				}
				event.preventDefault();
				checkFocus.call(this);
				this.cancelBlur = true;
				this._delay(function () {
					delete this.cancelBlur;
					checkFocus.call(this);
				});
				if (this._start(event) === false) {
					return;
				}
				this._repeat(null, $(event.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, event);
			},
			"mouseup .ui-spinner-button": "_stop",
			"mouseenter .ui-spinner-button": function (event) {
				if (!$(event.currentTarget).hasClass("ui-state-active")) {
					return;
				}
				if (this._start(event) === false) {
					return false;
				}
				this._repeat(null, $(event.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, event);
			},
			"mouseleave .ui-spinner-button": "_stop"
		},
		_draw: function () {
			var uiSpinner = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
			this.element.attr("role", "spinbutton");
			this.buttons = uiSpinner.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
			if (this.buttons.height() > Math.ceil(uiSpinner.height() * 0.5) && uiSpinner.height() > 0) {
				uiSpinner.height(uiSpinner.height());
			}
			if (this.options.disabled) {
				this.disable();
			}
		},
		_keydown: function (event) {
			var options = this.options,
				keyCode = $.ui.keyCode;
			switch (event.keyCode) {
				case keyCode.UP:
					this._repeat(null, 1, event);
					return true;
				case keyCode.DOWN:
					this._repeat(null, -1, event);
					return true;
				case keyCode.PAGE_UP:
					this._repeat(null, options.page, event);
					return true;
				case keyCode.PAGE_DOWN:
					this._repeat(null, -options.page, event);
					return true;
			}
			return false;
		},
		_uiSpinnerHtml: function () {
			return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
		},
		_buttonHtml: function () {
			return "" + "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'>" + "<span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>";
		},
		_start: function (event) {
			if (!this.spinning && this._trigger("start", event) === false) {
				return false;
			}
			if (!this.counter) {
				this.counter = 1;
			}
			this.spinning = true;
			return true;
		},
		_repeat: function (i, steps, event) {
			i = i || 500;
			clearTimeout(this.timer);
			this.timer = this._delay(function () {
				this._repeat(40, steps, event);
			}, i);
			this._spin(steps * this.options.step, event);
		},
		_spin: function (step, event) {
			var value = this.value() || 0;
			if (!this.counter) {
				this.counter = 1;
			}
			value = this._adjustValue(value + step * this._increment(this.counter));
			if (!this.spinning || this._trigger("spin", event, {
					value: value
				}) !== false) {
				this._value(value);
				this.counter++;
			}
		},
		_increment: function (i) {
			var incremental = this.options.incremental;
			if (incremental) {
				return $.isFunction(incremental) ? incremental(i) : Math.floor(i * i * i / 50000 - i * i / 500 + 17 * i / 200 + 1);
			}
			return 1;
		},
		_precision: function () {
			var precision = this._precisionOf(this.options.step);
			if (this.options.min !== null) {
				precision = Math.max(precision, this._precisionOf(this.options.min));
			}
			return precision;
		},
		_precisionOf: function (num) {
			var str = num.toString(),
				decimal = str.indexOf(".");
			return decimal === -1 ? 0 : str.length - decimal - 1;
		},
		_adjustValue: function (value) {
			var base, aboveMin, options = this.options;
			base = options.min !== null ? options.min : 0;
			aboveMin = value - base;
			aboveMin = Math.round(aboveMin / options.step) * options.step;
			value = base + aboveMin;
			value = parseFloat(value.toFixed(this._precision()));
			if (options.max !== null && value > options.max) {
				return options.max;
			}
			if (options.min !== null && value < options.min) {
				return options.min;
			}
			return value;
		},
		_stop: function (event) {
			if (!this.spinning) {
				return;
			}
			clearTimeout(this.timer);
			clearTimeout(this.mousewheelTimer);
			this.counter = 0;
			this.spinning = false;
			this._trigger("stop", event);
		},
		_setOption: function (key, value) {
			if (key === "culture" || key === "numberFormat") {
				var prevValue = this._parse(this.element.val());
				this.options[key] = value;
				this.element.val(this._format(prevValue));
				return;
			}
			if (key === "max" || key === "min" || key === "step") {
				if (typeof value === "string") {
					value = this._parse(value);
				}
			}
			if (key === "icons") {
				this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(value.up);
				this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(value.down);
			}
			this._super(key, value);
			if (key === "disabled") {
				this.widget().toggleClass("ui-state-disabled", !!value);
				this.element.prop("disabled", !!value);
				this.buttons.button(value ? "disable" : "enable");
			}
		},
		_setOptions: spinner_modifier(function (options) {
			this._super(options);
		}),
		_parse: function (val) {
			if (typeof val === "string" && val !== "") {
				val = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(val, 10, this.options.culture) : +val;
			}
			return val === "" || isNaN(val) ? null : val;
		},
		_format: function (value) {
			if (value === "") {
				return "";
			}
			return window.Globalize && this.options.numberFormat ? Globalize.format(value, this.options.numberFormat, this.options.culture) : value;
		},
		_refresh: function () {
			this.element.attr({
				"aria-valuemin": this.options.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._parse(this.element.val())
			});
		},
		isValid: function () {
			var value = this.value();
			if (value === null) {
				return false;
			}
			return value === this._adjustValue(value);
		},
		_value: function (value, allowAny) {
			var parsed;
			if (value !== "") {
				parsed = this._parse(value);
				if (parsed !== null) {
					if (!allowAny) {
						parsed = this._adjustValue(parsed);
					}
					value = this._format(parsed);
				}
			}
			this.element.val(value);
			this._refresh();
		},
		_destroy: function () {
			this.element.removeClass("ui-spinner-input").prop("disabled", false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
			this.uiSpinner.replaceWith(this.element);
		},
		stepUp: spinner_modifier(function (steps) {
			this._stepUp(steps);
		}),
		_stepUp: function (steps) {
			if (this._start()) {
				this._spin((steps || 1) * this.options.step);
				this._stop();
			}
		},
		stepDown: spinner_modifier(function (steps) {
			this._stepDown(steps);
		}),
		_stepDown: function (steps) {
			if (this._start()) {
				this._spin((steps || 1) * -this.options.step);
				this._stop();
			}
		},
		pageUp: spinner_modifier(function (pages) {
			this._stepUp((pages || 1) * this.options.page);
		}),
		pageDown: spinner_modifier(function (pages) {
			this._stepDown((pages || 1) * this.options.page);
		}),
		value: function (newVal) {
			if (!arguments.length) {
				return this._parse(this.element.val());
			}
			spinner_modifier(this._value).call(this, newVal);
		},
		widget: function () {
			return this.uiSpinner;
		}
	});
	var tabs = $.widget("ui.tabs", {
		version: "1.11.4",
		delay: 300,
		options: {
			active: null,
			collapsible: false,
			event: "click",
			heightStyle: "content",
			hide: null,
			show: null,
			activate: null,
			beforeActivate: null,
			beforeLoad: null,
			load: null
		},
		_isLocal: (function () {
			var rhash = /#.*$/;
			return function (anchor) {
				var anchorUrl, locationUrl;
				anchor = anchor.cloneNode(false);
				anchorUrl = anchor.href.replace(rhash, "");
				locationUrl = location.href.replace(rhash, "");
				try {
					anchorUrl = decodeURIComponent(anchorUrl);
				} catch (error) {}
				try {
					locationUrl = decodeURIComponent(locationUrl);
				} catch (error) {}
				return anchor.hash.length > 1 && anchorUrl === locationUrl;
			};
		})(),
		_create: function () {
			var that = this,
				options = this.options;
			this.running = false;
			this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", options.collapsible);
			this._processTabs();
			options.active = this._initialActive();
			if ($.isArray(options.disabled)) {
				options.disabled = $.unique(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"), function (li) {
					return that.tabs.index(li);
				}))).sort();
			}
			if (this.options.active !== false && this.anchors.length) {
				this.active = this._findActive(options.active);
			} else {
				this.active = $();
			}
			this._refresh();
			if (this.active.length) {
				this.load(options.active);
			}
		},
		_initialActive: function () {
			var active = this.options.active,
				collapsible = this.options.collapsible,
				locationHash = location.hash.substring(1);
			if (active === null) {
				if (locationHash) {
					this.tabs.each(function (i, tab) {
						if ($(tab).attr("aria-controls") === locationHash) {
							active = i;
							return false;
						}
					});
				}
				if (active === null) {
					active = this.tabs.index(this.tabs.filter(".ui-tabs-active"));
				}
				if (active === null || active === -1) {
					active = this.tabs.length ? 0 : false;
				}
			}
			if (active !== false) {
				active = this.tabs.index(this.tabs.eq(active));
				if (active === -1) {
					active = collapsible ? false : 0;
				}
			}
			if (!collapsible && active === false && this.anchors.length) {
				active = 0;
			}
			return active;
		},
		_getCreateEventData: function () {
			return {
				tab: this.active,
				panel: !this.active.length ? $() : this._getPanelForTab(this.active)
			};
		},
		_tabKeydown: function (event) {
			var focusedTab = $(this.document[0].activeElement).closest("li"),
				selectedIndex = this.tabs.index(focusedTab),
				goingForward = true;
			if (this._handlePageNav(event)) {
				return;
			}
			switch (event.keyCode) {
				case $.ui.keyCode.RIGHT:
				case $.ui.keyCode.DOWN:
					selectedIndex++;
					break;
				case $.ui.keyCode.UP:
				case $.ui.keyCode.LEFT:
					goingForward = false;
					selectedIndex--;
					break;
				case $.ui.keyCode.END:
					selectedIndex = this.anchors.length - 1;
					break;
				case $.ui.keyCode.HOME:
					selectedIndex = 0;
					break;
				case $.ui.keyCode.SPACE:
					event.preventDefault();
					clearTimeout(this.activating);
					this._activate(selectedIndex);
					return;
				case $.ui.keyCode.ENTER:
					event.preventDefault();
					clearTimeout(this.activating);
					this._activate(selectedIndex === this.options.active ? false : selectedIndex);
					return;
				default:
					return;
			}
			event.preventDefault();
			clearTimeout(this.activating);
			selectedIndex = this._focusNextTab(selectedIndex, goingForward);
			if (!event.ctrlKey && !event.metaKey) {
				focusedTab.attr("aria-selected", "false");
				this.tabs.eq(selectedIndex).attr("aria-selected", "true");
				this.activating = this._delay(function () {
					this.option("active", selectedIndex);
				}, this.delay);
			}
		},
		_panelKeydown: function (event) {
			if (this._handlePageNav(event)) {
				return;
			}
			if (event.ctrlKey && event.keyCode === $.ui.keyCode.UP) {
				event.preventDefault();
				this.active.focus();
			}
		},
		_handlePageNav: function (event) {
			if (event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP) {
				this._activate(this._focusNextTab(this.options.active - 1, false));
				return true;
			}
			if (event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN) {
				this._activate(this._focusNextTab(this.options.active + 1, true));
				return true;
			}
		},
		_findNextTab: function (index, goingForward) {
			var lastTabIndex = this.tabs.length - 1;

			function constrain() {
				if (index > lastTabIndex) {
					index = 0;
				}
				if (index < 0) {
					index = lastTabIndex;
				}
				return index;
			}
			while ($.inArray(constrain(), this.options.disabled) !== -1) {
				index = goingForward ? index + 1 : index - 1;
			}
			return index;
		},
		_focusNextTab: function (index, goingForward) {
			index = this._findNextTab(index, goingForward);
			this.tabs.eq(index).focus();
			return index;
		},
		_setOption: function (key, value) {
			if (key === "active") {
				this._activate(value);
				return;
			}
			if (key === "disabled") {
				this._setupDisabled(value);
				return;
			}
			this._super(key, value);
			if (key === "collapsible") {
				this.element.toggleClass("ui-tabs-collapsible", value);
				if (!value && this.options.active === false) {
					this._activate(0);
				}
			}
			if (key === "event") {
				this._setupEvents(value);
			}
			if (key === "heightStyle") {
				this._setupHeightStyle(value);
			}
		},
		_sanitizeSelector: function (hash) {
			return hash ? hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
		},
		refresh: function () {
			var options = this.options,
				lis = this.tablist.children(":has(a[href])");
			options.disabled = $.map(lis.filter(".ui-state-disabled"), function (tab) {
				return lis.index(tab);
			});
			this._processTabs();
			if (options.active === false || !this.anchors.length) {
				options.active = false;
				this.active = $();
			} else if (this.active.length && !$.contains(this.tablist[0], this.active[0])) {
				if (this.tabs.length === options.disabled.length) {
					options.active = false;
					this.active = $();
				} else {
					this._activate(this._findNextTab(Math.max(0, options.active - 1), false));
				}
			} else {
				options.active = this.tabs.index(this.active);
			}
			this._refresh();
		},
		_refresh: function () {
			this._setupDisabled(this.options.disabled);
			this._setupEvents(this.options.event);
			this._setupHeightStyle(this.options.heightStyle);
			this.tabs.not(this.active).attr({
				"aria-selected": "false",
				"aria-expanded": "false",
				tabIndex: -1
			});
			this.panels.not(this._getPanelForTab(this.active)).hide().attr({
				"aria-hidden": "true"
			});
			if (!this.active.length) {
				this.tabs.eq(0).attr("tabIndex", 0);
			} else {
				this.active.addClass("ui-tabs-active ui-state-active").attr({
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				});
				this._getPanelForTab(this.active).show().attr({
					"aria-hidden": "false"
				});
			}
		},
		_processTabs: function () {
			var that = this,
				prevTabs = this.tabs,
				prevAnchors = this.anchors,
				prevPanels = this.panels;
			this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (event) {
				if ($(this).is(".ui-state-disabled")) {
					event.preventDefault();
				}
			}).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
				if ($(this).closest("li").is(".ui-state-disabled")) {
					this.blur();
				}
			});
			this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
				role: "tab",
				tabIndex: -1
			});
			this.anchors = this.tabs.map(function () {
				return $("a", this)[0];
			}).addClass("ui-tabs-anchor").attr({
				role: "presentation",
				tabIndex: -1
			});
			this.panels = $();
			this.anchors.each(function (i, anchor) {
				var selector, panel, panelId, anchorId = $(anchor).uniqueId().attr("id"),
					tab = $(anchor).closest("li"),
					originalAriaControls = tab.attr("aria-controls");
				if (that._isLocal(anchor)) {
					selector = anchor.hash;
					panelId = selector.substring(1);
					panel = that.element.find(that._sanitizeSelector(selector));
				} else {
					panelId = tab.attr("aria-controls") || $({}).uniqueId()[0].id;
					selector = "#" + panelId;
					panel = that.element.find(selector);
					if (!panel.length) {
						panel = that._createPanel(panelId);
						panel.insertAfter(that.panels[i - 1] || that.tablist);
					}
					panel.attr("aria-live", "polite");
				}
				if (panel.length) {
					that.panels = that.panels.add(panel);
				}
				if (originalAriaControls) {
					tab.data("ui-tabs-aria-controls", originalAriaControls);
				}
				tab.attr({
					"aria-controls": panelId,
					"aria-labelledby": anchorId
				});
				panel.attr("aria-labelledby", anchorId);
			});
			this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel");
			if (prevTabs) {
				this._off(prevTabs.not(this.tabs));
				this._off(prevAnchors.not(this.anchors));
				this._off(prevPanels.not(this.panels));
			}
		},
		_getList: function () {
			return this.tablist || this.element.find("ol,ul").eq(0);
		},
		_createPanel: function (id) {
			return $("<div>").attr("id", id).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", true);
		},
		_setupDisabled: function (disabled) {
			if ($.isArray(disabled)) {
				if (!disabled.length) {
					disabled = false;
				} else if (disabled.length === this.anchors.length) {
					disabled = true;
				}
			}
			for (var i = 0, li;
				(li = this.tabs[i]); i++) {
				if (disabled === true || $.inArray(i, disabled) !== -1) {
					$(li).addClass("ui-state-disabled").attr("aria-disabled", "true");
				} else {
					$(li).removeClass("ui-state-disabled").removeAttr("aria-disabled");
				}
			}
			this.options.disabled = disabled;
		},
		_setupEvents: function (event) {
			var events = {};
			if (event) {
				$.each(event.split(" "), function (index, eventName) {
					events[eventName] = "_eventHandler";
				});
			}
			this._off(this.anchors.add(this.tabs).add(this.panels));
			this._on(true, this.anchors, {
				click: function (event) {
					event.preventDefault();
				}
			});
			this._on(this.anchors, events);
			this._on(this.tabs, {
				keydown: "_tabKeydown"
			});
			this._on(this.panels, {
				keydown: "_panelKeydown"
			});
			this._focusable(this.tabs);
			this._hoverable(this.tabs);
		},
		_setupHeightStyle: function (heightStyle) {
			var maxHeight, parent = this.element.parent();
			if (heightStyle === "fill") {
				maxHeight = parent.height();
				maxHeight -= this.element.outerHeight() - this.element.height();
				this.element.siblings(":visible").each(function () {
					var elem = $(this),
						position = elem.css("position");
					if (position === "absolute" || position === "fixed") {
						return;
					}
					maxHeight -= elem.outerHeight(true);
				});
				this.element.children().not(this.panels).each(function () {
					maxHeight -= $(this).outerHeight(true);
				});
				this.panels.each(function () {
					$(this).height(Math.max(0, maxHeight - $(this).innerHeight() + $(this).height()));
				}).css("overflow", "auto");
			} else if (heightStyle === "auto") {
				maxHeight = 0;
				this.panels.each(function () {
					maxHeight = Math.max(maxHeight, $(this).height("").height());
				}).height(maxHeight);
			}
		},
		_eventHandler: function (event) {
			var options = this.options,
				active = this.active,
				anchor = $(event.currentTarget),
				tab = anchor.closest("li"),
				clickedIsActive = tab[0] === active[0],
				collapsing = clickedIsActive && options.collapsible,
				toShow = collapsing ? $() : this._getPanelForTab(tab),
				toHide = !active.length ? $() : this._getPanelForTab(active),
				eventData = {
					oldTab: active,
					oldPanel: toHide,
					newTab: collapsing ? $() : tab,
					newPanel: toShow
				};
			event.preventDefault();
			if (tab.hasClass("ui-state-disabled") || tab.hasClass("ui-tabs-loading") || this.running || (clickedIsActive && !options.collapsible) || (this._trigger("beforeActivate", event, eventData) === false)) {
				return;
			}
			options.active = collapsing ? false : this.tabs.index(tab);
			this.active = clickedIsActive ? $() : tab;
			if (this.xhr) {
				this.xhr.abort();
			}
			if (!toHide.length && !toShow.length) {
				$.error("jQuery UI Tabs: Mismatching fragment identifier.");
			}
			if (toShow.length) {
				this.load(this.tabs.index(tab), event);
			}
			this._toggle(event, eventData);
		},
		_toggle: function (event, eventData) {
			var that = this,
				toShow = eventData.newPanel,
				toHide = eventData.oldPanel;
			this.running = true;

			function complete() {
				that.running = false;
				that._trigger("activate", event, eventData);
			}

			function show() {
				eventData.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
				if (toShow.length && that.options.show) {
					that._show(toShow, that.options.show, complete);
				} else {
					toShow.show();
					complete();
				}
			}
			if (toHide.length && this.options.hide) {
				this._hide(toHide, this.options.hide, function () {
					eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
					show();
				});
			} else {
				eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
				toHide.hide();
				show();
			}
			toHide.attr("aria-hidden", "true");
			eventData.oldTab.attr({
				"aria-selected": "false",
				"aria-expanded": "false"
			});
			if (toShow.length && toHide.length) {
				eventData.oldTab.attr("tabIndex", -1);
			} else if (toShow.length) {
				this.tabs.filter(function () {
					return $(this).attr("tabIndex") === 0;
				}).attr("tabIndex", -1);
			}
			toShow.attr("aria-hidden", "false");
			eventData.newTab.attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			});
		},
		_activate: function (index) {
			var anchor, active = this._findActive(index);
			if (active[0] === this.active[0]) {
				return;
			}
			if (!active.length) {
				active = this.active;
			}
			anchor = active.find(".ui-tabs-anchor")[0];
			this._eventHandler({
				target: anchor,
				currentTarget: anchor,
				preventDefault: $.noop
			});
		},
		_findActive: function (index) {
			return index === false ? $() : this.tabs.eq(index);
		},
		_getIndex: function (index) {
			if (typeof index === "string") {
				index = this.anchors.index(this.anchors.filter("[href$='" + index + "']"));
			}
			return index;
		},
		_destroy: function () {
			if (this.xhr) {
				this.xhr.abort();
			}
			this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
			this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
			this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
			this.tablist.unbind(this.eventNamespace);
			this.tabs.add(this.panels).each(function () {
				if ($.data(this, "ui-tabs-destroy")) {
					$(this).remove();
				} else {
					$(this).removeClass("ui-state-default ui-state-active ui-state-disabled " + "ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role");
				}
			});
			this.tabs.each(function () {
				var li = $(this),
					prev = li.data("ui-tabs-aria-controls");
				if (prev) {
					li.attr("aria-controls", prev).removeData("ui-tabs-aria-controls");
				} else {
					li.removeAttr("aria-controls");
				}
			});
			this.panels.show();
			if (this.options.heightStyle !== "content") {
				this.panels.css("height", "");
			}
		},
		enable: function (index) {
			var disabled = this.options.disabled;
			if (disabled === false) {
				return;
			}
			if (index === undefined) {
				disabled = false;
			} else {
				index = this._getIndex(index);
				if ($.isArray(disabled)) {
					disabled = $.map(disabled, function (num) {
						return num !== index ? num : null;
					});
				} else {
					disabled = $.map(this.tabs, function (li, num) {
						return num !== index ? num : null;
					});
				}
			}
			this._setupDisabled(disabled);
		},
		disable: function (index) {
			var disabled = this.options.disabled;
			if (disabled === true) {
				return;
			}
			if (index === undefined) {
				disabled = true;
			} else {
				index = this._getIndex(index);
				if ($.inArray(index, disabled) !== -1) {
					return;
				}
				if ($.isArray(disabled)) {
					disabled = $.merge([index], disabled).sort();
				} else {
					disabled = [index];
				}
			}
			this._setupDisabled(disabled);
		},
		load: function (index, event) {
			index = this._getIndex(index);
			var that = this,
				tab = this.tabs.eq(index),
				anchor = tab.find(".ui-tabs-anchor"),
				panel = this._getPanelForTab(tab),
				eventData = {
					tab: tab,
					panel: panel
				},
				complete = function (jqXHR, status) {
					if (status === "abort") {
						that.panels.stop(false, true);
					}
					tab.removeClass("ui-tabs-loading");
					panel.removeAttr("aria-busy");
					if (jqXHR === that.xhr) {
						delete that.xhr;
					}
				};
			if (this._isLocal(anchor[0])) {
				return;
			}
			this.xhr = $.ajax(this._ajaxSettings(anchor, event, eventData));
			if (this.xhr && this.xhr.statusText !== "canceled") {
				tab.addClass("ui-tabs-loading");
				panel.attr("aria-busy", "true");
				this.xhr.done(function (response, status, jqXHR) {
					setTimeout(function () {
						panel.html(response);
						that._trigger("load", event, eventData);
						complete(jqXHR, status);
					}, 1);
				}).fail(function (jqXHR, status) {
					setTimeout(function () {
						complete(jqXHR, status);
					}, 1);
				});
			}
		},
		_ajaxSettings: function (anchor, event, eventData) {
			var that = this;
			return {
				url: anchor.attr("href"),
				beforeSend: function (jqXHR, settings) {
					return that._trigger("beforeLoad", event, $.extend({
						jqXHR: jqXHR,
						ajaxSettings: settings
					}, eventData));
				}
			};
		},
		_getPanelForTab: function (tab) {
			var id = $(tab).attr("aria-controls");
			return this.element.find(this._sanitizeSelector("#" + id));
		}
	});
	var tooltip = $.widget("ui.tooltip", {
		version: "1.11.4",
		options: {
			content: function () {
				var title = $(this).attr("title") || "";
				return $("<a>").text(title).html();
			},
			hide: true,
			items: "[title]:not([disabled])",
			position: {
				my: "left top+15",
				at: "left bottom",
				collision: "flipfit flip"
			},
			show: true,
			tooltipClass: null,
			track: false,
			close: null,
			open: null
		},
		_addDescribedBy: function (elem, id) {
			var describedby = (elem.attr("aria-describedby") || "").split(/\s+/);
			describedby.push(id);
			elem.data("ui-tooltip-id", id).attr("aria-describedby", $.trim(describedby.join(" ")));
		},
		_removeDescribedBy: function (elem) {
			var id = elem.data("ui-tooltip-id"),
				describedby = (elem.attr("aria-describedby") || "").split(/\s+/),
				index = $.inArray(id, describedby);
			if (index !== -1) {
				describedby.splice(index, 1);
			}
			elem.removeData("ui-tooltip-id");
			describedby = $.trim(describedby.join(" "));
			if (describedby) {
				elem.attr("aria-describedby", describedby);
			} else {
				elem.removeAttr("aria-describedby");
			}
		},
		_create: function () {
			this._on({
				mouseover: "open",
				focusin: "open"
			});
			this.tooltips = {};
			this.parents = {};
			if (this.options.disabled) {
				this._disable();
			}
			this.liveRegion = $("<div>").attr({
				role: "log",
				"aria-live": "assertive",
				"aria-relevant": "additions"
			}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
		},
		_setOption: function (key, value) {
			var that = this;
			if (key === "disabled") {
				this[value ? "_disable" : "_enable"]();
				this.options[key] = value;
				return;
			}
			this._super(key, value);
			if (key === "content") {
				$.each(this.tooltips, function (id, tooltipData) {
					that._updateContent(tooltipData.element);
				});
			}
		},
		_disable: function () {
			var that = this;
			$.each(this.tooltips, function (id, tooltipData) {
				var event = $.Event("blur");
				event.target = event.currentTarget = tooltipData.element[0];
				that.close(event, true);
			});
			this.element.find(this.options.items).addBack().each(function () {
				var element = $(this);
				if (element.is("[title]")) {
					element.data("ui-tooltip-title", element.attr("title")).removeAttr("title");
				}
			});
		},
		_enable: function () {
			this.element.find(this.options.items).addBack().each(function () {
				var element = $(this);
				if (element.data("ui-tooltip-title")) {
					element.attr("title", element.data("ui-tooltip-title"));
				}
			});
		},
		open: function (event) {
			var that = this,
				target = $(event ? event.target : this.element).closest(this.options.items);
			if (!target.length || target.data("ui-tooltip-id")) {
				return;
			}
			if (target.attr("title")) {
				target.data("ui-tooltip-title", target.attr("title"));
			}
			target.data("ui-tooltip-open", true);
			if (event && event.type === "mouseover") {
				target.parents().each(function () {
					var parent = $(this),
						blurEvent;
					if (parent.data("ui-tooltip-open")) {
						blurEvent = $.Event("blur");
						blurEvent.target = blurEvent.currentTarget = this;
						that.close(blurEvent, true);
					}
					if (parent.attr("title")) {
						parent.uniqueId();
						that.parents[this.id] = {
							element: this,
							title: parent.attr("title")
						};
						parent.attr("title", "");
					}
				});
			}
			this._registerCloseHandlers(event, target);
			this._updateContent(target, event);
		},
		_updateContent: function (target, event) {
			var content, contentOption = this.options.content,
				that = this,
				eventType = event ? event.type : null;
			if (typeof contentOption === "string") {
				return this._open(event, target, contentOption);
			}
			content = contentOption.call(target[0], function (response) {
				that._delay(function () {
					if (!target.data("ui-tooltip-open")) {
						return;
					}
					if (event) {
						event.type = eventType;
					}
					this._open(event, target, response);
				});
			});
			if (content) {
				this._open(event, target, content);
			}
		},
		_open: function (event, target, content) {
			var tooltipData, tooltip, delayedShow, a11yContent, positionOption = $.extend({}, this.options.position);
			if (!content) {
				return;
			}
			tooltipData = this._find(target);
			if (tooltipData) {
				tooltipData.tooltip.find(".ui-tooltip-content").html(content);
				return;
			}
			if (target.is("[title]")) {
				if (event && event.type === "mouseover") {
					target.attr("title", "");
				} else {
					target.removeAttr("title");
				}
			}
			tooltipData = this._tooltip(target);
			tooltip = tooltipData.tooltip;
			this._addDescribedBy(target, tooltip.attr("id"));
			tooltip.find(".ui-tooltip-content").html(content);
			this.liveRegion.children().hide();
			if (content.clone) {
				a11yContent = content.clone();
				a11yContent.removeAttr("id").find("[id]").removeAttr("id");
			} else {
				a11yContent = content;
			}
			$("<div>").html(a11yContent).appendTo(this.liveRegion);

			function position(event) {
				positionOption.of = event;
				if (tooltip.is(":hidden")) {
					return;
				}
				tooltip.position(positionOption);
			}
			if (this.options.track && event && /^mouse/.test(event.type)) {
				this._on(this.document, {
					mousemove: position
				});
				position(event);
			} else {
				tooltip.position($.extend({ of: target
				}, this.options.position));
			}
			tooltip.hide();
			this._show(tooltip, this.options.show);
			if (this.options.show && this.options.show.delay) {
				delayedShow = this.delayedShow = setInterval(function () {
					if (tooltip.is(":visible")) {
						position(positionOption.of);
						clearInterval(delayedShow);
					}
				}, $.fx.interval);
			}
			this._trigger("open", event, {
				tooltip: tooltip
			});
		},
		_registerCloseHandlers: function (event, target) {
			var events = {
				keyup: function (event) {
					if (event.keyCode === $.ui.keyCode.ESCAPE) {
						var fakeEvent = $.Event(event);
						fakeEvent.currentTarget = target[0];
						this.close(fakeEvent, true);
					}
				}
			};
			if (target[0] !== this.element[0]) {
				events.remove = function () {
					this._removeTooltip(this._find(target).tooltip);
				};
			}
			if (!event || event.type === "mouseover") {
				events.mouseleave = "close";
			}
			if (!event || event.type === "focusin") {
				events.focusout = "close";
			}
			this._on(true, target, events);
		},
		close: function (event) {
			var tooltip, that = this,
				target = $(event ? event.currentTarget : this.element),
				tooltipData = this._find(target);
			if (!tooltipData) {
				target.removeData("ui-tooltip-open");
				return;
			}
			tooltip = tooltipData.tooltip;
			if (tooltipData.closing) {
				return;
			}
			clearInterval(this.delayedShow);
			if (target.data("ui-tooltip-title") && !target.attr("title")) {
				target.attr("title", target.data("ui-tooltip-title"));
			}
			this._removeDescribedBy(target);
			tooltipData.hiding = true;
			tooltip.stop(true);
			this._hide(tooltip, this.options.hide, function () {
				that._removeTooltip($(this));
			});
			target.removeData("ui-tooltip-open");
			this._off(target, "mouseleave focusout keyup");
			if (target[0] !== this.element[0]) {
				this._off(target, "remove");
			}
			this._off(this.document, "mousemove");
			if (event && event.type === "mouseleave") {
				$.each(this.parents, function (id, parent) {
					$(parent.element).attr("title", parent.title);
					delete that.parents[id];
				});
			}
			tooltipData.closing = true;
			this._trigger("close", event, {
				tooltip: tooltip
			});
			if (!tooltipData.hiding) {
				tooltipData.closing = false;
			}
		},
		_tooltip: function (element) {
			var tooltip = $("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
				id = tooltip.uniqueId().attr("id");
			$("<div>").addClass("ui-tooltip-content").appendTo(tooltip);
			tooltip.appendTo(this.document[0].body);
			return this.tooltips[id] = {
				element: element,
				tooltip: tooltip
			};
		},
		_find: function (target) {
			var id = target.data("ui-tooltip-id");
			return id ? this.tooltips[id] : null;
		},
		_removeTooltip: function (tooltip) {
			tooltip.remove();
			delete this.tooltips[tooltip.attr("id")];
		},
		_destroy: function () {
			var that = this;
			$.each(this.tooltips, function (id, tooltipData) {
				var event = $.Event("blur"),
					element = tooltipData.element;
				event.target = event.currentTarget = element[0];
				that.close(event, true);
				$("#" + id).remove();
				if (element.data("ui-tooltip-title")) {
					if (!element.attr("title")) {
						element.attr("title", element.data("ui-tooltip-title"));
					}
					element.removeData("ui-tooltip-title");
				}
			});
			this.liveRegion.remove();
		}
	});
}));
! function ($) {
	"use strict";
	var Typed = function (el, options) {
		this.el = $(el);
		this.options = $.extend({}, $.fn.typed.defaults, options);
		this.isInput = this.el.is('input');
		this.attr = this.options.attr;
		this.showCursor = this.isInput ? false : this.options.showCursor;
		this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text();
		this.contentType = this.options.contentType;
		this.typeSpeed = this.options.typeSpeed;
		this.startDelay = this.options.startDelay;
		this.backSpeed = this.options.backSpeed;
		this.backDelay = this.options.backDelay;
		this.stringsElement = this.options.stringsElement;
		this.strings = this.options.strings;
		this.strPos = 0;
		this.arrayPos = 0;
		this.stopNum = 0;
		this.loop = this.options.loop;
		this.loopCount = this.options.loopCount;
		this.curLoop = 0;
		this.stop = false;
		this.cursorChar = this.options.cursorChar;
		this.shuffle = this.options.shuffle;
		this.sequence = [];
		this.build();
	};
	Typed.prototype = {
		constructor: Typed,
		init: function () {
			var self = this;
			self.timeout = setTimeout(function () {
				for (var i = 0; i < self.strings.length; ++i) self.sequence[i] = i;
				if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);
				self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
			}, self.startDelay);
		},
		build: function () {
			var self = this;
			if (this.showCursor === true) {
				this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
				this.el.after(this.cursor);
			}
			if (this.stringsElement) {
				this.strings = [];
				this.stringsElement.hide();
				console.log(this.stringsElement.children());
				var strings = this.stringsElement.children();
				$.each(strings, function (key, value) {
					self.strings.push($(value).html());
				});
			}
			this.init();
		},
		typewrite: function (curString, curStrPos) {
			if (this.stop === true) {
				return;
			}
			var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
			var self = this;
			self.timeout = setTimeout(function () {
				var charPause = 0;
				var substr = curString.substr(curStrPos);
				if (substr.charAt(0) === '^') {
					var skip = 1;
					if (/^\^\d+/.test(substr)) {
						substr = /\d+/.exec(substr)[0];
						skip += substr.length;
						charPause = parseInt(substr);
					}
					curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
				}
				if (self.contentType === 'html') {
					var curChar = curString.substr(curStrPos).charAt(0)
					if (curChar === '<' || curChar === '&') {
						var tag = '';
						var endTag = '';
						if (curChar === '<') {
							endTag = '>'
						} else {
							endTag = ';'
						}
						while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
							tag += curString.substr(curStrPos).charAt(0);
							curStrPos++;
							if (curStrPos + 1 > curString.length) {
								break;
							}
						}
						curStrPos++;
						tag += endTag;
					}
				}
				self.timeout = setTimeout(function () {
					if (curStrPos === curString.length) {
						self.options.onStringTyped(self.arrayPos);
						if (self.arrayPos === self.strings.length - 1) {
							self.options.callback();
							self.curLoop++;
							if (self.loop === false || self.curLoop === self.loopCount)
								return;
						}
						self.timeout = setTimeout(function () {
							self.backspace(curString, curStrPos);
						}, self.backDelay);
					} else {
						if (curStrPos === 0) {
							self.options.preStringTyped(self.arrayPos);
						}
						var nextString = curString.substr(0, curStrPos + 1);
						if (self.attr) {
							self.el.attr(self.attr, nextString);
						} else {
							if (self.isInput) {
								self.el.val(nextString);
							} else if (self.contentType === 'html') {
								self.el.html(nextString);
							} else {
								self.el.text(nextString);
							}
						}
						curStrPos++;
						self.typewrite(curString, curStrPos);
					}
				}, charPause);
			}, humanize);
		},
		backspace: function (curString, curStrPos) {
			if (this.stop === true) {
				return;
			}
			var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
			var self = this;
			self.timeout = setTimeout(function () {
				if (self.contentType === 'html') {
					if (curString.substr(curStrPos).charAt(0) === '>') {
						var tag = '';
						while (curString.substr(curStrPos - 1).charAt(0) !== '<') {
							tag -= curString.substr(curStrPos).charAt(0);
							curStrPos--;
							if (curStrPos < 0) {
								break;
							}
						}
						curStrPos--;
						tag += '<';
					}
				}
				var nextString = curString.substr(0, curStrPos);
				if (self.attr) {
					self.el.attr(self.attr, nextString);
				} else {
					if (self.isInput) {
						self.el.val(nextString);
					} else if (self.contentType === 'html') {
						self.el.html(nextString);
					} else {
						self.el.text(nextString);
					}
				}
				if (curStrPos > self.stopNum) {
					curStrPos--;
					self.backspace(curString, curStrPos);
				} else if (curStrPos <= self.stopNum) {
					self.arrayPos++;
					if (self.arrayPos === self.strings.length) {
						self.arrayPos = 0;
						if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);
						self.init();
					} else
						self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
				}
			}, humanize);
		},
		shuffleArray: function (array) {
			var tmp, current, top = array.length;
			if (top)
				while (--top) {
					current = Math.floor(Math.random() * (top + 1));
					tmp = array[current];
					array[current] = array[top];
					array[top] = tmp;
				}
			return array;
		},
		reset: function () {
			var self = this;
			clearInterval(self.timeout);
			var id = this.el.attr('id');
			this.el.empty();
			if (typeof this.cursor !== 'undefined') {
				this.cursor.remove();
			}
			this.strPos = 0;
			this.arrayPos = 0;
			this.curLoop = 0;
			this.options.resetCallback();
		}
	};
	$.fn.typed = function (option) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('typed'),
				options = typeof option == 'object' && option;
			if (data) {
				data.reset();
			}
			$this.data('typed', (data = new Typed(this, options)));
			if (typeof option == 'string') data[option]();
		});
	};
	$.fn.typed.defaults = {
		strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
		stringsElement: null,
		typeSpeed: 0,
		startDelay: 0,
		backSpeed: 0,
		shuffle: false,
		backDelay: 500,
		loop: false,
		loopCount: false,
		showCursor: true,
		cursorChar: "|",
		attr: null,
		contentType: 'html',
		callback: function () {},
		preStringTyped: function () {},
		onStringTyped: function () {},
		resetCallback: function () {}
	};
}(window.jQuery);;
window.Modernizr = function (a, b, c) {
		function z(a) {
			j.cssText = a
		}

		function A(a, b) {
			return z(m.join(a + ";") + (b || ""))
		}

		function B(a, b) {
			return typeof a === b
		}

		function C(a, b) {
			return !!~("" + a).indexOf(b)
		}

		function D(a, b) {
			for (var d in a) {
				var e = a[d];
				if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
			}
			return !1
		}

		function E(a, b, d) {
			for (var e in a) {
				var f = b[a[e]];
				if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
			}
			return !1
		}

		function F(a, b, c) {
			var d = a.charAt(0).toUpperCase() + a.slice(1),
				e = (a + " " + o.join(d + " ") + d).split(" ");
			return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
		}
		var d = "2.6.2",
			e = {},
			f = !0,
			g = b.documentElement,
			h = "modernizr",
			i = b.createElement(h),
			j = i.style,
			k, l = {}.toString,
			m = " -webkit- -moz- -o- -ms- ".split(" "),
			n = "Webkit Moz O ms",
			o = n.split(" "),
			p = n.toLowerCase().split(" "),
			q = {},
			r = {},
			s = {},
			t = [],
			u = t.slice,
			v, w = function (a, c, d, e) {
				var f, i, j, k, l = b.createElement("div"),
					m = b.body,
					n = m || b.createElement("body");
				if (parseInt(d, 10))
					while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
				return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
			},
			x = {}.hasOwnProperty,
			y;
		!B(x, "undefined") && !B(x.call, "undefined") ? y = function (a, b) {
			return x.call(a, b)
		} : y = function (a, b) {
			return b in a && B(a.constructor.prototype[b], "undefined")
		}, Function.prototype.bind || (Function.prototype.bind = function (b) {
			var c = this;
			if (typeof c != "function") throw new TypeError;
			var d = u.call(arguments, 1),
				e = function () {
					if (this instanceof e) {
						var a = function () {};
						a.prototype = c.prototype;
						var f = new a,
							g = c.apply(f, d.concat(u.call(arguments)));
						return Object(g) === g ? g : f
					}
					return c.apply(b, d.concat(u.call(arguments)))
				};
			return e
		}), q.touch = function () {
			var c;
			return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
				c = a.offsetTop === 9
			}), c
		}, q.csstransforms = function () {
			return !!F("transform")
		}, q.csstransitions = function () {
			return F("transition")
		};
		for (var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
		return e.addTest = function (a, b) {
				if (typeof a == "object")
					for (var d in a) y(a, d) && e.addTest(d, a[d]);
				else {
					a = a.toLowerCase();
					if (e[a] !== c) return e;
					b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
				}
				return e
			}, z(""), i = k = null,
			function (a, b) {
				function k(a, b) {
					var c = a.createElement("p"),
						d = a.getElementsByTagName("head")[0] || a.documentElement;
					return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
				}

				function l() {
					var a = r.elements;
					return typeof a == "string" ? a.split(" ") : a
				}

				function m(a) {
					var b = i[a[g]];
					return b || (b = {}, h++, a[g] = h, i[h] = b), b
				}

				function n(a, c, f) {
					c || (c = b);
					if (j) return c.createElement(a);
					f || (f = m(c));
					var g;
					return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
				}

				function o(a, c) {
					a || (a = b);
					if (j) return a.createDocumentFragment();
					c = c || m(a);
					var d = c.frag.cloneNode(),
						e = 0,
						f = l(),
						g = f.length;
					for (; e < g; e++) d.createElement(f[e]);
					return d
				}

				function p(a, b) {
					b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
						return r.shivMethods ? n(c, a, b) : b.createElem(c)
					}, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function (a) {
						return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
					}) + ");return n}")(r, b.frag)
				}

				function q(a) {
					a || (a = b);
					var c = m(a);
					return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
				}
				var c = a.html5 || {},
					d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
					e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
					f, g = "_html5shiv",
					h = 0,
					i = {},
					j;
				(function () {
					try {
						var a = b.createElement("a");
						a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function () {
							b.createElement("a");
							var a = b.createDocumentFragment();
							return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
						}()
					} catch (c) {
						f = !0, j = !0
					}
				})();
				var r = {
					elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
					shivCSS: c.shivCSS !== !1,
					supportsUnknownElements: j,
					shivMethods: c.shivMethods !== !1,
					type: "default",
					shivDocument: q,
					createElement: n,
					createDocumentFragment: o
				};
				a.html5 = r, q(b)
			}(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function (a) {
				return D([a])
			}, e.testAllProps = F, e.testStyles = w, e.prefixed = function (a, b, c) {
				return b ? F(a, b, c) : F(a, "pfx")
			}, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
	}(this, this.document),
	function (a, b, c) {
		function d(a) {
			return "[object Function]" == o.call(a)
		}

		function e(a) {
			return "string" == typeof a
		}

		function f() {}

		function g(a) {
			return !a || "loaded" == a || "complete" == a || "uninitialized" == a
		}

		function h() {
			var a = p.shift();
			q = 1, a ? a.t ? m(function () {
				("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
			}, 0) : (a(), h()) : q = 0
		}

		function i(a, c, d, e, f, i, j) {
			function k(b) {
				if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
					"img" != a && m(function () {
						t.removeChild(l)
					}, 50);
					for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
				}
			}
			var j = j || B.errorTimeout,
				l = b.createElement(a),
				o = 0,
				r = 0,
				u = {
					t: d,
					s: c,
					e: f,
					a: i,
					x: j
				};
			1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
				k.call(this, r)
			}, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
		}

		function j(a, b, c, d, f) {
			return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
		}

		function k() {
			var a = B;
			return a.loader = {
				load: j,
				i: 0
			}, a
		}
		var l = b.documentElement,
			m = a.setTimeout,
			n = b.getElementsByTagName("script")[0],
			o = {}.toString,
			p = [],
			q = 0,
			r = "MozAppearance" in l.style,
			s = r && !!b.createRange().compareNode,
			t = s ? l : n.parentNode,
			l = a.opera && "[object Opera]" == o.call(a.opera),
			l = !!b.attachEvent && !l,
			u = r ? "object" : l ? "script" : "img",
			v = l ? "script" : u,
			w = Array.isArray || function (a) {
				return "[object Array]" == o.call(a)
			},
			x = [],
			y = {},
			z = {
				timeout: function (a, b) {
					return b.length && (a.timeout = b[0]), a
				}
			},
			A, B;
		B = function (a) {
			function b(a) {
				var a = a.split("!"),
					b = x.length,
					c = a.pop(),
					d = a.length,
					c = {
						url: c,
						origUrl: c,
						prefixes: a
					},
					e, f, g;
				for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
				for (f = 0; f < b; f++) c = x[f](c);
				return c
			}

			function g(a, e, f, g, h) {
				var i = b(a),
					j = i.autoCallback;
				i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
					k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
				})))
			}

			function h(a, b) {
				function c(a, c) {
					if (a) {
						if (e(a)) c || (j = function () {
							var a = [].slice.call(arguments);
							k.apply(this, a), l()
						}), g(a, j, b, 0, h);
						else if (Object(a) === a)
							for (n in m = function () {
									var b = 0,
										c;
									for (c in a) a.hasOwnProperty(c) && b++;
									return b
								}(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
								var a = [].slice.call(arguments);
								k.apply(this, a), l()
							} : j[n] = function (a) {
								return function () {
									var b = [].slice.call(arguments);
									a && a.apply(this, b), l()
								}
							}(k[n])), g(a[n], j, b, n, h))
					} else !c && l()
				}
				var h = !!a.test,
					i = a.load || a.both,
					j = a.callback || f,
					k = j,
					l = a.complete || f,
					m, n;
				c(h ? a.yep : a.nope, !!i), i && c(i)
			}
			var i, j, l = this.yepnope.loader;
			if (e(a)) g(a, 0, l, 0);
			else if (w(a))
				for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
			else Object(a) === a && h(a, l)
		}, B.addPrefix = function (a, b) {
			z[a] = b
		}, B.addFilter = function (a) {
			x.push(a)
		}, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
			b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
		}, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
			var k = b.createElement("script"),
				l, o, e = e || B.errorTimeout;
			k.src = a;
			for (o in d) k.setAttribute(o, d[o]);
			c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
				!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
			}, m(function () {
				l || (l = 1, c(1))
			}, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
		}, a.yepnope.injectCss = function (a, c, d, e, g, i) {
			var e = b.createElement("link"),
				j, c = i ? h : c || f;
			e.href = a, e.rel = "stylesheet", e.type = "text/css";
			for (j in d) e.setAttribute(j, d[j]);
			g || (n.parentNode.insertBefore(e, n), m(c, 0))
		}
	}(this, document), Modernizr.load = function () {
		yepnope.apply(window, [].slice.call(arguments, 0))
	};
! function (t, e) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
	"use strict";

	function i(i, r, a) {
		function h(t, e, n) {
			var o, r = "$()." + i + '("' + e + '")';
			return t.each(function (t, h) {
				var u = a.data(h, i);
				if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
				var d = u[e];
				if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
				var l = d.apply(u, n);
				o = void 0 === o ? l : o
			}), void 0 !== o ? o : t
		}

		function u(t, e) {
			t.each(function (t, n) {
				var o = a.data(n, i);
				o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
			})
		}
		a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function (t) {
			a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
		}), a.fn[i] = function (t) {
			if ("string" == typeof t) {
				var e = o.call(arguments, 1);
				return h(this, t, e)
			}
			return u(this, t), this
		}, n(a))
	}

	function n(t) {
		!t || t && t.bridget || (t.bridget = i)
	}
	var o = Array.prototype.slice,
		r = t.console,
		s = "undefined" == typeof r ? function () {} : function (t) {
			r.error(t)
		};
	return n(e || t.jQuery), i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
	function t() {}
	var e = t.prototype;
	return e.on = function (t, e) {
		if (t && e) {
			var i = this._events = this._events || {},
				n = i[t] = i[t] || [];
			return -1 == n.indexOf(e) && n.push(e), this
		}
	}, e.once = function (t, e) {
		if (t && e) {
			this.on(t, e);
			var i = this._onceEvents = this._onceEvents || {},
				n = i[t] = i[t] || {};
			return n[e] = !0, this
		}
	}, e.off = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			var n = i.indexOf(e);
			return -1 != n && i.splice(n, 1), this
		}
	}, e.emitEvent = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			var n = 0,
				o = i[n];
			e = e || [];
			for (var r = this._onceEvents && this._onceEvents[t]; o;) {
				var s = r && r[o];
				s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
			}
			return this
		}
	}, t
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
		return e()
	}) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
	"use strict";

	function t(t) {
		var e = parseFloat(t),
			i = -1 == t.indexOf("%") && !isNaN(e);
		return i && e
	}

	function e() {}

	function i() {
		for (var t = {
				width: 0,
				height: 0,
				innerWidth: 0,
				innerHeight: 0,
				outerWidth: 0,
				outerHeight: 0
			}, e = 0; u > e; e++) {
			var i = h[e];
			t[i] = 0
		}
		return t
	}

	function n(t) {
		var e = getComputedStyle(t);
		return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
	}

	function o() {
		if (!d) {
			d = !0;
			var e = document.createElement("div");
			e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
			var i = document.body || document.documentElement;
			i.appendChild(e);
			var o = n(e);
			r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e)
		}
	}

	function r(e) {
		if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
			var r = n(e);
			if ("none" == r.display) return i();
			var a = {};
			a.width = e.offsetWidth, a.height = e.offsetHeight;
			for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
				var c = h[l],
					f = r[c],
					m = parseFloat(f);
				a[c] = isNaN(m) ? 0 : m
			}
			var p = a.paddingLeft + a.paddingRight,
				g = a.paddingTop + a.paddingBottom,
				y = a.marginLeft + a.marginRight,
				v = a.marginTop + a.marginBottom,
				_ = a.borderLeftWidth + a.borderRightWidth,
				E = a.borderTopWidth + a.borderBottomWidth,
				z = d && s,
				b = t(r.width);
			b !== !1 && (a.width = b + (z ? 0 : p + _));
			var x = t(r.height);
			return x !== !1 && (a.height = x + (z ? 0 : g + E)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + E), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
		}
	}
	var s, a = "undefined" == typeof console ? e : function (t) {
			console.error(t)
		},
		h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
		u = h.length,
		d = !1;
	return r
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
	"use strict";
	var t = function () {
		var t = Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
			var n = e[i],
				o = n + "MatchesSelector";
			if (t[o]) return o
		}
	}();
	return function (e, i) {
		return e[t](i)
	}
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
	var i = {};
	i.extend = function (t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}, i.modulo = function (t, e) {
		return (t % e + e) % e
	}, i.makeArray = function (t) {
		var e = [];
		if (Array.isArray(t)) e = t;
		else if (t && "number" == typeof t.length)
			for (var i = 0; i < t.length; i++) e.push(t[i]);
		else e.push(t);
		return e
	}, i.removeFrom = function (t, e) {
		var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
	}, i.getParent = function (t, i) {
		for (; t != document.body;)
			if (t = t.parentNode, e(t, i)) return t
	}, i.getQueryElement = function (t) {
		return "string" == typeof t ? document.querySelector(t) : t
	}, i.handleEvent = function (t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, i.filterFindElements = function (t, n) {
		t = i.makeArray(t);
		var o = [];
		return t.forEach(function (t) {
			if (t instanceof HTMLElement) {
				if (!n) return void o.push(t);
				e(t, n) && o.push(t);
				for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
			}
		}), o
	}, i.debounceMethod = function (t, e, i) {
		var n = t.prototype[e],
			o = e + "Timeout";
		t.prototype[e] = function () {
			var t = this[o];
			t && clearTimeout(t);
			var e = arguments,
				r = this;
			this[o] = setTimeout(function () {
				n.apply(r, e), delete r[o]
			}, i || 100)
		}
	}, i.docReady = function (t) {
		var e = document.readyState;
		"complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
	}, i.toDashed = function (t) {
		return t.replace(/(.)([A-Z])/g, function (t, e, i) {
			return e + "-" + i
		}).toLowerCase()
	};
	var n = t.console;
	return i.htmlInit = function (e, o) {
		i.docReady(function () {
			var r = i.toDashed(o),
				s = "data-" + r,
				a = document.querySelectorAll("[" + s + "]"),
				h = document.querySelectorAll(".js-" + r),
				u = i.makeArray(a).concat(i.makeArray(h)),
				d = s + "-options",
				l = t.jQuery;
			u.forEach(function (t) {
				var i, r = t.getAttribute(s) || t.getAttribute(d);
				try {
					i = r && JSON.parse(r)
				} catch (a) {
					return void(n && n.error("Error parsing " + s + " on " + t.className + ": " + a))
				}
				var h = new e(t, i);
				l && l.data(t, o, h)
			})
		})
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
	"use strict";

	function i(t) {
		for (var e in t) return !1;
		return e = null, !0
	}

	function n(t, e) {
		t && (this.element = t, this.layout = e, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}

	function o(t) {
		return t.replace(/([A-Z])/g, function (t) {
			return "-" + t.toLowerCase()
		})
	}
	var r = document.documentElement.style,
		s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
		a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
		h = {
			WebkitTransition: "webkitTransitionEnd",
			transition: "transitionend"
		}[s],
		u = {
			transform: a,
			transition: s,
			transitionDuration: s + "Duration",
			transitionProperty: s + "Property",
			transitionDelay: s + "Delay"
		},
		d = n.prototype = Object.create(t.prototype);
	d.constructor = n, d._create = function () {
		this._transn = {
			ingProperties: {},
			clean: {},
			onEnd: {}
		}, this.css({
			position: "absolute"
		})
	}, d.handleEvent = function (t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, d.getSize = function () {
		this.size = e(this.element)
	}, d.css = function (t) {
		var e = this.element.style;
		for (var i in t) {
			var n = u[i] || i;
			e[n] = t[i]
		}
	}, d.getPosition = function () {
		var t = getComputedStyle(this.element),
			e = this.layout._getOption("originLeft"),
			i = this.layout._getOption("originTop"),
			n = t[e ? "left" : "right"],
			o = t[i ? "top" : "bottom"],
			r = this.layout.size,
			s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
			a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
		s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
	}, d.layoutPosition = function () {
		var t = this.layout.size,
			e = {},
			i = this.layout._getOption("originLeft"),
			n = this.layout._getOption("originTop"),
			o = i ? "paddingLeft" : "paddingRight",
			r = i ? "left" : "right",
			s = i ? "right" : "left",
			a = this.position.x + t[o];
		e[r] = this.getXValue(a), e[s] = "";
		var h = n ? "paddingTop" : "paddingBottom",
			u = n ? "top" : "bottom",
			d = n ? "bottom" : "top",
			l = this.position.y + t[h];
		e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
	}, d.getXValue = function (t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
	}, d.getYValue = function (t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
	}, d._transitionTo = function (t, e) {
		this.getPosition();
		var i = this.position.x,
			n = this.position.y,
			o = parseInt(t, 10),
			r = parseInt(e, 10),
			s = o === this.position.x && r === this.position.y;
		if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
		var a = t - i,
			h = e - n,
			u = {};
		u.transform = this.getTranslate(a, h), this.transition({
			to: u,
			onTransitionEnd: {
				transform: this.layoutPosition
			},
			isCleaning: !0
		})
	}, d.getTranslate = function (t, e) {
		var i = this.layout._getOption("originLeft"),
			n = this.layout._getOption("originTop");
		return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
	}, d.goTo = function (t, e) {
		this.setPosition(t, e), this.layoutPosition()
	}, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
		this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
	}, d._nonTransition = function (t) {
		this.css(t.to), t.isCleaning && this._removeStyles(t.to);
		for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
	}, d.transition = function (t) {
		if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
		var e = this._transn;
		for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
		for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
		if (t.from) {
			this.css(t.from);
			var n = this.element.offsetHeight;
			n = null
		}
		this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
	};
	var l = "opacity," + o(a);
	d.enableTransition = function () {
		if (!this.isTransitioning) {
			var t = this.layout.options.transitionDuration;
			t = "number" == typeof t ? t + "ms" : t, this.css({
				transitionProperty: l,
				transitionDuration: t,
				transitionDelay: this.staggerDelay || 0
			}), this.element.addEventListener(h, this, !1)
		}
	}, d.onwebkitTransitionEnd = function (t) {
		this.ontransitionend(t)
	}, d.onotransitionend = function (t) {
		this.ontransitionend(t)
	};
	var c = {
		"-webkit-transform": "transform"
	};
	d.ontransitionend = function (t) {
		if (t.target === this.element) {
			var e = this._transn,
				n = c[t.propertyName] || t.propertyName;
			if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
				var o = e.onEnd[n];
				o.call(this), delete e.onEnd[n]
			}
			this.emitEvent("transitionEnd", [this])
		}
	}, d.disableTransition = function () {
		this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
	}, d._removeStyles = function (t) {
		var e = {};
		for (var i in t) e[i] = "";
		this.css(e)
	};
	var f = {
		transitionProperty: "",
		transitionDuration: "",
		transitionDelay: ""
	};
	return d.removeTransitionStyles = function () {
		this.css(f)
	}, d.stagger = function (t) {
		t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
	}, d.removeElem = function () {
		this.element.parentNode.removeChild(this.element), this.css({
			display: ""
		}), this.emitEvent("remove", [this])
	}, d.remove = function () {
		return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
			this.removeElem()
		}), void this.hide()) : void this.removeElem()
	}, d.reveal = function () {
		delete this.isHidden, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("visibleStyle");
		e[i] = this.onRevealTransitionEnd, this.transition({
			from: t.hiddenStyle,
			to: t.visibleStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onRevealTransitionEnd = function () {
		this.isHidden || this.emitEvent("reveal")
	}, d.getHideRevealTransitionEndProperty = function (t) {
		var e = this.layout.options[t];
		if (e.opacity) return "opacity";
		for (var i in e) return i
	}, d.hide = function () {
		this.isHidden = !0, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("hiddenStyle");
		e[i] = this.onHideTransitionEnd, this.transition({
			from: t.visibleStyle,
			to: t.hiddenStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onHideTransitionEnd = function () {
		this.isHidden && (this.css({
			display: "none"
		}), this.emitEvent("hide"))
	}, d.destroy = function () {
		this.css({
			position: "",
			left: "",
			right: "",
			top: "",
			bottom: "",
			transition: "",
			transform: ""
		})
	}, n
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, r) {
		return e(t, i, n, o, r)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, n, o) {
	"use strict";

	function r(t, e) {
		var i = n.getQueryElement(t);
		if (!i) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
		this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
		var o = ++l;
		this.element.outlayerGUID = o, c[o] = this, this._create();
		var r = this._getOption("initLayout");
		r && this.layout()
	}

	function s(t) {
		function e() {
			t.apply(this, arguments)
		}
		return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
	}

	function a(t) {
		if ("number" == typeof t) return t;
		var e = t.match(/(^\d*\.?\d*)(\w*)/),
			i = e && e[1],
			n = e && e[2];
		if (!i.length) return 0;
		i = parseFloat(i);
		var o = m[n] || 1;
		return i * o
	}
	var h = t.console,
		u = t.jQuery,
		d = function () {},
		l = 0,
		c = {};
	r.namespace = "outlayer", r.Item = o, r.defaults = {
		containerStyle: {
			position: "relative"
		},
		initLayout: !0,
		originLeft: !0,
		originTop: !0,
		resize: !0,
		resizeContainer: !0,
		transitionDuration: "0.4s",
		hiddenStyle: {
			opacity: 0,
			transform: "scale(0.001)"
		},
		visibleStyle: {
			opacity: 1,
			transform: "scale(1)"
		}
	};
	var f = r.prototype;
	n.extend(f, e.prototype), f.option = function (t) {
		n.extend(this.options, t)
	}, f._getOption = function (t) {
		var e = this.constructor.compatOptions[t];
		return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
	}, r.compatOptions = {
		initLayout: "isInitLayout",
		horizontal: "isHorizontal",
		layoutInstant: "isLayoutInstant",
		originLeft: "isOriginLeft",
		originTop: "isOriginTop",
		resize: "isResizeBound",
		resizeContainer: "isResizingContainer"
	}, f._create = function () {
		this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
		var t = this._getOption("resize");
		t && this.bindResize()
	}, f.reloadItems = function () {
		this.items = this._itemize(this.element.children)
	}, f._itemize = function (t) {
		for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
			var r = e[o],
				s = new i(r, this);
			n.push(s)
		}
		return n
	}, f._filterFindItemElements = function (t) {
		return n.filterFindElements(t, this.options.itemSelector)
	}, f.getItemElements = function () {
		return this.items.map(function (t) {
			return t.element
		})
	}, f.layout = function () {
		this._resetLayout(), this._manageStamps();
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		this.layoutItems(this.items, e), this._isLayoutInited = !0
	}, f._init = f.layout, f._resetLayout = function () {
		this.getSize()
	}, f.getSize = function () {
		this.size = i(this.element)
	}, f._getMeasurement = function (t, e) {
		var n, o = this.options[t];
		o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
	}, f.layoutItems = function (t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, f._getItemsForLayout = function (t) {
		return t.filter(function (t) {
			return !t.isIgnored
		})
	}, f._layoutItems = function (t, e) {
		if (this._emitCompleteOnItems("layout", t), t && t.length) {
			var i = [];
			t.forEach(function (t) {
				var n = this._getItemLayoutPosition(t);
				n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
			}, this), this._processLayoutQueue(i)
		}
	}, f._getItemLayoutPosition = function () {
		return {
			x: 0,
			y: 0
		}
	}, f._processLayoutQueue = function (t) {
		this.updateStagger(), t.forEach(function (t, e) {
			this._positionItem(t.item, t.x, t.y, t.isInstant, e)
		}, this)
	}, f.updateStagger = function () {
		var t = this.options.stagger;
		return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
	}, f._positionItem = function (t, e, i, n, o) {
		n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
	}, f._postLayout = function () {
		this.resizeContainer()
	}, f.resizeContainer = function () {
		var t = this._getOption("resizeContainer");
		if (t) {
			var e = this._getContainerSize();
			e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
		}
	}, f._getContainerSize = d, f._setContainerMeasure = function (t, e) {
		if (void 0 !== t) {
			var i = this.size;
			i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
		}
	}, f._emitCompleteOnItems = function (t, e) {
		function i() {
			o.dispatchEvent(t + "Complete", null, [e])
		}

		function n() {
			s++, s == r && i()
		}
		var o = this,
			r = e.length;
		if (!e || !r) return void i();
		var s = 0;
		e.forEach(function (e) {
			e.once(t, n)
		})
	}, f.dispatchEvent = function (t, e, i) {
		var n = e ? [e].concat(i) : i;
		if (this.emitEvent(t, n), u)
			if (this.$element = this.$element || u(this.element), e) {
				var o = u.Event(e);
				o.type = t, this.$element.trigger(o, i)
			} else this.$element.trigger(t, i)
	}, f.ignore = function (t) {
		var e = this.getItem(t);
		e && (e.isIgnored = !0)
	}, f.unignore = function (t) {
		var e = this.getItem(t);
		e && delete e.isIgnored
	}, f.stamp = function (t) {
		t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
	}, f.unstamp = function (t) {
		t = this._find(t), t && t.forEach(function (t) {
			n.removeFrom(this.stamps, t), this.unignore(t)
		}, this)
	}, f._find = function (t) {
		return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
	}, f._manageStamps = function () {
		this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
	}, f._getBoundingRect = function () {
		var t = this.element.getBoundingClientRect(),
			e = this.size;
		this._boundingRect = {
			left: t.left + e.paddingLeft + e.borderLeftWidth,
			top: t.top + e.paddingTop + e.borderTopWidth,
			right: t.right - (e.paddingRight + e.borderRightWidth),
			bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
		}
	}, f._manageStamp = d, f._getElementOffset = function (t) {
		var e = t.getBoundingClientRect(),
			n = this._boundingRect,
			o = i(t),
			r = {
				left: e.left - n.left - o.marginLeft,
				top: e.top - n.top - o.marginTop,
				right: n.right - e.right - o.marginRight,
				bottom: n.bottom - e.bottom - o.marginBottom
			};
		return r
	}, f.handleEvent = n.handleEvent, f.bindResize = function () {
		t.addEventListener("resize", this), this.isResizeBound = !0
	}, f.unbindResize = function () {
		t.removeEventListener("resize", this), this.isResizeBound = !1
	}, f.onresize = function () {
		this.resize()
	}, n.debounceMethod(r, "onresize", 100), f.resize = function () {
		this.isResizeBound && this.needsResizeLayout() && this.layout()
	}, f.needsResizeLayout = function () {
		var t = i(this.element),
			e = this.size && t;
		return e && t.innerWidth !== this.size.innerWidth
	}, f.addItems = function (t) {
		var e = this._itemize(t);
		return e.length && (this.items = this.items.concat(e)), e
	}, f.appended = function (t) {
		var e = this.addItems(t);
		e.length && (this.layoutItems(e, !0), this.reveal(e))
	}, f.prepended = function (t) {
		var e = this._itemize(t);
		if (e.length) {
			var i = this.items.slice(0);
			this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
		}
	}, f.reveal = function (t) {
		if (this._emitCompleteOnItems("reveal", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function (t, i) {
				t.stagger(i * e), t.reveal()
			})
		}
	}, f.hide = function (t) {
		if (this._emitCompleteOnItems("hide", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function (t, i) {
				t.stagger(i * e), t.hide()
			})
		}
	}, f.revealItemElements = function (t) {
		var e = this.getItems(t);
		this.reveal(e)
	}, f.hideItemElements = function (t) {
		var e = this.getItems(t);
		this.hide(e)
	}, f.getItem = function (t) {
		for (var e = 0; e < this.items.length; e++) {
			var i = this.items[e];
			if (i.element == t) return i
		}
	}, f.getItems = function (t) {
		t = n.makeArray(t);
		var e = [];
		return t.forEach(function (t) {
			var i = this.getItem(t);
			i && e.push(i)
		}, this), e
	}, f.remove = function (t) {
		var e = this.getItems(t);
		this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
			t.remove(), n.removeFrom(this.items, t)
		}, this)
	}, f.destroy = function () {
		var t = this.element.style;
		t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
			t.destroy()
		}), this.unbindResize();
		var e = this.element.outlayerGUID;
		delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
	}, r.data = function (t) {
		t = n.getQueryElement(t);
		var e = t && t.outlayerGUID;
		return e && c[e]
	}, r.create = function (t, e) {
		var i = s(r);
		return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
	};
	var m = {
		ms: 1,
		s: 1e3
	};
	return r.Item = o, r
}),
function (t, e) {
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
	var i = t.create("masonry");
	return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function () {
		this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
		for (var t = 0; t < this.cols; t++) this.colYs.push(0);
		this.maxY = 0
	}, i.prototype.measureColumns = function () {
		if (this.getContainerWidth(), !this.columnWidth) {
			var t = this.items[0],
				i = t && t.element;
			this.columnWidth = i && e(i).outerWidth || this.containerWidth
		}
		var n = this.columnWidth += this.gutter,
			o = this.containerWidth + this.gutter,
			r = o / n,
			s = n - o % n,
			a = s && 1 > s ? "round" : "floor";
		r = Math[a](r), this.cols = Math.max(r, 1)
	}, i.prototype.getContainerWidth = function () {
		var t = this._getOption("fitWidth"),
			i = t ? this.element.parentNode : this.element,
			n = e(i);
		this.containerWidth = n && n.innerWidth
	}, i.prototype._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = t.size.outerWidth % this.columnWidth,
			i = e && 1 > e ? "round" : "ceil",
			n = Math[i](t.size.outerWidth / this.columnWidth);
		n = Math.min(n, this.cols);
		for (var o = this._getColGroup(n), r = Math.min.apply(Math, o), s = o.indexOf(r), a = {
				x: this.columnWidth * s,
				y: r
			}, h = r + t.size.outerHeight, u = this.cols + 1 - o.length, d = 0; u > d; d++) this.colYs[s + d] = h;
		return a
	}, i.prototype._getColGroup = function (t) {
		if (2 > t) return this.colYs;
		for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
			var o = this.colYs.slice(n, n + t);
			e[n] = Math.max.apply(Math, o)
		}
		return e
	}, i.prototype._manageStamp = function (t) {
		var i = e(t),
			n = this._getElementOffset(t),
			o = this._getOption("originLeft"),
			r = o ? n.left : n.right,
			s = r + i.outerWidth,
			a = Math.floor(r / this.columnWidth);
		a = Math.max(0, a);
		var h = Math.floor(s / this.columnWidth);
		h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
		for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l])
	}, i.prototype._getContainerSize = function () {
		this.maxY = Math.max.apply(Math, this.colYs);
		var t = {
			height: this.maxY
		};
		return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
	}, i.prototype._getContainerFitWidth = function () {
		for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
		return (this.cols - t) * this.columnWidth - this.gutter
	}, i.prototype.needsResizeLayout = function () {
		var t = this.containerWidth;
		return this.getContainerWidth(), t != this.containerWidth
	}, i
});
if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	var topFirst = 1050;
	var topSecond = 665;
	var isMobile = true;
} else {
	var topFirst = 1050;
	var topSecond = 1000;
	var isMobile = false;
}
$(document).ready(function () {
	$('#maps .california').addClass('active');
	$('#maps .california').show().css('top', -topFirst);
	setTimeout(function () {
		$('#maps .california .overlay').show().addClass('rotated');
		$('#maps .california').animate({
			top: '+=' + topSecond
		}, 1200, 'easeOutSine', function () {
			$('#maps .california .overlay').css('top', 0).hide().removeClass('rotated');
			animating = false;
		});
	}, 1200);
});

function initMap() {
	var styles = [{
		"featureType": "road.local",
		"elementType": "labels.text.fill",
		"stylers": [{
			"color": "#939393"
		}]
	}, {
		"featureType": "road.local",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#efedec"
		}]
	}, {
		"featureType": "landscape",
		"elementType": "geometry",
		"stylers": [{
			"color": "#f9f9f9"
		}]
	}, {
		"featureType": "road.local",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#dadada"
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#e6e6e6"
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#dadada"
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "labels.text",
		"stylers": [{
			"color": "#939393"
		}, {
			"weight": 0.1
		}]
	}, {}];
	var nyc = {
		lat: 40.762008,
		lng: -73.972620
	};
	var map = new google.maps.Map(document.getElementById('nyc'), {
		zoom: 6,
		draggable: true,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true,
		center: nyc,
		styles: styles
	});
	var marker = new google.maps.Marker({
		position: nyc,
		map: map,
	});
	var flordia = {
		lat: 26.804653,
		lng: -80.058693
	};
	var map2 = new google.maps.Map(document.getElementById('flordia'), {
		zoom: 6,
		draggable: true,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true,
		center: flordia,
		styles: styles
	});
	var marker = new google.maps.Marker({
		position: flordia,
		map: map2,
	});
	var california = {
		lat: 37.413193,
		lng: -122.120647
	};
	var map3 = new google.maps.Map(document.getElementById('california'), {
		zoom: 6,
		draggable: true,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true,
		center: california,
		styles: styles
	});
	var marker = new google.maps.Marker({
		position: california,
		map: map3,
	});
	var uk = {
		lat: 51.513789,
		lng: -0.102112
	};
	var map5 = new google.maps.Map(document.getElementById('united_kingdom'), {
		zoom: 6,
		draggable: true,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true,
		center: uk,
		styles: styles
	});
	var marker = new google.maps.Marker({
		position: uk,
		map: map5,
	});
	var india1 = {
		lat: 26.892090,
		lng: 75.771503
	};
	var map6 = new google.maps.Map(document.getElementById('india'), {
		zoom: 6,
		draggable: true,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true,
		center: india1,
		styles: styles
	});
	var marker = new google.maps.Marker({
		position: india1,
		map: map6,
	});
}

function showdiv(mapName) {
	$('#maps .' + mapName).show().css('top', -topFirst);
	setTimeout(function () {
		$('#maps .' + mapName + ' .overlay').show().addClass('rotated');
		var h = topSecond;
		if (mapName == 'india' && !isMobile) {
			var h = topSecond - 50;
		}
		$('#maps .' + mapName).animate({
			top: '+=' + h
		}, 1200, 'easeOutSine', function () {
			$('#maps .' + mapName + ' .overlay').css('top', 0).hide().removeClass('rotated');
			animating = false;
		});
	}, 1500);
}
var fname = 'california';

function hideAndBindToButton(cityName) {
	$('#maps .' + cityName + ' .overlay').show();
	$('#maps .' + cityName).animate({
		top: '+=' + topSecond
	}, 1200, 'easeInSine', function () {
		$('#maps .' + fname).css('top', -topFirst);
		$('#maps .' + fname + ' .overlay').hide();
		$('#maps .' + cityName).css('top', -topFirst).addClass('active');
		$('#maps .' + cityName + ' .overlay').hide();
	});
	setTimeout(function () {
		$('.wrapper').removeClass('active');
	}, 400);
	setTimeout(function () {
		$('.common-tablink').removeClass('custom-disabled');
	}, 2500);
}

function openCity(cityName) {
	$('.common-tablink').addClass('custom-disabled');
	if (fname != null) {
		hideAndBindToButton(fname)
	}
	fname = cityName
	showdiv(cityName);
}
var s;
$(document).ready(function () {
	var bannerSectionHeight = $('.custom-banner').height();
	var supportSectionHeight = $('.custom-support-section').height();
	var totalSectionHeight = bannerSectionHeight + supportSectionHeight;
	if ($('.custom-banner').length > 0 || $('.custom-support-section').length > 0) {
		$(window).scroll(function () {
			if ($(this).scrollTop() > bannerSectionHeight) {
				$('header').addClass("sticky fadeInM animated1");
				$('.custom-navbar.mobile-nav').addClass("sticky");
			} else {
				$('header').removeClass("sticky fadeInM animated1");
				$('.custom-navbar.mobile-nav').removeClass("sticky");
			}
			var totalHeight = totalSectionHeight - $(".animated1").height();
			if ($(this).scrollTop() > totalHeight) {
				$(".custom-add-mag").css({
					'margin-top': '70px'
				});
				$('.aw-cl-logo-block').addClass("sticky");
			} else {
				$(".custom-add-mag").css({
					'margin-top': '0px'
				});
				$('.aw-cl-logo-block').removeClass("sticky");
			}
		});
	}
});
(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(["jquery"], function ($) {
			factory($, window, document);
		});
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory(require("jquery"), window, document);
	} else {
		factory(jQuery, window, document);
	}
})(function ($, window, document, undefined) {
	"use strict";
	var pluginName = "intlTelInput",
		id = 1,
		defaults = {
			allowDropdown: true,
			autoHideDialCode: true,
			autoPlaceholder: "polite",
			customPlaceholder: null,
			dropdownContainer: "",
			excludeCountries: [],
			formatOnDisplay: true,
			geoIpLookup: null,
			initialCountry: "",
			nationalMode: true,
			onlyCountries: [],
			placeholderNumberType: "MOBILE",
			preferredCountries: ["us", "gb"],
			separateDialCode: false,
			utilsScript: ""
		},
		keys = {
			UP: 38,
			DOWN: 40,
			ENTER: 13,
			ESC: 27,
			PLUS: 43,
			A: 65,
			Z: 90,
			SPACE: 32,
			TAB: 9
		},
		regionlessNanpNumbers = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];
	$(window).on("load", function () {
		$.fn[pluginName].windowLoaded = true;
	});

	function Plugin(element, options) {
		this.telInput = $(element);
		this.options = $.extend({}, defaults, options);
		this.ns = "." + pluginName + id++;
		this.isGoodBrowser = Boolean(element.setSelectionRange);
		this.hadInitialPlaceholder = Boolean($(element).attr("placeholder"));
	}
	Plugin.prototype = {
		_init: function () {
			if (this.options.nationalMode) {
				this.options.autoHideDialCode = false;
			}
			if (this.options.separateDialCode) {
				this.options.autoHideDialCode = this.options.nationalMode = false;
			}
			this.isMobile = /Android.+Mobile|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
			if (this.isMobile) {
				$("body").addClass("iti-mobile");
				if (!this.options.dropdownContainer) {
					this.options.dropdownContainer = "body";
				}
			}
			this.autoCountryDeferred = new $.Deferred();
			this.utilsScriptDeferred = new $.Deferred();
			this._processCountryData();
			this._generateMarkup();
			this._setInitialState();
			this._initListeners();
			this._initRequests();
			return [this.autoCountryDeferred, this.utilsScriptDeferred];
		},
		_processCountryData: function () {
			this._processAllCountries();
			this._processCountryCodes();
			this._processPreferredCountries();
		},
		_addCountryCode: function (iso2, dialCode, priority) {
			if (!(dialCode in this.countryCodes)) {
				this.countryCodes[dialCode] = [];
			}
			var index = priority || 0;
			this.countryCodes[dialCode][index] = iso2;
		},
		_filterCountries: function (countryArray, processFunc) {
			var i;
			for (i = 0; i < countryArray.length; i++) {
				countryArray[i] = countryArray[i].toLowerCase();
			}
			this.countries = [];
			for (i = 0; i < allCountries.length; i++) {
				if (processFunc(countryArray.indexOf(allCountries[i].iso2))) {
					this.countries.push(allCountries[i]);
				}
			}
		},
		_processAllCountries: function () {
			if (this.options.onlyCountries.length) {
				this._filterCountries(this.options.onlyCountries, function (arrayPos) {
					return arrayPos > -1;
				});
			} else if (this.options.excludeCountries.length) {
				this._filterCountries(this.options.excludeCountries, function (arrayPos) {
					return arrayPos == -1;
				});
			} else {
				this.countries = allCountries;
			}
		},
		_processCountryCodes: function () {
			this.countryCodes = {};
			for (var i = 0; i < this.countries.length; i++) {
				var c = this.countries[i];
				this._addCountryCode(c.iso2, c.dialCode, c.priority);
				if (c.areaCodes) {
					for (var j = 0; j < c.areaCodes.length; j++) {
						this._addCountryCode(c.iso2, c.dialCode + c.areaCodes[j]);
					}
				}
			}
		},
		_processPreferredCountries: function () {
			this.preferredCountries = [];
			for (var i = 0; i < this.options.preferredCountries.length; i++) {
				var countryCode = this.options.preferredCountries[i].toLowerCase(),
					countryData = this._getCountryData(countryCode, false, true);
				if (countryData) {
					this.preferredCountries.push(countryData);
				}
			}
		},
		_generateMarkup: function () {
			this.telInput.attr("autocomplete", "off");
			var parentClass = "intl-tel-input";
			if (this.options.allowDropdown) {
				parentClass += " allow-dropdown";
			}
			if (this.options.separateDialCode) {
				parentClass += " separate-dial-code";
			}
			this.telInput.wrap($("<div>", {
				"class": parentClass
			}));
			this.flagsContainer = $("<div>", {
				"class": "flag-container"
			}).insertBefore(this.telInput);
			var selectedFlag = $("<div>", {
				"class": "selected-flag"
			});
			selectedFlag.appendTo(this.flagsContainer);
			this.selectedFlagInner = $("<div>", {
				"class": "iti-flag"
			}).appendTo(selectedFlag);
			if (this.options.separateDialCode) {
				this.selectedDialCode = $("<div>", {
					"class": "selected-dial-code"
				}).appendTo(selectedFlag);
			}
			if (this.options.allowDropdown) {
				selectedFlag.attr("tabindex", "-1");
				$("<div>", {
					"class": "iti-arrow"
				}).appendTo(selectedFlag);
				this.countryList = $("<ul>", {
					"class": "country-list hide"
				});
				if (this.preferredCountries.length) {
					this._appendListItems(this.preferredCountries, "preferred");
					$("<li>", {
						"class": "divider"
					}).appendTo(this.countryList);
				}
				this._appendListItems(this.countries, "");
				this.countryListItems = this.countryList.children(".country");
				if (this.options.dropdownContainer) {
					this.dropdown = $("<div>", {
						"class": "intl-tel-input iti-container"
					}).append(this.countryList);
				} else {
					this.countryList.appendTo(this.flagsContainer);
				}
			} else {
				this.countryListItems = $();
			}
		},
		_appendListItems: function (countries, className) {
			var tmp = "";
			for (var i = 0; i < countries.length; i++) {
				var c = countries[i];
				tmp += "<li class='country " + className + "' data-dial-code='" + c.dialCode + "' data-country-code='" + c.iso2 + "'>";
				tmp += "<div class='flag-box'><div class='iti-flag " + c.iso2 + "'></div></div>";
				tmp += "<span class='country-name'>" + c.name + "</span>";
				tmp += "<span class='dial-code'>+" + c.dialCode + "</span>";
				tmp += "</li>";
			}
			this.countryList.append(tmp);
		},
		_setInitialState: function () {
			var val = this.telInput.val();
			if (this._getDialCode(val) && !this._isRegionlessNanp(val)) {
				this._updateFlagFromNumber(val);
			} else if (this.options.initialCountry !== "auto") {
				if (this.options.initialCountry) {
					this._setFlag(this.options.initialCountry.toLowerCase());
				} else {
					this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2;
					if (!val) {
						this._setFlag(this.defaultCountry);
					}
				}
				if (!val && !this.options.nationalMode && !this.options.autoHideDialCode && !this.options.separateDialCode) {
					this.telInput.val("+" + this.selectedCountryData.dialCode);
				}
			}
			if (val) {
				this._updateValFromNumber(val);
			}
		},
		_initListeners: function () {
			this._initKeyListeners();
			if (this.options.autoHideDialCode) {
				this._initFocusListeners();
			}
			if (this.options.allowDropdown) {
				this._initDropdownListeners();
			}
		},
		_initDropdownListeners: function () {
			var that = this;
			var label = this.telInput.closest("label");
			if (label.length) {
				label.on("click" + this.ns, function (e) {
					if (that.countryList.hasClass("hide")) {
						that.telInput.focus();
					} else {
						e.preventDefault();
					}
				});
			}
			var selectedFlag = this.selectedFlagInner.parent();
			selectedFlag.on("click" + this.ns, function (e) {
				if (that.countryList.hasClass("hide") && !that.telInput.prop("disabled") && !that.telInput.prop("readonly")) {
					that._showDropdown();
				}
			});
			this.flagsContainer.on("keydown" + that.ns, function (e) {
				var isDropdownHidden = that.countryList.hasClass("hide");
				if (isDropdownHidden && (e.which == keys.UP || e.which == keys.DOWN || e.which == keys.SPACE || e.which == keys.ENTER)) {
					e.preventDefault();
					e.stopPropagation();
					that._showDropdown();
				}
				if (e.which == keys.TAB) {
					that._closeDropdown();
				}
			});
		},
		_initRequests: function () {
			var that = this;
			if (this.options.utilsScript) {
				if ($.fn[pluginName].windowLoaded) {
					$.fn[pluginName].loadUtils(this.options.utilsScript, this.utilsScriptDeferred);
				} else {
					$(window).on("load", function () {
						$.fn[pluginName].loadUtils(that.options.utilsScript, that.utilsScriptDeferred);
					});
				}
			} else {
				this.utilsScriptDeferred.resolve();
			}
			if (this.options.initialCountry === "auto") {
				this._loadAutoCountry();
			} else {
				this.autoCountryDeferred.resolve();
			}
		},
		_loadAutoCountry: function () {
			var that = this;
			if ($.fn[pluginName].autoCountry) {
				this.handleAutoCountry();
			} else if (!$.fn[pluginName].startedLoadingAutoCountry) {
				$.fn[pluginName].startedLoadingAutoCountry = true;
				if (typeof this.options.geoIpLookup === "function") {
					this.options.geoIpLookup(function (countryCode) {
						$.fn[pluginName].autoCountry = countryCode.toLowerCase();
						setTimeout(function () {
							$(".intl-tel-input input").intlTelInput("handleAutoCountry");
						});
					});
				}
			}
		},
		_initKeyListeners: function () {
			var that = this;
			this.telInput.on("keyup" + this.ns, function () {
				if (that._updateFlagFromNumber(that.telInput.val())) {
					that._triggerCountryChange();
				}
			});
			this.telInput.on("cut" + this.ns + " paste" + this.ns, function () {
				setTimeout(function () {
					if (that._updateFlagFromNumber(that.telInput.val())) {
						that._triggerCountryChange();
					}
				});
			});
		},
		_cap: function (number) {
			var max = this.telInput.attr("maxlength");
			return max && number.length > max ? number.substr(0, max) : number;
		},
		_initFocusListeners: function () {
			var that = this;
			this.telInput.on("mousedown" + this.ns, function (e) {
				if (!that.telInput.is(":focus") && !that.telInput.val()) {
					e.preventDefault();
					that.telInput.focus();
				}
			});
			this.telInput.on("focus" + this.ns, function (e) {
				if (!that.telInput.val() && !that.telInput.prop("readonly") && that.selectedCountryData.dialCode) {
					that.telInput.val("+" + that.selectedCountryData.dialCode);
					that.telInput.one("keypress.plus" + that.ns, function (e) {
						if (e.which == keys.PLUS) {
							that.telInput.val("");
						}
					});
					setTimeout(function () {
						var input = that.telInput[0];
						if (that.isGoodBrowser) {
							var len = that.telInput.val().length;
							input.setSelectionRange(len, len);
						}
					});
				}
			});
			var form = this.telInput.prop("form");
			if (form) {
				$(form).on("submit" + this.ns, function () {
					that._removeEmptyDialCode();
				});
			}
			this.telInput.on("blur" + this.ns, function () {
				that._removeEmptyDialCode();
			});
		},
		_removeEmptyDialCode: function () {
			var value = this.telInput.val(),
				startsPlus = value.charAt(0) == "+";
			if (startsPlus) {
				var numeric = this._getNumeric(value);
				if (!numeric || this.selectedCountryData.dialCode == numeric) {
					this.telInput.val("");
				}
			}
			this.telInput.off("keypress.plus" + this.ns);
		},
		_getNumeric: function (s) {
			return s.replace(/\D/g, "");
		},
		_showDropdown: function () {
			this._setDropdownPosition();
			var activeListItem = this.countryList.children(".active");
			if (activeListItem.length) {
				this._highlightListItem(activeListItem);
				this._scrollTo(activeListItem);
			}
			this._bindDropdownListeners();
			this.selectedFlagInner.children(".iti-arrow").addClass("up");
		},
		_setDropdownPosition: function () {
			var that = this;
			if (this.options.dropdownContainer) {
				this.dropdown.appendTo(this.options.dropdownContainer);
			}
			this.dropdownHeight = this.countryList.removeClass("hide").outerHeight();
			if (!this.isMobile) {
				var pos = this.telInput.offset(),
					inputTop = pos.top,
					windowTop = $(window).scrollTop(),
					dropdownFitsBelow = inputTop + this.telInput.outerHeight() + this.dropdownHeight < windowTop + $(window).height(),
					dropdownFitsAbove = inputTop - this.dropdownHeight > windowTop;
				this.countryList.toggleClass("dropup", !dropdownFitsBelow && dropdownFitsAbove);
				if (this.options.dropdownContainer) {
					var extraTop = !dropdownFitsBelow && dropdownFitsAbove ? 0 : this.telInput.innerHeight();
					this.dropdown.css({
						top: inputTop + extraTop,
						left: pos.left
					});
					$(window).on("scroll" + this.ns, function () {
						that._closeDropdown();
					});
				}
			}
		},
		_bindDropdownListeners: function () {
			var that = this;
			this.countryList.on("mouseover" + this.ns, ".country", function (e) {
				that._highlightListItem($(this));
			});
			this.countryList.on("click" + this.ns, ".country", function (e) {
				that._selectListItem($(this));
			});
			var isOpening = true;
			$("html").on("click" + this.ns, function (e) {
				if (!isOpening) {
					that._closeDropdown();
				}
				isOpening = false;
			});
			var query = "",
				queryTimer = null;
			$(document).on("keydown" + this.ns, function (e) {
				e.preventDefault();
				if (e.which == keys.UP || e.which == keys.DOWN) {
					that._handleUpDownKey(e.which);
				} else if (e.which == keys.ENTER) {
					that._handleEnterKey();
				} else if (e.which == keys.ESC) {
					that._closeDropdown();
				} else if (e.which >= keys.A && e.which <= keys.Z || e.which == keys.SPACE) {
					if (queryTimer) {
						clearTimeout(queryTimer);
					}
					query += String.fromCharCode(e.which);
					that._searchForCountry(query);
					queryTimer = setTimeout(function () {
						query = "";
					}, 1e3);
				}
			});
		},
		_handleUpDownKey: function (key) {
			var current = this.countryList.children(".highlight").first();
			var next = key == keys.UP ? current.prev() : current.next();
			if (next.length) {
				if (next.hasClass("divider")) {
					next = key == keys.UP ? next.prev() : next.next();
				}
				this._highlightListItem(next);
				this._scrollTo(next);
			}
		},
		_handleEnterKey: function () {
			var currentCountry = this.countryList.children(".highlight").first();
			if (currentCountry.length) {
				this._selectListItem(currentCountry);
			}
		},
		_searchForCountry: function (query) {
			for (var i = 0; i < this.countries.length; i++) {
				if (this._startsWith(this.countries[i].name, query)) {
					var listItem = this.countryList.children("[data-country-code=" + this.countries[i].iso2 + "]").not(".preferred");
					this._highlightListItem(listItem);
					this._scrollTo(listItem, true);
					break;
				}
			}
		},
		_startsWith: function (a, b) {
			return a.substr(0, b.length).toUpperCase() == b;
		},
		_updateValFromNumber: function (number) {
			if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
				var format = !this.options.separateDialCode && (this.options.nationalMode || number.charAt(0) != "+") ? intlTelInputUtils.numberFormat.NATIONAL : intlTelInputUtils.numberFormat.INTERNATIONAL;
				number = intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format);
			}
			number = this._beforeSetNumber(number);
			this.telInput.val(number);
		},
		_updateFlagFromNumber: function (number) {
			if (number && this.options.nationalMode && this.selectedCountryData && this.selectedCountryData.dialCode == "1" && number.charAt(0) != "+") {
				if (number.charAt(0) != "1") {
					number = "1" + number;
				}
				number = "+" + number;
			}
			var dialCode = this._getDialCode(number),
				countryCode = null,
				numeric = this._getNumeric(number);
			if (dialCode) {
				var countryCodes = this.countryCodes[this._getNumeric(dialCode)],
					alreadySelected = this.selectedCountryData && countryCodes.indexOf(this.selectedCountryData.iso2) > -1,
					isUnknownNanp = dialCode == "+1" && numeric.length >= 4;
				if ((!alreadySelected || isUnknownNanp) && !this._isRegionlessNanp(numeric)) {
					for (var j = 0; j < countryCodes.length; j++) {
						if (countryCodes[j]) {
							countryCode = countryCodes[j];
							break;
						}
					}
				}
			} else if (number.charAt(0) == "+" && numeric.length) {
				countryCode = "";
			} else if (!number || number == "+") {
				countryCode = this.defaultCountry;
			}
			if (countryCode !== null) {
				return this._setFlag(countryCode);
			}
			return false;
		},
		_isRegionlessNanp: function (number) {
			var numeric = this._getNumeric(number);
			if (numeric.charAt(0) == "1") {
				var areaCode = numeric.substr(1, 3);
				return regionlessNanpNumbers.indexOf(areaCode) > -1;
			}
			return false;
		},
		_highlightListItem: function (listItem) {
			this.countryListItems.removeClass("highlight");
			listItem.addClass("highlight");
		},
		_getCountryData: function (countryCode, ignoreOnlyCountriesOption, allowFail) {
			var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;
			for (var i = 0; i < countryList.length; i++) {
				if (countryList[i].iso2 == countryCode) {
					return countryList[i];
				}
			}
			if (allowFail) {
				return null;
			} else {
				throw new Error("No country data for '" + countryCode + "'");
			}
		},
		_setFlag: function (countryCode) {
			var prevCountry = this.selectedCountryData && this.selectedCountryData.iso2 ? this.selectedCountryData : {};
			this.selectedCountryData = countryCode ? this._getCountryData(countryCode, false, false) : {};
			if (this.selectedCountryData.iso2) {
				this.defaultCountry = this.selectedCountryData.iso2;
			}
			this.selectedFlagInner.attr("class", "iti-flag " + countryCode);
			var title = countryCode ? this.selectedCountryData.name + ": +" + this.selectedCountryData.dialCode : "Unknown";
			this.selectedFlagInner.parent().attr("title", title);
			if (this.options.separateDialCode) {
				var dialCode = this.selectedCountryData.dialCode ? "+" + this.selectedCountryData.dialCode : "",
					parent = this.telInput.parent();
				if (prevCountry.dialCode) {
					parent.removeClass("iti-sdc-" + (prevCountry.dialCode.length + 1));
				}
				if (dialCode) {
					parent.addClass("iti-sdc-" + dialCode.length);
				}
				this.selectedDialCode.text(dialCode);
			}
			this._updatePlaceholder();
			this.countryListItems.removeClass("active");
			if (countryCode) {
				this.countryListItems.find(".iti-flag." + countryCode).first().closest(".country").addClass("active");
			}
			return prevCountry.iso2 !== countryCode;
		},
		_updatePlaceholder: function () {
			var shouldSetPlaceholder = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && (this.options.autoPlaceholder === true || this.options.autoPlaceholder === "polite");
			if (window.intlTelInputUtils && shouldSetPlaceholder && this.selectedCountryData) {
				var numberType = intlTelInputUtils.numberType[this.options.placeholderNumberType],
					placeholder = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType) : "";
				placeholder = this._beforeSetNumber(placeholder);
				if (typeof this.options.customPlaceholder === "function") {
					placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData);
				}
				this.telInput.attr("placeholder", placeholder);
			}
		},
		_selectListItem: function (listItem) {
			var flagChanged = this._setFlag(listItem.attr("data-country-code"));
			this._closeDropdown();
			this._updateDialCode(listItem.attr("data-dial-code"), true);
			this.telInput.focus();
			if (this.isGoodBrowser) {
				var len = this.telInput.val().length;
				this.telInput[0].setSelectionRange(len, len);
			}
			if (flagChanged) {
				this._triggerCountryChange();
			}
		},
		_closeDropdown: function () {
			this.countryList.addClass("hide");
			this.selectedFlagInner.children(".iti-arrow").removeClass("up");
			$(document).off(this.ns);
			$("html").off(this.ns);
			this.countryList.off(this.ns);
			if (this.options.dropdownContainer) {
				if (!this.isMobile) {
					$(window).off("scroll" + this.ns);
				}
				this.dropdown.detach();
			}
		},
		_scrollTo: function (element, middle) {
			var container = this.countryList,
				containerHeight = container.height(),
				containerTop = container.offset().top,
				containerBottom = containerTop + containerHeight,
				elementHeight = element.outerHeight(),
				elementTop = element.offset().top,
				elementBottom = elementTop + elementHeight,
				newScrollTop = elementTop - containerTop + container.scrollTop(),
				middleOffset = containerHeight / 2 - elementHeight / 2;
			if (elementTop < containerTop) {
				if (middle) {
					newScrollTop -= middleOffset;
				}
				container.scrollTop(newScrollTop);
			} else if (elementBottom > containerBottom) {
				if (middle) {
					newScrollTop += middleOffset;
				}
				var heightDifference = containerHeight - elementHeight;
				container.scrollTop(newScrollTop - heightDifference);
			}
		},
		_updateDialCode: function (newDialCode, hasSelectedListItem) {
			var inputVal = this.telInput.val(),
				newNumber;
			newDialCode = "+" + newDialCode;
			if (inputVal.charAt(0) == "+") {
				var prevDialCode = this._getDialCode(inputVal);
				if (prevDialCode) {
					newNumber = inputVal.replace(prevDialCode, newDialCode);
				} else {
					newNumber = newDialCode;
				}
			} else if (this.options.nationalMode || this.options.separateDialCode) {
				return;
			} else {
				if (inputVal) {
					newNumber = newDialCode + inputVal;
				} else if (hasSelectedListItem || !this.options.autoHideDialCode) {
					newNumber = newDialCode;
				} else {
					return;
				}
			}
			this.telInput.val(newNumber);
		},
		_getDialCode: function (number) {
			var dialCode = "";
			if (number.charAt(0) == "+") {
				var numericChars = "";
				for (var i = 0; i < number.length; i++) {
					var c = number.charAt(i);
					if ($.isNumeric(c)) {
						numericChars += c;
						if (this.countryCodes[numericChars]) {
							dialCode = number.substr(0, i + 1);
						}
						if (numericChars.length == 4) {
							break;
						}
					}
				}
			}
			return dialCode;
		},
		_getFullNumber: function () {
			var val = this.telInput.val(),
				dialCode = this.selectedCountryData.dialCode,
				prefix;
			if (this.options.separateDialCode) {
				prefix = "+" + dialCode;
			} else if (dialCode && dialCode.charAt(0) == "1" && dialCode.length == 4 && dialCode.substr(1) != val.substr(0, 3)) {
				prefix = dialCode.substr(1);
			} else {
				prefix = "";
			}
			return prefix + val;
		},
		_beforeSetNumber: function (number) {
			if (this.options.separateDialCode) {
				var dialCode = this._getDialCode(number);
				if (dialCode) {
					if (this.selectedCountryData.areaCodes !== null) {
						dialCode = "+" + this.selectedCountryData.dialCode;
					}
					var start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
					number = number.substr(start);
				}
			}
			return this._cap(number);
		},
		_triggerCountryChange: function () {
			this.telInput.trigger("countrychange", this.selectedCountryData);
		},
		handleAutoCountry: function () {
			if (this.options.initialCountry === "auto") {
				this.defaultCountry = $.fn[pluginName].autoCountry;
				if (!this.telInput.val()) {
					this.setCountry(this.defaultCountry);
				}
				this.autoCountryDeferred.resolve();
			}
		},
		handleUtils: function () {
			if (window.intlTelInputUtils) {
				if (this.telInput.val()) {
					this._updateValFromNumber(this.telInput.val());
				}
				this._updatePlaceholder();
			}
			this.utilsScriptDeferred.resolve();
		},
		destroy: function () {
			if (this.allowDropdown) {
				this._closeDropdown();
				this.selectedFlagInner.parent().off(this.ns);
				this.telInput.closest("label").off(this.ns);
			}
			if (this.options.autoHideDialCode) {
				var form = this.telInput.prop("form");
				if (form) {
					$(form).off(this.ns);
				}
			}
			this.telInput.off(this.ns);
			var container = this.telInput.parent();
			container.before(this.telInput).remove();
		},
		getExtension: function () {
			if (window.intlTelInputUtils) {
				return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
			}
			return "";
		},
		getNumber: function (format) {
			if (window.intlTelInputUtils) {
				return intlTelInputUtils.formatNumber(this._getFullNumber(), this.selectedCountryData.iso2, format);
			}
			return "";
		},
		getNumberType: function () {
			if (window.intlTelInputUtils) {
				return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
			}
			return -99;
		},
		getSelectedCountryData: function () {
			return this.selectedCountryData || {};
		},
		getValidationError: function () {
			if (window.intlTelInputUtils) {
				return intlTelInputUtils.getValidationError(this._getFullNumber(), this.selectedCountryData.iso2);
			}
			return -99;
		},
		isValidNumber: function () {
			var val = $.trim(this._getFullNumber()),
				countryCode = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
			return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, countryCode) : null;
		},
		setCountry: function (countryCode) {
			countryCode = countryCode.toLowerCase();
			if (!this.selectedFlagInner.hasClass(countryCode)) {
				this._setFlag(countryCode);
				this._updateDialCode(this.selectedCountryData.dialCode, false);
				this._triggerCountryChange();
			}
		},
		setNumber: function (number) {
			var flagChanged = this._updateFlagFromNumber(number);
			this._updateValFromNumber(number);
			if (flagChanged) {
				this._triggerCountryChange();
			}
		}
	};
	$.fn[pluginName] = function (options) {
		var args = arguments;
		if (options === undefined || typeof options === "object") {
			var deferreds = [];
			this.each(function () {
				if (!$.data(this, "plugin_" + pluginName)) {
					var instance = new Plugin(this, options);
					var instanceDeferreds = instance._init();
					deferreds.push(instanceDeferreds[0]);
					deferreds.push(instanceDeferreds[1]);
					$.data(this, "plugin_" + pluginName, instance);
				}
			});
			return $.when.apply(null, deferreds);
		} else if (typeof options === "string" && options[0] !== "_") {
			var returns;
			this.each(function () {
				var instance = $.data(this, "plugin_" + pluginName);
				if (instance instanceof Plugin && typeof instance[options] === "function") {
					returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
				}
				if (options === "destroy") {
					$.data(this, "plugin_" + pluginName, null);
				}
			});
			return returns !== undefined ? returns : this;
		}
	};
	$.fn[pluginName].getCountryData = function () {
		return allCountries;
	};
	$.fn[pluginName].loadUtils = function (path, utilsScriptDeferred) {
		if (!$.fn[pluginName].loadedUtilsScript) {
			$.fn[pluginName].loadedUtilsScript = true;
			$.ajax({
				type: "GET",
				url: path,
				complete: function () {
					$(".intl-tel-input input").intlTelInput("handleUtils");
				},
				dataType: "script",
				cache: true
			});
		} else if (utilsScriptDeferred) {
			utilsScriptDeferred.resolve();
		}
	};
	$.fn[pluginName].version = "10.0.2";
	$.fn[pluginName].defaults = defaults;
	var allCountries = [
		["Afghanistan (‫افغانستان‬‎)", "af", "93"],
		["Albania (Shqipëri)", "al", "355"],
		["Algeria (‫الجزائر‬‎)", "dz", "213"],
		["American Samoa", "as", "1684"],
		["Andorra", "ad", "376"],
		["Angola", "ao", "244"],
		["Anguilla", "ai", "1264"],
		["Antigua and Barbuda", "ag", "1268"],
		["Argentina", "ar", "54"],
		["Armenia (Հայաստան)", "am", "374"],
		["Aruba", "aw", "297"],
		["Australia", "au", "61", 0],
		["Austria (Österreich)", "at", "43"],
		["Azerbaijan (Azərbaycan)", "az", "994"],
		["Bahamas", "bs", "1242"],
		["Bahrain (‫البحرين‬‎)", "bh", "973"],
		["Bangladesh (বাংলাদেশ)", "bd", "880"],
		["Barbados", "bb", "1246"],
		["Belarus (Беларусь)", "by", "375"],
		["Belgium (België)", "be", "32"],
		["Belize", "bz", "501"],
		["Benin (Bénin)", "bj", "229"],
		["Bermuda", "bm", "1441"],
		["Bhutan (འབྲུག)", "bt", "975"],
		["Bolivia", "bo", "591"],
		["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
		["Botswana", "bw", "267"],
		["Brazil (Brasil)", "br", "55"],
		["British Indian Ocean Territory", "io", "246"],
		["British Virgin Islands", "vg", "1284"],
		["Brunei", "bn", "673"],
		["Bulgaria (България)", "bg", "359"],
		["Burkina Faso", "bf", "226"],
		["Burundi (Uburundi)", "bi", "257"],
		["Cambodia (កម្ពុជា)", "kh", "855"],
		["Cameroon (Cameroun)", "cm", "237"],
		["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
		["Cape Verde (Kabu Verdi)", "cv", "238"],
		["Caribbean Netherlands", "bq", "599", 1],
		["Cayman Islands", "ky", "1345"],
		["Central African Republic (République centrafricaine)", "cf", "236"],
		["Chad (Tchad)", "td", "235"],
		["Chile", "cl", "56"],
		["China (中国)", "cn", "86"],
		["Christmas Island", "cx", "61", 2],
		["Cocos (Keeling) Islands", "cc", "61", 1],
		["Colombia", "co", "57"],
		["Comoros (‫جزر القمر‬‎)", "km", "269"],
		["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
		["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
		["Cook Islands", "ck", "682"],
		["Costa Rica", "cr", "506"],
		["Côte d’Ivoire", "ci", "225"],
		["Croatia (Hrvatska)", "hr", "385"],
		["Cuba", "cu", "53"],
		["Curaçao", "cw", "599", 0],
		["Cyprus (Κύπρος)", "cy", "357"],
		["Czech Republic (Česká republika)", "cz", "420"],
		["Denmark (Danmark)", "dk", "45"],
		["Djibouti", "dj", "253"],
		["Dominica", "dm", "1767"],
		["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]],
		["Ecuador", "ec", "593"],
		["Egypt (‫مصر‬‎)", "eg", "20"],
		["El Salvador", "sv", "503"],
		["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
		["Eritrea", "er", "291"],
		["Estonia (Eesti)", "ee", "372"],
		["Ethiopia", "et", "251"],
		["Falkland Islands (Islas Malvinas)", "fk", "500"],
		["Faroe Islands (Føroyar)", "fo", "298"],
		["Fiji", "fj", "679"],
		["Finland (Suomi)", "fi", "358", 0],
		["France", "fr", "33"],
		["French Guiana (Guyane française)", "gf", "594"],
		["French Polynesia (Polynésie française)", "pf", "689"],
		["Gabon", "ga", "241"],
		["Gambia", "gm", "220"],
		["Georgia (საქართველო)", "ge", "995"],
		["Germany (Deutschland)", "de", "49"],
		["Ghana (Gaana)", "gh", "233"],
		["Gibraltar", "gi", "350"],
		["Greece (Ελλάδα)", "gr", "30"],
		["Greenland (Kalaallit Nunaat)", "gl", "299"],
		["Grenada", "gd", "1473"],
		["Guadeloupe", "gp", "590", 0],
		["Guam", "gu", "1671"],
		["Guatemala", "gt", "502"],
		["Guernsey", "gg", "44", 1],
		["Guinea (Guinée)", "gn", "224"],
		["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
		["Guyana", "gy", "592"],
		["Haiti", "ht", "509"],
		["Honduras", "hn", "504"],
		["Hong Kong (香港)", "hk", "852"],
		["Hungary (Magyarország)", "hu", "36"],
		["Iceland (Ísland)", "is", "354"],
		["India (भारत)", "in", "91"],
		["Indonesia", "id", "62"],
		["Iran (‫ایران‬‎)", "ir", "98"],
		["Iraq (‫العراق‬‎)", "iq", "964"],
		["Ireland", "ie", "353"],
		["Isle of Man", "im", "44", 2],
		["Israel (‫ישראל‬‎)", "il", "972"],
		["Italy (Italia)", "it", "39", 0],
		["Jamaica", "jm", "1876"],
		["Japan (日本)", "jp", "81"],
		["Jersey", "je", "44", 3],
		["Jordan (‫الأردن‬‎)", "jo", "962"],
		["Kazakhstan (Казахстан)", "kz", "7", 1],
		["Kenya", "ke", "254"],
		["Kiribati", "ki", "686"],
		["Kosovo", "xk", "383"],
		["Kuwait (‫الكويت‬‎)", "kw", "965"],
		["Kyrgyzstan (Кыргызстан)", "kg", "996"],
		["Laos (ລາວ)", "la", "856"],
		["Latvia (Latvija)", "lv", "371"],
		["Lebanon (‫لبنان‬‎)", "lb", "961"],
		["Lesotho", "ls", "266"],
		["Liberia", "lr", "231"],
		["Libya (‫ليبيا‬‎)", "ly", "218"],
		["Liechtenstein", "li", "423"],
		["Lithuania (Lietuva)", "lt", "370"],
		["Luxembourg", "lu", "352"],
		["Macau (澳門)", "mo", "853"],
		["Macedonia (FYROM) (Македонија)", "mk", "389"],
		["Madagascar (Madagasikara)", "mg", "261"],
		["Malawi", "mw", "265"],
		["Malaysia", "my", "60"],
		["Maldives", "mv", "960"],
		["Mali", "ml", "223"],
		["Malta", "mt", "356"],
		["Marshall Islands", "mh", "692"],
		["Martinique", "mq", "596"],
		["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
		["Mauritius (Moris)", "mu", "230"],
		["Mayotte", "yt", "262", 1],
		["Mexico (México)", "mx", "52"],
		["Micronesia", "fm", "691"],
		["Moldova (Republica Moldova)", "md", "373"],
		["Monaco", "mc", "377"],
		["Mongolia (Монгол)", "mn", "976"],
		["Montenegro (Crna Gora)", "me", "382"],
		["Montserrat", "ms", "1664"],
		["Morocco (‫المغرب‬‎)", "ma", "212", 0],
		["Mozambique (Moçambique)", "mz", "258"],
		["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
		["Namibia (Namibië)", "na", "264"],
		["Nauru", "nr", "674"],
		["Nepal (नेपाल)", "np", "977"],
		["Netherlands (Nederland)", "nl", "31"],
		["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
		["New Zealand", "nz", "64"],
		["Nicaragua", "ni", "505"],
		["Niger (Nijar)", "ne", "227"],
		["Nigeria", "ng", "234"],
		["Niue", "nu", "683"],
		["Norfolk Island", "nf", "672"],
		["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
		["Northern Mariana Islands", "mp", "1670"],
		["Norway (Norge)", "no", "47", 0],
		["Oman (‫عُمان‬‎)", "om", "968"],
		["Pakistan (‫پاکستان‬‎)", "pk", "92"],
		["Palau", "pw", "680"],
		["Palestine (‫فلسطين‬‎)", "ps", "970"],
		["Panama (Panamá)", "pa", "507"],
		["Papua New Guinea", "pg", "675"],
		["Paraguay", "py", "595"],
		["Peru (Perú)", "pe", "51"],
		["Philippines", "ph", "63"],
		["Poland (Polska)", "pl", "48"],
		["Portugal", "pt", "351"],
		["Puerto Rico", "pr", "1", 3, ["787", "939"]],
		["Qatar (‫قطر‬‎)", "qa", "974"],
		["Réunion (La Réunion)", "re", "262", 0],
		["Romania (România)", "ro", "40"],
		["Russia (Россия)", "ru", "7", 0],
		["Rwanda", "rw", "250"],
		["Saint Barthélemy (Saint-Barthélemy)", "bl", "590", 1],
		["Saint Helena", "sh", "290"],
		["Saint Kitts and Nevis", "kn", "1869"],
		["Saint Lucia", "lc", "1758"],
		["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
		["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
		["Saint Vincent and the Grenadines", "vc", "1784"],
		["Samoa", "ws", "685"],
		["San Marino", "sm", "378"],
		["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
		["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
		["Senegal (Sénégal)", "sn", "221"],
		["Serbia (Србија)", "rs", "381"],
		["Seychelles", "sc", "248"],
		["Sierra Leone", "sl", "232"],
		["Singapore", "sg", "65"],
		["Sint Maarten", "sx", "1721"],
		["Slovakia (Slovensko)", "sk", "421"],
		["Slovenia (Slovenija)", "si", "386"],
		["Solomon Islands", "sb", "677"],
		["Somalia (Soomaaliya)", "so", "252"],
		["South Africa", "za", "27"],
		["South Korea (대한민국)", "kr", "82"],
		["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
		["Spain (España)", "es", "34"],
		["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
		["Sudan (‫السودان‬‎)", "sd", "249"],
		["Suriname", "sr", "597"],
		["Svalbard and Jan Mayen", "sj", "47", 1],
		["Swaziland", "sz", "268"],
		["Sweden (Sverige)", "se", "46"],
		["Switzerland (Schweiz)", "ch", "41"],
		["Syria (‫سوريا‬‎)", "sy", "963"],
		["Taiwan (台灣)", "tw", "886"],
		["Tajikistan", "tj", "992"],
		["Tanzania", "tz", "255"],
		["Thailand (ไทย)", "th", "66"],
		["Timor-Leste", "tl", "670"],
		["Togo", "tg", "228"],
		["Tokelau", "tk", "690"],
		["Tonga", "to", "676"],
		["Trinidad and Tobago", "tt", "1868"],
		["Tunisia (‫تونس‬‎)", "tn", "216"],
		["Turkey (Türkiye)", "tr", "90"],
		["Turkmenistan", "tm", "993"],
		["Turks and Caicos Islands", "tc", "1649"],
		["Tuvalu", "tv", "688"],
		["U.S. Virgin Islands", "vi", "1340"],
		["Uganda", "ug", "256"],
		["Ukraine (Україна)", "ua", "380"],
		["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
		["United Kingdom", "gb", "44", 0],
		["United States", "us", "1", 0],
		["Uruguay", "uy", "598"],
		["Uzbekistan (Oʻzbekiston)", "uz", "998"],
		["Vanuatu", "vu", "678"],
		["Vatican City (Città del Vaticano)", "va", "39", 1],
		["Venezuela", "ve", "58"],
		["Vietnam (Việt Nam)", "vn", "84"],
		["Wallis and Futuna", "wf", "681"],
		["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1],
		["Yemen (‫اليمن‬‎)", "ye", "967"],
		["Zambia", "zm", "260"],
		["Zimbabwe", "zw", "263"],
		["Åland Islands", "ax", "358", 1]
	];
	for (var i = 0; i < allCountries.length; i++) {
		var c = allCountries[i];
		allCountries[i] = {
			name: c[0],
			iso2: c[1],
			dialCode: c[2],
			priority: c[3] || 0,
			areaCodes: c[4] || null
		};
	}
});
(function ($) {
	var defaults = {
		buttonSize: "btn-md",
		buttonType: "btn-default",
		labelMargin: "10px",
		scrollable: true,
		scrollableHeight: "250px"
	};
	var countries = {
		"AF": "Afghanistan",
		"AL": "Albania",
		"DZ": "Algeria",
		"AS": "American Samoa",
		"AD": "Andorra",
		"AO": "Angola",
		"AI": "Anguilla",
		"AG": "Antigua and Barbuda",
		"AR": "Argentina",
		"AM": "Armenia",
		"AW": "Aruba",
		"AU": "Australia",
		"AT": "Austria",
		"AZ": "Azerbaijan",
		"BS": "Bahamas",
		"BH": "Bahrain",
		"BD": "Bangladesh",
		"BB": "Barbados",
		"BY": "Belarus",
		"BE": "Belgium",
		"BZ": "Belize",
		"BJ": "Benin",
		"BM": "Bermuda",
		"BT": "Bhutan",
		"BO": "Bolivia, Plurinational State of",
		"BA": "Bosnia and Herzegovina",
		"BW": "Botswana",
		"BV": "Bouvet Island",
		"BR": "Brazil",
		"IO": "British Indian Ocean Territory",
		"BN": "Brunei Darussalam",
		"BG": "Bulgaria",
		"BF": "Burkina Faso",
		"BI": "Burundi",
		"KH": "Cambodia",
		"CM": "Cameroon",
		"CA": "Canada",
		"CV": "Cape Verde",
		"KY": "Cayman Islands",
		"CF": "Central African Republic",
		"TD": "Chad",
		"CL": "Chile",
		"CN": "China",
		"CO": "Colombia",
		"KM": "Comoros",
		"CG": "Congo",
		"CD": "Congo, the Democratic Republic of the",
		"CK": "Cook Islands",
		"CR": "Costa Rica",
		"CI": "CÃ´te d'Ivoire",
		"HR": "Croatia",
		"CU": "Cuba",
		"CW": "CuraÃ§ao",
		"CY": "Cyprus",
		"CZ": "Czech Republic",
		"DK": "Denmark",
		"DJ": "Djibouti",
		"DM": "Dominica",
		"DO": "Dominican Republic",
		"EC": "Ecuador",
		"EG": "Egypt",
		"SV": "El Salvador",
		"GQ": "Equatorial Guinea",
		"ER": "Eritrea",
		"EE": "Estonia",
		"ET": "Ethiopia",
		"FK": "Falkland Islands (Malvinas)",
		"FO": "Faroe Islands",
		"FJ": "Fiji",
		"FI": "Finland",
		"FR": "France",
		"GF": "French Guiana",
		"PF": "French Polynesia",
		"TF": "French Southern Territories",
		"GA": "Gabon",
		"GM": "Gambia",
		"GE": "Georgia",
		"DE": "Germany",
		"GH": "Ghana",
		"GI": "Gibraltar",
		"GR": "Greece",
		"GL": "Greenland",
		"GD": "Grenada",
		"GP": "Guadeloupe",
		"GU": "Guam",
		"GT": "Guatemala",
		"GG": "Guernsey",
		"GN": "Guinea",
		"GW": "Guinea-Bissau",
		"GY": "Guyana",
		"HT": "Haiti",
		"HM": "Heard Island and McDonald Islands",
		"VA": "Holy See (Vatican City State)",
		"HN": "Honduras",
		"HK": "Hong Kong",
		"HU": "Hungary",
		"IS": "Iceland",
		"IN": "India",
		"ID": "Indonesia",
		"IR": "Iran, Islamic Republic of",
		"IQ": "Iraq",
		"IE": "Ireland",
		"IM": "Isle of Man",
		"IL": "Israel",
		"IT": "Italy",
		"JM": "Jamaica",
		"JP": "Japan",
		"JE": "Jersey",
		"JO": "Jordan",
		"KZ": "Kazakhstan",
		"KE": "Kenya",
		"KI": "Kiribati",
		"KP": "Korea, Democratic People's Republic of",
		"KR": "Korea, Republic of",
		"KW": "Kuwait",
		"KG": "Kyrgyzstan",
		"LA": "Lao People's Democratic Republic",
		"LV": "Latvia",
		"LB": "Lebanon",
		"LS": "Lesotho",
		"LR": "Liberia",
		"LY": "Libya",
		"LI": "Liechtenstein",
		"LT": "Lithuania",
		"LU": "Luxembourg",
		"MO": "Macao",
		"MK": "Macedonia, the former Yugoslav Republic of",
		"MG": "Madagascar",
		"MW": "Malawi",
		"MY": "Malaysia",
		"MV": "Maldives",
		"ML": "Mali",
		"MT": "Malta",
		"MH": "Marshall Islands",
		"MQ": "Martinique",
		"MR": "Mauritania",
		"MU": "Mauritius",
		"YT": "Mayotte",
		"MX": "Mexico",
		"FM": "Micronesia, Federated States of",
		"MD": "Moldova, Republic of",
		"MC": "Monaco",
		"MN": "Mongolia",
		"ME": "Montenegro",
		"MS": "Montserrat",
		"MA": "Morocco",
		"MZ": "Mozambique",
		"MM": "Myanmar",
		"NA": "Namibia",
		"NR": "Nauru",
		"NP": "Nepal",
		"NL": "Netherlands",
		"NC": "New Caledonia",
		"NZ": "New Zealand",
		"NI": "Nicaragua",
		"NE": "Niger",
		"NG": "Nigeria",
		"NU": "Niue",
		"NF": "Norfolk Island",
		"MP": "Northern Mariana Islands",
		"NO": "Norway",
		"OM": "Oman",
		"PK": "Pakistan",
		"PW": "Palau",
		"PS": "Palestinian Territory, Occupied",
		"PA": "Panama",
		"PG": "Papua New Guinea",
		"PY": "Paraguay",
		"PE": "Peru",
		"PH": "Philippines",
		"PN": "Pitcairn",
		"PL": "Poland",
		"PT": "Portugal",
		"PR": "Puerto Rico",
		"QA": "Qatar",
		"RE": "RÃ©union",
		"RO": "Romania",
		"RU": "Russian Federation",
		"RW": "Rwanda",
		"SH": "Saint Helena, Ascension and Tristan da Cunha",
		"KN": "Saint Kitts and Nevis",
		"LC": "Saint Lucia",
		"MF": "Saint Martin (French part)",
		"PM": "Saint Pierre and Miquelon",
		"VC": "Saint Vincent and the Grenadines",
		"WS": "Samoa",
		"SM": "San Marino",
		"ST": "Sao Tome and Principe",
		"SA": "Saudi Arabia",
		"SN": "Senegal",
		"RS": "Serbia",
		"SC": "Seychelles",
		"SL": "Sierra Leone",
		"SG": "Singapore",
		"SX": "Sint Maarten (Dutch part)",
		"SK": "Slovakia",
		"SI": "Slovenia",
		"SB": "Solomon Islands",
		"SO": "Somalia",
		"ZA": "South Africa",
		"GS": "South Georgia and the South Sandwich Islands",
		"SS": "South Sudan",
		"ES": "Spain",
		"LK": "Sri Lanka",
		"SD": "Sudan",
		"SR": "Suriname",
		"SZ": "Swaziland",
		"SE": "Sweden",
		"CH": "Switzerland",
		"SY": "Syrian Arab Republic",
		"TW": "Taiwan, Province of China",
		"TJ": "Tajikistan",
		"TZ": "Tanzania, United Republic of",
		"TH": "Thailand",
		"TL": "Timor-Leste",
		"TG": "Togo",
		"TK": "Tokelau",
		"TO": "Tonga",
		"TT": "Trinidad and Tobago",
		"TN": "Tunisia",
		"TR": "Turkey",
		"TM": "Turkmenistan",
		"TC": "Turks and Caicos Islands",
		"TV": "Tuvalu",
		"UG": "Uganda",
		"UA": "Ukraine",
		"AE": "United Arab Emirates",
		"GB": "United Kingdom",
		"US": "United States",
		"UM": "United States Minor Outlying Islands",
		"UY": "Uruguay",
		"UZ": "Uzbekistan",
		"VU": "Vanuatu",
		"VE": "Venezuela, Bolivarian Republic of",
		"VN": "Viet Nam",
		"VG": "Virgin Islands, British",
		"VI": "Virgin Islands, U.S.",
		"WF": "Wallis and Futuna",
		"EH": "Western Sahara",
		"YE": "Yemen",
		"ZM": "Zambia",
		"ZW": "Zimbabwe"
	};
	$.flagStrap = function (element, options, i) {
		var plugin = this;
		var uniqueId = generateId(8);
		plugin.countries = {};
		plugin.selected = {
			value: null,
			text: null
		};
		plugin.settings = {
			inputName: 'country-' + uniqueId
		};
		var $container = $(element);
		var htmlSelectId = 'flagstrap-' + uniqueId;
		var htmlSelect = '#' + htmlSelectId;
		plugin.init = function () {
			plugin.countries = countries;
			plugin.countries = countries;
			plugin.settings = $.extend({}, defaults, options, $container.data());
			if (undefined !== plugin.settings.countries) {
				plugin.countries = plugin.settings.countries;
			}
			$container.addClass('flagstrap').append(buildHtmlSelect).append(buildDropDownButton).append(buildDropDownButtonItemList);
			$(htmlSelect).hide();
		};
		var buildHtmlSelect = function () {
			var htmlSelectElement = $('<select/>').attr('id', htmlSelectId).attr('name', plugin.settings.inputName).attr('tabindex', '-1');
			$.each(plugin.countries, function (code, country) {
				var optionAttributes = {
					value: code
				};
				if (plugin.settings.selectedCountry !== undefined) {
					if (plugin.settings.selectedCountry === code) {
						optionAttributes = {
							value: code,
							selected: "selected"
						};
						plugin.selected = {
							value: code,
							text: country
						}
					}
				}
				htmlSelectElement.append($('<option>', optionAttributes).text(country));
			});
			return htmlSelectElement;
		};
		var buildDropDownButton = function () {
			var selectedText = $(htmlSelect).find('option').first().text();
			var selectedValue = $(htmlSelect).find('option').first().val();
			selectedText = plugin.selected.text || selectedText;
			selectedValue = plugin.selected.value || selectedValue;
			var $selectedLabel = $('<i/>').addClass('flagstrap-icon flagstrap-' + selectedValue.toLowerCase()).css('margin-right', plugin.settings.labelMargin);
			var buttonLabel = $('<span/>').addClass('flagstrap-selected-' + uniqueId).html($selectedLabel).append(selectedText);
			var button = $('<button/>').attr('tabindex', '-1').attr('data-toggle', 'dropdown').attr('id', 'flagstrap-drop-down-' + uniqueId).addClass('btn ' + plugin.settings.buttonType + ' ' + plugin.settings.buttonSize + ' dropdown-toggle').html(buttonLabel);
			$('<span/>').addClass('caret').css('margin-left', plugin.settings.labelMargin).insertAfter(buttonLabel);
			return button;
		};
		var buildDropDownButtonItemList = function () {
			var items = $('<ul/>').attr('id', 'flagstrap-drop-down-' + uniqueId + '-list').attr('aria-labelled-by', 'flagstrap-drop-down-' + uniqueId).addClass('dropdown-menu');
			if (plugin.settings.scrollable) {
				items.css('height', 'auto').css('max-height', plugin.settings.scrollableHeight).css('overflow-x', 'hidden');
			}
			$(htmlSelect).find('option').each(function () {
				var text = $(this).text();
				var value = $(this).val();
				var flagIcon = $('<i/>').addClass('flagstrap-icon flagstrap-' + value.toLowerCase()).css('margin-right', plugin.settings.labelMargin);
				var flagStrapItem = $('<a/>').attr('data-val', $(this).val()).html(flagIcon).append(text).on('click', function (e) {
					$(htmlSelect).find('option').removeAttr('selected');
					$(htmlSelect).find('option[value="' + $(this).data('val') + '"]').attr("selected", "selected");
					$('.flagstrap-selected-' + uniqueId).html($(this).html());
					e.preventDefault();
				});
				var listItem = $('<li/>').prepend(flagStrapItem);
				items.append(listItem);
			});
			return items;
		};

		function generateId(length) {
			var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
			if (!length) {
				length = Math.floor(Math.random() * chars.length);
			}
			var str = '';
			for (var i = 0; i < length; i++) {
				str += chars[Math.floor(Math.random() * chars.length)];
			}
			return str;
		}
		plugin.init();
	};
	$.fn.flagStrap = function (options) {
		return this.each(function (i) {
			if ($(this).data('flagStrap') === undefined) {
				$(this).data('flagStrap', new $.flagStrap(this, options, i));
			}
		});
	}
})(jQuery);
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (a) {
	"use strict";
	var b = a.fn.jquery.split(" ")[0].split(".");
	if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function (a) {
	"use strict";

	function b() {
		var a = document.createElement("bootstrap"),
			b = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var c in b)
			if (void 0 !== a.style[c]) return {
				end: b[c]
			};
		return !1
	}
	a.fn.emulateTransitionEnd = function (b) {
		var c = !1,
			d = this;
		a(this).one("bsTransitionEnd", function () {
			c = !0
		});
		var e = function () {
			c || a(d).trigger(a.support.transition.end)
		};
		return setTimeout(e, b), this
	}, a(function () {
		a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
			bindType: a.support.transition.end,
			delegateType: a.support.transition.end,
			handle: function (b) {
				return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var c = a(this),
				e = c.data("bs.alert");
			e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
		})
	}
	var c = '[data-dismiss="alert"]',
		d = function (b) {
			a(b).on("click", c, this.close)
		};
	d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
		function c() {
			g.detach().trigger("closed.bs.alert").remove()
		}
		var e = a(this),
			f = e.attr("data-target");
		f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
		var g = a(f);
		b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
	};
	var e = a.fn.alert;
	a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
		return a.fn.alert = e, this
	}, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.button"),
				f = "object" == typeof b && b;
			e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
		})
	}
	var c = function (b, d) {
		this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
	};
	c.VERSION = "3.3.6", c.DEFAULTS = {
		loadingText: "loading..."
	}, c.prototype.setState = function (b) {
		var c = "disabled",
			d = this.$element,
			e = d.is("input") ? "val" : "html",
			f = d.data();
		b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
			d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
		}, this), 0)
	}, c.prototype.toggle = function () {
		var a = !0,
			b = this.$element.closest('[data-toggle="buttons"]');
		if (b.length) {
			var c = this.$element.find("input");
			"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
	};
	var d = a.fn.button;
	a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
		return a.fn.button = d, this
	}, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
		var d = a(c.target);
		d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
		a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.carousel"),
				f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
				g = "string" == typeof b ? b : f.slide;
			e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
		})
	}
	var c = function (b, c) {
		this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
	};
	c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, c.prototype.keydown = function (a) {
		if (!/input|textarea/i.test(a.target.tagName)) {
			switch (a.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return
			}
			a.preventDefault()
		}
	}, c.prototype.cycle = function (b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
	}, c.prototype.getItemIndex = function (a) {
		return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
	}, c.prototype.getItemForDirection = function (a, b) {
		var c = this.getItemIndex(b),
			d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
		if (d && !this.options.wrap) return b;
		var e = "prev" == a ? -1 : 1,
			f = (c + e) % this.$items.length;
		return this.$items.eq(f)
	}, c.prototype.to = function (a) {
		var b = this,
			c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
			b.to(a)
		}) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
	}, c.prototype.pause = function (b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, c.prototype.next = function () {
		return this.sliding ? void 0 : this.slide("next")
	}, c.prototype.prev = function () {
		return this.sliding ? void 0 : this.slide("prev")
	}, c.prototype.slide = function (b, d) {
		var e = this.$element.find(".item.active"),
			f = d || this.getItemForDirection(b, e),
			g = this.interval,
			h = "next" == b ? "left" : "right",
			i = this;
		if (f.hasClass("active")) return this.sliding = !1;
		var j = f[0],
			k = a.Event("slide.bs.carousel", {
				relatedTarget: j,
				direction: h
			});
		if (this.$element.trigger(k), !k.isDefaultPrevented()) {
			if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var l = a(this.$indicators.children()[this.getItemIndex(f)]);
				l && l.addClass("active")
			}
			var m = a.Event("slid.bs.carousel", {
				relatedTarget: j,
				direction: h
			});
			return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
				f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
					i.$element.trigger(m)
				}, 0)
			}).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
		}
	};
	var d = a.fn.carousel;
	a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
		return a.fn.carousel = d, this
	};
	var e = function (c) {
		var d, e = a(this),
			f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
		if (f.hasClass("carousel")) {
			var g = a.extend({}, f.data(), e.data()),
				h = e.attr("data-slide-to");
			h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
		}
	};
	a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
		a('[data-ride="carousel"]').each(function () {
			var c = a(this);
			b.call(c, c.data())
		})
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
		return a(d)
	}

	function c(b) {
		return this.each(function () {
			var c = a(this),
				e = c.data("bs.collapse"),
				f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
			!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
		})
	}
	var d = function (b, c) {
		this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
		toggle: !0
	}, d.prototype.dimension = function () {
		var a = this.$element.hasClass("width");
		return a ? "width" : "height"
	}, d.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
				var f = a.Event("show.bs.collapse");
				if (this.$element.trigger(f), !f.isDefaultPrevented()) {
					e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
					var g = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var h = function () {
						this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!a.support.transition) return h.call(this);
					var i = a.camelCase(["scroll", g].join("-"));
					this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
				}
			}
		}
	}, d.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var e = function () {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
			}
		}
	}, d.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, d.prototype.getParent = function () {
		return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
			var e = a(d);
			this.addAriaAndCollapsedClass(b(e), e)
		}, this)).end()
	}, d.prototype.addAriaAndCollapsedClass = function (a, b) {
		var c = a.hasClass("in");
		a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
	};
	var e = a.fn.collapse;
	a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
		return a.fn.collapse = e, this
	}, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
		var e = a(this);
		e.attr("data-target") || d.preventDefault();
		var f = b(e),
			g = f.data("bs.collapse"),
			h = g ? "toggle" : e.data();
		c.call(f, h)
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		var c = b.attr("data-target");
		c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length ? d : b.parent()
	}

	function c(c) {
		c && 3 === c.which || (a(e).remove(), a(f).each(function () {
			var d = a(this),
				e = b(d),
				f = {
					relatedTarget: this
				};
			e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
		}))
	}

	function d(b) {
		return this.each(function () {
			var c = a(this),
				d = c.data("bs.dropdown");
			d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
		})
	}
	var e = ".dropdown-backdrop",
		f = '[data-toggle="dropdown"]',
		g = function (b) {
			a(b).on("click.bs.dropdown", this.toggle)
		};
	g.VERSION = "3.3.6", g.prototype.toggle = function (d) {
		var e = a(this);
		if (!e.is(".disabled, :disabled")) {
			var f = b(e),
				g = f.hasClass("open");
			if (c(), !g) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
				var h = {
					relatedTarget: this
				};
				if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
				e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
			}
			return !1
		}
	}, g.prototype.keydown = function (c) {
		if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
			var d = a(this);
			if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
				var e = b(d),
					g = e.hasClass("open");
				if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
				var h = " li:not(.disabled):visible a",
					i = e.find(".dropdown-menu" + h);
				if (i.length) {
					var j = i.index(c.target);
					38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
				}
			}
		}
	};
	var h = a.fn.dropdown;
	a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
		return a.fn.dropdown = h, this
	}, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
		a.stopPropagation()
	}).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function (a) {
	"use strict";

	function b(b, d) {
		return this.each(function () {
			var e = a(this),
				f = e.data("bs.modal"),
				g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
			f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
		})
	}
	var c = function (b, c) {
		this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, c.prototype.toggle = function (a) {
		return this.isShown ? this.hide() : this.show(a)
	}, c.prototype.show = function (b) {
		var d = this,
			e = a.Event("show.bs.modal", {
				relatedTarget: b
			});
		this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
			d.$element.one("mouseup.dismiss.bs.modal", function (b) {
				a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function () {
			var e = a.support.transition && d.$element.hasClass("fade");
			d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
			var f = a.Event("shown.bs.modal", {
				relatedTarget: b
			});
			e ? d.$dialog.one("bsTransitionEnd", function () {
				d.$element.trigger("focus").trigger(f)
			}).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
		}))
	}, c.prototype.hide = function (b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
	}, c.prototype.enforceFocus = function () {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
			this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
		}, this))
	}, c.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
			27 == a.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, c.prototype.resize = function () {
		this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
	}, c.prototype.hideModal = function () {
		var a = this;
		this.$element.hide(), this.backdrop(function () {
			a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
		})
	}, c.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, c.prototype.backdrop = function (b) {
		var d = this,
			e = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var f = a.support.transition && e;
			if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
					return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
				}, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
			f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var g = function () {
				d.removeBackdrop(), b && b()
			};
			a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
		} else b && b()
	}, c.prototype.handleUpdate = function () {
		this.adjustDialog()
	}, c.prototype.adjustDialog = function () {
		var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
		})
	}, c.prototype.resetAdjustments = function () {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, c.prototype.checkScrollbar = function () {
		var a = window.innerWidth;
		if (!a) {
			var b = document.documentElement.getBoundingClientRect();
			a = b.right - Math.abs(b.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
	}, c.prototype.setScrollbar = function () {
		var a = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
	}, c.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", this.originalBodyPad)
	}, c.prototype.measureScrollbar = function () {
		var a = document.createElement("div");
		a.className = "modal-scrollbar-measure", this.$body.append(a);
		var b = a.offsetWidth - a.clientWidth;
		return this.$body[0].removeChild(a), b
	};
	var d = a.fn.modal;
	a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
		return a.fn.modal = d, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
		var d = a(this),
			e = d.attr("href"),
			f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
			g = f.data("bs.modal") ? "toggle" : a.extend({
				remote: !/#/.test(e) && e
			}, f.data(), d.data());
		d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
			a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
				d.is(":visible") && d.trigger("focus")
			})
		}), b.call(f, g, this)
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.tooltip"),
				f = "object" == typeof b && b;
			(e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function (a, b) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
	};
	c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, c.prototype.init = function (b, c, d) {
		if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
				click: !1,
				hover: !1,
				focus: !1
			}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];
			if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
			else if ("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focusin",
					i = "hover" == g ? "mouseleave" : "focusout";
				this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = a.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, c.prototype.getDefaults = function () {
		return c.DEFAULTS
	}, c.prototype.getOptions = function (b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
			show: b.delay,
			hide: b.delay
		}), b
	}, c.prototype.getDelegateOptions = function () {
		var b = {},
			c = this.getDefaults();
		return this._options && a.each(this._options, function (a, d) {
			c[a] != d && (b[a] = d)
		}), b
	}, c.prototype.enter = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
			"in" == c.hoverState && c.show()
		}, c.options.delay.show)) : c.show())
	}, c.prototype.isInStateTrue = function () {
		for (var a in this.inState)
			if (this.inState[a]) return !0;
		return !1
	}, c.prototype.leave = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
			"out" == c.hoverState && c.hide()
		}, c.options.delay.hide)) : c.hide())
	}, c.prototype.show = function () {
		var b = a.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(b);
			var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (b.isDefaultPrevented() || !d) return;
			var e = this,
				f = this.tip(),
				g = this.getUID(this.type);
			this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
			var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
				i = /\s?auto?\s?/i,
				j = i.test(h);
			j && (h = h.replace(i, "") || "top"), f.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
			var k = this.getPosition(),
				l = f[0].offsetWidth,
				m = f[0].offsetHeight;
			if (j) {
				var n = h,
					o = this.getPosition(this.$viewport);
				h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
			}
			var p = this.getCalculatedOffset(h, k, l, m);
			this.applyPlacement(p, h);
			var q = function () {
				var a = e.hoverState;
				e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
			};
			a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
		}
	}, c.prototype.applyPlacement = function (b, c) {
		var d = this.tip(),
			e = d[0].offsetWidth,
			f = d[0].offsetHeight,
			g = parseInt(d.css("margin-top"), 10),
			h = parseInt(d.css("margin-left"), 10);
		isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
			using: function (a) {
				d.css({
					top: Math.round(a.top),
					left: Math.round(a.left)
				})
			}
		}, b), 0), d.addClass("in");
		var i = d[0].offsetWidth,
			j = d[0].offsetHeight;
		"top" == c && j != f && (b.top = b.top + f - j);
		var k = this.getViewportAdjustedDelta(c, b, i, j);
		k.left ? b.left += k.left : b.top += k.top;
		var l = /top|bottom/.test(c),
			m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
			n = l ? "offsetWidth" : "offsetHeight";
		d.offset(b), this.replaceArrow(m, d[0][n], l)
	}, c.prototype.replaceArrow = function (a, b, c) {
		this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
	}, c.prototype.setContent = function () {
		var a = this.tip(),
			b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
	}, c.prototype.hide = function (b) {
		function d() {
			"in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
		}
		var e = this,
			f = a(this.$tip),
			g = a.Event("hide.bs." + this.type);
		return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
	}, c.prototype.fixTitle = function () {
		var a = this.$element;
		(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
	}, c.prototype.hasContent = function () {
		return this.getTitle()
	}, c.prototype.getPosition = function (b) {
		b = b || this.$element;
		var c = b[0],
			d = "BODY" == c.tagName,
			e = c.getBoundingClientRect();
		null == e.width && (e = a.extend({}, e, {
			width: e.right - e.left,
			height: e.bottom - e.top
		}));
		var f = d ? {
				top: 0,
				left: 0
			} : b.offset(),
			g = {
				scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
			},
			h = d ? {
				width: a(window).width(),
				height: a(window).height()
			} : null;
		return a.extend({}, e, g, h, f)
	}, c.prototype.getCalculatedOffset = function (a, b, c, d) {
		return "bottom" == a ? {
			top: b.top + b.height,
			left: b.left + b.width / 2 - c / 2
		} : "top" == a ? {
			top: b.top - d,
			left: b.left + b.width / 2 - c / 2
		} : "left" == a ? {
			top: b.top + b.height / 2 - d / 2,
			left: b.left - c
		} : {
			top: b.top + b.height / 2 - d / 2,
			left: b.left + b.width
		}
	}, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
		var e = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return e;
		var f = this.options.viewport && this.options.viewport.padding || 0,
			g = this.getPosition(this.$viewport);
		if (/right|left/.test(a)) {
			var h = b.top - f - g.scroll,
				i = b.top + f - g.scroll + d;
			h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
		} else {
			var j = b.left - f,
				k = b.left + f + c;
			j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
		}
		return e
	}, c.prototype.getTitle = function () {
		var a, b = this.$element,
			c = this.options;
		return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
	}, c.prototype.getUID = function (a) {
		do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
		return a
	}, c.prototype.tip = function () {
		if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, c.prototype.enable = function () {
		this.enabled = !0
	}, c.prototype.disable = function () {
		this.enabled = !1
	}, c.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled
	}, c.prototype.toggle = function (b) {
		var c = this;
		b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
	}, c.prototype.destroy = function () {
		var a = this;
		clearTimeout(this.timeout), this.hide(function () {
			a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
		})
	};
	var d = a.fn.tooltip;
	a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
		return a.fn.tooltip = d, this
	}
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.popover"),
				f = "object" == typeof b && b;
			(e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function (a, b) {
		this.init("popover", a, b)
	};
	if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
		return c.DEFAULTS
	}, c.prototype.setContent = function () {
		var a = this.tip(),
			b = this.getTitle(),
			c = this.getContent();
		a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
	}, c.prototype.hasContent = function () {
		return this.getTitle() || this.getContent()
	}, c.prototype.getContent = function () {
		var a = this.$element,
			b = this.options;
		return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var d = a.fn.popover;
	a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
		return a.fn.popover = d, this
	}
}(jQuery), + function (a) {
	"use strict";

	function b(c, d) {
		this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
	}

	function c(c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.scrollspy"),
				f = "object" == typeof c && c;
			e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}
	b.VERSION = "3.3.6", b.DEFAULTS = {
		offset: 10
	}, b.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, b.prototype.refresh = function () {
		var b = this,
			c = "offset",
			d = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
			var b = a(this),
				e = b.data("target") || b.attr("href"),
				f = /^#./.test(e) && a(e);
			return f && f.length && f.is(":visible") && [
				[f[c]().top + d, e]
			] || null
		}).sort(function (a, b) {
			return a[0] - b[0]
		}).each(function () {
			b.offsets.push(this[0]), b.targets.push(this[1])
		})
	}, b.prototype.process = function () {
		var a, b = this.$scrollElement.scrollTop() + this.options.offset,
			c = this.getScrollHeight(),
			d = this.options.offset + c - this.$scrollElement.height(),
			e = this.offsets,
			f = this.targets,
			g = this.activeTarget;
		if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
		if (g && b < e[0]) return this.activeTarget = null, this.clear();
		for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
	}, b.prototype.activate = function (b) {
		this.activeTarget = b, this.clear();
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
			d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
	}, b.prototype.clear = function () {
		a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var d = a.fn.scrollspy;
	a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
		return a.fn.scrollspy = d, this
	}, a(window).on("load.bs.scrollspy.data-api", function () {
		a('[data-spy="scroll"]').each(function () {
			var b = a(this);
			c.call(b, b.data())
		})
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.tab");
			e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
		})
	}
	var c = function (b) {
		this.element = a(b)
	};
	c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
		var b = this.element,
			c = b.closest("ul:not(.dropdown-menu)"),
			d = b.data("target");
		if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a"),
				f = a.Event("hide.bs.tab", {
					relatedTarget: b[0]
				}),
				g = a.Event("show.bs.tab", {
					relatedTarget: e[0]
				});
			if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
				var h = a(d);
				this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
					e.trigger({
						type: "hidden.bs.tab",
						relatedTarget: b[0]
					}), b.trigger({
						type: "shown.bs.tab",
						relatedTarget: e[0]
					})
				})
			}
		}
	}, c.prototype.activate = function (b, d, e) {
		function f() {
			g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
		}
		var g = d.find("> .active"),
			h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
		g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
	};
	var d = a.fn.tab;
	a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
		return a.fn.tab = d, this
	};
	var e = function (c) {
		c.preventDefault(), b.call(a(this), "show")
	};
	a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.affix"),
				f = "object" == typeof b && b;
			e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
		})
	}
	var c = function (b, d) {
		this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
	};
	c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
		offset: 0,
		target: window
	}, c.prototype.getState = function (a, b, c, d) {
		var e = this.$target.scrollTop(),
			f = this.$element.offset(),
			g = this.$target.height();
		if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
		if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
		var h = null == this.affixed,
			i = h ? e : f.top,
			j = h ? g : b;
		return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
	}, c.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(c.RESET).addClass("affix");
		var a = this.$target.scrollTop(),
			b = this.$element.offset();
		return this.pinnedOffset = b.top - a
	}, c.prototype.checkPositionWithEventLoop = function () {
		setTimeout(a.proxy(this.checkPosition, this), 1)
	}, c.prototype.checkPosition = function () {
		if (this.$element.is(":visible")) {
			var b = this.$element.height(),
				d = this.options.offset,
				e = d.top,
				f = d.bottom,
				g = Math.max(a(document).height(), a(document.body).height());
			"object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
			var h = this.getState(g, b, e, f);
			if (this.affixed != h) {
				null != this.unpin && this.$element.css("top", "");
				var i = "affix" + (h ? "-" + h : ""),
					j = a.Event(i + ".bs.affix");
				if (this.$element.trigger(j), j.isDefaultPrevented()) return;
				this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == h && this.$element.offset({
				top: g - b - f
			})
		}
	};
	var d = a.fn.affix;
	a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
		return a.fn.affix = d, this
	}, a(window).on("load", function () {
		a('[data-spy="affix"]').each(function () {
			var c = a(this),
				d = c.data();
			d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
		})
	})
}(jQuery);
jQuery(window).bind('scroll', function (e) {
	redrawDotNav();
});

function redrawDotNav() {
	var topNavHeight = 300;
	var numDivs = jQuery('section').length;
	jQuery('#dotNav li a').removeClass('active').parent('li').removeClass('active');
	jQuery('section').each(function (i, item) {
		var ele = jQuery(item),
			nextTop;
		console.log(ele.next().html());
		if (typeof ele.next().offset() != "undefined") {
			nextTop = ele.next().offset().top;
		} else {
			nextTop = jQuery(document).height();
		}
		if (ele.offset() !== null) {
			thisTop = ele.offset().top - ((nextTop - ele.offset().top) / numDivs);
		} else {
			thisTop = 0;
		}
		var docTop = jQuery(document).scrollTop() + topNavHeight;
		if (docTop >= thisTop && (docTop < nextTop)) {
			jQuery('#dotNav li').eq(i).addClass('active');
		}
	});
}
jQuery('#dotNav li').click(function ($) {
	var id = $(this).find('a').attr("href"),
		posi, ele, padding = $('.navbar-fixed-top').height();
	ele = $(id);
	posi = ($(ele).offset() || 0).top - padding;
	$('html, body').animate({
		scrollTop: posi
	}, 'slow');
	return false;
});
(function ($) {
	$.fn.visible = function (partial) {
		var $t = $(this),
			$w = $(window),
			viewTop = $w.scrollTop(),
			viewBottom = viewTop + $w.height(),
			_top = $t.offset().top,
			_bottom = _top + $t.height(),
			compareTop = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;
		return ((compareTop >= viewTop) && (compareBottom <= viewBottom));
	};
})(jQuery);
jQuery(document).ready(function () {
	jQuery(".choose-category").addClass("animated fadeInUp");
});
jQuery(window).scroll(function (event) {
	jQuery("section").each(function (i, el) {
		var el = jQuery(el);
		if (el.visible(true)) {
			el.addClass("selected");
		} else {}
	});
	jQuery(".enjoy-app-block").each(function (i, el) {
		var el = jQuery(el);
		if (el.visible(true)) {
			el.addClass("selected");
		} else {}
	});
	jQuery("ul.projectGraph li").each(function (i, el) {
		var el = jQuery(el);
		if (el.visible(true)) {
			el.addClass("selected");
		} else {}
	});
});
jQuery(document).ready(function (jQuery) {
	if (jQuery(window).height() > 800) {
		jQuerysize = jQuery(window).height() + "px";
		jQuery('.header').css("height", jQuerysize);
	}
});
(function ($) {
	$.fn.extend({
		easyResponsiveTabs: function (options) {
			var defaults = {
				type: 'default',
				width: 'auto',
				fit: true
			}
			var options = $.extend(defaults, options);
			var opt = options,
				jtype = opt.type,
				jfit = opt.fit,
				jwidth = opt.width,
				vtabs = 'vertical',
				accord = 'accordion';
			this.each(function () {
				var $respTabs = $(this);
				$respTabs.find('ul.resp-tabs-list li').addClass('resp-tab-item');
				$respTabs.css({
					'display': 'block',
					'width': jwidth
				});
				$respTabs.find('.resp-tabs-container > div').addClass('resp-tab-content');
				jtab_options();

				function jtab_options() {
					if (jtype == vtabs) {
						$respTabs.addClass('resp-vtabs');
					}
					if (jfit == true) {
						$respTabs.css({
							width: '100%',
							margin: '0px'
						});
					}
					if (jtype == accord) {
						$respTabs.addClass('resp-easy-accordion');
						$respTabs.find('.resp-tabs-list').css('display', 'none');
					}
				}
				var $tabItemh2;
				$respTabs.find('.resp-tab-content').before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");
				var itemCount = 0;
				$respTabs.find('.resp-accordion').each(function () {
					$tabItemh2 = $(this);
					var innertext = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')').text();
					$respTabs.find('.resp-accordion:eq(' + itemCount + ')').append(innertext);
					$tabItemh2.attr('aria-controls', 'tab_item-' + (itemCount));
					itemCount++;
				});
				var count = 0,
					$tabContent;
				$respTabs.find('.resp-tab-item').each(function () {
					$tabItem = $(this);
					$tabItem.attr('aria-controls', 'tab_item-' + (count));
					$tabItem.attr('role', 'tab');
					$respTabs.find('.resp-tab-item').first().addClass('resp-tab-active');
					$respTabs.find('.resp-accordion').first().addClass('resp-tab-active');
					$respTabs.find('.resp-tab-content').first().addClass('resp-tab-content-active').attr('style', 'display:block');
					var tabcount = 0;
					$respTabs.find('.resp-tab-content').each(function () {
						$tabContent = $(this);
						$tabContent.attr('aria-labelledby', 'tab_item-' + (tabcount));
						tabcount++;
					});
					count++;
				});
				$respTabs.find("[role=tab]").each(function () {
					var $currentTab = $(this);
					$currentTab.click(function () {
						var $tabAria = $currentTab.attr('aria-controls');
						if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
							$respTabs.find('.resp-tab-content-active').slideUp('', function () {
								$(this).addClass('resp-accordion-closed');
							});
							$currentTab.removeClass('resp-tab-active');
							return false;
						}
						if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
							$respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
							$respTabs.find('.resp-tab-content-active').slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
							$respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');
							$respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').slideDown().addClass('resp-tab-content-active');
						} else {
							$respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
							$respTabs.find('.resp-tab-content-active').removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');
							$respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');
							$respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').addClass('resp-tab-content-active').attr('style', 'display:block');
						}
					});
					$(window).resize(function () {
						$respTabs.find('.resp-accordion-closed').removeAttr('style');
					});
				});
			});
		}
	});
})(jQuery);;
(function ($) {
	$.flexslider = function (el, options) {
		var slider = $(el),
			vars = $.extend({}, $.flexslider.defaults, options),
			namespace = vars.namespace,
			touch = ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch,
			eventType = (touch) ? "touchend" : "click",
			vertical = vars.direction === "vertical",
			reverse = vars.reverse,
			carousel = (vars.itemWidth > 0),
			fade = vars.animation === "fade",
			asNav = vars.asNavFor !== "",
			methods = {};
		$.data(el, "flexslider", slider);
		methods = {
			init: function () {
				slider.animating = false;
				slider.currentSlide = vars.startAt;
				slider.animatingTo = slider.currentSlide;
				slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
				slider.containerSelector = vars.selector.substr(0, vars.selector.search(' '));
				slider.slides = $(vars.selector, slider);
				slider.container = $(slider.containerSelector, slider);
				slider.count = slider.slides.length;
				slider.syncExists = $(vars.sync).length > 0;
				if (vars.animation === "slide") vars.animation = "swing";
				slider.prop = (vertical) ? "top" : "marginLeft";
				slider.args = {};
				slider.manualPause = false;
				slider.transitions = !vars.video && !fade && vars.useCSS && (function () {
					var obj = document.createElement('div'),
						props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
					for (var i in props) {
						if (obj.style[props[i]] !== undefined) {
							slider.pfx = props[i].replace('Perspective', '').toLowerCase();
							slider.prop = "-" + slider.pfx + "-transform";
							return true;
						}
					}
					return false;
				}());
				if (vars.controlsContainer !== "") slider.controlsContainer = $(vars.controlsContainer).length > 0 && $(vars.controlsContainer);
				if (vars.manualControls !== "") slider.manualControls = $(vars.manualControls).length > 0 && $(vars.manualControls);
				if (vars.randomize) {
					slider.slides.sort(function () {
						return (Math.round(Math.random()) - 0.5);
					});
					slider.container.empty().append(slider.slides);
				}
				slider.doMath();
				if (asNav) methods.asNav.setup();
				slider.setup("init");
				if (vars.controlNav) methods.controlNav.setup();
				if (vars.directionNav) methods.directionNav.setup();
				if (vars.keyboard && ($(slider.containerSelector).length === 1 || vars.multipleKeyboard)) {
					$(document).bind('keyup', function (event) {
						var keycode = event.keyCode;
						if (!slider.animating && (keycode === 39 || keycode === 37)) {
							var target = (keycode === 39) ? slider.getTarget('next') : (keycode === 37) ? slider.getTarget('prev') : false;
							slider.flexAnimate(target, vars.pauseOnAction);
						}
					});
				}
				if (vars.mousewheel) {
					slider.bind('mousewheel', function (event, delta, deltaX, deltaY) {
						event.preventDefault();
						var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
						slider.flexAnimate(target, vars.pauseOnAction);
					});
				}
				if (vars.pausePlay) methods.pausePlay.setup();
				if (vars.slideshow) {
					if (vars.pauseOnHover) {
						slider.hover(function () {
							if (!slider.manualPlay && !slider.manualPause) slider.pause();
						}, function () {
							if (!slider.manualPause && !slider.manualPlay) slider.play();
						});
					}
					(vars.initDelay > 0) ? setTimeout(slider.play, vars.initDelay): slider.play();
				}
				if (touch && vars.touch) methods.touch();
				if (!fade || (fade && vars.smoothHeight)) $(window).bind("resize focus", methods.resize);
				setTimeout(function () {
					vars.start(slider);
				}, 200);
			},
			asNav: {
				setup: function () {
					slider.asNav = true;
					slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
					slider.currentItem = slider.currentSlide;
					slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
					slider.slides.click(function (e) {
						e.preventDefault();
						var $slide = $(this),
							target = $slide.index();
						if (!$(vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
							slider.direction = (slider.currentItem < target) ? "next" : "prev";
							slider.flexAnimate(target, vars.pauseOnAction, false, true, true);
						}
					});
				}
			},
			controlNav: {
				setup: function () {
					if (!slider.manualControls) {
						methods.controlNav.setupPaging();
					} else {
						methods.controlNav.setupManual();
					}
				},
				setupPaging: function () {
					var type = (vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
						j = 1,
						item;
					slider.controlNavScaffold = $('<ol class="' + namespace + 'control-nav ' + namespace + type + '"></ol>');
					if (slider.pagingCount > 1) {
						for (var i = 0; i < slider.pagingCount; i++) {
							item = (vars.controlNav === "thumbnails") ? '<img src="' + slider.slides.eq(i).attr("data-thumb") + '"/>' : '<a>' + j + '</a>';
							slider.controlNavScaffold.append('<li>' + item + '</li>');
							j++;
						}
					}
					(slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold): slider.append(slider.controlNavScaffold);
					methods.controlNav.set();
					methods.controlNav.active();
					slider.controlNavScaffold.delegate('a, img', eventType, function (event) {
						event.preventDefault();
						var $this = $(this),
							target = slider.controlNav.index($this);
						if (!$this.hasClass(namespace + 'active')) {
							slider.direction = (target > slider.currentSlide) ? "next" : "prev";
							slider.flexAnimate(target, vars.pauseOnAction);
						}
					});
					if (touch) {
						slider.controlNavScaffold.delegate('a', "click touchstart", function (event) {
							event.preventDefault();
						});
					}
				},
				setupManual: function () {
					slider.controlNav = slider.manualControls;
					methods.controlNav.active();
					slider.controlNav.live(eventType, function (event) {
						event.preventDefault();
						var $this = $(this),
							target = slider.controlNav.index($this);
						if (!$this.hasClass(namespace + 'active')) {
							(target > slider.currentSlide) ? slider.direction = "next": slider.direction = "prev";
							slider.flexAnimate(target, vars.pauseOnAction);
						}
					});
					if (touch) {
						slider.controlNav.live("click touchstart", function (event) {
							event.preventDefault();
						});
					}
				},
				set: function () {
					var selector = (vars.controlNav === "thumbnails") ? 'img' : 'a';
					slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
				},
				active: function () {
					slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
				},
				update: function (action, pos) {
					if (slider.pagingCount > 1 && action === "add") {
						slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
					} else if (slider.pagingCount === 1) {
						slider.controlNavScaffold.find('li').remove();
					} else {
						slider.controlNav.eq(pos).closest('li').remove();
					}
					methods.controlNav.set();
					(slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action): methods.controlNav.active();
				}
			},
			directionNav: {
				setup: function () {
					var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + vars.nextText + '</a></li></ul>');
					if (slider.controlsContainer) {
						$(slider.controlsContainer).append(directionNavScaffold);
						slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
					} else {
						slider.append(directionNavScaffold);
						slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
					}
					methods.directionNav.update();
					slider.directionNav.bind(eventType, function (event) {
						event.preventDefault();
						var target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
						slider.flexAnimate(target, vars.pauseOnAction);
					});
					if (touch) {
						slider.directionNav.bind("click touchstart", function (event) {
							event.preventDefault();
						});
					}
				},
				update: function () {
					var disabledClass = namespace + 'disabled';
					if (slider.pagingCount === 1) {
						slider.directionNav.addClass(disabledClass);
					} else if (!vars.animationLoop) {
						if (slider.animatingTo === 0) {
							slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass);
						} else if (slider.animatingTo === slider.last) {
							slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass);
						} else {
							slider.directionNav.removeClass(disabledClass);
						}
					} else {
						slider.directionNav.removeClass(disabledClass);
					}
				}
			},
			pausePlay: {
				setup: function () {
					var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');
					if (slider.controlsContainer) {
						slider.controlsContainer.append(pausePlayScaffold);
						slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
					} else {
						slider.append(pausePlayScaffold);
						slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
					}
					methods.pausePlay.update((vars.slideshow) ? namespace + 'pause' : namespace + 'play');
					slider.pausePlay.bind(eventType, function (event) {
						event.preventDefault();
						if ($(this).hasClass(namespace + 'pause')) {
							slider.manualPause = true;
							slider.manualPlay = false;
							slider.pause();
						} else {
							slider.manualPause = false;
							slider.manualPlay = true;
							slider.play();
						}
					});
					if (touch) {
						slider.pausePlay.bind("click touchstart", function (event) {
							event.preventDefault();
						});
					}
				},
				update: function (state) {
					(state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').text(vars.playText): slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').text(vars.pauseText);
				}
			},
			touch: function () {
				var startX, startY, offset, cwidth, dx, startT, scrolling = false;
				el.addEventListener('touchstart', onTouchStart, false);

				function onTouchStart(e) {
					if (slider.animating) {
						e.preventDefault();
					} else if (e.touches.length === 1) {
						slider.pause();
						cwidth = (vertical) ? slider.h : slider.w;
						startT = Number(new Date());
						offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 : (carousel && reverse) ? slider.limit - (((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo) : (carousel && slider.currentSlide === slider.last) ? slider.limit : (carousel) ? ((slider.itemW + vars.itemMargin) * slider.move) * slider.currentSlide : (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
						startX = (vertical) ? e.touches[0].pageY : e.touches[0].pageX;
						startY = (vertical) ? e.touches[0].pageX : e.touches[0].pageY;
						el.addEventListener('touchmove', onTouchMove, false);
						el.addEventListener('touchend', onTouchEnd, false);
					}
				}

				function onTouchMove(e) {
					dx = (vertical) ? startX - e.touches[0].pageY : startX - e.touches[0].pageX;
					scrolling = (vertical) ? (Math.abs(dx) < Math.abs(e.touches[0].pageX - startY)) : (Math.abs(dx) < Math.abs(e.touches[0].pageY - startY));
					if (!scrolling || Number(new Date()) - startT > 500) {
						e.preventDefault();
						if (!fade && slider.transitions) {
							if (!vars.animationLoop) {
								dx = dx / ((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx) / cwidth + 2) : 1);
							}
							slider.setProps(offset + dx, "setTouch");
						}
					}
				}

				function onTouchEnd(e) {
					el.removeEventListener('touchmove', onTouchMove, false);
					if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
						var updateDx = (reverse) ? -dx : dx,
							target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');
						if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
							slider.flexAnimate(target, vars.pauseOnAction);
						} else {
							if (!fade) slider.flexAnimate(slider.currentSlide, vars.pauseOnAction, true);
						}
					}
					el.removeEventListener('touchend', onTouchEnd, false);
					startX = null;
					startY = null;
					dx = null;
					offset = null;
				}
			},
			resize: function () {
				if (!slider.animating && slider.is(':visible')) {
					if (!carousel) slider.doMath();
					if (fade) {
						methods.smoothHeight();
					} else if (carousel) {
						slider.slides.width(slider.computedW);
						slider.update(slider.pagingCount);
						slider.setProps();
					} else if (vertical) {
						slider.viewport.height(slider.h);
						slider.setProps(slider.h, "setTotal");
					} else {
						if (vars.smoothHeight) methods.smoothHeight();
						slider.newSlides.width(slider.computedW);
						slider.setProps(slider.computedW, "setTotal");
					}
				}
			},
			smoothHeight: function (dur) {
				if (!vertical || fade) {
					var $obj = (fade) ? slider : slider.viewport;
					(dur) ? $obj.animate({
						"height": slider.slides.eq(slider.animatingTo).height()
					}, dur): $obj.height(slider.slides.eq(slider.animatingTo).height());
				}
			},
			sync: function (action) {
				var $obj = $(vars.sync).data("flexslider"),
					target = slider.animatingTo;
				switch (action) {
					case "animate":
						$obj.flexAnimate(target, vars.pauseOnAction, false, true);
						break;
					case "play":
						if (!$obj.playing && !$obj.asNav) {
							$obj.play();
						}
						break;
					case "pause":
						$obj.pause();
						break;
				}
			}
		}
		slider.flexAnimate = function (target, pause, override, withSync, fromNav) {
			if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";
			if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
				if (asNav && withSync) {
					var master = $(vars.asNavFor).data('flexslider');
					slider.atEnd = target === 0 || target === slider.count - 1;
					master.flexAnimate(target, true, false, true, fromNav);
					slider.direction = (slider.currentItem < target) ? "next" : "prev";
					master.direction = slider.direction;
					if (Math.ceil((target + 1) / slider.visible) - 1 !== slider.currentSlide && target !== 0) {
						slider.currentItem = target;
						slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
						target = Math.floor(target / slider.visible);
					} else {
						slider.currentItem = target;
						slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
						return false;
					}
				}
				slider.animating = true;
				slider.animatingTo = target;
				vars.before(slider);
				if (pause) slider.pause();
				if (slider.syncExists && !fromNav) methods.sync("animate");
				if (vars.controlNav) methods.controlNav.active();
				if (!carousel) slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');
				slider.atEnd = target === 0 || target === slider.last;
				if (vars.directionNav) methods.directionNav.update();
				if (target === slider.last) {
					vars.end(slider);
					if (!vars.animationLoop) slider.pause();
				}
				if (!fade) {
					var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
						margin, slideString, calcNext;
					if (carousel) {
						margin = (vars.itemWidth > slider.w) ? vars.itemMargin * 2 : vars.itemMargin;
						calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
						slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
					} else if (slider.currentSlide === 0 && target === slider.count - 1 && vars.animationLoop && slider.direction !== "next") {
						slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
					} else if (slider.currentSlide === slider.last && target === 0 && vars.animationLoop && slider.direction !== "prev") {
						slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
					} else {
						slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
					}
					slider.setProps(slideString, "", vars.animationSpeed);
					if (slider.transitions) {
						if (!vars.animationLoop || !slider.atEnd) {
							slider.animating = false;
							slider.currentSlide = slider.animatingTo;
						}
						slider.container.unbind("webkitTransitionEnd transitionend");
						slider.container.bind("webkitTransitionEnd transitionend", function () {
							slider.wrapup(dimension);
						});
					} else {
						slider.container.animate(slider.args, vars.animationSpeed, vars.easing, function () {
							slider.wrapup(dimension);
						});
					}
				} else {
					if (!touch) {
						slider.slides.eq(slider.currentSlide).fadeOut(vars.animationSpeed, vars.easing);
						slider.slides.eq(target).fadeIn(vars.animationSpeed, vars.easing, slider.wrapup);
					} else {
						slider.slides.eq(slider.currentSlide).css({
							"opacity": 0,
							"zIndex": 1
						});
						slider.slides.eq(target).css({
							"opacity": 1,
							"zIndex": 2
						});
						slider.slides.unbind("webkitTransitionEnd transitionend");
						slider.slides.eq(slider.currentSlide).bind("webkitTransitionEnd transitionend", function () {
							vars.after(slider);
						});
						slider.animating = false;
						slider.currentSlide = slider.animatingTo;
					}
				}
				if (vars.smoothHeight) methods.smoothHeight(vars.animationSpeed);
			}
		}
		slider.wrapup = function (dimension) {
			if (!fade && !carousel) {
				if (slider.currentSlide === 0 && slider.animatingTo === slider.last && vars.animationLoop) {
					slider.setProps(dimension, "jumpEnd");
				} else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && vars.animationLoop) {
					slider.setProps(dimension, "jumpStart");
				}
			}
			slider.animating = false;
			slider.currentSlide = slider.animatingTo;
			vars.after(slider);
		}
		slider.animateSlides = function () {
			if (!slider.animating) slider.flexAnimate(slider.getTarget("next"));
		}
		slider.pause = function () {
			clearInterval(slider.animatedSlides);
			slider.playing = false;
			if (vars.pausePlay) methods.pausePlay.update("play");
			if (slider.syncExists) methods.sync("pause");
		}
		slider.play = function () {
			slider.animatedSlides = setInterval(slider.animateSlides, vars.slideshowSpeed);
			slider.playing = true;
			if (vars.pausePlay) methods.pausePlay.update("pause");
			if (slider.syncExists) methods.sync("play");
		}
		slider.canAdvance = function (target, fromNav) {
			var last = (asNav) ? slider.pagingCount - 1 : slider.last;
			return (fromNav) ? true : (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true : (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false : (target === slider.currentSlide && !asNav) ? false : (vars.animationLoop) ? true : (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false : (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false : true;
		}
		slider.getTarget = function (dir) {
			slider.direction = dir;
			if (dir === "next") {
				return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
			} else {
				return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
			}
		}
		slider.setProps = function (pos, special, dur) {
			var target = (function () {
				var posCheck = (pos) ? pos : ((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo,
					posCalc = (function () {
						if (carousel) {
							return (special === "setTouch") ? pos : (reverse && slider.animatingTo === slider.last) ? 0 : (reverse) ? slider.limit - (((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo) : (slider.animatingTo === slider.last) ? slider.limit : posCheck;
						} else {
							switch (special) {
								case "setTotal":
									return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
								case "setTouch":
									return (reverse) ? pos : pos;
								case "jumpEnd":
									return (reverse) ? pos : slider.count * pos;
								case "jumpStart":
									return (reverse) ? slider.count * pos : pos;
								default:
									return pos;
							}
						}
					}());
				return (posCalc * -1) + "px";
			}());
			if (slider.transitions) {
				target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
				dur = (dur !== undefined) ? (dur / 1000) + "s" : "0s";
				slider.container.css("-" + slider.pfx + "-transition-duration", dur);
			}
			slider.args[slider.prop] = target;
			if (slider.transitions || dur === undefined) slider.container.css(slider.args);
		}
		slider.setup = function (type) {
			if (!fade) {
				var sliderOffset, arr;
				if (type === "init") {
					slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({
						"overflow": "hidden",
						"position": "relative"
					}).appendTo(slider).append(slider.container);
					slider.cloneCount = 0;
					slider.cloneOffset = 0;
					if (reverse) {
						arr = $.makeArray(slider.slides).reverse();
						slider.slides = $(arr);
						slider.container.empty().append(slider.slides);
					}
				}
				if (vars.animationLoop && !carousel) {
					slider.cloneCount = 2;
					slider.cloneOffset = 1;
					if (type !== "init") slider.container.find('.clone').remove();
					slider.container.append(slider.slides.first().clone().addClass('clone')).prepend(slider.slides.last().clone().addClass('clone'));
				}
				slider.newSlides = $(vars.selector, slider);
				sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
				if (vertical && !carousel) {
					slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
					setTimeout(function () {
						slider.newSlides.css({
							"display": "block"
						});
						slider.doMath();
						slider.viewport.height(slider.h);
						slider.setProps(sliderOffset * slider.h, "init");
					}, (type === "init") ? 100 : 0);
				} else {
					slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
					slider.setProps(sliderOffset * slider.computedW, "init");
					setTimeout(function () {
						slider.doMath();
						slider.newSlides.css({
							"width": slider.computedW,
							"float": "left",
							"display": "block"
						});
						if (vars.smoothHeight) methods.smoothHeight();
					}, (type === "init") ? 100 : 0);
				}
			} else {
				slider.slides.css({
					"width": "100%",
					"float": "left",
					"marginRight": "-100%",
					"position": "relative"
				});
				if (type === "init") {
					if (!touch) {
						slider.slides.eq(slider.currentSlide).fadeIn(vars.animationSpeed, vars.easing);
					} else {
						slider.slides.css({
							"opacity": 0,
							"display": "block",
							"webkitTransition": "opacity " + vars.animationSpeed / 1000 + "s ease",
							"zIndex": 1
						}).eq(slider.currentSlide).css({
							"opacity": 1,
							"zIndex": 2
						});
					}
				}
				if (vars.smoothHeight) methods.smoothHeight();
			}
			if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
		}
		slider.doMath = function () {
			var slide = slider.slides.first(),
				slideMargin = vars.itemMargin,
				minItems = vars.minItems,
				maxItems = vars.maxItems;
			slider.w = slider.width();
			slider.h = slide.height();
			slider.boxPadding = slide.outerWidth() - slide.width();
			if (carousel) {
				slider.itemT = vars.itemWidth + slideMargin;
				slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
				slider.maxW = (maxItems) ? maxItems * slider.itemT : slider.w;
				slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * minItems)) / minItems : (slider.maxW < slider.w) ? (slider.w - (slideMargin * maxItems)) / maxItems : (vars.itemWidth > slider.w) ? slider.w : vars.itemWidth;
				slider.visible = Math.floor(slider.w / (slider.itemW + slideMargin));
				slider.move = (vars.move > 0 && vars.move < slider.visible) ? vars.move : slider.visible;
				slider.pagingCount = Math.ceil(((slider.count - slider.visible) / slider.move) + 1);
				slider.last = slider.pagingCount - 1;
				slider.limit = (slider.pagingCount === 1) ? 0 : (vars.itemWidth > slider.w) ? ((slider.itemW + (slideMargin * 2)) * slider.count) - slider.w - slideMargin : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
			} else {
				slider.itemW = slider.w;
				slider.pagingCount = slider.count;
				slider.last = slider.count - 1;
			}
			slider.computedW = slider.itemW - slider.boxPadding;
		}
		slider.update = function (pos, action) {
			slider.doMath();
			if (!carousel) {
				if (pos < slider.currentSlide) {
					slider.currentSlide += 1;
				} else if (pos <= slider.currentSlide && pos !== 0) {
					slider.currentSlide -= 1;
				}
				slider.animatingTo = slider.currentSlide;
			}
			if (vars.controlNav && !slider.manualControls) {
				if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
					methods.controlNav.update("add");
				} else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
					if (carousel && slider.currentSlide > slider.last) {
						slider.currentSlide -= 1;
						slider.animatingTo -= 1;
					}
					methods.controlNav.update("remove", slider.last);
				}
			}
			if (vars.directionNav) methods.directionNav.update();
		}
		slider.addSlide = function (obj, pos) {
			var $obj = $(obj);
			slider.count += 1;
			slider.last = slider.count - 1;
			if (vertical && reverse) {
				(pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj): slider.container.prepend($obj);
			} else {
				(pos !== undefined) ? slider.slides.eq(pos).before($obj): slider.container.append($obj);
			}
			slider.update(pos, "add");
			slider.slides = $(vars.selector + ':not(.clone)', slider);
			slider.setup();
			vars.added(slider);
		}
		slider.removeSlide = function (obj) {
			var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;
			slider.count -= 1;
			slider.last = slider.count - 1;
			if (isNaN(obj)) {
				$(obj, slider.slides).remove();
			} else {
				(vertical && reverse) ? slider.slides.eq(slider.last).remove(): slider.slides.eq(obj).remove();
			}
			slider.doMath();
			slider.update(pos, "remove");
			slider.slides = $(vars.selector + ':not(.clone)', slider);
			slider.setup();
			vars.removed(slider);
		}
		methods.init();
	}
	$.flexslider.defaults = {
		namespace: "flex-",
		selector: ".slides > li",
		animation: "fade",
		easing: "swing",
		direction: "horizontal",
		reverse: false,
		animationLoop: true,
		smoothHeight: false,
		startAt: 0,
		slideshow: true,
		slideshowSpeed: 7000,
		animationSpeed: 600,
		initDelay: 0,
		randomize: false,
		pauseOnAction: true,
		pauseOnHover: false,
		useCSS: true,
		touch: true,
		video: false,
		controlNav: true,
		directionNav: true,
		prevText: "Previous",
		nextText: "Next",
		keyboard: true,
		multipleKeyboard: false,
		mousewheel: false,
		pausePlay: false,
		pauseText: "Pause",
		playText: "Play",
		controlsContainer: "",
		manualControls: "",
		sync: "",
		asNavFor: "",
		itemWidth: 0,
		itemMargin: 0,
		minItems: 0,
		maxItems: 0,
		move: 0,
		start: function () {},
		before: function () {},
		after: function () {},
		end: function () {},
		added: function () {},
		removed: function () {}
	}
	$.fn.flexslider = function (options) {
		if (options === undefined) options = {};
		if (typeof options === "object") {
			return this.each(function () {
				var $this = $(this),
					selector = (options.selector) ? options.selector : ".slides > li",
					$slides = $this.find(selector);
				if ($slides.length === 1) {
					$slides.fadeIn(400);
					if (options.start) options.start($this);
				} else if ($this.data('flexslider') == undefined) {
					new $.flexslider(this, options);
				}
			});
		} else {
			var $slider = $(this).data('flexslider');
			switch (options) {
				case "play":
					$slider.play();
					break;
				case "pause":
					$slider.pause();
					break;
				case "next":
					$slider.flexAnimate($slider.getTarget("next"), true);
					break;
				case "prev":
				case "previous":
					$slider.flexAnimate($slider.getTarget("prev"), true);
					break;
				default:
					if (typeof options === "number") $slider.flexAnimate(options, true);
			}
		}
	}
})(jQuery);
(function () {
	var t = [].indexOf || function (t) {
			for (var e = 0, n = this.length; e < n; e++) {
				if (e in this && this[e] === t) return e
			}
			return -1
		},
		e = [].slice;
	(function (t, e) {
		if (typeof define === "function" && define.amd) {
			return define("waypoints", ["jquery"], function (n) {
				return e(n, t)
			})
		} else {
			return e(t.jQuery, t)
		}
	})(this, function (n, r) {
		var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
		i = n(r);
		c = t.call(r, "ontouchstart") >= 0;
		s = {
			horizontal: {},
			vertical: {}
		};
		f = 1;
		a = {};
		u = "waypoints-context-id";
		p = "resize.waypoints";
		y = "scroll.waypoints";
		v = 1;
		w = "waypoints-waypoint-ids";
		g = "waypoint";
		m = "waypoints";
		o = function () {
			function t(t) {
				var e = this;
				this.$element = t;
				this.element = t[0];
				this.didResize = false;
				this.didScroll = false;
				this.id = "context" + f++;
				this.oldScroll = {
					x: t.scrollLeft(),
					y: t.scrollTop()
				};
				this.waypoints = {
					horizontal: {},
					vertical: {}
				};
				t.data(u, this.id);
				a[this.id] = this;
				t.bind(y, function () {
					var t;
					if (!(e.didScroll || c)) {
						e.didScroll = true;
						t = function () {
							e.doScroll();
							return e.didScroll = false
						};
						return r.setTimeout(t, n[m].settings.scrollThrottle)
					}
				});
				t.bind(p, function () {
					var t;
					if (!e.didResize) {
						e.didResize = true;
						t = function () {
							n[m]("refresh");
							return e.didResize = false
						};
						return r.setTimeout(t, n[m].settings.resizeThrottle)
					}
				})
			}
			t.prototype.doScroll = function () {
				var t, e = this;
				t = {
					horizontal: {
						newScroll: this.$element.scrollLeft(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left"
					},
					vertical: {
						newScroll: this.$element.scrollTop(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up"
					}
				};
				if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
					n[m]("refresh")
				}
				n.each(t, function (t, r) {
					var i, o, l;
					l = [];
					o = r.newScroll > r.oldScroll;
					i = o ? r.forward : r.backward;
					n.each(e.waypoints[t], function (t, e) {
						var n, i;
						if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
							return l.push(e)
						} else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
							return l.push(e)
						}
					});
					l.sort(function (t, e) {
						return t.offset - e.offset
					});
					if (!o) {
						l.reverse()
					}
					return n.each(l, function (t, e) {
						if (e.options.continuous || t === l.length - 1) {
							return e.trigger([i])
						}
					})
				});
				return this.oldScroll = {
					x: t.horizontal.newScroll,
					y: t.vertical.newScroll
				}
			};
			t.prototype.refresh = function () {
				var t, e, r, i = this;
				r = n.isWindow(this.element);
				e = this.$element.offset();
				this.doScroll();
				t = {
					horizontal: {
						contextOffset: r ? 0 : e.left,
						contextScroll: r ? 0 : this.oldScroll.x,
						contextDimension: this.$element.width(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left",
						offsetProp: "left"
					},
					vertical: {
						contextOffset: r ? 0 : e.top,
						contextScroll: r ? 0 : this.oldScroll.y,
						contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up",
						offsetProp: "top"
					}
				};
				return n.each(t, function (t, e) {
					return n.each(i.waypoints[t], function (t, r) {
						var i, o, l, s, f;
						i = r.options.offset;
						l = r.offset;
						o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
						if (n.isFunction(i)) {
							i = i.apply(r.element)
						} else if (typeof i === "string") {
							i = parseFloat(i);
							if (r.options.offset.indexOf("%") > -1) {
								i = Math.ceil(e.contextDimension * i / 100)
							}
						}
						r.offset = o - e.contextOffset + e.contextScroll - i;
						if (r.options.onlyOnScroll && l != null || !r.enabled) {
							return
						}
						if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
							return r.trigger([e.backward])
						} else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
							return r.trigger([e.forward])
						} else if (l === null && e.oldScroll >= r.offset) {
							return r.trigger([e.forward])
						}
					})
				})
			};
			t.prototype.checkEmpty = function () {
				if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
					this.$element.unbind([p, y].join(" "));
					return delete a[this.id]
				}
			};
			return t
		}();
		l = function () {
			function t(t, e, r) {
				var i, o;
				r = n.extend({}, n.fn[g].defaults, r);
				if (r.offset === "bottom-in-view") {
					r.offset = function () {
						var t;
						t = n[m]("viewportHeight");
						if (!n.isWindow(e.element)) {
							t = e.$element.height()
						}
						return t - n(this).outerHeight()
					}
				}
				this.$element = t;
				this.element = t[0];
				this.axis = r.horizontal ? "horizontal" : "vertical";
				this.callback = r.handler;
				this.context = e;
				this.enabled = r.enabled;
				this.id = "waypoints" + v++;
				this.offset = null;
				this.options = r;
				e.waypoints[this.axis][this.id] = this;
				s[this.axis][this.id] = this;
				i = (o = t.data(w)) != null ? o : [];
				i.push(this.id);
				t.data(w, i)
			}
			t.prototype.trigger = function (t) {
				if (!this.enabled) {
					return
				}
				if (this.callback != null) {
					this.callback.apply(this.element, t)
				}
				if (this.options.triggerOnce) {
					return this.destroy()
				}
			};
			t.prototype.disable = function () {
				return this.enabled = false
			};
			t.prototype.enable = function () {
				this.context.refresh();
				return this.enabled = true
			};
			t.prototype.destroy = function () {
				delete s[this.axis][this.id];
				delete this.context.waypoints[this.axis][this.id];
				return this.context.checkEmpty()
			};
			t.getWaypointsByElement = function (t) {
				var e, r;
				r = n(t).data(w);
				if (!r) {
					return []
				}
				e = n.extend({}, s.horizontal, s.vertical);
				return n.map(r, function (t) {
					return e[t]
				})
			};
			return t
		}();
		d = {
			init: function (t, e) {
				var r;
				if (e == null) {
					e = {}
				}
				if ((r = e.handler) == null) {
					e.handler = t
				}
				this.each(function () {
					var t, r, i, s;
					t = n(this);
					i = (s = e.context) != null ? s : n.fn[g].defaults.context;
					if (!n.isWindow(i)) {
						i = t.closest(i)
					}
					i = n(i);
					r = a[i.data(u)];
					if (!r) {
						r = new o(i)
					}
					return new l(t, r, e)
				});
				n[m]("refresh");
				return this
			},
			disable: function () {
				return d._invoke(this, "disable")
			},
			enable: function () {
				return d._invoke(this, "enable")
			},
			destroy: function () {
				return d._invoke(this, "destroy")
			},
			prev: function (t, e) {
				return d._traverse.call(this, t, e, function (t, e, n) {
					if (e > 0) {
						return t.push(n[e - 1])
					}
				})
			},
			next: function (t, e) {
				return d._traverse.call(this, t, e, function (t, e, n) {
					if (e < n.length - 1) {
						return t.push(n[e + 1])
					}
				})
			},
			_traverse: function (t, e, i) {
				var o, l;
				if (t == null) {
					t = "vertical"
				}
				if (e == null) {
					e = r
				}
				l = h.aggregate(e);
				o = [];
				this.each(function () {
					var e;
					e = n.inArray(this, l[t]);
					return i(o, e, l[t])
				});
				return this.pushStack(o)
			},
			_invoke: function (t, e) {
				t.each(function () {
					var t;
					t = l.getWaypointsByElement(this);
					return n.each(t, function (t, n) {
						n[e]();
						return true
					})
				});
				return this
			}
		};
		n.fn[g] = function () {
			var t, r;
			r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
			if (d[r]) {
				return d[r].apply(this, t)
			} else if (n.isFunction(r)) {
				return d.init.apply(this, arguments)
			} else if (n.isPlainObject(r)) {
				return d.init.apply(this, [null, r])
			} else if (!r) {
				return n.error("jQuery Waypoints needs a callback function or handler option.")
			} else {
				return n.error("The " + r + " method does not exist in jQuery Waypoints.")
			}
		};
		n.fn[g].defaults = {
			context: r,
			continuous: true,
			enabled: true,
			horizontal: false,
			offset: 0,
			triggerOnce: false
		};
		h = {
			refresh: function () {
				return n.each(a, function (t, e) {
					return e.refresh()
				})
			},
			viewportHeight: function () {
				var t;
				return (t = r.innerHeight) != null ? t : i.height()
			},
			aggregate: function (t) {
				var e, r, i;
				e = s;
				if (t) {
					e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0
				}
				if (!e) {
					return []
				}
				r = {
					horizontal: [],
					vertical: []
				};
				n.each(r, function (t, i) {
					n.each(e[t], function (t, e) {
						return i.push(e)
					});
					i.sort(function (t, e) {
						return t.offset - e.offset
					});
					r[t] = n.map(i, function (t) {
						return t.element
					});
					return r[t] = n.unique(r[t])
				});
				return r
			},
			above: function (t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "vertical", function (t, e) {
					return e.offset <= t.oldScroll.y
				})
			},
			below: function (t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "vertical", function (t, e) {
					return e.offset > t.oldScroll.y
				})
			},
			left: function (t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "horizontal", function (t, e) {
					return e.offset <= t.oldScroll.x
				})
			},
			right: function (t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "horizontal", function (t, e) {
					return e.offset > t.oldScroll.x
				})
			},
			enable: function () {
				return h._invoke("enable")
			},
			disable: function () {
				return h._invoke("disable")
			},
			destroy: function () {
				return h._invoke("destroy")
			},
			extendFn: function (t, e) {
				return d[t] = e
			},
			_invoke: function (t) {
				var e;
				e = n.extend({}, s.vertical, s.horizontal);
				return n.each(e, function (e, n) {
					n[t]();
					return true
				})
			},
			_filter: function (t, e, r) {
				var i, o;
				i = a[n(t).data(u)];
				if (!i) {
					return []
				}
				o = [];
				n.each(i.waypoints[e], function (t, e) {
					if (r(i, e)) {
						return o.push(e)
					}
				});
				o.sort(function (t, e) {
					return t.offset - e.offset
				});
				return n.map(o, function (t) {
					return t.element
				})
			}
		};
		n[m] = function () {
			var t, n;
			n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
			if (h[n]) {
				return h[n].apply(null, t)
			} else {
				return h.aggregate.call(null, n)
			}
		};
		n[m].settings = {
			resizeThrottle: 100,
			scrollThrottle: 30
		};
		return i.load(function () {
			return n[m]("refresh")
		})
	})
}).call(this);
(function () {
	(function (t, n) {
		if (typeof define === "function" && define.amd) {
			return define(["jquery", "waypoints"], n)
		} else {
			return n(t.jQuery)
		}
	})(window, function (t) {
		var n, i;
		n = {
			wrapper: '<div class="sticky-wrapper" />',
			stuckClass: "stuck",
			direction: "down right"
		};
		i = function (t, n) {
			var i;
			t.wrap(n.wrapper);
			i = t.parent();
			return i.data("isWaypointStickyWrapper", true)
		};
		t.waypoints("extendFn", "sticky", function (r) {
			var e, a, s;
			a = t.extend({}, t.fn.waypoint.defaults, n, r);
			e = i(this, a);
			s = a.handler;
			a.handler = function (n) {
				var i, r;
				i = t(this).children(":first");
				r = a.direction.indexOf(n) !== -1;
				i.toggleClass(a.stuckClass, r);
				e.height(r ? i.outerHeight() : "");
				if (s != null) {
					return s.call(this, n)
				}
			};
			e.waypoint(a);
			return this.data("stuckClass", a.stuckClass)
		});
		return t.waypoints("extendFn", "unsticky", function () {
			var t;
			t = this.parent();
			if (!t.data("isWaypointStickyWrapper")) {
				return this
			}
			t.waypoint("destroy");
			this.unwrap();
			return this.removeClass(this.data("stuckClass"))
		})
	})
}).call(this);
(function (t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? t(require("jquery")) : t(jQuery)
})(function (t) {
	function e(t) {
		return t.replace(/(:|\.|\/)/g, "\\$1")
	}
	var l = "1.5.5",
		o = {},
		n = {
			exclude: [],
			excludeWithin: [],
			offset: 0,
			direction: "top",
			scrollElement: null,
			scrollTarget: null,
			beforeScroll: function () {},
			afterScroll: function () {},
			easing: "swing",
			speed: 400,
			autoCoefficient: 2,
			preventDefault: !0
		},
		s = function (e) {
			var l = [],
				o = !1,
				n = e.dir && "left" === e.dir ? "scrollLeft" : "scrollTop";
			return this.each(function () {
				if (this !== document && this !== window) {
					var e = t(this);
					e[n]() > 0 ? l.push(this) : (e[n](1), o = e[n]() > 0, o && l.push(this), e[n](0))
				}
			}), l.length || this.each(function () {
				"BODY" === this.nodeName && (l = [this])
			}), "first" === e.el && l.length > 1 && (l = [l[0]]), l
		};
	t.fn.extend({
		scrollable: function (t) {
			var e = s.call(this, {
				dir: t
			});
			return this.pushStack(e)
		},
		firstScrollable: function (t) {
			var e = s.call(this, {
				el: "first",
				dir: t
			});
			return this.pushStack(e)
		},
		smoothScroll: function (l, o) {
			if (l = l || {}, "options" === l) return o ? this.each(function () {
				var e = t(this),
					l = t.extend(e.data("ssOpts") || {}, o);
				t(this).data("ssOpts", l)
			}) : this.first().data("ssOpts");
			var n = t.extend({}, t.fn.smoothScroll.defaults, l),
				s = t.smoothScroll.filterPath(location.pathname);
			return this.unbind("click.smoothscroll").bind("click.smoothscroll", function (l) {
				var o = this,
					r = t(this),
					i = t.extend({}, n, r.data("ssOpts") || {}),
					c = n.exclude,
					a = i.excludeWithin,
					f = 0,
					h = 0,
					u = !0,
					d = {},
					p = location.hostname === o.hostname || !o.hostname,
					m = i.scrollTarget || t.smoothScroll.filterPath(o.pathname) === s,
					S = e(o.hash);
				if (i.scrollTarget || p && m && S) {
					for (; u && c.length > f;) r.is(e(c[f++])) && (u = !1);
					for (; u && a.length > h;) r.closest(a[h++]).length && (u = !1)
				} else u = !1;
				u && (i.preventDefault && l.preventDefault(), t.extend(d, i, {
					scrollTarget: i.scrollTarget || S,
					link: o
				}), t.smoothScroll(d))
			}), this
		}
	}), t.smoothScroll = function (e, l) {
		if ("options" === e && "object" == typeof l) return t.extend(o, l);
		var n, s, r, i, c, a = 0,
			f = "offset",
			h = "scrollTop",
			u = {},
			d = {};
		"number" == typeof e ? (n = t.extend({
			link: null
		}, t.fn.smoothScroll.defaults, o), r = e) : (n = t.extend({
			link: null
		}, t.fn.smoothScroll.defaults, e || {}, o), n.scrollElement && (f = "position", "static" === n.scrollElement.css("position") && n.scrollElement.css("position", "relative"))), h = "left" === n.direction ? "scrollLeft" : h, n.scrollElement ? (s = n.scrollElement, /^(?:HTML|BODY)$/.test(s[0].nodeName) || (a = s[h]())) : s = t("html, body").firstScrollable(n.direction), n.beforeScroll.call(s, n), r = "number" == typeof e ? e : l || t(n.scrollTarget)[f]() && t(n.scrollTarget)[f]()[n.direction] || 0, u[h] = r + a + n.offset, i = n.speed, "auto" === i && (c = u[h] - s.scrollTop(), 0 > c && (c *= -1), i = c / n.autoCoefficient), d = {
			duration: i,
			easing: n.easing,
			complete: function () {
				n.afterScroll.call(n.link, n)
			}
		}, n.step && (d.step = n.step), s.length ? s.stop().animate(u, d) : n.afterScroll.call(n.link, n)
	}, t.smoothScroll.version = l, t.smoothScroll.filterPath = function (t) {
		return t = t || "", t.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
	}, t.fn.smoothScroll.defaults = n
});
if (typeof Object.create !== "function") {
	Object.create = function (obj) {
		function F() {}
		F.prototype = obj;
		return new F();
	};
}
(function ($, window, document) {
	var Carousel = {
		init: function (options, el) {
			var base = this;
			base.$elem = $(el);
			base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);
			base.userOptions = options;
			base.loadContent();
		},
		loadContent: function () {
			var base = this,
				url;

			function getData(data) {
				var i, content = "";
				if (typeof base.options.jsonSuccess === "function") {
					base.options.jsonSuccess.apply(this, [data]);
				} else {
					for (i in data.owl) {
						if (data.owl.hasOwnProperty(i)) {
							content += data.owl[i].item;
						}
					}
					base.$elem.html(content);
				}
				base.logIn();
			}
			if (typeof base.options.beforeInit === "function") {
				base.options.beforeInit.apply(this, [base.$elem]);
			}
			if (typeof base.options.jsonPath === "string") {
				url = base.options.jsonPath;
				$.getJSON(url, getData);
			} else {
				base.logIn();
			}
		},
		logIn: function () {
			var base = this;
			base.$elem.data("owl-originalStyles", base.$elem.attr("style"));
			base.$elem.data("owl-originalClasses", base.$elem.attr("class"));
			base.$elem.css({
				opacity: 0
			});
			base.orignalItems = base.options.items;
			base.checkBrowser();
			base.wrapperWidth = 0;
			base.checkVisible = null;
			base.setVars();
		},
		setVars: function () {
			var base = this;
			if (base.$elem.children().length === 0) {
				return false;
			}
			base.baseClass();
			base.eventTypes();
			base.$userItems = base.$elem.children();
			base.itemsAmount = base.$userItems.length;
			base.wrapItems();
			base.$owlItems = base.$elem.find(".owl-item");
			base.$owlWrapper = base.$elem.find(".owl-wrapper");
			base.playDirection = "next";
			base.prevItem = 0;
			base.prevArr = [0];
			base.currentItem = 0;
			base.customEvents();
			base.onStartup();
		},
		onStartup: function () {
			var base = this;
			base.updateItems();
			base.calculateAll();
			base.buildControls();
			base.updateControls();
			base.response();
			base.moveEvents();
			base.stopOnHover();
			base.owlStatus();
			if (base.options.transitionStyle !== false) {
				base.transitionTypes(base.options.transitionStyle);
			}
			if (base.options.autoPlay === true) {
				base.options.autoPlay = 5000;
			}
			base.play();
			base.$elem.find(".owl-wrapper").css("display", "block");
			if (!base.$elem.is(":visible")) {
				base.watchVisibility();
			} else {
				base.$elem.css("opacity", 1);
			}
			base.onstartup = false;
			base.eachMoveUpdate();
			if (typeof base.options.afterInit === "function") {
				base.options.afterInit.apply(this, [base.$elem]);
			}
		},
		eachMoveUpdate: function () {
			var base = this;
			if (base.options.lazyLoad === true) {
				base.lazyLoad();
			}
			if (base.options.autoHeight === true) {
				base.autoHeight();
			}
			base.onVisibleItems();
			if (typeof base.options.afterAction === "function") {
				base.options.afterAction.apply(this, [base.$elem]);
			}
		},
		updateVars: function () {
			var base = this;
			if (typeof base.options.beforeUpdate === "function") {
				base.options.beforeUpdate.apply(this, [base.$elem]);
			}
			base.watchVisibility();
			base.updateItems();
			base.calculateAll();
			base.updatePosition();
			base.updateControls();
			base.eachMoveUpdate();
			if (typeof base.options.afterUpdate === "function") {
				base.options.afterUpdate.apply(this, [base.$elem]);
			}
		},
		reload: function () {
			var base = this;
			window.setTimeout(function () {
				base.updateVars();
			}, 0);
		},
		watchVisibility: function () {
			var base = this;
			if (base.$elem.is(":visible") === false) {
				base.$elem.css({
					opacity: 0
				});
				window.clearInterval(base.autoPlayInterval);
				window.clearInterval(base.checkVisible);
			} else {
				return false;
			}
			base.checkVisible = window.setInterval(function () {
				if (base.$elem.is(":visible")) {
					base.reload();
					base.$elem.animate({
						opacity: 1
					}, 200);
					window.clearInterval(base.checkVisible);
				}
			}, 500);
		},
		wrapItems: function () {
			var base = this;
			base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
			base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
			base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
			base.$elem.css("display", "block");
		},
		baseClass: function () {
			var base = this,
				hasBaseClass = base.$elem.hasClass(base.options.baseClass),
				hasThemeClass = base.$elem.hasClass(base.options.theme);
			if (!hasBaseClass) {
				base.$elem.addClass(base.options.baseClass);
			}
			if (!hasThemeClass) {
				base.$elem.addClass(base.options.theme);
			}
		},
		updateItems: function () {
			var base = this,
				width, i;
			if (base.options.responsive === false) {
				return false;
			}
			if (base.options.singleItem === true) {
				base.options.items = base.orignalItems = 1;
				base.options.itemsCustom = false;
				base.options.itemsDesktop = false;
				base.options.itemsDesktopSmall = false;
				base.options.itemsTablet = false;
				base.options.itemsTabletSmall = false;
				base.options.itemsMobile = false;
				return false;
			}
			width = $(base.options.responsiveBaseWidth).width();
			if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
				base.options.items = base.orignalItems;
			}
			if (base.options.itemsCustom !== false) {
				base.options.itemsCustom.sort(function (a, b) {
					return a[0] - b[0];
				});
				for (i = 0; i < base.options.itemsCustom.length; i += 1) {
					if (base.options.itemsCustom[i][0] <= width) {
						base.options.items = base.options.itemsCustom[i][1];
					}
				}
			} else {
				if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
					base.options.items = base.options.itemsDesktop[1];
				}
				if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
					base.options.items = base.options.itemsDesktopSmall[1];
				}
				if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
					base.options.items = base.options.itemsTablet[1];
				}
				if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
					base.options.items = base.options.itemsTabletSmall[1];
				}
				if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
					base.options.items = base.options.itemsMobile[1];
				}
			}
			if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
				base.options.items = base.itemsAmount;
			}
		},
		response: function () {
			var base = this,
				smallDelay, lastWindowWidth;
			if (base.options.responsive !== true) {
				return false;
			}
			lastWindowWidth = $(window).width();
			base.resizer = function () {
				if ($(window).width() !== lastWindowWidth) {
					if (base.options.autoPlay !== false) {
						window.clearInterval(base.autoPlayInterval);
					}
					window.clearTimeout(smallDelay);
					smallDelay = window.setTimeout(function () {
						lastWindowWidth = $(window).width();
						base.updateVars();
					}, base.options.responsiveRefreshRate);
				}
			};
			$(window).resize(base.resizer);
		},
		updatePosition: function () {
			var base = this;
			base.jumpTo(base.currentItem);
			if (base.options.autoPlay !== false) {
				base.checkAp();
			}
		},
		appendItemsSizes: function () {
			var base = this,
				roundPages = 0,
				lastItem = base.itemsAmount - base.options.items;
			base.$owlItems.each(function (index) {
				var $this = $(this);
				$this.css({
					"width": base.itemWidth
				}).data("owl-item", Number(index));
				if (index % base.options.items === 0 || index === lastItem) {
					if (!(index > lastItem)) {
						roundPages += 1;
					}
				}
				$this.data("owl-roundPages", roundPages);
			});
		},
		appendWrapperSizes: function () {
			var base = this,
				width = base.$owlItems.length * base.itemWidth;
			base.$owlWrapper.css({
				"width": width * 2,
				"left": 0
			});
			base.appendItemsSizes();
		},
		calculateAll: function () {
			var base = this;
			base.calculateWidth();
			base.appendWrapperSizes();
			base.loops();
			base.max();
		},
		calculateWidth: function () {
			var base = this;
			base.itemWidth = Math.round(base.$elem.width() / base.options.items);
		},
		max: function () {
			var base = this,
				maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
			if (base.options.items > base.itemsAmount) {
				base.maximumItem = 0;
				maximum = 0;
				base.maximumPixels = 0;
			} else {
				base.maximumItem = base.itemsAmount - base.options.items;
				base.maximumPixels = maximum;
			}
			return maximum;
		},
		min: function () {
			return 0;
		},
		loops: function () {
			var base = this,
				prev = 0,
				elWidth = 0,
				i, item, roundPageNum;
			base.positionsInArray = [0];
			base.pagesInArray = [];
			for (i = 0; i < base.itemsAmount; i += 1) {
				elWidth += base.itemWidth;
				base.positionsInArray.push(-elWidth);
				if (base.options.scrollPerPage === true) {
					item = $(base.$owlItems[i]);
					roundPageNum = item.data("owl-roundPages");
					if (roundPageNum !== prev) {
						base.pagesInArray[prev] = base.positionsInArray[i];
						prev = roundPageNum;
					}
				}
			}
		},
		buildControls: function () {
			var base = this;
			if (base.options.navigation === true || base.options.pagination === true) {
				base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
			}
			if (base.options.pagination === true) {
				base.buildPagination();
			}
			if (base.options.navigation === true) {
				base.buildButtons();
			}
		},
		buildButtons: function () {
			var base = this,
				buttonsWrapper = $("<div class=\"owl-buttons\"/>");
			base.owlControls.append(buttonsWrapper);
			base.buttonPrev = $("<div/>", {
				"class": "owl-prev",
				"html": base.options.navigationText[0] || ""
			});
			base.buttonNext = $("<div/>", {
				"class": "owl-next",
				"html": base.options.navigationText[1] || ""
			});
			buttonsWrapper.append(base.buttonPrev).append(base.buttonNext);
			buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
				event.preventDefault();
			});
			buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
				event.preventDefault();
				if ($(this).hasClass("owl-next")) {
					base.next();
				} else {
					base.prev();
				}
			});
		},
		buildPagination: function () {
			var base = this;
			base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
			base.owlControls.append(base.paginationWrapper);
			base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
				event.preventDefault();
				if (Number($(this).data("owl-page")) !== base.currentItem) {
					base.goTo(Number($(this).data("owl-page")), true);
				}
			});
		},
		updatePagination: function () {
			var base = this,
				counter, lastPage, lastItem, i, paginationButton, paginationButtonInner;
			if (base.options.pagination === false) {
				return false;
			}
			base.paginationWrapper.html("");
			counter = 0;
			lastPage = base.itemsAmount - base.itemsAmount % base.options.items;
			for (i = 0; i < base.itemsAmount; i += 1) {
				if (i % base.options.items === 0) {
					counter += 1;
					if (lastPage === i) {
						lastItem = base.itemsAmount - base.options.items;
					}
					paginationButton = $("<div/>", {
						"class": "owl-page"
					});
					paginationButtonInner = $("<span></span>", {
						"text": base.options.paginationNumbers === true ? counter : "",
						"class": base.options.paginationNumbers === true ? "owl-numbers" : ""
					});
					paginationButton.append(paginationButtonInner);
					paginationButton.data("owl-page", lastPage === i ? lastItem : i);
					paginationButton.data("owl-roundPages", counter);
					base.paginationWrapper.append(paginationButton);
				}
			}
			base.checkPagination();
		},
		checkPagination: function () {
			var base = this;
			if (base.options.pagination === false) {
				return false;
			}
			base.paginationWrapper.find(".owl-page").each(function () {
				if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
					base.paginationWrapper.find(".owl-page").removeClass("active");
					$(this).addClass("active");
				}
			});
		},
		checkNavigation: function () {
			var base = this;
			if (base.options.navigation === false) {
				return false;
			}
			if (base.options.rewindNav === false) {
				if (base.currentItem === 0 && base.maximumItem === 0) {
					base.buttonPrev.addClass("disabled");
					base.buttonNext.addClass("disabled");
				} else if (base.currentItem === 0 && base.maximumItem !== 0) {
					base.buttonPrev.addClass("disabled");
					base.buttonNext.removeClass("disabled");
				} else if (base.currentItem === base.maximumItem) {
					base.buttonPrev.removeClass("disabled");
					base.buttonNext.addClass("disabled");
				} else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
					base.buttonPrev.removeClass("disabled");
					base.buttonNext.removeClass("disabled");
				}
			}
		},
		updateControls: function () {
			var base = this;
			base.updatePagination();
			base.checkNavigation();
			if (base.owlControls) {
				if (base.options.items >= base.itemsAmount) {
					base.owlControls.hide();
				} else {
					base.owlControls.show();
				}
			}
		},
		destroyControls: function () {
			var base = this;
			if (base.owlControls) {
				base.owlControls.remove();
			}
		},
		next: function (speed) {
			var base = this;
			if (base.isTransition) {
				return false;
			}
			base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
			if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
				if (base.options.rewindNav === true) {
					base.currentItem = 0;
					speed = "rewind";
				} else {
					base.currentItem = base.maximumItem;
					return false;
				}
			}
			base.goTo(base.currentItem, speed);
		},
		prev: function (speed) {
			var base = this;
			if (base.isTransition) {
				return false;
			}
			if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
				base.currentItem = 0;
			} else {
				base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
			}
			if (base.currentItem < 0) {
				if (base.options.rewindNav === true) {
					base.currentItem = base.maximumItem;
					speed = "rewind";
				} else {
					base.currentItem = 0;
					return false;
				}
			}
			base.goTo(base.currentItem, speed);
		},
		goTo: function (position, speed, drag) {
			var base = this,
				goToPixel;
			if (base.isTransition) {
				return false;
			}
			if (typeof base.options.beforeMove === "function") {
				base.options.beforeMove.apply(this, [base.$elem]);
			}
			if (position >= base.maximumItem) {
				position = base.maximumItem;
			} else if (position <= 0) {
				position = 0;
			}
			base.currentItem = base.owl.currentItem = position;
			if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
				base.swapSpeed(0);
				if (base.browser.support3d === true) {
					base.transition3d(base.positionsInArray[position]);
				} else {
					base.css2slide(base.positionsInArray[position], 1);
				}
				base.afterGo();
				base.singleItemTransition();
				return false;
			}
			goToPixel = base.positionsInArray[position];
			if (base.browser.support3d === true) {
				base.isCss3Finish = false;
				if (speed === true) {
					base.swapSpeed("paginationSpeed");
					window.setTimeout(function () {
						base.isCss3Finish = true;
					}, base.options.paginationSpeed);
				} else if (speed === "rewind") {
					base.swapSpeed(base.options.rewindSpeed);
					window.setTimeout(function () {
						base.isCss3Finish = true;
					}, base.options.rewindSpeed);
				} else {
					base.swapSpeed("slideSpeed");
					window.setTimeout(function () {
						base.isCss3Finish = true;
					}, base.options.slideSpeed);
				}
				base.transition3d(goToPixel);
			} else {
				if (speed === true) {
					base.css2slide(goToPixel, base.options.paginationSpeed);
				} else if (speed === "rewind") {
					base.css2slide(goToPixel, base.options.rewindSpeed);
				} else {
					base.css2slide(goToPixel, base.options.slideSpeed);
				}
			}
			base.afterGo();
		},
		jumpTo: function (position) {
			var base = this;
			if (typeof base.options.beforeMove === "function") {
				base.options.beforeMove.apply(this, [base.$elem]);
			}
			if (position >= base.maximumItem || position === -1) {
				position = base.maximumItem;
			} else if (position <= 0) {
				position = 0;
			}
			base.swapSpeed(0);
			if (base.browser.support3d === true) {
				base.transition3d(base.positionsInArray[position]);
			} else {
				base.css2slide(base.positionsInArray[position], 1);
			}
			base.currentItem = base.owl.currentItem = position;
			base.afterGo();
		},
		afterGo: function () {
			var base = this;
			base.prevArr.push(base.currentItem);
			base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
			base.prevArr.shift(0);
			if (base.prevItem !== base.currentItem) {
				base.checkPagination();
				base.checkNavigation();
				base.eachMoveUpdate();
				if (base.options.autoPlay !== false) {
					base.checkAp();
				}
			}
			if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
				base.options.afterMove.apply(this, [base.$elem]);
			}
		},
		stop: function () {
			var base = this;
			base.apStatus = "stop";
			window.clearInterval(base.autoPlayInterval);
		},
		checkAp: function () {
			var base = this;
			if (base.apStatus !== "stop") {
				base.play();
			}
		},
		play: function () {
			var base = this;
			base.apStatus = "play";
			if (base.options.autoPlay === false) {
				return false;
			}
			window.clearInterval(base.autoPlayInterval);
			base.autoPlayInterval = window.setInterval(function () {
				base.next(true);
			}, base.options.autoPlay);
		},
		swapSpeed: function (action) {
			var base = this;
			if (action === "slideSpeed") {
				base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
			} else if (action === "paginationSpeed") {
				base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
			} else if (typeof action !== "string") {
				base.$owlWrapper.css(base.addCssSpeed(action));
			}
		},
		addCssSpeed: function (speed) {
			return {
				"-webkit-transition": "all " + speed + "ms ease",
				"-moz-transition": "all " + speed + "ms ease",
				"-o-transition": "all " + speed + "ms ease",
				"transition": "all " + speed + "ms ease"
			};
		},
		removeTransition: function () {
			return {
				"-webkit-transition": "",
				"-moz-transition": "",
				"-o-transition": "",
				"transition": ""
			};
		},
		doTranslate: function (pixels) {
			return {
				"-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
				"-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
				"-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
				"-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
				"transform": "translate3d(" + pixels + "px, 0px,0px)"
			};
		},
		transition3d: function (value) {
			var base = this;
			base.$owlWrapper.css(base.doTranslate(value));
		},
		css2move: function (value) {
			var base = this;
			base.$owlWrapper.css({
				"left": value
			});
		},
		css2slide: function (value, speed) {
			var base = this;
			base.isCssFinish = false;
			base.$owlWrapper.stop(true, true).animate({
				"left": value
			}, {
				duration: speed || base.options.slideSpeed,
				complete: function () {
					base.isCssFinish = true;
				}
			});
		},
		checkBrowser: function () {
			var base = this,
				translate3D = "translate3d(0px, 0px, 0px)",
				tempElem = document.createElement("div"),
				regex, asSupport, support3d, isTouch;
			tempElem.style.cssText = "  -moz-transform:" + translate3D + "; -ms-transform:" + translate3D + "; -o-transform:" + translate3D + "; -webkit-transform:" + translate3D + "; transform:" + translate3D;
			regex = /translate3d\(0px, 0px, 0px\)/g;
			asSupport = tempElem.style.cssText.match(regex);
			support3d = (asSupport !== null && asSupport.length === 1);
			isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;
			base.browser = {
				"support3d": support3d,
				"isTouch": isTouch
			};
		},
		moveEvents: function () {
			var base = this;
			if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
				base.gestures();
				base.disabledEvents();
			}
		},
		eventTypes: function () {
			var base = this,
				types = ["s", "e", "x"];
			base.ev_types = {};
			if (base.options.mouseDrag === true && base.options.touchDrag === true) {
				types = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"];
			} else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
				types = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"];
			} else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
				types = ["mousedown.owl", "mousemove.owl", "mouseup.owl"];
			}
			base.ev_types.start = types[0];
			base.ev_types.move = types[1];
			base.ev_types.end = types[2];
		},
		disabledEvents: function () {
			var base = this;
			base.$elem.on("dragstart.owl", function (event) {
				event.preventDefault();
			});
			base.$elem.on("mousedown.disableTextSelect", function (e) {
				return $(e.target).is('input, textarea, select, option');
			});
		},
		gestures: function () {
			var base = this,
				locals = {
					offsetX: 0,
					offsetY: 0,
					baseElWidth: 0,
					relativePos: 0,
					position: null,
					minSwipe: null,
					maxSwipe: null,
					sliding: null,
					dargging: null,
					targetElement: null
				};
			base.isCssFinish = true;

			function getTouches(event) {
				if (event.touches !== undefined) {
					return {
						x: event.touches[0].pageX,
						y: event.touches[0].pageY
					};
				}
				if (event.touches === undefined) {
					if (event.pageX !== undefined) {
						return {
							x: event.pageX,
							y: event.pageY
						};
					}
					if (event.pageX === undefined) {
						return {
							x: event.clientX,
							y: event.clientY
						};
					}
				}
			}

			function swapEvents(type) {
				if (type === "on") {
					$(document).on(base.ev_types.move, dragMove);
					$(document).on(base.ev_types.end, dragEnd);
				} else if (type === "off") {
					$(document).off(base.ev_types.move);
					$(document).off(base.ev_types.end);
				}
			}

			function dragStart(event) {
				var ev = event.originalEvent || event || window.event,
					position;
				if (ev.which === 3) {
					return false;
				}
				if (base.itemsAmount <= base.options.items) {
					return;
				}
				if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
					return false;
				}
				if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
					return false;
				}
				if (base.options.autoPlay !== false) {
					window.clearInterval(base.autoPlayInterval);
				}
				if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
					base.$owlWrapper.addClass("grabbing");
				}
				base.newPosX = 0;
				base.newRelativeX = 0;
				$(this).css(base.removeTransition());
				position = $(this).position();
				locals.relativePos = position.left;
				locals.offsetX = getTouches(ev).x - position.left;
				locals.offsetY = getTouches(ev).y - position.top;
				swapEvents("on");
				locals.sliding = false;
				locals.targetElement = ev.target || ev.srcElement;
			}

			function dragMove(event) {
				var ev = event.originalEvent || event || window.event,
					minSwipe, maxSwipe;
				base.newPosX = getTouches(ev).x - locals.offsetX;
				base.newPosY = getTouches(ev).y - locals.offsetY;
				base.newRelativeX = base.newPosX - locals.relativePos;
				if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
					locals.dragging = true;
					base.options.startDragging.apply(base, [base.$elem]);
				}
				if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
					if (ev.preventDefault !== undefined) {
						ev.preventDefault();
					} else {
						ev.returnValue = false;
					}
					locals.sliding = true;
				}
				if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
					$(document).off("touchmove.owl");
				}
				minSwipe = function () {
					return base.newRelativeX / 5;
				};
				maxSwipe = function () {
					return base.maximumPixels + base.newRelativeX / 5;
				};
				base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
				if (base.browser.support3d === true) {
					base.transition3d(base.newPosX);
				} else {
					base.css2move(base.newPosX);
				}
			}

			function dragEnd(event) {
				var ev = event.originalEvent || event || window.event,
					newPosition, handlers, owlStopEvent;
				ev.target = ev.target || ev.srcElement;
				locals.dragging = false;
				if (base.browser.isTouch !== true) {
					base.$owlWrapper.removeClass("grabbing");
				}
				if (base.newRelativeX < 0) {
					base.dragDirection = base.owl.dragDirection = "left";
				} else {
					base.dragDirection = base.owl.dragDirection = "right";
				}
				if (base.newRelativeX !== 0) {
					newPosition = base.getNewPosition();
					base.goTo(newPosition, false, "drag");
					if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
						$(ev.target).on("click.disable", function (ev) {
							ev.stopImmediatePropagation();
							ev.stopPropagation();
							ev.preventDefault();
							$(ev.target).off("click.disable");
						});
						handlers = $._data(ev.target, "events").click;
						owlStopEvent = handlers.pop();
						handlers.splice(0, 0, owlStopEvent);
					}
				}
				swapEvents("off");
			}
			base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
		},
		getNewPosition: function () {
			var base = this,
				newPosition = base.closestItem();
			if (newPosition > base.maximumItem) {
				base.currentItem = base.maximumItem;
				newPosition = base.maximumItem;
			} else if (base.newPosX >= 0) {
				newPosition = 0;
				base.currentItem = 0;
			}
			return newPosition;
		},
		closestItem: function () {
			var base = this,
				array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
				goal = base.newPosX,
				closest = null;
			$.each(array, function (i, v) {
				if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") {
					closest = v;
					if (base.options.scrollPerPage === true) {
						base.currentItem = $.inArray(closest, base.positionsInArray);
					} else {
						base.currentItem = i;
					}
				} else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
					if (base.options.scrollPerPage === true) {
						closest = array[i + 1] || array[array.length - 1];
						base.currentItem = $.inArray(closest, base.positionsInArray);
					} else {
						closest = array[i + 1];
						base.currentItem = i + 1;
					}
				}
			});
			return base.currentItem;
		},
		moveDirection: function () {
			var base = this,
				direction;
			if (base.newRelativeX < 0) {
				direction = "right";
				base.playDirection = "next";
			} else {
				direction = "left";
				base.playDirection = "prev";
			}
			return direction;
		},
		customEvents: function () {
			var base = this;
			base.$elem.on("owl.next", function () {
				base.next();
			});
			base.$elem.on("owl.prev", function () {
				base.prev();
			});
			base.$elem.on("owl.play", function (event, speed) {
				base.options.autoPlay = speed;
				base.play();
				base.hoverStatus = "play";
			});
			base.$elem.on("owl.stop", function () {
				base.stop();
				base.hoverStatus = "stop";
			});
			base.$elem.on("owl.goTo", function (event, item) {
				base.goTo(item);
			});
			base.$elem.on("owl.jumpTo", function (event, item) {
				base.jumpTo(item);
			});
		},
		stopOnHover: function () {
			var base = this;
			if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
				base.$elem.on("mouseover", function () {
					base.stop();
				});
				base.$elem.on("mouseout", function () {
					if (base.hoverStatus !== "stop") {
						base.play();
					}
				});
			}
		},
		lazyLoad: function () {
			var base = this,
				i, $item, itemNumber, $lazyImg, follow;
			if (base.options.lazyLoad === false) {
				return false;
			}
			for (i = 0; i < base.itemsAmount; i += 1) {
				$item = $(base.$owlItems[i]);
				if ($item.data("owl-loaded") === "loaded") {
					continue;
				}
				itemNumber = $item.data("owl-item");
				$lazyImg = $item.find(".lazyOwl");
				if (typeof $lazyImg.data("src") !== "string") {
					$item.data("owl-loaded", "loaded");
					continue;
				}
				if ($item.data("owl-loaded") === undefined) {
					$lazyImg.hide();
					$item.addClass("loading").data("owl-loaded", "checked");
				}
				if (base.options.lazyFollow === true) {
					follow = itemNumber >= base.currentItem;
				} else {
					follow = true;
				}
				if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
					base.lazyPreload($item, $lazyImg);
				}
			}
		},
		lazyPreload: function ($item, $lazyImg) {
			var base = this,
				iterations = 0,
				isBackgroundImg;
			if ($lazyImg.prop("tagName") === "DIV") {
				$lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
				isBackgroundImg = true;
			} else {
				$lazyImg[0].src = $lazyImg.data("src");
			}

			function showImage() {
				$item.data("owl-loaded", "loaded").removeClass("loading");
				$lazyImg.removeAttr("data-src");
				if (base.options.lazyEffect === "fade") {
					$lazyImg.fadeIn(400);
				} else {
					$lazyImg.show();
				}
				if (typeof base.options.afterLazyLoad === "function") {
					base.options.afterLazyLoad.apply(this, [base.$elem]);
				}
			}

			function checkLazyImage() {
				iterations += 1;
				if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
					showImage();
				} else if (iterations <= 100) {
					window.setTimeout(checkLazyImage, 100);
				} else {
					showImage();
				}
			}
			checkLazyImage();
		},
		autoHeight: function () {
			var base = this,
				$currentimg = $(base.$owlItems[base.currentItem]).find("img"),
				iterations;

			function addHeight() {
				var $currentItem = $(base.$owlItems[base.currentItem]).height();
				base.wrapperOuter.css("height", $currentItem + "px");
				if (!base.wrapperOuter.hasClass("autoHeight")) {
					window.setTimeout(function () {
						base.wrapperOuter.addClass("autoHeight");
					}, 0);
				}
			}

			function checkImage() {
				iterations += 1;
				if (base.completeImg($currentimg.get(0))) {
					addHeight();
				} else if (iterations <= 100) {
					window.setTimeout(checkImage, 100);
				} else {
					base.wrapperOuter.css("height", "");
				}
			}
			if ($currentimg.get(0) !== undefined) {
				iterations = 0;
				checkImage();
			} else {
				addHeight();
			}
		},
		completeImg: function (img) {
			var naturalWidthType;
			if (!img.complete) {
				return false;
			}
			naturalWidthType = typeof img.naturalWidth;
			if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
				return false;
			}
			return true;
		},
		onVisibleItems: function () {
			var base = this,
				i;
			if (base.options.addClassActive === true) {
				base.$owlItems.removeClass("active");
			}
			base.visibleItems = [];
			for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
				base.visibleItems.push(i);
				if (base.options.addClassActive === true) {
					$(base.$owlItems[i]).addClass("active");
				}
			}
			base.owl.visibleItems = base.visibleItems;
		},
		transitionTypes: function (className) {
			var base = this;
			base.outClass = "owl-" + className + "-out";
			base.inClass = "owl-" + className + "-in";
		},
		singleItemTransition: function () {
			var base = this,
				outClass = base.outClass,
				inClass = base.inClass,
				$currentItem = base.$owlItems.eq(base.currentItem),
				$prevItem = base.$owlItems.eq(base.prevItem),
				prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
				origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
				animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';
			base.isTransition = true;
			base.$owlWrapper.addClass('owl-origin').css({
				"-webkit-transform-origin": origin + "px",
				"-moz-perspective-origin": origin + "px",
				"perspective-origin": origin + "px"
			});

			function transStyles(prevPos) {
				return {
					"position": "relative",
					"left": prevPos + "px"
				};
			}
			$prevItem.css(transStyles(prevPos, 10)).addClass(outClass).on(animEnd, function () {
				base.endPrev = true;
				$prevItem.off(animEnd);
				base.clearTransStyle($prevItem, outClass);
			});
			$currentItem.addClass(inClass).on(animEnd, function () {
				base.endCurrent = true;
				$currentItem.off(animEnd);
				base.clearTransStyle($currentItem, inClass);
			});
		},
		clearTransStyle: function (item, classToRemove) {
			var base = this;
			item.css({
				"position": "",
				"left": ""
			}).removeClass(classToRemove);
			if (base.endPrev && base.endCurrent) {
				base.$owlWrapper.removeClass('owl-origin');
				base.endPrev = false;
				base.endCurrent = false;
				base.isTransition = false;
			}
		},
		owlStatus: function () {
			var base = this;
			base.owl = {
				"userOptions": base.userOptions,
				"baseElement": base.$elem,
				"userItems": base.$userItems,
				"owlItems": base.$owlItems,
				"currentItem": base.currentItem,
				"prevItem": base.prevItem,
				"visibleItems": base.visibleItems,
				"isTouch": base.browser.isTouch,
				"browser": base.browser,
				"dragDirection": base.dragDirection
			};
		},
		clearEvents: function () {
			var base = this;
			base.$elem.off(".owl owl mousedown.disableTextSelect");
			$(document).off(".owl owl");
			$(window).off("resize", base.resizer);
		},
		unWrap: function () {
			var base = this;
			if (base.$elem.children().length !== 0) {
				base.$owlWrapper.unwrap();
				base.$userItems.unwrap().unwrap();
				if (base.owlControls) {
					base.owlControls.remove();
				}
			}
			base.clearEvents();
			base.$elem.attr("style", base.$elem.data("owl-originalStyles") || "").attr("class", base.$elem.data("owl-originalClasses"));
		},
		destroy: function () {
			var base = this;
			base.stop();
			window.clearInterval(base.checkVisible);
			base.unWrap();
			base.$elem.removeData();
		},
		reinit: function (newOptions) {
			var base = this,
				options = $.extend({}, base.userOptions, newOptions);
			base.unWrap();
			base.init(options, base.$elem);
		},
		addItem: function (htmlString, targetPosition) {
			var base = this,
				position;
			if (!htmlString) {
				return false;
			}
			if (base.$elem.children().length === 0) {
				base.$elem.append(htmlString);
				base.setVars();
				return false;
			}
			base.unWrap();
			if (targetPosition === undefined || targetPosition === -1) {
				position = -1;
			} else {
				position = targetPosition;
			}
			if (position >= base.$userItems.length || position === -1) {
				base.$userItems.eq(-1).after(htmlString);
			} else {
				base.$userItems.eq(position).before(htmlString);
			}
			base.setVars();
		},
		removeItem: function (targetPosition) {
			var base = this,
				position;
			if (base.$elem.children().length === 0) {
				return false;
			}
			if (targetPosition === undefined || targetPosition === -1) {
				position = -1;
			} else {
				position = targetPosition;
			}
			base.unWrap();
			base.$userItems.eq(position).remove();
			base.setVars();
		}
	};
	$.fn.owlCarousel = function (options) {
		return this.each(function () {
			if ($(this).data("owl-init") === true) {
				return false;
			}
			$(this).data("owl-init", true);
			var carousel = Object.create(Carousel);
			carousel.init(options, this);
			$.data(this, "owlCarousel", carousel);
		});
	};
	$.fn.owlCarousel.options = {
		items: 5,
		itemsCustom: false,
		itemsDesktop: [1199, 4],
		itemsDesktopSmall: [979, 3],
		itemsTablet: [768, 2],
		itemsTabletSmall: false,
		itemsMobile: [479, 1],
		singleItem: false,
		itemsScaleUp: false,
		slideSpeed: 200,
		paginationSpeed: 800,
		rewindSpeed: 1000,
		autoPlay: false,
		stopOnHover: false,
		navigation: true,
		navigationText: ["prev", "next"],
		rewindNav: true,
		scrollPerPage: false,
		pagination: true,
		paginationNumbers: false,
		responsive: true,
		responsiveRefreshRate: 200,
		responsiveBaseWidth: window,
		baseClass: "owl-carousel",
		theme: "owl-theme",
		lazyLoad: false,
		lazyFollow: true,
		lazyEffect: "fade",
		autoHeight: false,
		jsonPath: false,
		jsonSuccess: false,
		dragBeforeAnimFinish: true,
		mouseDrag: true,
		touchDrag: true,
		addClassActive: false,
		transitionStyle: false,
		beforeUpdate: false,
		afterUpdate: false,
		beforeInit: false,
		afterInit: false,
		beforeMove: false,
		afterMove: false,
		afterAction: false,
		startDragging: false,
		afterLazyLoad: false
	};
}(jQuery, window, document));
(function () {
	'use strict';

	function emulatedIEMajorVersion() {
		var groups = /MSIE ([0-9.]+)/.exec(window.navigator.userAgent)
		if (groups === null) {
			return null
		}
		var ieVersionNum = parseInt(groups[1], 10)
		var ieMajorVersion = Math.floor(ieVersionNum)
		return ieMajorVersion
	}

	function actualNonEmulatedIEMajorVersion() {
		var jscriptVersion = new Function('/*@cc_on return @_jscript_version; @*/')()
		if (jscriptVersion === undefined) {
			return 11
		}
		if (jscriptVersion < 9) {
			return 8
		}
		return jscriptVersion
	}
	var ua = window.navigator.userAgent
	if (ua.indexOf('Opera') > -1 || ua.indexOf('Presto') > -1) {
		return
	}
	var emulated = emulatedIEMajorVersion()
	if (emulated === null) {
		return
	}
	var nonEmulated = actualNonEmulatedIEMajorVersion()
	if (emulated !== nonEmulated) {
		window.alert('WARNING: You appear to be using IE' + nonEmulated + ' in IE' + emulated + ' emulation mode.\nIE emulation modes can behave significantly differently from ACTUAL older versions of IE.\nPLEASE DON\'T FILE BOOTSTRAP BUGS based on testing in IE emulation modes!')
	}
})();
! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
	a.extend(a.fn, {
		validate: function (b) {
			if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
			var c = a.data(this[0], "validator");
			return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
				c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
			}), this.on("submit.validate", function (b) {
				function d() {
					var d, e;
					return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0
				}
				return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
			})), c)
		},
		valid: function () {
			var b, c, d;
			return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
				b = c.element(this) && b, b || (d = d.concat(c.errorList))
			}), c.errorList = d), b
		},
		rules: function (b, c) {
			if (this.length) {
				var d, e, f, g, h, i, j = this[0];
				if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
					case "add":
						a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
						break;
					case "remove":
						return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
							i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
						}), i) : (delete e[j.name], f)
				}
				return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
					required: h
				}, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
					remote: h
				})), g
			}
		}
	}), a.extend(a.expr[":"], {
		blank: function (b) {
			return !a.trim("" + a(b).val())
		},
		filled: function (b) {
			var c = a(b).val();
			return null !== c && !!a.trim("" + c)
		},
		unchecked: function (b) {
			return !a(b).prop("checked")
		}
	}), a.validator = function (b, c) {
		this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
	}, a.validator.format = function (b, c) {
		return 1 === arguments.length ? function () {
			var c = a.makeArray(arguments);
			return c.unshift(b), a.validator.format.apply(this, c)
		} : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
			b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
				return c
			})
		}), b)
	}, a.extend(a.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			pendingClass: "pending",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: !1,
			focusInvalid: !0,
			errorContainer: a([]),
			errorLabelContainer: a([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function (a) {
				this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
			},
			onfocusout: function (a) {
				this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
			},
			onkeyup: function (b, c) {
				var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
				9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
			},
			onclick: function (a) {
				a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
			},
			highlight: function (b, c, d) {
				"radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
			},
			unhighlight: function (b, c, d) {
				"radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
			}
		},
		setDefaults: function (b) {
			a.extend(a.validator.defaults, b)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date ( ISO ).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			equalTo: "Please enter the same value again.",
			maxlength: a.validator.format("Please enter no more than {0} characters."),
			minlength: a.validator.format("Please enter at least {0} characters."),
			rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
			range: a.validator.format("Please enter a value between {0} and {1}."),
			max: a.validator.format("Please enter a value less than or equal to {0}."),
			min: a.validator.format("Please enter a value greater than or equal to {0}."),
			step: a.validator.format("Please enter a multiple of {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function () {
				function b(b) {
					var c = a.data(this.form, "validator"),
						d = "on" + b.type.replace(/^validate/, ""),
						e = c.settings;
					e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
				}
				this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var c, d = this.groups = {};
				a.each(this.settings.groups, function (b, c) {
					"string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
						d[c] = b
					})
				}), c = this.settings.rules, a.each(c, function (b, d) {
					c[b] = a.validator.normalizeRule(d)
				}), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
			},
			form: function () {
				return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function () {
				this.prepareForm();
				for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
				return this.valid()
			},
			element: function (b) {
				var c, d, e = this.clean(b),
					f = this.validationTargetFor(e),
					g = this,
					h = !0;
				return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function (a, b) {
					b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = h && g.check(e)))
				}), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
			},
			showErrors: function (b) {
				if (b) {
					var c = this;
					a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
						return {
							message: a,
							element: c.findByName(b)[0]
						}
					}), this.successList = a.grep(this.successList, function (a) {
						return !(a.name in b)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function () {
				a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
				var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
				this.resetElements(b)
			},
			resetElements: function (a) {
				var b;
				if (this.settings.unhighlight)
					for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
				else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
			},
			numberOfInvalids: function () {
				return this.objectLength(this.invalid)
			},
			objectLength: function (a) {
				var b, c = 0;
				for (b in a) a[b] && c++;
				return c
			},
			hideErrors: function () {
				this.hideThese(this.toHide)
			},
			hideThese: function (a) {
				a.not(this.containers).text(""), this.addWrapper(a).hide()
			},
			valid: function () {
				return 0 === this.size()
			},
			size: function () {
				return this.errorList.length
			},
			focusInvalid: function () {
				if (this.settings.focusInvalid) try {
					a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (b) {}
			},
			findLastActive: function () {
				var b = this.lastActive;
				return b && 1 === a.grep(this.errorList, function (a) {
					return a.element.name === b.name
				}).length && b
			},
			elements: function () {
				var b = this,
					c = {};
				return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
					var d = this.name || a(this).attr("name");
					return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]), d in c || !b.objectLength(a(this).rules()) ? !1 : (c[d] = !0, !0)
				})
			},
			clean: function (b) {
				return a(b)[0]
			},
			errors: function () {
				var b = this.settings.errorClass.split(" ").join(".");
				return a(this.settings.errorElement + "." + b, this.errorContext)
			},
			resetInternals: function () {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
			},
			reset: function () {
				this.resetInternals(), this.currentElements = a([])
			},
			prepareForm: function () {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function (a) {
				this.reset(), this.toHide = this.errorsFor(a)
			},
			elementValue: function (b) {
				var c, d, e = a(b),
					f = b.type;
				return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
			},
			check: function (b) {
				b = this.validationTargetFor(this.clean(b));
				var c, d, e, f = a(b).rules(),
					g = a.map(f, function (a, b) {
						return b
					}).length,
					h = !1,
					i = this.elementValue(b);
				if ("function" == typeof f.normalizer) {
					if (i = f.normalizer.call(b, i), "string" != typeof i) throw new TypeError("The normalizer should return a string value.");
					delete f.normalizer
				}
				for (d in f) {
					e = {
						method: d,
						parameters: f[d]
					};
					try {
						if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
							h = !0;
							continue
						}
						if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
						if (!c) return this.formatAndAdd(b, e), !1
					} catch (j) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), j
					}
				}
				if (!h) return this.objectLength(f) && this.successList.push(b), !0
			},
			customDataMessage: function (b, c) {
				return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
			},
			customMessage: function (a, b) {
				var c = this.settings.messages[a];
				return c && (c.constructor === String ? c : c[b])
			},
			findDefined: function () {
				for (var a = 0; a < arguments.length; a++)
					if (void 0 !== arguments[a]) return arguments[a]
			},
			defaultMessage: function (b, c) {
				var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
					e = /\$?\{(\d+)\}/g;
				return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
			},
			formatAndAdd: function (a, b) {
				var c = this.defaultMessage(a, b);
				this.errorList.push({
					message: c,
					element: a,
					method: b.method
				}), this.errorMap[a.name] = c, this.submitted[a.name] = c
			},
			addWrapper: function (a) {
				return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
			},
			defaultShowErrors: function () {
				var a, b, c;
				for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
					for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
				if (this.settings.unhighlight)
					for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function () {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function () {
				return a(this.errorList).map(function () {
					return this.element
				})
			},
			showLabel: function (b, c) {
				var d, e, f, g, h = this.errorsFor(b),
					i = this.idOrName(b),
					j = a(b).attr("aria-describedby");
				h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function (b, c) {
					c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
				})))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
			},
			errorsFor: function (b) {
				var c = this.escapeCssMeta(this.idOrName(b)),
					d = a(b).attr("aria-describedby"),
					e = "label[for='" + c + "'], label[for='" + c + "'] *";
				return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
			},
			escapeCssMeta: function (a) {
				return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
			},
			idOrName: function (a) {
				return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
			},
			validationTargetFor: function (b) {
				return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
			},
			checkable: function (a) {
				return /radio|checkbox/i.test(a.type)
			},
			findByName: function (b) {
				return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
			},
			getLength: function (b, c) {
				switch (c.nodeName.toLowerCase()) {
					case "select":
						return a("option:selected", c).length;
					case "input":
						if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
				}
				return b.length
			},
			depend: function (a, b) {
				return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
			},
			dependTypes: {
				"boolean": function (a) {
					return a
				},
				string: function (b, c) {
					return !!a(b, c.form).length
				},
				"function": function (a, b) {
					return a(b)
				}
			},
			optional: function (b) {
				var c = this.elementValue(b);
				return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
			},
			startRequest: function (b) {
				this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
			},
			stopRequest: function (b, c) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function (b, c) {
				return a.data(b, "previousValue") || a.data(b, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(b, {
						method: c
					})
				})
			},
			destroy: function () {
				this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function (b, c) {
			b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
		},
		classRules: function (b) {
			var c = {},
				d = a(b).attr("class");
			return d && a.each(d.split(" "), function () {
				this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
			}), c
		},
		normalizeAttributeRule: function (a, b, c, d) {
			/min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
		},
		attributeRules: function (b) {
			var c, d, e = {},
				f = a(b),
				g = b.getAttribute("type");
			for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
			return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
		},
		dataRules: function (b) {
			var c, d, e = {},
				f = a(b),
				g = b.getAttribute("type");
			for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
			return e
		},
		staticRules: function (b) {
			var c = {},
				d = a.data(b.form, "validator");
			return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
		},
		normalizeRules: function (b, c) {
			return a.each(b, function (d, e) {
				if (e === !1) return void delete b[d];
				if (e.param || e.depends) {
					var f = !0;
					switch (typeof e.depends) {
						case "string":
							f = !!a(e.depends, c.form).length;
							break;
						case "function":
							f = e.depends.call(c, c)
					}
					f ? b[d] = void 0 !== e.param ? e.param : !0 : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
				}
			}), a.each(b, function (d, e) {
				b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
			}), a.each(["minlength", "maxlength"], function () {
				b[this] && (b[this] = Number(b[this]))
			}), a.each(["rangelength", "range"], function () {
				var c;
				b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
			}), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
		},
		normalizeRule: function (b) {
			if ("string" == typeof b) {
				var c = {};
				a.each(b.split(/\s/), function () {
					c[this] = !0
				}), b = c
			}
			return b
		},
		addMethod: function (b, c, d) {
			a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
		},
		methods: {
			required: function (b, c, d) {
				if (!this.depend(d, c)) return "dependency-mismatch";
				if ("select" === c.nodeName.toLowerCase()) {
					var e = a(c).val();
					return e && e.length > 0
				}
				return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
			},
			email: function (a, b) {
				return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
			},
			url: function (a, b) {
				return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
			},
			date: function (a, b) {
				return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
			},
			dateISO: function (a, b) {
				return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
			},
			number: function (a, b) {
				return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
			},
			digits: function (a, b) {
				return this.optional(b) || /^\d+$/.test(a)
			},
			minlength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e >= d
			},
			maxlength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || d >= e
			},
			rangelength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e >= d[0] && e <= d[1]
			},
			min: function (a, b, c) {
				return this.optional(b) || a >= c
			},
			max: function (a, b, c) {
				return this.optional(b) || c >= a
			},
			range: function (a, b, c) {
				return this.optional(b) || a >= c[0] && a <= c[1]
			},
			step: function (b, c, d) {
				var e = a(c).attr("type"),
					f = "Step attribute on input type " + e + " is not supported.",
					g = ["text", "number", "range"],
					h = new RegExp("\\b" + e + "\\b"),
					i = e && !h.test(g.join());
				if (i) throw new Error(f);
				return this.optional(c) || b % d === 0
			},
			equalTo: function (b, c, d) {
				var e = a(d);
				return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
					a(c).valid()
				}), b === e.val()
			},
			remote: function (b, c, d, e) {
				if (this.optional(c)) return "dependency-mismatch";
				e = "string" == typeof e && e || "remote";
				var f, g, h, i = this.previousValue(c, e);
				return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
					url: d
				} || d, h = a.param(a.extend({
					data: b
				}, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
					mode: "abort",
					port: "validate" + c.name,
					dataType: "json",
					data: g,
					context: f.currentForm,
					success: function (a) {
						var d, g, h, j = a === !0 || "true" === a;
						f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
							method: e,
							parameters: b
						}), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
					}
				}, d)), "pending")
			}
		}
	});
	var b, c = {};
	a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
		var e = a.port;
		"abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
	}) : (b = a.ajax, a.ajax = function (d) {
		var e = ("mode" in d ? d : a.ajaxSettings).mode,
			f = ("port" in d ? d : a.ajaxSettings).port;
		return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
	})
});
(function (b) {
	b.gritter = {};
	b.gritter.options = {
		position: "",
		class_name: "",
		fade_in_speed: "medium",
		fade_out_speed: 1000,
		time: 6000
	};
	b.gritter.add = function (f) {
		try {
			return a.add(f || {})
		} catch (d) {
			var c = "Gritter Error: " + d;
			(typeof (console) != "undefined" && console.error) ? console.error(c, f): alert(c)
		}
	};
	b.gritter.remove = function (d, c) {
		a.removeSpecific(d, c || {})
	};
	b.gritter.removeAll = function (c) {
		a.stop(c || {})
	};
	var a = {
		position: "",
		fade_in_speed: "",
		fade_out_speed: "",
		time: "",
		_custom_timer: 0,
		_item_count: 0,
		_is_setup: 0,
		_tpl_close: '<a class="gritter-close" href="#" tabindex="1">Close Notification</a>',
		_tpl_title: '<span class="gritter-title">[[title]]</span>',
		_tpl_item: '<div id="gritter-item-[[number]]" class="gritter-item-wrapper [[item_class]]" style="display:none" role="alert"><div class="gritter-top"></div><div class="gritter-item">[[close]][[image]]<div class="[[class_name]]">[[title]]<p>[[text]]</p></div><div style="clear:both"></div></div><div class="gritter-bottom"></div></div>',
		_tpl_wrap: '<div id="gritter-notice-wrapper"></div>',
		add: function (g) {
			if (typeof (g) == "string") {
				g = {
					text: g
				}
			}
			if (g.text === null) {
				throw 'You must supply "text" parameter.'
			}
			if (!this._is_setup) {
				this._runSetup()
			}
			var k = g.title,
				n = g.text,
				e = g.image || "",
				l = g.sticky || false,
				m = g.class_name || b.gritter.options.class_name,
				j = b.gritter.options.position,
				d = g.time || "";
			this._verifyWrapper();
			this._item_count++;
			var f = this._item_count,
				i = this._tpl_item;
			b(["before_open", "after_open", "before_close", "after_close"]).each(function (p, q) {
				a["_" + q + "_" + f] = (b.isFunction(g[q])) ? g[q] : function () {}
			});
			this._custom_timer = 0;
			if (d) {
				this._custom_timer = d
			}
			var c = (e != "") ? '<img src="../../template/js/' + e + '" class="gritter-image" />' : "",
				h = (e != "") ? "gritter-with-image" : "gritter-without-image";
			if (k) {
				k = this._str_replace("[[title]]", k, this._tpl_title)
			} else {
				k = ""
			}
			i = this._str_replace(["[[title]]", "[[text]]", "[[close]]", "[[image]]", "[[number]]", "[[class_name]]", "[[item_class]]"], [k, n, this._tpl_close, c, this._item_count, h, m], i);
			if (this["_before_open_" + f]() === false) {
				return false
			}
			b("#gritter-notice-wrapper").addClass(j).append(i);
			var o = b("#gritter-item-" + this._item_count);
			o.fadeIn(this.fade_in_speed, function () {
				a["_after_open_" + f](b(this))
			});
			if (!l) {
				this._setFadeTimer(o, f)
			}
			b(o).bind("mouseenter mouseleave", function (p) {
				if (p.type == "mouseenter") {
					if (!l) {
						a._restoreItemIfFading(b(this), f)
					}
				} else {
					if (!l) {
						a._setFadeTimer(b(this), f)
					}
				}
				a._hoverState(b(this), p.type)
			});
			b(o).find(".gritter-close").click(function () {
				a.removeSpecific(f, {}, null, true);
				return false;
			});
			return f
		},
		_countRemoveWrapper: function (c, d, f) {
			d.remove();
			this["_after_close_" + c](d, f);
			if (b(".gritter-item-wrapper").length == 0) {
				b("#gritter-notice-wrapper").remove()
			}
		},
		_fade: function (g, d, j, f) {
			var j = j || {},
				i = (typeof (j.fade) != "undefined") ? j.fade : true,
				c = j.speed || this.fade_out_speed,
				h = f;
			this["_before_close_" + d](g, h);
			if (f) {
				g.unbind("mouseenter mouseleave")
			}
			if (i) {
				g.animate({
					opacity: 0
				}, c, function () {
					g.animate({
						height: 0
					}, 300, function () {
						a._countRemoveWrapper(d, g, h)
					})
				})
			} else {
				this._countRemoveWrapper(d, g)
			}
		},
		_hoverState: function (d, c) {
			if (c == "mouseenter") {
				d.addClass("hover");
				d.find(".gritter-close").show()
			} else {
				d.removeClass("hover");
				d.find(".gritter-close").hide()
			}
		},
		removeSpecific: function (c, g, f, d) {
			if (!f) {
				var f = b("#gritter-item-" + c)
			}
			this._fade(f, c, g || {}, d)
		},
		_restoreItemIfFading: function (d, c) {
			clearTimeout(this["_int_id_" + c]);
			d.stop().css({
				opacity: "",
				height: ""
			})
		},
		_runSetup: function () {
			for (opt in b.gritter.options) {
				this[opt] = b.gritter.options[opt]
			}
			this._is_setup = 1
		},
		_setFadeTimer: function (f, d) {
			var c = (this._custom_timer) ? this._custom_timer : this.time;
			this["_int_id_" + d] = setTimeout(function () {
				a._fade(f, d)
			}, c)
		},
		stop: function (e) {
			var c = (b.isFunction(e.before_close)) ? e.before_close : function () {};
			var f = (b.isFunction(e.after_close)) ? e.after_close : function () {};
			var d = b("#gritter-notice-wrapper");
			c(d);
			d.fadeOut(function () {
				b(this).remove();
				f()
			})
		},
		_str_replace: function (v, e, o, n) {
			var k = 0,
				h = 0,
				t = "",
				m = "",
				g = 0,
				q = 0,
				l = [].concat(v),
				c = [].concat(e),
				u = o,
				d = c instanceof Array,
				p = u instanceof Array;
			u = [].concat(u);
			if (n) {
				this.window[n] = 0
			}
			for (k = 0, g = u.length; k < g; k++) {
				if (u[k] === "") {
					continue
				}
				for (h = 0, q = l.length; h < q; h++) {
					t = u[k] + "";
					m = d ? (c[h] !== undefined ? c[h] : "") : c[0];
					u[k] = (t).split(l[h]).join(m);
					if (n && u[k] !== t) {
						this.window[n] += (t.length - u[k].length) / l[h].length
					}
				}
			}
			return p ? u : u[0]
		},
		_verifyWrapper: function () {
			if (b("#gritter-notice-wrapper").length == 0) {
				b("body").append(this._tpl_wrap)
			}
		}
	}
})(jQuery);
(function (factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof exports !== 'undefined') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}(function ($) {
	'use strict';
	var Slick = window.Slick || {};
	Slick = (function () {
		var instanceUid = 0;

		function Slick(element, settings) {
			var _ = this,
				dataSettings;
			_.defaults = {
				accessibility: true,
				adaptiveHeight: false,
				appendArrows: $(element),
				appendDots: $(element),
				arrows: true,
				asNavFor: null,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
				autoplay: false,
				autoplaySpeed: 3000,
				centerMode: false,
				centerPadding: '50px',
				cssEase: 'ease',
				customPaging: function (slider, i) {
					return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
				},
				dots: false,
				dotsClass: 'slick-dots',
				draggable: true,
				easing: 'linear',
				edgeFriction: 0.35,
				fade: false,
				focusOnSelect: false,
				infinite: true,
				initialSlide: 0,
				lazyLoad: 'ondemand',
				mobileFirst: false,
				pauseOnHover: true,
				pauseOnFocus: true,
				pauseOnDotsHover: false,
				respondTo: 'window',
				responsive: null,
				rows: 1,
				rtl: false,
				slide: '',
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: true,
				swipeToSlide: false,
				touchMove: true,
				touchThreshold: 5,
				useCSS: true,
				useTransform: true,
				variableWidth: false,
				vertical: false,
				verticalSwiping: false,
				waitForAnimate: true,
				zIndex: 1000
			};
			_.initials = {
				animating: false,
				dragging: false,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: false,
				slideOffset: 0,
				swipeLeft: null,
				$list: null,
				touchObject: {},
				transformsEnabled: false,
				unslicked: false
			};
			$.extend(_, _.initials);
			_.activeBreakpoint = null;
			_.animType = null;
			_.animProp = null;
			_.breakpoints = [];
			_.breakpointSettings = [];
			_.cssTransitions = false;
			_.focussed = false;
			_.interrupted = false;
			_.hidden = 'hidden';
			_.paused = true;
			_.positionProp = null;
			_.respondTo = null;
			_.rowCount = 1;
			_.shouldClick = true;
			_.$slider = $(element);
			_.$slidesCache = null;
			_.transformType = null;
			_.transitionType = null;
			_.visibilityChange = 'visibilitychange';
			_.windowWidth = 0;
			_.windowTimer = null;
			dataSettings = $(element).data('slick') || {};
			_.options = $.extend({}, _.defaults, settings, dataSettings);
			_.currentSlide = _.options.initialSlide;
			_.originalSettings = _.options;
			if (typeof document.mozHidden !== 'undefined') {
				_.hidden = 'mozHidden';
				_.visibilityChange = 'mozvisibilitychange';
			} else if (typeof document.webkitHidden !== 'undefined') {
				_.hidden = 'webkitHidden';
				_.visibilityChange = 'webkitvisibilitychange';
			}
			_.autoPlay = $.proxy(_.autoPlay, _);
			_.autoPlayClear = $.proxy(_.autoPlayClear, _);
			_.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
			_.changeSlide = $.proxy(_.changeSlide, _);
			_.clickHandler = $.proxy(_.clickHandler, _);
			_.selectHandler = $.proxy(_.selectHandler, _);
			_.setPosition = $.proxy(_.setPosition, _);
			_.swipeHandler = $.proxy(_.swipeHandler, _);
			_.dragHandler = $.proxy(_.dragHandler, _);
			_.keyHandler = $.proxy(_.keyHandler, _);
			_.instanceUid = instanceUid++;
			_.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
			_.registerBreakpoints();
			_.init(true);
		}
		return Slick;
	}());
	Slick.prototype.activateADA = function () {
		var _ = this;
		_.$slideTrack.find('.slick-active').attr({
			'aria-hidden': 'false'
		}).find('a, input, button, select').attr({
			'tabindex': '0'
		});
	};
	Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
		var _ = this;
		if (typeof (index) === 'boolean') {
			addBefore = index;
			index = null;
		} else if (index < 0 || (index >= _.slideCount)) {
			return false;
		}
		_.unload();
		if (typeof (index) === 'number') {
			if (index === 0 && _.$slides.length === 0) {
				$(markup).appendTo(_.$slideTrack);
			} else if (addBefore) {
				$(markup).insertBefore(_.$slides.eq(index));
			} else {
				$(markup).insertAfter(_.$slides.eq(index));
			}
		} else {
			if (addBefore === true) {
				$(markup).prependTo(_.$slideTrack);
			} else {
				$(markup).appendTo(_.$slideTrack);
			}
		}
		_.$slides = _.$slideTrack.children(this.options.slide);
		_.$slideTrack.children(this.options.slide).detach();
		_.$slideTrack.append(_.$slides);
		_.$slides.each(function (index, element) {
			$(element).attr('data-slick-index', index);
		});
		_.$slidesCache = _.$slides;
		_.reinit();
	};
	Slick.prototype.animateHeight = function () {
		var _ = this;
		if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
			var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
			_.$list.animate({
				height: targetHeight
			}, _.options.speed);
		}
	};
	Slick.prototype.animateSlide = function (targetLeft, callback) {
		var animProps = {},
			_ = this;
		_.animateHeight();
		if (_.options.rtl === true && _.options.vertical === false) {
			targetLeft = -targetLeft;
		}
		if (_.transformsEnabled === false) {
			if (_.options.vertical === false) {
				_.$slideTrack.animate({
					left: targetLeft
				}, _.options.speed, _.options.easing, callback);
			} else {
				_.$slideTrack.animate({
					top: targetLeft
				}, _.options.speed, _.options.easing, callback);
			}
		} else {
			if (_.cssTransitions === false) {
				if (_.options.rtl === true) {
					_.currentLeft = -(_.currentLeft);
				}
				$({
					animStart: _.currentLeft
				}).animate({
					animStart: targetLeft
				}, {
					duration: _.options.speed,
					easing: _.options.easing,
					step: function (now) {
						now = Math.ceil(now);
						if (_.options.vertical === false) {
							animProps[_.animType] = 'translate(' +
								now + 'px, 0px)';
							_.$slideTrack.css(animProps);
						} else {
							animProps[_.animType] = 'translate(0px,' +
								now + 'px)';
							_.$slideTrack.css(animProps);
						}
					},
					complete: function () {
						if (callback) {
							callback.call();
						}
					}
				});
			} else {
				_.applyTransition();
				targetLeft = Math.ceil(targetLeft);
				if (_.options.vertical === false) {
					animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
				} else {
					animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
				}
				_.$slideTrack.css(animProps);
				if (callback) {
					setTimeout(function () {
						_.disableTransition();
						callback.call();
					}, _.options.speed);
				}
			}
		}
	};
	Slick.prototype.getNavTarget = function () {
		var _ = this,
			asNavFor = _.options.asNavFor;
		if (asNavFor && asNavFor !== null) {
			asNavFor = $(asNavFor).not(_.$slider);
		}
		return asNavFor;
	};
	Slick.prototype.asNavFor = function (index) {
		var _ = this,
			asNavFor = _.getNavTarget();
		if (asNavFor !== null && typeof asNavFor === 'object') {
			asNavFor.each(function () {
				var target = $(this).slick('getSlick');
				if (!target.unslicked) {
					target.slideHandler(index, true);
				}
			});
		}
	};
	Slick.prototype.applyTransition = function (slide) {
		var _ = this,
			transition = {};
		if (_.options.fade === false) {
			transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
		} else {
			transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
		}
		if (_.options.fade === false) {
			_.$slideTrack.css(transition);
		} else {
			_.$slides.eq(slide).css(transition);
		}
	};
	Slick.prototype.autoPlay = function () {
		var _ = this;
		_.autoPlayClear();
		if (_.slideCount > _.options.slidesToShow) {
			_.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
		}
	};
	Slick.prototype.autoPlayClear = function () {
		var _ = this;
		if (_.autoPlayTimer) {
			clearInterval(_.autoPlayTimer);
		}
	};
	Slick.prototype.autoPlayIterator = function () {
		var _ = this,
			slideTo = _.currentSlide + _.options.slidesToScroll;
		if (!_.paused && !_.interrupted && !_.focussed) {
			if (_.options.infinite === false) {
				if (_.direction === 1 && (_.currentSlide + 1) === (_.slideCount - 1)) {
					_.direction = 0;
				} else if (_.direction === 0) {
					slideTo = _.currentSlide - _.options.slidesToScroll;
					if (_.currentSlide - 1 === 0) {
						_.direction = 1;
					}
				}
			}
			_.slideHandler(slideTo);
		}
	};
	Slick.prototype.buildArrows = function () {
		var _ = this;
		if (_.options.arrows === true) {
			_.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
			_.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
			if (_.slideCount > _.options.slidesToShow) {
				_.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
				_.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
				if (_.htmlExpr.test(_.options.prevArrow)) {
					_.$prevArrow.prependTo(_.options.appendArrows);
				}
				if (_.htmlExpr.test(_.options.nextArrow)) {
					_.$nextArrow.appendTo(_.options.appendArrows);
				}
				if (_.options.infinite !== true) {
					_.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
				}
			} else {
				_.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
					'aria-disabled': 'true',
					'tabindex': '-1'
				});
			}
		}
	};
	Slick.prototype.buildDots = function () {
		var _ = this,
			i, dot;
		if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
			_.$slider.addClass('slick-dotted');
			dot = $('<ul />').addClass(_.options.dotsClass);
			for (i = 0; i <= _.getDotCount(); i += 1) {
				dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
			}
			_.$dots = dot.appendTo(_.options.appendDots);
			_.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
		}
	};
	Slick.prototype.buildOut = function () {
		var _ = this;
		_.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
		_.slideCount = _.$slides.length;
		_.$slides.each(function (index, element) {
			$(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
		});
		_.$slider.addClass('slick-slider');
		_.$slideTrack = (_.slideCount === 0) ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
		_.$list = _.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
		_.$slideTrack.css('opacity', 0);
		if (_.options.centerMode === true || _.options.swipeToSlide === true) {
			_.options.slidesToScroll = 1;
		}
		$('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
		_.setupInfinite();
		_.buildArrows();
		_.buildDots();
		_.updateDots();
		_.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
		if (_.options.draggable === true) {
			_.$list.addClass('draggable');
		}
	};
	Slick.prototype.buildRows = function () {
		var _ = this,
			a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;
		newSlides = document.createDocumentFragment();
		originalSlides = _.$slider.children();
		if (_.options.rows > 1) {
			slidesPerSection = _.options.slidesPerRow * _.options.rows;
			numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
			for (a = 0; a < numOfSlides; a++) {
				var slide = document.createElement('div');
				for (b = 0; b < _.options.rows; b++) {
					var row = document.createElement('div');
					for (c = 0; c < _.options.slidesPerRow; c++) {
						var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
						if (originalSlides.get(target)) {
							row.appendChild(originalSlides.get(target));
						}
					}
					slide.appendChild(row);
				}
				newSlides.appendChild(slide);
			}
			_.$slider.empty().append(newSlides);
			_.$slider.children().children().children().css({
				'width': (100 / _.options.slidesPerRow) + '%',
				'display': 'inline-block'
			});
		}
	};
	Slick.prototype.checkResponsive = function (initial, forceUpdate) {
		var _ = this,
			breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
		var sliderWidth = _.$slider.width();
		var windowWidth = window.innerWidth || $(window).width();
		if (_.respondTo === 'window') {
			respondToWidth = windowWidth;
		} else if (_.respondTo === 'slider') {
			respondToWidth = sliderWidth;
		} else if (_.respondTo === 'min') {
			respondToWidth = Math.min(windowWidth, sliderWidth);
		}
		if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
			targetBreakpoint = null;
			for (breakpoint in _.breakpoints) {
				if (_.breakpoints.hasOwnProperty(breakpoint)) {
					if (_.originalSettings.mobileFirst === false) {
						if (respondToWidth < _.breakpoints[breakpoint]) {
							targetBreakpoint = _.breakpoints[breakpoint];
						}
					} else {
						if (respondToWidth > _.breakpoints[breakpoint]) {
							targetBreakpoint = _.breakpoints[breakpoint];
						}
					}
				}
			}
			if (targetBreakpoint !== null) {
				if (_.activeBreakpoint !== null) {
					if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
						_.activeBreakpoint = targetBreakpoint;
						if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
							_.unslick(targetBreakpoint);
						} else {
							_.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
							if (initial === true) {
								_.currentSlide = _.options.initialSlide;
							}
							_.refresh(initial);
						}
						triggerBreakpoint = targetBreakpoint;
					}
				} else {
					_.activeBreakpoint = targetBreakpoint;
					if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
						_.unslick(targetBreakpoint);
					} else {
						_.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
						if (initial === true) {
							_.currentSlide = _.options.initialSlide;
						}
						_.refresh(initial);
					}
					triggerBreakpoint = targetBreakpoint;
				}
			} else {
				if (_.activeBreakpoint !== null) {
					_.activeBreakpoint = null;
					_.options = _.originalSettings;
					if (initial === true) {
						_.currentSlide = _.options.initialSlide;
					}
					_.refresh(initial);
					triggerBreakpoint = targetBreakpoint;
				}
			}
			if (!initial && triggerBreakpoint !== false) {
				_.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
			}
		}
	};
	Slick.prototype.changeSlide = function (event, dontAnimate) {
		var _ = this,
			$target = $(event.currentTarget),
			indexOffset, slideOffset, unevenOffset;
		if ($target.is('a')) {
			event.preventDefault();
		}
		if (!$target.is('li')) {
			$target = $target.closest('li');
		}
		unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
		indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
		switch (event.data.message) {
			case 'previous':
				slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
				if (_.slideCount > _.options.slidesToShow) {
					_.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
				}
				break;
			case 'next':
				slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
				if (_.slideCount > _.options.slidesToShow) {
					_.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
				}
				break;
			case 'index':
				var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
				_.slideHandler(_.checkNavigable(index), false, dontAnimate);
				$target.children().trigger('focus');
				break;
			default:
				return;
		}
	};
	Slick.prototype.checkNavigable = function (index) {
		var _ = this,
			navigables, prevNavigable;
		navigables = _.getNavigableIndexes();
		prevNavigable = 0;
		if (index > navigables[navigables.length - 1]) {
			index = navigables[navigables.length - 1];
		} else {
			for (var n in navigables) {
				if (index < navigables[n]) {
					index = prevNavigable;
					break;
				}
				prevNavigable = navigables[n];
			}
		}
		return index;
	};
	Slick.prototype.cleanUpEvents = function () {
		var _ = this;
		if (_.options.dots && _.$dots !== null) {
			$('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));
		}
		_.$slider.off('focus.slick blur.slick');
		if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
			_.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
			_.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
		}
		_.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
		_.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
		_.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
		_.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
		_.$list.off('click.slick', _.clickHandler);
		$(document).off(_.visibilityChange, _.visibility);
		_.cleanUpSlideEvents();
		if (_.options.accessibility === true) {
			_.$list.off('keydown.slick', _.keyHandler);
		}
		if (_.options.focusOnSelect === true) {
			$(_.$slideTrack).children().off('click.slick', _.selectHandler);
		}
		$(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
		$(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
		$('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
		$(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
		$(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
	};
	Slick.prototype.cleanUpSlideEvents = function () {
		var _ = this;
		_.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
		_.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
	};
	Slick.prototype.cleanUpRows = function () {
		var _ = this,
			originalSlides;
		if (_.options.rows > 1) {
			originalSlides = _.$slides.children().children();
			originalSlides.removeAttr('style');
			_.$slider.empty().append(originalSlides);
		}
	};
	Slick.prototype.clickHandler = function (event) {
		var _ = this;
		if (_.shouldClick === false) {
			event.stopImmediatePropagation();
			event.stopPropagation();
			event.preventDefault();
		}
	};
	Slick.prototype.destroy = function (refresh) {
		var _ = this;
		_.autoPlayClear();
		_.touchObject = {};
		_.cleanUpEvents();
		$('.slick-cloned', _.$slider).detach();
		if (_.$dots) {
			_.$dots.remove();
		}
		if (_.$prevArrow && _.$prevArrow.length) {
			_.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
			if (_.htmlExpr.test(_.options.prevArrow)) {
				_.$prevArrow.remove();
			}
		}
		if (_.$nextArrow && _.$nextArrow.length) {
			_.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
			if (_.htmlExpr.test(_.options.nextArrow)) {
				_.$nextArrow.remove();
			}
		}
		if (_.$slides) {
			_.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
				$(this).attr('style', $(this).data('originalStyling'));
			});
			_.$slideTrack.children(this.options.slide).detach();
			_.$slideTrack.detach();
			_.$list.detach();
			_.$slider.append(_.$slides);
		}
		_.cleanUpRows();
		_.$slider.removeClass('slick-slider');
		_.$slider.removeClass('slick-initialized');
		_.$slider.removeClass('slick-dotted');
		_.unslicked = true;
		if (!refresh) {
			_.$slider.trigger('destroy', [_]);
		}
	};
	Slick.prototype.disableTransition = function (slide) {
		var _ = this,
			transition = {};
		transition[_.transitionType] = '';
		if (_.options.fade === false) {
			_.$slideTrack.css(transition);
		} else {
			_.$slides.eq(slide).css(transition);
		}
	};
	Slick.prototype.fadeSlide = function (slideIndex, callback) {
		var _ = this;
		if (_.cssTransitions === false) {
			_.$slides.eq(slideIndex).css({
				zIndex: _.options.zIndex
			});
			_.$slides.eq(slideIndex).animate({
				opacity: 1
			}, _.options.speed, _.options.easing, callback);
		} else {
			_.applyTransition(slideIndex);
			_.$slides.eq(slideIndex).css({
				opacity: 1,
				zIndex: _.options.zIndex
			});
			if (callback) {
				setTimeout(function () {
					_.disableTransition(slideIndex);
					callback.call();
				}, _.options.speed);
			}
		}
	};
	Slick.prototype.fadeSlideOut = function (slideIndex) {
		var _ = this;
		if (_.cssTransitions === false) {
			_.$slides.eq(slideIndex).animate({
				opacity: 0,
				zIndex: _.options.zIndex - 2
			}, _.options.speed, _.options.easing);
		} else {
			_.applyTransition(slideIndex);
			_.$slides.eq(slideIndex).css({
				opacity: 0,
				zIndex: _.options.zIndex - 2
			});
		}
	};
	Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
		var _ = this;
		if (filter !== null) {
			_.$slidesCache = _.$slides;
			_.unload();
			_.$slideTrack.children(this.options.slide).detach();
			_.$slidesCache.filter(filter).appendTo(_.$slideTrack);
			_.reinit();
		}
	};
	Slick.prototype.focusHandler = function () {
		var _ = this;
		_.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*:not(.slick-arrow)', function (event) {
			event.stopImmediatePropagation();
			var $sf = $(this);
			setTimeout(function () {
				if (_.options.pauseOnFocus) {
					_.focussed = $sf.is(':focus');
					_.autoPlay();
				}
			}, 0);
		});
	};
	Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
		var _ = this;
		return _.currentSlide;
	};
	Slick.prototype.getDotCount = function () {
		var _ = this;
		var breakPoint = 0;
		var counter = 0;
		var pagerQty = 0;
		if (_.options.infinite === true) {
			while (breakPoint < _.slideCount) {
				++pagerQty;
				breakPoint = counter + _.options.slidesToScroll;
				counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
			}
		} else if (_.options.centerMode === true) {
			pagerQty = _.slideCount;
		} else if (!_.options.asNavFor) {
			pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
		} else {
			while (breakPoint < _.slideCount) {
				++pagerQty;
				breakPoint = counter + _.options.slidesToScroll;
				counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
			}
		}
		return pagerQty - 1;
	};
	Slick.prototype.getLeft = function (slideIndex) {
		var _ = this,
			targetLeft, verticalHeight, verticalOffset = 0,
			targetSlide;
		_.slideOffset = 0;
		verticalHeight = _.$slides.first().outerHeight(true);
		if (_.options.infinite === true) {
			if (_.slideCount > _.options.slidesToShow) {
				_.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
				verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
			}
			if (_.slideCount % _.options.slidesToScroll !== 0) {
				if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
					if (slideIndex > _.slideCount) {
						_.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
						verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
					} else {
						_.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
						verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
					}
				}
			}
		} else {
			if (slideIndex + _.options.slidesToShow > _.slideCount) {
				_.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
				verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
			}
		}
		if (_.slideCount <= _.options.slidesToShow) {
			_.slideOffset = 0;
			verticalOffset = 0;
		}
		if (_.options.centerMode === true && _.options.infinite === true) {
			_.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
		} else if (_.options.centerMode === true) {
			_.slideOffset = 0;
			_.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
		}
		if (_.options.vertical === false) {
			targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
		} else {
			targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
		}
		if (_.options.variableWidth === true) {
			if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
				targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
			} else {
				targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
			}
			if (_.options.rtl === true) {
				if (targetSlide[0]) {
					targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
				} else {
					targetLeft = 0;
				}
			} else {
				targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
			}
			if (_.options.centerMode === true) {
				if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
					targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
				} else {
					targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
				}
				if (_.options.rtl === true) {
					if (targetSlide[0]) {
						targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
					} else {
						targetLeft = 0;
					}
				} else {
					targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
				}
				targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
			}
		}
		return targetLeft;
	};
	Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
		var _ = this;
		return _.options[option];
	};
	Slick.prototype.getNavigableIndexes = function () {
		var _ = this,
			breakPoint = 0,
			counter = 0,
			indexes = [],
			max;
		if (_.options.infinite === false) {
			max = _.slideCount;
		} else {
			breakPoint = _.options.slidesToScroll * -1;
			counter = _.options.slidesToScroll * -1;
			max = _.slideCount * 2;
		}
		while (breakPoint < max) {
			indexes.push(breakPoint);
			breakPoint = counter + _.options.slidesToScroll;
			counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
		}
		return indexes;
	};
	Slick.prototype.getSlick = function () {
		return this;
	};
	Slick.prototype.getSlideCount = function () {
		var _ = this,
			slidesTraversed, swipedSlide, centerOffset;
		centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
		if (_.options.swipeToSlide === true) {
			_.$slideTrack.find('.slick-slide').each(function (index, slide) {
				if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
					swipedSlide = slide;
					return false;
				}
			});
			slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
			return slidesTraversed;
		} else {
			return _.options.slidesToScroll;
		}
	};
	Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
		var _ = this;
		_.changeSlide({
			data: {
				message: 'index',
				index: parseInt(slide)
			}
		}, dontAnimate);
	};
	Slick.prototype.init = function (creation) {
		var _ = this;
		if (!$(_.$slider).hasClass('slick-initialized')) {
			$(_.$slider).addClass('slick-initialized');
			_.buildRows();
			_.buildOut();
			_.setProps();
			_.startLoad();
			_.loadSlider();
			_.initializeEvents();
			_.updateArrows();
			_.updateDots();
			_.checkResponsive(true);
			_.focusHandler();
		}
		if (creation) {
			_.$slider.trigger('init', [_]);
		}
		if (_.options.accessibility === true) {
			_.initADA();
		}
		if (_.options.autoplay) {
			_.paused = false;
			_.autoPlay();
		}
	};
	Slick.prototype.initADA = function () {
		var _ = this;
		_.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
			'aria-hidden': 'true',
			'tabindex': '-1'
		}).find('a, input, button, select').attr({
			'tabindex': '-1'
		});
		_.$slideTrack.attr('role', 'listbox');
		_.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
			$(this).attr({
				'role': 'option',
				'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
			});
		});
		if (_.$dots !== null) {
			_.$dots.attr('role', 'tablist').find('li').each(function (i) {
				$(this).attr({
					'role': 'presentation',
					'aria-selected': 'false',
					'aria-controls': 'navigation' + _.instanceUid + i + '',
					'id': 'slick-slide' + _.instanceUid + i + ''
				});
			}).first().attr('aria-selected', 'true').end().find('button').attr('role', 'button').end().closest('div').attr('role', 'toolbar');
		}
		_.activateADA();
	};
	Slick.prototype.initArrowEvents = function () {
		var _ = this;
		if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
			_.$prevArrow.off('click.slick').on('click.slick', {
				message: 'previous'
			}, _.changeSlide);
			_.$nextArrow.off('click.slick').on('click.slick', {
				message: 'next'
			}, _.changeSlide);
		}
	};
	Slick.prototype.initDotEvents = function () {
		var _ = this;
		if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
			$('li', _.$dots).on('click.slick', {
				message: 'index'
			}, _.changeSlide);
		}
		if (_.options.dots === true && _.options.pauseOnDotsHover === true) {
			$('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
		}
	};
	Slick.prototype.initSlideEvents = function () {
		var _ = this;
		if (_.options.pauseOnHover) {
			_.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
			_.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
		}
	};
	Slick.prototype.initializeEvents = function () {
		var _ = this;
		_.initArrowEvents();
		_.initDotEvents();
		_.initSlideEvents();
		_.$list.on('touchstart.slick mousedown.slick', {
			action: 'start'
		}, _.swipeHandler);
		_.$list.on('touchmove.slick mousemove.slick', {
			action: 'move'
		}, _.swipeHandler);
		_.$list.on('touchend.slick mouseup.slick', {
			action: 'end'
		}, _.swipeHandler);
		_.$list.on('touchcancel.slick mouseleave.slick', {
			action: 'end'
		}, _.swipeHandler);
		_.$list.on('click.slick', _.clickHandler);
		$(document).on(_.visibilityChange, $.proxy(_.visibility, _));
		if (_.options.accessibility === true) {
			_.$list.on('keydown.slick', _.keyHandler);
		}
		if (_.options.focusOnSelect === true) {
			$(_.$slideTrack).children().on('click.slick', _.selectHandler);
		}
		$(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
		$(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
		$('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
		$(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
		$(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
	};
	Slick.prototype.initUI = function () {
		var _ = this;
		if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
			_.$prevArrow.show();
			_.$nextArrow.show();
		}
		if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
			_.$dots.show();
		}
	};
	Slick.prototype.keyHandler = function (event) {
		var _ = this;
		if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
			if (event.keyCode === 37 && _.options.accessibility === true) {
				_.changeSlide({
					data: {
						message: _.options.rtl === true ? 'next' : 'previous'
					}
				});
			} else if (event.keyCode === 39 && _.options.accessibility === true) {
				_.changeSlide({
					data: {
						message: _.options.rtl === true ? 'previous' : 'next'
					}
				});
			}
		}
	};
	Slick.prototype.lazyLoad = function () {
		var _ = this,
			loadRange, cloneRange, rangeStart, rangeEnd;

		function loadImages(imagesScope) {
			$('img[data-lazy]', imagesScope).each(function () {
				var image = $(this),
					imageSource = $(this).attr('data-lazy'),
					imageToLoad = document.createElement('img');
				imageToLoad.onload = function () {
					image.animate({
						opacity: 0
					}, 100, function () {
						image.attr('src', imageSource).animate({
							opacity: 1
						}, 200, function () {
							image.removeAttr('data-lazy').removeClass('slick-loading');
						});
						_.$slider.trigger('lazyLoaded', [_, image, imageSource]);
					});
				};
				imageToLoad.onerror = function () {
					image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
					_.$slider.trigger('lazyLoadError', [_, image, imageSource]);
				};
				imageToLoad.src = imageSource;
			});
		}
		if (_.options.centerMode === true) {
			if (_.options.infinite === true) {
				rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
				rangeEnd = rangeStart + _.options.slidesToShow + 2;
			} else {
				rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
				rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
			}
		} else {
			rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
			rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
			if (_.options.fade === true) {
				if (rangeStart > 0) rangeStart--;
				if (rangeEnd <= _.slideCount) rangeEnd++;
			}
		}
		loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
		loadImages(loadRange);
		if (_.slideCount <= _.options.slidesToShow) {
			cloneRange = _.$slider.find('.slick-slide');
			loadImages(cloneRange);
		} else
		if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
			cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
			loadImages(cloneRange);
		} else if (_.currentSlide === 0) {
			cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
			loadImages(cloneRange);
		}
	};
	Slick.prototype.loadSlider = function () {
		var _ = this;
		_.setPosition();
		_.$slideTrack.css({
			opacity: 1
		});
		_.$slider.removeClass('slick-loading');
		_.initUI();
		if (_.options.lazyLoad === 'progressive') {
			_.progressiveLazyLoad();
		}
	};
	Slick.prototype.next = Slick.prototype.slickNext = function () {
		var _ = this;
		_.changeSlide({
			data: {
				message: 'next'
			}
		});
	};
	Slick.prototype.orientationChange = function () {
		var _ = this;
		_.checkResponsive();
		_.setPosition();
	};
	Slick.prototype.pause = Slick.prototype.slickPause = function () {
		var _ = this;
		_.autoPlayClear();
		_.paused = true;
	};
	Slick.prototype.play = Slick.prototype.slickPlay = function () {
		var _ = this;
		_.autoPlay();
		_.options.autoplay = true;
		_.paused = false;
		_.focussed = false;
		_.interrupted = false;
	};
	Slick.prototype.postSlide = function (index) {
		var _ = this;
		if (!_.unslicked) {
			_.$slider.trigger('afterChange', [_, index]);
			_.animating = false;
			_.setPosition();
			_.swipeLeft = null;
			if (_.options.autoplay) {
				_.autoPlay();
			}
			if (_.options.accessibility === true) {
				_.initADA();
			}
		}
	};
	Slick.prototype.prev = Slick.prototype.slickPrev = function () {
		var _ = this;
		_.changeSlide({
			data: {
				message: 'previous'
			}
		});
	};
	Slick.prototype.preventDefault = function (event) {
		event.preventDefault();
	};
	Slick.prototype.progressiveLazyLoad = function (tryCount) {
		tryCount = tryCount || 1;
		var _ = this,
			$imgsToLoad = $('img[data-lazy]', _.$slider),
			image, imageSource, imageToLoad;
		if ($imgsToLoad.length) {
			image = $imgsToLoad.first();
			imageSource = image.attr('data-lazy');
			imageToLoad = document.createElement('img');
			imageToLoad.onload = function () {
				image.attr('src', imageSource).removeAttr('data-lazy').removeClass('slick-loading');
				if (_.options.adaptiveHeight === true) {
					_.setPosition();
				}
				_.$slider.trigger('lazyLoaded', [_, image, imageSource]);
				_.progressiveLazyLoad();
			};
			imageToLoad.onerror = function () {
				if (tryCount < 3) {
					setTimeout(function () {
						_.progressiveLazyLoad(tryCount + 1);
					}, 500);
				} else {
					image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
					_.$slider.trigger('lazyLoadError', [_, image, imageSource]);
					_.progressiveLazyLoad();
				}
			};
			imageToLoad.src = imageSource;
		} else {
			_.$slider.trigger('allImagesLoaded', [_]);
		}
	};
	Slick.prototype.refresh = function (initializing) {
		var _ = this,
			currentSlide, lastVisibleIndex;
		lastVisibleIndex = _.slideCount - _.options.slidesToShow;
		if (!_.options.infinite && (_.currentSlide > lastVisibleIndex)) {
			_.currentSlide = lastVisibleIndex;
		}
		if (_.slideCount <= _.options.slidesToShow) {
			_.currentSlide = 0;
		}
		currentSlide = _.currentSlide;
		_.destroy(true);
		$.extend(_, _.initials, {
			currentSlide: currentSlide
		});
		_.init();
		if (!initializing) {
			_.changeSlide({
				data: {
					message: 'index',
					index: currentSlide
				}
			}, false);
		}
	};
	Slick.prototype.registerBreakpoints = function () {
		var _ = this,
			breakpoint, currentBreakpoint, l, responsiveSettings = _.options.responsive || null;
		if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
			_.respondTo = _.options.respondTo || 'window';
			for (breakpoint in responsiveSettings) {
				l = _.breakpoints.length - 1;
				currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
				if (responsiveSettings.hasOwnProperty(breakpoint)) {
					while (l >= 0) {
						if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
							_.breakpoints.splice(l, 1);
						}
						l--;
					}
					_.breakpoints.push(currentBreakpoint);
					_.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
				}
			}
			_.breakpoints.sort(function (a, b) {
				return (_.options.mobileFirst) ? a - b : b - a;
			});
		}
	};
	Slick.prototype.reinit = function () {
		var _ = this;
		_.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
		_.slideCount = _.$slides.length;
		if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
			_.currentSlide = _.currentSlide - _.options.slidesToScroll;
		}
		if (_.slideCount <= _.options.slidesToShow) {
			_.currentSlide = 0;
		}
		_.registerBreakpoints();
		_.setProps();
		_.setupInfinite();
		_.buildArrows();
		_.updateArrows();
		_.initArrowEvents();
		_.buildDots();
		_.updateDots();
		_.initDotEvents();
		_.cleanUpSlideEvents();
		_.initSlideEvents();
		_.checkResponsive(false, true);
		if (_.options.focusOnSelect === true) {
			$(_.$slideTrack).children().on('click.slick', _.selectHandler);
		}
		_.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
		_.setPosition();
		_.focusHandler();
		_.paused = !_.options.autoplay;
		_.autoPlay();
		_.$slider.trigger('reInit', [_]);
	};
	Slick.prototype.resize = function () {
		var _ = this;
		if ($(window).width() !== _.windowWidth) {
			clearTimeout(_.windowDelay);
			_.windowDelay = window.setTimeout(function () {
				_.windowWidth = $(window).width();
				_.checkResponsive();
				if (!_.unslicked) {
					_.setPosition();
				}
			}, 50);
		}
	};
	Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
		var _ = this;
		if (typeof (index) === 'boolean') {
			removeBefore = index;
			index = removeBefore === true ? 0 : _.slideCount - 1;
		} else {
			index = removeBefore === true ? --index : index;
		}
		if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
			return false;
		}
		_.unload();
		if (removeAll === true) {
			_.$slideTrack.children().remove();
		} else {
			_.$slideTrack.children(this.options.slide).eq(index).remove();
		}
		_.$slides = _.$slideTrack.children(this.options.slide);
		_.$slideTrack.children(this.options.slide).detach();
		_.$slideTrack.append(_.$slides);
		_.$slidesCache = _.$slides;
		_.reinit();
	};
	Slick.prototype.setCSS = function (position) {
		var _ = this,
			positionProps = {},
			x, y;
		if (_.options.rtl === true) {
			position = -position;
		}
		x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
		y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
		positionProps[_.positionProp] = position;
		if (_.transformsEnabled === false) {
			_.$slideTrack.css(positionProps);
		} else {
			positionProps = {};
			if (_.cssTransitions === false) {
				positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
				_.$slideTrack.css(positionProps);
			} else {
				positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
				_.$slideTrack.css(positionProps);
			}
		}
	};
	Slick.prototype.setDimensions = function () {
		var _ = this;
		if (_.options.vertical === false) {
			if (_.options.centerMode === true) {
				_.$list.css({
					padding: ('0px ' + _.options.centerPadding)
				});
			}
		} else {
			_.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
			if (_.options.centerMode === true) {
				_.$list.css({
					padding: (_.options.centerPadding + ' 0px')
				});
			}
		}
		_.listWidth = _.$list.width();
		_.listHeight = _.$list.height();
		if (_.options.vertical === false && _.options.variableWidth === false) {
			_.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
			_.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));
		} else if (_.options.variableWidth === true) {
			_.$slideTrack.width(5000 * _.slideCount);
		} else {
			_.slideWidth = Math.ceil(_.listWidth);
			_.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
		}
		var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
		if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
	};
	Slick.prototype.setFade = function () {
		var _ = this,
			targetLeft;
		_.$slides.each(function (index, element) {
			targetLeft = (_.slideWidth * index) * -1;
			if (_.options.rtl === true) {
				$(element).css({
					position: 'relative',
					right: targetLeft,
					top: 0,
					zIndex: _.options.zIndex - 2,
					opacity: 0
				});
			} else {
				$(element).css({
					position: 'relative',
					left: targetLeft,
					top: 0,
					zIndex: _.options.zIndex - 2,
					opacity: 0
				});
			}
		});
		_.$slides.eq(_.currentSlide).css({
			zIndex: _.options.zIndex - 1,
			opacity: 1
		});
	};
	Slick.prototype.setHeight = function () {
		var _ = this;
		if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
			var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
			_.$list.css('height', targetHeight);
		}
	};
	Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
		var _ = this,
			l, item, option, value, refresh = false,
			type;
		if ($.type(arguments[0]) === 'object') {
			option = arguments[0];
			refresh = arguments[1];
			type = 'multiple';
		} else if ($.type(arguments[0]) === 'string') {
			option = arguments[0];
			value = arguments[1];
			refresh = arguments[2];
			if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
				type = 'responsive';
			} else if (typeof arguments[1] !== 'undefined') {
				type = 'single';
			}
		}
		if (type === 'single') {
			_.options[option] = value;
		} else if (type === 'multiple') {
			$.each(option, function (opt, val) {
				_.options[opt] = val;
			});
		} else if (type === 'responsive') {
			for (item in value) {
				if ($.type(_.options.responsive) !== 'array') {
					_.options.responsive = [value[item]];
				} else {
					l = _.options.responsive.length - 1;
					while (l >= 0) {
						if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
							_.options.responsive.splice(l, 1);
						}
						l--;
					}
					_.options.responsive.push(value[item]);
				}
			}
		}
		if (refresh) {
			_.unload();
			_.reinit();
		}
	};
	Slick.prototype.setPosition = function () {
		var _ = this;
		_.setDimensions();
		_.setHeight();
		if (_.options.fade === false) {
			_.setCSS(_.getLeft(_.currentSlide));
		} else {
			_.setFade();
		}
		_.$slider.trigger('setPosition', [_]);
	};
	Slick.prototype.setProps = function () {
		var _ = this,
			bodyStyle = document.body.style;
		_.positionProp = _.options.vertical === true ? 'top' : 'left';
		if (_.positionProp === 'top') {
			_.$slider.addClass('slick-vertical');
		} else {
			_.$slider.removeClass('slick-vertical');
		}
		if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
			if (_.options.useCSS === true) {
				_.cssTransitions = true;
			}
		}
		if (_.options.fade) {
			if (typeof _.options.zIndex === 'number') {
				if (_.options.zIndex < 3) {
					_.options.zIndex = 3;
				}
			} else {
				_.options.zIndex = _.defaults.zIndex;
			}
		}
		if (bodyStyle.OTransform !== undefined) {
			_.animType = 'OTransform';
			_.transformType = '-o-transform';
			_.transitionType = 'OTransition';
			if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
		}
		if (bodyStyle.MozTransform !== undefined) {
			_.animType = 'MozTransform';
			_.transformType = '-moz-transform';
			_.transitionType = 'MozTransition';
			if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
		}
		if (bodyStyle.webkitTransform !== undefined) {
			_.animType = 'webkitTransform';
			_.transformType = '-webkit-transform';
			_.transitionType = 'webkitTransition';
			if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
		}
		if (bodyStyle.msTransform !== undefined) {
			_.animType = 'msTransform';
			_.transformType = '-ms-transform';
			_.transitionType = 'msTransition';
			if (bodyStyle.msTransform === undefined) _.animType = false;
		}
		if (bodyStyle.transform !== undefined && _.animType !== false) {
			_.animType = 'transform';
			_.transformType = 'transform';
			_.transitionType = 'transition';
		}
		_.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
	};
	Slick.prototype.setSlideClasses = function (index) {
		var _ = this,
			centerOffset, allSlides, indexOffset, remainder;
		allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');
		_.$slides.eq(index).addClass('slick-current');
		if (_.options.centerMode === true) {
			centerOffset = Math.floor(_.options.slidesToShow / 2);
			if (_.options.infinite === true) {
				if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
					_.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
				} else {
					indexOffset = _.options.slidesToShow + index;
					allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
				}
				if (index === 0) {
					allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
				} else if (index === _.slideCount - 1) {
					allSlides.eq(_.options.slidesToShow).addClass('slick-center');
				}
			}
			_.$slides.eq(index).addClass('slick-center');
		} else {
			if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
				_.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
			} else if (allSlides.length <= _.options.slidesToShow) {
				allSlides.addClass('slick-active').attr('aria-hidden', 'false');
			} else {
				remainder = _.slideCount % _.options.slidesToShow;
				indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
				if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
					allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
				} else {
					allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
				}
			}
		}
		if (_.options.lazyLoad === 'ondemand') {
			_.lazyLoad();
		}
	};
	Slick.prototype.setupInfinite = function () {
		var _ = this,
			i, slideIndex, infiniteCount;
		if (_.options.fade === true) {
			_.options.centerMode = false;
		}
		if (_.options.infinite === true && _.options.fade === false) {
			slideIndex = null;
			if (_.slideCount > _.options.slidesToShow) {
				if (_.options.centerMode === true) {
					infiniteCount = _.options.slidesToShow + 1;
				} else {
					infiniteCount = _.options.slidesToShow;
				}
				for (i = _.slideCount; i > (_.slideCount -
						infiniteCount); i -= 1) {
					slideIndex = i - 1;
					$(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
				}
				for (i = 0; i < infiniteCount; i += 1) {
					slideIndex = i;
					$(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
				}
				_.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
					$(this).attr('id', '');
				});
			}
		}
	};
	Slick.prototype.interrupt = function (toggle) {
		var _ = this;
		if (!toggle) {
			_.autoPlay();
		}
		_.interrupted = toggle;
	};
	Slick.prototype.selectHandler = function (event) {
		var _ = this;
		var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
		var index = parseInt(targetElement.attr('data-slick-index'));
		if (!index) index = 0;
		if (_.slideCount <= _.options.slidesToShow) {
			_.setSlideClasses(index);
			_.asNavFor(index);
			return;
		}
		_.slideHandler(index);
	};
	Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
		var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
			_ = this,
			navTarget;
		sync = sync || false;
		if (_.animating === true && _.options.waitForAnimate === true) {
			return;
		}
		if (_.options.fade === true && _.currentSlide === index) {
			return;
		}
		if (_.slideCount <= _.options.slidesToShow) {
			return;
		}
		if (sync === false) {
			_.asNavFor(index);
		}
		targetSlide = index;
		targetLeft = _.getLeft(targetSlide);
		slideLeft = _.getLeft(_.currentSlide);
		_.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
		if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
			if (_.options.fade === false) {
				targetSlide = _.currentSlide;
				if (dontAnimate !== true) {
					_.animateSlide(slideLeft, function () {
						_.postSlide(targetSlide);
					});
				} else {
					_.postSlide(targetSlide);
				}
			}
			return;
		} else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
			if (_.options.fade === false) {
				targetSlide = _.currentSlide;
				if (dontAnimate !== true) {
					_.animateSlide(slideLeft, function () {
						_.postSlide(targetSlide);
					});
				} else {
					_.postSlide(targetSlide);
				}
			}
			return;
		}
		if (_.options.autoplay) {
			clearInterval(_.autoPlayTimer);
		}
		if (targetSlide < 0) {
			if (_.slideCount % _.options.slidesToScroll !== 0) {
				animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
			} else {
				animSlide = _.slideCount + targetSlide;
			}
		} else if (targetSlide >= _.slideCount) {
			if (_.slideCount % _.options.slidesToScroll !== 0) {
				animSlide = 0;
			} else {
				animSlide = targetSlide - _.slideCount;
			}
		} else {
			animSlide = targetSlide;
		}
		_.animating = true;
		_.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
		oldSlide = _.currentSlide;
		_.currentSlide = animSlide;
		_.setSlideClasses(_.currentSlide);
		if (_.options.asNavFor) {
			navTarget = _.getNavTarget();
			navTarget = navTarget.slick('getSlick');
			if (navTarget.slideCount <= navTarget.options.slidesToShow) {
				navTarget.setSlideClasses(_.currentSlide);
			}
		}
		_.updateDots();
		_.updateArrows();
		if (_.options.fade === true) {
			if (dontAnimate !== true) {
				_.fadeSlideOut(oldSlide);
				_.fadeSlide(animSlide, function () {
					_.postSlide(animSlide);
				});
			} else {
				_.postSlide(animSlide);
			}
			_.animateHeight();
			return;
		}
		if (dontAnimate !== true) {
			_.animateSlide(targetLeft, function () {
				_.postSlide(animSlide);
			});
		} else {
			_.postSlide(animSlide);
		}
	};
	Slick.prototype.startLoad = function () {
		var _ = this;
		if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
			_.$prevArrow.hide();
			_.$nextArrow.hide();
		}
		if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
			_.$dots.hide();
		}
		_.$slider.addClass('slick-loading');
	};
	Slick.prototype.swipeDirection = function () {
		var xDist, yDist, r, swipeAngle, _ = this;
		xDist = _.touchObject.startX - _.touchObject.curX;
		yDist = _.touchObject.startY - _.touchObject.curY;
		r = Math.atan2(yDist, xDist);
		swipeAngle = Math.round(r * 180 / Math.PI);
		if (swipeAngle < 0) {
			swipeAngle = 360 - Math.abs(swipeAngle);
		}
		if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
			return (_.options.rtl === false ? 'left' : 'right');
		}
		if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
			return (_.options.rtl === false ? 'left' : 'right');
		}
		if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
			return (_.options.rtl === false ? 'right' : 'left');
		}
		if (_.options.verticalSwiping === true) {
			if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
				return 'down';
			} else {
				return 'up';
			}
		}
		return 'vertical';
	};
	Slick.prototype.swipeEnd = function (event) {
		var _ = this,
			slideCount, direction;
		_.dragging = false;
		_.interrupted = false;
		_.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;
		if (_.touchObject.curX === undefined) {
			return false;
		}
		if (_.touchObject.edgeHit === true) {
			_.$slider.trigger('edge', [_, _.swipeDirection()]);
		}
		if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
			direction = _.swipeDirection();
			switch (direction) {
				case 'left':
				case 'down':
					slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
					_.currentDirection = 0;
					break;
				case 'right':
				case 'up':
					slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
					_.currentDirection = 1;
					break;
				default:
			}
			if (direction != 'vertical') {
				_.slideHandler(slideCount);
				_.touchObject = {};
				_.$slider.trigger('swipe', [_, direction]);
			}
		} else {
			if (_.touchObject.startX !== _.touchObject.curX) {
				_.slideHandler(_.currentSlide);
				_.touchObject = {};
			}
		}
	};
	Slick.prototype.swipeHandler = function (event) {
		var _ = this;
		if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
			return;
		} else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
			return;
		}
		_.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
		_.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
		if (_.options.verticalSwiping === true) {
			_.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
		}
		switch (event.data.action) {
			case 'start':
				_.swipeStart(event);
				break;
			case 'move':
				_.swipeMove(event);
				break;
			case 'end':
				_.swipeEnd(event);
				break;
		}
	};
	Slick.prototype.swipeMove = function (event) {
		var _ = this,
			edgeWasHit = false,
			curLeft, swipeDirection, swipeLength, positionOffset, touches;
		touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
		if (!_.dragging || touches && touches.length !== 1) {
			return false;
		}
		curLeft = _.getLeft(_.currentSlide);
		_.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
		_.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
		_.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
		if (_.options.verticalSwiping === true) {
			_.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
		}
		swipeDirection = _.swipeDirection();
		if (swipeDirection === 'vertical') {
			return;
		}
		if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
			event.preventDefault();
		}
		positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
		if (_.options.verticalSwiping === true) {
			positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
		}
		swipeLength = _.touchObject.swipeLength;
		_.touchObject.edgeHit = false;
		if (_.options.infinite === false) {
			if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
				swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
				_.touchObject.edgeHit = true;
			}
		}
		if (_.options.vertical === false) {
			_.swipeLeft = curLeft + swipeLength * positionOffset;
		} else {
			_.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
		}
		if (_.options.verticalSwiping === true) {
			_.swipeLeft = curLeft + swipeLength * positionOffset;
		}
		if (_.options.fade === true || _.options.touchMove === false) {
			return false;
		}
		if (_.animating === true) {
			_.swipeLeft = null;
			return false;
		}
		_.setCSS(_.swipeLeft);
	};
	Slick.prototype.swipeStart = function (event) {
		var _ = this,
			touches;
		_.interrupted = true;
		if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
			_.touchObject = {};
			return false;
		}
		if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
			touches = event.originalEvent.touches[0];
		}
		_.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
		_.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
		_.dragging = true;
	};
	Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
		var _ = this;
		if (_.$slidesCache !== null) {
			_.unload();
			_.$slideTrack.children(this.options.slide).detach();
			_.$slidesCache.appendTo(_.$slideTrack);
			_.reinit();
		}
	};
	Slick.prototype.unload = function () {
		var _ = this;
		$('.slick-cloned', _.$slider).remove();
		if (_.$dots) {
			_.$dots.remove();
		}
		if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
			_.$prevArrow.remove();
		}
		if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
			_.$nextArrow.remove();
		}
		_.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
	};
	Slick.prototype.unslick = function (fromBreakpoint) {
		var _ = this;
		_.$slider.trigger('unslick', [_, fromBreakpoint]);
		_.destroy();
	};
	Slick.prototype.updateArrows = function () {
		var _ = this,
			centerOffset;
		centerOffset = Math.floor(_.options.slidesToShow / 2);
		if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
			_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
			_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
			if (_.currentSlide === 0) {
				_.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
				_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
			} else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
				_.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
				_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
			} else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
				_.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
				_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
			}
		}
	};
	Slick.prototype.updateDots = function () {
		var _ = this;
		if (_.$dots !== null) {
			_.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true');
			_.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false');
		}
	};
	Slick.prototype.visibility = function () {
		var _ = this;
		if (_.options.autoplay) {
			if (document[_.hidden]) {
				_.interrupted = true;
			} else {
				_.interrupted = false;
			}
		}
	};
	$.fn.slick = function () {
		var _ = this,
			opt = arguments[0],
			args = Array.prototype.slice.call(arguments, 1),
			l = _.length,
			i, ret;
		for (i = 0; i < l; i++) {
			if (typeof opt == 'object' || typeof opt == 'undefined')
				_[i].slick = new Slick(_[i], opt);
			else
				ret = _[i].slick[opt].apply(_[i].slick, args);
			if (typeof ret != 'undefined') return ret;
		}
		return _;
	};
}));
! function (i) {
	function e(i) {
		return i.timeInterval = setInterval(function () {
			i.callbackFunction(i)
		}, i.blinkInterval), i.timeInterval
	}

	function t(t, n, l, o) {
		if (t.mftTitleBlink[o]) {
			var r, a, c, s = {},
				d = (new Date).getTime();
			switch (t.mftTitleAltText[o]) {
				case "none":
					s = n.mftTitleAltText[o];
					break;
				case "":
					s = n.mftTitleAltText[o];
					break;
				default:
					s = t.mftTitleAltText[o]
			}
			c = function (e) {
				i(document).prop("title") == e.oldTitle ? i(document).prop("title", e.newTitle) : i(document).prop("title", e.oldTitle)
			}, l[o] = {
				oldTitle: i(document).prop("title"),
				newTitle: s,
				blinkInterval: t.mftTitleBlinkInterval[o],
				timeInterval: 0,
				now: a,
				then: d,
				delta: r,
				callbackFunction: c
			}, l[o].timeInterval = e(l[o])
		}
	}

	function n(i, e, t) {
		i.mftTitleBlink[t] && void 0 !== e[t] && e[t].timeInterval > 0 && clearInterval(e[t].timeInterval)
	}

	function l(t, n, l, o) {
		if (t.mftFaviconBlink[o]) {
			var r, a, c, s = {},
				d = {
					"apple-touch-icon-precomposed": i('link[rel="apple-touch-icon-precomposed"]').attr("href"),
					icon: i('link[rel="icon"]').attr("href"),
					"shortcut icon": i('link[rel="shortcut icon"]').attr("href")
				},
				f = (new Date).getTime();
			switch (t.mftFaviconAltIcon[o]) {
				case "none":
					s = n.mftFaviconAltIcon[o];
					break;
				case "":
					s = n.mftFaviconAltIcon[o];
					break;
				default:
					s = t.mftFaviconAltIcon[o]
			}
			c = function (e) {
				if (Object.keys(e.oldFavicon).length > 0)
					for (var t in e.oldFavicon) e.oldFavicon.hasOwnProperty(t) && (i('link[rel="' + t + '"]').attr("href") == e.oldFavicon[t] ? i('link[rel="' + t + '"]').attr("href", e.newFavicon[t]) : i('link[rel="' + t + '"]').attr("href") == e.newFavicon[t] && i('link[rel="' + t + '"]').attr("href", e.oldFavicon[t]))
			}, l[o] = {
				oldFavicon: d,
				newFavicon: s,
				blinkInterval: t.mftFaviconBlinkInterval[o],
				timeInterval: 0,
				now: a,
				then: f,
				delta: r,
				callbackFunction: c
			}, l[o].timeInterval = e(l[o])
		}
	}

	function o(i, e, t) {
		i.mftFaviconBlink[t] && void 0 !== e[t] && e[t].timeInterval > 0 && clearInterval(e[t].timeInterval)
	}

	function r(t, n, l, o) {
		if (t.mftTitleMarquee[o]) {
			var r, a, c, s, d = (new Date).getTime(),
				f = i(document).prop("title").split("");
			switch (f.push(" "), t.mftTitleMarqueeDir[o]) {
				case "left":
					r = function (i) {
						i.push(i.shift())
					};
					break;
				case "right":
					r = function (i) {
						i.unshift(i.pop())
					}
			}
			s = function (e) {
				e.shifted(e.myText), i(document).prop("title", e.myText.join(""))
			}, l[o] = {
				shifted: r,
				blinkInterval: t.mftTitleMarqueeDelay[o],
				timeInterval: 0,
				myText: f,
				now: c,
				then: d,
				delta: a,
				callbackFunction: s
			}, l[o].timeInterval = e(l[o])
		}
	}

	function a(i, e, t) {
		i.mftTitleMarquee[t] && void 0 !== e[t] && e[t].timeInterval > 0 && clearInterval(e[t].timeInterval)
	}
	var c = [],
		s = {
			init: function (e) {
				var s = {
						mftMissYou: !0,
						mftMissYouTitle: "Hey! I miss you!",
						mftMissYouFavicon: {
							"apple-touch-icon-precomposed": "",
							icon: "",
							"shortcut icon": ""
						},
						mftTitleBlink: {
							visible: !1,
							hidden: !1
						},
						mftTitleBlinkInterval: {
							visible: 1e3,
							hidden: 1e3
						},
						mftTitleAltText: {
							visible: "\ufeff",
							hidden: "\ufeff"
						},
						mftFaviconBlink: {
							visible: !1,
							hidden: !1
						},
						mftFaviconBlinkInterval: {
							visible: 1e3,
							hidden: 1e3
						},
						mftFaviconAltIcon: {
							visible: {
								"apple-touch-icon-precomposed": "",
								icon: "",
								"shortcut icon": ""
							},
							hidden: {
								"apple-touch-icon-precomposed": "",
								icon: "",
								"shortcut icon": ""
							}
						},
						mftTitleMarquee: {
							visible: !1,
							hidden: !1
						},
						mftTitleMarqueeDir: {
							visible: "left",
							hidden: "left"
						},
						mftTitleMarqueeDelay: {
							visible: 200,
							hidden: 500
						}
					},
					d = i.extend({}, s, e),
					f = i(document).prop("title"),
					v = {
						"apple-touch-icon-precomposed": i('link[rel="apple-touch-icon-precomposed"]').attr("href"),
						icon: i('link[rel="icon"]').attr("href"),
						"shortcut icon": i('link[rel="shortcut icon"]').attr("href")
					},
					m = {
						visible: {},
						hidden: {}
					},
					u = {
						visible: {},
						hidden: {}
					},
					h = {
						visible: {},
						hidden: {}
					};
				for (var p in d) d.hasOwnProperty(p) && "mftMissYou" != p && "mftMissYouTitle" != p && ("string" == typeof d[p] || "number" == typeof d[p] ? d[p] = {
					visible: d[p],
					hidden: d[p]
				} : i.isArray(d[p]) && (d[p] = {
					visible: d[p][0],
					hidden: d[p][1]
				}));
				return d.mftTitleMarquee.visible ? r(d, s, h.visible, "visible") : d.mftTitleBlink.visible && t(d, s, m.visible, "visible"), l(d, s, u.visible, "visible"), i(document).on("visibilitychange", function () {
					if (i(document).prop("hidden")) {
						if (d.mftMissYou && ("" !== d.mftMissYouTitle ? i(document).prop("title", d.mftMissYouTitle) : i(document).prop("title", s.mftMissYouTitle), Object.keys(d.mftMissYouFavicon).length > 0))
							for (var e in d.mftMissYouFavicon) d.mftMissYouFavicon.hasOwnProperty(e) && i('link[rel="' + e + '"]').attr("href", d.mftMissYouFavicon[e]);
						n(d, m.visible, "visible"), o(d, u.visible, "visible"), a(d, h.visible, "visible"), d.mftTitleMarquee.hidden ? r(d, s, h.hidden, "hidden") : d.mftTitleBlink.hidden && t(d, s, m.hidden, "hidden"), l(d, s, u.hidden, "hidden")
					} else {
						if (i(document).prop("title", f), Object.keys(v).length > 0)
							for (var c in v) v.hasOwnProperty(c) && i('link[rel="' + c + '"]').attr("href", v[c]);
						n(d, m.hidden, "hidden"), o(d, u.hidden, "hidden"), a(d, h.hidden, "hidden"), d.mftTitleMarquee.visible ? r(d, s, h.visible, "visible") : d.mftTitleBlink.visible && t(d, s, m.visible, "visible"), l(d, s, u.visible, "visible")
					}
				}), i(document).data("mfancytitle", {
					settings: d,
					origTitle: f,
					origFavicon: v,
					titleBlinkOptions: m,
					faviconBlinkOptions: u,
					titleMarqueeOptions: h
				}), c = i(document).data("mfancytitle")
			},
			update: function (e) {
				var t = i.extend({}, c.settings, e);
				i.mFancyTitle("destroy"), i.mFancyTitle("init", t)
			},
			destroy: function () {
				n(c.settings, c.titleBlinkOptions.visible, "visible"), o(c.settings, c.titleBlinkOptions.visible, "visible"), a(c.settings, c.titleBlinkOptions.visible, "visible"), n(c.settings, c.titleBlinkOptions.hidden, "hidden"), o(c.settings, c.titleBlinkOptions.hidden, "hidden"), a(c.settings, c.titleBlinkOptions.hidden, "hidden"), i.removeData(c, "mfancytitle"), this.unbind(), this.element = null
			}
		};
	i.mFancyTitle = function (e) {
		return s[e] ? s[e].apply(i(document), Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void i.error("Method " + e + " does not exist on jQuery.mFancyTitle ") : s.init.apply(i(document), arguments)
	}
}(jQuery);