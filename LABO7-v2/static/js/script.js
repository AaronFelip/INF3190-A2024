// disable on enter
$('form').on('keyup keypress', function(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
        e.preventDefault();
        return false;
    }
});



// form validiation
var inputschecked = false;


function formvalidate(stepnumber)
{
    // check if the required fields are empty
    inputvalue = $("#step"+stepnumber+" :input").not("button").map(function()
    {
        if(this.value.length > 0)
        {
            $(this).removeClass('invalid');
            return true;

        }
        else
        {

            if($(this).prop('required'))
            {
                $(this).addClass('invalid');
                return false
            }
            else
            {
                return true;
            }

        }
    }).get();


    // console.log(inputvalue);

    inputschecked = inputvalue.every(Boolean);

    // console.log(inputschecked);
}


$(document).ready(function()
{
    $("#sub").on('click' , function()
    {

        // get input value
        var email = $("#mail-email").val();

        //email validiation
        var re = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        var emailFormat = re.test(email);

        //number validiation
        var numbers = /^[0-9]+$/;

        formvalidate(1);


        if(inputschecked == false)
        {
            formvalidate(1);
        }

        else if(emailFormat == false)
        {
            // console.log("enter valid email address");
            (function (el) {
                setTimeout(function () {
                    el.children().remove('.reveal');
                }, 3000);
            }($('#error').append('<div class="reveal alert alert-danger">Enter Valid email address!</div>')));
            if(emailFormat == true)
            {
                $("#mail-email").removeClass('invalid');
            }
            else
            {
                $("#mail-email").addClass('invalid');
            }
        }

        else
        {
            $("#sub").html("<img src='/static/images/loading.gif'>");

            var dataString = new FormData(document.getElementById("steps"));


            // console.log(dataString);

            $.ajax({
                type: "POST",
                url: "form handling/send.php",
                data: dataString,
                processData: false,
                contentType: false,
                success: function(data,status)
                {

                    $("#sub").html("Success!");

                    window.location = "thankyou.html";

                },
                error: function(data, status)
                {
                    $("#sub").html("failed!");
                }
            });
        }

    });
});
