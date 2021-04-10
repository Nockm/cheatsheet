Insert...
i/a    :  at/after cursor
I/A    :  at start/end of current line 
o/O    :  at new line above/below current line
C      :  at cursor, blanked till EOL

Move...
h  / l  :    to the              prev/next char                
^  / $  :    to the start/end of this      line
b  / e  :    to the start/end of this      token               
B  / E  :    to the start/end of this      word                
ge / W  :    to the end/start of prev/next word                
{  / }  :    to the              prev/next paragraph           
t  / T  : until the              prev/next %CHAR% on this line 
f  / F  :    to the              prev/next %CHAR% on this line 
gg / G  :    to the start/end of this      file

Generic combos...
[dycv][ia][wWp] : [cut/copy/edit/select] [this/this+adjacent] space+[token/word/paragraph]
[dycv][ia][t'"] : [cut/copy/edit/select] content [inside/inside+tags] [tag/'/"]
[dycv]<move>    : [cut/copy/edit/select] content between cursor and movement 

v	: select characters
V	: select lines

Shortcuts...
D               : Cut till EOL
dd              : Cut current line
Y/yy            : Copy current line

Macro...
q{register}{stuff}q     : Record macro
@{register}             : Play macro

Mark...
m{register}             : Create mark
`{register}             : Move to mark

Unsorted...
p/P  : paste below/above
u/U  : upper/lowercase
vb   : Visual Block
^[a/x]: increment/decrement
^Y   : Pan Up 1 line
^E   : Pan Down 1 line
