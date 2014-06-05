Object.create=function=(o){
	var F=function(){};
	F.prototype=o;
	return new f();
	}
}

var newObj=Object.create(o)