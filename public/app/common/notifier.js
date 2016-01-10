app.value('mvToaster', toastr);

app.factory('mvNotifier',
    function (mvToaster, $log) {
       return{
           notifyValid: function (msg) {
               toastr.success(msg);
               $log.info(msg);
           },

           notifyInvalid: function (msg){
               toastr.error(msg);
               $log.info(msg);
           }
       }
    });