"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[980],{8980:(U,a,s)=>{s.r(a),s.d(a,{OrdersModule:()=>A});var d=s(8583),e=s(3018),l=s(2340),u=s(1841);let c=(()=>{class t{constructor(r){this.http=r,this.baseUrl=l.N.apiUrl}getOrdersForUser(){return this.http.get(this.baseUrl+"orders")}getOrderDetailed(r){return this.http.get(this.baseUrl+"orders/"+r)}}return t.\u0275fac=function(r){return new(r||t)(e.LFG(u.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var i=s(15);function p(t,o){if(1&t&&(e.TgZ(0,"tr",6),e.TgZ(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.ALo(8,"currency"),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.qZA()),2&t){const r=o.$implicit;e.MGl("routerLink","/orders/",r.id,""),e.xp6(2),e.hij("# ",r.id,""),e.xp6(2),e.Oqu(e.xi3(5,5,r.orderDate,"medium")),e.xp6(3),e.Oqu(e.lcZ(8,8,r.total)),e.xp6(3),e.Oqu(r.status)}}let m=(()=>{class t{constructor(r){this.orderService=r,this.orders=[]}ngOnInit(){this.getOrders()}getOrders(){this.orderService.getOrdersForUser().subscribe({next:r=>this.orders=r})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-orders"]],decls:16,vars:1,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-12"],[1,"table","table-hover",2,"cursor","pointer"],[1,"thead-light"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"table",3),e.TgZ(4,"thead",4),e.TgZ(5,"tr"),e.TgZ(6,"th"),e._uU(7,"Order"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Date"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Total"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Status"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"tbody"),e.YNc(15,p,11,10,"tr",5),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&r&&(e.xp6(15),e.Q6J("ngForOf",n.orders))},directives:[d.sg,i.rH],pipes:[d.uU,d.H9],styles:[""]}),t})();var g=s(7285),h=s(3449),Z=s(9281);function O(t,o){if(1&t&&(e.TgZ(0,"div",2),e.TgZ(1,"div",3),e._UZ(2,"app-basket-summary",4),e.qZA(),e.TgZ(3,"div",5),e._UZ(4,"app-order-totals",6),e.qZA(),e.qZA()),2&t){const r=e.oxw();e.xp6(2),e.Q6J("items",r.order.orderItems)("isBasket",!1)("isOrder",!0),e.xp6(2),e.Q6J("shippingPrice",r.order.shippingPrice)("subTotal",r.order.subtotal)("total",r.order.total)}}const v=[{path:"",component:m},{path:":id",component:(()=>{class t{constructor(r,n,b){this.route=r,this.breadcrumbService=n,this.orderService=b,this.breadcrumbService.set("@OrderDetailed"," ")}ngOnInit(){this.orderService.getOrderDetailed(+this.route.snapshot.paramMap.get("id")).subscribe(r=>{this.order=r,this.breadcrumbService.set("@OrderDetailed",`Order# ${r.id} - ${r.status}`)},r=>{console.log(r)})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(i.gz),e.Y36(g.pm),e.Y36(c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-order-detailed"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-8"],[3,"items","isBasket","isOrder"],[1,"col-4"],[3,"shippingPrice","subTotal","total"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0),e.YNc(1,O,5,6,"div",1),e.qZA()),2&r&&(e.xp6(1),e.Q6J("ngIf",n.order))},directives:[d.O5,h.b,Z.S],styles:[""]}),t})(),data:{breadcrumb:{alias:"OrderDetailed"}}}];let f=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,i.Bz.forChild(v)],i.Bz]}),t})();var T=s(4466);let A=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,f,T.m]]}),t})()}}]);