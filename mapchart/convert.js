var lineOfCodeByCountryIsoCode = {
  "CZE": 0,
};

// ISO ALPHA-3 Code to Country Name
// https://www.nationsonline.org/oneworld/country_code_list.htm
var countryByIsoCode = {
  "AFG": "Afghanistan",
  "ALA": "Aland Islands",
  "ALB": "Albania",
  "DZA": "Algeria",
  "ASM": "American Samoa",
  "AND": "Andorra",
  "AGO": "Angola",
  "AIA": "Anguilla",
  "ATA": "Antarctica",
  "ATG": "Antigua and Barbuda",
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
  "BIH": "Bosnia and Herzegovina",
  "BWA": "Botswana",
  "BVT": "Bouvet Island",
  "BRA": "Brazil",
  "VGB": "British Virgin Islands",
  "IOT": "British Indian Ocean Territory",
  "BRN": "Brunei Darussalam",
  "BGR": "Bulgaria",
  "BFA": "Burkina Faso",
  "BDI": "Burundi",
  "KHM": "Cambodia",
  "CMR": "Cameroon",
  "CAN": "Canada",
  "CPV": "Cape Verde",
  "CYM": "Cayman Islands",
  "CAF": "Central African Republic",
  "TCD": "Chad",
  "CHL": "Chile",
  "CHN": "China",
  "HKG": "Hong Kong, SAR China",
  "MAC": "Macao, SAR China",
  "CXR": "Christmas Island",
  "CCK": "Cocos (Keeling) Islands",
  "COL": "Colombia",
  "COM": "Comoros",
  "COG": "Congo (Brazzaville)",
  "COD": "Congo, (Kinshasa)",
  "COK": "Cook Islands",
  "CRI": "Costa Rica",
  "CIV": "Côte d'Ivoire",
  "HRV": "Croatia",
  "CUB": "Cuba",
  "CYP": "Cyprus",
  "CZE": "Czech Republic",
  "DNK": "Denmark",
  "DJI": "Djibouti",
  "DMA": "Dominica",
  "DOM": "Dominican Republic",
  "ECU": "Ecuador",
  "EGY": "Egypt",
  "SLV": "El Salvador",
  "GNQ": "Equatorial Guinea",
  "ERI": "Eritrea",
  "EST": "Estonia",
  "ETH": "Ethiopia",
  "FLK": "Falkland Islands (Malvinas)",
  "FRO": "Faroe Islands",
  "FJI": "Fiji",
  "FIN": "Finland",
  "FRA": "France",
  "GUF": "French Guiana",
  "PYF": "French Polynesia",
  "ATF": "French Southern Territories",
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
  "GNB": "Guinea-Bissau",
  "GUY": "Guyana",
  "HTI": "Haiti",
  "HMD": "Heard and Mcdonald Islands",
  "VAT": "Holy See (Vatican City State)",
  "HND": "Honduras",
  "HUN": "Hungary",
  "ISL": "Iceland",
  "IND": "India",
  "IDN": "Indonesia",
  "IRN": "Iran, Islamic Republic of",
  "IRQ": "Iraq",
  "IRL": "Ireland",
  "IMN": "Isle of Man",
  "ISR": "Israel",
  "ITA": "Italy",
  "JAM": "Jamaica",
  "JPN": "Japan",
  "JEY": "Jersey",
  "JOR": "Jordan",
  "KAZ": "Kazakhstan",
  "KEN": "Kenya",
  "KIR": "Kiribati",
  "PRK": "Korea (North)",
  "KOR": "Korea (South)",
  "KWT": "Kuwait",
  "KGZ": "Kyrgyzstan",
  "LAO": "Lao PDR",
  "LVA": "Latvia",
  "LBN": "Lebanon",
  "LSO": "Lesotho",
  "LBR": "Liberia",
  "LBY": "Libya",
  "LIE": "Liechtenstein",
  "LTU": "Lithuania",
  "LUX": "Luxembourg",
  "MKD": "Macedonia, Republic of",
  "MDG": "Madagascar",
  "MWI": "Malawi",
  "MYS": "Malaysia",
  "MDV": "Maldives",
  "MLI": "Mali",
  "MLT": "Malta",
  "MHL": "Marshall Islands",
  "MTQ": "Martinique",
  "MRT": "Mauritania",
  "MUS": "Mauritius",
  "MYT": "Mayotte",
  "MEX": "Mexico",
  "FSM": "Micronesia, Federated States of",
  "MDA": "Moldova",
  "MCO": "Monaco",
  "MNG": "Mongolia",
  "MNE": "Montenegro",
  "MSR": "Montserrat",
  "MAR": "Morocco",
  "MOZ": "Mozambique",
  "MMR": "Myanmar",
  "NAM": "Namibia",
  "NRU": "Nauru",
  "NPL": "Nepal",
  "NLD": "Netherlands",
  "ANT": "Netherlands Antilles",
  "NCL": "New Caledonia",
  "NZL": "New Zealand",
  "NIC": "Nicaragua",
  "NER": "Niger",
  "NGA": "Nigeria",
  "NIU": "Niue",
  "NFK": "Norfolk Island",
  "MNP": "Northern Mariana Islands",
  "NOR": "Norway",
  "OMN": "Oman",
  "PAK": "Pakistan",
  "PLW": "Palau",
  "PSE": "Palestinian Territory",
  "PAN": "Panama",
  "PNG": "Papua New Guinea",
  "PRY": "Paraguay",
  "PER": "Peru",
  "PHL": "Philippines",
  "PCN": "Pitcairn",
  "POL": "Poland",
  "PRT": "Portugal",
  "PRI": "Puerto Rico",
  "QAT": "Qatar",
  "REU": "Réunion",
  "ROU": "Romania",
  "RUS": "Russian Federation",
  "RWA": "Rwanda",
  "BLM": "Saint-Barthélemy",
  "SHN": "Saint Helena",
  "KNA": "Saint Kitts and Nevis",
  "LCA": "Saint Lucia",
  "MAF": "Saint-Martin (French part)",
  "SPM": "Saint Pierre and Miquelon",
  "VCT": "Saint Vincent and Grenadines",
  "WSM": "Samoa",
  "SMR": "San Marino",
  "STP": "Sao Tome and Principe",
  "SAU": "Saudi Arabia",
  "SEN": "Senegal",
  "SRB": "Serbia",
  "SYC": "Seychelles",
  "SLE": "Sierra Leone",
  "SGP": "Singapore",
  "SVK": "Slovakia",
  "SVN": "Slovenia",
  "SLB": "Solomon Islands",
  "SOM": "Somalia",
  "ZAF": "South Africa",
  "SGS": "South Georgia and the South Sandwich Islands",
  "SSD": "South Sudan",
  "ESP": "Spain",
  "LKA": "Sri Lanka",
  "SDN": "Sudan",
  "SUR": "Suriname",
  "SJM": "Svalbard and Jan Mayen Islands",
  "SWZ": "Swaziland",
  "SWE": "Sweden",
  "CHE": "Switzerland",
  "SYR": "Syrian Arab Republic (Syria)",
  "TWN": "Taiwan, Republic of China",
  "TJK": "Tajikistan",
  "TZA": "Tanzania, United Republic of",
  "THA": "Thailand",
  "TLS": "Timor-Leste",
  "TGO": "Togo",
  "TKL": "Tokelau",
  "TON": "Tonga",
  "TTO": "Trinidad and Tobago",
  "TUN": "Tunisia",
  "TUR": "Turkey",
  "TKM": "Turkmenistan",
  "TCA": "Turks and Caicos Islands",
  "TUV": "Tuvalu",
  "UGA": "Uganda",
  "UKR": "Ukraine",
  "ARE": "United Arab Emirates",
  "GBR": "United Kingdom",
  "USA": "United States of America",
  "UMI": "US Minor Outlying Islands",
  "URY": "Uruguay",
  "UZB": "Uzbekistan",
  "VUT": "Vanuatu",
  "VEN": "Venezuela (Bolivarian Republic)",
  "VNM": "Viet Nam",
  "VIR": "Virgin Islands, US",
  "WLF": "Wallis and Futuna Islands",
  "ESH": "Western Sahara",
  "YEM": "Yemen",
  "ZMB": "Zambia",
  "ZWE": "Zimbabwe"
};

