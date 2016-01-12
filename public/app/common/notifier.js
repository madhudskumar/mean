app.value('mvToaster', toastr);
app.value('mvOptions', {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
});

app.factory('mvNotifier',
    function (mvToaster, mvOptions,$log) {
       return{
           notifyValid: function (msg) {
               mvToaster.options = mvOptions;
               mvToaster.success(msg);
               $log.info(msg);
           },

           notifyInvalid: function (msg){
               mvToaster.options = mvOptions;
               mvToaster.error(msg);
               $log.info(msg);
           },

           notify: function (msg) {
               mvToaster.options = mvOptions;
               mvToaster.info(msg);
           }
       }
    });