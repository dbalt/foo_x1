// Generated from Foo.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FooListener = require('./FooListener').FooListener;
var grammarFileName = "Foo.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0017]\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003 \n\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003(",
    "\n\u0003\f\u0003\u000e\u0003+\u000b\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u00045\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007",
    "\u0005;\n\u0005\f\u0005\u000e\u0005>\u000b\u0005\u0003\u0005\u0005\u0005",
    "A\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006F\n\u0006\f",
    "\u0006\u000e\u0006I\u000b\u0006\u0003\u0006\u0005\u0006L\n\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007R\n\u0007\f\u0007",
    "\u000e\u0007U\u000b\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0002\u0003\u0004\n\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0002\u0005\u0003\u0002\u0007\u0007\u0003\u0002\f\u0012\u0003",
    "\u0002\u0013\u0014\u0002^\u0002\u0012\u0003\u0002\u0002\u0002\u0004",
    "\u001f\u0003\u0002\u0002\u0002\u00064\u0003\u0002\u0002\u0002\b@\u0003",
    "\u0002\u0002\u0002\nK\u0003\u0002\u0002\u0002\fM\u0003\u0002\u0002\u0002",
    "\u000eX\u0003\u0002\u0002\u0002\u0010Z\u0003\u0002\u0002\u0002\u0012",
    "\u0013\u0005\u0004\u0003\u0002\u0013\u0003\u0003\u0002\u0002\u0002\u0014",
    "\u0015\b\u0003\u0001\u0002\u0015 \u0005\u0006\u0004\u0002\u0016\u0017",
    "\u0007\u000b\u0002\u0002\u0017\u0018\u0007\u0003\u0002\u0002\u0018\u0019",
    "\u0005\u0004\u0003\u0002\u0019\u001a\u0007\u0004\u0002\u0002\u001a ",
    "\u0003\u0002\u0002\u0002\u001b\u001c\u0007\u0003\u0002\u0002\u001c\u001d",
    "\u0005\u0004\u0003\u0002\u001d\u001e\u0007\u0004\u0002\u0002\u001e ",
    "\u0003\u0002\u0002\u0002\u001f\u0014\u0003\u0002\u0002\u0002\u001f\u0016",
    "\u0003\u0002\u0002\u0002\u001f\u001b\u0003\u0002\u0002\u0002 )\u0003",
    "\u0002\u0002\u0002!\"\f\u0005\u0002\u0002\"#\u0007\t\u0002\u0002#(\u0005",
    "\u0004\u0003\u0006$%\f\u0004\u0002\u0002%&\u0007\n\u0002\u0002&(\u0005",
    "\u0004\u0003\u0005\'!\u0003\u0002\u0002\u0002\'$\u0003\u0002\u0002\u0002",
    "(+\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*\u0003\u0002",
    "\u0002\u0002*\u0005\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002",
    ",-\u0005\b\u0005\u0002-.\u0005\u000e\b\u0002./\u0005\n\u0006\u0002/",
    "5\u0003\u0002\u0002\u000201\u0005\b\u0005\u000212\u0005\u0010\t\u0002",
    "23\u0005\f\u0007\u000235\u0003\u0002\u0002\u00024,\u0003\u0002\u0002",
    "\u000240\u0003\u0002\u0002\u00025\u0007\u0003\u0002\u0002\u00026A\u0007",
    "\u0015\u0002\u000278\u0007\u0005\u0002\u00028<\u0007\u0015\u0002\u0002",
    "9;\u0007\u0015\u0002\u0002:9\u0003\u0002\u0002\u0002;>\u0003\u0002\u0002",
    "\u0002<:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=?\u0003\u0002",
    "\u0002\u0002><\u0003\u0002\u0002\u0002?A\u0007\u0006\u0002\u0002@6\u0003",
    "\u0002\u0002\u0002@7\u0003\u0002\u0002\u0002A\t\u0003\u0002\u0002\u0002",
    "BL\u0007\u0016\u0002\u0002CG\u0007\u0007\u0002\u0002DF\n\u0002\u0002",
    "\u0002ED\u0003\u0002\u0002\u0002FI\u0003\u0002\u0002\u0002GE\u0003\u0002",
    "\u0002\u0002GH\u0003\u0002\u0002\u0002HJ\u0003\u0002\u0002\u0002IG\u0003",
    "\u0002\u0002\u0002JL\u0007\u0007\u0002\u0002KB\u0003\u0002\u0002\u0002",
    "KC\u0003\u0002\u0002\u0002L\u000b\u0003\u0002\u0002\u0002MN\u0007\u0003",
    "\u0002\u0002NS\u0005\n\u0006\u0002OP\u0007\b\u0002\u0002PR\u0005\n\u0006",
    "\u0002QO\u0003\u0002\u0002\u0002RU\u0003\u0002\u0002\u0002SQ\u0003\u0002",
    "\u0002\u0002ST\u0003\u0002\u0002\u0002TV\u0003\u0002\u0002\u0002US\u0003",
    "\u0002\u0002\u0002VW\u0007\u0004\u0002\u0002W\r\u0003\u0002\u0002\u0002",
    "XY\t\u0003\u0002\u0002Y\u000f\u0003\u0002\u0002\u0002Z[\t\u0004\u0002",
    "\u0002[\u0011\u0003\u0002\u0002\u0002\u000b\u001f\')4<@GKS"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [null, "'('", "')'", "'['", "']'", "'\"'", "','", null,
    null, "'NOT'", "'='", "'!='", "'>'", "'>='", "'<='",
    "'<'"];

