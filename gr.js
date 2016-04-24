(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)||/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

if (!Array.prototype.filter)
{
  Array.prototype.filter = function(fun /*, thisArg */)
  {
    "use strict";

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function")
      throw new TypeError();

    var res = [];
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++)
    {
      if (i in t)
      {
        var val = t[i];

        // NOTE: Technically this should Object.defineProperty at
        //       the next index, as push can be affected by
        //       properties on Object.prototype and Array.prototype.
        //       But that method's new, and collisions should be
        //       rare, so use the more-compatible alternative.
        if (fun.call(thisArg, val, i, t))
          res.push(val);
      }
    }

    return res;
  };
}

if ( 'function' !== typeof Array.prototype.reduce ) {
  Array.prototype.reduce = function( callback /*, initialValue*/ ) {
    'use strict';
    if ( null === this || 'undefined' === typeof this ) {
      throw new TypeError(
         'Array.prototype.reduce called on null or undefined' );
    }
    if ( 'function' !== typeof callback ) {
      throw new TypeError( callback + ' is not a function' );
    }
    var t = Object( this ), len = t.length >>> 0, k = 0, value;
    if ( arguments.length >= 2 ) {
      value = arguments[1];
    } else {
      while ( k < len && ! k in t ) k++; 
      if ( k >= len )
        throw new TypeError('Reduce of empty array with no initial value');
      value = t[ k++ ];
    }
    for ( ; k < len ; k++ ) {
      if ( k in t ) {
         value = callback( value, t[k], k, t );
      }
    }
    return value;
  };
}

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
      if ( this === undefined || this === null ) {
        throw new TypeError( '"this" is null or not defined' );
      }

      var length = this.length >>> 0; // Hack to convert object.length to a UInt32

      fromIndex = +fromIndex || 0;

      if (Math.abs(fromIndex) === Infinity) {
        fromIndex = 0;
      }

      if (fromIndex < 0) {
        fromIndex += length;
        if (fromIndex < 0) {
          fromIndex = 0;
        }
      }

      for (;fromIndex < length; fromIndex++) {
        if (this[fromIndex] === searchElement) {
          return fromIndex;
        }
      }

      return -1;
    };
  }

