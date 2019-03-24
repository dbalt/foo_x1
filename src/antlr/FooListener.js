// Generated from Foo.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by FooParser.
function FooListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

FooListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
FooListener.prototype.constructor = FooListener;

// Enter a parse tree produced by FooParser#eval.
FooListener.prototype.enterEval = function(ctx) {
};

// Exit a parse tree produced by FooParser#eval.
FooListener.prototype.exitEval = function(ctx) {
};


// Enter a parse tree produced by FooParser#expr.
FooListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by FooParser#expr.
FooListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by FooParser#unit.
FooListener.prototype.enterUnit = function(ctx) {
};

// Exit a parse tree produced by FooParser#unit.
FooListener.prototype.exitUnit = function(ctx) {
};


// Enter a parse tree produced by FooParser#fld.
FooListener.prototype.enterFld = function(ctx) {
};

// Exit a parse tree produced by FooParser#fld.
FooListener.prototype.exitFld = function(ctx) {
};


// Enter a parse tree produced by FooParser#val.
FooListener.prototype.enterVal = function(ctx) {
};

// Exit a parse tree produced by FooParser#val.
FooListener.prototype.exitVal = function(ctx) {
};


// Enter a parse tree produced by FooParser#val_lst.
FooListener.prototype.enterVal_lst = function(ctx) {
};

// Exit a parse tree produced by FooParser#val_lst.
FooListener.prototype.exitVal_lst = function(ctx) {
};


// Enter a parse tree produced by FooParser#op_single.
FooListener.prototype.enterOp_single = function(ctx) {
};

// Exit a parse tree produced by FooParser#op_single.
FooListener.prototype.exitOp_single = function(ctx) {
};


// Enter a parse tree produced by FooParser#op_lst.
FooListener.prototype.enterOp_lst = function(ctx) {
};

// Exit a parse tree produced by FooParser#op_lst.
FooListener.prototype.exitOp_lst = function(ctx) {
};



exports.FooListener = FooListener;