var symbolicNames = [null, null, null, null, null, null, null, "AND", "OR",
    "NOT", "OP_EQ", "OP_NOT_EQ", "OP_GR", "OP_GR_EQ",
    "OP_LS_EQ", "OP_LS", "OP_RE", "OP_IN_LST", "OP_NOT_IN_LST",
    "WORD", "NUMBER", "WS"];

var ruleNames = ["eval", "expr", "unit", "fld", "val", "val_lst", "op_single",
    "op_lst"];

function FooParser(input) {
    antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FooParser.prototype = Object.create(antlr4.Parser.prototype);
FooParser.prototype.constructor = FooParser;

Object.defineProperty(FooParser.prototype, "atn", {
    get: function () {
        return atn;
    }
});

FooParser.EOF = antlr4.Token.EOF;
FooParser.T__0 = 1;
FooParser.T__1 = 2;
FooParser.T__2 = 3;
FooParser.T__3 = 4;
FooParser.T__4 = 5;
FooParser.T__5 = 6;
FooParser.AND = 7;
FooParser.OR = 8;
FooParser.NOT = 9;
FooParser.OP_EQ = 10;
FooParser.OP_NOT_EQ = 11;
FooParser.OP_GR = 12;
FooParser.OP_GR_EQ = 13;
FooParser.OP_LS_EQ = 14;
FooParser.OP_LS = 15;
FooParser.OP_RE = 16;
FooParser.OP_IN_LST = 17;
FooParser.OP_NOT_IN_LST = 18;
FooParser.WORD = 19;
FooParser.NUMBER = 20;
FooParser.WS = 21;

FooParser.RULE_eval = 0;
FooParser.RULE_expr = 1;
FooParser.RULE_unit = 2;
FooParser.RULE_fld = 3;
FooParser.RULE_val = 4;
FooParser.RULE_val_lst = 5;
FooParser.RULE_op_single = 6;
FooParser.RULE_op_lst = 7;


function EvalContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FooParser.RULE_eval;
    return this;
}

EvalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EvalContext.prototype.constructor = EvalContext;

EvalContext.prototype.expr = function () {
    return this.getTypedRuleContext(ExprContext, 0);
};

EvalContext.prototype.enterRule = function (listener) {
    if (listener instanceof FooListener) {
        listener.enterEval(this);
    }
};

