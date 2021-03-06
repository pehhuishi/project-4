$(document).ready(function(){
  $('#example').DataTable();

$('#selectLocation').on('change',function(){
     if( $(this).val()==="Warehouse"){
     $("#otherType").show()
     }
     else{
     $("#otherType").hide()
     $("#Zone").val('')
     $("#Shelf").val('')
     }
 });
  //orderform function
  $('tbody').on('change', '.orderType', function(){
    if( $(this).val()==="demo"){
      $(this).parents('tr').find('.returnDate').show()
    }
    else{
      $(this).parents('tr').find('.returnDate').hide()
    }
  });

  // Autocomplete
  var options = {
    url: function(phrase) {
      return "/furnituremodel";
    },
    getValue: "itemCode"
  };

  var autocomplete = function(){
    $(".provider-remote").easyAutocomplete(options);
  }
  autocomplete()

  //add rows
  $( "#addRow" ).click(function() {
    const markup = '<tr><td><input type="text" class="provider-remote" name="model" placeholder="Model" required/></td><td><select size="1" id="row-1-orderType" class="orderType" name="orderType"><option value="sales" selected="selected">Sales</option><option value="demo">Demo</option></select></td><td><input type="date" id="row-1-returnDate" class="returnDate" name="returnDate" style="display: none"></td><td><input type="number" id="row-1-orderQuantity" name="orderQuantity" value="1"></td><td></td></tr>'
    $("#orderItems>tbody").append(markup);
    autocomplete()
  });

  //location form
  $('#selectLocation').on('change',function(){
    if( $(this).val()==="Warehouse"){
      $("#otherType").show()
    }
    else{
      $("#otherType").hide()
    }
  });


});


  //tracking
  $('#trackingStatus').on('change',function(){
       if( $(this).val()==="Received with issues"){
       $("#trackingComment").show()
       }
       else{
       $("#trackingComment").hide()
       $("#textAreaForTrackingComment").val('')
       }
   });



  // var FormStuff = {
  //
  //   init: function() {
  //     // kick it off once, in case the radio is already checked when the page loads
  //     this.applyConditionalRequired();
  //     this.bindUIActions();
  //   },
  //
  //   bindUIActions: function() {
  //     // when a radio or checkbox changes value, click or otherwise
  //     $("input[type='radio'], input[type='checkbox']").on("change", this.applyConditionalRequired);
  //   },
  //
  //   applyConditionalRequired: function() {
  //     // find each input that may be hidden or not
  //     $(".require-if-active").each(function() {
  //       var el = $(this);
  //       // find the pairing radio or checkbox
  //       if ($(el.data("require-pair")).is(":checked")) {
  //         // if its checked, the field should be required
  //         el.prop("required", true);
  //       } else {
  //         // otherwise it should not
  //         el.prop("required", false);
  //       }
  //     });
  //   }
  //
  // };
  // FormStuff.init();

// }
