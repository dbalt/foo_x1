// Generated from Foo.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0017\u0085\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b@\n\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0005\tF\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011",
    "_\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012",
    "e\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0005\u0013s\n\u0013\u0003\u0014\u0006\u0014v\n\u0014\r",
    "\u0014\u000e\u0014w\u0003\u0015\u0006\u0015{\n\u0015\r\u0015\u000e\u0015",
    "|\u0003\u0016\u0006\u0016\u0080\n\u0016\r\u0016\u000e\u0016\u0081\u0003",
    "\u0016\u0003\u0016\u0002\u0002\u0017\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r",
    "\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\'\u0015)\u0016+\u0017\u0003\u0002\u0005\u0005\u0002C\\aac|\u0003\u0002",
    "2;\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002\u008c\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002",
    "\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002",
    "\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002",
    "\u0003-\u0003\u0002\u0002\u0002\u0005/\u0003\u0002\u0002\u0002\u0007",
    "1\u0003\u0002\u0002\u0002\t3\u0003\u0002\u0002\u0002\u000b5\u0003\u0002",
    "\u0002\u0002\r7\u0003\u0002\u0002\u0002\u000f?\u0003\u0002\u0002\u0002",
    "\u0011E\u0003\u0002\u0002\u0002\u0013G\u0003\u0002\u0002\u0002\u0015",
    "K\u0003\u0002\u0002\u0002\u0017M\u0003\u0002\u0002\u0002\u0019P\u0003",
    "\u0002\u0002\u0002\u001bR\u0003\u0002\u0002\u0002\u001dU\u0003\u0002",
    "\u0002\u0002\u001fX\u0003\u0002\u0002\u0002!^\u0003\u0002\u0002\u0002",
    "#d\u0003\u0002\u0002\u0002%r\u0003\u0002\u0002\u0002\'u\u0003\u0002",
    "\u0002\u0002)z\u0003\u0002\u0002\u0002+\u007f\u0003\u0002\u0002\u0002",
    "-.\u0007*\u0002\u0002.\u0004\u0003\u0002\u0002\u0002/0\u0007+\u0002",
    "\u00020\u0006\u0003\u0002\u0002\u000212\u0007]\u0002\u00022\b\u0003",
    "\u0002\u0002\u000234\u0007_\u0002\u00024\n\u0003\u0002\u0002\u00025",
    "6\u0007$\u0002\u00026\f\u0003\u0002\u0002\u000278\u0007.\u0002\u0002",
    "8\u000e\u0003\u0002\u0002\u00029:\u0007C\u0002\u0002:;\u0007P\u0002",
    "\u0002;@\u0007F\u0002\u0002<=\u0007c\u0002\u0002=>\u0007p\u0002\u0002",
    ">@\u0007f\u0002\u0002?9\u0003\u0002\u0002\u0002?<\u0003\u0002\u0002",
    "\u0002@\u0010\u0003\u0002\u0002\u0002AB\u0007Q\u0002\u0002BF\u0007T",
    "\u0002\u0002CD\u0007q\u0002\u0002DF\u0007t\u0002\u0002EA\u0003\u0002",
    "\u0002\u0002EC\u0003\u0002\u0002\u0002F\u0012\u0003\u0002\u0002\u0002",
    "GH\u0007P\u0002\u0002HI\u0007Q\u0002\u0002IJ\u0007V\u0002\u0002J\u0014",
    "\u0003\u0002\u0002\u0002KL\u0007?\u0002\u0002L\u0016\u0003\u0002\u0002",
    "\u0002MN\u0007#\u0002\u0002NO\u0007?\u0002\u0002O\u0018\u0003\u0002",
    "\u0002\u0002PQ\u0007@\u0002\u0002Q\u001a\u0003\u0002\u0002\u0002RS\u0007",
    "@\u0002\u0002ST\u0007?\u0002\u0002T\u001c\u0003\u0002\u0002\u0002UV",
    "\u0007>\u0002\u0002VW\u0007?\u0002\u0002W\u001e\u0003\u0002\u0002\u0002",
    "XY\u0007>\u0002\u0002Y \u0003\u0002\u0002\u0002Z[\u0007T\u0002\u0002",
    "[_\u0007G\u0002\u0002\\]\u0007t\u0002\u0002]_\u0007g\u0002\u0002^Z\u0003",
    "\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002_\"\u0003\u0002\u0002\u0002",
    "`a\u0007K\u0002\u0002ae\u0007P\u0002\u0002bc\u0007k\u0002\u0002ce\u0007",
    "p\u0002\u0002d`\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002e$",
    "\u0003\u0002\u0002\u0002fg\u0007P\u0002\u0002gh\u0007Q\u0002\u0002h",
    "i\u0007V\u0002\u0002ij\u0007\"\u0002\u0002jk\u0007K\u0002\u0002ks\u0007",
    "P\u0002\u0002lm\u0007p\u0002\u0002mn\u0007q\u0002\u0002no\u0007v\u0002",
    "\u0002op\u0007\"\u0002\u0002pq\u0007k\u0002\u0002qs\u0007p\u0002\u0002",
    "rf\u0003\u0002\u0002\u0002rl\u0003\u0002\u0002\u0002s&\u0003\u0002\u0002",
    "\u0002tv\t\u0002\u0002\u0002ut\u0003\u0002\u0002\u0002vw\u0003\u0002",
    "\u0002\u0002wu\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002x(\u0003",
    "\u0002\u0002\u0002y{\t\u0003\u0002\u0002zy\u0003\u0002\u0002\u0002{",
    "|\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002",
    "\u0002}*\u0003\u0002\u0002\u0002~\u0080\t\u0004\u0002\u0002\u007f~\u0003",
    "\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u007f\u0003",
    "\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0083\u0003",
    "\u0002\u0002\u0002\u0083\u0084\b\u0016\u0002\u0002\u0084,\u0003\u0002",
    "\u0002\u0002\u000b\u0002?E^drw|\u0081\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function FooLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

