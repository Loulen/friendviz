$(document).ready(function(){
    $('.options-inputs-inputcontainer-date-input-end').val(new Date().toDateInputValue());
    $(".options-analyse").click(()=>{
        if (
            (!$(".options-inputs-inputcontainer-date-input-start").val()) || 
            (!$(".options-inputs-inputcontainer-date-input-end").val())
        ){
            $(".warning").css("display","block")
        } else {
            $(".warning").css("display","none")
            start = new Date($(".options-inputs-inputcontainer-date-input-start").val()).getTime()/1000;
            end = new Date($(".options-inputs-inputcontainer-date-input-end").val()).getTime()/1000;
            name = $(".options-inputs-inputcontainer-outname-input").val()
            $(".options-analyse-text").text("Processing...")
            eel.friendviz(start,end,name)((res)=>{
                if (!res){
                    alert("failed")
                } else {
                    alert("success, "+res+" created")
                }

            })
        }
    })
})

Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