EvalContext.prototype.exitRule = function (listener) {
    if (listener instanceof FooListener) {
        listener.exitEval(this);
    }
};


FooParser.EvalContext = EvalContext;

FooParser.prototype.eval = function () {

    var localctx = new EvalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FooParser.RULE_eval);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        this.expr(0);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FooParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.unit = function () {
    return this.getTypedRuleContext(UnitContext, 0);
};

ExprContext.prototype.NOT = function () {
    return this.getToken(FooParser.NOT, 0);
};

ExprContext.prototype.expr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext, i);
    }
};

ExprContext.prototype.AND = function () {
    return this.getToken(FooParser.AND, 0);
};

ExprContext.prototype.OR = function () {
    return this.getToken(FooParser.OR, 0);
};

ExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof FooListener) {
        listener.enterExpr(this);
    }
};

ExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof FooListener) {
        listener.exitExpr(this);
    }
};


FooParser.prototype.expr = function (_p) {
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, FooParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case FooParser.T__2:
            case FooParser.WORD:
                this.state = 19;
                this.unit();
                break;
            case FooParser.NOT:
                this.state = 20;
                this.match(FooParser.NOT);
                this.state = 21;
                this.match(FooParser.T__0);
                this.state = 22;
                this.expr(0);
                this.state = 23;
                this.match(FooParser.T__1);
                break;
            case FooParser.T__0:
                this.state = 25;
                this.match(FooParser.T__0);
                this.state = 26;
                this.expr(0);
                this.state = 27;
                this.match(FooParser.T__1);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 39;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 2, this._ctx)
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 37;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
                switch (la_) {
                    case 1:
                        localctx = new ExprContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, FooParser.RULE_expr);
                        this.state = 31;
                        if (!(this.precpred(this._ctx, 3))) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                        }
                        this.state = 32;
                        this.match(FooParser.AND);
                        this.state = 33;
                        this.expr(4);
                        break;

                    case 2:
                        localctx = new ExprContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, FooParser.RULE_expr);
                        this.state = 34;
                        if (!(this.precpred(this._ctx, 2))) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                        }
                        this.state = 35;
                        this.match(FooParser.OR);
                        this.state = 36;
                        this.expr(3);
                        break;

                }
            }
            this.state = 41;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
        }

    } catch (error) {
        if (error instanceof antlr4.error.RecognitionException) {
            localctx.exception = error;
            this._errHandler.reportError(this, error);
            this._errHandler.recover(this, error);
        } else {
            throw error;
        }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function UnitContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FooParser.RULE_unit;
    return this;
}

UnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnitContext.prototype.constructor = UnitContext;

UnitContext.prototype.fld = function () {
    return this.getTypedRuleContext(FldContext, 0);
};

UnitContext.prototype.op_single = function () {
    return this.getTypedRuleContext(Op_singleContext, 0);
};

UnitContext.prototype.val = function () {
    return this.getTypedRuleContext(ValContext, 0);
};

UnitContext.prototype.op_lst = function () {
    return this.getTypedRuleContext(Op_lstContext, 0);
};

UnitContext.prototype.val_lst = function () {
    return this.getTypedRuleContext(Val_lstContext, 0);
};

UnitContext.prototype.enterRule = function (listener) {
    if (listener instanceof FooListener) {
        listener.enterUnit(this);
    }
};

UnitContext.prototype.exitRule = function (listener) {
    if (listener instanceof FooListener) {
        listener.exitUnit(this);
    }
};


FooParser.UnitContext = UnitContext;

FooParser.prototype.unit = function () {

    var localctx = new UnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FooParser.RULE_unit);
    try {
        this.state = 50;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 3, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 42;
                this.fld();
                this.state = 43;
                this.op_single();
                this.state = 44;
                this.val();
                break;

            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 46;
                this.fld();
                this.state = 47;
                this.op_lst();
                this.state = 48;
                this.val_lst();
                break;

        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FldContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FooParser.RULE_fld;
    return this;
}

FldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FldContext.prototype.constructor = FldContext;

FldContext.prototype.WORD = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FooParser.WORD);
    } else {
        return this.getToken(FooParser.WORD, i);
    }
};


FldContext.prototype.enterRule = function (listener) {
    if (listener instanceof FooListener) {
        listener.enterFld(this);
    }
};

FldContext.prototype.exitRule = function (listener) {
    if (listener instanceof FooListener) {
        listener.exitFld(this);
    }
};


FooParser.FldContext = FldContext;

FooParser.prototype.fld = function () {

    var localctx = new FldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FooParser.RULE_fld);
    var _la = 0; // Token type
    try {
        this.state = 62;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case FooParser.WORD:
                this.enterOuterAlt(localctx, 1);
                this.state = 52;
                this.match(FooParser.WORD);
                break;
            case FooParser.T__2:
                this.enterOuterAlt(localctx, 2);
                this.state = 53;
                this.match(FooParser.T__2);
                this.state = 54;
                this.match(FooParser.WORD);
                this.state = 58;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === FooParser.WORD) {
                    this.state = 55;
                    this.match(FooParser.WORD);
                    this.state = 60;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 61;
                this.match(FooParser.T__3);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FooParser.RULE_val;
    return this;
}

ValContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValContext.prototype.constructor = ValContext;

ValContext.prototype.NUMBER = function () {
    return this.getToken(FooParser.NUMBER, 0);
};

ValContext.prototype.enterRule = function (listener) {
    if (listener instanceof FooListener) {
        listener.enterVal(this);
    }
};

ValContext.prototype.exitRule = function (listener) {
    if (listener instanceof FooListener) {
        listener.exitVal(this);
    }
};


FooParser.ValContext = ValContext;

FooParser.prototype.val = function () {

    var localctx = new ValContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FooParser.RULE_val);
    var _la = 0; // Token type
    try {
        this.state = 73;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case FooParser.NUMBER:
                this.enterOuterAlt(localctx, 1);
                this.state = 64;
                this.match(FooParser.NUMBER);
                break;
            case FooParser.T__4:
                this.enterOuterAlt(localctx, 2);
                this.state = 65;
                this.match(FooParser.T__4);
                this.state = 69;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FooParser.T__0) | (1 << FooParser.T__1) | (1 << FooParser.T__2) | (1 << FooParser.T__3) | (1 << FooParser.T__5) | (1 << FooParser.AND) | (1 << FooParser.OR) | (1 << FooParser.NOT) | (1 << FooParser.OP_EQ) | (1 << FooParser.OP_NOT_EQ) | (1 << FooParser.OP_GR) | (1 << FooParser.OP_GR_EQ) | (1 << FooParser.OP_LS_EQ) | (1 << FooParser.OP_LS) | (1 << FooParser.OP_RE) | (1 << FooParser.OP_IN_LST) | (1 << FooParser.OP_NOT_IN_LST) | (1 << FooParser.WORD) | (1 << FooParser.NUMBER) | (1 << FooParser.WS))) !== 0)) {
                    this.state = 66;
                    _la = this._input.LA(1);
                    if (_la <= 0 || _la === FooParser.T__4) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 71;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 72;
                this.match(FooParser.T__4);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Val_lstContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FooParser.RULE_val_lst;
    return this;
}

Val_lstContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Val_lstContext.prototype.constructor = Val_lstContext;

Val_lstContext.prototype.val = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ValContext);
    } else {
        return this.getTypedRuleContext(ValContext, i);
    }
};

Val_lstContext.prototype.enterRule = function (listener) {
    if (listener instanceof FooListener) {
        listener.enterVal_lst(this);
    }
};

Val_lstContext.prototype.exitRule = function (listener) {
    if (listener instanceof FooListener) {
        listener.exitVal_lst(this);
    }
};


FooParser.Val_lstContext = Val_lstContext;

