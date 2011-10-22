goog.provide('tools');
goog.require('cljs.core');
tools.switch_to_free_text = (function switch_to_free_text(e){
var ne__2372 = (new Element("input",cljs.core.ObjMap.fromObject(["value","size","tabindex"],{"value":e.get("text"),"size":e.getAttribute("size"),"tabindex":e.getAttribute("tabindex")}).strobj));

ne__2372.addEvent("blur",(function (_){
e.set("text",ne__2372.get("value"));
return e.replaces(ne__2372);
}));
ne__2372.replaces(e);
return ne__2372.focus();
});
tools.make_free_text = (function make_free_text(e){
e.addEvent("click",(function (){
return tools.switch_to_free_text.call(null,e);
}));
return e.addEvent("focus",(function (){
return tools.switch_to_free_text.call(null,e);
}));
});
tools.switch_to_select = (function switch_to_select(e,choices){
var ne__2373 = (new Element("select",cljs.core.ObjMap.fromObject(["tabindex"],{"tabindex":e.getAttribute("tabindex")}).strobj));

ne__2373.addEvent("blur",(function (_){
e.set("text",ne__2373.get("value"));
return e.replaces(ne__2373);
}));
cljs.core.doall.call(null,cljs.core.map.call(null,(function (c){
var option__2374 = (new Element("option",cljs.core.ObjMap.fromObject(["value","selected"],{"value":c,"selected":(cljs.core.truth_(cljs.core._EQ_.call(null,c,e.get("text")))?"selected":"")}).strobj));

option__2374.set("text",c);
return ne__2373.appendChild(option__2374);
}),choices));
ne__2373.replaces(e);
return ne__2373.focus();
});
tools.make_select = (function make_select(e){
var choices__2375 = e.getAttribute("choices").split(",");

e.addEvent("click",(function (){
return tools.switch_to_select.call(null,e,choices__2375);
}));
return e.addEvent("focus",(function (){
return tools.switch_to_select.call(null,e,choices__2375);
}));
});
tools.switch_to_range = (function switch_to_range(e,min,max,step){
var ne__2376 = (new Element("input",cljs.core.ObjMap.fromObject(["type","tabindex","min","max","step","value"],{"type":"range","tabindex":e.getAttribute("tabindex"),"min":min,"max":max,"step":step,"value":e.get("text")}).strobj));

ne__2376.addEvent("blur",(function (_){
e.set("text",ne__2376.get("value"));
return e.replaces(ne__2376);
}));
ne__2376.replaces(e);
return ne__2376.focus();
});
tools.make_range = (function make_range(e){
var min__2377 = e.getAttribute("min");
var max__2378 = e.getAttribute("max");
var step__2380 = (function (){var or__3548__auto____2379 = e.getAttribute("step");

if(cljs.core.truth_(or__3548__auto____2379))
{return or__3548__auto____2379;
} else
{return "1";
}
})();

e.addEvent("click",(function (){
return tools.switch_to_range.call(null,e,min__2377,max__2378,step__2380);
}));
return e.addEvent("focus",(function (){
return tools.switch_to_range.call(null,e,min__2377,max__2378,step__2380);
}));
});
tools.switch_to_date = (function switch_to_date(e){
var ne__2381 = Element.call(null,"input",cljs.core.ObjMap.fromObject(["type","tabindex","value"],{"type":"date","tabindex":e.getAttribute("tabindex"),"value":e.get("text")}).strobj);

ne__2381.addEvent("blur",(function (_){
e.set("text",ne__2381.get("value"));
return e.replaces(ne__2381);
}));
ne__2381.replaces(e);
return ne__2381.focus();
});
tools.make_date = (function make_date(e){
e.addEvent("click",(function (){
return tools.switch_to_date.call(null,e);
}));
return e.addEvent("focus",(function (){
return tools.switch_to_date.call(null,e);
}));
});
tools.handlers = cljs.core.ObjMap.fromObject(["free-text","select","range","date"],{"free-text":tools.make_free_text,"select":tools.make_select,"range":tools.make_range,"date":tools.make_date});
document.addEvent("domready",(function (){
return $$.call(null,"span[rich-input]").each((function (e,ind){
var type__2382 = e.getAttribute("rich-input");

e.setAttribute("tabindex",(ind + 1));
e.addClass("rich-input");
return tools.handlers.call(null,type__2382).call(null,e);
}));
}));
