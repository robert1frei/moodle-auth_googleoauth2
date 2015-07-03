$(document).ready(
    function () {

        // CODE HIGHLY INSPIRED FROM ELCENTRA OAUTH2 PLUGIN: https://moodle.org/plugins/view/auth_elcentra

        linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.href = oauth2cssurl;
        document.head.appendChild(linkElement);

        if ($("#auth_custom_location").length > 0) {
            $("#auth_custom_location").append(buttonsCodeOauth2);
        } else {
            $formObj = $("input[name='username']").closest("form");
            if ($formObj.length > 0) {
                $($formObj).each(function (i, formItem) {
                    $username = $(formItem).find("input[name='username']").val();
                    $password = $(formItem).find("input[name='password']").val();
                    if($username!=="guest" || $password!=="guest") {
                        $(formItem).append(buttonsCodeOauth2);
                    }
                });
            }
        }
    }


)