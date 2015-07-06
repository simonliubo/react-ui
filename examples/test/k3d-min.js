/**
 * Created by liubo on 15/7/3.
 */
var DEBUG={};if(typeof K3D=="undefined"||!K3D){var K3D={}}(function(){K3D.BaseController=function(){this.objects=[];this.lights=[];this.renderers=[];this.renderers.point=new K3D.PointRenderer();this.renderers.wireframe=new K3D.WireframeRenderer();this.renderers.solid=new K3D.SolidRenderer()};K3D.BaseController.prototype={renderers:null,objects:null,lights:null,sort:true,clearBackground:true,clearingStrategy:"all",fillStyle:null,addK3DObject:function(a){a.setController(this);this.objects.push(a)},addLightSource:function(a){this.lights.push(a)},getRenderer:function(a){return this.renderers[a]},resetBackground:function(j){if(this.clearBackground){if(this.fillStyle){j.fillStyle=this.fillStyle}switch(this.clearingStrategy){case"all":if(this.fillStyle){j.fillRect(0,0,this.canvas.width,this.canvas.height)}else{j.clearRect(0,0,this.canvas.width,this.canvas.height)}case"eachobject":for(var d=0,e=this.objects.length,c,b;d<e;d++){c=this.objects[d];switch(c.drawmode){case"point":b=(c.outputlinescale?c.outputlinescale:c.linescale)+1;if(this.fillStyle){j.fillRect(Floor(c.rminx)-b,Floor(c.rminy)-b,(Ceil(c.rmaxx)-Floor(c.rminx))+b*2+1,(Ceil(c.rmaxy)-Floor(c.rminy))+b*2+1)}else{j.clearRect(Floor(c.rminx)-b,Floor(c.rminy)-b,(Ceil(c.rmaxx)-Floor(c.rminx))+b*2+1,(Ceil(c.rmaxy)-Floor(c.rminy))+b*2+1)}break;case"wireframe":b=(c.outputlinescale?c.outputlinescale:c.linescale)*2;if(this.fillStyle){j.fillRect(Floor(c.rminx)-b,Floor(c.rminy)-b,(Ceil(c.rmaxx)-Floor(c.rminx))+b*2+1,(Ceil(c.rmaxy)-Floor(c.rminy))+b*2+1)}else{j.clearRect(Floor(c.rminx)-b,Floor(c.rminy)-b,(Ceil(c.rmaxx)-Floor(c.rminx))+b*2+1,(Ceil(c.rmaxy)-Floor(c.rminy))+b*2+1)}break;case"solid":if(this.fillStyle){j.fillRect(Floor(c.rminx)-1,Floor(c.rminy)-1,(Ceil(c.rmaxx)-Floor(c.rminx))+1,(Ceil(c.rmaxy)-Floor(c.rminy))+1)}else{j.clearRect(Floor(c.rminx)-1,Floor(c.rminy)-1,Ceil(c.rmaxx)-Floor(c.rminx)+1,Ceil(c.rmaxy)-Floor(c.rminy)+1)}break}}case"combineobjects":var a=1,k=4096,g=-4096,h=4096,f=-4096;for(var d=0,e=this.objects.length,c,b;d<e;d++){c=this.objects[d];switch(c.drawmode){case"point":b=(c.outputlinescale?c.outputlinescale:c.linescale)+1;if(b>a){a=b}break;case"wireframe":b=(c.outputlinescale?c.outputlinescale:c.linescale)*2;if(b>a){a=b}break}if(c.rminx<k){k=c.rminx}if(c.rmaxx>g){g=c.rmaxx}if(c.rminy<h){h=c.rminy}if(c.rmaxy>f){f=c.rmaxy}}if(this.fillStyle){j.fillRect(Floor(k)-a,Floor(h)-a,(Ceil(g)-Floor(k))+a*2+1,(Ceil(f)-Floor(h))+a*2+1)}else{j.clearRect(Floor(k)-a,Floor(h)-a,(Ceil(g)-Floor(k))+a*2+1,(Ceil(f)-Floor(h))+a*2+1)}}}},processFrame:function(c){var g=this.objects;for(var f=0,a=g.length;f<a;f++){g[f].executePipeline()}var e=this.lights;for(var f=0,a=e.length;f<a;f++){e[f].executePipeline()}if(this.sort){g.forEach(function b(k,j,h){k.averagez=null});g.sort(function d(i,h){if(i.averagez===null){i.calculateAverageZ()}if(h.averagez===null){h.calculateAverageZ()}return(i.averagez<h.averagez?1:-1)})}for(var f=0,a=g.length;f<a;f++){c.save();g[f].executeRenderer(c);c.restore()}}}})();(function(){K3D.Controller=function(b,a){K3D.Controller.superclass.constructor.call(this);this.canvas=b;var c=this;if(!a){b.onclick=function(d){c.paused=!c.paused;if(!c.paused){c.frame()}}}};extend(K3D.Controller,K3D.BaseController,{canvas:null,paused:true,callback:null,fps:40,lastFrameStart:0,addK3DObject:function(a){a.setController(this,this.canvas.width,this.canvas.height);this.objects.push(a)},tick:function(){this.frame()},frame:function(){var f=new Date().getTime();if(this.callback){this.callback.call(this)}var a=this.canvas.getContext("2d");if(this.lastFrameStart){this.resetBackground(a)}this.processFrame(a);var b=1000/this.fps;var e=(new Date().getTime()-f);if(!this.paused){var d=this;setTimeout(function(){d.frame()},b-e<=0?1:b-e)}if(DEBUG&&DEBUG.FPS){a.fillStyle="grey";a.fillText("TPF: "+e,4,16);var c=Math.round(1000/(f-this.lastFrameStart));a.fillText("FPS: "+c,4,24)}this.lastFrameStart=f}})})();(function(){K3D.RequestAnimController=function(b,a){K3D.Controller.superclass.constructor.call(this);this.canvas=b;this.framecount=1;var c=this;if(!a){b.onclick=function(d){c.paused=!c.paused;if(!c.paused){c.frame()}}}};extend(K3D.RequestAnimController,K3D.BaseController,{canvas:null,paused:true,callback:null,totalfps:0,framecount:0,lastFrameStart:0,addK3DObject:function(a){a.setController(this,this.canvas.width,this.canvas.height);this.objects.push(a)},frame:function(){var g=Date.now();if(this.callback){this.callback.call(this)}var b=this.canvas.getContext("2d");this.resetBackground(b);this.processFrame(b);var f=(Date.now()-g);if(!this.paused){var a=~~(1000/60-f),e=this;requestAnimFrame(function(){e.frame.call(e)},a)}if(DEBUG&&DEBUG.FPS){b.save();var d=Math.round(1000/(g-this.lastFrameStart)),c=Math.round((this.totalfps+=d)/(this.framecount++));b.fillStyle="white";b.fillRect(4,4,128,10);b.fillStyle="black";b.fillText("TPF: "+f+" FPS: "+d+" AVF: "+c,4,12);b.restore()}this.lastFrameStart=g}})})();window.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(b,a){window.setTimeout(b,a)}})();(function(){K3D.BaseObject=function(){this.matrix=new Array(3);for(var a=0;a<3;a++){this.matrix[a]=new Array(3)}this.angles=new Array(6);return this};K3D.BaseObject.prototype={matrix:null,angles:null,offx:0,offy:0,offz:0,aboutx:0,abouty:0,aboutz:0,ogamma:0,otheta:0,ophi:0,addgamma:0,addtheta:0,addphi:0,velx:0,vely:0,velz:0,bminx:0,bminy:0,bminz:0,bmaxx:0,bmaxy:0,bmaxz:0,rminx:0,rminy:0,rmaxx:0,rmaxy:0,doublesided:false,calcMatrix:function(){var b=this.angles,a=this.matrix;b[0]=Sin(this.ogamma*RAD);b[1]=Cos(this.ogamma*RAD);b[2]=Sin(this.otheta*RAD);b[3]=Cos(this.otheta*RAD);b[4]=Sin(this.ophi*RAD);b[5]=Cos(this.ophi*RAD);a[0][0]=b[5]*b[1];a[1][0]=-(b[5]*b[0]);a[2][0]=b[4];a[0][1]=(b[2]*b[4]*b[1])+(b[3]*b[0]);a[1][1]=(b[3]*b[1])-(b[2]*b[4]*b[0]);a[2][1]=-(b[2]*b[5]);a[0][2]=(b[2]*b[0])-(b[3]*b[4]*b[1]);a[1][2]=(b[2]*b[1])+(b[3]*b[4]*b[0]);a[2][2]=b[3]*b[5]},transformToWorld:function(){},executePipeline:function(){this.ogamma+=this.addgamma;this.otheta+=this.addtheta;this.ophi+=this.addphi;this.offx+=this.velx;this.offy+=this.vely;this.offz+=this.velz;if(this.offx<this.bminx||this.offx>this.bmaxx){this.velx*=-1}if(this.offy<this.bminy||this.offy>this.bmaxy){this.vely*=-1}if(this.offz<this.bminz||this.offz>this.bmaxz){this.velz*=-1}this.calcMatrix();this.transformToWorld()}}})();(function(){K3D.K3DObject=function(){K3D.K3DObject.superclass.constructor.call(this);this.textures=[];return this};extend(K3D.K3DObject,K3D.BaseObject,{controller:null,worldcoords:null,screenx:0,screeny:0,depthscale:0,linescale:2,color:null,drawmode:"point",shademode:"depthcue",sortmode:"sorted",fillmode:"filltwice",perslevel:1024,scale:0,recalculateNormals:false,points:null,edges:null,faces:null,screencoords:null,averagez:null,textures:null,depthcueColors:null,init:function(v,l,f){this.points=v;this.edges=l;this.faces=f;this.worldcoords=new Array(v.length+f.length);for(var n=0,k=this.worldcoords.length;n<k;n++){this.worldcoords[n]={x:0,y:0,z:0}}this.screencoords=new Array(v.length);for(var n=0,k=this.screencoords.length;n<k;n++){this.screencoords[n]={x:0,y:0}}if(this.scale!==0){for(var n=0,k=this.points.length;n<k;n++){v[n].x*=this.scale;v[n].y*=this.scale;v[n].z*=this.scale}}if(this.color===null){this.color=[255,255,255]}this.depthcueColors=new Array(256);for(var q=0,a,o,t;q<256;q++){a=this.color[0]*(q/255);o=this.color[1]*(q/255);t=this.color[2]*(q/255);this.depthcueColors[q]="rgb("+Ceil(a)+","+Ceil(o)+","+Ceil(t)+")"}for(var n=0,k=f.length,p,e,u,m,d,s,h;n<k;n++){p=f[n].vertices;e=v[p[1]].x-v[p[0]].x;u=v[p[1]].y-v[p[0]].y;m=v[p[1]].z-v[p[0]].z;d=v[p[2]].x-v[p[0]].x;s=v[p[2]].y-v[p[0]].y;h=v[p[2]].z-v[p[0]].z;f[n].normal=calcNormalVector(e,u,m,d,s,h);if(!f[n].color){f[n].color=this.color}if(f[n].texture===undefined){f[n].texture=null}}},setController:function(a,b,c){this.controller=a;if(b){this.screenx=b/2;this.screeny=c/2;this.depthscale=this.screenx;this.bminx=-this.screenx;this.bminy=-this.screeny;this.bminz=-this.screenx;this.bmaxx=this.screenx;this.bmaxy=this.screeny;this.bmaxz=this.screenx}},transformToWorld:function(){var k,h,f;var p=this.points,e=this.worldcoords,b=this.faces,n=this.matrix;var l=this.aboutx,j=this.abouty,g=this.aboutz,d=this.offx,c=this.offy,a=this.offz;var r=n[0],o=n[1],m=n[2];for(var q=0,s=p.length;q<s;q++){k=p[q].x+l;h=p[q].y+j;f=p[q].z+g;e[q].x=(r[0]*k)+(r[1]*h)+(r[2]*f)+d;e[q].y=(o[0]*k)+(o[1]*h)+(o[2]*f)+c;e[q].z=(m[0]*k)+(m[1]*h)+(m[2]*f)+a}for(var q=0,s=b.length,t;q<s;q++){t=b[q].normal;k=t.x;h=t.y;f=t.z;b[q].worldnormal=new Vector3D((r[0]*k)+(r[1]*h)+(r[2]*f),(o[0]*k)+(o[1]*h)+(o[2]*f),(m[0]*k)+(m[1]*h)+(m[2]*f))}},transformToScreen:function(){var k,g,e,a=this.worldcoords,h=this.screencoords,m=this.screenx,l=this.screeny,d=this.perslevel;this.rminx=this.rminy=4096;this.rmaxx=this.rmaxy=-4096;for(var b=0,j,f,c=this.points.length;b<c;b++){k=a[b].x;g=a[b].y;e=a[b].z+d;if(e===0){e=0.001}j=h[b].x=((k*d)/e)+m;f=h[b].y=l-((g*d)/e);if(j<this.rminx){this.rminx=j}if(j>this.rmaxx){this.rmaxx=j}if(f<this.rminy){this.rminy=f}if(f>this.rmaxy){this.rmaxy=f}}},executePipeline:function(){if(this.recalculateNormals){var c=this.faces,m=this.points;for(var g=0,e=c.length,h,b,l,f,a,k,d;g<e;g++){h=c[g].vertices;b=m[h[1]].x-m[h[0]].x;l=m[h[1]].y-m[h[0]].y;f=m[h[1]].z-m[h[0]].z;a=m[h[2]].x-m[h[0]].x;k=m[h[2]].y-m[h[0]].y;d=m[h[2]].z-m[h[0]].z;c[g].normal=calcNormalVector(b,l,f,a,k,d)}}K3D.K3DObject.superclass.executePipeline.call(this);this.transformToScreen();this.controller.getRenderer(this.drawmode).sortByDistance(this)},executeRenderer:function(a){this.controller.getRenderer(this.drawmode).renderObject(this,a)},calculateAverageZ:function(){var d=0,c=this.worldcoords;for(var b=0,a=this.points.length;b<a;b++){d+=c[b].z}this.averagez=d/this.points.length}})})();(function(){K3D.LightSource=function(b,c,a){K3D.LightSource.superclass.constructor.call(this);this.location=b;this.color=c;this.intensity=a;return this};extend(K3D.LightSource,K3D.BaseObject,{color:null,intensity:null,location:null,worldvector:null,transformToWorld:function(){var b=this.matrix;var a=this.location.x+this.aboutx;var d=this.location.y+this.abouty;var c=this.location.z+this.aboutz;this.worldvector=new Vector3D((b[0][0]*a)+(b[0][1]*d)+(b[0][2]*c)+this.offx,(b[1][0]*a)+(b[1][1]*d)+(b[1][2]*c)+this.offy,(b[2][0]*a)+(b[2][1]*d)+(b[2][2]*c)+this.offz)}})})();(function(){K3D.Renderer=function(){};K3D.Renderer.prototype={sortByDistance:function(a){},renderObject:function(b,a){}}})();(function(){K3D.PointRenderer=function(){K3D.PointRenderer.superclass.constructor.call(this);return this};extend(K3D.PointRenderer,K3D.Renderer,{sortByDistance:function(a){if(a.shademode!=="plain"&&a.sortmode==="sorted"){this.quickSortObject(a.screencoords,a.worldcoords,0,a.points.length-1)}},quickSortObject:function(h,c,i,d){var e=i,g=d,f;var b;if(d>i){f=c[(i+d)>>1].z/2;while(e<=g){while(e<d&&c[e].z>f){e++}while(g>i&&c[g].z<f){g--}if(e<=g){b=h[e];h[e]=h[g];h[g]=b;b=c[e];c[e]=c[g];c[g]=b;e++;g--}}if(i<g){this.quickSortObject(h,c,i,g)}if(e<d){this.quickSortObject(h,c,e,d)}}},renderObject:function(f,m){var b,h,k;var j=f.screencoords,d=f.worldcoords,n=f.depthscale,a=n/128,l=f.linescale/255;for(var e=0,g=f.points.length;e<g;e++){h=d[e].z+n;h=h/a;switch(f.shademode){case"lightsource":case"plain":m.fillStyle="rgb("+f.color[0]+","+f.color[1]+","+f.color[2]+")";break;case"depthcue":if(h<0){h=0}else{if(h>255){h=255}}h=255-Ceil(h);m.fillStyle=f.depthcueColors[h];break}k=l*h;if(k<0.1){k=0.1}f.outputlinescale=k;m.beginPath();m.arc(j[e].x,j[e].y,k,0,TWOPI,true);m.closePath();m.fill()}}})})();(function(){K3D.WireframeRenderer=function(){K3D.WireframeRenderer.superclass.constructor.call(this);return this};extend(K3D.WireframeRenderer,K3D.Renderer,{sortByDistance:function(a){if(a.shademode!=="plain"&&a.sortmode==="sorted"){this.quickSortObject(a.worldcoords,a.edges,0,a.edges.length-1)}},quickSortObject:function(i,b,h,c){var d=h,g=c,e;var f;if(c>h){e=((i[(b[(h+c)>>1].a)].z)+(i[(b[(h+c)>>1].b)].z))/2;while(d<=g){while((d<c)&&((i[(b[d].a)].z+i[(b[d].b)].z)/2>e)){d++}while((g>h)&&((i[(b[g].a)].z+i[(b[g].b)].z)/2<e)){g--}if(d<=g){f=b[d];b[d]=b[g];b[g]=f;d++;g--}}if(h<g){this.quickSortObject(i,b,h,g)}if(d<c){this.quickSortObject(i,b,d,c)}}},renderObject:function(h,q){var k,n,m,o;var f=h.edges,l=h.screencoords,e=h.worldcoords;var r=h.depthscale,d=r/128,p=h.linescale/255;q.lineWidth=h.linescale;for(var g=0,j=f.length;g<j;g++){n=f[g].a;m=f[g].b;switch(h.shademode){case"lightsource":case"plain":k=h.color;q.strokeStyle="rgb("+k[0]+","+k[1]+","+k[2]+")";break;case"depthcue":k=((e[n].z+e[m].z)/2)+r;k=k/d;if(k<0){k=0}else{if(k>255){k=255}}k=255-Ceil(k);q.strokeStyle=h.depthcueColors[k];o=p*k;if(o<0.1){o=0.1}h.outputlinescale=o;q.lineWidth=o;break}q.beginPath();q.moveTo(l[n].x,l[n].y);q.lineTo(l[m].x,l[m].y);q.closePath();q.stroke()}}})})();(function(){K3D.SolidRenderer=function(){K3D.SolidRenderer.superclass.constructor.call(this);return this};extend(K3D.SolidRenderer,K3D.Renderer,{sortByDistance:function b(g){if(g.sortmode==="sorted"){this.quickSortObject(g.worldcoords,g.faces,0,g.faces.length-1)}},quickSortObject:function a(j,g,i,h){var l,k;g.sort(function(m,q){l=m.vertices;for(var n=0,p=0;n<l.length;n++){p+=j[l[n]].z}p=p/l.length;k=q.vertices;for(var n=0,o=0;n<k.length;n++){o+=j[k[n]].z}o=o/k.length;return(p<o?1:-1)})},renderObject:function c(y,D){var l=y.faces,m=y.screencoords,s=y.worldcoords;var p=y.depthscale,L=p/128;var z=new Vector3D(0,0,1);var u,A,H,K,J,x=PI/2,t,N=y.controller.lights;var M=y.doublesided;var C=(1/y.perslevel)*256;if(y.fillmode==="fillstroke"){D.lineWidth=1}for(var B=0,G=l.length,w;B<G;B++){w=l[B];u=w.vertices;if(M||z.dot(w.worldnormal)<C){switch(y.shademode){case"plain":if(w.texture===null){J=w.color;t="rgb("+J[0]+","+J[1]+","+J[2]+")";this.renderPolygon(D,y,w,t)}else{this.renderPolygon(D,y,w)}break;case"depthcue":for(var F=0,E=u.length,v=0;F<E;F++){v+=s[u[F]].z}var q=((v/u.length)+p)/L;if(q<0){q=0}else{if(q>255){q=255}}if(w.texture===null){q=(255-q)/255;J=w.color;A=Ceil(q*J[0]);H=Ceil(q*J[1]);K=Ceil(q*J[2]);t="rgb("+A+","+H+","+K+")"}else{q=255-Ceil(q);t="rgba(0,0,0,"+(1-(q/255))+")"}this.renderPolygon(D,y,w,t);break;case"lightsource":if(N.length===0){var I=z.thetaTo2(w.worldnormal);J=w.color;A=Ceil(I*(J[0]/PI));H=Ceil(I*(J[1]/PI));K=Ceil(I*(J[2]/PI));if(w.texture===null){t="rgb("+A+","+H+","+K+")"}else{t="rgba(0,0,0,"+(1-I*ONEOPI)+")"}this.renderPolygon(D,y,w,t)}else{A=H=K=0;for(var F=0,E=N.length,o,h;F<E;F++){o=N[F];I=PI-o.worldvector.thetaTo2(w.worldnormal);h=I*((1/o.worldvector.distance(w.worldnormal))*o.intensity)/PI;A+=(h*o.color[0]);H+=(h*o.color[1]);K+=(h*o.color[2])}if(A>1){A=1}if(H>1){H=1}if(K>1){K=1}J=w.color;var k=Ceil(A*J[0])+","+Ceil(H*J[1])+","+Ceil(K*J[2]);if(w.texture===null){t="rgb("+k+")"}else{t="rgba("+k+","+(1-(A+H+K)*0.33333)+")"}this.renderPolygon(D,y,w,t)}break}}}},renderPolygon:function d(t,l,o,s){var p=l.screencoords,n=o.vertices;t.save();if(o.texture===null){if(l.fillmode==="inflate"){var g=this.inflatePolygon(n,p);t.beginPath();t.moveTo(g[0].x,g[0].y);for(var m=1,h=n.length;m<h;m++){t.lineTo(g[m].x,g[m].y)}t.closePath()}else{t.beginPath();t.moveTo(p[n[0]].x,p[n[0]].y);for(var m=1,h=n.length;m<h;m++){t.lineTo(p[n[m]].x,p[n[m]].y)}t.closePath()}switch(l.fillmode){case"fill":t.fillStyle=s;t.fill();break;case"filltwice":t.fillStyle=s;t.fill();t.fill();break;case"inflate":t.fillStyle=s;t.fill();break;case"fillstroke":t.fillStyle=s;t.fill();t.strokeStyle=s;t.stroke();break;case"hiddenline":t.strokeStyle=s;t.stroke();break}}else{var q=l.textures[o.texture];var k=function(G,D,L,C,J,A,H){var B=this.inflatePolygon(G,p);t.save();t.beginPath();t.moveTo(B[0].x,B[0].y);for(var K=1,I=G.length;K<I;K++){t.lineTo(B[K].x,B[K].y)}t.closePath();t.clip();var O=B[0].x,x=B[0].y,N=B[1].x,w=B[1].y,M=B[2].x,v=B[2].y;var u=u=1/(D*(H-J)-C*H+A*J+(C-A)*L);var Q=-(L*(M-N)-J*M+H*N+(J-H)*O)*u,P=(J*v+L*(w-v)-H*w+(H-J)*x)*u,z=(D*(M-N)-C*M+A*N+(C-A)*O)*u,y=-(C*v+D*(w-v)-A*w+(A-C)*x)*u,F=(D*(H*N-J*M)+L*(C*M-A*N)+(A*J-C*H)*O)*u,E=(D*(H*w-J*v)+L*(C*v-A*w)+(A*J-C*H)*x)*u;t.transform(Q,P,z,y,F,E);t.drawImage(q,0,0);if(s){t.fillStyle=s;t.fill()}t.restore()};k.call(this,n.slice(0,3),0,0,q.width,0,q.width,q.height);if(n.length===4){var r=[];r.push(n[2]);r.push(n[3]);r.push(n[0]);k.call(this,r,q.width,q.height,0,q.height,0,0)}}t.restore()},inflatePolygon:function e(p,r){var s=[],l=new Array(p.length);for(var n=0,m=p.length,h,t,g,q,v,u,o;n<m;n++){h=r[p[n]].x;t=r[p[n]].y;if(n<m-1){g=r[p[n+1]].x;q=r[p[n+1]].y}else{g=r[p[0]].x;q=r[p[0]].y}v=q-t;u=-(g-h);o=Sqrt(v*v+u*u);v/=o;u/=o;v*=0.5;u*=0.5;s.push({x:h+v,y:t+u});s.push({x:g+v,y:q+u})}for(var n=0,m=p.length,k;n<m;n++){if(n===0){k=this.intersection(s[(m-1)*2],s[(m-1)*2+1],s[0],s[1])}else{k=this.intersection(s[(n-1)*2],s[(n-1)*2+1],s[n*2],s[n*2+1])}if(Abs(k.x-r[p[n]].x)>1.5||Abs(k.y-r[p[n]].y)>1.5){k.x=r[p[n]].x;k.y=r[p[n]].y}l[n]=k}return l},intersection:function f(j,i,n,m){var h,p,l,g,o,k,q;h=i.x-j.x;p=n.x-m.x;l=n.x-j.x;g=i.y-j.y;o=n.y-m.y;k=n.y-j.y;q=(p*k-o*l)/(g*p-h*o);return{x:j.x+q*(i.x-j.x),y:j.y+q*(i.y-j.y)}}})})();