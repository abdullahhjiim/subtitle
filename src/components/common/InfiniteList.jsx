"use client";
import { useEffect, useState } from "react";
import CardSingle from "../card/CardSingle";

const cards = [
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 1",
      subtitle: "Subtitle 1",
      author: "Author 1",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 2",
      subtitle: "Subtitle 2",
      author: "Author 2",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 1",
      subtitle: "Subtitle 1",
      author: "Author 1",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 2",
      subtitle: "Subtitle 2",
      author: "Author 2",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 1",
      subtitle: "Subtitle 1",
      author: "Author 1",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 2",
      subtitle: "Subtitle 2",
      author: "Author 2",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 1",
      subtitle: "Subtitle 1",
      author: "Author 1",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 1",
      subtitle: "Subtitle 1",
      author: "Author 1",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 2",
      subtitle: "Subtitle 2",
      author: "Author 2",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 1",
      subtitle: "Subtitle 1",
      author: "Author 1",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 2",
      subtitle: "Subtitle 2",
      author: "Author 2",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 1",
      subtitle: "Subtitle 1",
      author: "Author 1",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 2",
      subtitle: "Subtitle 2",
      author: "Author 2",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 1",
      subtitle: "Subtitle 1",
      author: "Author 1",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 1",
      subtitle: "Subtitle 1",
      author: "Author 1",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 2",
      subtitle: "Subtitle 2",
      author: "Author 2",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 1",
      subtitle: "Subtitle 1",
      author: "Author 1",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 2",
      subtitle: "Subtitle 2",
      author: "Author 2",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 1",
      subtitle: "Subtitle 1",
      author: "Author 1",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 2",
      subtitle: "Subtitle 2",
      author: "Author 2",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 1",
      subtitle: "Subtitle 1",
      author: "Author 1",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 1",
      subtitle: "Subtitle 1",
      author: "Author 1",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 2",
      subtitle: "Subtitle 2",
      author: "Author 2",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 1",
      subtitle: "Subtitle 1",
      author: "Author 1",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 2",
      subtitle: "Subtitle 2",
      author: "Author 2",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 1",
      subtitle: "Subtitle 1",
      author: "Author 1",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 2",
      subtitle: "Subtitle 2",
      author: "Author 2",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
    {
      photo: "https://via.placeholder.com/100",
      title: "Card Title 1",
      subtitle: "Subtitle 1",
      author: "Author 1",
      authorPhoto: "https://via.placeholder.com/50",
      buttonLabel: "Download",
      buttonLink: "#",
    },
  ];


const InfiniteList = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [notificationLoading, setNotificationLoading] = useState(false);
  const [allFilter, setAllFilter] = useState("active");

  const limit = 10;
  const getNotifications = (offsetData = 1, filter = true) => {
    if (offsetData == 1) {
      setLoading(true);
    }

    let url = `/notifications?limit=${limit}&page=${offsetData}`;
    if (!filter) {
      url = url + `&unread_only=true`;
    }

    authAxios
      .get(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        let cloneData = offsetData > 1 ? [...data] : [];
        setData([...cloneData, ...res?.data?.data]);
        setLoading(false);

        if (res?.data?.meta?.current_page == res?.data?.meta?.last_page) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    // getNotifications(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = () => {
    if (hasMore) {
      let newOffset = offset + 1;
      setOffset(newOffset);
      getNotifications(newOffset, true);
    }
  };
  return (
    <div className="">
      {/* <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p style={{ textAlign: "center" }}>Loading...</p>}
        endMessage={""}
      >
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => _handleNotification(url, item)}
              ></li>
            );
          })}
        {data?.length == 0 && <li>No Record Found</li>}
      </InfiniteScroll> */}

      {cards.map((card, index) => (
        <CardSingle
          key={index}
          photo={card.photo}
          title={card.title}
          subtitle={card.subtitle}
          author={card.author}
          authorPhoto={card.authorPhoto}
          buttonLabel={card.buttonLabel}
          buttonLink={card.buttonLink}
        />
      ))}
    </div>
  );
};

export default InfiniteList;
