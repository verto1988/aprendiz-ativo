// 
/**
* PowerShell 2.0 Brush for highlighter 2.0
* 
* SyntaxHighlighter  http://alexgorbatchev.com/wiki/SyntaxHighlighter
*
* @version
* 2.1.0 (April 07 2009)
* 
* @copyright
* Copyright (C) 2008-2009 Joel Bennett http://HuddledMasses.org/
*
* @license
* This file is for SyntaxHighlighter.
* 
* SyntaxHighlighter is free software: you can redistribute it and/or modify
* it under the terms of the GNU Lesser General Public License as published by
* the Free Software Foundation, either version 2 of the License, or
* (at your option) any later version.
* 
* SyntaxHighlighter is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
* 
* You should have received a copy of the GNU General Public License
* along with SyntaxHighlighter.  If not, see <http://www.gnu.org/licenses/>.
*/

SyntaxHighlighter.brushes.Powershell = function() {

    var keywords = 'while validateset validaterange validatepattern validatelength validatecount ' +
                  'until trap switch return ref process param parameter in if global: ' +
                  'function foreach for finally filter end elseif else dynamicparam do default ' +
                  'continue cmdletbinding break begin alias \\? % #script #private #local #global ' +
                  'mandatory parametersetname position valuefrompipeline ' +
                  'valuefrompipelinebypropertyname valuefromremainingarguments helpmessage ';

    var operators = 'and as band bnot bor bxor casesensitive ccontains ceq cge cgt cle ' +
                  'clike clt cmatch cne cnotcontains cnotlike cnotmatch contains ' +
                  'creplace eq exact f file ge gt icontains ieq ige igt ile ilike ilt ' +
                  'imatch ine inotcontains inotlike inotmatch ireplace is isnot le like ' +
                  'lt match ne not notcontains notlike notmatch or regex replace wildcard';

    var verbs = 'write where wait use update unregister undo trace test tee take suspend ' +
               'stop start split sort skip show set send select scroll resume restore ' +
               'restart resolve resize reset rename remove register receive read push ' +
               'pop ping out new move measure limit join invoke import group get format ' +
               'foreach export expand exit enter enable disconnect disable debug cxnew ' +
               'copy convertto convertfrom convert connect complete compare clear ' +
               'checkpoint aggregate add';

    this.regexList = [
      {regex: new RegExp('&lt;#[\\s\\S]*?#&gt;','gmi'), css: 'comments' },   // multi-line comments have to come before single line
      {regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },   // one line comments

      {regex: new RegExp('@"\\n[\\s\\S]*?\\n"@', 'gm'), css: 'string' },     // double quoted here-strings
      {regex: new RegExp("@'\\n[\\s\\S]*?\\n'@", 'gm'), css: 'string' },     // single quoted here-strings
      {regex: new RegExp('"(?:\\$\\([^\\)]*\\)|[^"]|`"|"")*?[^`]{0,1}"', 'g'), css: 'string' },     // double quoted strings
      {regex: new RegExp("'(?:[^']|'')*'", 'g'), css: 'string' },     // single quoted strings

      {regex: new RegExp('[\\$|@|@@](?:(?:global|script|private|env):)?[A-Z0-9_]+', 'gi'), css: 'variable' },   // $variables
      {regex: new RegExp('(?:' + verbs.replace(/ /g, '\\b|\\b') + ')\\-[a-zA-Z_][a-zA-Z0-9_]*', 'gmi'), css: 'functions' },  // functions and cmdlets
      {regex: new RegExp(this.getKeywords(keywords), 'gmi'), css: 'keyword' },    // keywords
      {regex: new RegExp(this.getKeywords(operators.replace(/ /g,' \\-')), 'gmi'), css: 'value bold' }, // operators
      {regex: new RegExp('\\s+\\-[a-zA-Z_][a-zA-Z0-9_]*', 'gmi'), css: 'color1' },     // parameters      
      {regex: new RegExp('\\[[A-Z_\\[][A-Z0-9_. `,\\[\\]]*\\]', 'gi'), css: 'constants' },  // .Net [Type]s
		];
}

SyntaxHighlighter.brushes.Powershell.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Powershell.aliases = ['monad', 'msh', 'powershell', 'PowerShell', 'posh'];
