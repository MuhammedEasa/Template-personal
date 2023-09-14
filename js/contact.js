$(document).ready(function(){
    $("#contactForm").validate({
        rules:{
            name:{
                required:true,
                normalizer: function(value) {
                    return $.trim(value);
                  },
              minlength:5,
              maxlength:15  
              
            },
            email:{
                required:true,
                email:true
            },
            subject:{
                required:true,
                normalizer: function(value) {
                    return $.trim(value);
                  },
                minlength:10
            },
            message:{
                required:true,
                normalizer: function(value) {
                    return $.trim(value);
                  },
                minlength:10
            }
        }
    })
})