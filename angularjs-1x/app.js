(function () {
  "use strict";

  angular.module("loginApp", [])
    .controller("LoginController", ["$scope", function ($scope) {
      var vm = this;
      vm.email = "";
      vm.password = "";
      vm.busy = false;
      vm.notice = "";
      vm.noticeType = "error";

      var config = window.LOGIN_CONFIG || {};
      var client = null;
      if (window.supabase && config.supabaseUrl && config.supabaseAnonKey &&
          !config.supabaseUrl.includes("YOUR_PROJECT_ID") &&
          !config.supabaseAnonKey.includes("YOUR_SUPABASE_")) {
        client = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
      }

      vm.signIn = function () {
        vm.notice = "";
        if (!client) {
          vm.notice = "Add your Supabase URL and publishable/anon key to config.js.";
          vm.noticeType = "error";
          return;
        }
        vm.busy = true;
        client.auth.signInWithPassword({
          email: String(vm.email || "").trim(),
          password: String(vm.password || "")
        }).then(function (result) {
          $scope.$applyAsync(function () {
            vm.busy = false;
            if (result.error) {
              vm.notice = result.error.message;
              vm.noticeType = "error";
            } else {
              vm.notice = "Signed in successfully.";
              vm.noticeType = "success";
            }
          });
        }).catch(function () {
          $scope.$applyAsync(function () {
            vm.busy = false;
            vm.notice = "Unable to sign in. Check your connection and Supabase configuration.";
            vm.noticeType = "error";
          });
        });
      };
    }]);
}());
