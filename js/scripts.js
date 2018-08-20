// back-end
function TravelEntry(country, cities, date) {
  this.country = country;
  this.cities = cities;
  this.date = date;
}


// front-end
$(document).ready(function() {
  $("form#new-entry").submit(function(event) {
    event.preventDefault();

    var inputtedCountry = $("input#new-country").val();
    var inputtedCities = $("input#new-cities").val();
    var inputtedDate = $("input#new-date").val();
    var cities = inputtedCities.split(",");
    var citiesAmount = cities.length;

    var newEntry = new TravelEntry(inputtedCountry, cities, inputtedDate);

    console.log(newEntry);

    $("#travel-history ul").append("<li class='entry'>" + newEntry.country + "</li>");

    $(".entry").last().click(function () {
      $("#details").show();
      $(".country-visited").text(newEntry.country);
      $(".cities-visited").text(newEntry.cities);
      $(".date-visitied").text(newEntry.date);
    });

    $("input#new-country").val("");
    $("input#new-cities").val("");
    $("input#new-date").val("");
  });
});
