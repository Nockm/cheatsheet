Text Objects
w: words
s: sentences
p: paragraphs
t: tags

Move...
h  / l  :    to the              prev/next char                
^  / $  :    to the start/end of this      line
b  / e  :    to the start/end of this      token               
B  / E  :    to the start/end of this      word                
ge / W  :    to the end/start of prev/next word                
{  / }  :    to the              prev/next paragraph           
t  / T  : until the              prev/next %CHAR% on this line 
f  / F  :    to the              prev/next %CHAR% on this line 

Change...
c[ia][wWp] : [this/this+adjacent] space+[token/word/paragraph]
c[ia]['"]  : content [inside/inside+inc.] ['/"]
c<move>    : content between cursor and movement 


u/U  : upper/lowercase
vb   : Visual Block

gg   : Beginning
G    : End

^Y   : Pan Up 1 line
^E   : Pan Down 1 line
