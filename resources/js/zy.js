document.cookie=
// 窗口选择器的jQuery
// 触碰圆点时出现text的jQuery
$(function(){
	$('.visitor-index-point').mouseenter(function(){
		// $('.visitor-index-text').show();
		$(this).siblings().show();
		var indextext = document.getElementById('indextext');
		var indextext2 = document.getElementById('indextext2');
		var indextext3 = document.getElementById('indextext3');
		var indextext4 = document.getElementById('indextext4');
		var indextext5 = document.getElementById('indextext5');
		indextext.style.animation = "moveLeft 0.6s ease-in-out backwards";
		indextext2.style.animation = "moveLeft 0.6s ease-in-out backwards";
		indextext3.style.animation = "moveLeft 0.6s ease-in-out backwards";
		indextext4.style.animation = "moveLeft 0.6s ease-in-out backwards";
		indextext5.style.animation = "moveLeft 0.6s ease-in-out backwards";
	}).mouseleave(function(){
		$('.visitor-index-text').hide();
	})
	// $('.visitor-index-point').mouseover(function(){
	// 	$('.visitor-index-text').show();
	// 	$('.visitor-index').mouseover(function(){
	// 		$('.visitor-index-text').show();
	// 	})
	// })
	// $('.visitor-index').mouseleave(function(){
	// 	$('.visitor-index-text').hide();
	// })
})

//再写一个jQuery
// $(function(){
// 	$('.visitor-index-point').one("mouseover",function(){
// 		$(this).prev().show();
// 	}).one("mouseout",function(){
// 		$(this).prev().hide();
// 	})
// })

// 页面内滑动的jQuery
$(function(){ 
    // 点击圆点或者文字的时候滑动到顶部
    $('.visitor-index-block-headline .visitor-index-point').click(function(){
    $('html,body').animate({scrollTop:0},800);
    })
    $('.visitor-index-block-headline .visitor-index-text').click(function(){
    $('html,body').animate({scrollTop:0},800);
    })
})
$(function(){ 
	// 获得卓音简介窗口的高度
    var visitor_induction_top = $('.visitor-induction').offset().top;
    // 点击圆点或者文字的时候滑动到卓音简介窗口
    $('.visitor-index-block-induction .visitor-index-point').click(function(){
    $('html,body').animate({scrollTop:visitor_induction_top},800);
    })
     $('.visitor-headline-down a').click(function(){
    $('html,body').animate({scrollTop:visitor_induction_top},800);
    })
    $('.visitor-index-block-induction .visitor-index-text').click(function(){
    $('html,body').animate({scrollTop:visitor_induction_top},800);
    })
})
$(function(){ 
	// 获得卓音简介窗口的高度
    var visitor_recommend_top = $('.visitor-recommend').offset().top;
    // 点击圆点或者文字的时候滑动到卓音简介窗口
    $('.visitor-index-recommend .visitor-index-point').click(function(){
    $('html,body').animate({scrollTop:visitor_recommend_top},800);
    })
    $('.visitor-index-recommend .visitor-index-text').click(function(){
    $('html,body').animate({scrollTop:visitor_recommend_top},800);
    })
})
$(function(){ 
	// 获得卓音简介窗口的高度
    var visitor_blog_top = $('.visitor-blog').offset().top;
    // 点击圆点或者文字的时候滑动到卓音简介窗口
    $('.visitor-index-blog .visitor-index-point').click(function(){
    $('html,body').animate({scrollTop:visitor_blog_top},800);
    })
    $('.visitor-index-blog .visitor-index-text').click(function(){
    $('html,body').animate({scrollTop:visitor_blog_top},800);
    })
})
$(function(){ 
	// 获得卓音简介窗口的高度
    var visitor_joinus_top = $('.visitor-joinus').offset().top;
    // 点击圆点或者文字的时候滑动到卓音简介窗口
    $('.visitor-index-joinus .visitor-index-point').click(function(){
    $('html,body').animate({scrollTop:visitor_joinus_top},800);
    })
    $('.visitor-index-joinus .visitor-index-text').click(function(){
    $('html,body').animate({scrollTop:visitor_joinus_top},800);
    })
})

//当滑到该窗口时 圆点变蓝
$(window).scroll(function() {
    var len = $(window).scrollTop();
    var lenH = $(".visitor-headline").offset().top + 335;
    var lenI = $(".visitor-induction").offset().top + 335;
    var lenR = $(".visitor-recommend").offset().top + 335;
    var lenB = $(".visitor-blog").offset().top + 335;
    var lenJ = $(".visitor-joinus").offset().top + 275;
    if (len < lenH) {
        $('.visitor-index-block-headline .visitor-index-point').addClass("visitor-index-point-inex");
        $('.visitor-index-block-headline').siblings().children(".visitor-index-point").removeClass("visitor-index-point-inex");
    } 
    else if (len >= lenH && len < lenI) {
        $('.visitor-index-block-induction .visitor-index-point').addClass("visitor-index-point-inex");
        $('.visitor-index-block-induction').siblings().children(".visitor-index-point").removeClass("visitor-index-point-inex");
    }
    else if (len >= lenI && len < lenR) {
        $('.visitor-index-recommend .visitor-index-point').addClass("visitor-index-point-inex");
        $('.visitor-index-recommend').siblings().children(".visitor-index-point").removeClass("visitor-index-point-inex");
    }
    else if (len >= lenR && len < lenB) {
        $('.visitor-index-blog .visitor-index-point').addClass("visitor-index-point-inex");
        $('.visitor-index-blog').siblings().children(".visitor-index-point").removeClass("visitor-index-point-inex");
    }
    else if (len >= lenB && len < lenJ) {
        $('.visitor-index-joinus .visitor-index-point').addClass("visitor-index-point-inex");
        $('.visitor-index-joinus').siblings().children(".visitor-index-point").removeClass("visitor-index-point-inex");
    }
})