window.SOM = {
	"timers"			:	{},
	
	"init"				:	function(){
		
		this.agent = jQuery.browser;
		this.hash = String(window.location.hash);
		this.MAX_FILE_SIZE = 100;
	},
	
	"LOCALE"			:	{
		"popup_message_template"			:"popup_message",
		"popup_error_message_template"		:"popup_error_message",
		"popup_success_message_template"	:"popup_success_message",
		"popup_confirm_template"			:"popup_confirm",
		"popup_error_title"					:"Error!",
		"popup_success_title"				:"Complete",
		"popup_confirm_title"				:"Are you sure?",
		"popup_message_max_file_size"		:"Maximum file size",
		"MB"								:"mb"
	},
	
	"locale_update"		:	function(args){
		for(var k in args){
			SOM.LOCALE[k] = args[k];
		}
	},
	
	"bindings"			:	{
		"document_ready"	:	function(){
			$(document).ready(function(){
				$(".som-remove-on-ready").remove();
	
				$("[data-disabled=true] input").add("[data-disabled=true] select").add("[data-disabled=true] textarea").attr("disabled","disabled");

				if (!$.browser.mobile){
					SOM.popup_center_all();
				}

				SOM.on_dom_change();
				
				$(document).on("click", "a.som-prevent-default", function(event){
					event.preventDefault();
					return false;
				});

				$(document).on("click", "a.som-keep-get-param", function(){
					$(this).attr("href",$(this).attr("href")+$.query.toString());
				});

				$(document).on("keydown", ".som-ajax-submit-container input[data-type=submit]", function(event){
					if (event.keyCode == "13"){

						/*
						$(this).closest(".som-ajax-submit-container").find(".som-ajax-submit-trigger").click();
						*/
						event.preventDefault();
						$(this).trigger("change");
						
						if ($(this).attr("data-som-no-keydown-13")){
							$(this).blur();
							return;
						}
						
						if ($(this).closest(".som-excel").size() > 0 || $(this).closest(".som-auto-submit").size() > 0){
							$(this).blur();
						}
						else {
							SOM.ajax_container_submit($(this).closest(".som-ajax-submit-container"),null,event);
						}
					}
				});
				
				$(".som-function-caller").on("click", function(event){
					event.preventDefault();
					if($(this).attr("data-disabled")){
						return false;
					}
					
					var fn = $(this).attr("data-function");
					var arguments = new Array();
					arguments.push(fn);
					
					if ($(this).attr("data-args")){
						var args = $(this).attr("data-args").split(",");
						for(var i in args){
							arguments.push($(this).attr("data-"+args[i]));
						}
					}
					arguments.push($(this));
					SOM.run_if_function.apply(null, arguments);
				});

				$(".som-ajax-submit-container .som-action-trigger").each(function(){
					var actions = $(this).attr("data-trigger-action").split(",");
					for (var i in actions){
						var action = actions[i];
						$(this).bind(action, function(event){
							var action = event.type;
							var container = $(this).closest(".som-ajax-submit-container");
							var names = $(this).attr("data-trigger-"+action+"-target-names").split(",");
							var tr_action = $(this).attr("data-trigger-"+action+"-action");
							if (tr_action == "set" || tr_action == "set-no-overwrite"){
								var values = $(this).attr("data-trigger-"+action+"-set-values").split(",");
								if (names.length == values.length){
									for(var i in names){
										var target = container.find("[name="+names[i]+"]");
										if (tr_action == "set" || target.val().trim() == ""){
											target.val(values[i]);
										}
									}
								}
							}
							else if ($(this).attr("data-trigger-"+action+"-action") == "select"){
								container.find("[name="+names[0]+"]").select();
							}
						});
					}
				});
				
				$(".som-sync-value").each(function(){
					var target = $($(this).attr("data-sync-to"));
					target.val($(this).val());
				});
				
				$(document).on("change", ".som-sync-value", function(event){
					var target = $($(this).attr("data-sync-to"));
					target.val($(this).val());
				});

				/*
				$(document).on("change", ".som-ajax-submit-container .submit-on-change[data-type=submit]", function(event){
					SOM.ajax_container_submit($(this).closest(".som-ajax-submit-container"), null, event);
				});

				$(document).on("change", ".som-excel .som-ajax-submit-container [data-type=submit]", function(event){
					SOM.ajax_container_submit($(this).closest(".som-ajax-submit-container"), null, event);
				})
				$(document).on("change", ".som-excel.som-ajax-submit-container [data-type=submit]", function(event){
					SOM.ajax_container_submit($(this).closest(".som-ajax-submit-container"), null, event);
				})
				*/
			   $(document).on("change", ".som-ajax-submit-container .submit-on-change[data-type=submit],.som-excel .som-ajax-submit-container [data-type=submit],.som-excel.som-ajax-submit-container [data-type=submit],.som-auto-submit .som-ajax-submit-container [data-type=submit],.som-auto-submit.som-ajax-submit-container [data-type=submit]", function(event){
				   SOM.ajax_container_submit($(this).closest(".som-ajax-submit-container"), null, event);
				});
				/*
			   $(".som-ajax-submit-container .submit-on-change[data-type=submit]")
				.add(".som-excel .som-ajax-submit-container [data-type=submit]")
				.add(".som-excel.som-ajax-submit-container [data-type=submit]")
				.add(".som-auto-submit .som-ajax-submit-container [data-type=submit]")
				.add(".som-auto-submit.som-ajax-submit-container [data-type=submit]")
				.on("change", function(event){
					SOM.ajax_container_submit($(this).closest(".som-ajax-submit-container"), null, event);
				});
				*/
				$(".som-auto-submit .som-ajax-submit-container [data-type=submit]")
				.add(".som-auto-submit.som-ajax-submit-container [data-type=submit]")
				.on("keyup", function(e){
					var input = $(this);
					var timer_name = "sas_"+SOM.hashCode($(this).getPath());
					clearTimeout(SOM.timers[timer_name]);
					SOM.timers[timer_name] = setTimeout(function(){
						input.trigger("change");
					},2000);
				});
				
				$(document).on("click",".som-ajax-submit-trigger",function(event){
					event.preventDefault();
					var container = $(this).closest(".som-ajax-submit-container");
					if ($(this).hasClass("som-set-values")){
						var names = $(this).attr("data-set-names").split(",");
						var values = $(this).attr("data-set-values").split(",");
						if (names.length != values.length) {
							console.log("Arg mismatch");
							return false;
						}
						for(var i in names){
							if (container.find("[name="+names[i]+"]").size() == 0){
								container.append('<input type="hidden" name="'+names[i]+'" value="'+values[i]+'" />');
								var element = container.find("[name="+names[i]+"]");
								if ($(this).attr("data-set-type")){
									element.attr("data-type",$(this).attr("data-set-type"));
								}
								if ($(this).attr("data-set-attribute")){
									element.attr("data-attribute",$(this).attr("data-set-attribute"));
								}
							}
						}
					}
					
					if ($(this).attr("data-submit-confirm")){
						container.attr("data-submit-confirm",$(this).attr("data-submit-confirm"));
					}
					if ($(this).attr("data-submit-confirm-message")){
						container.attr("data-submit-confirm-message",$(this).attr("data-submit-confirm-message"));
					}
					SOM.ajax_container_submit(container, null, event);
				});
				$(".som-ajax-submit-trigger").on({
					mouseenter: function () {
						var container = $(this).closest(".som-ajax-submit-container");
						container.find("[data-type=submit]").add(container.find(".som-select-auto-complete-input")).addClass("som-highlighted");
					},
					mouseleave: function () {
						var container = $(this).closest(".som-ajax-submit-container");
						container.find(".som-highlighted[data-type=submit]").add(container.find(".som-select-auto-complete-input.som-highlighted")).removeClass("som-highlighted");
					}
				});

				$(".som-filter-container .som-ajax-submit-trigger").unbind("click");
				$(document).on("click",".som-filter-container .som-ajax-submit-trigger",function(event){
					event.preventDefault();
					var url = $.query;
					var filters = new Object();
					var container = $(this).closest(".som-filter-container");
					container.find("[data-type=submit]").each(function(){
						var filter_group = $(this).attr("data-filter");
						if (typeof filters[filter_group] == "undefined"){
							filters[filter_group] = new Array();
						}
						url = url.remove($(this).attr("name"));
						var val = $(this).val().trim();
						if (val != ""){
							var name = $(this).attr("name");
							url = url.set(name,val);
							filters[filter_group].push(name);
						}
					});
					for(var i in filters){
						if (filters[i].length > 0){
							url = url.set(i,filters[i].join(','));
						}
						else {
							url = url.remove(i);
						}
					}

					if (url.toString() == ""){
						window.location = window.location.href.split("?")[0];
						return false;
					}

					window.location = url.toString();
					return false;
				});

				$(document).on("click",".som-popup-trigger-close",function(event){
					event.preventDefault();
					var popup = $(this).closest(".som-popup-box");
					SOM.popupOverlay(false);
					popup.fadeOut(300,function(){
						popup.remove();
					});
				});

				$(document).on("click",".som-popup-trigger-hide",function(event){
					event.preventDefault();
					SOM.popupOverlay(false);
					var popup = $(this).closest(".som-popup-box");
					popup.fadeOut(300);
				});

				$(document).on("click", ".som-sort-handler", function(event){
					if ($(event.target).is("[data-type=submit]")){
						event.preventDefault();
						return false;
					}
					var args = $.query;
					if (!$(this).attr("data-column")){
						return false;
					}
					args = args.set("ss",$(this).attr("data-column"));
					if ($(this).hasClass("som-sort-asc")){
						args = args.set("ssd","d");
					}
					else {
						args = args.set("ssd","a");
					}
					window.location = args.toString();
				})

				$(document).on("focus", ".som-select-auto-complete-input", function(){
					var input = $(this);
					setTimeout(function(){
						input.select();
					}, 10);
					SOM.get_auto_complete_list($(this));
				})

				$(document).on("keydown", ".som-select-auto-complete-input", function(event){
					if (event.keyCode == "38" || event.keyCode == "40"){
						var list = $(this).siblings(".som-select-auto-complete-list");
						var li = list.find("li.selected");
						if (event.keyCode == "38"){
							if (li.prev().size() == 0){
								return;
							}
							li.removeClass("selected").prev().addClass("selected");
						}
						else {
							if (li.size() == 0){
								li = list.find("li").first();
							}
							else {
								if (li.next().size() == 0){
									return;
								}
								li = li.removeClass("selected").next();
							}
							li.addClass("selected");
						}
						list.scrollTop((li.prevAll().size()-1)*li.height())
					}
				});

				$(document).on("keyup", ".som-select-auto-complete-input", function(event){
					if (event.keyCode == "38" || event.keyCode == "40" || event.keyCode == "9"){
						return;
					}
					else if (event.keyCode == "13"){
						var list = $(this).siblings(".som-select-auto-complete-list");
						list.find("li.selected").trigger("mousedown");
						//list.hide();
						//$(this).siblings(".som-select-auto-complete-value").trigger("change");
						$(this).blur();
					}
					else {
						$(this).siblings(".som-select-auto-complete-value").val("");
						SOM.get_auto_complete_list($(this));
					}
				})
				$(document).on("blur", ".som-select-auto-complete-input", function(){
					/*
					var input = $(this);
					
					var value = $(this).siblings(".som-select-auto-complete-value");
					if (value.val() == ""){
						input.val("");
						//value.trigger("change");
					}
					
					*/
				   var list = $(this).siblings(".som-select-auto-complete-list");
				   list.hide();
				})
				$(document).on("mousedown", ".som-select-auto-complete-list li", function(){
					var parent = $(this).parent();
					var input = parent.siblings(".som-select-auto-complete-input");
					input.val($(this).find("span").first().text());
					parent.siblings(".som-select-auto-complete-value").val($(this).attr("data-value")).trigger("change");
					parent.hide();
				});

				$(document).on("mouseover", ".som-select-auto-complete-list li",function(){
					$(this).siblings(".selected").removeClass("selected");
					$(this).addClass("selected");
				});

				$(document).on("click", ".som-display-trigger", function(event){
					if ($(this).find(".som-display-trigger").size() > 0) {

					}
					else {
						var container = $(this).parent().closest(".som-display-trigger");
						if (container.size() == 0){
							container = $(this);
						}
						event.preventDefault();
						event.stopPropagation();
						var visibles = container.siblings(".som-display-trigger-target:visible");
						var hidden = container.siblings(".som-display-trigger-target:not(:visible)");
						visibles.hide();
						hidden.show();
					}
				})

				$(document).on("click", ".som-display-trigger-target", function(event){
					event.stopPropagation();
				})

				$(document).on("click", "body", function(){
					$(".som-display-trigger-target:visible:not(.som-display-trigger-target-persistent)").hide();
				});

				$(".som-auto-focus").last().focus().select();
				
				$(document).on("focus",".som-default-value",function(){
					
					if ($(this).val() == $(this).attr("data-default-value")){
						$(this).val("");
					}
				});
				$(document).on("blur",".som-default-value",function(){
					if ($(this).val() == ""){
						$(this).val($(this).attr("data-default-value"));
					}
				});
				
				$(document).on("mousewheel", ".som-confine-scroll", function(event){
					var delta = event.originalEvent.wheelDelta;
					if ((($(this).scrollTop() - $(this)[0].scrollHeight + $(this).height()) === 0 && delta < 0) || ($(this).scrollTop() === 0 && delta > 0)){
						event.preventDefault();
					}
				});

			});
		},

		"window_load"		:	function(){
			$(window).load(function(){
				$(".som-on-load-focus").focus();
				if (typeof(SOM.dom_selected) != "undefined"){
					var doms = $(SOM.dom_selected);
					if (doms.size() == 1){
						doms.focus();
					}
				}
			});
		},

		"window_resize"		:	function(){
			$(window).on("onresize resize onorientationchange orientationchange",function(){
				SOM.popup_center_all();
				$("div.som-popup-overlay").height($(window).height());
			});
		}
	},
	
	"bind_all"				:	function(){
		for(var i in this.bindings){
			this.bindings[i]();
		}
	},
	
	"on_dom_change"			:	function (){
		$("iframe.som-ajax-receiver").unbind("load").load(function(){
			var data = ($(this).contents().text());
			if (data == "empty"){
				return;
			}
			SOM.ajax_process_response($(this).closest(".som-ajax-submit-container"), data);
		});
	},
	
	"ajax_process_response":	function(container, response){
		container.find(".som-default-value").focus();
		if (container.attr("data-wait-popup-message")){
			//console.log($("[data-popup-id="+container.attr("data-wait-popup-message-id")+"] .som-popup-trigger-close"));
			$("[data-popup-id="+container.attr("data-wait-popup-message-id")+"]").closest(".som-popup-box").find(".som-popup-trigger-close").first().click();
		}
		if (container.attr("data-som-process-response-function")){
			var fn = container.attr("data-som-process-response-function");
			SOM.run_if_function(fn, response);
		}
		console.log(response);
		try{
			response = JSON.parse(response);
		}
		catch(error){
			SOM.popupGenericOpen(SOM.LOCALE.popup_error_message_template, new Object({
				"HEADER"		:SOM.LOCALE.popup_error_title,
				"MESSAGE_HTML"	:response
			}));
			return false;
		}

		var errors = new Array();
		var messages = new Array();

		for (var i in response){
			if (typeof(response[i].result) == "undefined"){
				continue;
			}
			if (parseInt(response[i].result) < 0){
				errors.push("<p>"+response[i].message+"</p>");
			}
			else {
				messages.push("<p>"+response[i].message+"</p>");
			}
		}

		container.closest(".som-excel").find("th.som-sort-handler.som-sort-asc").removeClass("som-sort-asc");
		container.closest(".som-excel").find("th.som-sort-handler.som-sort-desc").removeClass("som-sort-desc");

		if (errors.length > 0){
			// Failure
			
			if (container.attr("data-failure-popup")){
				SOM.popupGenericOpen(SOM.LOCALE.popup_error_message_template, new Object({
					"HEADER"		:SOM.LOCALE.popup_error_title,
					"MESSAGE_HTML"	:errors.join("")
				}));
			}

			if (container.attr("data-failure-focus")){
				container.focus();
			}

			if (container.attr("data-failure-add-class")){
				container.addClass(container.attr("data-failure-add-class"));
			}
		}
		else {
			// Success
			if (container.attr("data-success-remove-class")){
				container.removeClass(container.attr("data-success-remove-class"));
			}

			if (container.attr("data-success-remove")){
				container.closest(".som-ajax-target").fadeOut(300,function(){
					$(this).remove();
				});
			}

			if (container.attr("data-success-popup") && messages.length > 0){
				var success_title = SOM.LOCALE.popup_success_title;
				if (container.attr("data-success-popup-title")){
					success_title = container.attr("data-success-popup-title");
				}
				SOM.popupGenericOpen(SOM.LOCALE.popup_success_message_template, new Object({
					"HEADER"		:success_title,
					"MESSAGE_HTML"	:messages.join("")
				}));
			}

			if (container.attr("data-success-follow")){
				var link = "";
				if (container.attr("data-success-follow") == "code"){
					for(var i in response){
						if (response[i].result == container.attr("data-success-follow-code")){
							link = response[i].message;
						}
					}
				}
				else if (container.attr("data-success-follow") == "path"){
					link = container.attr("data-success-follow-path");
				}
				
				if (container.attr("data-success-follow-prefix")){
					link = container.attr("data-success-follow-prefix")+link;
				}
				
				if (container.attr("data-success-follow-suffix")){
					link = link+container.attr("data-success-follow-suffix");
				}
				
				if (container.attr("data-success-follow-delay")){
					var delay = parseInt(container.attr("data-success-follow-delay"));
					setTimeout(function(){
						window.location = link;
					}, delay);
				}
				else {
					window.location = link;
				}
			}

			if (container.attr("data-success-refresh")){
				window.location = window.location.href;
			}
			
			if (container.attr("data-success-function")){
				SOM.run_if_function(container.attr("data-success-function"),response);
			}
			
			if (container.attr("data-success-replace")){
				container.closest(".som-ajax-target").replaceWith(response[0].message);
			}
		}
		if (typeof(page_repaint) != 'undefined'){
			page_repaint();
		}

		if (container.attr("data-end-popup-close")){
			container.closest(".som-popup-box").find(".som-popup-trigger-close").first().click();
		}

		SOM.run_if_function(container.attr("data-som-callback"), response, container);

		SOM.run_if_function(container.attr("data-callback"), container.attr("data-callback-args"));
	},
	
	"ajax_container_submit"		:	function(container, callback, event){
		
		if (container.attr("data-disabled")){
			return false;
		}
		container.find(".som-default-value").each(function(){
			if ($(this).val() == $(this).attr("data-default-value")){
				$(this).val("");
			}
		});
		var FILEFORM = false;
		if (container.attr("enctype") == "multipart/form-data"){
			FILEFORM = true;
			var errors = new Array();
			container.find("input[type=file]").each(function(){
				if (this.files != null){
					// File
					var file = this.files[0];
					if (typeof(file) != 'undefined'){
						if(parseInt(file.size)/1024/1024 > SOM.MAX_FILE_SIZE){
							if (container.attr("data-failure-popup")){
								errors.push("<p>"+file.name+"</p>");
							}
						}
					}
				}
			});
			if (errors.length > 0){
				errors.unshift("<p>"+SOM.LOCALE.popup_message_max_file_size+" "+SOM.MAX_FILE_SIZE+SOM.LOCALE.MB+":</p>");
				SOM.popupGenericOpen(SOM.LOCALE.popup_error_message_template, new Object({
					"HEADER"		:SOM.LOCALE.popup_error_title,
					"MESSAGE_HTML"	:errors.join("")
				}));
				container.find(".som-default-value").focus();
				return false;
			}
			/*
			if(container.attr("target")){
				var iframe = $("iframe[name="+container.attr("target")+"]");
				for(var i in iframe[0].attributes){
					if(typeof(iframe[0].attributes[i].name) != 'undefined' && iframe[0].attributes[i].name.startsWith("data-")){
						iframe.removeAttr(iframe[0].attributes[i].name);
					}
				}
				
				for(var i in container[0].attributes){
					if(typeof(container[0].attributes[i].name) != 'undefined' && container[0].attributes[i].name.startsWith("data-")){
						iframe.attr(container[0].attributes[i].name,container[0].attributes[i].value);
					}
				}
			}
			*/
		}

		var next_step = function(){
			
			if (container.attr("data-submit-function")){
				SOM.run_if_function(container.attr("data-submit-function"),container);
			}

			if (container.attr("data-submit-target-hide")){
				container.closest(".som-ajax-target").hide();
			}

			if (container.attr("data-submit-popup-message")){
				SOM.popupGenericOpen(SOM.popup_message_template, new Object({
					"HEADER":		container.attr("data-submit-popup-message-header"),
					"MESSAGE_HTML":	container.attr("data-submit-popup-message-text")
				}),container.attr("data-submit-popup-message-width"));
			}

			if (container.attr("data-submit-popup-generic") == "true"){
				var popup = container.find("div.data-submit-popup-generic");
				SOM.displayPopup(popup[0].outerHTML,popup.attr("data-width"));
			}

			if (container.attr("data-submit-popup-template")){
				SOM.popupGenericOpen(container.attr("data-submit-popup-template"), new Object(), container.attr("data-submit-popup-template-width"), function(html){
					container.find("[data-type=param]").each(function(){
						html.find("[name="+$(this).attr("name")+"]").val($(this).val());
					});
				});
			}

			if (container.attr("data-submit-follow")){
				var prefix = "";
				if (container.attr("data-submit-follow-prefix")){
					prefix = container.attr("data-submit-follow-prefix");
				}

				var path = "";

				var shorthand = container.find(container.attr("data-submit-follow"));
				if (shorthand.size() > 0) {
					path = shorthand.val();
				}
				if (container.attr("data-submit-follow-name")){
					path = container.find("[name="+container.attr("data-submit-follow-name")+"]").val();
				}

				var suffix = "";
				if (container.attr("data-submit-follow-suffix")){
					suffix = container.attr("data-submit-follow-suffix");
				}

				if (container.attr("data-submit-follow-query")){
					var url = $.query;
					if (!container.attr("data-submit-follow-query-qsa") && !container.attr("data-submit-follow-query-qsr")){
						url = url.empty();
					}

					var param = container.attr("data-submit-follow-query").split(",");
					for(var i in param){
						if (container.attr("data-submit-follow-query-qsa") && url.contains(param[i])){
							continue;
						}
						url = url.set(param[i],container.find("[name="+param[i]+"]").val());
					}

					suffix += url.toString();
				}

				var follow = prefix + path + suffix;
				window.location = follow;
			}

			if (!container.attr("data-ajax-action")){
				container.find(".som-default-value").focus();
				return false;
			}

			if (container.attr("data-wait-popup-message")){
				SOM.popupMessageOpen(container.attr("data-wait-popup-message-header")+'<input type="hidden" data-popup-id="'+container.attr("data-wait-popup-message-id")+'" />', container.attr("data-wait-popup-message-text"), container.attr("data-wait-popup-message-width"));
			}

			var data = "a="+container.attr("data-ajax-action");
			var param = new Array();
			container.find("[data-type=submit]").not(container.find(".som-ajax-submit-container [data-type=submit]")).each(function(){
				if (($(this).attr("type") == "radio" || $(this).attr("type") == "checkbox") && !$(this).is(":checked")){
					return;
				}
				data += "&"+$(this).attr("name")+(($(this).attr("type") == "checkbox")?"[]":"")+"="+encodeURIComponent($(this).val());
				if ($(this).attr("data-attribute")){
					param.push($(this).attr("name")+(($(this).attr("type") == "checkbox")?"[]":""));
				}
			});

			if (FILEFORM){
				container.prepend(SOM.temp_input("a", container.attr("data-ajax-action")));
				container.prepend(SOM.temp_input("som-fields-submitted", param.join(",")));
				container.submit();
				container.find(".som-temp").remove();
				container.find(".som-default-value").focus();
				return false;
			}
			
			setTimeout(function(){
				//console.log(data+"&som-fields-submitted="+param.join(",")+"&dom-selected="+$(document.activeElement).getPath());
				SOM.disable(container);
				var active_element = $(document.activeElement);
				if (active_element.size() == 0){
					active_element = $("body");
				}
				$.ajax({
					type: "POST",
					url: "/process_ajax.php",
					data: data+"&som-fields-submitted="+param.join(",")+"&dom-selected="+active_element.getPath(),
					success: function(response){
						SOM.enable(container);
						SOM.ajax_process_response(container, response);
					},
					error: function(response){
						SOM.enable(container);
						SOM.ajax_process_response(container, response);
					}
				});
			},1);
		}

		if (container.attr("data-submit-confirm") == "true"){
			SOM.popupGenericOpen(SOM.LOCALE.popup_confirm_template, new Object({
				"HEADER":SOM.LOCALE.popup_confirm_title,
				"MESSAGE":container.attr("data-submit-confirm-message")
			}), "auto", function(popuphtml){
				popuphtml.find(".som-popup-trigger-confirm").click(function(event){
					SOM.popupOverlay(false);
					event.preventDefault();
					popuphtml.remove();
					next_step.call();
				});
			})
		}
		else {
			next_step.call();
		}
		container.find(".som-default-value").focus();
		return false;
	},
	
	"disable"				:	function(container){
		container.attr("data-disabled","true").find("[data-type=submit]:not([disabled])").attr("data-temp-disabled","true").attr("disabled","disabled");
	},
	
	"enable"				:	function(container){
		container.removeAttr("data-disabled").find("[data-temp-disabled]").removeAttr("data-temp-disabled").removeAttr("disabled");
	},
	
	"temp_input"			:	function(name, value){
		return '<input type="hidden" name="'+name+'" value="'+value+'" class="som-temp" />';
	},
	
	"fetchHTML"				:	function(template, param, callback){
		// template - name of template file in templates/
		// param - object of parameter pairs in format: new Object({"ITEM1":"value1","ITEM2":"value2"})
		// callback - function to run on complete
		if (template == null || template == ""){
			return;
		}
		
		if (typeof(global_root) == "undefined"){
			global_root = "/";
		}

		$.get("/templates/"+template+".html", function(code){
			
			var rx = new RegExp("{%ROOT%}", "g");
			code = code.replace(rx,global_root);
			if ($.browser.mozilla){
				rx = new RegExp("%7B%ROOT%%7D", "g");
				code = code.replace(rx,global_root);
			}

			for (var i in param){
				rx = new RegExp("{%"+i+"%}", "g");
				code = code.replace(rx,param[i]);
				if ($.browser.mozilla){
					rx = new RegExp("%7B%"+i+"%%7D", "g");
					code = code.replace(rx,param[i]);
				}
			}
			callback(code);
		});


		
	},
	
	"scrollTo"			:	function(element, topOffset, animationLength){
		$('html, body').animate({
			scrollTop: $(element).offset().top - topOffset
		}, animationLength);
	},

	"isNumber"			:	function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	},

	"generateRandomID"	:	function(){
		return "temp_"+Math.random().toString().substr(2, 5);
	},
	
	"zimToFront"		:	function(zim){
		var zim_force = zim.find("input[name=som-popup-z-index]");
		if (zim_force.size() != 0){
			zim.css("z-index",zim_force.val());
			return;
		}
		var zindex = 1000;
		$('*[style*="z-index"]').each(function(){
			var zi = parseInt($(this).css("z-index"));
			if (zi > zindex && $(this) != zim){
				zindex = zi;
			}
		});
		zim.css("z-index",++zindex);
	},

	/**
	 * 
	 * @param String Message title
	 * @param String Actual message
	 * @param int Desired popup witdh
	 * @returns void
	 */
	"popupMessageOpen"	:	function(header, message, width){
		SOM.fetchHTML(SOM.LOCALE.popup_message_template, new Object({
				"HEADER"		:header,
				"MESSAGE_HTML"	:message
			}),
			function(html){
				SOM.displayPopup(html, width);
			}
		);
	},
	
	/**
	 * Opens error message popup using default error template
	 * @param String Actual message
	 * @returns void
	 */
	"popupErrorOpen"	:	function(message){
		SOM.popupGenericOpen(SOM.LOCALE.popup_error_message_template, new Object({
			"HEADER"		:SOM.LOCALE.popup_error_title,
			"MESSAGE_HTML"	:message
		}));
	},
	
	/**
	 * Opens success message popup using default success template
	 * @param String Actual message
	 * @returns void
	 */
	"popupSuccessOpen"	:	function(message){
		SOM.popupGenericOpen(SOM.LOCALE.popup_success_message_template, new Object({
			"HEADER"		:SOM.LOCALE.popup_success_title,
			"MESSAGE_HTML"	:message
		}));
	},
	
	/**
	 * 
	 * @param String path to template relative to /templates/
	 * @param Object data object with attributes being the keywords to be replaced with their values
	 * @param int desirable width of the popup
	 * @param function callback
	 * @returns void
	 */
	"popupGenericOpen"	:	function(template, data, width, callback){
		SOM.fetchHTML(template, data, function(html){
			SOM.displayPopup(html, width, callback);
		});
	},
	
	"displayPopup"		:	function(html,width,callback){
		var id = SOM.generateRandomID();
		$("body").append("<div style='display:none' id='"+id+"'>"+html+"</div>");
		var div = $("div#"+id);
		var popup = div.find("div.som-popup-box");
		if (typeof(width) == "undefined" || null === width){
			width = "auto";
		}
		popup.width(width);
		div.replaceWith(div.contents());
		
		if (popup.hasClass("has-overlay")){
			SOM.popupOverlay(true);
		}

		SOM.zimToFront(popup);

		if (popup.width() > 900){
			popup.width(900);
			popup.find("div.som-popup-main p").css("white-space","normal");
		}

		if (popup.height() > $(window).height()) {
			popup.find(".som-popup-main > *:eq(0)").height($(window).height()*0.5).css("overflow-y","scroll");
		}

		if (true || !$.browser.mobile){
			SOM.popup_center(popup);
		}
		
		if (typeof(page_repaint) != 'undefined'){
			page_repaint();
		}

		popup.find(".som-popup-trigger-close").last().focus();
		popup.find("input[type=text]").first().focus().select();

		SOM.on_dom_change();
		
		if (typeof(callback) != 'undefined') {
			callback(popup);
		}
	},
	
	"popup_center_all"		:	function(){
		$("div.som-popup-box").each(function(){
			var popup = $(this);
			SOM.popup_center(popup);
		});
	},

	"popup_center"			:	function(popup){
		var mtop = parseInt(popup.height()/2);
		var mleft = parseInt(popup.width()/2);
	   
	   popup.css({
			"position"		:	"fixed",
			"top"			:	"50%",
			"left"			:	"50%",
			"margin-left"	:	-mleft+"px",
			"margin-top"	:	-mtop+"px",
		});
		SOM.zimToFront(popup);
	},
	
	"popupOverlay"			:	function(show){
		if (show){
			var overlay_present = false;
			$("div.som-popup-overlay").each(function(){
				overlay_present = true;
			});

			if (!overlay_present){
				$("body").prepend("<div class='som-popup-overlay'></div>");
				$("div.som-popup-overlay").css({
					'height'	:$(window).height()+"px",
					'position'	:'fixed',
					'width'		:'100%'
				});
			}
		}
		else if ($("div.som-popup-box").size() == 1){
			$("div.som-popup-overlay").remove();
		}
	},
	
	"run_if_function"		:	function(f_name){
		if (typeof(f_name) == 'undefined') {
			return;
		}
		
		var fn = window[f_name];
		if (typeof(fn) === 'function') {
			var args = Array.prototype.splice.call(arguments, 1);
			fn.apply(null, args);
		}
	},
	
	"get_auto_complete_list":	function(input){
		var args = input.attr("data-submit").split(",");
		var filters = new Array();
		input.siblings("[data-type=filter]").each(function(){
			filters.push($(this).val());
		});
		var data = "a=smart_data_filter&class="+args[0]+"&column="+encodeURIComponent(args[1])+"&sorting="+args[2]+"&condition_operation="+args[3]+"&condition_value="+encodeURIComponent("%"+input.val()+"%")+"&value="+args[4]+"&filters="+encodeURIComponent(filters.join(";"));

		$.ajax({
			type: "POST",
			url: "/process_ajax.php",
			data: data,
			success: function(response){
				if (!input.is(":focus")){
					return false;
				}
				var list = input.siblings(".som-select-auto-complete-list");
				list.find("*").remove();
				list.append(response);
				list.show();
				SOM.run_if_function(input.attr("data-callback"), input.attr("data-callback-args"));
			}
		});
	},
	
	"resizeIframe"		:	function(obj) {
		if (typeof(obj.contentWindow) == "undefined"){
			obj = obj[0];
		}
		var height = $(obj.contentWindow.document)[0].body.clientHeight;
		obj.style.height = height + 'px';
		
	},
	
	"JSON_parse"		:	function(data){
		
		if (typeof(data) == "object"){
			return data;
		}
		
		var object = null;
		try {
			object = JSON.parse(data);
		}
		catch(error){
			SOM.popupGenericOpen(SOM.LOCALE.popup_error_message_template, new Object({
				"HEADER"		:SOM.LOCALE.popup_error_title,
				"MESSAGE_HTML"	:data
			}));
			return null;
		}
		return object;
	},
	
	"hashCode"			:	function(s){
		return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
	},
	
	"htmlDecode"		:	function(html){
		var e = document.createElement('div');
		e.innerHTML = html;
		return e.childNodes[0].nodeValue;
	  }
};

SOM.init();
SOM.bind_all();

jQuery.fn.getPath = function () {
    if (this.length !== 1) {
		return "";
	}

    var path, node = this;
    while (node.length) {
        var realNode = node[0];
        var name = (

            // IE9 and non-IE
            realNode.localName ||

            // IE <= 8
            realNode.tagName ||
            realNode.nodeName

        );

        // on IE8, nodeName is '#document' at the top level, but we don't need that
        if (!name || name == '#document') break;

        name = name.toLowerCase();
        if (realNode.id) {
            // As soon as an id is found, there's no need to specify more.
            return name + '#' + realNode.id + (path ? '>' + path : '');
        } else if (realNode.className) {
            name += '.' + realNode.className.split(/\s+/).join('.');
        }

        var parent = node.parent(), siblings = parent.children(name);
        if (siblings.length > 1) name += ':eq(' + siblings.index(node) + ')';
        path = name + (path ? '>' + path : '');

        node = parent;
    }

    return path;
};

(function($){
    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
})(jQuery);

(function($){
    $.fn.random = function() {
        return $(this).eq(Math.floor(Math.random()*$(this).length));
    };
})(jQuery);