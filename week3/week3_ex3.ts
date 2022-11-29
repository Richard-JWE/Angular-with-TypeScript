/*Video 3*/

interface Hotel { 
    checkAvailability(rooms: number, occupied: number): boolean;
}

class Booking implements Hotel { 
    checkAvailability(rooms, occupied): boolean { 
        if (rooms > occupied) { 
            return true;
        }
        return false;
    }
}

let booking = new Booking();

if (booking.checkAvailability(50, 40)) {
    console.log("Rooms available");
} else { 
    console.log("No rooms available");
}

