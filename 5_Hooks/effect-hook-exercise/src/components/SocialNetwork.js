import './styles.css';
import { useState, useEffect } from 'react';
import { getData } from './mockBackendNetwork/fetch';

export function SocialNetworkCombined() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Promise.all([getData('/menu'), getData('/news-feed'), getData('/friends')]).then(
      ([menuResponse, newsFeedResponse, friendsResponse]) => {
        setData({
          menu: menuResponse.data,
          newsFeed: newsFeedResponse.data,
          friends: friendsResponse.data
        });
      }
    );
  }, []);

  return (
    <div className='App'>
      <h1>My Network (Combined Hooks)</h1>
      {!data || !data.menu ? <p>Loading..</p> : (
        <nav>
          {data.menu.map((menuItem) => (
            <button key={menuItem}>{menuItem}</button>
          ))}
        </nav>
      )}
      <div className='content'>
        {!data || !data.newsFeed ? <p>Loading..</p> : (
          <section>
            {data.newsFeed.map(({ id, title, message, imgSrc }) => (
              <article key={id}>
                <h3>{title}</h3>
                <p>{message}</p>
                <img src={imgSrc} alt='' />
              </article>
            ))}
          </section>
        )}
        {!data || !data.friends ? <p>Loading..</p> : (
          <aside>
            <ul>
              {data.friends
                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                .map(({ id, name, isOnline }) => (
                  <li key={id} className={isOnline ? 'online' : 'offline'}>
                    {name}
                  </li>
                ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}
///////////////////////////////////////////////////////////////////////////////
export function SocialNetworkSeparate() {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    getData('/menu').then((response) => {
      setMenu(response.data);
    });
  }, []);

  const [newsFeed, setNewsFeed] = useState(null);
  useEffect(() => {
    getData('/news-feed').then((response) => {
      setNewsFeed(response.data);
    });
  }, []);

  const [friends, setFriends] = useState(null);
  useEffect(() => {
    getData('/friends').then((response) => {
      setFriends(response.data);
    });
  }, []);

  return (
    <div className='App'>
      <h1>My Network (Separate Hooks)</h1>
      {!menu ? <p>Loading..</p> : (
        <nav>
          {menu.map((menuItem) => (
            <button key={menuItem}>{menuItem}</button>
          ))}
        </nav>
      )}
      <div className='content'>
        {!newsFeed ? <p>Loading..</p> : (
          <section>
            {newsFeed.map(({ id, title, message, imgSrc }) => (
              <article key={id}>
                <h3>{title}</h3>
                <p>{message}</p>
                <img src={imgSrc} alt='' />
              </article>
            ))}
          </section>
        )}
        {!friends ? <p>Loading..</p> : (
          <aside>
            <ul>
              {friends
                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                .map(({ id, name, isOnline }) => (
                  <li key={id} className={isOnline ? 'online' : 'offline'}>
                    {name}
                  </li>
                ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}