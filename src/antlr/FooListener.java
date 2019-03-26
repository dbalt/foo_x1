// Generated from Foo.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link FooParser}.
 */
public interface FooListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link FooParser#eval}.
	 * @param ctx the parse tree
	 */
	void enterEval(FooParser.EvalContext ctx);
	/**
	 * Exit a parse tree produced by {@link FooParser#eval}.
	 * @param ctx the parse tree
	 */
	void exitEval(FooParser.EvalContext ctx);
	/**
	 * Enter a parse tree produced by {@link FooParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterExpr(FooParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link FooParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitExpr(FooParser.ExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link FooParser#unit}.
	 * @param ctx the parse tree
	 */
	void enterUnit(FooParser.UnitContext ctx);
	/**
	 * Exit a parse tree produced by {@link FooParser#unit}.
	 * @param ctx the parse tree
	 */
	void exitUnit(FooParser.UnitContext ctx);
	/**
	 * Enter a parse tree produced by {@link FooParser#fld}.
	 * @param ctx the parse tree
	 */
	void enterFld(FooParser.FldContext ctx);
	/**
	 * Exit a parse tree produced by {@link FooParser#fld}.
	 * @param ctx the parse tree
	 */
	void exitFld(FooParser.FldContext ctx);
	/**
	 * Enter a parse tree produced by {@link FooParser#val}.
	 * @param ctx the parse tree
	 */
	void enterVal(FooParser.ValContext ctx);
	/**
	 * Exit a parse tree produced by {@link FooParser#val}.
	 * @param ctx the parse tree
	 */
	void exitVal(FooParser.ValContext ctx);
	/**
	 * Enter a parse tree produced by {@link FooParser#val_lst}.
	 * @param ctx the parse tree
	 */
	void enterVal_lst(FooParser.Val_lstContext ctx);
	/**
	 * Exit a parse tree produced by {@link FooParser#val_lst}.
	 * @param ctx the parse tree
	 */
	void exitVal_lst(FooParser.Val_lstContext ctx);
	/**
	 * Enter a parse tree produced by {@link FooParser#op_single}.
	 * @param ctx the parse tree
	 */
	void enterOp_single(FooParser.Op_singleContext ctx);
	/**
	 * Exit a parse tree produced by {@link FooParser#op_single}.
	 * @param ctx the parse tree
	 */
	void exitOp_single(FooParser.Op_singleContext ctx);
	/**
	 * Enter a parse tree produced by {@link FooParser#op_lst}.
	 * @param ctx the parse tree
	 */
	void enterOp_lst(FooParser.Op_lstContext ctx);
	/**
	 * Exit a parse tree produced by {@link FooParser#op_lst}.
	 * @param ctx the parse tree
	 */
	void exitOp_lst(FooParser.Op_lstContext ctx);
}