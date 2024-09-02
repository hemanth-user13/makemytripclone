import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black p-8">
      <div className="container mx-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Why MakeMyTrip?</h4>
            <p className="text-xs">
              Established in 2000, MakeMyTrip has since positioned itself as one
              of the leading companies, providing great offers, competitive
              airfares, exclusive discounts, and a seamless online booking
              experience to many of its customers. The experience of booking
              your flight tickets, hotel stay, and holiday package through our
              desktop site or mobile app can be done with complete ease and no
              hassles at all. We also deliver amazing offers, such as Instant
              Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and many
              more while updating them from time to time to better suit our
              customers’ evolving needs and demands.
            </p>
          </div>

          {/* Booking Flights with MakeMyTrip */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Booking Flights with MakeMyTrip
            </h4>
            <p className="text-xs">
              At MakeMyTrip, you can find the best deals and cheap air tickets
              to any place you want by booking your tickets on our website or
              app. Being India’s leading website for hotel, flight, and holiday
              bookings, MakeMyTrip helps you book flight tickets that are
              affordable and customized to your convenience. With customer
              satisfaction being our ultimate goal, we also have a 24/7
              dedicated helpline to cater to our customers’ queries and
              concerns. Serving over 5 million happy customers, we at MakeMyTrip
              are glad to fulfill the dreams of folks who need a quick and easy
              means to find air tickets. You can get a hold of the cheapest
              flight of your choice today while also enjoying the other
              available options for your travel needs with us.
            </p>
          </div>

          {/* Domestic Flights with MakeMyTrip */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Domestic Flights with MakeMyTrip
            </h4>
            <p className="text-xs ">
              MakeMyTrip is India's leading player for flight bookings. With the
              cheapest fare guarantee, experience great value at the lowest
              price. Instant notifications ensure current flight status, instant
              fare drops, amazing discounts, instant refunds and rebook options,
              price comparisons, and many more interesting features.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
