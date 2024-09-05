function bmiCalculation() {
	const form = document.getElementById('bmi_info');
	const bmi_div = document.getElementById('bmi');

	const height = parseFloat(form.elements.height.value) / 100;
	if (!height) {
		alert('Please input height');
	}

	const weight = parseFloat(form.elements.weight.value);
	if (!weight) {
		alert('Please input weight')
	}

	const gender = form.elements.gender.value;
	let gender_text = '';
	if (gender != "") {
		switch (gender) {
			case 'male':
				gender_text = 'male';
				break;
			case 'female':
				gender_text = 'female';
				break;
			default:
				alert('Please input a valid gender');
		}
	} else {
		alert('Please input gender');
	}

	let inputted_information = '';

	const age = form.elements.age.value;
	let age_text = '';
	if (age != "") {
		switch (age) {
			case 'child':
				age_text = 'from 2 to 25 years old';
				break;
			case 'adult':
				age_text = 'from 26 to 49 years old';
				break;
			case 'elder':
				age_text = 'from 26 to 49 years old';
				break;
			default:
				alert('Please input a valid age');
		}
	} else {
		alert('Please input age');
	}

	const life = form.elements.life.value;
	let life_text = '';
	if (life != "") {
		switch (life) {
			case 'seden':
				life_text = 'a sedentary';
				break;
			case 'active':
				life_text = 'an active';
				break;
			default:
				alert('Please input a valid life style');
		}
	} else {
		alert('Please input life style');
	}

	if (gender && age && life && height && weight) {
		inputted_information += `<strong>Your inputted information:</strong><br>`;
		inputted_information += `<ul>
		<li>You are a ${gender_text} ${age_text}, with  ${height} m tall and a current weight of ${weight} kg.</li>
		<li>You lead ${life_text} lifestyle.</li>
		</ul>`;

		let calories = 0;
		calories_information = '';
		if (gender == 'male' && age == 'child' && life == 'seden') calories = 1700;
		else if (gender == 'male' && age == 'child' && life == 'active') calories = 2200;
		else if (gender == 'female' && age == 'child' && life == 'seden') calories = 1400;
		else if (gender == 'female' && age == 'child' && life == 'active') calories = 1900;
		else if (gender == 'male' && age == 'adult' && life == 'seden') calories = 2300;
		else if (gender == 'male' && age == 'adult' && life == 'active') calories = 2900;
		else if (gender == 'female' && age == 'adult' && life == 'seden') calories = 1800;
		else if (gender == 'female' && age == 'adult' && life == 'active') calories = 2200;
		else if (gender == 'male' && age == 'elder' && life == 'seden') calories = 2000;
		else if (gender == 'male' && age == 'elder' && life == 'active') calories = 2600;
		else if (gender == 'female' && age == 'elder' && life == 'seden') calories = 1600;
		else if (gender == 'female' && age == 'elder' && life == 'active') calories = 2000;

		calories_information += `<strong>Your recommened calories:</strong><br>`;
		calories_information += `<ul>
		<li>Your recommended daily calories need is <strong>${calories} cal.</strong></li>
		</ul>`;

		bmi_div.style.display = 'block';
		const bmi = (weight / (height * height)).toFixed(1);
		let bmi_information = '';
		bmi_information += `<strong>Your calculated BMI:</strong><br>`;
		if (bmi < 18.5) {
			bmi_information += `<ul>
			<li>Your BMI is <strong>${bmi}</strong>. You are <strong>underweight.</strong></li>
			</ul>`;
		} else if (bmi >= 18.5 && bmi < 25) {
			bmi_information += `<ul>
			<li>Your BMI is <strong>${bmi}</strong>. Your weight is <strong>healthy.</strong></li>
			</ul>`;
		} else if (bmi >= 25 && bmi < 30) {
			bmi_information += `<ul>
			<li>Your BMI is <strong>${bmi}</strong>. You are <strong>overweight.</strong></li>
			</ul>`;
		} else {
			bmi_information += `<ul>
			<li>Your BMI is <strong>${bmi}</strong>. You are <strong>obese.</strong>`;
		}

		menu_information = `<strong><a href="#menu" onclick="menuRecommendation(${bmi})">CLICK HERE TO VIEW YOUR RECOMMENDED NUTRITION MENU BELOW</a></strong>`;

		bmi_div.innerHTML = `${inputted_information} <br> ${calories_information} <br> ${bmi_information} <br><br>${menu_information}`;
		hideMenu();
	}
}

function hideMenu() {
	const menu_div = document.getElementById('menu');
	menu_div.style.display = 'none';

	let detailed_menu_div = document.getElementById('underweight');
	detailed_menu_div.style.display = 'none';

	detailed_menu_div = document.getElementById('healthy');
	detailed_menu_div.style.display = 'none';

	detailed_menu_div = document.getElementById('overweight');
	detailed_menu_div.style.display = 'none';

	detailed_menu_div = document.getElementById('obese');
	detailed_menu_div.style.display = 'none';
}

function menuRecommendation(bmi) {
	const menu_div = document.getElementById('menu');
	menu_div.style.display = 'block';
	if (bmi && !isNaN(bmi)) {
		if (bmi < 18.5) {
			const detailed_menu_div = document.getElementById('underweight');
			detailed_menu_div.style.display = 'block';
		} else if (bmi >= 18.5 && bmi < 25) {
			const detailed_menu_div = document.getElementById('healthy');
			detailed_menu_div.style.display = 'block';
		} else if (bmi >= 25 && bmi < 30) {
			const detailed_menu_div = document.getElementById('overweight');
			detailed_menu_div.style.display = 'block';
		} else {
			const detailed_menu_div = document.getElementById('obese');
			detailed_menu_div.style.display = 'block';
		}
	} else {
		menu_div.innerHTML = `<p>No BMI data available. Please calculate your BMI.</p>`;
	}
};

const tooltip = document.getElementById('tooltip');

const text = document.getElementById('tooltipLabel');

text.addEventListener('click', () => {
	tooltip.style.display = 'block';
});

document.addEventListener('click', (event) => {
	if (!tooltip.contains(event.target) && !text.contains(event.target)) {
		tooltip.style.display = 'none';
	}
});