// Generated from Foo.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FooLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, AND=7, OR=8, NOT=9, OP_EQ=10, 
		OP_NOT_EQ=11, OP_GR=12, OP_GR_EQ=13, OP_LS_EQ=14, OP_LS=15, OP_RE=16, 
		OP_IN_LST=17, OP_NOT_IN_LST=18, WORD=19, NUMBER=20, WS=21;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "AND", "OR", "NOT", "OP_EQ", 
			"OP_NOT_EQ", "OP_GR", "OP_GR_EQ", "OP_LS_EQ", "OP_LS", "OP_RE", "OP_IN_LST", 
			"OP_NOT_IN_LST", "WORD", "NUMBER", "WS"
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


	public FooLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Foo.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\27\u0085\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\3\2\3\2\3\3\3\3\3\4\3\4"+
		"\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\5\b@\n\b\3\t\3\t\3\t"+
		"\3\t\5\tF\n\t\3\n\3\n\3\n\3\n\3\13\3\13\3\f\3\f\3\f\3\r\3\r\3\16\3\16"+
		"\3\16\3\17\3\17\3\17\3\20\3\20\3\21\3\21\3\21\3\21\5\21_\n\21\3\22\3\22"+
		"\3\22\3\22\5\22e\n\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\5\23s\n\23\3\24\6\24v\n\24\r\24\16\24w\3\25\6\25{\n\25\r\25"+
		"\16\25|\3\26\6\26\u0080\n\26\r\26\16\26\u0081\3\26\3\26\2\2\27\3\3\5\4"+
		"\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22"+
		"#\23%\24\'\25)\26+\27\3\2\5\5\2C\\aac|\3\2\62;\5\2\13\f\17\17\"\"\2\u008c"+
		"\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2"+
		"\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2"+
		"\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2"+
		"\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\3-\3\2\2\2\5/\3\2\2"+
		"\2\7\61\3\2\2\2\t\63\3\2\2\2\13\65\3\2\2\2\r\67\3\2\2\2\17?\3\2\2\2\21"+
		"E\3\2\2\2\23G\3\2\2\2\25K\3\2\2\2\27M\3\2\2\2\31P\3\2\2\2\33R\3\2\2\2"+
		"\35U\3\2\2\2\37X\3\2\2\2!^\3\2\2\2#d\3\2\2\2%r\3\2\2\2\'u\3\2\2\2)z\3"+
		"\2\2\2+\177\3\2\2\2-.\7*\2\2.\4\3\2\2\2/\60\7+\2\2\60\6\3\2\2\2\61\62"+
		"\7]\2\2\62\b\3\2\2\2\63\64\7_\2\2\64\n\3\2\2\2\65\66\7$\2\2\66\f\3\2\2"+
		"\2\678\7.\2\28\16\3\2\2\29:\7C\2\2:;\7P\2\2;@\7F\2\2<=\7c\2\2=>\7p\2\2"+
		">@\7f\2\2?9\3\2\2\2?<\3\2\2\2@\20\3\2\2\2AB\7Q\2\2BF\7T\2\2CD\7q\2\2D"+
		"F\7t\2\2EA\3\2\2\2EC\3\2\2\2F\22\3\2\2\2GH\7P\2\2HI\7Q\2\2IJ\7V\2\2J\24"+
		"\3\2\2\2KL\7?\2\2L\26\3\2\2\2MN\7#\2\2NO\7?\2\2O\30\3\2\2\2PQ\7@\2\2Q"+
		"\32\3\2\2\2RS\7@\2\2ST\7?\2\2T\34\3\2\2\2UV\7>\2\2VW\7?\2\2W\36\3\2\2"+
		"\2XY\7>\2\2Y \3\2\2\2Z[\7T\2\2[_\7G\2\2\\]\7t\2\2]_\7g\2\2^Z\3\2\2\2^"+
		"\\\3\2\2\2_\"\3\2\2\2`a\7K\2\2ae\7P\2\2bc\7k\2\2ce\7p\2\2d`\3\2\2\2db"+
		"\3\2\2\2e$\3\2\2\2fg\7P\2\2gh\7Q\2\2hi\7V\2\2ij\7\"\2\2jk\7K\2\2ks\7P"+
		"\2\2lm\7p\2\2mn\7q\2\2no\7v\2\2op\7\"\2\2pq\7k\2\2qs\7p\2\2rf\3\2\2\2"+
		"rl\3\2\2\2s&\3\2\2\2tv\t\2\2\2ut\3\2\2\2vw\3\2\2\2wu\3\2\2\2wx\3\2\2\2"+
		"x(\3\2\2\2y{\t\3\2\2zy\3\2\2\2{|\3\2\2\2|z\3\2\2\2|}\3\2\2\2}*\3\2\2\2"+
		"~\u0080\t\4\2\2\177~\3\2\2\2\u0080\u0081\3\2\2\2\u0081\177\3\2\2\2\u0081"+
		"\u0082\3\2\2\2\u0082\u0083\3\2\2\2\u0083\u0084\b\26\2\2\u0084,\3\2\2\2"+
		"\13\2?E^drw|\u0081\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}