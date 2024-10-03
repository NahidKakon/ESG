
        function exportSelections() {
            // Get dropdown selections
            const dropdown1 = document.getElementById('dropdown1').value;
            const dropdown2 = document.getElementById('dropdown2').value;
            const dropdown3 = document.getElementById('dropdown3').value;
            const dropdown4 = document.getElementById('dropdown4').value;
            const dropdown5 = document.getElementById('dropdown5').value;
            const dropdown6 = document.getElementById('dropdown6').value;
            const dropdown7 = document.getElementById('dropdown7').value;
            // Create CSV content
            const csvContent = `Dropdown 1,Dropdown 2,Dropdown 3,Dropdown 4,Dropdown 5,Dropdown 6,Dropdown 7, \n${dropdown1},${dropdown2},${dropdown3},${dropdown4},${dropdown5},${dropdown6},${dropdown7}`;

            // Create a Blob from the CSV content
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);

            // Create a link to download the file
            const a = document.createElement('a');
            a.href = url;
            a.download = 'dropdown_selections.csv';

            // Append the link to the document and trigger the download
            document.body.appendChild(a);
            a.click();

            // Remove the link from the document
            document.body.removeChild(a);
        }