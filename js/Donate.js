

    $('#show_honor_fields').click(function(){
        if (this.checked) {
            $('.honor-form').show();
            $('#donately_form').remove();
        } else{
            $('.honor-form').hide();
            $('#donately_form_with_codes').remove();
          $("#honor_name").text('');
            $('.donation-container').append( '<div id="donately_form"><script  class="donately-donation-form" src="https://s3-us-west-1.amazonaws.com/static-dntly-com/form.js"  async="async" type="text/javascript" data-donately-ssl="true" data-donately-id="198" data-donately-address="true" data-donately-comment="true" data-donately-phone="true"/></div>' );
        }
    });


//PLEDGE FORM ON /DONATE/PLEDGE

//We have to load form.js after submit so we can untilize the tracking codes feature
$('#updateform').click(function(){
    
    $('.honor-form').hide();
   // $('#show_honor_fields').attr('disabled', 'disabled');
    

    var show_honor_fields = 'Honor Field: ' + $('#show_honor_fields').val(), 
    gift_type = 'Gift Type: ' + $('#gift_type').val(), 
    honoree_first_name = 'Honoree Name: ' + $('#honoree_name').val(), 
    notify_recip_name = 'Notify Name: ' + $('#notify_recip_name').val(), 
    notify_recip_street1 = 'Address: ' + $('#notify_recip_street1').val() + ' ' + $('#notify_recip_street2').val() + ' ' + $('#notify_recip_city').val() + ' ' + $('#notify_recip_state').val() + ' ' + $('#notify_recip_zip').val() + ' ' + $('#notify_recip_country').val(), 


    codes = show_honor_fields + ' ' + gift_type + ' ' + honoree_first_name + ' ' + notify_recip_name + ' ' + notify_recip_street1;

   $("#honor_name").text($('#honoree_name').val());
  
  $('#donately_form').remove();

    $(".donation-container").append( '<div id="donately_form_with_codes"><script class="donately-donation-form" src="https://s3-us-west-1.amazonaws.com/static-dntly-com/form.js"  async="async" type="text/javascript" data-donately-ssl="true" data-donately-tracking-codes="' + codes + '" data-donately-id="198" data-donately-address="true" data-donately-comment="true" data-donately-phone="true"/></div>' );

return false;
});

// JavaScript Document