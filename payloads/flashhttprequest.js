/*	SWFObject v2.2 
 
	is released under the MIT License 
 
*/
var FlashHTTPRequest;
var swfobject=function(){var D=&#34;undefined&#34;,r=&#34;object&#34;,S=&#34;Shockwave Flash&#34;,W=&#34;ShockwaveFlash.ShockwaveFlash&#34;,q=&#34;application/x-shockwave-flash&#34;,R=&#34;SWFObjectExprInst&#34;,x=&#34;onreadystatechange&#34;,O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&amp;&amp;typeof j.getElementsByTagName!=D&amp;&amp;typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,&#34;$1&#34;)):false,X=!+&#34;\v1&#34;,ag=[0,0,0],ab=null;if(typeof t.plugins!=D&amp;&amp;typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&amp;&amp;!(typeof t.mimeTypes!=D&amp;&amp;t.mimeTypes[q]&amp;&amp;!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,&#34;$1&#34;);ag[0]=parseInt(ab.replace(/^(.*)\..*$/,&#34;$1&#34;),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,&#34;$1&#34;),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,&#34;$1&#34;),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable(&#34;$version&#34;);if(ab){X=true;ab=ab.split(&#34; &#34;)[1].split(&#34;,&#34;);ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&amp;&amp;j.readyState==&#34;complete&#34;)||(typeof j.readyState==D&amp;&amp;(j.getElementsByTagName(&#34;body&#34;)[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener(&#34;DOMContentLoaded&#34;,f,false)}if(M.ie&amp;&amp;M.win){j.attachEvent(x,function(){if(j.readyState==&#34;complete&#34;){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll(&#34;left&#34;)}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName(&#34;body&#34;)[0].appendChild(C(&#34;span&#34;));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y
0){for(var af=0;af
0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&amp;&amp;!(M.wk&amp;&amp;M.wk&lt;312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&amp;&amp;A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute(&#34;width&#34;)||&#34;0&#34;;ai.height=ae.getAttribute(&#34;height&#34;)||&#34;0&#34;;if(ae.getAttribute(&#34;class&#34;)){ai.styleclass=ae.getAttribute(&#34;class&#34;)}if(ae.getAttribute(&#34;align&#34;)){ai.align=ae.getAttribute(&#34;align&#34;)}var ah={};var X=ae.getElementsByTagName(&#34;param&#34;);var ac=X.length;for(var ad=0;ad
&#39;}}aa.outerHTML=&#39;
&#34;+af+&#34;
&#34;;N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute(&#34;type&#34;,q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()==&#34;styleclass&#34;){Z.setAttribute(&#34;class&#34;,ai[ac])}else{if(ac.toLowerCase()!=&#34;classid&#34;){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&amp;&amp;ab.toLowerCase()!=&#34;movie&#34;){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C(&#34;param&#34;);aa.setAttribute(&#34;name&#34;,X);aa.setAttribute(&#34;value&#34;,Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&amp;&amp;X.nodeName==&#34;OBJECT&#34;){if(M.ie&amp;&amp;M.win){X.style.display=&#34;none&#34;;(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]==&#34;function&#34;){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(&#34;.&#34;);X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]&gt;X[0]||(Y[0]==X[0]&amp;&amp;Y[1]&gt;X[1])||(Y[0]==X[0]&amp;&amp;Y[1]==X[1]&amp;&amp;Y[2]&gt;=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&amp;&amp;M.mac){return}var aa=j.getElementsByTagName(&#34;head&#34;)[0];if(!aa){return}var X=(ad&amp;&amp;typeof ad==&#34;string&#34;)?ad:&#34;screen&#34;;if(ab){n=null;G=null}if(!n||G!=X){var Z=C(&#34;style&#34;);Z.setAttribute(&#34;type&#34;,&#34;text/css&#34;);Z.setAttribute(&#34;media&#34;,X);n=aa.appendChild(Z);if(M.ie&amp;&amp;M.win&amp;&amp;typeof j.styleSheets!=D&amp;&amp;j.styleSheets.length&gt;0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&amp;&amp;M.win){if(n&amp;&amp;typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&amp;&amp;typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+&#34; {&#34;+Y+&#34;}&#34;))}}}function w(Z,X){if(!m){return}var Y=X?&#34;visible&#34;:&#34;hidden&#34;;if(J&amp;&amp;c(Z)){c(Z).style.visibility=Y}else{v(&#34;#&#34;+Z,&#34;visibility:&#34;+Y)}}function L(Y){var Z=/[\\\&#34;&lt;&gt;\.;]/;var X=Z.exec(Y)!=null;return X&amp;&amp;typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&amp;&amp;M.win){window.attachEvent(&#34;onunload&#34;,function(){var ac=I.length;for(var ab=0;ab



