;(function($){
    //一个插件的写法
	$.fn.color = function(option){

		var options = $.extend({
			col: "blue",
			fz : "20px"
		}, option);

		this.css("color", options.col);
		this.css("fontSize", options.fz);

		return this;
	}
})(Zepto);

//多组插件写法
// ;(function($){
	
// 	$.extend($.fn, {
// 		color: function(option){
// 			var options = $.extend({
// 				col: "blue",
// 				fz : "20px"
// 			}, option);

// 			this.css("color", options.col);
// 			this.css("fontSize", options.fz);

// 			return this;
// 		},

// 		background: function(option){
// 			var options = $.extend({
// 				bg: "blue"
// 			}, option);

// 			this.css("background", options.bg);

// 			return this;
// 		}
// 	})

// })(Zepto);