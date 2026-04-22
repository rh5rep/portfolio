export type TravelLocation = {
  name: string;
  coords: [number, number];
  region: string;
};

export const travelLocations: TravelLocation[] = [
  { name: "District of Columbia", coords: [38.907132, -77.036546], region: "North America" },
  { name: "Concord", coords: [43.20814, -71.53757], region: "North America" },
  { name: "Boston", coords: [42.35843, -71.05977], region: "North America" },
  { name: "San Francisco", coords: [37.773972, -122.431297], region: "North America" },
  { name: "Colorado Springs", coords: [38.8339, -104.8214], region: "North America" },
  { name: "St. Pete Beach", coords: [27.7465, -82.7415], region: "North America" },
  { name: "Los Angeles", coords: [34.0522, -118.2437], region: "North America" },
  { name: "Santa Monica", coords: [34.005166646, -118.49249803], region: "North America" },
  { name: "Las Vegas", coords: [36.17497, -115.13722], region: "North America" },
  { name: "Yosemite", coords: [37.8651, -119.5383], region: "North America" },
  { name: "Grand Canyon", coords: [36.1069, -112.1129], region: "North America" },
  { name: "Montreal", coords: [45.5017, -73.5673], region: "North America" },
  { name: "Cancun", coords: [21.1619, -86.8515], region: "North America" },
  { name: "Oranjestad", coords: [12.5211, -69.9683], region: "North America" },
  { name: "Cuernavaca", coords: [18.9242, -99.2216], region: "North America" },
  { name: "Mexico City", coords: [19.4326, -99.1332], region: "North America" },
  { name: "La Fortuna", coords: [10.4625, -84.7033], region: "Central America" },
  { name: "Monteverde", coords: [10.3084, -84.8046], region: "Central America" },
  { name: "Tamarindo", coords: [10.2998, -85.8374], region: "Central America" },
  { name: "London", coords: [51.5074, -0.1278], region: "Europe" },
  { name: "Cambridge", coords: [52.2053, 0.1218], region: "Europe" },
  { name: "York", coords: [53.9591, -1.0815], region: "Europe" },
  { name: "Skye", coords: [57.5359, -6.2263], region: "Europe" },
  { name: "Edinburgh", coords: [55.9533, -3.1883], region: "Europe" },
  { name: "Paris", coords: [48.8566, 2.3522], region: "Europe" },
  { name: "Geneva", coords: [46.2044, 6.1432], region: "Europe" },
  { name: "Milan", coords: [45.4642, 9.19], region: "Europe" },
  { name: "Venice", coords: [45.4408, 12.3155], region: "Europe" },
  { name: "Passo di Giau", coords: [46.4825, 12.053889], region: "Europe" },
  { name: "Bologna", coords: [44.4949, 11.3426], region: "Europe" },
  { name: "Florence", coords: [43.7696, 11.2558], region: "Europe" },
  { name: "Rome", coords: [41.9028, 12.4964], region: "Europe" },
  { name: "Napoli", coords: [40.8522, 14.2681], region: "Europe" },
  { name: "Pompeii", coords: [40.751, 14.4924], region: "Europe" },
  { name: "Barcelona", coords: [41.3851, 2.1734], region: "Europe" },
  { name: "Madrid", coords: [40.4168, -3.7038], region: "Europe" },
  { name: "Sevilla", coords: [37.3886, -5.9823], region: "Europe" },
  { name: "Pula", coords: [44.8666, 13.8496], region: "Europe" },
  { name: "Zadar", coords: [44.1194, 15.2314], region: "Europe" },
  { name: "Split", coords: [43.5081, 16.4402], region: "Europe" },
  { name: "Mostar", coords: [43.34333, 17.80806], region: "Europe" },
  { name: "Dubrovnik", coords: [42.6507, 18.0944], region: "Europe" },
  { name: "Kotor", coords: [42.4247, 18.7712], region: "Europe" },
  { name: "Belgrade", coords: [44.7866, 20.4489], region: "Europe" },
  { name: "Budapest", coords: [47.4979, 19.0402], region: "Europe" },
  { name: "Vienna", coords: [48.2082, 16.3738], region: "Europe" },
  { name: "Munich", coords: [48.1351, 11.582], region: "Europe" },
  { name: "Prague", coords: [50.0755, 14.4378], region: "Europe" },
  { name: "Lagos", coords: [37.102, -8.6741], region: "Europe" },
  { name: "Lisbon", coords: [38.7223, -9.1393], region: "Europe" },
  { name: "Porto", coords: [41.1579, -8.6291], region: "Europe" },
  { name: "Larnaca", coords: [34.92291, 33.6233], region: "Europe" },
  { name: "Beirut", coords: [33.8938, 35.5018], region: "Middle East" },
  { name: "Beijing", coords: [39.9042, 116.4074], region: "Asia" },
  { name: "Hanoi", coords: [21.0285, 105.8542], region: "Asia" },
  { name: "Ha Long Bay", coords: [20.9101, 107.1839], region: "Asia" },
  { name: "Ha Giang", coords: [22.8136, 104.9836], region: "Asia" },
  { name: "Ninh Binh", coords: [20.2528, 105.975], region: "Asia" },
  { name: "Phong Nha", coords: [17.5904, 106.2838], region: "Asia" },
  { name: "Hoi An", coords: [15.8801, 108.338], region: "Asia" },
  { name: "Bangkok", coords: [13.7563, 100.5018], region: "Asia" },
  { name: "Chiang Mai", coords: [18.7061, 98.9817], region: "Asia" },
  { name: "Pai", coords: [19.3592, 98.4396], region: "Asia" },
  { name: "Krabi", coords: [8.0863, 98.9063], region: "Asia" },
  { name: "Koh Phi Phi", coords: [7.7407, 98.7784], region: "Asia" },
  { name: "Koh Tao", coords: [10.09808, 99.83809], region: "Asia" },
  { name: "Koh Phangan", coords: [9.7317, 100.0136], region: "Asia" },
  { name: "Colombo", coords: [6.9271, 79.8612], region: "South Asia" },
  { name: "Hiriketiya", coords: [5.966, 80.7047], region: "South Asia" },
  { name: "Mirissa", coords: [5.9483, 80.4583], region: "South Asia" },
  { name: "Kandy", coords: [7.2906, 80.6337], region: "South Asia" },
  { name: "Ella", coords: [6.8667, 81.0466], region: "South Asia" },
  { name: "Bali", coords: [-8.4095, 115.1889], region: "Southeast Asia" },
  { name: "Komodo", coords: [-8.5517, 119.4874], region: "Southeast Asia" },
  { name: "Sydney", coords: [-33.8688, 151.2093], region: "Oceania" },
  { name: "Auckland", coords: [-36.8509, 174.7645], region: "Oceania" },
  { name: "Queenstown", coords: [-45.0312, 168.6626], region: "Oceania" },
];

export const travelRegions = Array.from(
  travelLocations.reduce((map, location) => {
    const group = map.get(location.region) ?? [];
    group.push(location.name);
    map.set(location.region, group);
    return map;
  }, new Map<string, string[]>()),
).map(([region, places]) => ({
  region,
  places,
}));

export const totalTravelPlaces = travelLocations.length;
