export default function HelloUser({ username, textcolor }) {
  // let styles = {color : textcolor};
  return (
    <>
      <h1 style={{ color: textcolor }}>Hello, {username} have a good Day!</h1>
    </>
  );
}
