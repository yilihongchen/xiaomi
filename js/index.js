//导航效果
{
	// let nav=document.querySelector(".nav_wenzi");
	let navboxs=document.querySelectorAll(".nav_box1");
	let lis=document.querySelectorAll(".nav_wenzi li");
	lis.forEach(function(ele,index){
		ele.onmouseenter=function(){
			navboxs[index].style.height="260px";
			navboxs[index].style.borderTop="1px solid #e0e0e0";
		}
		ele.onmouseleave=function(){
			navboxs[index].style.height="0";
			navboxs[index].style.borderTop="none";
		}

	});
}

//banner效果
{
	const imgs=document.querySelectorAll(".banner_img .lunbo_img");
	const pagers=document.querySelectorAll(".pagerbox li");
	const banner=document.querySelector("#banner");
	const next=document.querySelector(".next");
	const prev=document.querySelector(".prev");
	console.dir(imgs);
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<pagers.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	});
	let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<pagers.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			imgs[n].classList.add("active");
			pagers[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t)
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	next.onclick=function(){
		move();
	};
	prev.onclick=function(){
		n-=2;
		move();
	}
}
{
	let listems=document.querySelectorAll(".banner_nav .b_item");

	let menus=document.querySelectorAll(".menu");
	console.log(listems);
    console.log(menus);
	let obj=menus[0];
    listems.forEach(function(ele,index){
		ele.onmouseenter=function(){

			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}

	})
}
//闪购部分效果
{
	const prev=document.querySelector(".buy_prev");
	const next=document.querySelector(".buy_next");
	const inner=document.querySelector(".buy_inner");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-992*n+"px";
	};
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			prev.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-992*n+"px";
	};
}
//内容智能区域
{	
	function content(parent){
	const types=parent.querySelectorAll(".type");
	const goods=parent.querySelectorAll(".zhineng_item_lunbo");
	const items=parent.querySelectorAll(".zhineng_item")
	console.log(types);
	console.log(goods);
	types.forEach(function(ele,index){
		ele.onmouseenter=function(){
		for(let i=0;i<types.length;i++){
			types[i].classList.remove("active");
			goods[i].classList.remove("active");
		}
		this.classList.add("active");
		goods[index].classList.add("active");
		}
	});
	
	}
	const contentlist=document.querySelectorAll(".dapei");
	contentlist.forEach(function(ele){
		content(ele);
	})
}
//内容区域
{
	function wheel(parent){
	let prev=parent.querySelector(".banner_lbtn");
	let next=parent.querySelector(".banner_rbtn");
	let inner=parent.querySelector(".inner");
	let circles=parent.querySelectorAll(".circle");
	let content=parent.querySelectorAll(".contents");
	let n=0;
	next.onclick=function(){
		n++;
		if(n===content.length){
			n=content.length-1;
		}
		inner.style.marginLeft=n*-296+"px";
		circles[n].classList.add("active");
		circles[n-1].classList.remove("active");

	};
	prev.onclick=function(){
		n--;
		if(n<0){
			n=0;
		}
		inner.style.marginLeft=n*-296+"px";
		circles[n].classList.add("active");
		circles[n+1].classList.remove("active");
		obj=circles[n];

	};
	let obj=circles[0];
	circles.forEach(function(ele,index){
		ele.onclick=function(){
			obj.classList.remove("active");
			ele.classList.add("active");
			obj=ele;
			inner.style.marginLeft=index*-296+"px";
			n=index;
		}
	})

}
	const contentitems=document.querySelectorAll(".content_item");
	contentitems.forEach(function(ele){
		wheel(ele);
	})
}
//为你推荐区域
{
	const prev=document.querySelector(".buy_prev1");
	const next=document.querySelector(".buy_next1");
	const inner=document.querySelector(".buy_inner1");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	};
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			prev.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	};
}