function normalizeName(name) {
  switch (name) {
    case "Viet Nam":
      return "Vietnam";
    case "Venezuela (Bolivarian Republic)":
      return "Venezuela";
    case "United States of America":
      return "United_States";
    case "Tanzania, United Republic of":
      return "Tanzania";
    case "Taiwan, Republic of China":
      return "Taiwan";
    case "Syrian Arab Republic (Syria)":
      return "Syria";
    case "Korea (North)":
      return "North_Korea";
    case "Korea (South)":
      return "South_Korea";
    case "Russian Federation":
      return "Russia";
    case "Palestinian Territory":
      return "Palestinian_Territories";
    case "Hong Kong, SAR China":
      return "Hong_Kong";
    case "Iran, Islamic Republic of":
      return "Iran";
    case "Congo (Brazzaville)":
      return "Congo";
    case "Congo, (Kinshasa)":
      return "DR_Congo";
    case "Côte d'Ivoire":
      return "Cote_d_Ivoire";
    case "Guinea-Bissau":
      return "Guinea_Bissau";
    case "Lao PDR":
      return "Laos";
    case "Macedonia, Republic of":
      return "FYROM";
    case "Brunei Darussalam":
      return "Brunei";
    case "Czech Republic":
      return "Czechia";
    default:
      return name.replace(/ /g, "_");
  }
}

