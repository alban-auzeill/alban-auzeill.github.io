let countryByIsoCode = {
  "AFG": "Afghanistan",
  //"ALA": "Aland_Islands",
  "ALB": "Albania",
  "DZA": "Algeria",
  "ASM": "American_Samoa",
  "AND": "Andorra",
  "AGO": "Angola",
  "AIA": "Anguilla",
  //"ATA": "Antarctica",
  "ATG": "Antigua_and_Barbuda",
  "ARG": "Argentina",
  "ARM": "Armenia",
  "ABW": "Aruba",
  "AUS": "Australia",
  "AUT": "Austria",
  "AZE": "Azerbaijan",
  "BHS": "Bahamas",
  "BHR": "Bahrain",
  "BGD": "Bangladesh",
  "BRB": "Barbados",
  "BLR": "Belarus",
  "BEL": "Belgium",
  "BLZ": "Belize",
  "BEN": "Benin",
  "BMU": "Bermuda",
  "BTN": "Bhutan",
  "BOL": "Bolivia",
  "BIH": "Bosnia_and_Herzegovina",
  "BWA": "Botswana",
  //"BVT": "Bouvet_Island",
  "BRA": "Brazil",
  "VGB": "British_Virgin_Islands",
  "IOT": "British_Indian_Ocean_Territory",
  "BRN": "Brunei",
  "BGR": "Bulgaria",
  "BFA": "Burkina_Faso",
  "BDI": "Burundi",
  "KHM": "Cambodia",
  "CMR": "Cameroon",
  "CAN": "Canada",
  "CPV": "Cape_Verde",
  "CYM": "Cayman_Islands",
  "CAF": "Central_African_Republic",
  "TCD": "Chad",
  "CHL": "Chile",
  "CHN": "China",
  "HKG": "Hong_Kong",
  //"MAC": "Macao,_SAR_China",
  "CXR": "Christmas_Island",
  "CCK": "Cocos_Islands",
  "COL": "Colombia",
  "COM": "Comoros",
  "COG": "Congo",
  "COD": "DR_Congo",
  "COK": "Cook_Islands",
  "CRI": "Costa_Rica",
  "CIV": "Cote_d_Ivoire",
  "HRV": "Croatia",
  "CUB": "Cuba",
  "CYP": "Cyprus",
  "CZE": "Czechia",
  "DNK": "Denmark",
  "DJI": "Djibouti",
  "DMA": "Dominica",
  "DOM": "Dominican_Republic",
  "ECU": "Ecuador",
  "EGY": "Egypt",
  "SLV": "El_Salvador",
  "GNQ": "Equatorial_Guinea",
  "ERI": "Eritrea",
  "EST": "Estonia",
  "ETH": "Ethiopia",
  //"FLK": "Falkland_Islands_(Malvinas)",
  "FRO": "Faroe_Islands",
  "FJI": "Fiji",
  "FIN": "Finland",
  "FRA": "France",
  "GUF": "French_Guiana",
  "PYF": "French_Polynesia",
  //"ATF": "French_Southern_Territories",
  "GAB": "Gabon",
  "GMB": "Gambia",
  "GEO": "Georgia",
  "DEU": "Germany",
  "GHA": "Ghana",
  "GIB": "Gibraltar",
  "GRC": "Greece",
  "GRL": "Greenland",
  "GRD": "Grenada",
  "GLP": "Guadeloupe",
  "GUM": "Guam",
  "GTM": "Guatemala",
  "GGY": "Guernsey",
  "GIN": "Guinea",
  "GNB": "Guinea_Bissau",
  "GUY": "Guyana",
  "HTI": "Haiti",
  "HMD": "Heard_Island___McDonald_Islands",
  "VAT": "Vatican",
  "HND": "Honduras",
  "HUN": "Hungary",
  "ISL": "Iceland",
  "IND": "India",
  "IDN": "Indonesia",
  "IRN": "Iran",
  "IRQ": "Iraq",
  "IRL": "Ireland",
  "IMN": "Isle_of_Man",
  "ISR": "Israel",
  "ITA": "Italy",
  "JAM": "Jamaica",
  "JPN": "Japan",
  "JEY": "Jersey",
  "JOR": "Jordan",
  "KAZ": "Kazakhstan",
  "KEN": "Kenya",
  "KIR": "Kiribati",
  "PRK": "North_Korea",
  "KOR": "South_Korea",
  "KWT": "Kuwait",
  "KGZ": "Kyrgyzstan",
  "LAO": "Laos",
  "LVA": "Latvia",
  "LBN": "Lebanon",
  "LSO": "Lesotho",
  "LBR": "Liberia",
  "LBY": "Libya",
  "LIE": "Liechtenstein",
  "LTU": "Lithuania",
  "LUX": "Luxembourg",
  "MKD": "FYROM",
  "MDG": "Madagascar",
  "MWI": "Malawi",
  "MYS": "Malaysia",
  "MDV": "Maldives",
  "MLI": "Mali",
  "MLT": "Malta",
  "MHL": "Marshall_Islands",
  "MTQ": "Martinique",
  "MRT": "Mauritania",
  "MUS": "Mauritius",
  "MYT": "Mayotte",
  "MEX": "Mexico",
  "FSM": "Federated_States_of_Micronesia",
  "MDA": "Moldova",
  "MCO": "Monaco",
  "MNG": "Mongolia",
  "MNE": "Montenegro",
  "MSR": "Montseratt",
  "MAR": "Morocco",
  "MOZ": "Mozambique",
  "MMR": "Myanmar",
  "NAM": "Namibia",
  "NRU": "Nauru",
  "NPL": "Nepal",
  "NLD": "Netherlands",
  //"ANT": "Netherlands_Antilles",
  "NCL": "New_Caledonia",
  "NZL": "New_Zealand",
  "NIC": "Nicaragua",
  "NER": "Niger",
  "NGA": "Nigeria",
  "NIU": "Niue",
  //"NFK": "Norfolk_Island",
  "MNP": "Northern_Mariana_Islands",
  "NOR": "Norway",
  "OMN": "Oman",
  "PAK": "Pakistan",
  "PLW": "Palau",
  "PSE": "Palestinian_Territories",
  "PAN": "Panama",
  "PNG": "Papua_New_Guinea",
  "PRY": "Paraguay",
  "PER": "Peru",
  "PHL": "Philippines",
  "PCN": "Pitcairn_Islands",
  "POL": "Poland",
  "PRT": "Portugal",
  "PRI": "Puerto_Rico",
  "QAT": "Qatar",
  "REU": "Reunion",
  "ROU": "Romania",
  "RUS": "Russia",
  "RWA": "Rwanda",
  //"BLM": "Saint-Barthélemy",
  "SHN": "St_Helena",
  "KNA": "St_Kitts_and_Nevis",
  "LCA": "St_Lucia",
  "SXM": "Saint-Martin_(French_part)",
  "SPM": "St_Pierre_et_Miquelon",
  "VCT": "St_Vincent_and_the_Grenadines",
  "WSM": "Samoa",
  "SMR": "San_Marino",
  "STP": "Sao_Tome_and_Principe",
  "SAU": "Saudi_Arabia",
  "SEN": "Senegal",
  "SRB": "Serbia",
  "SYC": "Seychelles",
  "SLE": "Sierra_Leone",
  "SGP": "Singapore",
  "SVK": "Slovakia",
  "SVN": "Slovenia",
  "SLB": "Solomon_Islands",
  "SOM": "Somalia",
  "ZAF": "South_Africa",
  "SGS": "South_Georgia_and_the_South_Sandwich_Islands",
  "SSD": "South_Sudan",
  "ESP": "Spain",
  "LKA": "Sri_Lanka",
  "SDN": "Sudan",
  "SUR": "Suriname",
  //"SJM": "Svalbard_and_Jan_Mayen_Islands",
  "SWZ": "Swaziland",
  "SWE": "Sweden",
  "CHE": "Switzerland",
  "SYR": "Syria",
  "TWN": "Taiwan",
  "TJK": "Tajikistan",
  "TZA": "Tanzania",
  "THA": "Thailand",
  "TLS": "East_Timor",
  "TGO": "Togo",
  "TKL": "Tokelau",
  "TON": "Tonga",
  "TTO": "Trinidad_and_Tobago",
  "TUN": "Tunisia",
  "TUR": "Turkey",
  "TKM": "Turkmenistan",
  "TCA": "Turks_and_Caicos_Islands",
  "TUV": "Tuvalu",
  "UGA": "Uganda",
  "UKR": "Ukraine",
  "ARE": "United_Arab_Emirates",
  "GBR": "United_Kingdom",
  "USA": "United_States",
  //"UMI": "US_Minor_Outlying_Islands",
  "URY": "Uruguay",
  "UZB": "Uzbekistan",
  "VUT": "Vanuatu",
  "VEN": "Venezuela",
  "VNM": "Vietnam",
  "VIR": "Virgin_Islands",
  "WLF": "Wallis_and_Futuna",
  "ESH": "Western_Sahara",
  "YEM": "Yemen",
  "ZMB": "Zambia",
  "ZWE": "Zimbabwe"
};

