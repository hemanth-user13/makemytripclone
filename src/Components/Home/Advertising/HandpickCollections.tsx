import React from "react";
import Carousel from "../../Helpers/Curosel";

const data = [
  {
    id: 1,
    img: "https://hblimg.mmtcdn.com/content/hubble/img/delhi_hotels_tiow/mmt/activities/m_Le%20ROI%20Floating%20Huts_Eco%20Rooms_Tehri_Uttarakhand_l_550_821.jpg?im=Resize=(400,462)",
    about: "Le ROI Floating Huts in Tehri, Uttarakhand",
    toplevel: "one",
  },
  {
    id: 2,
    img: "https://hblimg.mmtcdn.com//content/hubble/img/alleppey/mmt/destination/m_destination-alleppey-landscape_l_400_640.jpg?im=Resize=(400,462)",
    about: "Radisson Blu Hotel, A luxury experience",
    toplevel: "one",
  },
  {
    id: 3,
    img: "https://hblimg.mmtcdn.com/content/hubble/img/bangalore_hotel_tiow/mmt/activities/m_Waterwoods%20Lodges%20&%20Resorts_Kabini_l_550_821.jpg?im=Resize=(400,462)",
    about: "Waterwoods Lodges & Resorts, Kabini",
    toplevel: "one",
  },
  {
    id: 4,
    img: "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_beach44_p_540_417.jpg?im=Resize=(400,462)",
    about: "Beachside Retreat",
    toplevel: "one",
  },
  {
    id: 5,
    img: "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_weekend44_p_540_417.jpg?im=Resize=(400,462)",
    about: "Weekend Getaway",
    toplevel: "one",
  },
  {
    id: 6,
    img: "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_hill_stations11_p_540_417.jpg?im=Resize=(400,462)",
    about: "Hill Stations",
    toplevel: "one",
  },
  {
    id: 7,
    img: "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_pilgrimage44_p_540_417.jpg?im=Resize=(400,462)",
    about: "Destination Australia",
    toplevel: "one",
  },
  {
    id: 8,
    img: "https://hblimg.mmtcdn.com//content/hubble/img/amritsar/mmt/destination/m_Amritsar_activity_heritage_l_684_1026.jpg?im=Resize=(400,462)",
    about: "Heritage Tour in Amritsar",
    toplevel: "one",
  },
  {
    id: 9,
    img: "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_pilgrimage44_p_540_417.jpg?im=Resize=(400,462)",
    about: "Pilgrimage Sites",
    toplevel: "one",
  },
  {
    id: 10,
    img: "https://hblimg.mmtcdn.com//content/hubble/img/alleppey/mmt/destination/m_destination-alleppey-landscape_l_400_640.jpg?im=Resize=(400,462)",
    about: "Scenic Alleppey",
    toplevel: "one",
  },
];

const WondersofIndia = () => {
  const items = data.map((item) => ({
    id: item.id,
    image: item.img,
    description: `${item.toplevel}: ${item.about}`,
  }));

  return (
    <div className="p-4">
      <Carousel title="Handpicked Collections for You" items={items} />
    </div>
  );
};

export default WondersofIndia;
