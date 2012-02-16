$(document).ready(function(){
	
	var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
		pt_matrix = {},
		a_matrix = {},
		row = $('<tr></tr>'),
		pt_first_row = row.clone(),
		pt_current_row = null,
		a_current_row = null;

	for(var i=0; i<alphabet.length; i++) {
		a_matrix[alphabet[i]] = i+1;
		pt_matrix[alphabet[i]] = (i%9)+1;

		if(i===0) {
			pt_first_row.appendTo($('#pt_matrix'));
		}

		if(i<9) {
			pt_first_row.append('<th>'+(i+1)+'</th>');
		}

		pt_current_row = (i%9===0) ? row.clone() : pt_current_row;
		pt_current_row.append('<td>'+alphabet[i]+'</td>');
		pt_current_row.appendTo($('#pt_matrix'));

		a_current_row = (i%9===0) ? row.clone() : a_current_row;
		a_current_row.append('<td>'+alphabet[i]+'<sub>'+(i+1)+'</sub></td>');
		a_current_row.appendTo($('#a_matrix'));
	}

	String.prototype.to_pt = function() {
		var i = 0,
			sum = 0,
			key, value;

		for(i; i<this.length; i++) {
			key = this.charAt(i).toUpperCase();
			value = (pt_matrix[key]===undefined) ? 0 : pt_matrix[key];
			sum += value;
		}

		return sum;
	};

	String.prototype.to_a = function() {
		var i = 0,
			sum = 0,
			key, value;

		for(i; i<this.length; i++) {
			key = this.charAt(i).toUpperCase();
			value = (a_matrix[key]===undefined) ? 0 : a_matrix[key];
			sum += value;
		}

		return sum;
	};

	$('#transform').click(function(){
		var input = $('#input').val();
		$('#output').empty().append(input.to_pt()+" pt; "+input.to_a()+" a");
	});

});