// Extracted from https://mapchart.net/js/detworldLoader.js?v=2.6 looking for ...attr({id:"Afghanistan"...
function convert() {

  let groups = [
    {"minLoc": 10000000, "color": "#7f0000", "div": "#box0", "label": ">= 10'000 kLOC", "paths": []},
    {"minLoc": 1000000, "color": "#b30000", "div": "#box1", "label": ">= 1'000 kLOC", "paths": []},
    {"minLoc": 100000, "color": "#d7301f", "div": "#box2", "label": ">= 100 kLOC", "paths": []},
    {"minLoc": 10000, "color": "#ef6548", "div": "#box3", "label": ">= 10 kLOC", "paths": []},
    {"minLoc": 1000, "color": "#fc8d59", "div": "#box4", "label": ">= 1 kLOC", "paths": []},
    {"minLoc": 0, "color": "#fdbb84", "div": "#box5", "label": ">= 0 LOC", "paths": []}
  ];

  let errors = [];

  for (let isoCode in countryByIsoCode) {
    let country = countryByIsoCode[isoCode];
    if (mapChartValidCountryName.indexOf(country) < 0) {
      errors.push("ERROR, for the isoCode: " + isoCode + " the country name is not a valid mapchart one: " + country);
    }
  }
  let rows = document.getElementById("input_textarea").value.split(/[\r\n]+/);

  for (let lineIndex = 0; lineIndex < rows.length; lineIndex++) {
    let line = rows[lineIndex].trim();
    if (line.length > 0 && !line.startsWith("Country")) {
      let cols = line.split(",");
      let isoCode = cols[0];
      let lineOfCode = parseInt(cols[2]);
      let country = countryByIsoCode[isoCode];
      if (mapChartValidCountryName.indexOf(country) < 0) {
        errors.push("ERROR, no mapchart country mapping exists for iso code " + isoCode);
      }
      for (let i = 0; i < groups.length; i++) {
        let group = groups[i];
        if (lineOfCode >= group["minLoc"]) {
          group["paths"].push(country);
          break;
        }
      }
    }
  }
  let groupMap = {};

  for (let i = 0; i < groups.length; i++) {

    let group = groups[i];
    if (group["paths"].length > 0) {
      let groupColor = group["color"];
      delete group["color"];
      delete group["minLoc"];
      groupMap[groupColor] = group;
    }
  }
  let json = {
    "groups": groupMap,
    "title": "SonarCloud Clients",
    "hidden": [],
    "borders": "#000000"
  };

  document.getElementById("output_textarea").value = errors.join("\n") + JSON.stringify(json, null, 2);

}
// valid for https://mapchart.net/detworld.html
let mapChartValidCountryName = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American_Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua_and_Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia_and_Herzegovina",
  "Botswana",
  "Brazil",
  "British_Indian_Ocean_Territory",
  "British_Virgin_Islands",
  "Brunei",
  "Bulgaria",
  "Burkina_Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape_Verde",
  "Cayman_Islands",
  "Central_African_Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas_Island",
  "Cocos_Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Cook_Islands",
  "Costa_Rica",
  "Cote_d_Ivoire",
  "Croatia",
  "Cuba",
  "Curacao",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican_Republic",
  "DR_Congo",
  "East_Timor",
  "Ecuador",
  "Egypt",
  "El_Salvador",
  "Equatorial_Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland_Islands",
  "Faroe_Islands",
  "Federated_States_of_Micronesia",
  "Fiji",
  "Finland",
  "France",
  "French_Guiana",
  "French_Polynesia",
  "French_Southern___Antarctic_Lands",
  "FYROM",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea_Bissau",
  "Guyana",
  "Haiti",
  "Heard_Island___McDonald_Islands",
  "Honduras",
  "Hong_Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle_of_Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall_Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montseratt",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New_Caledonia",
  "New_Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "North_Korea",
  "Northern_Mariana_Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestinian_Territories",
  "Panama",
  "Papua_New_Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn_Islands",
  "Poland",
  "Portugal",
  "Puerto_Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint-Martin_(French_part)",
  "Samoa",
  "San_Marino",
  "Sao_Tome_and_Principe",
  "Saudi_Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra_Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon_Islands",
  "Somalia",
  "South_Africa",
  "South_Georgia_and_the_South_Sandwich_Islands",
  "South_Korea",
  "South_Sudan",
  "Spain",
  "Sri_Lanka",
  "St_Helena",
  "St_Kitts_and_Nevis",
  "St_Lucia",
  "St_Pierre_et_Miquelon",
  "St_Vincent_and_the_Grenadines",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad_and_Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks_and_Caicos_Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United_Arab_Emirates",
  "United_Kingdom",
  "United_States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican",
  "Venezuela",
  "Vietnam",
  "Virgin_Islands",
  "Wallis_and_Futuna",
  "Western_Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
