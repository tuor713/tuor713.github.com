goog.provide('tools');
goog.require('cljs.core');
goog.require('goog.ui.DatePicker');
goog.require('goog.date.Date');
tools.dependencies = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
tools.updates = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
tools.calculate = (function calculate(var$){
var map__2374__2375 = cljs.core.deref.call(null,tools.updates).call(null,var$);
var map__2374__2376 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__2374__2375))?cljs.core.apply.call(null,cljs.core.hash_map,map__2374__2375):map__2374__2375);
var deps__2377 = cljs.core.get.call(null,map__2374__2376,"﷐'dependencies");
var fn__2378 = cljs.core.get.call(null,map__2374__2376,"﷐'function");

return cljs.core.apply.call(null,fn__2378,cljs.core.map.call(null,(function (p1__2372_SHARP_){
var e__2379 = $.call(null,p1__2372_SHARP_);

var or__3548__auto____2380 = e__2379.get("value");

if(cljs.core.truth_(or__3548__auto____2380))
{return or__3548__auto____2380;
} else
{return e__2379.get("text");
}
}),deps__2377));
});
tools.recalc_all = (function recalc_all(changed){
var todo__2382 = cljs.core.get.call(null,cljs.core.deref.call(null,tools.dependencies),changed);

while(true){
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,todo__2382)))
{return null;
} else
{var updated__2385 = cljs.core.doall.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (todo__2382){
return (function (p1__2373_SHARP_){
var nval__2383 = tools.calculate.call(null,p1__2373_SHARP_);
var e__2384 = $.call(null,p1__2373_SHARP_);

if(cljs.core.truth_(cljs.core._EQ_.call(null,e__2384.get("text"),nval__2383)))
{return null;
} else
{e__2384.set("text",nval__2383);
return p1__2373_SHARP_;
}
});})(todo__2382))
,todo__2382)));
var new_todo__2386 = cljs.core.reduce.call(null,cljs.core.into,cljs.core.set([]),cljs.core.map.call(null,cljs.core.deref.call(null,tools.dependencies),updated__2385));

