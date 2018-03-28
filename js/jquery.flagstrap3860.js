(function (b) {
	var c = {
		buttonSize: "btn-md",
		buttonType: "btn-default",
		labelMargin: "10px",
		scrollable: true,
		scrollableHeight: "250px"
	};
	var a = {
		AF: "Afghanistan",
		AL: "Albania",
		DZ: "Algeria",
		AS: "American Samoa",
		AD: "Andorra",
		AO: "Angola",
		AI: "Anguilla",
		AG: "Antigua and Barbuda",
		AR: "Argentina",
		AM: "Armenia",
		AW: "Aruba",
		AU: "Australia",
		AT: "Austria",
		AZ: "Azerbaijan",
		BS: "Bahamas",
		BH: "Bahrain",
		BD: "Bangladesh",
		BB: "Barbados",
		BY: "Belarus",
		BE: "Belgium",
		BZ: "Belize",
		BJ: "Benin",
		BM: "Bermuda",
		BT: "Bhutan",
		BO: "Bolivia, Plurinational State of",
		BA: "Bosnia and Herzegovina",
		BW: "Botswana",
		BV: "Bouvet Island",
		BR: "Brazil",
		IO: "British Indian Ocean Territory",
		BN: "Brunei Darussalam",
		BG: "Bulgaria",
		BF: "Burkina Faso",
		BI: "Burundi",
		KH: "Cambodia",
		CM: "Cameroon",
		CA: "Canada",
		CV: "Cape Verde",
		KY: "Cayman Islands",
		CF: "Central African Republic",
		TD: "Chad",
		CL: "Chile",
		CN: "China",
		CO: "Colombia",
		KM: "Comoros",
		CG: "Congo",
		CD: "Congo, the Democratic Republic of the",
		CK: "Cook Islands",
		CR: "Costa Rica",
		CI: "CÃ´te d'Ivoire",
		HR: "Croatia",
		CU: "Cuba",
		CW: "CuraÃ§ao",
		CY: "Cyprus",
		CZ: "Czech Republic",
		DK: "Denmark",
		DJ: "Djibouti",
		DM: "Dominica",
		DO: "Dominican Republic",
		EC: "Ecuador",
		EG: "Egypt",
		SV: "El Salvador",
		GQ: "Equatorial Guinea",
		ER: "Eritrea",
		EE: "Estonia",
		ET: "Ethiopia",
		FK: "Falkland Islands (Malvinas)",
		FO: "Faroe Islands",
		FJ: "Fiji",
		FI: "Finland",
		FR: "France",
		GF: "French Guiana",
		PF: "French Polynesia",
		TF: "French Southern Territories",
		GA: "Gabon",
		GM: "Gambia",
		GE: "Georgia",
		DE: "Germany",
		GH: "Ghana",
		GI: "Gibraltar",
		GR: "Greece",
		GL: "Greenland",
		GD: "Grenada",
		GP: "Guadeloupe",
		GU: "Guam",
		GT: "Guatemala",
		GG: "Guernsey",
		GN: "Guinea",
		GW: "Guinea-Bissau",
		GY: "Guyana",
		HT: "Haiti",
		HM: "Heard Island and McDonald Islands",
		VA: "Holy See (Vatican City State)",
		HN: "Honduras",
		HK: "Hong Kong",
		HU: "Hungary",
		IS: "Iceland",
		IN: "India",
		ID: "Indonesia",
		IR: "Iran, Islamic Republic of",
		IQ: "Iraq",
		IE: "Ireland",
		IM: "Isle of Man",
		IL: "Israel",
		IT: "Italy",
		JM: "Jamaica",
		JP: "Japan",
		JE: "Jersey",
		JO: "Jordan",
		KZ: "Kazakhstan",
		KE: "Kenya",
		KI: "Kiribati",
		KP: "Korea, Democratic People's Republic of",
		KR: "Korea, Republic of",
		KW: "Kuwait",
		KG: "Kyrgyzstan",
		LA: "Lao People's Democratic Republic",
		LV: "Latvia",
		LB: "Lebanon",
		LS: "Lesotho",
		LR: "Liberia",
		LY: "Libya",
		LI: "Liechtenstein",
		LT: "Lithuania",
		LU: "Luxembourg",
		MO: "Macao",
		MK: "Macedonia, the former Yugoslav Republic of",
		MG: "Madagascar",
		MW: "Malawi",
		MY: "Malaysia",
		MV: "Maldives",
		ML: "Mali",
		MT: "Malta",
		MH: "Marshall Islands",
		MQ: "Martinique",
		MR: "Mauritania",
		MU: "Mauritius",
		YT: "Mayotte",
		MX: "Mexico",
		FM: "Micronesia, Federated States of",
		MD: "Moldova, Republic of",
		MC: "Monaco",
		MN: "Mongolia",
		ME: "Montenegro",
		MS: "Montserrat",
		MA: "Morocco",
		MZ: "Mozambique",
		MM: "Myanmar",
		NA: "Namibia",
		NR: "Nauru",
		NP: "Nepal",
		NL: "Netherlands",
		NC: "New Caledonia",
		NZ: "New Zealand",
		NI: "Nicaragua",
		NE: "Niger",
		NG: "Nigeria",
		NU: "Niue",
		NF: "Norfolk Island",
		MP: "Northern Mariana Islands",
		NO: "Norway",
		OM: "Oman",
		PK: "Pakistan",
		PW: "Palau",
		PS: "Palestinian Territory, Occupied",
		PA: "Panama",
		PG: "Papua New Guinea",
		PY: "Paraguay",
		PE: "Peru",
		PH: "Philippines",
		PN: "Pitcairn",
		PL: "Poland",
		PT: "Portugal",
		PR: "Puerto Rico",
		QA: "Qatar",
		RE: "RÃ©union",
		RO: "Romania",
		RU: "Russian Federation",
		RW: "Rwanda",
		SH: "Saint Helena, Ascension and Tristan da Cunha",
		KN: "Saint Kitts and Nevis",
		LC: "Saint Lucia",
		MF: "Saint Martin (French part)",
		PM: "Saint Pierre and Miquelon",
		VC: "Saint Vincent and the Grenadines",
		WS: "Samoa",
		SM: "San Marino",
		ST: "Sao Tome and Principe",
		SA: "Saudi Arabia",
		SN: "Senegal",
		RS: "Serbia",
		SC: "Seychelles",
		SL: "Sierra Leone",
		SG: "Singapore",
		SX: "Sint Maarten (Dutch part)",
		SK: "Slovakia",
		SI: "Slovenia",
		SB: "Solomon Islands",
		SO: "Somalia",
		ZA: "South Africa",
		GS: "South Georgia and the South Sandwich Islands",
		SS: "South Sudan",
		ES: "Spain",
		LK: "Sri Lanka",
		SD: "Sudan",
		SR: "Suriname",
		SZ: "Swaziland",
		SE: "Sweden",
		CH: "Switzerland",
		SY: "Syrian Arab Republic",
		TW: "Taiwan, Province of China",
		TJ: "Tajikistan",
		TZ: "Tanzania, United Republic of",
		TH: "Thailand",
		TL: "Timor-Leste",
		TG: "Togo",
		TK: "Tokelau",
		TO: "Tonga",
		TT: "Trinidad and Tobago",
		TN: "Tunisia",
		TR: "Turkey",
		TM: "Turkmenistan",
		TC: "Turks and Caicos Islands",
		TV: "Tuvalu",
		UG: "Uganda",
		UA: "Ukraine",
		AE: "United Arab Emirates",
		GB: "United Kingdom",
		US: "United States",
		UM: "United States Minor Outlying Islands",
		UY: "Uruguay",
		UZ: "Uzbekistan",
		VU: "Vanuatu",
		VE: "Venezuela, Bolivarian Republic of",
		VN: "Viet Nam",
		VG: "Virgin Islands, British",
		VI: "Virgin Islands, U.S.",
		WF: "Wallis and Futuna",
		EH: "Western Sahara",
		YE: "Yemen",
		ZM: "Zambia",
		ZW: "Zimbabwe"
	};
	b.flagStrap = function (f, p, g) {
		var h = this;
		var k = j(8);
		h.countries = {};
		h.selected = {
			value: null,
			text: null
		};
		h.settings = {
			inputName: "country-" + k
		};
		var m = b(f);
		var n = "flagstrap-" + k;
		var o = "#" + n;
		h.init = function () {
			h.countries = a;
			h.countries = a;
			h.settings = b.extend({}, c, p, m.data());
			if (undefined !== h.settings.countries) {
				h.countries = h.settings.countries
			}
			m.addClass("flagstrap").append(l).append(e).append(d);
			b(o).hide()
		};
		var l = function () {
			var i = b("<select/>").attr("id", n).attr("name", h.settings.inputName).attr("tabindex", "-1");
			b.each(h.countries, function (r, s) {
				var q = {
					value: r
				};
				if (h.settings.selectedCountry !== undefined) {
					if (h.settings.selectedCountry === r) {
						q = {
							value: r,
							selected: "selected"
						};
						h.selected = {
							value: r,
							text: s
						}
					}
				}
				i.append(b("<option>", q).text(s))
			});
			return i
		};
		var e = function () {
			var t = b(o).find("option").first().text();
			var q = b(o).find("option").first().val();
			t = h.selected.text || t;
			q = h.selected.value || q;
			var r = b("<i/>").addClass("flagstrap-icon flagstrap-" + q.toLowerCase()).css("margin-right", h.settings.labelMargin);
			var s = b("<span/>").addClass("flagstrap-selected-" + k).html(r).append(t);
			var i = b("<button/>").attr("tabindex", "-1").attr("data-toggle", "dropdown").attr("id", "flagstrap-drop-down-" + k).addClass("btn " + h.settings.buttonType + " " + h.settings.buttonSize + " dropdown-toggle").html(s);
			b("<span/>").addClass("caret").css("margin-left", h.settings.labelMargin).insertAfter(s);
			return i
		};
		var d = function () {
			var i = b("<ul/>").attr("id", "flagstrap-drop-down-" + k + "-list").attr("aria-labelled-by", "flagstrap-drop-down-" + k).addClass("dropdown-menu");
			if (h.settings.scrollable) {
				i.css("height", "auto").css("max-height", h.settings.scrollableHeight).css("overflow-x", "hidden")
			}
			b(o).find("option").each(function () {
				var t = b(this).text();
				var s = b(this).val();
				var u = b("<i/>").addClass("flagstrap-icon flagstrap-" + s.toLowerCase()).css("margin-right", h.settings.labelMargin);
				var r = b("<a/>").attr("data-val", b(this).val()).html(u).append(t).on("click", function (v) {
					b(o).find("option").removeAttr("selected");
					b(o).find('option[value="' + b(this).data("val") + '"]').attr("selected", "selected");
					b(".flagstrap-selected-" + k).html(b(this).html());
					v.preventDefault()
				});
				var q = b("<li/>").prepend(r);
				i.append(q)
			});
			return i
		};

		function j(s) {
			var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");
			if (!s) {
				s = Math.floor(Math.random() * r.length)
			}
			var t = "";
			for (var q = 0; q < s; q++) {
				t += r[Math.floor(Math.random() * r.length)]
			}
			return t
		}
		h.init()
	};
	b.fn.flagStrap = function (d) {
		return this.each(function (e) {
			if (b(this).data("flagStrap") === undefined) {
				b(this).data("flagStrap", new b.flagStrap(this, d, e))
			}
		})
	}
})(jQuery);