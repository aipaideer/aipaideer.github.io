// build time:Tue Jul 07 2020 23:41:31 GMT+0800 (Central Standard Time)
(function(e){if(typeof exports=="object"&&typeof module=="object")e(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror"],e);else e(CodeMirror)})(function(e){"use strict";function n(n,t){var i=n.getLine(t);var r=i.search(/\S/);if(r==-1||/\bcomment\b/.test(n.getTokenTypeAt(e.Pos(t,r+1))))return-1;return e.countColumn(i,null,n.getOption("tabSize"))}e.registerHelper("fold","indent",function(t,i){var r=n(t,i.line);if(r<0)return;var o=null;for(var f=i.line+1,l=t.lastLine();f<=l;++f){var u=n(t,f);if(u==-1){}else if(u>r){o=f}else{break}}if(o)return{from:e.Pos(i.line,t.getLine(i.line).length),to:e.Pos(o,t.getLine(o).length)}})});
//rebuild by neat 