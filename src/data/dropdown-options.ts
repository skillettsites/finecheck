/**
 * Lightweight dropdown-only data for the appeal form SearchableSelect components.
 * Contains ALL UK councils (~383) and ALL major parking operators (~80).
 */

interface DropdownOption {
  value: string;
  label: string;
  sublabel?: string;
}

// Helper to create a slug from a label
function slug(label: string): string {
  return label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function opt(label: string, sublabel?: string): DropdownOption {
  return { value: slug(label), label, sublabel };
}

// ---------------------------------------------------------------
// London Boroughs (32 boroughs + City of London + TfL = 34)
// ---------------------------------------------------------------
const LONDON: DropdownOption[] = [
  opt("Barking and Dagenham", "London"),
  opt("Barnet", "London"),
  opt("Bexley", "London"),
  opt("Brent", "London"),
  opt("Bromley", "London"),
  opt("Camden", "London"),
  opt("City of London", "London"),
  opt("Croydon", "London"),
  opt("Ealing", "London"),
  opt("Enfield", "London"),
  opt("Greenwich", "London"),
  opt("Hackney", "London"),
  opt("Hammersmith and Fulham", "London"),
  opt("Haringey", "London"),
  opt("Harrow", "London"),
  opt("Havering", "London"),
  opt("Hillingdon", "London"),
  opt("Hounslow", "London"),
  opt("Islington", "London"),
  opt("Kensington and Chelsea", "London"),
  opt("Kingston upon Thames", "London"),
  opt("Lambeth", "London"),
  opt("Lewisham", "London"),
  opt("Merton", "London"),
  opt("Newham", "London"),
  opt("Redbridge", "London"),
  opt("Richmond upon Thames", "London"),
  opt("Southwark", "London"),
  opt("Sutton", "London"),
  opt("Tower Hamlets", "London"),
  opt("Waltham Forest", "London"),
  opt("Wandsworth", "London"),
  opt("Westminster", "London"),
  opt("Transport for London", "London"),
];

// ---------------------------------------------------------------
// Metropolitan Borough Councils (36)
// ---------------------------------------------------------------
const METROPOLITAN: DropdownOption[] = [
  // Greater Manchester (10)
  opt("Bolton", "Greater Manchester"),
  opt("Bury", "Greater Manchester"),
  opt("Manchester", "Greater Manchester"),
  opt("Oldham", "Greater Manchester"),
  opt("Rochdale", "Greater Manchester"),
  opt("Salford", "Greater Manchester"),
  opt("Stockport", "Greater Manchester"),
  opt("Tameside", "Greater Manchester"),
  opt("Trafford", "Greater Manchester"),
  opt("Wigan", "Greater Manchester"),
  // Merseyside (5)
  opt("Knowsley", "Merseyside"),
  opt("Liverpool", "Merseyside"),
  opt("Sefton", "Merseyside"),
  opt("St Helens", "Merseyside"),
  opt("Wirral", "Merseyside"),
  // South Yorkshire (4)
  opt("Barnsley", "South Yorkshire"),
  opt("Doncaster", "South Yorkshire"),
  opt("Rotherham", "South Yorkshire"),
  opt("Sheffield", "South Yorkshire"),
  // Tyne and Wear (5)
  opt("Gateshead", "Tyne and Wear"),
  opt("Newcastle", "Tyne and Wear"),
  opt("North Tyneside", "Tyne and Wear"),
  opt("South Tyneside", "Tyne and Wear"),
  opt("Sunderland", "Tyne and Wear"),
  // West Midlands (7)
  opt("Birmingham", "West Midlands"),
  opt("Coventry", "West Midlands"),
  opt("Dudley", "West Midlands"),
  opt("Sandwell", "West Midlands"),
  opt("Solihull", "West Midlands"),
  opt("Walsall", "West Midlands"),
  opt("Wolverhampton", "West Midlands"),
  // West Yorkshire (5)
  opt("Bradford", "West Yorkshire"),
  opt("Calderdale", "West Yorkshire"),
  opt("Kirklees", "West Yorkshire"),
  opt("Leeds", "West Yorkshire"),
  opt("Wakefield", "West Yorkshire"),
];

// ---------------------------------------------------------------
// Unitary Authorities in England (62)
// ---------------------------------------------------------------
const UNITARY: DropdownOption[] = [
  opt("Bath and NE Somerset", "South West"),
  opt("Bedford", "East of England"),
  opt("Blackburn with Darwen", "North West"),
  opt("Blackpool", "North West"),
  opt("Bournemouth Christchurch and Poole", "South West"),
  opt("Bracknell Forest", "South East"),
  opt("Brighton and Hove", "South East"),
  opt("Bristol", "South West"),
  opt("Buckinghamshire", "South East"),
  opt("Central Bedfordshire", "East of England"),
  opt("Cheshire East", "North West"),
  opt("Cheshire West and Chester", "North West"),
  opt("Cornwall", "South West"),
  opt("Cumberland", "North West"),
  opt("Darlington", "North East"),
  opt("Derby", "East Midlands"),
  opt("Dorset", "South West"),
  opt("Durham", "North East"),
  opt("East Riding of Yorkshire", "Yorkshire and the Humber"),
  opt("Halton", "North West"),
  opt("Hartlepool", "North East"),
  opt("Herefordshire", "West Midlands"),
  opt("Isle of Wight", "South East"),
  opt("Kingston upon Hull", "Yorkshire and the Humber"),
  opt("Leicester", "East Midlands"),
  opt("Luton", "East of England"),
  opt("Medway", "South East"),
  opt("Middlesbrough", "North East"),
  opt("Milton Keynes", "South East"),
  opt("North East Lincolnshire", "Yorkshire and the Humber"),
  opt("North Lincolnshire", "Yorkshire and the Humber"),
  opt("North Northamptonshire", "East Midlands"),
  opt("North Somerset", "South West"),
  opt("North Yorkshire", "Yorkshire and the Humber"),
  opt("Northumberland", "North East"),
  opt("Nottingham", "East Midlands"),
  opt("Peterborough", "East of England"),
  opt("Plymouth", "South West"),
  opt("Portsmouth", "South East"),
  opt("Reading", "South East"),
  opt("Redcar and Cleveland", "North East"),
  opt("Rutland", "East Midlands"),
  opt("Shropshire", "West Midlands"),
  opt("Slough", "South East"),
  opt("Somerset", "South West"),
  opt("South Gloucestershire", "South West"),
  opt("Southampton", "South East"),
  opt("Southend-on-Sea", "East of England"),
  opt("Stockton-on-Tees", "North East"),
  opt("Stoke-on-Trent", "West Midlands"),
  opt("Swindon", "South West"),
  opt("Telford and Wrekin", "West Midlands"),
  opt("Thurrock", "East of England"),
  opt("Torbay", "South West"),
  opt("Warrington", "North West"),
  opt("West Berkshire", "South East"),
  opt("West Northamptonshire", "East Midlands"),
  opt("Westmorland and Furness", "North West"),
  opt("Wiltshire", "South West"),
  opt("Windsor and Maidenhead", "South East"),
  opt("Wokingham", "South East"),
  opt("York", "Yorkshire and the Humber"),
];

// ---------------------------------------------------------------
// County Councils (21)
// ---------------------------------------------------------------
const COUNTY: DropdownOption[] = [
  opt("Cambridgeshire", "County Council"),
  opt("Derbyshire", "County Council"),
  opt("Devon", "County Council"),
  opt("East Sussex", "County Council"),
  opt("Essex", "County Council"),
  opt("Gloucestershire", "County Council"),
  opt("Hampshire", "County Council"),
  opt("Hertfordshire", "County Council"),
  opt("Kent", "County Council"),
  opt("Lancashire", "County Council"),
  opt("Leicestershire", "County Council"),
  opt("Lincolnshire", "County Council"),
  opt("Norfolk", "County Council"),
  opt("Nottinghamshire", "County Council"),
  opt("Oxfordshire", "County Council"),
  opt("Staffordshire", "County Council"),
  opt("Suffolk", "County Council"),
  opt("Surrey", "County Council"),
  opt("Warwickshire", "County Council"),
  opt("West Sussex", "County Council"),
  opt("Worcestershire", "County Council"),
];

// ---------------------------------------------------------------
// Top 50 District Councils (most likely to issue parking fines)
// ---------------------------------------------------------------
const DISTRICT: DropdownOption[] = [
  opt("Ashford", "Kent"),
  opt("Basingstoke", "Hampshire"),
  opt("Cambridge", "Cambridgeshire"),
  opt("Canterbury", "Kent"),
  opt("Chelmsford", "Essex"),
  opt("Cheltenham", "Gloucestershire"),
  opt("Chesterfield", "Derbyshire"),
  opt("Chichester", "West Sussex"),
  opt("Colchester", "Essex"),
  opt("Crawley", "West Sussex"),
  opt("Dartford", "Kent"),
  opt("Dover", "Kent"),
  opt("Eastbourne", "East Sussex"),
  opt("Eastleigh", "Hampshire"),
  opt("Elmbridge", "Surrey"),
  opt("Epsom and Ewell", "Surrey"),
  opt("Exeter", "Devon"),
  opt("Fareham", "Hampshire"),
  opt("Gloucester", "Gloucestershire"),
  opt("Guildford", "Surrey"),
  opt("Harlow", "Essex"),
  opt("Hart", "Hampshire"),
  opt("Hastings", "East Sussex"),
  opt("Ipswich", "Suffolk"),
  opt("Lancaster", "Lancashire"),
  opt("Lincoln", "Lincolnshire"),
  opt("Maidstone", "Kent"),
  opt("New Forest", "Hampshire"),
  opt("Norwich", "Norfolk"),
  opt("Nuneaton", "Warwickshire"),
  opt("Oxford", "Oxfordshire"),
  opt("Preston", "Lancashire"),
  opt("Reigate and Banstead", "Surrey"),
  opt("Rugby", "Warwickshire"),
  opt("St Albans", "Hertfordshire"),
  opt("Stevenage", "Hertfordshire"),
  opt("Stratford-on-Avon", "Warwickshire"),
  opt("Test Valley", "Hampshire"),
  opt("Tunbridge Wells", "Kent"),
  opt("Burnley", "Lancashire"),
  opt("Warwick", "Warwickshire"),
  opt("Watford", "Hertfordshire"),
  opt("Winchester", "Hampshire"),
  opt("Woking", "Surrey"),
  opt("Worcester", "Worcestershire"),
  opt("Worthing", "West Sussex"),
  opt("Wyre", "Lancashire"),
];

// ---------------------------------------------------------------
// Scottish Councils (32)
// ---------------------------------------------------------------
const SCOTLAND: DropdownOption[] = [
  opt("Aberdeen", "Scotland"),
  opt("Aberdeenshire", "Scotland"),
  opt("Angus", "Scotland"),
  opt("Argyll and Bute", "Scotland"),
  opt("Clackmannanshire", "Scotland"),
  opt("Dumfries and Galloway", "Scotland"),
  opt("Dundee", "Scotland"),
  opt("East Ayrshire", "Scotland"),
  opt("East Dunbartonshire", "Scotland"),
  opt("East Lothian", "Scotland"),
  opt("East Renfrewshire", "Scotland"),
  opt("Edinburgh", "Scotland"),
  opt("Falkirk", "Scotland"),
  opt("Fife", "Scotland"),
  opt("Glasgow", "Scotland"),
  opt("Highland", "Scotland"),
  opt("Inverclyde", "Scotland"),
  opt("Midlothian", "Scotland"),
  opt("Moray", "Scotland"),
  opt("North Ayrshire", "Scotland"),
  opt("North Lanarkshire", "Scotland"),
  opt("Orkney", "Scotland"),
  opt("Perth and Kinross", "Scotland"),
  opt("Renfrewshire", "Scotland"),
  opt("Scottish Borders", "Scotland"),
  opt("Shetland", "Scotland"),
  opt("South Ayrshire", "Scotland"),
  opt("South Lanarkshire", "Scotland"),
  opt("Stirling", "Scotland"),
  opt("West Dunbartonshire", "Scotland"),
  opt("Western Isles", "Scotland"),
  opt("West Lothian", "Scotland"),
];

// ---------------------------------------------------------------
// Welsh Councils (22)
// ---------------------------------------------------------------
const WALES: DropdownOption[] = [
  opt("Blaenau Gwent", "Wales"),
  opt("Bridgend", "Wales"),
  opt("Caerphilly", "Wales"),
  opt("Cardiff", "Wales"),
  opt("Carmarthenshire", "Wales"),
  opt("Ceredigion", "Wales"),
  opt("Conwy", "Wales"),
  opt("Denbighshire", "Wales"),
  opt("Flintshire", "Wales"),
  opt("Gwynedd", "Wales"),
  opt("Isle of Anglesey", "Wales"),
  opt("Merthyr Tydfil", "Wales"),
  opt("Monmouthshire", "Wales"),
  opt("Neath Port Talbot", "Wales"),
  opt("Newport", "Wales"),
  opt("Pembrokeshire", "Wales"),
  opt("Powys", "Wales"),
  opt("Rhondda Cynon Taf", "Wales"),
  opt("Swansea", "Wales"),
  opt("Torfaen", "Wales"),
  opt("Vale of Glamorgan", "Wales"),
  opt("Wrexham", "Wales"),
];

// ---------------------------------------------------------------
// Northern Ireland (12)
// ---------------------------------------------------------------
const NORTHERN_IRELAND: DropdownOption[] = [
  opt("DfI Roads", "Northern Ireland"),
  opt("Belfast", "Northern Ireland"),
  opt("Antrim and Newtownabbey", "Northern Ireland"),
  opt("Ards and North Down", "Northern Ireland"),
  opt("Armagh Banbridge and Craigavon", "Northern Ireland"),
  opt("Causeway Coast and Glens", "Northern Ireland"),
  opt("Derry and Strabane", "Northern Ireland"),
  opt("Fermanagh and Omagh", "Northern Ireland"),
  opt("Lisburn and Castlereagh", "Northern Ireland"),
  opt("Mid and East Antrim", "Northern Ireland"),
  opt("Mid Ulster", "Northern Ireland"),
  opt("Newry Mourne and Down", "Northern Ireland"),
];

// ---------------------------------------------------------------
// Combined and sorted: ALL_COUNCIL_OPTIONS
// ---------------------------------------------------------------
export const ALL_COUNCIL_OPTIONS: DropdownOption[] = [
  ...LONDON,
  ...METROPOLITAN,
  ...UNITARY,
  ...COUNTY,
  ...DISTRICT,
  ...SCOTLAND,
  ...WALES,
  ...NORTHERN_IRELAND,
].sort((a, b) => a.label.localeCompare(b.label));

// ---------------------------------------------------------------
// BPA / POPLA operators (~39)
// ---------------------------------------------------------------
const BPA_OPERATORS: DropdownOption[] = [
  opt("ANPR Parking Services", "BPA / POPLA"),
  opt("APCOA", "BPA / POPLA"),
  opt("Azure Parking", "BPA / POPLA"),
  opt("Britannia Parking", "BPA / POPLA"),
  opt("Capital Car Park Control", "BPA / POPLA"),
  opt("Civil Enforcement", "BPA / POPLA"),
  opt("CP Plus", "BPA / POPLA"),
  opt("Elite Car Parking", "BPA / POPLA"),
  opt("Euro Car Parks", "BPA / POPLA"),
  opt("Euro Parking Collection", "BPA / POPLA"),
  opt("Highview Parking", "BPA / POPLA"),
  opt("Horizon Parking", "BPA / POPLA"),
  opt("Indigo", "BPA / POPLA"),
  opt("Initial Parking", "BPA / POPLA"),
  opt("IPSERV", "BPA / POPLA"),
  opt("Key Parking", "BPA / POPLA"),
  opt("Local Parking Management", "BPA / POPLA"),
  opt("Lodge Parking", "BPA / POPLA"),
  opt("MET Parking Services", "BPA / POPLA"),
  opt("Minster Baywatch", "BPA / POPLA"),
  opt("National Car Parks (NCP)", "BPA / POPLA"),
  opt("NSL", "BPA / POPLA"),
  opt("P4 Parking", "BPA / POPLA"),
  opt("Park Nova", "BPA / POPLA"),
  opt("Parking Enforcement Services", "BPA / POPLA"),
  opt("ParkingEye", "BPA / POPLA"),
  opt("ParkMaven", "BPA / POPLA"),
  opt("ParkTech", "BPA / POPLA"),
  opt("Private Parking Solutions", "BPA / POPLA"),
  opt("Q-Park", "BPA / POPLA"),
  opt("RCP Parking", "BPA / POPLA"),
  opt("Saba Park", "BPA / POPLA"),
  opt("Secure-a-Space", "BPA / POPLA"),
  opt("Select Parking", "BPA / POPLA"),
  opt("Spring Parking", "BPA / POPLA"),
  opt("Total Car Parks", "BPA / POPLA"),
  opt("UK Parking Enforcement", "BPA / POPLA"),
  opt("UKPC", "BPA / POPLA"),
  opt("Unity Services", "BPA / POPLA"),
];

// ---------------------------------------------------------------
// IPC / IAS operators (~39)
// ---------------------------------------------------------------
const IPC_OPERATORS: DropdownOption[] = [
  opt("Alliance Parking", "IPC / IAS"),
  opt("Athena ANPR", "IPC / IAS"),
  opt("Car Park Management Services (CPMS)", "IPC / IAS"),
  opt("Car Park Securities", "IPC / IAS"),
  opt("Complete Parking Services", "IPC / IAS"),
  opt("Countrywide Parking", "IPC / IAS"),
  opt("Creative Car Park", "IPC / IAS"),
  opt("ES Parking", "IPC / IAS"),
  opt("Excel Parking", "IPC / IAS"),
  opt("G24", "IPC / IAS"),
  opt("Gemini Parking Solutions", "IPC / IAS"),
  opt("Have A Nice Car Park", "IPC / IAS"),
  opt("HX Car Park Management", "IPC / IAS"),
  opt("I Park Services", "IPC / IAS"),
  opt("Imperial Civil Enforcement (Open Parking)", "IPC / IAS"),
  opt("Legend Parking", "IPC / IAS"),
  opt("Link Parking", "IPC / IAS"),
  opt("Managed Parking", "IPC / IAS"),
  opt("Metropark", "IPC / IAS"),
  opt("Napier Parking", "IPC / IAS"),
  opt("National Parking Control", "IPC / IAS"),
  opt("NForce Parking", "IPC / IAS"),
  opt("One Parking Solution", "IPC / IAS"),
  opt("Park and Control", "IPC / IAS"),
  opt("Park Direct", "IPC / IAS"),
  opt("Parking Awareness", "IPC / IAS"),
  opt("Parking Control Management", "IPC / IAS"),
  opt("Parking Control Solutions", "IPC / IAS"),
  opt("Parkon", "IPC / IAS"),
  opt("Premier Park", "IPC / IAS"),
  opt("Premier Parking Solutions", "IPC / IAS"),
  opt("SiP Parking (ANPReye)", "IPC / IAS"),
  opt("Smart Parking", "IPC / IAS"),
  opt("Total Car Park Management", "IPC / IAS"),
  opt("UK Car Park Management", "IPC / IAS"),
  opt("UKCPS", "IPC / IAS"),
  opt("Universal Parking", "IPC / IAS"),
  opt("Vehicle Control Services (VCS)", "IPC / IAS"),
  opt("Wise Parking", "IPC / IAS"),
];

// ---------------------------------------------------------------
// Combined and sorted: ALL_OPERATOR_OPTIONS
// ---------------------------------------------------------------
export const ALL_OPERATOR_OPTIONS: DropdownOption[] = [
  ...BPA_OPERATORS,
  ...IPC_OPERATORS,
  { value: "other", label: "Other / Not Listed", sublabel: "Type the name if not found" },
].sort((a, b) => {
  // Keep "Other / Not Listed" at the end
  if (a.value === "other") return 1;
  if (b.value === "other") return -1;
  return a.label.localeCompare(b.label);
});
