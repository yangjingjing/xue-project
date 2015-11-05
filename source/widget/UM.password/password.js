    var xue =xue || {};
        xue.formCheck = xue.formCheck || {};
    var fCheck = xue.formCheck;

    /* 获取form表单元素 */
    fCheck.param = {
      passStrong   : '.pass-strong',
      passStrength : '.pass-strong strong',
      strong       : 'strong',
    }; 

    /* 输入正确时，清除提醒 */
    fCheck.clearTips = function(select){
      $(select).css({
        'background':'none'
      }).html(null);
    };
    /* 提示信息的css样式 */
    fCheck.setTips = function(select, tips){
      $(select).css({
        'background': 'url("img/warning.png") no-repeat 10px 5px',
        'padding-left':'32px' 
      }).html(tips);
    };

    /* 密码安全强度 */
    fCheck.strength = function(password){
        var score = 0;

        /* 单独数字 */
        if (password.match(/(.*[0-9].*[0-9].*[0-9])/)) { score += 5; }

        /* 特殊字符 */
        if (password.match(/(.*[!,@,#,$,%,^,&,*,?,_,~,\[,\]].*[!,@,#,$,%,^,&,*,?,_,~,\[,\]])/)) { score += 5; }

        /* 单独字母 */
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) { score += 5; }

        /* 字母以及数字的组合 */
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) { score += 15; }

        /* 特殊字符以及数字 */
        if (password.match(/([!,@,#,$,%,^,&,*,?,_,~,\[,\]])/) && password.match(/([0-9])/)) { score += 15; }

        /* 特殊字符以及字母 */
        if (password.match(/([!,@,#,$,%,^,&,*,?,_,~,\[,\]])/) && password.match(/([a-zA-Z])/)) { score += 15; }

        /* 特殊字符+数字+字母 */
        if (password.match(/^\w+$/) && password.match(/^\d+$/) && password.match(/([!,@,#,$,%,^,&,*,?,~,\[,\]])/)) { score += 20; }
        return score;

    };

    fCheck.checkStrength  = function(tip,passwordWarn,value,passStrong,e){
      var val = $.trim(value);
      if(val.length >= 6){
        $(tip).hide();
        fCheck.clearTips(passwordWarn);
        $(passStrong).css({
          'display' : 'inline-block'
        })
        var score = fCheck.strength(val);
        var tp = score < 6 ? 1 : (score <= 49 ? 2 : 3);
        $(fCheck.param.passStrength).removeClass().addClass('strong' + tp);
        /* 方便最后的验证 */
        fCheck.param.cPass = 1;     
      }else if(val.length > 0 && val.length <= 5){
        
        $(tip).hide();
        $(passStrong).css({
          'display' : 'none'
        });
        fCheck.param.cPass = 0; 
      }else if(!val){
        /* 防止出现未输入字符修改大小写的情况 */
        if(e.keyCode !== 20){
          $(tip).show();
          $(passStrong).css({
            'display' : 'none'
          })
        }
        fCheck.param.cPass = 0; 
      }
    }

    //显示隐藏label
    $('#old-password').focus(function(){
      $('.oldpass-tip').hide();
      fCheck.clearTips(".oldpass-warning");
    });
    $("#old-password").blur(function(){
      var value = $("#old-password").val();
      if(value == ''){
        $('.oldpass-tip').show();
      }
    })

    $('#new-password').focus(function(){
      $('.newpass-tip').hide();
      fCheck.clearTips(".newpass-warning");
    });
    $("#new-password").blur(function(){
      var value = $("#new-password").val();
      if(value == ''){
        $('.newpass-tip').show();
      }
    })

    $('#repassword').focus(function(){
      $('.repass-tip').hide();
      fCheck.clearTips(".repass-warning");
    });
    $("#repassword").blur(function(){
      var value = $("#repassword").val();
      if(value == ''){
        $('.repass-tip').show();
      }
    })

    /* input边框样式 */
    fCheck.bordercss = function(argument) {
       if($(argument).val() !== ''){
         $(argument).css('border','1px solid #68c04a');
       }else{$(argument).css('border','1px solid #eaeaea');}
    }

    /* 新密码强度验证 */
    $('#new-password').off('keyup').on('keyup',function(e){
      var value = $('#new-password').val();
      var s = $('#new-password').next('strong');
      if(e.keyCode != 32){
        fCheck.checkStrength('.newpass-tip','.newpass-warning',value,fCheck.param.passStrong,e);
      }else{
        $('.newpass-tip').hide();
        fCheck.clearTips('.newpass-warning');
      }
    });

    /* 密码验证流程 */
    $(function() {
        $("#form_submit").click(function() {
          if ($("#old-password").val() == '') {
              fCheck.setTips(".oldpass-warning",'请输入当前密码').show();
              return false;
          }
          var passwd = $("#old-password").val();
          if (passwd.length < 6) {
              fCheck.setTips(".oldpass-warning",'密码不能少于6位字符').show();
              return false;
          }
          fCheck.bordercss('#old-password');

          $.ajax({
              type: "POST",
              url: "/RequestPassword/UpdatePassword",
              data: "old-password=" + $(".old-password").val(),
              success: function(msg) {
                  if (msg == "True") {
                      location.href = "/RequestPassword/UpdatePasswordSecuess";
                  } else {
                      fCheck.setTips('.oldpass-warning','当前密码错误');
                      $('.old-password').css('border','1px solid #eaeaea');
                  }
              }
          });

          if ($("#new-password").val() == '') {
              fCheck.setTips(".newpass-warning",'请设置密码').show();
              return false;
          }
          var passwd = $("#new-password").val();
          if (passwd.length < 6) {
              fCheck.setTips(".newpass-warning",'密码不能少于6位字符').show();
              return false;
          }
          fCheck.bordercss('#new-password');

          if ($("#repassword").val() == '') {
              fCheck.setTips(".repass-warning",'请输入确认密码').show();
              $("#repassword").focus();
              return false;
          }
          if ($("#new-password").val() != $("#repassword").val()) {
              fCheck.setTips(".repass-warning",'新密码与确认密码不一致').show();
              $("#new-password").focus();
              return false;
          }
          fCheck.bordercss('#repassword');
        })  
    })  