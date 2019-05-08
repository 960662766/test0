import axios from 'axios';
import Mock from 'mockjs';


Mock.mock('/getAppID',(request) => {
	return {
		statusCode:200,
	    message:"success",
	    data:{
	    	appid:'123456789'
	    }
	}
})

