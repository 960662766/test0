var vendors = ['webkit', 'moz'];

for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {

    var vp = vendors[i];

    window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];

    window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']

                               || window[vp+'CancelRequestAnimationFrame']);

}

if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy

    || !window.requestAnimationFrame || !window.cancelAnimationFrame) {

    var lastTime = 0;

    window.requestAnimationFrame = function(callback) {

        var now = Date.now();

        var nextTime = Math.max(lastTime + 16, now);

        return setTimeout(function() { callback(lastTime = nextTime); },

                          nextTime - now);

    };

    window.cancelAnimationFrame = clearTimeout;

}
export default {
    radius:140,
    dtr:Math.PI/180,
    d:250,
    mcList:[],
    active:true,
    lasta:1,
    lastb:1,
    distr:true,
    tspeed:10,
    size:250,
    per:0,
    mouseX:-10,
    mouseY:-10,
    howElliptical:1,
    aA:null,
    oDiv:null,
    init(oDiv){
        var i=0;
        var oTag=null;
        this.oDiv = oDiv;
        this.aA=oDiv.getElementsByTagName('span');
        
        for(i=0;i<this.aA.length;i++)
        {
            oTag={};
            
            oTag.offsetWidth=this.aA[i].offsetWidth;
            oTag.offsetHeight=this.aA[i].offsetHeight;
            
            this.mcList.push(oTag);
        }
        
        this.sineCosine( 0,0,0 );
        
        this.positionAll();
        
        this.oDiv.onmouseover= ()=>{
            this.active=true;
        };
        
        this.oDiv.onmouseout= () =>{
            this.active=true;
        };
        
        this.oDiv.onmousemove= (ev) =>{
            var oEvent=window.event || ev;
            this.mouseX=oEvent.clientX-(this.oDiv.offsetLeft+this.oDiv.offsetWidth/2);
            this.mouseY=oEvent.clientY-(this.oDiv.offsetTop+this.oDiv.offsetHeight/2);
            this.mouseX/=10;
            this.mouseY/=10;
        };
        requestAnimationFrame(this.update.bind(this));
        // setInterval(this.update.bind(this), 30);
    },
    sineCosine( a, b, c){
        this.sa = Math.sin(a * this.dtr);
        this.ca = Math.cos(a * this.dtr);
        this.sb = Math.sin(b * this.dtr);
        this.cb = Math.cos(b * this.dtr);
        this.sc = Math.sin(c * this.dtr);
        this.cc = Math.cos(c * this.dtr);
    },
    doPosition(){
        var l=this.oDiv.offsetWidth/2;
        var t=this.oDiv.offsetHeight/2;
        for(var i=0;i<this.mcList.length;i++)
        {
            // this.aA[i].style.left=this.mcList[i].cx+l-this.mcList[i].offsetWidth/2+'px';
            // this.aA[i].style.top=this.mcList[i].cy+t-this.mcList[i].offsetHeight/2+'px';
            if (!this.aA[i]) continue
            var left = this.mcList[i].cx+l-this.mcList[i].offsetWidth/2+'px'
            var top = this.mcList[i].cy+t-this.mcList[i].offsetHeight/2+'px';
            this.aA[i].style.WebkitTransform  = 'translate('+left+','+top+')';
            
            this.aA[i].style.fontSize=Math.ceil(12*this.mcList[i].scale/2)+8+'px';
            
            this.aA[i].style.filter="alpha(opacity="+100*this.mcList[i].alpha+")";
            this.aA[i].style.opacity=this.mcList[i].alpha;
        }
        
    },
    positionAll(){
        var phi=0;
        var theta=0;
        var max=this.mcList.length;
        var i=0;
        
        var aTmp=[];
        var oFragment=document.createDocumentFragment();
        
        for(i=0;i<this.aA.length;i++)
        {
            aTmp.push(this.aA[i]);
        }
        
        aTmp.sort
        (
            function ()
            {
                return Math.random()<0.5?1:-1;
            }
        );
        
        for(i=0;i<aTmp.length;i++)
        {
            oFragment.appendChild(aTmp[i]);
        }
        
        this.oDiv.appendChild(oFragment);
        
        for( var i=1; i<max+1; i++){
            if( this.distr )
            {
                phi = Math.acos(-1+(2*i-1)/max);
                theta = Math.sqrt(max*Math.PI)*phi;
            }
            else
            {
                phi = Math.random()*(Math.PI);
                theta = Math.random()*(2*Math.PI);
            }
            this.mcList[i-1].cx = this.radius * Math.cos(theta)*Math.sin(phi);
            this.mcList[i-1].cy = this.radius * Math.sin(theta)*Math.sin(phi);
            this.mcList[i-1].cz = this.radius * Math.cos(phi);
            
            // this.aA[i-1].style.left=this.mcList[i-1].cx+this.oDiv.offsetWidth/2-this.mcList[i-1].offsetWidth/2+'px';
            // this.aA[i-1].style.top=this.mcList[i-1].cy+this.oDiv.offsetHeight/2-this.mcList[i-1].offsetHeight/2+'px';
            var left = this.mcList[i-1].cx+this.oDiv.offsetWidth/2-this.mcList[i-1].offsetWidth/2+'px';
            var top = this.mcList[i-1].cy+this.oDiv.offsetHeight/2-this.mcList[i-1].offsetHeight/2+'px';
            this.aA[i-1].style.transform = 'translate('+left+','+top+')';
        }
    },
    depthSort(){
        var i=0;
        var aTmp=[];
        
        for(i=0;i<this.aA.length;i++)
        {
            aTmp.push(this.aA[i]);
        }
        
        aTmp.sort
        (
            function (vItem1, vItem2)
            {
                if(vItem1.cz>vItem2.cz)
                {
                    return -1;
                }
                else if(vItem1.cz<vItem2.cz)
                {
                    return 1;
                }
                else
                {
                    return 0;
                }
            }
        );
        
        for(i=0;i<aTmp.length;i++)
        {
            aTmp[i].style.zIndex=i;
        }
    },
    update(){
        var a;
        var b;
        if(this.active)
        {
            a = (-Math.min( Math.max( -this.mouseY, -this.size ), this.size ) / this.radius ) * this.tspeed;
            b = (Math.min( Math.max( -this.mouseX, -this.size ), this.size ) / this.radius ) * this.tspeed;
        }
        else
        {
            a = this.lasta * 0.98;
            b = this.lastb * 0.98;
        }
        this.lasta=a;
        this.lastb=b;
        
        if(Math.abs(a)<=0.01 && Math.abs(b)<=0.01)
        {
            requestAnimationFrame(this.update.bind(this));

            return;
        }
        
        var c=0;
        this.sineCosine(a,b,c);
        for(var j=0;j<this.mcList.length;j++)
        {
            var rx1=this.mcList[j].cx;
            var ry1=this.mcList[j].cy*this.ca+this.mcList[j].cz*(-this.sa);
            var rz1=this.mcList[j].cy*this.sa+this.mcList[j].cz*this.ca;
            
            var rx2=rx1*this.cb+rz1*this.sb;
            var ry2=ry1;
            var rz2=rx1*(-this.sb)+rz1*this.cb;
            
            var rx3=rx2*this.cc+ry2*(-this.sc);
            var ry3=rx2*this.sc+ry2*this.cc;
            var rz3=rz2;
            
            this.mcList[j].cx=rx3;
            this.mcList[j].cy=ry3;
            this.mcList[j].cz=rz3;
            
            this.per=this.d/(this.d+rz3);
            
            this.mcList[j].x=(this.howElliptical*rx3*this.per)-(this.howElliptical*2);
            this.mcList[j].y=ry3*this.per;
            this.mcList[j].scale=this.per;
            this.mcList[j].alpha=this.per;
            
            this.mcList[j].alpha=(this.mcList[j].alpha-0.6)*(10/6);
        }
        
        this.doPosition();
        this.depthSort();
        requestAnimationFrame(this.update.bind(this));

    }
}