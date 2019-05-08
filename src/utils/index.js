
import store from '@/store'
import config from '@/config'
export default {
	formatUrl(...args){
		if(args.length < 1){
			return new Error('args.length greater than 1')
		}
		if(args.length == 1){
			return args[0]
		}
		if(args.length > 1){
			let endUrl = args[0];
			let regExp = new RegExp('%s');
			for(let i = 1; i<args.length; i++){
				endUrl = endUrl.replace(regExp,args[i]);
			}
			return endUrl;
		}
	},
	getUrlCode(){
		var search = window.location.href.substring((window.location.href.indexOf('?') + 1)),
	        obj = {};
	    if (search) {
	        var arr = search.split("&"),
	            length = arr.length;
	        while (length) {
	            var attr = arr[--length].split("=");
	            obj[decodeURIComponent(attr[0])] = !!attr[1] ? decodeURIComponent(attr[1]) : undefined;
	        }
	    }
	    return obj;
	},
	getTime (time) {
		
		return `${time.getFullYear()}-${this.toZero(time.getMonth() + 1)}-${this.toZero(time.getDate())} ${this.toZero(time.getHours())}:${this.toZero(time.getMinutes())}:${this.toZero(time.getSeconds())}`
	},
	toZero(num){
		return num > 10 ? '' + num : '0' + num; 
	},
	returnRouter(url,time){
		setTimeout(() => {
			this.$router.push(url)
		},time)
	},
	setTitle (title = '码上播') {
		window.document.title = title
	}
}