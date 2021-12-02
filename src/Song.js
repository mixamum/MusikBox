export default function Song(props) {
  const { song } = props;

  return (
    <div class="panel" id="repo-panel">
      <ul>
        <li>
          <p>{song.title}</p>
          <p>{song.genre}</p>
          <p>{song.artist}</p>
          <p>{song.year}</p>
        </li>
      </ul>
      {/* <a href="https://github.com/twodee/fiction">twodee/fiction</a>
        <p>This repository does not exist.</p> */}
    </div>
  );
}