FooParser.prototype.val_lst = function () {

    var localctx = new Val_lstContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FooParser.RULE_val_lst);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.match(FooParser.T__0);
        this.state = 76;
        this.val();
        this.state = 81;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === FooParser.T__5) {
            this.state = 77;
            this.match(FooParser.T__5);
            this.state = 78;
            this.val();
            this.state = 83;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 84;
        this.match(FooParser.T__1);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Op_singleContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FooParser.RULE_op_single;
    return this;
}

Op_singleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Op_singleContext.prototype.constructor = Op_singleContext;

Op_singleContext.prototype.OP_EQ = function () {
    return this.getToken(FooParser.OP_EQ, 0);
};

Op_singleContext.prototype.OP_NOT_EQ = function () {
    return this.getToken(FooParser.OP_NOT_EQ, 0);
};

Op_singleContext.prototype.OP_GR = function () {
    return this.getToken(FooParser.OP_GR, 0);
};

Op_singleContext.prototype.OP_GR_EQ = function () {
    return this.getToken(FooParser.OP_GR_EQ, 0);
};

Op_singleContext.prototype.OP_LS = function () {
    return this.getToken(FooParser.OP_LS, 0);
};

Op_singleContext.prototype.OP_LS_EQ = function () {
    return this.getToken(FooParser.OP_LS_EQ, 0);
};

Op_singleContext.prototype.OP_RE = function () {
    return this.getToken(FooParser.OP_RE, 0);
};

Op_singleContext.prototype.enterRule = function (listener) {
    if (listener instanceof FooListener) {
        listener.enterOp_single(this);
    }
};

Op_singleContext.prototype.exitRule = function (listener) {
    if (listener instanceof FooListener) {
        listener.exitOp_single(this);
    }
};


FooParser.Op_singleContext = Op_singleContext;

FooParser.prototype.op_single = function () {

    var localctx = new Op_singleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FooParser.RULE_op_single);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        _la = this._input.LA(1);
        if (!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FooParser.OP_EQ) | (1 << FooParser.OP_NOT_EQ) | (1 << FooParser.OP_GR) | (1 << FooParser.OP_GR_EQ) | (1 << FooParser.OP_LS_EQ) | (1 << FooParser.OP_LS) | (1 << FooParser.OP_RE))) !== 0))) {
            this._errHandler.recoverInline(this);
        }
        else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Op_lstContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FooParser.RULE_op_lst;
    return this;
}

Op_lstContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Op_lstContext.prototype.constructor = Op_lstContext;

Op_lstContext.prototype.OP_IN_LST = function () {
    return this.getToken(FooParser.OP_IN_LST, 0);
};

Op_lstContext.prototype.OP_NOT_IN_LST = function () {
    return this.getToken(FooParser.OP_NOT_IN_LST, 0);
};

Op_lstContext.prototype.enterRule = function (listener) {
    if (listener instanceof FooListener) {
        listener.enterOp_lst(this);
    }
};

Op_lstContext.prototype.exitRule = function (listener) {
    if (listener instanceof FooListener) {
        listener.exitOp_lst(this);
    }
};


FooParser.Op_lstContext = Op_lstContext;

FooParser.prototype.op_lst = function () {

    var localctx = new Op_lstContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FooParser.RULE_op_lst);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        _la = this._input.LA(1);
        if (!(_la === FooParser.OP_IN_LST || _la === FooParser.OP_NOT_IN_LST)) {
            this._errHandler.recoverInline(this);
        }
        else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};


FooParser.prototype.sempred = function (localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
        case 1:
            return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
    }
};

FooParser.prototype.expr_sempred = function (localctx, predIndex) {
    switch (predIndex) {
        case 0:
            return this.precpred(this._ctx, 3);
        case 1:
            return this.precpred(this._ctx, 2);
        default:
            throw "No predicate with index:" + predIndex;
    }
};

FooParser.ExprContext = ExprContext

exports.FooParser = FooParser;

