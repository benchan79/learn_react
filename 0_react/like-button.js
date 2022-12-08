'use strict';

function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return "You liked this!";
  }

  //   return React.createElement(
  //     'button',
  //     {
  //       onClick: () => setLiked(true),
  //     },
  //     'Like'
  //   );

  return <button onClick={() => setLiked(true)}>Like</button>;
}

function LikeButton2() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return "You liked another one!";
  }

  return <button onClick={() => setLiked(true)}>Like</button>;
}

const rootNode = document.getElementById('like-button-root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));

const anotherRootNode = document.getElementById('another-root');
const anotherRoot = ReactDOM.createRoot(anotherRootNode);
anotherRoot.render(React.createElement(LikeButton2));
