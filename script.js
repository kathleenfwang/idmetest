
var name = "" 
var group = ""
var userObj = {} 
$(function () {

  var IDme = {
      id_token: "",
    access_token: window.location.hash
      .split("&")[0]
      .match(/[^#access_token=]\w+/)[0],

    params: function () {
      return {
        url:
          "https://api.id.me/api/public/v3/attributes.json?access_token=" +
          this.access_token,
        dataType: "jsonp"
      };
    },
    logout: function() {
        return {
        url:
        // need ID token - this is done through /token endpoint 
          `https://api.id.me/oauth/logout?
  id_token_hint=${this.id_token}&
  post_logout_redirect_uri=https://idmetest.kathleenwang.repl.co`
      };
    }, 
        getIdToken: function() {
        return {
        url:
          `https://api.id.me/oauth/token?
  id_token_hint=${this.access_token}&
  post_logout_redirect_uri=https://idmetest.kathleenwang.repl.co`
      };
    }, 

    request: function () {
        var idToken = "" 
      if (this.access_token) {
        $.get(this.params()).done((payload) => {
            userObj = payload 
            console.log(userObj)
          if (payload.status[0].verified) {
               $("#test").text("Thank you for verifiying!"
               )
                   name =  userObj.attributes[1].value
                   group = userObj.status[0].group
            $("#test").text("Hi " + name + "!")
            $("#idme-verification").hide();
            $("#idme-verification").before(
              "<span>Thank you " +
              name +
             " for verifying your " +
              group +
              " status with ID.me.</span>"
          );
          $("#logout").text("logout")
        //   $.get(this.getIdToken()).done((token) => idToken )
          $("#logout").click(() => $.post(this.logout()))
          }
        });
      }
    }
  };

  IDme.request();
});
