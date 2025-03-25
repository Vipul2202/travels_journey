export interface Flight {
  id: number;
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  seats: number;
  stops: number;
  amenities: string[];
}

export interface Deal {
  id: number;
  title: string;
  description: string;
  discount: number;
  validUntil: string;
}

export interface BookingDetails {
  passengerName: string;
  email: string;
  phone: string;
  passengers: number;
}