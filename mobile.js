
/*
.my-good .good-icon:hover {
    color: #fff;
    background-color: #CE0002;
    border-color: #CE0002;
}

.my-good .good-icon:hover .icon1 {
    background-image: url('good-icon_white.png');
}
*/

//mobile
if(typeof(mobile)=="undefined"){
	//如果不是在移动端，则隐藏点赞功能
	//my-inner-auto content
	// var parent=document.getElementsByClassName("my-inner-auto content")[0];
	// var divGood=document.getElementsByClassName("my-good")[0];
	// parent.removeChild(divGood);
}


function like(isLike,likeNumber){
	if(isLike){
        var goodIcon=document.getElementsByClassName("good-icon")[0];
		goodIcon.style.color="#fff";
		goodIcon.style.backgroundColor ="#CE0002";
        goodIcon.style.borderColor="#CE0002";
		var icon=document.getElementsByClassName("icon1")[0];
		icon.style.backgroundImage= 'url(/web/mygc/images/good-icon_white.png)';
		//person-num
		var divPerson=document.getElementsByClassName("person-num")[0];
		divPerson.innerHTML=likeNumber+"人已点赞";
	}else{
	
		var goodIcon=document.getElementsByClassName("good-icon")[0];
		goodIcon.style.color="#ce0002";
		goodIcon.style.backgroundColor ="";
        goodIcon.style.borderColor="#f0c0c0";
		var icon=document.getElementsByClassName("icon1")[0];
		icon.style.backgroundImage= 'url(/web/mygc/images/good-icon.png)';
		//person-num
		var divPerson=document.getElementsByClassName("person-num")[0];
		divPerson.innerHTML=likeNumber+"人已点赞";
	}
}
// var goodIcon=document.getElementsByClassName("good-icon")[0];
 
// goodIcon.onclick=function(){
// 	mobile.like();
// }