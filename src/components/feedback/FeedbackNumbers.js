export default function CountFeedback({ options }) {
  return (
    <>
      {Object.keys(options).map(option => (
        <p key={option} style={{ textTransform: 'capitalize' }}>
          {option}: {options[option]}
        </p>
      ))}
    </>
  );
}