{
var G__2387 = new_todo__2386;
todo__2382 = G__2387;
continue;
}
}
break;
}
});
tools.depends = (function depends(var$,deps,fn){
cljs.core.swap_BANG_.call(null,tools.dependencies,(function (p1__2381_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__2381_SHARP_,cljs.core.zipmap.call(null,cljs.core.seq.call(null,deps),cljs.core.repeat.call(null,cljs.core.set([var$]))));
}));
return cljs.core.swap_BANG_.call(null,tools.updates,cljs.core.assoc,var$,cljs.core.ObjMap.fromObject(["﷐'dependencies","﷐'function"],{"﷐'dependencies":cljs.core.seq.call(null,deps),"﷐'function":fn}));
});
tools.switch_to_free_text = (function switch_to_free_text(e){
var ne__2388 = (new Element("input",cljs.core.ObjMap.fromObject(["value","size","id","tabindex"],{"value":e.get("text"),"size":e.getAttribute("size"),"id":e.getAttribute("id"),"tabindex":e.getAttribute("tabindex")}).strobj));

if(cljs.core.truth_(cljs.core._EQ_.call(null,tools.undefined,e.getAttribute("id"))))
{} else
{ne__2388.addEvent("input",(function (){
return tools.recalc_all.call(null,e.getAttribute("id"));
}));
}
ne__2388.addEvent("blur",(function (_){
e.set("text",ne__2388.get("value"));
return e.replaces(ne__2388);
}));
ne__2388.replaces(e);
return ne__2388.focus();
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
var ne__2389 = (new Element("select",cljs.core.ObjMap.fromObject(["tabindex","id"],{"tabindex":e.getAttribute("tabindex"),"id":e.getAttribute("id")}).strobj));

ne__2389.addEvent("blur",(function (_){
e.set("text",ne__2389.get("value"));
return e.replaces(ne__2389);
}));
cljs.core.doall.call(null,cljs.core.map.call(null,(function (c){
var option__2390 = (new Element("option",cljs.core.ObjMap.fromObject(["value","selected"],{"value":c,"selected":(cljs.core.truth_(cljs.core._EQ_.call(null,c,e.get("text")))?"selected":"")}).strobj));

option__2390.set("text",c);
return ne__2389.appendChild(option__2390);
}),choices));
ne__2389.replaces(e);
return ne__2389.focus();
});
tools.make_select = (function make_select(e){
var choices__2391 = e.getAttribute("choices").split(",");

e.addEvent("click",(function (){
return tools.switch_to_select.call(null,e,choices__2391);
}));
return e.addEvent("focus",(function (){
return tools.switch_to_select.call(null,e,choices__2391);
}));
});
tools.switch_to_range = (function switch_to_range(e,min,max,step){
var ne__2392 = (new Element("input",cljs.core.ObjMap.fromObject(["type","tabindex","id","min","max","step","value"],{"type":"range","tabindex":e.getAttribute("tabindex"),"id":e.getAttribute("id"),"min":min,"max":max,"step":step,"value":e.get("text")}).strobj));

ne__2392.addEvent("blur",(function (_){
e.set("text",ne__2392.get("value"));
return e.replaces(ne__2392);
}));
ne__2392.replaces(e);
return ne__2392.focus();
});
tools.make_range = (function make_range(e){
var min__2393 = e.getAttribute("min");
var max__2394 = e.getAttribute("max");
var step__2396 = (function (){var or__3548__auto____2395 = e.getAttribute("step");

if(cljs.core.truth_(or__3548__auto____2395))
{return or__3548__auto____2395;
} else
{return "1";
}
})();

e.addEvent("click",(function (){
return tools.switch_to_range.call(null,e,min__2393,max__2394,step__2396);
}));
return e.addEvent("focus",(function (){
return tools.switch_to_range.call(null,e,min__2393,max__2394,step__2396);
}));
});
tools.switch_to_date = (function switch_to_date(e){
var ne__2397 = Element.call(null,"input",cljs.core.ObjMap.fromObject(["type","tabindex","id","value"],{"type":"date","tabindex":e.getAttribute("tabindex"),"id":e.getAttribute("id"),"value":e.get("text")}).strobj);

ne__2397.addEvent("blur",(function (_){
e.set("text",ne__2397.get("value"));
return e.replaces(ne__2397);
}));
ne__2397.replaces(e);
return ne__2397.focus();
});
tools.make_date = (function make_date(e){
e.addEvent("click",(function (){
return tools.switch_to_date.call(null,e);
}));
return e.addEvent("focus",(function (){
return tools.switch_to_date.call(null,e);
}));
});
tools.switch_to_datepicker = (function switch_to_datepicker(e){
var ne__2400 = Element.call(null,"div");
var vec__2399__2401 = cljs.core.map.call(null,(function (p1__2398_SHARP_){
return parseInt.call(null,p1__2398_SHARP_);
}),e.get("text").split("-"));
var year__2402 = cljs.core.nth.call(null,vec__2399__2401,0,null);
var month__2403 = cljs.core.nth.call(null,vec__2399__2401,1,null);
var day__2404 = cljs.core.nth.call(null,vec__2399__2401,2,null);
var picker__2405 = (new goog.ui.DatePicker((new goog.date.Date(year__2402,(month__2403 - 1),day__2404))));

ne__2400.addClass("datepicker-container");
picker__2405.setShowFixedNumWeeks(false);
picker__2405.setUseSimpleNavigationMenu(true);
picker__2405.setAllowNone(false);
picker__2405.setShowWeekNum(false);
picker__2405.addEventListener("select",(function (){
var date__2406 = picker__2405.getDate();

e.set("text",cljs.core.str.call(null,date__2406.getFullYear(),"-",(1 + date__2406.getMonth()),"-",date__2406.getDate()));
return e.replaces(ne__2400);
}));
ne__2400.replaces(e);
return picker__2405.render(ne__2400);
});
tools.make_datepicker = (function make_datepicker(e){
e.addEvent("click",(function (){
return tools.switch_to_datepicker.call(null,e);
}));
return e.addEvent("focus",(function (){
return tools.switch_to_datepicker.call(null,e);
}));
});
tools.handlers = cljs.core.ObjMap.fromObject(["free-text","select","range","date","datepicker"],{"free-text":tools.make_free_text,"select":tools.make_select,"range":tools.make_range,"date":tools.make_date,"datepicker":tools.make_datepicker});
document.addEvent("domready",(function (){
return $$.call(null,"span[rich-input]").each((function (e,ind){
var type__2407 = e.getAttribute("rich-input");

e.setAttribute("tabindex",(ind + 1));
e.addClass("rich-input");
return tools.handlers.call(null,type__2407).call(null,e);
}));
}));
tools.palindrome = (function palindrome(s){
return cljs.core._EQ_.call(null,cljs.core.reverse.call(null,s),cljs.core.seq.call(null,s));
});
