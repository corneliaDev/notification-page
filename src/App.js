import { useState } from "react";

const notifications = [
  {
    id: 1,
    name: "Mark Webber",
    image: "./images/avatar-mark-webber.webp",
    notification: "reacted to your recent post ",
    linkedContent: "My first tournament today!",
    read: false,
    status: "1m ago",
  },
  {
    id: 2,
    name: "Angela Gray",
    image: "./images/avatar-angela-gray.webp",
    notification: "followed you",
    linkedContent: "",
    read: false,
    status: "5m ago",
  },
  {
    id: 3,
    name: "Jacob Thompson",
    image: "./images/avatar-jacob-thompson.webp",
    notification: "has joined your group",
    linkedContent: "Chess Club",
    read: false,
    status: "1 day ago",
  },
  {
    id: 4,
    name: "Rizky Hasanuddin",
    image: "./images/avatar-rizky-hasanuddin.webp",
    notification: "sent you a private message",
    linkedContent: "",
    privatMessage:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    status: "5 days ago",
    read: true,
  },
  {
    id: 5,
    name: "Kimberly Smith",
    image: "./images/avatar-kimberly-smith.webp",
    notification: "commented on your picture",
    linkedContent: "",
    pictureComment: "./images/image-chess.webp",
    read: true,
    status: "1 week ago",
  },
  {
    id: 6,
    name: "Nathan Peterson",
    image: "./images/avatar-nathan-peterson.webp",
    notification: "reacted to your recent post",
    linkedContent: "5 end-game strategies to increase your win rate",
    read: true,
    status: "2 weeks ago",
  },
  {
    id: 7,
    name: "Anna Kim",
    image: "./images/avatar-anna-kim.webp",
    notification: "left the group",
    linkedContent: "Chess Club",
    read: true,
    status: "2 weeks ago",
  },
];

function App() {
  const [friends, setFriends] = useState(notifications);
  const [unreadNotifcations, setUnreadNotifications] = useState(3);

  function handleMarkAsRead(friends) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.read === false ? { ...friend, read: true } : friend
      )
    );
    setUnreadNotifications(0);
  }

  return (
    <div className="app">
      <Header
        onSetRead={handleMarkAsRead}
        unreadNotifcations={unreadNotifcations}
      />
      <FriendsList notifications={friends} />
      <Attribution />
    </div>
  );
}

function Header({ unreadNotifcations, onSetRead }) {
  return (
    <header className="app-header">
      <h3>Notifications </h3>
      <div className="unread">{unreadNotifcations}</div>
      <div className="link" onClick={onSetRead}>
        <a href="#" aria-label="link to mark the notifications as read">
          Mark all as read
        </a>
      </div>
    </header>
  );
}

function FriendsList({ friends, notifications, setRead }) {
  return (
    <ul className="friendslist">
      {notifications.map((friend) => (
        <Friend friend={friend} key={friend.id} setRead={setRead} />
      ))}
    </ul>
  );
}

function Friend({ friend, setRead }) {
  return (
    <li className={!friend.read ? "friend active" : "friend"}>
      <div className="friend_img">
        <img alt={friend.name} src={friend.image} loading="lazy"></img>
      </div>
      <div className="friend_notification">
        <div className="friend_comment">
          <strong className="friend_name">{friend.name}</strong>{" "}
          <span>{friend.notification}</span>
          <a
            href="#"
            aria-label="link to content in the comments"
            className={
              friend.linkedContent === "Chess Club"
                ? "friend_comment-linked friend_comment-linked--chess"
                : "friend_comment-linked"
            }
          >
            {" "}
            {friend.linkedContent}
          </a>
          {!friend.read && <span className="active--dot"></span>}
        </div>
        <p className="friend_comment--status">{friend.status}</p>
        {friend.privatMessage && (
          <p className="privat_message">{friend.privatMessage}</p>
        )}
      </div>
      {friend.pictureComment && (
        <div className="friend_comment--img">
          <img src={friend.pictureComment} alt={friend.pictureComment}></img>
        </div>
      )}
    </li>
  );
}

function Attribution() {
  return (
    <div className="attribution">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        rel="noreferrer"
        target="_blank"
        aria-label="link to front end mentor"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="#" aria-label="coded by link">
        Cornelia
      </a>
      .
    </div>
  );
}

export default App;