for(var isoCode in countryByIsoCode) {
  countryByIsoCode[isoCode] = normalizeName(countryByIsoCode[isoCode]);
}

var isoCodeByCountry = {};
for(var isoCode in countryByIsoCode) {
  isoCodeByCountry[countryByIsoCode[isoCode]] = isoCode;
}

// Country names used by https://mapchart.net/
var countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia_and_Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina_Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central_African_Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Costa_Rica",
  "Cote_d_Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominican_Republic",
  "DR_Congo",
  "Ecuador",
  "Egypt",
  "El_Salvador",
  "Equatorial_Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Finland",
  "France",
  "French_Guiana",
  "FYROM",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Greenland",
  "Guatemala",
  "Guinea",
  "Guinea_Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong_Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Mali",
  "Malta",
  "Mauritania",
  "Mexico",
  "Moldova",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nepal",
  "Netherlands",
  "New_Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North_Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestinian_Territories",
  "Panama",
  "Papua_New_Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto_Rico",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saudi_Arabia",
  "Senegal",
  "Serbia",
  "Sierra_Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Somalia",
  "South_Africa",
  "South_Korea",
  "South_Sudan",
  "Spain",
  "Sri_Lanka",
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
  "Trinidad_and_Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Uganda",
  "Ukraine",
  "United_Arab_Emirates",
  "United_Kingdom",
  "United_States",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Western_Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

function println(text) {
  process.stdout.write(text + "\n");
}

function print_not_used_by_mapchart_countries() {
  println("______________________________________");
  println("Not used by mapchart countries:");

  for (var country in isoCodeByCountry) {
    if (countries.indexOf(country) < 0) {
      println(country);
    }
  }
}

function print_not_covered_mapchart_countries() {
  println("______________________________________");
  println("Not covered mapchart countries:");

  for(var i = 0; i < countries.length; i++) {
    var country = countries[i];
    if (!isoCodeByCountry[country]) {
      println(country);
    }
  }
}

// print_not_used_by_mapchart_countries();
// print_not_covered_mapchart_countries();

var groups = [
  { "minLoc": 10000000, "color": "#7f0000", "div": "#box0", "label": ">= 10'000 kLOC", "paths": [] },
  { "minLoc":  1000000, "color": "#b30000", "div": "#box1", "label": ">= 1'000 kLOC", "paths": [] },
  { "minLoc":   100000, "color": "#d7301f", "div": "#box2", "label": ">= 100 kLOC", "paths": [] },
  { "minLoc":    10000, "color": "#ef6548", "div": "#box3", "label": ">= 10 kLOC", "paths": [] },
  { "minLoc":     1000, "color": "#fc8d59", "div": "#box4", "label": ">= 1 kLOC", "paths": [] },
  { "minLoc":        1, "color": "#fdbb84", "div": "#box5", "label": "> 0 LOC", "paths": [] }
];

for (var isoCode in lineOfCodeByCountryIsoCode) {
  var country = countryByIsoCode[isoCode];
  var lineOfCode = lineOfCodeByCountryIsoCode[isoCode];
  if (countries.indexOf(country) < 0) {
    println("ERROR, no mapchart country mapping exists for iso code " + isoCode);
  }
  if (lineOfCode > 0) {
    for (var i = 0; i < groups.length; i++) {
      var group = groups[i];
      if (lineOfCode >= group["minLoc"]) {
        group["paths"].push(country);
        break;
      }
    }
  }
}

var groupMap = {};

for (var i = 0; i<groups.length; i++) {
  var group = groups[i];
  var groupColor = group["color"];
  delete group["color"];
  delete group["minLoc"];
  groupMap[groupColor] = group;
}

var json = {
  "groups": groupMap,
  "title": "SonarCloud Clients",
  "hidden": [],
  "borders": "#000000"
};

println(JSON.stringify(json, null, 2));
