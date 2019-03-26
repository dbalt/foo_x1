// Generated from Foo.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FooParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, AND=7, OR=8, NOT=9, OP_EQ=10, 
		OP_NOT_EQ=11, OP_GR=12, OP_GR_EQ=13, OP_LS_EQ=14, OP_LS=15, OP_RE=16, 
		OP_IN_LST=17, OP_NOT_IN_LST=18, WORD=19, NUMBER=20, WS=21;
	public static final int
		RULE_eval = 0, RULE_expr = 1, RULE_unit = 2, RULE_fld = 3, RULE_val = 4, 
		RULE_val_lst = 5, RULE_op_single = 6, RULE_op_lst = 7;
	private static String[] makeRuleNames() {
		return new String[] {
			"eval", "expr", "unit", "fld", "val", "val_lst", "op_single", "op_lst"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'['", "']'", "'\"'", "','", null, null, "'NOT'", 
			"'='", "'!='", "'>'", "'>='", "'<='", "'<'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, "AND", "OR", "NOT", "OP_EQ", 
			"OP_NOT_EQ", "OP_GR", "OP_GR_EQ", "OP_LS_EQ", "OP_LS", "OP_RE", "OP_IN_LST", 
			"OP_NOT_IN_LST", "WORD", "NUMBER", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Foo.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public FooParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class EvalContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public EvalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eval; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FooListener ) ((FooListener)listener).enterEval(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FooListener ) ((FooListener)listener).exitEval(this);
		}
	}

	public final EvalContext eval() throws RecognitionException {
		EvalContext _localctx = new EvalContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_eval);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(16);
			expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public UnitContext unit() {
			return getRuleContext(UnitContext.class,0);
		}
		public TerminalNode NOT() { return getToken(FooParser.NOT, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode AND() { return getToken(FooParser.AND, 0); }
		public TerminalNode OR() { return getToken(FooParser.OR, 0); }
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FooListener ) ((FooListener)listener).enterExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FooListener ) ((FooListener)listener).exitExpr(this);
		}
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(29);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__2:
			case WORD:
				{
				setState(19);
				unit();
				}
				break;
			case NOT:
				{
				setState(20);
				match(NOT);
				setState(21);
				match(T__0);
				setState(22);
				expr(0);
				setState(23);
				match(T__1);
				}
				break;
			case T__0:
				{
				setState(25);
				match(T__0);
				setState(26);
				expr(0);
				setState(27);
				match(T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(39);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(37);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(31);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(32);
						match(AND);
						setState(33);
						expr(4);
						}
						break;
					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(34);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(35);
						match(OR);
						setState(36);
						expr(3);
						}
						break;
					}
					} 
				}
				setState(41);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class UnitContext extends ParserRuleContext {
		public FldContext fld() {
			return getRuleContext(FldContext.class,0);
		}
		public Op_singleContext op_single() {
			return getRuleContext(Op_singleContext.class,0);
		}
		public ValContext val() {
			return getRuleContext(ValContext.class,0);
		}
		public Op_lstContext op_lst() {
			return getRuleContext(Op_lstContext.class,0);
		}
		public Val_lstContext val_lst() {
			return getRuleContext(Val_lstContext.class,0);
		}
		public UnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unit; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FooListener ) ((FooListener)listener).enterUnit(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FooListener ) ((FooListener)listener).exitUnit(this);
		}
	}

	public final UnitContext unit() throws RecognitionException {
		UnitContext _localctx = new UnitContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_unit);
		try {
			setState(50);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(42);
				fld();
				setState(43);
				op_single();
				setState(44);
				val();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(46);
				fld();
				setState(47);
				op_lst();
				setState(48);
				val_lst();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FldContext extends ParserRuleContext {
		public List<TerminalNode> WORD() { return getTokens(FooParser.WORD); }
		public TerminalNode WORD(int i) {
			return getToken(FooParser.WORD, i);
		}
		public FldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fld; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FooListener ) ((FooListener)listener).enterFld(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FooListener ) ((FooListener)listener).exitFld(this);
		}
	}

	public final FldContext fld() throws RecognitionException {
		FldContext _localctx = new FldContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_fld);
		int _la;
		try {
			setState(62);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WORD:
				enterOuterAlt(_localctx, 1);
				{
				setState(52);
				match(WORD);
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 2);
				{
				setState(53);
				match(T__2);
				setState(54);
				match(WORD);
				setState(58);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==WORD) {
					{
					{
					setState(55);
					match(WORD);
					}
					}
					setState(60);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(61);
				match(T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(FooParser.NUMBER, 0); }
		public ValContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_val; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FooListener ) ((FooListener)listener).enterVal(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FooListener ) ((FooListener)listener).exitVal(this);
		}
	}

	public final ValContext val() throws RecognitionException {
		ValContext _localctx = new ValContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_val);
		int _la;
		try {
			setState(73);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				enterOuterAlt(_localctx, 1);
				{
				setState(64);
				match(NUMBER);
				}
				break;
			case T__4:
				enterOuterAlt(_localctx, 2);
				{
				setState(65);
				match(T__4);
				setState(69);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__5) | (1L << AND) | (1L << OR) | (1L << NOT) | (1L << OP_EQ) | (1L << OP_NOT_EQ) | (1L << OP_GR) | (1L << OP_GR_EQ) | (1L << OP_LS_EQ) | (1L << OP_LS) | (1L << OP_RE) | (1L << OP_IN_LST) | (1L << OP_NOT_IN_LST) | (1L << WORD) | (1L << NUMBER) | (1L << WS))) != 0)) {
					{
					{
					setState(66);
					_la = _input.LA(1);
					if ( _la <= 0 || (_la==T__4) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					}
					setState(71);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(72);
				match(T__4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Val_lstContext extends ParserRuleContext {
		public List<ValContext> val() {
			return getRuleContexts(ValContext.class);
		}
		public ValContext val(int i) {
			return getRuleContext(ValContext.class,i);
		}
		public Val_lstContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_val_lst; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FooListener ) ((FooListener)listener).enterVal_lst(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FooListener ) ((FooListener)listener).exitVal_lst(this);
		}
	}

	public final Val_lstContext val_lst() throws RecognitionException {
		Val_lstContext _localctx = new Val_lstContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_val_lst);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			match(T__0);
			setState(76);
			val();
			setState(81);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(77);
				match(T__5);
				setState(78);
				val();
				}
				}
				setState(83);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(84);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Op_singleContext extends ParserRuleContext {
		public TerminalNode OP_EQ() { return getToken(FooParser.OP_EQ, 0); }
		public TerminalNode OP_NOT_EQ() { return getToken(FooParser.OP_NOT_EQ, 0); }
		public TerminalNode OP_GR() { return getToken(FooParser.OP_GR, 0); }
		public TerminalNode OP_GR_EQ() { return getToken(FooParser.OP_GR_EQ, 0); }
		public TerminalNode OP_LS() { return getToken(FooParser.OP_LS, 0); }
		public TerminalNode OP_LS_EQ() { return getToken(FooParser.OP_LS_EQ, 0); }
		public TerminalNode OP_RE() { return getToken(FooParser.OP_RE, 0); }
		public Op_singleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_op_single; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FooListener ) ((FooListener)listener).enterOp_single(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FooListener ) ((FooListener)listener).exitOp_single(this);
		}
	}

	public final Op_singleContext op_single() throws RecognitionException {
		Op_singleContext _localctx = new Op_singleContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_op_single);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(86);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OP_EQ) | (1L << OP_NOT_EQ) | (1L << OP_GR) | (1L << OP_GR_EQ) | (1L << OP_LS_EQ) | (1L << OP_LS) | (1L << OP_RE))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Op_lstContext extends ParserRuleContext {
		public TerminalNode OP_IN_LST() { return getToken(FooParser.OP_IN_LST, 0); }
		public TerminalNode OP_NOT_IN_LST() { return getToken(FooParser.OP_NOT_IN_LST, 0); }
		public Op_lstContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_op_lst; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FooListener ) ((FooListener)listener).enterOp_lst(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FooListener ) ((FooListener)listener).exitOp_lst(this);
		}
	}

	public final Op_lstContext op_lst() throws RecognitionException {
		Op_lstContext _localctx = new Op_lstContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_op_lst);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(88);
			_la = _input.LA(1);
			if ( !(_la==OP_IN_LST || _la==OP_NOT_IN_LST) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 3);
		case 1:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\27]\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\3\2\3\2\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3 \n\3\3\3\3\3\3\3\3\3\3\3\3\3\7\3"+
		"(\n\3\f\3\16\3+\13\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4\65\n\4\3\5\3"+
		"\5\3\5\3\5\7\5;\n\5\f\5\16\5>\13\5\3\5\5\5A\n\5\3\6\3\6\3\6\7\6F\n\6\f"+
		"\6\16\6I\13\6\3\6\5\6L\n\6\3\7\3\7\3\7\3\7\7\7R\n\7\f\7\16\7U\13\7\3\7"+
		"\3\7\3\b\3\b\3\t\3\t\3\t\2\3\4\n\2\4\6\b\n\f\16\20\2\5\3\2\7\7\3\2\f\22"+
		"\3\2\23\24\2^\2\22\3\2\2\2\4\37\3\2\2\2\6\64\3\2\2\2\b@\3\2\2\2\nK\3\2"+
		"\2\2\fM\3\2\2\2\16X\3\2\2\2\20Z\3\2\2\2\22\23\5\4\3\2\23\3\3\2\2\2\24"+
		"\25\b\3\1\2\25 \5\6\4\2\26\27\7\13\2\2\27\30\7\3\2\2\30\31\5\4\3\2\31"+
		"\32\7\4\2\2\32 \3\2\2\2\33\34\7\3\2\2\34\35\5\4\3\2\35\36\7\4\2\2\36 "+
		"\3\2\2\2\37\24\3\2\2\2\37\26\3\2\2\2\37\33\3\2\2\2 )\3\2\2\2!\"\f\5\2"+
		"\2\"#\7\t\2\2#(\5\4\3\6$%\f\4\2\2%&\7\n\2\2&(\5\4\3\5\'!\3\2\2\2\'$\3"+
		"\2\2\2(+\3\2\2\2)\'\3\2\2\2)*\3\2\2\2*\5\3\2\2\2+)\3\2\2\2,-\5\b\5\2-"+
		".\5\16\b\2./\5\n\6\2/\65\3\2\2\2\60\61\5\b\5\2\61\62\5\20\t\2\62\63\5"+
		"\f\7\2\63\65\3\2\2\2\64,\3\2\2\2\64\60\3\2\2\2\65\7\3\2\2\2\66A\7\25\2"+
		"\2\678\7\5\2\28<\7\25\2\29;\7\25\2\2:9\3\2\2\2;>\3\2\2\2<:\3\2\2\2<=\3"+
		"\2\2\2=?\3\2\2\2><\3\2\2\2?A\7\6\2\2@\66\3\2\2\2@\67\3\2\2\2A\t\3\2\2"+
		"\2BL\7\26\2\2CG\7\7\2\2DF\n\2\2\2ED\3\2\2\2FI\3\2\2\2GE\3\2\2\2GH\3\2"+
		"\2\2HJ\3\2\2\2IG\3\2\2\2JL\7\7\2\2KB\3\2\2\2KC\3\2\2\2L\13\3\2\2\2MN\7"+
		"\3\2\2NS\5\n\6\2OP\7\b\2\2PR\5\n\6\2QO\3\2\2\2RU\3\2\2\2SQ\3\2\2\2ST\3"+
		"\2\2\2TV\3\2\2\2US\3\2\2\2VW\7\4\2\2W\r\3\2\2\2XY\t\3\2\2Y\17\3\2\2\2"+
		"Z[\t\4\2\2[\21\3\2\2\2\13\37\')\64<@GKS";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}