// 推荐界面轮播js
$(function(){
    $(".visitor-recommend-lunbobox ul li").click(function(){
       // 改变样式
       $(this).css({
           "background": "white",
       }).siblings().css({
           "background-color": "transparent",
           "border":"2px solid white",
       })
       // 获取索引，图片索引与按钮索引相同
       var index = $(this).index();
       // 被选定的图片出现，其他图片消失
       $(".visitor-recommend-lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    })
})

// 博客界面轮播js
$(function(){
    $(".visitor-blog-lunbobox ul li").hover(function(){
       // 改变样式
       $(this).css({
           "border": "3px solid #7F92FFFF",
       }).siblings().css({
           "border": "3px solid white",
       })
       // 获取索引，图片索引与按钮索引相同
       var index = $(this).index();
       // 被选定的图片出现，其他图片消失
       $(".visitor-blog-lunbo .visitor-blog-lunbo-box").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    })
})
$(function(){
	var ct = document.getElementById('back');//弹窗
	var clo = document.getElementById('close')//关闭
	$("#open").click(function(){
		ct.style.animation = "moveUp 0.5s ease-in-out backwards";
		clo.style.animation = "moveUp 0.5s ease-in-out backwards";
		two.style.animation = "moveUp 0.5s ease-in-out 0.1s backwards";
	    three.style.animation = "moveUp 0.5s ease-in-out 0.2s backwards";
	    four.style.animation = "moveUp 0.5s ease-in-out 0.3s backwards";
	    five.style.animation = "moveUp 0.5s ease-in-out 0.4s backwards";
	    six.style.animation = "moveUp 0.5s ease-in-out 0.5s backwards";
	    seven.style.animation = "moveUp 0.5s ease-in-out 0.6s backwards";
		ct.style.display = "block";
	})
	$("#close").click(function(){
		ct.style.animation = "moveDown 0.6s ease-in-out backwards";
	    clo.style.animation = "moveDown 0.5s ease-in-out backwards";
	    two.style.animation = "moveDown 0.5s ease-in-out 0.1s backwards";
	    three.style.animation = "moveDown 0.5s ease-in-out 0.2s backwards";
	    four.style.animation = "moveDown 0.5s ease-in-out 0.3s backwards";
	    five.style.animation = "moveDown 0.5s ease-in-out 0.4s backwards";
	    six.style.animation = "moveDown 0.5s ease-in-out 0.5s backwards";
	    seven.style.animation = "moveDown 0.5s ease-in-out 0.6s backwards";
	    setTimeout(xiaoshi,600);
	})
	function xiaoshi()
    {
	    ct.style.display = "none";
    }
})


// ajax从后端获得数据投放在前端
// $(document).ready(function(){
//     $.ajax({
//         url : "",//后台请求的数据
//         dataType : "json",//数据格式 
//         type : "post",//请求方式
//         async : false,//是否异步请求
//         success : function(data) {  //如果请求成功，返回数据。
//         var html = "";//要添加的html
//         var j = 0;//data从0开始
//         $('.visitor-recommend-lunbo a').each(function(){//遍历轮播图下所有的a
//         	var tj = data[j];//获取数据
//         	html = '<img src=' tj.img '><div class="visitor-recommend-lunbo-text"><h1>' tj.h1 '</h1><p>' tj.p '</p></div>';
//         	$(this).html(html);//在html页面的这个a里显示内容
//         	j++;//data数组往下移一位
//             })
//         }
//     });
// })

//登录的ajax
$(function () {
$("#two").click(function(){
        var username = $.trim($("#five").val());
        var password = $.trim($("#three").val());
         if(username == ""){
             alert("请输入用户名");
             return false;
         }else if(password == ""){
             alert("请输入密码");
             return false;         
         }
         //ajax去服务器端校验
         var data = {username:username,password:password};
         
         $.ajax({
            type:"POST",
            url:"http://47.103.10.220:8088/user/login",
            data: data,
            timeout:5000,
            /*{
               "username":"username",
               "password":"password",
            },*/
            success:function(msg){
                //alert(msg);
                if(msg){
                    //用session存储数据
                    //msg.id不用加双引号
                    sessionStorage.setItem("id",msg.id);
                    sessionStorage.setItem("username", msg.username);
                    sessionStorage.setItem("password", msg.password);
                    sessionStorage.setItem("sex", msg.sex);
                    // var un = sessionStorage.getItem("id");
                    // alert(un);
                    alert("登录成功！");
                    //跳转页面
                    window.location.href = "https://www.cnblogs.com/liaoxiaolao/p/10366546.html";
                }else{
                    alert("用户名或者密码错误!");
                    //跳转页面
                    window.location.href = "zy.html";
                }
             },
             //错误反应
             error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert(XMLHttpRequest.status);
                        alert(XMLHttpRequest.readyState);
                        alert(textStatus);
                    },
                    complete: function(XMLHttpRequest, textStatus) {
                        this; // 调用本次AJAX请求时传递的options参数
                    }
        });
 });    
 })

// 报名表的js
$(function () {
            $(".ButtonOne").click(function () {
                $(".Back").show();
            });
            $(".ButtonTwo").click(function(){
                tijiao();
            });
            function tijiao() {

                if ($('#delBatch').serialize() == "") {
                    return false;
                } else {
                    $.ajax({

                        type: "post",
                        dataType: "text",
                        url: "",
                        data: $('.Form').serialize(),
                        success: function (data) {

                            if (data == "ok") {
                                alert("提交成功")

                            } else {
                                alert("提交失败")

                            }

                        },
                        error: function () {
                            alert("异常！");
                        }
                    });
                }

            }
        })