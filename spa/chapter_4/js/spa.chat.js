spa.chat = (function(){
	var configMap = {
		main_html : String()
			+ '<div style = "padding:1em; color:#fff;">'
				+'Say hello to chat'
			+ '</div>',
		settable_map : {}
	},
	stateMap = {$container : null},
	jqueryMap = {},
	setJqueryMap, configModule, initModule;

	setJqueryMap = function(){

		// 给jqueryMap设值
		var $container = stateMap.$container;
		jqueryMap = {$container : $container};
	};

	configModule = function(input_map){

		// 功能模块设值，核心其实都是调用了util下面的ConfigMap函数
		spa.util.setConfigMap({
			input_map : input_map,
			settable_map : configMap.settable_map,
			config_map : configMap
		});
	};

	initModule = function ($container){
		$container.html( configMap.main_html );
		stateMap.$container = $container;
		setJqueryMap();
		return true;
	}

	return {
		configModule : configModule,
		initModule : initModule
	}
	
}());