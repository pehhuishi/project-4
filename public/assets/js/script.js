$(document).ready(function(){
  $('#example').DataTable();

  //orderform function
  $('.orderType').on('change',function(){
    if( $(this).val()==="demo"){
      $(".returnDate").prop('disabled', false)
      // $("#row-1-returnDate").show()
    }
    else{
      $( ".returnDate" ).prop('disabled', true);
      // $("#row-1-returnDate").hide()

    }
  });
  //add rows
  $( "#addRow" ).click(function() {
    const markup = '<tr><td><input type="text" id="row-1-itemName" name="row-1-itemName" placeholder="Item Name"></td><td><select size="1" id="row-1-orderType" class="orderType" name="row-1-orderType"><option value="sales" selected="selected">Sales</option><option value="demo">Demo</option></select></td><td><input type="date" id="row-1-returnDate" class="returnDate" name="row-1-returnDate" value="{{today}}" disabled></td><td><input type="number" id="row-1-orderQuantity" name="row-1-orderQuantity" value="1"></td><td></td></tr>';
    $("#orderItems>tbody").append(markup);
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
