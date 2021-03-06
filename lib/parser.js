if (typeof module === 'object' && typeof define !== 'function') {
	var define = function (factory) {
		module.exports = factory(require, exports, module);
	};
}
define(function(require, exports, module) {
  var configuration = require('./configuration');

  var parser = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { tree: peg$parsetree },
        peg$startRuleFunction  = peg$parsetree,

        peg$c0 = peg$FAILED,
        peg$c1 = null,
        peg$c2 = function(generator) {
                return generator;
              },
        peg$c3 = function(nodes, format) {
              return createTree(format, nodes);
            },
        peg$c4 = [],
        peg$c5 = function(value) {
                    return value;
                  },
        peg$c6 = function(first, rest) {
                return [first].concat(rest);
              },
        peg$c7 = function(values) {
              return values !== null ? values : [];
            },
        peg$c8 = function(alias, type, arrayIdentifier) {
              return createElement(type, alias, undefined, arrayIdentifier);
            },
        peg$c9 = function(content) {
                return content;
              },
        peg$c10 = function(alias, children, arrayIdentifier) {
              var type = {
                name: "object"
              };

              return createElement(type, alias, children, arrayIdentifier,"test");
            },
        peg$c11 = { type: "other", description: "alias" },
        peg$c12 = function(firstQuote, value, lastQuote) {
              if (firstQuote != lastQuote) {
                throw new Error("Unterminated string constant.");
              }
              return value.join("");
            },
        peg$c13 = /^[0-9a-zA-Z]/,
        peg$c14 = { type: "class", value: "[0-9a-zA-Z]", description: "[0-9a-zA-Z]" },
        peg$c15 = { type: "other", description: "type" },
        peg$c16 = function(firstQuote, chars, lastQuote) {
              if (firstQuote != lastQuote) {
                throw new Error("Unterminated string constant.");
              }
              return {
                name: "string",
                value: chars.join("")
              };
            },
        peg$c17 = function(chars) {

              if(chars === null){
                throw new Error("Type expected.");
              }
              return {
                name: chars.join("")
              };
            },
        peg$c18 = function(count) {
              return {
                isComplexType: true,
                count: count
              }
            },
        peg$c19 = function(count) {
              return {
                isComplexType: false,
                count: count
              }
            },
        peg$c20 = { type: "other", description: "simple type array identifier" },
        peg$c21 = "@",
        peg$c22 = { type: "literal", value: "@", description: "\"@\"" },
        peg$c23 = { type: "other", description: "complex type array identifier" },
        peg$c24 = "*",
        peg$c25 = { type: "literal", value: "*", description: "\"*\"" },
        peg$c26 = { type: "other", description: "literal value" },
        peg$c27 = /^[0-9A-Za-z_ ]/,
        peg$c28 = { type: "class", value: "[0-9A-Za-z_ ]", description: "[0-9A-Za-z_ ]" },
        peg$c29 = /^[0-9]/,
        peg$c30 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c31 = function(numbers) {
              return parseInt(numbers.join(""));
            },
        peg$c32 = { type: "other", description: "colon (:)" },
        peg$c33 = ":",
        peg$c34 = { type: "literal", value: ":", description: "\":\"" },
        peg$c35 = " ",
        peg$c36 = { type: "literal", value: " ", description: "\" \"" },
        peg$c37 = { type: "other", description: "format specifier (=)" },
        peg$c38 = "=",
        peg$c39 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c40 = { type: "other", description: "generator" },
        peg$c41 = function(chars) {
              return chars.join("")
            },
        peg$c42 = { type: "other", description: "seperator (,)" },
        peg$c43 = ",",
        peg$c44 = { type: "literal", value: ",", description: "\",\"" },
        peg$c45 = { type: "other", description: "quote (')" },
        peg$c46 = "'",
        peg$c47 = { type: "literal", value: "'", description: "\"'\"" },
        peg$c48 = { type: "other", description: "'('" },
        peg$c49 = "(",
        peg$c50 = { type: "literal", value: "(", description: "\"(\"" },
        peg$c51 = { type: "other", description: "')'" },
        peg$c52 = ")",
        peg$c53 = { type: "literal", value: ")", description: "\")\"" },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parsetree() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseelementArray();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseequals();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsegenerator();
          if (s4 !== peg$FAILED) {
            peg$reportedPos = s2;
            s3 = peg$c2(s4);
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$c0;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$c0;
        }
        if (s2 === peg$FAILED) {
          s2 = peg$c1;
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c3(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseelementArray() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parseelement();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$currPos;
        s5 = peg$parseseparator();
        if (s5 !== peg$FAILED) {
          s6 = peg$parseelement();
          if (s6 !== peg$FAILED) {
            peg$reportedPos = s4;
            s5 = peg$c5(s6);
            s4 = s5;
          } else {
            peg$currPos = s4;
            s4 = peg$c0;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$c0;
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$currPos;
          s5 = peg$parseseparator();
          if (s5 !== peg$FAILED) {
            s6 = peg$parseelement();
            if (s6 !== peg$FAILED) {
              peg$reportedPos = s4;
              s5 = peg$c5(s6);
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$c0;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$c0;
          }
        }
        if (s3 !== peg$FAILED) {
          peg$reportedPos = s1;
          s2 = peg$c6(s2, s3);
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$c0;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 === peg$FAILED) {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c7(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseelement() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parsealias();
      if (s1 === peg$FAILED) {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsetype();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsesimpleTypeArray();
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c8(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsealias();
        if (s1 === peg$FAILED) {
          s1 = peg$c1;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = peg$parsebegin_child();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseelementArray();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseend_child();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s2;
                s3 = peg$c9(s4);
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$c0;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$c0;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$c0;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parsecomplexTypeArray();
            if (s3 === peg$FAILED) {
              s3 = peg$c1;
            }
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c10(s1, s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      }

      return s0;
    }

    function peg$parsealias() {
      var s0, s1, s2, s3, s4;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parsequote();
      if (s1 === peg$FAILED) {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseliteral();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsequote();
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsecolon();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c12(s1, s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c11); }
      }

      return s0;
    }

    function peg$parseidentifier() {
      var s0, s1;

      s0 = [];
      if (peg$c13.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c14); }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c13.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c14); }
          }
        }
      } else {
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsetype() {
      var s0, s1, s2, s3;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parsequote();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseliteral();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsequote();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c16(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseidentifier();
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c17(s1);
        }
        s0 = s1;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c15); }
      }

      return s0;
    }

    function peg$parsecomplexTypeArray() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseastrix();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseinteger();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c18(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsesimpleTypeArray() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseat();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseinteger();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c19(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseat() {
      var s0, s1;

      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 64) {
        s0 = peg$c21;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c22); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c20); }
      }

      return s0;
    }

    function peg$parseastrix() {
      var s0, s1;

      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 42) {
        s0 = peg$c24;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c25); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c23); }
      }

      return s0;
    }

    function peg$parseliteral() {
      var s0, s1;

      peg$silentFails++;
      s0 = [];
      if (peg$c27.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c28); }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c27.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c28); }
          }
        }
      } else {
        s0 = peg$c0;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c26); }
      }

      return s0;
    }

    function peg$parseinteger() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c29.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c30); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c29.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c30); }
          }
        }
      } else {
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c31(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsecolon() {
      var s0, s1;

      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 58) {
        s0 = peg$c33;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c34); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c32); }
      }

      return s0;
    }

    function peg$parsespace() {
      var s0, s1;

      s0 = [];
      if (input.charCodeAt(peg$currPos) === 32) {
        s1 = peg$c35;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c36); }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (input.charCodeAt(peg$currPos) === 32) {
            s1 = peg$c35;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c36); }
          }
        }
      } else {
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseequals() {
      var s0, s1;

      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 61) {
        s0 = peg$c38;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c39); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c37); }
      }

      return s0;
    }

    function peg$parsegenerator() {
      var s0, s1;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseidentifier();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c41(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c40); }
      }

      return s0;
    }

    function peg$parseseparator() {
      var s0, s1;

      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 44) {
        s0 = peg$c43;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c42); }
      }

      return s0;
    }

    function peg$parsequote() {
      var s0, s1;

      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 39) {
        s0 = peg$c46;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c47); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c45); }
      }

      return s0;
    }

    function peg$parsebegin_child() {
      var s0, s1;

      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 40) {
        s0 = peg$c49;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c50); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c48); }
      }

      return s0;
    }

    function peg$parseend_child() {
      var s0, s1;

      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 41) {
        s0 = peg$c52;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c53); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c51); }
      }

      return s0;
    }


      function createTree(key, nodes){
        return {
            parser: "scissr",
            generator: key !== null ? key : "json",
            nodes: nodes
        }
      }

      function createType(name){
        return {
          name: name
        };
      }

      function resolveType(type, array){
        if (type.value !== undefined) {
          return "string";
        }

        //var types = configuration.types;
        var baseType =  "string";

        //if (configuration.types[type.name] !== undefined) {
          // var result = types.filter(function(t){
          //   return t.name == type.name;
          // });




          if (configuration.types[type.name] !== undefined) {
            baseType = configuration.types[type.name].baseType;
          }
          else {
            if (type.name === "object" || array !== null && array.isComplexType == true) {
              baseType = "object";
            }

          }
        //};

        return baseType;
      }

      function createElement(type, alias, children, array, aa){

        var baseType = resolveType(type, array);

          var item = {
            type: type.name,
            baseType: baseType,
            isArray: false,
            count: 1,
            data: [],
          };
          if (type.value !== undefined) {
            item.value = type.value;
          }
          if(children !== null){
            item.nodes = children;
          }
          if (array !== null){
            item.isArray = true
            item.count = parseInt(array.count);
          }
          if(alias !== null){
            item.alias = alias;
          }
          else{
            if (item.isArray){
              item.alias = type.name + "Array";
            }
            else {
              item.alias = type.name;
            }
          }

          return item;

      }






    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();return {parse: parser.parse};});
