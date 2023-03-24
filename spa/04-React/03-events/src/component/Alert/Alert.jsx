import './Alert.scss';

export default function Alert({ message, name }) {
  function handleClick() {
    alert(message);
  }

  return (
    <div className="alert">
      <button onClick={handleClick}>Alert!</button>
    </div>
  );
}
