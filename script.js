var accordion=$(".accordion");
var accordionControl=$(".accordion-control");
var accordionPanel=$(".accordion-panel");

$(".accordion").on("click", ".accordion-control",function(e){
  e.preventDefault();
  $(this)
  .next(".accordion-panel")
  .not(":animated")
  .slideToggle();
    
});

