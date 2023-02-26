$(document).ready(function () {
    // adding an event listener
    $('#employee-form').on('submit', function(event){
        event.preventDefault();
  
        // Colecting data from the form
        var firstName = $('#first-name-input').val();
        var lastName = $('#last-name-input').val();
        var idNumber = $('#id-input').val();
        var jobtitle = $('#job-title-input').val();
        var annualSalary = parseFloat($('#salary-input').val());
  
        // Calculate monthly Salary
        var monthlySalary = annualSalary/12;
  
        // Append employee info to the table
        $('#employee-list tbody').append(
          '<tr>' +
            '<td>' + firstName + '</td>' +
            '<td>' + lastName + '</td>' +
            '<td>' + idNumber + '</td>' +
            '<td>' + jobtitle + '</td>' +
            '<td class="salary">' + monthlySalary.toFixed(2) + '</td>' +
            '<td><button class="delete-btn">Delete</button></td>' +
          '</tr>'
        );
  
        // Clear the input fields
        $('#employee-form').trigger('reset');
  
        // Update the monthly cost and add delete button
        updatemonthlyCost();
        $('.delete-btn').click(function(){
            $(this).closest('tr').remove();
            updatemonthlyCost();
        });
    });
  
    // Update function
    function updatemonthlyCost() {
        var totalMonthlyCost = 0;
        $('.salary').each(function () {
            totalMonthlyCost += parseFloat($(this).text());
        });
        $('#total-monthly-cost').text('Total Monthly cost: $' + totalMonthlyCost.toFixed(2));
        if (totalMonthlyCost > 20000) {
            $('#total-monthly-cost').addClass('red-background');
        } else {
            $('#total-monthly-cost').removeClass('red-background');
        }
    }
  });
  