FooLexer.prototype = Object.create(antlr4.Lexer.prototype);
FooLexer.prototype.constructor = FooLexer;

Object.defineProperty(FooLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

FooLexer.EOF = antlr4.Token.EOF;
FooLexer.T__0 = 1;
FooLexer.T__1 = 2;
FooLexer.T__2 = 3;
FooLexer.T__3 = 4;
FooLexer.T__4 = 5;
FooLexer.T__5 = 6;
FooLexer.AND = 7;
FooLexer.OR = 8;
FooLexer.NOT = 9;
FooLexer.OP_EQ = 10;
FooLexer.OP_NOT_EQ = 11;
FooLexer.OP_GR = 12;
FooLexer.OP_GR_EQ = 13;
FooLexer.OP_LS_EQ = 14;
FooLexer.OP_LS = 15;
FooLexer.OP_RE = 16;
FooLexer.OP_IN_LST = 17;
FooLexer.OP_NOT_IN_LST = 18;
FooLexer.WORD = 19;
FooLexer.NUMBER = 20;
FooLexer.WS = 21;

FooLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

FooLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

FooLexer.prototype.literalNames = [ null, "'('", "')'", "'['", "']'", "'\"'", 
                                    "','", null, null, "'NOT'", "'='", "'!='", 
                                    "'>'", "'>='", "'<='", "'<'" ];

FooLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                     null, "AND", "OR", "NOT", "OP_EQ", 
                                     "OP_NOT_EQ", "OP_GR", "OP_GR_EQ", "OP_LS_EQ", 
                                     "OP_LS", "OP_RE", "OP_IN_LST", "OP_NOT_IN_LST", 
                                     "WORD", "NUMBER", "WS" ];

FooLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                 "T__5", "AND", "OR", "NOT", "OP_EQ", "OP_NOT_EQ", 
                                 "OP_GR", "OP_GR_EQ", "OP_LS_EQ", "OP_LS", 
                                 "OP_RE", "OP_IN_LST", "OP_NOT_IN_LST", 
                                 "WORD", "NUMBER", "WS" ];

FooLexer.prototype.grammarFileName = "Foo.g4";



exports.FooLexer = FooLexer;

