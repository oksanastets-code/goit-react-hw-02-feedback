// {
//         "id": 1,
//         "type": "good"
//     }
export default function ControlItem({ buttons, onIncrement }) {
  return (
    <>
      {buttons.map(button => (
        <button
          key={button.id}
          type="button"
          onClick={() => onIncrement(button.type)}
          style={{ textTransform: 'capitalize' }}
        >
          {button.type}
        </button>
      ))}
    </>
  );
}
