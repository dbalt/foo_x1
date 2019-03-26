grammar Foo;


AND : 'AND' | 'and' ;
OR : 'OR' | 'or' ;
NOT : 'NOT' ;

OP_EQ : '=' ;
OP_NOT_EQ : '!=' ;
OP_GR : '>' ;
OP_GR_EQ : '>=' ;
OP_LS_EQ : '<=' ;
OP_LS : '<' ;
OP_RE : 'RE' | 're' ;

OP_IN_LST : 'IN' | 'in' ;
OP_NOT_IN_LST : 'NOT IN' | 'not in' ; 

WORD : [A-Za-z_]+ ;
NUMBER : [0-9]+ ;
//DATE : [0-9]{2}'.'[0-9]{2}'.'[0-9]{4} ;



eval : expr ;

expr
	: unit
	| NOT '(' expr ')'
	| expr AND expr 
	| expr OR expr
	| '(' expr ')'
	;


unit
	: fld op_single val
	| fld op_lst val_lst
	;

fld 
	: WORD
	| '[' WORD ( WORD )* ']'
	;
	
	
val 
	: NUMBER
//	| DATE
//	| anytext
	| '"' ~('"')* '"'
	;

//anytext
//    : '"' ~('"')* '"'
//   ;


val_lst 
	: '(' val (','val )* ')'
	;

op_single : OP_EQ | OP_NOT_EQ | OP_GR | OP_GR_EQ | OP_LS | OP_LS_EQ | OP_RE ;
op_lst : OP_IN_LST | OP_NOT_IN_LST ;

WS : [ \r\t\n]+ -> skip ;
